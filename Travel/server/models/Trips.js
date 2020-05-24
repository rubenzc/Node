const Sequelize = require('sequelize');

const db = require('../config/database');

const Trip = db.define('trip', {
    title : {
        type: Sequelize.STRING
    },
    price : {
        type: Sequelize.STRING
    },
    departure_date : {
        type: Sequelize.DATE
    },
    arrival_date : {
        type: Sequelize.DATE
    },
    image : {
        type: Sequelize.STRING
    },
    description : {
        type: Sequelize.STRING
    },
    available : {
        type: Sequelize.STRING
    },
});

module.exports = Trip;