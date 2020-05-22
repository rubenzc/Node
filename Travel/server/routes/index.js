const express = require ('express');
const router = express.Router();

module.exports = function() {
    router.get('/', (req, res) => {
        res.render('index');
    })

    router.get('/about-us', (req, res) => {
        res.render('about-us', {
            page: 'About us'
        });
    })

    return router;
}