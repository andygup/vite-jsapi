import{m as e}from"./index-175d32d0.js";const l=()=>!!e("enable-feature:force-wosr"),r=()=>e.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0),t=()=>e.add("enable-feature:direct-3d-object-feature-layer-display",!0,!1),i=()=>e.add("enable-i3s-patching",!0,!0),d=()=>e.add("enable-i3s-patching",!0,!1),s=()=>!!e("enable-feature:SceneLayer-editing"),n=(a="feature-layer-view")=>{switch(d(),t(),e.add("enable-feature:SceneLayer-editing",!0,!0),a){case"feature-layer-view":r();break;case"i3s-patching":i()}};n();export{l as e,s as l};
