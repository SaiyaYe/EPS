// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProviders/supportClasses/GEUtil","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/when dojo/promise/all dojox/uuid/generateRandomUuid esri/kernel esri/request esri/urlUtils esri/dijit/geoenrichment/utils/requests/UniversalClient ./stdGeographies/StdGeographiesModel".split(" "),function(c,k,p,l,q,r,t,h,u,m,v){function f(a,b){var g=u.urlToObject(a);if(b&&(b=k.mixin(g.query||{},b),!b.token)){var c=t.id.credentials[0];b.token=c&&c.token}return{url:g.path,
taskParams:b}}function e(a,b){d||(d=new n(a));return!b||d.initialized?d:d.initialize()}var n=c(null,{_geoenrichmentUrl:null,_geInfo:null,_capabilities:null,_supportedOperations:null,_tasksHash:{},constructor:function(a){this._geoenrichmentUrl=a},_initDfd:null,initialized:!1,initialize:function(){var a=this;if(this._initDfd)return this._initDfd.promise;this._initDfd=new p;h({url:f(this._geoenrichmentUrl).url+"/Geoenrichment",content:{f:"json"},handleAs:"json"}).then(function(b){a._geInfo=b;a._capabilities=
{};a._supportedOperations={};b.capabilities&&b.capabilities.forEach(function(b){a._capabilities[b.toLowerCase()]=!0});b.supportedOperations&&b.supportedOperations.forEach(function(b){a._supportedOperations[b.toLowerCase()]=!0});a.initialized=!0;a._initDfd.resolve()});return this._initDfd.promise},hasCapability:function(a){return this._capabilities[a.toLowerCase()]},supportsOperation:function(a){return this._supportedOperations[a.toLowerCase()]},enrich:function(a){a=f(this._geoenrichmentUrl,a);a.taskParams.AddDerivativeVariables=
"all";return h({url:a.url+"/Geoenrichment/Enrich",content:a.taskParams,handleAs:"json"}).then(function(a){return a.results[0].value.FeatureSet||[]})},_contriesCache:null,getCountryInfo:function(a){var b=this;this._contriesCache=this._contriesCache||{};if(!this._contriesCache[a]){var c=f(this._geoenrichmentUrl,{f:"json"});this._contriesCache[a]=h({url:c.url+"/Geoenrichment/Countries/"+a,content:c.taskParams,handleAs:"json"}).then(function(c){var g=c.countries[0],d={};return q(g.hierarchies.map(function(c){return l(b.getStdGeographyModel(a,
c.ID),function(a){d[c.ID]=a})})).then(function(){return{country:g,geographiesModels:d}})})}return this._contriesCache[a]},_stdModelCache:null,getStdGeographyModel:function(a,b){b=b||"census";this._stdModelCache=this._stdModelCache||{};var c=a+b;if(!this._stdModelCache[c]){var d=f(this._geoenrichmentUrl,{f:"json"});this._stdModelCache[c]=h({url:d.url+"/Geoenrichment/StandardGeographyLevels/"+a+"/"+b,content:d.taskParams,handleAs:"json"}).then(function(c){return new v(a,b,c)})}return this._stdModelCache[c]},
formatReport:function(a){a=f(this._geoenrichmentUrl,a);return(new m({allowSSL:!0})).send(a.url+"/Geoenrichment/FormatReport",{handleAs:"bin",content:a.taskParams}).then(function(a){return a&&a.data&&"text/plain"===a.data.type?null:a})},createReport:function(a){var b=f(this._geoenrichmentUrl,a),c=r();this._tasksHash[c]={taskName:"createReport",taskParams:k.clone(a)};return(new m({allowSSL:!0})).send(b.url+"/Geoenrichment/createReport",{handleAs:"text",content:b.taskParams}).then(function(a){return{taskID:c,
result:a}})},consumeCredits:function(a){if(a=this._tasksHash[a])return a=k.clone(a),delete a.taskParams.forStorage,this[a.taskName](a.taskParams)}});c={};c.GEClient=n;var d;c.getClient=function(){return d};c.initialize=function(a){return e(a,!0)};c.enrich=function(a,b){return e(a).enrich(b)};c.formatReport=function(a,b){return e(a).formatReport(b)};c.createReport=function(a,b){return e(a).createReport(b)};c.consumeCredits=function(a,b){return e(a).consumeCredits(b)};c.hasCapability=function(a,b){return l(e(a,
!0),function(){return d&&d.hasCapability(b)})};c.supportsOperation=function(a,b){return l(e(a,!0),function(){return d&&d.supportsOperation(b)})};c.getCountryInfo=function(a,b){return e(a).getCountryInfo(b)};c.getStdGeographyModel=function(a,b,c){return e(a).getStdGeographyModel(b,c)};return c});