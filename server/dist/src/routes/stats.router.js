"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsRouter = void 0;
const express_1 = __importDefault(require("express"));
const stat_controller_1 = require("../controllers/stat.controller");
const schemaValidation_middleware_1 = require("../middleware/schemaValidation.middleware");
const tokenValidation_middleware_1 = require("../middleware/tokenValidation.middleware");
const stats_validator_1 = require("../validators/stats.validator");
/**
 * Router Definition
 */
const statsRouter = express_1.default.Router();
exports.statsRouter = statsRouter;
const validator = new schemaValidation_middleware_1.SchemaValidation();
const statController = new stat_controller_1.StatController();
/**
 * Route definitions with middleware
 */
statsRouter.post("/", tokenValidation_middleware_1.validateToken, validator.validateBody(stats_validator_1.createStatSchema), statController.createStat);
statsRouter.get("/:id", tokenValidation_middleware_1.validateToken, statController.getStatById);
statsRouter.get("/", tokenValidation_middleware_1.validateToken, statController.getAll);
