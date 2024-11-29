import { tabs } from '@/app/components/CategoryTab';
import { PrismaClient } from '@prisma/client';
import StudentAndTeacher from '@/app/homePageComponents/StudentAndTeacher';
import RightCards from './cards/RightCards';
const prisma = new PrismaClient();

export default async function TeacherPage({ params }) {
  const slug = Array.isArray(params.slug) ? params.slug.join('-') : params.slug;

  const teacherPage = await prisma.teacherPage.findUnique({
    where: {
      slug: `${slug}`,
    },
    include: {
      teacher: true,
    },
  });

  if (!teacherPage) {
    return (
      <div>
        <h1>Sayfa Bulunamadı</h1>
      </div>
    );
  }

  return (
   <>


<div className="py-[50px]">
            <div class="w-4/5 mx-auto flex flex-col gap-5 md:flex-row">
                <div class="flex-1 md:flex-1 lg:flex-[2.8]">
                  <div className="flex flex-col gap-3 items-center md:flex-row">
        <div className="flex-1 lg:flex-[1.8]">
            <img src={teacherPage.teacher_photos} className="rounded-[25px]" alt="ogretmen-title" />
        </div>
        <div className="flex-1 lg:flex-[2.2]">
            <h2 className="text-4xl font-semibold">{teacherPage.teacher.name} {teacherPage.teacher.surname}</h2>
            <span className="text-xl font-medium">{teacherPage.teacher_lesson_category_text}</span>
            <p className="text-xl font-medium">{teacherPage.teacher_city} - {teacherPage.teacher_district}</p>
            <div className="mt-4">
                <p className="text-lg"><b>Verdiği Dersler:</b> {teacherPage.teacher_private_lesson_topic} </p>
                <p className="text-lg mt-1"><b>Eğitmen Puanı:</b> 4,8 </p>
            </div>
        </div>
        </div>
        <div className="mt-5">
        <h2 className="text-2xl font-semibold">Hakkımda:</h2>
        <p className="text-lg mt-2">{teacherPage.teacher_about}</p>
        </div>
        <div className="mt-5">
        <h2 className="text-2xl font-semibold">Tecrübelerim:</h2>
        <p className="text-lg mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat hic ad quod dolores dolorem et. Modi illo repellat id, soluta recusandae dolorem unde optio quidem, velit harum aperiam possimus minus eveniet nostrum. Explicabo optio laboriosam nisi et molestias. Odio, culpa voluptate?</p>
        </div>
        <div className="mt-5">
        <h2 className="text-2xl font-semibold">Özel Ders ile ilgili bilgiler:</h2>
        <p className="text-lg mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat hic ad quod dolores dolorem et. Modi illo repellat id, soluta recusandae dolorem unde optio quidem, velit harum aperiam possimus minus eveniet nostrum. Explicabo optio laboriosam nisi et molestias. Odio, culpa voluptate?</p>
        </div>
        <div className="mt-5">
        <h2 className="text-2xl font-semibold">Ders Seçenekleri:</h2>
        <p className="text-lg mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat hic ad quod dolores dolorem et. Modi illo repellat id, soluta recusandae dolorem unde optio quidem, velit harum aperiam possimus minus eveniet nostrum. Explicabo optio laboriosam nisi et molestias. Odio, culpa voluptate?</p>
        </div>
        <div className="mt-[50px]">
        <h3 className="text-2xl mt-1"><b>Eğitmen Puanı:</b> 4,8 </h3>

    <div className="mt-[50px]">
        <h3 className="text-3xl font-bold">Diğer İlgili Eğitmenler</h3>
        <div className="grid grid-cols-1 mt-5 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tabs[0].label.slice(0,3).map(detailTeacher => (
             <div key={detailTeacher.id}
             className="bg-[#fff]  shadow-custom rounded-[20px] py-[10px] px-[10px] md:py-[15px] md:px-[15px] hover:shadow-customHover transition duration-300"
           >
             <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{detailTeacher.title}</h3>
                
             </div>
             <div className="flex flex-col justify-between items-start mt-[10px] md:mt-[20px]">
               <img src={detailTeacher.img} alt={detailTeacher.title} className="w-full rounded-[20px]" />
               <div className="mt-[10px] md:mt-0">
                 <p className="font-bold text-lg">{detailTeacher.name}</p>
                 <p className="py-[5px]">{detailTeacher.desc}</p>
                 <p>{detailTeacher.location}</p>
               </div>
             </div>
             <div className="flex justify-between items-center mt-[15px] md:mt-[25px]">
               <h3 className="text-md font-bold">{detailTeacher.price}</h3>
             </div>
           </div>
            ))}
        </div>
    </div>
</div>
                </div>
                <div class="flex-1 md:flex-1 lg:flex-[1.2]"><RightCards teacherPage={teacherPage} /></div>
</div>
            </div>
            <div className="mt-[50px]">
             <StudentAndTeacher />
            </div>
   </>
  );
}