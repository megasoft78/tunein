"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatService = void 0;
const stats_model_1 = require("../models/stats.model");
const utils_1 = require("../utils");
const constants_1 = __importDefault(require("../constants"));
class StatService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const stats = stats_model_1.Stat.find({});
                return utils_1.formatData(stats);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getStatById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                utils_1.checkObjectId(id);
                const stat = yield stats_model_1.Stat.findById(id);
                if (!stat) {
                    throw new Error(constants_1.default.statMessage.STAT_NOT_FOUND);
                }
                return utils_1.formatData(stat);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.createStat = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const stat = new stats_model_1.Stat(Object.assign({}, data));
                const resp = yield stat.save();
                return utils_1.formatData(resp);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.StatService = StatService;
