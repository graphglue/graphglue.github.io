"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84388],{24502:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var s=t(74848),n=t(28453),i=t(52358);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">fun </span><span class="token operator">&lt;</span><a href="iterate-graph-">T</a><span class="token operator">&gt; </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html">Collection</a><span class="token operator">&lt;</span><a href="iterate-graph-">T</a><span class="token operator">&gt;</span><span class="token punctuation">.</span><a href="iterate-graph-"><span class="token function">iterateGraph</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">action<span class="token operator">: </span><span class="token punctuation">(</span><a href="iterate-graph-">T</a><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html">Collection</a><span class="token operator">&lt;</span><a href="iterate-graph-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Helper function to iterate over a graph The <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html">Collection</a> on which it is called is treated as the set of starting nodes <a href="iterate-graph-">action</a> is called for each node in the graph exactly once, and returns a set of nodes to iterate over. This returned set of nodes may contain duplicates, or nodes which have already been iterated over.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>T</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the type of node, must properly implement <code class="lang-kotlin">equals</code> and <code class="lang-kotlin">hashcode</code></p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>action</span></span></u></div></span></div><div><div class="title"><p class="paragraph">invoked for each node of the graph, returns the next nodes</p></div></div></div></div></div></div></div>\n',l={},o="iterateGraph",p={id:"api/graphglue-core/io.github.graphglue.util/iterate-graph-",title:"iterateGraph",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.util/iterate-graph-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.util",slug:"/api/graphglue-core/io.github.graphglue.util/iterate-graph-",permalink:"/api/graphglue-core/io.github.graphglue.util/iterate-graph-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"putAndInitIfAbsent",permalink:"/api/graphglue-core/io.github.graphglue.util/-cache-map/put-and-init-if-absent-"},next:{title:"graphglue",permalink:"/api/graphglue"}},c={},d=[];function h(a){const e={h1:"h1",...(0,n.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"iterategraph",children:"iterateGraph"}),"\n",(0,s.jsx)(i.A,{dokkaHTML:r})]})}function g(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(h,{...a})}):h(a)}}}]);