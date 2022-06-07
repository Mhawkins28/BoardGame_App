const express = require('express')

const router = express.Router()
const gameCtrl = require('../controllers/gameCtrl')

router.get('/', gameCtrl.gameIndex)

router.get('/new', gameCtrl.newGameForm)




module.exports = router 