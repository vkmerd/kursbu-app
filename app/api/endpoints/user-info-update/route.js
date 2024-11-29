import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


export async function POST(req) { 
  try {
    const userUpdateData = await req.json(); 
    const prisma = new PrismaClient();

    console.log(userUpdateData);
   if(userUpdateData.role === "TEACHER"){
    const updateUser = await prisma.teacher.update({
        where: {
            email: userUpdateData.email,
        },
        data: {
            service_lessons: userUpdateData.service_lessons,
            teacher_about: userUpdateData.teacher_about,
            teacher_city:userUpdateData.teacher_city,
            teacher_lessons_price: userUpdateData.teacher_lessons_price
        },
        })
   }

   if(userUpdateData.role === "STUDENT"){
    const updateUser = await prisma.student.update({
        where: {
            email: userUpdateData.email,
        },
        data: {
            service_lessons: userUpdateData.service_lessons,
            teacher_about: userUpdateData.teacher_about,
            teacher_city:userUpdateData.teacher_city,
            teacher_lessons_price: userUpdateData.teacher_lessons_price
        },
        })
   }
    return NextResponse.json({
      message: 'Başarıyla kayıt oldunuz!',
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({message:error});
  }
};