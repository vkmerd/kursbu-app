import Link from 'next/link';

export const navigation = [

    {
        navid:8,
        icon:<svg fill="none" height="24" viewBox="0 0 22 24" width="22" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="#000" fill-rule="evenodd"><path d="m11 0c-2.76142 0-5 2.23858-5 5s2.23858 5 5 5c2.7614 0 5-2.23858 5-5s-2.2386-5-5-5zm-3 5c0-1.65685 1.34315-3 3-3 1.6569 0 3 1.34315 3 3s-1.3431 3-3 3c-1.65685 0-3-1.34315-3-3z"/><path d="m10.5556 12c-5.82972 0-10.5556 4.7259-10.5556 10.5556 0 .7977.6467 1.4444 1.44444 1.4444h19.11116c.7977 0 1.4444-.6467 1.4444-1.4444 0-5.8297-4.7259-10.5556-10.5556-10.5556zm.8888 2c4.5385 0 8.2516 3.5338 8.5379 8h-17.96455c.28625-4.4662 3.99934-8 8.53785-8z"/></g></svg>,
        link: <Link href="/kayit-ol">+ Kayıt Ol!</Link>
    },
    {
        navid:9,
        link: <Link href="/oturum-ac">Giriş Yap</Link>
    },
]


export const educationNavigation = [
    {
        ednavid:1,
        link: <Link href="/egitimler/akademik-destek">Akademik Destek</Link>
    },
    {
        ednavid:2,
        link: <Link href="/egitimler/kariyer-ve-gelecek-planlama">Kariyer ve Gelecek Planlama</Link>
    },
    {
        ednavid:3,
        link: <Link href="/egitimler/kisisel-gelisim-ve-beceriler">Kişisel gelişim ve beceriler</Link>
    },
    {
        ednavid:4,
        link:<Link href="/egitimler/saglik-ve-psikolojik-destek">Sağlık ve Psikolojik Destek</Link>
    },
    {
        ednavid:5,
        link: <Link href="/egitimler/sanat-ve-yaraticilik">Sanat ve yaratıcılık</Link>
    },
    {
        ednavid:6,
        link: <Link href="/egitimler/sinav-hazirlik-kurslari">Sınav Hazırlık Kursları</Link>
    },
    {
        ednavid:7,
        link: <Link href="/egitimler/spor-ve-fiziksel-aktiviteler">Spor ve Fiziksel Aktiviteler</Link>
    },
    {
        ednavid:7,
        link: <Link href="/egitimler/takviye">Takviye</Link>
    },
    {
        ednavid:8,
        link: <Link href="/egitimler/takviye">Yabancı Dil</Link>
    },
]