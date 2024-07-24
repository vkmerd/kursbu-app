"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
    const faqsData = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam magnam explicabo deserunt labore repudiandae.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, saepe reiciendis ex nemo voluptas harum voluptate. Dicta eaque molestiae porro odit. Deleniti assumenda corrupti odit mollitia officiis temporibus corporis?"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam magnam explicabo deserunt labore repudiandae.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, saepe reiciendis ex nemo voluptas harum voluptate. Dicta eaque molestiae porro odit. Deleniti assumenda corrupti odit mollitia officiis temporibus corporis?"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam magnam explicabo deserunt labore repudiandae.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, saepe reiciendis ex nemo voluptas harum voluptate. Dicta eaque molestiae porro odit. Deleniti assumenda corrupti odit mollitia officiis temporibus corporis?"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam magnam explicabo deserunt labore repudiandae.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita, saepe reiciendis ex nemo voluptas harum voluptate. Dicta eaque molestiae porro odit. Deleniti assumenda corrupti odit mollitia officiis temporibus corporis?"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <>
            <div className="w-full py-[60px] relative">
                <img src="/cta-left.png" className="absolute left-[-20%]" />
                <img src="/cta-right.png" className="absolute right-[-20%]" />
                <div className="max-w-[1320px] mx-auto">
                    <h2 className="text-4xl text-center py-[35px] text-[#0f24ea] font-bold">Sık Sorulan Sorular!</h2>
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                        <img src="/faq.jpg" className="max-w-full" />
                        <div className="boxs">
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