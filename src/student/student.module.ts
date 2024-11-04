import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './entities/student.schema';
import { StudentService } from './student.service';
import { AppResponseDto } from '../app.response.dto';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [UtilsModule, MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
  controllers: [StudentController],
  providers: [StudentService, AppResponseDto]
})
export class StudentModule {}
