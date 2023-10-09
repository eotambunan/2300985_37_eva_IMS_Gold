'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.tb_price,{
        foreignKey:"product_id",
      })
    }
  }
  tb_product.init({
    title: DataTypes.STRING,
    writer: DataTypes.STRING,
    category: DataTypes.STRING,
    year: DataTypes.STRING,
    price: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_product',
  });
  return tb_product;
};