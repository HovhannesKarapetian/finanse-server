import DataLoader from "dataloader";
import { CategoryModel, ICategory } from "../models";

export const categoryLoader = new DataLoader((keys) => {
  const result = keys.map((id) => {
    return CategoryModel.findById(id);
  });

  return Promise.resolve(result);
});
