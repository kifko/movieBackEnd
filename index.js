const express = require('express');
/* const  router  = require('express').router(); */
const app = express();
const port = 3000;
// const usersRouter = require('./routes/users');
// app.use('/users', usersRouter);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log('server running on port ' + port));

