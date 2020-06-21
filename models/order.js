'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    RentalDay: DataTypes.DATE,
    ReturnDay: DataTypes.DATE
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    // Order.belongsTo(models.User);
    // Order.belongsTo(models.Movie);
  };
  return Order;
};