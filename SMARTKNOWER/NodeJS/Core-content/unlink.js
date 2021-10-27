const fs = require("fs");

fs.unlink(__dirname + "/test2.txt",(err, data) => {
  if (err) throw err;
  console.log(data+"file has been deleted....");
});
