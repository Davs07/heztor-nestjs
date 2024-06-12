import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { HabitsController } from './habits.controller';
import { HabitsService } from './habits.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [HabitsController],
  providers: [HabitsService, PrismaService],
})
export class HabitsModule {}
