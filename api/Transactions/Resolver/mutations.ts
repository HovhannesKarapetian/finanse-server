import { createTransaction } from './controller';

export const TransactionMutation = {
  createTransaction: {
    resolve: async (parent, args, context, info) => {
      return await createTransaction(args.input);
    },
  },
};
