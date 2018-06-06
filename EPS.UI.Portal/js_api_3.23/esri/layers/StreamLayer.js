// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/StreamTrackManager":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../graphic ../geometry/Polyline ./TrackManager".split(" "),function(g,y,d,v,q,z,B,C){g=g([C],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(d){this.inherited(arguments)},initialize:function(d){this.inherited(arguments)},addFeatures:function(h,r){function m(k,f){var d,p,a,b;l[k]||(l[k]=[]);d=l[k];0<n&&(f.length>n&&f.splice(0,f.length-n),a=
f.length+d.length,a>n&&(p=d.splice(0,a-n)));a=f.length;for(b=0;b<a;b+=1)d.push(f[b]);return{deletes:p,adds:f}}var l,f,p,n,A={},k={},w;if(r)return this.inherited(arguments),A;l=this.trackMap;f=this.layer;p=f._trackIdField;n=f.maximumTrackPoints||0;d.forEach(h,function(f){var d=f.attributes[p];f.visible&&(k[d]||(k[d]=[]),k[d].push(f))});for(w in k)k.hasOwnProperty(w)&&(f=m(w,k[w]),A[w]=f);return A},removeFeatures:function(h){var r=[],m=this.layer.objectIdField,l=this.layer._trackIdField;h&&(d.forEach(h,
function(f){var p,n,h,k;n=f.attributes[l];p=f.attributes[m];if(h=this.trackMap[n])for(f=0;f<h.length;f+=1)if(k=h[f],k.attributes[m]===p){this.trackMap[n].splice(f,1);-1===d.indexOf(n)&&r.push(n);break}},this),0<h.length&&this.refreshTracks(r))},drawTracks:function(h){function r(d){var h=f[d],k=h&&1<h.length,g,r,t;(t=m.trackLineMap[d])&&!k&&(l.remove(t),delete m.trackLineMap[d],t=null);if(!k)return!1;k=[];for(g=h.length-1;0<=g;--g)(r=h[g].geometry)&&k.push([r.x,r.y]);h={};h[n]=d;1<k.length&&(t?(d=
t.geometry,d.removePath(0),d.addPath(k),t.setGeometry(d)):(t=new z(new B({paths:[k],spatialReference:p}),null,h),l.add(t),m.trackLineMap[d]=t))}var m=this,l=this.container,f,p,n,g;if(l)if(f=this.trackMap,p=this.map.spatialReference,n=this.layer._trackIdField,h)d.forEach(h,function(d){r(d)});else for(g in f)f.hasOwnProperty(g)&&r(g)},refreshTracks:function(h){function g(d){var f,h;d=m[d]||[];f=d.length;for(h=0;h<f;h++)l._repaint(d[h],null,!0)}var m=this.trackMap,l=this.layer;l._getRenderer();var f;
this.drawTracks(h);if(h)d.forEach(h,function(d){g(d)});else for(f in m)m.hasOwnProperty(f)&&g(f)},getLatestObservations:function(){var d,g,m=this.trackMap,l=[];for(d in m)m.hasOwnProperty(d)&&(g=m[d],l.push(g[g.length-1]));return l},destroy:function(){this.inherited(arguments);this.trackLineMap=null}});v("extend-esri")&&y.setObject("layers._StreamTrackManager",g,q);return g})},"esri/layers/PurgeOptions":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","dojo/has","../kernel"],
function(g,y,d,v,q){g=g([d],{declaredClass:"esri.layers.PurgeOptions",constructor:function(d,g){this.parent=d;for(var q in g)this[q]=g[q]},_displayCountSetter:function(d){this.displayCount=d;this.parent.refresh()}});v("extend-esri")&&y.setObject("layers.PurgeOptions",g,q);return g})},"*noref":1}});
define("esri/layers/StreamLayer","dojo/_base/declare dojo/_base/connect dojo/_base/array dojo/_base/Color dojo/_base/lang dojo/Deferred dojo/has dojo/io-query dojo/on dojo/aspect ../kernel ../request ../graphic ./FeatureLayer ./StreamMode ./StreamTrackManager ../geometry/jsonUtils ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../renderers/SimpleRenderer ./PurgeOptions".split(" "),function(g,y,d,v,q,z,B,C,h,r,m,l,f,p,n,A,k,w,x,F,G,t){g=g([p],{declaredClass:"esri.layers.StreamLayer",
_preventInit:!0,constructor:function(a,b){b=b||{};b.mode&&b.mode!==p.MODE_STREAM||(this._isStream=!0,this.currentMode=this.mode=p.MODE_STREAM,this._mode=new n(this));this.purgeOptions=new t(this,b.purgeOptions||{});this.purgeInterval=b.purgeInterval||0;this._reconnectAttempts=0;this.maxReconnectAttempts=10;this.socket=this._reconnectTimeoutId=null;this._keepLatestQueried=!1;this._keepLatestUrl=null;this._relatedQueried=!1;this._joinField=this._relatedUrl=null;this._refreshing=!1;this._attemptReconnect=
q.hitch(this,this._attemptReconnect);this._purge=q.hitch(this,this._purge);this._processServiceJson=q.hitch(this,this._processServiceJson);if(q.isObject(a)&&a.layerDefinition)this._initFeatureLayer(a,b);else{var c=this;l({url:a,content:q.mixin({f:"json"}),callbackParamName:"callback"}).then(function(a){c._processServiceJson(a,b)},function(a){c._errorHandler(a)})}},_processServiceJson:function(a,b){var c=this;a.relatedFeatures&&a.relatedFeatures.featuresUrl&&a.relatedFeatures.joinField?(this._relatedUrl=
a.relatedFeatures.featuresUrl,this.objectIdField=this._joinField=a.relatedFeatures.joinField,l({url:this._relatedUrl,content:{f:"json"},callbackParamName:"callback"}).then(function(e){e=e.fields||[];var u=d.map(a.fields,function(a){return a.name.toLowerCase()});d.forEach(e,function(b){-1===d.indexOf(u,b.name.toLowerCase())&&a.fields.push(b)});b.resourceInfo=a;c._initFeatureLayer(c._url,b)},function(a){c.onError({error:a})})):(b.resourceInfo=a,this._initFeatureLayer(this._url,b))},_initLayer:function(a,
b){this.inherited(arguments);if(a){var c;if(a.layerDefinition)this.purgeOptions=new t(this,this._params.purgeOptions||{}),this.socketUrl=this._params.socketUrl||a.layerDefinition.socketUrl||void 0;else{if(this._params.socketUrl)this.socketUrl=this._params.socketUrl;else{var e=this._getWebsocketConnectionInfo(a),u=e.urls;u&&u.length?(this._socketUrls=u,this.socketUrl=u[0],this.socketDirection="broadcast"===this._params.socketDirection?"broadcast":"subscribe",this.socketUrl+="/"+this.socketDirection,
this._websocketToken=e.token,u.length>this.maxReconnectAttempts&&(this.maxReconnectAttempts=u.length)):(this.socketUrl=void 0,e="No web socket urls were retrieved from the Stream Service. Layer will not attempt to connect.","https:"===location.protocol&&(e+=" An insecure web socket connection cannot be made from a secure web page."),this.onError(Error(e)))}if(this._params.filter)try{this._filter=c=this._makeFilter(this._params.filter)}catch(D){this.onError(Error("Error trying to create filter object: "+
D+". Layer will not have filter applied")),this._filter=null}if(this._params.geometryDefinition||this._outFields||this._defnExpr){c=c||{};c.geometry=this._params.geometryDefinition;c.outFields=this._outFields;c.where=this._defnExpr;try{this._filter=c=this._makeFilter(c)}catch(D){this.onError(Error("Error trying to create filter object: "+D+". Layer will not have filter applied")),this._filter=null}}}this.maximumTrackPoints=this._params.maximumTrackPoints||0===this._params.maximumTrackPoints?this._params.maximumTrackPoints:
1;(this._params.refreshRate||0===this._params.refreshRate)&&this._mode&&this._mode._setRefreshRate&&this._mode._setRefreshRate(this._params.refreshRate);this._keepLatestUrl=a.keepLatestArchive?a.keepLatestArchive.featuresUrl:null;a.relatedFeatures&&a.relatedFeatures.featuresUrl&&a.relatedFeatures.joinField&&(this._relatedUrl=a.relatedFeatures.featuresUrl,this.objectIdField=this._joinField=a.relatedFeatures.joinField);this.objectIdField||this._makeObjectIdField();this._map&&this.socketUrl&&!this._connected&&
this.connect()}},_setMap:function(a){var b=this.inherited(arguments),c=this._getRenderer();this.timeInfo&&(this._trackIdField||c&&(c.latestObservationRenderer||c.trackRenderer))&&(this._trackManager=new A(this),this._trackManager.initialize(a));this.socketUrl&&!this._connected&&this._map&&this.connect();return b},_unsetMap:function(a,b){d.forEach(this._connects,y.disconnect);(this._connected||this._reconnecting||this.socket)&&this.disconnect();this._togglePurgeT();this.inherited(arguments);this._map=
null},_suspend:function(){this._togglePurgeT();this.inherited(arguments)},_resume:function(){this.inherited(arguments);this._togglePurgeT(!0)},clear:function(){try{this._mode&&this._mode._clearDrawBuffer&&this._mode._clearDrawBuffer(),this._mode&&this._mode._clearTimeBin&&this._mode._clearTimeBin(),this._mode&&this._mode._clearFeatureMap&&this._mode._clearFeatureMap(),this._trackManager&&this._trackManager.clearTracks()}catch(a){}this.inherited(arguments)},redraw:function(){this._mode&&this._mode._flushDrawBuffer&&
this._mode._flushDrawBuffer();this.inherited(arguments)},setDefinitionExpression:function(a){this.setFilter({where:a})},getDefinitionExpression:function(){var a;this._filter&&(a=this._filter.where);return a},destroy:function(){this.disconnect();this.inherited(arguments)},onResume:function(a){this.inherited(arguments)},setGeometryDefinition:function(a){this.setFilter({geometry:a})},getGeometryDefinition:function(){var a;this._filter&&(a=this._filter.geometry);return a},connect:function(a){var b=new z,
c={},e=this._filter,u,d,f=this.socketUrl,g;try{this._connected||this._connecting?b.reject(Error("Cannot start new connection process. Layer is connecting.")):(this._connecting=!0,this._getRelatedFeatures().then(function(){return this._getKeepLatestFeatures()}.bind(this)).then(function(){this._websocketToken&&(c.token=this._websocketToken);this._map&&this._map.spatialReference&&this.spatialReference&&this._map.spatialReference.wkid!==this.spatialReference.wkid&&(c.outSR=this._map.spatialReference.wkid);
if(e)for(d in e)null!==e[d]&&(u="geometry"===d?JSON.stringify(e[d]):e[d],c[d]=u);f+="?"+C.objectToQuery(c);g=this._createConnection(f,a);b.resolve(g)}.bind(this)).otherwise(function(a){b.reject(a)}))}catch(E){a&&(a(E,!1),b.reject(E)),this.onConnectionError({error:E})}return b.promise},disconnect:function(a){var b=this._refreshing?"Disconnecting as part of layer refresh cycle":"Connection closed from client",c=this._refreshing?!0:!1;this._reconnectTimeoutId&&clearTimeout(this._reconnectTimeoutId);
this._refreshing=this._reconnecting=this._connecting=this._connected=!1;this.socket&&this.socket.close();this.onDisconnect({willReconnect:c,message:b});a&&a(null,!0)},setFilter:function(a){var b,c;if(this._collection)return this.onError("Filter can only be set when the source of the layer is a Stream Service"),!1;try{if(void 0!==a.outFields)return c=Error("Outfields property cannot be changed after layer is created"),this.onFilterChange({filter:this.getFilter(),error:c}),!1;b=this._makeFilter(a)}catch(e){return c=
Error(e),this.onFilterChange({filter:this.getFilter(),error:c}),!1}if(this.socket)a={filter:b},this.socket.send(JSON.stringify(a));else h.once(this,"connect",function(a){this.setFilter(b)});return!0},getFilter:function(){var a=this._filter,b={},c=["geometry","outFields","where"];a&&d.forEach(c,function(c){var e=a[c];e&&("geometry"===c?e=k.fromJson(e):"outFields"===c&&(e=e.split(",")),b[c]=e)});return b},setMaximumTrackPoints:function(a){if(!a&&0!==a)return!1;this.maximumTrackPoints=a;this._mode.propertyChangeHandler(3)},
getUniqueValues:function(a){var b,c={},e=[];b=this._getField(a,!0);if(!b)return e;a=b.name;d.forEach(this.graphics||[],function(b){b=(b.attributes||{})[a];void 0===b||c[b]||(c[b]=1,e.push(b))});e.sort(function(a,b){return a<b?-1:a>b?1:0});return e},getLatestObservations:function(){var a=[];return a=this._trackManager?this._trackManager.getLatestObservations():this.graphics},setPurgeInterval:function(a){var b=this.purgeInterval;this.purgeInterval=a;this._togglePurgeT();a&&this._togglePurgeT(!0);if(b!==
a)this.onPurgeIntervalChange();return this},_togglePurgeT:function(a){if(a&&this.purgeInterval){var b=this;clearTimeout(this._purgeT);this._mode&&this._mode._flushDrawBuffer&&(this._purgeT=setTimeout(function(){b.updating||b.suspended||(b._mode._flushDrawBuffer(),b._togglePurgeT(!0))},6E4*this.purgeInterval))}else this._purgeT&&(clearTimeout(this._purgeT),this._refreshT=null)},onMessage:function(){},onConnect:function(){},onDisconnect:function(){},onFilterChange:function(){},onAttemptReconnect:function(){},
onConnectionError:function(){},onPurgeIntervalChange:function(){},_createConnection:function(a,b){var c=this,e=new WebSocket(a);e.onopen=function(){c.socket=e;c._connected=!0;c._connecting=!1;c._reconnecting=!1;c._reconnectAttempts=0;c._bind();c.onConnect();b&&b(null,!0)};e.onclose=function(a){var b,e=!0,d=c._connected,f=null;if(c._connected||c._reconnecting){if(a.code)if(b="Connection failed: ",1001===a.code)b+=a.reason||"Service is going away.",e=!1;else if(4400===a.code)b+=a.reason||"Invalid url parameters. Check filter properties.",
e=!1;else if(4404===a.code)b+="Service not found",e=!1;else if(4401===a.code||4403===a.code)b+="Not authorized",e=!1;e&&(c._reconnectAttempts+=1,c._reconnectAttempts>c.maxReconnectAttempts&&(b="Maximum reconnect attempts exceeded",e=!1,d=!0));c._connected=!1;d&&(b&&(f=Error(b)),c.onDisconnect({error:f,willReconnect:e}));e?c._attemptReconnect():c.socket=null}else c.socket||(f=Error("Could not make connection to service"),c.onConnectionError({error:f})),c.socket=null,c._connected=!1};e.onerror=function(a){console.log("Socket error")};
return e},_getKeepLatestFeatures:function(){var a=new z;this._map&&this._keepLatestUrl&&!this._keepLatestQueried&&this._mode._fetchArchive?(Date.now(),this._mode._fetchArchive(this._keepLatestUrl).then(function(){a.resolve()}.bind(this)).otherwise(function(b){a.reject(b)}).always(function(){this._keepLatestQueried=!0}.bind(this))):a.resolve();return a.promise},_getRelatedFeatures:function(){var a=new z;this._map&&this._relatedUrl&&!this._relatedQueried&&this._mode._fetchArchive?(Date.now(),this._mode._fetchArchive(this._relatedUrl).then(function(){a.resolve()}.bind(this)).otherwise(function(b){a.reject(b)}).always(function(){this._relatedQueried=
!0}.bind(this))):a.resolve();return a.promise},_purge:function(){var a,b=[],c;if(this.purgeOptions.displayCount&&this.graphics.length>this.purgeOptions.displayCount)for(a=0;a<this.graphics.length-this.purgeOptions.displayCount;a++)c=this.graphics[a],b.push(c);0<b.length&&(this._mode._removeFeatures(b),this._trackManager&&this._trackManager.removeFeatures(b))},_bind:function(){var a=this;this.socket.onmessage=function(b){a._onMessage(JSON.parse(b.data))}},_onMessage:function(a){var b=this;this.onMessage(a);
var c={create:function(a){b._create(a)},update:function(a){b._update(a)},"delete":function(a){b._delete(a)}};if(a.type)c[a.type](a.feature);else a.hasOwnProperty("filter")?b._handleFilterMessage(a):this._create(a)},_create:function(a){function b(a){if(!c._featureHasOID(a,e)){if(!a.geometry)return!1;a.attributes=a.attributes||{};a.attributes[e]=c._nextId++}a=a.declaredClass?a:new f(a);c._mode.drawFeature(a)}var c=this,e=c.objectIdField;a.length?a.forEach(function(a){a&&b(a)}):a&&b(a)},_delete:function(a){var b=
this,c=a[b.objectIdField]||a.attributes[b.objectIdField],e=!1;this.graphics.forEach(function(a){a.attributes[b.objectIdField]==c&&(e=a)});e&&this.remove(e)},_update:function(a){var b=this,c=!1;this.graphics.forEach(function(e){e.attributes[b.objectIdField]==a.attributes[b.objectIdField]&&(c=e)});c&&(a.attributes&&c.setAttributes(a.attributes),a.geometry&&c.setGeometry(k.fromJson(a.geometry)))},_makeFilter:function(a){var b,c=null;a=a||{};if(void 0!==a.geometry)if(c=c||{},null===a.geometry)c.geometry=
null;else{b="string"===typeof a.geometry?k.fromJson(JSON.parse(a.geometry)):a.geometry.declaredClass?a.geometry:k.fromJson(a.geometry);if(!b||"point"===b.type)throw"Query object contains invalid geometry";"extent"!==b.type&&(b=b.getExtent());if(!b||0===b.getHeight()&&0===b.getWidth())throw"Invalid filter geometry: Extent cannot have a height and width of 0";c.spatialRel="esriSpatialRelIntersects";c.geometryType="esriGeometryEnvelope";c.geometry=b.toJson()}void 0!==a.where&&(c=c||{},c.where=a.where);
if(void 0!==a.outFields&&(c=c||{},a="string"===typeof a.outFields?"*"===a.outFields?null:a.outFields.replace(/,\s+/g,",").split(","):null===a.outFields?null:a.outFields,a=this._makeOutFields(a))){if(a.errors&&0<a.errors.length)throw"Invalid filter outFields. "+a.errors.join(",");c.outFields=a.fields?a.fields.join(","):null}return c},_makeOutFields:function(a){var b=this,c=[],e=[],f={fields:null};if(!a||0===a.length)return f;d.forEach(a,function(a){if("*"===a)return f;var d=b._getField(a,!0);d?c.push(d.name):
e.push("Field named "+a+" not found in schema.")});a=b._getOutFields();d.forEach(a,function(a){b._getField(a)&&-1===d.indexOf(c,a)&&c.push(a)});f.fields=c;f.errors=e;return f},_handleFilterMessage:function(a){a.error?(a=Error(a.error.join(",")),this.onFilterChange({filter:this.getFilter(),error:a})):(a=a.filter,a.geometry&&"string"===typeof a.geometry&&(a.geometry=JSON.parse(a.geometry)),this._filter=a,this.onFilterChange({filter:this.getFilter()}))},_getWebsocketConnectionInfo:function(a){var b=
{urls:[]},c,e=[],f=[],g,h,k;a.streamUrls&&d.forEach(a.streamUrls,function(a){"ws"===a.transport&&(c=a.urls,b.token=a.token)});if(!c)return b;d.forEach(c,function(a){0===a.lastIndexOf("wss",0)?f.push(a):e.push(a)});a="https:"===location.protocol||0===this.url.lastIndexOf("https:",0)?f:0===e.length?f:e;if(1<a.length)for(g=0;g<a.length-1;g++)h=g+Math.floor(Math.random()*(a.length-g)),k=a[h],a[h]=a[g],a[g]=k;b.urls=a;return b},_attemptReconnect:function(){var a=this,b;this._reconnectTimeoutId=null;a._connected=
!1;if(!a._socketUrls)return!1;if(!a._collection&&!a._reconnecting&&a.socket&&a.credential)return a._reconnecting=!0,a._getServiceConnectionMetadata(a._attemptReconnect),!1;a._reconnecting=!0;a.socket=null;if(a._reconnectAttempts>a.maxReconnectAttempts)return a._reconnecting=!1;a.socketUrl=a._socketUrls[a._reconnectAttempts>a._socketUrls.length-1?a._reconnectAttempts%a._socketUrls.length:a._reconnectAttempts];a.socketUrl+="/"+a.socketDirection;b=a._randomIntFromInterval(0,1E3);this._reconnectTimeoutId=
setTimeout(function(){a.onAttemptReconnect({count:a._reconnectAttempts,url:a.socketUrl});a.connect()},1E3*a._reconnectAttempts+b)},_getServiceConnectionMetadata:function(a){var b=this,c=b._url.path;a="function"===typeof a?a:null;l({url:c,content:q.mixin({f:"json"},this._url.query),callbackParamName:"callback"}).then(function(c){c=b._getWebsocketConnectionInfo(c);b._websocketToken=c.token;a&&a()},function(a){b.onError(Error(a))})},_setDefaultRenderer:function(){var a=this.geometryType,b=new v([5,112,
176,.8]),c=new v([255,255,255]),c=new x(x.STYLE_SOLID,c,1),d;if("esriGeometryPoint"===a||"esriGeometryMultipoint"===a)d=new F(F.STYLE_CIRCLE,10,c,b);else if("esriGeometryPolyline"===a)d=new x(x.STYLE_SOLID,b,2);else if("esriGeometryPolygon"===a||"esriGeometryEnvelope"===a)b=new v([5,112,176,.2]),c=new v([5,112,176,.8]),c=new x(x.STYLE_SOLID,c,1),d=new w(w.STYLE_SOLID,c,b);d&&this.setRenderer(new G(d))},_makeObjectIdField:function(){var a=1,b,c,e=[];if(!this.objectIdField){b=this.fields.length;for(c=
0;c<b;c++)e.push(this.fields[c].name.toLowerCase());for(;-1!==d.indexOf(e,"objectid_"+a);)a+=1;this.objectIdField="objectid_"+a;this.fields.push({name:"objectid_"+a,type:"esriFieldTypeOID",alias:"objectid_"+a,nullable:!1})}},_featureHasOID:function(a,b){return a.attributes&&(a.attributes[b]||0===a.attributes[b])},_randomIntFromInterval:function(a,b){return Math.floor(Math.random()*(b-a+1)+a)}});B("extend-esri")&&q.setObject("layers.StreamLayer",g,m);return g});