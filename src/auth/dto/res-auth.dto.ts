import { ApiProperty } from '@nestjs/swagger';

export class ResAuthDto {
  @ApiProperty()
  token: string
}