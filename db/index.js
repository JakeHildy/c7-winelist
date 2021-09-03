const createUserModel = require("./controllers/userController");

module.exports = {
  models: {
    User: createUserModel(),
  },
};
