"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[5340],{7517:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(74848),o=t(28453);const r={title:"518. \u96f6\u94b1\u5151\u6362 II(Medium)",date:new Date("2020-12-27T01:54:50.000Z"),slug:"/pages/091250/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},s=void 0,c={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u96f6\u94b1\u5151\u6362 II(518)",title:"518. \u96f6\u94b1\u5151\u6362 II(Medium)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/21.\u96f6\u94b1\u5151\u6362 II(518).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212",slug:"/pages/091250/",permalink:"/docs/pages/091250/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/21.\u96f6\u94b1\u5151\u6362 II(518).md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"518. \u96f6\u94b1\u5151\u6362 II(Medium)",date:"2020-12-27T01:54:50.000Z",slug:"/pages/091250/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},sidebar:"interview",previous:{title:"416. \u5206\u5272\u7b49\u548c\u5b50\u96c6\uff08Medium\uff09",permalink:"/docs/pages/1034f2/"},next:{title:"45. \u8df3\u8dc3\u6e38\u620f II(Hard)",permalink:"/docs/pages/451406/"}},d={},a=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function p(n){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e0d\u540c\u9762\u989d\u7684\u786c\u5e01\u548c\u4e00\u4e2a\u603b\u91d1\u989d\u3002\u6c42\u51fa\u53ef\u4ee5\u51d1\u6210\u603b\u91d1\u989d\u7684\u786c\u5e01\u7ec4\u5408\u6570\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: amount = 5, coins = [1, 2, 5]\nOutput: 4\n# \u6240\u6709\u53ef\u80fd\u7684\u89e3\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,i.jsxs)(e.p,{children:["\u672c\u9898\u4e5f\u662f\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u7684\u65b9\u6cd5\u53bb\u505a\uff0c\u4f46\u662f\u672c\u9898\u4e0e\u5176\u4ed6\u9898\u76ee\u7684\u96be\u70b9\u5728\u4e8e\uff0c\u9700\u8981\u6c42\u51fa\u7684\u662f\u786c\u5e01\u7684\u7ec4\u5408\u6570\u3002\u800c\u7ec4\u5408\u6570\u5c31",(0,i.jsx)(e.strong,{children:"\u53ef\u80fd\u5b58\u5728\u91cd\u590d\u5143\u7d20"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5f88\u5bb9\u6613\u5199\u51fa\u52a8\u6001\u89c4\u5212\u7684\u8f6c\u79fb\u65b9\u7a0b  dp[5] += dp[5 - 1] + dp[5 - 2] + dp[5 -3]\u3002\u521d\u59cb\u7684\u72b6\u6001\u4e3a dp[1] = dp[2] = dp[5]\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u662f\u5728\u5199\u5faa\u73af\u7684\u65f6\u5019\uff0c\u72af\u4e86\u9519\u8bef\uff0c\u53ef\u4ee5\u5148\u770b\u6211\u5199\u7684\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func change(amount int, coins []int) int {\n    n := len(coins)\n    if amount <= 0 {\n        return 1\n    }\n    if n < 1 {\n        return 0\n    }\n\n    dp := make([]int, amount + 1)\n    for _, coin := range coins {\n        dp[coin] = 1\n    }\n    for _, coin := range coins {\n        for i := 0; i < amount + 1; i++ {\n            if i - coin >= 0 {\n                dp[i] += dp[i - coin]\n            }\n        }\n    }\n    return dp[amount]\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4e4d\u770b\u4e00\u773c\uff0c\u6ca1\u6709\u95ee\u9898\u3002\u4f46\u662f\u6211\u4eec\u81ea\u5df1\u624b\u52a8\u8ba1\u7b97\u540e\u53d1\u73b0\u4f1a\u5b58\u5728\u91cd\u590d\u7ec4\u5408\u3002\n$$\ndp[0] = 0 \\\ndp[1] = dp[1], \u60c5\u51b5\u6709 [1] \\\ndp[2] = dp[2] + dp[1], \u60c5\u51b5\u6709 [1, 1], [2] \\\ndp[3] = dp[2] + dp[1], \u60c5\u51b5\u6709 [1, 2], [1, 1, 1], [2, 1] \\\n$$\n\u6211\u4eec\u53d1\u73b0\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c[1, 2] \u548c [2, 1] \u7ec4\u5408\u662f\u91cd\u590d\u4e86\uff0c\u8fd9\u6837\u7684 ",(0,i.jsx)(e.code,{children:"\u52a8\u6001\u89c4\u5212"})," \u65b9\u7a0b\u5728\u6c42 ",(0,i.jsx)(e.strong,{children:"\u53ef\u8fbe\u6027"})," \u7684\u95ee\u9898\u4e0a\uff0c\u5176\u5b9e\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u5bf9\u4e8e\u6c42 ",(0,i.jsx)(e.strong,{children:"\u7ec4\u5408\u95ee\u9898"})," \u4f1a\u4ea7\u751f\u91cd\u590d\u60c5\u51b5\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u90a3\u4e48\u600e\u4e48\u6539\u8fdb\uff0c\u9700\u8981\u5728\u5faa\u73af\u7684\u65f6\u5019\uff0c\u5bf9\u4e8ecoins \u9012\u589e\u9009\u53d6\uff0c\u5373\u4e0d\u4f1a\u5b58\u5728 [2, 1] \u7684\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u90a3\u4e48\u5bf9\u4e8e\u521d\u59cb\u6761\u4ef6\uff0c\u6211\u4eec\u4e5f\u4e0d\u80fd dp[1] = dp[2] = dp[5]\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u6ca1\u6709\u4fdd\u8bc1\u9012\u589e\u6027\u3002\u6240\u4ee5\u6539\u6210 dp[0]"}),"\n",(0,i.jsx)(e.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func change(amount int, coins []int) int {\n    n := len(coins)\n    if amount <= 0 { // \u7279\u4f8b\n        return 1\n    }\n    if n < 1 {\n        return 0\n    }\n\n    dp := make([]int, amount + 1)\n    dp[0] = 1\n\n    for _, coin := range coins { // \u4fdd\u8bc1\u4e86 coin \u59cb\u7ec8\u662f\u6309\u5e8f\u53d6\u503c\n        for i := 0; i < amount + 1; i++ {\n            if i - coin >= 0 {\n                dp[i] += dp[i - coin]\n            }\n        }\n    }\n    return dp[amount]\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);