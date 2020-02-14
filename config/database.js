const mongoose = require('mongoose');
const dotenv = require('dotenv');
const localConnection = 'mongodb://localhost/events';
dotenv.config();

mongoose.connect(localConnection || process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});