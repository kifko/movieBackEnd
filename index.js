const express = require('express');
// const router = require('express').router();
const app = express();
const PORT = 3000;

const cors = require('./middlewares/cors');

const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const ordersRouter = require('./routes/orders');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.options('*',(req, res) => res.send());

app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/orders', ordersRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT))

