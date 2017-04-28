const express = require('express')
const router = express.Router()
const Label = require('../controllers/label')
// 创建一篇文章
router.post('/label/create', Label.create)
router.post('/label/list', Label.list)
router.post('/label/delete', Label.delete)

module.exports = router
/**
 * Created by jeansmacbook on 2017/4/28.
 */
