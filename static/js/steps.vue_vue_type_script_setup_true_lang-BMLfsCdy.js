import{_ as V}from"./_plugin-vue_export-helper-NOGOwCzi.js";import{u as k,P as F}from"./plus-form-C6LPbTop.js";import{d as f,a as m,P,f as n,k as h,i as b,w as i,F as T,l as S,b as x,u as o,cj as _,a5 as d,ap as $,S as c,ci as q,v as C}from"./index-BM1biZ_n.js";var E=f({name:"PlusStepsForm",__name:"index",props:{modelValue:{default:1},data:{default:()=>[]}},emits:["pre","next","update:modelValue","change"],setup(v,{emit:u}){const l=v,s=u,{t:r}=k(),e=m();P(()=>{e.value=l.modelValue});const p=(t,g)=>{s("change",t,g)},w=()=>{e.value-- >l.data.length+1&&(e.value=1),s("update:modelValue",e.value),s("pre",e.value)},y=t=>{e.value++>l.data.length-1&&(e.value=l.data.length),s("update:modelValue",e.value),s("next",e.value,t)};return(t,g)=>(n(),h("div",{class:C(["plus-steps-form",t.$attrs.direction==="vertical"?"plus-steps-from-vertical":""])},[b(o(q),d({active:e.value,"finish-status":"success"},t.$attrs),{default:i(()=>[(n(!0),h(T,null,S(t.data,a=>(n(),x(o(_),d({key:a.title},a),$({_:2},[t.$slots.icon?{name:"icon",fn:i(()=>[c(t.$slots,"icon",{icon:a.icon,title:a.title,description:a.description})]),key:"0"}:void 0,t.$slots.title?{name:"title",fn:i(()=>[c(t.$slots,"title",{icon:a.icon,title:a.title,description:a.description})]),key:"1"}:void 0,t.$slots.description?{name:"description",fn:i(()=>[c(t.$slots,"description",{icon:a.icon,title:a.title,description:a.description})]),key:"2"}:void 0]),1040))),128))]),_:3},16,["active"]),b(o(F),d(t.data[e.value-1].form,{"has-reset":e.value!==1,"submit-text":e.value===t.data.length?o(r)("plus.stepsForm.submitText"):o(r)("plus.stepsForm.nextText"),"reset-text":o(r)("plus.stepsForm.preText"),onSubmit:y,onReset:w,onChange:p}),null,16,["has-reset","submit-text","reset-text"])],2))}}),B=V(E,[["__file","index.vue"]]);const L=B,W=f({__name:"steps",setup(v){const u=m([{title:"第一步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},modelValue:{},columns:[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]}],rules:{name:[{required:!0,message:"请输入名称"}]}}},{title:"第二步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},labelWidth:"100",modelValue:{},columns:[{label:"标签",width:120,prop:"tag"},{label:"执行进度",width:200,prop:"progress"},{label:"评分",width:200,prop:"rate",valueType:"rate"},{label:"是否显示",width:100,prop:"switch",valueType:"switch"}],rules:{tag:[{required:!0,message:"请输入标签"}],progress:[{required:!0,message:"请输入执行进度"}]}}},{title:"第三步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},modelValue:{},columns:[{label:"时间",prop:"time",valueType:"date-picker"},{label:"要求",prop:"demand",valueType:"checkbox",options:[{label:"四六级",value:"0"},{label:"计算机二级证书",value:"1"},{label:"普通话证书",value:"2"}]},{label:"奖励",prop:"price"},{label:"提成",prop:"percentage"},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],rules:{time:[{required:!0,trigger:"change",message:"请选择时间"}],demand:[{required:!0,trigger:"change",message:"请选择要求"}]}}}]),l=m(1),s=(r,e)=>{l.value=r};return(r,e)=>(n(),x(o(L),{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=p=>l.value=p),simple:"",class:"w-[800px] m-auto",data:u.value,"align-center":"",onNext:s},null,8,["modelValue","data"]))}});export{W as _};