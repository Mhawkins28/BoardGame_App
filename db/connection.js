const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Mhawkins:Megz1028@seiprojects.xqifg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});