"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
var mongoose_1 = require("mongoose");
var colorSchema = new mongoose_1.Schema({
    HUE: {
        type: mongoose_1.SchemaTypes.String,
        required: true,
    },
    SHADE: {
        type: mongoose_1.SchemaTypes.String,
        required: true,
    },
    hex: {
        type: mongoose_1.SchemaTypes.String,
        required: true,
    },
});
var categorySchema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.SchemaTypes.String,
        required: true,
    },
    color: {
        type: colorSchema,
    },
    children: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
        },
    ],
    parentId: {
        type: mongoose_1.SchemaTypes.ObjectId,
    },
    isSubcategory: {
        type: mongoose_1.SchemaTypes.Boolean,
        default: false,
    },
    isExpence: {
        type: mongoose_1.SchemaTypes.Boolean,
        default: false,
    },
});
categorySchema.methods.transform = function () {
    var obj = this.toObject();
    var id = obj._id;
    delete obj._id;
    obj.id = id;
    return obj;
};
exports.CategoryModel = mongoose_1.model('Category', categorySchema);
