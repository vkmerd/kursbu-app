"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
    const faqsData = [
        {
            title: "Kursbu.com nedir?",
            desc: "Kursbu.com, öğretmenlerin ilan verebildiği, öğrencilerin ders talebinde bulunabildiği ve kendi aradıkları dersleri ilan olarak yayınlayabildikleri bir online özel ders platformudur. "
        },
        {
            title: "Öğretmenler Kursbu.com'da nasıl ilan verebilir?",
            desc: "Öğretmenler, siteye üye olduktan sonra hesaplarına giriş yaparak “İlan Ver” butonuna tıklayabilir ve ders verecekleri konularla ilgili ilan oluşturabilirler."
        },
        {
            title: "Öğrenciler nasıl ders talebinde bulunabilir?",
            desc: "Öğrenciler, istedikleri ders konusuyla ilgili talep oluşturmak için siteye üye olmalı ve “Ders Talebi Oluştur” butonuna tıklayarak ihtiyaçlarını belirtmelidirler. Ayrıca, mevcut öğretmen ilanlarına başvurarak ders talebinde de bulunabilirler."
        },
        {
            title: "Öğrenciler aradıkları dersleri nasıl bulabilir?",
            desc: "Öğrenciler, arama bölümüne ilgilendikleri ders konusunu yazarak mevcut ilanları inceleyebilir veya kendi taleplerini ilan olarak yayınlayabilirler."
        },


        {
            title: "Öğretmenler öğrencilere nasıl ulaşır?",
            desc: "Öğrenciler tarafından yayınlanan ders talepleri öğretmenler tarafından görüntülenebilir. Uygun öğretmenler, öğrenciye mesaj göndererek veya ilanlarına başvurarak iletişime geçebilirler."
        },
        {
            title: "İlan vermek ve talep oluşturmak ücretli midir?",
            desc: "Platformda ilan vermek ve ders talebi oluşturmak, bazı ek hizmetler veya öne çıkarma seçenekleri ücretli olabilir. Detaylar için ücretlendirme sayfasını ziyaret edebilirsiniz."
        },
        {
            title: "Bir sorun yaşadığımda nasıl destek alabilirim?",
            desc: "Herhangi bir sorun yaşarsanız, destek ekibimizle iletişime geçmek için “İletişim” sayfasındaki formu doldurabilir veya destek@kursbu.com adresine e-posta gönderebilirsiniz."
        },
        {
            title: "Ders iptali veya değişikliği nasıl yapılır?",
            desc: "Ders iptali veya tarih değişikliği için doğrudan karşı tarafla iletişime geçmeniz gerekmektedir. Karşılıklı olarak anlaşarak yeni bir tarih belirleyebilirsiniz."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <>
            <div className="w-full py-[60px] relative">
                <img src="/cta-left.png" className="absolute hidden lg:inline left-[-20%] z-0" />
                <img src="/cta-right.png" className="absolute hidden lg:inline right-[-20%] z-0" />
                <div className="max-w-[1320px] mx-auto">
                    <h2 className="text-4xl text-center py-[35px] text-[#007bff] font-bold">Sıkça Sorulan Sorular!</h2>
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <img src="/faq.jpg" className="max-w-full lg:z-0" />
                        <div className="z-10">
                        {faqsData.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="w-full shadow-customHover text-left text-lg  py-2 px-4 flex justify-between items-center"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.title}
                                    <motion.svg
                                        initial={false}
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                    </motion.svg>
                                </button>
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        height: activeIndex === index ? "auto" : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-4 bg-white">{faq.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}