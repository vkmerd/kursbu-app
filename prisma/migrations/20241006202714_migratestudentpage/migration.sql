/*
  Warnings:

  - You are about to drop the column `student_name` on the `studentpage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `studentpage` DROP COLUMN `student_name`,
    ADD COLUMN `student_title` VARCHAR(191) NULL;
