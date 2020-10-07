const express = require('express');

const feedRoutes = require('./routes/feeRoute');
const bodyParser = require('body-parser');

const errorController = require('./Controllers/errorController');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');  //Replace '*' from domain which you want to access
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use('/api', feedRoutes);

app.use(errorController.get404);
app.listen(8080);