// lets start up by doing a consol.log("testing"). Lets instally a global npm packege. that we can just call for the command line with adding it to a specific project.  Let type "npm install" or you can use  "npm i". We are going to add "npm i nodemon" this is a great developer packege but is also good to install it globaly. With "npm i nodemon" we want to add -g
// nodemon does it monotors your files. so everytime you save it restarts the server so we are not always typing node and the file name
//let run it and the run nodemon on the terminal. if you have multile files you need run nodemon + filename.js to switch files. but by default it will watch index.js. so if we change the consol.log it and the save it will automaticlly change in the terminal. now to exit nodemon just press ctl+c
// console.log("testing!! Nico F baby");
/*
 now that you know how to install a package globally now lets add a package to our project. but before we do that we have to initiolise npm by using "npm init" 
 now it will ask you some questions if we want to skip these quetions run the command "npm init -y" y for yes
 but..
  lets just run the "npm init" to look at the questions.
  the packged name: by (tut3) what we name the floder PRESS Enter
  version:(1.0.0) press enter
  description: (you dont have to enter one)
  entry point: (index.js) by defualt. but we can change it to any file name that will be using 
  test command: optional**
  git repository: enter your git repo
  keywords: no keywords
  author: you can put your name for author.
  license: by default

  now if we go to our file tree we see a package.json file this just has the awnser of the questions.
  the pacckage.json file is what npm reads to know what packeges to install for your projects.  this file will stay with your repo if we send to our github. but we wont be sending the packages themselves. in that way we dont have to send or store that much data. if someone forks, clones, or install your project it can read package.json file.

  or like wise if we were to host this wibsite and bulit the app and run a bulit command. it will install those packges there with having to trasnfer them form github.

  so now that we have this.
  lets add a package to our program
  npm i date-fns
  which stands for date functions.
  it will install this package as a dependecy which we will see in our package.jason file
 now we  "dependencies": {
    "date-fns": "^2.30.0"
  }
  in the package.json
  this are production dependecies  listed here
  so when the project would bulit with bulit command it will include this package; because we will know it will be part of the over all application  that need  to go into production
   but we can also have dev dependecies. before we look there 
   
   let look at the package-lock.json that we have now 
   we dont wnat to change anythis there that is handel by npm
   we only use package.json

   we also wee node modules
    and this folder can get failr large
     this beacse any dependecies that we add can also pull other depedecies  and if this package needs all of this the depedecies  the file will get fairly big
     what we want to do is creat a .gitignore file and add "node_modules" to ignore these big files 

     now if we were to npn init this 

     in case you clone an repo and it has the package.jason file but not the node_modules file just run
     npm install 
     in the terminal.

     lets remove the console.log(testing).
     
     now let import format from "date-fns" using common js
*/
// const { format } = require("date-fns");
//now that we import it let use another consol.log
// console.log(format(new Date(), "yyyyMMdd\tHH:MM:ss"));
// here we are calling the format function from date-fns. This acepts a new Date() after it acepts a new Date() we have to tell it how we wan to format it, and we will use in a log format as we learn about events. Remember you are not running nodemon. let go and add node mon as a dev package. Back in package jason lets go and add a dev dependecy. easly we can run nodemon and a globol dependecy form the terminal because we already install it. But we are  here going to add manually in the package.jason file

// we are going to run "npm i nodemon --save-dev" or a short cut version of "npm i -D" this will run nodemon as a dev dependciy. now run it. if we look at our package.jason file we will see the devdpendecit with devmon.

//lets talk about scripts and how to run our application using scripts becuase thats what a server will use if we were to host it somewhere. we will usally see a start script a dev script and a buit script

// so let go into our package.json file and under scripts let add "start": "node index" becuase this were we want to run our project with

//let change the test script to dev
//"test": "echo \"Error: no test specified\" && exit 1" to
// "dev": "nodemon index" becuase is file our aplication is running in but reeber it default into index js anyway

// now if we were to start the projects by usinig
//"npm start"
//start is one of the few words that can be run with out dev
// but what we are going to use is  "npm run dev"
// now if look at the  the terminal we can see that nodemon is running everytime we save it refreshes the terminal so if were at add another console.log() it will be mirro in the terminal
// we are go ahead and exit out of nodemon with ctl+c beacuse going to add another depedecy

// this is  a production dependecy so we dont put a falg after it it will go directly to the dependecies
// "npm i uuid" it allows us to generate id's that are diferent for each time
// we can see "uuid" now we have to import it at the top
// now this is a little different. with es6 imports we will use for uuid we want to import it as  version {v4:uuid}. You may also see it at {v4} or const uuid = require("uuid") and is the code they will use it as consol.log(uuid.v4)
// but we are going to use
//const { v4: uuid } = require("uuid"); and call it consol.log(uuid())
//this will genarate an new id
// now once agian im going to run in terminal npm run dev to start nodemon

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
console.log(format(new Date(), "yyyyMMdd\tHH:MM:ss"));
console.log(uuid());

// now we can see in the termianl that we have the date  and uuid generated and if we do any changes it will genarate a new id. This could be really useful if we were to log such as an event, error, request. That we might write to a log file.
// you can search for this packges in npm website
// now lets take look at the package.json theres a little more detail we need to look at. if look at a t the packages we installed under dependecis or dev depedecies  we get the sematic version numberes ie. "uuid": "^9.0.0"
// the first number means a majore version
// the scond number means a minor versio
// the third number means a patch
// the ^ means allow an update to the minor version and the patch if needed
// if we have ~ at the begingin this means go ahead and update a patch version but do not update a minor version
// if we remove all the number and left a "*" go ahead and update everythig all the time. this is not too safe all though you might see it
// is also good to know that when istall a package you can also istall a specific version ie. "npm i uuid@9.0.0" this will install this specific verison. when you istall any package it will it will istal the laest package but it will not ^ but it will not istall any major updates just minors and patches.

// if you wanted to check for updates you can run "npm update" and this will cheack for any updates in your packages

// if we need to unistall anythig we can use
//"npm unistall" "npm un " "npm rm"
// in this case we can use "npm rm nodemon" but nodemon sice it is a devdependeciy you need to add the -D flag "npm rm nodemon -D"
// if will look at the script{} in dev it will not remove the nodemon index you will have to do it your self. but it will remove it form  the devdependecies{}.so if we remove a package it does not remove it from your script. You will have to do it manually
