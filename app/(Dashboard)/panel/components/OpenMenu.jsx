"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function OpenMenu(){
    const [menuOpen, setMenuOpen] = useState(false);
    const {data:session} = useSession();

    return(
        <>
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
        </div>
      )}
    </div>
  )}
        </>
    )
}