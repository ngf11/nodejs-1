// in here lets define logEvents set it equels to requier() inside of the () "./logEvents" js file
const logEvents = require("./logEvents");

// now we are ready to work with the events. What we want to do is defind an event emitter lets set this equals to require("eventes")3
//note** "events" is a common core module

const eventEmiter = require("events");

// after that we need to define a classs MyEmitter extends eventEmitter{} leave the {} empty. note** This looks starge but it is from the nodejs docs
class MyEmitter extends eventEmiter {}

// from here we can initialize the object that we are going to create
const myEmitter = new MyEmitter();

//add a listener for the log event by using .on()
//.on() is how we lisent to an event. we are goign to use a "log" event, the we pass an anonymous function (msg) message. Inside of this fucntion we will call logevents and once agian send that message
myEmitter.on("log", (msg) => logEvents(msg));

// Now that we are listing to the log event  we need to omit the event to test this out. We want to set a time out to let us undersatnd how everything is proceses. That hopefully will let us understand how everything is proceses. note** we dont have to set a time out 2 second = 2000
setTimeout(() => {
  //Emmit the event. once agian we use myEmitter.emit not on. on is listing .emit is emitting. we are going to emit the 'log' event, then we pass the message. now after the closing } add a delay
  myEmitter.emit("log", "Log event emitted!");
}, 2000);

// open a terminal and run npn run dev to launch nodemon
/*
now this will gives us an error 

it does still give us a want we want to log 
20230831        10:08:50        56d287eb-7402-47be-af37-24cac689eae3    Log event emitted!
but we  haven created our file with logs/eventsLog.txt
[Error: ENOENT: no such file or directory, open '/Users/nicolasfuentes/nodejs-1/tut3/logs/eventsLog.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/nicolasfuentes/nodejs-1/tut3/logs/eventsLog.txt'
  we need to modify the try block in logEvents.js
  by adding this the try block:
   if (!fs.existsSync(path.join(__dirname, "logs", "eventsLog.txt"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    } 
    the error will despear 

*/
// Now if we run it in the terminal we iwll get the log floder and eventLog.txt file. if we runthis agian we shoudl make a change to the file and any changes even a comment will log an event
// this is how you creat a web emmiter. When we creat a web server we will want to summit event to what request came in. so we have some details on the activiti of our web server.
