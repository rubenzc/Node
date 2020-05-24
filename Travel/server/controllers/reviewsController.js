const Review = require('../models/Reviews');

exports.showReviews = (req, res) => {
    Review.findAll()
        .then(reviews => res.render('reviews', {
            page: 'Reviews',
            reviews
        }))
}

exports.infoReview =  (req, res) => {
    //Validate filled all forms
    let {name, mail, message} = req.body;

    let errors = [];
    if(!name) {
        errors.push({'message' : 'Add your Name'})
    }
    if(!mail) {
        errors.push({'message' : 'Add your Mail'})
    }
    if(!message) {
        errors.push({'message' : 'Add your Message'})
    }

    //Check errors
    if(errors.length > 0) {
        //Show view wuth errors
        res.render('reviews', {
            errors,
            name,
            mail,
            message
        })
    } else {
        //Save into BBDD
        Review.create({
            name,
            mail,
            message
        })
        .then(review => res.redirect('/reviews'))
        .catch(error => console.log(error));
    }
}