const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config/main');
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

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
