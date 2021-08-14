const Customerdata = (sequelize, DataTypes) => sequelize.define('customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = Customerdata;