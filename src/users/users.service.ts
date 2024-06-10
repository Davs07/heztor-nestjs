import { Injectable, NotFoundException } from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    const users = await this.prisma.user.findMany();
    // return clerkClient.users.getUserList();
    return users
  }

  async getUserByClerkId(clerkId: string) {
    const user = await this.prisma.user.findUnique({ where: { clerkUserId: clerkId } });
    if (!user) {
      throw new NotFoundException(`User with clerkId ${clerkId} not found`);
    }
    return user;
  }

  async createUserAndSync(clerkId: string) {
 /*    await clerkClient.users.createUser({
      firstName: "Test",
      lastName: "User",
      emailAddress: [ "testclerk123@gmail.com" ],
      password: "password"
    }) */
    const clerkUser = await clerkClient.users.getUser(clerkId);
    return this.prisma.user.upsert({
      where: { clerkUserId: clerkId },
      update: {
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl
      },
      create: {
        clerkUserId: clerkId,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl
      },
    });
  }

  async updateUser(clerkId: string, updateUserDto: UpdateUserDto) {
    await clerkClient.users.updateUser(clerkId, updateUserDto);
    const updatedUser = await this.prisma.user.update({
      where: { clerkUserId: clerkId },
      data: updateUserDto,
    });
    if (!updatedUser) {
      throw new NotFoundException(`User with clerkId ${clerkId} not found`);
    }
    return updatedUser;
  }

  async deleteUser(clerkId: string) {
    await clerkClient.users.deleteUser(clerkId)
    const deletedUser = await this.prisma.user.delete({ where: { clerkUserId: clerkId } });
    if (!deletedUser) {
      throw new NotFoundException(`User with clerkId ${clerkId} not found`);
    }
    return deletedUser;
  }
}
