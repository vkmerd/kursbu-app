import AdvertFiltersForm from "./components/AdvertFiltersForm"


export default function Advert(){
    return(
        <>
        <div className="w-4/5 mx-auto py-[75px]">
            <div>
                <h2 className="text-center text-4xl font-bold text-[#5022c3] mb-3">İlan arama sayfası </h2>
                <h3 className="text-center text-2xl font-bold text-[#5022c3]">İstediğiniz Öğretmen / Öğrenci ilanlarına rahatlıkla erişebilirsiniz! </h3>
            </div>
            <div className="mt-5">
                <AdvertFiltersForm />
            </div>
        </div>
        </>
    )
}