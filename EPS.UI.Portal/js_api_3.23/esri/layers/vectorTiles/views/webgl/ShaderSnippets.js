// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/ShaderSnippets",["require","exports","dojox/xml/parser"],function(r,t,k){return function(){function b(d){if(d)for(var a in d)this[a]=d[a]}b.parse=function(d,a){for(var c=k.parse(d).getElementsByTagName("snippet"),p=/\$[a-zA-Z][a-zA-Z0-9]*(?:\([^\(\)]*\))?[ \t]*/,b=/[\$\s]+/g,m=/\(([^\(\)]*)\)/,e=0;e<c.length;e++){for(var q=c[e].getAttribute("name"),f=c[e].textContent;;){var l=f.match(p);if(null==l)break;var g=l[0].replace(b,""),n=g.match(m),h=void 0;n&&
(h=n[1].split(",").map(function(a){return a.trim()}));g=g.replace(m,"");h=a._instantiate(g,h);f=f.replace(l[0],h)}a[q]=f}};b.prototype._instantiate=function(d,a){var c=this[d];for(a||(a=[]);;){var b=c.match(/\$(\d+)/);if(null==b)break;var k=parseInt(b[1],10),c=c.replace(b[0],a[k])}return c};return b}()});