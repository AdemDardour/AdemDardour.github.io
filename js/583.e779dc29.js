"use strict";(self["webpackChunkmyprofile"]=self["webpackChunkmyprofile"]||[]).push([[583],{7583:(e,l,a)=>{a.r(l),a.d(l,{default:()=>c});var o=a(3673);const n={class:"item",style:{margin:"50px"}},s=["href"];function t(e,l,a,t,m,r){const u=(0,o.up)("q-input"),d=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(u,{rounded:"",borderless:"","label-color":"orange",color:"blue-10",modelValue:m.name,"onUpdate:modelValue":l[0]||(l[0]=e=>m.name=e),label:"Name",style:{margin:"15px"}},null,8,["modelValue"]),(0,o.Wm)(u,{rounded:"",borderless:"","label-color":"orange",color:"blue-10",modelValue:m.subject,"onUpdate:modelValue":l[1]||(l[1]=e=>m.subject=e),label:"Subject",style:{margin:"15px"}},null,8,["modelValue"]),(0,o.Wm)(u,{rounded:"",borderless:"","label-color":"orange",color:"blue-10",modelValue:m.message,"onUpdate:modelValue":l[2]||(l[2]=e=>m.message=e),label:"Messsage",style:{margin:"15px","max-height":"200px"},type:"textarea"},null,8,["modelValue"]),(0,o._)("a",{href:m.mail},[(0,o.Wm)(d,{color:"blue-9",icon:"eva-email",label:"Send",style:{margin:"15px",width:"150px"},onClick:r.generate,push:""},null,8,["onClick"])],8,s)])}const m={data(){return{name:"",subject:"",message:"",mail:""}},methods:{generate(){this.mail="mailto:d.adem1250@gmail.com?subject="+this.subject+"&body="+this.message,console.log(this.mail)}}};var r=a(6805),u=a(522),d=a(7518),i=a.n(d);m.render=t;const c=m;i()(m,"components",{QInput:r.Z,QBtn:u.Z})}}]);