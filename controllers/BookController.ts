import BookModel, { IBook } from '../models/BookModel';
import { ApolloError } from 'apollo-server';

export const getAllBooks = async () => {
  let list: IBook[];
  try {
    list = await BookModel.find();
    if (list != null && list.length > 0) {
      list = list.map((u) => {
        return u.transform();
      });
    }
  } catch (error) {
    console.error('> getAllBooks error: ', error);
    throw new ApolloError('Error retrieving all books');
  }

  return list;
};

export const getBook = async (id: string) => {
  let book: IBook | null;

  try {
    book = await BookModel.findById(id);
    if (book != null) {
      book = book.transform();
    }
  } catch (error) {
    console.error('> getBook error: ', error);
    throw new ApolloError('Error retrieving book with id: ' + id);
  }

  return book;
};

export const createBook = async (connection, args: IBook) => {
  let createdBook: IBook;

  try {
    createdBook = (await BookModel.create(args)).transform();
  } catch (error) {
    console.error('> createBook error: ', error);
    throw new ApolloError('Error saving book with name: ' + args.name);
  }

  return createdBook;
};

export const deleteBook = async (connection, id: string) => {
  let deletedBook: IBook | null;

  try {
    deletedBook = await BookModel.findByIdAndRemove(id);
    if (deletedBook != null) {
      deletedBook = deletedBook.transform();
    }
  } catch (error) {
    console.error('> deleteBook error: ', error);
    throw new ApolloError('Error deleting book with id: ' + id);
  }

  return deletedBook;
};

export const updateBook = async (context, args: IBook) => {
  let updatedBook: IBook | null;

  try {
    updatedBook = await BookModel.findByIdAndUpdate(
      args.id,
      {
        name: args.name,
        description: args.description,
      },
      { new: true }
    );

    if (updatedBook != null) {
      updatedBook = updatedBook.transform();
    }
  } catch (error) {
    console.error('> updateBook error: ', error);
    throw new ApolloError('Error updating book with id: ' + args.id);
  }

  return updatedBook;
};
