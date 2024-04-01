// create web server
// load http module
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');

// create http server
http.createServer( function (request, response) {  
   // parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   var query = url.parse(request.url).query;
   var queryData = qs.parse(query);
   var comment = queryData.comment;
   
   var con = mysql.createConnection({
	   host: "localhost",
	   user: "root",
	   password: "root",
	   database: "test"
   });
   
   con.connect(function(err) {
	   if (err) throw err;
	   console.log("Connected to database!");
	   var sql = "INSERT INTO comments (comment) VALUES ('"+comment+"')";
	   con.query(sql, function (err, result) {
		   if (err) throw err;
		   console.log("1 record inserted");
	   });
   });
   
   // print the name of the file for which request is made
   console.log("Request for " + pathname + " received.");
   // from the file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else { 
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
   });   
}).listen(8080);

// Console will print the message
console.log('Server running at http://