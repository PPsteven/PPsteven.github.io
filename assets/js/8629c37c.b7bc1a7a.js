"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[290],{82683:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=t(74848),r=t(28453);const s={title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(Medium)",date:new Date("2020-12-26T20:43:19.000Z"),permalink:"/pages/a2c492/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},c=void 0,a={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(1143)",title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(Medium)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/19.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(1143).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212",slug:"/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(1143)",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(1143)",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/19.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(1143).md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(Medium)",date:"2020-12-26T20:43:19.000Z",permalink:"/pages/a2c492/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},sidebar:"interview",previous:{title:"72. \u7f16\u8f91\u8ddd\u79bb(Hard)",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u7f16\u8f91\u8ddd\u79bb(72)"},next:{title:"416. \u5206\u5272\u7b49\u548c\u5b50\u96c6\uff08Medium\uff09",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u5206\u5272\u7b49\u548c\u5b50\u96c6(416)"}},l={},o=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsxs)(e.p,{children:["\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 ",(0,i.jsx)(e.code,{children:"text1"})," \u548c ",(0,i.jsx)(e.code,{children:"text2"}),"\uff0c\u8fd4\u56de\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: text1 = "abcde", text2 = "ace" \nOutput: 3  \n# The longest common subsequence is "ace" and its length is 3.\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u9898\u548c\u4e0a\u4e00\u9898\u7684 \u7f16\u8f91\u8ddd\u79bb(72) \u57fa\u672c\u4e0a\u4e00\u6a21\u4e00\u6837\uff0c\u4f46\u662f\u672c\u9898\u662f Medium\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd8\u662f\u4e00\u6837\uff0c\u4f7f\u7528\u4e24\u79cd\u65b9\u6cd5\u5b9e\u73b0\uff1a\u9012\u5f52+\u8bb0\u5fc6\u5316\u3001\u52a8\u6001\u89c4\u5212"}),"\n",(0,i.jsx)(e.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u9012\u5f52+\u8bb0\u5fc6\u5316"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0a\u4e00\u9898\uff0c\u6211\u4eec\u4ece\u53f3\u5411\u5de6\uff08n --\x3e 0\uff09\u8d70\uff0c\u8fd9\u91cc\uff0c\u6211\u4eec\u5199\u4e00\u4e2a\u4ece\u5de6\u5411\u53f3\uff080 --\x3e n\uff09\u8d70"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func max(a, b int) int {\n    if a > b {\n        return a\n    }\n    return b \n}\n\n// f(i, j) \u8fd4\u56de s1[:i] \u548c s[:j] \u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\nfunc f(i, j int) int {\n    if i == l1 || j == l2 {\n        return 0\n    }\n\n    v, ok := cache[Key{i, j}]\n    if ok {\n        return v \n    }\n\n    if s1[i] == s2[j] { // \u627e\u5230\u4e00\u4e2a\n        cache[Key{i, j}] = f(i + 1, j + 1) + 1\n        return cache[Key{i, j}]\n    } else {\n        cache[Key{i, j}] = max(f(i + 1, j), f(i, j + 1)) // \u56e0\u4e3a\u6ca1\u6709\u5339\u914d\u4e0a\uff0c\u7ee7\u7eed\u5339\u914d\n       return cache[Key{i, j}]\n    }\n}\n\ntype Key struct {\n    i int \n    j int \n}\n\nvar s1, s2 string\nvar l1, l2 int \nvar cache map[Key]int // \u8bb0\u5fc6\u5316\u64cd\u4f5c\n\nfunc longestCommonSubsequence(text1 string, text2 string) int {\n    s1, s2 = text1, text2\n    l1, l2 = len(text1), len(text2)\n    cache = make(map[Key]int)\n    return f(0, 0)\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u52a8\u6001\u89c4\u5212"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func max(a, b int) int {\n    if a > b {\n        return a \n    }\n    return b \n}\n\nfunc longestCommonSubsequence(text1 string, text2 string) int {\n    n, m := len(text1), len(text2)\n    length := make([][]int, n + 1)\n    for i := 0; i <= n; i++ {\n        length[i] = make([]int, m + 1)\n    }\n\n    for i := 1; i <= n; i++ {\n        for j := 1; j <= m; j++ {\n            if text1[i - 1] == text2[j - 1] {\n                length[i][j] = length[i - 1][j - 1] + 1\n            } else {\n                length[i][j] = max(length[i - 1][j], length[i][j - 1])\n            }\n        }\n    }\n\n    return length[n][m]\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);