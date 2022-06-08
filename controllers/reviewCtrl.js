// const express = require('express');
// const Game = require('../models/Game');

// //Show Route

// const showReviewDetail = (req, res) => {
//   Game.find({})
//   .populate('reviews')
//       .then( games => {
//           res.render('index', {games})
//       })
// };

// //New review route
// const newReviewForm = (req, res) =>{
//   let reviewId = req.params.id
//   res.render('reviews/review', {reviewId})
// };

// //Create review route
// const postNewReview = (req, res) =>{
//   Review.create(req.body)
// .then((review) =>{
//   return Game.findByIdAndUpdate(req.params.id, {$push: {reviews: review._id}})
//       })
// .then((game) => {
//   return Review.findOneAndUpdate({title: req.body.title}, {$set: {game: game._id}})
//   })
// .then(res.redirect(`/games/${req.params.id}`))
// };

// //Review Edit Route
// const editReviewForm = (req, res) => {
//   Review.findById(req.params.id)
//   .then(review =>{
//       res.render('rEdit', {review})
//   })
// };

// //Review Update Route
// const updateReview = (req, res) => {
//   Review.findByIdAndUpdate(req.params.id, (err, r) => {
//     if(err){
//       res.status(400).json(err)
//       return
//     }
//       res.json(r)
//   })
// };

// //Delete Review Route
// const deleteReview = (req, res) => {
//   Review.findByIdAndDelete(req.params.id, req.body, {new: true},(err, r)=> {
//     if(err){
//         res.status(400).json(err)
//         return
//       }
//     res.json(r)
//   })
// };

// module.exports = {
//   showReviewDetail,
//   newReviewForm,
//   postNewReview,
//   editReviewForm,
//   updateReview,
//   deleteReview
// }