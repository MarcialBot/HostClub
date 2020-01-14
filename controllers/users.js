
const User = require('../models/user');

module.exports = {
    index,
    addEvent,
    deleteEvent
}

function index(req, res, next) {
    User.find({}, function(err, users) {
        res.render('users/index', {
            users,
            user: req.user
        });
    });
}

function addEvent(req, res) {

}

function deleteEvent(req, res) {

}