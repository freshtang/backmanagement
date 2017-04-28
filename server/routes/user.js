const express = require('express')
const router = express.Router()
const User= require('../controllers/user')

router.post('/user/login', User.login)

module.exports = router
/**
 * Created by jeansmacbook on 2017/4/28.
 */
