import mongoose from "mongoose";

export const formatData = (data: any) => {
	if (Array.isArray(data)) {
		let newData = [];
		for (let value of data) {
			newData.push(value.toObject());
		}
		return newData;
	}
	return data.toObject();
};

export const checkObjectId = (id: string) => {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error("Invalid ID");
	}
};
