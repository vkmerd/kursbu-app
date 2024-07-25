import Link from "next/link"
import { navigation,educationNavigation } from "./components/Navigation"
import { topicContent } from "./(Page)/egitimler/(Eğitim Sayfaları)/kariyer-ve-gelecek-planlama/[careerDynamic]/page";
import { selfImprovement } from "./(Page)/egitimler/(Eğitim Sayfaları)/kisisel-gelisim-ve-beceriler/[selfdynamic]/page";
import { healthPageObj } from "./(Page)/egitimler/(Eğitim Sayfaları)/saglik-ve-psikolojik-destek/[healthdynamic]/page";
import { artPageObj } from "./(Page)/egitimler/(Eğitim Sayfaları)/sanat-ve-yaraticilik/[artdynamic]/page";
import { examPageObj } from "./(Page)/egitimler/(Eğitim Sayfaları)/sinav-hazirlik-kurslari/[examdynamic]/page";


export default function Footer(){
    const lessonNavigation = {
        matematik: {
            title: "Matematik"
        },
        fizik: {
            title: "Fizik"
        },
        kimya: {
            title: "Kimya"
        },
        biyoloji: {
            title: "Biyoloji"
        },
        tarih: {
            title: "Tarih"
        },
        coğrafya: {
            title: "Coğrafya"
        },
        felsefe: {
            title: "Felsefe"
        }
    };

    return(
        <>
            <div className="w-full bg-[#f0f2ff] py-[60px] mt-[50px]">
                <div className="w-4/5 mx-auto">
                    <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <Link href="/" className="block">
                                <img src="/kursbu-logo.webp" alt="logo" className=""  />
                            </Link>
                            <p className="text-lg mt-[20px]">Kursbu, öğretmenlerin eğitim hizmetlerini, öğrencilerin ise eğitim ihtiyaçlarını en iyi şekilde karşılamaya çalışan bir platformdur.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Menü</h3>
                            <ul className="flex flex-col mt-[15px]">
                                {navigation.map((navigations) => (
                                    <li key={navigations.navid} className="text-[16px] mb-[10px] hover:opacity-50 transition duration-300">
                                        {navigations.link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Öğretmen Hizmet Kategorileri</h3>
                            <ul className="flex flex-col mt-[15px]">
                                {educationNavigation.map((educationNavigations) => (
                                    <li key={educationNavigations.ednavid} className="text-[16px] mb-[10px] hover:opacity-50 transition duration-300">
                                        {educationNavigations.link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Akademik Destek</h3>
                            <ul className="flex flex-col mt-[15px]">
                                {Object.keys(lessonNavigation).map(leskeys => (
                                    <li key={leskeys} className="text-[16px] mb-[10px] hover:opacity-50 transition duration-300">
                                        <Link href={`/egitimler/akademik-destek/${leskeys}`}>
                                            {lessonNavigation[leskeys].title}
                                        </Link>
                                     </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Kariyer ve Gelecek Planlama</h3>
                            <ul className="flex flex-col mt-[15px]">
                                {Object.keys(topicContent).map(topicContentkeys => (
                                    <li key={topicContentkeys} className="text-[16px] mb-[10px] hover:opacity-50 transition duration-300">
                                        <Link href={`/egitimler/kariyer-ve-gelecek-planlama/${topicContentkeys}`}>
                                            {topicContent[topicContentkeys].carreertitle}
                                        </Link>
                                     </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Kişisel Gelişim ve Beceriler</h3>
                            <ul className="flex flex-col mt-[15px]">
                                {Object.keys(selfImprovement).map(selfImprovementkeys => (
                                    <li key={selfImprovementkeys} className="text-[16px] mb-[10px] hover:opacity-50 transition duration-300">
                                        <Link href={`/egitimler/kisisel-gelisim-ve-beceriler/${selfImprovementkeys}`}>
                                            {selfImprovement[selfImprovementkeys].selftitle}
                                        </Link>
                                     </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Sağlık ve Psikolojik Destek</h3>
                            <ul className="flex flex-col mt-[15px]">
                                {Object.keys(healthPageObj).map(healthPageObjkeys => (
                                    <li key={healthPageObjkeys} className="text-[16px] mb-[10px] hover:opacity-50 transition duration-300">
                                        <Link href={`/egitimler/saglik-ve-psikolojik-destek/${healthPageObjkeys}`}>
                                            {healthPageObj[healthPageObjkeys].healthPageTitle}
                                        </Link>
                                     </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Sanat ve Yaratıcılık</h3>
                            <ul className="flex flex-col mt-[15px]">
                                {Object.keys(artPageObj).map(artPageObjkeys => (
                                    <li key={artPageObjkeys} className="text-[16px] mb-[10px] hover:opacity-50 transition duration-300">
                                        <Link href={`/egitimler/sanat-ve-yaraticilik/${artPageObjkeys}`}>
                                            {artPageObj[artPageObjkeys].artPageTitle}
                                        </Link>
                                     </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}