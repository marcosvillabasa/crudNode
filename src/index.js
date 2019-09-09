const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/crudUser', { useNewUrlParser: true });


//routes
app.use(config.endpoint, require('./routes/user'));

app.listen(config.port, () => {
    console.log(`Listening port ${config.port}`);
})
