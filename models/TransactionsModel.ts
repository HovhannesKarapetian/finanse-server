import mongoose, { Date, model } from 'mongoose';

export interface ITransactions extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  income: boolean;
  value: number;
  categoryId: string;
  date: Date;
  transform: () => ITransactions;
}

const schema: mongoose.SchemaDefinition = {
  name: { type: mongoose.SchemaTypes.String, required: true, unique: true },
  description: { type: mongoose.SchemaTypes.String, required: false },
  income: { type: mongoose.SchemaTypes.Boolean, required: true },
  value: { type: mongoose.SchemaTypes.Number, required: true },
  categoryId: { type: mongoose.SchemaTypes.String, required: true },
  date: { type: mongoose.SchemaTypes.Date, required: true },
};

const collectionName: string = 'transactions';

const transactionsSchema: mongoose.Schema = new mongoose.Schema(schema);

transactionsSchema.methods.transform = function () {
  var obj = this.toObject();
  var id = obj._id;
  delete obj._id;
  obj.id = id;
  return obj;
};

export const TransactionsModel: mongoose.Model<ITransactions> = model(collectionName, transactionsSchema);
