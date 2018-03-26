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
define("esri/dijit/editing/tools/Reshape","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/has esri/layers/FeatureLayer esri/tasks/query esri/toolbars/draw esri/dijit/editing/tools/ToggleToolBase esri/kernel".split(" "),function(d,e,g,f,h,k,l,m,n,p){d=d([n],{declaredClass:"esri.dijit.editing.tools.Reshape",id:"btnFeatureReshape",_enabledIcon:"toolbarIcon reshapeIcon",_disabledIcon:"toolbarIcon reshapeIcon",_drawType:m.POLYLINE,_enabled:!0,_label:"NLS_reshapeLbl",activate:function(){f.disconnect(this._rConnect);
this._rConnect=f.connect(this._toolbar,"onDrawEnd",this,"_onDrawEnd");this.inherited(arguments)},deactivate:function(){this.inherited(arguments);f.disconnect(this._rConnect);delete this._rConnect},_onDrawEnd:function(c){var b=this._settings.layers,a=new l;a.geometry=c;c=this._reshapeLayers=g.filter(b,function(a){return"esriGeometryPolygon"===a.geometryType||"esriGeometryPolyline"});this._settings.editor._selectionHelper.selectFeatures(c,a,k.SELECTION_NEW,e.hitch(this,"_reshape",a))},_reshape:function(c,
b){1===b.length&&this._settings.geometryService.reshape(b[0].geometry,c.geometry,e.hitch(this,function(a){a=[b[0].setGeometry(a)];this.onApplyEdits([{layer:b[0].getLayer(),updates:a}],e.hitch(this,function(){this._settings.editor._selectionHelper.clearSelection(!1);this.onFinished()}))}))}});h("extend-esri")&&e.setObject("dijit.editing.tools.Reshape",d,p);return d});