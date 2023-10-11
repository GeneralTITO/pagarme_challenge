import { TransactionCreate, TransactionUpdate } from "../interfaces";
import { transactionRepository } from "../repositories";

const create = async (payload: TransactionCreate): Promise<any> => {
  const transaction = transactionRepository.create(payload);
  transaction.card_number = transaction.card_number.slice(12, 16);
  await transactionRepository.save(transaction);

  return transaction;
};

const read = async (): Promise<any> => {
  const transactions = transactionRepository.find();
  return transactions;
};

export default { create, read };
