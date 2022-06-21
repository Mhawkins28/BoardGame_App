const Game = require('../models/Game')

const gameIndex = async (req, res) => {
    let gameIndex 
    if(res.locals.user?._id) {
        gameIndex=await Game.find({owner:res.locals.user._id})
    } else {
        gameIndex=await Game.find({})  
    }
    res.render('games/index', {gameIndex})
}

const newGameForm = (req, res) => {
    res.render('games/new')
}

const postNewGame = (req, res) => {
    Game.create({owner: res.locals.user._id, ...req.body}, (err) => {
        if(err) {
            res.status(400).json(err)
            return
        }
        res.redirect('/games')
    })
}

const showGameDetail = (req, res) => {
    Game.findById(req.params.id).then((game)=>{
        res.render('games/show', {game})
    })
}

const editGameForm = (req, res) => {
    Game.findById(req.params.id, (err, game) => {
        if(err) {
            res.status(400).json(err)
            return
        }
        res.render('games/edit', {game})
    })
}

const updateGame = (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err) => {
        if(err) {
            res.status(400).json(err)
            return
        }
        res.redirect(`/games/${req.params.id}`)
    })
}

const deleteGame = (req, res) => {
    Game.findByIdAndDelete(req.params.id, ()=>{
        res.redirect('/games')
    })
}

const wishlist = (req, res) => {
    res.render('games/wish')
}

module.exports = {
    gameIndex,
    newGameForm,
    postNewGame,
    showGameDetail,
    editGameForm,
    updateGame,
    deleteGame,
    wishlist
}


