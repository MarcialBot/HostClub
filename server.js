const express = require('express');
const indexRouter = require('./routes/index');
const eventsRouter = require('./routes/events');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));


app.use('/', indexRouter);
app.use('/events', eventsRouter);

app.listen(3000, function() {
    console.log('Express is listening on port 3000');
});