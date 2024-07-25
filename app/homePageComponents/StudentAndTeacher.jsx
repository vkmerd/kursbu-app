"use client"

import Link from "next/link"
import { GoogleIcon, UserIcon, Register } from "../components/Svgs"



export default function StudentAndTeacher(){
    return(
        <>
            <div className="w-full bg-[#f0f2ff] py-[60px]">
                <div className="max-w-[1320px] mx-auto">
                <h2 className="text-4xl text-left py-[35px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#ADD8E6] to-[#5B6AF5]">
                Kursbu platformunun tüm özellikleri ile tanışın:</h2>
                </div>
                <div className="max-w-[1320px] grid grid-cols-1 gap-[35px] mx-auto md:grid-cols-2">

                    <div className="bg-white rounded-[20px] py-[30px] px-[20px]">
                        <h2 className="text-4xl font-medium mt-[15px]">Öğrenci</h2>
                        <p className="text-xl py-[15px]">Öğrenci olarak Kaydolarak verilen eğitim hizmetlerinden faydalanabilir ve kendinizi istediğiniz alanda deneyimli eğitmenlerimizle geliştirebilirsiniz!</p>
                        <div className="flex mt-[20px] gap-[15px]">
                            <Link href="/giris-kayit" className="w-1/2 py-[10px] px-[15px] text-xl text-white bg-[#99a2f9] flex justify-center items-center font-bold hover:bg-[#425c72] transition duration-300">
                            <div className="mr-[15px]">
                                <UserIcon />
                            </div>
                            Giriş Yap</Link>

                            <Link href="/giris-kayit" className="w-1/2 py-[10px] px-[15px] text-xl text-white flex justify-center items-center font-bold bg-[#425c72] hover:bg-[#99a2f9] transition duration-300">
                            <div className="mr-[15px]">
                                <Register />
                            </div>
                            Kayıt Ol</Link>
                            <Link href="/giris-kayit">
                                <GoogleIcon />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="relative bg-white rounded-[20px] py-[30px] px-[20px]">
                        <h2 className="text-4xl font-medium mt-[15px]">Öğretmen</h2>
                        <p className="text-xl py-[15px]">Öğrenci olarak Kaydolarak verilen eğitim hizmetlerinden faydalanabilir ve kendinizi istediğiniz alanda deneyimli eğitmenlerimizle geliştirebilirsiniz!</p>
                        <div className="flex mt-[20px] gap-[15px]">
                            <Link href="/giris-kayit" className="w-1/2 py-[10px] px-[15px] text-xl text-white bg-[#99a2f9] flex justify-center items-center font-bold hover:bg-[#425c72] transition duration-300">
                            <div className="mr-[15px]">
                                <UserIcon />
                            </div>
                            Giriş Yap</Link>

                            <Link href="/giris-kayit" className="w-1/2 py-[10px] px-[15px] text-xl text-white flex justify-center items-center font-bold bg-[#425c72] hover:bg-[#99a2f9] transition duration-300">
                            <div className="mr-[15px]">
                                <Register />
                            </div>
                            Kayıt Ol</Link>
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