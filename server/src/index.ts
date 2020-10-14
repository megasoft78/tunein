import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { usersRouter } from "./routes/users.router";
import { statsRouter } from "./routes/stats.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";
import { db } from "./db";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// for (let i = 0; i <= 20; i++) {
console.log("**********************************");
// }
/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes
app.use("/users", usersRouter);
app.use("/stats", statsRouter);

/**
 * Use the middlewares
 */
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

/**
 * Webpack HMR Activation
 */
type ModuleId = string | number;

//Handle hot reloading
interface WebpackHotModule {
	hot?: {
		data: any;
		accept(
			dependencies: string[],
			callback?: (updatedDependencies: ModuleId[]) => void
		): void;
		accept(dependency: string, callback?: () => void): void;
		accept(errHandler?: (err: Error) => void): void;
		dispose(callback: (data: any) => void): void;
	};
}

declare const module: WebpackHotModule;

if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => server.close());
}
