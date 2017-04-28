module.exports = function (app) {
//  app.use('/api',require('./reg'));
  app.use('/api', require('./user'))
//  app.use('/api',require('./admin'));
//  app.use('/api',require('./classify'));
  app.use('/api', require('./article'))
  app.use('/api', require('./label'))
}
