// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProviders/supportClasses/ge/LocalGEInfographic",["dojo/_base/declare","./LocalGEBase","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes"],function(e,f,g){return e(f,{_type:null,_fieldNameToVariableObjectCache:null,_variableIdToVariableObjectCache:null,constructor:function(b,c){this._type=b.type;this._fieldNameToVariableObjectCache={};this._variableIdToVariableObjectCache={};b.calcData.variableObjects.forEach(function(a){this._fieldNameToVariableObjectCache[a.fieldName]=
a;this._variableIdToVariableObjectCache[a.id]=a},this);this._initGE(b.variables,c,b.calcData.calculatorName)},_propulateAttributesFromAreaData:function(b,c){for(var a in c){var d=this._fieldNameToVariableObjectCache[a];d?b[d.id]=c[a]:b[a]=c[a]}},_createField:function(b,c){var a=this.inherited(arguments),d=this._variableIdToVariableObjectCache[b];d&&(a.alias=d.alias,a.decimals=d.precision);return a}})});