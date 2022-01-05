import { getAllCategory, getCategory } from './controller';

export const CategoryQuery = {
  category: {
    resolve: async (parent, args, context, info) => await getCategory(args.id),
  },
  categories: {
    resolve: async () => await getAllCategory(),
  },
};
