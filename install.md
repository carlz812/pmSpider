# 运行环境安装

### Node.js&npm

<a href="http://www.runoob.com/nodejs/nodejs-install-setup.html">node.js&npm安装</a>

### <a href="http://www.runoob.com/mongodb/mongodb-tutorial.html">mongoDB教程</a>

* 下载 <a href="https://www.mongodb.com/download-center#atlas">mongoDB下载</a>
* 安装
    * <a href="http://www.runoob.com/mongodb/mongodb-window-install.html">windows 安装</a>
    * <a href="http://www.runoob.com/mongodb/mongodb-linux-install.html">linux 安装</a>
    * <a href="http://www.runoob.com/mongodb/mongodb-osx-install.html">Mac 安装</a>

* PATH 变量设置
    ```
    export PATH=<mongodb-install-directory>/bin:$PATH
  
    source .bash_profile
   ```
  
  将`<mongodb-install-directory>`替换成mongoDB安装路径
  
* 读写权限设置

    配置好PATH之后，运行mongod ,可能会提示没有/data/db目录的读写权限
    可以参照 <a href="https://segmentfault.com/a/1190000010383923">mongodb配置</a>中的 `启动mongodb` 一节
    
    使用sudo chown语句时，注意将使用计算机当前用户的用户名
    ```
    sudo chown -R username /data
    ```
    
* 可视化

    使用mongodb时，可以使用一些可视化的工具帮助自己查询整理数据库中的数据
    mac环境下我使用的是 `Robo 3T`
    
    也可以使用其他工具，看个人习惯，网上教程很多，基本都可以搜到
 

### pmSpider 初始化


 * `nodejs`&`npm` 安装完毕
 * `mongodb`安装完毕并启动，处于等待链接的状态
    
确认以上两项之后，在命令行下进入到`pmSpider`的目录下
    
依次执行下面命令：

    npm install
    node index.js

看到命令行输出

`总计*****83*****个城市`

说明程序成功运行

### 注意事项

##### 定时功能

如果你成功启动程序后，发现数据库中并没有数据写入，可能是还没到指定的时间

在`index.js`文件的 `startSchedule` 方法 中

    var times = ['3'];
    
`times`数组中存放的数字 3，是指程序会在每小时的第三分钟开始运行， `aqistudy`貌似是一小时更新一次，如果你需要更细粒度，可以在`times`数组中进行配置

<a href="https://www.npmjs.com/package/node-schedule">定时器配置参考</a>

##### 抓取更多城市数据

现在配置的城市是长三角珠三角还有省会城市(貌似是这样。。)
希望更改程序配置的抓取城市，只要在`raw.txt`文件中进行修改就可以了，每个城市占一行


##### 数据的提取

存到mongodb中的数据，可以用nodejs 把数据提取出来进行相应的处理之后，保存为相应的格式

<a href="http://www.runoob.com/nodejs/nodejs-mongodb.html">nodejs连接mongodb</a>

##### 插件

npm提供了大量的工具包供我们使用，比如你想把提取出的数据保存为 Excel文件，可以直接在npm中搜索 <a href="https://www.npmjs.com/search?q=excel">excel</a>

一般出现的前几个是使用最多，最相关的组件，选择你认为比较心宜的插件进行安装使用，安装方法在网站中都有比较详细的介绍


