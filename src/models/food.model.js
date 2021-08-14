'use strict';
const foodSchema = (sequelize, DataTypes) => sequelize.define('food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typefood: {
    type: DataTypes.STRING,
  },
  customerId: {
        type: DataTypes.INTEGER,
         allowNull: false,
     }
});
module.exports = foodSchema;
