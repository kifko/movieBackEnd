const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.get('/allMovies', MovieController.searchAll);
router.get('/title/:title', MovieController.searchTitle);
router.get('/id/:id', MovieController.searchid);

module.exports = router