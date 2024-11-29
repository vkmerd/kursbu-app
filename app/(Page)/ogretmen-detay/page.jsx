import { tabs } from "@/app/components/CategoryTab"

export default function TeacherDetails(){
    return(
        <>
        <div className="flex flex-col gap-3 items-center md:flex-row">
            <div className="flex-1 lg:flex-[1.8]">
                <img src="/uploads/ckmerd.jpg" className="rounded-[25px]" alt="ogretmen-title" />
            </div>
            <div className="flex-1 lg:flex-[2.2]">
                <h2 className="text-4xl font-semibold">Mert Öztürk</h2>
                <span className="text-xl font-medium">Yazılım Geliştiricisi Eğitmeni</span>
                <div className="mt-4">
                    <p className="text-lg"><b>Verdiği Dersler:</b> Html, Css, Javascript, Typescript, Php, Wordpress, React.js, Next.js </p>
                    <p className="text-lg mt-1"><b>Eğitmen Puanı:</b> 4,8 </p>
                </div>
            </div>
        </div>
        <div className="mt-5">
            <h2 className="text-2xl font-semibold">Hakkımda:</h2>
            <p className="text-lg mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat hic ad quod dolores dolorem et. Modi illo repellat id, soluta recusandae dolorem unde optio quidem, velit harum aperiam possimus minus eveniet nostrum. Explicabo optio laboriosam nisi et molestias. Odio, culpa voluptate? Aperiam quas sunt est, tenetur fugiat similique consequuntur ducimus. Exercitationem autem ex ab rerum repellendus incidunt sequi! Delectus dolor dolorem magni quisquam incidunt qui sit dicta accusantium laboriosam aspernatur, corporis sint ducimus rerum, nam ipsam nobis aliquam autem? Ipsum veritatis eos eveniet, aspernatur magnam rem optio. Quis iusto repellendus nihil odio repellat aspernatur vitae natus voluptatem. Cumque doloremque ratione facilis, debitis perferendis neque eligendi consequatur temporibus non voluptatem laborum eum dolores architecto alias accusantium? Illo asperiores itaque, voluptates, architecto error rem atque totam id est natus assumenda facilis temporibus tenetur explicabo accusamus quo reiciendis voluptatem nemo laborum mollitia. Dicta hic quisquam repellat est consequatur quae, ex illo provident cum amet quas officiis labore nemo quis. Sunt odit, nulla esse eum odio dolor libero repudiandae reiciendis consequuntur reprehenderit enim placeat rerum debitis tenetur quod omnis molestiae aperiam! Dolorem velit maiores natus laboriosam eaque laudantium omnis dicta quod, pariatur error sint magni cum quis, repellat fugiat animi, neque repellendus atque suscipit!</p>
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
            <div className="mt-5">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="border border-slate-1 border-gray p-3">
                        <div className="flex justify-between items-center">
                            <img src="/uploads/ckmerd.jpg" className="w-[100px] h-[100px] rounded-full" alt="ogretmen-title" />
                            <h4 className="text-xl font-bold">Mert Öztürk</h4>
                        </div>
                        <div className="mt-3">
                            <p className="text-lg text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus ipsam aut quo cumque facilis sequi doloremque eum dolores eaque aliquid omnis corrupti perferendis neque earum commodi iste porro dignissimos officia nulla? Eos sed quibusdam ducimus eius unde, doloremque placeat, repellat, necessitatibus numquam voluptatem quasi illum excepturi cupiditate explicabo reprehenderit?</p>
                        </div>
                    </div>
                    <div className="border border-slate-1 border-gray p-3">
                        <div className="flex justify-between items-center">
                            <img src="/uploads/ckmerd.jpg" className="w-[100px] h-[100px] rounded-full" alt="ogretmen-title" />
                            <h4 className="text-xl font-bold">Mert Öztürk</h4>
                        </div>
                        <div className="mt-3">
                            <p className="text-lg text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus ipsam aut quo cumque facilis sequi doloremque eum dolores eaque aliquid omnis corrupti perferendis neque earum commodi iste porro dignissimos officia nulla? Eos sed quibusdam ducimus eius unde, doloremque placeat, repellat, necessitatibus numquam voluptatem quasi illum excepturi cupiditate explicabo reprehenderit?</p>
                        </div>
                    </div>
                    <div className="border border-slate-1 border-gray p-3">
                        <div className="flex justify-between items-center">
                            <img src="/uploads/ckmerd.jpg" className="w-[100px] h-[100px] rounded-full" alt="ogretmen-title" />
                            <h4 className="text-xl font-bold">Mert Öztürk</h4>
                        </div>
                        <div className="mt-3">
                            <p className="text-lg text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus ipsam aut quo cumque facilis sequi doloremque eum dolores eaque aliquid omnis corrupti perferendis neque earum commodi iste porro dignissimos officia nulla? Eos sed quibusdam ducimus eius unde, doloremque placeat, repellat, necessitatibus numquam voluptatem quasi illum excepturi cupiditate explicabo reprehenderit?</p>
                        </div>
                    </div>
                    <div className="border border-slate-1 border-gray p-3">
                        <div className="flex justify-between items-center">
                            <img src="/uploads/ckmerd.jpg" className="w-[100px] h-[100px] rounded-full" alt="ogretmen-title" />
                            <h4 className="text-xl font-bold">Mert Öztürk</h4>
                        </div>
                        <div className="mt-3">
                            <p className="text-lg text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, necessitatibus ipsam aut quo cumque facilis sequi doloremque eum dolores eaque aliquid omnis corrupti perferendis neque earum commodi iste porro dignissimos officia nulla? Eos sed quibusdam ducimus eius unde, doloremque placeat, repellat, necessitatibus numquam voluptatem quasi illum excepturi cupiditate explicabo reprehenderit?</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-3xl font-bold">Yorum Yazınız:</h3>
                    <form className="mt-3">
                        <textarea name="user_comments" placeholder="Yorum..." class="w-full h-[350px] p-3 border border-slate-2 border-[#000]"></textarea>
                        <button type="submit" className="mt-[10px] bg-black text-white py-3 px-9 rounded-md hover:bg-white hover:text-black hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">Gönder</button>
                    </form>
                </div>
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
        </>
    )
}