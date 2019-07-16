import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const server = new ApolloServer({
  gateway: new ApolloGateway({ debug: true }),
  subscriptions: false,
  engine: { apiKey: process.env.ENGINE_API_KEY, schemaTag: "current" }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
