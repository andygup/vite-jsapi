import{dR as X,dS as Y,dh as Ge,dT as He,a as $,dU as We,dV as Ke,dW as Le,dX as Qe}from"./index-6eb28d6b.js";function H(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Ze(e){const n=new Float32Array(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function tr(e,n,u,s,c,g,w,r,y,_,k,N,I,d,x,C){const p=new Float32Array(16);return p[0]=e,p[1]=n,p[2]=u,p[3]=s,p[4]=c,p[5]=g,p[6]=w,p[7]=r,p[8]=y,p[9]=_,p[10]=k,p[11]=N,p[12]=I,p[13]=d,p[14]=x,p[15]=C,p}function er(e,n){return new Float32Array(e,n,16)}const rr=H();Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:rr,clone:Ze,create:H,createView:er,fromValues:tr},Symbol.toStringTag,{value:"Module"}));const nr=(e,n)=>{const u=X(e,n,0,0,0,0,n,0,0,0,0,n,0,0,0,0,1);return Y(u,u)},or=(e,n)=>{const u=X(e,n,0,0,.5-.5*n,0,n,0,.5-.5*n,0,0,n,.5-.5*n,0,0,0,1);return Y(u,u)},ar=(e,n)=>{const u=1-n,s=X(e,.2126+.7874*u,.7152-.7152*u,.0722-.0722*u,0,.2126-.2126*u,.7152+.2848*u,.0722-.0722*u,0,.2126-.2126*u,.7152-.7152*u,.0722+.9278*u,0,0,0,0,1);return Y(s,s)},ur=(e,n)=>{const u=Math.sin(n*Math.PI/180),s=Math.cos(n*Math.PI/180),c=X(e,.213+.787*s-.213*u,.715-.715*s-.715*u,.072-.072*s+.928*u,0,.213-.213*s+.143*u,.715+.285*s+.14*u,.072-.072*s-.283*u,0,.213-.213*s-.787*u,.715-.715*s+.715*u,.072+.928*s+.072*u,0,0,0,0,1);return Y(c,c)},ir=(e,n)=>{const u=1-2*n,s=X(e,u,0,0,n,0,u,0,n,0,0,u,n,0,0,0,1);return Y(s,s)},cr=(e,n)=>{const u=X(e,.213+.787*n,.715-.715*n,.072-.072*n,0,.213-.213*n,.715+.285*n,.072-.072*n,0,.213-.213*n,.715-.715*n,.072+.928*n,0,0,0,0,1);return Y(u,u)},sr=(e,n)=>{const u=1-n,s=X(e,.393+.607*u,.769-.769*u,.189-.189*u,0,.349-.349*u,.686+.314*u,.168-.168*u,0,.272-.272*u,.534-.534*u,.131+.869*u,0,0,0,0,1);return Y(s,s)};class W{constructor(n,u,s){this.strength=n,this.radius=u,this.threshold=s,this.type="bloom"}interpolate(n,u,s){this.strength=F(n.strength,u.strength,s),this.radius=F(n.radius,u.radius,s),this.threshold=F(n.threshold,u.threshold,s)}clone(){return new W(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:J(this.radius),strength:this.strength,threshold:this.threshold}}}class K{constructor(n){this.radius=n,this.type="blur"}interpolate(n,u,s){this.radius=Math.round(F(n.radius,u.radius,s))}clone(){return new K(this.radius)}toJSON(){return{type:"blur",radius:J(this.radius)}}}class U{constructor(n,u){this.type=n,this.amount=u,this.type!=="invert"&&this.type!=="grayscale"&&this.type!=="sepia"||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(n,u,s){this.amount=F(n.amount,u.amount,s),this._updateMatrix()}clone(){return new U(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const n=this._colorMatrix||H();switch(this.type){case"brightness":this._colorMatrix=nr(n,this.amount);break;case"contrast":this._colorMatrix=or(n,this.amount);break;case"grayscale":this._colorMatrix=ar(n,this.amount);break;case"invert":this._colorMatrix=ir(n,this.amount);break;case"saturate":this._colorMatrix=cr(n,this.amount);break;case"sepia":this._colorMatrix=sr(n,this.amount)}}}let Rt=class kt{constructor(n,u,s,c){this.offsetX=n,this.offsetY=u,this.blurRadius=s,this.color=c,this.type="drop-shadow"}interpolate(n,u,s){this.offsetX=F(n.offsetX,u.offsetX,s),this.offsetY=F(n.offsetY,u.offsetY,s),this.blurRadius=F(n.blurRadius,u.blurRadius,s),this.color[0]=Math.round(F(n.color[0],u.color[0],s)),this.color[1]=Math.round(F(n.color[1],u.color[1],s)),this.color[2]=Math.round(F(n.color[2],u.color[2],s)),this.color[3]=F(n.color[3],u.color[3],s)}clone(){return new kt(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const n=[...this.color];return n[3]*=255,{type:"drop-shadow",xoffset:J(this.offsetX),yoffset:J(this.offsetY),blurRadius:J(this.blurRadius),color:n}}},Nt=class jt{constructor(n){this.angle=n,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(n,u,s){this.angle=F(n.angle,u.angle,s),this._updateMatrix()}clone(){return new jt(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const n=this._colorMatrix||H();this._colorMatrix=ur(n,this.angle)}};class L{constructor(n){this.amount=n,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(n,u,s){this.amount=F(n.amount,u.amount,s)}clone(){return new L(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function F(e,n,u){return e+(n-e)*u}function J(e){return Math.round(1e3*Ge(e))/1e3}function lr(e){switch(e.type){case"grayscale":case"sepia":case"invert":return new U(e.type,0);case"saturate":case"brightness":case"contrast":return new U(e.type,1);case"opacity":return new L(1);case"hue-rotate":return new Nt(0);case"blur":return new K(0);case"drop-shadow":return new Rt(0,0,0,[...He("transparent")]);case"bloom":return new W(0,0,1)}}function fr(e,n){const u=e.length>n.length?e:n;return(e.length>n.length?n:e).every((s,c)=>s.type===u[c].type)}function hr(e,n){const u=e.length>n.length?e:n,s=e.length>n.length?n:e;for(let c=s.length;c<u.length;c++)s.push(lr(u[c]))}function kr(e){const n=e[0];return!!n&&"type"in n}var Et,Ot,rt={exports:{}};rt.exports,Ot=function(){function e(c,g){function w(){this.constructor=c}w.prototype=g.prototype,c.prototype=new w}function n(c,g,w,r){var y=Error.call(this,c);return Object.setPrototypeOf&&Object.setPrototypeOf(y,n.prototype),y.expected=g,y.found=w,y.location=r,y.name="SyntaxError",y}function u(c,g,w){return w=w||" ",c.length>g?c:(g-=c.length,c+(w+=w.repeat(g)).slice(0,g))}function s(c,g){var w,r={},y=(g=g!==void 0?g:{}).grammarSource,_={start:_t},k=_t,N="none",I=")",d=",",x="(",C="%",p="px",ut="cm",it="mm",ct="in",st="pt",lt="pc",ft="deg",ht="rad",pt="grad",mt="turn",Pt="#",Tt=".",Xt="e",dt=/^[ \t\n\r]/,gt=/^[a-z\-]/,yt=/^[0-9a-fA-F]/,vt=/^[+\-]/,P=/^[0-9]/,Yt=j("none"),qt=b("none",!1),zt=b(")",!1),wt=b(",",!1),Jt=j("whitespace"),xt=z([" ","	",`
`,"\r"],!1,!1),Ut=j("function"),Vt=b("(",!1),Dt=j("identifier"),At=z([["a","z"],"-"],!1,!1),Bt=j("percentage"),Gt=b("%",!1),Ht=j("length"),Wt=b("px",!1),Kt=b("cm",!1),Lt=b("mm",!1),Qt=b("in",!1),Zt=b("pt",!1),te=b("pc",!1),ee=j("angle"),re=b("deg",!1),ne=b("rad",!1),oe=b("grad",!1),ae=b("turn",!1),ue=j("number"),ie=j("color"),ce=b("#",!1),bt=z([["0","9"],["a","f"],["A","F"]],!1,!1),Mt=z(["+","-"],!1,!1),T=z([["0","9"]],!1,!1),se=b(".",!1),le=b("e",!1),fe=function(){return[]},he=function(t,a){return{type:"function",name:t,parameters:a||[]}},pe=function(t,a){return a.length>0?Be(t,a,3):[t]},me=function(t){return{type:"quantity",value:t.value,unit:t.unit}},de=function(t){return{type:"color",colorType:t.type,value:t.value}},ge=function(t){return t},ye=function(){return B()},ve=function(t){return{value:t,unit:"%"}},we=function(t){return{value:t,unit:"px"}},xe=function(t){return{value:t,unit:"cm"}},Ae=function(t){return{value:t,unit:"mm"}},be=function(t){return{value:t,unit:"in"}},Me=function(t){return{value:t,unit:"pt"}},$e=function(t){return{value:t,unit:"pc"}},Fe=function(t){return{value:t,unit:"deg"}},_e=function(t){return{value:t,unit:"rad"}},Ce=function(t){return{value:t,unit:"grad"}},Ee=function(t){return{value:t,unit:"turn"}},Oe=function(t){return{value:t,unit:null}},Se=function(){return{type:"hex",value:B()}},Re=function(t){return{type:"function",value:t}},ke=function(){return{type:"named",value:B()}},Ne=function(){return parseFloat(B())},o=0,v=0,D=[{line:1,column:1}],R=0,Z=[],l=0;if("startRule"in g){if(!(g.startRule in _))throw new Error(`Can't start parsing from rule "`+g.startRule+'".');k=_[g.startRule]}function B(){return c.substring(v,o)}function b(t,a){return{type:"literal",text:t,ignoreCase:a}}function z(t,a,i){return{type:"class",parts:t,inverted:a,ignoreCase:i}}function je(){return{type:"end"}}function j(t){return{type:"other",description:t}}function $t(t){var a,i=D[t];if(i)return i;for(a=t-1;!D[a];)a--;for(i={line:(i=D[a]).line,column:i.column};a<t;)c.charCodeAt(a)===10?(i.line++,i.column=1):i.column++,a++;return D[t]=i,i}function Ft(t,a,i){var h=$t(t),A=$t(a),m={source:y,start:{offset:t,line:h.line,column:h.column},end:{offset:a,line:A.line,column:A.column}};return i&&y&&typeof y.offset=="function"&&(m.start=y.offset(m.start),m.end=y.offset(m.end)),m}function f(t){o<R||(o>R&&(R=o,Z=[]),Z.push(t))}function Ie(t,a,i){return new n(n.buildMessage(t,a),t,a,i)}function _t(){var t;return(t=Pe())===r&&(t=Te()),t}function Pe(){var t,a;return l++,t=o,M(),c.substr(o,4)===N?(a=N,o+=4):(a=r,l===0&&f(qt)),a!==r?(M(),v=t,t=fe()):(o=t,t=r),l--,t===r&&l===0&&f(Yt),t}function Te(){var t,a;if(t=[],(a=tt())!==r)for(;a!==r;)t.push(a),a=tt();else t=r;return t}function tt(){var t,a,i,h;return t=o,M(),(a=Ye())!==r?(M(),(i=Xe())===r&&(i=null),M(),c.charCodeAt(o)===41?(h=I,o++):(h=r,l===0&&f(zt)),h!==r?(M(),v=t,t=he(a,i)):(o=t,t=r)):(o=t,t=r),t}function Xe(){var t,a,i,h,A,m,O,G;if(t=o,(a=et())!==r){for(i=[],h=o,A=M(),c.charCodeAt(o)===44?(m=d,o++):(m=r,l===0&&f(wt)),m===r&&(m=null),O=M(),(G=et())!==r?h=A=[A,m,O,G]:(o=h,h=r);h!==r;)i.push(h),h=o,A=M(),c.charCodeAt(o)===44?(m=d,o++):(m=r,l===0&&f(wt)),m===r&&(m=null),O=M(),(G=et())!==r?h=A=[A,m,O,G]:(o=h,h=r);v=t,t=pe(a,i)}else o=t,t=r;return t}function et(){var t,a;return t=o,(a=qe())===r&&(a=ze())===r&&(a=Je())===r&&(a=Ue()),a!==r&&(v=t,a=me(a)),(t=a)===r&&(t=o,(a=Ve())!==r&&(v=t,a=de(a)),t=a),t}function M(){var t,a;for(l++,t=[],dt.test(c.charAt(o))?(a=c.charAt(o),o++):(a=r,l===0&&f(xt));a!==r;)t.push(a),dt.test(c.charAt(o))?(a=c.charAt(o),o++):(a=r,l===0&&f(xt));return l--,a=r,l===0&&f(Jt),t}function Ye(){var t,a,i;return l++,t=o,(a=Ct())!==r?(c.charCodeAt(o)===40?(i=x,o++):(i=r,l===0&&f(Vt)),i!==r?(v=t,t=ge(a)):(o=t,t=r)):(o=t,t=r),l--,t===r&&(a=r,l===0&&f(Ut)),t}function Ct(){var t,a,i;if(l++,t=o,a=[],gt.test(c.charAt(o))?(i=c.charAt(o),o++):(i=r,l===0&&f(At)),i!==r)for(;i!==r;)a.push(i),gt.test(c.charAt(o))?(i=c.charAt(o),o++):(i=r,l===0&&f(At));else a=r;return a!==r&&(v=t,a=ye()),l--,(t=a)===r&&(a=r,l===0&&f(Dt)),t}function qe(){var t,a,i;return l++,t=o,M(),(a=E())!==r?(c.charCodeAt(o)===37?(i=C,o++):(i=r,l===0&&f(Gt)),i!==r?(v=t,t=ve(a)):(o=t,t=r)):(o=t,t=r),l--,t===r&&l===0&&f(Bt),t}function ze(){var t,a,i;return l++,t=o,M(),(a=E())!==r?(c.substr(o,2)===p?(i=p,o+=2):(i=r,l===0&&f(Wt)),i!==r?(v=t,t=we(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,M(),(a=E())!==r?(c.substr(o,2)===ut?(i=ut,o+=2):(i=r,l===0&&f(Kt)),i!==r?(v=t,t=xe(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,M(),(a=E())!==r?(c.substr(o,2)===it?(i=it,o+=2):(i=r,l===0&&f(Lt)),i!==r?(v=t,t=Ae(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,M(),(a=E())!==r?(c.substr(o,2)===ct?(i=ct,o+=2):(i=r,l===0&&f(Qt)),i!==r?(v=t,t=be(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,M(),(a=E())!==r?(c.substr(o,2)===st?(i=st,o+=2):(i=r,l===0&&f(Zt)),i!==r?(v=t,t=Me(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,M(),(a=E())!==r?(c.substr(o,2)===lt?(i=lt,o+=2):(i=r,l===0&&f(te)),i!==r?(v=t,t=$e(a)):(o=t,t=r)):(o=t,t=r)))))),l--,t===r&&l===0&&f(Ht),t}function Je(){var t,a,i;return l++,t=o,(a=E())!==r?(c.substr(o,3)===ft?(i=ft,o+=3):(i=r,l===0&&f(re)),i!==r?(v=t,t=Fe(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,(a=E())!==r?(c.substr(o,3)===ht?(i=ht,o+=3):(i=r,l===0&&f(ne)),i!==r?(v=t,t=_e(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,(a=E())!==r?(c.substr(o,4)===pt?(i=pt,o+=4):(i=r,l===0&&f(oe)),i!==r?(v=t,t=Ce(a)):(o=t,t=r)):(o=t,t=r),t===r&&(t=o,(a=E())!==r?(c.substr(o,4)===mt?(i=mt,o+=4):(i=r,l===0&&f(ae)),i!==r?(v=t,t=Ee(a)):(o=t,t=r)):(o=t,t=r)))),l--,t===r&&(a=r,l===0&&f(ee)),t}function Ue(){var t,a;return l++,t=o,M(),(a=E())!==r?(v=t,t=Oe(a)):(o=t,t=r),l--,t===r&&l===0&&f(ue),t}function Ve(){var t,a,i,h;if(l++,t=o,c.charCodeAt(o)===35?(a=Pt,o++):(a=r,l===0&&f(ce)),a!==r){if(i=[],yt.test(c.charAt(o))?(h=c.charAt(o),o++):(h=r,l===0&&f(bt)),h!==r)for(;h!==r;)i.push(h),yt.test(c.charAt(o))?(h=c.charAt(o),o++):(h=r,l===0&&f(bt));else i=r;i!==r?(v=t,t=Se()):(o=t,t=r)}else o=t,t=r;return t===r&&(t=o,(a=tt())!==r&&(v=t,a=Re(a)),(t=a)===r&&(t=o,(a=Ct())!==r&&(v=t,a=ke()),t=a)),l--,t===r&&(a=r,l===0&&f(ie)),t}function E(){var t,a,i,h,A,m,O;for(t=o,vt.test(c.charAt(o))?(c.charAt(o),o++):l===0&&f(Mt),a=o,i=[],P.test(c.charAt(o))?(h=c.charAt(o),o++):(h=r,l===0&&f(T));h!==r;)i.push(h),P.test(c.charAt(o))?(h=c.charAt(o),o++):(h=r,l===0&&f(T));if(c.charCodeAt(o)===46?(h=Tt,o++):(h=r,l===0&&f(se)),h!==r){if(A=[],P.test(c.charAt(o))?(m=c.charAt(o),o++):(m=r,l===0&&f(T)),m!==r)for(;m!==r;)A.push(m),P.test(c.charAt(o))?(m=c.charAt(o),o++):(m=r,l===0&&f(T));else A=r;A!==r?a=i=[i,h,A]:(o=a,a=r)}else o=a,a=r;if(a===r)if(a=[],P.test(c.charAt(o))?(i=c.charAt(o),o++):(i=r,l===0&&f(T)),i!==r)for(;i!==r;)a.push(i),P.test(c.charAt(o))?(i=c.charAt(o),o++):(i=r,l===0&&f(T));else a=r;if(a!==r){if(i=o,c.charCodeAt(o)===101?(h=Xt,o++):(h=r,l===0&&f(le)),h!==r){if(vt.test(c.charAt(o))?(A=c.charAt(o),o++):(A=r,l===0&&f(Mt)),A===r&&(A=null),m=[],P.test(c.charAt(o))?(O=c.charAt(o),o++):(O=r,l===0&&f(T)),O!==r)for(;O!==r;)m.push(O),P.test(c.charAt(o))?(O=c.charAt(o),o++):(O=r,l===0&&f(T));else m=r;m!==r?i=h=[h,A,m]:(o=i,i=r)}else o=i,i=r;i===r&&(i=null),v=t,t=Ne()}else o=t,t=r;return t}function De(t,a){return t.map(function(i){return i[a]})}function Be(t,a,i){return[t].concat(De(a,i))}if((w=k())!==r&&o===c.length)return w;throw w!==r&&o<c.length&&f(je()),Ie(Z,R<c.length?c.charAt(R):null,R<c.length?Ft(R,R+1):Ft(R,R))}return e(n,Error),n.prototype.format=function(c){var g="Error: "+this.message;if(this.location){var w,r=null;for(w=0;w<c.length;w++)if(c[w].source===this.location.source){r=c[w].text.split(/\r\n|\n|\r/g);break}var y=this.location.start,_=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(y):y,k=this.location.source+":"+_.line+":"+_.column;if(r){var N=this.location.end,I=u("",_.line.toString().length," "),d=r[y.line-1],x=(y.line===N.line?N.column:d.length+1)-y.column||1;g+=`
 --> `+k+`
`+I+` |
`+_.line+" | "+d+`
`+I+" | "+u("",y.column-1," ")+u("",x,"^")}else g+=`
 at `+k}return g},n.buildMessage=function(c,g){var w={literal:function(d){return'"'+y(d.text)+'"'},class:function(d){var x=d.parts.map(function(C){return Array.isArray(C)?_(C[0])+"-"+_(C[1]):_(C)});return"["+(d.inverted?"^":"")+x.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(d){return d.description}};function r(d){return d.charCodeAt(0).toString(16).toUpperCase()}function y(d){return d.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(x){return"\\x0"+r(x)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(x){return"\\x"+r(x)})}function _(d){return d.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(x){return"\\x0"+r(x)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(x){return"\\x"+r(x)})}function k(d){return w[d.type](d)}function N(d){var x,C,p=d.map(k);if(p.sort(),p.length>0){for(x=1,C=1;x<p.length;x++)p[x-1]!==p[x]&&(p[C]=p[x],C++);p.length=C}switch(p.length){case 1:return p[0];case 2:return p[0]+" or "+p[1];default:return p.slice(0,-1).join(", ")+", or "+p[p.length-1]}}function I(d){return d?'"'+y(d)+'"':"end of input"}return"Expected "+N(c)+" but "+I(g)+" found."},{SyntaxError:n,parse:s}},(Et=rt).exports&&(Et.exports=Ot());var pr=rt.exports;function Nr(e){if(!e||e.length===0)return null;if(typeof e=="string"){const u=St(e);return u&&u.length!==0?u:null}const n=e.map(u=>{if(!Number.isFinite(u.scale)||u.scale<=0)throw new $("effect:invalid-scale","scale must be finite and greater than 0",{stop:u});return{scale:u.scale,effects:St(u.value)}});n.sort((u,s)=>s.effects.length-u.effects.length);for(let u=0;u<n.length-1;u++){if(!fr(n[u].effects,n[u+1].effects))throw new $("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:n[u].effects,b:n[u+1].effects});hr(n[u].effects,n[u+1].effects)}return n.sort((u,s)=>s.scale-u.scale),n}function St(e){let n;if(!e)return[];try{n=pr.parse(e)}catch(u){throw new $("effect:invalid-syntax","Invalid effect syntax",{value:e,error:u})}return n.map(u=>mr(u))}function mr(e){try{switch(e.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return dr(e);case"opacity":return gr(e);case"hue-rotate":return yr(e);case"blur":return vr(e);case"drop-shadow":return wr(e);case"bloom":return xr(e)}}catch(n){throw n.details.filter=e,n}throw new $("effect:unknown-effect",`Effect '${e.name}' is not supported`,{effect:e})}function dr(e){let n=1;return q(e.parameters,1),e.parameters.length===1&&(n=S(e.parameters[0])),new U(e.name,n)}function gr(e){let n=1;return q(e.parameters,1),e.parameters.length===1&&(n=S(e.parameters[0])),new L(n)}function yr(e){let n=0;return q(e.parameters,1),e.parameters.length===1&&(n=_r(e.parameters[0])),new Nt(n)}function vr(e){let n=0;return q(e.parameters,1),e.parameters.length===1&&(n=at(e.parameters[0]),V(n,e.parameters[0])),new K(n)}function wr(e){const n=[];let u=null;for(const s of e.parameters)if(s.type==="color"){if(n.length&&Object.freeze(n),u)throw new $("effect:type-error","Accepts only one color",{});u=Cr(s)}else{const c=at(s);if(Object.isFrozen(n))throw new $("effect:type-error","<length> parameters not consecutive",{lengths:n});n.push(c),n.length===3&&V(c,s)}if(n.length<2||n.length>3)throw new $("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${n.length}}`,{lengths:n});return new Rt(n[0],n[1],n[2]||0,u||It("black"))}function xr(e){let n=1,u=0,s=0;return q(e.parameters,3),e.parameters[0]&&(n=S(e.parameters[0])),e.parameters[1]&&(u=at(e.parameters[1]),V(u,e.parameters[1])),e.parameters[2]&&(s=S(e.parameters[2])),new W(n,u,s)}function q(e,n){if(e.length>n)throw new $("effect:type-error",`Function supports up to ${n} parameters, Actual: ${e.length}`,{parameters:e})}function Q(e){if(e.type==="color")return"<color>";if(e.unit){if(e.unit in ot)return"<length>";if(e.unit in nt)return"<angle>";if(e.unit==="%")return"<percentage>"}return"<double>"}function V(e,n){if(e<0)throw new $("effect:type-error",`Negative values are not allowed, Actual: ${e}`,{term:n})}function Ar(e){if(e.type!=="quantity"||e.unit!==null)throw new $("effect:type-error",`Expected <double>, Actual: ${Q(e)}`,{term:e})}function br(e){if(e.type!=="quantity"||e.unit!==null&&e.unit!=="%")throw new $("effect:type-error",`Expected <double> or <percentage>, Actual: ${Q(e)}`,{term:e})}const nt={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Mr(e){if(e.type!=="quantity"||!(e.value===0&&e.unit===null||e.unit&&nt[e.unit]!=null))throw new $("effect:type-error",`Expected <angle>, Actual: ${Q(e)}`,{term:e})}const ot={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function $r(e){if(e.type!=="quantity"||!(e.value===0&&e.unit===null||e.unit&&ot[e.unit]!=null))throw new $("effect:type-error",`Expected <length>, Actual: ${Q(e)}`,{term:e})}function S(e){br(e);const n=e.value;return V(n,e),e.unit==="%"?.01*n:n}function Fr(e){return Ar(e),V(e.value,e),e.value}function _r(e){return Mr(e),e.value*nt[e.unit]||0}function at(e){return $r(e),e.value*ot[e.unit]||0}function Cr(e){switch(e.colorType){case"hex":return We(e.value);case"named":return It(e.value);case"function":return Sr(e.value)}}function It(e){if(!Ke(e))throw new $("effect:unknown-color",`color '${e}' isn't valid`,{namedColor:e});return Le(e)}const Er=/^rgba?/i,Or=/^hsla?/i;function Sr(e){if(q(e.parameters,4),Er.test(e.name))return[S(e.parameters[0]),S(e.parameters[1]),S(e.parameters[2]),e.parameters[3]?S(e.parameters[3]):1];if(Or.test(e.name))return Qe(Fr(e.parameters[0]),S(e.parameters[1]),S(e.parameters[2]),e.parameters[3]?S(e.parameters[3]):1);throw new $("effect:syntax-error",`Invalid color function '${e.name}'`,{colorFunction:e})}export{hr as e,kr as h,fr as n,Nr as y};
