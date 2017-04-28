const ctrl = {}
const Models = require('../models')
const { Article } = Models

// 创建文章
ctrl.create = function (req, res, next) {
  new Article(req.body).save(function (err, doc) {
    if (err) {
      res.json({code: 500, msg: err})
      return
    }
    res.json({code: 200, msg: '发布成功' + doc})
  })
}

// 获取文章列表
ctrl.list = function (req, res, next) {
  const { page, limit } = req.body
  const _page = parseInt(page), _limit = parseInt(limit)
  Article.find({}, {}, {
    skip: _page * _limit,
    limit: _limit,
    sort: {
      createdAt: -1
    }
  }, function (err, docs) {
    if (err) {
      res.json({code: 500, msg: err})
      return
    }
    res.json({code: 200, msg: docs})
  })
}

ctrl.getone = function (req, res, next) {
  Article.find({_id: req.body._id}, function (err, docs) {
    if (err) {
      res.json({code: 500, msg: err})
      return
    }
    res.json({code: 200, msg: docs})
  })
}

// 获取文章总数
ctrl.count = function (req, res, next) {
  Article.count({}, function (err, count) {
    if (err) {
      res.json({code: 500, msg: err})
      return
    }
    res.json({code: 200, count})
  })
}

ctrl.delete = function (req, res, next) {
  Article.remove({_id: req.body._id}, function (err, doc) {
    if (err || (req.body._id == null)) {
      res.json({code: 500, msg: err})
      return
    } else if (doc.result.n == 0) {
      res.json({code: 300, msg: '找不到删除目标' + doc})
      return
    }

    res.json({code: 200, msg: '删除成功' + doc})
  })
}

ctrl.update = function (req, res, next) {
  Article.update({_id: req.body._id}, {
    title: req.body.title,
    content: req.body.content,
    mdcontent: req.body.mdcontent,
    tag: req.body.tag
  }, function (err, doc) {
    if (err || (req.body._id == null)) {
      res.json({code: 500, msg: err})
      return
    }
    if (doc.n == 0) {
      res.json({code: 500, msg: doc})
      return
    }
    res.json({code: 200, msg: '更新成功' + doc})
  })
}

module.exports = ctrl
