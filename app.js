'use strict';

const http = require('http');

// Die Umgebungsvariable korrekt abrufen
const message = process.env.MESSAGE || 'Hello World';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(message);
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
