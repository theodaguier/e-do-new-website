/*
  Warnings:

  - You are about to drop the `Pricing` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fullDay` to the `Eclipse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `halfDay` to the `Eclipse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Eclipse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullDay` to the `Horizontal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `halfDay` to the `Horizontal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Horizontal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullDay` to the `Live` table without a default value. This is not possible if the table is not empty.
  - Added the required column `halfDay` to the `Live` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Live` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullDay` to the `Vertical` table without a default value. This is not possible if the table is not empty.
  - Added the required column `halfDay` to the `Vertical` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Vertical` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pricing" DROP CONSTRAINT "Pricing_eclipseId_fkey";

-- DropForeignKey
ALTER TABLE "Pricing" DROP CONSTRAINT "Pricing_horizontalId_fkey";

-- DropForeignKey
ALTER TABLE "Pricing" DROP CONSTRAINT "Pricing_liveId_fkey";

-- DropForeignKey
ALTER TABLE "Pricing" DROP CONSTRAINT "Pricing_verticalId_fkey";

-- AlterTable
ALTER TABLE "Eclipse" ADD COLUMN     "fullDay" INTEGER NOT NULL,
ADD COLUMN     "halfDay" INTEGER NOT NULL,
ADD COLUMN     "hour" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Horizontal" ADD COLUMN     "fullDay" INTEGER NOT NULL,
ADD COLUMN     "halfDay" INTEGER NOT NULL,
ADD COLUMN     "hour" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Live" ADD COLUMN     "fullDay" INTEGER NOT NULL,
ADD COLUMN     "halfDay" INTEGER NOT NULL,
ADD COLUMN     "hour" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Vertical" ADD COLUMN     "fullDay" INTEGER NOT NULL,
ADD COLUMN     "halfDay" INTEGER NOT NULL,
ADD COLUMN     "hour" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Pricing";
