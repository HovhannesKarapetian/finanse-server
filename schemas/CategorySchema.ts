import { gql } from "apollo-server";

export const CategorySchema = gql`
  type Category {
    id: ID!
    name: String!
    icon: String!
    color: String!
    isIncome: Boolean!
    parrentId: ID
  }

  input CreateCategoryInput {
    name: String!
    icon: String!
    color: String!
    isIncome: Boolean!
    parrentId: ID
  }

  input UpdateCategoryInput {
    id: ID!
    name: String!
    icon: String!
    color: String!
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
