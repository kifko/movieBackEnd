const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.get('/allMovies', MovieController.getAllMovies);
router.get('/title/:title', MovieController.searchTitle);
router.get('/id/:id', MovieController.searchId);
router.get('/page/:page', MovieController.getPage);
router.get('/popular', MovieController.mostPopular);
router.get('/lastmovies', MovieController.lastMovies);


module.exports = router