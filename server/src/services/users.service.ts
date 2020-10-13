import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { formatData } from "../utils";
import constants from "../constants";

interface Signin {
	email: string;
	password: string;
}
interface Signup {
	email: string;
	password: string;
}
class UserService {
	signup = async ({ email, password }: Signup) => {
		try {
			// Check if this email is already registered, if so throw an error
			const existingUser = await User.findOne({ email });
			if (existingUser) {
				throw new Error(constants.userMessage.DUPLICATE_EMAIL);
			}

			// Create the user
			password = await bcrypt.hash(password, 12);
			const newUser = new User({ email, password });
			const resp = await newUser.save();
			return formatData(resp);
		} catch (error) {
			throw new Error(error);
		}
	};

	signin = async ({ email, password }: Signin) => {
		try {
			const user = await User.findOne({ email });
			const pwd = { user };
			if (!user) {
				throw new Error(constants.userMessage.USER_NOT_FOUND);
			}
			const isValid = await bcrypt.compare(password, user.password);
			if (!isValid) {
				throw new Error(constants.userMessage.INVALID_PASSWORD);
			}
			const token = jwt.sign(
				{ id: user._id },
				process.env.SECRET_KEY || "my-secret-key",
				{ expiresIn: "1d" }
			);
			return { token };
		} catch (error) {
			throw new Error(error);
		}
	};
}

export { UserService };
