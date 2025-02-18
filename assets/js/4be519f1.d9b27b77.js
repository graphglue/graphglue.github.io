"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34426],{3097:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var s=e(74848),t=e(28453),i=e(52358);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">QueryBase</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator"> : </span><a href="index-">QueryBase</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>entries<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-node-query-entry/index-">NodeQueryEntry</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Base class for queries</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>definition</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines which type of <a href="../../io.github.graphglue.model/-node/index-">Node</a> is fetched</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>entries</span></span></u></div></span></div><div><div class="title"><p class="paragraph">parts of the query to execute with this query</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>T</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the type of the query</p></div></div></div></div></div><h4 class="">Inheritors</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-node-query/index-">NodeQuery</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-partial-node-query/index-">PartialNodeQuery</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-search-query/index-">SearchQuery</a></div></span></div><div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-997706196%2FConstructors%2F545362281" anchor-label="QueryBase" id="-997706196%2FConstructors%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-query-base-"><span>Query</span><wbr><span><span>Base</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-997706196%2FConstructors%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter ">entries<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-node-query-entry/index-">NodeQueryEntry</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1322732275%2FProperties%2F545362281" anchor-label="cost" id="-1322732275%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="cost-"><span><span>cost</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1322732275%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="cost-">cost</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-int/index.html">Int</a></div><div class="brief "><p class="paragraph">The cost of this NodeQueryPart</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="774783111%2FProperties%2F545362281" anchor-label="definition" id="774783111%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="definition-"><span><span>definition</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="774783111%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="definition-">definition</a><span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1839326096%2FProperties%2F545362281" anchor-label="entries" id="1839326096%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="entries-"><span><span>entries</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1839326096%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="entries-">entries</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-node-query-entry/index-">NodeQueryEntry</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="62960020%2FProperties%2F545362281" anchor-label="entryLookup" id="62960020%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="entry-lookup-"><span>entry</span><wbr><span><span>Lookup</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="62960020%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">private </span><span class="token keyword">val </span><a href="entry-lookup-">entryLookup</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-node-query-entry/index-">NodeQueryEntry</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">Lookup to get an entry efficiently by <code class="lang-kotlin">resultKeyPath</code> Each group contains all entries under a specific resultKey Necessary as <code class="lang-kotlin">resultKey</code> may not be unique, as only <a href="../-node-query-entry/result-key-path-">NodeQueryEntry.resultKeyPath</a> with any element of <a href="../-node-query-entry/only-on-types-">NodeQueryEntry.onlyOnTypes</a> must be unique</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="-1481152213%2FFunctions%2F545362281" anchor-label="affectsNode" id="-1481152213%2FFunctions%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="affects-node-"><span>affects</span><wbr><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1481152213%2FFunctions%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="affects-node-"><span class="token function">affectsNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="../../io.github.graphglue.model/-node/index-">Node</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">Checks if any part of this node query affects the given node</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1319513529%2FFunctions%2F545362281" anchor-label="copyWithEntries" id="-1319513529%2FFunctions%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="copy-with-entries-"><span>copy</span><wbr><span>With</span><wbr><span><span>Entries</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1319513529%2FFunctions%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">fun </span><a href="copy-with-entries-"><span class="token function">copyWithEntries</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">entries<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../-node-query-entry/index-">NodeQueryEntry</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="index-">T</a></div><div class="brief "><p class="paragraph">Copies this query and sets the entries to the given entries</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-514607714%2FFunctions%2F545362281" anchor-label="getEntry" id="-514607714%2FFunctions%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="get-entry-"><span>get</span><wbr><span><span>Entry</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-514607714%2FFunctions%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="get-entry-"><span class="token function">getEntry</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">resultKey<span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">nodeDefinitionProvider<span class="token operator">: </span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../-node-query-entry/index-">NodeQueryEntry</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">Gets an entry by <a href="../-node-query-entry/result-key-path-">NodeQueryEntry.resultKeyPath</a>. As multiple subqueries can use the same <code class="lang-kotlin">resultKeyPath</code> if they use different <a href="../-node-query-entry/only-on-types-">NodeQueryEntry.onlyOnTypes</a>, a list of <a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a>s may be necessary to get the correct subquery. This is provided as provider as evaluation is expensive and only necessary in few cases</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',p={},r="QueryBase",l={id:"api/graphglue-core/io.github.graphglue.data.execution/-query-base/index-",title:"QueryBase",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.data.execution/-query-base/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.data.execution/-query-base",slug:"/api/graphglue-core/io.github.graphglue.data.execution/-query-base/index-",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-query-base/index-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"totalCount",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-partial-node-query-result/total-count-"},next:{title:"QueryBase",permalink:"/api/graphglue-core/io.github.graphglue.data.execution/-query-base/-query-base-"}},d={},c=[];function u(a){const n={h1:"h1",...(0,t.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"querybase",children:"QueryBase"}),"\n",(0,s.jsx)(i.A,{dokkaHTML:o})]})}function v(a={}){const{wrapper:n}={...(0,t.R)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(u,{...a})}):u(a)}}}]);