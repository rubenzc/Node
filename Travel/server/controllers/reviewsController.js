const Review = require('../models/Reviews');

exports.showReviews = async (req, res) => {
    const reviews = await Review.findAll()
    res.render('reviews', {
        page: 'reviews',
        reviews
    })
}

exports.infoReview =  async (req, res) => {
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
        const reviews = await Review.findAll() 
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