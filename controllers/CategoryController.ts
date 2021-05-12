import { CategoryModel } from '../models';
import { controllerGenerator } from '../helpers';

export const getCategory = controllerGenerator.getElement(CategoryModel);

export const createCategory = controllerGenerator.createElement(CategoryModel);

export const getCatgorys = controllerGenerator.getAllElements(CategoryModel);

export const updateCategory = controllerGenerator.updateElement(CategoryModel);
