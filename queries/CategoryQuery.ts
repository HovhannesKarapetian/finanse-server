import { getCategory, getCatgorys } from '../controllers/CategoryController';

export const CategotyQuery = {
  Categorys: {
    resolve: async (parent, args, context, info) => {
      return await getCatgorys();
    },
  },
  Category: {
    resolve: async (parent, args, context, info) => {
      return await getCategory(args.id);
    },
  },
};
