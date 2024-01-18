/*
  Warnings:

  - You are about to drop the `Vertical` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Vertical";

-- CreateTable
CREATE TABLE "Machine" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "hour" INTEGER NOT NULL,
    "halfDay" INTEGER NOT NULL,
    "fullDay" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);
