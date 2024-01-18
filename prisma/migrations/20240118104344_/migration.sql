/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Machine` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Machine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Machine_slug_key" ON "Machine"("slug");
