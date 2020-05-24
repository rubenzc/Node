//Express Server

//Import express
const express = require ('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')

const configs = require('./config')

// db.authenticate()
//     .then(() => console.log('DB Connected'))
//     .catch(error => console.log(error));

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

//Show actual year at footer and generate the route
app.use((req, res, next) => {
    //Create new date
    const date = new Date();
    res.locals.actualDate = date.getFullYear();
    res.locals.route = req.path;
    return next();
})
//Execute bodyParser
app.use(bodyParser.urlencoded({extended: true}));


//Load routes
//Use supports get, update, delete and post requests
app.use('/', routes());


app.listen(3000);