// lets start up by doing a consol.log("testing"). Lets instally a global npm packege. that we can just call for the command line with adding it to a specific project.  Let type "npm install" or you can use  "npm i". We are going to add "npm i nodemon" this is a great developer packege but is also good to install it globaly. With "npm i nodemon" we want to add -g
// nodemon does it monotors your files. so everytime you save it restarts the server so we are not always typing node and the file name
//let run it and the run nodemon on the terminal. if you have multile files you need run nodemon + filename.js to switch files. but by default it will watch index.js. so if we change the consol.log it and the save it will automaticlly change in the terminal. now to exit nodemon just press ctl+c
console.log("testing!! Nico F baby");
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
     in the terminal
     55.08 min
*/
