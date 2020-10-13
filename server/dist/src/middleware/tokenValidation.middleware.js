"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const constants_1 = __importDefault(require("../constants"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.validateToken = (req, res, next) => {
    let response = Object.assign({}, constants_1.default.defaultServerResponse);
    try {
        if (!req.headers.authorization) {
            throw new Error(constants_1.default.requestValidationMessage.TOKEN_MISSING);
        }
        const token = req.headers.authorization.split("Bearer")[1].trim();
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "my-secret-key");
        console.log("decoded", decoded);
        return next();
    }
    catch (error) {
        console.log("Error", error);
        response.message = error.message;
        response.status = 401;
    }
    return res.status(response.status).send(response);
};
