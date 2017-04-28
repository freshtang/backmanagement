const ctrl = {}
const Models = require('../models')
const { Label } = Models

// 创建标签
ctrl.create = function (req, res, next) {
  new Label(req.body).save(function (err, doc) {
    if (err) {
      res.json({code: 500, msg: err})
      return
    }
    res.json({code: 200, msg: '发布成功' + doc})
  })
}

ctrl.list = function (req, res, next) {
  Label.find({}, {}, {
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

ctrl.delete = function (req, res, next) {
  Label.remove({_id: req.body._id}, function (err, doc) {
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

module.exports = ctrl
/**
 * Created by jeansmacbook on 2017/4/28.
 */
