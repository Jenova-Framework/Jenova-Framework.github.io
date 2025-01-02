"use strict";(self.webpackChunkjenova_docs=self.webpackChunkjenova_docs||[]).push([[259],{1841:(A,n,C)=>{C.r(n),C.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>e,toc:()=>o});const e=JSON.parse('{"id":"GettingStarted","title":"Getting Started","description":"Let\'s get started!","source":"@site/pages/02-GettingStarted.md","sourceDirName":".","slug":"/GettingStarted","permalink":"/docs/pages/GettingStarted","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"hide_table_of_contents":false},"sidebar":"documentationSidebar","previous":{"title":"Introduction","permalink":"/docs/pages/Introduction"},"next":{"title":"Code Test","permalink":"/docs/pages/Code Test"}}');var t=C(4848),g=C(8453);const c={sidebar_position:2,hide_table_of_contents:!1},r="Getting Started",s={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Automatic",id:"automatic",level:3},{value:"Manual",id:"manual",level:3}];function i(A){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,g.R)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,t.jsx)(n.p,{children:"Let's get started!"}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Before installing Jenova Runtime on your Game Engine you need to check for some requirements :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A Compatible Godot Engine 4.2+ Fork"}),"\n",(0,t.jsxs)(n.admonition,{title:"Information",type:"info",children:[(0,t.jsx)(n.p,{children:"All Godot forks are capable of running Jenova Runtime but Hot-Reloading is only supported on following distros :"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Jenova-Framework/J.E.N.O.V.A/releases/download/v0.3.3.8-Alpha/Godot-Editor-4.3-Jenova-Edition-Win64.exe",children:"Godot Jenova Edition"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blazium.app",children:"Blazium Engine"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Redot-Engine/redot-engine",children:"Redot Engine"})}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["At the moment Jenova is only supported on ",(0,t.jsx)(n.strong,{children:"64-bit Windows Operating System"}),". You need to have a standard Windows 7 to 11."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"secondary",children:(0,t.jsx)(n.p,{children:"Linux  is supported but currently not functional due to unfinished Metadata Extractor."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Visual Studio 2017-2022 (Optional)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"For Installing Jenova Runtime you can use Jenova Installer or do it manually."}),"\n",(0,t.jsx)(n.h3,{id:"automatic",children:"Automatic"}),"\n",(0,t.jsxs)(n.p,{children:["You can download the installer from ",(0,t.jsx)(n.a,{href:"https://jenova-framework.github.io/download/Jenova.Installer.Win64.exe",children:"here"}),", Simply run installer and select your Godot project path. After installer closed, Open Godot."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Run installer, Select path of your Godot project you want to install Jenova Runtime in."}),"\n"]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"GuideImage_JenovaInstallerMainframe",src:C(4468).A+"",width:"1384",height:"642"}),"\n",(0,t.jsxs)("figcaption",{children:[(0,t.jsx)(n.strong,{children:"Jenvoa Installer Mainframe"}),", Click On \xa0",(0,t.jsx)("kbd",{children:"..."}),"\xa0 to Select your Godot project path."]})]})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Install Jenova Framework"})," and wait until installer finish."]}),"\n"]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"GuideImage_JenovaInstallerProgress",src:C(5108).A+"",width:"1402",height:"641"}),"\n",(0,t.jsxs)("figcaption",{children:[(0,t.jsx)(n.strong,{children:"Jenova Installer Progress"}),", It may take a while as it verifies everything required for correct installation."]})]})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"secondary",children:(0,t.jsx)(n.p,{children:"The official installer is only available for Windows. Linux users will need to build it from source."})}),"\n",(0,t.jsx)(n.h3,{id:"manual",children:"Manual"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Head to ",(0,t.jsx)(n.a,{href:"https://github.com/Jenova-Framework/J.E.N.O.V.A/releases",children:"Release Page"})," of Jenova repository, Download latest framework release, It looks like this :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"Jenova.Framework.<Version>.<Release Stage>.Build.<Build Number>.Win64.zip \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After you downloaded the zip file extract it to your project directory, Jenova Framework must be placed at ",(0,t.jsx)(n.code,{children:"res://Jenova"})," and using any other path will lead to malfunctioning."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Screenshot_JenovaInstallerProgress",src:C(8971).A+"",width:"1063",height:"579"}),"\n",(0,t.jsxs)("figcaption",{children:[(0,t.jsx)(n.strong,{children:"Correct Manual Installation"}),", Jenova directoy must be placed beside project.godot"]})]})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Run Godot once after extraction, Close Godot and open it again. ",(0,t.jsx)("a",{href:"/docs/KnownBugs",children:"(See Known Bugs)"})]}),"\n"]})]})}function a(A={}){const{wrapper:n}={...(0,g.R)(),...A.components};return n?(0,t.jsx)(n,{...A,children:(0,t.jsx)(i,{...A})}):i(A)}},4468:(A,n,C)=>{C.d(n,{A:()=>e});const e=C.p+"assets/images/image-20250102145334429-9d61739d2c3ecb63cb1b5ad4a73e2654.png"},5108:(A,n,C)=>{C.d(n,{A:()=>e});const e=C.p+"assets/images/image-20250102145413063-a0bbfd5707a949abe77c6efe23860a45.png"},8971:(A,n,C)=>{C.d(n,{A:()=>e});const e="data:image/png;base64,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UgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACCVcAIAAABIJZwAAAAAUgknAAAAgFTCCQAAACDRQff/AbEtrwLqamj8AAAAAElFTkSuQmCC"},8453:(A,n,C)=>{C.d(n,{R:()=>c,x:()=>r});var e=C(6540);const t={},g=e.createContext(t);function c(A){const n=e.useContext(g);return e.useMemo((function(){return"function"==typeof A?A(n):{...n,...A}}),[n,A])}function r(A){let n;return n=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:c(A.components),e.createElement(g.Provider,{value:n},A.children)}}}]);