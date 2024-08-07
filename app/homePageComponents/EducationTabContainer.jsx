"use client"

import { motion } from 'framer-motion';
import { useState, useReducer,useRef } from 'react';
import { categoryTabReducer, initialTabState,tabs } from '../components/CategoryTab';
import Link from 'next/link';

export default function EducationTabContainer() {
  const [state, dispatch] = useReducer(categoryTabReducer, initialTabState);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  // const [isFavorite, setIsFavorite] = useState(false);

  const handleCategoryTabClick = (tab) => {
    dispatch({ type: 'SELECT_TAB', payload: tab });
    setActiveTab(tab);
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollContainerRef = useRef(null);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: -300, 
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: 300, 
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const favoriteHandle = () => {
  //   setIsFavorite(!isFavorite);

  //   setTimeout(() => {
  //     setIsFavorite(false); 
  //   }, 4000);
  // }

  return (
  <>
    {/* {isFavorite ? (
      <div className="fixed left-[40%] top-[20%] items-center bg-[#008000] text-white py-[20px] px-[15px] z-50">
        <h3 className="text-white text-2xl">İlgili öğretmen favorilere eklendi!</h3>
      </div>
    ) : false} */}
   
  <div className='w-full py-[60px]'>
    <h2 className="text-3xl text-center text-[#234DD4] font-bold md?text-4xl">Kategoriye Göre Öne Çıkan Konular</h2>
    <div className="w-full mx-auto py-[20px] px-[10px] md:px-0 md:w-5/6">
        <div className="relative flex items-center">
          <div
            className="flex overflow-x-auto gap-[10px] py-[15px] px-[5px] md:px-[10px] custom-scrollbar"
            ref={scrollContainerRef}
          >
            {tabs.map(tabmenu => (
              <div
                key={tabmenu.id}
                className={`min-w-[200px] md:min-w-[275px] max-w-[200px] md:max-w-[275px] flex-shrink-0 py-[10px] px-[15px] text-black text-[16px] text-center border-solid border-2 border-black rounded-[20px] ${activeTab === tabmenu.id ? 'scale-105 transition duration-300 font-bold' : 'border-solid border-2 border-black text-black font-normal'}`}
                onClick={() => handleCategoryTabClick(tabmenu.id)}
              >
                {tabmenu.head}
              </div>
            ))}
          </div>
        </div>
          {tabs.filter(tab => tab.id === activeTab).map(tab => (
            <div key={tab.id} className="grid grid-cols-1 gap-[20px] mt-[25px] md:grid-cols-2 lg:grid-cols-4">
              {tab.label.map((labelItem, index) => (
                <div key={index}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={tabContentVariants}
                    transition={{ duration: 0.5 }}
                    className="bg-[#fff] shadow-custom rounded-[20px] py-[10px] px-[10px] md:py-[15px] md:px-[15px] hover:shadow-customHover transition duration-300"
                  >
                    <div className="flex justify-between items-center">
                       <h3 className="text-lg font-bold">{labelItem.title}</h3>
                       
                    </div>
                    <div className="flex flex-col justify-between items-start mt-[10px] md:mt-[20px]">
                      <img src={labelItem.img} alt={labelItem.title} className="w-full rounded-[20px]" />
                      <div className="mt-[10px] md:mt-0">
                        <p className="font-bold text-lg">{labelItem.name}</p>
                        <p className="py-[5px]">{labelItem.desc}</p>
                        <p>{labelItem.location}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[15px] md:mt-[25px]">
                      <h3 className="text-md font-bold">{labelItem.price}</h3>
                      <Link href={labelItem.link} className="bg-[#5e4cf7] py-[5px] px-[5px] md:py-[10px] md:px-[10px] text-white text-[15px] rounded-[20px]">Özel Ders Talep Et!</Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-center mt-[25px]">
              <button className="bg-[#ff6363] py-[15px] px-[25px] text-white font-semibold">Daha Fazla öğretmen Gör! </button>
          </div>
    </div>
  </div>  
  </>
  );
}