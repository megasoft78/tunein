"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const schemaValidation_middleware_1 = require("../middleware/schemaValidation.middleware");
const user_validator_1 = require("../validators/user.validator");
const user_controller_1 = require("../controllers/user.controller");
/**
 * Router Definition
 */
const usersRouter = express_1.default.Router();
exports.usersRouter = usersRouter;
const validator = new schemaValidation_middleware_1.SchemaValidation();
const userController = new user_controller_1.UserController();
usersRouter.post('/signup', validator.validateBody(user_validator_1.signup), userController.signup);
usersRouter.post('/signin', validator.validateBody(user_validator_1.signin), userController.signin);
/**
 * Controller Definitions
 */
/** Protect the routes by requiring login and authentication
 * All the routes defined below this are secured
 **/
// usersRouter.use(checkJwt);
// usersRouter.get("/", async (req: Request, res: Response) => {
//   try {
//     const users: Users = await UserService.findAll();
//     res.status(200).send(users);
//   } catch (e) {
//     res.status(404).send(e.message);
//   }
// });
// // GET users/:id
// usersRouter.get("/:id", async (req: Request, res: Response) => {
//   const id: number = parseInt(req.params.id, 10);
//   try {
//     const user: User = await UserService.find(id);
//     res.status(200).send(user);
//   } catch (e) {
//     res.status(404).send(e.message);
//   }
// });
// // POST users/
// usersRouter.post("/", async (req: Request, res: Response) => {
//   try {
//     const user: User = req.body.user;
//     await UserService.create(user);
//     res.sendStatus(201);
//   } catch (e) {
//     res.status(404).send(e.message);
//   }
// });
// // PUT users/
// usersRouter.put("/", async (req: Request, res: Response) => {
//   try {
//     const user: User = req.body.item;
//     await UserService.update(user);
//     res.sendStatus(200);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });
// // DELETE users/:id
// usersRouter.delete("/:id", async (req: Request, res: Response) => {
//   try {
//     const id: number = parseInt(req.params.id, 10);
//     await UserService.remove(id);
//     res.sendStatus(200);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });
