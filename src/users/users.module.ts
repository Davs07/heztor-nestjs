import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule], // Agrega JwtModule a los imports
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
