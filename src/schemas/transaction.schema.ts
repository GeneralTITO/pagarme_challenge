import { z } from "zod";
import { userSchema } from "./user.schema";

const transactionSchema = z.object({
  id: z.number().int().positive(),
  value: z.number().min(0.01).max(9999999999.99),
  payment_method: z.enum(["debit_card", "credit_card"]),
  card_number: z.string().min(16).max(16),
  cardholder_name: z.string().min(1).max(250),
  card_expiration_date: z.string().min(6).max(6),
  cvv: z.string().min(3).max(3),
  createdAt: z.string(),
  user: userSchema,
});

const transactionReturnSchema = transactionSchema.extend({
  card_name: z.string().min(4).max(4),
});

const transactionCreateSchema = transactionSchema.omit({
  id: true,
  user: true,
  createdAt: true,
});

const userUpdateSchema = transactionCreateSchema.partial();

export {
  transactionCreateSchema,
  transactionReturnSchema,
  transactionSchema,
  userUpdateSchema,
};
