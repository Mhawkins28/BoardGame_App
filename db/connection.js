const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost:27017/boardgame-app', {
    useNewUrlParser: true
})

//FIXME: ask about this---> connect to .env/passport db

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   });

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
