import{aP as x,a as w,ae as E,ai as _,cE as r}from"./index-b4b3ae7d.js";const p=new x.EventEmitter;function S(d,a,s=!1){const i=w();return s=a==null?!0:s,p.emit("apply-edits",{serviceUrl:d,layerId:a,mayReceiveServiceEdits:s,result:i.promise}),i}const I="esri.layers.mixins.EditBusLayer",b=Symbol(I);function T(d){return d!=null&&typeof d=="object"&&b in d}const C=d=>{var a;let s=class extends d{constructor(...y){super(...y),this[a]=!0,this.when().then(()=>{this.own([p.on("apply-edits",f=>{const{serviceUrl:j,layerId:u,mayReceiveServiceEdits:A,result:L}=f,B=j===this.url,c=u!=null&&this.layerId!=null&&u===this.layerId;if(!B||!c&&!A)return;const g=L.then(e=>{var h;if(c&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",r(e)),e;const n=(h=e.editedFeatures)==null?void 0:h.find(({layerId:l})=>l===this.layerId);if(n){const{adds:l,updates:o,deletes:F}=n.editedFeatures,m={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:l?l.map(({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],deletedFeatures:F?F.map(({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],updatedFeatures:o?o.map(({current:{attributes:t}})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],editedFeatures:r(e.editedFeatures),exceededTransferLimit:!1};return this.emit("edits",m),m}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:r(e.editedFeatures),exceededTransferLimit:!1}});this.emit("apply-edits",{result:g})})])},()=>{})}};return a=b,s=E([_(I)],s),s};export{C as E,S as e,T as i};
