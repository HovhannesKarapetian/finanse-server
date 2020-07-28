import { getAllBooks, getBook } from '../controllers/BookController';

export const BookQuery = {
  books: {
    resolve: async (parent, args, context, info) => {
      console.log(parent, 'parrent book1234');

      return await getAllBooks();
    },
  },
  book: {
    resolve: async (parent, args, context, info) => {
      console.log(parent, 'parrent book');
      return await getBook(args.id);
    },
  },
};
