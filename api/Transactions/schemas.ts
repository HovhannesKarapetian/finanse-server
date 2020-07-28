import { gql } from 'apollo-server';

export const TransactionSchema = gql`
  type Transaction {
    id: ID!
    title: String!
    price: Int!
    description: String
    category: Category
    isArchived: Boolean
  }
  input CreateTransactionInput {
    title: String!
    price: Int!
    description: String
    category: ID!
  }
  extend type Query {
    transactions: [Transaction]
    transaction(id: String!): Transaction
  }
  extend type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction
  }
`;
