import { Injectable } from '@nestjs/common';
import  {clerkClient}  from '@clerk/clerk-sdk-node';

@Injectable()
export class AuthService {
  async getUsers(){
    return clerkClient.users.getUserList()
  }

  async getUser(clerkId: string){
    return clerkClient.users.getUser(clerkId)
  }
}
