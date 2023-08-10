//chapter 1
// console.log(global);

//inport

const os = require("os");
const path = require("path");
const { dirname } = require("path");
//inport functions form another file
const math = require("./math");
//inport of function disconstracted
// const { add } = require("./math");
const { add, subtract, multiply, divide } = require("./math");
//constracted
console.log(math.add(2, 2));
//disctracted
console.log(add(5, 6));
console.log(subtract(5, 6));
console.log(divide(5, 6));
console.log(multiply(5, 6));

// console.log(os.type());
// console.log(os.release());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// const pase = path.parse(__filename);
