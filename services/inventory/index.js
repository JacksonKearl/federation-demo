const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
    extend type User @key(fields: "ssn") {
      ssn: ID! @external
      risk: Float
    }
`;

const resolvers = {
  User: {
    risk(user) {
      return user.ssn[0] / 9
    },
  },
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
