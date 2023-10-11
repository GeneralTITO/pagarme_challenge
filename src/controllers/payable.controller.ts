import { Request, Response } from "express";
import { payableService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payable = await payableService.create(req.body);
  return res.status(201).json(payable);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const payableId: number = Number(req.params.id);
  const payable = await payableService.read(payableId);
  return res.status(200).json(payable);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const payable = await payableService.update(req.body, id);
  return res.status(200).json(payable);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await payableService.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
