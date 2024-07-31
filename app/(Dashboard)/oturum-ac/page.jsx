export default function Login(){
    return(
        <>
     <div className="w-full h-screen bg-[#635fc7] flex justify-center items-center">
        <div className="w-[1320px] h-[60vh] bg-white rounded-3xl p-[30px] flex flex-col items-center shadow-2xl sm:flex-row h-[60vh]">
            <div className="loginForm basis-2/4">
                <h2 className="text-2xl font-bold font-poppins">Kursbu App'e Hoş Geldiniz!</h2>
                    <div className="mt-[40px]">
                        <h2 className="text-3xl">Oturum Aç</h2>
                        <form className="w-full flex flex-col gap-[15px] mt-[20px] sm:w-2/3">
                            <input
                                type="email"
                                name="e_mail"
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
                <div className="flex justify-center items-center h-full">
                    <img src="/checklist.jpg"/>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}