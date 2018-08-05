// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/printing/PrintableContainer","dojo/_base/declare dojo/when dojo/dom-class dojo/dom-construct dojo/dom-style esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/async/AsyncQueue ./_PrintSettingsSupport".split(" "),function(n,c,p,f,r,g,e,q){return n(q,{domNode:null,_player:null,_viewModel:null,_visualState:null,_initRollBackFunc:null,_pageSettingsRollBackFunc:null,_pageSettings:null,_pageFitParams:null,_headerFooterParams:null,_allowDataDrilling:!1,
_exportAllAreas:!1,_commandId:null,constructor:function(b,a){this._player=b;this._viewModel=a;this.domNode=b.printableDiv},initialize:function(b){var a=this;this._commandId=b.commandId;return c(function(){function h(){return e.executeFunctions([function(){k=f.create("div",{innerHTML:a._player.normalViewDiv.innerHTML,"class":"esriGEAbsoluteStretched esriGEReportPlayerPrintViewCopy"},a._player.printBackgroundView)},function(){a._setPrintMode(!0);return e.executeFunctions(a.getAllReportContainers().map(function(a,
b){return function(){a.resetZoom&&a.resetZoom();l[b]=a.getCurrentPageIndex&&a.getCurrentPageIndex();a.showAllPages&&a.showAllPages();a.collapseContent&&a.collapseContent()}}),0)},function(){g.hideNodeInBackground(a.domNode,"reportPlayerBeingPrinted")}],0)}function m(){var c=e.executeFunctions([function(){f.destroy(k);g.showNodeFromBackground(a.domNode)},function(){a.getAllReportContainers().forEach(function(a,b){a.showPageAt&&a.showPageAt(l[b])})},function(){a._setPrintMode(!1);a._setAnimationSuspended(!1);
return a._player.resize()}],0);b.onShowWaiting(c);return c}var l=[],k;a._setAnimationSuspended(!0);var d;a._player.isSlidesView?(a._player.isSlidesView=!1,a._initRollBackFunc=function(){return c(m(),function(){a._player.isSlidesView=!0;return a._player.refresh({waitUntilAllContentIsReady:!1})})},d=c(a._player.refresh({waitUntilAllContentIsReady:!0}),h)):d=c(h(),function(){a._initRollBackFunc=m;return a._player.isContentLoading()});b.onShowWaiting(d);return d}(),function(){return c(a._checkPrintSettings(b),
function(b){return"cancel"===b?null:a})})},_setPrintMode:function(b){p[b?"add":"remove"](this.domNode,"esriGEReportPlayerPrintNode esriGEReportPlayer");this._player.setPrintMode(b)},_chartAnimationAllowedMemo:void 0,_setAnimationSuspended:function(b){b?(this._chartAnimationAllowedMemo=this._viewModel.chartAnimationAllowed,this._viewModel.chartAnimationAllowed=!1):this._viewModel.chartAnimationAllowed=this._chartAnimationAllowedMemo},getCurrentReportContainer:function(){return this._player.getCurrentReportContainer()},
getAllReportContainers:function(){return this._player.getAllReportContainers()},getFitParams:function(){return this._pageFitParams},getHeaderFooterParams:function(){return this._headerFooterParams},getDocumentOptions:function(){return this._pageSettings||this.getCurrentReportContainer().documentOptions},getSelectedCommandId:function(){return this._commandId},allowDataDrilling:function(){return this._allowDataDrilling},needExportAllAreas:function(){return this._exportAllAreas},getNumberOfPages:function(){return this._player.getNumberOfPages()},
stop:function(){return this._rollBackPrintSettings()},_rollBackPrintSettings:function(){var b=this;return c(this._pageSettingsRollBackFunc&&this._pageSettingsRollBackFunc(),function(){return c(b._initRollBackFunc&&b._initRollBackFunc())})}})});