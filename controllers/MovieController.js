const { Movie } = require('../models');
// const { O_DIRECTORY } = require('constants');
const MovieController = {
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.findAll();
      res.status(200).send(movies);
    } catch (error) {
      console.log(error);
      res.status(500).send({ 
        message : 'Something went wrong finding the user'
      });
    }
  },
  async searchTitle(req, res) {
    try {
      const { title } = req.params
      const movie = await Movie.findOne({
        where : {
          title : title
        }
      });
      if (movie === null){
        res.status(400).send({ 
          message : 'Movie not found'
        });
      }
      res.status(200).send(movie);
    } catch (error) {
      console.log(error);
      res.status(500).send({ 
        message : 'Something went wrong creating the movie'
      });
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
        res.status(400).send({ 
          message : 'Movie not found' 
        });
      }
      res.status(200).send(movieId);
    } catch (error) {
      console.log(error);
      res.status(500).send({ 
        message : 'Movie not found'
      });
    }
  }
}
module.exports = MovieController