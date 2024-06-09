// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { ClerkAuthGuard } from './clerk-auth.guard';
import { ConfigModule } from '@nestjs/config';
import clerkConfig from '../config/clerk.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [clerkConfig],
    }),
  ],
  providers: [ClerkAuthGuard],
  exports: [ClerkAuthGuard],
})
export class AuthModule {}
