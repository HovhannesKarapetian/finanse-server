import { gql } from "apollo-server";

export const CategorySchema = gql`
  enum ColorHUE {
    red
    pink
    purple
    deepPurple
    indigo
    blue
    lightBlue
    cyan
    teal
    green
    lightGreen
    lime
    yellow
    amber
    orange
    deepOrange
  }

  type Color {
    hex: String!
    HUE: ColorHUE!
    SHADE: String!
  }

  type Category {
    id: ID!
    name: String!
    icon: String!
    color: Color!
    isIncome: Boolean!
    parrentId: ID
  }

   input ColorInput {
    hex: String!
    HUE: ColorHUE!
    SHADE: String!
   }

  input CreateCategoryInput {
    name: String!
    icon: String!
    color: ColorInput!
    isIncome: Boolean!
    parrentId: ID
  }

  input UpdateCategoryInput {
    id: ID!
    name: String!
    icon: String!
    color: ColorInput!
    isIncome: Boolean!
    parrentId: ID
  }

  extend type Query {
    categories: [Category]
    category(id: String!): Category
  }

  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category
    updateCategory(input: UpdateCategoryInput!): Category
    deleteCategory(id: String!): [Category]
  }
`;
