//chapter 2
//How to read files
const fs = require("fs");

fs.readFile("./file/started.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
  // console.log(data.toString());s
});
// consol.log(data) here gives you buffer data
//<Buffer 48 69 2c 20 6d 79 20 4e 61 6d 65 20 69 73 20 6e 69 63 6f 2e>
//to read the data here we use consol.log(data.toString())
//What we can also use before the call back fucntion. Is to add a parameter utf8
// fs.readFile("./file/started.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   // console.log(data);
//   console.log(data.toString());
// });
//by adding the utf8 you can just consol.log(data)

// notice the throw error inside the if statment. If we get an uncought. we need to catch that
//exit on uncougth error
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught Error: ${err}`);
  process.exit(1);
});
// If we have an uncaught error. we chould exit. Here we lisenting to this uncaughtExcption with process. process is one of those vaules that node has. We do need to inport it. We lisent to an uncaughtExcption we pass in an error to the callback and we are login the error
