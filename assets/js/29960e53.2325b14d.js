"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[1696],{28998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const o={title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",date:new Date("2020-12-10T22:57:27.000Z"),slug:"/pages/a75b0c/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},r=void 0,a={id:"\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u65cb\u8f6c\u94fe\u8868.61",title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/19.\u65cb\u8f6c\u94fe\u8868.61.md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868",slug:"/pages/a75b0c/",permalink:"/docs/pages/a75b0c/",draft:!1,unlisted:!1,editUrl:"https://github.com/PPsteven/CodePainter/tree/master/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/19.\u65cb\u8f6c\u94fe\u8868.61.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"61. \u65cb\u8f6c\u94fe\u8868(Medium)",date:"2020-12-10T22:57:27.000Z",slug:"/pages/a75b0c/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},sidebar:"interview",previous:{title:"25. K \u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868(Hard)",permalink:"/docs/pages/322e40/"},next:{title:"725. \u5206\u9694\u94fe\u8868",permalink:"/docs/pages/a38aa8/"}},d={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"Python\u793a\u4f8b",id:"python\u793a\u4f8b",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a\u94fe\u8868\uff0c\u65cb\u8f6c\u94fe\u8868\uff0c\u5c06\u94fe\u8868\u6bcf\u4e2a\u8282\u70b9\u5411\u53f3\u79fb\u52a8 ",(0,s.jsx)(n.em,{children:"k"})," \u4e2a\u4f4d\u7f6e\uff0c\u5176\u4e2d ",(0,s.jsx)(n.em,{children:"k"})," \u662f\u975e\u8d1f\u6570\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: 1->2->3->4->5->NULL, k = 2\nOutput: 4->5->1->2->3->NULL\n\nInput: 0->1->2->NULL, k = 4\nOutput: 2->0->1->NULL\n# k \u5411\u53f3\u79fb\u52a8\u4e864\uff0c\u76f8\u5f53\u4e8e\u5411\u53f3\u79fb\u52a8\u4e86 4%3 = 1 \u4e2a\u5355\u4f4d\n"})}),"\n",(0,s.jsx)(n.h2,{id:"python\u793a\u4f8b",children:"Python\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def rotateRight(self, head: ListNode, k: int) -> ListNode:\n        if not head or not head.next: \n            return head \n            \n        n = 0\n        p = head \n        while p:\n            if not p.next:\n                end = p \n            n += 1\n            p = p.next \n            \n        end.next = head  # \u8fde\u6210\u73af\n        k = k % n \n\n        p = head \n        for _ in range(n - k - 1): # n - k \u4e2a\n            p = p.next \n        res = p.next \n        p.next = None \n        return res \n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);