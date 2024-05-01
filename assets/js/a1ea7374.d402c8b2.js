"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[5276],{49959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(74848),o=t(28453);const i={title:"\u4e8c\u53c9\u6811\u603b\u7ed3",date:new Date("2020-12-11T16:25:30.000Z"),slug:"/pages/2723b5/",categories:["\u6570\u636e\u7ed3\u6784","\u6811"]},l=void 0,a={id:"\u9762\u8bd5\u6280\u5de7/\u6570\u636e\u7ed3\u6784/\u6811/\u4e8c\u53c9\u6811\u603b\u7ed3",title:"\u4e8c\u53c9\u6811\u603b\u7ed3",description:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",source:"@site/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/02.\u6811/01.\u4e8c\u53c9\u6811\u603b\u7ed3.md",sourceDirName:"02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/02.\u6811",slug:"/pages/2723b5/",permalink:"/docs/pages/2723b5/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.\u9762\u8bd5\u6280\u5de7/03.\u6570\u636e\u7ed3\u6784/02.\u6811/01.\u4e8c\u53c9\u6811\u603b\u7ed3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4e8c\u53c9\u6811\u603b\u7ed3",date:"2020-12-11T16:25:30.000Z",slug:"/pages/2723b5/",categories:["\u6570\u636e\u7ed3\u6784","\u6811"]},sidebar:"interview",previous:{title:"445. \u4e24\u6570\u76f8\u52a0 II(Medium)",permalink:"/docs/pages/064cc3/"},next:{title:"236. \u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148(Medium)",permalink:"/docs/pages/5ef4ac/"}},s={},u=[{value:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",id:"104-\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",level:4},{value:"110. \u5e73\u8861\u4e8c\u53c9\u6811",id:"110-\u5e73\u8861\u4e8c\u53c9\u6811",level:4},{value:"543. \u4e8c\u53c9\u6811\u7684\u76f4\u5f84",id:"543-\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",level:4},{value:"437. \u8def\u5f84\u603b\u548c III",id:"437-\u8def\u5f84\u603b\u548c-iii",level:4},{value:"101. \u5bf9\u79f0\u4e8c\u53c9\u6811",id:"101-\u5bf9\u79f0\u4e8c\u53c9\u6811",level:4},{value:"1110. \u5220\u70b9\u6210\u6797",id:"1110-\u5220\u70b9\u6210\u6797",level:4},{value:"124. \u4e8c\u53c9\u6811\u4e2d\u7684\u6700\u5927\u8def\u5f84\u548c",id:"124-\u4e8c\u53c9\u6811\u4e2d\u7684\u6700\u5927\u8def\u5f84\u548c",level:4},{value:"102. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",id:"102-\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",level:4},{value:"107. \u4e8c\u53c9\u6811\u7684\u5c42\u6b21\u904d\u5386 II",id:"107-\u4e8c\u53c9\u6811\u7684\u5c42\u6b21\u904d\u5386-ii",level:4},{value:"103. \u4e8c\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u6b21\u904d\u5386",id:"103-\u4e8c\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u6b21\u904d\u5386",level:4}];function d(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"104-\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/",children:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxDepth(self, root: TreeNode) -> int:\n        if not root: return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func maxDepth(root *TreeNode) int {\n    if root == nil {\n        return 0\n    }\n    left := maxDepth(root.Left)\n    right := maxDepth(root.Right)\n    if left < right {\n        return right + 1\n    }\n    return left + 1\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"110-\u5e73\u8861\u4e8c\u53c9\u6811",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/balanced-binary-tree/",children:"110. \u5e73\u8861\u4e8c\u53c9\u6811"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    res = True\n    def isBalanced(self, root: TreeNode) -> bool:\n        def tree_depth(root):\n            if not root: return 0\n            if not self.res: return 0 # \u526a\u679d\u64cd\u4f5c\n            left_depth = tree_depth(root.left) # \u5de6\u5b50\u6811\u6df1\u5ea6\n            right_depth = tree_depth(root.right) # \u53f3\u5b50\u6811\u6df1\u5ea6\n            if abs(left_depth - right_depth) > 1: # \u9a8c\u8bc1\u662f\u5426\u662f\u5e73\u6ed1\u4e8c\u53c9\u6811\n                self.res = False\n            return max(left_depth, right_depth) + 1\n        tree_depth(root)\n        return self.res\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func max(a int, b int) int {\n    if a > b {\n        return a\n    }\n    return b\n}\n\nfunc abs(a int) int {\n    if a < 0 {\n        return -1 * a\n    }\n    return a \n}\n\nfunc tree_depth(root *TreeNode) int {\n    if root == nil {\n        return 0\n    }\n    if flag == false {\n        return -1\n    }\n    left := tree_depth(root.Left)\n    right := tree_depth(root.Right)\n    if abs(left - right) > 1 {\n        flag = false\n        return - 1\n    }\n    return max(left, right) + 1\n}\n\nvar flag bool \n\nfunc isBalanced(root *TreeNode) bool {\n    flag = true \n    tree_depth(root)\n    return flag \n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"543-\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/diameter-of-binary-tree/",children:"543. \u4e8c\u53c9\u6811\u7684\u76f4\u5f84"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    ans = 0\n    def diameterOfBinaryTree(self, root: TreeNode) -> int:\n        def maxHeight(root):\n            if not root: return 0 \n            leftMaxHeight = maxHeight(root.left)\n            rightMaxHeight = maxHeight(root.right)\n            self.ans = max(self.ans, leftMaxHeight + rightMaxHeight)\n            return max(leftMaxHeight, rightMaxHeight) + 1\n        maxHeight(root)\n        return self.ans \n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func max(a, b int) int {\n    if a > b {\n        return a\n    }\n    return b \n}\n\nfunc maxHeight(root *TreeNode) int {\n    if root == nil {\n        return 0\n    }\n    leftMaxHeight := maxHeight(root.Left)\n    rightMaxHeight := maxHeight(root.Right)\n    ans = max(ans, leftMaxHeight + rightMaxHeight)\n    return max(leftMaxHeight, rightMaxHeight) + 1\n}\n\nvar ans int \n\nfunc diameterOfBinaryTree(root *TreeNode) int {\n    if root == nil {\n        return 0\n    }\n    ans = 0\n    maxHeight(root)\n    return ans \n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"437-\u8def\u5f84\u603b\u548c-iii",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/path-sum-iii/",children:"437. \u8def\u5f84\u603b\u548c III"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def pathSum(self, root: TreeNode, sum: int) -> int:\n        def pathSumStartWithRoot(root, sum):\n            if not root: return 0 \n            count = int(root.val == sum) # \u627e\u5230\u7ed3\u679c\u52a01\n            count += pathSumStartWithRoot(root.left, sum - root.val)\n            count += pathSumStartWithRoot(root.right, sum - root.val)\n            return count\n                \n        if not root: return 0\n        # 1. \u4ece root \u5f00\u59cb\n        # 2. \u4ece root.left \u5f00\u59cb\n        # 3. \u4ece root.right \u5f00\u59cb\n        ans = pathSumStartWithRoot(root, sum) + \\\n              self.pathSum(root.left, sum) + \\\n              self.pathSum(root.right, sum)\n        return ans \n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func pathSumStartWithRoot(root *TreeNode, sum int) int {\n    if root == nil {\n        return 0\n    }\n    count := 0\n    if root.Val == sum {\n        count += 1\n    }\n    return count +  pathSumStartWithRoot(root.Left, sum - root.Val) + \n           pathSumStartWithRoot(root.Right, sum - root.Val)\n}\n\nfunc pathSum(root *TreeNode, sum int) int {\n    if root == nil {\n        return 0\n    }\n    return pathSumStartWithRoot(root, sum) + \n           pathSum(root.Left, sum) + \n           pathSum(root.Right, sum)\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"101-\u5bf9\u79f0\u4e8c\u53c9\u6811",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/symmetric-tree/",children:"101. \u5bf9\u79f0\u4e8c\u53c9\u6811"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isSymmetric(self, root: TreeNode) -> bool:\n        def isSame(A, B):\n            if not A and not B: return True \n            if not A or not B: return False \n            if A.val != B.val: return False \n            return isSame(A.left, B.right) and isSame(A.right, B.left)\n        if not root: return True \n        return isSame(root.left, root.right)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func isSame(a *TreeNode, b *TreeNode) bool {\n    if a == nil && b == nil {\n        return true\n    }\n    if a == nil || b == nil {\n        return false\n    }\n    if a.Val != b.Val {\n        return false \n    }\n    return isSame(a.Left, b.Right) && isSame(a.Right, b.Left)\n}\nfunc isSymmetric(root *TreeNode) bool {\n    if root == nil || (root.Left == nil && root.Right == nil) {\n        return true\n    }\n    return isSame(root.Left, root.Right) && isSame(root.Right, root.Left)\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"1110-\u5220\u70b9\u6210\u6797",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/delete-nodes-and-return-forest/",children:"1110. \u5220\u70b9\u6210\u6797"})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u9898\u5f53\u82b1\u4e86\u5f88\u591a\u65f6\u95f4\uff0c\u53ef\u4ee5\u60f3\u60f3\u601d\u8def"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:\n        def dfs(root):\n            if not root: return root\n            root.left = dfs(root.left) \n            root.right = dfs(root.right)\n            if root.val in to_delete:\n                if root.left:\n                    ans.append(root.left)\n                if root.right:\n                    ans.append(root.right)\n                return None \n            return root \n        ans = []\n        if dfs(root):\n            ans.append(root)\n        return ans \n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func helper(root *TreeNode, to_delete []int ) *TreeNode {\n    if root == nil {\n        return root\n    }\n    root.Left = helper(root.Left, to_delete)\n    root.Right = helper(root.Right, to_delete)\n    if contains(to_delete, root.Val) { // \u5220\u9664\u8282\u70b9 root\n        if root.Left != nil {\n            ans = append(ans, root.Left)\n        }\n        if root.Right != nil {\n            ans = append(ans, root.Right)\n        }\n        return nil \n    }\n    return root \n}\n\nfunc contains(data []int, value int) bool{\n    for _, v := range data {\n        if value == v {\n            return true \n        }\n    }\n    return false\n}\n\nvar ans []*TreeNode\n\nfunc delNodes(root *TreeNode, to_delete []int) []*TreeNode {\n    ans = make([]*TreeNode, 0) \n    if helper(root, to_delete) != nil { // \u6ca1\u6709\u5220\u9664\u7684\u8bdd\uff0c\u52a0\u5165 root\n        ans = append(ans, root)\n    }\n    return ans \n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"124-\u4e8c\u53c9\u6811\u4e2d\u7684\u6700\u5927\u8def\u5f84\u548c",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/",children:"124. \u4e8c\u53c9\u6811\u4e2d\u7684\u6700\u5927\u8def\u5f84\u548c"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import math \nclass Solution:\n    res = -math.inf\n    def maxPathSum(self, root: TreeNode) -> int:\n        def dfs(root):\n            if not root: return 0\n            left_value = max(0, dfs(root.left))\n            right_value = max(0, dfs(root.right))\n            value = root.val + left_value + right_value\n            self.res = max(self.res, value)\n            return root.val + max(left_value, right_value)  # \u9047\u5230\u5c94\u8def\u53e3\uff0c\u5fc5\u987b\u9009\u62e9\u4e00\u4e2a\u8d70\n        dfs(root)\n        return self.res \n"})}),"\n",(0,r.jsx)(n.h4,{id:"102-\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/binary-tree-level-order-traversal/",children:"102. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def levelOrder(self, root: TreeNode) -> List[List[int]]:\n        if not root: return []\n        queue, res = collections.deque(), []\n        queue.append(root)\n        while queue:\n            res_temp = []\n            for _ in range(len(queue)):\n                temp = queue.popleft()\n                if temp.left:\n                    queue.append(temp.left)\n                if temp.right:\n                    queue.append(temp.right)\n                res_temp.append(temp.val)\n            res.append(res_temp)\n        return res\n"})}),"\n",(0,r.jsx)(n.h4,{id:"107-\u4e8c\u53c9\u6811\u7684\u5c42\u6b21\u904d\u5386-ii",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/",children:"107. \u4e8c\u53c9\u6811\u7684\u5c42\u6b21\u904d\u5386 II"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:\n        if not root: return []\n        queue, res = collections.deque(), collections.deque()\n        queue.append(root)\n        while queue:\n            level_tmp = []\n            for _ in range(len(queue)):\n                temp = queue.popleft()\n                level_tmp.append(temp.val)\n                if temp.left: queue.append(temp.left)\n                if temp.right: queue.append(temp.right)\n            res.appendleft(level_tmp)\n        return list(res)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"103-\u4e8c\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u6b21\u904d\u5386",children:(0,r.jsx)(n.a,{href:"https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/",children:"103. \u4e8c\u53c9\u6811\u7684\u952f\u9f7f\u5f62\u5c42\u6b21\u904d\u5386"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:\n        if not root: return [] \n        queue, res = collections.deque(), []\n        queue.append(root)\n        level = 0\n        while queue:\n            level += 1\n            _res = collections.deque()\n            for _ in range(len(queue)):\n                temp = queue.popleft()\n                if level % 2 == 0:\n                    _res.appendleft(temp.val)\n                else:\n                    _res.append(temp.val)\n                if temp.left: queue.append(temp.left)\n                if temp.right: queue.append(temp.right)\n            res.append(list(_res))\n        return res\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);