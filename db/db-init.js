const mongoose = require('mongoose');

module.exports = (dbUrl) => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
        console.log('Connected to database');
    });
}