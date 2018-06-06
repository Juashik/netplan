var ObjectID = require('mongodb').ObjectId;

module.exports = function (app, db, url) {
    var database = db.collection('book');

    app.get(url, (req, res) => {
        database.find().toArray((err, docs) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.header('Access-Control-Allow-Origin: *');
            res.send(docs);
        });
    });
    app.post(url, (req, res) => {
        database.insertOne(
            {
                step: req.body.step,
                data: req.body.data,
                text: req.body.text
            },
            function(err) {
                if (err) {
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            }
        );
    });
    app.get(url + '/:id', (req, res) => {
        database.findOne(
            { "_id": ObjectID(req.params.id) },
            function (err, doc) {
                if (err) {
                    return res.sendStatus(500);
                }
                if (!doc) {
                    return res.sendStatus(404);
                }
                res.send(doc);
            }
        )
    });
    app.put(url + '/:id', (req, res) => {
        database.updateOne(
            { _id: ObjectID(req.params.id) },
            {
                $set: {
                    step: req.body.step,
                    data: req.body.data,
                    test: req.body.text
                }
            },
            function (err) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            }
        )
    });
    app.delete(url + '/:id', (req, res) => {
        database.deleteOne(
            { "_id": ObjectID(req.params.id) },
            function (err) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            }
        )
    });
};