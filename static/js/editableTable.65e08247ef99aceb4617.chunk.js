(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{739:function(e,t,l){var a=l(791);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,l(45).default)("b0f923d2",a,!0,{})},790:function(e,t,l){"use strict";var a=l(739);l.n(a).a},791:function(e,t,l){(e.exports=l(44)(!1)).push([e.i,".editable-table-demo .ivu-form-item {\n  margin-top: 20px;\n}\n.editable-table-demo .ivu-table,\n.editable-table-demo .ivu-table-wrapper,\n.editable-table-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},846:function(e,t,l){"use strict";l.r(t);var a=[{title:"姓名",slot:"name",formField:{type:"Input",model:"name",placeholder:"请输入用户名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]}},{title:"年龄",slot:"age",formField:{type:"InputNumber",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0}},{title:"性别",slot:"gender",formField:{type:"Select",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]}},{title:"出生日期",slot:"birthday",formField:{type:"DatePicker",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0}},{title:"地址",key:"address"},{title:"操作",slot:"action",formField:{type:"Submit",text:"保存"}}],d=[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",address:"北京市朝阳区芍药居"},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",address:"北京市海淀区西二旗"},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",address:"上海市浦东新区世纪大道"},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",address:"深圳市南山区深南大道"}],i={data:()=>({columns:a,data:d,editModel:{}}),methods:{handleEdit(e,t){this.editModel=e,this.editModel.index=t},handleDelete(e,t){this.data.splice(t,1)},handleSave(e){this.$refs.form.validate(t=>{t&&(this.data.splice(e,1,this.editModel),this.editModel.index=-1)})}}},n=(l(790),l(1)),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"editable-table-demo"},[l("Form",{ref:"form",attrs:{model:e.editModel}},[l("Table",{attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,(function(t){return{key:t.slot,fn:function(a){var d=a.row,i=a.index;return[e.editModel.index===i?l("FieldGenerator",{key:t.slot,attrs:{field:t.formField},on:{"on-submit":function(t){return e.handleSave(i)}}}):"action"!==t.slot?l("span",{key:t.slot},[e._v("\n                    "+e._s(d[t.slot])+"\n                ")]):l("div",{key:t.slot},[l("Button",{on:{click:function(t){return e.handleEdit(d,i)}}},[e._v("编辑")]),e._v(" "),l("Poptip",{attrs:{confirm:"",placement:"left",title:"确认删除"},on:{"on-ok":e.handleDelete}},[l("Button",[e._v("删除")])],1)],1)]}}}))],null,!0)})],1)],1)}),[],!1,null,null,null).exports;t.default=o}}]);