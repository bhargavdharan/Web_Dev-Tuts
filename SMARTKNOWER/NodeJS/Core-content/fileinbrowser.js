var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('test.txt', function (err, data) {
        if (err) throw err;
        console.log(data + "\nData Reading.....");
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(data);
        return res.end();
    })
}).listen(4000);