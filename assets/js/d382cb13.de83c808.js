"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[3793],{14351:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var i=l(74848),s=l(28453);const d={title:"0x11.\u5bb6\u5ead\u670d\u52a1\u5668\u6298\u817e\u8bb0|\u5185\u7f51\u7a7f\u900f\u65b9\u6848|IPV6",categories:["\u73af\u5883\u7ba1\u7406","\u5bb6\u7528\u670d\u52a1\u5668\u6298\u817e\u8bb0"],date:new Date("2023-07-12T02:09:54.000Z"),slug:"old-computer-adventures/ipv6"},r=void 0,c={permalink:"/blog/old-computer-adventures/ipv6",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/01.\u5bb6\u7528\u670d\u52a1\u5668\u6298\u817e\u8bb0/11.\u5185\u7f51\u7a7f\u900f\u65b9\u6848-IPV6.md",source:"@site/blog/01.\u5bb6\u7528\u670d\u52a1\u5668\u6298\u817e\u8bb0/11.\u5185\u7f51\u7a7f\u900f\u65b9\u6848-IPV6.md",title:"0x11.\u5bb6\u5ead\u670d\u52a1\u5668\u6298\u817e\u8bb0|\u5185\u7f51\u7a7f\u900f\u65b9\u6848|IPV6",description:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981\u5185\u7f51\u7a7f\u900f\uff1f\u672c\u8d28\u4e0a\u662f\u7531\u4e8eIPV4\u6570\u91cf\u4e0d\u591f\uff0c\u6211\u4eec\u65e0\u6cd5\u7533\u8bf7\u5230\u516c\u7f51IPV4\uff0c\u7531\u4e8e\u5916\u7f51\u65e0\u6cd5\u901a\u8fc7IP\u6765\u76f4\u63a5\u5b9a\u4f4d\u5230\u6211\u4eec\u5bb6\u4e2d\u7684\u670d\u52a1\u5668\uff0c\u6240\u4ee5\u6211\u4eec\u4e0a\u8ff0\u4ecb\u7ecd\u4e86N\u79cd\u5185\u7f51\u7a7f\u900f\u65b9\u6848\u53bb\u89e3\u51b3\u8fd9\u4e00\u4e2a\u95ee\u9898\u3002",date:"2023-07-12T02:09:54.000Z",tags:[],readingTime:10.855,hasTruncateMarker:!0,authors:[],frontMatter:{title:"0x11.\u5bb6\u5ead\u670d\u52a1\u5668\u6298\u817e\u8bb0|\u5185\u7f51\u7a7f\u900f\u65b9\u6848|IPV6",categories:["\u73af\u5883\u7ba1\u7406","\u5bb6\u7528\u670d\u52a1\u5668\u6298\u817e\u8bb0"],date:"2023-07-12T02:09:54.000Z",slug:"old-computer-adventures/ipv6"},unlisted:!1,prevItem:{title:"leetcode-tool \u4e00\u4e2a\u8ba9\u4f60\u66f4\u65b9\u4fbf\u5237\u9898\u7684\u5de5\u5177",permalink:"/blog/leetcode-tool-intro"},nextItem:{title:"0x9.\u5bb6\u5ead\u670d\u52a1\u5668\u6298\u817e\u8bb0|\u5185\u7f51\u7a7f\u900f\u65b9\u6848|Cloudflare Tunnel",permalink:"/blog/old-computer-adventures/cloudflare-tunnel"}},t={authorsImageUrls:[]},h=[{value:"\u5149\u732b\u5f00\u542fIPV6 \u8bbe\u7f6e",id:"\u5149\u732b\u5f00\u542fipv6-\u8bbe\u7f6e",level:2},{value:"1. \u83b7\u53d6\u8d85\u7ba1\u8d26\u53f7\u5bc6\u7801",id:"1-\u83b7\u53d6\u8d85\u7ba1\u8d26\u53f7\u5bc6\u7801",level:3},{value:"2. \u5149\u732b\u8bbe\u7f6e",id:"2-\u5149\u732b\u8bbe\u7f6e",level:3},{value:"3. \u8def\u7531\u5668\u8bbe\u7f6e",id:"3-\u8def\u7531\u5668\u8bbe\u7f6e",level:3},{value:"\u6d4b\u8bd5IPV6",id:"\u6d4b\u8bd5ipv6",level:2},{value:"IPV6 \u5916\u90e8\u7f51\u7edc\u8bbf\u95ee\u6d4b\u8bd5",id:"ipv6-\u5916\u90e8\u7f51\u7edc\u8bbf\u95ee\u6d4b\u8bd5",level:3},{value:"IPV6 \u5185\u7f51\u8bbf\u95ee\u6d4b\u8bd5",id:"ipv6-\u5185\u7f51\u8bbf\u95ee\u6d4b\u8bd5",level:3},{value:"\u8f85\u52a9\u8d44\u6599",id:"\u8f85\u52a9\u8d44\u6599",level:3},{value:"IPV6 DDNS",id:"ipv6-ddns",level:2},{value:"IPV4 \u5ba2\u6237\u7aef-&gt; IPV6\u670d\u52a1\u5668\u7aef",id:"ipv4-\u5ba2\u6237\u7aef--ipv6\u670d\u52a1\u5668\u7aef",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:3},{value:"\u4e3a\u4ec0\u4e48\u914d\u7f6e\u4e86\u8fd8\u662f\u65e0\u6cd5\u4ee3\u7406",id:"\u4e3a\u4ec0\u4e48\u914d\u7f6e\u4e86\u8fd8\u662f\u65e0\u6cd5\u4ee3\u7406",level:3},{value:"SSL/TLS \u662f\u5426\u8bbe\u7f6e\u4e3aFULL",id:"ssltls-\u662f\u5426\u8bbe\u7f6e\u4e3afull",level:4},{value:"\u7aef\u53e3\u4e0d\u80fd\u4f7f\u752880/443",id:"\u7aef\u53e3\u4e0d\u80fd\u4f7f\u752880443",level:4},{value:"\u66f4\u6539cloudlfare \u56de\u6eaf\u7aef\u53e3",id:"\u66f4\u6539cloudlfare-\u56de\u6eaf\u7aef\u53e3",level:3},{value:"\u603b\u7ed3 &amp; \u6548\u679c",id:"\u603b\u7ed3--\u6548\u679c",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981\u5185\u7f51\u7a7f\u900f\uff1f\u672c\u8d28\u4e0a\u662f\u7531\u4e8eIPV4\u6570\u91cf\u4e0d\u591f\uff0c\u6211\u4eec\u65e0\u6cd5\u7533\u8bf7\u5230\u516c\u7f51IPV4\uff0c\u7531\u4e8e\u5916\u7f51\u65e0\u6cd5\u901a\u8fc7IP\u6765\u76f4\u63a5\u5b9a\u4f4d\u5230\u6211\u4eec\u5bb6\u4e2d\u7684\u670d\u52a1\u5668\uff0c\u6240\u4ee5\u6211\u4eec\u4e0a\u8ff0\u4ecb\u7ecd\u4e86N\u79cd\u5185\u7f51\u7a7f\u900f\u65b9\u6848\u53bb\u89e3\u51b3\u8fd9\u4e00\u4e2a\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u7f51\u7a7f\u900f\u7531\u4e8e\u5176\u6280\u672f\u7279\u70b9\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u7a7f\u900f\u6210\u529f\uff0c\u6216\u662f\u6210\u529f\u540e\u901f\u5ea6\u5f88\u6162\u7684\u60c5\u51b5\uff0c\u57fa\u672c\u4e0a\u96be\u4ee5\u8dd1\u6ee1\u7f51\u7edc\u5e26\u5bbd\u3002\u4e0b\u9762\u4ecb\u7ecd\u7684IPV6\u65b9\u6848\u662f\u53ef\u4ee5\u89e3\u51b3\u901f\u5ea6\u4e0a\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8eipv6 \u57fa\u672c\u4e0a\u662f\u7b97\u662f\u7528\u4e4b\u4e0d\u7aed\u7684\uff0c\u6240\u4ee5\u73b0\u5728\u5f88\u5bb9\u6613\u7533\u8bf7\u5230IPV6\u5730\u5740\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5149\u732b\u5f00\u542fipv6-\u8bbe\u7f6e",children:"\u5149\u732b\u5f00\u542fIPV6 \u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u867d\u7136IPV6\u5df2\u7ecf\u63a8\u5e7f\u4e86\u5f88\u591a\u5e74\uff0c\u5f88\u591a\u7f51\u7ad9\u4e5f\u662f\u53f7\u79f0\u63a5\u5165\u4e86IPV6\uff0c\u4f46\u662f\u4ece\u5927\u90e8\u5206\u573a\u666f\u5b9e\u6d4b\u4e0b\u6765\u3002\u8f66\u7ad9\uff0c\u5496\u5561\u9986\uff0c\u56fe\u4e66\u9986\uff0c\u5c45\u6c11\u5bb6\u4e2d\u7684WIFI\u9ed8\u8ba4\u90fd\u662f\u4e0d\u652f\u6301IPV6\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5f88\u5927\u7684\u4e00\u4e2a\u539f\u56e0\u662f\u8fd0\u8425\u5546\u76ee\u524d\u662f\u9650\u5236\u5c45\u6c11\u4f7f\u7528IPV6\u8bbe\u5907\u7684\uff0c\u5bb6\u4e2d\u7684\u5149\u732b\u662f\u9ed8\u8ba4\u5173\u95edIPV6\u529f\u80fd\uff0c\u6240\u4ee5\u7b2c\u4e00\u6b65\u6211\u4eec\u9700\u8981\u7ed9\u5149\u732b\u5f00\u542fIPV6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u83b7\u53d6\u8d85\u7ba1\u8d26\u53f7\u5bc6\u7801",children:"1. \u83b7\u53d6\u8d85\u7ba1\u8d26\u53f7\u5bc6\u7801"}),"\n",(0,i.jsx)(n.p,{children:"\u5317\u4eac\u79fb\u52a8\u7684\u8d85\u7ba1\u8d26\u53f7\u5bc6\u7801\u662f\u516c\u5f00\u7684"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u8d26\u53f7\uff1aCMCCAdmin\n\u5bc6\u7801\uff1aaDm8H%MdA\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\u5f88\u9057\u61be\uff0c\u76f4\u63a5\u4f7f\u7528\u4e0a\u8ff0\u5bc6\u7801\u5e76\u4e0d\u80fd\u767b\u5f55\u7cfb\u7edf\u3002\u9700\u8981\u8054\u7cfb\u88c5\u5bbd\u5e26\u7684\u5e08\u5085\uff0c\u5e2e\u4f60\u7533\u8bf7\u5f00\u542f\u8d85\u7ba1\u8d26\u53f7\u3002\u5728\u5f00\u542f\u8d85\u7ba1\u8d26\u53f7\u540e\u5c31\u53ef\u4ee5\u7528\u4e0a\u8ff0\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\u4e86\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u5149\u732b\u8bbe\u7f6e",children:"2. \u5149\u732b\u8bbe\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u5149\u732b\u9700\u8981\u5c06\u8fde\u63a5\u540d\u79f0\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.strong,{children:"2_INTERNET_R_VID_10"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7ecf\u8fc7\u5b9e\u8df5\u53d1\u73b0\uff0c\u8bbe\u7f6e\u4e86\u6ca1\u6709\u53cd\u5e94\uff0c\u67e5\u8d44\u6599\u53d1\u73b0 ",(0,i.jsx)(n.strong,{children:"1_TR069_R_VID_4003"})," \u662f\u79fb\u52a8\u9ed8\u8ba4\u7684\u534f\u8bae\uff0c\u79fb\u52a8\u901a\u8fc7\u5b83\u53ef\u4ee5\u4e0b\u53d1\u914d\u7f6e\u6765\u8fdc\u7a0b\u63a7\u5236\u5149\u732b\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u59d1\u4e14\u5c31\u6309\u6b65\u9aa4\u70b9\u4e00\u904d\uff0c\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.strong,{children:"2_INTERNET_R_VID_10"}),"\uff08\u867d\u7136\u6ca1\u53cd\u5e94\uff09"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230712023031479",src:l(26681).A+"",width:"1522",height:"1310"})}),"\n",(0,i.jsx)(n.p,{children:"\u5173\u95edIPV6\u9632\u706b\u5899\uff0c\u8fd9\u91cc\u6ca1\u6709\u8d85\u7ba1\u6839\u672c\u5173\u4e0d\u4e86\uff0c\u7f51\u4e0a\u6709\u4e00\u4e9b\u5947\u6280\u6deb\u5de7\u53ef\u4ee5\u5173\u95ed\uff0c\u5b9e\u8df5\u540e\u4e0d\u8d77\u4f5c\u7528\uff0c\u8fd8\u662f\u8001\u8001\u5b9e\u5b9e\u7528\u8d85\u7ba1\u8d26\u53f7\u5173\u5427\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230712023507607",src:l(98118).A+"",width:"1960",height:"1298"})}),"\n",(0,i.jsx)(n.h3,{id:"3-\u8def\u7531\u5668\u8bbe\u7f6e",children:"3. \u8def\u7531\u5668\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4f7f\u7528\u7684\u662f\u5c0f\u7c73\u8def\u7531\u5668\uff0c\u5f00\u542fIPV6\uff0c\u5e76\u540c\u65f6\u5173\u95ed\u9632\u706b\u5899\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230712023724514",src:l(35268).A+"",width:"1438",height:"904"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6d4b\u8bd5ipv6",children:"\u6d4b\u8bd5IPV6"}),"\n",(0,i.jsx)(n.h3,{id:"ipv6-\u5916\u90e8\u7f51\u7edc\u8bbf\u95ee\u6d4b\u8bd5",children:"IPV6 \u5916\u90e8\u7f51\u7edc\u8bbf\u95ee\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5f00 ",(0,i.jsx)(n.a,{href:"http://www.test-ipv6.com/",children:"http://www.test-ipv6.com/"})," \uff0c\u5982\u679c\u80fd\u6210\u529f\u83b7\u53d6\u516c\u7f51IPV6\u5730\u5740\uff082409\u5f00\u5934\uff09\uff0c\u5219\u4ee3\u8868\u62e5\u6709IPV6\u8bbf\u95ee\u80fd\u529b\uff0c\u4e0d\u8fc7\u522b\u5f00\u5fc3\u592a\u65e9\uff0c\u4e0d\u4e00\u5b9a\u80fd\u8bbf\u95ee\u5230\u4f60\u81ea\u5df1\u5bb6\u7684\u670d\u52a1\u5668\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230712024805104",src:l(95760).A+"",width:"5004",height:"1070"})}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u4e00\u79cd\u6d4b\u8bd5\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u901a\u8fc7 ping6 \u53bb\u6d4b\u8bd5\u80fd\u5426ping\u901a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ping6 2409:xxxxxxxxxxxxxxxxxxxxxxx\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\u80fdping\u901a\u4e5f\u4e0d\u4fdd\u9669\uff0c\u56e0\u4e3a\u6b64\u65f6\u4f60\u662f\u5728\u672c\u5730ping\u7684\uff0c\u6709\u53ef\u80fd\u672c\u5730\u80fdping\u901aipv6\u5730\u5740\uff0c\u4f46\u662f\u5916\u90e8\u4f9d\u65e7\u88ab\u9632\u706b\u5899\u963b\u6321\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"ipv6-\u5185\u7f51\u8bbf\u95ee\u6d4b\u8bd5",children:"IPV6 \u5185\u7f51\u8bbf\u95ee\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://ipw.cn/ipv6ping/",children:"IPv6 Ping \u6d4b\u8bd5"})," \u8fd9\u4e2a\u7f51\u5740\u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8fdc\u7a0b\u8bbf\u95ee\u516c\u7f51IPV6\u7684\u8fde\u901a\u6027\u6d4b\u8bd5\u3002\u5982\u679c\u8fd9\u4e2a\u7f51\u7ad9\u80fd\u6d4b\u8bd5\u6210\u529f\uff0c\u90a3\u4e48\u606d\u559c\u4f60\uff0c\u4f60\u5df2\u7ecf\u6210\u529f\u6253\u901a\u4e86IPV6\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5185\u7f51\u7a7f\u900f\u4e86\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230712031442507",src:l(90908).A+"",width:"2240",height:"1900"})}),"\n",(0,i.jsx)(n.h3,{id:"\u8f85\u52a9\u8d44\u6599",children:"\u8f85\u52a9\u8d44\u6599"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u6bcf\u4e2a\u5730\u533a\u7684\u9650\u5236\u4e0d\u540c\uff0c\u5982\u679c\u9047\u5230\u65e0\u6cd5\u89e3\u51b3\u7684\u60c5\u5f62\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u8d44\u6599\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.jerry.ink/2022/06/24/53/",children:"\u5149\u732b\u6539\u6865\u67b6+\u8def\u7531\u5668\u62e8\u53f7\u5b9e\u73b0IPV6"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.jixiaob.cn/?post=78",children:"\u5149\u732b\u6539\u6865\u67b6+\u8def\u7531\u5668\u62e8\u53f7\u5b9e\u73b0IPV6-\u65b0\u5efa\u8fde\u63a5"})}),"\n",(0,i.jsx)(n.p,{children:"\u79fb\u52a8\u5149\u732b\u65e0\u6cd5\u8bbe\u7f6e\u4e3a\u6865\u63a5\uff0c\u5931\u8d25\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://blog.51cto.com/fengyege/5950834",children:"\u5149\u732b\u5f00\u542fTelnet\uff0c\u6539ip6table\u89e3\u9664\u9632\u706b\u5899\u9650\u5236"}),"\n\u5b9e\u6d4b\u4e0b\u6765\uff0c\u7b2c\u4e00\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u8d85\u7ba1\u3002\u7b2c\u4e8c\uff0c\u7533\u8bf7\u4e0b\u7684\u8d85\u7ba1\u4e5f\u662f\u5047\u8d85\u7ba1\uff0c\u6ca1\u6709Telnet\u5f00\u542f\u7684\u9009\u9879\uff0c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://pve.sqlsec.com/9/5/",children:"\u8d8a\u6743\u8bbf\u95ee+\u5220\u9664TR069"}),"\n\u8f83\u4e3a\u590d\u6742\uff0c\u65e0\u6cd5\u5220\u9664TR069"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ipv6-ddns",children:"IPV6 DDNS"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u8ff0\u83b7\u53d6\u7684IPV6\u4e0d\u662f\u56fa\u5b9a\u516c\u7f51IP\uff0c\u662f\u4f1a\u968f\u65f6\u6539\u53d8\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7DDNS\uff0c\u5373\u901a\u8fc7\u57df\u540d\u7684\u65b9\u5f0f\uff0c\u5c06\u52a8\u6001\u7684IPV6\u7ed1\u5b9a\u5230\u56fa\u5b9a\u57df\u540d\u4e0a\u5c31\u80fd\u5b9e\u73b0\u516c\u7f51IPV6\u7684\u6548\u679c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u7ed9\u51fa ddns \u7684 docker-compose.yaml \u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"version: '3'\nservices:\n  ddns:\n    image: newfuture/ddns\n    container_name: ddns\n    restart: always\n    volumes:\n      - ./config.json:/config.json\n    network_mode: host\n"})}),"\n",(0,i.jsx)(n.p,{children:"config.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "id": "",\n  "token": "cloudflare\u7684token",\n  "dns": "cloudflare",\n  "ipv4": [],\n  "ipv6": ["a.top", "b.world"],\n  "index6": "default",\n  "ttl": 600,\n  "proxy": "DIRECT",\n  "debug": true\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u6211\u7684\u57df\u540d\u670d\u52a1\u5546\u662f\u7ed1\u5b9a\u7684cloudflare\uff0c\u5c31\u7ed9\u51fa\u4e0a\u8ff0\u793a\u4f8b\u3002\u5177\u4f53\u7684token\u9700\u8981\u8fdb\u4e00\u6b65\u53c2\u8003 newfuture/ddns \u7684\u5e2e\u52a9\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540eping\u4e00\u4e0b\u8bd5\u8bd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ping6 a.top\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ipv4-\u5ba2\u6237\u7aef--ipv6\u670d\u52a1\u5668\u7aef",children:"IPV4 \u5ba2\u6237\u7aef-> IPV6\u670d\u52a1\u5668\u7aef"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u5df2\u7ecf\u63d0\u5230\u4e86\uff0c\u652f\u6301IPV6\u7684\u7f51\u7edc\u975e\u5e38\u5c11\uff0c\u9664\u4e86\u624b\u673a\u6d41\u91cf\uff0c\u5927\u90e8\u5206\u7f51\u7edc\u73af\u5883\u662f\u4e0d\u652f\u6301IPV6\u89e3\u6790\u80fd\u529b\u7684\u3002\u90a3\u4e48\u8be5\u5982\u4f55\u8ba9IPV4 Only \u73af\u5883\u6210\u529f\u8bbf\u95eeIPV6\u670d\u52a1\u5668\u5462\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u5957\u7528CDN\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5373\u6211\u4eec\u901a\u8fc7\u8bbf\u95eeCDN\u8282\u70b9\uff0c\u7136\u540e\u7531CDN\u7684\u670d\u52a1\u5668\u518d\u8bbf\u95eeIPV6\u7684\u670d\u52a1\u5668\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0 IPV4 to IPV6 \u7684\u8bbf\u95ee\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Cloudflare \u662f\u4e00\u4e2a\u514d\u8d39\u7684CDN\u4f9b\u5e94\u5546\uff0c\u901a\u8fc7Cloudflare\u4ee3\u7406\u540e\u7684\u7f51\u7edc\u53ef\u4ee5\u5c06\u6211\u4eec\u7684\u670d\u52a1\u5668\u4fdd\u62a4\u8d77\u6765\uff0c\u80fd\u6709\u6548\u907f\u514dDDOS\u653b\u51fb\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5c31\u662f\u7ed9\u670d\u52a1\u5668\u5957\u4e86\u4e00\u4e2a\u76fe\u724c\u3002\u6b64\u5916\uff0cCloudflare\u7684\u6d41\u91cf\u6ca1\u6709\u9650\u5236\u4e14\u514d\u8d39\uff0c\u5728\u56fd\u5185\u7684\u8bbf\u95ee\u901f\u5ea6\u8fd8\u53ef\u4ee5\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u8ba4\u4e3a\u6709\u5982\u4e0b\u597d\u5904\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u514d\u8d39\u7684DNS\u89e3\u6790\u548cCDN\u4ee3\u7406\uff0cDNS\u652f\u6301\u6cdb\u57df\u540d\u89e3\u6790"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301IPV4 \u548c IPV6 \u6d41\u91cf\u7684\u76f8\u4e92\u8f6c\u6362"}),"\n",(0,i.jsx)(n.li,{children:"\u9690\u85cf\u771f\u5b9eIP\u5730\u5740"}),"\n",(0,i.jsx)(n.li,{children:"\u907f\u514dDDOS\u653b\u51fb"}),"\n",(0,i.jsx)(n.li,{children:"\u6d41\u91cf\u65e0\u9650\u4e14\u514d\u8d39"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6559\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.csdn.net/qq_38894585/article/details/131054885",children:"\u5f00\u542f Cloudflare CDN \u4ee3\u7406\uff0c\u5b9e\u73b0 IPv4 to IPv6 \u8f6c\u6362"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u7684DNS\u8bbe\u7f6e\u5982\u4e0b\u56fe\u6240\u793a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230712223406059",src:l(45759).A+"",width:"1884",height:"382"})}),"\n",(0,i.jsx)(n.p,{children:"home6 \u662f\u901a\u8fc7DDNS\u7ed1\u5b9a\u7684\u57df\u540d\uff0cCNAME \u662f\u57df\u540d\u522b\u540d\uff0c\u70b9\u4eae\u4e86\u5c0f\u4e91\u6735\uff0c\u5373\u5b9e\u73b0\u4e86IPV4\u4ee3\u7406\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u901a\u8fc7CNANME\u5b9e\u73b0\uff0c\u539f\u56e0\u662fCloudflare\u4e0d\u5141\u8bb8\u4e24\u4e2aAAAA\u6307\u5411\u7684\u57df\u540d\uff0c\u540c\u65f6\u652f\u6301\u4ee3\u7406\u548c\u76f4\u8fde\u3002\u6545\u6211\u4eec\u901a\u8fc7CNAME\uff0c\u8ba9\u6211\u4eec\u7684DNS\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u9a8c\u8bc1",children:"\u9a8c\u8bc1"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4ee3\u7406\u6210\u529f\uff0c\u90a3\u4e48\u6211\u4eecping IPV4 \u5f97\u5230\u7684\u662fIPV4\u5730\u5740\uff0c\u800cping IPV6 \u5f97\u5230\u7684\u662fIPV6\u5730\u5740\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ping movie.abc.com \nping6 movie.abc.com\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4e3a\u4ec0\u4e48\u914d\u7f6e\u4e86\u8fd8\u662f\u65e0\u6cd5\u4ee3\u7406",children:"\u4e3a\u4ec0\u4e48\u914d\u7f6e\u4e86\u8fd8\u662f\u65e0\u6cd5\u4ee3\u7406"}),"\n",(0,i.jsx)(n.h4,{id:"ssltls-\u662f\u5426\u8bbe\u7f6e\u4e3afull",children:"SSL/TLS \u662f\u5426\u8bbe\u7f6e\u4e3aFULL"}),"\n",(0,i.jsx)(n.p,{children:"\u5efa\u8bae\u7ed9\u670d\u52a1\u5668\u8bbe\u7f6e\u8bc1\u4e66\uff0c\u4f7f\u7528FULL\u6a21\u5f0f\u662f\u652f\u6301\u81ea\u7b7e\u8bc1\u4e66\u3002\u4e3a\u4e86\u7b80\u5316\u8fd9\u4e00\u6b65\u9aa4\uff0c\u53ef\u4ee5\u4f7f\u7528Caddy \u6216 NPM \u6765\u5e2e\u52a9\u6211\u4eec\u7533\u8bf7\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4f7f\u7528\u7684NPM\uff0c\u4e0b\u9762\u662f\u6211\u7684npm\u914d\u7f6e\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230713153936702",src:l(15093).A+"",width:"2474",height:"946"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230712224052662",src:l(47825).A+"",width:"1808",height:"1186"})}),"\n",(0,i.jsx)(n.p,{children:"SSL/TSL \u8fde\u63a5\u6a21\u5f0f\u6709\u56db\u79cd\u6a21\u5f0f\uff1a OFF\u3001Flexible SSL\u3001Full SSL\u3001Full SSL (Strict)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OFF"}),"\uff1a\u5173\u95ed HTTPS \u8bbf\u95ee\uff0c\u6240\u6709\u8bbf\u5ba2\u91cd\u5b9a\u5411\u5230 HTTP\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Flexible"}),"\uff1a\u8bbf\u5ba2\u8bbf\u95ee\u4f60\u7f51\u7ad9\u7528 HTTPS\uff0c\u4f46\u662f CDN \u5230\u4f60\u6e90\u670d\u52a1\u5668\u62c9\u53d6\u4e1c\u897f\u65f6\u7528\u7684 HTTP \u534f\u8bae\u3002\u8fd9\u4e2aSSL\u6a21\u5f0f\u4e00\u952e\u5b9e\u73b0\u7528\u6237\u5230CF\u7684SSL\u52a0\u5bc6\u6a21\u5f0f\uff0c\u6211\u4eec\u670d\u52a1\u5668\u4e2d\u7684\u7f51\u7ad9\u53ef\u4ee5\u4e0d\u5b89\u88c5SSL\u8bc1\u4e66\uff0c\u7136\u540e\u7528\u6237\u6253\u5f00\u4e5f\u53ef\u4ee5\u770b\u5230\u662fHTTPS\u683c\u5f0f\u3002\u6839\u636eCF\u7684\u5efa\u8bae\uff0c\u5982\u679c\u786e\u5b9e\u6ca1\u6709\u529e\u6cd5\u5728\u670d\u52a1\u5668\u7aef\u7ed9\u7f51\u7ad9\u5b89\u88c5\u8bc1\u4e66\u7684\u624d\u4f7f\u7528\u8fd9\u4e2a\u529e\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full"}),"\uff1a\u8fd9\u4e2a\u6a21\u5f0f\u533a\u522b\u5728\u4e8eCF\u5230\u670d\u52a1\u5668\u7aef\u662f\u53ef\u4ee5\u4f7f\u7528\u81ea\u7b7e\u8bc1\u4e66\u7684\u3002\u6b64\u9009\u9879\u9002\u5408\u6e90\u670d\u52a1\u5668\u7528\u7684\u662f\u81ea\u7b7e\u540d SSL \u8bc1\u4e66\u6216\u65e0\u6548\u8bc1\u4e66\u7684\u60c5\u51b5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full (Strict)"}),"\uff1a\u9700\u8981CF\u5230\u670d\u52a1\u5668\u7aef\u5b89\u88c5SSL\u8bc1\u4e66\u800c\u4e14\u5fc5\u987b\u662f\u8ba4\u8bc1\u8fc7\u7684\u8bc1\u4e66\uff0c\u4e0d\u53ef\u4ee5\u81ea\u7b7e\u8bc1\u4e66\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u603b\u7ed3\uff0c\u9664\u4e86OFF\uff0c\u5176\u4ed6\u90fd\u662f\u4f7f\u7528https\u4e0e\u7528\u6237\u8fde\u63a5\u3002\u5efa\u8bae\u4f7f\u7528Full (Strict)\uff0c\u5982\u679c\u670d\u52a1\u5668\u6ca1\u6709\u529e\u6cd5\u4e0ahttps\uff0c\u5c31\u9009\u62e9Flexible\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591aCloudflare\u914d\u7f6e\u8be6\u89c1\uff1a",(0,i.jsx)(n.a,{href:"https://www.zhoulujun.cn/html/tools/cloudServices/CDN/8254.html",children:"cloudflare\u52a0\u901f\u4e2a\u4eba\u7f51\u7ad9\u548c\u5b89\u5168\u9632\u62a4\u8bbe\u7f6e\u6307\u5317"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u7aef\u53e3\u4e0d\u80fd\u4f7f\u752880443",children:"\u7aef\u53e3\u4e0d\u80fd\u4f7f\u752880/443"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e\u8fd0\u8425\u5546\u7684\u9650\u5236\uff0c\u5bb6\u7528\u5149\u732b\u662f\u4f1a\u62d2\u7edd80/443\u7aef\u53e3\u7684\u5165\u7ad9\u6d41\u91cf\u7684\u3002\u6240\u4ee5\u6211\u4eec\u9700\u8981\u6539\u6362\u7aef\u53e3\u3002",(0,i.jsx)(n.a,{href:"https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/",children:"Cloudflare\u652f\u6301\u7684\u7aef\u53e3"})," \u5982\u4e0b\u6240\u793a\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"HTTP\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"80"}),"\n",(0,i.jsx)(n.li,{children:"8080"}),"\n",(0,i.jsx)(n.li,{children:"8880"}),"\n",(0,i.jsx)(n.li,{children:"2052"}),"\n",(0,i.jsx)(n.li,{children:"2082"}),"\n",(0,i.jsx)(n.li,{children:"2086"}),"\n",(0,i.jsx)(n.li,{children:"2095"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"HTTPS:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"443"}),"\n",(0,i.jsx)(n.li,{children:"2053"}),"\n",(0,i.jsx)(n.li,{children:"2083"}),"\n",(0,i.jsx)(n.li,{children:"2087"}),"\n",(0,i.jsx)(n.li,{children:"2096"}),"\n",(0,i.jsx)(n.li,{children:"8443"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6545\u6211\u4eec\u5c06\u670d\u52a1\u5668\u4e0a\u7684http\u7684\u76d1\u542c\u7aef\u53e3\u6539\u4e3a8443"}),"\n",(0,i.jsx)(n.h3,{id:"\u66f4\u6539cloudlfare-\u56de\u6eaf\u7aef\u53e3",children:"\u66f4\u6539cloudlfare \u56de\u6eaf\u7aef\u53e3"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u6bcf\u6b21\u6211\u4eec\u8bf7\u6c42\u57df\u540d\u90fd\u9700\u8981\u5e26\u4e0a8443\u7684\u7aef\u53e3\u53f7\uff0c\u5b9e\u5728\u6709\u70b9\u4e11\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u89c4\u5219\uff0c\u5bf9CDN\u56de\u6eaf\u8bf7\u6c42\u670d\u52a1\u5668\u7684\u7aef\u53e3\u8fdb\u884c\u66f4\u6539\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003\u6559\u7a0b\uff1a",(0,i.jsx)(n.a,{href:"https://blog.csdn.net/weixin_44573077/article/details/129450783",children:"\u4f7f\u7528cloudflare\u91cd\u5199\u7aef\u53e3"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:l(89889).A+"",width:"1106",height:"748"})}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3--\u6548\u679c",children:"\u603b\u7ed3 & \u6548\u679c"}),"\n",(0,i.jsx)(n.p,{children:"\u7efc\u4e0a\u6240\u8ff0\uff0c\u6211\u4eec\u901a\u8fc7\u5957\u7528Cloudflare\u7684CDN\u670d\u52a1\uff0c\u4f7f\u6211\u4eec\u5728IPV4\u73af\u5883\u4e0b\u4e5f\u80fd\u8bbf\u95eeIPV6\u4e0a\u7684\u670d\u52a1\u5668\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728DNS\u914d\u7f6e\u4e2d\uff0c\u57df\u540d\u7cfb\u7edf\u540c\u65f6\u652f\u6301\u4e86IPV6\u76f4\u8fde\u548cIPV4\u4ee3\u7406\u4e24\u79cd\u6a21\u5f0f\uff0c\u8fd9\u610f\u5473\u7740\uff0c\u5f53\u6211\u4eec\u7684\u7f51\u7edc\u73af\u5883\u6ee1\u8db3IPV6\u65f6\uff0c\u8fd8\u662f\u53ef\u4ee5\u901a\u8fc7\u76f4\u8fde\u6765\u6700\u5927\u5316\u7684\u6253\u6ee1\u6211\u4eec\u7684\u5e26\u5bbd\uff0c\u5b9e\u73b0\u6700\u4f73\u7684\u94fe\u63a5\u901f\u5ea6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u653e\u4e00\u5f20\u6211\u4eec\u901a\u8fc7Cloudflare\u4ee3\u7406\u540e\u670d\u52a1\u5668\u4e0b\u8f7d\u8d44\u6e90\u7684\u901f\u5ea6\uff0c\u7531\u4e8e\u516c\u53f8\u7684\u7f51\u7edc\u662f\u9999\u6e2f\ud83c\udded\ud83c\uddf0\uff0c\u6240\u4ee5\u4e0b\u8f7d\u901f\u5ea6\u975e\u5e38\u5feb\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230713104613885",src:l(13865).A+"",width:"711",height:"193"})}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u624b\u673a\u6d41\u91cf\uff08IPV6\uff09\u76f4\u8fde\u7684\u901f\u5ea6\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230713105340852",src:l(99979).A+"",width:"716",height:"193"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},89889:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/18bad85116d143288a9ed4d9f054b181-ddb10c5b52f1efbb64fbc2e2e9603703.png"},26681:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230712023031479-1eaabcbd14718e1593d83c519d7700a4.png"},98118:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230712023507607-bfeac425570e2e441b2ca498d6d19a96.png"},35268:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230712023724514-2f8c56131cc4313907cb5017c6050799.png"},95760:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230712024805104-70859a63468aa62f78548d3d5f865312.png"},90908:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230712031442507-0e5e9a7a8484ff0e632480d7d8378e68.png"},45759:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230712223406059-39bcb7b385cb5fecd2c0061689227438.png"},47825:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230712224052662-eb281232e2f7ea1fe9e9406b527763f5.png"},13865:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230713104613885-e456511466db56980a71fdc52dca06d3.png"},99979:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230713105340852-ae496595d57c98a980f0193be150194c.png"},15093:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/image-20230713153936702-7ec0d8f994fff1f96f656c5860a54e07.png"},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>c});var i=l(96540);const s={},d=i.createContext(s);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);