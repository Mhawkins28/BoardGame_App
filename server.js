const express = require ('express');;
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const cors = require('cors');
const PORT = 3000;

require('dotenv').config()
const methodOverride = require('method-override');


// require('./config/database');
require('./db/connection');


const gameRouter = require('./routes/gameRts')
const reviewRouter = require('./routes/reviewRts');
const authRouter = require('./routes/authRts')

const app = express();


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
    secret: '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',
    resave: false,
    saveUninitialized: true,
}));

// mount all routes with appropriate base paths
app.use('/games', gameRouter);
app.use ('/reviews', reviewRouter);
app.use ('/auth', authRouter);


app.listen(PORT, ()=>{
    console.log(`Hello from PORT ${PORT}`)
});

