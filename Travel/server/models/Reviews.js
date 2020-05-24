const Sequelize = require('sequelize');

const db = require('../config/database');

const Review = db.define('reviews', {
    name : {
        type: Sequelize.STRING
    },
    mail : {
        type: Sequelize.STRING
    },
    message : {
        type: Sequelize.STRING
    }
});

module.exports = Review;