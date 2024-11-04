import { Body, Controller, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { AppResponseDto } from '../app.response.dto';
import { Response } from 'express';
import { ValidationPipe } from '../utils/validation.pipe';
import { AdminAuthGuard } from '../auth/admin-auth.guard';
import { AuthGuard } from '../auth/auth.guard';

@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly response: AppResponseDto
    ) { }

  @ApiResponse({type: AppResponseDto})
  @UseGuards(AuthGuard, AdminAuthGuard)
  @Post()
  async createUser(@Res() res: Response, @Body(new ValidationPipe()) newUser: CreateUserDto): Promise<Response> {
    await this.userService.createUser(newUser);
    this.response.message = 'User created successfully';
    this.response.status = HttpStatus.CREATED;
    return res.status(HttpStatus.CREATED).json(this.response);
  }
}
