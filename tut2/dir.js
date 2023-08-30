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
/*
fs.mkdir("./new", (err) => {
  if (err) throw err;
  console.log("Directory created");
});
*/

/* 
Earlier we threw an error on purpose becuase we apttempted to read file that didi not exist.
we can check if a file and directories exist or not. so we dont get those errors. Also we want to check is this regard  if the directory already exist. let not created because we dont want to re write  what we already have
In this case let use the exist sync method 
here if(!fs.existsSync('./new')) we are sying if the  "new" dir dose not exit {fs.mkdir("./new", (err) => {
  if (err) throw err;
  console.log("Directory created");}
*/
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}
// now if we were to creat a direcory agian. It will not created. It already exist. If we delete the new directoy and run the code agian it will created again becuase it did not exist.  You might find checking for file existance fairly useful before you attept to delete a file if it exixt or not. Or of you attempt to re name a file or copy a file. you wan to make sure the file exist. Like wise you want to check directories in this regard

/* now lets write some code that deletes direcories.
let copy this down 
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
  remove the ! NOT 
  and insted of mkdir change it to remove rmdir
  change the conosl.log to "Directory remove"
}

*/
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}
// if we run this it will add the directoy and remove it. we won't see the new directory but both operations will run
