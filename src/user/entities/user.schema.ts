import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type UserDocument = HydratedDocument<User>

export enum UserRole {
  ADMIN = 'admin',
  Teacher = 'teacher',
  Student = 'student'
}

@Schema()
export class User {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ type: String, required: true, unique: true })
  username: string;
  @Prop({ type: String, required: true, unique: true })
  email: string
  @Prop()
  password: string;
  @Prop({type: String, enum: UserRole, required: true})
  role: string;
  @Prop({ type: Boolean, default: false })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User); 
