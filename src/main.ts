import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiTags, DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppExceptionFilter } from './app-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters(new AppExceptionFilter(app.get(HttpAdapterHost)));
  
  const config = new DocumentBuilder()
    .setTitle("Result Management")
    .setDescription("Allow teacher to upload their result singly and in bulk")
    .setVersion('1.0')
    .addBearerAuth()
     .build();
  
  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app,  docs);
  await app.listen(3000);
}
bootstrap();
