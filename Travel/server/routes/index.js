const express = require ('express');
const router = express.Router();

//Controllers
const aboutUsController = require ('../controllers/aboutUsController');
const homeController = require ('../controllers/homeController');
const tripsController = require('../controllers/tripsController.js');
const reviewsController = require('../controllers/reviewsController.js');

module.exports = function() {

    router.get('/', homeController.queriesHomePage)
    router.get('/about-us', aboutUsController.infoAboutUs)
    router.get('/trips', tripsController.showTrips);
    router.get('/trips/:id', tripsController.infoTrip);
    router.get('/reviews', reviewsController.showReviews);
    //Fill form
    router.post('/reviews', reviewsController.infoReview);

    return router;
}