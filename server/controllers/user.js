const ctrl = {}
// const Models = require('../models')
// const { User } = Models
const user = require('../user').items[0]
const createToken = require('../middleware/createToken')

// 登陆验证
ctrl.login = function (req, res, next) {
  const name = req.body.username
  if (name == user.username && req.body.password == user.password) {
    res.json({
      code: 200,
      token: createToken(name)
    })
  } else {
      // 用户名或者密码错误没有通过验证，要么重新输入，要么点击注册()
    res.json({
      code: -200,
      message: '用户名或密码错误'
    })
  }
}

module.exports = ctrl
/**
 * Created by jeansmacbook on 2017/4/28.
 */
