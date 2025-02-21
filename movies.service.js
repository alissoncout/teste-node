const fs = require('fs');
const csvParser = require('csv-parser');
const { db } = require('./database');

function loadCSVData() {
    fs.createReadStream('movies.csv')
        .pipe(csvParser({ separator: ';' }))
        .on('data', (row) => {
            db.run(`INSERT INTO movies (year, title, studios, producers, winner) VALUES (?, ?, ?, ?, ?)`,
                [row.year, row.title, row.studios, row.producers, row.winner === 'yes']);
        });
}

function getAwardIntervals(callback) {
    db.all(`SELECT producers, year FROM movies WHERE winner = 1 ORDER BY year`, [], (err, rows) => {
        if (err) return callback(err, null);

        const producerAwards = {};
        rows.forEach(row => {
            const producers = row.producers.split(',').map(p => p.trim());
            producers.forEach(producer => {
                if (!producerAwards[producer]) {
                    producerAwards[producer] = [];
                }
                producerAwards[producer].push(row.year);
            });
        });

        const intervals = { min: [], max: [] };
        Object.keys(producerAwards).forEach(producer => {
            const wins = producerAwards[producer];
            if (wins.length > 1) {
                for (let i = 1; i < wins.length; i++) {
                    const interval = wins[i] - wins[i - 1];
                    const awardData = { producer, interval, previousWin: wins[i - 1], followingWin: wins[i] };
                    intervals.min.push(awardData);
                    intervals.max.push(awardData);
                }
            }
        });

        intervals.min.sort((a, b) => a.interval - b.interval);
        intervals.max.sort((a, b) => b.interval - a.interval);
        callback(null, { min: [intervals.min[0]], max: [intervals.max[0]] });
    });
}

module.exports = { loadCSVData, getAwardIntervals };