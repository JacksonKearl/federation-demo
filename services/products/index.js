const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  extend type Query {
    topProducts(first: Int = 5): [Product]
  }

  type Product @key(fields: "upc") @key(fields: "sku") {
    upc: String!
    sku: String!
    name: String
    price: Int
    weight: Int
  }
`;

const resolvers = {
  Product: {
    __resolveReference(object) {
      if (object.upc)
        return products.find(product => product.upc === object.upc);
      else
        return products.find(product => product.sku === object.sku);
    }
  },
  Query: {
    topProducts(_, args) {
      return products.slice(0, args.first);
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

server.listen({ port: 4003 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const products = [
  {
    upc: "1",
    sku: "11",
    name: "Table",
    price: 899,
    weight: 100
  },
  {
    upc: "2",
    sku: "22",
    name: "Couch",
    price: 1299,
    weight: 1000
  },
  {
    upc: "3",
    sku: "33",
    name: "Chair",
    price: 54,
    weight: 50
  }
];
