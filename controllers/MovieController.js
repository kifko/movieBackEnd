const { Movie } = require('../models');
const { Op } = require("sequelize");
// const { O_DIRECTORY } = require('constants');
const MovieController = {
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.findAll({
        limit: 20
      });
      res.status(200).send(movies);
    } catch (error) {
      console.log(error);
      res.status(500).send({ 
        message : 'Was not possible to find movies'
      });
    }
  },
  gerPage(req, res) {
    const { page } = req.params;
    const skip = (page - 1) * 20
    Movie.findAll({offset:skip,limit:20})
    .then(movies => res.send(movies))
    .catch(error => {
      console.error(error);
      res.status(500).send({
        message : 'Was not possible to find the page'
      });
    });
  },
  async searchTitle(req, res) {
    try {
      const { title } = req.params
      const movie = await Movie.findAll({
        where : {
          title : {
            [Op.regexp]:`.*${title}.*`
          }
        }
      });
      if (movie === null){
        res.status(400).send({ message : 'Movie not found' });
      }
      res.status(200).send(movie);
      console.log(movie);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message : 'Something wrong happend' });
    }
  },
  async searchId(req, res) {
    try {
      const { id } = req.params;
      const movieId = await Movie.findOne({
        where : {
          id : id //Just id ll be enough..?
        }
      });
      if (movieId === null){
        res.status(400).send({ message : 'Movie not found' });
      }
      res.status(200).send(movieId);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message : 'Where is the movie?' });
    }
  },
  async this.mostPopular(req, res) {
    try {
      const popular = await Movie.findAll({
        where : {
          popularity : {
            [Op.gte] : 50
          }
        },
        limit : 20,
      });
      res.status(200).send(popular)
    } catch (error) {
      res.status(500).send({ message : 'Something whent wrong' });
    }
  },
  async lastMovies(req, res) {
    try {
      const lastMovies = await Movie.findAll({
        where : {
          release_date : {
            [Op.between]: ['2019-01-01', '2020-07-05']
          }
        },
        limit : 20,
      });
      res.status(200).send(lastMovies)
    } catch (error) {
      res.status(500).send({ message : Was not possible to find the movie});
    }
  }
}
module.exports = MovieController;