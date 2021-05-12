import { TransactionsModel } from '../models';
import { controllerGenerator } from '../helpers';

export const getTransaction = controllerGenerator.getElement(TransactionsModel);

export const createTransactions = controllerGenerator.createElement(TransactionsModel);

export const getTransactions = controllerGenerator.getAllElements(TransactionsModel);

export const updateTransactions = controllerGenerator.updateElement(TransactionsModel);
