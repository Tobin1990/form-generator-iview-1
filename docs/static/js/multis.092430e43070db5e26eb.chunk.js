(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{233:function(e,a,t){var l=t(281);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,t(13).default)("0489d92c",l,!0,{})},280:function(e,a,t){"use strict";var l=t(233);t.n(l).a},281:function(e,a,t){(e.exports=t(12)(!1)).push([e.i,".container[data-v-07a37acd] {\n  margin: 10px 40px;\n  width: 90%;\n}\n",""])},342:function(e,a,t){"use strict";t.r(a);t(39);const l=[{type:"Divider",label:"输入框",orientation:"left",dashed:!0,size:"small"},{type:"Input",label:"输入框",model:"input.abc.bcd.cde",placeholder:"请输入用户名",required:!0,defaultHide:!1,showOn:{isShow:[{type:"enum",enum:[0]}],isShowTwo:[{type:"enum",enum:[1]}]}},{type:"Input",label:"用户名-禁用",model:"inputForbidden",readonly:!0,disabled:!0,placeholder:"请输入用户名",defaultHide:!1,hiddenOn:{isHidden:[{type:"enum",enum:[2]}],isHiddenTwo:[{type:"enum",enum:[1]}]}},{type:"Input",subtype:"textarea",label:"输入框",model:"textarea",placeholder:"请输入用户名",required:!0,defaultHide:!1},{type:"InputMultiple",label:"多行输入框",model:"inputMultiple.abc",placeholder:"请输入",required:!0,defaultHide:!1,succMessage:"添加成功",delMessage:"删除成功",defaultList:["默认包含的成员1","默认包含的成员2"]},{type:"InputNumber",label:"数值多行输入框",model:"inputNumber.abc",placeholder:"",required:!0},{type:"Divider",label:"下拉选择",orientation:"left",dashed:!0,size:"small"},{type:"Select",label:"单选下拉",model:"singleSelect.abc",required:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},{type:"Select",label:"单选下拉可搜索",model:"singleSelectApi.abc",required:!0,api:"/selectApi",apiParams:["radio","paramsContainerTest"]},{type:"Select",label:"多选下拉",multiple:!0,model:"multiSelect.abc",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}],required:!0},{type:"Select",multiple:!0,label:"多选下拉支持搜索",api:"/selectApi",apiParams:"all",model:"multiSelectApi.abc"},{type:"Divider",label:"单选框",orientation:"left",dashed:!0,size:"small"},{type:"Radio",label:"单选",model:"radio.abc",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}],required:!0},{type:"Radio",subtype:"button",label:"单选按钮",model:"radioButton",required:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},{type:"RadioCard",subtype:"button",label:"选择框卡片",model:"radioCard.abc",required:!0,options:[{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",id:"1"},{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",id:"2"}]},{type:"Divider",label:"复选框",orientation:"left",dashed:!0,size:"small"},{type:"Checkbox",label:"多选",model:"checkbox.abc",checkAll:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四",value:"4"}],required:!0},{label:"卡片多选",type:"CheckboxCard",model:"card",checkAll:!0,pageLation:!0,pageSize:3,headerEditable:!0,footerEditable:!0,cardWidth:"220px",cardHeight:"245px",optionsType:"image",options:"/checkboxCardApi",inline:!0,required:!0},{type:"Divider",label:"表格选择",orientation:"left",dashed:!0,size:"small"},{type:"TableSelect",label:"表格单选",model:"tableSelect.abc",columns:[{title:"名称",key:"name"},{title:"描述",key:"description"}],options:[{id:1,name:"admin",description:"超级管理员，拥有所有权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:2,name:"user",description:"普通用户，只有浏览的权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:3,name:"editor",description:"编辑，可以编辑、发布文章等",create_time:"2019-9-10",update_time:"2019-10-10"},{id:4,name:"auditor",description:"审核人员，可以查看、审核文案",create_time:"2019-9-10",update_time:"2019-10-10"}]},{type:"TableSelect",label:"表格多选",multiple:!0,model:"multipleTableSelect.abc",columns:[{title:"名称",key:"name"},{title:"描述",key:"description"}],options:[{id:1,name:"admin",description:"超级管理员，拥有所有权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:2,name:"user",description:"普通用户，只有浏览的权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:3,name:"editor",description:"编辑，可以编辑、发布文章等",create_time:"2019-9-10",update_time:"2019-10-10"},{id:4,name:"auditor",description:"审核人员，可以查看、审核文案",create_time:"2019-9-10",update_time:"2019-10-10"}]},{type:"Divider",label:"树形选择",orientation:"left",dashed:!0,size:"small"},{type:"Tree",label:"树形单选",model:"tree.abc",options:[{id:"1",title:"用户管理",children:[{id:"2",title:"查看用户"},{id:"3",title:"新增用户"},{id:"4",title:"编辑用户"},{id:"5",title:"删除用户"},{id:"11",title:"编辑用户角色"}]},{id:"6",title:"角色管理",children:[{id:"7",title:"查看角色"},{id:"8",title:"新增角色"},{id:"9",title:"编辑角色"},{id:"10",title:"删除角色"}]}]},{type:"Tree",label:"树形多选",model:"multipleTree.abc",multiple:!0,showCheckbox:!0,options:[{id:"1",title:"用户管理",children:[{id:"2",title:"查看用户"},{id:"3",title:"新增用户"},{id:"4",title:"编辑用户"},{id:"5",title:"删除用户"},{id:"11",title:"编辑用户角色"}]},{id:"6",title:"角色管理",children:[{id:"7",title:"查看角色"},{id:"8",title:"新增角色"},{id:"9",title:"编辑角色"},{id:"10",title:"删除角色"}]}]},{type:"Divider",label:"级联选择",orientation:"left",dashed:!0,size:"small"},{type:"Cascader",label:"省/城市/景点",model:"cascader.abc",required:!0,changeType:"all",options:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林",children:[{value:"1",label:"选项一"},{value:"2",label:"选项2"}]}]}]}]},{type:"Cascader",label:"省/城市/景点-api",model:"cascaderApi.abc",required:!0,api:"/cascaderApi",options:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]}]},{type:"Divider",label:"日期时间",orientation:"left",dashed:!0,size:"small"},{type:"DatePicker",subtype:"date",label:"日期选择",model:"date.abc",placeholder:"",required:!0},{type:"DatePicker",subtype:"daterange",label:"日期区间选择",model:"daterange.abc",placeholder:"",required:!0},{type:"DatePicker",subtype:"datetime",label:"日期时间选择",model:"datetime.dce",placeholder:"",required:!0,editable:!0,clearable:!0},{type:"DatePicker",subtype:"datetimerange",label:"日期时间区间选择",model:"datetimerange.abc",placeholder:"",required:!0},{type:"TimePicker",subtype:"time",label:"时间选择",model:"time.abc",placeholder:"",required:!0},{type:"TimePicker",subtype:"timerange",label:"时间区间选择",model:"timerange.abc",placeholder:"",required:!0},{type:"TimePickerMultiple",label:"多行时间选择",model:"timeMultiple.abc",placeholder:"",required:!0},{type:"Divider",label:"逻辑输入",orientation:"left",dashed:!0,size:"small"},{type:"LogicInput",label:"逻辑输入",model:"logicInput.abc",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"]},{type:"LogicSelect",label:"逻辑选择",model:"logicSelect.abc",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四",value:"4"}]},{type:"LogicSelect",label:"逻辑选择Api",model:"logicSelectApi.api",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],api:"/selectApi",apiParams:["radio","paramsContainerTest"]},{type:"Divider",label:"标签",orientation:"left",dashed:!0,size:"small"},{type:"Tag",label:"标签",model:"tag.abc",subtype:"border",options:[{name:"正常",value:"1",color:"primary"},{name:"正常",value:"2",color:"error"}]},{type:"Divider",label:"切换",orientation:"left",dashed:!0,size:"small"},{type:"Switch",label:"切换",true:{value:"A"},false:{value:"B"},model:"switch.abc"},{type:"Divider",label:"文件上传",orientation:"left",dashed:!0,size:"small"},{type:"Upload",subtype:"drag",accept:"image/gif, image/jpeg, image/png",format:["jpg","jpeg","png"],maxSize:2e4,action:"/uploadApi",multiple:!1,paste:!0,disabled:!1,data:{userName:"bingblog"},withCredentials:!0,showUploadList:!0,apiParams:["radio"],label:"文件上传",model:"upload.abc",tip:"上传的提示信息或者帮助信息",required:!0},{type:"ImgUpload",subtype:"drag",maxSize:2e4,action:"/uploadApi",multiple:!0,paste:!0,data:{userName:"bingblog"},nameEditable:!0,withCredentials:!0,label:"图片上传",model:"imgUpload",tip:"上传的提示信息或者帮助信息",required:!0},{type:"VideoUpload",subtype:"drag",maxSize:2e4,action:"/uploadVideoApi",multiple:!0,paste:!0,data:{userName:"bingblog"},nameEditable:!0,withCredentials:!0,label:"视频上传",model:"videoUpload",tip:"上传的提示信息或者帮助信息",required:!0},{type:"MediaUpload",subtype:"drag",maxSize:2e5,action:"/uploadVideoApi",multiple:!0,paste:!0,data:{userName:"bingblog"},nameEditable:!0,withCredentials:!0,label:"媒体上传",model:"mediaUpload.abc",tip:"上传的提示信息或者帮助信息",required:!0},{type:"Select",label:"省",api:"/selectApi",model:"province"},{type:"Select",label:"市",api:"/selectApi",apiParams:["province"],model:"city"},{type:"Select",label:"县",api:"/selectApi",apiParams:["province","city"],model:"town"},{type:"Slider",label:"滑动条",model:"slider.abc"},{type:"Steps",model:"step.abc",options:[{title:"已完成",content:"这里是该步骤的描述信息"},{title:"进行中",content:"这里是该步骤的描述信息"},{title:"待进行",content:"这里是该步骤的描述信息"}]},{type:"Divider",label:"属性显示",orientation:"left",dashed:!0,size:"small"},{type:"Text",model:"text.abc",options:[{label:"张三",value:"zhangsan"},{label:"王五",value:"wangwu"}],nullValue:"空"},{type:"Submit",subtype:"primary",text:"提交",width:"50%",inline:!0},{type:"Reset",subtype:"primary",text:"重置",width:"50%",labelWidth:0,inline:!0}],i={input:{abc:{bcd:{cde:"123"}}},inputMultiple:{abc:["wangwu1"]},text:{abc:"wangwu2"},inputForbidden:"",textarea:"",singleSelect:{abc:""},radioButton:"",radioCard:{abc:""},singleSelectApi:{abc:""},multiSelect:{abc:[]},multiSelectApi:{abc:[]},checkbox:{abc:["1"]},radio:{abc:"1"},date:"",daterange:{abc:[]},datetime:"",datetimerange:{abc:[]},time:"",timerange:{abc:[]},timeMultiple:{abc:["00:00:03~00:00:03"]},cascader:{abc:[]},cascaderApi:{abc:[]},tableSelect:{abc:1},multipleTableSelect:{abc:[1,2]},tree:{abc:["2"]},multipleTree:{abc:["1","2","10"]},inputNumber:{abc:12},logicInput:{abc:{}},logicSelect:{abc:{}},logicSelectApi:{api:{}},tag:{abc:["1"]},switch:{abc:!1},upload:{abc:[]},imgUpload:[],videoUpload:[],mediaUpload:{abc:[]},province:"",city:"",town:"",step:{abc:0},slider:{abc:80}},d={labelWidth:120,title:" 分组表单",labelPosition:"left",tip:{title:"规则",content:"规则内容"}},o={fields:l.map(e=>(e.defaultValue=i[e.model],e)),options:d};var r={data:()=>({form:{config:JSON.stringify(o,null,8)},model:i,fields:l,options:d,paramsContainer:{paramsContainerTest:"xxx",isShow:0,isShowTwo:1,isHidden:2,isHiddenTwo:1}}),mounted(){setTimeout(()=>{this.$set(this.paramsContainer,"paramsContainerTest","xxx-1"),setTimeout(()=>{this.$set(this.paramsContainer,"paramsContainerTest","xxx-2")},5e3)},5e3)},beforeDestroy(){},methods:{submit(){this.$refs.FormGenerator.submit().then(e=>{console.log("submit",e);const a=[];Object.keys(e).map(t=>{a.push({key:t,value:e[t]})}),console.log("submit",JSON.stringify(a))})},reset(){this.$refs.FormGenerator.reset()}}},p=(t(280),t(0)),n=Object(p.a)(r,function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("Row",{staticClass:"container"},[a("div",{staticClass:"container"},[a("FormGenerator",{ref:"FormGenerator",attrs:{fields:this.fields,model:this.model,options:this.options,"params-container":this.paramsContainer}})],1)])],1)},[],!1,null,"07a37acd",null).exports;a.default=n}}]);