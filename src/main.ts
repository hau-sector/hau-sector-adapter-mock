import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupCors } from './core/helpers/cors';
import { setupLogger } from './core/helpers/logger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  setupCors(app);
  setupLogger(app);

  await app.listen(8888, '0.0.0.0');

  return app;
}

bootstrap();
