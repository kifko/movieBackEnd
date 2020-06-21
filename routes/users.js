const router = require('express').Router();
const UsersController = require('../controllers/UsersController');
const { auth } = require('../middlewares/auth');

router.get('/', auth, UsersController.getAll);
router.post('/signup', UsersController.signup);
router.post('/login', UsersController.login);
router.delete('/delete/:id', UsersController.delete);

module.exports = router;