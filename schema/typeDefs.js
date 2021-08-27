const { gql, ApolloServer } = require("apollo-server-express");

const typeDefs = gql`
   type User {
      id: Int!
      name: String!
      username: String
      email: String!
   }

   # Queries

   type Query {
      getAllUsers: [User!]!
   }

`;

module.exports = {
   typeDefs,
};
