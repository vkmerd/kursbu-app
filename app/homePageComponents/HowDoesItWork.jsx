"use client"

export default function HowDoesItWork(){
  
    return(
        <div className="w-full grid justify-items-center py-[60px]">
            <h2 className="text-2xl text-center text-[#234DD4] font-bold relative after:content-[''] after:block after:w-1 after:h-[100px] after:bg-[#3e9969] after:absolute after:bottom-0 after:left-[50%] after:top-[40px] md:text-4xl after:h-[40px]">Kursbu App Nasıl Çalışır?</h2>

            <div className="w-4/5 grid grid-cols-1 relative mt-[100px] gap-[30px] after:content-[''] after:hidden lg:grid-cols-3 md:grid-cols-2 mt-[30px] md:after:block after:w-full after:h-[3px] after:bg-[#3e9969] after:absolute after:left-0 after:top-0">
                <div className="flex flex-col items-center py-[35px] px-[20px] bg-[#f5fafc] mt-[50px] relative 
                
                after:content-[''] after:block after:w-1 after:h-[48px] after:bg-[#3e9969] after:absolute after:bottom-0 after:left-[50%] after:top-[-48px]">
                    <span className="block text-4xl bg-[#234DD4] py-[15px] px-[30px] rounded-full text-white mb-[30px]">1</span>
                    <div className="flex-col ml-[15px] text-center">
                        <h2 className="text-2xl font-bold">Kayıt Olun!</h2>
                        <p className="text-xl mt-[10px]">
                            Uygulamamıza öğretmenseniz öğretmen olarak, öğrenciyseniz öğrenci olarak kayıt olun.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center py-[35px] px-[40px] bg-[#fdf1f0] mt-[50px] relative after:content-[''] after:block after:w-1 after:h-[48px] after:bg-[#3e9969] after:absolute after:bottom-0 after:left-[50%] after:top-[-48px]">
                    <span className="block text-4xl bg-[#234DD4] py-[15px] px-[30px] rounded-full text-white mb-[30px]">2</span>
                    <div className="flex-col ml-[15px] text-center">
                        <h2 className="text-2xl font-bold">Himzetlerimize erişin!</h2>
                        <p className="text-xl mt-[10px]">
                            Uygulamamıza kayıt olduktan sonra öğetmenseniz eğitim hizmetlerinizi ilan edebilir, öğrenciyseniz eğer eğitim hizmetlerimizden faydalanabilirsiniz.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center py-[35px] px-[40px] bg-[#f5fafc] mt-[50px] relative after:content-[''] after:block after:w-1 after:h-[48px] after:bg-[#3e9969] after:absolute after:bottom-0 after:left-[50%] after:top-[-48px]">
                    <span className="block text-4xl bg-[#234DD4] py-[15px] px-[30px] rounded-full text-white mb-[30px]">3</span>
                    <div className="flex-col ml-[15px]  text-center">
                        <h2 className="text-2xl font-bold">Süreçlerinizi yönetin!</h2>
                        <p className="text-xl mt-[10px]">
                            Eğitim, öğrenim süreçlerinizi kendinize ait panelden yönetin!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
