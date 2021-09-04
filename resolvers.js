module.exports = {
  Query: {
    wines(_, args, { models }) {
      const wines = models.Wine.getWines();
      return wines;
    },
    users(_, args, { models }) {
      const users = models.User.getUsers();
      return users;
    },
    async user(_, { id }, { models }) {
      const user = await models.User.getUser(id);
      return user;
    },
  },
  Mutation: {
    addUser(_, { input }, { models }) {
      const user = models.User.createUser({ ...input });
      return user;
    },
    addWine(_, { input }, { models, user }) {
      const wine = models.Wine.createWine({ ...input, uploader: user.id });
      return wine;
    },
  },
  Wine: {},
  User: {},
};
