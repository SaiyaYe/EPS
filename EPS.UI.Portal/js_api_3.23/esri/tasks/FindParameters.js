// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/tasks/FindParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel ../layerUtils".split(" "),function(a,h,e,f,k,l,m){a=a(null,{declaredClass:"esri.tasks.FindParameters",searchText:null,contains:!0,searchFields:null,outSpatialReference:null,layerIds:null,returnGeometry:!1,layerDefinitions:null,dynamicLayerInfos:null,toJson:function(){var b={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,
geometryPrecision:this.geometryPrecision},c=this.layerIds,a=this.searchFields,d=this.outSpatialReference;c&&(b.layers=c.join(","));a&&(b.searchFields=a.join(","));d&&(b.sr=d.wkid||f.toJson(d.toJson()));b.layerDefs=m._serializeLayerDefinitions(this.layerDefinitions,!0);if(this.dynamicLayerInfos&&0<this.dynamicLayerInfos.length){var g=[];e.forEach(this.dynamicLayerInfos,function(a){if(!a.subLayerIds){var b=a.id;if(this.layerIds&&-1!==e.indexOf(this.layerIds,b)){var c={id:b};c.source=a.source&&a.source.toJson();
var d;this.layerDefinitions&&this.layerDefinitions[b]&&(d=this.layerDefinitions[b]);d&&(c.definitionExpression=d);g.push(c)}}},this);c=f.toJson(g);"[]"===c&&(c="[{}]");b.dynamicLayers=c}return b}});k("extend-esri")&&h.setObject("tasks.FindParameters",a,l);return a});