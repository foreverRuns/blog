(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{724:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("Mac 下需要将一个调用 "),a("code",[s._v("openssl-0.9.8")]),s._v(" 的项目升级到 "),a("code",[s._v("openssl-1.1.1")])]),s._v(" "),a("h2",{attrs:{id:"mac-下-openssl-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-下-openssl-编译"}},[s._v("#")]),s._v(" Mac 下 openssl 编译")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下载 openssl-1.1.1 版本 "),a("a",{attrs:{href:"https://www.openssl.org/source/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.openssl.org/source/"),a("OutboundLink")],1),s._v("，这里下载的最新版本是"),a("code",[s._v("openssl-1.1.1t")])])]),s._v(" "),a("li",[a("p",[s._v("解压到 "),a("code",[s._v("/Users/YourName/Desktop/OpenSSL")]),s._v(" 目录下，在该目录下创建 "),a("code",[s._v("build_arm64")]),s._v(" 目录，用于编译安装 arm64 版本 (终端 "),a("code",[s._v("uname -a")]),s._v(" 查看系统架构)")])]),s._v(" "),a("li",[a("p",[s._v("进入 openssl-1.1.1t 目录，执行")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /Users/YourName/Desktop/OpenSSL/openssl-1.1.1t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置并生成 makefile")]),s._v("\n./configure darwin64-arm64-cc no-shared "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/YourName/Desktop/OpenSSL/build_arm64\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("darwin64-arm64-cc")]),s._v(" - 编译 arm64 版本")]),s._v(" "),a("li",[a("code",[s._v("no-shared")]),s._v(" - 编译静态库")]),s._v(" "),a("li",[a("code",[s._v("--prefix")]),s._v(" - make install 安装路径")])]),s._v(" "),a("p",[s._v("如果你不知道当前系统架构，也可以使用以下命令，自动获取当前系统的架构进行配置，无需指定")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./config no-shared "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/lake/Desktop/OpenSSL/build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("ol",[a("li",[s._v("编译安装成功后，到安装目录下查看一下")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/build_arm64/lib\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看库架构版本")]),s._v("\nlipo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-archs")]),s._v(" libcrypto.a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\nlipo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-info")]),s._v(" libcrypto.a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\notool "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-hv")]),s._v(" libcrypto.a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("编译其他架构版本")])]),s._v(" "),a("p",[s._v("可以在 "),a("code",[s._v("openssl-1.1.1t/Configurations/10-main.conf")]),s._v(" 下查看，找到 Mac 对应的，类似如下：")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('"darwin-i386-cc" => {\n\tinherit_from     => [ "darwin-common", asm("x86_asm") ],\n\tCFLAGS           => add(picker(release => "-fomit-frame-pointer")),\n\tcflags           => add("-arch i386"),\n\tlib_cppflags     => add("-DL_ENDIAN"),\n\tbn_ops           => "BN_LLONG RC4_INT",\n\tperlasm_scheme   => "macosx",\n},\n"darwin64-x86_64-cc" => {\n\tinherit_from     => [ "darwin-common", asm("x86_64_asm") ],\n\tCFLAGS           => add("-Wall"),\n\tcflags           => add("-arch x86_64"),\n\tlib_cppflags     => add("-DL_ENDIAN"),\n\tbn_ops           => "SIXTY_FOUR_BIT_LONG",\n\tperlasm_scheme   => "macosx",\n},\n"darwin64-arm64-cc" => {\n\tinherit_from     => [ "darwin-common", asm("aarch64_asm") ],\n\tCFLAGS           => add("-Wall"),\n\tcflags           => add("-arch arm64"),\n\tlib_cppflags     => add("-DL_ENDIAN"),\n\tbn_ops           => "SIXTY_FOUR_BIT_LONG",\n\tperlasm_scheme   => "ios64",\n},\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("在 "),a("code",[s._v("/Users/YourName/Desktop/OpenSSL/")]),s._v(" 下创建 "),a("code",[s._v("build_x86_64")]),s._v(" 和 "),a("code",[s._v("build_i386")]),s._v(" 目录")])]),s._v(" "),a("li",[a("p",[s._v("进入 "),a("code",[s._v("openssl-1.1.1t")]),s._v(" 目录，执行")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /Users/YourName/Desktop/OpenSSL/openssl-1.1.1t\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译安装 x86_64 版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean\n./configure darwin64-x86_64-cc no-shared "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/lake/Desktop/OpenSSL/build_x86_64\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译安装 i386 版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean\n./configure darwin-i386-cc no-shared "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/lake/Desktop/OpenSSL/build_i386\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("具体可以查看源码下的 "),a("code",[s._v("INSTALL")]),s._v(" 文件")])]),s._v(" "),a("h2",{attrs:{id:"版本差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本差异"}},[s._v("#")]),s._v(" 版本差异")]),s._v(" "),a("p",[a("code",[s._v("OpenSSL 1.1.0")]),s._v(" 版本之后更改了许多结构体成员的可见性，无法再直接访问成员，必须使用相应的 "),a("code",[s._v("getter")]),s._v(" 和 "),a("code",[s._v("setter")]),s._v(" 函数。")]),s._v(" "),a("p",[a("code",[s._v("getter")]),s._v(" 相关的函数中，带 "),a("code",[s._v("0")]),s._v(" 的，例如 "),a("code",[s._v("RSA_get0_n")]),s._v("，表示引用指针，而不是创建新的内存。不要 free 它们。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能通过 rsa->n 去访问内部成员了，需要使用以下 getter 拿到每个成员数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_q")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_dmp1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_dmq1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_iqmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如果要区分版本使用，可以通过如下进行条件编译")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<openssl/opensslv.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("OPENSSL_VERSION_NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x10100000L")])])]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* OpenSSL 1.0.2 and below (old code) */")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("else")])]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* OpenSSL 1.1.0 and above (new code) */")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"修改记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[s._v("#")]),s._v(" 修改记录")]),s._v(" "),a("ul",[a("li",[s._v("X509 *x509")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x509->cert_info->key->pkey --\x3e")]),s._v("\nEVP_PKEY "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("X509_get0_pubkey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x509"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x509->cert_info->serialNumber --\x3e")]),s._v("\nASN1_INTEGER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("serialNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("X509_get_serialNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x509"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x509->cert_info->issuer --\x3e")]),s._v("\nX509_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("issuerName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("X509_get_issuer_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x509"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x509->cert_info->subject --\x3e")]),s._v("\nX509_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("subjectName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("X509_get_subject_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x509"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("X509_NAME *x509Name")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x509Name->bytes->data ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x509Name->bytes->length --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ASN1_STRING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x509NameData "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("X509_NAME_ENTRY_get_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("X509_NAME_get_entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x509Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nx509NameData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("data\nx509NameData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("length\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("PKCS12_SAFEBAG *safeBag")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// safeBag->attrib --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("STACK_OF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("X509_ATTRIBUTE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("safeBagAttrib "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PKCS12_SAFEBAG_get0_attrs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safeBag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// safeBag->value.keybag --\x3e ")]),s._v("\nPKCS8_PRIV_KEY_INFO "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p8PrivateKeyInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PKCS12_SAFEBAG_get0_p8inf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safeBag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ASN1_TYPE* av = PKCS12_get_attr(safeBag, NID_localKeyID); --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ASN1_TYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" av "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PKCS12_SAFEBAG_get0_attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safeBag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NID_localKeyID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("EVP_PKEY *pKey")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pKey->pkey.rsa --\x3e ")]),s._v("\nRSA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("rsa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("EVP_PKEY_get0_RSA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("RSA *rsa")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->n --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->e --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->d --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->p --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->q --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_q")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->dmp1 --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dmp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_dmp1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->dmq1 --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dmq1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_dmq1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rsa->iqmp --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" BIGNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("iqmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RSA_get0_iqmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("BIGNUM *bn")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// KEYLEN_MULTIPLIER 根据不同平台的值为 4 / 8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bn->top * KEYLEN_MULTIPLIER --\x3e ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BN_num_bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bn->d --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("tmpbuff "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NULL_PTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BN_num_bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ntmpbuff "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("malloc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("BN_bn2bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tmpbuff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);