# Nodejs

* Javascript is clients side programming.

* Nodejs is server side programming.

* Javascript is a browser language, javascript code interpreted and converted in to machine language javascript engine.

* Javascript engine will convert user readable language to machine language.

* chrome and internet explorer uses v8 engine => v8 is famous

* v8 is faster, means js is faster

* **"Nodejs is a javascript with v8 engine"**

## what is nodejs ?

* Nodejs is an open-source, javascript runtime environment on chromes V8 that effortlessly develop fast ans scalable web applications.

* It utilizes scalable , non-blocking I?O model that makes lightweight, efficient and excellent for data-intensive real time applications.

* Due to single threaded nature. It's used for traditional web sites and back-end API services.

## NodeJs

* Anonymous functions - A function which does not have any name is called "Anonymous functions".

```anonymous
var person = function(){

}
person()
```

* Arrow functions - single line functions

* GlobalObjects-
    1. __dirname
    2. __filename
    3. require
    4. console
    5. exports
    6. modules

* require() function:
    Node.js follow the CommonJS module system, and built in require function is the easiest way to include modules that exist in separate files.the basic functionality of require is that reads javascript

* Ecmascript

    1. var declarations are globally scoped or function scoped while let and const are block scoped.

    2. var variables can be updated and redeclared within its scope.

    3. let variables can be updated and cannot be redeclared.

    4. const variables can neither be updated nor re-declared.

* module.exports:

--- The module.exports is a special object which is included in every javascript file in the Node.js application by default.
--- The module is a variable that represents the current module, and exports is an object that will be exposed as a module.So, whatever you assign to module.exports will exposed as a module.

* createServer:

--- Any node web server application will at some point have to create a web server object.
--- this is done by using createServer.

```example
const http = require('http');
const server = http.createServer((request,response)=>{
    //magic happens here
}).listen(port_number);
```

To run server, goto web browser and type "localhost:3000"

To stop the server
```ctrl+c```

* Request Handler:

--- Any node web server application will at some point have to create a web server object
--- The function that's made against that server, so it's called the request handler.
--- when an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transactions,request and response.

* req and res objects:

--- The req object represents the HTTP request and has properties for the request query string,parameters,body,and HTTP headers.
--- The res object represents the HTTP response that sends when it gets an HTTP request.

* response.write():

--- The response.write() method is an inbuilt Application program interfaces of the 'http' module which sends a chunk of the response body that is omitted when the request is a HEAD request.

* What is RES writeHead in nodejs ?
--- writeHead() property is an inbuilt property of the 'http' module which sends a response header to the request.In your code, the writeHead() is called to write the header of the response,that the application will serve to the client.

* Content-type:
--- content-type in the response is the header we can set to inform client would interpret the data from the server.

--- if you are sending down an text file to the client, you should set the Content-Type to text/plain

--- if you are sending down an text file to the client, you should set the Content-Type to text/html
