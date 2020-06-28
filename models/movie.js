'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    poster_path: DataTypes.STRING,
    popularity: DataTypes.FLOAT
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    // Movie.belongsTo(models.User);
    // Movie.belongsTo(models.Order);
  };
  return Movie;
};