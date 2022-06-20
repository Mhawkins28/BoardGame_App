const express = require('express');
const Game = require('../models/Game');

const wishIndex = async (req, res) => {
  let wishIndex = await Game.find({})
  res.render('games/wishlist', {wishIndex})
}

const showWishDetail = (req, res) => {
  Game.findById(req.params.id).then((game)=>{
  res.render('games/showWish', {game})
  })
}

const postNewWish = (req, res) => {
  Game.create(req.body, (err) => {
      if(err) {
          res.status(400).json(err)
          return
      }
      res.redirect('/wishlist')
  })
}

const editWishForm = (req, res) => {
  Game.findById(req.params.id, (err, game) => {
      if(err) {
          res.status(400).json(err)
          return
      }
      res.render('games/editWish', {game})
  })
}

const updateWish = (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err) => {
      if(err) {
          res.status(400).json(err)
          return
      }
      res.redirect(`/wishlist/${req.params.id}`)
  })
}

const deleteWish = (req, res) => {
  Game.findByIdAndDelete(req.params.id, ()=>{
      res.redirect('/wishlist')
  })
}

module.exports = {
  wishIndex,
  postNewWish,
  showWishDetail,
  editWishForm,
  updateWish,
  deleteWish
}

//make sure this is even how this would work. idk. 
//look into adding a button/form to move game from wish list to Game list. 
//if the button is easy, add one to game for archive