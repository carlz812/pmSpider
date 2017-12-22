/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
var schedule = require("node-schedule");
var getCityList = require("./citys/getCityList.js");
var getData = require("./getData/getData.js");
var databaseUtil = require("./dbHandler/databaseUtil.js");
var $CONFIG = {
    count: 0
};

/**
 * 每小时进行一次
 */
function startSchedule() {
    var rule = new schedule.RecurrenceRule();
    var times = ['3', '12', '13','51'];
    rule.minute = times;

    startCollectAll();
    /*var j = schedule.scheduleJob(rule, function () {
        startCollectAll();
    });*/
}

/**
 * 每小时启动一次，开始收集所有城市数据
 */
function startCollectAll() {
    console.log("第" + ++$CONFIG.count + "次拉取");
    let temp = $CONFIG.CITYS;
    temp.forEach((city, index) => {
        setTimeout(() => {
            startCollectOne(city);
        }, index * 2000);
    })
}

function startCollectOne(city) {
    console.log("开始保存*****" + city + "*****的数据");
    getData(city).then((data) => {
        databaseUtil.saveData(data);
    });
}

function init() {
    getCityList().then((city) => {
        $CONFIG.CITYS = city;
        console.log("总计*****" + $CONFIG.CITYS.length + "*****个城市");
        startSchedule();
    }).catch((res) => {
        console.log(JSON.stringify(res));
    })
}

init();