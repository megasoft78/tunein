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
exports.StatController = void 0;
const stat_service_1 = require("../services/stat.service");
const constants_1 = __importDefault(require("../constants"));
class StatController {
    constructor() {
        this.statService = new stat_service_1.StatService();
        this.response = Object.assign({}, constants_1.default.defaultServerResponse);
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.statService.getAll();
                this.response.status = 200;
                this.response.body = resp;
            }
            catch (error) {
                this.response.message = error.message;
            }
            return res.status(this.response.status).send(this.response);
        });
        this.getStatById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.statService.getStatById(req.params);
                this.response.status = 200;
                this.response.body = resp;
            }
            catch (error) {
                this.response.message = error.message;
            }
            return res.status(this.response.status).send(this.response);
        });
        this.createStat = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.statService.createStat(req.body);
                this.response.status = 200;
                this.response.body = resp;
            }
            catch (error) {
                this.response.message = error.message;
            }
        });
    }
}
exports.StatController = StatController;
