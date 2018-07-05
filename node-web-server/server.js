const express = require('express');

var app = express();

/**
 * Making GET HTTP requests using Express
 */
app.get('/', (req, res) => {

    res.send('<h1>Hello Express!</h1>');

})

app.get('/about', (req, res) => {

    res.send('About Page');

})

app.get('/bad', (req, res) => {

    res.send({
        status:404,
        message: 'Bad Request!'
    });

})

app.listen(3000, () => console.log('I am listening at 3000'));