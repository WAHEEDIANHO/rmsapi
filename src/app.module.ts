import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AppResponseDto } from './app.response.dto';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [StudentModule, TeacherModule, MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
     uri: configService.get('DATABASE_URL')
    })
  }), AuthModule, 
    ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, AppResponseDto],
})
export class AppModule {}

