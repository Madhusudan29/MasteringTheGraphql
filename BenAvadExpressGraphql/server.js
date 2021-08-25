import { ApolloServer } from "apollo-server-express";
import express from "express";
import "./dbConnection";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
const app = express();
const Port = process.env.PORT || 6530;

async function Apollo() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen(Port, () => console.log(`Serving on http://localhost:${Port}`));
}
Apollo();
