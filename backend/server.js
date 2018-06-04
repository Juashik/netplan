var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');  
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');  
var config = require('./config/main');
var app = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

mongoClient.connect(config.db_url, (err, client) => {
    if (err) {
        return console.log(err);
    }
    var database = client.db('netplan');
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('server started at ' + port);
    });
});
