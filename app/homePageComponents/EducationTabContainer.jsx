"use client"

import { motion } from 'framer-motion';
import { useState, useReducer } from 'react';
import { categoryTabReducer, initialTabState,tabs } from '../components/CategoryTab';

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
    <>
      <h2 className="text-4xl text-center text-[#234DD4] font-bold">Hizmet Kategorilerimiz</h2>
      <div className="w-full flex justify-center py-[60px]">
        <div className="w-4/5 flex justify-between gap-[20px]">
          <div className="w-[350px] bg-[#ffc44d]">
            <div className="flex flex-col">
            {tabs.map(tabmenu => (
              <div key={tabmenu.id}
                className={`py-[15px] px-[30px] text-white text-[20px] hover:bg-[#234DD4] ${activeTab === tabmenu.id ? 'bg-[#234DD4] scale-105 transition duration-300' : ''}`}
                onClick={() => handleCategoryTabClick(tabmenu.id)}>
                {tabmenu.head}
              </div>
            ))}
            </div>
          </div>
          <div className="w-3/4">
             {tabs.filter(tab => tab.id === activeTab).map(tab => (
                 <div key={tab.id} className="grid grid-cols-3 gap-[30px]">
                {tab.label.map((labelItem, index) => (
                  <div key={index}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={tabContentVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={labelItem.img} alt={labelItem.title} className="w-full" />
                    <h3 className="text-lg font-bold">{labelItem.title}</h3>
                    <p>{labelItem.desc}</p>
                  </motion.div>
                </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}