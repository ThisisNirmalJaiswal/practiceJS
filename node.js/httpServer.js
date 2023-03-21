// Create an HTTP server
// we can create the http module to create a server.To create an HTTP server, use the http.createServer() function

const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'content-type': 'application/json'
    });
    res.end('hello, world');
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})