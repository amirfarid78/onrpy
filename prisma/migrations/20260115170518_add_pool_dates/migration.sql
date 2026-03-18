/*
  Warnings:

  - Added the required column `endDate` to the `LotteryPool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LotteryPool" ADD COLUMN     "description" TEXT,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
