/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var fs = require('fs');
function getCityList() {
    return new Promise((resolve, reject)=> {
        fs.readFile('./citys/getCityList.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                let result = data.split(/\n/);
                resolve(result);
            }
        });
    });
}
module.exports = getCityList;