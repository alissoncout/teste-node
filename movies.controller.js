const { getAwardIntervals } = require('./movies.service');

function getIntervals(req, res) {
    getAwardIntervals((err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
}

module.exports = { getIntervals };