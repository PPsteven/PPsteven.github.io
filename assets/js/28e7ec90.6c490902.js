"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[7742],{70872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=t(74848),s=t(28453);const r={title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",date:new Date("2020-12-11T14:35:09.000Z"),slug:"/pages/fdd0ef/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},a=void 0,d={id:"\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u65cb\u8f6c\u94fe\u8868.61_2",title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",description:"Python\u793a\u4f8b",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/21.\u65cb\u8f6c\u94fe\u8868.61_2.md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868",slug:"/pages/fdd0ef/",permalink:"/docs/pages/fdd0ef/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/21.\u65cb\u8f6c\u94fe\u8868.61_2.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",date:"2020-12-11T14:35:09.000Z",slug:"/pages/fdd0ef/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},sidebar:"interview",previous:{title:"725. \u5206\u9694\u94fe\u8868",permalink:"/docs/pages/a38aa8/"},next:{title:"430. \u6241\u5e73\u5316\u591a\u7ea7\u53cc\u5411\u94fe\u8868(Medium)",permalink:"/docs/pages/b5fb8d/"}},i={},c=[{value:"Python\u793a\u4f8b",id:"python\u793a\u4f8b",level:2}];function p(e){const n={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"python\u793a\u4f8b",children:"Python\u793a\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def rotateRight(self, head: ListNode, k: int) -> ListNode:\n        if not head or not head.next: \n            return head \n        n = 0\n        p = head \n        while p:\n            if p and not p.next:\n                end = p \n            n += 1\n            p = p.next \n            \n        end.next = head  # \u8fde\u6210\u73af\n        k = k % n \n\n        p = head \n        for _ in range(n - k - 1): # n - k \u4e2a\n            p = p.next \n        res = p.next \n        p.next = None \n        return res \n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);