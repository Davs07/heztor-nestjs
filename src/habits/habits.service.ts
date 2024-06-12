import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Habit } from './entities/habit.entity';
import { CreateHabitDto } from './dto/create-habit.dto'; 
import { UpdateHabitDto } from './dto/update-habit.dto'; 

@Injectable()
export class HabitsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHabitDto: CreateHabitDto) {
    return this.prisma.habit.create({
      data: {
        name: createHabitDto.name,
        description: createHabitDto.description,
        userId: createHabitDto.userId,
      },
    });
  }

  findAll() {
    return this.prisma.habit.findMany();
  }

  findOne(id: string) {
    return this.prisma.habit.findUnique({ where: { id } });
  }

  update(id: string, updateHabitDto: UpdateHabitDto) {
    return this.prisma.habit.update({
      where: { id },
      data: updateHabitDto,
    });
  }

  remove(id: string) {
    return this.prisma.habit.delete({ where: { id } });
  }
}