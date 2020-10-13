import mongoose from "mongoose";

mongoose
	.connect("mongodb://mongo:27017/tunein", { useNewUrlParser: true })
	.catch((e) => {
		console.error("Connection error", e.message);
	});

export const db = mongoose.connection;
