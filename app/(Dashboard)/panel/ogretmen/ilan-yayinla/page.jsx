import { getServerSession } from "next-auth"
 import AdvertForm from "../ilan-yayinla/components/AdvertForm"

import { authLoginOptions } from "@/app/api/auth/[...nextauth]/route"



export default async function TeacherAbout(){
  const session = await getServerSession(authLoginOptions)

    return(
        <div className="flex items-start gap-[30px]">
          <div className="w-full lg:w-1/2">
            <AdvertForm />
          </div>
          <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-center">Yayınlanmış Mevcut İlanlar</h2>
          </div>
        </div>
    )
}