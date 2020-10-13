import express from "express";
import { StatController } from "../controllers/stat.controller";
import { SchemaValidation } from "../middleware/schemaValidation.middleware";
import { validateToken } from "../middleware/tokenValidation.middleware";
import { createStatSchema } from "../validators/stats.validator";

/**
 * Router Definition
 */
const statsRouter = express.Router();
const validator = new SchemaValidation();
const statController = new StatController();

/**
 * Route definitions with middleware
 */
statsRouter.post(
	"/",
	validateToken,
	validator.validateBody(createStatSchema),
	statController.createStat
);

statsRouter.get("/:id", validateToken, statController.getStatById);

statsRouter.get("/", validateToken, statController.getAll);

export { statsRouter };
