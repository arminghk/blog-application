import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  admin.initializeApp({
    credential: admin.credential.cert('firebase-service-account.json'),
  });
  app.useGlobalPipes(new ValidationPipe());
  let configService = app.get(ConfigService)
  app.enableCors(configService.get('App.cors'));
  let port = configService.get('App.port')
  await app.listen(port , ()=>{
    console.log(`server is running on port:${port}`)
  });
}
bootstrap();
