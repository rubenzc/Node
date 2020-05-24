const Trip = require('../models/Trips');

exports.showTrips = (req, res) => {
    Trip.findAll()
        .then(trips => res.render('trips', {
            page : 'Next Trips',
            trips
        }))
        .catch(error => console.log(error));
}


exports.infoTrip = (req, res) => {
    Trip.findByPk(req.params.id)
        .then(trip => res.render('trip', {
            trip
        }))
        .catch(error => console.log(error));
}