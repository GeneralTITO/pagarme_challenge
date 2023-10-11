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



export default { create, read };
