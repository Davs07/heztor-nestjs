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
      data: createHabitDto
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