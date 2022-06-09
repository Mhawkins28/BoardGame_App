const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews');

//GET the create review form FIXME:
router.get('games/:id/review/new', reviewCtrl.reviewForm)

//POST review to games/:id FIXME:

router.post('games/:id/review', reviewCtrl.createReview);

//GET edit review form FIXME:

// router.get('/edit/review/:id', reviewCtrl.editReviewForm)

//PUT the edited/updated review in the place of its predecessor FIXME:

// router.put('/edit/review/:id', reviewCtrl.updateReview)

//DELETE Review FIXME:

// router.delete('/:id', reviewCtrl.deleteReview)


module.exports = router;
