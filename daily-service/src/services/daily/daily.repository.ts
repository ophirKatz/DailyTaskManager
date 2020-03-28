import { DailyModel } from './../../model/daily.model';
import { Injectable } from "@nestjs/common";

import * as mongoose from 'mongoose';

@Injectable()
export class DailyRepository {
	getAll(): Promise<mongoose.Document[]> {
		return DailyModel.find({}).exec();
	}
}