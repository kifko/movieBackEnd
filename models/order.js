'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    RentalDate: DataTypes.DATE,
    ReturnDate: DataTypes.DATE
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    // Order.hasOne(models.Movie);
    // Order.belongsTo(models.User);
  };
  return Order;
};