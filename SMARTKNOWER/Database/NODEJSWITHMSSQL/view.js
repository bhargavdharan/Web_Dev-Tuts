const client = require("./dbase1");

client.connect();

client.query(
  "select * from data2",
  (err, result) => {
    if (!err) {
    //   console.log("Table Data Inserted Successfully");
        console.log(result.rows);
    }
    client.end();
  }
);
