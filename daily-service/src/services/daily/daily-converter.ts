import { DailyModel, IDailyItem } from './../../model/daily.model';
import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DailyDaoConverter {
	convert(schemaModel: mongoose.Document): IDailyItem {
		if (!(schemaModel instanceof DailyModel)) {
			return null;
		}
		
		return <IDailyItem>schemaModel;
	}
}