const express = require('express');
/* const  router  = require('express').router(); */
const app = express();
const port = 3000;
const cors = require('./middlewares/cors');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRouter)

app.use('./', (req,res) => {'Hola Caracola'});

app.listen(port, () => console.log('server running on port ' + port));

