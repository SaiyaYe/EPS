// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/virtualearth/VEGeocoder","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/has ../kernel ../urlUtils ../tasks/Task ./VEGeocodeResult ../deferredUtils ../request".split(" "),function(c,b,l,m,n,p,k,q,r,t,u){c=c(q,{declaredClass:"esri.virtualearth.VEGeocoder",constructor:function(a){try{if(a=b.mixin({bingMapsKey:null},a||{}),this.url=k.getProtocolForWebResource()+"//serverapi.arcgisonline.com/veadaptor/production/services/geocode/geocode",this._url=k.urlToObject(this.url),
this._queue=[],this.bingMapsKey=a.bingMapsKey,this.culture=a.culture||"en-US",this._errorHandler=b.hitch(this,this._errorHandler),this._addressToLocationsHandler=b.hitch(this,this._addressToLocationsHandler),!this.bingMapsKey)throw Error("BingMapsKey must be provided.");}catch(d){throw this.onError(d),d;}},addressToLocations:function(a,d,c){if(this.bingMapsKey){var g=b.mixin({},this._url.query,{query:a,token:this.bingMapsKey,culture:this.culture}),e=this._addressToLocationsHandler,h=this._errorHandler,
f=new m(t._dfdCanceller);f._pendingDfd=u({url:this._url.path,content:g,callbackParamName:"callback",load:function(a,b){e(a,b,d,c,f)},error:function(a){h(a,c,f)}});return f}console.debug("Server token not retrieved. Queing request to be executed after server token retrieved.");this._queue.push(arguments)},_addressToLocationsHandler:function(a,c,b,g,e){try{l.forEach(a,function(b,c){a[c]=new r(b)}),this._successHandler([a],"onAddressToLocationsComplete",b,e)}catch(h){this._errorHandler(h,g,e)}},onAddressToLocationsComplete:function(){},
setBingMapsKey:function(a){this.bingMapsKey=a},setCulture:function(a){this.culture=a}});n("extend-esri")&&b.setObject("virtualearth.VEGeocoder",c,p);return c});