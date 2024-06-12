-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Salud', 'Crecimiento', 'Relaciones', 'Desarrollo', 'Finanzas');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('MuyAlta', 'Alta', 'Media', 'Baja');

-- CreateEnum
CREATE TYPE "FrequencyType" AS ENUM ('TodosLosDias', 'DiasEspecificos', 'CadaXdias');

-- CreateEnum
CREATE TYPE "GoalType" AS ENUM ('SiNo', 'Cantidad', 'Cronometro', 'Subitems');

-- CreateEnum
CREATE TYPE "Day" AS ENUM ('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo');

-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "Category",
    "priority" "Priority",
    "comments" TEXT[],
    "userId" TEXT NOT NULL,
    "frequencyId" TEXT,
    "goalId" TEXT,
    "smartDescriptionId" TEXT,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedDay" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "otherDetails" JSONB,
    "habitId" TEXT NOT NULL,

    CONSTRAINT "CompletedDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frequency" (
    "id" TEXT NOT NULL,
    "type" "FrequencyType" NOT NULL,

    CONSTRAINT "Frequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL,
    "type" "GoalType" NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SmartDescription" (
    "id" TEXT NOT NULL,
    "purposeAndMotivation" TEXT NOT NULL,
    "benefitsAndConsequences" TEXT NOT NULL,
    "currentHabitsAndEnvironment" TEXT NOT NULL,
    "capacityAndResources" TEXT NOT NULL,
    "possibleObstaclesAndSolutions" TEXT NOT NULL,

    CONSTRAINT "SmartDescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_frequencyId_fkey" FOREIGN KEY ("frequencyId") REFERENCES "Frequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_smartDescriptionId_fkey" FOREIGN KEY ("smartDescriptionId") REFERENCES "SmartDescription"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedDay" ADD CONSTRAINT "CompletedDay_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
