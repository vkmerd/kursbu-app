"use client"

import { motion } from 'framer-motion';
import { useState, useReducer } from 'react';
import { categoryTabReducer, initialTabState,tabs } from '../components/CategoryTab';
import Link from 'next/link';

export default function EducationTabContainer() {
  const [state, dispatch] = useReducer(categoryTabReducer, initialTabState);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleCategoryTabClick = (tab) => {
    dispatch({ type: 'SELECT_TAB', payload: tab });
    setActiveTab(tab);
  };



  const tabContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='py-[60px]'>
      <h2 className="text-4xl text-center text-[#234DD4] font-bold">Hizmet Kategorilerimiz</h2>
      <div className="w-full flex justify-center py-[20px]">
        <div className="max-w-[1320px] flex flex-col gap-[20px]">
          <div>
            <div className="flex flex-wrap justify-center gap-[15px] py-[15px]">
            {tabs.map(tabmenu => (
              <div key={tabmenu.id}
                className={`py-[10px] px-[20px] text-white text-[18px] hover:bg-[#234DD4] rounded-[20px] ${activeTab === tabmenu.id ? 'bg-[#234DD4] scale-105 transition duration-300' : 'bg-[#ec605a]'}`}
                onClick={() => handleCategoryTabClick(tabmenu.id)}>
                {tabmenu.head}
              </div>
            ))}
            </div>
          </div>
          <div className="w-full">
             {tabs.filter(tab => tab.id === activeTab).map(tab => (
                 <div key={tab.id} className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                {tab.label.map((labelItem, index) => (
                  <div key={index}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={tabContentVariants}
                    transition={{ duration: 0.5 }}
                    className="bg-[#fff] shadow-custom py-[15px] px-[15px] hover:shadow-customHover transition duration-300"
                  >
                    <h3 className="text-lg font-bold">{labelItem.title}</h3>
                    <div className="flex justify-between items-center mt-[20px]">
                      <img src={labelItem.img} alt={labelItem.title} className="w-[100px] h-[85px] block rounded-full" />
                      <div className="ml-[15px]">
                        <p className="font-bold">{labelItem.name}</p>
                        <p className="py-[5px]">{labelItem.desc}</p>
                        <p>{labelItem.location}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[25px]">
                      <h3 className="text-md font-bold">{labelItem.price}</h3>
                      <Link href={labelItem.link} className="bg-[#5e4cf7] py-[10px] px-[10px] text-white text-[15px] rounded-[20px]"> Özel Ders Talep Et!</Link>
                    </div>
                  </motion.div>
                </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}