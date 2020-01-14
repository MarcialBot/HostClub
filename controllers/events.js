const Event  = require('../models/event');

module.exports = {
    index,
    show,
    new: newEvent,
    create,
    delete: deleteEvent
};

function index(req, res) {
    res.render('events/index', {
        events: Event.getAll()
    });
};

function show(req, res) {
    res.render('events/show', {
        event: Event.getOne(req.params.id),
        eventNum: parseInt(req.params.id) + 1
    });
};

function newEvent(req, res) {
    res.render('events/new');
};

function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Event.create(req.body);
    res.redirect('/events');
};

function deleteEvent(req, res) {
    Event.deleteOne(req.params.id);
    res.redirect('/events');
};