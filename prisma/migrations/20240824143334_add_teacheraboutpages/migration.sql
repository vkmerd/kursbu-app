/*
  Warnings:

  - You are about to drop the `lessonrequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `lessonrequest` DROP FOREIGN KEY `LessonRequest_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `lessonrequest` DROP FOREIGN KEY `LessonRequest_teacherId_fkey`;

-- DropTable
DROP TABLE `lessonrequest`;

-- CreateTable
CREATE TABLE `TeacherPage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacherId` INTEGER NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `service_lessons` VARCHAR(191) NULL,
    `teacher_about` VARCHAR(191) NULL,
    `teacher_city` VARCHAR(191) NULL,
    `teacher_lessons_price` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TeacherPage_teacherId_key`(`teacherId`),
    UNIQUE INDEX `TeacherPage_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TeacherPage` ADD CONSTRAINT `TeacherPage_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
