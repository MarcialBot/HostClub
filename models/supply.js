const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplySchema = new Schema ({
    name: {type: String, required: true, unique: true},
    type: {
        type: String,
        enum: ['Drink', 'Food', 'Dessert', 'Other'],
    }
});

module.exports = mongoose.model('Supply', supplySchema);
