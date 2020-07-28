import { ApolloError } from 'apollo-server';
import { TransactionModel, ITransaction } from '../model';

export const getTransaction = async (id: string) => {
  let transaction: ITransaction | null;

  try {
    transaction = await TransactionModel.findById(id);
    if (transaction != null) {
      transaction = transaction.transform();
    }
  } catch (error) {
    console.error('> getBook error: ', error);
    throw new ApolloError('Error retrieving book with id: ' + id);
  }
  return transaction;
};

export const getAllTransaction = async () => {
  let list: ITransaction[];
  try {
    list = await TransactionModel.find();
    if (list != null && list.length > 0) {
      list = list.map((u) => {
        return u.transform();
      });
    }
  } catch (error) {
    console.error('> getAllTransaction error: ', error);
    throw new ApolloError('Error retrieving all transactions');
  }

  return list;
};

export const createTransaction = async (args: ITransaction) => {
  let createdTransaction: ITransaction;
  let newTransactions = {
    ...args,
    createOn: new Date().toDateString(),
  };
  try {
    createdTransaction = (await TransactionModel.create(newTransactions)).transform();
  } catch (error) {
    console.error('> createBook error: ', error);
    throw new ApolloError('Error saving book with name: ' + args.title);
  }

  return createdTransaction;
};
