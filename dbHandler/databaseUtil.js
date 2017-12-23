/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
const $CONFIG = require('./DB_CONFIG');
const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

function saveData(data) {
    MongoClient.connect($CONFIG.URL, (err, db) => {
        assert.equal(null, err);
        insertData(db, () => {
            db.close();
            console.log(`${data[0].cityname} saved`);
        })
    });
    let insertData = (db, callback) => {
        let collection = db.collection($CONFIG.COLLECTION);
        collection.insert(data, (err, result) => {
            if (err) {
                throw Error('Error:' + err);
            }
            callback(result);
        });
    }
}

function selectData(rule, callback) {
    MongoClient.connect($CONFIG.URL, (err, db) => {
        mongoQuery(db, (result) => {
            callback && callback(result);
            db.close();
        });
    });
    let mongoQuery = function (db, cb) {
        //连接到表
        let collection = db.collection($CONFIG.COLLECTION);
        //查询数据
        collection.find(rule).toArray((err, result) => {
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
