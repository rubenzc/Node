const Trip = require('../models/Trips');
const Review = require('../models/Reviews');

exports.queriesHomePage = async (req, res) => {

    const trips = await Trip.findAll({limit: 3})

    const reviews = await Review.findAll({limit: 3})

    res.render('index', {
        page: 'Next trips',
        clase: 'home',
        trips,
        reviews
    })
}