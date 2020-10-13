import { Document, Schema, Model, model } from "mongoose";
import { IStat } from "../interfaces";
import bcrypt from "bcrypt-nodejs";


export const statSchema: Schema = new Schema(
	{
		station: {
			type: String,
			required: true,
		},
		duration: {
			type: Number,
			required: true,
		},
		tagUsed: {
			type: String,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},
	},
	{
		timestamps: true,
	}
);

export const Stat: Model<IStat> = model<IStat>("Stat", statSchema);
