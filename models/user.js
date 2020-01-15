const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = require('../models/event');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    events: [String],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);