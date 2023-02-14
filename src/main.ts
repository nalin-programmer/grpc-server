import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
const logger = new Logger('Main');
const microserviceOptions = {
  // transport: Transport.REDIS,  <-- Change this
  transport: Transport.GRPC,  //  <-- to this
  options: {
    // url: 'redis://localhost:6379',                  <-- remove this
    package: 'app', //                                 <-- add this
    protoPath: join(__dirname, '../src/app.proto'), // <-- & this
  },
};

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  // app.listen(() => {
  //   logger.log('Microservice is listening...');
  // });
  await app.listen();
}
bootstrap();
