# pmSpider
<p>定时从<a href="https://www.aqistudy.cn/">aqistudy</a>抓取空气质量数据</p>
<p>造福大气科研工作者[并不简单]</p>

[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)]()
[![node](https://img.shields.io/badge/npm-3.10.8-blue.svg)]()
[![nodejs](https://img.shields.io/badge/nodejs-v6.9.1-orange.svg)]()


### 文件目录

<pre>
|---citys
|---common
|-----userAgents.json
|-----cookieSetter.js
|---dbHandler
|-----databaseUtil.js
|-----DB_CONFIG.js
|---getData
|-----decodeData.js
|-----getData.js
|-----sendPost.js
|---output
|---index.js
|---output.js
|---package.json
</pre>

### 文件功能介绍

#### `index.js`
启动入口文件，开启定时任务，每小时抓取一次，并输出相关信息

#### `getData.js`
通过对网站进行分析，设置cookie，绑定城市信息，调起  `decodeData.js` 

#### `decodeData.js`
对请求参数进行加密，对返回参数进行解密，得到`json`数据串

#### `databaseUtil.js`
将获取到的数据保存到`mongodb`中，方便后续处理

#### `getCityList.js&&raw.txt`
将需要拉取的城市整理为一个数组，在启动时调用

#### `cookieSetter.js`
网站`cookie`的生成器，避免`cookie`过期失效，可以设置为定期更新

#### `userAgents.json`
防止爬虫被墙，储备的`userAgent`
但是目前没有发现该网站有对`ua`进行识别，后期可做成定期更换

#### `output.js`&&`outputRule.js`
将保存在数据库中的数据保存为Excel文件
`outputRule.js` 中为提取数据的限制条件，需要按照给出的 `key` 格式书写 

## TODOS
<ul>
  <li>增加容错机制，在遇到异常时保证程序可以自动选择解决方案</li>
  <li>优化代码配置</li>
  <li>通过echart等工具，将数据可视化</li>
</ul>


## 联系作者

<p>carlzzzz@163.com</p>
<p>yuancheng.yuan@qunar.com</p>
<p>http://carlzz.cc/</p>




