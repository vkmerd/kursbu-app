"use client"
import Link from "next/link";
import { educationNavigation, navigation } from "./components/Navigation";
import { useState } from "react";



export default function Header(){
    const [mobileMenu, setMobileMenu] = useState(false)
    return(
        <>
            <div className={`absolute left-0 top-0 right-0 bottom-0 z-10 flex transition-transform duration-300 bg-[#2d2f31cc] z-50 ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="px-[25px] py-[120px] bg-[#fff] w-3/4 h-full">
                  <ul className="flex flex-col mt-5 gap-[10px] overflow-y-scroll">
                      <Link href="/oturum-ac" className="py-1 text-[15px] text-black hover:opacity-50 transition duration-300">+ Oturum Aç</Link>
                      <Link href="/kayit-ol" className="py-1 text-[15px] text-black hover:opacity-50 transition duration-300">+ Kayıt Ol</Link>

                      <hr />
                      <Link href="/bir-egitmen-bul" className="py-1 text-[15px] text-black hover:opacity-50 transition duration-300">+ Bir Eğitmen Bul</Link>
                      <hr />
                      <h3 className="text-xl font-bold mt-[10px]">En Popüler</h3>
                      {
                        educationNavigation.map((educationTitle,index) => (
                            <li key={index} className="py-1 text-[15px] text-black hover:opacity-50 transition duration-300">
                               {educationTitle.link} 
                            </li>
                        ))
                      }
                      <h3 className="text-xl font-bold">Diğer Hizmetler</h3>
                      <Link href="/bir-egitmen-bul" className="py-1 text-[15px] text-black hover:opacity-50 transition duration-300">Blog</Link>
                      <Link href="/bir-egitmen-bul" className="py-1 text-[15px] text-black hover:opacity-50 transition duration-300">Arkadaşını davet et</Link>
                      <Link href="/bir-egitmen-bul" className="py-1 text-[15px] text-black hover:opacity-50 transition duration-300">Yardım ve Destek</Link>
                  </ul>
                </div>
                <button className="w-[40px] h-[40px] text-white bg-[#000] text-xl rounded-full ml-[25px] mt-[120px]" onClick={() => setMobileMenu(false)}>X</button>
            </div>
            <div className="w-full bg-[#5022c3] py-3 px-1 lg:px-0">
                <p className="text-md text-white text-center"><b>Zamana ayak uydurmaya hazır mısın?</b> / Kursbu ile yetkinlikler edinin!</p>
            </div>
        <header className="w-full z-50 shadow-xl bg-white flex justify-center py-[15px]">
           
            <nav className="w-4/5 flex justify-between items-center">
                <Link href="/" className="block">
                    <div>
                        <img src="/kursbu-logo.webp" alt="logo" className="w-[200px] lg:w-full"  />
                    </div>
                </Link>
                <div className="w-full flex">
                    <div className="w-3/5 relative">
                        <input 
                                type="text" 
                                className="w-full border-2 border-black rounded-md px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="Dilediğin Kursu Arat" 
                            />
                            <svg height="25" viewBox="0 0 32 32" width="25" xmlns="http://www.w3.org/2000/svg" className="absolute top-[25%] left-[10px]"><g id="search" fill-rule="evenodd"><path d="m23 1h-14a8 8 0 0 0 -8 8v14a8 8 0 0 0 8 8h14a1 1 0 0 0 0-2h-14a6 6 0 0 1 -6-6v-14a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v14a1 1 0 0 0 2 0v-14a8 8 0 0 0 -8-8z"/><path d="m21.983 20.568a9.17 9.17 0 1 0 -1.415 1.415l8.725 8.724a1 1 0 1 0 1.414-1.414zm-7.15 1.432a7.167 7.167 0 1 1 7.167-7.167 7.17 7.17 0 0 1 -7.167 7.167z"/></g></svg>
                    </div>

                    <ul className="flex items-center hidden lg:flex">
                        {navigation.map((navigations) => (
                            <li key={navigations.navid} className="px-[15px] text-[15px] flex items-center hover:opacity-50 transition duration-300">
                                {navigations.icon}
                                {navigations.link}
                            </li>
                        ))}
                        <button className="bg-[#234DD4] py-[10px] px-[15px] ml-[15px] text-white rounded-[20px] hover:bg-[#ffc44d] transition duration-300">+ Özel Ders Ver!</button>
                    </ul>
                    <div className="open-side-mobil-menu block lg:hidden" onClick={() => setMobileMenu(true)}>
                        <svg id="bold" enable-background="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm4 17h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1z"/></svg>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}