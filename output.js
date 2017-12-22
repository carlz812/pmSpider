const databaseUtil = require("./dbHandler/databaseUtil.js");
const rule = require('./citys/outputRule');
const XLSX = require('xlsx');

function values(obj) {
    let res = [];
    for (let key in obj) {
        res.push(obj[key]);
    }
    return res;
}

databaseUtil.selectData(rule, (result) => {
    let sheets = XLSX.utils.json_to_sheet(result);
    let workbook = {
        SheetNames: ['sheet1'],
        Sheets: {
            'sheet1': sheets
        }
    };
    let path = './output/';
    let filename = values(rule).join('_') + '.xlsx';
    XLSX.writeFile(workbook, path + filename);
});