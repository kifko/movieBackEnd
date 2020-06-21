'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    poster_path: DataTypes.STRING,
    overview: DataTypes.TEXT,
    popularity: DataTypes.FLOAT
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    // Movie.belongsToMany(models.User);
    // Movie.belongsToMany(models.Order);
  };
  return Movie;
};