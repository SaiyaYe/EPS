// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputContactName","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../form/InputText".split(" "),function(a,d,e,f,g,h){a=a([h],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(a){this.inherited(arguments);try{var b=this.parentXNode.target;if("rpIndName"===b||"rpPosName"===b){var c=g.findInputWidget(this.parentXNode.parentElement.gxePath+"/rpOrgName",this.parentXNode.domNode.parentNode);
c&&c.emitInteractionOccurred()}}catch(k){console.error(k)}}});e("extend-esri")&&d.setObject("dijit.metadata.types.arcgis.form.InputContactName",a,f);return a});