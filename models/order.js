'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    rentalDate: DataTypes.DATE,
    returnDate: DataTypes.DATE
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    // Order.hasOne(models.Movie);
    // Order.belongsTo(models.User);
  };
  return Order;
};