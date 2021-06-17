// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 19 - Basic Routing
//-----------
// WHAT THIS APP DOES------
// This lesson’s application xxxxxxxxxxx 
// xxxxxxxxxxxxx

// REQUIRE THE CORE MODULES------
// srvr requires th http core mod
const http = require('http');
// responding w html files requires file system core mod
const fs = require('fs');

// CREATE THE SERVER------
// create & assign a srvr
// utilize NodeJS's req & res objs
const server = http.createServer(function (req, res)
{
	// CON.LOG A TEST MSSG-------
	console.log('\nHey look, the client made this URL request: ' + req.url);
    // CHECK CLIENT REQ VIA IF-ELSE STATEMENT
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } 




});

// LISTEN FOR THE PORT NUMBER------
server.listen(3000, '127.0.0.1');
// CON.LOG A TEST MSSG-------
console.log("\nThis app's server is now listening to port 3000, y'all!\n");