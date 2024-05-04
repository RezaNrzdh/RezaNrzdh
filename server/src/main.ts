import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet({
    crossOriginResourcePolicy: false,
  }));
  app.use(cookieParser());
  app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
    next();
  });
  app.enableCors({ credentials: true, origin: "http://localhost:8080" });

  await app.listen(3000);
}
bootstrap();
