const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewCtrl');


// router.get('/new', reviewCtrl.reviewForm)

//POST review to /:id

router.post('/:id', reviewCtrl.addReview);

//GET edit review form

router.get('/:id/edit', reviewCtrl.editReviewForm)

//PUT the edited/updated review in the place of its predecessor

// router.patch('/:id', reviewCtrl.updateReview)

//DELETE Review

// router.delete('/:id', reviewCtrl.deleteReview)


module.exports = router;
