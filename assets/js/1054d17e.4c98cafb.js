"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3254],{63661:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>p,metadata:()=>r,toc:()=>c});var s=e(74848),i=e(28453),t=e(52358);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">NodeSubQuery</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-field-definition/index-">FieldDefinition</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>query<span class="token operator">: </span><a href="../-node-query/index-">NodeQuery</a><span class="token punctuation">, </span></span><span class="parameter ">onlyOnTypes<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token operator">&gt;</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>relationshipDefinitions<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-authorized-relation-definition/index-">AuthorizedRelationDefinition</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">resultKeyPath<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span> : <a href="../-node-query-entry/index-">NodeQueryEntry</a><span class="token operator">&lt;</span><a href="../../io.github.graphglue.definition/-field-definition/index-">FieldDefinition</a><span class="token operator">&gt; </span></div><p class="paragraph">Defines a SubQuery which is part of a <a href="../-node-query/index-">NodeQuery</a> Must only be evaluated if parent type is in <code class="lang-kotlin">onlyOnTypes</code></p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>definition</span></span></u></div></span></div><div><div class="title"><p class="paragraph">definition of the queried field</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>query</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the subquery</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>only</span><wbr><span>On</span><wbr><span><span>Types</span></span></u></div></span></div><div><div class="title"><p class="paragraph">a list of parent types on which this should be evaluated</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>relationship</span><wbr><span><span>Definitions</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines the chain of relationships to fetch</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>result</span><wbr><span>Key</span><wbr><span><span>Path</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the path to the key which fetches this field</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-1470234170%2FConstructors%2F545362281" anchor-label="NodeSubQuery" id="-1470234170%2FConstructors%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-node-sub-query-"><span>Node</span><wbr><span>Sub</span><wbr><span><span>Query</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1470234170%2FConstructors%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-field-definition/index-">FieldDefinition</a><span class="token punctuation">, </span></span><span class="parameter ">query<span class="token operator">: </span><a href="../-node-query/index-">NodeQuery</a><span class="token punctuation">, </span></span><span class="parameter ">onlyOnTypes<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token operator">&gt;</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">relationshipDefinitions<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-authorized-relation-definition/index-">AuthorizedRelationDefinition</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">resultKeyPath<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="537915032%2FProperties%2F545362281" anchor-label="cost" id="537915032%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="cost-"><span><span>cost</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="537915032%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="cost-">cost</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-int/index.html">Int</a></div><div class="brief "><p class="paragraph">The cost of the underlying <a href="query-">query</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-2053655738%2FProperties%2F545362281" anchor-label="fieldDefinition" id="-2053655738%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-node-query-entry/field-definition-"><span>field</span><wbr><span><span>Definition</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2053655738%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../-node-query-entry/field-definition-">fieldDefinition</a><span class="token operator">: </span><a href="../../io.github.graphglue.definition/-field-definition/index-">FieldDefinition</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-940741947%2FProperties%2F545362281" anchor-label="onlyOnTypes" id="-940741947%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-node-query-entry/only-on-types-"><span>only</span><wbr><span>On</span><wbr><span><span>Types</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-940741947%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../-node-query-entry/only-on-types-">onlyOnTypes</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token operator">&gt;</span><span class="token operator">?</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1381944595%2FProperties%2F545362281" anchor-label="query" id="-1381944595%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="query-"><span><span>query</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1381944595%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="query-">query</a><span class="token operator">: </span><a href="../-node-query/index-">NodeQuery</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-394005107%2FProperties%2F545362281" anchor-label="relationshipDefinitions" id="-394005107%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="relationship-definitions-"><span>relationship</span><wbr><span><span>Definitions</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-394005107%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="relationship-definitions-">relationshipDefinitions</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-authorized-relation-definition/index-">AuthorizedRelationDefinition</a><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="2141034412%2FProperties%2F545362281" anchor-label="resultKeyPath" id="2141034412%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-node-query-entry/result-key-path-"><span>result</span><wbr><span>Key</span><wbr><span><span>Path</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="2141034412%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../-node-query-entry/result-key-path-">resultKeyPath</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="1397783774%2FFunctions%2F545362281" anchor-label="affectsNode" id="1397783774%2FFunctions%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-node-query-entry/affects-node-"><span>affects</span><wbr><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1397783774%2FFunctions%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="../-node-query-entry/affects-node-"><span class="token function">affectsNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="../../io.github.graphglue.model/-node/index-">Node</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">Checks if this entry affects the given node</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',p={},l="NodeSubQuery",r={id:"api/graphglue-core/io.github.graphglue.data.execution/-node-sub-query/index-",title:"NodeSubQuery",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.data.execution/-node-sub-query/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.data.execution/-node-sub-query",slug:"/api/graphglue-core/io.github.graphglue.data.execution/-node-sub-query/index-",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-sub-query/index-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"totalCount",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query-result/total-count-"},next:{title:"NodeSubQuery",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-node-sub-query/-node-sub-query-"}},d={},c=[];function u(a){const n={h1:"h1",...(0,i.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nodesubquery",children:"NodeSubQuery"}),"\n",(0,s.jsx)(t.A,{dokkaHTML:o})]})}function v(a={}){const{wrapper:n}={...(0,i.R)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(u,{...a})}):u(a)}}}]);