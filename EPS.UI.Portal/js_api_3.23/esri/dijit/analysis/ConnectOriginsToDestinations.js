// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/ConnectOriginsToDestinations.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"connectODIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.connectOriginsToDestinations}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.connectOriginsToDestinations}\x3c/a\x3e\r\n                \x3c/nav\x3e                \r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n                 \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"toolHeaderLine"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_driveTimesTable"\x3e\r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_tripCalToolDescription"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"originsLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e \r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOneText" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.labelOne}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"destinationsLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1 esriLongLabel"  style\x3d"height:90%;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDestinationLayerChange" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_destPointLyrSelect"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3ctable style\x3d"width:100%" data-dojo-attach-point\x3d"_routeIdRow"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd colspan\x3d"3"\x3e\r\n                    \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.pairPoints}\x3c/label\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                    \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.originTripId}\x3c/label\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                    \x3cselect class\x3d"esriLeadingMargin2 mediumInput esriMediumLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_originRouteIdSelect" data-dojo-attach-event\x3d"onChange:_handleOriginRouteIdChange"\x3e\r\n                      \x3c!--\x3coption value\x3d"-1" selected\x3d"selected"\x3eSelect OrigId\x3c/option\x3e--\x3e\r\n                    \x3c/select\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                    \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.destnTripId}\x3c/label\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                    \x3cselect class\x3d"esriLeadingMargin2 mediumInput esriMediumLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_destnRouteIdSelect" data-dojo-attach-event\x3d"onChange:_handleDestnRouteIdChange"\x3e\r\n                      \x3c!--\x3coption value\x3d"-1" selected\x3d"selected"\x3eSelect DestID\x3c/option\x3e--\x3e\r\n                    \x3c/select\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n            \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n              \x3c!--\x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\'  data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n              \x3c/a\x3e--\x3e\r\n              \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n            \x3c/div\x3e             \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.measureLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"measurementType"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"padding:0.25em;" colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_measureMethodSelect" class\x3d"esriLeadingMargin1 longInput esriLongLabel esriAnalysisDriveMode"\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_useTrafficLabelRow"\x3e\r\n          \x3ctd style\x3d"padding:0" colspan\x3d"3"\x3e\r\n            \x3cdiv style\x3d"width;100%" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelThree" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_resultlabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.resultLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"outputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"shortTextInput" colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput"  value\x3d""\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_outputTypeRow"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3c!--\x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.outputType}\x3c/label\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_outputTypeSelect" class\x3d"mediumInput esriMediumLabel"\x3e\r\n              \x3coption selected\x3d"selected" value\x3d"FeatureLayer"\x3e${i18n.featureLayer}\x3c/option\x3e\r\n              \x3coption value\x3d"RouteLayers"\x3e${i18n.routeLayers}\x3c/option\x3e\r\n            \x3c/select\x3e--\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"" class\x3d"esriLeadingMargin1 esriSelectLabel"\x3e\r\n              \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_incldRouteLayersChk" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:${includeRouteLayers}" name\x3d"includeRouteLayers"/\x3e\r\n              ${i18n.includeRouteLayers}\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e      \r\n       \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" style\x3d"margin-top:10px;" class\x3d"esriLeadingMargin2 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/ConnectOriginsToDestinations","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils ./TrafficTime dojo/i18n!../../nls/jsapi dojo/text!./templates/ConnectOriginsToDestinations.html".split(" "),
function(p,v,d,g,q,e,r,w,H,m,f,t,I,J,x,u,K,y,z,A,B,C,L,M,N,O,P,Q,R,S,T,D,k,E,F,U,h,V,n,G){p=v([y,z,A,B,C,F,E],{declaredClass:"esri.dijit.analysis.ConnectOriginsToDestinations",templateString:G,widgetsInTemplate:!0,originsLayer:null,destinationsLayer:null,measurementType:"DrivingTime",outputLayerName:null,distanceDefaultUnits:"Miles",enableTravelModes:!0,i18n:null,toolName:"ConnectOriginsToDestinations",helpFileName:"ConnectOriginsToDestinations",resultParameter:["routesLayer","unassignedOriginsLayer",
"unassignedDestinationsLayer"],constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,q.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,n.common);d.mixin(this.i18n,n.bufferTool);d.mixin(this.i18n,n.driveTimes);d.mixin(this.i18n,n.routeOriginDestinationPairsTool)},postCreate:function(){this.inherited(arguments);x.add(this._form.domNode,
"esriSimpleForm");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();a={};var b;this._form.validate()&&(a.originsLayer=e.toJson(this.constructAnalysisInputLyrObj(this.originsLayer)),a.destinationsLayer=e.toJson(this.constructAnalysisInputLyrObj(this.get("destinationsLayer"))),b=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value")),
a.measurementType=b.travelMode?e.toJson(b.travelMode):this._measureMethodSelect.get("value"),"none"!==f.get(this._routeIdRow,"display")&&(a.originsLayerRouteIDField=this.get("originsLayerRouteIDField"),a.destinationsLayerRouteIDField=this.get("destinationsLayerRouteIDField")),this._trafficTimeWidget.get("checked")&&(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay"))),
this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleSaveBtnClick:function(a){a={};var b={},c;this._form.validate()&&(this._saveBtn.set("disabled",!0),a.originsLayer=e.toJson(this.constructAnalysisInputLyrObj(this.originsLayer)),
a.destinationsLayer=e.toJson(this.constructAnalysisInputLyrObj(this.get("destinationsLayer"))),c=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value")),a.measurementType=c.travelMode?e.toJson(c.travelMode):this._measureMethodSelect.get("value"),"none"!==f.get(this._routeIdRow,"display")&&(a.originsLayerRouteIDField=this.get("originsLayerRouteIDField"),a.destinationsLayerRouteIDField=this.get("destinationsLayerRouteIDField")),this._trafficTimeWidget.get("checked")&&(a.timeOfDay=
this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay"),a.liveOffset=this._trafficTimeWidget.get("liveOffset"))),this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&
(c={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(c.extent=this.map.extent._normalize(!0)),a.context=e.toJson(c)),c={description:m.substitute(this.i18n.itemDescription,{layername:this.originsLayer.name,distance_field:a.Distances||a.Field,units:a.Units}),tags:m.substitute(this.i18n.itemTags,{layername:this.originsLayer.name,destnlayername:this.destinationsLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(c.folder=this.get("folderId")),
"StraightLine"!==a.measurementType&&this.showOutputType&&(a.includeRouteLayers=this._incldRouteLayersChk.get("checked")),b.itemParams=c,b.jobParams=a,this.execute(b))},_save:function(){},_buildUI:function(){var a=!0;f.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");h.initHelpLinks(this.domNode,this.showHelp);f.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=
a;h.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));f.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");var b=this.on("travelmodes-added",d.hitch(this,function(){this._handleMeasurementTypeChange(this._measureMethodSelect.get("value"));b.remove();b=null}));h.populateTravelModes({selectWidget:this._measureMethodSelect,addStraightLine:!0,
widget:this,enableTravelModes:this.get("enableTravelModes"),selectDefaultMode:!0,value:this.measurementType});this.timeOfDay&&(this._trafficTimeWidget.set("checked",!0),this._trafficTimeWidget.set("timeZoneForTimeOfDay",this.timeZoneForTimeOfDay),this._trafficTimeWidget.set("timeOfDay",this.timeOfDay),this.liveOffset&&this._trafficTimeWidget.set("liveOffset",this.liveOffset));this.destinationsLayer&&this.featureLayers&&!h.isLayerInLayers(this.destinationsLayer,this.featureLayers)&&this.featureLayers.push(this.destinationsLayer);
this.get("showSelectAnalysisLayer")&&(this.originsLayers&&this.originsLayer&&!h.isLayerInLayers(this.originsLayer,this.originsLayers)&&this.originsLayers.push(this.originsLayer),this.get("originsLayer")||!this.get("originsLayers")||this.rerun||this.set("originsLayer",this.originsLayers[0]),h.populateAnalysisLayers(this,"originsLayer","originsLayers"));this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.destinationsLayer&&(a=!1);this.originsLayer&&this._updateAnalysisLayerUI(a);
h.addReadyToUseLayerOption(this,[this._analysisSelect,this._destPointLyrSelect]);h.updateDisplay([this._outputTypeRow],this.get("showOutputType"),"table-row");this._loadConnections()},_updateAnalysisLayerUI:function(a){var b,c,d;this.originsLayer&&t.set(this._tripCalToolDescription,"innerHTML",m.substitute(this.i18n.toolDefine,{layername:this.originsLayer.name}));if(this.featureLayers){this.set("featureLayers",this.featureLayers);b=g.some(this._destPointLyrSelect.getOptions(),function(a){return"browse"===
a.value},this);c=g.some(this._destPointLyrSelect.getOptions(),function(a){return"browselayers"===a.value},this);this._destPointLyrSelect.removeOption(this._destPointLyrSelect.getOptions());var l=[],e=0;this.rerun&&!this.destinationsLayer&&h.addBlankOption(this._destPointLyrSelect,l);g.forEach(this.featureLayers,function(a,b){var c=this.destinationsLayer&&(this.destinationsLayer.name===a.name||this.destinationsLayer.url&&a.url&&this.destinationsLayer.url===a.url);l.push({value:b+1,label:a.name,selected:c});
c&&(e=b)},this);(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||b||c)&&l.push({type:"separator",value:""});this.get("showReadyToUseLayers")&&b&&l.push({value:"browse",label:this.i18n.browseAnalysisTitle});this.get("showBrowseLayers")&&c&&l.push({value:"browselayers",label:this.i18n.browseLayers});this._destPointLyrSelect.addOption(l);this.destinationsLayer||(this._destPointLyrSelect.set("value",1),this.set("destinationsLayer",this.featureLayers[0]))}a||!this.originsLayerRouteIDField&&
!this.destinationsLayerRouteIDField?this.originsLayer&&this.originsLayer.graphics&&1>=this.originsLayer.graphics.length||this.destinationsLayer&&this.destinationsLayer.graphics&&1>=this.destinationsLayer.graphics.length?f.set(this._routeIdRow,"display","none"):f.set(this._routeIdRow,"display","table"):f.set(this._routeIdRow,"display","table");if(!a&&(this.originsLayerRouteIDField||this.destinationsLayerRouteIDField)||this.originsLayer&&this.originsLayer.graphics&&1<this.originsLayer.graphics.length||
this.originsLayer.analysisReady)b=this.originsLayer.fields,d=[],this._originRouteIdSelect.removeOption(this._originRouteIdSelect.getOptions()),g.forEach(b,function(b,c){-1!==g.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeString","esriFieldTypeDate"],b.type)&&d.push({value:b.name,label:k.isDefined(b.alias)&&""!==b.alias?b.alias:b.name,selected:!a&&this.originsLayerRouteIDField===b.name})},this),this._originRouteIdSelect.addOption(d);a&&this._destPointLyrSelect.get("value")&&
"browse"!==this._destPointLyrSelect.get("value")&&this.set("outputLayerName",m.substitute(this.i18n.outputLayerName,{layername:this.originsLayer.name,destnlayername:this.featureLayers[this._destPointLyrSelect.get("value")-1].name}));!a&&this.destinationsLayerRouteIDField&&this.destinationsLayer&&this._handleDestinationLayerChange(e,!a)},_handleAnalysisLayerChange:function(a){var b,c;"browse"===a?(a=this._browsedlg.browseItems.get("query"),a.custom=['tags:"point"'],this._browsedlg.browseItems.set("query",
a),this._isAnalysisSelect=!0,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPoint"],this._isAnalysisSelect=!0,this._browseLyrsdlg.show()):(a=this.originsLayers[a],b=this.featureLayers.slice(),(c=g.some(b,function(a){return a===this.originsLayer},this))||b.push(this.originsLayer),
this.originsLayer=a,this.set("featureLayers",b),this.outputLayerName=this.originsLayerRouteIDField=this.destinationsLayer=null,this._updateAnalysisLayerUI(!0))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setOriginsLayerAttr:function(a){k.isDefined(a)&&"esriGeometryPoint"===a.geometryType&&(this.originsLayer=a)},_getOriginsLayerAttr:function(){return this.originsLayer},_setOriginsLayersAttr:function(a){this.originsLayers=
a||[]},_setFeatureLayersAttr:function(a){this.featureLayers=g.filter(a,function(a){if((!k.isDefined(this.originsLayer)||a!==this.originsLayer)&&a&&a.geometryType&&"esriGeometryPoint"===a.geometryType)return!0},this)},_getFeatureLayersAttr:function(a){return this.featureLayers},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return h.validateServiceName(a,{textInput:this._outputLayerInput})},_setMeasurementTypeAttr:function(a){this.measurementType=
a},_getMeasurementTypeAttr:function(){return this.measurementType},_setDistanceDefaultUnitsAttr:function(a){this.distanceDefaultUnits=a},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_setDestinationsLayerAttr:function(a){this.destinationsLayer=a},_getDestinationsLayerAttr:function(){this._destPointLyrSelect&&(this.destinationsLayer=this.featureLayers[this._destPointLyrSelect.get("value")-1]);return this.destinationsLayer},_setOriginsLayerRouteIDFieldAttr:function(a){this.originsLayerRouteIDField=
a},_getOriginsLayerRouteIDFieldAttr:function(){this._originRouteIdSelect&&this._isRouteIdAvailable()&&(this.originsLayerRouteIDField=this._originRouteIdSelect.get("value"));return this.originsLayerRouteIDField},_setDestinationsLayerRouteIDFieldAttr:function(a){this.destinationsLayerRouteIDField=a},_getDestinationsLayerRouteIDFieldAttr:function(){this._destnRouteIdSelect&&this._isRouteIdAvailable&&(this.destinationsLayerRouteIDField=this._destnRouteIdSelect.get("value"));return this.destinationsLayerRouteIDField},
_setOutputLayerNameAttr:function(a){this.outputLayerName=a;this._outputLayerInput&&this._outputLayerInput.set("value",this.outputLayerName)},_setEnableTravelModesAttr:function(a){this._set("enableTravelModes",a)},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));q.connect(this._measureMethodSelect,"onChange",d.hitch(this,this._handleMeasurementTypeChange));this.watch("enableTravelModes",d.hitch(this,function(a,
b,c){this._updateTravelModes(c)}))},_connect:function(a,b,c){this._pbConnects.push(q.connect(a,b,c))},_handleBrowseItemsSelect:function(a){a&&a.selection&&h.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.originsLayers:this.featureLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._destPointLyrSelect,posIncrement:this._isAnalysisSelect?0:1,browseDialog:a.dialog||this._browsedlg,widget:this}).always(d.hitch(this,function(a){this._isAnalysisSelect&&this._handleAnalysisLayerChange(this._analysisSelect.get("value"))}))},
_handleDestnRouteIdChange:function(a){!this._autoSelRtId&&k.isDefined(this._originRouteIdSelect.getOptions(a))&&(this._autoSelRtId=!0,this._originRouteIdSelect.set("value",a))},_handleOriginRouteIdChange:function(a){!this._autoSelRtId&&k.isDefined(this._destnRouteIdSelect.getOptions(a))&&(this._autoSelRtId=!0,this._destnRouteIdSelect.set("value",a))},_handleMeasurementTypeChange:function(a){var b;b=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value"));b=k.isDefined(b)?"Time"===
b.units&&("driving"===b.modei18nKey||"trucking"===b.modei18nKey):"DrivingTime"===a;this.set("measurementType",a);f.set(this._useTrafficLabelRow,"display",b?"":"none");this._trafficTimeWidget.set("disabled",!b);this._trafficTimeWidget.set("reset",!b);this.showOutputType&&("StraightLine"===a&&this._incldRouteLayersChk.set("checked",!1),this._incldRouteLayersChk.set("disabled","StraightLine"===a))},_handleDestinationLayerChange:function(a,b){var c,d=[];"browse"===a?(c=this._browsedlg.browseItems.get("query"),
c.custom=['tags:"point"'],this._browsedlg.browseItems.set("query",c),this._isAnalysisSelect=!1,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(c=this._browseLyrsdlg.browseItems.get("query"),c.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",c)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPoint"],this._isAnalysisSelect=!1,this._browseLyrsdlg.show()):(this._autoSelRtId&&(this._autoSelRtId=!1),this._destnRouteIdSelect.removeOption(this._destnRouteIdSelect.getOptions()),
b&&(this.originsLayerRouteIDField||this.destinationsLayerRouteIDField)||this.originsLayer&&(this.originsLayer.graphics&&1<this.originsLayer.graphics.length&&1<this.featureLayers[a-1].graphics.length||this.originsLayer.analysisReady)?!b&&this.featureLayers[a-1].graphics&&this.originsLayer.graphics&&this.featureLayers[a-1].graphics.length!==this.originsLayer.graphics.length?(this._showMessages(this.i18n.inValidNumberRecordsMsg),this.set("disableRunAnalysis",!0),f.set(this._routeIdRow,"display","none")):
(this._handleCloseMsg(),f.set(this._routeIdRow,"display","table"),this.set("disableRunAnalysis",!1),this.featureLayers[a-1]&&(c=this.featureLayers[a-1].fields),g.forEach(c,function(a,c){-1!==g.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeString","esriFieldTypeDate"],a.type)&&d.push({value:a.name,label:k.isDefined(a.alias)&&""!==a.alias?a.alias:a.name,selected:b&&this.destinationsLayerRouteIDField===a.name})},this),this._destnRouteIdSelect.addOption(d)):
(f.set(this._routeIdRow,"display","none"),this.set("disableRunAnalysis",!1),this._handleCloseMsg()),this.originsLayer&&this.featureLayers[a-1]&&this._outputLayerInput.set("value",m.substitute(this.i18n.outputLayerName,{layername:this.originsLayer.name,destnlayername:this.featureLayers[a-1].name})))},_isRouteIdAvailable:function(){var a=!1;if(this.originsLayer.graphics&&1<this.originsLayer.graphics.length&&1<this.featureLayers[this._destPointLyrSelect.get("value")-1].graphics.length)this.originsLayer.graphics&&
this.originsLayer.graphics.length===this.featureLayers[this._destPointLyrSelect.get("value")-1].graphics.length&&(a=!0);else if(this.originsLayer.analysisReady||this.featureLayers[this._destPointLyrSelect.get("value")-1])a=!0;return a},_showMessages:function(a){t.set(this._bodyNode,"innerHTML",a);r.fadeIn({node:this._errorMessagePane,easing:u.quadIn,onEnd:d.hitch(this,function(){f.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();r.fadeOut({node:this._errorMessagePane,
easing:u.quadOut,onEnd:d.hitch(this,function(){f.set(this._errorMessagePane,{display:"none"})})}).play()},_updateTravelModes:function(a){var b=this._measureMethodSelect.getOptions();g.forEach(b,function(b){"StraightLine"!==b.value&&(b.disabled=!a)});this._measureMethodSelect.updateOption(b)}});w("extend-esri")&&d.setObject("dijit.analysis.ConnectOriginsToDestinations",p,D);return p});