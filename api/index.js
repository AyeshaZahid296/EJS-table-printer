// api/index.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views')); // <-- fix path for views

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.render('form');
});

app.post('/table', (req, res) => {
    const number = parseInt(req.body.number);
    const table = [];

    for (let i = 1; i <= 10; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }

    res.render('table', { number, table });
});

// Export app for Vercel
module.exports = app;
