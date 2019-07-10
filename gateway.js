require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({ debug: true });

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  engine: { apiKey: process.env.ENGINE_API_KEY, schemaTag: "current" }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
