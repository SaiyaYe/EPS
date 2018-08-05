// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/Tapestry","dojo/_base/declare ./BaseWidget dojo/_base/lang dojo/_base/array dojo/on require dojo/dom-construct dojo/dom-attr dojo/dom-class dojo/query dojo/i18n!../../nls/jsapi dojox/html/entities ./dom".split(" "),function(x,y,z,A,v,C,k,D,g,E,h,B,t){function u(a){return"Tapestry_LifeMode"+a.match(/\d+/)[0]}function w(a){return"http://downloads.esri.com/esri_content_doc/dbl/us/tapestry/segment"+a+".pdf"}h=h.geoenrichment.dijit.Tapestry;return x(y,{baseClass:"Infographics_Tapestry",
_mainTable:null,_detailsTable:null,updateUIExpanded:function(){this.inherited(arguments);this._updateUI()},updateUICollapsed:function(){this.inherited(arguments);this._updateUI()},createUIExpanded:function(a){this.inherited(arguments);this._createUI(a)},createUICollapsed:function(a){this.inherited(arguments);this._createUI(a)},_createUI:function(a){a=this._mainTable=a.addContent("table",{"class":"Tapestry_Main_Table"});v(a,".Tapestry_Main_Button:click",z.hitch(this,this._toDetailView));this.expanded?
t.createCols(a,[.25,.4,.35]):t.createCols(a,[.55,.45])},_updateUI:function(){function a(){l=p.insertCell(-1)}function e(a){var c=m._getValue(b,"CODE");g.add(a,"Tapestry_Main_Button Tapestry_Details_Image code_"+(3>c.length?"0"+c:c)+" LifeModeBorder "+u(c));a=k.create("div",null,a);k.create("span",{"class":"Tapestry_thumbnail_Code LifeModeBorder "+u(c),innerHTML:c},a)}this._toMainView();var c,b;for(b=0;3>b;b++)if(this._getValue(b,"NAME"))c=b+1;else break;var d,p,l,m=this;d=this._mainTable;var n,f;
for(b=d.rows.length;b<c;b++)p=d.insertRow(-1),g.add(p,"Tapestry_LifeMode"),this.expanded&&a(),a(),g.add(l,"Tapestry_Main_Name Tapestry_Main_Button LifeModeColor"),a(),g.add(l,"Tapestry_Main_Pct Tapestry_Main_Button LifeModeColor"),this.expanded&&(a(),g.add(l,"Tapestry_Main_Arrow Tapestry_Main_Button"),k.create("div",null,l));for(;d.rows.length>2*c;)d.deleteRow(-1);n=this.expanded?1:0;f=this.expanded?2:1;for(b=0;b<c;b++){var r=d.rows,q=r[b].cells;this.expanded&&(q[0].removeAttribute("class"),k.empty(q[0]),
e(q[0]));q[n].innerHTML=this._getValue(b,"NAME")+"\x3cbr\x3e\x3cspan class\x3d'Tapestry_Main_Value'\x3e"+this._formatValue(b,"VALUE")+" "+h.hhLabel+"\x3c/span\x3e";q[f].innerHTML=this._formatValue(b,"PRC")+"\x3cbr\x3e\x3cspan class\x3d'Tapestry_Main_PctLabel'\x3e"+h.prtHhLabel+"\x3c/span\x3e";r[b].setAttribute("data-index",b.toString())}},_getValue:function(a,e){return this.getValueByName(0,"TOP"+(a+1).toString()+e)},_formatValue:function(a,e){return this.formatByName(0,"TOP"+(a+1).toString()+e)},
_toDetailView:function(a){function e(){A.forEach(b.rows,function(a){g.remove(a,"clicked")})}var c;a=a.target;for(var b=this._mainTable;a&&a!==b;){if(c=a.getAttribute("data-index")){c=+c;break}a=a.parentNode}if(this.expanded){if(this._detailsTableRow){if(this._detailsTableRow.previousSibling===a){g.remove(a,"clicked");this._toMainView();return}this._toMainView();e()}g.add(a,"clicked");this.createDetailsTable(a);this._createDetailedViewExpanded(c)}else window.open(w(this._getValue(c,"NUM")),"_blank")},
createDetailsTable:function(a){this._detailsTableRow=k.create("tr",null,a,"after");a=k.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=k.create("table",{"class":"Tapestry_Details_Table"},a);t.createCols(this._detailsTable,[.35,.35,.3])},_createDetailedViewExpanded:function(a){function e(){l=p.insertRow(-1)}function c(a){m=l.insertCell(-1);a&&g.add(m,a)}function b(a,b,c){var d={};a&&(d["class"]=a);b&&(d.innerHTML=B.encode(b));return k.create("div",d,c||m)}function d(d,e){c("Tapestry_Details_FieldCell");
var f=b("LifeModeBorder");b("Tapestry_Details_Label",d,f);b(null,n._formatValue(a,e),f)}var p=this._detailsTable,l,m,n=this,f=n._getValue(a,"CODE");g.add(p,u(f));3>f.length&&(f="0"+f);e();d(h.hhTypeLabel,"TYPE");d(h.medianAgeLabel,"AGE");c("Tapestry_Details_Image household code_"+f);m.rowSpan=2;b();b(null,n._getValue(a,"TYPE"));e();d(h.employmentLabel,"JOB");d(h.educationLabel,"EDUCATION");e();d(h.incomeLabel,"INCOME");d(h.raceEthnicityLabel,"RACE");c("Tapestry_Details_Image housing code_"+f);m.rowSpan=
2;b();b(null,n._getValue(a,"HOUSE"));e();c();m.colSpan=2;var f=b("Wizard_Link Tapestry_Details_Name","View full segment profile"),r=w(n._getValue(a,"NUM"));v(f,"click",function(){window.open(r,"_blank")})},_toMainView:function(){this._detailsTableRow&&(k.destroy(this._detailsTableRow),this._detailsTableRow=this._detailsTable=null)}})});