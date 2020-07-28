import { createCategory } from './controller';

export const CategoryMutation = {
  createCategory: {
    resolve: async (parent, args, context, info) => {
      return await createCategory(args.input);
    },
  },
};
