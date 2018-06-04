const bookRoutes = require('./book_routes');
const testRoutes = require('./test_routes');
const authRoutes = require('./auth_routes');
module.exports = function (app, db) {
    bookRoutes(app, db, '/book');
    testRoutes(app, db, '/test');
    authRoutes(app, db, '/users');
};