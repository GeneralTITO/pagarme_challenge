import { Router } from "express";
import middlewares from "../middlewares";
import { transactionCreateSchema } from "../schemas";
import { transactionController } from "../controllers";

export const transactionRouter: Router = Router();

transactionRouter.post(
  "",
  middlewares.validateBody(transactionCreateSchema),
  middlewares.uniqueEmail,
  transactionController.create
);
transactionRouter.get("/", transactionController.read);
