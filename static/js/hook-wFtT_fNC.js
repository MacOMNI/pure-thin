var p=(n,u,a)=>new Promise((s,l)=>{var d=t=>{try{i(a.next(t))}catch(r){l(r)}},o=t=>{try{i(a.throw(t))}catch(r){l(r)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(d,o);i((a=a.apply(n,u)).next())});import{r as g,a as m,m as z,i as C,e as T,d0 as L,L as f,am as P,dl as R}from"./index-CocNYPzQ.js";import{g as Y}from"./system-DgcmnQpv.js";import{u as w}from"./hooks-BI_G_w0k.js";function x(n){const u=g({username:"",status:"",loginTime:""}),a=m([]),s=m(!0),l=m(0),{tagStyle:d}=w(),o=g({total:0,pageSize:10,currentPage:1,background:!0}),i=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"序号",prop:"id",minWidth:90},{label:"用户名",prop:"username",minWidth:100},{label:"登录 IP",prop:"ip",minWidth:140},{label:"登录地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"登录状态",prop:"status",minWidth:100,cellRenderer:({row:e,props:y})=>C(T("el-tag"),{size:y.size,style:d.value(e.status)},{default:()=>[e.status===1?"成功":"失败"]})},{label:"登录行为",prop:"behavior",minWidth:100},{label:"登录时间",prop:"loginTime",minWidth:180,formatter:({loginTime:e})=>L(e).format("YYYY-MM-DD HH:mm:ss")}];function t(e){}function r(e){}function h(e){l.value=e.length,n.value.setAdaptive()}function v(){l.value=0,n.value.getTableRef().clearSelection()}function b(){const e=n.value.getTableRef().getSelectionRows();f(`已删除序号为 ${P(e,"id")} 的数据`,{type:"success"}),n.value.getTableRef().clearSelection(),c()}function S(){f("已删除所有日志数据",{type:"success"}),c()}function c(){return p(this,null,function*(){s.value=!0;const{data:e}=yield Y(R(u));a.value=e.list,o.total=e.total,o.pageSize=e.pageSize,o.currentPage=e.currentPage,setTimeout(()=>{s.value=!1},500)})}const W=e=>{e&&(e.resetFields(),c())};return z(()=>{c()}),{form:u,loading:s,columns:i,dataList:a,pagination:o,selectedNum:l,onSearch:c,clearAll:S,resetForm:W,onbatchDel:b,handleSizeChange:t,onSelectionCancel:v,handleCurrentChange:r,handleSelectionChange:h}}export{x as useRole};
