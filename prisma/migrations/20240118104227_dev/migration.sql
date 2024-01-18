/*
  Warnings:

  - Added the required column `needRetouch` to the `Machine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTitle` to the `Machine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "needRetouch" BOOLEAN NOT NULL,
ADD COLUMN     "subTitle" TEXT NOT NULL;
