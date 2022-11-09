var myexpress = require("express");
var mybodyParser = require('body-parser');
var mycookieParser = require("cookie-parser");
var mymulter = require('multer');
var portno = 3000;
var myupload =  mymulter();
var myapp = myexpress();
myapp.use(mycookieParser());
myapp.use(mybodyParser.json());
myapp.use(mybodyParser.urlencoded({extended:true}));
myapp.use(upload.array());
var animals = require('./animals.js');
myapp.use('/animals,animals');
myapp.listen(portno);

//Rest API index.js file

var myexpress = require('express');
var myrouter = myexpress.Router();
var animals=[
    {id:1, name:"Cat", color:"Brown"},
    {id:2, name:"Dog", color:"Black"},
    {id:3, name:"Cow", color:"White"},
];

myrouter.get('/', function(req,res){
    res.json(animals);
});

module.exports = myrouter;



//To check Output 

C:\Users\..\>curl -i -H "Accept:application/json" -H "Content-Type:application/json" -X GET 
localhost:3000/animals