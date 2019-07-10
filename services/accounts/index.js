const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  extend type Query {
    me: User
    allUsers: [User]
  }

  type User @key(fields: "id") {
    id: ID!
    name: String
    username: String
  }
`;

const delay = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

const resolvers = {
  Query: {
    async me() {
      await delay(30);
      return users[0];
    },
    async allUsers() {
      await delay(0.5);
      return users;
    }
  },
  User: {
    __resolveReference(object) {
      return users.find(user => user.id === object.id);
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

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const users = [
  {
    id: "1",
    name: "Jackson",
    username: "@jacksonkearl"
  },
  {
    id: "2",
    name: "Jesse",
    username: "@abernix"
  }
];
