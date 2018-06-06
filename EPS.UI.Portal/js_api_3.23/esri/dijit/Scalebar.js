// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/Scalebar","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/query ../kernel ../lang ../domUtils ../units ../SpatialReference ../WKIDUnitConversion ../geometry/Point ../geometry/ScreenPoint ../geometry/Polyline ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/screenUtils ../geometry/normalizeUtils dojo/i18n!../nls/jsapi".split(" "),function(n,l,m,e,p,q,F,v,G,h,
H,w,x,y,z,r,A,B,C,u,t,D,E,I){n=n(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:I.widgets.scalebar,constructor:function(a,c){this.metricScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLine esriScalebarMetricLine'\x3e\x3c/div\x3e"});
this.englishScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScalebarLine esriScalebarEnglishLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e"});this.domNode=q.create("div");a=a||{};if(a.map){if(a.scalebarUnit){if("english"!==a.scalebarUnit&&"metric"!==a.scalebarUnit&&"dual"!==a.scalebarUnit){console.error("scalebar unit only accepts english or metric or dual");return}this.scalebarUnit=
a.scalebarUnit}else this.scalebarUnit="english";if(a.scalebarStyle){if("ruler"!==a.scalebarStyle&&"line"!==a.scalebarStyle){console.error("scalebar style must be ruler or line");return}this.scalebarStyle=a.scalebarStyle}else this.scalebarStyle="ruler";this.background=a.background;switch(this.scalebarUnit){case "english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.englishScalebar);break;case "metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}this.map=a.map;c?c.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),a.attachTo?p.add(this.domNode,"scalebar_"+a.attachTo):p.add(this.domNode,"scalebar_bottom-left"));p.add(this.domNode,"esriScalebar");if(this.map.loaded)this._getDistance(this.map.extent),this._checkBingMaps();else var b=e.connect(this.map,"onLoad",this,
function(){e.disconnect(b);b=null;this._getDistance(this.map.extent);this._checkBingMaps()});this._mapOnPan=e.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=e.connect(this.map,"onExtentChange",this,this._getDistance);m.forEach(this.map.layerIds,function(a,b){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&e.connect(this.map.getLayer(a),"onVisibilityChange",l.hitch(this,function(a){this._checkBingMaps()}))},this);this._mapOnLayerAdd=e.connect(this.map,
"onLayerAdd",l.hitch(this,function(a){"esri.virtualearth.VETiledLayer"===a.declaredClass&&e.connect(a,"onVisibilityChange",l.hitch(this,function(a){this._checkBingMaps()}));this._checkBingMaps()}));this._mapOnLayerRemove=e.connect(this.map,"onLayerRemove",l.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0;x.hide(this.domNode)},show:function(){this._hidden=!1;x.show(this.domNode)},destroy:function(){e.disconnect(this._mapOnPan);
e.disconnect(this._mapOnExtentChange);e.disconnect(this._mapOnLayerAdd);e.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;q.destroy(this.domNode)},_checkBingMaps:function(){p.contains(this.domNode,"scalebar_bottom-left")&&(v.set(this.domNode,"left","25px"),m.forEach(this.map.layerIds,function(a,c){if("esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&this.map.getLayer(a).visible){var b="95px";this.map._mapParams.nav&&(b="115px");v.set(this.domNode,"left",b)}},this))},
_getDistance:function(a){var c=F.position(this.domNode,!0).y-this.map.position.y,c=c>this.map.height?this.map.height:c,c=0>c?0:c,b=new B(0,c),c=new B(this.map.width,c),f,k;this.mapUnit="esriDecimalDegrees";var d=D.toMapPoint(a,this.map.width,this.map.height,b),g=D.toMapPoint(a,this.map.width,this.map.height,c),b=new A(a.xmin,(a.ymin+a.ymax)/2,this.map.spatialReference),c=new A(a.xmax,(a.ymin+a.ymax)/2,this.map.spatialReference);if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||
102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))d=t.webMercatorToGeographic(d,!0),g=t.webMercatorToGeographic(g,!0),b=t.webMercatorToGeographic(b,!0),c=t.webMercatorToGeographic(c,!0);else if(w.isDefined(r[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit="linearUnit";a=Math.abs(a.xmax-a.xmin);if(w.isDefined(r[this.map.spatialReference.wkid]))f=
r.values[r[this.map.spatialReference.wkid]];else{f=this.map.spatialReference.wkt;k=f.lastIndexOf(",")+1;var e=f.lastIndexOf("]]");f=parseFloat(f.substring(k,e))}a*=f;k=a/1609;f=a/1E3;a/=1E3}"esriDecimalDegrees"===this.mapUnit&&(f=u.isSupported(this.map.spatialReference)?this.map.spatialReference.wkid:4326,a=new C(new z({wkid:f})),a.addPath([d,g]),d=E._straightLineDensify(a,10),a=u.geodesicLengths([d],y.KILOMETERS)[0],d=new C(new z({wkid:f})),d.addPath([b,c]),b=E._straightLineDensify(d,10),u.geodesicLengths([b],
y.KILOMETERS),k=a/1.609,f=a);"english"===this.scalebarUnit?this._getScaleBarLength(k,"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(f,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(k,"mi"),this._getScaleBarLength(f,"km"))},_getScaleBarLength:function(a,c){var b=50*a/this.map.width,f=0,e=c;.1>b&&("mi"===c?(b*=5280,e="ft"):"km"===c&&(b*=1E3,e="m"));for(;1<=b;)b/=10,f++;var d,g;.5<b?(d=1,g=.5):.3<b?(d=.5,g=.3):.2<b?(d=.3,g=.2):.15<b?(d=.2,g=.15):.1<=b&&(d=.15,g=.1);d=d/b>=b/g?
g:d;this._drawScaleBar(d/b*50,Math.pow(10,f)*d,e)},_drawScaleBar:function(a,c,b){var f=2*Math.round(a),e,d;"mi"===b||"ft"===b?(this.englishScalebar.style.width=f+"px",a=h(".esriScalebarFirstNumber",this.englishScalebar),e=h(".esriScalebarSecondNumber",this.englishScalebar),d=h(".esriScalebarMetricLineBackground",this.englishScalebar)):(this.metricScalebar.style.width=f+"px",a=h(".esriScalebarFirstNumber",this.metricScalebar),e=h(".esriScalebarSecondNumber",this.metricScalebar),d=h(".esriScalebarMetricLineBackground",
this.metricScalebar));m.forEach(d,function(a,b){a.style.width=f-2+"px"},this);m.forEach(a,function(a,b){a.innerHTML=c},this);m.forEach(e,function(a,d){a.innerHTML="esriUnknown"!==this.mapUnit?2*c+this.localStrings[b]:2*c+"Unknown Unit"},this)}});G("extend-esri")&&l.setObject("dijit.Scalebar",n,H);return n});