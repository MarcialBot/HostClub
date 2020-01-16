const Event  = require('../models/event');
const Supply = require('../models/supply');

module.exports = {
    index,
    show,
    newEvent,
    create,
    delete: deleteEvent
};

function index(req, res) {
    Event.find({}, function(err, events) {
        res.render('events/index', {title: 'All Events', events});
    });
};

function show(req, res) {
    Event.findById(req.params.id).populate('supplies').exec(function(err, event) {
        Supply.find(
            {_id: {$nin: event.supplies}},
            function(err, supplies) {
                console.log(supplies);
        res.render('events/show', { title: 'Event Details', event, supplies });
        });
    });
};

function newEvent(req, res) {
    res.render('events/new');
};

function create(req, res) {
    const event = new Event(req.body);

    event.save(function(err) {
        if(err) return res.render('events/new');
        console.log(event);
        res.redirect(`/events/${event._id}`);
    })
};

function deleteEvent(req, res) {
    console.log(req.params.id)
    Event.findByIdAndRemove(req.params.id, (err, event) => {
        if(err) return res.status(500).send(err);
        const response = {
            message: "Event successfully deleted",
            id: event._id
        };
        res.redirect('/events');
    });
};