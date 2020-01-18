const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplySchema = new Schema ({
    name: String,
    type: {
        type: String,
        enum: ['Drink', 'Food', 'Dessert', 'Other']
    }
});

module.exports = mongoose.model('Supply', supplySchema);
