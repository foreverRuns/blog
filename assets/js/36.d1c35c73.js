(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{719:function(e,a,s){"use strict";s.r(a);var v=s(42),t=Object(v.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"段错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#段错误"}},[e._v("#")]),e._v(" 段错误")]),e._v(" "),a("p",[e._v("一般来说，段错误就是指访问的内存超出了系统所给这个程序的内存空间。")]),e._v(" "),a("p",[e._v("通常这个值是由 "),a("code",[e._v("gdtr")]),e._v(" 来保存的，他是一个 48 位的寄存器，其中的 32 位是保存由它指向的 "),a("code",[e._v("gdt表")]),e._v("，后 13 位保存相应于 "),a("code",[e._v("gdt")]),e._v(" 的下标，最后 3 位包括了程序是否在内存中以及程序的在 cpu 中的运行级别。指向的 "),a("code",[e._v("gdt")]),e._v(" 是由以 64 位为一个单位的表，在这张表中就保存着程序运行的代码段以及数据段的起始地址以及与此相应的段限和页面交换还有程序运行级别还有内存粒度等等的信息。")]),e._v(" "),a("p",[e._v("一旦程序发生了越界访问，cpu 就会产生相应的异常保护，于是 "),a("code",[e._v("segmentation fault")]),e._v(" 就出现了。")]),e._v(" "),a("p",[e._v("简而言之，产生段错误就是访问了错误的内存段，一般是你没有权限，或者根本就不存在对应的物理内存，尤其常见的是访问 0 地址。")]),e._v(" "),a("h2",{attrs:{id:"gdb查找段错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gdb查找段错误"}},[e._v("#")]),e._v(" gdb查找段错误")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("gdb")]),e._v(" 调试需要带有调试信息的可执行程序，编译的时候需要加上 "),a("code",[e._v("-g -rdynamic")]),e._v(" 参数。")]),e._v(" "),a("ol",[a("li",[e._v("控制台 gdb 启动应用，"),a("code",[e._v("gdb ./app")]),e._v("，然后 "),a("code",[e._v("run")]),e._v(" 跑起来")]),e._v(" "),a("li",[e._v("查看出现段错错误时打印的信息进行分析")]),e._v(" "),a("li",[e._v("使用 "),a("code",[e._v("nm")]),e._v(" 命令列出二进制文件中的符号表，包括符号地址、符号类型、符号名等，这样可以帮助定位在哪里发生了段错误")]),e._v(" "),a("li",[e._v("使用 "),a("code",[e._v("ldd")]),e._v(" 命令查看二进制程序的共享链接库依赖，包括库的名称、起始地址，这样可以确定段错误到底是发生在了自己的程序中还是依赖的共享库中")]),e._v(" "),a("li",[e._v("使用 "),a("code",[e._v("dmesg")]),e._v(" 命令可以查看发生段错误的程序名称、引起段错误发生的内存地址、指令指针地址、堆栈指针地址、错误代码、错误原因等")]),e._v(" "),a("li",[e._v("使用 "),a("code",[e._v("addr2line")]),e._v(" 打印出发生错误的文件和行号")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# addr2line -e '可执行文件名'  'dmesg打印的地址'")]),e._v("\naddr2line "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-e")]),e._v(" a.out 0x8043db\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("终极大法 "),a("code",[e._v("printf")]),e._v(" 。。。")])]),e._v(" "),a("h2",{attrs:{id:"core-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-file"}},[e._v("#")]),e._v(" core file")]),e._v(" "),a("p",[e._v("想让系统在信号中断造成的错误时转储 "),a("code",[e._v("core")]),e._v(" 文件，需要使用 "),a("code",[e._v("ulimit")]),e._v(" 进行设置")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看 core file size")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("ulimit")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 开启无限制转储")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("ulimit")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" unlimited\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 关闭转储")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("ulimit")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# num 为最多转储的core文件数")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("ulimit")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" num\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("开始 "),a("code",[e._v("core")]),e._v(" 文件转储之后，应用程序运行出现 "),a("code",[e._v("segmentation fault")]),e._v(" 时就会产生 "),a("code",[e._v("core")]),e._v(" 文件，名字一般是 "),a("code",[e._v("core.进程号")]),e._v(" 或者 "),a("code",[e._v("core")]),e._v("，保存在该应用程序对应的目录下。")]),e._v(" "),a("blockquote",[a("p",[e._v("注："),a("code",[e._v("/proc/sys/kernel/core_uses_pid")]),e._v(" 可以控制产生的 "),a("code",[e._v("core")]),e._v(" 文件的名字是否添加 "),a("code",[e._v("pid")]),e._v(" 作为扩展，如果添加则文件的内容为 "),a("code",[e._v("1")]),e._v("，否则为 "),a("code",[e._v("0")]),e._v("。")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("gdb "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" core.pid ./app_name\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("进入 gdb 调试模式后，输入 "),a("code",[e._v("where")]),e._v(" 或者 "),a("code",[e._v("bt")]),e._v(" 查看出错的信息")]),e._v(" "),a("p",[e._v("一般的解决思路如下：")]),e._v(" "),a("ul",[a("li",[e._v("进入 GDB 运行程序直到程序出错")]),e._v(" "),a("li",[e._v("查看出错的代码段的行数")]),e._v(" "),a("li",[e._v("对出现问题行的前一行设置断点( "),a("code",[e._v("break [行数]")]),e._v(" )并监视该代码段涉及的变量( "),a("code",[e._v("watch [变量名]")]),e._v(" )")]),e._v(" "),a("li",[e._v("如果涉及递归调用，在运行过程中需要经常查看堆栈列表 ( "),a("code",[e._v("bt/backtrace")]),e._v(" ) 避免堆栈溢出")]),e._v(" "),a("li",[e._v("然后就可以开始运行，当到达断点行或监视变量发生改变时就会停下来，这时可以展示被监视的变量 ( "),a("code",[e._v("dispaly [变量名]")]),e._v(" ) ,这样然后再单步执行( "),a("code",[e._v("step")]),e._v(" )，查看变量是否按照预期在变化")])]),e._v(" "),a("blockquote",[a("p",[e._v("关于GDB调试工具的更多使用方式可以参照: "),a("a",{attrs:{href:"https://blog.csdn.net/MOU_IT/article/details/88322477",target:"_blank",rel:"noopener noreferrer"}},[e._v("GDB使用教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);