const Supply = require('../models/supply');
const Event = require('../models/event');

module.exports = {
    index,
    show,
    newSupply,
    create,
    deleteSupply
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
    });
}

function create (req, res) {
    Supply.create(req.body, function(err, supply) {
        res.redirect('/supplies/new');
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