(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{732:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"github默认分支由master变更为main"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github默认分支由master变更为main"}},[a._v("#")]),a._v(" Github默认分支由master变更为main")]),a._v(" "),t("p",[a._v("受到"),t("a",{attrs:{href:"https://tools.ietf.org/id/draft-knodel-terminology-00.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这个"),t("OutboundLink")],1),a._v("影响,\nGithub 于 2020年10月1日 默认分支由 "),t("code",[a._v("master")]),a._v(" 改为 "),t("code",[a._v("main")]),a._v("。"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.blog%2Fchangelog%2F2020-10-01-the-default-branch-for-newly-created-repositories-is-now-main%2F",target:"_blank",rel:"noopener noreferrer"}},[a._v("详见"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"修改方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改方法"}},[a._v("#")]),a._v(" 修改方法")]),a._v(" "),t("p",[a._v("本地 master 重命名为 main")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" master main\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("同步至Github仓库")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" origin main\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("修改Github仓库默认分支")]),a._v(" "),t("blockquote",[t("p",[a._v("打开你的 Github 仓库, 点击 "),t("code",[a._v("Settings")]),a._v(" -> "),t("code",[a._v("Branches")]),a._v(" 修改默认分支为 "),t("code",[a._v("main")]),a._v(".")])]),a._v(" "),t("p",[a._v("删除远程仓库master分支")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--delete")]),a._v(" origin master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这样就可以将本地的master分支改为main，同时更新到远程仓库")]),a._v(" "),t("h3",{attrs:{id:"修改本地git初始化时默认分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改本地git初始化时默认分支"}},[a._v("#")]),a._v(" 修改本地Git初始化时默认分支")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" init.defaultBranch main\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);