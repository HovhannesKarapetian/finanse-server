import { gql } from 'apollo-server';
import { IColor } from './model';

export interface ICreateCategoryInput {
  name: string;
  color?: IColor;
  children?: string[];
  parentId?: string;
  isSubcategory: boolean;
  isExpence: boolean;
}

export const CategorySchema = gql`
  type Color {
    HUE: String!
    SHADE: String!
    hex: String!
  }
  type Category {
    id: ID!
    name: String!
    color: Color
    children: [ID]
    parentId: ID
    isSubcategory: Boolean!
    isExpence: Boolean!
  }
  input CreateColor {
    HUE: String!
    SHADE: String!
    hex: String!
  }
  input CreateCategoryInput {
    name: String!
    color: CreateColor
    children: [ID]
    parentId: ID
    isSubcategory: Boolean!
    isExpence: Boolean!
  }
  extend type Query {
    categorys: [Category]
    category(id: String!): Category
  }
  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category
  }
`;
