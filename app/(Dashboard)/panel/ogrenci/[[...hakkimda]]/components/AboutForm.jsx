"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AboutForm({ studentPage }) {
  const {data:session} = useSession();
    const [districts, setDistricts] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedLessonText, setSelectedLessonText] = useState("");
    const [selectedCity, setSelectedCity] = useState(studentPage ? studentPage.teacher_city : "");
    const [formData, setFormData] = useState({
      city: studentPage?.teacher_city || "",
    });


    useEffect(() => {
      const fetchCitiesAndDistricts = async () => {
        const response = await fetch("https://turkiyeapi.dev/api/v1/provinces");
        const data = await response.json();
        setCities(data.data);
      };
      fetchCitiesAndDistricts();
    }, []);
  
    useEffect(() => {
      if (selectedCity) {
        const selectedCityData = cities.find(city => city.name === selectedCity);
        if (selectedCityData) {
          setDistricts(selectedCityData.districts);
        }
      }
    }, [selectedCity, cities]);
  
    const handleAboutStudentForm = async (e) => {
      e.preventDefault();
      const handleAboutStudentFormData = Object.fromEntries(new FormData(e.target));
      console.log(handleAboutStudentFormData)
      
      try {
        const aboutStudentFormRequest = await fetch("/api/student/student-about", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            ...handleAboutStudentFormData, 
            photos: session.user.photo,
            name: session.user.name,
            surname: session.user.surname,
          }),
        });
  
        if (!aboutStudentFormRequest.ok) {
          toast.error("İlan Kaydedilemedi")
        } else {
          const result = await aboutStudentFormRequest.json();
          toast.success(`${result.message}`);
        }
      } catch (error) {
        console.error('Error during form submission:', error);
      }
    };
  
    
  return (
    <form onSubmit={handleAboutStudentForm} className="grid grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Adınız Soyadınız:</label>
        <input
          type="text"
          name="student_title"
          placeholder="Mesleki Ünvanınız"
          className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Yaşadığınız şehir:</label>
        <select
          name="city"
          value={formData.city}
          className="max-h-[300px] overflow-y-scroll px-3 py-3"
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setFormData({ ...formData, city: e.target.value });
          }}
        >
          <option value="">Şehir Seçin</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-2 flex flex-col">
        <label className="text-lg mb-3 font-semibold">Yaşadığınız ilçe:</label>
        <select
          name="district"
          className="max-h-[300px] overflow-y-scroll px-3 py-3"
          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
        >
          <option value="">İlçe Seçin</option>
          {districts.map((district, index) => (
            <option key={index} value={district.name}>
              {district.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-2 flex flex-col">
        <label className="text-lg mb-3 font-semibold">Kendinizi Tanıtınız:</label>
        <textarea
          name="student_about"
          placeholder="Hakkımda Yazısı Giriniz"
          className="h-[350px] p-3 border border-slate-2 border-[#000]"
        />
      </div>

      <button
        type="submit"
        className="mt-[10px] bg-black text-white py-3 px-9 rounded-md hover:bg-white hover:text-black hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Kaydet
      </button>
    </form>
  );
}