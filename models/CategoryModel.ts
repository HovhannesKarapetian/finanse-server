import mongoose, { model } from "mongoose";

export type IColorHUE =
  | "red"
  | "pink"
  | "purple"
  | "deepPurple"
  | "indigo"
  | "blue"
  | "lightBlue"
  | "cyan"
  | "teal"
  | "green"
  | "lightGreen"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deepOrange";

export type IColorSHADE =
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "A100"
  | "A200"
  | "A400"
  | "A700";

export interface IColor {
  hex: string;
  HUE: IColorHUE;
  SHADE: IColorSHADE;
}

export interface ICategory {
  id: string;
  name: string;
  icon: string;
  color: IColor;
  parrentId?: string;
}

type ICategoryDocument = ICategory & mongoose.Document;
export interface ICategoryModel extends ICategoryDocument {
  transform: () => ICategory;
}

const schema: mongoose.SchemaDefinition = {
  name: { type: mongoose.SchemaTypes.String, required: true },
  icon: { type: mongoose.SchemaTypes.String, required: true },
  color: {
    hex: { type: mongoose.SchemaTypes.String, required: true },
    HUE: { type: mongoose.SchemaTypes.String, required: true },
    SHADE: { type: mongoose.SchemaTypes.String, required: true },
  },
  isIncome: { type: mongoose.SchemaTypes.Boolean, required: true },
  parrentId: { type: mongoose.SchemaTypes.String, required: false },
};

const collectionName: string = "category";

const categorieschema: mongoose.Schema = new mongoose.Schema(schema);

categorieschema.methods.transform = function () {
  var obj = this.toObject();
  var id = obj._id;
  delete obj._id;
  obj.id = id;
  return obj;
};

export const CategoryModel = model<ICategoryModel>(
  collectionName,
  categorieschema
);
