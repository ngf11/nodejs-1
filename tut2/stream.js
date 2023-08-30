// if we have larger files some times is better not to grab all og the data at once. It could be too much; is like  moving a lage pile of sand bucket by bucket or removing the water of a pool bucket by bucket. lets make this easier on the application. lets get the file structure
// we are using the fs.createReadStream("./file/lorem.txt").
//But a better option will be to use the path option
// add { encoding: "utf8" } to rs

const fs = require("fs");
const rs = fs.createReadStream("./file/lorem.txt", { encoding: "utf8" });
// here we created a readeble stream and we specifity the coding

// now lets specify a writible stream.Now where  do we want to write this to let call it "new-lorem.txt". and we dont need to specify anything else form her. we already specify what was being read.
const ws = fs.createWriteStream("./file/new-lorem.txt");

// now that we have that. We need to lisent to the data coming in form the stream. let grab our readble stream rs.on()
// here we a re listing to the data tha is comming in
// rs.on("data", (dataChunk) => {
//   //here we can consol.log the dataChunk or we can write to our writible stream
//   ws.write(dataChunk);
// });
// // after we run this we have a new file new-lorem.txt
/*
this was an example on how to work on a larger file. In this case when you are wortking with a much larger file  this a more efficient way.
---
speaking of efficiency let fix this 
rs.on("data", (dataChunk) => {
 ws.write(dataChunk);
});
insted of using a listener use 
rs.pipe()
the pass to the witeble stream ws
piping is more efficiant 
** note - delete the new-lorem.txt and run it again
now we have the new-lorem.txt 
*/
rs.pipe(ws);

// let creat a new js file dri.js
