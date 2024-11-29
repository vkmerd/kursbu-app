/*
  Warnings:

  - Made the column `teacher_private_lesson_topic` on table `teacherpage` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `teacherpage` MODIFY `teacher_private_lesson_topic` VARCHAR(191) NOT NULL;
