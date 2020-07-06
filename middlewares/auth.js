const jwt = require('jsonwebtoken');
const { User, Token } = require('../models');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, 'needapassword');
    const user = await User.findOne({
      tokens : token,
    })
    if (!user) {
      return res.status(401).send({ message : 'Not authorized' });
    }
    req.user = user;
    next()
  } catch (error) {
    console.log(error)
    res.status(401).send({ message : 'No access' });
  }
}
module.exports = auth
  // ,isAdmin