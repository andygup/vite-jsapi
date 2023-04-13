import{h2 as F}from"./index-b4b3ae7d.js";var y={};y.defaultNoDataValue=F(-1/0);y.decode=function(n,i){i=i||{};var s=i.encodedMaskData||i.encodedMaskData===null,e=Z(n,i.inputOffset||0,s),w=i.noDataValue!=null?F(i.noDataValue):y.defaultNoDataValue,r=E(e,i.pixelType||Float32Array,i.encodedMaskData,w,i.returnMask),t={width:e.width,height:e.height,pixelData:r.resultPixels,minValue:e.pixels.minValue,maxValue:e.pixels.maxValue,noDataValue:w};return r.resultMask&&(t.maskData=r.resultMask),i.returnEncodedMask&&e.mask&&(t.encodedMaskData=e.mask.bitset?e.mask.bitset:null),i.returnFileInfo&&(t.fileInfo=L(e,w),i.computeUsedBitDepths&&(t.fileInfo.bitDepths=O(e))),t};var E=function(n,i,s,e,w){var r=0,t=n.pixels.numBlocksX,g=n.pixels.numBlocksY,h=Math.floor(n.width/t),c=Math.floor(n.height/g),V=2*n.maxZError;s=s||(n.mask?n.mask.bitset:null);var v,o;v=new i(n.width*n.height),w&&s&&(o=new Uint8Array(n.width*n.height));for(var I=new Float32Array(h*c),x,u,p=0;p<=g;p++){var k=p!==g?c:n.height%g;if(k!==0)for(var A=0;A<=t;A++){var f=A!==t?h:n.width%t;if(f!==0){var m=p*n.width*c+A*h,l=n.width-f,a=n.pixels.blocks[r],d,M,U;a.encoding<2?(a.encoding===0?d=a.rawData:(C(a.stuffedData,a.bitsPerPixel,a.numValidPixels,a.offset,V,I,n.pixels.maxValue),d=I),M=0):a.encoding===2?U=0:U=a.offset;var D;if(s)for(u=0;u<k;u++){for(m&7&&(D=s[m>>3],D<<=m&7),x=0;x<f;x++)m&7||(D=s[m>>3]),D&128?(o&&(o[m]=1),v[m++]=a.encoding<2?d[M++]:U):(o&&(o[m]=0),v[m++]=e),D<<=1;m+=l}else if(a.encoding<2)for(u=0;u<k;u++){for(x=0;x<f;x++)v[m++]=d[M++];m+=l}else for(u=0;u<k;u++)if(v.fill)v.fill(U,m,m+f),m+=f+l;else{for(x=0;x<f;x++)v[m++]=U;m+=l}if(a.encoding===1&&M!==a.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:v,resultMask:o}},L=function(n,i){return{fileIdentifierString:n.fileIdentifierString,fileVersion:n.fileVersion,imageType:n.imageType,height:n.height,width:n.width,maxZError:n.maxZError,eofOffset:n.eofOffset,mask:n.mask?{numBlocksX:n.mask.numBlocksX,numBlocksY:n.mask.numBlocksY,numBytes:n.mask.numBytes,maxValue:n.mask.maxValue}:null,pixels:{numBlocksX:n.pixels.numBlocksX,numBlocksY:n.pixels.numBlocksY,numBytes:n.pixels.numBytes,maxValue:n.pixels.maxValue,minValue:n.pixels.minValue,noDataValue:i}}},O=function(n){for(var i=n.pixels.numBlocksX*n.pixels.numBlocksY,s={},e=0;e<i;e++){var w=n.pixels.blocks[e];w.encoding===0?s.float32=!0:w.encoding===1?s[w.bitsPerPixel]=!0:s[0]=!0}return Object.keys(s)},Z=function(n,i,s){var e={},w=new Uint8Array(n,i,10);if(e.fileIdentifierString=String.fromCharCode.apply(null,w),e.fileIdentifierString.trim()!="CntZImage")throw"Unexpected file identifier string: "+e.fileIdentifierString;i+=10;var r=new DataView(n,i,24);if(e.fileVersion=r.getInt32(0,!0),e.imageType=r.getInt32(4,!0),e.height=r.getUint32(8,!0),e.width=r.getUint32(12,!0),e.maxZError=r.getFloat64(16,!0),i+=24,!s){if(r=new DataView(n,i,16),e.mask={},e.mask.numBlocksY=r.getUint32(0,!0),e.mask.numBlocksX=r.getUint32(4,!0),e.mask.numBytes=r.getUint32(8,!0),e.mask.maxValue=r.getFloat32(12,!0),i+=16,e.mask.numBytes>0){var t=new Uint8Array(Math.ceil(e.width*e.height/8));r=new DataView(n,i,e.mask.numBytes);var g=r.getInt16(0,!0),h=2,c=0;do{if(g>0)for(;g--;)t[c++]=r.getUint8(h++);else{var V=r.getUint8(h++);for(g=-g;g--;)t[c++]=V}g=r.getInt16(h,!0),h+=2}while(h<e.mask.numBytes);if(g!==-32768||c<t.length)throw"Unexpected end of mask RLE encoding";e.mask.bitset=t,i+=e.mask.numBytes}else if(!(e.mask.numBytes|e.mask.numBlocksY|e.mask.maxValue)){var t=new Uint8Array(Math.ceil(e.width*e.height/8));e.mask.bitset=t}}r=new DataView(n,i,16),e.pixels={},e.pixels.numBlocksY=r.getUint32(0,!0),e.pixels.numBlocksX=r.getUint32(4,!0),e.pixels.numBytes=r.getUint32(8,!0),e.pixels.maxValue=r.getFloat32(12,!0),i+=16;var v=e.pixels.numBlocksX,o=e.pixels.numBlocksY,I=v+(e.width%v>0?1:0),x=o+(e.height%o>0?1:0);e.pixels.blocks=new Array(I*x);for(var u=1e9,p=0,k=0;k<x;k++)for(var A=0;A<I;A++){var f=0,m=n.byteLength-i;r=new DataView(n,i,Math.min(10,m));var l={};e.pixels.blocks[p++]=l;var a=r.getUint8(0);if(f++,l.encoding=a&63,l.encoding>3)throw"Invalid block encoding ("+l.encoding+")";if(l.encoding===2){i++,u=Math.min(u,0);continue}if(a!==0&&a!==2){if(a>>=6,l.offsetType=a,a===2)l.offset=r.getInt8(1),f++;else if(a===1)l.offset=r.getInt16(1,!0),f+=2;else if(a===0)l.offset=r.getFloat32(1,!0),f+=4;else throw"Invalid block offset type";if(u=Math.min(l.offset,u),l.encoding===1)if(a=r.getUint8(f),f++,l.bitsPerPixel=a&63,a>>=6,l.numValidPixelsType=a,a===2)l.numValidPixels=r.getUint8(f),f++;else if(a===1)l.numValidPixels=r.getUint16(f,!0),f+=2;else if(a===0)l.numValidPixels=r.getUint32(f,!0),f+=4;else throw"Invalid valid pixel count type"}if(i+=f,l.encoding!=3){var d,M;if(l.encoding===0){var U=(e.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";d=new ArrayBuffer(U*4),M=new Uint8Array(d),M.set(new Uint8Array(n,i,U*4));for(var D=new Float32Array(d),Y=0;Y<D.length;Y++)u=Math.min(u,D[Y]);l.rawData=D,i+=U*4}else if(l.encoding===1){var X=Math.ceil(l.numValidPixels*l.bitsPerPixel/8),T=Math.ceil(X/4);d=new ArrayBuffer(T*4),M=new Uint8Array(d),M.set(new Uint8Array(n,i,X)),l.stuffedData=new Uint32Array(d),i+=X}}}return e.pixels.minValue=u,e.eofOffset=i,e},C=function(n,i,s,e,w,r,t){var g=(1<<i)-1,h=0,c,V=0,v,o,I=Math.ceil((t-e)/w),x=n.length*4-Math.ceil(i*s/8);for(n[n.length-1]<<=8*x,c=0;c<s;c++){if(V===0&&(o=n[h++],V=32),V>=i)v=o>>>V-i&g,V-=i;else{var u=i-V;v=(o&g)<<u&g,o=n[h++],V=32-u,v+=o>>>V}r[c]=v<I?e+v*w:t}return r};const N=y.decode;class B{_decode(i){const s=N(i.buffer,i.options);return Promise.resolve({result:s,transferList:[s.pixelData.buffer]})}}function R(){return new B}export{R as default};
