(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{741:function(e,t,a){var l=a(794);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,a(45).default)("2e583dfb",l,!0,{})},793:function(e,t,a){"use strict";var l=a(741);a.n(l).a},794:function(e,t,a){(e.exports=a(44)(!1)).push([e.i,".audit-detail-example-demo-table-td-img {\n  width: 100%;\n}\n.audit-detail-example-demo-modal-img {\n  width: 100%;\n}\n.audit-detail-example-demo-section {\n  margin: 30px auto;\n}\n.audit-detail-example-demo-header {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.audit-detail-example-demo .ivu-form-item {\n  margin-top: 20px;\n}\n.audit-detail-example-demo .ivu-table,\n.audit-detail-example-demo .ivu-table-wrapper,\n.audit-detail-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},863:function(e,t,a){"use strict";a.r(t);a(96);var l=[{title:"用户信息",sectionKey:"userInfo",table:{columns:[{title:"项",key:"label",width:150},{title:"值",key:"value",width:"auto"},{title:"操作",slot:"action",width:300,formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],rules:[{required:!0,message:"请选择审核结论"}]},{type:"Select",model:"reason",placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],rules:[{required:!0,message:"请选择原因"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",rules:[{required:!0,message:"请输入原因"}],showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}]}},{title:"用户图片信息-checkboxCard",sectionKey:"upload",table:{columns:[{title:"项",key:"label",width:150,img:!0},{title:"图拍列表",slot:"imgList",width:"auto",formFields:[{type:"List",model:"value",cardWidth:"120px",cardHeight:"90px"}]},{title:"操作",slot:"action",width:300,formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],rules:[{required:!0,message:"请选择审核结论"}]},{type:"Select",model:"reason",placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],rules:[{required:!0,message:"请选择原因"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",rules:[{required:!0,message:"请输入原因"}],showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}]}},{title:"案件审核结论",sectionKey:"result",table:{columns:[{title:"项",key:"label",width:150},{title:"操作",slot:"action",width:"auto",formFields:[{type:"Input",subtype:"textarea",model:"finalResult",placeholder:"请输入最终审核结论",rules:[{required:!0,message:"请输入最终审核结论"}]}]}]}}],i={userInfo:{name:"会员姓名",ID:"身份证号",time:"确诊时间",diseaseName:"确诊疾病",hospital:"确诊医院"},upload:{idImgs:"身份证"},result:{conclusion:"结论"}},s={userInfo:{name:"张三",ID:"1234567890123",time:"2019-11-20",diseaseName:"急性心肌梗塞伴",hospital:"北京市协和医院"},upload:{idImgs:[{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{id:"33",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"}]},result:{conclusion:"XXXXXXXXXX"}};l=l.map(e=>{var{sectionKey:t}=e,a=i[t],l=s[t];return e.table.data=Object.keys(l).map(e=>({key:e,label:a[e],value:l[e]})),e});var o={data:()=>({pageConfig:l,formModel:{},modalOpen:!1,modalImgUrl:""}),methods:{handleButtonEvent(e,t,a){this[e.name](t,a)},handleFieldChange(e,t,a){var{model:l,value:i}=e,{key:s}=t;this.$refs[a][0].validate(),this.formModel[s]||this.$set(this.formModel,s,{}),this.$set(this.formModel[s],l,i)},handleSave(){var e=0,t=Object.keys(this.$refs);t.forEach(a=>{this.$refs[a][0].validate().then(a=>{a&&e++,e===t.length&&this.$Message.success("All Valid!formModel:"+JSON.stringify(this.formModel))}).catch(e=>{console.log(e)})})},handleImgClick(e){this.modalOpen=!0,this.modalImgUrl=e},handleListItemClick(e){var{url:t}=e;this.modalOpen=!0,this.modalImgUrl=t}}},n=(a(793),a(1)),d=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"audit-detail-example-demo"},[e._l(e.pageConfig,(function(t){return a("div",{key:t.title,staticClass:"audit-detail-example-demo-section"},[a("h3",{staticClass:"audit-detail-example-demo-header"},[e._v("\n            "+e._s(t.title)+"\n        ")]),e._v(" "),a("Table",{staticClass:"audit-detail-example-demo-table",attrs:{columns:t.table.columns,data:t.table.data,"show-header":!1},scopedSlots:e._u([e._l(t.table.columns,(function(t){return{key:t.slot,fn:function(l){var i=l.row,s=l.index;return[t.formFields?a("Form",{key:t.slot,ref:t.slot+i.key,refInFor:!0,attrs:{model:i}},e._l(t.formFields,(function(l,o){return a("FieldGenerator",{key:o,attrs:{field:l},on:{"on-field-change":function(a){return e.handleFieldChange(a,i,t.slot+i.key)},"on-button-event":function(t){return e.handleButtonEvent(t,i,s)},"on-list-item-click":e.handleListItemClick}})})),1):e._e()]}}}))],null,!0)})],1)})),e._v(" "),a("div",{staticClass:"audit-detail-example-footer-actions"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("提交保存")])],1),e._v(" "),a("Modal",{attrs:{width:800},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[a("img",{staticClass:"audit-detail-example-demo-modal-img",attrs:{src:e.modalImgUrl,alt:""}})])],2)}),[],!1,null,null,null);t.default=d.exports}}]);