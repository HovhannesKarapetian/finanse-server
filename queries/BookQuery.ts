import { getAllBooks, getBook } from '../controllers/BookController';

export const BookQuery = {
  books: {
    resolve: async (parent, args, context, info) => {
      return await getAllBooks();
    },
  },
  book: {
    resolve: async (parent, args, context, info) => {
      return await getBook(args.id);
    },
  },
};
