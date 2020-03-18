import { Controller, Get } from '@nestjs/common';
import { DailyService } from './daily.service';

@Controller('daily')
export class DailyController {
	constructor(private dailyService: DailyService) {}
}
