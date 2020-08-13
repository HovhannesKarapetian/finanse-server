"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = void 0;
var mongoose_1 = require("mongoose");
var transactionSchema = new mongoose_1.Schema({
    title: {
        type: mongoose_1.SchemaTypes.String,
        required: true,
    },
    price: {
        type: mongoose_1.SchemaTypes.Number,
        required: true,
    },
    description: {
        type: mongoose_1.SchemaTypes.String,
    },
    category: {
        type: mongoose_1.SchemaTypes.String,
    },
    createOn: {
        type: mongoose_1.SchemaTypes.String,
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
exports.TransactionModel = mongoose_1.model('Transaction', transactionSchema);
