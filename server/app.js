const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/index')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
routes(app)
app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})