"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[5791],{63898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(74848),s=t(28453);const r={title:"39. \u7ec4\u5408\u603b\u548c",date:new Date("2020-12-06T15:38:41.000Z"),slug:"/pages/e617a4/",categories:["\u7b97\u6cd5"]},c=void 0,i={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u56de\u6eaf\u7b97\u6cd5/\u7ec4\u5408\u603b\u548c(39)",title:"39. \u7ec4\u5408\u603b\u548c",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/06.\u56de\u6eaf\u7b97\u6cd5/06.\u7ec4\u5408\u603b\u548c(39).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/06.\u56de\u6eaf\u7b97\u6cd5",slug:"/pages/e617a4/",permalink:"/docs/pages/e617a4/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/06.\u56de\u6eaf\u7b97\u6cd5/06.\u7ec4\u5408\u603b\u548c(39).md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"39. \u7ec4\u5408\u603b\u548c",date:"2020-12-06T15:38:41.000Z",slug:"/pages/e617a4/",categories:["\u7b97\u6cd5"]},sidebar:"interview",previous:{title:"216. \u7ec4\u5408\u603b\u548c III(Medium)",permalink:"/docs/pages/46ccdc/"},next:{title:"40. \u7ec4\u5408\u603b\u548c II",permalink:"/docs/pages/ebb06d/"}},d={},o=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u76ee\u89e3\u6790",id:"\u9898\u76ee\u89e3\u6790",level:2},{value:"Python \u4ee3\u7801\u793a\u4f8b",id:"python-\u4ee3\u7801\u793a\u4f8b",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a",(0,a.jsx)(n.strong,{children:"\u65e0\u91cd\u590d\u5143\u7d20"}),"\u7684\u6570\u7ec4 ",(0,a.jsx)(n.code,{children:"candidates"})," \u548c\u4e00\u4e2a\u76ee\u6807\u6570 ",(0,a.jsx)(n.code,{children:"target"})," \uff0c\u627e\u51fa ",(0,a.jsx)(n.code,{children:"candidates"})," \u4e2d\u6240\u6709\u53ef\u4ee5\u4f7f\u6570\u5b57\u548c\u4e3a ",(0,a.jsx)(n.code,{children:"target"})," \u7684\u7ec4\u5408\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input\uff1acandidates = [2,3,6,7], target = 7,\nOutput\uff1a\n[\n  [7],\n  [2,2,3]\n]\n\nInput\uff1acandidates = [2,3,5], target = 8,\nOutput\uff1a\n[\n  [2,2,2,2],\n  [2,3,3],\n  [3,5]\n]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u9898\u76ee\u89e3\u6790",children:"\u9898\u76ee\u89e3\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u672c\u9898\u5728  ",(0,a.jsx)(n.a,{href:"/pages/46ccdc/",children:"216. \u7ec4\u5408\u603b\u548c III(Medium)"})," \u7684\u57fa\u7840\u4e0a\uff0c\u653e\u5bbd\u4e86\u975e\u91cd\u590d\u6570\u5b57\u7684\u7ea6\u675f\u6761\u4ef6\u3002\u5176\u5b9e\u66f4\u52a0\u7b80\u5355\u4e86\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"python-\u4ee3\u7801\u793a\u4f8b",children:"Python \u4ee3\u7801\u793a\u4f8b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def backtracking(candidates, target, cur, ans, tmp):\n    if sum(tmp) == target:\n        ans.append(tmp[:])\n        return \n    elif sum(tmp) > target:\n        return \n    \n    for i in range(cur, len(candidates)): # \u4ece cur \u5f00\u59cb\uff0c\u53ef\u4ee5\u907f\u514d\u8d70\u56de\u5934\u8def\n        tmp.append(candidates[i])\n        backtracking(candidates, target, i, ans, tmp) # cur \u4ece i \u5f00\u59cb\u76f8\u5f53\u4e8e \u53ef\u4ee5\u91cd\u590d\n        tmp.pop()\n\nclass Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        ans = []\n        backtracking(candidates, target, 0, ans, [])\n        return ans \n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);