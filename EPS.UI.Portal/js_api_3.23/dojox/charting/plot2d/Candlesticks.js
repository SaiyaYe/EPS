//>>built
define("dojox/charting/plot2d/Candlesticks","dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/has ./CartesianBase ./_PlotEvents ./common dojox/lang/functional dojox/lang/functional/reversed dojox/lang/utils dojox/gfx/fx".split(" "),function(r,y,D,I,z,J,E,K,L,v,M){var N=L.lambda("item.purgeGroup()");return y("dojox.charting.plot2d.Candlesticks",[z,J],{defaultParams:{gap:2,animate:null},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(a,
b){this.opt=r.clone(this.defaultParams);v.updateWithObject(this.opt,b);v.updateWithPattern(this.opt,b,this.optionalParams);this.animate=this.opt.animate},collectStats:function(a){for(var b=r.delegate(E.defaultStats),g=0;g<a.length;g++){var d=a[g];if(d.data.length){var e=b.vmin,w=b.vmax;"ymin"in d&&"ymax"in d||D.forEach(d.data,function(a,e){if(!this.isNullValue(a)){var d=a.x||e+1;b.hmin=Math.min(b.hmin,d);b.hmax=Math.max(b.hmax,d);b.vmin=Math.min(b.vmin,a.open,a.close,a.high,a.low);b.vmax=Math.max(b.vmax,
a.open,a.close,a.high,a.low)}},this);"ymin"in d&&(b.vmin=Math.min(e,d.ymin));"ymax"in d&&(b.vmax=Math.max(w,d.ymax))}}return b},getSeriesStats:function(){var a=this.collectStats(this.series);a.hmin-=.5;a.hmax+=.5;return a},render:function(a,b){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,b);this.resetEvents();this.dirty=this.isDirty();var g;this.dirty&&(D.forEach(this.series,N),this._eventSeries={},this.cleanGroup(),g=this.getGroup(),K.forEachRev(this.series,function(a){a.cleanGroup(g)}));
var d=this.chart.theme,e,w,r=this._hScaler.scaler.getTransformerFromModel(this._hScaler),t=this._vScaler.scaler.getTransformerFromModel(this._vScaler),v=this.events();e=E.calculateBarSize(this._hScaler.bounds.scale,this.opt);w=e.gap;e=e.size;for(var A=this.series.length-1;0<=A;--A){var c=this.series[A];if(this.dirty||c.dirty){c.cleanGroup();var B=d.next("candlestick",[this.opt,c]),F=Array(c.data.length);if(c.hidden)c.dyn.fill=B.series.fill,c.dyn.stroke=B.series.stroke;else{g=c.group;for(var p=0;p<
c.data.length;++p){var f=c.data[p];if(!this.isNullValue(f)){var h=d.addMixin(B,"candlestick",f,!0),G=r(f.x||p+.5)+b.l+w,m=a.height-b.b,k=t(f.open),l=t(f.close),u=t(f.high),q=t(f.low);if("mid"in f)var H=t(f.mid);if(q>u)var n=u,u=q,q=n;if(1<=e){var n=k>l,y={x1:e/2,x2:e/2,y1:m-u,y2:m-q},z={x:0,y:m-Math.max(k,l),width:e,height:Math.max(n?k-l:l-k,1)},C=g.createGroup();C.setTransform({dx:G,dy:0});var x=C.createGroup();x.createLine(y).setStroke(h.series.stroke);x.createRect(z).setStroke(h.series.stroke).setFill(n?
h.series.fill:"white");"mid"in f&&x.createLine({x1:h.series.stroke?h.series.stroke.width||1:1,x2:e-(h.series.stroke?h.series.stroke.width||1:1),y1:m-H,y2:m-H}).setStroke(n?"white":h.series.stroke);c.dyn.fill=h.series.fill;c.dyn.stroke=h.series.stroke;v&&(f={element:"candlestick",index:p,run:c,shape:x,x:G,y:m-Math.max(k,l),cx:e/2,cy:m-Math.max(k,l)+Math.max(n?k-l:l-k,1)/2,width:e,height:Math.max(n?k-l:l-k,1),data:f},this._connectEvents(f),F[p]=f)}this.animate&&this._animateCandlesticks(C,m-q,u-q)}}this._eventSeries[c.name]=
F;c.dirty=!1}}else d.skip(),this._reconnectEvents(c.name)}this.dirty=!1;I("dojo-bidi")&&this._checkOrientation(this.group,a,b);return this},tooltipFunc:function(a){return'\x3ctable cellpadding\x3d"1" cellspacing\x3d"0" border\x3d"0" style\x3d"font-size:0.9em;"\x3e\x3ctr\x3e\x3ctd\x3eOpen:\x3c/td\x3e\x3ctd align\x3d"right"\x3e\x3cstrong\x3e'+a.data.open+'\x3c/strong\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3eHigh:\x3c/td\x3e\x3ctd align\x3d"right"\x3e\x3cstrong\x3e'+a.data.high+'\x3c/strong\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3eLow:\x3c/td\x3e\x3ctd align\x3d"right"\x3e\x3cstrong\x3e'+
a.data.low+'\x3c/strong\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3eClose:\x3c/td\x3e\x3ctd align\x3d"right"\x3e\x3cstrong\x3e'+a.data.close+"\x3c/strong\x3e\x3c/td\x3e\x3c/tr\x3e"+(void 0!==a.data.mid?'\x3ctr\x3e\x3ctd\x3eMid:\x3c/td\x3e\x3ctd align\x3d"right"\x3e\x3cstrong\x3e'+a.data.mid+"\x3c/strong\x3e\x3c/td\x3e\x3c/tr\x3e":"")+"\x3c/table\x3e"},_animateCandlesticks:function(a,b,g){M.animateTransform(r.delegate({shape:a,duration:1200,transform:[{name:"translate",start:[0,b-b/g],end:[0,0]},
{name:"scale",start:[1,1/g],end:[1,1]},{name:"original"}]},this.animate)).play()}})});