const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.get('/allMovies', MovieController.getAllMovies);
router.get('/title/:title', MovieController.searchTitle);
router.get('/id/:id', MovieController.searchId);

module.exports = router;