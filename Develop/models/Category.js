const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // INT
      allowNull: false, //NOT NULL
      primaryKey: true, //PRIMARY KEY
      autoIncrement: true, // AUTO_INcrement
    },
    category_name: {
      type: DataTypes.STRING, // VARCHAR(30)
      allowNull:false 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
