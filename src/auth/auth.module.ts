import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as process from 'node:process';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UtilsModule } from '../utils/utils.module';
import { ExtractToken } from '../utils/exract-token';

@Module({
  imports: [UserModule, UtilsModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET_KEY'),
        signOptions: { expiresIn: '60s' },
      }),
      global: true
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
