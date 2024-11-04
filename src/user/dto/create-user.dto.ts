import { ApiProperty, ApiTags, PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from '../../auth/dto/login-auth.dto';
import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateUserDto  {
  @ApiProperty()
  @IsEmail()
  email: string
  
  @ApiProperty()
  @IsAlphanumeric()
  password: string
  
  @ApiProperty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsString()
  role: string;
}
