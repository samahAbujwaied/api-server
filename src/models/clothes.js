'use strict';
const clothesData = (sequelize, DataTypes) => sequelize.define('clothes', {
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
module.exports = clothesData;
