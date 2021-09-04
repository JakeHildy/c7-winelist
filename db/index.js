const createUserModel = require("./controllers/userController");
const createWineModel = require("./controllers/wineController");

module.exports = {
  models: {
    User: createUserModel(),
    Wine: createWineModel(),
  },
};
