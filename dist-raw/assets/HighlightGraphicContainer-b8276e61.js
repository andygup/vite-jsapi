import{ae as o,ai as n}from"./index-468a9268.js";import{W as s}from"./color-9ac858bf.js";import{G as a}from"./BaseGraphicContainer-0c897a35.js";import{l}from"./enums-08489827.js";let e=class extends a{doRender(t){t.drawPhase===s.HIGHLIGHT&&super.doRender(t)}renderChildren(t){if(this.attributeView.update(),!this.children.some(r=>r.hasData))return;this.attributeView.bindTextures(t.context),super.renderChildren(t);const{painter:h}=t,i=h.effects.highlight;i.bind(t),t.context.setColorMask(!0,!0,!0,!0),t.context.clear(l.COLOR_BUFFER_BIT),this._renderChildren(t,i.defines.concat(["highlightAll"])),i.draw(t),i.unbind()}};e=o([n("esri.views.2d.layers.support.HighlightGraphicContainer")],e);const C=e;export{C as H};
