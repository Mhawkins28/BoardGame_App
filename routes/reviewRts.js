const express = require('express')

const router = express.Router()
const reviewCtrl = require('../controllers/reviewCtrl')


//may not neeed reveiwIndex, but keeping for now
router.get('/', reviewCtrl.reviewIndex)

router.get('/new', reviewCtrl.newReviewForm)
//router.post('/', reviewCtrl.postNewReview) -- create new reveiw post

router.get('/:id', reviewCtrl.showReviewDetail)

router.get('/:id/edit', reviewCtrl.editReviewForm)
//router.put('/:id', reviewCtrl.updateReview) --> submit edit form

//router.delete('/:id',reviewCtrl.deleteReview) -- deletes review (may be different depending on where the reviews are indexed)



module.exports = router 