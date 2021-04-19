import { ApolloError } from 'apollo-server';
import mongoose, { CreateQuery, Document } from 'mongoose';

type TransformFunction<T> = () => T;

interface Transform<T> {
  transform: TransformFunction<T>;
}

type WithTransform<T> = T & Transform<T>;
type ModelType<T> = WithTransform<T> & Document;

function getElement<T>(model: mongoose.Model<ModelType<T>, {}>) {
  return async (id: string) => {
    let element: T | null;

    try {
      let elementDoc = await model.findById(id);
      if (elementDoc != null) {
        element = elementDoc.transform();
        return element;
      }
    } catch (error) {
      console.error('> getBook error: ', error);
      throw new ApolloError('Error retrieving category with id: ' + id);
    }
  };
}

function createElement<T>(model: mongoose.Model<ModelType<T>, {}>) {
  return async (args: CreateQuery<T>) => {
    let createdBook: T;

    try {
      createdBook = await model.create(args);
    } catch (error) {
      console.error('> createBook error: ', error);
      throw new ApolloError('Error saving');
    }
    return createdBook;
  };
}

function getAllElements<T>(model: mongoose.Model<ModelType<T>, {}>) {
  return async () => {
    let list: T[] | null;
    try {
      const listDoc = await model.find();
      if (listDoc != null && listDoc.length > 0) {
        list = listDoc.map((u) => {
          return u.transform();
        });
        return list;
      }
    } catch (error) {
      console.error('> getAllBooks error: ', error);
      throw new ApolloError('Error retrieving all books');
    }
  };
}

const controllerGenerator = {
  getElement,
  createElement,
  getAllElements,
};

export { controllerGenerator };
