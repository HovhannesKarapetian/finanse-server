import mongoose, { model } from "mongoose";

interface ICategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

type ICategoryDocument = ICategory & mongoose.Document;
export interface ICategoryModel extends ICategoryDocument {
  transform: () => ICategory;
}

const schema: mongoose.SchemaDefinition = {
  name: { type: mongoose.SchemaTypes.String, required: true },
  icon: { type: mongoose.SchemaTypes.String, required: true },
  color: { type: mongoose.SchemaTypes.String, required: true },
  isIncome: { type: mongoose.SchemaTypes.Boolean, required: true },
};

const collectionName: string = "category";

const categorySchema: mongoose.Schema = new mongoose.Schema(schema);

categorySchema.methods.transform = function () {
  var obj = this.toObject();
  var id = obj._id;
  delete obj._id;
  obj.id = id;
  return obj;
};

export const CategoryModel = model<ICategoryModel>(
  collectionName,
  categorySchema
);
