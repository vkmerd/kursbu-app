import { getServerSession } from "next-auth";
import { dashboardTeacherNavigation } from "../components/Navigation";
import {authLoginOptions} from '../../../api/auth/[...nextauth]/route'
import { notFound } from "next/navigation";
import OpenMenu from "../components/OpenMenu";

export default async function StudentDashboardRootLayout({ children }) {
 
  const session = await getServerSession(authLoginOptions)
  
  if(!session){
    return <>lütfen giriş yapınız</>
  }
  if(session.user.role === "TEACHER"){
    return notFound();

  }
  return (
    <>
        <div className="flex gap-5 bg-[#e9edf3]">
          <aside className="w-[350px] h-full bg-white fixed top-0 left-0 py-3 px-3 shadow-custom">
            <div className="flex flex-col">
              <img src="/kursbu-logo.webp" alt="Kursbu Logo" />
              <div className="mt-6">
                <h3 className="text-2xl text-black mb-[15px] font-bold">Yönetim</h3>
                {dashboardTeacherNavigation.map((dasNavigate) => (
                  <div key={dasNavigate.dashid} className="mb-[10px]">
                    {dasNavigate.link}
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <main className="w-full ml-[360px]">
            <div className="w-full bg-white py-3 px-5">
              <div className="flex justify-end">
                <OpenMenu />
              </div>
            </div>
              <div className="w-[95%] mx-auto mt-5">
                {children}</div>
          </main>
        </div>
    </>
  );
}