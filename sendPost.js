/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
const superagent = require("superagent");
require('superagent-charset')(superagent)
require('superagent-retry')(superagent)

var headers = {
    'Host': 'www.aqistudy.cn',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://www.aqistudy.cn',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'User-Agent': 'User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
}

function httpPost(url, param, cookie) {
    cookie = cookie || {};
    return new Promise(function (resolve, reject) {
        superagent.post(url)
            .send(param)
            .set(headers)
            .set('Cookie', cookie) // 设置cookie
            .end(function (err, res) {
                res.text ? resolve(res.text) : reject(err)
                if (err) {
                    reject(err)
                }
            })
    });
}

module.exports = {
    httpPost
}