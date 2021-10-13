// http is a core module

const http = require('http');

const server = http.createServer(function (req, res) {
    
    console.log("Server Started....!")
    res.write("welcome to server program by nodejs");
    res.end();
}).listen(3000,()=>{console.log("Server is running...")});

