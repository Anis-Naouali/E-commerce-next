/*
  Warnings:

  - Added the required column `product` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `product` VARCHAR(191) NOT NULL;
