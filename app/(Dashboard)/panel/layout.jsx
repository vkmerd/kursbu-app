import { dashboardNavigation } from "./components/Navigation";
import { getServerSession } from "next-auth";
import { authLoginOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authLoginOptions)
  console.log(session);
  
  return (
    <>
      {session ? (
       <>{children}</>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>Lütfen giriş yapınız...</p>
        </div>
      )}
    </>
  );
}
