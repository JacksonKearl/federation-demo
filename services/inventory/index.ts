import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { Resolvers } from "./types";

const typeDefs = gql`
  extend type Product @key(fields: "sku") {
    sku: String! @external
    weight: Int @external
    price: Int @external
    inStock: Boolean
    shippingEstimate: Int @requires(fields: "price weight")
  }
`;

const resolvers: Resolvers = {
  Product: {
    __resolveReference(object) {
      return {
        ...object,
        ...inventory.find(product => product.sku === object.sku)
      };
    },
    shippingEstimate(object) {
      // free for expensive items
      if (object.price == null || object.weight == null) {
        throw new Error(
          `Internal error: incomplete shipping data for product "${object.sku}"`
        );
      }
      if (object.price > 1000) return 0;
      // estimate is based on weight
      return object.weight * 0.5;
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 4004 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const inventory = [
  { sku: "sku1", inStock: true },
  { sku: "sku2", inStock: false },
  { sku: "sku3", inStock: true }
];
