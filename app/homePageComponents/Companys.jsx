import Link from "next/link"

export default function Companys(){
    return(
        <>
            <div className="w-full py-[60px]">
                <div className="w-4/5 mx-auto">
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                        <div>
                            <h2 className="text-[#007bff] font-bold text-3xl lg:text-6xl">Şirketler için kurumsal eğitimler</h2>
                            <p className="text-xl py-[15px] md:text-xl lg:text-2xl">Uzman eğitmenlerimiz aracılığıyla, çalışanlarınıza sektörünüzdeki en güncel ve önemli bilgileri sağlayarak, onların yetkinliklerini artırmayı hedefliyoruz. Şirketinize özel eğitim programlarımız ile, çalışanlarınızın potansiyelini en üst düzeye çıkarın ve iş başarınızı katlayın.</p>
                            <Link href="/egitimler" className="inline-block bg-[#007bff] py-[10px] px-[15px] text-xl text-white mt-[15px] lg:text-2xl">Başvurun!</Link>
                        </div>
                        <div>
                            <img src="/company.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}