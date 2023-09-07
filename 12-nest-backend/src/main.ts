import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted: true,
    })
  );

  //Para localhost
  //await app.listen(3000);

  const port = process.env.PORT ?? 3000;
  console.log(`Railway running in port: ${port}`)


  await app.listen( process.env.PORT ?? 3000);
}
bootstrap();
