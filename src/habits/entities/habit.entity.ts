import { Prisma } from '@prisma/client';

export class Habit implements Prisma.HabitUncheckedCreateInput {
  id?: string;
  name: string;
  description: string;
  userId: string;
}
