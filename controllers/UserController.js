const { User,Token } = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const UserController = {
  async getAllUsers(req,res){
    try {
      const users = await User.findAll()
      res.status(200).send(users);
    } catch (error) {
      console.log(Error)
      req.status(500).send({ message . 'There was a problem finding users'});
    }
  },
  async signup(req,res) {
    try {
      const hash = await bcryptjs.hash(req.body.password, 9);
      req.body.password = hash;
      const user = await User.create(req.body)
      res.status(200).send(user)
    } catch (error) {
      console.log(Error)
      res.status(500).send({ message : 'There was a problem creating new user'})
    }
  },
  async login(req,res) {
    try {
      cont user = await User.findOne({
        where : {
          email : req.body.email
        }
      });
      if(!user){
        return res.status(400).send({ message : 'There was a problem finding username'}); 
      }
      const isMatch = await bcryptjs.compare(req.body.password, user.password);
      if(!isMatch){
        return res.status(400).send({ message : 'Wrong username or password. Please, try again'});
      }
      const token = jwt.sign({id : user.id, revoked : false})
      await Token.create({ token, UserId: user.id, revoked : false})

      res.send({
        user,
        token
      })
    } catch (error) {
      console.log(Error)
      res.status(500).send({ message : 'There was a problem trying to login'})
    }
  },
}
module.exports = UserController;