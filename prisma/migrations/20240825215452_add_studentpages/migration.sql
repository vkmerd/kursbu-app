-- CreateTable
CREATE TABLE `StudentPage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentId` INTEGER NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `student_about` TEXT NULL,
    `student_city` VARCHAR(191) NULL,
    `student_photos` VARCHAR(191) NULL,
    `student_district` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `StudentPage_studentId_key`(`studentId`),
    UNIQUE INDEX `StudentPage_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StudentPage` ADD CONSTRAINT `StudentPage_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
