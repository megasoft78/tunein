"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStatSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.createStatSchema = joi_1.default.object().keys({
    station: joi_1.default.string().required(),
    duration: joi_1.default.number().required(),
    tagUsed: joi_1.default.string(),
    user: joi_1.default.string().required(),
});
