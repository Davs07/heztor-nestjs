import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Habit } from './entities/habit.entity';
import { CreateHabitDto } from './dto/create-habit.dto'; 
import { UpdateHabitDto } from './dto/update-habit.dto'; 

@Injectable()
export class HabitsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHabitDto) {
    return this.prisma.habit.create({
      data: {
        name: createHabitDto.name,
        description: createHabitDto.description,
        frequency: createHabitDto.frequency,
        category: createHabitDto.category,
        goal: createHabitDto.goal,
        smartDescription: createHabitDto.smartDescription,
        comments: createHabitDto.comments,
        completedDays: createHabitDto.completedDays,
        priority: createHabitDto.priority,
        user: { connect: { id: createHabitDto.userId } } // Asigna el ID del usuario aquí
      }
    });
  }

  findAll() {
    return this.prisma.habit.findMany();
  }

  findOne(id: string) {
    return this.prisma.habit.findUnique({
      where: { id },
    });
  }

  update(id: string, updateHabitDto) {
    return this.prisma.habit.update({
      where: { id },
      data: updateHabitDto,
    });
  }

  remove(id: string) {
    return this.prisma.habit.delete({
      where: { id },
    });
  }
}