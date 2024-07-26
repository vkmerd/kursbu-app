"use client"
import Link from "next/link";
import { educationNavigation, navigation } from "./components/Navigation";
import { useState } from "react";



export default function Header(){
    const [mobileMenu, setMobileMenu] = useState(false)
    return(
        <>
            <div className={`fixed left-0 top-0 right-0 bottom-0 z-10 flex transition-transform duration-300 bg-[#2d2f31cc] ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="px-[25px] py-[50px] bg-[#fff] w-3/4 h-full">
                <Link href="/" >
                    <div>
                        <img src="/kursbu-logo.webp" alt="logo" className="max-w-full"  />
                    </div>
                </Link>
                  <ul className="flex flex-col mt-5 gap-[10px] h-full overflow-y-scroll">
                      <Link href="/oturum-ac" className="py-2 text-[15px] text-black hover:opacity-50 transition duration-300">+ Oturum Aç</Link>
                      <Link href="/kayit-ol" className="py-2 text-[15px] text-black hover:opacity-50 transition duration-300">+ Kayıt Ol</Link>

                      <hr />
                      <Link href="/bir-egitmen-bul" className="py-2 text-[15px] text-black mb-[10px] hover:opacity-50 transition duration-300">+ Bir Eğitmen Bul</Link>
                      <hr />
                      {
                        educationNavigation.map((educationTitle,index) => (
                            <li key={index} className="py-2 text-[15px] text-black hover:opacity-50 transition duration-300">
                               {educationTitle.link} 
                            </li>
                        ))
                      }
                      <h3 className="text-xl font-bold">Diğer Hizmetler</h3>
                      <Link href="/bir-egitmen-bul" className="py-2 text-[15px] text-black mb-[10px] hover:opacity-50 transition duration-300">Blog</Link>
                      <Link href="/bir-egitmen-bul" className="py-2 text-[15px] text-black mb-[10px] hover:opacity-50 transition duration-300">Arkadaşını davet et</Link>
                      <Link href="/bir-egitmen-bul" className="py-2 text-[15px] text-black mb-[10px] hover:opacity-50 transition duration-300">Yardım ve Destek</Link>
                  </ul>
                </div>
                <button className="w-[40px] h-[40px] text-white bg-[#000] text-xl rounded-full ml-[30px] mt-[60px]" onClick={() => setMobileMenu(false)}>X</button>
            </div>
        <header className="w-full flex justify-center py-[15px]">
            <nav className="w-4/5 flex justify-between items-center">
                <Link href="/" className="block">
                    <div>
                        <img src="/kursbu-logo.webp" alt="logo" className="w-[200px] lg:w-full"  />
                    </div>
                </Link>
                <div className="flex">
                    <ul className="flex items-center hidden lg:flex">
                        {navigation.map((navigations) => (
                            <li key={navigations.navid} className="px-[15px] text-[15px] hover:opacity-50 transition duration-300">
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