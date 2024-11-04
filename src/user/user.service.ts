import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ]
  
  async findByUsername(username: string): Promise<any | undefined> {
    return this.userModel.findOne({ username: username });
  }
  async createUser(newUser: CreateUserDto): Promise<void> {
    const user = new User();
    user.name = newUser.name;
    user.email = newUser.email;
    user.username = newUser.email;
    user.password = newUser.password;
    user.role = newUser.role;
    
    await this.userModel.create(user)
    // this.users.push(newUser);
  }
}
