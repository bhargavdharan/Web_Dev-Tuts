// http is a core module

const http = require("http");

const server = http
  .createServer(function (req, res) {
      res.writeHead(200, {
          "content-type": "text/html"
      });
      res.write("<h2>server with content-type</h2>");
      res.end();
  })
  .listen(3001, () => {
    console.log("Server is running...");
  });
