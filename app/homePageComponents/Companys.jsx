export default function Companys(){
    return(
        <>
            <div className="w-full py-[60px]">
                <div className="w-4/5 mx-auto">
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                        <div>
                            <h2 className="text-[#007bff] font-bold text-3xl lg:text-6xl">Şirketler için kurumsal eğitimler</h2>
                            <p className="text-xl py-[10px] md:text-xl lg:text-2xl">Kursbunun kurumsal dil eğitimleri, online öğretmenlerle kişiye özel dil eğitimi sunar.</p>
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