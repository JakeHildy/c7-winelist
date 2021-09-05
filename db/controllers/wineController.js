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
    async getAllWines() {
      try {
        const Wines = await Wine.find();
        return Wines;
      } catch (error) {
        console.log(error);
      }
    },
    async getWines(filter) {
      try {
        const Wines = await Wine.find(filter);
        return Wines;
      } catch (error) {
        console.log(error);
      }
    },
    async getWine(id) {
      try {
        const wine = await Wine.findById(id);
        return wine;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = createWineModel;
