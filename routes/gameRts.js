const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/gameCtrl')

router.get('/', gameCtrl.gameIndex)
router.post('/', gameCtrl.postNewGame) 
router.get('/wishlist', gameCtrl.wishlist)
router.get('/new', gameCtrl.newGameForm)
router.get('/:id', gameCtrl.showGameDetail)
router.put('/:id', gameCtrl.updateGame) 
router.delete('/:id',gameCtrl.deleteGame) 
router.get('/:id/edit', gameCtrl.editGameForm)



module.exports = router 







