import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Cors Enable
  app.enableCors();

  // Validation Pipe Global
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}
bootstrap();
