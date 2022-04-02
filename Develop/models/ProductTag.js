const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, // INT
      allowNull: false, //NOT NULL
      primaryKey: true, //PRIMARY KEY
      autoIncrement: true, // AUTO_INcrement
    },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: "id",
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tag",
      key: "id",
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
