const express = require('express');
const routes = require('./routes');
const { initializeDatabase } = require('./database');
const { loadCSVData } = require('./movies.service');

const app = express();
const port = 3000;

initializeDatabase(() => {
    loadCSVData();
});

app.use(express.json());
app.use(routes);


module.exports = app;

if (require.main === module) {
    const server = app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}