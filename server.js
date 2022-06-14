const express = require ('express');;
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const methodOverride = require('method-override');
const cors = require('cors');
const PORT = 3000;

// // connect to the MongoDB with mongoose
require('./db/connection');

// const reviewRouter = require('./routes/reviewRts')
const gameRouter = require('./routes/gameRts')
const reviewRouter = require('./routes/reviewRts');
const loginRouter = require('./routes/loginRts')

// create the Express app
const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares start here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
    secret: 'SEIRocks!',
    resave: false,
    saveUninitialized: true
  }));


// mount all routes with appropriate base paths
app.use('/games', gameRouter);
app.use ('/reviews', reviewRouter);
app.use ('/login', loginRouter);


app.listen(PORT, ()=>{
    console.log(`Hello from PORT ${PORT}`)
});

