const Wine = require("../models/wineModel");

const createWineModel = () => {
  return {
    async createWine(WineData) {
      try {
        const newWine = await Wine.create(WineData);
        return newWine;
      } catch (error) {
        console.log(error);
      }
    },
    async getWines() {
      try {
        const Wines = await Wine.find();
        return Wines;
      } catch (error) {
        console.log(error);
      }
    },
    async getWine(id) {
      try {
        const Wine = await Wine.findById(id);
        return Wine;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = createWineModel;
