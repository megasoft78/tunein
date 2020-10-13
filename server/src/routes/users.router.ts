import express, { Request, Response } from 'express';
import { SchemaValidation } from '../middleware/schemaValidation.middleware';
import { signup, signin } from '../validators/user.validator';
import { UserController } from '../controllers/user.controller';

/**
 * Router Definition
 */

const usersRouter = express.Router();
const validator = new SchemaValidation();
const userController = new UserController();

usersRouter.post('/signup',
  validator.validateBody(signup),
  userController.signup
);

usersRouter.post('/signin',
  validator.validateBody(signin),
  userController.signin
);

export { usersRouter };
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