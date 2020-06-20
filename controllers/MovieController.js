const { Movie } = require('../models');

const MovieController = {
  async getAllMovies(req,res) {
    try {
      const movies = await Movie.findAll()
      res.status(200).send(movies)

    } catch (error) {
      console.log(Error)
      res.status(500).send({ message : 'Something wrong happend trying to find the user'})
    }
  },
  async searchtitle(req,res) {
    try {
      const { title } = req.params
      const movie = await Movie.findOne({
        where : {
          title : title
        }
      });
      if (movie === null){
        res.status(400).send({ message : 'Movie not found'});
      }
      res.status(200).send(movie);
    } catch (error) {
      console.log(Error)
      res.status(500).send({ message : 'An error occurred creating the movie'})
    }
  },
  async searchid(req,res) {
    try {
      const { id } = req.params;
      const movieId = await Movie.findOne({
        where : {
          id : id //Just id ll be enough
        }
      })
      if (movieId === null){
        res.status(400).send( message : 'Movie not found');
      }
      res.status(200).send(movieId)
    } catch (Error) {
      console.log(Error)
      res.status(500).send({ message : 'An error occurred creating the movie'})
    }
  }
}
module.exports = MovieController;