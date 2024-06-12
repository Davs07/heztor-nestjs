/*
  Warnings:

  - You are about to drop the column `category` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `comments` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `frequencyId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `goalId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `smartDescriptionId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the `CompletedDay` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Frequency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Goal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SmartDescription` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `description` on table `Habit` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CompletedDay" DROP CONSTRAINT "CompletedDay_habitId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_frequencyId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_goalId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_smartDescriptionId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_userId_fkey";

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "category",
DROP COLUMN "comments",
DROP COLUMN "frequencyId",
DROP COLUMN "goalId",
DROP COLUMN "priority",
DROP COLUMN "smartDescriptionId",
DROP COLUMN "userId",
ALTER COLUMN "description" SET NOT NULL;

-- DropTable
DROP TABLE "CompletedDay";

-- DropTable
DROP TABLE "Frequency";

-- DropTable
DROP TABLE "Goal";

-- DropTable
DROP TABLE "SmartDescription";

-- DropEnum
DROP TYPE "Category";

-- DropEnum
DROP TYPE "Day";

-- DropEnum
DROP TYPE "FrequencyType";

-- DropEnum
DROP TYPE "GoalType";

-- DropEnum
DROP TYPE "Priority";
