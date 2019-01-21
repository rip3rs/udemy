const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('in /users the middleware');
    res.send('<h1>Users!!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('in / middleware');
    res.send('<h1>Hello WORLD!</h1>')
});

app.listen(3000);