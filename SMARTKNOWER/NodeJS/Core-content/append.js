const fs = require("fs");

fs.appendFile("test2.txt",'this content appended', (err) => {
  if (err) throw err;
  console.log("appended successfully....");
});
