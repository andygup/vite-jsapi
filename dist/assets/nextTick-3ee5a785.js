const o=[];function e(t){o.push(t),o.length===1&&queueMicrotask(()=>{const n=o.slice();o.length=0;for(const c of n)c()})}export{e as t};
