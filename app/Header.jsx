import Image from "next/image";
import Link from 'next/link';
import { navigation } from "./components/Navigation";
import { HamburgerMenu } from "./components/Svgs";

export default function Header(){
    return(
        <header className="w-full flex justify-center py-[15px]">
            <nav className="w-4/5 flex justify-between items-center">
                <Link href="/" className="block">
                    <div>
                        <img src="/kursbu-logo.webp" alt="logo" className="w-[200px] lg:w-full"  />
                    </div>
                </Link>
                <div className="flex">
                    <ul className="flex items-center hidden lg:flex">
                        {navigation.map((navigations) => (
                            <li key={navigations.navid} className="px-[15px] text-[15px] hover:opacity-50 transition duration-300">
                                {navigations.link}
                            </li>
                        ))}
                        <button className="bg-[#234DD4] py-[10px] px-[15px] ml-[15px] text-white rounded-[20px] hover:bg-[#ffc44d] transition duration-300">+ Özel Ders Ver!</button>
                    </ul>
                    <div className="open-side-mobil-menu block lg:hidden">
                        <svg id="bold" enable-background="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm4 17h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1z"/></svg>
                    </div>
                </div>
            </nav>
        </header>
    )
}