import{m as e}from"./index-b4b3ae7d.js";const l=()=>!!e("enable-feature:force-wosr"),t=()=>e.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0),r=()=>e.add("enable-feature:direct-3d-object-feature-layer-display",!0,!1),n=()=>e.add("enable-i3s-patching",!0,!0),i=()=>e.add("enable-i3s-patching",!0,!1),d=()=>!!e("enable-feature:SceneLayer-editing"),c=(a="feature-layer-view")=>{switch(i(),r(),e.add("enable-feature:SceneLayer-editing",!0,!0),a){case"feature-layer-view":t();break;case"i3s-patching":n();break}};c();export{l as e,d as s};
