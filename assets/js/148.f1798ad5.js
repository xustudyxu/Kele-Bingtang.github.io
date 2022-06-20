(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{675:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#概述"}},[t._v("概述")])]),a("li",[a("a",{attrs:{href:"#查询缓存配置"}},[t._v("查询缓存配置")])]),a("li",[a("a",{attrs:{href:"#开启查询缓存"}},[t._v("开启查询缓存")])]),a("li",[a("a",{attrs:{href:"#查询缓存select选项"}},[t._v("查询缓存SELECT选项")])]),a("li",[a("a",{attrs:{href:"#查询缓存失效的情况"}},[t._v("查询缓存失效的情况")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("开启 MySQL 的查询缓存，当执行完全相同的 SQL 语句的时候，服务器就会直接从缓存中读取结果，当数据被修改，之前的缓存会失效，修改比较频繁的表不适合做查询缓存。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024152026.png",alt:""}})]),t._v(" "),a("ol",[a("li",[t._v("客户端发送一条查询给服务器")]),t._v(" "),a("li",[t._v("服务器先会检查查询缓存，如果命中了缓存，则立即返回存储在缓存中的结果。否则进入下一阶段")]),t._v(" "),a("li",[t._v("服务器端进行 SQL 解析、预处理，再由优化器生成对应的执行计划")]),t._v(" "),a("li",[t._v("MySQL 根据优化器生成的执行计划，调用存储引擎的 API 来执行查询")]),t._v(" "),a("li",[t._v("将结果返回给客户端")])]),t._v(" "),a("h2",{attrs:{id:"查询缓存配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存配置"}},[t._v("#")]),t._v(" 查询缓存配置")]),t._v(" "),a("ul",[a("li",[t._v("查看当前的 MySQL 数据库是否支持查询缓存：")])]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'have_query_cache'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024152039.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("在 Mysql8，已经取消了查询缓存。")])]),t._v(" "),a("ul",[a("li",[t._v("查看当前 MySQL 是否开启了查询缓存：")])]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'query_cache_type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024152045.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("查看查询缓存的占用大小：")])]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'query_cache_size'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024152056.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("查看查询缓存的状态变量：")])]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("STATUS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Qcache%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024152107.png",alt:""}})]),t._v(" "),a("p",[t._v("各个变量的含义如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Qcache_free_blocks")]),t._v(" "),a("td",[t._v("查询缓存中的可用内存块数")])]),t._v(" "),a("tr",[a("td",[t._v("Qcache_free_memory")]),t._v(" "),a("td",[t._v("查询缓存的可用内存量")])]),t._v(" "),a("tr",[a("td",[t._v("Qcache_hits")]),t._v(" "),a("td",[t._v("查询缓存命中数")])]),t._v(" "),a("tr",[a("td",[t._v("Qcache_inserts")]),t._v(" "),a("td",[t._v("添加到查询缓存的查询数")])]),t._v(" "),a("tr",[a("td",[t._v("Qcache_lowmen_prunes")]),t._v(" "),a("td",[t._v("由于内存不足而从查询缓存中删除的查询数")])]),t._v(" "),a("tr",[a("td",[t._v("Qcache_not_cached")]),t._v(" "),a("td",[t._v("非缓存查询的数量（由于 query_cache_type 设置而无法缓存或未缓存）")])]),t._v(" "),a("tr",[a("td",[t._v("Qcache_queries_in_cache")]),t._v(" "),a("td",[t._v("查询缓存中注册的查询数")])]),t._v(" "),a("tr",[a("td",[t._v("Qcache_total_blocks")]),t._v(" "),a("td",[t._v("查询缓存中的块总数")])])])]),t._v(" "),a("h2",{attrs:{id:"开启查询缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启查询缓存"}},[t._v("#")]),t._v(" 开启查询缓存")]),t._v(" "),a("p",[t._v("MySQL 的查询缓存默认是关闭的，需要手动配置参数 query_cache_type，来开启查询缓存。")]),t._v(" "),a("p",[t._v("query_cache_type 该参数的可取值有三个：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("OFF 或 0")]),t._v(" "),a("td",[t._v("查询缓存功能关闭")])]),t._v(" "),a("tr",[a("td",[t._v("ON 或 1")]),t._v(" "),a("td",[t._v("查询缓存功能打开，SELECT 的结果符合缓存条件即会缓存，否则，不予缓存，显式指定 SQL_NO_CACHE，不予缓存")])]),t._v(" "),a("tr",[a("td",[t._v("DEMAND 或 2")]),t._v(" "),a("td",[t._v("查询缓存功能按需进行，显式指定 SQL_CACHE 的 SELECT 语句才会缓存；其它均不予缓存")])])])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("/usr/my.cnf")]),t._v(" 配置中，增加以下配置：")]),t._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启mysql的查询缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("query_cache_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("配置完毕之后，重启服务既可生效，"),a("code",[t._v("service mysqld restart")]),t._v("；")]),t._v(" "),a("p",[t._v("然后就可以在命令行执行 SQL 语句进行验证 ，执行一条比较耗时的 SQL 语句，然后再多执行几次，查看后面几次的执行时间；获取通过查看查询缓存的缓存命中数，来判定是否走查询缓存。")]),t._v(" "),a("h2",{attrs:{id:"查询缓存select选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存select选项"}},[t._v("#")]),t._v(" 查询缓存SELECT选项")]),t._v(" "),a("p",[t._v("可以在 SELECT 语句中指定两个与查询缓存相关的选项：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SQL_CACHE：如果查询结果是可缓存的，并且 query_cache_type 系统变量的值为 ON 或 DEMAND ，则缓存查询结果")])]),t._v(" "),a("li",[a("p",[t._v("SQL_NO_CACHE：服务器不使用查询缓存。它既不检查查询缓存，也不检查结果是否已缓存，也不缓存查询结果")])])]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" SQL_CACHE id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" SQL_NO_CACHE id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"查询缓存失效的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存失效的情况"}},[t._v("#")]),t._v(" 查询缓存失效的情况")]),t._v(" "),a("p",[t._v("1）SQL 语句不一致的情况，要想命中查询缓存，查询的 SQL 语句必须一致")]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- SQL1 : ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- SQL2 : ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("2）当查询语句中有一些不确定的时，则不会缓存。如：now(), current_date(), curdate(), curtime(), rand(), uuid(), user(), database()")]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb_item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" updatetime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("3）不使用任何表查询语句")]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("4）查询 MySQL，information_schema 或 performance_schema 系统数据库中的表时，不会走查询缓存")]),t._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("engines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("5） 在存储的函数，触发器或事件的主体内执行的查询")]),t._v(" "),a("p",[t._v("6） 如果表更改，则使用该表的所有高速缓存查询都将变为无效并从高速缓存中删除。这包括使用 "),a("code",[t._v("MERGE")]),t._v(" 映射到已更改表的表的查询。一个表可以被许多类型的语句，如被改变 INSERT，UPDATE，DELETE，TRUNCATE TABLE，ALTER TABLE，DROP TABLE，或 DROP DATABASE")])])}),[],!1,null,null,null);s.default=r.exports}}]);