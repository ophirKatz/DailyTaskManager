import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyController } from './src/services/daily/daily.controller';
import { DailyController } from './services/daily/daily.controller';
import { DailyService } from './services/daily/daily.service';

@Module({
  imports: [],
  controllers: [AppController, DailyController],
  providers: [AppService, DailyService],
})
export class AppModule {}
