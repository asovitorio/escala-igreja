/*
  Warnings:

  - You are about to drop the column `data` on the `schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedules` DROP COLUMN `data`,
    ADD COLUMN `scale_id` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `scales` (
    `id` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `event` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_scale_id_fkey` FOREIGN KEY (`scale_id`) REFERENCES `scales`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
