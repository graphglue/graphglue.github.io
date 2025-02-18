"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2853],{70070:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=s(74848),t=s(28453),r=s(52358);const i='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">private </span><span class="token keyword">fun </span><a href="create-entries-sub-queries-recursive-"><span class="token function">createEntriesSubQueriesRecursive</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">builder<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/StatementBuilder.OngoingReading///PointingToDeclaration/">StatementBuilder.OngoingReading</span><span class="token punctuation">, </span></span><span class="parameter ">nodeQuery<span class="token operator">: </span><a href="../-query-base/index-">QueryBase</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">allNodes<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/SymbolicName///PointingToDeclaration/">SymbolicName</span><span class="token punctuation">, </span></span><span class="parameter ">unwindCount<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-int/index.html">Int</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-pair/index.html">Pair</a><span class="token operator">&lt;</span><span data-unresolved-link="org.neo4j.cypherdsl.core/StatementBuilder.OngoingReading///PointingToDeclaration/">StatementBuilder.OngoingReading</span><span class="token punctuation">, </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span data-unresolved-link="org.neo4j.cypherdsl.core/SymbolicName///PointingToDeclaration/">SymbolicName</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><p class="paragraph">Creates SubQueries for each SubQuery in the provided <a href="create-entries-sub-queries-recursive-">nodeQuery</a> Generates recursively depth first.</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the new statement builder, and a list of all names to return (names of the SubQuery results)</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>builder</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the builder to add the SubQuery calls to</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>node</span><wbr><span><span>Query</span></span></u></div></span></div><div><div class="title"><p class="paragraph">contains the SubQuery entries</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>all</span><wbr><span><span>Nodes</span></span></u></div></span></div><div><div class="title"><p class="paragraph">name of the collection containing all nodes, should be a nested collection of depth <a href="create-entries-sub-queries-recursive-">unwindCount</a></p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>unwind</span><wbr><span><span>Count</span></span></u></div></span></div><div><div class="title"><p class="paragraph">nesting depth of <a href="create-entries-sub-queries-recursive-">allNodes</a> collection</p></div></div></div></div></div></div></div>\n',o={},l="createEntriesSubQueriesRecursive",p={id:"api/graphglue-core/io.github.graphglue.data.execution/-node-query-executor/create-entries-sub-queries-recursive-",title:"createEntriesSubQueriesRecursive",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.data.execution/-node-query-executor/create-entries-sub-queries-recursive-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.data.execution/-node-query-executor",slug:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-executor/create-entries-sub-queries-recursive-",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-executor/create-entries-sub-queries-recursive-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"client",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-executor/client-"},next:{title:"createPartialRootNodeQuery",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-executor/create-partial-root-node-query-"}},c={},u=[];function d(e){const a={h1:"h1",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"createentriessubqueriesrecursive",children:"createEntriesSubQueriesRecursive"}),"\n",(0,n.jsx)(r.A,{dokkaHTML:i})]})}function g(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);