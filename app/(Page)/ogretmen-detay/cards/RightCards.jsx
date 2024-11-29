import { tabs } from "@/app/components/CategoryTab"


export default function RightCards(){

    const studentData = [
        {
            id:1,
            title:"Yazılım Geliştiricisi",
            nameSurname:"Mert Öztürk",
            teacherLesson:"Html, Css, Javascript, Typescript, Php, Wordpress, React.js, Next.js",
            teacherDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, inventore?",
            teacherLocation: "İstanbul / Sultangazi",
            teacherPoint: "4,8",
            teacherImage: "/uploads/ckmerd.jpg",
            teacherLessonPrice: "600 TL / Saat"
        }
    ]
    return(
        <>
            {studentData.map(detailTeacher => (
                <div key={detailTeacher.id}
                className="bg-[#fff] sticky top-[80px] shadow-custom rounded-[20px] py-[10px] px-[10px] md:py-[15px] md:px-[15px] hover:shadow-customHover transition duration-300"
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{detailTeacher.title}</h3>
                
                </div>
                <div className="flex flex-col justify-between items-start mt-[10px] md:mt-[20px]">
                    <img src={detailTeacher.teacherImage} alt={detailTeacher.title} className="w-full rounded-[20px]" />
                    <div className="mt-[10px] md:mt-0">
                        <p className="font-bold text-lg">{detailTeacher.nameSurname}</p>
                        <p className="py-[5px]">{detailTeacher.teacherDesc}</p>
                        <p>{detailTeacher.teacherLocation}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-[15px] md:mt-[25px]">
                    <h3 className="text-md font-bold">{detailTeacher.teacherLessonPrice}</h3>
                </div>
                <div className="flex flex-col mt-4">
                    <button className="w-full py-3 px-3 flex justify-center items-center text-center bg-[#8ac5fd]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[25px] h-[25px]" data-preply-ds-component="SvgTokyoUIIcon" viewBox="0 0 24 24" ariaHidden="true" focusable="false"><path fillRule="evenodd" d="m14 10 1-8L2 14h9l-1 8 12-12z" clipRule="evenodd"></path></svg>
                        <p className="ml-[15px]">Deneme Dersi Talep Et!</p>
                    </button>
                    <button className="w-full py-3 px-3 mt-3 flex justify-center items-center text-center bg-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="w-[25px] h-[25px]" viewBox="0 0 90 90">
                            <g>
                                <g id="katman_1">
                                <path fill="#fff"  d="M44.9,21.7c2-1.7,3.9-3.4,5.9-4.9,2.7-2,5.8-3.4,9.3-3.7,5.1-.5,9.4,1.2,12.9,4.9,3.3,3.5,4.9,7.7,5.5,12.4.7,5-.8,9.5-3,13.8-2.9,5.6-6.7,10.6-10.8,15.4-4.5,5.3-9.4,10.3-14.5,15.1-3,2.9-7.3,2.9-10.3,0-7.3-6.9-14.2-14.1-20.1-22.2-2.8-3.9-5.5-8-7-12.6-2.7-8-1.3-15.2,4-21.6,4.6-5.5,11.7-6.9,18.4-3.9,3.3,1.5,6.2,3.7,8.7,6.2.3.3.6.6.9,1,0,0,0,0,0,0ZM27.9,17.8c-1.9,0-4,.7-5.8,2.2-4.5,3.5-6.9,11.1-5.3,16.8,1.1,3.9,3.1,7.3,5.3,10.6,6,9,13.5,16.7,21.3,24.1,1,1,2.3.9,3.4,0,6-5.6,11.7-11.5,16.8-17.9,3.2-4,6.1-8.2,8.3-12.8,3.1-6.4,2.5-12.6-1.6-18.4-2.2-3.1-5.3-4.7-9.3-4.6-2.2.1-4.2.9-6.1,2-3,1.8-5.4,4.2-7.6,6.9-1.4,1.7-3,1.7-4.4,0-1.8-2.2-3.8-4.3-6.1-5.9-2.5-1.8-5.2-3-8.8-3Z"/>
                                </g>
                            </g>
                        </svg>
                        
                        <p className="ml-[15px] text-white">Favorilerime Ekle!</p>
                    </button>
                </div>
            </div>
            ))}
        </>
    )
}