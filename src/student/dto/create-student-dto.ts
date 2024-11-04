import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export class CreateStudentDto extends PartialType(CreateUserDto){
  @ApiProperty()
  rollId: string;
  @ApiProperty()
  grade: string;
}
