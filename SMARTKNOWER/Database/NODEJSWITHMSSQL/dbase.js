
const { Client } = require('pg');


const client = new Client({
    host: "localhost",
    port: 5432,
    user: 'postgres',
    password: 'mypassword',
    database: "TestDB"
})

client.connect();

client.query(`select * from data`, (err, result) => {
    if (!err) {
        console.log(result.rows);
    }
    else {
        console.log("Error! Check code once..")
    }
    client.end();
})