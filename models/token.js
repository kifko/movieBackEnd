'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    token: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    revoqued: DataTypes.BOOLEAN
  }, {});
  Token.associate = function(models) {
  };
  return Token;
};