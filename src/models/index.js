'use strict';
require('dotenv').config();
const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/user";
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const Collection = require('./collection-class');
const customerSchema = require('./customer.schema')
const foodSchema = require('./food.model');
const clothesSchema = require('./clothes')

const customerModel = customerSchema(sequelize, DataTypes);
const foodModel = foodSchema(sequelize, DataTypes);
const clothesModel = clothesSchema(sequelize, DataTypes);

customerModel.hasMany(foodModel, { foreignKey: 'customerId', sourceKey: 'id'});
customerModel.hasMany(clothesModel, { foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});
clothesModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});

const Customerdata = new Collection(customerModel);
const foodData = new Collection(foodModel);
const clothesData = new Collection(clothesModel);

module.exports = {
  db: sequelize,
  Customerdata: Customerdata,
  foodData: foodData,
  clothesData:clothesData,
 

};

