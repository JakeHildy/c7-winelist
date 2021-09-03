const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  input NewUserInput {
    username: String!
  }

  type Wine {
    id: ID!
    uploadedAt: String
    title: String!
    type: String!
    varietal: String!
    country: String
    vintage: String
    winery: String
    price: Float
    uploader: String
    likes: Float
    image: String
  }

  type Query {
    wines: [Wine]!
    users: [User]!
    user(id: String!): User!
  }

  type Mutation {
    addUser(input: NewUserInput!): User!
  }
`;

module.exports = typeDefs;
