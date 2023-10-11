import { Request, Response } from "express";
import { transactionService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const transction = await transactionService.create(req.body);
  return res.status(201).json(transction);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const transctionId: number = Number(req.params.id);
  const transction = await transactionService.read(transctionId);
  return res.status(200).json(transction);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const transction = await transactionService.update(req.body, id);
  return res.status(200).json(transction);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await transactionService.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
