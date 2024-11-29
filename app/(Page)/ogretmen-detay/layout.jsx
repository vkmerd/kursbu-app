import StudentAndTeacher from "@/app/homePageComponents/StudentAndTeacher";
import RightCards from "./cards/RightCards";

export default function RootLayout({children}){
    return(
        <div className="py-[50px]">
            <div class="w-4/5 mx-auto flex flex-col gap-5 md:flex-row">
                <div class="flex-1 md:flex-1 lg:flex-[2.8]">{children}</div>
                <div class="flex-1 md:flex-1 lg:flex-[1.2]"><RightCards /></div>
            </div>
            <div className="mt-[50px]">
             <StudentAndTeacher />
            </div>
        </div>
    )
}