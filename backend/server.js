const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config/main');
const app = express();

const port = 80;

app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    next();
  });

console.log(config.db_url);

mongoClient.connect(config.db_url, (err, client) => {
    if (err) {
        return console.log(err);
    }
    let database = client.db('netplan');
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('server started at ' + port);
    });
});
