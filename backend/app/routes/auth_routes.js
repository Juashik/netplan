var ObjectID = require('mongodb').ObjectId;

module.exports = function (app, db, url) {
    var database = db.collection('users');

    app.get(url, (req, res) => {
        database.find().toArray((err, docs) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(docs);
        });
    });
};