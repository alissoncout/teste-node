const { app, server } = require('./server');
const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});