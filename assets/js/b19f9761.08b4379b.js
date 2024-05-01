"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[2718],{67548:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(74848),d=r(28453);const o={title:"79. \u5355\u8bcd\u641c\u7d22(Medium)",date:new Date("2020-12-08T17:20:36.000Z"),slug:"/pages/ecaa35/",categories:["\u7b97\u6cd5","\u641c\u7d22\u7b97\u6cd5"]},t=void 0,s={id:"\u9762\u8bd5\u6280\u5de7/\u7b97\u6cd5/\u641c\u7d22\u7b97\u6cd5/\u5355\u8bcd\u641c\u7d22(79)",title:"79. \u5355\u8bcd\u641c\u7d22(Medium)",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/05.\u641c\u7d22\u7b97\u6cd5/05.\u5355\u8bcd\u641c\u7d22(79).md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/05.\u641c\u7d22\u7b97\u6cd5",slug:"/pages/ecaa35/",permalink:"/docs/pages/ecaa35/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/02.\u7b97\u6cd5/05.\u641c\u7d22\u7b97\u6cd5/05.\u5355\u8bcd\u641c\u7d22(79).md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"79. \u5355\u8bcd\u641c\u7d22(Medium)",date:"2020-12-08T17:20:36.000Z",slug:"/pages/ecaa35/",categories:["\u7b97\u6cd5","\u641c\u7d22\u7b97\u6cd5"]},sidebar:"interview",previous:{title:"417. \u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898(Medium)",permalink:"/docs/pages/1a3c47/"},next:{title:"934. \u6700\u77ed\u7684\u6865(Medium)",permalink:"/docs/pages/69fced/"}},a={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"Python\u793a\u4f8b",id:"python\u793a\u4f8b",level:2},{value:"Go \u793a\u4f8b",id:"go-\u793a\u4f8b",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u7ef4\u7f51\u683c\u548c\u4e00\u4e2a\u5355\u8bcd\uff0c\u627e\u51fa\u8be5\u5355\u8bcd\u662f\u5426\u5b58\u5728\u4e8e\u7f51\u683c\u4e2d\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6837\u4f8b",children:"\u6837\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"board =\n[\n  ['A','B','C','E'],\n  ['S','F','C','S'],\n  ['A','D','E','E']\n]\n\n\u7ed9\u5b9a word = \"ABCCED\", \u8fd4\u56de true\n\u7ed9\u5b9a word = \"SEE\", \u8fd4\u56de true\n\u7ed9\u5b9a word = \"ABCB\", \u8fd4\u56de false\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u9898\u662f\u5e38\u89c1\u7684 \u56fe \u7684\u641c\u7d22\u95ee\u9898\uff0c\u4f7f\u7528\u6df1\u5ea6\u641c\u7d22 \u3002\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u9000\u56de\u4e0a\u4e00\u4e2a\u8282\u70b9\u72b6\u6001\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528\u56de\u6eaf\u6cd5\uff0c\u8bb0\u5f55\u548c\u6062\u590d\u72b6\u6001\u3002\u4f7f\u7528 visited \u6570\u7ec4\u6807\u8bb0\u8282\u70b9\u662f\u5426\u8d70\u8fc7\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"python\u793a\u4f8b",children:"Python\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def dfs(board, word, visited, r, c):\n    if not word: # \u627e\u5230\n        return True\n\n    direction = [-1, 0, 1, 0, -1]\n    for d in range(4):\n        i = r + direction[d]\n        j = c + direction[d + 1]\n        if 0<= i < len(board) and \\\n           0<= j < len(board[0]) and \\\n           board[i][j] == word[0] and \\\n           not visited[i][j]: # \u672a\u8bbf\u95ee\u8fc7\n             visited[i][j] = 1\n             if dfs(board, word[1:], visited, i, j): return True # \u526a\u679d\uff1a\u627e\u5230\u7b54\u6848\n             visited[i][j] = 0\n    return False # \u904d\u5386\u5b8c\u4ecd\u672a\u627e\u5230\n         \nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        for i in range(len(board)):\n            for j in range(len(board[0])):\n                if board[i][j] == word[0]:\n                    visited = [[0] * len(board[0]) for _ in range(len(board))]\n                    visited[i][j] = 1\n                    if dfs(board, word[1:], visited, i, j):\n                        return True \n        return False\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u540c\u6837\uff0c\u5224\u65ad\u662f\u5426\u7b26\u5408\u89c4\u5219\u7684\u4ee3\u7801\u53ef\u4ee5\u653e\u5728 DFS \u7684\u5f00\u5934\uff0c\u8fd9\u6837\u4ee3\u7801\u7a0d\u5fae\u53d8\u4e00\u4e0b\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def dfs(board, word, visited, r, c):\n    if not word: # \u627e\u5230\n        return True\n    if r < 0 or r >= len(board) or c < 0 or c >= len(board[0]) \\\n       or visited[r][c] \\\n       or board[r][c] != word[0]: \n           return False  \n    \n    direction = [-1, 0, 1, 0, -1]\n    visited[r][c] = 1\n    for d in range(4):\n        i = r + direction[d]\n        j = c + direction[d + 1]\n        if dfs(board, word[1:], visited, i, j): \n            return True # \u526a\u679d\uff1a\u627e\u5230\u7b54\u6848\n    visited[r][c] = 0\n    return False # \u904d\u5386\u5b8c\u4ecd\u672a\u627e\u5230\n         \nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        visited = [[0] * len(board[0]) for _ in range(len(board))]\n        for i in range(len(board)):\n            for j in range(len(board[0])):\n                if dfs(board, word, visited, i, j):\n                    return True \n        return False \n"})}),"\n",(0,i.jsx)(e.h2,{id:"go-\u793a\u4f8b",children:"Go \u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"\tfunc dfs(board [][]byte, word string, visited [][]bool, r, c int) bool {\n    if len(word) == 0 {\n        return true\n    }\n    if r < 0 || r >= len(board) || c < 0 || c >= len(board[0]) ||\n       board[r][c] != word[0] || visited[r][c] {\n           return false\n    }\n\n    visited[r][c] = true \n    directions := []int {-1, 0, 1, 0, -1}\n    for d := 0; d < 4; d ++ {\n        x := r + directions[d]\n        y := c + directions[d + 1]\n        if dfs(board, word[1:], visited, x, y) {\n            return true\n        }\n    }\n    visited[r][c] = false\n    return false\n}\n\nfunc exist(board [][]byte, word string) bool {\n    n, m := len(board), len(board[0])\n    visited := make([][]bool, n)\n    for i := range visited {\n        visited[i] = make([]bool, m)\n    }\n\n    for i := 0; i < n; i ++ {\n        for j := 0; j < m; j ++ {\n            if dfs(board, word, visited, i, j) {\n                return true\n            }\n        }\n    }\n    return false\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>s});var i=r(96540);const d={},o=i.createContext(d);function t(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:t(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);