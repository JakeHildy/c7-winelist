module.exports = {
  Query: {
    wines(_, args, { models }) {
      const wines = models.Wine.getAllWines();
      return wines;
    },
    users(_, args, { models }) {
      const users = models.User.getUsers();
      return users;
    },
    wine(_, { id }, { models }) {
      const user = models.Wine.getWine(id);
      return user;
    },
    user(_, { id }, { models }) {
      const user = models.User.getUser(id);
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
  Wine: {
    uploader(wine, _, { models }) {
      return models.User.getUser(wine.uploader);
    },
  },
  User: {
    wines(user, _, { models }) {
      return models.Wine.getWines({ uploader: user.id });
    },
  },
};
