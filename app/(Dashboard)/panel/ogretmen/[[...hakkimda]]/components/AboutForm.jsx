"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AboutForm({ teacherPage }) {
  const {session} = useSession();
    const [districts, setDistricts] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedLessonText, setSelectedLessonText] = useState("");
    const [selectedCity, setSelectedCity] = useState(teacherPage ? teacherPage.teacher_city : "");
    const [formData, setFormData] = useState({
      teacher_professional_title: teacherPage?.teacher_professional_title || "",
      teacher_lessons: teacherPage?.teacher_lessons || "",
      services_lessons: teacherPage?.services_lessons || "",
      city: teacherPage?.teacher_city || "",
      district: teacherPage?.teacher_district || "",
      teacher_experience: teacherPage?.teacher_experience || "",
      teacher_private_lesson_process: teacherPage?.teacher_private_lesson_topic || "",
      teacher_private_price: teacherPage?.teacher_lessons_price || "",
      teacher_about: teacherPage?.teacher_about || "",
      lesson_category_text: "",
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
  
    const handleAboutTeacherForm = async (e) => {
      e.preventDefault();
      const handleAboutTeacherFormData = Object.fromEntries(new FormData(e.target));
  
      try {
        const aboutTeacherFormRequest = await fetch("/api/teacher/teacher-about", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            ...handleAboutTeacherFormData, 
            lesson_category_text: selectedLessonText,
            photos: session.user.photo 
          }),
        });
  
        if (!aboutTeacherFormRequest.ok) {
          toast.error("İlan Kaydedilemedi")
        } else {
          const result = await aboutTeacherFormRequest.json();
          toast.success(`${result.message}`);
        }
      } catch (error) {
        console.error('Error during form submission:', error);
      }
    };
  
    const handleLessonChange = (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      setFormData({ 
        ...formData, 
        services_lessons: e.target.value,
        lesson_category_text: selectedOption.text
      });
      setSelectedLessonText(selectedOption.text); 
    };

    useEffect(() => {
      const fetchTeacherPageData = async () => {
        try {
          const res = await fetch('/api/teacher/teacher-about'); 
          const data = await res.json();
         const teacherPage = data.teacherPage
          console.log(teacherPage);
          
          if (data.teacherPage) {
            setFormData({
              teacher_professional_title: data.teacherPage.teacher_professional_title || "",
              teacher_lessons: data.teacherPage.teacher_lessons || "",
              services_lessons: data.teacherPage.service_lessons || "",
              city: data.teacherPage.teacher_city || "",
              district: data.teacherPage.teacher_district || "",
              teacher_experience: data.teacherPage.teacher_experience || "",
              teacher_private_lesson_process: data.teacherPage.teacher_private_lesson_topic || "",
              teacher_private_price: data.teacherPage.teacher_lessons_price || "",
              teacher_about: data.teacherPage.teacher_about || "",
              lesson_category_text: data.teacherPage.teacher_lesson_category_text || "",
            });
          }
        } catch (error) {
          console.error("Error fetching teacher data:", error);
        }
      };
    
      fetchTeacherPageData();
    }, []);
    
  return (
    <form onSubmit={handleAboutTeacherForm} className="grid grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Mesleki Ünvanınız:</label>
        <input
          type="text"
          name="teacher_professional_title"
          value={formData.teacher_professional_title}
          onChange={(e) => setFormData({ ...formData, teacher_professional_title: e.target.value })}
          placeholder="Mesleki Ünvanınız"
          className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Verdiğiniz Dersler:</label>
        <input
          type="text"
          name="teacher_lessons"
          value={formData.teacher_lessons}
          onChange={(e) => setFormData({ ...formData, teacher_lessons: e.target.value })}
          placeholder="Verdiğiniz Dersler"
          className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Vermek İstediğiniz Ders:</label>
        <select
          name="services_lessons"
          value={formData.lesson_category_text}
          onChange={handleLessonChange}
          className="max-h-[300px] overflow-y-scroll px-3 py-3"
        >
          <option value="mat">Matematik</option>
          <option value="fizik">Fizik</option>
          <option value="kimya">Kimya</option>
          <option value="biyoloji">Biyoloji</option>
          <option value="tarih">Tarih</option>
          <option value="cografya">Coğrafya</option>
          <option value="felsefe">Felsefe</option>
          <option value="saglik_psikoloji">Sağlık ve Psikolojik Destek</option>
          <option value="uni_secimi">Üniversite ve Bölüm Seçimi</option>
          <option value="kariyer_danismanligi">Kariyer Danışmanlığı</option>
          <option value="staj_is_basvuru">Staj ve İş Başvurusu Rehberliği</option>
          <option value="cv_hazirlama">CV Hazırlama</option>
          <option value="zaman_yonetimi">Zaman Yönetimi</option>
          <option value="liderlik">Liderlik</option>
          <option value="problem_cozme">Problem Çözme Becerileri</option>
          <option value="psikolojik_danismanlik">Psikolojik Danışmanlık</option>
          <option value="saglikli_beslenme">Sağlıklı Beslenme</option>
          <option value="fiziksel_saglik">Fiziksel Sağlık</option>
          <option value="muzik">Müzik</option>
          <option value="gitar">Gitar</option>
          <option value="piyano">Piyano</option>
          <option value="keman">Keman</option>
          <option value="baglama">Bağlama</option>
          <option value="resim">Resim</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Ders verdiğiniz şehir:</label>
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

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Hizmet verdiğiniz şehir:</label>
        <select
          name="district"
          value={formData.district}
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

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Tecrübeleriniz:</label>
        <input
          type="text"
          name="teacher_experience"
          value={formData.teacher_experience}
          onChange={(e) => setFormData({ ...formData, teacher_experience: e.target.value })}
          placeholder="Tecrübeleriniz"
          className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Özel Ders Konusu:</label>
        <input
          type="text"
          name="teacher_private_lesson_process"
          value={formData.teacher_private_lesson_process}
          onChange={(e) => setFormData({ ...formData, teacher_private_lesson_process: e.target.value })}
          placeholder="Özel Ders İşleyişinizi Anlatınız"
          className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-3 font-semibold">Ders Fiyatı:</label>
        <input
          type="text"
          name="teacher_private_price"
          value={formData.teacher_private_price}
          onChange={(e) => setFormData({ ...formData, teacher_private_price: e.target.value })}
          placeholder="Ders Fiyatı"
          className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
        />
      </div>

      <div className="col-span-2 flex flex-col">
        <label className="text-lg mb-3 font-semibold">Kendinizi Tanıtınız:</label>
        <textarea
          name="teacher_about"
          value={formData.teacher_about}
          onChange={(e) => setFormData({ ...formData, teacher_about: e.target.value })}
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