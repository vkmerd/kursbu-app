import { getServerSession } from "next-auth"
import AboutForm from "./components/AboutForm"
import { authLoginOptions } from "@/app/api/auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function StudentAbout(){
  const session = await getServerSession(authLoginOptions)
  const studentPage = prisma.studentPage.findUnique({
    where: { studentId: session.user.id },
  });
  

    return(
        <div className="flex items-center gap-[30px]">
          <div className="w-full lg:w-1/2">
            <AboutForm studentPage={studentPage} />
          </div>
          <div className="w-full lg:w-1/2">
            <img src={session.user.photo} className="w-full h-autorounded-full" alt="" />
          </div>
        </div>
    )
}