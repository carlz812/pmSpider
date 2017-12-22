var databaseUtil = require("./dbHandler/databaseUtil.js");
var rule = require('./citys/outputRule');
var XLSX = require('xlsx');

function values(obj) {
    let res = [];
    for (let key in obj) {
        res.push(obj[key]);
    }
    return res;
}

databaseUtil.selectData(rule, (result) => {
    var sheets = XLSX.utils.json_to_sheet(result);
    var workbook = {
        SheetNames: ['sheet1'],
        Sheets: {
            'sheet1': sheets
        }
    };
    var path = './output/';
    var filename = values(rule).join('_') + '.xlsx';
    XLSX.writeFile(workbook, path + filename);
});