import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClerkAuthGuard } from 'src/auth/clerk-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('sync/:clerkId')
  async syncUser(@Param('clerkId') clerkId: string) {
    return this.usersService.syncUser(clerkId);
  }

  @Get()
  // @UseGuards(ClerkAuthGuard)
  async getUsers(){
    return this.usersService.getUsers();
  }

  @Post('sync')
  async createUserAndSync(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUserAndSync(createUserDto.clerkId);
  }

}
