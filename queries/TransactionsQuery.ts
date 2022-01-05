import { getTransaction, getTransactions } from "../controllers";

export const TransactionsQuery = {
  transactions: {
    resolve: async (parent, args, context, info) => {
      return await getTransactions();
    },
  },
  transaction: {
    resolve: async (parent, args, context, info) => {
      return await getTransaction(args.id);
    },
  },
};
