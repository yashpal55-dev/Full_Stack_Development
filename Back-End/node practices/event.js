// const EventEmitter = require('events');


// let eventEmitter = new EventEmitter();

// eventemitter.on('myEvent' , (msg) =>{
//     console.log(msg);
// });

// eventEmitter.emit('myEvent',"First event");

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Hello World');
}     

// Assign the eventhandler to an event:                                                                                                                                                                                                                                                                                                                                         
eventEmitter.on('yash', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('yash');



// var http = require('http');

// http.createServer(function (req,res){
//     res.writeHead(200, {'content-type' : 'text/html'});
//     res.write('Hello World');
//     res.end();
// }).listen(8080);