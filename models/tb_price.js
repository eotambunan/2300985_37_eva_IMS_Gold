'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tb_product,{
        foreignKey: "product_id",
        onDelete : "CASCADE"
      })
    }
  }
  tb_price.init({
    // product_id: DataTypes.INTEGER,
    normal_price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_price',
  });
  return tb_price;
};