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

const update = async (payload: PayableUpdate, id: number): Promise<any> => {
  const PayableFound: Payable | null = await payableRepository.findOne({
    where: { id: id },
  });

  const PayableUpdated = payableRepository.create({
    ...PayableFound,
    ...payload,
  });

  await payableRepository.save(PayableUpdated);

  return PayableUpdated;
};

const destroy = async (Payable: Payable): Promise<void> => {
  await payableRepository.remove(Payable);
};

export default { create, read, update, destroy };
