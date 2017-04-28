/**
 * Created by jeansmacbook on 2017/4/28.
 */
/**
 * Created by payne on 2017/3/14.
 */

const URL = 'http://127.0.0.1:3001'
const request = require('request')

request.post(`${URL}/api/user/login`, {
  form: {
    username: 'admin',
    password: '123456'
  }
}, function (err, req, body) {
  console.log(body)
})
