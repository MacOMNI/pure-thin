import{d as e}from"./data-CXzHtUHs.js";import{d as m,e as a,f as d,b as _,w as o,i as u,u as t,g as i}from"./index-CocNYPzQ.js";const g=i("video",{width:"180",height:"180",controls:""},[i("source",{src:"https://pure-admin.github.io/pure-admin-doc/video/url.mov",type:"video/mp4"})],-1),x=m({__name:"imgPreview",setup(v){const s=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"视频",slot:"video"},{label:"图像",slot:"image"}];return(b,h)=>{const r=a("el-image"),l=a("pure-table");return d(),_(l,{data:t(e),columns:s},{video:o(()=>[g]),image:o(({row:n,index:p})=>[u(r,{"preview-teleported":"",loading:"lazy",src:n.image,"preview-src-list":t(e).map(c=>c.image),"initial-index":p,fit:"cover",class:"w-[100px] h-[100px]"},null,8,["src","preview-src-list","initial-index"])]),_:1},8,["data"])}}});export{x as _};