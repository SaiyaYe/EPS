/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/symbols/SimpleFillSymbol","dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has dojox/gfx/_base esri/kernel esri/lang esri/symbols/FillSymbol esri/symbols/SimpleLineSymbol require".split(" "),function(b,d,h,k,l,f,g,m,n,p){var c={STYLE_SOLID:"solid",STYLE_NULL:"none",STYLE_HORIZONTAL:"horizontal",STYLE_VERTICAL:"vertical",STYLE_FORWARD_DIAGONAL:"forwarddiagonal",STYLE_BACKWARD_DIAGONAL:"backwarddiagonal",STYLE_CROSS:"cross",STYLE_DIAGONAL_CROSS:"diagonalcross",STYLE_FORWARDDIAGONAL:"forwarddiagonal",
STYLE_BACKWARDDIAGONAL:"backwarddiagonal",STYLE_DIAGONALCROSS:"diagonalcross"},e={style:c.STYLE_SOLID,color:[0,0,0,0.25]};b=b(m,{declaredClass:"esri.symbol.SimpleFillSymbol",type:"simplefillsymbol",patternUrlPrefix:p.toUrl("esri")+"/images/symbol/sfs/",_styles:{solid:"esriSFSSolid",none:"esriSFSNull",horizontal:"esriSFSHorizontal",vertical:"esriSFSVertical",forwarddiagonal:"esriSFSForwardDiagonal",backwarddiagonal:"esriSFSBackwardDiagonal",cross:"esriSFSCross",diagonalcross:"esriSFSDiagonalCross"},
constructor:function(a,b,c){a?d.isString(a)?(this.style=a,void 0!==b&&(this.outline=b),void 0!==c&&(this.color=c)):this.style=g.valueOf(this._styles,a.style):(d.mixin(this,e),this.outline=new n(this.outline),this.color=new h(this.color))},setStyle:function(a){this.style=a;return this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){var a=this.style;return a===c.STYLE_NULL?null:a===c.STYLE_SOLID?this.color:d.mixin({},l.defaultPattern,{src:this.patternUrlPrefix+
a+".png",width:10,height:10})},getShapeDescriptors:function(){return{defaultShape:{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 E"},fill:this.getFill(),stroke:this.getStroke()}},toJson:function(){return g.fixJson(d.mixin(this.inherited("toJson",arguments),{type:"esriSFS",style:this._styles[this.style]}))}});d.mixin(b,c);b.defaultProps=e;k("extend-esri")&&(d.setObject("symbol.SimpleFillSymbol",b,f),f.symbol.defaultSimpleFillSymbol=e);return b});