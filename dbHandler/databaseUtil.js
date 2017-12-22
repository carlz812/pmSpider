/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var $CONFIG = require('./DB_CONFIG');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

function saveData(data) {
    MongoClient.connect($CONFIG.URL, function (err, db) {
        assert.equal(null, err);
        console.log(data[0].cityname);
        insertData(db, function () {
            db.close();
        })
    });
    var insertData = function (db, callback) {
        var collection = db.collection($CONFIG.COLLECTION);
        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }
}

function selectData(rule, callback) {
    MongoClient.connect($CONFIG.URL, function (err, db) {
        mongoQuery(db, function (result) {
            callback && callback(result);
            db.close();
        });
    });
    var mongoQuery = function (db, cb) {
        //连接到表
        let collection = db.collection($CONFIG.COLLECTION);
        //查询数据
        collection.find(rule).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            cb(result);
        });
    };
}

module.exports = {
    saveData,
    selectData
};
