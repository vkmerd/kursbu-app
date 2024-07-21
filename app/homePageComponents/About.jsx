'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useViewportScroll } from 'framer-motion';

export default function About() {
  const { scrollY } = useViewportScroll();
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
          className="max-w-full lg:absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-none"
          animate={controls3}
          initial={{ y: 200 }}
        />
      </div>
      <div className="ml-[40px]">
        <button className="inline-block	bg-[#E9967A] py-[10px] px-[15px] text-white text-[20px] rounded-[20px] hover:bg-[#000] transition duration-300">Know About Us</button>
        <div className="mt-[25px]">
            <h2 className="text-6xl font-bold">Know About Histudy
            Learning Platform</h2>
            <p className="mt-[20px] text-[#1c1c1c] text-2xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <div className="mt-[25px]">
                <div className="flex items-center py-[35px] px-[40px] bg-[#f5fafc]">
                    <img src="/seffaflik-saglar.png" alt="" />
                    <div className="flex-col ml-[15px]">
                        <h2 className="text-2xl">Declare your goal!</h2>
                        <p className="text-xl mt-[10px]">
                            Declare your goal by knowing what you are working for and how you will contribute! Build your team in seconds.
                        </p>
                    </div>
                </div>
                <div className="flex items-center py-[35px] px-[40px] bg-[#fdf1f0] mt-[20px]">
                    <img src="/stratejiye-odaklar.png" alt="" />
                    <div className="flex-col ml-[15px]">
                        <h2 className="text-2xl">Declare your goal!</h2>
                        <p className="text-xl mt-[10px]">
                            Declare your goal by knowing what you are working for and how you will contribute! Build your team in seconds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}