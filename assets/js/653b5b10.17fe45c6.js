"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91181],{60935:(a,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var e=t(74848),s=t(28453),i=t(52358);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">data </span><span class="token keyword">class </span><a href="index-">TypeFilterDefinitionEntry</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>associatedType<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-type/index.html">KType</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>filterDefinitionFactory<span class="token operator">: </span><span class="token punctuation">(</span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span>property<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property1/index.html">KProperty1</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token punctuation">, </span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">, </span>parentNodeDefinition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span>subFilterGenerator<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-sub-filter-generator/index-">SubFilterGenerator</a><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Wrapper which associates a type with a FilterDefinitionEntry Used to define filters for a specific type, so that properties of that type can be annotated with <a href="../../io.github.graphglue.model/-filter-property/index-">FilterProperty</a></p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>associated</span><wbr><span><span>Type</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the supported type of the property</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>filter</span><wbr><span>Definition</span><wbr><span><span>Factory</span></span></u></div></span></div><div><div class="title"><p class="paragraph">function to convert the property into a filter, if null is returned, no filter is added</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="1067775062%2FConstructors%2F-1005884737" anchor-label="TypeFilterDefinitionEntry" id="1067775062%2FConstructors%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-type-filter-definition-entry-"><span>Type</span><wbr><span>Filter</span><wbr><span>Definition</span><wbr><span><span>Entry</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1067775062%2FConstructors%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">associatedType<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-type/index.html">KType</a><span class="token punctuation">, </span></span><span class="parameter ">filterDefinitionFactory<span class="token operator">: </span><span class="token punctuation">(</span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span>property<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property1/index.html">KProperty1</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token punctuation">, </span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">, </span>parentNodeDefinition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span>subFilterGenerator<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-sub-filter-generator/index-">SubFilterGenerator</a><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="568290470%2FProperties%2F-1005884737" anchor-label="associatedType" id="568290470%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="associated-type-"><span>associated</span><wbr><span><span>Type</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="568290470%2FProperties%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="associated-type-">associatedType</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-type/index.html">KType</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1341714645%2FProperties%2F-1005884737" anchor-label="filterDefinitionFactory" id="1341714645%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="filter-definition-factory-"><span>filter</span><wbr><span>Definition</span><wbr><span><span>Factory</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1341714645%2FProperties%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="filter-definition-factory-">filterDefinitionFactory</a><span class="token operator">: </span><span class="token punctuation">(</span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span>property<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property1/index.html">KProperty1</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token punctuation">, </span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">, </span>parentNodeDefinition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span>subFilterGenerator<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-sub-filter-generator/index-">SubFilterGenerator</a><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a><span class="token operator">?</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',r={},p="TypeFilterDefinitionEntry",l={id:"api/graphglue-core/io.github.graphglue.connection.filter/-type-filter-definition-entry/index-",title:"TypeFilterDefinitionEntry",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.connection.filter/-type-filter-definition-entry/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.connection.filter/-type-filter-definition-entry",slug:"/api/graphglue-core/io.github.graphglue.connection.filter/-type-filter-definition-entry/index-",permalink:"/api/graphglue-core/io.github.graphglue.connection.filter/-type-filter-definition-entry/index-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"generateFilterEntries",permalink:"/api/graphglue-core/io.github.graphglue.connection.filter/-node-filter-generator/generate-filter-entries-"},next:{title:"TypeFilterDefinitionEntry",permalink:"/api/graphglue-core/io.github.graphglue.connection.filter/-type-filter-definition-entry/-type-filter-definition-entry-"}},c={},d=[];function u(a){const n={h1:"h1",...(0,s.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"typefilterdefinitionentry",children:"TypeFilterDefinitionEntry"}),"\n",(0,e.jsx)(i.A,{dokkaHTML:o})]})}function f(a={}){const{wrapper:n}={...(0,s.R)(),...a.components};return n?(0,e.jsx)(n,{...a,children:(0,e.jsx)(u,{...a})}):u(a)}}}]);