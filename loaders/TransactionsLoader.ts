import DataLoader from "dataloader";
import { TransactionsModel } from "../models";

export const transactionLoader = new DataLoader((keys) => {
  const result = keys.map((id) => {
    return TransactionsModel.find({ categoryId: `${id}` });
  });

  return Promise.resolve(result);
});
