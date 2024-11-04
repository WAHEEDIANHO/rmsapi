import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './entities/student.schema';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student-dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}
  
  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const newStudent = new this.studentModel(createStudentDto);
    return newStudent.save();
  }
  
  async getStudents(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
}
