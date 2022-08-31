const express = require('express');
const bodyParser = require('body-parser');

const catRouter = require('./routes/cats');

const app = express();

// Doing view engine setup.
app.set('view engine', 'ejs');
app.set('views', './views');

// Doing basic setup.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(catRouter)

app.listen(3000);