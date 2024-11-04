import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.schema';
import { AppResponseDto } from '../app.response.dto';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [UtilsModule, MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  // imports: [StudentModule, TeacherModule],
  providers: [AppResponseDto, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
