const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const quotesData = require('./modules/quotes.js');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hello from get req');
    res.send(quotesData);
});

app.get('/randomQuote', (req, res) => {
    let randomNum = getRndInteger(0, quotesData.length);
    res.send(quotesData[randomNum]);
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

app.post('/quotes', (req, res) => {
    console.log('hello from post', req.body);
    quotesData.push(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});