// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/GridCellNodePlacer",["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],function(n,p){return{positionCells:function(a){var k={},l={},e={},f={};if(a.store.data.length){a.store.data.forEach(function(m,b){a.columns.forEach(function(d,c){var g=e[c]||0,h=f[b]||0,q=n.getDataHeight(a,m,d.field),r=p.getFieldWidth(a,m,d.field),g=g+q,h=h+r;l[c+"_"+b]=g;k[c+"_"+b]=h;e[c]=g;f[b]=h})});a.getFieldCells().forEach(function(a){a.domNode.style.left=
(k[a.column.index-1+"_"+a.gridData.index]||0)+"px";a.domNode.style.top=(l[a.column.index+"_"+(a.gridData.index-1)]||0)+"px"});var b=0,d;for(d in e)b=Math.max(b,e[d]);var c=0;for(d in f)c=Math.max(c,f[d]);a.mainNode.style.width=c+"px";a.mainNode.style.height=b+"px";a._width=c;a._height=b}}}});