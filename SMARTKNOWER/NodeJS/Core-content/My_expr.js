const express = require('express');
const app = express();
const port = 3000;

// Routing with express
// app.get('/', (req, res) => {
//     res.send('Hello World!welcome to express...')
// });

// app.get('/about', (req, res) => {
//     res.send("We are in about us page...& we installed nodemon");
// });

// app.get('/contact', (req, res) => {
//     res.send("We are in contact us page...");
// });

// middleware
app.get('/', log, hello);
function log(req, res, next) {
    console.log("logging contents");
    next();
}
function hello(req, res, next) {
    const user = "Dharan";
    console.log(`Hello ${user}`);
    next();
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})