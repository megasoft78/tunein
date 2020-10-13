import express, { Request, Response } from "express";
import { UserService } from "../services/users.service";
import constants from "../constants";

class UserController {
	private userService: UserService = new UserService();
	private response = { ...constants.defaultServerResponse };

	signup = async (req: Request, res: Response) => {
		try {
			const resp = await this.userService.signup(req.body);
			this.response.status = 200;
			this.response.message = constants.userMessage.SIGNUP_SUCCESS;
			this.response.body = resp;
		} catch (error) {
			this.response.message = error.message;
		}

		return res.status(this.response.status).send(this.response);
	};

	signin = async (req: Request, res: Response) => {
		try {
			const responseFromService = await this.userService.signin(req.body);
			this.response.status = 200;
			this.response.message = constants.userMessage.LOGIN_SUCCESS;
			this.response.body = responseFromService;
		} catch (error) {
			console.log("Something went wrong: Controller: login", error);
			this.response.message = error.message;
		}
		return res.status(this.response.status).send(this.response);
	};
}

export { UserController };
