"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76577],{59069:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=e(74848),t=e(28453),o=e(52358);const i='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">Edge</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator"> : </span><a href="../../io.github.graphglue.model/-node/index-">Node</a><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>order<span class="token operator">: </span><a href="../../io.github.graphglue.connection.order/-order/index-">Order</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Edge returned in the GraphQL API Consists of a Node and a Cursor The cursor is only valid in a specific connection context. Cursors can only be used, if the ordering of nodes is not changed. Cursors should not be used for long term storage.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>node</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../io.github.graphglue.model/-node/index-">Node</a> at the start of the edge</p></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>order</span></span></u></div></span></div><div><div class="title"><p class="paragraph">necessary for Cursor generation</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-1060849875%2FConstructors%2F545362281" anchor-label="Edge" id="-1060849875%2FConstructors%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-edge-"><span><span>Edge</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1060849875%2FConstructors%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter ">order<span class="token operator">: </span><a href="../../io.github.graphglue.connection.order/-order/index-">Order</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="1101996561%2FProperties%2F545362281" anchor-label="node" id="1101996561%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="node-"><span><span>node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1101996561%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="node-">node</a><span class="token operator">: </span><a href="index-">T</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-866956071%2FProperties%2F545362281" anchor-label="order" id="-866956071%2FProperties%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="order-"><span><span>order</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-866956071%2FProperties%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">private </span><span class="token keyword">val </span><a href="order-">order</a><span class="token operator">: </span><a href="../../io.github.graphglue.connection.order/-order/index-">Order</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="1414597670%2FFunctions%2F545362281" anchor-label="cursor" id="1414597670%2FFunctions%2F545362281" data-filterable-set=":graphglue-core/main"></a>\n          <div class="table-row" data-filterable-current=":graphglue-core/main" data-filterable-set=":graphglue-core/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="cursor-"><span><span>cursor</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1414597670%2FFunctions%2F545362281"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":graphglue-core/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="cursor-"><span class="token function">cursor</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span>&nbsp;</span>objectMapper<span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/core/kotlin-stdlib/kotlin/-string/index.html">String</a></div><div class="brief "><p class="paragraph">Generates the cursor associated with the edge</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',r={},p="Edge",d={id:"api/graphglue-core/io.github.graphglue.connection.model/-edge/index-",title:"Edge",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.connection.model/-edge/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.connection.model/-edge",slug:"/api/graphglue-core/io.github.graphglue.connection.model/-edge/index-",permalink:"/api/graphglue-core/io.github.graphglue.connection.model/-edge/index-",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"totalCount",permalink:"/api/graphglue-core/io.github.graphglue.connection.model/-connection/total-count-"},next:{title:"Edge",permalink:"/api/graphglue-core/io.github.graphglue.connection.model/-edge/-edge-"}},l={},c=[];function g(a){const n={h1:"h1",...(0,t.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"edge",children:"Edge"}),"\n",(0,s.jsx)(o.A,{dokkaHTML:i})]})}function u(a={}){const{wrapper:n}={...(0,t.R)(),...a.components};return n?(0,s.jsx)(n,{...a,children:(0,s.jsx)(g,{...a})}):g(a)}}}]);