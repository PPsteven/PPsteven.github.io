"use strict";(self.webpackChunkcodepainter=self.webpackChunkcodepainter||[]).push([[1051],{48539:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=t(74848),i=t(28453);const c={title:"\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5",date:new Date("2021-06-15T23:03:36.000Z"),permalink:"/pages/48be02/",categories:["\u540e\u7aef","Go"]},d="Go \u8bed\u8a00\u5b66\u4e60--\u6d4b\u8bd5\uff08Go Test\uff09",l={id:"\u6280\u672f\u7b14\u8bb0/\u540e\u7aef/Go/\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5",title:"\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5",description:"Go \u8bed\u8a00\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u8ba9\u6211\u4eec\u5b8c\u6210\u6d4b\u8bd5\uff0c\u901a\u8fc7\u501f\u52a9 testing \u5305\uff0c\u5f88\u5bb9\u6613\u642d\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u6846\u67b6\u3002",source:"@site/docs/01.\u6280\u672f\u7b14\u8bb0/02.\u540e\u7aef/02.Go/05.\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5.md",sourceDirName:"01.\u6280\u672f\u7b14\u8bb0/02.\u540e\u7aef/02.Go",slug:"/\u6280\u672f\u7b14\u8bb0/\u540e\u7aef/Go/\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5",permalink:"/docs/\u6280\u672f\u7b14\u8bb0/\u540e\u7aef/Go/\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01.\u6280\u672f\u7b14\u8bb0/02.\u540e\u7aef/02.Go/05.\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5982\u4f55\u5199Go\u5355\u5143\u6d4b\u8bd5",date:"2021-06-15T23:03:36.000Z",permalink:"/pages/48be02/",categories:["\u540e\u7aef","Go"]},sidebar:"techwiki",previous:{title:"Go\u8bed\u6cd5-\u7c7b\u578b\u5224\u65ad",permalink:"/docs/\u6280\u672f\u7b14\u8bb0/\u540e\u7aef/Go/Go\u8bed\u6cd5-\u7c7b\u578b\u5224\u65ad"},next:{title:"Go \u6807\u51c6\u5e93-os",permalink:"/docs/\u6280\u672f\u7b14\u8bb0/\u540e\u7aef/Go/Go\u6807\u51c6\u5e93-os"}},r={},o=[{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:2},{value:"\u6700\u7b80\u5355\u7684\u5355\u5143\u6d4b\u8bd5",id:"\u6700\u7b80\u5355\u7684\u5355\u5143\u6d4b\u8bd5",level:3},{value:"Go test \u8fd0\u884c\u65b9\u5f0f",id:"go-test-\u8fd0\u884c\u65b9\u5f0f",level:3},{value:"\u5e76\u884c\u6d4b\u8bd5",id:"\u5e76\u884c\u6d4b\u8bd5",level:3},{value:"\u6570\u636e\u8868\u9a71\u52a8\u7684\u6d4b\u8bd5",id:"\u6570\u636e\u8868\u9a71\u52a8\u7684\u6d4b\u8bd5",level:3},{value:"\u8df3\u8fc7\u957f\u4efb\u52a1",id:"\u8df3\u8fc7\u957f\u4efb\u52a1",level:3},{value:"\u4efb\u52a1\u7ba1\u7406",id:"\u4efb\u52a1\u7ba1\u7406",level:2},{value:"\u66f4\u52a0\u5b9a\u5236\u5316\u7684\u7ba1\u7406",id:"\u66f4\u52a0\u5b9a\u5236\u5316\u7684\u7ba1\u7406",level:3},{value:"\u6d4b\u8bd5\u6587\u4ef6\u7684\u7ec4\u7ec7&amp;\u4ee5\u6d4b\u8bd5\u9a71\u52a8\u7684\u7f16\u7801",id:"\u6d4b\u8bd5\u6587\u4ef6\u7684\u7ec4\u7ec7\u4ee5\u6d4b\u8bd5\u9a71\u52a8\u7684\u7f16\u7801",level:2},{value:"\u57fa\u51c6/\u6027\u80fd\u6d4b\u8bd5 Benchmarks",id:"\u57fa\u51c6\u6027\u80fd\u6d4b\u8bd5-benchmarks",level:2},{value:"\u6700\u7b80\u5355\u7684\u4f8b\u5b50",id:"\u6700\u7b80\u5355\u7684\u4f8b\u5b50",level:3},{value:"\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u65f6\u95f4\u5185",id:"\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u65f6\u95f4\u5185",level:3},{value:"\u8fd0\u884c\u65f6\u95f4\u63a7\u5236",id:"\u8fd0\u884c\u65f6\u95f4\u63a7\u5236",level:3},{value:"\u8fd0\u884c\u5185\u5b58\u5206\u6790",id:"\u8fd0\u884c\u5185\u5b58\u5206\u6790",level:2},{value:"\u6837\u4f8b Example",id:"\u6837\u4f8b-example",level:2},{value:"\u7b80\u5355\u7684\u6837\u4f8b",id:"\u7b80\u5355\u7684\u6837\u4f8b",level:3},{value:"\u65e0\u5e8f\u7684\u8f93\u51fa",id:"\u65e0\u5e8f\u7684\u8f93\u51fa",level:3},{value:"\u5b66\u4e60\u6848\u4f8b",id:"\u5b66\u4e60\u6848\u4f8b",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"go-\u8bed\u8a00\u5b66\u4e60--\u6d4b\u8bd5go-test",children:"Go \u8bed\u8a00\u5b66\u4e60--\u6d4b\u8bd5\uff08Go Test\uff09"}),"\n",(0,s.jsxs)(e.p,{children:["Go \u8bed\u8a00\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u8ba9\u6211\u4eec\u5b8c\u6210\u6d4b\u8bd5\uff0c\u901a\u8fc7\u501f\u52a9 ",(0,s.jsx)(e.code,{children:"testing"})," \u5305\uff0c\u5f88\u5bb9\u6613\u642d\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u6846\u67b6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6d4b\u8bd5\u5305\u542b\u4e09\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.li,{children:"\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.li,{children:"\u6837\u4f8b\u6d4b\u8bd5"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5355\u5143\u6d4b\u8bd5",children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u5355\u5143\u6d4b\u8bd5\uff08unit testing\uff09\u662f\u6307\u5bf9\u7a0b\u5e8f\u4e2d\u7684\u6700\u5c0f\u53ef\u6d4b\u8bd5\u5355\u5143\u8fdb\u884c\u68c0\u67e5\u548c\u9a8c\u8bc1\u3002\u901a\u5e38\u5355\u5143\u6d4b\u8bd5\u9488\u5bf9\u7684\u662f\u7a0b\u5e8f\u4e2d\u7684\u4e00\u4e2a\u51fd\u6570\u6216\u8005\u4e00\u6bb5\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["\u5224\u65ad\u7a0b\u5e8f\u662f\u5426\u4e3a\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"\u5355\u5143"})," \u7684\u65b9\u6cd5\u662f\u5176\u80fd\u5426\u72ec\u7acb\u7684\u8fdb\u884c\u6d4b\u8bd5"]})}),"\n",(0,s.jsx)(e.h3,{id:"\u6700\u7b80\u5355\u7684\u5355\u5143\u6d4b\u8bd5",children:"\u6700\u7b80\u5355\u7684\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'func Add(x, y int) int {\n\treturn x + y\n}\n\n// Simple Testing\nfunc TestAdd(t *testing.T) {\n\tif Add(1, 2) != 3 {\n\t\tt.Log("log: add function success") // \u4ec5\u5931\u8d25 \u6216 -v \u8f93\u51fa\n\t\tt.FailNow()\n\t\t//t.Error() // Log -> Fail\n\t\t//t.Fatal() // Log -> FailNow\n\t}\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"testing.T"})," \u6709\u51e0\u4e2a\u51fd\u6570\u53ef\u4ee5\u5e2e\u52a9\u8f93\u51fa\u65e5\u5fd7\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"t.Log/Logf   # \u65e5\u5fd7\u4fe1\u53f7 \nt.Fail/Failf # \u5931\u8d25\u4fe1\u53f7\uff0c\u6d4b\u8bd5\u7ee7\u7eed\nt.FailNow    # \u5931\u8d25\u4fe1\u53f7\uff0c\u6d4b\u8bd5\u7ec8\u6b62\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4e2d\uff0c\u5c06\u65e5\u5fd7\u548c\u6d4b\u8bd5\u4fe1\u53f7\u7ec4\u5408\uff0c\u53ef\u4ee5\u63d0\u4f9b\u5982\u4e0b\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"t.Log + t.Fail = t.Error\nt.Log + t.FailNow = t.Fatal\n"})}),"\n",(0,s.jsx)(e.h3,{id:"go-test-\u8fd0\u884c\u65b9\u5f0f",children:"Go test \u8fd0\u884c\u65b9\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"go test \u6709\u4e24\u79cd\u8fd0\u884c\u65b9\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# 1. \u4e0d\u5e26\u53c2\u6570\uff0c\u8fd0\u884c\u672c\u5730\u6587\u4ef6\u4e0b\u7684\u6d4b\u8bd5\u6587\u4ef6\ngo test \n# 2. \u6307\u5b9a\u786e\u5b9a\u7684\u5305\u53ca\u5176\u4f9d\u8d56\ngo test addTest.go, pkg/util/math, ...\n    # \u4f9d\u8d56\u5305\u592a\u591a\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528  go test \n"})}),"\n",(0,s.jsxs)(e.p,{children:["go test \u7684\u5e38\u7528 ",(0,s.jsx)(e.code,{children:"flag"})," \u6709"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'go test \n  -args \u547d\u4ee4\u884c\u53c2\u6570\n  -v \u8be6\u7ec6\u6a21\u5f0f\u8fd0\u884c \n  -parallel \u5e76\u884c\u6d4b\u8bd5\n  -run \u6307\u5b9a\u6d4b\u8bd5\u51fd\u6570, \u8fd9\u91cc\u9ed8\u8ba4\u4f7f\u7528\u4e86\u6b63\u5219\u8868\u8fbe\u5f0f -run "Add4$"\n  -count \u91cd\u590d\u6d4b\u8bd5\u6b21\u6570, \u9ed8\u8ba4 1  \n  -timeout \u5168\u90e8\u7d2f\u8ba1\u6d4b\u8bd5\u65f6\u95f4\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u66f4\u591a\u8be6\u7ec6\uff0c\u53c2\u8003 ",(0,s.jsx)(e.code,{children:"go help test"})," \u548c ",(0,s.jsx)(e.code,{children:"go help testflags"})," \u6765\u83b7\u53d6 go test \u547d\u4ee4\u548c ",(0,s.jsx)(e.code,{children:"flag"})," \u7684\u5e2e\u52a9"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5e76\u884c\u6d4b\u8bd5",children:"\u5e76\u884c\u6d4b\u8bd5"}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"--parallel n"}),"  \u6307\u5b9a\u5e76\u884c\u6d4b\u8bd5\u4e2a\u6570\uff0c\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"t.Parallel"})," \u6765\u63a7\u5236"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// understanding t.Parallel\n// TestA and TestB will run the same time\n// go test -parallel 2\nfunc TestA(t *testing.T) {\n\tt.Parallel()\n\ttime.Sleep(time.Second * 2)\n}\n\nfunc TestB(t *testing.T) {\n\tt.Parallel()\n\ttime.Sleep(time.Second * 2)\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6570\u636e\u8868\u9a71\u52a8\u7684\u6d4b\u8bd5",children:"\u6570\u636e\u8868\u9a71\u52a8\u7684\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636e\u6d4b\u8bd5\u9700\u8981\u8003\u8651\u5230\u591a\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u8868\u6765\u6279\u91cf\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'// table driven test\nfunc Add2(x, y int) int {\n\treturn x + y\n}\n\nfunc TestAdd2(t *testing.T) {\n\tfmt.Printf("start test TestAdd2")\n\tvar test = []struct{\n\t\tx, y, expect int\n\t}{\n\t\t{1, 1, 2},\n\t\t{2, 2, 4},\n\t\t{5, 3, 8},\n\t}\n\n\tfor _, tt := range test {\n\t\tif actual := Add(tt.x, tt.y); actual != tt.expect {\n\t\t\tt.Errorf("add(%d, %d), expect: %d, actual:%d", tt.x, tt.y, tt.expect, actual)\n\t\t}\n\t}\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u8df3\u8fc7\u957f\u4efb\u52a1",children:"\u8df3\u8fc7\u957f\u4efb\u52a1"}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"-short"})," \u548c ",(0,s.jsx)(e.code,{children:"testing.Short"})," \u914d\u5408\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6267\u884c\u8017\u65f6\u8f83\u957f\u7684\u4efb\u52a1\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'// skip long runing test\n// go test -short\nfunc TestAdd3(t *testing.T) {\n\tfmt.Printf("start test TestAdd3")\n\tif testing.Short() {\n\t\tt.Skip("Skip long runing test")\n\t}\n\ttime.Sleep(100 * time.Second)\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u4efb\u52a1\u7ba1\u7406",children:"\u4efb\u52a1\u7ba1\u7406"}),"\n",(0,s.jsxs)(e.p,{children:["\u6709\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u5728\u6d4b\u8bd5\u7684\u5f00\u59cb\uff08setup\uff09\u548c\u7ed3\u675f\uff08teardown\uff09\u505a\u4e00\u4e9b\u64cd\u4f5c\uff0c\u6bd4\u5982\u5e38\u89c1\u7684\u6709\u6570\u636e\u5e93\u7684\u8fde\u63a5\u548c\u65ad\u5f00\uff0c\u8fd9\u65f6\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"TestMain"})," \u6765\u7ba1\u7406\uff0c",(0,s.jsx)(e.code,{children:"go test"})," \u4f1a\u81ea\u52a8\u5bfb\u627e ",(0,s.jsx)(e.code,{children:"TestMain"})," \u4f5c\u4e3a\u5165\u53e3\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'// sometime wo need to do some necessary thing before or after testing, like connect and disconnect database.\n// or wo need to control which code should run in main thred.\nfunc TestMain(m *testing.M){\n\t// setup\n\tfmt.Println("before test")\n\tcode := m.Run() // call test routine func\n\t// teardown\n\tfmt.Println("after test")\n\tos.Exit(code)\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u66f4\u52a0\u5b9a\u5236\u5316\u7684\u7ba1\u7406",children:"\u66f4\u52a0\u5b9a\u5236\u5316\u7684\u7ba1\u7406"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"go test"})," \u5728\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u5176\u5b9e\u4f1a\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"m.Run()"})," \u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u4e0d\u7528\u5185\u7f6e\u7684\u5904\u7406\u6d41\u7a0b\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e3b\u8981\u901a\u8fc7\u4e24\u4e2a\u51fd\u6570 ",(0,s.jsx)(e.code,{children:"testing.Main"})," \u548c ",(0,s.jsx)(e.code,{children:"testing.MainStart"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u5165\u7684\u53c2\u6570\u4e3a\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"matchString\uff1aflags \u53c2\u6570"}),"\n",(0,s.jsx)(e.li,{children:"tests\uff1a\u9700\u8981\u8fd0\u884c\u7684\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.li,{children:"benchmarks\uff1a\u9700\u8981\u8fd0\u884c\u7684\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.li,{children:"examples\uff1a\u9700\u8981\u8fd0\u884c\u7684\u6837\u4f8b\u6d4b\u8bd5"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u4e00\u5757\uff0c\u5728\u770b\u4ee3\u7801\u7684\u65f6\u5019\u53d1\u73b0 ",(0,s.jsx)(e.code,{children:"testing"})," \u5e93\u7684\u53d8\u52a8\u5f88\u5927\uff0c\u6240\u4ee5\u76ee\u524d\u6ca1\u6709\u4ec0\u4e48\u6bd4\u4ef7\u597d\u7684\u6559\u7a0b\u548c\u6587\u6863\uff0c\u5177\u4f53\u5b9e\u73b0\u9700\u8981\u81ea\u4e3b\u53c2\u8003\u6e90\u7801\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c ",(0,s.jsx)(e.code,{children:"testing.MainStart"})," \u5904\u4e8e\u6700\u5e95\u5c42\uff0c\u9700\u8981\u5b9e\u73b0 ",(0,s.jsx)(e.code,{children:"testing.M"})," \u5bf9\u8c61\uff0c\u5b9e\u73b0\u8d77\u6765\u8f83\u4e3a\u590d\u6742\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'// Control each test, benchmarks, examples\nfunc TestMain(m *testing.M) {\n\t// \u8fd9\u91cc\u662f\u6709\u5751\uff0ctesting\u5305\u7ecf\u8fc7\u5347\u7ea7\u6539\u52a8\uff0c\u539f\u5148\u7684MainStart\u5c31\u662f\u73b0\u5728\u7684Main\n\t// testing.Main \u4f7f\u7528\u7684\u7279\u70b9\u662f\uff0c\u53ef\u4ee5\u6709setup\u521d\u59cb\u5316\uff0c\u4f46\u662fteardown\u4e0d\u80fd\u81ea\u4e3b\u63a7\u5236\n\tmatchString := func(pat, str string) (bool, error) {\n\t\treturn true, nil\n\t}\n\n\ttests := []testing.InternalTest{\n\t\t{"TestAdd", TestAdd},\n\t\t{"TestAdd2", TestAdd2},\n\t}\n\n\tbenchmarks := []testing.InternalBenchmark{}\n\texamples := []testing.InternalExample{}\n\n\ttesting.Main(matchString, tests, benchmarks, examples)\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u6d4b\u8bd5\u6587\u4ef6\u7684\u7ec4\u7ec7\u4ee5\u6d4b\u8bd5\u9a71\u52a8\u7684\u7f16\u7801",children:"\u6d4b\u8bd5\u6587\u4ef6\u7684\u7ec4\u7ec7&\u4ee5\u6d4b\u8bd5\u9a71\u52a8\u7684\u7f16\u7801"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\uff0c\u51fd\u6570\u547d\u540d\u9700\u8981\u9075\u5faa ",(0,s.jsx)(e.code,{children:"TestXxx"})," \u7684\u89c4\u5219\uff0c\u81ea\u52a8\u5316\u6d4b\u8bd5\u4f1a\u5bfb\u627e"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6b64\u5916\uff0c\u6d4b\u8bd5\u6587\u4ef6\u7684\u547d\u540d\u548c\u7ec4\u7ec7\u4e5f\u6709\u8981\u6c42\uff0c\u6d4b\u8bd5\u6587\u4ef6\u9700\u8981\u548c\u7a0b\u5e8f\u5904\u4e8e\u540c\u4e00 ",(0,s.jsx)(e.code,{children:"\u6587\u4ef6\u5939"})," \u548c ",(0,s.jsx)(e.code,{children:"package"})," \u4e0b\uff0c\u6587\u4ef6\u540d\u52a0\u4e0a ",(0,s.jsx)(e.code,{children:"_test"}),"\uff0c\u8fd9\u6837 Go \u5728\u7f16\u8bd1\u7684\u65f6\u5019\u5c31\u4f1a\u81ea\u52a8\u8df3\u8fc7\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u6d4b\u8bd5\u6587\u4ef6\u4e0e\u539f\u59cb\u6587\u4ef6\u5728\u540c\u4e00\u5305\u4e0b\u7684\u65f6\u5019\uff0c\u5982\u4f55\u5199\u51fa\u4e00\u4e2a\u5408\u9002\u7684\uff0c\u53ef\u6d4b\u8bd5\u7684\u4ee3\u7801\u5c31\u663e\u5f97\u6bd4\u8f83\u91cd\u8981\uff0c\u9700\u8981\u7a0b\u5e8f\u5458\u63d0\u524d\u5bf9\u7a0b\u5e8f\u8fdb\u884c\u8bbe\u8ba1\u601d\u8003\uff0c\u5199\u51fa\u4ee5\u6d4b\u8bd5\u4e3a\u9a71\u52a8\u7684\u4ee3\u7801\u3002\u505a\u5230\u7a0b\u5e8f\u529f\u80fd\u4e0a\u7684\u89e3\u8026\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4ee5 ",(0,s.jsx)(e.a,{href:"https://github.com/gohugoio/hugo",children:"gohugoio/hugo"})," \u4e3a\u4f8b\uff0c\u53ef\u4ee5\u770b\u5230\u51e0\u4e4e\u4efb\u4f55\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:".go"})," \u6587\u4ef6\u90fd\u6709\u5bf9\u5e94\u7684 ",(0,s.jsx)(e.code,{children:"_test.go"})," \u6d4b\u8bd5\u6587\u4ef6\uff0c\u5e76\u4e14\u5904\u4e8e\u540c\u4e00\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:".\n\u251c\u2500\u2500 compare\n\u2502\xa0\xa0 \u251c\u2500\u2500 compare.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 compare_test.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 init.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 init_test.go\n\u251c\u2500\u2500 crypto\n\u2502\xa0\xa0 \u251c\u2500\u2500 crypto.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 crypto_test.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 init.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 init_test.go\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 data.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 data_test.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 init.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 init_test.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 resources.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 resources_test.go\n\u251c\u2500\u2500 debug\n\u2502\xa0\xa0 \u251c\u2500\u2500 debug.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 init.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 init_test.go\n\u251c\u2500\u2500 encoding\n\u2502\xa0\xa0 \u251c\u2500\u2500 encoding.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 encoding_test.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 init.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 init_test.go\n\u251c\u2500\u2500 fmt\n\u2502\xa0\xa0 \u251c\u2500\u2500 fmt.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 init.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 init_test.go\n\u251c\u2500\u2500 hugo\n\u2502\xa0\xa0 \u251c\u2500\u2500 init.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 init_test.go\n...\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u51c6\u6027\u80fd\u6d4b\u8bd5-benchmarks",children:"\u57fa\u51c6/\u6027\u80fd\u6d4b\u8bd5 Benchmarks"}),"\n",(0,s.jsx)(e.p,{children:"Benchmarks \u4e3b\u8981\u4ece\u5982\u4e0b\u65b9\u9762\u6d4b\u8bd5\u7a0b\u5e8f\u6027\u80fd\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8fd0\u884c\u65f6\u95f4\u5206\u6790"}),"\n",(0,s.jsx)(e.li,{children:"\u8fd0\u884c\u5185\u5b58\u5206\u6790"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6700\u7b80\u5355\u7684\u4f8b\u5b50",children:"\u6700\u7b80\u5355\u7684\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// Simple Example\nfunc BenchmarkAdd(b *testing.B) {\n\tfor i := 0; i < b.N; i++ {\n\t\t_ = Add(1, 2)\n\t}\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"go test \u6267\u884c\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ go test -v -run=None -bench=Add2  benchmark_test.go unit_test.go\n-v \u8be6\u7ec6\u65e5\u5fd7\n-run regexp \u6b63\u5219\u6a21\u5f0f\uff0c. \u8868\u793a\u6240\u6709 none \u8868\u793a\u4e0d\u8fd0\u884c Test\u548cExample\n-bench regexp \u6b63\u5219\u6a21\u5f0f\uff0c\u540c\u4e0a\n\n\ngoos: darwin\ngoarch: amd64\ncpu: Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz\nBenchmarkAdd2\nBenchmarkAdd2-12               1        2000631650 ns/op\nPASS\nok      command-line-arguments  7.020s\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7ed3\u679c\u89e3\u91ca"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["BenchmarkAdd2-12 \u4e2d\u768412\u662f\u6307\uff0c\u5728\u8c03\u7528CPU\u7684\u4f7f\u7528\u9ed8\u8ba4\u8c03\u7528",(0,s.jsx)(e.code,{children:"GOMAXPROCS"})," \uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"-cpu N"})," \u6765\u6307\u5b9a\u4f7f\u7528\u7684CPU\u6838\u6570"]}),"\n",(0,s.jsx)(e.li,{children:"2000631650 ns/op \u8868\u793a\u6bcf\u4e2a\u64cd\u4f5c\u82b1\u8d39 2000631650\u7eb3\u79d2\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["7.020s \u8868\u793a\u6267\u884c\u7684\u603b\u82b1\u8d39\u65f6\u95f4\uff0c\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa ",(0,s.jsx)(e.code,{children:"2 + 5 =7s"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4e00\u70b9\u70b9\u9700\u8981\u4e3b\u8981\u7684\u5730\u65b9"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"go test"})," \u8fd0\u884c\u5e26 ",(0,s.jsx)(e.code,{children:"flags"})," \u53c2\u6570\u7684\u8bdd\uff0c\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u4e0d\u80fd\u5305\u542b ",(0,s.jsx)(e.code,{children:"TestMain"})," \u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u65f6\u95f4\u5185",children:"\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u65f6\u95f4\u5185"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u51fa\uff0c\u6d4b\u8bd5\u7a0b\u5e8f\u53ea\u8fd0\u884c\u4e861\u6b21\uff0c\u8fd9\u5bf9\u4e8e\u6211\u4eec\u6d4b\u8bd5\u7ed3\u679c\u6709\u5f71\u54cd\uff0c\u4e00\u822c\u591a\u6b21\u6d4b\u8bd5\u53d6\u5e73\u5747\u6240\u5f97\u7ed3\u679c\u8f83\u4e3a\u51c6\u786e\u3002\u8fd0\u884c\u4e00\u6b21\u7684\u539f\u56e0\u5728\u4e8e\uff0c",(0,s.jsx)(e.code,{children:"go test"})," \u4e2d ",(0,s.jsx)(e.code,{children:"-benchtime=1s"})," \u9ed8\u8ba4\u4e3a1\u79d2\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ go test -v -run=None -bench=Add2 -benchtime=10s benchmark_test.go unit_test.go\ngoos: darwin\ngoarch: amd64\ncpu: Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz\nBenchmarkAdd2\nBenchmarkAdd2-12        1000000000               2.001 ns/op\nPASS\nok      command-line-arguments  91.253s\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7279\u6b8a\u8bed\u6cd5 ",(0,s.jsx)(e.code,{children:"Nx"})," \uff0cN\u4ee3\u8868\u6700\u5c0f\u6267\u884c\u7684\u6b21\u6570\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ go test -v -run=None -bench=Add2 -benchtime=10x benchmark_test.go unit_test.go\ngoos: darwin\ngoarch: amd64\ncpu: Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz\nBenchmarkAdd2\nBenchmarkAdd2-12              10         200507066 ns/op\nPASS\nok      command-line-arguments  14.046s\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u8fd0\u884c\u65f6\u95f4\u63a7\u5236",children:"\u8fd0\u884c\u65f6\u95f4\u63a7\u5236"}),"\n",(0,s.jsxs)(e.p,{children:["\u6709\u65f6\u6d4b\u8bd5\u4e2d\u4f1a\u5305\u542b\u4e00\u4e9b\u8017\u65f6\u7684\u7a0b\u5e8f\uff0c\u5982\u679c\u90fd\u4ece Benchmark() \u5f00\u59cb\u8ba1\u65f6\u4f1a\u4f7f\u5f97\u6d4b\u8bd5\u7ed3\u679c\u4e0d\u51c6\u786e\uff0cgo \u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"testing.B"})," \u53ea\u9488\u5bf9\u9700\u8981\u6d4b\u8bd5\u7684\u4ee3\u7801\u8ba1\u65f6\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// timer control\n// go test -run=none -v -bench BenchmarkAdd2 benchmark_test.go unit_test.g\nfunc BenchmarkAdd2(b *testing.B) {\n\tb.ResetTimer() // reset timer\n\tsleep(2)\n\n\tvar n int\n\tfor i := 0; i < 5; i++ {\n\t\tb.StopTimer() // stop timer\n\t\tsleep(1)\n\t\tb.StartTimer() // start timer\n\t\tn++\n\t}\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd0\u884c\u5185\u5b58\u5206\u6790",children:"\u8fd0\u884c\u5185\u5b58\u5206\u6790"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func heap() []byte {\n\treturn make([]byte, 1024)\n}\n\nfunc Benchmark_Alloc(b *testing.B) {\n\tfor i := 0; i < b.N; i++ {\n\t\t_ = heap()\n\t}\n}\n\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ go test -v -run=None -bench=Alloc -benchmem \nbenchmark_test.go unit_test.go -gcflags "-N -l"\n\ngoos: darwin\ngoarch: amd64\ncpu: Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz\nBenchmark_Alloc\nBenchmark_Alloc-12        475332              2388 ns/op            1024 B/op             1 allocs/op\nPASS\nok      command-line-arguments  2.095s\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\uff0c\u8fd9\u91cc\u9664\u4e86\u52a0\u4e0a ",(0,s.jsx)(e.code,{children:"benchmem"})," \u5916\uff0c\u8fd8\u9700\u8981\u52a0\u4e0a ",(0,s.jsx)(e.code,{children:'-gcflags "-N -l"'}),"\u5173\u95ed\u5185\u8054\u4f18\u5316\uff0c\u4e0d\u7136 ",(0,s.jsx)(e.code,{children:"B/op"})," \u603b\u4e3a0\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6837\u4f8b-example",children:"\u6837\u4f8b Example"}),"\n",(0,s.jsxs)(e.p,{children:["testing \u5305\u540c\u6837\u53ef\u4ee5\u7528\u4e8e\u9a8c\u8bc1\u6837\u4f8b\u4ee3\u7801\uff0c\u4e0e\u4e4b\u524d\u76f8\u540c\uff0c\u4ee3\u7801\u5fc5\u987b\u4ee5 ",(0,s.jsx)(e.code,{children:"ExampleXxx"})," \u547d\u540d\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7b80\u5355\u7684\u6837\u4f8b",children:"\u7b80\u5355\u7684\u6837\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// Simple Example\nfunc ExampleAdd(){\n\tfmt.Println(Add(1,2))\n\tfmt.Println(Add(2,2))\n\t// Output:\n\t// 3\n\t// 4\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"go test"})," \u4f1a\u6bd4\u8f83\u6ce8\u91ca\u4e2d ",(0,s.jsx)(e.code,{children:"Output"})," \u540e\u7684\u8f93\u51fa"]}),"\n",(0,s.jsx)(e.h3,{id:"\u65e0\u5e8f\u7684\u8f93\u51fa",children:"\u65e0\u5e8f\u7684\u8f93\u51fa"}),"\n",(0,s.jsxs)(e.p,{children:["\u8f93\u51fa\u5e76\u4e0d\u4e00\u5b9a\u662f\u6709\u5e8f\u7684\uff0c\u540c\u6837",(0,s.jsx)(e.code,{children:"go test"})," \u4f1a\u6bd4\u8f83\u6ce8\u91ca\u4e2d\u7684\u65e0\u5e8f\u8f93\u51fa\u3002\u6b64\u65f6\u6ce8\u91ca\u524d\u4e3a ",(0,s.jsx)(e.code,{children:"Unordered output"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// Unorder output\nfunc ExamplePerm() {\n\tfor _, value := range rand.Perm(5) { // Example must use Perm method\n\t\tfmt.Println(value)\n\t}\n\t// Unordered output: 4\n\t// 2\n\t// 1\n\t// 3\n\t// 0\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b66\u4e60\u6848\u4f8b",children:"\u5b66\u4e60\u6848\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:["\u767e\u5b66\u4e0d\u5982\u4e00\u7ec3\uff0c\u53ef\u4ee5\u901a\u8fc7\u89c2\u5bdf\u5f00\u6e90\u9879\u76ee\u4e2d ",(0,s.jsx)(e.code,{children:"go test"})," \u7684\u5177\u4f53\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/roseduan/rosedb/tree/3d1d91c062ec318c8b176b5a986e12f9badde66e",children:"roseduan/rosedb"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/gohugoio/hugo",children:"gohugoio/hugo"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://golang.org/pkg/testing/",children:"Package testing"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/377834750",children:"\u624b\u628a\u624b\u6559\u4f60\u5982\u4f55\u8fdb\u884c Golang \u5355\u5143\u6d4b\u8bd5"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>l});var s=t(96540);const i={},c=s.createContext(i);function d(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);