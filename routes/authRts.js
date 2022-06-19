const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/authCtrl');

router.get('/', authCtrl.login)


module.exports = router 