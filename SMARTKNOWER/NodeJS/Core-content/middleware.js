const express = require("express");
const app = express();
const port = 3000;

// middleware
var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
}

app.use(myLogger);

app.get('/', function (req, res) {
    res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`);
});
