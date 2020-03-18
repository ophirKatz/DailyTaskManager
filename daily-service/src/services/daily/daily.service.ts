import { Injectable } from '@nestjs/common';

import * as mongoose from 'mongoose';
import { DailySchema } from 'src/model/daily.schema';

const Daily = mongoose.model('dailies', DailySchema);

@Injectable()
export class DailyService {

	getDailyItems(): Promise<mongoose.Document[]> {
		return Daily.find({}).exec();
	}

	// TODO : Add support for: Update daily item, delete daily item, undo deletion, create daily item
}
