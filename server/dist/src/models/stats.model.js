"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = exports.statSchema = void 0;
const mongoose_1 = require("mongoose");
exports.statSchema = new mongoose_1.Schema({
    station: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    tagUsed: {
        type: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true,
});
exports.Stat = mongoose_1.model("Stat", exports.statSchema);
