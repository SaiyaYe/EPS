// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/geometry/Circle","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ./Point ./Polygon ./geodesicUtils ./webMercatorUtils ../WKIDUnitConversion ../units".split(" "),function(d,l,q,r,m,t,k,u,n,h,v){d=d(k,{declaredClass:"esri.geometry.Circle",_unitToMeters:{esriCentimeters:.01,esriDecimeters:.1,esriFeet:.3048,esriInches:.0254,esriKilometers:1E3,esriMeters:1,esriMiles:1609.344,esriMillimeters:.001,esriNauticalMiles:1852,esriYards:.9144,esriDecimalDegrees:111320},constructor:function(a,
c){var b;a.center?b=a:(b=c||{},b.center=a);this.center=l.isArray(b.center)?new t(b.center[0],b.center[1]):b.center;this.radius=b.radius||1E3;this.radiusUnit=b.radiusUnit||v.METERS;this.geodesic=!0===b.geodesic?!0:!1;this.numberOfPoints=b.numberOfPoints||60;this._init()},toJson:function(){return this.inherited(arguments)},_init:function(){this.rings=[];this._ring=0;var a=this.radius*this._unitToMeters[this.radiusUnit],c=this._srType(this.center.spatialReference);if(this.geodesic){var b;switch(c){case "webMercator":b=
n.webMercatorToGeographic(this.center);break;case "projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case "geographic":b=this.center}a=this._createGeodesicCircle(b,a,this.numberOfPoints,b.spatialReference);"webMercator"===c&&(a=n.geographicToWebMercator(a))}else{var e;"webMercator"===c||"projected"===c?e=a/this._convert2Meters(1,this.center.spatialReference):"geographic"===c&&(e=a/this._unitToMeters.esriDecimalDegrees);
a=this._createPlanarCircle(this.center,e,this.numberOfPoints)}this.spatialReference=a.spatialReference;this.addRing(a.rings[0]);this.verifySR()},_createGeodesicCircle:function(a,c,b,e){for(var f=0,p=Math.PI/180,g=[],d;f<2*Math.PI;)d=u._directGeodeticSolver(a.y*p,a.x*p,f,c,e),g.push([d.x,d.y]),f+=Math.PI/(b/2);g.push(g[0]);return new k(g)},_createPlanarCircle:function(a,c,b){for(var e=0,f=[],d,g;e<2*Math.PI;)d=a.x+Math.cos(e)*c,g=a.y+Math.sin(e)*c,f.push([d,g]),e+=Math.PI/(b/2);f.push(f[0]);a=new k(a.spatialReference);
a.addRing(f);return a},_srType:function(a){return a.isWebMercator()?"webMercator":m.isDefined(h[a.wkid])||a.wkt&&0===a.wkt.indexOf("PROJCS")?"projected":"geographic"},_convert2Meters:function(a,c){var b;if(m.isDefined(h[c.wkid]))b=h.values[h[c.wkid]];else{b=c.wkt;var e=b.lastIndexOf(",")+1,d=b.lastIndexOf("]]");b=parseFloat(b.substring(e,d))}return a*b}});q("extend-esri")&&l.setObject("geometry.Circle",d,r);return d});