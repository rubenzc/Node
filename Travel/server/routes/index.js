const express = require ('express');
const router = express.Router();

module.exports = function() {
    router.get('/', (req, res) => {
        res.send('Home');
    })

    router.get('/about-us', (req, res) => {
        res.send('About us');
    })

    return router;
}