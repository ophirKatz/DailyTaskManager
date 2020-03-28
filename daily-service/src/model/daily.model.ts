import { DailyState } from '../../../daily-common/src/enums/daily-state';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DailySchema = new Schema({
	// A Daily Item consists of a status (created, done), a start time and an end time, and a description
	state: DailyState,
	startTime: Date,
	endTime: Date,
	description: String
});

export interface IDailyItem extends mongoose.Document {
	state: DailyState;
	startTime: Date;
	endTime: Date;
	description: String;
}

export const DailyModel = mongoose.model<IDailyItem>('dailies', DailySchema);