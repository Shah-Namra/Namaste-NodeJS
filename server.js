const http = require("node:http");

const server = http.createServer( function (req, res) {
    
    if(req.url === "/hehe") {
        // res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1> HEHE </h1>");
    }
    
    res.end("Helo world");
});
// creating a server object which is an instance of the http.Server class
// which is listen to the request 

server.listen(3001); // server is created


// http.createServer([options][, requestListener])