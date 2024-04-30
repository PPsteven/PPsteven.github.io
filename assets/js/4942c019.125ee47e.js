"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[699],{92836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const r={title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",date:new Date("2020-12-10T22:57:27.000Z"),permalink:"/pages/a75b0c/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},o=void 0,a={id:"\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u65cb\u8f6c\u94fe\u8868.61",title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/01.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/19.\u65cb\u8f6c\u94fe\u8868.61.md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/01.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868",slug:"/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u65cb\u8f6c\u94fe\u8868.61",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u65cb\u8f6c\u94fe\u8868.61",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/01.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/19.\u65cb\u8f6c\u94fe\u8868.61.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",date:"2020-12-10T22:57:27.000Z",permalink:"/pages/a75b0c/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},sidebar:"interview",previous:{title:"25. K \u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868(Hard)",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/K \u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868.25"},next:{title:"725. \u5206\u9694\u94fe\u8868",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u5206\u9694\u94fe\u8868.725"}},d={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"Python\u793a\u4f8b",id:"python\u793a\u4f8b",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsxs)(n.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a\u94fe\u8868\uff0c\u65cb\u8f6c\u94fe\u8868\uff0c\u5c06\u94fe\u8868\u6bcf\u4e2a\u8282\u70b9\u5411\u53f3\u79fb\u52a8 ",(0,i.jsx)(n.em,{children:"k"})," \u4e2a\u4f4d\u7f6e\uff0c\u5176\u4e2d ",(0,i.jsx)(n.em,{children:"k"})," \u662f\u975e\u8d1f\u6570\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: 1->2->3->4->5->NULL, k = 2\nOutput: 4->5->1->2->3->NULL\n\nInput: 0->1->2->NULL, k = 4\nOutput: 2->0->1->NULL\n# k \u5411\u53f3\u79fb\u52a8\u4e864\uff0c\u76f8\u5f53\u4e8e\u5411\u53f3\u79fb\u52a8\u4e86 4%3 = 1 \u4e2a\u5355\u4f4d\n"})}),"\n",(0,i.jsx)(n.h2,{id:"python\u793a\u4f8b",children:"Python\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def rotateRight(self, head: ListNode, k: int) -> ListNode:\n        if not head or not head.next: \n            return head \n            \n        n = 0\n        p = head \n        while p:\n            if not p.next:\n                end = p \n            n += 1\n            p = p.next \n            \n        end.next = head  # \u8fde\u6210\u73af\n        k = k % n \n\n        p = head \n        for _ in range(n - k - 1): # n - k \u4e2a\n            p = p.next \n        res = p.next \n        p.next = None \n        return res \n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);