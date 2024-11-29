-- AlterTable
ALTER TABLE `teacher` ADD COLUMN `service_lessons` VARCHAR(191) NULL,
    ADD COLUMN `teacher_about` VARCHAR(191) NULL,
    ADD COLUMN `teacher_city` VARCHAR(191) NULL,
    ADD COLUMN `teacher_lessons_price` DOUBLE NULL,
    ADD COLUMN `teacher_rating` DOUBLE NULL;
