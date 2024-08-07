"use client";
import { useState } from "react";

export default function Register() {
  const [fileName, setFileName] = useState('Resminizi Yükleyiniz');
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({});
  const [data,setData] = useState({})
  

  const handlePhotoChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFormData((prevState) => ({
        ...prevState,
        photo: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('Resminizi Yükleyiniz');
      setPreview(null);
      setFormData((prevState) => ({
        ...prevState,
        photo: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerFormData = Object.fromEntries(new FormData(e.target))
  };

  return (
    <>
    <div className="w-full h-screen bg-[#635fc7] flex justify-center items-center">
      <div className="w-[1320px] bg-white rounded-3xl p-[30px] flex flex-col items-center shadow-2xl sm:flex-row h-[60vh]">
        <div className="loginForm basis-3/5">
          <h2 className="text-2xl font-bold font-poppins">Kursbu App Platformuna Hoş Geldiniz!</h2>
          <div className="mt-[40px]">
            <h2 className="text-3xl">Kayıt Ol!</h2>
            <form onSubmit={handleSubmit} enctype="multipart/form-data" className="grid grid-cols-1 gap-3 mt-[20px] md:grid-cols-2 lg:grid-cols-3">
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Soyadınız"
                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail Adresiniz"
                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Şifreniz"
                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
                required
              />
              <select
                name="role"
                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
              >
                <option value="STUDENT">Öğrenci</option>
                <option value="TEACHER">Öğretmen</option>
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Telefon Numaranız"
                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
                required
              />
              <div className="w-full flex items-center">
                <input
                  type="file"
                  name="user_image"
                  id="user_image"
                  className="hidden"
                  onChange={handlePhotoChange}
                  required
                />
                <label
                  htmlFor="user_image"
                  className="flex items-center bg-white text-black py-2 px-4 rounded-md cursor-pointer transition duration-200 hover:bg-gray-200"
                >
                  <svg
                    id="Layer_1"
                    style={{ enableBackground: "new 0 0 24 24" }}
                    height="25"
                    viewBox="0 0 24 24"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" fill="#2f80ed" r="12" />
                    <g>
                      <g>
                        <path
                          d="m12 19c-.4 0-.7-.3-.7-.7v-6.6c0-.4.3-.7.7-.7.4 0 .7.3.7.7v6.6c0 .4-.3.7-.7.7z"
                          fill="#fff"
                        />
                      </g>
                      <g>
                        <path
                          d="m18.1 16.6c-.2 0-.4-.1-.6-.3-.2-.4-.1-.8.1-1 1-.7 1.3-1.8 1-3-.3-1-1.3-1.7-2.6-1.7h-.9c-.4 0-.7-.2-.7-.6-.5-1.8-2.1-3.2-4-3.5s-3.8.8-4.7 2.5-.7 3.8.7 5.3c.3.3.2.7-.1 1s-.7.2-1-.1c-1.7-1.9-2-4.7-.8-6.9s3.7-3.5 6.2-3.2c2.3.2 4.3 1.8 5.1 4h.3c1.9 0 3.5 1 4 2.7s-.1 3.6-1.6 4.7c-.2 0-.3.1-.4.1z"
                          fill="#fff"
                        />
                      </g>
                      <g>
                        <path
                          d="m9.6 14.1c-.2 0-.4-.1-.5-.2-.3-.3-.3-.7 0-1l2.4-2.4c.3-.3.7-.3 1 0l2.4 2.4c.3.3.3.7 0 1s-.7.3-1 0l-1.9-1.9-1.8 1.8c-.2.2-.4.3-.6.3z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                  <p className="text-md ml-[20px]">{fileName}</p>
                </label>
              </div>
              <button
                type="submit"
                className="w-full mt-[10px] bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Kayıt Ol
              </button>
            </form>
          </div>
        </div>
        <div className="loginImage basis-2/5">
          <div className="flex justify-center items-center h-full">
            <img src="/checklist.jpg" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}