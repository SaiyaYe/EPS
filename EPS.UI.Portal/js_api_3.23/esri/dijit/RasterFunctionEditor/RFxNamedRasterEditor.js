// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxNamedRasterEditor","dojo/_base/declare dojo/has ../../kernel dojo/_base/lang dojo/_base/array dojo/store/Memory dojo/data/ObjectStore dojo/dom-construct dojo/dom-style dijit/form/Select dijit/form/TextBox dijit/form/CheckBox dijit/form/Button dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./utils dojo/i18n!../../nls/jsapi".split(" "),function(h,l,m,f,g,n,p,e,k,q,r,y,z,t,u,v,w,x){h=h("RFxNamedRasterEditor",[t,u,v],{templateString:"\x3cdiv class\x3d'esriRFxNamedRasterEditor'\x3e\x3ctable data-dojo-attach-point\x3d'rasterInputsTable' class\x3d'esriRFxArgsEditor__table--auto'\x3e\x3ctr\x3e\x3ctd colspan\x3d4\x3e${_i18n.rfxNamedRasterEditor.rasterVariables}\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e",
schemaArgDefinitions:{},inputArgs:{},rasterArgs:{},rasterFunctionSchema:null,rasterFunctionEnums:null,inputLayers:null,constructor:function(a){this.inherited(arguments);this._i18n=x.widgets.rasterFunctionEditor;this.namedRasterControls=[]},postCreate:function(){this.inherited(arguments);this._readValues()},_readValues:function(){var a=this.inputArgs;(a=a&&a.InputNames)&&a.value?g.forEach(a.value,f.hitch(this,this._addRow)):this._addRow(this._i18n.rfxArgsEditor.raster)},_getInputLayersStore:function(){return new p(new n({data:this.inputLayers.concat([{name:"\x3cdiv style\x3d'display: none;'\x3e\x3c/div\x3e",
id:"empty_item"}])}))},_addRow:function(a){this._layerSelectHandle&&this._layerSelectHandle.remove();var c,b,d;c=e.create("tr",null,this.rasterInputsTable);b=e.create("td",{"class":"esriRFxNamedRasterEditor__td--input"},c);e.create("td",{innerHTML:"\x3d","class":"esriRFxNamedRasterEditor__td--assignment"},c);d=e.create("td",null,c);e.create("td",{"class":"esriRFxNamedRaster__td--delete",onclick:f.hitch(this,this._cleanupVariables,c)},c);b=e.create("div",null,b,"first");d=e.create("div",null,d);a=
new r({value:a||"",onChange:f.hitch(this,this._updateNamedRasters)},b);d=new q({store:this._getInputLayersStore(),labelAttr:"name",labelType:"html",value:"empty_item",onChange:f.hitch(this,this._updateNamedRasters)},d);d.getOptions("empty_item").disabled=!0;this.namedRasterControls.push({inputNameControl:a,layerControl:d,parent:c});a.startup();d.startup();this._updateVariablesUI();this._layerSelectHandle=d.on("change",f.hitch(this,this._addRow,""));this.own(this._layerSelectHandle);this._updateNamedRasters()},
_updateVariablesUI:function(){var a=this.namedRasterControls.length-1;g.forEach(this.namedRasterControls,function(c,b){c&&c.deleteCheckbox&&c.deleteCheckbox.domNode&&(b===a?k.set(c.deleteCheckbox.domNode,"visibility","hidden"):k.set(c.deleteCheckbox.domNode,"visibility","visible"))})},_cleanupVariables:function(a){if(a){var c=this.namedRasterControls.length-1;g.some(this.namedRasterControls,function(b,d){d!==c&&b&&b.parent===a&&(b.inputNameControl.destroy(),b.layerControl.destroy(),e.destroy(a),this.namedRasterControls[d]=
null)},this);this.namedRasterControls=g.filter(this.namedRasterControls,function(a){return a});this._updateNamedRasters()}},_updateNamedRasters:function(){var a=[],c=[],b=this.inputArgs;g.forEach(this.namedRasterControls,function(d){if(d){var b=w.getRasterJsonFromLayer(d.layerControl.store.get(d.layerControl.value));b&&""!==d.inputNameControl.value&&(a.push(b),c.push(d.inputNameControl.value))}});b&&(b.Rasters&&(b.Rasters.value=a),b.InputNames&&(b.InputNames.value=c))}});l("extend-esri")&&f.setObject("dijit.RasterFunctionEditor.RFxNamedRasterEditor",
h,m);return h});