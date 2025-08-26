const mongoose = require('mongoose');

module.exports = (dbUrl) => {
    // Only attempt to connect to database if URL is provided
    if (!dbUrl) {
        console.log('No database URL provided, skipping database connection');
        return;
    }
    
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
        console.log('Connected to database');
    });
}