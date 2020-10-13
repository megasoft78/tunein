"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkObjectId = exports.formatData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.formatData = (data) => {
    if (Array.isArray(data)) {
        let newData = [];
        for (let value of data) {
            newData.push(value.toObject());
        }
        return newData;
    }
    return data.toObject();
};
exports.checkObjectId = (id) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid ID");
    }
};
