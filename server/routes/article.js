const express = require('express')
const router = express.Router()
const Article = require('../controllers/article')
// 创建一篇文章
router.post('/article/create', Article.create)
router.post('/article/list', Article.list)
router.post('/article/count', Article.count)
router.post('/article/delete', Article.delete)
router.post('/article/update', Article.update)
router.post('/article/getone', Article.getone)

module.exports = router
