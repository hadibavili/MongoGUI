"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql, ApolloServer } = require("apollo-server-express");
exports.typeDefs = gql `
   type User {
      id: Int!
      name: String!
      username: String
      email: String!
   }
   type Install {
      status: Boolean!
   }

   # Queries

   type Query {
      getAllUsers: [User!]!
      updatePackages: String!
      installMongo: String!
      getSettings: String!
   }

   # Mutation

   type Mutation {
      installDB(status: Boolean!): String!
      creatListFile(status: Boolean!): String!
   }
`;
