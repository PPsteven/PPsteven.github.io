"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[9373],{4970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),o=t(28453);const r={title:"746. \u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(Easy)",date:new Date("2020-12-22T23:10:37.000Z"),permalink:"/pages/4e83a6/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},s=void 0,a={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(746)",title:"746. \u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(Easy)",description:"Go \u793a\u4f8b",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/13.\u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(746).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212",slug:"/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(746)",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(746)",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/13.\u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(746).md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"746. \u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(Easy)",date:"2020-12-22T23:10:37.000Z",permalink:"/pages/4e83a6/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},sidebar:"interview",previous:{title:"516. \u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(Medium)",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(516)"},next:{title:"801. \u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570\uff08Medium\uff09",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570(801)"}},c={},d=[{value:"Go \u793a\u4f8b",id:"go-\u793a\u4f8b",level:2}];function u(e){const n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"go-\u793a\u4f8b",children:"Go \u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func min(a, b int) int {\n    if a > b {\n        return b\n    }\n    return a\n}\n\nfunc minCostClimbingStairs(cost []int) int {\n    n := len(cost)\n    if n <= 2 {\n        return 0\n    }\n    dp := make([]int, n + 1)\n\n    for i:= 2; i <= n;  i++ {\n        dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])\n    }\n    return dp[n]\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);