# nodejs-1

- Global objects in Js

console.log() // global object global scope we can accese it anywhere
setTimeOut() // we use this to call a function after a delay. we can use is on the client, we can you use this on the browser or inside of node
clearTimeOut()
setInterval() we use to repeatitive call a ƒunction after a given delay
clearinterval() which we use to stop that function being call repeatitive

In browser we have this "window" objects that represents our global scope.
All the functions and variables that are definded globaly; we can access them via this window object
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

what we have learned is that in the cliant-side of Javascript; that we run inside of browsers when we declare a varibale or a function that is add it to the global scope.
for example:
const sayHello = function(){

}
this function is added to the global scope and it avablible via byt the window object
window.sayHello();

Now there is a problem with behavior. In a real world application we ofent split our javascript code into multiple files. Now it is posible that we have two files; and in both of these files we defind this fucntion say hello. With the exact same name because of this function is add to the global scope. When we define this function in another file that new defenition overite that previus defenition. This is problem with the global scope.

In order to bulit rilable and mantainable applications we should avoid defining functions in the global scope.

Insted we need modularity we need to create small buliding blocks or modules whwe we defind our variables and functions. So two functions with the same name do not overwrite another variable and function defined somewhere else that encaputalted inside of that module

module 1

---

| |
| |
| |

---

module 2

---

| |
| |
| |

---

module 3

---

| |
| |
| |

---

At the core of node we have this concempt call module. So every file in anode aplication is concider a module(such as script.js or app.js). The variables and functions defind in that file or that module are scoped to that file.

In object oriented programing terms we say "they are private. They are not available outside that container(outside of that modual). If you want to use a variable or function defined in a module out that side of that module. We need explicity export it to make it public.

- Creating a Module
