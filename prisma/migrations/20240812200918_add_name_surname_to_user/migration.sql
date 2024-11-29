/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User`
ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT 'Unknown',
ADD COLUMN `surname` VARCHAR(191) NOT NULL DEFAULT 'Unknown';
