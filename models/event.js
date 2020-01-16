const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Supply = require('../models/supply');
const User = require('../models/user');

const eventSchema = new Schema({
    title: String,
    location: String,
    startDate: Date,
    endDate: Date,
    attendees: [{type: Schema.Types.ObjectId, ref: 'User'}],
    supplies: [{type: Schema.Types.ObjectId, ref: 'Supply'}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
