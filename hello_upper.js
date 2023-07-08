var http = require('http');  // includes the http module
var uc = require('upper-case'); // include the upper-case module
const port=8080
const server=http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(uc.upperCase("dypimcam"));       // assign the upper-case module
    response.end();
}).listen(port)

// server.listen(port,function(error)
// {
//     if(error)
//     console.log('something went wrong',error)
//     else
//     console.log('server is listening on port'+port)
// })  // port number

/* step
1. npm install upper-case
2. node hello_upper.js 
3. open your browser and navigate to http://localhost:8080
*/