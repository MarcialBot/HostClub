const Supply = require('../models/supply');
const Event = require('../models/event');

module.exports = {
    index,
    show,
    newSupply,
    create,
    deleteSupply,
    addSupplies
};

function index (req, res){
    Supply.find({}, (err, supplies) => {
        res.render('supplies/index', {title: 'All Supplies', supplies});
    });
}

function show (req, res){
    Supply.findById(req.params.id, function(err, supply) {
        res.render('supplies/show', { title: 'Supply Details', supply});
    })
}

function newSupply (req, res) {
    Supply.find({}, (err, supplies) => {
        res.render('supplies/new', {
            title: 'Add Supply',
            supplies
        });
        console.log(supplies)
    });
}

function create (req, res) {
    Supply.create(req.body, function(err, supply) {
        res.redirect('/supplies/new');
        console.log(req.body);
    })
}

function deleteSupply (req, res) {
    console.log(req.params.id)
    Supply.findByIdAndRemove(req.params.id, (err, suppl) => {
        if(err) return res.status(500).send(err);
        const response = {
            message: "Supply successfully create",
            id: supply._id
        };
        res.redirect('/supplies');
    });
}

function addSupplies (req, res) {
    Event.findById(req.params.id, function(err, Event){
        event.supplies.push(req.body.supplyId);
        event.save(function(err){
            res.redirect('/events/${event._id}');
        });
    });
}