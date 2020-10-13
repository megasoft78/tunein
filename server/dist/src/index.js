"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const users_router_1 = require("./routes/users.router");
const stats_router_1 = require("./routes/stats.router");
const error_middleware_1 = require("./middleware/error.middleware");
const notFound_middleware_1 = require("./middleware/notFound.middleware");
const db_1 = require("./db");
dotenv_1.default.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = express_1.default();
for (let i = 0; i <= 20; i++) {
    console.log("**********************************");
}
/**
 *  App Configuration
 */
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Database
db_1.db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Routes
app.use("/users", users_router_1.usersRouter);
app.use("/stats", stats_router_1.statsRouter);
/**
 * Use the middlewares
 */
app.use(error_middleware_1.errorHandler);
app.use(notFound_middleware_1.notFoundHandler);
/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
