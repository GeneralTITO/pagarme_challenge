import { Router } from "express";
import middlewares from "../middlewares";
import { payableController } from "../controllers";

export const payableRouter: Router = Router();

payableRouter.get(
  "/:id",
  middlewares.verifyToken,
  middlewares.isOwner,
  payableController.read
);
