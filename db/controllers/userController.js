const User = require("../models/userModel");

const createUserModel = () => {
  return {
    async createUser(userData) {
      try {
        const newUser = await User.create(userData);
        return newUser;
      } catch (error) {
        console.log(error);
      }
    },
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.log(error);
      }
    },
    async getUser(id) {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = createUserModel;
