const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  extend type Query {
      reviews: [Review!]!
    }

    type Review {
      id: ID!
      author: User!
      body: String!
    }

    extend type User @key(fields: "id") {
      id: ID! @external
      reviews: [Review!]!
    }
`;

const resolvers = {
  Query: {
    reviews() {
      return reviews;
    },
  },
  User: {
    reviews(user) {
      return reviews.filter(review => review.authorId === user.id)
    }
  },
  Review: {
    author(review) {
      return {
        id: review.authorId,
      };
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

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const reviews = [
  { id: '1', authorId: '10', body: 'A', __typename: 'Review' },
  { id: '2', authorId: '20', body: 'B', __typename: 'Review' },
  { id: '3', authorId: '30', body: 'C', __typename: 'Review' },
  { id: '4', authorId: '40', body: 'D', __typename: 'Review' },
];