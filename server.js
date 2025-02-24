const express = require('express');
const routes = require('./routes');
const { initializeDatabase } = require('./database');
const { loadCSVData } = require('./movies.service');

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

module.exports = app;

if (require.main === module) {
    initializeDatabase(async () => {
        await loadCSVData();
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}