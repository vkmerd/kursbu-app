"use client"

// import { useUser } from "@/app/store/SessionContext";
import { signIn, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const {data:session} = useSession();

    function redirectToHome() {
        window.location.href = '/';
    }
    
    if(session){
        redirectToHome();
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const loginUserData = Object.fromEntries(new FormData(e.target));
    
        const result = await signIn("credentials", {
          redirect: false,
          email: loginUserData.email,
          password: loginUserData.password,
        });
    
        if (result.error) {
            toast.error("Login failed: " + result.error)
        } else {
            redirectToHome();
        }
      };
    
    return (
        
        <div className="w-full h-screen bg-[#635fc7] flex justify-center items-center">
            <div className="w-[1320px] h-[60vh] bg-white rounded-3xl p-[30px] flex flex-col items-center shadow-2xl sm:flex-row h-[60vh]">
                <div className="loginForm basis-2/4">
                    <h2 className="text-2xl font-bold font-poppins">Kursbu App Platformuna Hoş Geldiniz!</h2>
                    <div className="mt-[40px]">
                        <h2 className="text-3xl">Oturum Aç</h2>
                        <form onSubmit={handleLogin} className="w-full flex flex-col gap-[15px] mt-[20px] sm:w-2/3">
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail Adresiniz"
                                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Şifreniz"
                                className="border border-slate-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-color-[#635fc7]"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            >
                               Giriş yap
                            </button>
                        </form>
                    </div>
                </div>
                <div className="loginImage basis-2/4">
                    <img src="/checklist.jpg" alt="Checklist"/>
                </div>
            </div>
        </div>
    );
}