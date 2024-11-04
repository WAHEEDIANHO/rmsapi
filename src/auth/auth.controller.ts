import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResAuthDto } from './dto/res-auth.dto';
import { ValidationPipe } from '../utils/validation.pipe';

@Controller('auth')
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) createAuthDto: LoginAuthDto): Promise<ResAuthDto> {
    
    const token = await this.authService.login(createAuthDto);
    return {
      token: token.access_token
    }
  }
  
  // @Post('register')
  // async register(@Body() createAuthDto: CreateUserDto): Promise<ResAuthDto> {
  //   return {
  //     token: "jko",
  //     user: {}
  //   }
  // }
}
