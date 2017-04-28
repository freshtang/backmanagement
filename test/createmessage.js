/**
 * Created by tang on 2017/3/26.
 */


const URL = "http://127.0.0.1:3001";
const request = require('request');

request.post(`${URL}/api/label/create`, {
    form:{
        tag: "asdasd"
    }
}, function (err, req, body) {
    console.log(body)
});
