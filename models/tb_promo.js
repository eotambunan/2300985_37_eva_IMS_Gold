'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_promo.init({
    name: DataTypes.STRING,
    promo_banner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_promo',
    timestamps : false
  });
  return tb_promo;
};