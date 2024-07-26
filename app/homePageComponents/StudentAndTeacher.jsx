"use client"

import Link from "next/link"
import { GoogleIcon, UserIcon, Register } from "../components/Svgs"



export default function StudentAndTeacher(){
    return(
        <>
            <div className="w-full bg-[#f0f2ff] py-[60px] px-[20px] lg:px-0">
                <div className="max-w-[1320px] mx-auto">
                <h2 className="text-3xl text-left py-[35px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#ADD8E6] to-[#5B6AF5] lg:text-4xl">
                Kursbu platformunun tüm özellikleri ile tanışın:</h2>
                </div>
                <div className="max-w-[1320px] grid grid-cols-1 gap-[35px] mx-auto md:grid-cols-2">

                    <div className="bg-white rounded-[20px] py-[30px] px-[20px]">
                        <h2 className="text-3xl font-bold font-medium mt-[15px] md:text-4xl">Öğrenci</h2>
                        <p className="text-xl py-[15px]">Kendi Eğitmeninizi Bulun ve Özel Derslerle Birebir Eğitim Alın! </p>
                        <div className="flex mt-[20px] gap-[15px]">
                            <Link href="/giris-kayit" className="w-full py-[5px] px-[10px] text-xl text-white bg-[#0f24ea] flex justify-center items-center hover:bg-[#5e4cf7] transition duration-300">
                            Öğrenci Ol</Link>
                            <Link href="/giris-kayit">
                                <GoogleIcon />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="relative bg-white rounded-[20px] py-[30px] px-[20px]">
                        <h2 className="text-3xl font-medium mt-[15px] md:text-4xl">Öğretmen</h2>
                        <p className="text-xl py-[15px]">Kendi Derslerinizi Sunun ve Bağımsız Çalışma İmkanı Yakalayın!</p>
                        <div className="flex mt-[20px] gap-[15px]">
                        <Link href="/giris-kayit" className="w-full py-[5px] px-[10px] text-xl text-white bg-[#0f24ea] flex justify-center items-center hover:bg-[#5e4cf7] transition duration-300">
                        Öğretmen Ol</Link>
                            <Link href="/giris-kayit">
                                <GoogleIcon />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )   
}