/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var getServerData = require("./getServerData.js");
var updateCookie = require("../common/updateCookie.js");
var fs = require("fs");

function getData(dcity) {
    let cookie = updateCookie();
    var method = 'GETDATA';
    var object = {};
    object['city'] = dcity;

    return new Promise((resolve, reject) => {
        getServerData(method, object, cookie, function (obj) {
            resolve(obj.data.rows);
        }, 0.5);
    })
}

module.exports = getData;