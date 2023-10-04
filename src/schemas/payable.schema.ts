import { z } from "zod";
import { userSchema } from "./user.schema";
import { transactionSchema } from "./transaction.schema";

const payableSchema = z.object({
  id: z.number().int().positive(),
  value: z.number().min(0.01).max(99999999.99),
  status: z.enum(["paid", "waiting_funds"]),
  createdAt: z.string(),
  payment_date: z.string(),
  user: userSchema,
  transaction: transactionSchema,
});

const payableReturnSchema = transactionSchema.extend({});

const payableCreateSchema = transactionSchema.omit({
  id: true,
  user: true,
  transaction: true,
});

const userUpdateSchema = payableCreateSchema.partial();

export {
  payableCreateSchema,
  payableReturnSchema,
  payableSchema,
  userUpdateSchema,
};
