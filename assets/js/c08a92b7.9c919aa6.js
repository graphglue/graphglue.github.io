"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72443],{21493:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var s=e(74848),t=e(28453),i=e(52358);const r='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">ScalarFilterEntryBase</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>description<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>conditionGenerator<span class="token operator">: </span><span class="token punctuation">(</span>property<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Property///PointingToDeclaration/">Property</span><span class="token punctuation">, </span>value<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Parameter///PointingToDeclaration/">Parameter</span><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Condition///PointingToDeclaration/">Condition</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Base class for scalar filter entries Can be used to define filters for a scalar property, e.g. an <code class="lang-kotlin">in</code> or <code class="lang-kotlin">eq</code> filter</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>name</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the name of the field on the <span data-unresolved-link="graphql.schema/GraphQLInputObjectType///PointingToDeclaration/">GraphQLInputObjectType</span></p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>description</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the description of the field</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>condition</span><wbr><span><span>Generator</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to generate the condition which applies the filter in the database</p></div></div></div></div></div><h4 class="">Inheritors</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-is-null-filter-entry/index-">IsNullFilterEntry</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-scalar-filter-entry/index-">ScalarFilterEntry</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-scalar-list-filter-entry/index-">ScalarListFilterEntry</a></div></span></div><div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="1519897170%2FConstructors%2F545362281" anchor-label="ScalarFilterEntryBase" id="1519897170%2FConstructors%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-scalar-filter-entry-base-"><span>Scalar</span><wbr><span>Filter</span><wbr><span>Entry</span><wbr><span><span>Base</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1519897170%2FConstructors%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">name<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">description<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">conditionGenerator<span class="token operator">: </span><span class="token punctuation">(</span>property<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Property///PointingToDeclaration/">Property</span><span class="token punctuation">, </span>value<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Parameter///PointingToDeclaration/">Parameter</span><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Condition///PointingToDeclaration/">Condition</span></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="995855174%2FProperties%2F545362281" anchor-label="conditionGenerator" id="995855174%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="condition-generator-"><span>condition</span><wbr><span><span>Generator</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="995855174%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="condition-generator-">conditionGenerator</a><span class="token operator">: </span><span class="token punctuation">(</span>property<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Property///PointingToDeclaration/">Property</span><span class="token punctuation">, </span>value<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Parameter///PointingToDeclaration/">Parameter</span><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Condition///PointingToDeclaration/">Condition</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1447695840%2FProperties%2F545362281" anchor-label="description" id="1447695840%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="description-"><span><span>description</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1447695840%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="description-">description</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1179315667%2FProperties%2F545362281" anchor-label="name" id="1179315667%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="name-"><span><span>name</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1179315667%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="name-">name</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="-2030798579%2FFunctions%2F545362281" anchor-label="generateFilterEntry" id="-2030798579%2FFunctions%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="generate-filter-entry-"><span>generate</span><wbr><span>Filter</span><wbr><span><span>Entry</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2030798579%2FFunctions%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">fun </span><a href="generate-filter-entry-"><span class="token function">generateFilterEntry</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">scalarType<span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="token punctuation">, </span></span><span class="parameter ">neo4jName<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a></div><div class="brief "><p class="paragraph">Generates the <a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a> used in the filter</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',o={},l="ScalarFilterEntryBase",p={id:"api/graphglue-core/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-",title:"ScalarFilterEntryBase",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base",slug:"/api/graphglue-core/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-",permalink:"/api/graphglue-core/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"generateFilterEntry",permalink:"/api/graphglue-core/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry/generate-filter-entry-"},next:{title:"ScalarFilterEntryBase",permalink:"/api/graphglue-core/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/-scalar-filter-entry-base-"}},c={},d=[];function v(a){const n={h1:"h1",...(0,t.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"scalarfilterentrybase",children:"ScalarFilterEntryBase"}),"\n",(0,s.jsx)(i.A,{dokkaHTML:r})]})}function g(a={}){const{wrapper:n}={...(0,t.R)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(v,{...a})}):v(a)}}}]);