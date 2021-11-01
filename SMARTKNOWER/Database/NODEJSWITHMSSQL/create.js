const client = require('./dbase1');

client.connect();

client.query("CREATE TABLE data2(id int,name varchar(255),phone numeric(10),place varchar(255))", (err, result) => {
    if (!err) {
        console.log("Table Created Successfully");
    }
    client.end();
})