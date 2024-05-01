"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[5676],{4701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453);const i={title:"114. \u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868(Medium)",date:new Date("2020-12-14T13:46:00.000Z"),slug:"/pages/ac1b82/",categories:["\u6570\u636e\u7ed3\u6784","\u6811"]},s=void 0,a={id:"\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u6811/\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868(114)",title:"114. \u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868(Medium)",description:"\u9898\u89e3",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/02.\u6811/05.\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868(114).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/02.\u6811",slug:"/pages/ac1b82/",permalink:"/docs/pages/ac1b82/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/02.\u6811/05.\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868(114).md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"114. \u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868(Medium)",date:"2020-12-14T13:46:00.000Z",slug:"/pages/ac1b82/",categories:["\u6570\u636e\u7ed3\u6784","\u6811"]},sidebar:"interview",previous:{title:"701. \u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u63d2\u5165\u64cd\u4f5c(Medium)",permalink:"/docs/pages/02b3e4/"},next:{title:"239. \u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c(Hard)",permalink:"/docs/pages/83762d/"}},l={},d=[{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"Python",id:"python",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'# \u5faa\u73af\u5b9e\u73b0\nclass Solution:\n    def flatten(self, root: TreeNode) -> None:\n        """\n        Do not return anything, modify root in-place instead.\n        """\n        if not root: return \n        while root:\n            if root.left:\n                pre = root.left \n                while pre and pre.right:\n                    pre = pre.right\n                pre.right = root.right \n                root.right = root.left \n                root.left = None \n            else:\n                root = root.right\n\n# \u9012\u5f52\u5b9e\u73b0\nclass Solution:\n    def flatten(self, root: TreeNode) -> None:\n        """\n        Do not return anything, modify root in-place instead.\n        """\n        def helper(root):\n            if not root.left and not root.right: # \u53f6\u5b50\u8282\u70b9\n                return root \n            r = root.right\n            if root.left:\n                root.right = root.left \n                helper(root.left).right = r \n                root.left = None \n            return helper(root.right)\n        \n        if not root: return root\n        helper(root)\n        return root \n'})}),"\n",(0,o.jsx)(t.p,{children:"\u4f7f\u7528\u4e2d\u5e8f\u904d\u5386\uff0c\u501f\u52a9\u961f\u5217\u3002\u539f\u5730\u53d8\u52a8\u5e76\u4e0d\u9650\u5236\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a O(1)\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'class Solution:\n    def flatten(self, root: TreeNode) -> None:\n        """\n        Do not return anything, modify root in-place instead.\n        """\n        def preorder(root):\n            if not root: return \n            queue.append(root)\n            preorder(root.left)\n            preorder(root.right)\n        if not root: return root\n\n        queue = []\n        preorder(root)\n        for i in range(len(queue) - 1):\n            queue[i].right = queue[i + 1]\n            queue[i].left = None \n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);