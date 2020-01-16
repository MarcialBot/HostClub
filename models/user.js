const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = require('../models/event');
const Supply = require('../models/supply');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
    supplies: [{type: Schema.Types.ObjectId, ref: 'Supply'}],
    googleId: String,
    admin: { type: Boolean, default: false}
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);