const express = require ('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const passport = require('passport');
const cors = require('cors');
const normalizePort = require('normalize-port')
const PORT = normalizePort(process.env.PORT || '3000');

require('dotenv').config()
require('./db/connection');
require('./db/passport');

const gameRouter = require('./routes/gameRts')
const reviewRouter = require('./routes/reviewRts');
const authRouter = require('./routes/authRts')
const userRouter = require('./routes/userRts')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
  secret: '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',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/games', gameRouter);
app.use ('/reviews', reviewRouter);
app.use ('/', authRouter);
app.use('/users', userRouter);

app.listen(PORT, ()=>{
  console.log(`Hello from PORT ${PORT}`)
});

