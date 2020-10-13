"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb://mongo:27017/tunein", { useNewUrlParser: true })
    .catch((e) => {
    console.error("Connection error", e.message);
});
exports.db = mongoose_1.default.connection;
