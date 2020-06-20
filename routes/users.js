const router = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/giveUsers', UserController.getAllUsers);
router.get('/signup', UserController.signup);
router.get('/login', Userontroller.login); //login, o log?? 

module.exports = router