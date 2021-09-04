const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { models } = require("./db");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const DB = process.env.DB_CONNECT_STRING.replace(
  "password",
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection successful!"))
  .catch((err) => console.log(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req }) {
    const user = await models.User.getUser("6134008f0f847752e0f4fcd4");
    if (!user) throw new Error("not auth");
    // const isAuth = req.headers.authorization;
    return { models, user };
  },
});

server.listen().then(({ url }) => {
  console.log(`C7-WineList server running at ${url}`);
});
