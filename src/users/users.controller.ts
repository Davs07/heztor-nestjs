import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':clerkId') // Cambiado de 'sync/:clerkId' a ':clerkId' para ser más consistente con RESTful
  async getUser(@Param('clerkId') clerkId: string) {
    return this.usersService.getUserByClerkId(clerkId);
  }

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
   
    return this.usersService.createUserAndSync(createUserDto.clerkId);
  }

  @Put(':clerkId') // Para actualizar un usuario existente
  async updateUser(@Param('clerkId') clerkId: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(clerkId, updateUserDto);
  }

  @Delete(':clerkId') // Para eliminar un usuario existente
  async deleteUser(@Param('clerkId') clerkId: string) {
    return this.usersService.deleteUser(clerkId);
  }
}
