const express = require('express');
const Game = require('../models/Game');

//GET the create review form  FIXME:

const reviewForm = (req, res)=>{
  Game.findById(req.params.id, (err, game) => {
    if(err) {
        res.status(400).json(err)
        return
    }
    res.render('reviews/newReview')
})
}


//POST review to games/:id FIXME:

const addReview = (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    game.review.push(req.body);
    game.save(function(err) {
      res.redirect(`/games/${game._id}`);
    });
  });
}

//GET edit review form FIXME:

const editReviewForm = (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    if(err) {
        res.status(400).json({message:"Invalid"})
        return
    }
    res.render('reviews/editReview')
})
}



//PATCH the edited/updated review in the place of its predecessor FIXME:


//DELETE Review FIXME:

// const deleteReview = (req, res) => {
//   Game.findById(req.params.id, (err, game) => {
//   game.review.id(req.params.reviewId).remove()
//     if (err) {
//       res.status(400).json({message:"Cannot Delete"})
//       return
//   }
// res.redirect(`/reviews/${req.params.id}`)
// })
// }





module.exports = {
  addReview,
  reviewForm,
  editReviewForm
  // deleteReview
};

