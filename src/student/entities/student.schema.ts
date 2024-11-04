import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;
@Schema()
export class Student {
  
  @Prop()
  rollId: string;
  @Prop()
  email: string;
  @Prop()
  gender: string;
  @Prop()
  grade: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, red: 'Result' }] })
  result: any[]
  
}

export const StudentSchema = SchemaFactory.createForClass(Student);