//Creating Express Server

//Import express
const express = require ('express');

//Set up express
const app = express();
//Use supports get, update, delete and post requests
app.use('/', (req, res) => {
    res.send('Hellow world in NodeJS');
})

app.listen(3000);