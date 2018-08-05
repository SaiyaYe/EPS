// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/CreateImageCommand","dojo/_base/declare dojo/Deferred dojo/when dojo/dom-construct dojo/dom-style dojo/sniff ./CreateHTMLCommand ./supportClasses/PlayerCommands ./supportClasses/ProgressSteps ./createHTML/CommandMode esri/dijit/geoenrichment/utils/DelayUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/SVGUtil esri/dijit/geoenrichment/utils/async/AsyncQueue ./supportClasses/ImageSaveUtil ./createHTML/CSSFilesLoader dojo/i18n!../../../../../nls/jsapi".split(" "),
function(p,t,l,n,g,q,u,v,h,w,x,D,y,z,A,r,m){m=m.geoenrichment.dijit.ReportPlayer.ReportPlayer;var B=p(null,{_printNode:null,setUpDocument:function(){return this._printNode=n.create("div",{style:"display: inline-block; position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body)},unsetDocument:function(){n.destroy(this._printNode)}}),C={printImages:function(b,d,a,c){var k=[];return z.executeFunctions(b.map(function(b){b=b.replace(/&nbsp;|&#160;/g," ");return function(){d.innerHTML=b;var f=
d.children[0];g.set(f,"width",3*g.get(f,"width")+"px");g.set(f,"height",3*g.get(f,"height")+"px");var h=g.get(f,"width"),e=g.get(f,"height");return x.delay().then(function(){return l(a(d,h,e),function(a){a=a.toDataURL("image/png");k.push(a);c(k.length-1)})})}}),0).then(function(){return k})}};return p(u,{id:v.IMAGE,label:m.createImageCommandLabel,errorMessage:m.createImageError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:w.SVG,_mergePageIndexes:!1,execute:function(b,d){var a=this;return l(this.inherited(arguments),
function(c){function k(b){d.skipErrorNotification||a._handleError(b)}if(c.svgStrings){var g=new B,f=g.setUpDocument(),n=c.svgStrings.length,e=function(b){a._stepFinished(h.RENDER_IMAGE,b+1,n)};return l(r.loadCssFontFiles(),function(){return C.printImages(c.svgStrings,f,a._nodeToCanvasFunc.bind(a),e).then(function(c){return A.saveImages(c,{reportTitle:b.getReportTitle(),analysisAreas:b.getAnalysisAreas(),allAreas:a._printableContainer.needExportAllAreas(),numPages:a._printableContainer.getNumberOfPages(),
confirmSaveFile:a._confirmSaveFile,skipSavingFile:d.skipSavingFile,saveMultipleImages:a._saveMultipleImages&&a._saveMultipleImages.bind(a)})}).otherwise(k).always(function(b){return l(g.unsetDocument(),function(){return l(a._printableContainer&&a._printableContainer.stop(),function(){return b})})})})}})},_saveMultipleImages:null,_stepFinished:function(b,d,a){if(this._currentProgressBack){var c=0;switch(b){case h.REPLACE_MAPS:c=10;break;case h.PREPARE_DOM:c=20;break;case h.RENDER_PAGE:c=20+40*d/a;
break;case h.UNSET_LAYOUT:c=70;break;case h.RENDER_IMAGE:c=70+30*d/a}this._currentProgressBack(c/100)}},_nodeToCanvasFunc:function(b,d,a){var c=r.loadCssFontFiles(),k=document.createElement("canvas");k.width=d;k.height=a;var g=k.getContext("2d"),f=b.children[0];c.forEach(function(a){var b=document.createElementNS("http://www.w3.org/2000/svg","defs"),c=document.createElementNS("http://www.w3.org/2000/svg","style");c.innerHTML=a;b.appendChild(c);f.insertBefore(b,f.firstElementChild)});var h=window.URL||
window.webkitURL||window,e=new Image;e.width=d;e.height=a;b=new Blob([y.getOuterHTML(f)],{type:"image/svg+xml"});var l=h.createObjectURL(b),m=new t;e.onload=function(){g.drawImage(e,0,0,d,a);h.revokeObjectURL(l);n.destroy(e);m.resolve(k)};e.onerror=function(a){n.destroy(e);m.reject(a)};n.place(e,document.body);e.src=l;return m.promise},isBrowserSupported:function(){return!(q("ie")||q("trident"))}})});