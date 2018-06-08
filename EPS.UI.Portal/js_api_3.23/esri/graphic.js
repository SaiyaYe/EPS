// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/graphic","dojo/_base/declare dojo/_base/lang dojo/has ./kernel ./domUtils ./lang ./InfoTemplate ./geometry/jsonUtils ./symbols/jsonUtils".split(" "),function(g,h,v,w,l,m,x,y,z){g=g(null,{declaredClass:"esri.Graphic",constructor:function(a,b,c,e){this._geomVersion=0;a&&!a.declaredClass?(this.geometry=a.geometry?y.fromJson(a.geometry):null,this.symbol=a.symbol?z.fromJson(a.symbol):null,this.attributes=a.attributes||null,this.infoTemplate=a.infoTemplate?new x(a.infoTemplate):null):(this.geometry=
a,this.symbol=b,this.attributes=c,this.infoTemplate=e)},_geomVersion:null,_shape:null,_dataAttrs:null,_graphicsLayer:null,_suspended:!1,size:null,_visible:!0,visible:!0,_aggregationSourceLayer:null,_aggregationInfo:null,setSize:function(a){this.size=a},getAggregationSourceLayer:function(){return this._aggregationSourceLayer},setAggregationSourceLayer:function(a){this._aggregationSourceLayer=a},isAggregate:function(){return!!this._aggregationInfo},getAggregationInfo:function(){return this._aggregationInfo},
setAggregationInfo:function(a){this._aggregationInfo=a},getChildGraphics:function(){var a=this.getAggregationSourceLayer();return a?a.getChildGraphics(this):[]},getDojoShape:function(){return this._shape},getShapes:function(){var a=[];this._shape&&a.push(this._shape);this._bgShape&&a.push(this._bgShape);return a},getNode:function(){var a=this._shape&&this._shape.getNode();return a&&a.nodeType?a:null},getNodes:function(){var a=this.getShapes(),b,c,e=a.length,f=[];for(c=0;c<e;c++)(b=a[c]&&a[c].getNode())&&
b.nodeType&&f.push(b);return f},getLayer:function(){return this._layer},getSourceLayer:function(){return this._sourceLayer||this._layer},clone:function(){var a=new this.constructor(this.toJson());a.visible=this.visible;a._visible=this._visible;a._layer=this._layer;a._sourceLayer=this._sourceLayer;a._aggregationSourceLayer=this._aggregationSourceLayer;a._aggregationInfo=this._aggregationInfo;return a},draw:function(){var a=this._graphicsLayer;a&&a._draw(this,!0);return this},setGeometry:function(a){this.geometry=
a;this._geomVersion++;var b=this._graphicsLayer;b&&(b._updateExtent(this),b._draw(this,!0),a&&"polyline"===a.type&&b._updateSVGMarkers());return this},setSymbol:function(a,b){var c=this._graphicsLayer,e=this._shape;this.symbol=a;c&&(b&&e&&c._removeShape(this),c._draw(this,!0));return this},setAttributes:function(a){this.attributes=a;this._clearCache();return this},setInfoTemplate:function(a){this.infoTemplate=a;return this},getInfoTemplate:function(){return this._getEffInfoTemplate()},_getEffInfoTemplate:function(){var a=
this.getLayer();return this.infoTemplate||a&&a.infoTemplate},getTitle:function(){var a=this.getInfoTemplate(),b=a&&a.title;if(h.isFunction(b))b=b.call(a,this);else if(h.isString(b))var c=(a=this.getLayer())&&a._getDateOpts,b=m.substitute(this.attributes,b,{first:!0,dateFormat:c&&c.call(a)});return b},getContent:function(){var a=this.getInfoTemplate(),b=a&&a.content;if(h.isFunction(b))b=b.call(a,this);else if(h.isString(b))var c=(a=this.getLayer())&&a._getDateOpts,b=m.substitute(this.attributes,b,
{dateFormat:c&&c.call(a)});return b},attr:function(a,b){null==b||this._dataAttrs||(this._dataAttrs={});this._dataAttrs&&(this._dataAttrs[a]=b,this._setDataAttr(a,b));return this},show:function(){this.visible=this._visible=!0;this.attr("data-hidden");var a,b,c;if(this.getShapes().length)for(a=this.getNodes(),c=a.length,b=0;b<c;b++)l.show(a[b]);else this._graphicsLayer&&this._graphicsLayer._draw(this,!0);return this},hide:function(){this.visible=this._visible=!1;this.attr("data-hidden","");var a=this._graphicsLayer,
b,c;if(a)if("canvas-2d"===a.surfaceType)a._removeShape(this);else if(a=this.getNodes(),c=a.length)for(b=0;b<c;b++)l.hide(a[b]);return this},toJson:function(){var a={};this.geometry&&(a.geometry=this.geometry.toJson());this.attributes&&(a.attributes=h.mixin({},this.attributes));this.symbol&&(a.symbol=this.symbol.toJson());this.infoTemplate&&(a.infoTemplate=this.infoTemplate.toJson());return a},_setDataAttr:function(a,b){var c=this.getNodes(),e,f=c.length;for(e=0;e<f;e++)this._setDOMDataAttr(c[e],a,
b)},_setDOMDataAttr:function(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)},_applyDataAttrs:function(){var a=this._dataAttrs;if(a){var b=this.getNodes(),c,e=b.length;for(c=0;c<e;c++)for(var f in a)this._setDOMDataAttr(b[c],f,a[f])}},_getViewInfo:function(a){return(a=(a=a||this.getLayer())&&a.getMap())&&a._getViewInfo()},_getDataValue:function(a,b,c,e,f){var k=b.id,g=this.attributes,h=a.field,t=b.isNumeric,d=null;if(k){var n=this._computedAttributes,p=this._computedVersion,q=this._computedGeomVersion;
e=this._getViewInfo(e);var u=b.dependsOnView||b.isJSFunc,r=b.dependsOnGeometry,l=r&&!!f;n||(n=this._computedAttributes={});u&&!p&&(p=this._computedVersion={});r&&!q&&(q=this._computedGeomVersion={});var m=u&&p[k]!==e._version||r&&q[k]!==this._geomVersion,d=n[k];if(void 0===d||m||l)d=null,b.hasExpr?(d=c.createExecContext(this,e),(a=d.vars.$feature)&&f&&(a.geometry=f),d=c.executeFunction(b.compiledFunc,d)):b.isJSFunc?d=h(this,a):g&&(d=g[h],t&&this._isValidNumber(d)&&(b=a.normalizationType||"field",
c=d,d=null,f=a.normalizationTotal,a=g[a.normalizationField],"log"===b&&0!==c?d=Math.log(c)*Math.LOG10E:"percent-of-total"===b&&this._isValidNumber(f)&&0!==f?d=c/f*100:"field"===b&&this._isValidNumber(a)&&0!==a&&(d=c/a))),d=this._sanitizeValue(d,t),l||(n[k]=d,u&&(p[k]=e._version),r&&(q[k]=this._geomVersion))}else g&&(d=this._sanitizeValue(g[h],t));return d},_sanitizeValue:function(a,b){b&&!this._isValidNumber(a)&&(a=null);return a},_isValidNumber:function(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==
a&&-Infinity!==a},_clearCache:function(){this._computedAttributes=this._computedVersion=this._computedGeomVersion=null}});g.prototype.getShape=g.prototype.getDojoShape;v("extend-esri")&&(w.Graphic=g);return g});