import { getServerSession } from "next-auth";
import { authLoginOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
export async function GET(req) {
  const session = await getServerSession(authLoginOptions);

  if (!session || session.user.role !== 'TEACHER') {
    return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 403 });
  }

  const teacher = await prisma.teacher.findUnique({
    where: { userId: session.user.id },
    include: {
      teacherPage: true,
    }
  });

  if (!teacher) {
    return NextResponse.json({ error: 'Öğretmen bulunamadı.' }, { status: 404 });
  }

  return NextResponse.json({ teacherPage: teacher.teacherPage });
}

export async function POST(req) {
  const session = await getServerSession(authLoginOptions);

  try {
    if (!session || session.user.role !== 'TEACHER') {
      return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 403 });
    }

    const aboutTeacherData = await req.json();
    console.log(aboutTeacherData);

    const teacher = await prisma.teacher.findUnique({
      where: { userId: session.user.id }, 
    });

    if (!teacher) {
      return NextResponse.json({ error: 'Öğretmen bulunamadı.' }, { status: 404 });
    }

    const slug = convertToSlug(`${session.user.name}-${session.user.surname}`);
    console.log(slug);
    

    const teacherPage = await prisma.teacherPage.upsert({
      where: { teacherId: teacher.id },
      update: {
        teacher_lessons: aboutTeacherData.teacher_lessons,
        teacher_experience: aboutTeacherData.teacher_experience,
        teacher_professional_title: aboutTeacherData.teacher_professional_title,
        service_lessons: aboutTeacherData.services_lessons,
        teacher_about: aboutTeacherData.teacher_about,
        teacher_city: aboutTeacherData.city,
        teacher_private_lesson_topic: aboutTeacherData.teacher_private_lesson_process,
        teacher_photos: aboutTeacherData.photos,
        teacher_lesson_category_text: aboutTeacherData.lesson_category_text, 
        teacher_district: aboutTeacherData.district,
        teacher_lessons_price: parseFloat(aboutTeacherData.teacher_private_price),
      },
      create: {
        teacherId: teacher.id,
        slug: slug,
        teacher_lessons: aboutTeacherData.teacher_lessons,
        teacher_experience: aboutTeacherData.teacher_experience,
        teacher_professional_title: aboutTeacherData.teacher_professional_title,
        service_lessons: aboutTeacherData.services_lessons,
        teacher_about: aboutTeacherData.teacher_about,
        teacher_city: aboutTeacherData.city,
        teacher_private_lesson_topic: aboutTeacherData.teacher_private_lesson_process,
        teacher_photos: aboutTeacherData.photos,
        teacher_lesson_category_text: aboutTeacherData.lesson_category_text,
        teacher_district: aboutTeacherData.district,
        teacher_lessons_price: parseFloat(aboutTeacherData.teacher_private_price),
      },
    });    
      L

    return new Response(JSON.stringify({ message: 'Sayfanız Başarıyla Kaydedildi!' }), { status: 200 });
  } catch (error) {
    console.error('Veri Hatası:', error);
    return new Response(JSON.stringify({ error: 'Bir hata oluştu.' }), { status: 500 });
  }
}

function convertToSlug(text) {
  const turkishMap = {
    ç: 'c',
    Ç: 'C',
    ğ: 'g',
    Ğ: 'G',
    ı: 'i',
    I: 'I',
    İ: 'I',
    ö: 'o',
    Ö: 'O',
    ş: 's',
    Ş: 'S',
    ü: 'u',
    Ü: 'U',
  };

  return text
    .replace(/[çÇğĞıIİöÖşŞüÜ]/g, (match) => turkishMap[match])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');
}