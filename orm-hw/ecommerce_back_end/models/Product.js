const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}


Product.init(
  {
      // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,   
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: true,
      validate: {
        isNumeric: true,
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isDecimal: true,
      }
    },
    
    category_id: {
      type: DataTypes.INTEGER,
      references: {   
        key: 'id',
        model: 'category',
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
