/**
 * Created by yuancheng.yuan on 2017/8/8.
 */
const schedule = require("node-schedule");
const getCityList = require("./citys/getCityList.js");
const getData = require("./getData/getData.js");
const databaseUtil = require("./dbHandler/databaseUtil.js");

let $CONFIG = {
    count: 0,
    rule: ['minute', ['6']],//规定每小时的第几分钟开始运行
    period: 2000
};

/**
 * 每小时进行一次
 */
function startSchedule() {
    let rule = new schedule.RecurrenceRule();
    rule[$CONFIG.rule[0]] = $CONFIG.rule[1];
    let j = schedule.scheduleJob(rule, function () {
        startCollectAll();
    });
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
        }, index * $CONFIG.period);
    })
}

function startCollectOne(city) {
    getData(city).then((data) => {
        databaseUtil.saveData(data);
    });
}

function init() {
    getCityList().then((city) => {
        $CONFIG.CITYS = city;
        startSchedule();
    }).catch((res) => {
        console.log(JSON.stringify(res));
    })
}

init();