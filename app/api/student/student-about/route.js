import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authLoginOptions } from "../../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const session = await getServerSession(authLoginOptions);
  console.log(session);

  try {
    if (!session || session.user.role !== 'STUDENT') {
      return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 403 });
    }

    const aboutStudentData = await req.json();
    console.log(aboutStudentData);

    // Öğrenci verilerini kullanıcı kimliği ile bulma
    const student = await prisma.student.findUnique({
      where: { userId: session.user.id },
      include: {
        studentPage: true, // StudentPage'i de dahil et
      }
    });

    if (!student) {
      return NextResponse.json({ error: 'Öğrenci bulunamadı.' }, { status: 404 });
    }

    // Slug oluşturma
    const slug = convertToSlug(`${session.user.name}-${session.user.surname}`);
    console.log(slug);

    // StudentPage upsert işlemi
    const studentPage = await prisma.studentPage.upsert({
      where: { studentId: student.id },
      update: {
        student_title: aboutStudentData.student_title,
        student_about: aboutStudentData.student_about,
        student_city: aboutStudentData.city,
        student_district: aboutStudentData.district,
      },
      create: {
        studentId: student.id,
        slug: slug,
        student_title: aboutStudentData.student_title,
        student_about: aboutStudentData.student_about,
        student_city: aboutStudentData.city,
        student_district: aboutStudentData.district,
      },
    });

    return NextResponse.json({ message: 'Form başarıyla kaydedildi.' }, { status: 200 });

  } catch (error) {
    console.error("Form işleme hatası:", error);
    return NextResponse.json({ error: 'İşleme sırasında hata oluştu.' }, { status: 500 });
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
    .replace(/[^a-z0-9]+/g, '-') // Geçersiz karakterleri '-' ile değiştir
    .replace(/^-+|-+$/g, '');    // Baştaki ve sondaki '-' işaretlerini temizle
}