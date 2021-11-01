const client = require("./dbase1");

client.connect();

client.query(
  "DELETE FROM data2 WHERE id=1",
  (err, result) => {
    if (!err) {
      console.log("Table Data Deleted Successfully");
    }
    client.end();
  }
);
