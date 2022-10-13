const express = require('express');
const bodyParser = require('body-parser');

const generalRouter = require('./routes/general');

const app = express();

app.use(express.static('/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(generalRouter);

app.listen(3000);
