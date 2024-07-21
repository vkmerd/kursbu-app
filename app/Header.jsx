import Image from "next/image";
import Link from 'next/link';
import { navigation } from "./components/Navigation";

export default function Header(){
    return(
        <header className="w-full flex justify-center py-[15px]">
            <nav className="w-4/5 flex justify-between items-center">
                <Link href="/" className="block">
                    <div>
                        <img src="/kursbu-logo.webp" alt="logo" className=""  />
                    </div>
                </Link>
                <ul className="flex items-center">
                    {navigation.map((navigations) => (
                        <li key={navigations.navid} className="px-[15px] text-[15px] hover:opacity-50 transition duration-300">
                            {navigations.link}
                        </li>
                    ))}
                    <button className="bg-[#234DD4] py-[10px] px-[15px] ml-[15px] text-white rounded-[20px] hover:bg-[#ffc44d] transition duration-300">+ Özel Ders Ver!</button>
                </ul>
            </nav>
        </header>
    )
}