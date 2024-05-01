"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[3420],{46960:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=s(74848),t=s(28453);const r={title:"665.\u975e\u9012\u51cf\u6570\u5217(Easy)",date:new Date("2020-11-18T14:44:51.000Z"),slug:"/pages/9d8bb3/",categories:["\u7b97\u6cd5","\u8d2a\u5fc3\u7b97\u6cd5"]},o=void 0,a={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u8d2a\u5fc3\u7b97\u6cd5/\u975e\u9012\u51cf\u6570\u5217(665)",title:"665.\u975e\u9012\u51cf\u6570\u5217(Easy)",description:"\u9898\u89e3",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/01.\u8d2a\u5fc3\u7b97\u6cd5/09.\u975e\u9012\u51cf\u6570\u5217(665).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/01.\u8d2a\u5fc3\u7b97\u6cd5",slug:"/pages/9d8bb3/",permalink:"/docs/pages/9d8bb3/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/01.\u8d2a\u5fc3\u7b97\u6cd5/09.\u975e\u9012\u51cf\u6570\u5217(665).md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"665.\u975e\u9012\u51cf\u6570\u5217(Easy)",date:"2020-11-18T14:44:51.000Z",slug:"/pages/9d8bb3/",categories:["\u7b97\u6cd5","\u8d2a\u5fc3\u7b97\u6cd5"]},sidebar:"interview",previous:{title:"406.\u6839\u636e\u8eab\u9ad8\u91cd\u5efa\u961f\u5217(Medium)",permalink:"/docs/pages/4ac85d/"},next:{title:"56. \u5408\u5e76\u533a\u95f4(Medium)",permalink:"/docs/pages/a6a10e/"}},c={},u=[{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode-cn.com/problems/non-decreasing-array/solution/tan-xin-si-xiang-by-zhang-mo-san/",children:"https://leetcode-cn.com/problems/non-decreasing-array/solution/tan-xin-si-xiang-by-zhang-mo-san/"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,i.jsx)(e.p,{children:"Python \u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def checkPossibility(self, nums: List[int]) -> bool:\n        errors = 0\n        for idx in range(len(nums) - 1):\n           if nums[idx] > nums[idx + 1]:\n               # \u53ea\u6709\u5f53\u4fee\u6539\u4e0d\u4f1a\u7834\u574f\u524d\u4e00\u4e2a\u5143\u7d20\u7684\u5355\u8c03\u6027\u624d\u5141\u8bb8\n               # \u4e0d\u80fd\u51fa\u73b0 3 4 2 => 3 2 2 \u7684\u60c5\u51b5\n               if (idx == 0 or nums[idx - 1] <= nums[idx + 1]): \n                   nums[idx] = nums[idx + 1]  # \u6b64\u5904\u4fee\u6539\u4f1a\u5f71\u54cd nums[i] \u4e0e nums[i - 1] \u7684\u9012\u51cf\u5173\u7cfb\n               else: # \u4fdd\u5e95\u65b9\u6848\n                   nums[idx + 1] = nums[idx] \n               errors += 1\n        return bool(errors <= 1)\n"})}),"\n",(0,i.jsx)(e.p,{children:"Go \u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func checkPossibility(nums []int) bool {\n    errors := 0\n    n := len(nums)\n    for i:= 0; i < n - 1; i++ {\n        if errors > 1 { return false }\n        if nums[i] > nums[i + 1] {\n            if i == 0 || nums[i - 1] <= nums[i + 1] {\n                nums[i] = nums[i + 1]\n            } else {\n                nums[i + 1] = nums[i]\n            }\n            errors++\n        }\n    } \n    return errors <= 1\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);