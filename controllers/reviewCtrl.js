const res = require("express/lib/response")

const reviewIndex = (req, res) => {
    res.send('This is the review INDEX')
}
const newReviewForm = (req, res) => {
    res.send('the NEW reveiw form will render here!')
}

const editReviewForm = (req, res) => {
    res.send('the EDIT reveiw form will render here!')
}

const showReviewDetail = (req, res) => {
    res.send('the SHOW reveiw page will render here')
}

const postNewReview = (req, res) => {

}

const updateReview = (req, res) => {

}

const deleteReview = (req, res) => {
    
}




module.exports = {
    reviewIndex,
    newReviewForm,
    postNewReview,
    showReviewDetail,
    editReviewForm,
    updateReview,
    deleteReview
}