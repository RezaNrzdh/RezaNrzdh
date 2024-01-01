import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    credentials: true,
    origin: "http://localhost:4200"
  });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
