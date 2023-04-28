import{C as m,bm as C}from"./index-ffb342b4.js";import{f as F,d as E,e as A,T,a as d,r}from"./enums-08489827.js";import{a as O,T as U}from"./TextureDescriptor-ee3ba00a.js";function x(e,n,t="nearest",i=!1){var u;const s=!(i&&n.pixelType==="u8"),a=s?A.FLOAT:A.UNSIGNED_BYTE,f=n.pixels==null||n.pixels.length===0?null:s?n.getAsRGBAFloat():n.getAsRGBA(),c=(u=e.capabilities.textureFloat)==null?void 0:u.textureFloatLinear,o=new O;return o.width=n.width,o.height=n.height,o.internalFormat=e.type===m.WEBGL2&&s?F.RGBA32F:E.RGBA,o.samplingMode=c&&(t==="bilinear"||t==="cubic")?T.LINEAR:T.NEAREST,o.dataType=a,o.wrapMode=d.CLAMP_TO_EDGE,new U(e,o,f)}function y(e,n){const{spacing:t,offsets:i,coefficients:s,size:[a,f]}=n,c=t[0]>1,o=new O;o.width=c?a*4:a,o.height=f,o.internalFormat=e.type===m.WEBGL2?F.RGBA32F:E.RGBA,o.dataType=A.FLOAT,o.samplingMode=T.NEAREST,o.wrapMode=d.CLAMP_TO_EDGE;const u=new Float32Array(c?a*f*16:i.length*2);if(c&&s!=null)for(let l=0,_=0;l<s.length;l++)u[_++]=s[l],l%3===2&&(u[_++]=1);else for(let l=0;l<f;l++)for(let _=0;_<a;_++){const g=(l*a+_)*4,h=(_*f+l)*2;u[g]=i[h],u[g+1]=i[h+1],u[g+3]=i[h]===-1?0:1}return new U(e,o,u)}function R(e,n){const t=new O;return t.internalFormat=E.RGBA,t.width=n.length/4,t.height=1,t.samplingMode=T.NEAREST,t.wrapMode=d.CLAMP_TO_EDGE,new U(e,t,n)}function S(e,n,t,i=1,s=!0){return{u_flipY:s,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:C,u_transformGridSize:e?e.size:C,u_targetImageSize:n,u_srcImageSize:t}}function G(e,n){return{u_colormapOffset:n||0,u_colormapMaxIndex:e?e.length/4-1:0}}function V(e,n){return{u_scale:e,u_offset:n}}function p(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function I(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function B(e,n){const t=e.gl,i=n.glName,s=new Map;if(i==null)return s;const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);let f;for(let c=0;c<a;c++)f=t.getActiveUniform(i,c),f&&s.set(f.name,{location:t.getUniformLocation(i,f.name),info:f});return s}function P(e,n,t){Object.keys(t).forEach(i=>{const s=n.get(i)||n.get(i+"[0]");s&&L(e,i,t[i],s)})}function z(e,n,t,i){t.length===i.length&&(i.some(s=>s==null)||t.some(s=>s==null)||t.forEach((s,a)=>{n.setUniform1i(s,a),e.bindTexture(i[a],a)}))}function L(e,n,t,i){if(i===null||t==null)return!1;const{info:s}=i;switch(s.type){case r.FLOAT:s.size>1?e.setUniform1fv(n,t):e.setUniform1f(n,t);break;case r.FLOAT_VEC2:e.setUniform2fv(n,t);break;case r.FLOAT_VEC3:e.setUniform3fv(n,t);break;case r.FLOAT_VEC4:e.setUniform4fv(n,t);break;case r.FLOAT_MAT3:e.setUniformMatrix3fv(n,t);break;case r.FLOAT_MAT4:e.setUniformMatrix4fv(n,t);break;case r.INT:s.size>1?e.setUniform1iv(n,t):e.setUniform1i(n,t);break;case r.BOOL:e.setUniform1i(n,t?1:0);break;case r.INT_VEC2:case r.BOOL_VEC2:e.setUniform2iv(n,t);break;case r.INT_VEC3:case r.BOOL_VEC3:e.setUniform3iv(n,t);break;case r.INT_VEC4:case r.BOOL_VEC4:e.setUniform4iv(n,t);break;default:return!1}return!0}export{x as a,R as b,y as c,P as d,I as e,p as f,G as g,S as h,B as i,V as j,z as s};