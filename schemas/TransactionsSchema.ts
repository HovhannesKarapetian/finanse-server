import { gql } from 'apollo-server';

export const TransactionsSchema = gql`
  type Transactions {
    id: ID!
    name: String!
    description: String
    income: Boolean!
    category: Category
    value: Int!
    date: String!
  }

  input CreateTransactionsInput {
    name: String!
    description: String
    income: Boolean!
    categoryId: String!
    value: Int!
    date: String!
  }

  input UpdateTransactionsInput {
    id: String!
    name: String!
    description: String
    income: Boolean!
    categoryId: String!
    value: Int!
    date: String!
  }

  extend type Query {
    transactions: [Transactions]
    transaction(id: String!): Transactions
  }

  extend type Mutation {
    createTransactions(input: CreateTransactionsInput!): Transactions
    updateTransactions(input: UpdateTransactionsInput!): Transactions
    deleteTransactions(id: String!): Transactions
  }
`;
