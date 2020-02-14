const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;



require('./config/database');
require('dotenv').config();
require('./config/passport');

const indexRouter = require('./routes/index');
const eventsRouter = require('./routes/events');
const suppliesRouter = require('./routes/supplies');

const app = express();

app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'HostClub',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));


app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/supplies', suppliesRouter);

app.listen(port, function() {
    console.log('Express is listening on port 3000');
});