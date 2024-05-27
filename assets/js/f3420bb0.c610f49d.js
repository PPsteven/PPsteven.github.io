"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[5496],{96493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(74848),s=t(28453);const r={title:"77. \u7ec4\u5408(Medium)",date:new Date("2020-12-05T22:16:15.000Z"),slug:"/pages/d99a0a/",categories:["\u7b97\u6cd5"]},a=void 0,c={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u56de\u6eaf\u7b97\u6cd5/\u7ec4\u5408(77)",title:"77. \u7ec4\u5408(Medium)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/06.\u56de\u6eaf\u7b97\u6cd5/04.\u7ec4\u5408(77).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/06.\u56de\u6eaf\u7b97\u6cd5",slug:"/pages/d99a0a/",permalink:"/docs/pages/d99a0a/",draft:!1,unlisted:!1,editUrl:"https://github.com/PPsteven/CodePainter/tree/master/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/06.\u56de\u6eaf\u7b97\u6cd5/04.\u7ec4\u5408(77).md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"77. \u7ec4\u5408(Medium)",date:"2020-12-05T22:16:15.000Z",slug:"/pages/d99a0a/",categories:["\u7b97\u6cd5"]},sidebar:"interview",previous:{title:"47. \u5168\u6392\u5217 II(Medium)",permalink:"/docs/pages/e3e50f/"},next:{title:"216. \u7ec4\u5408\u603b\u548c III(Medium)",permalink:"/docs/pages/46ccdc/"}},d={},o=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u76ee\u89e3\u6790",id:"\u9898\u76ee\u89e3\u6790",level:2},{value:"Python\u793a\u4f8b",id:"python\u793a\u4f8b",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsxs)(n.p,{children:["\u7ed9\u5b9a\u4e24\u4e2a\u6574\u6570 ",(0,i.jsx)(n.em,{children:"n"})," \u548c ",(0,i.jsx)(n.em,{children:"k"}),"\uff0c\u8fd4\u56de 1 ... ",(0,i.jsx)(n.em,{children:"n"})," \u4e2d\u6240\u6709\u53ef\u80fd\u7684 ",(0,i.jsx)(n.em,{children:"k"})," \u4e2a\u6570\u7684\u7ec4\u5408\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 4, k = 2\nOutput:\n[[1, 2], \n [1, 3], \n [1, 4],\n [2, 3], \n [2, 4],\n [3, 4]]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u76ee\u89e3\u6790",children:"\u9898\u76ee\u89e3\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003  ",(0,i.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzUxNjY5NTYxNA==&mid=2247485253&idx=1&sn=8332edaabc9bf43e45835bce7964ce88&scene=21#wechat_redirect",children:"\u56de\u6eaf\u7b97\u6cd5\uff1a\u6c42\u7ec4\u5408\u95ee\u9898\uff01"})]}),"\n",(0,i.jsx)(n.h2,{id:"python\u793a\u4f8b",children:"Python\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def backtracking(n, k, ans, startIndex, tmp):\n    if len(tmp) == k:\n        ans.append(tmp[:])\n        return \n    for i in range(startIndex, n + 1):\n        tmp.append(i)\n        backtracking(n, k, ans, i + 1, tmp)  # i + 1 \u53ef\u4ee5\u907f\u514d\u91cd\u590d\n        tmp.pop()\n    \nclass Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        ans = []\n        backtracking(n, k, ans, 1, [])\n        return ans \n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);