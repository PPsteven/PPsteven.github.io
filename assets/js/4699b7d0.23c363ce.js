"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[3946],{48399:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=r(74848),s=r(28453);const c={title:"206. \u53cd\u8f6c\u94fe\u8868(Easy)",date:new Date("2020-01-12T15:00:49.000Z"),permalink:"/pages/c195df/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},i=void 0,d={id:"\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u53cd\u8f6c\u94fe\u8868.206",title:"206. \u53cd\u8f6c\u94fe\u8868(Easy)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/01.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/02.\u53cd\u8f6c\u94fe\u8868.206.md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/01.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868",slug:"/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u53cd\u8f6c\u94fe\u8868.206",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u53cd\u8f6c\u94fe\u8868.206",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/01.\u6570\u636e\u7ed3\u6784/01.\u94fe\u8868/02.\u53cd\u8f6c\u94fe\u8868.206.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"206. \u53cd\u8f6c\u94fe\u8868(Easy)",date:"2020-01-12T15:00:49.000Z",permalink:"/pages/c195df/",categories:["\u6570\u636e\u7ed3\u6784","\u94fe\u8868"]},sidebar:"interview",previous:{title:"\u94fe\u8868\u7b80\u4ecb",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u94fe\u8868\u7b80\u4ecb"},next:{title:"141. \u73af\u5f62\u94fe\u8868(Easy)",permalink:"/docs/\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u73af\u5f62\u94fe\u8868.141"}},o={},a=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u76ee\u89e3\u6790",id:"\u9898\u76ee\u89e3\u6790",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function l(e){const n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"\u53cd\u8f6c\u4e00\u4e2a\u5355\u94fe\u8868\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: 1->2->3->4->5->NULL\nOuptut: 5->4->3->2->1->NULL\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u76ee\u89e3\u6790",children:"\u9898\u76ee\u89e3\u6790"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u89e3\u6cd5\u4e00\u3010\u53cc\u6307\u9488\u3011\u3010\u91cd\u70b9\u3011\u3010\u7ecf\u5178\u3011"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u524d\u540e\u53cc\u6307\u9488\u7684\u65b9\u6cd5\uff0c\u662f\u6bd4\u8f83\u7ecf\u5178\u7684\u7528\u6cd5\uff0c\u540e\u9762\u8fd8\u4f1a\u53cd\u590d\u7528\u5230"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u89e3\u6cd5\u4e8c\u3010\u9012\u5f52\u3011"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200808001657.png",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53cc\u6307\u9488"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        pre, cur = None, head \n        while cur:\n            cur_next_bak = cur.next \n            cur.next = pre \n            # \u5411\u4e0b\u4e00\u8282\u70b9\n            pre = cur\n            cur = cur_next_bak\n        return pre # \u6ce8\u610f\uff0c\u6700\u540e\u8fd4\u56de\u7684\u662f pre\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func reverseList(head *ListNode) *ListNode {\n    var pre *ListNode\n    pre, cur := nil, head \n    for cur != nil {\n        next := cur.Next\n        cur.Next = pre \n\n        pre = cur \n        cur = next \n    }\n    return pre \n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u9012\u5f52"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        if not head or not head.next: # \u8d70\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\n            return head \n\n        cur = self.reverseList(head.next)\n\n        head.next.next = head \n        head.next = None # \u4e3a\u4e86\u89e3\u51b3\u7b2c\u4e00\u4e2a\u8282\u70b9\n        return cur \n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);