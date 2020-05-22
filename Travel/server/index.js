//Express Server

//Import express
const express = require ('express');
const path = require('path');
const routes = require('./routes')

const configs = require('./config');

//Set up express
const app = express();

//Enable pug
app.set('view engine', 'pug');

//Add wiews
app.set('views', path.join(__dirname, './views'));

//Load static folder called Public
app.use(express.static('public'));

//Check id development or production
const config = configs[app.get('env')];

//Create variable for sitename
app.locals.title = config.sitename;

//Show actual year at footer
app.use((req, res, next) => {
    //Create new date
    const date = new Date();
    res.locals.actualDate = date.getFullYear();
    console.log(res.locals);
    return next();
})

//Load routes
//Use supports get, update, delete and post requests
app.use('/', routes());


app.listen(3000);