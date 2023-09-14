/*
  Warnings:

  - You are about to drop the column `image_url` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `rating` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `num_reviews` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `userId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_user_id_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `image_url`,
    DROP COLUMN `product`,
    DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `rating` DOUBLE NOT NULL,
    MODIFY `price` DOUBLE NOT NULL,
    MODIFY `num_reviews` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
