"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[3006],{48246:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>r});var i=s(74848),c=s(28453);const t={title:"Git in Action",tags:["Git"],comments:!1,date:new Date("2020-01-12T16:35:50.000Z"),categories:["Git"],cover:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225406.png",slug:"/pages/fadef0/"},d=void 0,l={id:"\u6280\u672f\u7b14\u8bb0/\u8fd0\u7ef4/Git/Git\u5b9e\u6218",title:"Git in Action",description:"\u4e3b\u8981\u8bb0\u5f55 git \u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u78b0\u5230\u7684\u95ee\u9898\uff0c\u4f1a\u9010\u6b65\u6162\u6162\u79ef\u7d2f",source:"@site/docs/01.\u6280\u672f\u7b14\u8bb0/03.\u8fd0\u7ef4/03.Git/01.Git\u5b9e\u6218.md",sourceDirName:"01.\u6280\u672f\u7b14\u8bb0/03.\u8fd0\u7ef4/03.Git",slug:"/pages/fadef0/",permalink:"/docs/pages/fadef0/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01.\u6280\u672f\u7b14\u8bb0/03.\u8fd0\u7ef4/03.Git/01.Git\u5b9e\u6218.md",tags:[{label:"Git",permalink:"/docs/tags/git"}],version:"current",sidebarPosition:1,frontMatter:{title:"Git in Action",tags:["Git"],comments:!1,date:"2020-01-12T16:35:50.000Z",categories:["Git"],cover:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225406.png",slug:"/pages/fadef0/"},sidebar:"techwiki",previous:{title:"Centos \u73af\u5883\u914d\u7f6e\uff08\u6301\u7eed\u603b\u7ed3\uff09",permalink:"/docs/pages/1886cc/"},next:{title:"Git\u5de5\u4f5c\u6d41",permalink:"/docs/pages/7f3fcb/"}},h={},r=[{value:"\u9ad8\u9891\u95ee\u9898\u4e0e\u5b9e\u8df5\u65b9\u6848",id:"\u9ad8\u9891\u95ee\u9898\u4e0e\u5b9e\u8df5\u65b9\u6848",level:2},{value:"\u65b0\u9879\u76ee\u4e0e\u8fdc\u7aef\u540c\u6b65",id:"\u65b0\u9879\u76ee\u4e0e\u8fdc\u7aef\u540c\u6b65",level:3},{value:"\u4fee\u6539\u4e0a\u4e00\u6b21\u7684\u63d0\u4ea4",id:"\u4fee\u6539\u4e0a\u4e00\u6b21\u7684\u63d0\u4ea4",level:3},{value:"\u670d\u52a1\u5668\u7aef\u5f3a\u5236\u540c\u6b65\u8fdc\u7aef git \u4ed3\u5e93",id:"\u670d\u52a1\u5668\u7aef\u5f3a\u5236\u540c\u6b65\u8fdc\u7aef-git-\u4ed3\u5e93",level:3},{value:"\u4e3a\u4ec0\u4e48\u4fee\u6539\u4e86 <code>.gitignore</code> \u6587\u4ef6\uff0c\u5ffd\u7565\u9879\u8fd8\u662f\u4e0d\u8d77\u4f5c\u7528",id:"\u4e3a\u4ec0\u4e48\u4fee\u6539\u4e86-gitignore-\u6587\u4ef6\u5ffd\u7565\u9879\u8fd8\u662f\u4e0d\u8d77\u4f5c\u7528",level:3},{value:"\u7ba1\u7406\u591a\u4e2agit\u8d26\u53f7",id:"\u7ba1\u7406\u591a\u4e2agit\u8d26\u53f7",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u751f\u6210\u516c\u94a5",id:"\u751f\u6210\u516c\u94a5",level:4},{value:"\u4e0a\u4f20\u516c\u94a5",id:"\u4e0a\u4f20\u516c\u94a5",level:4},{value:"\u914d\u7f6econfig\u6587\u4ef6\u548c\u6dfb\u52a0\u79c1\u94a5",id:"\u914d\u7f6econfig\u6587\u4ef6\u548c\u6dfb\u52a0\u79c1\u94a5",level:3},{value:"\u591a\u8d26\u53f7\u7ba1\u7406",id:"\u591a\u8d26\u53f7\u7ba1\u7406",level:4},{value:"ssh-agent\u662f\u4ec0\u4e48",id:"ssh-agent\u662f\u4ec0\u4e48",level:4},{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4",level:4},{value:"\u5982\u4f55\u6dfb\u52a0 ssh-agent",id:"\u5982\u4f55\u6dfb\u52a0-ssh-agent",level:4},{value:"\u6d4b\u8bd5ssh\u662f\u5426\u8bbe\u7f6e\u6210\u529f",id:"\u6d4b\u8bd5ssh\u662f\u5426\u8bbe\u7f6e\u6210\u529f",level:3},{value:"\u81ea\u52a8\u6dfb\u52a0\u79d8\u94a5\u7684\u51e0\u79cd\u65b9\u6cd5",id:"\u81ea\u52a8\u6dfb\u52a0\u79d8\u94a5\u7684\u51e0\u79cd\u65b9\u6cd5",level:3},{value:"\u65b9\u6848\u4e00\uff1a\u4f7f\u7528 keychain\uff08Mac-\u5f03\u7528\uff09",id:"\u65b9\u6848\u4e00\u4f7f\u7528-keychainmac-\u5f03\u7528",level:4},{value:"\u65b9\u6848\u4e8c\uff1a\u6dfb\u52a0\u5230\u542f\u52a8\u914d\u7f6e\u4e2d\u53bb\uff08\u901a\u7528\uff09",id:"\u65b9\u6848\u4e8c\u6dfb\u52a0\u5230\u542f\u52a8\u914d\u7f6e\u4e2d\u53bb\u901a\u7528",level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u4e3b\u8981\u8bb0\u5f55 git \u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u78b0\u5230\u7684\u95ee\u9898\uff0c\u4f1a\u9010\u6b65\u6162\u6162\u79ef\u7d2f"}),"\n",(0,i.jsx)(n.h2,{id:"\u9ad8\u9891\u95ee\u9898\u4e0e\u5b9e\u8df5\u65b9\u6848",children:"\u9ad8\u9891\u95ee\u9898\u4e0e\u5b9e\u8df5\u65b9\u6848"}),"\n",(0,i.jsx)(n.h3,{id:"\u65b0\u9879\u76ee\u4e0e\u8fdc\u7aef\u540c\u6b65",children:"\u65b0\u9879\u76ee\u4e0e\u8fdc\u7aef\u540c\u6b65"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ git init\n$ git remote add origin git@e.coding.net:datamate/pujiangjiaoye.git # \u6dfb\u52a0\u8fdc\u7aef\u4ed3\u5e93\n$ git branch --set-upstream-to=origin/master # \u8bbe\u7f6e\u5206\u652f\u5bf9\u5e94\u5173\u7cfb\n$ git push --set-upstream origin master # \u8bbe\u7f6epush \u5bf9\u5e94\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5efa\u7acb\u672c\u5730\u5206\u652f\u7684\u4e0a\u6e38\n$ git remote -v # \u67e5\u770b\u5206\u652f\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u6211\u4eec\u5c1d\u8bd5push\u7684\u65f6\u5019\u53c8\u4f1a\u51fa\u73b0\u4e00\u4e2a\u95ee\u9898"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"error: \u63a8\u9001\u4e00\u4e9b\u5f15\u7528\u5230 'git@e.coding.net:datamate/pujiangjiaoye.git' \u5931\u8d25\n\u63d0\u793a\uff1a\u66f4\u65b0\u88ab\u62d2\u7edd\uff0c\u56e0\u4e3a\u60a8\u5f53\u524d\u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\u843d\u540e\u4e8e\u5176\u5bf9\u5e94\u7684\u8fdc\u7a0b\u5206\u652f\u3002\n\u63d0\u793a\uff1a\u518d\u6b21\u63a8\u9001\u524d\uff0c\u5148\u4e0e\u8fdc\u7a0b\u53d8\u66f4\u5408\u5e76\uff08\u5982 'git pull ...'\uff09\u3002\u8be6\u89c1\n\u63d0\u793a\uff1a'git push --help' \u4e2d\u7684 'Note about fast-forwards' \u5c0f\u8282\u3002\n\n# \u6309\u7167\u63d0\u793a\uff0c\u5c1d\u8bd5\u7528git pull \u5408\u5e76,\u53c8\u5931\u8d25\n$ git pull\nfatal: \u62d2\u7edd\u5408\u5e76\u65e0\u5173\u7684\u5386\u53f2\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u539f\u56e0\u662f\u6211\u4eec\u672c\u5730\u4e0e\u8fdc\u7a0b\u7684\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u4f46\u662f\u6211\u4eec\u662f\u65b0\u63d0\u4ea4\uff0c\u600e\u4e48\u4f1a\u51fa\u73b0\u8fd9\u6837\u7684\u95ee\u9898\u5462\uff1f\n\u56e0\u4e3a\u5f88\u591a\u5e73\u53f0\u5728\u6211\u4eec\u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u5e2e\u6211\u4eec\u521b\u5efa\u4e86README.md\u6587\u4ef6\uff0c\u6240\u4ee5\u4f1a\u6709\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\u5b58\u5728\u3002git pull \u5931\u8d25\u7684\u539f\u56e0\u662f\uff0c\u4e24\u4e2a\u4e0d\u4e00\u81f4\u7684\u6587\u4ef6\u6ca1\u6709",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\u5171\u540c\u7956\u5148\u7684\u5386\u53f2"})}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6cd5\u4e5f\u5f88\u7b80\u5355"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git pull origin master --allow-unrelated-histories \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225406.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225457.png",alt:""})}),"\n",(0,i.jsx)(n.h3,{id:"\u4fee\u6539\u4e0a\u4e00\u6b21\u7684\u63d0\u4ea4",children:"\u4fee\u6539\u4e0a\u4e00\u6b21\u7684\u63d0\u4ea4"}),"\n",(0,i.jsx)(n.p,{children:"git \u662f\u5206\u652f\u7ba1\u7406\u7684\u5de5\u5177\uff0c\u6211\u4eec\u7684\u5de5\u4f5c\u6700\u597d\u5728\u4e00\u4e2a commit \u4e2d\u63d0\u4ea4\u76f8\u5e94\u7684\u4ee3\u7801\uff0c\u5b8c\u6210\u4e00\u4e2a\u529f\u80fd\uff08\u5982 bugfix \u6216\u8005 feature_add \uff09\u3002\u4f46\u662f\u6709\u7684\u65f6\u5019\uff0c\u6211\u4eec\u7684\u63d0\u4ea4\u7ecf\u8fc7 Code Review \u4e4b\u540e\uff0c\u53ef\u80fd\u4f1a\u88ab\u6253\u56de\u6765\u3002\u8fd9\u6837\u9762\u5bf9\u65b0\u7684\u4fee\u6539\uff0c\u4e0d\u5e94\u8be5\u91cd\u590d\u63d0\u4ea4\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u5efa\u7acb\u4e00\u4e2a\u63d0\u4ea4\u3002\u9762\u5bf9\u7b2c\u4e8c\u4e2a\u6587\u4ef6\uff08\u8fd9\u91cc\u6211\u4eec\u7ed9 a \u65b0\u589e\u4e86 Hello world again \uff09"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225533.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225610.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e00\u79cd\u9009\u62e9\uff0c\u6211\u4eec\u63d0\u4ea4\u4e24\u4e2a commit"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "second commit"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225659.png",alt:""})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e8c\u79cd\u9009\u62e9\uff0c\u6211\u4eec\u76f4\u63a5\u4fee\u6539\u4e0a\u4e00\u6b21\u7684\u4fee\u6539\uff08\u63a8\u8350\uff09"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5de5\u4f5c\u6d41\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git add .\ngit commit --amend # \u4ee3\u8868\u76f4\u63a5\u5728\u4e0a\u4e00\u6b21\u7684\u63d0\u4ea4\u4fee\u6539\uff0c\u8fd9\u91cc\u4f1a\u5f39\u51fa\u4e0a\u4e00\u6b21 commit \u7684\u4fe1\u606f\u3002\ngit push -f # \u7531\u4e8e\u6211\u4eec\u53ea\u662f\u6539\u4e86\u672c\u5730\uff0c\u63d0\u4ea4\u7684\u65f6\u5019\u4f7f\u7528 -f \u5f3a\u5236\u63a8\u9001\u4e00\u4e0b\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u5f3a\u70c8\u5efa\u8bae\uff0c\u4f7f\u7528 --amend \u7684\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u68c0\u67e5 commit \u7684\u4fe1\u606f\uff0c\u786e\u5b9a\u4e0d\u662f\u628a\u522b\u4eba\u7684\u7ed9\u51b2\u6389\u4e86\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200124225740.png",alt:""})}),"\n",(0,i.jsx)(n.h3,{id:"\u670d\u52a1\u5668\u7aef\u5f3a\u5236\u540c\u6b65\u8fdc\u7aef-git-\u4ed3\u5e93",children:"\u670d\u52a1\u5668\u7aef\u5f3a\u5236\u540c\u6b65\u8fdc\u7aef git \u4ed3\u5e93"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git fetch \ngit reset  --hard origin/master # \u8981\u5f3a\u5236\u540c\u6b65\u7684\u5206\u652f\uff01--hard \u662f\u4e22\u5f03\u5206\u652f\u7684\u4fee\u6539\ngit pull\nAlready up-to-date.\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"\u4e3a\u4ec0\u4e48\u4fee\u6539\u4e86-gitignore-\u6587\u4ef6\u5ffd\u7565\u9879\u8fd8\u662f\u4e0d\u8d77\u4f5c\u7528",children:["\u4e3a\u4ec0\u4e48\u4fee\u6539\u4e86 ",(0,i.jsx)(n.code,{children:".gitignore"})," \u6587\u4ef6\uff0c\u5ffd\u7565\u9879\u8fd8\u662f\u4e0d\u8d77\u4f5c\u7528"]}),"\n",(0,i.jsx)(n.p,{children:"\u65b0\u5efa\u7684\u6587\u4ef6\u5728git\u4e2d\u4f1a\u6709\u7f13\u5b58\uff0c\u5982\u679c\u67d0\u4e9b\u6587\u4ef6\u5df2\u7ecf\u88ab\u7eb3\u5165\u4e86\u7248\u672c\u7ba1\u7406\u4e2d\uff0c\u5c31\u7b97\u662f\u5728.gitignore\u4e2d\u5df2\u7ecf\u58f0\u660e\u4e86\u5ffd\u7565\u8def\u5f84\u4e5f\u662f\u4e0d\u8d77\u4f5c\u7528\u7684\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u5e94\u8be5\u5148\u628a\u672c\u5730\u7f13\u5b58\u5220\u9664\uff0c\u7136\u540e\u518d\u8fdb\u884cgit\u7684push"}),"\n",(0,i.jsx)(n.p,{children:"git\u6e05\u9664\u672c\u5730\u7f13\u5b58\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git rm -r --cached .\ngit add .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u9762\u9644\u4e0a\u6211\u7684 ",(0,i.jsx)(n.code,{children:".gitignore"})," \u6587\u4ef6"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Windows:\nThumbs.db\nehthumbs.db\nDesktop.ini\n\n# MAC:\n*.DS_Store\n\n# Python:\n*.py[cod]\n*.so\n*.egg\n*.egg-info\ndist\nbuild\n\n# My configurations:\n*.log\n*.log.*\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4f55\u4f7f\u7528 git merge"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u5f00\u53d1\u5206\u652f\uff08dev\uff09\u4e0a\u7684\u4ee3\u7801\u8fbe\u5230\u4e0a\u7ebf\u7684\u6807\u51c6\u540e\uff0c\u8981\u5408\u5e76\u5230 master \u5206\u652f\ngit checkout dev\ngit pull\ngit checkout master\ngit pull \ngit merge dev\ngit push -u origin master\n\n# \u5f53master\u4ee3\u7801\u6539\u52a8\u4e86\uff0c\u9700\u8981\u66f4\u65b0\u5f00\u53d1\u5206\u652f\uff08dev\uff09\u4e0a\u7684\u4ee3\u7801\n\ngit checkout master \ngit pull \ngit checkout dev # \u8fd9\u91cc\u9ed8\u8ba4dev \u8fdc\u7aef\u6ca1\u6709\u52a8\ngit merge master \ngit push -u origin dev\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003: ",(0,i.jsx)(n.a,{href:"https://blog.csdn.net/zl1zl2zl3/article/details/94019526",children:"git merge\u6700\u7b80\u6d01\u7528\u6cd5"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u63a8\u8350\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"git merge"})," \u6bd4\u8f83\u597d\u7684\u6559\u7a0b\uff1a ",(0,i.jsx)(n.a,{href:"https://www.jianshu.com/p/1a7e38cdbf76",children:"merge\uff1a\u5408\u5e76 commits"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ba1\u7406\u591a\u4e2agit\u8d26\u53f7",children:"\u7ba1\u7406\u591a\u4e2agit\u8d26\u53f7"}),"\n",(0,i.jsx)(n.h3,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(n.p,{children:["Git\u5171\u6709\u4e09\u4e2a\u7ea7\u522b\u7684 ",(0,i.jsx)(n.code,{children:"config"})," \u6587\u4ef6\uff0c\u5206\u522b\u662f ",(0,i.jsx)(n.code,{children:"system"})," \u3001",(0,i.jsx)(n.code,{children:"global"})," \u548c ",(0,i.jsx)(n.code,{children:"local"}),"\u3002",(0,i.jsx)(n.code,{children:"global"})," \u7684\u5728",(0,i.jsx)(n.code,{children:"$home\\.gitconfig"}),"\uff0clocal\u7684\u5728\u4ed3\u5e93\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:".git\\config"}),"\u3002\u8fd9\u4e09\u4e2a\u7ea7\u522b\u90fd\u5206\u522b\u914d\u7f6e\u4e86\u7528\u6237\u4fe1\u606f\uff0c\u5f53",(0,i.jsx)(n.code,{children:"git commit"}),"\u65f6\uff0c\u4f1a\u4f9d\u6b21\u4ecelocal\u3001global\u3001system\u91cc\u8bfb\u53d6\u7528\u6237\u4fe1\u606f\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5229\u7528local\u7684\u914d\u7f6e\u6765\u8bbe\u7f6e\u4e0d\u540c\u7684\u7528\u6237\u4fe1\u606f"]}),"\n",(0,i.jsx)(n.h4,{id:"\u751f\u6210\u516c\u94a5",children:"\u751f\u6210\u516c\u94a5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# \u67e5\u770bgit\u8d26\u53f7\uff0c\u4f1a\u6309\u987a\u5e8f\u8bfb\u53d6local,global\u7684\u7528\u6237\u4fe1\u606f\ngit config user.name\ngit config user.email\n\n# \u82e5\u662f\u5728\u7a7a\u4ed3\u5e93\u4e2d\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u4f1a\u51fa\u9519\uff0c\u6211\u4eec\u5728\u4ed3\u5e93\u4e2d\u4f7f\u7528--local\uff0c\u63d0\u524d\u8fd0\u884cgit init\ngit config --local -l\nfatal: --local \u53ea\u80fd\u5728\u4e00\u4e2a\u4ed3\u5e93\u5185\u4f7f\u7528\n\n# \u66f4\u6539\u672c\u5730\u8d26\u53f7\ngit config --local/--global user.name "Your name"\ngit config --local/--global user.email "Your email"\n# \u751f\u6210\u516c\u94a5\nssh-keygen -t rsa -C "your_email@example.com" -f ./\n-t rsa \u7ea6\u5b9a\u52a0\u5bc6\u7c7b\u578b\n-C \u6dfb\u52a0\u8bc4\u8bba\n-f \u4fdd\u5b58\u79d8\u94a5\u7684\u5730\u5740\uff08\u9ed8\u8ba4\u662f ~/.ssh/id_rsa\uff09\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u751f\u6210\u516c\u94a5\u7684\u5730\u65b9\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u751f\u6210\u7684\u516c\u94a5\u4f1a\u81ea\u52a8\u751f\u6210\u5728",(0,i.jsx)(n.code,{children:"~/.ssh/id_rsa"}),"\u4e2d\uff0c\u82e5\u662f\u4f60\u6709\u591a\u4e2a\u8d26\u53f7\u7684\u8bdd\uff0c\u65e0\u7591\u4f1a\u628a\u539f\u5148\u7684\u79d8\u94a5\u8986\u76d6\u3002\u53ef\u4ee5\u5728\u540e\u7eed\u5f39\u51fa\u7684\u63d0\u793a\u4e2d\u7ea6\u5b9akey\u4fdd\u5b58\u7684\u5730\u5740"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]  // \u63a8\u8350\u4f7f\u7528\u9ed8\u8ba4\u5730\u5740\nEnter passphrase (empty for no passphrase):   //\u6b64\u5904\u70b9\u51fb Enter \u952e\u5373\u53ef\uff0c\u4e5f\u53ef\u4ee5\u586b\u5199\u5bc6\u7801\uff0c\u586b\u5199\u5bc6\u7801\u540e\u6bcf\u6b21\u4f7f\u7528 SSH \u65b9\u5f0f\u63a8\u9001\u4ee3\u7801\u65f6\u90fd\u4f1a\u8981\u6c42\u8f93\u5165\u5bc6\u7801\uff0c\u7531\u4e8e\u8fd9\u4e2a Key \u4e5f\u4e0d\u662f\u7528\u4e8e\u519b\u4e8b\u76ee\u7684\uff0c\u6240\u4ee5\u4e5f\u65e0\u9700\u8bbe\u7f6e\u5bc6\u7801\u3002\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u5728ssh-keygen\u4e2d\u7ea6\u5b9a\u597d"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'ssh-keygen -t rsa -C "your_email@example.com" -f ~/.ssh/coding \n-f \u4fdd\u5b58\u5728yon\u4e0b\u7684.ssh/coding\u6587\u4ef6\u4e2d\n\nYour identification has been saved in /Users/ppsteven/.ssh/coding.\nYour public key has been saved in /Users/ppsteven/.ssh/coding.pub.\nThe key fingerprint is:\nSHA256:P6R/Fo70VkCyKsQsFXXX... XXX@outlook.com\n'})}),"\n",(0,i.jsxs)(n.p,{children:[".ssh \u6587\u4ef6\u5939\u4e0b\u4e5f\u591a\u4e86",(0,i.jsx)(n.code,{children:"coding"}),"\u548c",(0,i.jsx)(n.code,{children:"coding.pub"}),"\u4e24\u4e2a\u6587\u4ef6"]}),"\n",(0,i.jsx)(n.p,{children:"coding\u662f\u4f60\u7684\u79c1\u94a5\uff0c\u9700\u8981\u597d\u597d\u4fdd\u7ba1\uff0c\u5728\u4e0b\u9762\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fd8\u9700\u8981\u4f7f\u7528\uff0c\u7528\u4ee5\u8bc1\u660e\u4f60\u81ea\u5df1\u7684\u8eab\u4efd\uff0ccoding.pub\u662f\u516c\u94a5\uff0c\u6211\u4eec\u9700\u8981\u4e0a\u4f20\u5230github\uff0ccoding\uff0c\u7801\u4e91\u7b49\u5e73\u53f0\u4e0a\u53bb\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u4e0a\u4f20\u516c\u94a5",children:"\u4e0a\u4f20\u516c\u94a5"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u53ea\u8981\u627e\u5230\u5bf9\u5e94\u4e0a\u4f20\u7684\u5730\u65b9\u4e0a\u4f20\u5373\u53ef\uff0c\u4e00\u822c\u5e73\u53f0\u90fd\u6709\u5bf9\u5e94\u7684\u6559\u7a0b\uff0c\u4e0b\u9762\u6211\u4eeccopy\u4e00\u4e0bcoding\u7684\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200119133041.png",alt:""})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"mac \u590d\u5236\u6587\u4ef6\u5c0f\u6280\u5de7"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat coding.pub | pbcopy # \u8f93\u51fa\u5230\u526a\u5207\u677f\n"})}),"\n",(0,i.jsx)(n.p,{children:"pbcopy  : \u8868\u793a\u590d\u5236\u526a\u5207\u7248\npbpaste \uff1a\u8868\u793a\u7c98\u8d34\u526a\u5207\u7248"}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6econfig\u6587\u4ef6\u548c\u6dfb\u52a0\u79c1\u94a5",children:"\u914d\u7f6econfig\u6587\u4ef6\u548c\u6dfb\u52a0\u79c1\u94a5"}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5\u662f\u62e5\u6709\u591a\u4e2a\u8d26\u53f7\uff0c\u9700\u8981\u5728 .ssh \u4e0b\u914d\u7f6e\u591a\u4e2a\u8d26\u53f7\u7684\u914d\u7f6e\u6587\u4ef6 config \uff0c\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u662f\u7528\u6765\u4f5c\u4e3a\u8def\u7531\u4f7f\u7528\u3002\n\u6211\u4eec\u9700\u8981\u68c0\u67e5\u662f\u5426\u5b58\u5728 ",(0,i.jsx)(n.code,{children:"~/.ssh/config"})," \u6587\u4ef6\uff0c\u4e0d\u5b58\u5728\u7684\u8bdd\u5c31\u521b\u5efa\u5982\u4e0b\u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# ~/.ssh/config\n\nHost github # \u522b\u540d\uff0c\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\n  # connect to github by git@github.com\n\tUser git # \u7528\u6237\u540d\n\tHostName github.com # \u670d\u52a1\u5668\u5730\u5740\n\tIdentityFile ~/.ssh/id_rsa # \u79c1\u94a5\u5730\u5740\n\nHost coding\n\tHostName e.coding.net\n\tUser git\n\tIdentityFile ~/.ssh/coding\n\nHost *.works.*\n\tHostName devops.works\n\tIdentityFile ~/.ssh/id_rsa\n\nHost hostmem\n  HostName 195.85.35.15\n  IdentityFile ~/.ssh/id_rsa\n  \nHost *\n\tUser ppsteven # \u9ed8\u8ba4\u7528\u6237\n\tAddKeysToAgent yes # \u81ea\u52a8\u6dfb\u52a0\u5230 ssh-agent\n\tIdentityFile ~/.ssh/id_rsa\n\tIdentityFile ~/.ssh/coding\n\tServerAliveInterval 60\n\tServerAliveCountMax 3\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u89e3\u91ca\u4e00\u4e0b\u4e0a\u8ff0\u914d\u7f6e\u6587\u4ef6\u7684\u542b\u4e49"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6bcf\u4e00\u9879\u914d\u7f6e\u6587\u4ef6\u7684\u542b\u4e49\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"man ssh_config"})," \u67e5\u770b\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://linux.die.net/man/5/ssh_config",children:"ssh_config(5) - Linux man page"}),"  Linux \u5e2e\u52a9\u6587\u4ef6"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://man.openbsd.org/ssh_config.5",children:"ssh_config(5)-OpenBSD"}),"  MacOS \u5e2e\u52a9\u6587\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fdb\u884c\u5728\u7ebf\u67e5\u8be2\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Host \u5e94\u586b\u5199\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u662f\u4f5c\u4e3ahosts\u7684\u522b\u79f0\u5b58\u5728"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Host: 192.168.1.?  #  \u914d\u7f6e\u6240\u6709 192.168.1.[0-9] \u7684\n   HostName: 192.168.1.3\n\nHost targaryen\n    HostName 192.168.1.10\n    User daenerys\n    Port 7654\n    IdentityFile ~/.ssh/targaryen.key\n\nHost: *\n   User: root # \u6240\u7528\u7f51\u7ad9\u90fd\u4f7f\u7528\u7684\u9ed8\u8ba4\u8d26\u53f7\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HostName"}),"\uff1a\u771f\u5b9e\u7684host\u5730\u5740"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"User"}),"\uff1a\u5efa\u7acb ssh \u8fde\u63a5\u6240\u7528\u7684\u8d26\u53f7\uff0c\u4e00\u822c\u5982\u679c\u662f\u8fdc\u7a0b\u767b\u5f55\u7684\u8bdd\u662f ",(0,i.jsx)(n.code,{children:"root"})," , \u7528\u4e8e ",(0,i.jsx)(n.code,{children:"git"})," \u62c9\u53d6\u4ee3\u7801\u7684\u8bdd\uff0c\u4e00\u822c\u662f ",(0,i.jsx)(n.code,{children:"git"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fde\u63a5\u670d\u52a1\u5668\u65f6\uff0c\u4f1a\u5c06 User \u548c HostName \u8fdb\u884c\u62fc\u63a5\uff0c\u5982 ",(0,i.jsx)(n.code,{children:"git@github.com"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"IdentityFile"}),"\uff1a\u79c1\u94a5\u5b58\u50a8\u7684\u5730\u5740"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AddKeysToAgent"})," : \u81ea\u52a8\u6dfb\u52a0\u79c1\u94a5\u5230 ",(0,i.jsx)(n.code,{children:"ssh-agent"})," \u4e2d\u53bb\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u591a\u8d26\u53f7\u7ba1\u7406",children:"\u591a\u8d26\u53f7\u7ba1\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"~/.ssh/config"})," \u6587\u4ef6\u5bf9\u591a\u4e2a ",(0,i.jsx)(n.code,{children:"git \u8d26\u53f7\u8fdb\u884c\u7ba1\u7406"}),"\uff0c\u5176\u672c\u8d28\u662f\u9488\u5bf9\u4e0d\u540c\u7684 Host \u4f7f\u7528\u4e0d\u540c\u7684\u79c1\u94a5\u8fdb\u884c\u9a8c\u8bc1\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\u9700\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u522b\u540d\uff0c\u8ba9 ssh \u80fd\u6839\u636e\u522b\u540d\u627e\u5230\u5bf9\u5e94\u7f51\u7ad9\u7684\u79c1\u94a5\u5730\u5740\uff0c\u8fd9\u79cd\u65b9\u5f0f\u548c\u670d\u52a1\u5668\u8def\u7531\u5339\u914d\u7684\u539f\u7406\u7c7b\u4f3c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone git@e.coding.net:datamate/demo.git # ssh \u65b9\u5f0f\uff0c\u6b64\u65f6\u5e76\u4e0d\u4f1a\u81ea\u52a8\u8bc6\u522b\u5bf9\u5e94\u7684 ~/.ssh/coding \u7684\u79c1\u94a5\u5730\u5740\ngit clone coding:datamate/demo.git # \u5339\u914d\u5230 coding \u89c4\u5219\ngit clone git@coding:datamate/demo.git # \u5339\u914d\u5230 coding \u89c4\u5219\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u8d77\u522b\u540d\u7684\u65b9\u5f0f\uff0c\u6839\u636e ",(0,i.jsx)(n.code,{children:"~/.ssh/config"})," \u6587\u4ef6\uff0c\u8ba9\u6211\u4eec\u627e\u5230\u4e0d\u540c ",(0,i.jsx)(n.code,{children:"Host"})," \u7684\u79c1\u94a5\u6587\u4ef6\u4f4d\u7f6e\uff0c\u90a3\u5bf9\u4e8e\u4e0d\u8d77\u522b\u540d\u7684\u65b9\u5f0f\uff0c\u6709\u6ca1\u6709\u65b9\u6cd5\u53ef\u4ee5\u505a\u5230\u8ba9\u7cfb\u7edf\u81ea\u52a8\u5339\u914d\u5230\u5bf9\u5e94\u7684\u79c1\u94a5\u5730\u5740\u5462? \u6709\uff0c\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"ssh-agent"})]}),"\n",(0,i.jsx)(n.h4,{id:"ssh-agent\u662f\u4ec0\u4e48",children:"ssh-agent\u662f\u4ec0\u4e48"}),"\n",(0,i.jsxs)(n.p,{children:["\u90a3\u4e48 ",(0,i.jsx)(n.code,{children:"ssh-agent"})," \u7684\u4f5c\u7528\u662f\u4ec0\u4e48\u5462\uff1f",(0,i.jsx)(n.strong,{children:"ssh-agent \u662f\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u79c1\u94a5\u7684\u4e34\u65f6\u6027\u7684 session \u670d\u52a1"}),"\uff0c\u5f53\u6211\u4eec\u4f7f\u7528\u79d8\u94a5\u767b\u5f55\u670d\u52a1\u5668\u65f6\uff0cssh-agent \u4f1a\u542f\u52a8\u4e00\u4e2a\u8fdb\u7a0b\u5728\u5185\u5b58\u91cc\u4fdd\u5b58\u8fd9\u4e9b\u79c1\u94a5\u3002\u4e4b\u540e\u6bcf\u6b21\u767b\u5f55\u65f6\uff0cssh \u5ba2\u6237\u7aef\u90fd\u4f1a\u8ddf ssh-agent \u8bf7\u6c42\u662f\u5426\u6709\u76ee\u6807\u4e3b\u673a\u7684\u79c1\u94a5\uff1b\u5982\u679c\u6709\uff0cssh \u5ba2\u6237\u7aef\u4fbf\u80fd\u76f4\u63a5\u767b\u5f55\u76ee\u6807\u4e3b\u673a\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ ssh-add -D # \u6e05\u7a7a ssh-agent \u7ba1\u7406\u7684\u79d8\u94a5\nAll identities removed.\n$ ssh root@195.85.35.153 -i myserver # \u767b\u5f55\u670d\u52a1\u5668\uff0c\u5e76\u4f7f\u7528\u6307\u5b9a\u7684\u79c1\u94a5 myserver\n$ ssh-add -l # \u6b64\u65f6\u89c2\u5bdf ssh-agent \u5b58\u50a8\u7684\u79d8\u94a5\uff0c\u53d1\u73b0 ssh\n2048 SHA256:6PVJJCR1H/3M977orF4EfJgk0d9bZoul538/MtzBXZY ppsteven@ppstevendeMacBook-Pro.local (RSA)\n$ ssh root@195.85.35.153 # \u6b64\u65f6\uff0c\u5c31\u7b97\u4e0d\u6307\u5b9a myserver \u79c1\u94a5\uff0c\u4e5f\u80fd\u6210\u529f\u767b\u5f55\u670d\u52a1\u5668\uff0c\u539f\u56e0\u662fssh\u5df2\u7ecf\u5728ssh-agent\u4e2d\u627e\u5230\u4e86\u5b58\u50a8\u7684\u79c1\u94a5\u3002\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u57fa\u672c\u547d\u4ee4",children:"\u57fa\u672c\u547d\u4ee4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh-agent bash # \u542f\u52a8 ssh-agent \u670d\u52a1\nssh-add -D # \u5220\u9664\u4e4b\u524d\u5b58\u50a8\u7684key\nssh-add -l # \u67e5\u770b\u5b58\u50a8\u7684key\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f\u7a7a\u7684\nssh-add ~/.ssh/id_rsa # \u6dfb\u52a0\u79c1\u94a5 id_rsa\nssh-add ~/.ssh/coding # \u6dfb\u52a0\u79c1\u94a5 coding\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u5982\u4f55\u6dfb\u52a0-ssh-agent",children:"\u5982\u4f55\u6dfb\u52a0 ssh-agent"}),"\n",(0,i.jsx)(n.p,{children:"\u624b\u52a8\u6dfb\u52a0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ssh-add ~/.ssh/coding\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6bcf\u6b21\u4f7f\u7528ssh\u65f6\u81ea\u52a8\u6dfb\u52a0"}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"~/.ssh/config"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"AddKeysToAgent yes # \u81ea\u52a8\u6dfb\u52a0\u79c1\u94a5\u5230 ssh-agent \u4e2d\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh root@demo.com # \u767b\u5f55\u6210\u529f\u540e\u4f1a\u81ea\u52a8\u6dfb\u52a0\nssh -T git@github.com # \u6d4b\u8bd5\u6210\u529f\u540e\u4f1a\u81ea\u52a8\u6dfb\u52a0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6d4b\u8bd5ssh\u662f\u5426\u8bbe\u7f6e\u6210\u529f",children:"\u6d4b\u8bd5ssh\u662f\u5426\u8bbe\u7f6e\u6210\u529f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# ssh -T \u540e\u9762\u7684\u540d\u5b57\u662f\u4e0a\u9762\u7684\u522b\u540d\n$ ssh -T github\nHi PPsteven! You've successfully authenticated, but GitHub does not provide shell access.\n(base)\n\n$ ssh -T coding\nCoding \u63d0\u793a: Hello ppsteven, You've connected to Coding.net via SSH. This is a personal key.\nppsteven\uff0c\u4f60\u597d\uff0c\u4f60\u5df2\u7ecf\u901a\u8fc7 SSH \u534f\u8bae\u8ba4\u8bc1 Coding.net \u670d\u52a1\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e2a\u4eba\u516c\u94a5\n(base)\n\n# \u4e0d\u4f7f\u7528\u522b\u540d\u65f6\n\n# \u7b2c\u4e00\u6b21\u6d4b\u8bd5\u7684\u65f6\u5019\uff0c\u9700\u8981\u6307\u5b9a\u79c1\u94a5\u4f4d\u7f6e\uff0c\u4e4b\u540e\u79c1\u94a5\u4f1a\u81ea\u52a8\u52a0\u5165 ssh-agent \u4e2d\n$ ssh -T git@e.coding.net -i ~/.ssh/coding \nCODING \u63d0\u793a: Hello ppsteven, You've connected to coding.net via SSH. This is a Personal Key.\nppsteven\uff0c\u4f60\u597d\uff0c\u4f60\u5df2\u7ecf\u901a\u8fc7 SSH \u534f\u8bae\u8ba4\u8bc1 coding.net \u670d\u52a1\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e2a\u4eba\u516c\u94a5.\n\u516c\u94a5\u6307\u7eb9\uff1a42:c6:f4:f6:39:1f:d7:84:e0:cb:19:a3:ad:25:62:20\n\n# \u79c1\u94a5\u5148\u52a0\u5165 ssh-agent \u4e2d\uff0c\u540e\u6d4b\u8bd5\n$ ssh-add ~/.ssh/coding\n$ ssh -T git@e.coding.net\nCODING \u63d0\u793a: Hello ppsteven, You've connected to coding.net via SSH. This is a Personal Key.\nppsteven\uff0c\u4f60\u597d\uff0c\u4f60\u5df2\u7ecf\u901a\u8fc7 SSH \u534f\u8bae\u8ba4\u8bc1 coding.net \u670d\u52a1\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e2a\u4eba\u516c\u94a5.\n\u516c\u94a5\u6307\u7eb9\uff1a42:c6:f4:f6:39:1f:d7:84:e0:cb:19:a3:ad:25:62:20\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u81ea\u52a8\u6dfb\u52a0\u79d8\u94a5\u7684\u51e0\u79cd\u65b9\u6cd5",children:"\u81ea\u52a8\u6dfb\u52a0\u79d8\u94a5\u7684\u51e0\u79cd\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4ec0\u4e48\u8981\u81ea\u52a8\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:"\u79d8\u94a5"})," \uff0c\u539f\u56e0\u662f ",(0,i.jsx)(n.code,{children:"ssh-agent"})," \u662f\u5c06\u6240\u6709\u7684\u79d8\u94a5\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u5f53\u7535\u8111\u91cd\u542f\u6216\u521d\u6b21\u542f\u52a8\u7684\u65f6\u5019\uff0cssh-agent \u4e2d\u5b58\u50a8\u7684\u79c1\u94a5\u4f1a\u88ab\u6e05\u7a7a\uff0c\u6211\u4eec\u8fd8\u662f\u9700\u8981\u505a ",(0,i.jsx)(n.code,{children:"\u4e00\u6b21"})," \u624b\u52a8\u6dfb\u52a0\u79c1\u94a5\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u65b9\u6848\u4e00\u4f7f\u7528-keychainmac-\u5f03\u7528",children:"\u65b9\u6848\u4e00\uff1a\u4f7f\u7528 keychain\uff08Mac-\u5f03\u7528\uff09"}),"\n",(0,i.jsx)(n.p,{children:"keychain \u662f Mac \u7535\u8111\u4e0a\u7684\u94a5\u5319\u4e32\u670d\u52a1\uff0c\u4f5c\u7528\u662f\u5b58\u50a8\u5bc6\u7801\u3001\u79d8\u94a5\uff0c\u8bc1\u4e66\u7b49\u4fe1\u606f\u3002Win \u548c Linux \u4e5f\u6709\u5bf9\u5e94\u7684\u673a\u5236\uff0c\u6ca1\u6709\u7814\u7a76\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u8981\u4fdd\u8bc1 ",(0,i.jsx)(n.code,{children:"config"})," \u91cc\u9762\u6709\u8fd9\u6837\u4e24\u6bb5\u4ee3\u7801\uff0cMac OS 10.12.2 \u4ee5\u4e0a\u7cfb\u7edf\u9700\u8981\uff0c\u4e0d\u7136\u7684\u8bdd\uff0c\u65e0\u6cd5\u6301\u4e45\u5316\u7684\u6dfb\u52a0\u5230\u94a5\u5319\u4e32\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'# ~/.ssh/config\n\n+ Host *  \n+   AddKeysToAgent yes # \u628a\u79c1\u94a5\u6dfb\u52a0\u5230 ssh-agent \u4e2d\n+   UseKeychain yes # Mac \u4e0a\u79d8\u94a5\u88ab\u6301\u4e45\u5316\u5230"\u94a5\u5319\u4e32"\u4e2d\uff0c\u4ee3\u8868\u4ece\u94a5\u5319\u4e32\u4e2d\u4f7f\u7528\u4fdd\u5b58\u7684\u79d8\u94a5\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6b64\u65f6\uff0c\u5f53\u4f60\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"ssh"})," \u540e\uff0c\u79c1\u94a5\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5230 ",(0,i.jsx)(n.strong,{children:"ssh-agent"}),"\u548c ",(0,i.jsx)(n.strong,{children:"\u94a5\u5319\u4e32"})," \u4e2d\uff0c\u4e0b\u9762\u5728mac\u4e2d\u7684 ",(0,i.jsx)(n.strong,{children:"\u94a5\u5319\u4e32"})," \u627e\u5230\u4e86\u6dfb\u52a0\u7684\u79c1\u94a5\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cMac\u4e0a\u4f7f\u7528 ssh-add -K /path/to/storekey \u5df2\u7ecf\u4e0d\u80fd\u76f4\u63a5\u5b58\u50a8\u79d8\u94a5\u4e86\uff0cmac \u53ea\u4f1a\u5b58\u50a8\u5e26 ",(0,i.jsx)(n.strong,{children:"passphrase"})," \u7684\u79d8\u94a5\uff0c\u5bf9\u4e8e\u4e0d\u5e26 ",(0,i.jsx)(n.strong,{children:"passphrase"})," \u9a8c\u8bc1\u7684\u79d8\u94a5\uff0cMac\u7684 KeyChain \u4e0d\u4f1a\u81ea\u52a8\u4fdd\u5b58\u3002\u53ef\u4ee5\u624b\u52a8\u5728 Mac \u7684\u94a5\u5319\u4e32\u4e2d\u52a0\u5165\uff0c\u7136\u540e\u901a\u8fc7 ssh-add -A \u6dfb\u52a0\u94a5\u5319\u4e32\u4e2d\u7684\u79d8\u94a5"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200222181451.png",alt:""})}),"\n",(0,i.jsx)(n.h4,{id:"\u65b9\u6848\u4e8c\u6dfb\u52a0\u5230\u542f\u52a8\u914d\u7f6e\u4e2d\u53bb\u901a\u7528",children:"\u65b9\u6848\u4e8c\uff1a\u6dfb\u52a0\u5230\u542f\u52a8\u914d\u7f6e\u4e2d\u53bb\uff08\u901a\u7528\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u76f4\u63a5\u5c06\u6240\u6709\u7684\u79d8\u94a5\u6dfb\u52a0\u5230 ",(0,i.jsx)(n.code,{children:"~/.ssh/config"})," \u4e2d"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Host *\n   IdentityFile path/to/key1\n   IdentityFile path/to/key2\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e Centos \u7cfb\u7edf\uff0c\u7531\u4e8e ",(0,i.jsx)(n.code,{children:"ssh-agent"})," \u4e0d\u4f1a\u81ea\u52a8\u542f\u52a8\uff0c\u6240\u4ee5\u9700\u8981\u5355\u72ec\u8fd0\u884c ",(0,i.jsx)(n.code,{children:'eval "$(ssh-agent -s)"'}),"\uff0c\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://medium.com/@medley56_82999/i-recently-went-down-a-rabbit-hole-debugging-some-ssh-problems-cross-platform-and-wanted-to-make-bc6890eaf758",children:"Ubuntu\u3001Mac\u3001Centos\u4e0bssh-agent \u5bf9\u6bd4"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ eval "$(ssh-agent -s)"\n> Agent pid 59566\n$ ssh-add ~/.ssh/id_rsa\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u4e00\u4e2a\u95ee\u9898\uff0c\u5e94\u8be5\u628a\u8fd9\u4e00\u6bb5\u4ee3\u7801\u6dfb\u52a0\u5230\u54ea\u91cc\u3002\u8fd9\u91cc\u7684\u5efa\u8bae\u662f\u52a0\u5230\u6216\u8005 ",(0,i.jsx)(n.code,{children:".profile"})," \uff0c\u4e0d\u5efa\u8bae\u76f4\u63a5\u6dfb\u52a0\u5230 ",(0,i.jsx)(n.code,{children:"~/.bashrc"})," \u6216 ",(0,i.jsx)(n.code,{children:"~/.zshrc"})," \u4e2d\uff0c\u56e0\u4e3a\u8fd9\u6837\u6bcf\u6b21\u6253\u5f00\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"SHELL"})," \u5c31\u4f1a\u5f00\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"ssh-agent"})," \u670d\u52a1\uff0c\u6700\u7ec8\u4f1a\u62d6\u57ae\u670d\u52a1\u5668\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u7684\u5730\u65b9\u53c2\u8003\u6211\u7684\u53e6\u4e00\u7bc7\u6559\u7a0b\uff1a",(0,i.jsx)(n.code,{children:"linux \u73af\u5883\u53d8\u91cf\u6267\u884c\u987a\u5e8f"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5982\u4f55\u6dfb\u52a0\u591a\u8d26\u53f7"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://segmentfault.com/a/1190000016302881",children:"\u5982\u4f55\u8bbe\u7f6e\u591a\u4e2aGit\u5e10\u53f7"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://help.coding.net/docs/project/features/ssh.html?_ga=2.7248818.1438703294.1578809110-58920171.1578071988",children:"coding\u5e2e\u52a9\u4e2d\u5fc3"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u662f google \u51fa\u6765\u7684\u89e3\u7b54\uff0c\u8d28\u91cf\u5f88\u9ad8\uff0c\u5efa\u8bae\u53c2\u8003"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/",children:"How to manage multiple GitHub accounts on a single machine with SSH keys"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u81ea\u52a8\u6dfb\u52a0ssh\u8d26\u53f7"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://segmentfault.com/q/1010000000835302",children:"\u662f\u5426\u5fc5\u987b\u6bcf\u6b21\u6dfb\u52a0ssh-add (\u63a8\u8350\u770b)"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",children:"Generating a new SSH key and adding it to the ssh-agent (github \u5b98\u65b9\u63a8\u8350\u6d41\u7a0b)"})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(96540);const c={},t=i.createContext(c);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);