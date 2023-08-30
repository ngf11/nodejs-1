/* 
dir is refering to directory.
let go ahead and defin fs
*/
const fs = require("fs");
/* 
after we get our file stream let creat a directory by using fs.mkdir.which stands for make directory. let call this directoy new fs.mkdir("./new")

then there is a call back with an error
fs.mkdir("./new", (err)=>{
    if(err) throw err
    console.log("Direcory created")
})
let save and run it on the terminals
*/
fs.mkdir("./new", (err) => {
  if (err) throw err;
  console.log("Directory created");
});
