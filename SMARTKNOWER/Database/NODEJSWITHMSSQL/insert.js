const client = require('./dbase1');

client.connect();

client.query("INSERT INTO data2 VALUES(3,'Chaithanya',8899093456,'visakhapatnam')", (err, result) => {
    if (!err) {
        console.log("Table Data Inserted Successfully");
    }
    client.end();
})