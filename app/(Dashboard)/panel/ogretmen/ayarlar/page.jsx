import { authLoginOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function TeacherSettings(){
    const session = await getServerSession(authLoginOptions)
    return(
        <>
        <div className="flex justify-center items-center gap-[30px]">
            <div className="w-full lg:w-1/4">
                <h2 className="text-center text-xl">Profili Güncelle</h2>
                <div className="bg-[#fff] flex items-center justify-center mt-4 py-[20px] px-[20px]">
                    <div className="flex flex-col justify-center">
                    <img src={session.user.photo} className="w-full h-[350px] rounded-full" alt="" />
                    <form className="mt-5">
                        <input type="file" name="teacher_lessons_price" className="w-full border border-slate-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]" />
                        <input type="text" name="teacher_lessons_price" placeholder="Şifreyi Güncelle" className="w-full border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]" />
                        <button type="submit" className="w-full mt-[10px] bg-black text-white py-3 px-9 rounded-md hover:bg-white hover:text-black hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">Kaydet</button>
                    </form>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4">
                <h2 className="text-center text-xl">Bakiye Yönetimi</h2>
                <div className="bg-[#fff] flex flex-col justify-center mt-4 py-[20px] px-[20px]">
                    <div className="w-full h-[400px] flex items-center justify-center rounded-full border border-slate-5 border-black">
                        <p className="text-4xl font-bold">250 TL</p>
                    </div>
                    <div className="mt-4">
                    <button className="w-full py-3 text-center cursor-pointer bg-green-500 text-white text-2xl">Bakiye Yükle</button>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}