let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/jeansblog', {
  server: {
    poolSize: 20
  }
}, function (err) {
  if (err) {
    console.error('Mongoose connect to %s error: ', err.message)
    process.exit(1)
  }
})

require('./user')
require('./article')
require('./label')

exports.User = mongoose.model('User')
exports.Article = mongoose.model('Article')
exports.Label = mongoose.model('Label')

exports._Types = mongoose.Types
