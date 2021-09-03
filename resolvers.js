module.exports = {
  Query: {
    wines(_, args, ctx) {
      return [{ id: 1 }];
    },
    users(_, args, { models }) {
      const users = models.User.getUsers();
      return users;
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
  },
  Wine: {},
  User: {},
};
