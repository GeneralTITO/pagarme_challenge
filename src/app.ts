import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { userRouter } from "./routers/user.route";

const app: Application = express();
app.use(json());

app.use("/user", userRouter);

app.use(middlewares.handleError);

export default app;
