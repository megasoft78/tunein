"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidation = void 0;
const constants_1 = __importDefault(require("../constants"));
class SchemaValidation {
    constructor() {
        this.validateObjectSchema = (data, schema) => {
            const result = schema.validate(data, { convert: false });
            if (result.error) {
                const errorDetails = result.error.details.map((value) => {
                    return {
                        error: value.message,
                        path: value.path,
                    };
                });
                return errorDetails;
            }
            return null;
        };
        this.validateBody = (schema) => {
            return (req, res, next) => {
                let response = Object.assign({}, constants_1.default.defaultServerResponse);
                const error = this.validateObjectSchema(req.body, schema);
                if (error) {
                    response.body = error;
                    response.message = constants_1.default.requestValidationMessage.BAD_REQUEST;
                    return res.status(response.status).send(response);
                }
                return next();
            };
        };
        this.validateQueryParams = (schema) => {
            return (req, res, next) => {
                let response = Object.assign({}, constants_1.default.defaultServerResponse);
                const error = this.validateObjectSchema(req.query, schema);
                if (error) {
                    response.body = error;
                    response.message = constants_1.default.requestValidationMessage.BAD_REQUEST;
                    return res.status(response.status).send(response);
                }
                return next();
            };
        };
    }
}
exports.SchemaValidation = SchemaValidation;
