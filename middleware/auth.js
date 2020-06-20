const jwt = require('jsonwebtoken');
const { User, Token} = require('../models');

const auth = async (req,res,next) => {
  try {
    const token = req.header.authorization;
    const payload = jwt.verify(token, 'SecretToken');
    const user = await User.findByPk(payload.id);
    const tokenFound = await Token.findOne({
      where : {
        token : token,
        UserId : payload.id,
        revoked : false
      }
    });
    if(!user || !tokenFound) {
      return res.status(401).send({ message : 'Non authorized'});
    }
    req.user = user
    next()
  } catch (error) {
    console.log(Error)
    res.status(500).send({ message : 'An error occour authorizing the token'});
  }
}
module.exports = auth;