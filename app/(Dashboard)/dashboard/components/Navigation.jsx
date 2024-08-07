const { default: Link } = require("next/link")

export const dashboardNavigation = [
    {
        dashid:1,
        link: <Link href="/dashboard">+ Dashboard</Link>,  
    },
    {
        dashid:2,
        link: <Link href="/dashboard/ilan-cik">+ İlan Çık</Link>,  
    },
    {
        dashid:3,
        link: <Link href="/dashboard/ogrenci-ders-talepleri">+ Öğrenci Ders Talepleri</Link>,  
    },
    {
        dashid:4,
        link: <Link href="/dashboard/ayarlar">+ Ayarlar</Link>,  
    },
]