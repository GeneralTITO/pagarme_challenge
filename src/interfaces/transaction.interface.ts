import { z } from "zod";
import { transactionCreateSchema, transactionReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Transactione } from "../entities";

type TransactionCreate = z.infer<typeof transactionCreateSchema>;
type TransactionReturn = z.infer<typeof transactionReturnSchema>;
type TransactionUpdate = DeepPartial<Transactione>;
type TransactionRepo = Repository<Transactione>;

export {
  TransactionCreate,
  TransactionReturn,
  TransactionUpdate,
  TransactionRepo,
};
