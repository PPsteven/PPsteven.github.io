"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[3358],{74092:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var a=s(74848),r=s(28453);const t={title:"MySQL \u5e38\u7528\u547d\u4ee4",tags:["MySQL"],comments:!1,date:new Date("2020-03-01T22:38:46.000Z"),categories:["MySQL"],cover:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201025170015.png",slug:"/pages/48af42/"},l=void 0,d={id:"\u6280\u672f\u7b14\u8bb0/\u8fd0\u7ef4/DB/MySQL \u5e38\u7528\u547d\u4ee4",title:"MySQL \u5e38\u7528\u547d\u4ee4",description:"\u6162\u6162\u603b\u7ed3\u5e38\u7528\u7684\u7684mysql \u547d\u4ee4\uff0c\u770b\u505a\u662f\u5e73\u65f6\u5de5\u4f5c\u7684\u201c\u7f13\u5b58\u201d",source:"@site/docs/01.\u6280\u672f\u7b14\u8bb0/03.\u8fd0\u7ef4/04.DB/03.MySQL \u5e38\u7528\u547d\u4ee4.md",sourceDirName:"01.\u6280\u672f\u7b14\u8bb0/03.\u8fd0\u7ef4/04.DB",slug:"/pages/48af42/",permalink:"/docs/pages/48af42/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01.\u6280\u672f\u7b14\u8bb0/03.\u8fd0\u7ef4/04.DB/03.MySQL \u5e38\u7528\u547d\u4ee4.md",tags:[{label:"MySQL",permalink:"/docs/tags/my-sql"}],version:"current",sidebarPosition:3,frontMatter:{title:"MySQL \u5e38\u7528\u547d\u4ee4",tags:["MySQL"],comments:!1,date:"2020-03-01T22:38:46.000Z",categories:["MySQL"],cover:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20201025170015.png",slug:"/pages/48af42/"},sidebar:"techwiki",previous:{title:"MySQL \u9519\u8bef\u8bb0\u5f55",permalink:"/docs/pages/fccc5c/"},next:{title:"SQL\u4f18\u5316--Explain",permalink:"/docs/pages/d2d9a2/"}},c={},o=[{value:"\u4fee\u6539\u5bc6\u7801\u5f3a\u5ea6",id:"\u4fee\u6539\u5bc6\u7801\u5f3a\u5ea6",level:2},{value:"yum\u5b89\u88c5mysql \u4e0b\u8f7d\u901f\u5ea6\u6162",id:"yum\u5b89\u88c5mysql-\u4e0b\u8f7d\u901f\u5ea6\u6162",level:2},{value:"\u521b\u5efa\u65b0\u7684\u7528\u6237",id:"\u521b\u5efa\u65b0\u7684\u7528\u6237",level:2},{value:"\u6570\u636e\u5b57\u5178\u663e\u793a",id:"\u6570\u636e\u5b57\u5178\u663e\u793a",level:2},{value:"\u590d\u5236\u8868\u8bb0\u5f55",id:"\u590d\u5236\u8868\u8bb0\u5f55",level:2}];function i(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u6162\u6162\u603b\u7ed3\u5e38\u7528\u7684\u7684mysql \u547d\u4ee4\uff0c\u770b\u505a\u662f\u5e73\u65f6\u5de5\u4f5c\u7684\u201c\u7f13\u5b58\u201d"}),"\n",(0,a.jsx)(n.h2,{id:"\u4fee\u6539\u5bc6\u7801\u5f3a\u5ea6",children:"\u4fee\u6539\u5bc6\u7801\u5f3a\u5ea6"}),"\n",(0,a.jsx)(n.p,{children:"\u4fee\u6539\u5bc6\u7801\u5f3a\u5ea6\u4e00\u822c\u662fmysql5.7 \u5347\u7ea7\u5230 mysql8.0\uff0c\u6216\u8005\u662f\u521a\u521a\u5b89\u88c5mysql8.0\u65f6\u5019\u5f88\u5bb9\u6613\u78b0\u5230\u7684\u95ee\u9898\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"# \u67e5\u770b\u5bc6\u7801\u9700\u8981\u6ee1\u8db3\u7684\u6761\u4ef6\nSHOW VARIABLES LIKE 'validate_password%'; \n\n# validate_password_policy\u4ee3\u8868\u5bc6\u7801\u7b56\u7565\uff0c\u9ed8\u8ba4\u662f1\uff1a\u7b26\u5408\u957f\u5ea6\uff0c\u4e14\u5fc5\u987b\u542b\u6709\u6570\u5b57\uff0c\u5c0f\u5199\u6216\u5927\u5199\u5b57\u6bcd\uff0c\u7279\u6b8a\u5b57\u7b26\u3002\u8bbe\u7f6e\u4e3a0\u5224\u65ad\u5bc6\u7801\u7684\u6807\u51c6\u5c31\u57fa\u4e8e\u5bc6\u7801\u7684\u957f\u5ea6\u4e86\u3002\u4e00\u5b9a\u8981\u5148\u4fee\u6539\u4e24\u4e2a\u53c2\u6570\u518d\u4fee\u6539\u5bc6\u7801\nset global validate_password.policy=0;\n\n# validate_password_length\u4ee3\u8868\u5bc6\u7801\u957f\u5ea6\uff0c\u6700\u5c0f\u503c\u4e3a4\nset global validate_password.length=4; \n"})}),"\n",(0,a.jsx)(n.h2,{id:"yum\u5b89\u88c5mysql-\u4e0b\u8f7d\u901f\u5ea6\u6162",children:"yum\u5b89\u88c5mysql \u4e0b\u8f7d\u901f\u5ea6\u6162"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# \u5907\u4efd\u7cfb\u7edf\u81ea\u5e26yum\u6e90\u914d\u7f6e\u6587\u4ef6\nmv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n# \u4e0b\u8f7dailiyun\u7684yum\u6e90\u914d\u7f6e\u6587\u4ef6(\u963f\u91cc\u4e91\u901f\u5ea6\u6bd4\u8f83\u5feb)\nwget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n# \u751f\u6210\u7f13\u5b58\nyum makecache\n# yum \u5347\u7ea7\nyum -y update\n# \u5b89\u88c5yum\nyum install -y mysql-server\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u521b\u5efa\u65b0\u7684\u7528\u6237",children:"\u521b\u5efa\u65b0\u7684\u7528\u6237"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"# \u521b\u5efa\u65b0\u7528\u6237 reader01\uff0c \u8d4b\u4e88\u5bc6\u7801'onlyread@123'\nCREATE USER `reader01`@`%` IDENTIFIED by 'onlyread@123';\n# \u8d4b\u4e88 select \u6743\u9650\uff0c \u8d4b\u4e88nongwei_syn\u6240\u6709\u6570\u636e\u8868\u7684\u8bbf\u95ee\u6743\u9650\nGRANT SELECT ON `nongwei_syn`.* TO `reader01`@`%` ;\n# \u964d\u4f4e mysql \u52a0\u5bc6\u89c4\u5219\nALTER USER `reader01`@`%` IDENTIFIED WITH mysql_native_password BY 'onlyread@123';\n# \u5237\u65b0\u4e00\u4e0b\u6743\u9650\nflush privileges;\n# \u67e5\u770b\u7528\u6237\u7684\u6743\u9650\nshow grants for reader01;\nGRANT USAGE ON *.* TO `reader01`@`%`\nGRANT SELECT ON `nongwei_syn`.* TO `reader01`@`%`\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6570\u636e\u5b57\u5178\u663e\u793a",children:"\u6570\u636e\u5b57\u5178\u663e\u793a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u663e\u793a\u5b57\u6bb5\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u542bCOMMENT\uff09"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"show full columns from d_dbname.t_table_name\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200322184343.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"\u5efa\u8bae\u6bcf\u6b21\u5efa\u8868\u7684\u65f6\u5019\uff0c\u90fd\u5e26\u4e0aCOMMENT"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e00\u5f00\u59cb\u5e76\u6ca1\u6709\u8fd9\u6837\u505a\u7684\u8bdd\uff0c\u9700\u8981\u501f\u52a9 ",(0,a.jsx)(n.code,{children:"alter"})," \u6765\u6dfb\u52a0 ",(0,a.jsx)(n.code,{children:"COMMENT"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"alter table `d_dbname`.`t_table_name` modify column foodtype   varchar(20)                              COMMENT '\u54c1\u79cd';\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u663e\u793a\u5efa\u8868\u7684SQL"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"show create table  `d_dbname`.`t_table_name`\n\n# output:\nCREATE TABLE `t_vegnet_price_202003` (\n  `id` int NOT NULL AUTO_INCREMENT COMMENT '\u5e8f\u53f7',\n  `foodtype` varchar(20) DEFAULT NULL COMMENT '\u54c1\u79cd',\n  `market` varchar(30) DEFAULT NULL COMMENT '\u6279\u53d1\u5e02\u573a',\n  `lprice` float(10,2) DEFAULT NULL COMMENT '\u6700\u4f4e\u4ef7',\n  `hprice` float(10,2) DEFAULT NULL COMMENT '\u6700\u9ad8\u4ef7',\n  `avgprice` float(10,2) DEFAULT NULL COMMENT '\u5e73\u5747\u4ef7',\n  `unit` varchar(20) DEFAULT NULL COMMENT '\u8ba1\u91cf\u5355\u4f4d',\n  `date` varchar(10) DEFAULT NULL COMMENT '\u65e5\u671f',\n  `pagenum` int DEFAULT NULL COMMENT '\u9875\u7801',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '\u521b\u5efa\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `date` (`date`,`foodtype`,`market`)\n) ENGINE=InnoDB AUTO_INCREMENT=42501 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u590d\u5236\u8868\u8bb0\u5f55",children:"\u590d\u5236\u8868\u8bb0\u5f55"}),"\n",(0,a.jsx)(n.p,{children:"\u590d\u5236\u5b8c\u6574\u4e00\u884c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- \u5b8c\u6574\u590d\u5236\u4e00\u884c\uff08id\u552f\u4e00\uff0c\u4e0d\u53ef\u76f4\u63a5\u590d\u5236\uff09\ninsert into users (account, password, name, team_id, subteam_id, mail, phone, role, role_level, status)\n\tselect account, password, name, team_id, subteam_id, mail, phone, role, role_level, status from users where id = 90;\n-- \u590d\u5236\u5e76\u4fee\u6539\u90e8\u5206\u4fe1\u606f\ninsert into users (account, password, name, team_id, subteam_id, mail, phone, role, role_level, status)\n\tselect 'tom', password, name, team_id, subteam_id, 'tom@fake.com', 13877777777, role, 2, status from users where id = 90;\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u590d\u5236\u90e8\u5206\u5b57\u6bb5"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u5fc5\u987b\u4f7f\u7528\u522b\u540d\uff0c\u4e0d\u7136\u66f4\u65b0\u7684\u8868\u548c\u88ab\u66f4\u65b0\u7684\u8868\u76f8\u540c\u4f1a\u62a5\u9519"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"update users set password = (\n    select a.password from (\n    \tselect password from users id = 2\n    ) a\n) where id = 3;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u4e0b\u5c31\u662f\u4f1a\u62a5\u9519\u7684"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"update users set password = (\n   select password from users id = 2\n) where id = 3;\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var a=s(96540);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);