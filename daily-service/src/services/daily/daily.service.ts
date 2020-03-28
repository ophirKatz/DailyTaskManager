import { Injectable } from '@nestjs/common';

import { DailyRepository } from './daily.repository';
import { DailyDaoConverter } from './daily-converter';
import { IDailyItem } from 'src/model/daily.model';

@Injectable()
export class DailyService {
	constructor(private repository: DailyRepository,
		private converter: DailyDaoConverter) {}

	getDailyItems(): Promise<IDailyItem[]> {
		// TODO : Add a dao to model converter
		return this.repository.getAll()
			.then(result => result.map(d => this.converter.convert(d)));
	}

	// TODO : Add support for: Update daily item, delete daily item, undo deletion, create daily item
}
