import express, { Request, Response, NextFunction } from "express";
import constants from "../constants";
import jwt from "jsonwebtoken";

export const validateToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let response = { ...constants.defaultServerResponse };
	try {
		if (!req.headers.authorization) {
			throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
		}
		const token = req.headers.authorization.split("Bearer")[1].trim();
		const decoded = jwt.verify(
			token,
			process.env.SECRET_KEY || "my-secret-key"
		);
		console.log("decoded", decoded);
		return next();
	} catch (error) {
		console.log("Error", error);
		response.message = error.message;
		response.status = 401;
	}
	return res.status(response.status).send(response);
};
