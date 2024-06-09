import { Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(
    private prisma: PrismaService
  ) {}
  
 

  async getUsers(){
    return clerkClient.users.getUserList()
  }



  async syncUser(clerkId: string) {
    // const clerkUser = await this.authService.getUser(clerkId);
    const clerkUser = await clerkClient.users.getUser(clerkId)
    return this.prisma.user.upsert({
      where: { clerkUserId: clerkId },
      update: { email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl },
      create: {
        clerkUserId: clerkId,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
      },
    });
  }

  async createUserAndSync(clerkId: string) {
    const clerkUser = await clerkClient.users.getUser(clerkId)
    return this.prisma.user.upsert({
      where: { clerkUserId: clerkId },
      update: { email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl },
      create: {
        clerkUserId: clerkId,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
      },
    });
  }


}
