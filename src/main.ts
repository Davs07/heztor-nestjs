import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Cambia esto al dominio que desees permitir
    credentials: true, // Para permitir cookies
  });
  app.use(cookieParser())
  await app.listen(3000);
}
bootstrap();
