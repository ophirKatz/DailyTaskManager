import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Consts } from './helpers/consts';
import * as mongoose from 'mongoose';

function connectToMongoDB(): void {
  mongoose.connect(Consts.mongoDBUrl, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
}

async function bootstrap() {
  connectToMongoDB();

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}

bootstrap();