import { Schema, model, SchemaTypes, Document, Model } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  color?: IColor;
  children?: string[];
  parentId: string;
  isSubcategory: boolean;
  isExpence: boolean;
  transform: () => ICategory;
}


export interface IColor extends Document {
  HUE: string;
  SHADE: string;
  hex: string;
}

const colorSchema = new Schema<IColor>({
  HUE: {
    type: SchemaTypes.String,
    required: true,
  },
  SHADE: {
    type: SchemaTypes.String,
    required: true,
  },
  hex: {
    type: SchemaTypes.String,
    required: true,
  },
});

const categorieschema = new Schema<ICategory>({
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  color: {
    type: colorSchema,
  },
  children: [
    {
      type: SchemaTypes.ObjectId,
    },
  ],
  parentId: {
    type: SchemaTypes.ObjectId,
  },
  isSubcategory: {
    type: SchemaTypes.Boolean,
    default: false,
  },
  isExpence: {
    type: SchemaTypes.Boolean,
    default: false,
  },
});

categorieschema.methods.transform = function () {
  var obj = this.toObject();
  var id = obj._id;
  delete obj._id;
  obj.id = id;
  return obj;
};

export const CategoryModel: Model<ICategory> = model('Category', categorieschema);
