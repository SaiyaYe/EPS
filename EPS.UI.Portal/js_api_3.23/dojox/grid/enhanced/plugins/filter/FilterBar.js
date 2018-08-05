//>>built
require({cache:{"url:dojox/grid/enhanced/templates/FilterBar.html":'\x3ctable class\x3d"dojoxGridFBar" border\x3d"0" cellspacing\x3d"0" role\x3d"presentation" dojoAttachEvent\x3d"onclick:_onClickFilterBar, onmouseenter:_onMouseEnter, onmouseleave:_onMouseLeave, onmousemove:_onMouseMove"\r\n\t\x3e\x3ctr\x3e\x3ctd class\x3d"dojoxGridFBarBtnTD"\r\n\t\t\x3e\x3cspan dojoType\x3d"dijit.form.Button" class\x3d"dojoxGridFBarBtn" dojoAttachPoint\x3d"defineFilterButton" label\x3d"..." iconClass\x3d"dojoxGridFBarDefFilterBtnIcon" showLabel\x3d"true" dojoAttachEvent\x3d"onClick:_showFilterDefDialog, onMouseEnter:_onEnterButton, onMouseLeave:_onLeaveButton, onMouseMove:_onMoveButton"\x3e\x3c/span\r\n\t\x3e\x3c/td\x3e\x3ctd class\x3d"dojoxGridFBarInfoTD"\r\n\t\t\x3e\x3cspan class\x3d"dojoxGridFBarInner"\r\n\t\t\t\x3e\x3cspan class\x3d"dojoxGridFBarStatus" dojoAttachPoint\x3d"statusBarNode"\x3e${_noFilterMsg}\x3c/span\r\n\t\t\t\x3e\x3cspan dojoType\x3d"dijit.form.Button" class\x3d"dojoxGridFBarClearFilterBtn" dojoAttachPoint\x3d"clearFilterButton" \r\n\t\t\t\tlabel\x3d"${_filterBarClearBtnLabel}" iconClass\x3d"dojoxGridFBarClearFilterBtnIcon" showLabel\x3d"true" \r\n\t\t\t\tdojoAttachEvent\x3d"onClick:_clearFilterDefDialog, onMouseEnter:_onEnterButton, onMouseLeave:_onLeaveButton, onMouseMove:_onMoveButton"\x3e\x3c/span\r\n\t\t\t\x3e\x3cspan dojotype\x3d"dijit.form.Button" class\x3d"dojoxGridFBarCloseBtn" dojoAttachPoint\x3d"closeFilterBarButton" \r\n\t\t\t\tlabel\x3d"${_closeFilterBarBtnLabel}" iconClass\x3d"dojoxGridFBarCloseBtnIcon" showLabel\x3d"false" \r\n\t\t\t\tdojoAttachEvent\x3d"onClick:_closeFilterBar, onMouseEnter:_onEnterButton, onMouseLeave:_onLeaveButton, onMouseMove:_onMoveButton"\x3e\x3c/span\r\n\t\t\x3e\x3c/span\r\n\t\x3e\x3c/td\x3e\x3c/tr\r\n\x3e\x3c/table\x3e\r\n'}});
define("dojox/grid/enhanced/plugins/filter/FilterBar","dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/sniff dojo/_base/event dojo/_base/html dojo/_base/window dojo/query dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/fx dojo/_base/fx dojo/string dijit/focus dojo/text!../../templates/FilterBar.html".split(" "),function(q,r,n,d,t,u,f,v,w,x,y,z,p,l,m,k,A){var g=function(a){try{a&&a.preventDefault&&u.stop(a)}catch(b){}};return q("dojox.grid.enhanced.plugins.filter.FilterBar",
[x,y,z],{templateString:A,widgetsInTemplate:!0,_timeout_statusTooltip:300,_handle_statusTooltip:null,_curColIdx:-1,plugin:null,postMixInProperties:function(){var a=this.plugin,b=a.nls;this._filterBarDefBtnLabel=b.filterBarDefButton;this._filterBarClearBtnLabel=b.filterBarClearButton;this._closeFilterBarBtnLabel=b.closeFilterBarBtn;this._noFilterMsg=m.substitute(b.filterBarMsgNoFilterTemplate,["",a.args.itemsName||b.defaultItemsName]);b=this.plugin.args.statusTipTimeout;"number"==typeof b&&(this._timeout_statusTooltip=
b);a=a.grid;a.showFilterBar=d.hitch(this,"showFilterBar");a.toggleFilterBar=d.hitch(this,"toggleFilterBar");a.isFilterBarShown=d.hitch(this,"isFilterBarShown")},postCreate:function(){this.inherited(arguments);this.plugin.args.closeFilterbarButton||f.style(this.closeFilterBarButton.domNode,"display","none");var a=this,b=this.plugin.grid,c=this.oldGetHeaderHeight=d.hitch(b,b._getHeaderHeight);this.placeAt(b.viewsHeaderNode,"after");this.connect(this.plugin.filterDefDialog,"showDialog","_onShowFilterDefDialog");
this.connect(this.plugin.filterDefDialog,"closeDialog","_onCloseFilterDefDialog");this.connect(b.layer("filter"),"onFiltered",this._onFiltered);this.defineFilterButton.domNode.title=this.plugin.nls.filterBarDefButton;f.hasClass(v.body(),"dijit_a11y")&&this.defineFilterButton.set("label",this.plugin.nls.a11yFilterBarDefButton);this.connect(this.defineFilterButton.domNode,"click",g);this.connect(this.clearFilterButton.domNode,"click",g);this.connect(this.closeFilterBarButton.domNode,"click",g);this.toggleClearFilterBtn(!0);
this._initAriaInfo();b._getHeaderHeight=function(){return c()+f.marginBox(a.domNode).h};b.focus.addArea({name:"filterbar",onFocus:d.hitch(this,this._onFocusFilterBar,!1),onBlur:d.hitch(this,this._onBlurFilterBar)});b.focus.placeArea("filterbar","after","header")},uninitialize:function(){var a=this.plugin.grid;a._getHeaderHeight=this.oldGetHeaderHeight;a.focus.removeArea("filterbar");this.plugin=null},isFilterBarShown:function(){return"none"!=f.style(this.domNode,"display")},showFilterBar:function(a,
b,c){var e=this.plugin.grid;if(b){if(!!a!=this.isFilterBarShown()){c=c||{};var h=[];h.push(p[a?"wipeIn":"wipeOut"](d.mixin({node:this.domNode,duration:500},c)));var g=e.views.views[0].domNode.offsetHeight,k={duration:500,properties:{height:{end:d.hitch(this,function(){var b=this.domNode.scrollHeight;t("ff")&&(b-=2);return a?g-b:g+b})}}};r.forEach(e.views.views,function(a){h.push(l.animateProperty(d.mixin({node:a.domNode},k,c)),l.animateProperty(d.mixin({node:a.scrollboxNode},k,c)))});h.push(l.animateProperty(d.mixin({node:e.viewsNode},
k,c)));p.combine(h).play()}}else f.style(this.domNode,"display",a?"":"none"),e.update()},toggleFilterBar:function(a,b){this.showFilterBar(!this.isFilterBarShown(),a,b)},getColumnIdx:function(a){for(var b=w("[role\x3d'columnheader']",this.plugin.grid.viewsHeaderNode),c=-1,e=b.length-1;0<=e;--e){var h=f.position(b[e]);if(a>=h.x&&a<h.x+h.w){c=e;break}}return 0<=c&&!1!==this.plugin.grid.layout.cells[c].filterable?c:-1},toggleClearFilterBtn:function(a){f.style(this.clearFilterButton.domNode,"display",
a?"none":"")},_closeFilterBar:function(a){g(a);if(this.plugin.filterDefDialog.getCriteria()){var b=n.connect(this.plugin.filterDefDialog,"clearFilter",this,function(){this.showFilterBar(!1,!0);n.disconnect(b)});this._clearFilterDefDialog(a)}else this.showFilterBar(!1,!0)},_showFilterDefDialog:function(a){g(a);this.plugin.filterDefDialog.showDialog(this._curColIdx);this.plugin.grid.focus.focusArea("filterbar")},_clearFilterDefDialog:function(a){g(a);this.plugin.filterDefDialog.onClearFilter();this.plugin.grid.focus.focusArea("filterbar")},
_onEnterButton:function(a){this._onBlurFilterBar();g(a)},_onMoveButton:function(a){this._onBlurFilterBar()},_onLeaveButton:function(a){this._leavingBtn=!0},_onShowFilterDefDialog:function(a){"number"==typeof a&&(this._curColIdx=a);this._defPaneIsShown=!0},_onCloseFilterDefDialog:function(){this._defPaneIsShown=!1;this._curColIdx=-1;k.focus(this.defineFilterButton.domNode)},_onClickFilterBar:function(a){g(a);this._clearStatusTipTimeout();this.plugin.grid.focus.focusArea("filterbar");this.plugin.filterDefDialog.showDialog(this.getColumnIdx(a.clientX))},
_onMouseEnter:function(a){this._onFocusFilterBar(!0,null);this._updateTipPosition(a);this._setStatusTipTimeout()},_onMouseMove:function(a){this._leavingBtn&&(this._onFocusFilterBar(!0,null),this._leavingBtn=!1);this._isFocused&&(this._setStatusTipTimeout(),this._highlightHeader(this.getColumnIdx(a.clientX)),this._handle_statusTooltip&&this._updateTipPosition(a))},_onMouseLeave:function(a){this._onBlurFilterBar()},_updateTipPosition:function(a){this._tippos={x:a.pageX,y:a.pageY}},_onFocusFilterBar:function(a,
b,c){if(!this.isFilterBarShown())return!1;this._isFocused=!0;f.addClass(this.domNode,"dojoxGridFBarHover");if(!a){a="none"!==f.style(this.clearFilterButton.domNode,"display");var e="none"!==f.style(this.closeFilterBarButton.domNode,"display");"undefined"==typeof this._focusPos&&(0<c?this._focusPos=0:(this._focusPos=e?1:0,a&&++this._focusPos));0===this._focusPos?k.focus(this.defineFilterButton.focusNode):1===this._focusPos&&a?k.focus(this.clearFilterButton.focusNode):k.focus(this.closeFilterBarButton.focusNode)}g(b);
return!0},_onBlurFilterBar:function(a,b){this._isFocused&&(this._isFocused=!1,f.removeClass(this.domNode,"dojoxGridFBarHover"),this._clearStatusTipTimeout(),this._clearHeaderHighlight());var c=!0;if(b){var e=3;"none"===f.style(this.closeFilterBarButton.domNode,"display")&&--e;"none"===f.style(this.clearFilterButton.domNode,"display")&&--e;if(1==e)delete this._focusPos;else{for(var h=this._focusPos,d=h+b;0>d;d+=e);d%=e;0<b&&d<h||0>b&&d>h?delete this._focusPos:(this._focusPos=d,c=!1)}}return c},_onFiltered:function(a,
b){var c=this.plugin,e=c.args.itemsName||c.nls.defaultItemsName,d="";c.grid.layer("filter").filterDef()?(d=m.substitute(c.nls.filterBarMsgHasFilterTemplate,[a,b,e]),f.addClass(this.domNode,"dojoxGridFBarFiltered")):(d=m.substitute(c.nls.filterBarMsgNoFilterTemplate,[b,e]),f.removeClass(this.domNode,"dojoxGridFBarFiltered"));this.statusBarNode.innerHTML=d;this._focusPos=0},_initAriaInfo:function(){this.defineFilterButton.domNode.setAttribute("aria-label",this.plugin.nls.waiFilterBarDefButton);this.clearFilterButton.domNode.setAttribute("aria-label",
this.plugin.nls.waiFilterBarClearButton)},_isInColumn:function(a,b,c){b=f.position(b);return a>=b.x&&a<b.x+b.w},_setStatusTipTimeout:function(){this._clearStatusTipTimeout();this._defPaneIsShown||(this._handle_statusTooltip=setTimeout(d.hitch(this,this._showStatusTooltip),this._timeout_statusTooltip))},_clearStatusTipTimeout:function(){clearTimeout(this._handle_statusTooltip);this._handle_statusTooltip=null},_showStatusTooltip:function(){this._handle_statusTooltip=null;this.plugin&&this.plugin.filterStatusTip.showDialog(this._tippos.x,
this._tippos.y,this.getColumnIdx(this._tippos.x))},_highlightHeader:function(a){if(a!=this._previousHeaderIdx){var b=this.plugin.grid,c=b.getCell(this._previousHeaderIdx);c&&f.removeClass(c.getHeaderNode(),"dojoxGridCellOver");(c=b.getCell(a))&&f.addClass(c.getHeaderNode(),"dojoxGridCellOver");this._previousHeaderIdx=a}},_clearHeaderHighlight:function(){if("undefined"!=typeof this._previousHeaderIdx){var a=this.plugin.grid,b=a.getCell(this._previousHeaderIdx);if(b)a.onHeaderCellMouseOut({cellNode:b.getHeaderNode()});
delete this._previousHeaderIdx}}})});