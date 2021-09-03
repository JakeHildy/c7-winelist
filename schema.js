const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String
  }

  type Wine {
    id: ID!
    uploadedAt: String
    title: String
    type: String
    varietal: String
    country: String
    vintage: String
    winery: String
    price: Float
    uploader: String
    likes: Float
    image: String
  }
`;

module.exports = typeDefs;
