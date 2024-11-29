import Link from "next/link"

export const dashboardNavigation = [
    {
        dashid:1,
        link: <Link href="/panel/ogretmen/">+ Dashboard</Link>,  
    },
    {
        dashid:2,
        link: <Link href="/panel/ogretmen/ilan-yayinla">+ İlan Çık</Link>,  
    },
    {
        dashid:3,
        link: <Link href="/panel/ogretmen/ogrenci-ders-talepleri">+ Öğrenci Ders Talepleri</Link>,  
    },
    {
        dashid:4,
        link: <Link href="/panel/ogretmen/ayarlar">+ Ayarlar</Link>,  
    },
]

export const dashboardTeacherNavigation = [
    {
        dashid:1,
        link: <Link href="/panel/ogretmen/hakkimda/" className="flex items-center text-2xl">
            <svg className="w-[35px] h-[35px] mr-3">
                <use href="#teacher-icon" />
            </svg>
            Öğretmen Sayfası
            </Link>,  
    },
    {
        dashid:2,
        link: <Link href="/panel/ogretmen/ilan-yayinla" className="flex items-center text-2xl">
            <svg className="w-[35px] h-[35px] mr-3">
                <use href="#ilan-yayinla" />
            </svg>
            İlan Yayınla</Link>,  
    },
    {
        dashid:4,
        link: <Link href="/panel/ogretmen/ayarlar" className="flex items-center text-2xl">
            <svg className="w-[35px] h-[35px] mr-3">
                <use href="#settings" />
            </svg>
            Ayarlar</Link>,  
    },
]