// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/action2d/Highlight","dojo/_base/lang dojo/_base/declare dojo/_base/Color dojo/_base/connect dojox/color/_base dojox/charting/action2d/PlotAction dojo/fx/easing dojox/gfx/fx esri/dijit/geoenrichment/utils/ColorUtil".split(" "),function(k,l,m,n,e,p,q,r,v){var t=function(a){return function(){return a}},f=function(a){a=new e.Color(a);var c;x=a.toHsl();0===x.s?x.l=50>x.l?x.l+30:x.l-20:(x.s=100,x.l=50>x.l?75:75<x.l?50:x.l-50>75-x.l?50:
75);c=e.fromHsl(x);c.a=a.a;return c},u=function(a){a=f(a);a.a=.7;return a};return l("dojox.charting.action2d.Highlight",p,{defaultParams:{duration:400,easing:q.backOut},optionalParams:{highlight:"red"},_useStroke:!0,constructor:function(a,c,d){this.colorFunc=(a=(d=d||{},d.highlight))?k.isFunction(a)?a:t(a):f;this._useStroke=!!d.stroke;this.connect()},process:function(a){if(a.shape&&a.type in this.overOutEvents&&"spider_circle"!==a.element&&"spider_plot"!==a.element){"spider_poly"===a.element&&this.colorFunc===
f&&(this.colorFunc=u);var c=a.run.name,d=a.index,b;c in this.anim?b=this.anim[c][d]:this.anim[c]={};if(b)b.action.stop(!0);else{b=this._useStroke?(b=a.shape.getStroke())&&b.color:a.shape.getFill();if(!(b&&b instanceof m))return;this.anim[c][d]=b={start:b,end:this.colorFunc(b)}}var g=b.start,h=b.end;if("onmouseout"===a.type)var e=g,g=h,h=e;b.action=r[this._useStroke?"animateStroke":"animateFill"]({shape:a.shape,duration:this.duration,easing:this.easing,color:{start:g,end:h}});"onmouseout"===a.type&&
n.connect(b.action,"onEnd",this,function(){this.anim[c]&&delete this.anim[c][d]});b.action.play()}}})});