"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[3448],{99469:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(74848),i=s(28453);const t={title:"516. \u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(Medium)",date:new Date("2020-12-22T11:11:56.000Z"),slug:"/pages/a0c777/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},d=void 0,c={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u52a8\u6001\u89c4\u5212/\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(516)",title:"516. \u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(Medium)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/12.\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(516).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212",slug:"/pages/a0c777/",permalink:"/docs/pages/a0c777/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/07.\u52a8\u6001\u89c4\u5212/12.\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(516).md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"516. \u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217(Medium)",date:"2020-12-22T11:11:56.000Z",slug:"/pages/a0c777/",categories:["\u7b97\u6cd5","\u52a8\u6001\u89c4\u5212"]},sidebar:"interview",previous:{title:"198. \u6253\u5bb6\u52ab\u820d",permalink:"/docs/pages/55a755/"},next:{title:"746. \u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af(Easy)",permalink:"/docs/pages/4e83a6/"}},l={},a=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"Go \u793a\u4f8b",id:"go-\u793a\u4f8b",level:2}];function o(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,r.jsxs)(e.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,r.jsx)(e.code,{children:"s"})," \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u7684\u56de\u6587\u5b50\u5e8f\u5217\uff0c\u5e76\u8fd4\u56de\u8be5\u5e8f\u5217\u7684\u957f\u5ea6\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Input: "bbbab"\nOutput: 4\n# \u6700\u957f\u7684\u56de\u6587\u5b50\u5e8f\u5217, \u89e3\u91ca: bbbb \n\nInput: "cbbd"\nOutput: 2\n# \u6700\u957f\u7684\u56de\u6587\u5b50\u5e8f\u5217, \u89e3\u91ca: bb \n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u65b9\u6cd5\u4e00\uff1a\u9012\u5f52"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728  ",(0,r.jsx)(e.a,{href:"https://leetcode-cn.com/problems/longest-palindromic-substring",children:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32"}),"  \u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u6539\u8fdb\uff0c\u53ea\u662f\u5728\u5224\u65ad\u56de\u6587\u5b50\u4e32\u7684\u65f6\u5019\uff0c\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c ",(0,r.jsx)(e.code,{children:"s"})," \u7684\u7b2c ",(0,r.jsx)(e.code,{children:"i"})," \u4e2a\u5b57\u7b26\u548c\u7b2c ",(0,r.jsx)(e.code,{children:"j"})," \u4e2a\u5b57\u7b26\u76f8\u540c\u7684\u8bdd\uff0c\u5411\u5916\u6269\u5c55"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"dp[i][j] = dp[i + 1][j - 1]\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c ",(0,r.jsx)(e.code,{children:"s"})," \u7684\u7b2c ",(0,r.jsx)(e.code,{children:"i"})," \u4e2a\u5b57\u7b26\u548c\u7b2c ",(0,r.jsx)(e.code,{children:"j"})," \u4e2a\u5b57\u7b26\u4e0d\u76f8\u540c\u7684\u8bdd\uff0c\u8df3\u8fc7\u5de6 \u6216\u8005 \u53f3\u7684\u8282\u70b9"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6ce8\u610f\u70b9\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"dp[i][i] = 1"})," \u8bb0\u5f55\u4e86\u957f\u5ea6\u4e3a 1"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u65b9\u6cd5\u4e8c\uff1a\u52a8\u6001\u89c4\u5212"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c ",(0,r.jsx)(e.code,{children:"s"})," \u7684\u7b2c ",(0,r.jsx)(e.code,{children:"i"})," \u4e2a\u5b57\u7b26\u548c\u7b2c ",(0,r.jsx)(e.code,{children:"j"})," \u4e2a\u5b57\u7b26\u76f8\u540c\u7684\u8bdd\uff0c\u5411\u5916\u6269\u5c55"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"dp[i][j] = dp[i + 1][j - 1] + 2\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c ",(0,r.jsx)(e.code,{children:"s"})," \u7684\u7b2c ",(0,r.jsx)(e.code,{children:"i"})," \u4e2a\u5b57\u7b26\u548c\u7b2c ",(0,r.jsx)(e.code,{children:"j"})," \u4e2a\u5b57\u7b26\u4e0d\u76f8\u540c\u7684\u8bdd\uff0c\u8df3\u8fc7\u5de6 \u6216\u8005 \u53f3\u7684\u8282\u70b9"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"expendAroundCenter(s, start, end + 1, deleteLetter + 1) // \u8df3\u8fc7 end \u70b9\nexpendAroundCenter(s, start - 1, end, deleteLetter + 1) // \u8df3\u8fc7 start \u70b9\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"go-\u793a\u4f8b",children:"Go \u793a\u4f8b"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u9012\u5f52"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"// \u8d85\u65f6 61/83\nvar ans int \n\nfunc longestPalindromeSubseq(s string) int {\n    if len(s) < 2 {\n        return len(s)\n    }\n    \n    ans = 1\n\n    for i:= 0; i < len(s); i++ {\n        expendAroundCenter(s, i - 1, i + 1, 0)\n        expendAroundCenter(s, i, i + 1, 0)\n    }\n    return ans \n}\n\nfunc max(a, b int) int {\n    if a > b {\n        return a\n    }\n    return b \n}\n\nfunc expendAroundCenter(s string, start int, end int , deleteLetter int ) {\n    if start < 0 || end >= len(s) {\n        return \n    }\n    \n    if s[start] == s[end] {\n        ans = max(ans, end - start + 1 - deleteLetter)\n        expendAroundCenter(s, start - 1, end + 1, deleteLetter)\n    } else {\n        expendAroundCenter(s, start, end + 1, deleteLetter + 1)\n        expendAroundCenter(s, start - 1, end, deleteLetter + 1)\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u52a8\u6001\u89c4\u5212"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"// AC\nfunc max(a,b int) int {\n    if a > b {\n        return a \n    }\n    return b \n}\n\nfunc longestPalindromeSubseq(s string) int {\n    n := len(s)\n    if n < 2 {\n        return n\n    }\n\n    dp := make([][]int, n)\n    for i:= 0; i < n; i++ {\n        dp[i] = make([]int, n)\n    }\n\n    for i:= n - 1; i >= 0; i-- { // \u5fc5\u987b\u4fdd\u8bc1 i \u8ba1\u7b97\u7684\u65f6\u5019, i + 1 \u5df2\u7ecf\u8ba1\u7b97\u597d\u4e86 ==> \u4ece\u53f3\u5411\u5de6\n        dp[i][i] = 1 // \u53ea\u6709\u4e00\u4e2a\u5b57\u7b26\u957f\u5ea6\u4e3a 1\n        for j:= i + 1; j < n; j++ { // \u5fc5\u987b\u4fdd\u8bc1 j \u8ba1\u7b97\u7684\u65f6\u5019\uff0cj - 1 \u5df2\u7ecf\u8ba1\u7b97\u597d\u4e86 ==> \u4ece\u5de6\u5411\u53f3\n            if s[i] == s[j] {\n                dp[i][j] = dp[i + 1][j - 1] + 2\n            } else {\n                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n            }\n        }\n    }\n    \n    return dp[0][n - 1]\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function d(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);