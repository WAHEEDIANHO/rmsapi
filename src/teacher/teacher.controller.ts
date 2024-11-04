import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Teacher')
@Controller('teacher')
export class TeacherController {
  
  @Get()
  getTeacher() {
    return 'This is a teacher route';
  }
}
  