//chapter 2
//How to read files
// const fs = require("fs");

// fs.readFile("./file/started.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   // console.log(data.toString());s
// });
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
// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught Error: ${err}`);
//   process.exit(1);
// });
// If we have an uncaught error. we chould exit. Here we lisenting to this uncaughtExcption with process. process is one of those vaules that node has. We do need to inport it. We lisent to an uncaughtExcption we pass in an error to the callback and we are login the error in the console "consol.error"
// the we exit the application with process.exit(1)
//lets throw an error by changing the file path. fs.readFile form ="./file/started.txt' to ./file/hello.txt" to throw an error
// fs.readFile("./file/hello.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   // console.log(data.toString());s
// });
// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught Error: ${err}`);
//   process.exit(1);
// });
//console.error = There was an uncaught Error: Error: ENOENT: no such file or directory, open './file/hello.txt'.
// fs.readFile("./file/started.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   // console.log(data.toString());s
// });
// console.log("hello ..."); // we are adding this consol.log to demostrate that readFile and node in general. the fucntions and methods are asynchronous. we are loging the data in call back function consol.log(data) and consol.log("hello..."). What we are saying here is that node  will process fs.readFile("./file/started.txt", "utf8", (err, data){} and also do the rest of the code in this case the console.log("hello ...") and the rest of the program. so once imdone reading the file i will get that data to you. Let run this and see what we get in the console first. we will get the Helo... So node read the whole file first and the log the hello... and the fetch the dtata Hi my name is nico
// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught Error: ${err}`);
//   process.exit(1);
// });

// Insted of hard coding the path to the file there is a better way.
// in order to that let use the const path = require('path)
const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "file", "started.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
    // console.log(data.toString());s
  }
);
console.log("hello ...");

// if we use path.join(__dirname, "file", "started.txt"), is much better aproch then hard coding in the file path
// if we run this code everything will work.

// now that we know how to read a file. let right a file

fs.writeFile(
  path.join(__dirname, "file", "reply.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("Write Complete");
  }
);

// by coping the readFile and changing it to the writeFile--changing the file name any name. removing the 'utf8' because by default is 'utf8'-- then we add the mesege to the file in this case 'Nice to meet you' --the callback will only have an error not the data we ar not reading data. in the consol.log we are removing the data. and add in this case "Write Complete". we can save this and we can run this code.now the file replay.txt is created with text inside.
// now the file replay.txt is created.

fs.appendFile(
  path.join(__dirname, "file", "test.txt"),
  "Testing Text",
  (err) => {
    if (err) throw err;
    console.log("Append Complete");
  }
);

// we copy the write file. and changing it to appendFfile. Here we can add more content to an existent file or creat a new file. let change the reply.txt to test.txt/ to text.txt change the content "Testing Text". In the console.log("Append Completed"). Run the code.. alod here if we look at the terminal we cna see that the readFile finish last duo the asynchronous nature of node. Append file will modify an existing file  and can append content to it or creat a new file if it dosen't exist. Duo to the asynchronous nature of nodejs and these diferent methods we are calling
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught Error: ${err}`);
  process.exit(1);
});

// if we wanted to modify a file a file that we created. it will be better to put appendFile inside the callback of a write me file

fs.writeFile(
  path.join(__dirname, "file", "user.txt"),
  "Hi, nico. Keep going",
  (err) => {
    if (err) throw err;
    console.log("Write Complted");
    fs.appendFile(
      path.join(__dirname, "file", "user.txt"),
      "\n\n You will get what you want",
      (err) => {
        if (err) throw err;
        console.log("Append Completed");
      }
    );
  }
);
//min 28:30
