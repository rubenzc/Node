//Creating Express Server

//Import express
const express = require ('express');
const routes = require('./routes')

//Set up express
const app = express();

//Load routes
//Use supports get, update, delete and post requests
app.use('/', routes());


app.listen(3000);