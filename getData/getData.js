/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var decodeData = require("./decodeData.js");
var cookieSetter = require("../common/cookieSetter.js");
var fs = require("fs");

function getData(dcity) {
    let cookie = '15dc13da7c11-0ad3bd714002a7-30667808-1fa400-15dc13da7c2304;';
    var method = 'GETDATA';
    var object = {};
    object['city'] = dcity;

    return new Promise((resolve, reject) => {
        decodeData(method, object, cookie, function (obj) {
            resolve(obj.data.rows);
        }, 0.5);
    })
}

module.exports = getData;