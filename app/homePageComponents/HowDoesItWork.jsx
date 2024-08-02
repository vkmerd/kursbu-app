"use client"

export default function HowDoesItWork(){
  
    return(
        <div className="w-full py-[60px]">
            <div className="w-4/5 mx-auto">
                <h2 className="text-2xl text-[#007bff] text-left font-bold relative lg:text-4xl">Kursbu Nasıl Çalışır?</h2>
            </div>
            <div className="w-4/5 flex justify-start mx-auto relative mt-[30px] gap-[30px] overflow-x-auto lg:flex-nowrap md:flex-nowrap whitespace-nowrap">
    <div className="flex-shrink-0 w-[80%] md:w-[45%] lg:w-[30%] flex flex-col items-start border-solid border-2 border-black py-[35px] px-[20px] mt-[50px] relative inline-block whitespace-normal">
        <span className="block text-2xl bg-[#7bead6] py-[5px] px-[10px] text-black font-bold mb-[30px]">1</span>
        <div className="flex-col text-left">
            <h2 className="text-xl font-bold lg:text-3xl">Kayıt Ol</h2>
            <p className="text-lg mt-[10px] lg:text-xl">
                Hızlı ve kolay bir şekilde üye olun. Hem öğretmenler hem de öğrenciler için basit kayıt işlemleri ile platforma katılın.
            </p>
        </div>
    </div>
    <div className="flex-shrink-0 w-[80%] md:w-[45%] lg:w-[30%] flex flex-col items-start border-solid border-2 border-black py-[35px] px-[20px] mt-[50px] inline-block whitespace-normal">
        <span className="block text-2xl bg-[#ffe03d] py-[5px] px-[10px] text-black font-bold mb-[30px]">2</span>
        <div className="flex-col">
            <h2 className="text-xl font-bold lg:text-3xl">Hizmetlerimize Erişin</h2>
            <p className="text-lg mt-[10px] lg:text-xl">
                Öğretmenler ders ilanları oluşturur, öğrenciler ihtiyaçlarına yönelik ders talebi yayınlar.
            </p>
        </div>
    </div>
    <div className="flex-shrink-0 w-[80%] md:w-[45%] lg:w-[30%] flex flex-col items-start border-solid border-2 border-black py-[35px] px-[20px] mt-[50px] inline-block whitespace-normal">
        <span className="block text-2xl bg-[#2885fd] py-[5px] px-[10px] text-black font-bold mb-[30px]">3</span>
        <div className="flex-col">
            <h2 className="text-xl font-bold lg:text-3xl">Süreçlerinizi Yönetin</h2>
            <p className="text-lg mt-[10px] lg:text-xl">
                Kendi paneliniz üzerinden derslerinizi planlayın, ek özelliklerinizi yönetin ve programınızı düzenleyin.
            </p>
        </div>
    </div>
</div>



        </div>
    )
}
