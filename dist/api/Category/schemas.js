"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
var apollo_server_1 = require("apollo-server");
exports.CategorySchema = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Color {\n    HUE: String!\n    SHADE: String!\n    hex: String!\n  }\n  type Category {\n    id: ID!\n    name: String!\n    color: Color\n    children: [ID]\n    parentId: ID\n    isSubcategory: Boolean!\n    isExpence: Boolean!\n  }\n  input CreateColor {\n    HUE: String!\n    SHADE: String!\n    hex: String!\n  }\n  input CreateCategoryInput {\n    name: String!\n    color: CreateColor\n    children: [ID]\n    parentId: ID\n    isSubcategory: Boolean!\n    isExpence: Boolean!\n  }\n  extend type Query {\n    categorys: [Category]\n    category(id: String!): Category\n  }\n  extend type Mutation {\n    createCategory(input: CreateCategoryInput!): Category\n  }\n"], ["\n  type Color {\n    HUE: String!\n    SHADE: String!\n    hex: String!\n  }\n  type Category {\n    id: ID!\n    name: String!\n    color: Color\n    children: [ID]\n    parentId: ID\n    isSubcategory: Boolean!\n    isExpence: Boolean!\n  }\n  input CreateColor {\n    HUE: String!\n    SHADE: String!\n    hex: String!\n  }\n  input CreateCategoryInput {\n    name: String!\n    color: CreateColor\n    children: [ID]\n    parentId: ID\n    isSubcategory: Boolean!\n    isExpence: Boolean!\n  }\n  extend type Query {\n    categorys: [Category]\n    category(id: String!): Category\n  }\n  extend type Mutation {\n    createCategory(input: CreateCategoryInput!): Category\n  }\n"])));
var templateObject_1;
