'use client';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect } from 'react';

export default function About() {
  const { scrollY } = useScroll();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const moveDistance = Math.min(latest * 0.2, 100); 
      controls1.start({ x: -50 + moveDistance }); 
      controls2.start({ x: 50 - moveDistance });  
      controls3.start({ y: 50 - moveDistance }); 
    });
  }, [scrollY, controls1, controls2, controls3]);

  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-[60px]">
      <div className="relative h-full lg:h-screen">
        <motion.img
          src="/about-01.png"
          alt=""
          className="max-w-full hidden lg:block absolute top-0 left-0 max-w-none"
          animate={controls1}
          initial={{ x: -200 }} 
        />
        <motion.img
          src="/about-02.png"
          alt=""
          className="max-w-full hidden lg:block absolute top-0 right-0 max-w-none"
          animate={controls2}
          initial={{ x: 200 }} 
        />
        <motion.img
          src="/about-03.png"
          alt=""
          className="max-w-full lg:absolute bottom-0 left-1/2 transform -translate-x-1/2"
          animate={controls3}
          initial={{ y: 200 }}
        />
      </div>
      <div className="lg:ml-[40px]">
        <button className="inline-block	bg-[#E9967A] py-[10px] px-[15px] text-white text-[20px] rounded-[20px] hover:bg-[#000] transition duration-300">Know About Us</button>
        <div className="mt-[25px]">
            <h2 className="font-bold text-3xl lg:text-6xl">Sizi anlayan öğrenim deneyimi!
            </h2>
            <p className="text-lg mt-[20px] text-[#1c1c1c] lg:text-2xl">Kursbu, öğrencilerin akademik ihtiyaçlarının yanı sıra, psikolojik ve sağlık desteklerine, kişisel gelişimlerine ve kariyer planlamalarına yönelik kapsamlı bir destek sağlar.
            </p>
            <div className="mt-[25px]">
                <div className="flex flex-col items-start py-[10px] px-[5px] bg-[#f5fafc] gap-[15px] md:gap-[0px] md:flex-row md:items-center md:justify-center md:py-[35px] md:px-[40px]">
                  <img src="/seffaflik-saglar.png" alt="" />
                  <div className="flex flex-col lg:ml-[15px]">
                    <h2 className="text-2xl">Liderlik</h2>
                    <p className="text-lg mt-[10px] md:text-xl">
                    Liderlik, iletişim ve diğer kişisel becerilerin geliştirilmesine yönelik çeşitli atölye ve seminerler düzenler.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start py-[10px] px-[5px] bg-[#fdf1f0] mt-[20px] gap-[15px] md:gap-[0px] md:flex-row md:items-center md:justify-center md:py-[35px] md:px-[40px]">
                    <img src="/stratejiye-odaklar.png" alt="" />
                    <div className="flex-col lg:ml-[15px]">
                        <h2 className="text-2xl">Topluluk</h2>
                        <p className="text-lg mt-[10px] md:text-xl">
                        Öğrencilerin, öğretmenlerin ve uzmanların bir araya gelerek bilgi ve deneyim paylaşabilecekleri aktif bir topluluk.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}