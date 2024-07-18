import Link from 'next/link';

export const navigation = [
    {
        navid:1,
        link: <Link href="/">Anasayfa</Link>
    },
    {
        navid:2,
        link: <Link href="/egitim-danismanlari">Eğitim Danışmanları</Link>
    },
    {
        navid:3,
        link: <Link href="/egitimler">Eğitimler</Link>
    },
    {
        navid:4,
        link:<Link href="/ogretmen">Öğretmenler</Link>
    },
    {
        navid:5,
        link: <Link href="/ozel-ders-ilanlari">Özel Ders İlanları</Link>
    },
    {
        navid:6,
        link: <Link href="/sistem-nasil-calisir">Sistem Nasıl Çalışır?</Link>
    },
    {
        navid:7,
        link: <Link href="/soru-cevap">Soru / Cevap</Link>
    },
]