// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/infographicUtils/InfographicJsonConversionUtil",["dojo/_base/lang","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/TableUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../grid/coreUtils/GridStyleUtil"],function(h,f,k,l,m){return{variableTableToNormalTables:function(a){function d(a,b){return k.createSingleCellTable(h.mixin({left:a.style.left,spaceBefore:a.style.top,
width:a.style.width,height:a.style.height,cellStyle:m.filterCellStyles(a.style)},b))}var b=[],c=-1,e=-1,g=-1;a.shape?(c=d(a.shape,{fieldInfo:f.createFieldInfoFromShape(a.shape.shapeJson)}),b.push(c),c=0):a.image&&(c=d(a.image,{fieldInfo:f.createFieldInfoFromImage(a.image.imageJson)}),b.push(c),c=0);a.variable&&(e=d(a.variable,{attributes:{viewMode:l.PREVIEW_VALUES},themeStyle:{fields:{field0:a.variable.themeStyle}},fieldInfo:a.variable.fieldInfo}),b.push(e),e=b.length-1);a.description&&(a=d(a.description,
{text:a.description.text,themeStyle:{fields:{field0:a.description.themeStyle}}}),b.push(a),g=b.length-1);return{tableJsons:b,iconIndex:c,variableIndex:e,descriptionIndex:g}}}});