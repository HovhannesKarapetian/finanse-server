"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
/**
 * user schema
 */
var schema = {
    name: { type: mongoose_1.default.SchemaTypes.String, required: true, unique: true },
    password: { type: mongoose_1.default.SchemaTypes.String, required: true },
    email: { type: mongoose_1.default.SchemaTypes.String, required: true }
};
// user collection name
var collectionName = "user";
var userSchema = new mongoose_1.default.Schema(schema);
/**
 * transforms user object, removes password and
 * changes _id to id
 */
userSchema.methods.transform = function () {
    var obj = this.toObject();
    delete obj.password;
    var id = obj._id;
    delete obj._id;
    obj.id = id;
    return obj;
};
/**
 * creates user model
 * @param conn database connection
 * @returns user model
 */
var UserModel = function (conn) {
    return conn.model(collectionName, userSchema);
};
exports.default = UserModel;
