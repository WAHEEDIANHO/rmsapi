import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
    ) {}
  
  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.userService.findByUsername(loginAuthDto.email);
    console.log(user);
    if (user?.password !== loginAuthDto.password) {
      throw new UnauthorizedException();
    }
    
    const payload = { username: user.username, sub: user._id, role: user.role, isAdmin: user.isAdmin };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
}
