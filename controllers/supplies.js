const Supply = require('../models/supply');
const Event = require('../models/event');

module.exports = {
    new: newSupply,
    create,
    addToSupplies
};


function addToSupplies(req, res) {
    Event.findById(req.params.id, function(err, event){
        event.supplies.push(req.body.supplyId);
        event.save(function(err){
            res.redirect(`/events/${event._id}`);
        });
    });
};

function create(req, res) {
    console.log(req.body)
    Supply.create(req.body, function(err, supply) {
        console.log(req.body)
        res.redirect('/supplies/new');
    });
}

function newSupply(req, res) {
    Supply.find({}, function(err, supplies) {
        console.log(supplies + "Test")
        res.render('supplies/new', {
            title: 'Add Supply',
            supplies
        });
    });
}

