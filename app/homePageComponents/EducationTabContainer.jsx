"use client"

import { useReducer,useState } from "react";
import { categoryTabReducer, initialTabState } from "../components/CategoryTab";

export default function EducationTabContainer() {

  const [state, dispatch] = useReducer(categoryTabReducer, initialTabState);
  const [activeTab, setActiveTab] = useState(null);

  const handleCategoryTabClick = (tab) => {
    dispatch({ type: 'SELECT_TAB', payload: tab });
    setActiveTab(tab)
  };

  console.log(state);
  const tabs = [
    { id: 'Tab1', label: 'Akademik Destek' },
    { id: 'Tab2', label: 'Takviye' },
    { id: 'Tab3', label: 'Sanat ve Yaratıcılık' },
    { id: 'Tab4', label: 'Yabancı Dil' },
    { id: 'Tab5', label: 'Sınav Hazırlık Kursları' },
    { id: 'Tab6', label: 'Spor ve Fiziksel Aktivite' },
    { id: 'Tab7', label: 'Kişisel Gelişim ve Beceriler' },
    { id: 'Tab8', label: 'Kariyer ve Gelecek Planlama' },
    { id: 'Tab9', label: 'Sağlık ve Psikolojik Destek' },
];
  
  return (
    <>
      <h2 className="text-4xl text-center text-[#234DD4] font-bold">Hizmet Kategorilerimiz</h2>
      <div className="w-full flex justify-center py-[60px]">
        <div className="w-4/5 flex justify-between gap-[20px]">   
            <div className="w-[350px] bg-[#ffc44d]">
                {
                    tabs.map(tabmenu => (
                        <div key={tabmenu.id} className={`py-[15px] px-[30px] text-white text-[20px] hover:bg-[#234DD4] ${activeTab === tabmenu.id ? 'bg-[#234DD4] scale-105 transition duration-300' : ''}`}
                        onClick={() => handleCategoryTabClick(tabmenu.id)} >
                                    {tabmenu.label}
                            </div>
                    ))
                }
            </div>
            <div className="w-3/4">
                {state.selectedTab === 'Tab1' && <div>Content of Tab 1</div>}
                {state.selectedTab === 'Tab2' && <div>Content of Tab 2</div>}
                {state.selectedTab === 'Tab3' && <div>Content of Tab 3</div>}
                {state.selectedTab === 'Tab4' && <div>Content of Tab 4</div>}
                {state.selectedTab === 'Tab5' && <div>Content of Tab 5</div>}
                {state.selectedTab === 'Tab6' && <div>Content of Tab 6</div>}
                {state.selectedTab === 'Tab7' && <div>Content of Tab 7</div>}
                {state.selectedTab === 'Tab8' && <div>Content of Tab 8</div>}
                {state.selectedTab === 'Tab9' && <div>Content of Tab 9</div>}
                
            </div>
        </div>
        
      </div>
      
    </>
  );
}