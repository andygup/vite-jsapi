function X(r){return window.WebGL2RenderingContext&&r instanceof window.WebGL2RenderingContext}class i{constructor(T,e,t,n,u,s,_,a,Q){this.createQuery=T,this.deleteQuery=e,this.resultAvailable=t,this.getResult=n,this.disjoint=u,this.beginTimeElapsed=s,this.endTimeElapsed=_,this.createTimestamp=a,this.timestampBits=Q}}let E=!1;function y(r,T){if(T.disjointTimerQuery)return null;let e=r.getExtension("EXT_disjoint_timer_query_webgl2");return e&&X(r)?new i(()=>r.createQuery(),t=>{r.deleteQuery(t),E=!1},t=>r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE),t=>r.getQueryParameter(t,r.QUERY_RESULT),()=>r.getParameter(e.GPU_DISJOINT_EXT),t=>{E||(E=!0,r.beginQuery(e.TIME_ELAPSED_EXT,t))},()=>{r.endQuery(e.TIME_ELAPSED_EXT),E=!1},t=>e.queryCounterEXT(t,e.TIMESTAMP_EXT),()=>r.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):(e=r.getExtension("EXT_disjoint_timer_query"),e?new i(()=>e.createQueryEXT(),t=>{e.deleteQueryEXT(t),E=!1},t=>e.getQueryObjectEXT(t,e.QUERY_RESULT_AVAILABLE_EXT),t=>e.getQueryObjectEXT(t,e.QUERY_RESULT_EXT),()=>r.getParameter(e.GPU_DISJOINT_EXT),t=>{E||(E=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,t))},()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),E=!1},t=>e.queryCounterEXT(t,e.TIMESTAMP_EXT),()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):null)}export{y as c,X as i};