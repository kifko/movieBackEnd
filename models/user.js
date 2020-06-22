'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
    // phone: DataTypes.INTEGER,
    // adress: DataType.STRING,
    // postalCode: DataType.INTEGER,
    // creditCard: DataType.INTEGER,
  }, {});
    //Hiding password and/or anything unrelevant
  User.prototype.toJSON = function () {
     const user = this.get();
     delete user.password;
    //  delete user.phone;
    //  delete user.creditCard;
    //  delete user.adress;
    //  delete user.postalCode;
     return user;
   }
  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Movie);
    // User.has(models.Order);
  };
  return User;
};