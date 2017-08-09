/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var fs = require('fs');
function getCityList() {
    var promise = new Promise((resolve, reject)=> {
        fs.readFile('./raw.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                let result = data.split(/\n/);
                resolve(result);
            }
        });
    })
    return promise;
}
module.exports = getCityList;