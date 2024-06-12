// src/types/habit-types.ts
import { Category, Day } from "./shared-types"; 

export interface Habit {
  id: string;
  name: string;
  description?: string;
  frequency: Frequency;
  category?: Category;
  goal?: Goal;
  smartDescription?: SmartDescription;
  comments?: string[];
  completedDays?: CompletedDay[];
  priority?: Priority | null;
}

export interface CompletedDay {
  date: string; // Fecha en formato ISO (yyyy-mm-dd)
  completed: boolean;
  otherDetails?: any; // Cualquier otro detalle o métrica que desees almacenar
  /* Por ejemplo: 
    otherDetails: {
    duration: 60, // 60 minutos de ejercicio
    type: 'Running'
  } 
  */
}

export interface SmartDescription {
  purposeAndMotivation: string;
  benefitsAndConsequences: string;
  currentHabitsAndEnvironment: string;
  capacityAndResources: string;
  possibleObstaclesAndSolutions: string;
}

export class Frequency {
  type: "TodosLosDias" | "DiasEspecificos" | "CadaXdías";
  dias?: Day[];
  veces?: number;
}

export class Goal {
  type: "" | "SiNo" | "Cantidad" | "Cronometro" | "Subitems";
  meta: string | boolean | number | string[];
}

export class SmartDescription {
  purposeAndMotivation: string;
  benefitsAndConsequences: string;
  currentHabitsAndEnvironment: string;
  capacityAndResources: string;
  possibleObstaclesAndSolutions: string;
}

export class CompletedDay {
  date: string; // Fecha en formato ISO (yyyy-mm-dd)
  completed: boolean;
  otherDetails?: any; // Cualquier otro detalle o métrica que desees almacenar
}

export enum Priority {
  MuyAlta = "Muy alta",
  Alta = "Alta",
  Media = "Media",
  Baja = "Baja",
}