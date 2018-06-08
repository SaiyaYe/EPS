//>>built
define("dojox/charting/plot2d/Scatter","dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/has ./CartesianBase ./_PlotEvents ./common dojox/lang/functional dojox/lang/functional/reversed dojox/lang/utils dojox/gfx/fx dojox/gfx/gradutils".split(" "),function(q,r,B,C,D,E,y,F,G,t,H,I){var J=G.lambda("item.purgeGroup()");return B("dojox.charting.plot2d.Scatter",[D,E],{defaultParams:{shadows:null,animate:null},optionalParams:{markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerFont:"",
markerFontColor:"",styleFunc:null},constructor:function(g,d){this.opt=q.clone(q.mixin(this.opt,this.defaultParams));t.updateWithObject(this.opt,d);t.updateWithPattern(this.opt,d,this.optionalParams);this.animate=this.opt.animate},render:function(g,d){if(this.zoom&&!this.isDataDirty())return this.performZoom(g,d);this.resetEvents();this.dirty=this.isDirty();var k;this.dirty&&(r.forEach(this.series,J),this._eventSeries={},this.cleanGroup(),k=this.getGroup(),F.forEachRev(this.series,function(a){a.cleanGroup(k)}));
for(var u=this.chart.theme,q=this.events(),x=0;x<this.series.length;x++){var a=this.series[x];if(this.dirty||a.dirty)if(a.cleanGroup(),a.data.length){var p=u.next("marker",[this.opt,a]),e,t=this._hScaler.scaler.getTransformerFromModel(this._hScaler),z=this._vScaler.scaler.getTransformerFromModel(this._vScaler);if(a.hidden)a.dyn.marker=p.symbol,a.dyn.markerFill=p.marker.fill,a.dyn.markerStroke=p.marker.stroke;else{k=a.group;e="number"==typeof a.data[0]?r.map(a.data,function(a,b){return{x:t(b+1)+d.l,
y:g.height-d.b-z(a)}},this):r.map(a.data,function(a,b){return{x:t(a.x)+d.l,y:g.height-d.b-z(a.y)}},this);var v=Array(e.length),h=Array(e.length),w=Array(e.length);r.forEach(e,function(n,b){var f=a.data[b],c;this.opt.styleFunc||"number"!=typeof f?(c="number"!=typeof f?[f]:[],this.opt.styleFunc&&c.push(this.opt.styleFunc(f)),c=u.addMixin(p,"marker",c,!0)):c=u.post(p,"marker");var e="M"+n.x+" "+n.y+" "+c.symbol;c.marker.shadow&&(v[b]=k.createPath("M"+(n.x+c.marker.shadow.dx)+" "+(n.y+c.marker.shadow.dy)+
" "+c.symbol).setStroke(c.marker.shadow).setFill(c.marker.shadow.color),this.animate&&this._animateScatter(v[b],g.height-d.b));if(c.marker.outline){var l=y.makeStroke(c.marker.outline);l.width=2*l.width+(c.marker.stroke&&c.marker.stroke.width||0);w[b]=k.createPath(e).setStroke(l);this.animate&&this._animateScatter(w[b],g.height-d.b)}var l=y.makeStroke(c.marker.stroke),m=this._plotFill(c.marker.fill,g,d);!m||"linear"!==m.type&&"radial"!=m.type||(m=I.getColor(m,{x:n.x,y:n.y}),l&&(l.color=m));h[b]=k.createPath(e).setStroke(l).setFill(m);
this.opt.labels&&(e=h[b].getBoundingBox(),this.createLabel(k,f,e,c));this.animate&&this._animateScatter(h[b],g.height-d.b)},this);h.length&&(a.dyn.marker=p.symbol,a.dyn.markerStroke=h[h.length-1].getStroke(),a.dyn.markerFill=h[h.length-1].getFill());if(q){var A=Array(h.length);r.forEach(h,function(d,b){var f={element:"marker",index:b,run:a,shape:d,outline:w&&w[b]||null,shadow:v&&v[b]||null,cx:e[b].x,cy:e[b].y};"number"==typeof a.data[0]?(f.x=b+1,f.y=a.data[b]):(f.x=a.data[b].x,f.y=a.data[b].y);this._connectEvents(f);
A[b]=f},this);this._eventSeries[a.name]=A}else delete this._eventSeries[a.name];a.dirty=!1}}else a.dirty=!1,u.skip();else u.skip(),this._reconnectEvents(a.name)}this.dirty=!1;C("dojo-bidi")&&this._checkOrientation(this.group,g,d);return this},_animateScatter:function(g,d){H.animateTransform(q.delegate({shape:g,duration:1200,transform:[{name:"translate",start:[0,d],end:[0,0]},{name:"scale",start:[0,0],end:[1,1]},{name:"original"}]},this.animate)).play()}})});