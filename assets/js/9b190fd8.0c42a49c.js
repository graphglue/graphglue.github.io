"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60634],{74805:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var s=n(74848),t=n(28453),o=n(52358);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">fun </span><span class="token operator">&lt;</span><a href="from-query-result-">T</a><span class="token operator"> : </span><a href="../../../io.github.graphglue.model/-node/index-">Node</a><span class="token operator">&gt; </span><a href="from-query-result-"><span class="token function">fromQueryResult</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">queryResult<span class="token operator">: </span><a href="../../../io.github.graphglue.data.execution/-node-query-result/index-">NodeQueryResult</a><span class="token operator">&lt;</span><a href="from-query-result-">T</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">objectMapper<span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../index-">Connection</a><span class="token operator">&lt;</span><a href="from-query-result-">T</a><span class="token operator">&gt;</span></div><p class="paragraph">Creates a <a href="../index-">Connection</a> from a <a href="../../../io.github.graphglue.data.execution/-node-query-result/index-">NodeQueryResult</a> The provided <code class="lang-kotlin">queryResult</code> may contain one more <a href="../../../io.github.graphglue.model/-node/index-">Node</a> then defined by first or last to calculate hasNextPage and hasPreviousPage. If so, this node is removed from the node list</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the generated <a href="../index-">Connection</a></p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>T</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../../io.github.graphglue.model/-node/index-">Node</a> type of the returned <a href="../index-">Connection</a></p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>query</span><wbr><span><span>Result</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the result of the database query</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>object</span><wbr><span><span>Mapper</span></span></u></div></span></div><div><div class="title"><p class="paragraph">necessary for cursor generation</p></div></div></div></div></div></div></div>\n',i={},l="fromQueryResult",p={id:"api/graphglue-core/io.github.graphglue.connection.model/-connection/-companion/from-query-result-",title:"fromQueryResult",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.connection.model/-connection/-companion/from-query-result-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.connection.model/-connection/-companion",slug:"/api/graphglue-core/io.github.graphglue.connection.model/-connection/-companion/from-query-result-",permalink:"/api/graphglue-core/io.github.graphglue.connection.model/-connection/-companion/from-query-result-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Companion",permalink:"/api/graphglue-core/io.github.graphglue.connection.model/-connection/-companion/index-"},next:{title:"Connection",permalink:"/api/graphglue-core/io.github.graphglue.connection.model/-connection/-connection-"}},c={},d=[];function u(a){const e={h1:"h1",...(0,t.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"fromqueryresult",children:"fromQueryResult"}),"\n",(0,s.jsx)(o.A,{dokkaHTML:r})]})}function g(a={}){const{wrapper:e}={...(0,t.R)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(u,{...a})}):u(a)}}}]);