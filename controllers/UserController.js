//Including models module to "User&Token"
const { User, Token } = require('../models');
//Including bcrypsjs module to encriptations
const bcryptjs = require('bcryptjs');
//Including jsonwebtoken module to access token encoder
const jwt = require('jsonwebtoken');

const UserController = {
    getAll(req, res) {
        User.findAll()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({ 
                  message: 'Something went wrong finding users' 
                });
            })
    },
    async signup(req, res) {
        try {
            const hash = await bcryptjs.hash(req.body.password, 9);
            req.body.password = hash;//Rewritten password via hash
            const user = await User.create(req.body);
            res.status(200).send(user)
        } catch (error) {
            console.error(error)
            res.status(500).send({ 
              message : 'Something went wrong creating new user'
            });
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: { email: req.body.email }
            });
            const isMatch = await bcryptjs.compare(req.body.password, user.password);
            if (!isMatch) {
                throw new Error('Wrong username or password, please try again')
            }
            const token = jwt.sign({ id: user.id}, 'needapassword', { expiresIn: '2y' });
            await Token.create({ 
                token: token,
                UserId: user.id,
                revoked: false
            });
            res.send({ user, token });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                message: 'Something went wrong login'
            });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params
            const user = await User.destroy({
                where : {
                    id : id
                }
            });
            res.status(200).send({ message : 'User deleted' });
        } catch (error) {
            console.error(error)
            res.status(500).send({ 
              message : 'Something went wrong deleting the account'
            });
        }
    },
    async logout(req, res) {
        try {
            const id = req.user.id 
            const user = await User.destroy ({
                where : {
                    token : req.headers.authorization
                }
            });
            res.status(200).send({ message : 'Success logout' });
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Logout wasnt possible' });
        }
    }
}
module.exports = UserController