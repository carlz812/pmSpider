/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

function saveData(data) {
    var url = 'mongodb://127.0.0.1:27017/carlzz';
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(data[0].cityname);
        insertData(db, function () {
            db.close();
        })
    });
    var insertData = function (db, callback) {
        var collection = db.collection('site');
        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }
}

module.exports = {
    saveData: saveData
}
