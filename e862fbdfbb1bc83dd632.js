"use strict";(self.webpackChunkwebtool_cropper=self.webpackChunkwebtool_cropper||[]).push([[235],{27:(t,e,a)=>{t.exports=a.p+"img/bbba5c1db5c20f8aa84f.png"},235:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const s={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid px-0"},[s("nav",{staticClass:"navbar navbar-dark bg-dark"},[s("div",{staticClass:"navbar-brand d-flex"},[s("div",[t._v("Webtool Cropper")]),s("open-image",{staticClass:"ml-1 mb-0",on:{load:t.loadImg}},[t._v("上傳")])],1)]),s("div",{staticClass:"container-fluid px-0"},[s("button",{staticClass:"btn btn-primary",on:{click:t.crop}},[t._v("裁切")]),s("b-card",{attrs:{"no-body":""}},[s("b-card-body",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("img",{ref:"image",attrs:{src:a(27)}})]),s("div",{staticClass:"col-6 d-flex justify-content-center"},[t.outputUrl?s("img",{staticClass:"mw-100 m-auto",attrs:{src:t.outputUrl}}):t._e()])])])],1)],1)])},staticRenderFns:[],components:{OpenImage:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.id?a("div",{staticClass:"d-inline-block"},[a("input",{staticClass:"d-none",attrs:{id:t.id,type:"file",accept:"image/*"},on:{change:t.parseFile}}),a("label",{staticClass:"btn btn-secondary btn-sm mb-0",attrs:{for:t.id}},[a("b-icon-card-image")],1)]):t._e()},staticRenderFns:[],props:[],data:function(){return{id:""}},created(){this.id=`img-${this._uid}`},mounted(){},methods:{parseFile:function(t){const e=this,a=t.srcElement,s=a.files[0];a.value="";const i=new window.FileReader;i.addEventListener("load",(function(){const t=i.result,a=new window.Image;a.onload=function(){const{width:s,height:i}=this;Object.assign(e,{width:s,height:i,url:t}),e.$emit("load",a,e)},a.src=t}),!1),s&&i.readAsDataURL(s)}}}},data:()=>({outputUrl:"",cropper:null}),async mounted(){a.e(645).then(a.bind(a,645)),this.initCropper()},updated(){},methods:{loadImg(t){this.cropper.destroy(),this.$refs.image.src=t.src,console.log(t.src),this.initCropper()},async initCropper(){const t=(await a.e(129).then(a.t.bind(a,129,19))).default;this.cropper=new t(this.$refs.image,{viewMode:1,dragMode:"move",minCropBoxWidth:256,minCropBoxHeight:256,aspectRatio:1,crop(t){console.log(t.detail.x),console.log(t.detail.y),console.log(t.detail.width),console.log(t.detail.height),console.log(t.detail.rotate),console.log(t.detail.scaleX),console.log(t.detail.scaleY)}})},crop(){this.outputUrl=this.cropper.getCroppedCanvas().toDataURL("image/png")}}}}}]);