import{W as a,b as t}from"./WGLContainer-a42a1f0b.js";import{W as n}from"./color-820677f7.js";class h extends a{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return this._hasCrossfade}beforeRender(s){super.beforeRender(s),this._manageFade()}prepareRenderPasses(s){const e=s.registerRenderPass({name:"bitmap",brushes:[t.bitmap],target:()=>this.children,drawPhase:n.MAP});return[...super.prepareRenderPasses(s),e]}_manageFade(){this.children.reduce((e,r)=>e+(r.inFadeTransition?1:0),0)>=2?(this.children.forEach(e=>e.blendFunction="additive"),this._hasCrossfade=!0):(this.children.forEach(e=>e.blendFunction="standard"),this._hasCrossfade=!1)}}export{h as B};
