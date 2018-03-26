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
define("esri/tasks/RouteTask","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has esri/kernel esri/graphic esri/request esri/geometry/normalizeUtils esri/tasks/Task esri/tasks/RouteResult esri/tasks/NAMessage".split(" "),function(g,l,m,n,r,y,z,A,B,C,D){g=g(B,{declaredClass:"esri.tasks.RouteTask",_eventMap:{"solve-complete":["result"]},constructor:function(a){this._url.path+="/solve";this._handler=l.hitch(this,this._handler);this.registerConnectEvents()},__msigns:[{n:"solve",c:3,a:[{i:0,
p:["stops.features","barriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(a,g,h,p,e){try{var c=[],b=[],f=a.routes?a.routes.features:[],q=a.stops?a.stops.features:[],l=a.barriers?a.barriers.features:[],E=a.polygonBarriers?a.polygonBarriers.features:[],F=a.polylineBarriers?a.polylineBarriers.features:[],s=a.messages,k=m.forEach,t=m.indexOf,u=!0,d,v,w=a.routes&&a.routes.spatialReference||a.stops&&a.stops.spatialReference||a.barriers&&a.barriers.spatialReference||
a.polygonBarriers&&a.polygonBarriers.spatialReference||a.polylineBarriers&&a.polylineBarriers.spatialReference;k(a.directions||[],function(a){c.push(d=a.routeName);b[d]={directions:a}});k(f,function(a){if(-1===t(c,d=a.attributes.Name))c.push(d),b[d]={};b[d].route=a});k(q,function(a){v=a.attributes;if(-1===t(c,d=v.RouteName||"esri.tasks.RouteTask.NULL_ROUTE_NAME"))c.push(d),b[d]={};"esri.tasks.RouteTask.NULL_ROUTE_NAME"!==d&&(u=!1);void 0===b[d].stops&&(b[d].stops=[]);b[d].stops.push(a)});0<q.length&&
!0===u&&(b[c[0]].stops=b["esri.tasks.RouteTask.NULL_ROUTE_NAME"].stops,delete b["esri.tasks.RouteTask.NULL_ROUTE_NAME"],c.splice(m.indexOf(c,"esri.tasks.RouteTask.NULL_ROUTE_NAME"),1));var x=[];k(c,function(a,c){b[a].routeName="esri.tasks.RouteTask.NULL_ROUTE_NAME"===a?null:a;b[a].spatialReference=w;x.push(new C(b[a]))});a=function(a){k(a,function(b,c){b.geometry&&(b.geometry.spatialReference=w);a[c]=new y(b)});return a};k(s,function(a,b){s[b]=new D(a)});var n={routeResults:x,barriers:a(l),polygonBarriers:a(E),
polylineBarriers:a(F),messages:s};this._successHandler([n],"onSolveComplete",h,e)}catch(r){this._errorHandler(r,p,e)}},solve:function(a,g,h,p){var e=a.stops;if(e&&"esri.tasks.FeatureSet"===e.declaredClass){var c=[],b=!1,f;m.forEach(e.features,function(a){f=a.attributes;if((!f||!f.RouteName)&&!b)b=!0;else if(-1===m.indexOf(c,f?f.RouteName:""))c.push(f?f.RouteName:"")});if(1<c.length&&b)throw b=Error("'RouteName' not specified for atleast 1 stop in stops FeatureSet."),this.onError(b),h&&h(b),b;}e=p.assembly;
a=this._encode(l.mixin({},this._url.query,{f:"json"},a.toJson(e&&e[0])));var q=this._handler,n=this._errorHandler;return z({url:this._url.path,content:a,callbackParamName:"callback",load:function(a,b){q(a,b,g,h,p.dfd)},error:function(a){n(a,h,p.dfd)}})},onSolveComplete:function(){}});A._createWrappers(g);n("extend-esri")&&l.setObject("tasks.RouteTask",g,r);return g});