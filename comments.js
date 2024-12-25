// Create web server
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.readFile('test.html', 'utf-8', function (error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});
// Listen on port 8080
server.listen(8080);
console.log("Server running on http://localhost:8080");