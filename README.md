# nodejs-1

- Global objects in Js

console.log() // global object global scope we can accese it anywhere
setTimeOut() // we use this to call a function after a delay. we can use is on the client, we can you use this on the browser or inside of node
clearTimeOut()
setInterval() we use to repeatitive call a ƒunction after a given delay
clearinterval() which we use to stop that function being call repeatitive

In browser we have this "window" objects that represents our global scope.
All the functions and variabkles that are definded globaly; we can access them via this window object
so we can call
-- window.consol.log or simpaly console.log

the javascript engine will prefix consol.log with window.consol.log
because this where this object is defin

also: All the previus globla object belong to the window object

In Node we do not have this window object

we have

- global
  all this the prvius global objects can be access in node thru the global
  global.consol.log

One thing we need to know about node
is that the variables that we defind on here; they are not added to the global object. In other words if we do a console.log(globla.variableName) and run the app in node. We will get undifined on the console. They are only scope to script.js. They are not avilable outside this file.

The variables and functions add to this file are not added to the global object. They are only scope to this file.
This is because of node modular system

- Modules
