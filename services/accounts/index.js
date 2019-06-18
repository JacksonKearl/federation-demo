const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
   extend type Query {
      users: [User!]!
    }

    type User @key(fields: "ssn") @key(fields: "id") {
      id: ID!
      ssn: ID!
      name: String!
    }
`;

const resolvers = {
  Query: {
    users() {
      return users;
    },
  },
  User: {
    __resolveReference(reference) {
      if (reference.ssn)
        return users.find(user => user.ssn === reference.ssn);
      else
        return users.find(user => user.id === reference.id);
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

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const users = [
  { ssn: '111-11-1111', name: 'Trevor', id: '10', __typename: 'User' },
  { ssn: '222-22-2222', name: 'Scheer', id: '20', __typename: 'User' },
  { ssn: '333-33-3333', name: 'James', id: '30', __typename: 'User' },
  { ssn: '444-44-4444', name: 'Baxley', id: '40', __typename: 'User' },
];
