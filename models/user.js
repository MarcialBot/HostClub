const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = require('../models/event');
const Supply = require('../models/supply');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);