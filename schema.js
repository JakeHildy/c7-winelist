const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    wines: [Wine]!
  }

  input NewUserInput {
    username: String!
  }

  enum WineType {
    Champagne
    Dessert
    Ice
    Red
    Rose
    Sparkling
    White
  }

  enum WineVarietal {
    Arbane
    Barbera
    Blaufrankisch
    Blend
    Bordeaux_Blend
    Cabernet
    Cabernet_Franc
    Cabernet_Sauvignon
    Chardonnay
    Meunier
    Pinot_Blanc
    Pinot_Gris
    Pinot_Noir
    Shiraz
    Moscato
    Port
    Riesling
    Zinfandel
  }

  input NewWineInput {
    title: String!
    type: String!
    varietal: String!
  }

  type Wine {
    id: ID!
    title: String!
    uploadedAt: String
    type: WineType!
    varietal: WineVarietal!
    country: String
    vintage: String
    winery: String
    price: Float
    uploader: User
    likes: Float
    image: String
  }

  type Query {
    wines: [Wine]!
    users: [User]!
    wine(id: String!): Wine
    user(id: String!): User
  }

  type Mutation {
    addUser(input: NewUserInput!): User!
    addWine(input: NewWineInput!): Wine!
  }
`;

module.exports = typeDefs;
