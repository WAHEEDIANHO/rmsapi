import { Module } from '@nestjs/common';
import { ValidationPipe } from './validation.pipe';
import { ExtractToken } from './exract-token';

@Module({
  providers: [ExtractToken],
  exports: [ExtractToken]
})
export class UtilsModule {}
