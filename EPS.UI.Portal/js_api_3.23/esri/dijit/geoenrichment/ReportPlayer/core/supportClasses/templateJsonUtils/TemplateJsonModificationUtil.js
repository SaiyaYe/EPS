// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/TemplateJsonModificationUtil",["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/PageUnitsConverter","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridLayoutCalculator"],function(g,h,k){var d={},m={getJsonStat:function(a){var b=0,c=0,l=[];a.sectionsTables.forEach(function(a){var d=0;a.data.columns.forEach(function(b){d+=e.getFieldWidth(a,a.data.data[0],
b)});b=Math.max(b,d);var f=0;a.data.data.forEach(function(b){f+=e.getDataHeight(a,b,a.data.columns[0])});c=Math.max(c,f);l.push({totalW:d,totalH:f})});return{tableInfos:l,totalWMax:b,totalHMax:c}}},e={getFieldWidth:function(a,b,c){return k.getFieldWidth({looseResize:!0},b,c)||c.style.width},getDataHeight:function(a,b,c){return k.getDataHeight({looseResize:!0},b,c.field)},getAverageFieldWidth:function(a,b){var c=0;a.data.data.forEach(function(d){c+=e.getFieldWidth(a,d,b)});return c/a.data.data.length},
getAverageDataHeight:function(a,b){var c=0;a.data.columns.forEach(function(d){c+=e.getDataHeight(a,b,d)});return c/a.data.columns.length}};d.adjustDocumentOptions=function(a){if(a.documentOptions){var b=m.getJsonStat(a);if(b.totalWMax&&b.totalHMax&&!isNaN(b.totalWMax)&&!isNaN(b.totalHMax)){a=a.documentOptions;var c=a.top+a.bottom+b.totalHMax;a.pagesize=g.combineCustomSizeString(h.pxToIn(a.left+a.right+b.totalWMax),h.pxToIn(c));(b=g.getClosestStandrdSizes(a)[0])&&.001>b.score&&b.orientation===a.orientation&&
(a.pagesize=b.pagesize)}}};d.JsonStatCollector=m;d.DataUtil=e;return d});