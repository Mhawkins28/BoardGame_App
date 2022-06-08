const express = require ('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const PORT = 3000;

// // connect to the MongoDB with mongoose
require('./db/connection');

// const reviewRouter = require('./routes/reviewRts')
const gameRouter = require('./routes/gameRts')

// create the Express app
const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares start here
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mount all routes with appropriate base paths
app.use('/games', gameRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });

app.listen(PORT, ()=>{
    console.log(`Hello from PORT ${PORT}`)
});

