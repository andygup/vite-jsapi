import{w as a,C as n,cY as i,fV as c}from"./index-df1c7459.js";function f(r){const s=r.view.spatialReference,e=r.layer.fullExtent,t=a(e)&&e.spatialReference;if(n(e)||!t)return Promise.resolve(null);if(t.equals(s))return Promise.resolve(e.clone());const l=i(e,s);return a(l)?Promise.resolve(l):r.view.state.isLocal?c(e,s,r.layer.portalItem).then(o=>!r.destroyed&&o?o:null).catch(()=>null):Promise.resolve(null)}export{f as l};