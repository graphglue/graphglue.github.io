"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50918],{13439:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>p,toc:()=>c});var n=l(74848),o=l(28453),i=l(52358);const s='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">private </span><span class="token keyword">fun </span><a href="generate-final-allow-rules-"><span class="token function">generateFinalAllowRules</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">tempAllowRules<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-set/index.html">Set</a><span class="token operator">&lt;</span><a href="../-node-allow-rule/index-">NodeAllowRule</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">allowAllNodeDefinitions<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-set/index.html">Set</a><span class="token operator">&lt;</span><a href="../-node-definition/index-">NodeDefinition</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-set/index.html">Set</a><span class="token operator">&lt;</span><a href="../-node-allow-rule/index-">NodeAllowRule</a><span class="token operator">&gt;</span></div><p class="paragraph">Takes a temporary set of <a href="../-node-allow-rule/index-">NodeAllowRule</a> and a set of allow all <a href="../-node-definition/index-">NodeDefinition</a>s and creates the final set of <a href="../-node-allow-rule/index-">NodeAllowRule</a>s</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the transformed <a href="generate-final-allow-rules-">tempAllowRules</a> and a new <a href="../-node-allow-rule/index-">NodeAllowRule</a> generated based on <a href="generate-final-allow-rules-">allowAllNodeDefinitions</a>     (if necessary)</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>temp</span><wbr><span>Allow</span><wbr><span><span>Rules</span></span></u></div></span></div><div><div class="title"><p class="paragraph">already existing <a href="../-node-allow-rule/index-">NodeAllowRule</a>s, merged by <a href="../-node-allow-rule/allow-rule-">NodeAllowRule.allowRule</a></p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>allow</span><wbr><span>All</span><wbr><span>Node</span><wbr><span><span>Definitions</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to create a new <a href="../-node-allow-rule/index-">NodeAllowRule</a> without a <a href="../-node-allow-rule/allow-rule-">NodeAllowRule.allowRule</a></p></div></div></div></div></div></div></div>\n',t={},r="generateFinalAllowRules",p={id:"api/graphglue-core/io.github.graphglue.definition/-node-definition-collection/generate-final-allow-rules-",title:"generateFinalAllowRules",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.definition/-node-definition-collection/generate-final-allow-rules-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.definition/-node-definition-collection",slug:"/api/graphglue-core/io.github.graphglue.definition/-node-definition-collection/generate-final-allow-rules-",permalink:"/api/graphglue-core/io.github.graphglue.definition/-node-definition-collection/generate-final-allow-rules-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"generateDisallowRule",permalink:"/api/graphglue-core/io.github.graphglue.definition/-node-definition-collection/generate-disallow-rule-"},next:{title:"generateFullAuthorizationCondition",permalink:"/api/graphglue-core/io.github.graphglue.definition/-node-definition-collection/generate-full-authorization-condition-"}},d={},c=[];function u(e){const a={h1:"h1",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"generatefinalallowrules",children:"generateFinalAllowRules"}),"\n",(0,n.jsx)(i.A,{dokkaHTML:s})]})}function g(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);