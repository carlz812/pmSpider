/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var Util = require("./getServerData.js");
var database = require("./databaseUtil.js");
var cookieSetter = require("./cookieSetter.js");
var fs = require("fs");

function getData(dcity) {
    let cookie = '15dc13da7c11-0ad3bd714002a7-30667808-1fa400-15dc13da7c2304;';
    var method = 'GETDATA';
    var object = {};
    object['city'] = dcity;
    Util.getServerData(method, object, cookie, function (obj) {
        database.saveData(obj.data.rows)
    }, 0.5);
}

module.exports = getData;