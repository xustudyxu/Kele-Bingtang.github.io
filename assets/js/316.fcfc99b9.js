(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{845:function(t,e,s){"use strict";s.r(e);var a=s(15),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#前提"}},[t._v("前提")])]),s("li",[s("a",{attrs:{href:"#生成硬件锁"}},[t._v("生成硬件锁")])]),s("li",[s("a",{attrs:{href:"#申请license"}},[t._v("申请License")])]),s("li",[s("a",{attrs:{href:"#问题"}},[t._v("问题")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"前提"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),s("p",[t._v("下载 home-uat.7z 压缩包，并解压，解压后的文件夹叫 home-uat。")]),t._v(" "),s("h2",{attrs:{id:"生成硬件锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成硬件锁"}},[t._v("#")]),t._v(" 生成硬件锁")]),t._v(" "),s("p",[t._v("在 home-uat 的 bin 目录下，打开 "),s("code",[t._v("sysConfig.bat")]),t._v(" 文件，在左侧菜单找到 License，点击 "),s("strong",[t._v("生成硬件锁")]),t._v("，产品号随便填写，网卡选第一个。")]),t._v(" "),s("p",[t._v("如图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/yonyou/20220222170609.png",alt:"image-20220222155059615"}})]),t._v(" "),s("p",[t._v("点击确定后，会在 home-uat 的 bin 目录下生成 "),s("code",[t._v("hardkey.req")]),t._v(" 文件，记住该文件的位置。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/yonyou/20220222170614.png",alt:"image-20220222155259098"}})]),t._v(" "),s("h2",{attrs:{id:"申请license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请license"}},[t._v("#")]),t._v(" 申请License")]),t._v(" "),s("p",[t._v("申请 License 先访问："),s("code",[t._v("https://developer.yonyoucloud.com/")]),t._v("。")]),t._v(" "),s("p",[t._v("此时进入开发者中心首页，先登录，再点击左上方的「控制台」，接着点击右上角的「全部产品」，找到「资源申请」下的「试用License申请」。")]),t._v(" "),s("p",[t._v("申请资源选择 "),s("code",[t._v("NC Cloud")]),t._v("，时间都选择当前日期，原因填写测试，硬件码选择上方生成的 "),s("code",[t._v("hardkey.req")]),t._v(" 文件。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/yonyou/20220222170622.png",alt:"image-20220222155655608"}})]),t._v(" "),s("p",[t._v("申请完成后，前往用友邮箱并进行登录："),s("code",[t._v("https://mail.yonyou.com/")]),t._v("。")]),t._v(" "),s("p",[t._v("不久后会在自己的邮箱收到带有文件的邮件，下载文件。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/yonyou/20220222170624.png",alt:"image-20220222162904740"}})]),t._v(" "),s("p",[t._v("下载 "),s("code",[t._v("licese.resp")]),t._v(" 文件，放在 home-uat 的根目录下，也可以创建一个文件夹存放 license。")]),t._v(" "),s("p",[t._v("打开 "),s("code",[t._v("sysConfig.bat")]),t._v(" 文件，在左侧菜单找到 License，点击 "),s("strong",[t._v("导入授权")]),t._v("，找到刚才的 "),s("code",[t._v("licese.resp")]),t._v(" 文件，如果成功，在下方会看到产品号等内容。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/yonyou/20220222170626.png",alt:"image-20220222164857937"}})]),t._v(" "),s("p",[s("strong",[t._v("重新启动")]),t._v(" home-uat 的 "),s("code",[t._v("startup.bat")]),t._v(" 文件，静待几分钟重启成功后（有 "),s("code",[t._v("Server startup in xxxms")]),t._v(" 出现），访问 "),s("code",[t._v("localhost:8088")]),t._v(" 页面，输入用户名和密码：")]),t._v(" "),s("ul",[s("li",[t._v("用户名：sc01 或者 src04")]),t._v(" "),s("li",[t._v("密码：123qwe")])]),t._v(" "),s("p",[t._v("看到如下界面就代表成功。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/yonyou/20220222170628.png",alt:"image-20220222163624849"}})]),t._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("重新启动 home-uat 时，出现 "),s("code",[t._v("Address already in use")]),t._v(" 错误，原因是 home-uat 需要的 8088 端口被占用了，需要释放 8088 端口。")]),t._v(" "),s("p",[t._v("打开命令行，输入命令 "),s("code",[t._v("netstat -ano")]),t._v("，找到 8088 端口的 PID。")]),t._v(" "),s("p",[t._v("打开任务管理器，找到 8088 端口对于的 PID 程序，结束即可。")])])}),[],!1,null,null,null);e.default=v.exports}}]);