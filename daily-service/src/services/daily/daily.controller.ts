import { Controller, Get } from '@nestjs/common';
import { DailyService } from './daily.service';

@Controller('daily')
export class DailyController {
	constructor(private dailyService: DailyService) {}

	@Get()
	async getDailyItems() {
		// TODO : Convert to dto
		return await this.dailyService.getDailyItems();
	}
}
