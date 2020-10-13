import { Document, Schema, Model, model } from "mongoose";

export type UserModel = Document & {
	email: string;
	password: string;
};
export const userSchema: Schema = new Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toObject: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
				return ret;
			},
		},
	}
);

export const User: Model<UserModel> = model<UserModel>("User", userSchema);
