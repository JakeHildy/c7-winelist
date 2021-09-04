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
      return new Promise(async (resolve, reject) => {
        try {
          const user = await User.findById(id);
          resolve(user);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};

module.exports = createUserModel;
