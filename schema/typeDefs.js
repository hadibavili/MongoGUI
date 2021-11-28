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
      getSettings: String!
      installMongo: String!
   }

   # Mutation

   type Mutation {
      updateSetting(data: String!): String!
   }
`;
