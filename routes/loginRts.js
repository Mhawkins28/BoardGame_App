const express = require('express')
const router = express.Router()
const loginCtrl = require('../controllers/loginCtrl');

router.get('/', loginCtrl.login)


module.exports = router 