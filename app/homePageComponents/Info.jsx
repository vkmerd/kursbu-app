"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Features() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, 
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    return (
        <div className="w-full bg-[#F0F2FF] grid justify-items-center py-[50px] bg-gradient" ref={ref}>
            <div className="w-4/5 grid grid-cols-1 items-center gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="flex-col ml-[15px]"
                >
                    <h2 className="text-2xl font-bold text-center">40.000+</h2>
                    <p className="text-xl mt-[10px] text-center">Deneyimli öğretmen</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="flex-col ml-[15px]"
                >
                    <h2 className="text-2xl font-bold text-center">300.000+</h2>
                    <p className="text-xl mt-[10px] text-center">5 yıldızlı öğretmen puanlaması</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="flex-col ml-[15px]"
                >
                    <h2 className="text-2xl font-bold text-center">120+</h2>
                    <p className="text-xl mt-[10px] text-center">Ders konusu</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="flex-col ml-[15px]"
                >
                    <h2 className="text-2xl font-bold text-center">180+</h2>
                    <p className="text-xl mt-[10px] text-center">Milletten öğretmen</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="flex-col ml-[15px]"
                >
                    <h2 className="text-2xl font-bold text-center">4,8</h2>
                    <p className="text-xl mt-[10px] text-center">App Store Puanı</p>
                </motion.div>
            </div>
        </div>
    );
}