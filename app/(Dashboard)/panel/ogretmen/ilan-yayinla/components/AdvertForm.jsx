"use client"

import { useEffect, useState } from "react";

export default function AdvertForm() {

    return (
        <>
            <form className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <label className="text-lg mb-3 font-semibold">İlan Başlığı:</label>
                    <input type="text" name="services_lessons" placeholder="Mesleki Ünvanınız" className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]" required />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg mb-3 font-semibold">İlan Kısa Açıklaması:</label>
                    <input type="text" name="services_lessons" placeholder="Verdiğiniz Dersler" className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]" required/>
                </div>  
                
                <div className="col-span-2 flex flex-col">
                    <label className="text-lg mb-3 font-semibold">Ders Süresi(Ortalama dakika veya saat):</label>
                    <input type="text" name="teacher_lessons_price" placeholder="Tecrübeleriniz"  className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]" required/>
                </div>
                <div className="col-span-2 flex flex-col">
                     <label className="text-lg mb-3 font-semibold">Özel Ders Konusu ve sürecin işleyişi:</label>
                    <input type="text" name="teacher_lessons_price" placeholder="Özel Ders İşleyişinizi Anlatınız" className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]" required/>
                </div>
                <div className="col-span-2 flex flex-col">
                     <label className="text-lg mb-3 font-semibold">İlan Hakkında Yazısı Girin:</label>
                    <textarea name="teacher_about" placeholder="İlan Hakkında Yazısı giriniz" className="h-[350px] p-3 border border-slate-2 border-[#000]" required/>
                </div>
                
                <button type="submit" className="mt-[10px] bg-black text-white py-3 px-9 rounded-md hover:bg-white hover:text-black hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">Yayınla</button>
            </form>
        </>
    );
}
