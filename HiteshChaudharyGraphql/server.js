const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const resolvers = require("./resolvers");
const schema = require("./schema");
const app = express();
const Port = process.env.PORT || 6561;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(Port, () => console.log(`Serving http://localhost:${Port}`));
