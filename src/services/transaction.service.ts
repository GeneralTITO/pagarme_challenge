import { Transactione } from "../entities";
import { TransactionCreate, TransactionUpdate } from "../interfaces";
import { transactionRepository } from "../repositories";

const create = async (payload: TransactionCreate): Promise<any> => {
  const transaction = transactionRepository.create(payload);
  transaction.card_number = transaction.card_number.slice(12, 16);
  await transactionRepository.save(transaction);

  return transaction;
};

const read = async (userId: number): Promise<any> => {
  const transactions = transactionRepository.find({
    where: { user: { id: userId } },
  });
  return transactions;
};

const update = async (payload: TransactionUpdate, id: number): Promise<any> => {
  const transactionFound: Transactione | null =
    await transactionRepository.findOne({
      where: { id: id },
    });

  const transactionUpdated = transactionRepository.create({
    ...transactionFound,
    ...payload,
  });

  await transactionRepository.save(transactionUpdated);

  return transactionUpdated;
};

const destroy = async (transaction: Transactione): Promise<void> => {
  await transactionRepository.remove(transaction);
};

export default { create, read, update, destroy };
