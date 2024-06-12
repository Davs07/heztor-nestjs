// habit.entity.ts
import { Prisma } from '@prisma/client';
import { Priority, Category } from '@prisma/client';

export class Habit implements Prisma.HabitUncheckedCreateInput {
  id?: string;
  userId: string;
  name: string;
  description?: string;
  frequency: Prisma.FrequencyCreateNestedOneWithoutHabitInput;
  category?: Category | null; // Asegúrate de importar correctamente Category
  goal?: Prisma.GoalCreateNestedOneWithoutHabitInput | null;
  smartDescription?: Prisma.SmartDescriptionCreateNestedOneWithoutHabitInput | null;
  comments?: Prisma.HabitCreatecommentsInput | null;
  completedDays?: Prisma.CompletedDayUncheckedCreateNestedManyWithoutHabitInput | null;
  priority?: Priority | null; // Asegúrate de importar correctamente Priority
}
