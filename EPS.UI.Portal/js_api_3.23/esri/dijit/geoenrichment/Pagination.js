// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/Pagination.html":'\x3cdiv class\x3d"Pagination"\x3e\r\n    \x3cdiv class\x3d"Pagination_PageAndArrows"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"backNode"\r\n             class\x3d"Pagination_Triangle Pagination_TriangleBack"\r\n             style\x3d"display: none;"\r\n             data-dojo-attach-event\x3d"ondijitclick: _backward"\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"Pagination_Items"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"itemsNode" class\x3d"PaginationItemsNode"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"forwardNode"\r\n             class\x3d"Pagination_Triangle Pagination_TriangleForward"\r\n             style\x3d"display: none;"\r\n             data-dojo-attach-event\x3d"ondijitclick: _forward"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"bulletsNode" class\x3d"Pagination_Bullets"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/Pagination","../../declare dojo/_base/lang dojo/_base/array dojox/mvc/Templated dojo/aspect dojo/dom-class dojo/dom-geometry dojo/dom-construct dojo/dom-style dojo/on dojo/sniff dijit/layout/_LayoutWidget dgrid/List ./AnimationHelper dojo/text!./templates/Pagination.html dijit/layout/ContentPane".split(" "),function(z,w,q,A,F,r,y,p,t,x,B,C,G,D,E){return z("esri.dijit.geoenrichment.Pagination",[A,C],{templateString:E,autoCenter:!1,scrollAnimation:!0,cyclicPagination:!1,
alwaysShowArrows:!1,items:null,currentPage:0,_pageCount:0,_pageSize:0,_animation:null,_itemMargins:null,clickEventType:null,constructor:function(){var a=this;this._animation=new D;this._animation.onNodePreDestroy=function(b){a.onNodePreDestroy(b)};this.clickEventType=B("touch")?"touchstart, click":"click"},createItemContainer:function(){},updateItemContainer:function(a,b){},onNodePreDestroy:function(a){},onNodePlaced:function(a,b){},onSelect:function(a){},onPageChanged:function(){},layout:function(){this._animation.finish();
var a=this.items;if(a&&a.length){var b=this.itemsNode.parentNode;if(b&&b.clientHeight){var c=this._parseAutoCenterOption(this.autoCenter);c.type&&t.set(b,"padding","0px");var f=this.itemsNode.firstChild;f||(f=p.create("div",null,this.itemsNode),r.add(f,"PaginationItemsNodeChildDiv"));"stretch"==c.type&&(this._itemMargins={},f.innerHTML="");for(var e=f.children;!(b.scrollHeight-2>b.clientHeight)&&(c.type||e.length<a.length);){var d=this.createItemContainer();x(d,this.clickEventType,w.hitch(this,this._onItemClick,
d));f.appendChild(d)}for(;b.scrollHeight-2>b.clientHeight&&1<e.length;)p.destroy(f.lastChild);var k=e.length;if(c.type){var d=f.firstChild,h=t.getComputedStyle(d),l=y.getMarginBox(d,h);if("stretch"==c.type)var m=y.getMarginExtents(d,h);var g=Math.max(1,Math.floor(f.clientHeight/l.h)),d=f.clientHeight/g,g=Math.max(Math.floor(b.clientHeight/d),g),h=k/g;c.heightLimit&&g>c.heightLimit&&(g=c.heightLimit);c.widthLimit&&h>c.widthLimit&&(h=c.widthLimit);var k=g*h,n=Math.max(b.clientWidth-h*l.w,0),u=Math.max(b.clientHeight-
g*d,0)}var v=this._pageSize=Math.min(k,a.length),k=this._pageCount=Math.ceil(this.items.length/v);c.type&&c.height&&("stretch"==c.type&&(d=Math.floor(u/g),u-=d*g,this._itemMargins.marginTop=(Math.floor(d/2)+m.t).toString()+"px",this._itemMargins.marginBottom=(Math.ceil(d/2)+m.b).toString()+"px"),t.set(b,{paddingTop:Math.floor(u/2).toString()+"px",paddingBottom:"0"}));this.currentPage=this._coerceCurrentPage(this.currentPage);g=0;for(u=v*this.currentPage;g<v&&u<a.length;){var d=e[g++],q=a[u++];this.updateItemContainer(d,
q);this.onNodePlaced(d,q)}for(;g<e.length;)p.destroy(f.lastChild);c.type&&c.width&&("stretch"==c.type?(d=Math.floor(n/h),n-=d*h,this._itemMargins.marginLeft=(Math.floor(d/2)+m.l).toString()+"px",this._itemMargins.marginRight=(Math.ceil(d/2)+m.r-1).toString()+"px"):d=0,1==k&&v<h&&!c.preventSingleRowCenter&&(n=Math.max(b.clientWidth-(l.w+d)*v,0)),n=Math.floor(n/2).toString()+"px",t.set(b,{paddingLeft:n,paddingRight:n}));for(g=this._itemMargins?0:e.length;g<e.length;)t.set(e[g++],this._itemMargins);
if(this.bulletsNode&&(p.empty(this.bulletsNode),1<k))for(a=0;a<k;a++)b=p.create("span",{"class":"Pagination_Bullet",innerHTML:"\x26nbsp;"},this.bulletsNode),x(b,this.clickEventType,w.hitch(this,function(a){this._started=!0;this.set("currentPage",a);this.emit("page-is-changed-manually")},a));this._updateNavigationControls()}}else this.set("items",[])},_parseAutoCenterOption:function(a){if(!a)return{};var b={type:"center"};"string"!=typeof a&&(a="");"$"==a.charAt(0)&&(b.preventSingleRowCenter=!0,a=
a.substr(1));switch(a){case "width":return b.width=!0,b;case "height":return b.height=!0,b;default:if(0!=a.indexOf("stretch"))return b.width=b.height=!0,b}b.type="stretch";a=a.substr(7);var c=a.indexOf(":"),f=0>c?a:a.substr(0,c);a=0>c?"":a.substr(c+1);switch(f){case "-width":b.width=!0;break;case "-height":b.height=!0;break;default:b.width=b.height=!0}if(!a)return b;a=a.split(",");c=0;q.forEach(["width","height"],function(e){if(b[e]){var d=Number(a[c++]);!isNaN(d)&&0<d&&(b[e+"Limit"]=d)}});return b},
_onItemClick:function(a){this.onSelect(a)},_coerceCurrentPage:function(a){a>=this._pageCount&&(a=this._pageCount-1);0>a&&(a=0);return a},_updateNavigationControls:function(){var a=this.currentPage,b=1>=this._pageCount,c=b&&!this.alwaysShowArrows?"none":"",f=["Pagination_TriangleDisabled","Pagination_TriangleEnabled"];if(this.backNode){var e=b||0==a&&!this.cyclicPagination?0:1;r.replace(this.backNode,f[e],f[1-e]);this.backNode.style.display=c}this.forwardNode&&(e=b||a==this._pageCount-1&&!this.cyclicPagination?
0:1,r.replace(this.forwardNode,f[e],f[1-e]),this.forwardNode.style.display=c);if(this.bulletsNode)for(b=this.bulletsNode.children,c=0;c<b.length;c++)c==a?r.add(b[c],"Pagination_BulletCurrent"):r.remove(b[c],"Pagination_BulletCurrent")},_setItemsAttr:function(a){this.items=a;p.empty(this.itemsNode);this.bulletsNode&&p.empty(this.bulletsNode);this._pageCount=this.currentPage=0;this._updateNavigationControls()},selectPageByItemIndex:function(a,b){0>a||!this.items||a>=this.items.length||1>=this._pageCount||
this.set("currentPage",Math.floor(a/this._pageSize),b)},selectItem:function(a){a=q.indexOf(this.items,a);if(-1!=a&&!(0>a||!this.items||a>=this.items.length||1>=this._pageCount)&&(a=this.itemsNode.firstChild.children[this.items.length%this._pageSize]))this.onSelect(a)},navigateToItem:function(a){a=q.indexOf(this.items,a);this.selectPageByItemIndex(a,!0)},_setCurrentPageAttr:function(a,b){this._animation.finish();var c;"next"==a?(c="forward",a=this.currentPage+1,this.cyclicPagination&&a==this._pageCount&&
(a=0)):"prev"==a?(c="backward",a=this.currentPage-1,this.cyclicPagination&&-1==a&&(a=this._pageCount-1)):c=!0===this.scrollAnimation?"fade1":this.scrollAnimation;!0===b&&(c="");a=this._coerceCurrentPage(a);if(this.currentPage!=a){var f=this.items||[],e=this.itemsNode,d=0,k=this._pageSize*a,h=this.itemsNode.firstChild,l=p.create("div");r.add(l,"PaginationItemsNodeChildDiv");for(var m=[];d++<this._pageSize&&k<f.length;){var g=this.createItemContainer();x(g,this.clickEventType,w.hitch(this,this._onItemClick,
g));this._itemMargins&&t.set(g,this._itemMargins);l.appendChild(g);var n=f[k++];this.updateItemContainer(g,n);m.push({node:g,item:n})}switch(c){case "forward":this._slideAnimation(e,h,l,!0,m);break;case "backward":this._slideAnimation(e,h,l,!1,m);break;default:if(c&&(c=c?"_"+c+"Animation":null,"function"==typeof this[c])){this[c](e,h,l,a>this.currentPage,m);break}p.empty(e);e.appendChild(l);this._notifyNodesPlaced(m)}this.currentPage=a;this._updateNavigationControls();this.onPageChanged()}},_notifyNodesPlaced:function(a){a&&
a.forEach(function(a){this.onNodePlaced(a.node,a.item)},this)},_slideAnimation:function(a,b,c,f,e){f?a.appendChild(c):a.insertBefore(c,a.firstChild);this._notifyNodesPlaced(e);this.isLeftToRight()||(f=!f);a.parentNode.style.overflow="hidden";this._animation.start([{node:a,classes:["Pagination_SlideAnim",f?"Anim_SlideLeft":"Anim_SlideRight"]}],b).then(function(){a.parentNode.style.overflow=""})},_fade1Animation:function(a,b,c,f,e){a.appendChild(c);this._notifyNodesPlaced(e);this._animation.start([{node:b,
classes:["Pagination_FadeAnim","Anim_FadeOut"]},{node:c,classes:["Pagination_FadeAnim","Anim_FadeIn"]}],b)},_fade2Animation:function(a,b,c,f,e){var d=this,k=this._animation;k.start([{node:b,classes:["Pagination_FadeAnim","Anim_FadeOut"]}],b).then(function(){a.appendChild(c);d._notifyNodesPlaced(e);k.start([{node:c,classes:["Pagination_FadeAnim","Anim_FadeIn"]}],b)})},_backward:function(){this.set("currentPage","prev")},_forward:function(){this.set("currentPage","next")}})});