import { Schema, model, SchemaTypes, Document, Model } from 'mongoose';

export interface ITransaction extends Document {
  id: string;
  title: string;
  description?: string;
  price: number;
  category?: string;
  isArchived?: boolean;
  createOn: string;
  transform: () => ITransaction;
}

const transactionSchema = new Schema<ITransaction>({
  title: {
    type: SchemaTypes.String,
    required: true,
  },
  price: {
    type: SchemaTypes.Number,
    required: true,
  },
  description: {
    type: SchemaTypes.String,
  },
  category: {
    type: SchemaTypes.String,
  },
  createOn: {
    type: SchemaTypes.String,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
});

transactionSchema.methods.transform = function () {
  var obj = this.toObject();
  var id = obj._id;
  delete obj._id;
  obj.id = id;
  return obj;
};

export const TransactionModel: Model<ITransaction> = model('Transaction', transactionSchema);
