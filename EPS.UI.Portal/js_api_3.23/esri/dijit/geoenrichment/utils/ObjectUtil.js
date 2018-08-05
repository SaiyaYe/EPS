// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ObjectUtil",["dojo/number"],function(f){var k={populateObject:function(a,b,e){function c(a,b){function d(d){var h=a[d],f=b[d],g=h&&"object"===typeof h;void 0!==h&&(void 0===f?b[d]=h:f&&"object"===typeof f&&g?c(h,f):e&&(g?(f=b[d]={},c(h,f)):b[d]=a[d]))}if(a&&b&&!(Array.isArray(a)&&!Array.isArray(b)||Array.isArray(b)&&!Array.isArray(a)))if(Array.isArray(a))a.forEach(function(a,b){d(b)});else for(var f in a)d(f)}c(b,a);return a},traverseObject:function(a,b){for(var e in a){var c=
a[e];b(c);c&&"object"===typeof c&&k.traverseObject(c,b)}},copyOwnJsonProperties:function(a,b,e){b=b||{};for(var c in a){var d=a[c];a.hasOwnProperty(c)&&"function"!=typeof d&&(d&&"object"==typeof d&&e&&(d=e(c,d)),void 0!==d&&(b[c]=d))}return b},roundNumber:function(a,b){return"number"!==typeof a?a:parseFloat(a.toFixed(void 0!==b?b:0))},formatNumber:function(a,b){b="number"===typeof b?{places:b}:b||{};var e=b.places,c={};0<=e?c.places=e:e=-1;c=f.format(a,c);if(b.noSeparator){var d=f.format(9999,{places:0}).replace(/9/g,
""),g;if(d)for(;0<=(g=c.indexOf(d));)c=c.substr(0,g)+c.substr(g+1)}if(b.preserveTrailingZeroes||0>=e||!c)return c;for(d=c.length;0<e&&"0"==c.charAt(d-1);)d--,--e||d--;return c.substr(0,d)},parseNumber:function(a,b,e){if(""===a)return"undefined"!==typeof e?e:NaN;if(null==a||"string"!==typeof a&&isNaN(a))return NaN;a=String(a);if(!a.trim())return void 0!==e?e:NaN;e=f.parse(a);isNaN(e)&&a.trim().length&&(e=Number(a));return isNaN(e)||void 0===b||0>b?e:f.round(e,b)}};return k});