import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student-dto';
import { Response } from 'express';
import { AppResponseDto } from '../app.response.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/role.decorator';
import { UserRole } from '../user/entities/user.schema';
import { RoleAuthGuard } from '../auth/role-auth.guard';

export type AppRes =  {
  name: string
}
@ApiTags("Student")
@ApiBearerAuth()
@Controller('student')
export class StudentController {
  constructor(
    private studentService: StudentService, 
    private response: AppResponseDto,
    // private userService: UserService
  ) {}


  @Roles(UserRole.Teacher)
  @UseGuards(AuthGuard, RoleAuthGuard)
  @Get()
  async getStudents(@Res() res: Response): Promise<Response> {
    const stds = await this.studentService.getStudents(); 
    return res.status(HttpStatus.OK).json(stds);
  }
  
  
  @Post()
  @ApiResponse({type: AppResponseDto})
  async createStudent(@Res() res: Response, @Body() createStudentDto: CreateStudentDto): Promise<Response> {
    this.response.status = HttpStatus.CREATED;
    this.response.data = await this.studentService.createStudent(createStudentDto);
    return res.status(HttpStatus.CREATED).json(this.response);
  }
}
