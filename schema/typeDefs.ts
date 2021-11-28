const { gql, ApolloServer } = require("apollo-server-express");

export const typeDefs = gql`
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
      updateSetting(data: Json!): String!
   }
`;


