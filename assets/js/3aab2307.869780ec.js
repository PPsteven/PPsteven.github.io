"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[8040],{12790:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=t(74848),i=t(28453);const r={title:"416. \u5206\u5272\u7b49\u548c\u5b50\u96c6\uff08Medium\uff09",date:new Date("2020-12-27T00:32:16.000Z"),slug:"/pages/1034f2/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},a=void 0,c={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u5206\u5272\u7b49\u548c\u5b50\u96c6(416)",title:"416. \u5206\u5272\u7b49\u548c\u5b50\u96c6\uff08Medium\uff09",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/20.\u5206\u5272\u7b49\u548c\u5b50\u96c6(416).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212",slug:"/pages/1034f2/",permalink:"/docs/pages/1034f2/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/20.\u5206\u5272\u7b49\u548c\u5b50\u96c6(416).md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"416. \u5206\u5272\u7b49\u548c\u5b50\u96c6\uff08Medium\uff09",date:"2020-12-27T00:32:16.000Z",slug:"/pages/1034f2/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},sidebar:"interview",previous:{title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(Medium)",permalink:"/docs/pages/a2c492/"},next:{title:"518. \u96f6\u94b1\u5151\u6362 II(Medium)",permalink:"/docs/pages/091250/"}},o={},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsxs)(e.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a",(0,s.jsx)(e.strong,{children:"\u53ea\u5305\u542b\u6b63\u6574\u6570"}),"\u7684",(0,s.jsx)(e.strong,{children:"\u975e\u7a7a"}),"\u6570\u7ec4\u3002\u662f\u5426\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u6570\u7ec4\u5206\u5272\u6210\u4e24\u4e2a\u5b50\u96c6\uff0c\u4f7f\u5f97\u4e24\u4e2a\u5b50\u96c6\u7684\u5143\u7d20\u548c\u76f8\u7b49\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Input: nums = [1,5,11,5]\nOutput: true\n# \u5206\u4e3a[1, 5, 5] \u548c [11] \u4e24\u4e2a\u5b50\u96c6\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,s.jsx)(e.p,{children:"\u82e5\u662f\u8981\u7b49\u5206\u4e3a\u4e24\u4efd\u7684\u8bdd\uff0c\u603b\u548c\u5fc5\u987b\u662f\u5076\u6570\u3002\u800c\u4e14\u5b58\u5728\u51e0\u4e2a\u6570\u5b57\u4e4b\u548c\u7b49\u4e8e sum(nums)/ 2\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u4e3a\u6bcf\u4e2a\u6570\u5b57\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\uff0c\u6240\u4ee5\u5c31\u8f6c\u6362\u4e3a 0-1 \u80cc\u5305\u95ee\u9898"}),"\n",(0,s.jsx)(e.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func sum(nums []int) int {\n    ans := 0\n    for _, num := range nums {\n        ans += num\n    }\n    return ans \n}\n\nfunc canPartition(nums []int) bool {\n   target := sum(nums)\n\n   if target % 2 == 1 { // \u5947\u6570\u4e00\u5b9a\u5206\u4e0d\u5f00\n       return false \n   }\n   target = target / 2\n   \n   n := len(nums)\n\n   // \u65b0\u5efa dp[n + 1][target + 1] \u7684\u6570\u7ec4\n   dp := make([][]bool, n + 1)\n   for i := 0; i <= n; i ++ {\n       dp[i] = make([]bool, target + 1)\n   }\n\n   // base case \n   for i := 0; i < n + 1; i++ {\n       dp[i][0] = true\n   }\n  \n   for cap := 1; cap <= target; cap++ {\n       for i := 1; i <= n; i++ {\n           // \u6ce8\u610f\u70b9\uff1a\n           // !!! \u8fd9\u91cc\u662f \u51cf nums[i - 1] \u56e0\u4e3a 0 \u628a \u6574\u4f53\u5411\u53f3\u79fb\uff0ci \u5bf9\u5e94\u7684\u5c31\u662f nums[i - 1] \n           if cap - nums[i - 1] >= 0 && \n              dp[i - 1][cap - nums[i - 1]] { // \u5f53\u5bb9\u91cf\u591f\uff0c\u53ef\u4ee5\u66f4\u65b0\u7684\u65f6\u5019\n               dp[i][cap] = true\n           } else { // \u4e0d\u80fd\u66f4\u65b0\u7684\u8bdd\uff0c\u8d77\u7801\u6211\u53ef\u4ee5\u4e0d\u52a0\u5165\u7b2c i \u4e2a\u5143\u7d20\uff0c\u80cc\u5305\u7684\u5927\u5c0f\u662f\u4e0d\u53d8\u7684\n               dp[i][cap] = dp[i][cap] || dp[i - 1][cap] \n           }\n       } \n   }\n   \n   return dp[n][target]\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);