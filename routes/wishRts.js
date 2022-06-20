const express = require('express')
const router = express.Router()
const wishCtrl = require('../controllers/wishCtrl')

router.get('/', wishCtrl.wishIndex)
// router.post('/', wishCtrl.postNewWish) 
// router.get('/:id', wishCtrl.showWishDetail)
// router.put('/:id', wishCtrl.updateWish) 
// router.delete('/:id',wishCtrl.deleteWish) 
// router.get('/:id/edit', wishCtrl.editWishForm)


module.exports = router 