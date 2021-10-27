const fs = require('fs');

fs.readFile(__dirname + '/test2.txt', 'utf8',(err, data)=> {
    if (err) throw err;
    console.log(data);
});