"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[9073],{74958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(74848),s=t(28453);const o={title:"\u9762\u8bd5\u989849. \u4e11\u6570",date:new Date("2020-08-20T18:16:00.000Z"),tags:["\u5251\u6307Offer"],categories:"\u5251\u6307Offer",cover:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png",permalink:"/pages/5a2115/"},i=void 0,c={id:"\u9762\u8bd5\u6280\u5de7/\u5251\u6307Offer/offer-49",title:"\u9762\u8bd5\u989849. \u4e11\u6570",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/04.\u5251\u6307Offer/offer-49.md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/04.\u5251\u6307Offer",slug:"/\u9762\u8bd5\u6280\u5de7/\u5251\u6307Offer/offer-49",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u5251\u6307Offer/offer-49",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/04.\u5251\u6307Offer/offer-49.md",tags:[{label:"\u5251\u6307Offer",permalink:"/docs/tags/\u5251\u6307-offer"}],version:"current",frontMatter:{title:"\u9762\u8bd5\u989849. \u4e11\u6570",date:"2020-08-20T18:16:00.000Z",tags:["\u5251\u6307Offer"],categories:"\u5251\u6307Offer",cover:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201014133927.png",permalink:"/pages/5a2115/"},sidebar:"interview",previous:{title:"\u9762\u8bd5\u989848. \u6700\u957f\u4e0d\u542b\u91cd\u590d\u5b57\u7b26\u7684\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u5251\u6307Offer/offer-48"},next:{title:"\u9762\u8bd5\u989850. \u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u5251\u6307Offer/offer-50"}},p={},d=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u601d\u8def&amp;\u4ee3\u7801",id:"\u89e3\u9898\u601d\u8def\u4ee3\u7801",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u505a\u9898\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/chou-shu-lcof/",children:"\u9762\u8bd5\u989849. \u4e11\u6570"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u628a\u53ea\u5305\u542b\u8d28\u56e0\u5b50 2\u30013 \u548c 5 \u7684\u6570\u79f0\u4f5c\u4e11\u6570\uff08Ugly Number\uff09\u3002\u6c42\u6309\u4ece\u5c0f\u5230\u5927\u7684\u987a\u5e8f\u7684\u7b2c n \u4e2a\u4e11\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u89e3\u9898\u601d\u8def\u4ee3\u7801",children:"\u89e3\u9898\u601d\u8def&\u4ee3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"p1, p2, p3 \u662f\u4f5c\u4e3a 2\uff0c3\uff0c5 \u7684\u6307\u9488\u3002\u6bcf\u6b21\u662f\u4ece 0 \u7684\u4f4d\u7f6e\u5f00\u59cb\u5411\u53f3\u8d70\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003\u6559\u7a0b\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/chou-shu-lcof/solution/mian-shi-ti-49-chou-shu-dong-tai-gui-hua-qing-xi-t/",children:"\u8fd9\u4e2a\u6559\u7a0b"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def nthUglyNumber(self, n: int) -> int:\n        dp = [1] * n\n        p1, p2, p3 = 0, 0, 0\n        for i in range(1, n):\n            dp[i] = min(dp[p1] * 2, dp[p2] * 3, dp[p3] * 5)\n            if dp[i] == dp[p1] * 2: p1 += 1\n            if dp[i] == dp[p2] * 3: p2 += 1\n            if dp[i] == dp[p3] * 5: p3 += 1\n        print(dp)\n        return dp[-1]\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);