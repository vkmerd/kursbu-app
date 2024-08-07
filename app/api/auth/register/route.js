// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export async function POST(req) {
//   const { name, surname, email, password, role, phone, photo } = await req.json();

//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         email,
//         password,
//         role,
//         student: role === 'STUDENT' ? { create: { name, surname, phone, photo } } : undefined,
//         teacher: role === 'TEACHER' ? { create: { name, surname, phone, photo } } : undefined,
//       },
//     });

//     return new Response(JSON.stringify(newUser), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Error creating user' }), { status: 500 });
//   }
// }