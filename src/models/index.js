'use strict';
require('dotenv').config();
const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/user";
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const Collection = require('./collection-class');
const customerSchema = require('./customer.schema')
const foodSchema = require('./food.model.js');
const clothesSchema = require('./clothes')

const customerModel = customerSchema(sequelize, DataTypes);
// console.log(customerModel);
const foodModel = foodSchema(sequelize, DataTypes);
// console.log(foodModel.name);
// console.log(`${foodSchema(sequelize, DataTypes)}`);

const clothesModel = clothesSchema(sequelize, DataTypes);
// console.log(clothesModel);
// console.log(clothesSchema(sequelize, DataTypes));

customerModel.hasMany(foodModel, { foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});
clothesModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});

const Customerdata = new Collection(customerModel);
const foodCollection = new Collection(foodModel);
const clothesData = new Collection(clothesModel);
// console.log(Customerdata );
// console.log(foodCollection);
// console.log(clothesData.read());
module.exports = {
  db: sequelize,
  Customerdata: Customerdata,
  foodCollection: foodCollection,
  clothesData:clothesData,
  foodSchema:foodSchema

};

