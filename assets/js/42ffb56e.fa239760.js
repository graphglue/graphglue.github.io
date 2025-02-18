"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6249],{3626:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=s(74848),r=s(28453),i=s(52358);const t='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">internal </span><span class="token keyword">fun </span><a href="generate-search-query-"><span class="token function">generateSearchQuery</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">definition<span class="token operator">: </span><a href="../../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter ">context<span class="token operator">: </span><a href="../../-field-fetching-context/index-">FieldFetchingContext</a><span class="token punctuation">, </span></span><span class="parameter ">requiredPermission<span class="token operator">: </span><a href="../../../io.github.graphglue.authorization/-permission/index-">Permission</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">authorizationCondition<span class="token operator">: </span><a href="../../-cypher-condition-generator/index-">CypherConditionGenerator</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../-search-query/index-">SearchQuery</a></div><p class="paragraph">Generates a <a href="../../-search-query/index-">SearchQuery</a> which loads multiple <a href="../../../io.github.graphglue.model/-node/index-">Node</a>s</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the generated <a href="../../-search-query/index-">SearchQuery</a> to load the nodes</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>definition</span></span></u></div></span></div><div><div class="title"><p class="paragraph"><a href="../../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a> of the nodes to load</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">provides the sub-selection set, result path and arguments</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>required</span><wbr><span><span>Permission</span></span></u></div></span></div><div><div class="title"><p class="paragraph">optional required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Condition</span></span></u></div></span></div><div><div class="title"><p class="paragraph">optional authorization condition generated for the current query</p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">private </span><span class="token keyword">fun </span><a href="generate-search-query-"><span class="token function">generateSearchQuery</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">nodeDefinition<span class="token operator">: </span><a href="../../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter ">context<span class="token operator">: </span><a href="../../-field-fetching-context/index-">FieldFetchingContext</a><span class="token punctuation">, </span></span><span class="parameter ">additionalConditions<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../-cypher-condition-generator/index-">CypherConditionGenerator</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">requiredPermission<span class="token operator">: </span><a href="../../../io.github.graphglue.authorization/-permission/index-">Permission</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../-search-query/index-">SearchQuery</a></div><p class="paragraph">Generates a <a href="../../-search-query/index-">SearchQuery</a> which loads multiple <a href="../../../io.github.graphglue.model/-node/index-">Node</a>s</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the generated <a href="../../-search-query/index-">SearchQuery</a> to load the node</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>node</span><wbr><span><span>Definition</span></span></u></div></span></div><div><div class="title"><p class="paragraph">definition of the nodes to load</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">provides the sub-selection set, result path and arguments</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>additional</span><wbr><span><span>Conditions</span></span></u></div></span></div><div><div class="title"><p class="paragraph">list of conditions which are applied to filter the returned node</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>required</span><wbr><span><span>Permission</span></span></u></div></span></div><div><div class="title"><p class="paragraph">optional required permission</p></div></div></div></div></div></div></div>\n',p={},o="generateSearchQuery",l={id:"api/graphglue-core/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-instance/generate-search-query-",title:"generateSearchQuery",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-instance/generate-search-query-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-instance",slug:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-instance/generate-search-query-",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-instance/generate-search-query-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"generateQueryEntries",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-instance/generate-query-entries-"},next:{title:"generateSubQuery",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-instance/generate-sub-query-"}},d={},c=[];function u(a){const e={h1:"h1",...(0,r.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"generatesearchquery",children:"generateSearchQuery"}),"\n",(0,n.jsx)(i.A,{dokkaHTML:t})]})}function h(a={}){const{wrapper:e}={...(0,r.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(u,{...a})}):u(a)}}}]);