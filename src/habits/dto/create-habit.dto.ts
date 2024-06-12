// src/habits/dto/create-habit.dto.ts

import { IsString, IsOptional, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Priority, Frequency, Goal, SmartDescription, CompletedDay } from "src/types/habit-types"
import { Category } from 'src/types/shared-types';

export class CreateHabitDto {
  @IsString()
  name: string;


  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(Frequency)
  frequency: Frequency;

  @IsEnum(Category)
  @IsOptional()
  category?: Category;

  @ValidateNested()
  @Type(() => Goal)
  @IsOptional()
  goal?: Goal;

  @ValidateNested()
  @Type(() => SmartDescription)
  @IsOptional()
  smartDescription?: SmartDescription;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => String)
  comments: string[] = [];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompletedDay)
  completedDays: CompletedDay[] = [];

  @IsString()
  user: string; 
}