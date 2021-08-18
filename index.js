//Node JS require
//The basic functionality of require is that it reads a 
//JavaScript file, executes the file, and then proceeds 
//to return the export object.
// IMPORT EXPRESS SERVER
const express = require('express');
//The express() syntax is the equivalent of saying new express(). 
//It creates a new instance of express that you can assign to a variable.
var app = express();

var bodyParser = require("body-parser");
//A new body object containing the parsed data is populated 
//on the request object after the middleware (i.e. req.body). 
//This object will contain key-value pairs, 
app.use(bodyParser.json());

//CORS is a node.js package for providing a 
//Connect/Express middleware 
var cors = require('cors')
app.use(cors())

//LINK WITH dbconnect.js :- dbconnect.js will connect with Mongodb
// my_mongoose will capture here export from dbconnect.js - Binding
const my_mongoose = require('./dbconnect_promise.js');
 
// IMPORT empController
const employeeAPI = require('./controllers/employeeAPI_promise.js');

//USE URL /emp - route to studentController 
app.use('/emp', employeeAPI);

// START THE EXPRESS SERVER. 4500 is the PORT NUMBER
app.listen(4500, () => console.log('EXPRESS Server Started at Port No: 4500'));