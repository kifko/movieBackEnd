const express = require('express');
/* const  router  = require('express').router(); */
const app = express();
const cors = require('./middlewares/cors');
const moviesRouter = require('./routes/movies');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
const port = 3000;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', moviesRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log('server running on port ' + port));

