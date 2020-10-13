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
exports.UserController = void 0;
const users_service_1 = require("../services/users.service");
const constants_1 = __importDefault(require("../constants"));
class UserController {
    constructor() {
        this.userService = new users_service_1.UserService();
        this.response = Object.assign({}, constants_1.default.defaultServerResponse);
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.userService.signup(req.body);
                this.response.status = 200;
                this.response.message = constants_1.default.userMessage.SIGNUP_SUCCESS;
                this.response.body = resp;
            }
            catch (error) {
                this.response.message = error.message;
            }
            return res.status(this.response.status).send(this.response);
        });
        this.signin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseFromService = yield this.userService.signin(req.body);
                this.response.status = 200;
                this.response.message = constants_1.default.userMessage.LOGIN_SUCCESS;
                this.response.body = responseFromService;
            }
            catch (error) {
                console.log("Something went wrong: Controller: login", error);
                this.response.message = error.message;
            }
            return res.status(this.response.status).send(this.response);
        });
    }
}
exports.UserController = UserController;
