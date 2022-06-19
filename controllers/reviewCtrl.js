const express = require('express');
const Game = require('../models/Game');

//GET the create review form  FIXME:  This is not being used yet


//POST review to /:id

const addReview = (req, res) => {
  Game.findById(req.params.gameId, (err, game) => {
    game.review.push(req.body);
    game.save(function(err) {
      res.redirect(`/games/${game._id}`);
    });
  });
}

//GET edit review form 

// const editReviewForm = (req, res) => {
//   Game.findById(req.params.gameId, (err, game) => {
//     if(err) {
//         res.status(400).json({message:"Invalid"})
//         return
//     }
//     console.log(game)
//     res.render('reviews/editReview', {game, reviewId: req.params.reviewId})
// })
// }

//PUT the edited/updated review in the place of its predecessor FIXME:

// const updateReview = (req, res, next) => {
//   const reviewData = req.body.review
//   const gameId = reviewData
//   const reviewId = req.params.reviewId
//   Game.findById(gameId)
//   .then(game => {
//     const review = game.review.id(reviewId)
//     review.set(reviewData)
//     return game.save()
//   })
//   .then(()=>res.status(200))
//   .catch(next)
  // (req.params.gameId, req.body, {new:true}, (err, game)=> {
  //   if(err) {
  //     res.status(400).json(err)
  //     return
  //   }
  //   res.send(game)
  //   console.log(game.review.id(req.params.reviewId))
  //   // try{ 
  //   //   game.review.id(req.params.reviewId).rating = req.params.rating
  //   //   game.review.id(req.params.reviewId).content = req.params.content
  //   //   game.save(err => err)
  //   //   res.redirect(`/games/${req.params.gameId}`)
  //   //  } 
  //   //  catch(err){
  //   //    res.send(err)
  //   //  }
  //   })
  // }

//DELETE Review

const deleteReview = (req, res) => {
Game.findById(req.params.gameId, (err, game)=> {
  if(err) {
    res.status(400).json(err)
    return
  }
  game.review.id(req.params.reviewId).remove()
  game.save(err => err)
  res.redirect(`/games/${req.params.gameId}`)
  })
}


module.exports = {
  addReview,
  deleteReview
};

