import { Request, Response } from "express";
import { transactionService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const transction = await transactionService.create(req.body);
  return res.status(201).json(transction);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const transction = await transactionService.read();
  return res.status(200).json(transction);
};

export default { create, read };
