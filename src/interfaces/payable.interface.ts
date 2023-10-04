import { Payable } from "./../entities/payables.entity";
import { z } from "zod";
import { payableCreateSchema, payableReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";

type PayableCreate = z.infer<typeof payableCreateSchema>;
type PayableReturn = z.infer<typeof payableReturnSchema>;
type PayableUpdate = DeepPartial<Payable>;
type PayableRepo = Repository<Payable>;

export { PayableCreate, PayableReturn, PayableUpdate, PayableRepo };
