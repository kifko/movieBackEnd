const router = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/auth');

router.get('/', auth, UserController.getAll);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.delete('/delete/:id', UserController.delete);
router.get('/logout', auth, UserController.logout);

module.exports = router;