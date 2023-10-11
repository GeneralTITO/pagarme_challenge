import { Payable } from "../entities";
import { PayableCreate, PayableUpdate } from "../interfaces";
import { payableRepository } from "../repositories";

const create = async (payload: PayableCreate): Promise<any> => {
  const Payable = payableRepository.create(payload);
  await payableRepository.save(Payable);

  return Payable;
};

const read = async (userId: number): Promise<any> => {
  const Payables = payableRepository.find({
    where: { user: { id: userId } },
  });
  return Payables;
};

export default { create, read };
