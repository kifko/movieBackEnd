'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    token: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    revoked: DataTypes.BOOLEAN
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
    // Token.belongsTo(models.User);
    // Token.hasOne(models.Order);
  };
  return Token;
};