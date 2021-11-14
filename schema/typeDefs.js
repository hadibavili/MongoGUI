const { gql, ApolloServer } = require("apollo-server-express");

const typeDefs = gql`
   type User {
      id: Int!
      name: String!
      username: String
      email: String!
   }
   type Install{
      status:Boolean!
   }

   # Queries

   type Query {
      getAllUsers: [User!]!
      updatePackages: String!
      installMongo: String!
   }


   # Mutation

   type Mutation {
      installDB(status: Boolean!): String!
      creatListFile(status: Boolean!): String!
   }


`;

module.exports = {
   typeDefs,
};
