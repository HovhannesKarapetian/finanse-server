import DataLoader from "dataloader";
import { CategoryModel, ICategory } from "../models";

export const categoryLoader = new DataLoader((keys) => {
  const result = keys.map((authorId) => {
    console.log("keys", keys);

    return CategoryModel.findById(authorId);
  });

  return Promise.resolve(result);
});
