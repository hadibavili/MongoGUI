const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const express = require("express");
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
   console.log("server running on 4000");
});

app.get("/", (req, res) => {
   let age = 20;

   let result = age * 20;
   res.json(result);
});
