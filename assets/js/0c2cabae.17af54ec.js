"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[535],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(795),n=(r(9496),r(9613));const i={sidebar_position:7},o="API Examples",s={unversionedId:"api/api-examples",id:"api/api-examples",title:"API Examples",description:"In this page collects some examples to use the API with other plugins of Obsidian community.",source:"@site/docs/api/api-examples.md",sourceDirName:"api",slug:"/api/api-examples",permalink:"/obsidian-jira-issue/docs/api/api-examples",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"API Util",permalink:"/obsidian-jira-issue/docs/api/api-util"},next:{title:"Extra",permalink:"/obsidian-jira-issue/docs/category/extra"}},p={},c=[{value:"Templater",id:"templater",level:2},{value:"Dataview",id:"dataview",level:2},{value:"Obsidian chart",id:"obsidian-chart",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-examples"},"API Examples"),(0,n.kt)("p",null,"In this page collects some examples to use the API with other plugins of Obsidian community."),(0,n.kt)("h2",{id:"templater"},"Templater"),(0,n.kt)("p",null,"Active sprint data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"<%* const projectKey = 'AAA' %>\nSprint Name: <%* tR += await $ji.macro.getActiveSprintName(projectKey) %>\nSprint Start: <%* tR += (await $ji.macro.getActiveSprint(projectKey)).startDate %>\nSprint End: <%* tR += (await $ji.macro.getActiveSprint(projectKey)).endDate %>\n")),(0,n.kt)("p",null,"Loop on search results"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'<%* const query = `project = "AAA" AND assignee = currentUser() AND resolution = Unresolved` %>\n<%* const searchResults = await $ji.base.getSearchResults(query) %>\n<%* for(const issue of searchResults.issues) { %>\n## <%* tR += `${issue.key} - ${issue.fields.summary}` %>\n\nDescription\n```\n<%* tR += issue.fields.description %>\n```\n<%* } %>\n')),(0,n.kt)("h2",{id:"dataview"},"Dataview"),(0,n.kt)("h2",{id:"obsidian-chart"},"Obsidian chart"),(0,n.kt)("p",null,"getWorklogPerDay"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"```dataviewjs\nconst projectKey = 'AAA'\nconst sprint = await $ji.macro.getActiveSprint(projectKey)\nconst chartData = await $ji.chart.getWorklogPerDay(projectKey, sprint.startDate, sprint.endDate)\ndv.paragraph(chartData, this.container)\n```\n")))}m.isMDXComponent=!0}}]);