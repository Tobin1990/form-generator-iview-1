(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{199:function(e,t,n){var a=n(205);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("e91641ce",a,!0,{})},200:function(e,t,n){var a=n(207);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("81bb6994",a,!0,{})},201:function(e,t,n){var a=n(209);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("ef5e7348",a,!0,{})},202:function(e,t,n){"use strict";n(213),n(84),n(83);var a=n(214),o=n.n(a),i=(n(215),n(216)),s=n.n(i),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,o.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,o.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new s.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let a=e.match(n);return a?(a=a[0],e.slice(e.indexOf(a)+a.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},d=(n(204),n(206),n(0)),r=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},203:function(e,t,n){"use strict";n(83);var a=n(212),o={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return a.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},i=(n(208),n(0)),s=Object(i.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=s.exports},204:function(e,t,n){"use strict";var a=n(199);n.n(a).a},205:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(e,t,n){"use strict";var a=n(200);n.n(a).a},207:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(e,t,n){"use strict";var a=n(201);n.n(a).a},209:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},232:function(e,t,n){var a=n(274);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("fd594b34",a,!0,{})},271:function(e,t,n){e.exports=n.p+"static/img/inline.4de602f.jpeg"},272:function(e,t,n){e.exports=n.p+"static/img/editable-table.0b63fb8.jpeg"},273:function(e,t,n){"use strict";var a=n(232);n.n(a).a},274:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".doc-powerful-f-templates {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin: 32px 0;\n}\n.doc-powerful-f-templates-card {\n  margin-bottom: 32px;\n  width: 266px;\n  overflow: hidden;\n}\n.doc-powerful-f-templates-card .ivu-card-body {\n  padding: 0;\n}\n.doc-powerful-f-templates-card-img {\n  display: block;\n  width: 264px;\n  height: 160px;\n  border-bottom: solid 1px #e4e4e4;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.doc-powerful-f-templates-card-img img {\n  width: 100%;\n}\n.doc-powerful-f-templates-card-content {\n  padding: 20px;\n}\n.doc-powerful-f-templates-card-content h3 {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 24px;\n}\n.doc-powerful-f-templates-card-content p {\n  height: 44px;\n  margin: 4px 0 0 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n  overflow: hidden;\n}\n",""])},328:function(e,t,n){"use strict";n.r(t);var a=n(210),o=n(211),i=n(202),s=n(203);let l={};const d=[{type:"Input",label:"姓名",model:"name",hiddenOn:{hasAuth:{type:"enum",enum:[0]}}},{type:"Input",label:"年龄",model:"age",showOn:{hasAuth:{type:"enum",enum:[0]}}}],r={name:"张三",age:18,hasAuth:0,isCheck:1};l.data={fields:d,model:r},l.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: "+JSON.stringify(d)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';let c={};const p=[{type:"Input",label:"姓名",model:"name",hiddenOn:{isShow:{type:"enum",enum:[!1]}}},{type:"Input",label:"年龄",model:"age",showOn:{isShow:{type:"enum",enum:[!1]}}}],h={name:"张三",age:12},v={isShow:!1};c.data={paramsContainer:v,paramsFields:p,paramsModel:h},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: "+JSON.stringify(p)+",\n            model: "+JSON.stringify(h)+",\n            paramsContainer: "+JSON.stringify(v)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';let m={};const u=[{type:"Input",label:"姓名",model:"name",hiddenOn:{hasAuth:{type:"enum",enum:[!1]}},showOn:{isCheck:{type:"enum",enum:[!1]}}}],f={name:"张三",hasAuth:!0,isCheck:!1};m.data={bothFileds:u,bothModels:f},m.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: "+JSON.stringify(u)+",\n            model: "+JSON.stringify(f)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';let _={};const g={name:"张三",age:20,hasAuth:!0,gender:1},x=[{type:"Input",label:"姓名",model:"name"},{type:"Input",label:"年龄",model:"age",showOn:{age:{type:"number",validator:(e,t,n)=>{g.hasAuth&&1===g.gender&&t>18?n():n(new Error)}}}}];_.data={validatorFileds:x,validatorModels:g},_.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: [\n                {\n                    type: 'Input',\n                    label: '姓名',\n                    model: 'name'\n                },\n                {\n                    type: 'Input',\n                    label: '年龄',\n                    model: 'age',\n                    showOn: {\n                        age: {\n                            type: 'number',\n                            validator: validateCheck\n                        }\n                    }\n                }\n            ],\n            model: "+JSON.stringify(g)+',\n            validateCheck: (rule, value, callback) => {\n                if (model.hasAuth) {\n                    if (model.gender === 1 && value > 18) {\n                        callback();\n                    } else {\n                        callback(new Error());\n                    }\n                } else {\n                    callback(new Error());\n                }\n            };\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';var b={simple:l,bothConfig:m,params:c,validatorConfig:_},w={components:{iArticle:a.a,inAnchor:o.a,iCode:i.a,Demo:s.a},data:()=>({code:b}),methods:{handleFieldChange(){}}},y=n(0),C=Object(y.a)(w,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("组件联动显示和隐藏")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("在某些业务场景中，我们常常会需要根据某些字段来判断元素的显示隐藏(比如：权限控制),利用showOn和hiddenOn两个api，可以很好的实现这一点。我们可以把控制显示或者隐藏的字段放在表单的model中，或者在页面全局变量paramContainer中使用。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("p",[e._v("showOn&hiddenOn基于async-validator实现的数据验证，具体规则形式请参考"),n("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank"}},[n("i",{staticClass:"ivu-icon ivu-icon-social-github"}),e._v(" async-validator")]),e._v("。")]),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法（表单控制）"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.simple.data.fields,model:e.code.simple.data.model}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置hiddenOn和showOn来控制表单子组件的显示和隐藏。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"全局变量控制"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.params.data.paramsFields,model:e.code.params.data.paramsModel,"params-container":e.code.params.data.paramsContainer}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("在某些场景下，控制元素显示（隐藏）的字段可能不在表单中返回，这时，我们就可以使用paramContainer来实现元素的显示（隐藏）这一功能，只需要把变量放到paramContainer中就可以了。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.params.code))])],1),e._v(" "),n("Demo",{attrs:{title:"两者共存"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.bothConfig.data.bothFileds,model:e.code.bothConfig.data.bothModels}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("同一个表单元素同时设置showOn,hiddenOn时，满足其中一项验证规则即当项生效，同时都满足时，hiddenOn优先。我们可以利用这一点来完成业务中某些复杂的逻辑判断。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.bothConfig.code))])],1),e._v(" "),n("Demo",{attrs:{title:"复杂规则"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.validatorConfig.data.validatorFileds,model:e.code.validatorConfig.data.validatorModels}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("如果表单里某个元素的展示需要依赖表单中的其他值，我们可以自定义验证规则来实现。本例为有权限并且年龄大于20岁的男性展示年龄这一项。通过自定义validateCheck方法，将对应的验证规则放到validateCheck方法中，实现验证。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.validatorConfig.code))])],1)],1)],1)])},[],!1,null,null,null).exports;t.default=C},344:function(e,t,n){"use strict";n.r(t);var a=n(210),o=n(211),i={components:{iArticle:a.a,inAnchor:o.a},data:()=>({})},s=n(0),l=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("选择合适的组件类型")]),e._v(" "),n("p",[e._v("提供各种相似场景组件选择的建议。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"选择类",h2:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("组件类型")]),e._v(" "),n("th",[e._v("适用场景")]),e._v(" "),n("th",[e._v("推荐场景")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Switch")]),e._v(" "),n("td",[e._v("开关选择")]),e._v(" "),n("td",[e._v("只有两个选项，且为对立面")])]),e._v(" "),n("tr",[n("td",[e._v("Radio")]),e._v(" "),n("td",[e._v("直接单选")]),e._v(" "),n("td",[e._v("选择项少于6个，直接展示所有选项")])]),e._v(" "),n("tr",[n("td",[e._v("Checkbox")]),e._v(" "),n("td",[e._v("直接多选")]),e._v(" "),n("td",[e._v("选择项少于6个，直接展示所有选项")])]),e._v(" "),n("tr",[n("td",[e._v("CheckboxCard")]),e._v(" "),n("td",[e._v("卡片多选")]),e._v(" "),n("td",[e._v("多选，且需展示图文信息时")])]),e._v(" "),n("tr",[n("td",[e._v("Select")]),e._v(" "),n("td",[e._v("先下拉，再选择")]),e._v(" "),n("td",[e._v("选项大于等于6个")])]),e._v(" "),n("tr",[n("td",[e._v("LogicSelect")]),e._v(" "),n("td",[e._v("逻辑选择")]),e._v(" "),n("td",[e._v("需要进行大于、小于、等于、区间等逻辑的选择时")])]),e._v(" "),n("tr",[n("td",[e._v("Cascader")]),e._v(" "),n("td",[e._v("层级较多时的选择")]),e._v(" "),n("td",[e._v("多级单选")])]),e._v(" "),n("tr",[n("td",[e._v("Tree")]),e._v(" "),n("td",[e._v("层级较多时的选择")]),e._v(" "),n("td",[e._v("多级多选")])]),e._v(" "),n("tr",[n("td",[e._v("TableSelect")]),e._v(" "),n("td",[e._v("表格选择")]),e._v(" "),n("td",[e._v("有较多的描述信息")])]),e._v(" "),n("tr",[n("td",[e._v("Carousel")]),e._v(" "),n("td",[e._v("走马灯")]),e._v(" "),n("td",[e._v("可通过横划来进行单选，适用于图片视频媒体的单选")])])])])],1)])])},[],!1,null,null,null).exports;t.default=l},348:function(e,t,n){"use strict";n.r(t);var a=n(210);const o=[{path:"/form-inline-table",img:n(271),title:"表格行扩展编辑",desc:"表格的行可展开编辑"},{path:"/form-editable-table",img:n(272),title:"可编辑表格",desc:"直接在表格中进行编辑"}];var i={components:{iArticle:a.a},data:()=>({templates:o})},s=(n(273),n(0)),l=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",{staticClass:"doc-powerful-f"},[n("article",[n("h1",[e._v("强大的fieldGenerator")]),e._v(" "),n("p",[e._v("在开发中，输入并不总是以一个完整的表单形式出现，在复杂场景下。输入控件会内嵌至表格中，形成更复杂的如表格行内编辑、表格展开编辑场景。")]),e._v(" "),n("div",{staticClass:"doc-powerful-f-templates"},e._l(e.templates,function(t,a){return n("Card",{key:a,staticClass:"doc-powerful-f-templates-card"},[n("router-link",{attrs:{to:t.path}},[n("div",{staticClass:"doc-powerful-f-templates-card-img"},[n("img",{attrs:{src:t.img,alt:t.title}})]),e._v(" "),n("div",{staticClass:"doc-powerful-f-templates-card-content"},[n("h3",[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v("\n                            "+e._s(t.desc)+"\n                        ")])])])],1)}),1),e._v("\n        对于这样的场景，如何实现表单控件输入，并保持代码的优雅，是一个很头疼问题。但是这在我们的开发中却常常遇到。\n    ")])])},[],!1,null,null,null).exports;t.default=l},349:function(e,t,n){"use strict";n.r(t);var a={components:{iArticle:n(210).a},data:()=>({})},o=n(0),i=Object(o.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("i-article",[t("article",[t("h1",[this._v("请求拦截")]),this._v(" "),t("p",[this._v("请求拦截")])])])},[],!1,null,null,null).exports;t.default=i},351:function(e,t,n){"use strict";n.r(t);var a={components:{iArticle:n(210).a},data:()=>({})},o=n(0),i=Object(o.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("i-article",[t("article",[t("h1",[this._v("表单校验")]),this._v(" "),t("p",[this._v("如何表单校验")])])])},[],!1,null,null,null).exports;t.default=i}}]);