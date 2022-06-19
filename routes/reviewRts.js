const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewCtrl');

//POST review to /:id

router.post('/:gameId', reviewCtrl.addReview);

//GET edit review form

// router.get('/:gameId/:reviewId/edit', reviewCtrl.editReviewForm)

//PUT the edited/updated review in the place of its predecessor

// router.put('/:gameId/:reviewId', reviewCtrl.updateReview)

//DELETE Review

router.delete('/:gameId/:reviewId', reviewCtrl.deleteReview)


module.exports = router;
