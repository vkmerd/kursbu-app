// import { NextResponse } from 'next/server';
// import { authLoginOptions } from '@/app/api/auth/[...nextauth]/route'; 
// import { getServerSession } from 'next-auth';

// export async function middleware(request) {
//   const session = await getServerSession(authLoginOptions);
//     console.log(session);
    
//   const url = request.nextUrl.clone();
//     console.log(url);
    
//   if (!session) {
//     return NextResponse.redirect(new URL('/oturum-ac', url)); 
//   }

//   const userRole = session?.user?.role;

//   if (url.pathname.startsWith('/panel/ogretmen') && userRole === 'STUDENT') {
//     return NextResponse.redirect(new URL('/panel/ogrenci', url)); 
//   }

//   if (url.pathname.startsWith('/panel/ogrenci') && userRole === 'TEACHER') {
//     return NextResponse.redirect(new URL('/panel/ogretmen', url)); 
//   }

//   return NextResponse.next(); 
// }

// export const config = {
//   matcher: ['/panel/ogretmen/:path*', '/panel/ogrenci/:path*'], 
// };
