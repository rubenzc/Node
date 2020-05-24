const Trip = require('../models/Trips');

exports.showTrips = async (req, res) => {
    const trips = await Trip.findAll()
        res.render('trips', {
            page : 'Next Trips',
            trips
        })
}


exports.infoTrip = async (req, res) => {
    const trip = await Trip.findByPk(req.params.id)
    res.render('trip', {
        trip
    })
}