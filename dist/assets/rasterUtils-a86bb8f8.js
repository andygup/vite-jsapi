import{b as U,ay as d}from"./index-394e5411.js";import{M as A,P as c,U as C,G as _,L as p,D as h,o as n}from"./enums-10aa9b05.js";import{m as O}from"./Texture-a4d82a63.js";function M(e,t,a="nearest",r=!1){var f;const i=!(r&&t.pixelType==="u8"),o=i?_.FLOAT:_.UNSIGNED_BYTE,s=t.pixels==null||t.pixels.length===0?null:i?t.getAsRGBAFloat():t.getAsRGBA(),u=(f=e.capabilities.textureFloat)==null?void 0:f.textureFloatLinear,g={width:t.width,height:t.height,target:A.TEXTURE_2D,pixelFormat:c.RGBA,internalFormat:e.type===U.WEBGL2&&i?C.RGBA32F:c.RGBA,samplingMode:!u||a!=="bilinear"&&a!=="cubic"?p.NEAREST:p.LINEAR,dataType:o,wrapMode:h.CLAMP_TO_EDGE,flipped:!1};return new O(e,g,s)}function b(e,t){const{spacing:a,offsets:r,coefficients:i,size:[o,s]}=t,u=a[0]>1,g={width:u?4*o:o,height:s,target:A.TEXTURE_2D,pixelFormat:c.RGBA,internalFormat:e.type===U.WEBGL2?C.RGBA32F:c.RGBA,dataType:_.FLOAT,samplingMode:p.NEAREST,wrapMode:h.CLAMP_TO_EDGE,flipped:!1},f=new Float32Array(u?o*s*16:2*r.length);if(u&&i!=null)for(let m=0,l=0;m<i.length;m++)f[l++]=i[m],m%3==2&&(f[l++]=1);else for(let m=0;m<s;m++)for(let l=0;l<o;l++){const T=4*(m*o+l),E=2*(l*s+m);f[T]=r[E],f[T+1]=r[E+1],f[T+3]=r[E]===-1?0:1}return new O(e,g,f)}function B(e,t){const a={width:t.length/4,height:1,target:A.TEXTURE_2D,pixelFormat:c.RGBA,internalFormat:c.RGBA,dataType:_.UNSIGNED_BYTE,samplingMode:p.NEAREST,wrapMode:h.CLAMP_TO_EDGE,flipped:!1};return new O(e,a,t)}function R(e,t,a,r=1,i=!0){return{u_flipY:i,u_applyTransform:!!e,u_opacity:r,u_transformSpacing:e?e.spacing:d,u_transformGridSize:e?e.size:d,u_targetImageSize:t,u_srcImageSize:a}}function w(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function y(e,t){return{u_scale:e,u_offset:t}}function N(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function V(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function k(e,t){const a=e.gl,r=t.glName,i=new Map;if(r==null)return i;const o=a.getProgramParameter(r,a.ACTIVE_UNIFORMS);let s;for(let u=0;u<o;u++)s=a.getActiveUniform(r,u),s&&i.set(s.name,{location:a.getUniformLocation(r,s.name),info:s});return i}function I(e,t,a){Object.keys(a).forEach(r=>{const i=t.get(r)||t.get(r+"[0]");i&&F(e,r,a[r],i)})}function v(e,t,a,r){a.length===r.length&&(r.some(i=>i==null)||a.some(i=>i==null)||a.forEach((i,o)=>{t.setUniform1i(i,o),e.bindTexture(r[o],o)}))}function F(e,t,a,r){if(r===null||a==null)return!1;const{info:i}=r;switch(i.type){case n.FLOAT:i.size>1?e.setUniform1fv(t,a):e.setUniform1f(t,a);break;case n.FLOAT_VEC2:e.setUniform2fv(t,a);break;case n.FLOAT_VEC3:e.setUniform3fv(t,a);break;case n.FLOAT_VEC4:e.setUniform4fv(t,a);break;case n.FLOAT_MAT3:e.setUniformMatrix3fv(t,a);break;case n.FLOAT_MAT4:e.setUniformMatrix4fv(t,a);break;case n.INT:i.size>1?e.setUniform1iv(t,a):e.setUniform1i(t,a);break;case n.BOOL:e.setUniform1i(t,a?1:0);break;case n.INT_VEC2:case n.BOOL_VEC2:e.setUniform2iv(t,a);break;case n.INT_VEC3:case n.BOOL_VEC3:e.setUniform3iv(t,a);break;case n.INT_VEC4:case n.BOOL_VEC4:e.setUniform4iv(t,a);break;default:return!1}return!0}export{k as A,V as E,v as O,N as T,R as _,B as c,y as g,I as h,b as l,M as m,w as p};