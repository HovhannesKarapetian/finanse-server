import { gql } from 'apollo-server';

export const CategorySchema = gql`
  type Category {
    id: ID!
    name: String!
    icon: String!
    color: String!
    isIncome: Boolean!
  }

  input CreateCategoryInput {
    name: String!
    icon: String!
    color: String!
    isIncome: Boolean!
  }

  input UpdateCategoryInput {
    id: ID!
    name: String!
    icon: String!
    color: String!
    isIncome: Boolean!
  }

  extend type Query {
    Categorys: [Category]
    Category(id: String!): Category
  }

  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category
    updateCategory(input: UpdateCategoryInput!): Category
    deleteCategory(id: String!): [Category]
  }
`;
