const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

function initializeDatabase(callback) {
    db.serialize(() => {
        db.run(`CREATE TABLE movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER,
            title TEXT,
            studios TEXT,
            producers TEXT,
            winner BOOLEAN
        )`, callback);
    });
}

module.exports = { db, initializeDatabase };