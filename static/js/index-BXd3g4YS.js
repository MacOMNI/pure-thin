import{d as S,af as B,a as f,$ as r,fE as T,a0 as A,f$ as D,b as p,w as o,e as n,f as i,u as t,i as e,g as l,h as b,t as v,k as N,l as z,F as O,j as y,W as R,v as E,C as F,D as L,_ as P}from"./index-CocNYPzQ.js";import{R as g}from"./index-CKJAxsWI.js";import{_ as j}from"./Profile.vue_vue_type_script_setup_true_lang--D-XE38o.js";import G from"./Preferences-VLj1GKSh.js";import{_ as W}from"./SecurityLog.vue_vue_type_script_setup_true_lang-AOugdYtF.js";import q from"./AccountManagement-vrBFKL_Y.js";import{u as J}from"./useDataThemeChange-CrqT9ICh.js";import{b as K,_ as Q,d as U,a as X}from"./SidebarTopCollapse.vue_vue_type_script_setup_true_lang-DoaxYq5n.js";import"./mock-CCsMZLe7.js";import"./index-Dl2H8Qc1.js";import"./index-CxZf3Ts3.js";import"./upload-line-ClmDKJCy.js";import"./app-BXx73Nsu.js";import"./epTheme-zMPgDbck.js";const Y={width:24,height:24,body:'<path fill="currentColor" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"/>'},ee={width:24,height:24,body:'<path fill="currentColor" d="M21.008 3c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016ZM20 5H4v14h16V5Zm-2 10v2H6v-2h12Zm-6-8v6H6V7h6Zm6 4v2h-4v-2h4Zm-8-2H8v2h2V9Zm8-2v2h-4V7h4Z"/>'},ae=m=>(F("data-v-14565bac"),m=m(),L(),m),oe={class:"flex items-center"},ne=ae(()=>l("span",{class:"ml-2"},"返回",-1)),te={class:"flex items-center ml-8 mt-4 mb-4"},se={class:"ml-4 flex flex-col max-w-[130px]"},le={class:"flex items-center z-10"},ce=S({name:"AccountSettings",__name:"index",setup(m){const C=B(),s=f(!r()),{$storage:$}=T();A(()=>{var c;J().dataThemeChange((c=$.layout)==null?void 0:c.overallStyle)});const u=f({avatar:"",username:"",nickname:""}),h=[{key:"profile",label:"个人信息",icon:Y,component:j},{key:"preferences",label:"偏好设置",icon:U,component:G},{key:"securityLog",label:"安全日志",icon:X,component:W},{key:"accountManagement",label:"账户管理",icon:ee,component:q}],_=f("profile");return D().then(c=>{u.value=c.data}),(c,d)=>{const x=n("IconifyIconOffline"),k=n("el-menu-item"),w=n("el-avatar"),Z=n("el-icon"),I=n("el-menu"),V=n("el-aside"),H=n("el-main"),M=n("el-container");return i(),p(M,{class:"h-full"},{default:o(()=>[s.value?(i(),p(V,{key:0,class:"pure-account-settings overflow-hidden px-2 dark:!bg-[var(--el-bg-color)] border-r-[1px] border-[var(--pure-border-color)]",width:t(r)()?"180px":"240px"},{default:o(()=>[e(I,{"default-active":_.value,class:"pure-account-settings-menu"},{default:o(()=>[e(k,{class:"hover:!transition-all hover:!duration-200 hover:!text-base !h-[50px]",onClick:d[0]||(d[0]=a=>t(C).go(-1))},{default:o(()=>[l("div",oe,[e(x,{icon:t(K)},null,8,["icon"]),ne])]),_:1}),l("div",te,[e(w,{size:48,src:u.value.avatar},null,8,["src"]),l("div",se,[e(t(g),{class:"font-bold !self-baseline"},{default:o(()=>[b(v(u.value.nickname),1)]),_:1}),e(t(g),{class:"!self-baseline",type:"info"},{default:o(()=>[b(v(u.value.username),1)]),_:1})])]),(i(),N(O,null,z(h,a=>e(k,{key:a.key,index:a.key,onClick:()=>{_.value=a.key,t(r)()&&(s.value=!s.value)}},{default:o(()=>[l("div",le,[e(Z,null,{default:o(()=>[e(x,{icon:a.icon},null,8,["icon"])]),_:2},1024),l("span",null,v(a.label),1)])]),_:2},1032,["index","onClick"])),64))]),_:1},8,["default-active"])]),_:1},8,["width"])):y("",!0),e(H,null,{default:o(()=>[t(r)()?(i(),p(Q,{key:0,class:"px-0","is-active":s.value,onToggleClick:d[1]||(d[1]=a=>s.value=!s.value)},null,8,["is-active"])):y("",!0),(i(),p(R(h.find(a=>a.key===_.value).component),{class:E([!t(r)()&&"ml-[120px]"])},null,8,["class"]))]),_:1})]),_:1})}}}),ge=P(ce,[["__scopeId","data-v-14565bac"]]);export{ge as default};
