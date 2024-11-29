"use client"
import Link from "next/link";
import { educationNavigation, navigation } from "./components/Navigation";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/router";



export default function Header(){
    const [mobileMenu, setMobileMenu] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);

    const {data:session} = useSession();
    // const [isMounted, setIsMounted] = useState(false);
    // const router = useRouter();
    console.log(session);

    // useEffect(() => {
    //   setIsMounted(true); 
    // }, []);

    // const handleDashboardRedirect = () => {
    //     if(session?.user?.role === "STUDENT"){
    //         router.push("/panel/ogrenci")
    //     }
    //     else if(session?.user?.role === "TEACHER"){
    //         router.push("/panel/ogretmen")
    //     }
    // }

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

                <ul className="flex items-center hidden lg:flex">
  {navigation.map((navigations) => (
    <li
      key={navigations.navid}
      className="px-[15px] text-[15px] flex items-center hover:opacity-50 transition duration-300"
    >
      {navigations.icon}
      {navigations.link}
    </li>
  ))}

  <button className="bg-[#234DD4] py-[10px] px-[15px] ml-[15px] text-white rounded-[20px] hover:bg-[#ffc44d] transition duration-300">
    + Özel Ders Ver!
  </button>
  {session?.user?.photo && (
    <div className="relative ml-4">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={session.user.photo}
          alt="Kullanıcı Fotoğrafı"
          className="w-[50px] h-[50px] rounded-full"
        />
        <p>Hoş geldin, {session?.user?.name}!</p>
        <svg
  className="w-6 h-6 ml-1 transform rotate-180 "
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M5 15l7-7 7 7"
  />
</svg>

      </div>

      {menuOpen && (
        <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-lg p-4 w-full">
        
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center bg-white text-md py-2 px-4 w-full text-center block mb-2"
          >
             <svg className="w-[35px] h-[35px] mr-3">
                <use href="#signout" />
            </svg>
            Çıkış Yap
          </button>
          <Link href={session?.user?.role === "STUDENT" ? "/panel/ogrenci" : "/panel/ogretmen"} className="flex items-center bg-white text-md py-2 px-4 w-full text-center block">
          <svg className="w-[35px] h-[35px] mr-3">
                <use href="#dashboard" />
            </svg>

              Dashboard
          </Link>
        </div>
      )}
    </div>
  )}
</ul>

                    <div className="open-side-mobil-menu block lg:hidden" onClick={() => setMobileMenu(true)}>
                        <svg id="bold" enable-background="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm4 17h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1z"/></svg>
                    </div>
            </nav>
        </header>
        </>
    )
}