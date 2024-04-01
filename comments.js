// create web server
// to run this use: node comments.js
// then open a browser and go to: http://localhost:3000

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(3000);
console.log('Server started at http://localhost:3000');
