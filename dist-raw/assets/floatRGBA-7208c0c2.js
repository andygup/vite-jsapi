import{D as c}from"./index-468a9268.js";function s(t,r,a=0){const o=c(t,0,u);for(let n=0;n<4;n++)r[a+n]=Math.floor(f(o*i[n])*256)}function l(t,r=0){let a=0;for(let o=0;o<4;o++)a+=t[r+o]*e[o];return a}const i=[1,256,256*256,256*256*256],e=[1/256,1/(256*256),1/(256*256*256),1/(256*256*256*256)],u=l(new Uint8ClampedArray([255,255,255,255]));function f(t){return t-Math.floor(t)}export{s as p,l as u};
