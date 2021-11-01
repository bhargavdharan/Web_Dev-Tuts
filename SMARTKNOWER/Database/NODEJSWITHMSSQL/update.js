const client = require("./dbase1");

client.connect();

client.query(
  "UPDATE data2 SET id = 1 WHERE name = 'Dharan'",
  (err, result) => {
    if (!err) {
      console.log("Table Data Updated Successfully");
    }
    client.end();
  }
);
