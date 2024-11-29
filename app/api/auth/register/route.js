import path from 'path';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function POST(req) { 
  try {
    const userData = await req.json(); 
    const prisma = new PrismaClient();
    const base64Data = userData.photos.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const originalFileName = userData.userPhotoName || `${Date.now()}-image.png`;
    const filePath = path.join(process.cwd(), 'public/uploads', originalFileName);

    await fs.writeFile(filePath, buffer);

    const hashedUserPassword = await bcrypt.hash(userData.password, 10);
    
    const registerUser = await prisma.user.create({
      data: {
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        photo: `/uploads/${originalFileName}`,
        password: hashedUserPassword,
        role: userData.role,
      },
    });

    if (userData.role === "STUDENT") {
      await prisma.student.create({
        data: {
          name: userData.name,
          surname: userData.surname,
          phone: userData.phone,
          photo: `/uploads/${originalFileName}`,
          userId: registerUser.id,
        },
      });
    } else if (userData.role === 'TEACHER') {
      await prisma.teacher.create({
        data: {
          name: userData.name,
          surname: userData.surname,
          phone: userData.phone,
          photo: `/uploads/${originalFileName}`,
          userId: registerUser.id,
        },
      });
    }

    return NextResponse.json({
      message: 'Başarıyla kayıt oldunuz!',
      data: userData,
      uploadedFile: `/uploads/${originalFileName}`,
    }, { status: 200 });

  } catch (error) {
    console.error('Error during form submission:', error);
    return NextResponse.json({ message: error.message, text: "Yanlış mesaj" }, { status: 405 });
  }
};