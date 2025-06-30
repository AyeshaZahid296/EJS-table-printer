// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// View engine set
app.set('view engine', 'ejs');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// GET route - show input form
app.get('/', (req, res) => {
    res.render('form'); // show form to user
});

// POST route - handle user input and show table
app.post('/table', (req, res) => {
    const number = parseInt(req.body.number); // get number from form

    // Generate table from 1 to 10
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }

    res.render('table', { number, table });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
