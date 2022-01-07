import { CategoryModel } from "../models";
import { controllerGenerator } from "../helpers";
import { ApolloError } from "apollo-server";
import mongoose, { Document } from "mongoose";

export const getCategory = controllerGenerator.getElement(CategoryModel);

export const createCategory = controllerGenerator.createElement(CategoryModel);

export const getCatgorys = async (...args) => {
  let list;

  try {
    const listDoc = await CategoryModel.find();
    if (listDoc != null && listDoc.length > 0) {
      list = listDoc.map((u) => {
        return u.transform();
      });
      return list;
    }
  } catch (error) {
    console.error("> getAllBooks error: ", error);
    throw new ApolloError("Error retrieving all books");
  }
};

export const updateCategory = controllerGenerator.updateElement(CategoryModel);
