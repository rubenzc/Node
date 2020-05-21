//Express Server

//Import express
const express = require ('express');
const path = require('path');
const routes = require('./routes')

//Set up express
const app = express();

//Enable pug
app.set('view engine', 'pug');

//Add wiews
app.set('views', path.join(__dirname, './views'));

//Load static folder called Public
app.use(express.static('public'));

//Load routes
//Use supports get, update, delete and post requests
app.use('/', routes());


app.listen(3000);