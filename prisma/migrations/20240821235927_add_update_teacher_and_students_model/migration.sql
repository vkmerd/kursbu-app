/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `student` MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `teacher` MODIFY `email` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Student_email_key` ON `Student`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Teacher_email_key` ON `Teacher`(`email`);
