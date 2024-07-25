"use client"

export default function HowDoesItWork(){
  
    return(
        <div className="w-full grid justify-items-center py-[60px]">
            <h2 className="text-4xl text-[#234DD4] text-left font-bold relative">Kursbu App Nasıl Çalışır?</h2>
            <div className="w-4/5 grid grid-cols-1 relative mt-[100px] gap-[30px] lg:grid-cols-3 md:grid-cols-2 mt-[30px]">
                <div className="flex flex-col items-start border-solid border-2 border-black py-[35px] px-[20px] mt-[50px] relative ">
                    <span className="block text-2xl bg-[#7bead6] py-[5px] px-[10px] text-black font-bold mb-[30px]">1</span>
                    <div className="flex-col text-left">
                        <h2 className="text-3xl font-bold">Kayıt Olun!</h2>
                        <p className="text-xl mt-[10px]">
                            Uygulamamıza öğretmenseniz öğretmen olarak, öğrenciyseniz öğrenci olarak kayıt olun.
                        </p>
                   
                    </div>
                </div>
                <div className="flex flex-col items-start border-solid border-2 border-black py-[35px] px-[20px] mt-[50px]">
                    <span className="block text-2xl bg-[#ffe03d] py-[5px] px-[10px] text-black font-bold mb-[30px]">2</span>
                    <div className="flex-col">
                        <h2 className="text-3xl font-bold">Himzetlerimize erişin!</h2>
                        <p className="text-xl mt-[10px]">
                            Uygulamamıza kayıt olduktan sonra öğetmenseniz eğitim hizmetlerinizi ilan edebilir, öğrenciyseniz eğer eğitim hizmetlerimizden faydalanabilirsiniz.
                        </p>
                    
                    </div>
                </div>
                <div className="flex flex-col items-start border-solid border-2 border-black py-[35px] px-[20px] mt-[50px]">
                    <span className="block text-2xl bg-[#2885fd] py-[5px] px-[10px] text-black font-bold mb-[30px]">3</span>
                    <div className="flex-col">
                        <h2 className="text-3xl font-bold">Süreçlerinizi yönetin!</h2>
                        <p className="text-xl mt-[10px]">
                            Eğitim, öğrenim süreçlerinizi kendinize ait panelden yönetin!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
