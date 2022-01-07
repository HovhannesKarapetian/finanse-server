import { ApolloError } from 'apollo-server';
import { CategoryModel, ICategory } from '../model';
import { ICreateCategoryInput } from '../schemas';

export const getCategory = async (id: string) => {
  let category: ICategory | null;

  try {
    category = await CategoryModel.findById(id);

    if (category != null) {
      category = category.transform();
    }
  } catch (error) {
    console.error('> getBook error: ', error);
    throw new ApolloError('Error retrieving book with id: ' + id);
  }
  return category;
};

export const getAllCategory = async () => {
  let list: ICategory[];
  try {
    list = await CategoryModel.find();
    if (list != null && list.length > 0) {
      list = list.map((u) => u.transform());
    }
  } catch (error) {
    console.error('> getAllTransaction error: ', error);
    throw new ApolloError('Error retrieving all categories');
  }
  return list;
};

export const createCategory = async (args) => {
  let createdCategory;
  let newCategory = {
    ...args,
  };
  try {
    createdCategory = await CategoryModel.create(newCategory);
  } catch (error) {
    console.error('> createBook error: ', error);
    throw new ApolloError('Error saving book with name: ' + args.name);
  }
  return createdCategory;
};
