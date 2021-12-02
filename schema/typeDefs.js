"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
      updateSetting(data: String!): Boolean!
   }
`;
