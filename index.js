var express = require('express');
var app=express();

var Controller = require('./controller.js');

//setting up view engine as ejs
app.set('view engine','ejs');

// setting up of static files
app.use(express.static('./'));

Controller(app);

//Port that we are listening
var port = process.env.PORT || 3000;

app.listen(port);
console.log('Listening to port 3000');
