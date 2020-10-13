import Joi, { Schema } from "@hapi/joi";
import express, { Request, Response, NextFunction } from "express";
import constants from "../constants";

class SchemaValidation {
	validateObjectSchema = (data: any, schema: Schema) => {
		const result = schema.validate(data, { convert: false });
		if (result.error) {
			const errorDetails = result.error.details.map((value: any) => {
				return {
					error: value.message,
					path: value.path,
				};
			});
			return errorDetails;
		}
		return null;
	};

	validateBody = (schema: Schema) => {
		return (req: Request, res: Response, next: NextFunction) => {
			let response = { ...constants.defaultServerResponse };
			const error = this.validateObjectSchema(req.body, schema);
			if (error) {
				response.body = error;
				response.message = constants.requestValidationMessage.BAD_REQUEST;
				return res.status(response.status).send(response);
			}
			return next();
		};
	};

	validateQueryParams = (schema: Schema) => {
		return (req: Request, res: Response, next: NextFunction) => {
			let response = { ...constants.defaultServerResponse };
			const error = this.validateObjectSchema(req.query, schema);
			if (error) {
				response.body = error;
				response.message = constants.requestValidationMessage.BAD_REQUEST;
				return res.status(response.status).send(response);
			}
			return next();
		};
	};
}

export { SchemaValidation };
