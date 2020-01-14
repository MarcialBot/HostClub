const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    date: Date,
    attendees: [String]
});

module.exports = mongoose.model('Event', eventSchema);

//Replace events in all files with Event