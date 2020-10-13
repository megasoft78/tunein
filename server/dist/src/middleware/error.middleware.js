"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
exports.errorHandler = (error, request, response, next) => {
    const status = error.statusCode || 500;
    const message = error.message || "We have encountered an issue, please try again";
    response.status(status).send(message);
};
