"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32944],{44490:(a,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=s(74848),l=s(28453),e=s(52358);const i='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.annotation/-target/index.html"><span class="token annotation builtin">Target</span></a><span class="token punctuation">(</span><span>allowedTargets<span class="token operator"> = </span><span class="token punctuation">[</span><span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.annotation/-annotation-target/-c-l-a-s-s/index.html">AnnotationTarget.CLASS</a></span><wbr><span class="token punctuation">]</span></span><wbr><span class="token punctuation">)</span></div></div><span class="token keyword">annotation class </span><a href="index-">Authorization</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>allow<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]<span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>allowFromRelated<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]<span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>disallow<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]<span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>allowAll<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token operator"> = </span><span class="token boolean">false</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Defines an authorization permission for a <a href="../-node/index-">Node</a> To get the authorization definition for a specific <a href="../-node/index-">Node</a>, the annotations on the class and all subclasses are merged.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>name</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines which authorization permission is defined (e.g. READ)</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>allow</span></span></u></div></span></div><div><div class="title"><p class="paragraph">rules which allow access, access is only granted if any of the rules evaluates to <code class="lang-kotlin">true</code>.     Works in combination with <code class="lang-kotlin">allowFromRelated</code></p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>allow</span><wbr><span>From</span><wbr><span><span>Related</span></span></u></div></span></div><div><div class="title"><p class="paragraph">allow access can also be inherited from related nodes, must be equal to a relation property     name. Works in combination with <code class="lang-kotlin">allow</code></p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>disallow</span></span></u></div></span></div><div><div class="title"><p class="paragraph">rules which disallow access, if any rule evaluates to <code class="lang-kotlin">true</code>, access is not granted (independent of     <code class="lang-kotlin">allow</code> and <code class="lang-kotlin">allowFromRelated</code>)</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>allow</span><wbr><span><span>All</span></span></u></div></span></div><div><div class="title"><p class="paragraph">if <code class="lang-kotlin">true</code>, allow is always granted</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="1579189982%2FProperties%2F-1005884737" anchor-label="allow" id="1579189982%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="allow-"><span><span>allow</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1579189982%2FProperties%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="allow-">allow</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="583262875%2FProperties%2F-1005884737" anchor-label="allowAll" id="583262875%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="allow-all-"><span>allow</span><wbr><span><span>All</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="583262875%2FProperties%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="allow-all-">allowAll</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token operator"> = </span><span class="token boolean">false</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-611716069%2FProperties%2F-1005884737" anchor-label="allowFromRelated" id="-611716069%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="allow-from-related-"><span>allow</span><wbr><span>From</span><wbr><span><span>Related</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-611716069%2FProperties%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="allow-from-related-">allowFromRelated</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-107110888%2FProperties%2F-1005884737" anchor-label="disallow" id="-107110888%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="disallow-"><span><span>disallow</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-107110888%2FProperties%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="disallow-">disallow</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="129542152%2FProperties%2F-1005884737" anchor-label="name" id="129542152%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="name-"><span><span>name</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="129542152%2FProperties%2F-1005884737"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="name-">name</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',o={},r="Authorization",p={id:"api/graphglue-core/io.github.graphglue.model/-authorization/index-",title:"Authorization",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.model/-authorization/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.model/-authorization",slug:"/api/graphglue-core/io.github.graphglue.model/-authorization/index-",permalink:"/api/graphglue-core/io.github.graphglue.model/-authorization/index-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"subclass",permalink:"/api/graphglue-core/io.github.graphglue.model/-aggregation-entry/subclass-"},next:{title:"allowAll",permalink:"/api/graphglue-core/io.github.graphglue.model/-authorization/allow-all-"}},d={},c=[];function v(a){const n={h1:"h1",...(0,l.R)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"authorization",children:"Authorization"}),"\n",(0,t.jsx)(e.A,{dokkaHTML:i})]})}function g(a={}){const{wrapper:n}={...(0,l.R)(),...a.components};return n?(0,t.jsx)(n,{...a,children:(0,t.jsx)(v,{...a})}):v(a)}}}]);