const Trip = require('../models/Trips');
const Review = require('../models/Reviews');

exports.queriesHomePage = (req, res) => {
    const promises = [];

    promises.push(Trip.findAll({
        limit: 3
    }))

    promises.push(Review.findAll({
        limit: 3
    }))

    //Pass the promise and execute
    const result = Promise.all(promises)

    result.then(result => res.render('index', {
        page: 'Next trips',
        clase: 'home',
        trips: result[0],
        reviews: result[1]
    }))
    .catch(error => console.log(error))
}