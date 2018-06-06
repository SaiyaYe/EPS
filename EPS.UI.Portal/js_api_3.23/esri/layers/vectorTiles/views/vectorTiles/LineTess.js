// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/LineTess",["require","exports"],function(S,h){function L(b){var c={items:[],count:0},a;for(a=0;a<b;++a)c.items.push(void 0);return c}function D(b,c){return b[0]*c[0]+b[1]*c[1]}function M(b){return Math.sqrt(D(b,b))}function I(b,c){var a=M(c);b[0]=c[0]/a;b[1]=c[1]/a;return b}function v(b,c){b[0]=-c[1];b[1]=c[0];return b}function E(b,c){return b[0]*c[1]-b[1]*c[0]}function q(b,c){b[0]=-c[0];b[1]=-c[1];return b}function u(b,c,a){b[0]=c[0]*a;b[1]=c[1]*
a;return b}function z(b,c,a){b[0]=c[0]+a[0];b[1]=c[1]+a[1];return b}function P(b,c){var a=D(b,c);return.999<a?0:-.999>a?Math.PI:Math.acos(a)}function N(b,c,a,e,r){if(0===e)b.count=0;else{var l=M(c),d=u(f[0],c,1/l);a=u(f[1],a,1/l);d=P(d,a);d=(r?-1:1)*d/e;r=Math.cos(d);d=Math.sin(d);a=c[0];var g=c[1];for(c=0;c<e-1;++c)l=a,a=r*l-d*g,g=d*l+r*g,b.items[c][0]=a,b.items[c][1]=g;b.count=e-1}}function B(b){var c=b.count,a=Math.floor(c/2),e;for(e=0;e<a;++e){var r=b.items[e];b.items[e]=b.items[c-e-1];b.items[c-
e-1]=r}}function J(b,c,a){a=v(f[0],a);c=q(f[1],a);var e=b.vectors.items[0];e.vector[0]=a[0];e.vector[1]=a[1];e.texCoords[0]=0;e.texCoords[1]=-1;a=b.vectors.items[1];a.vector[0]=c[0];a.vector[1]=c[1];a.texCoords[0]=0;a.texCoords[1]=1;b.vectors.count=2;c=b.lists[k.ENTRY];c.items[0]=0;c.items[1]=1;c.count=2;c=b.lists[k.EXIT];c.items[0]=0;c.items[1]=1;c.count=2;b.lists[k.CAP].count=0;b.capCenter=void 0}Object.defineProperty(h,"__esModule",{value:!0});var k;(function(b){b[b.ENTRY=1]="ENTRY";b[b.EXIT=2]=
"EXIT";b[b.CAP=3]="CAP"})(k=h.VectorRole||(h.VectorRole={}));var F;(function(b){b[b.START=1]="START";b[b.END=2]="END"})(F=h.CapPosition||(h.CapPosition={}));h.SYSTEM_MAG_LIMIT=3.8;h.MITER_SAFE_RADS=2*Math.acos(1/h.SYSTEM_MAG_LIMIT);var K=h.SYSTEM_MAG_LIMIT*h.SYSTEM_MAG_LIMIT,R=16/(2*Math.PI);h.allocTriangles=function(b){var c={items:[],count:0},a;for(a=0;a<b;++a)c.items.push({v1:{vector:[void 0,void 0],texCoords:[void 0,void 0]},v2:{vector:[void 0,void 0],texCoords:[void 0,void 0]},v3:{vector:[void 0,
void 0],texCoords:[void 0,void 0]}});return c};h.allocExtrudeVectors=function(){var b={items:[],count:0},c;for(c=0;30>c;++c)b.items.push({vector:[void 0,void 0],texCoords:[void 0,void 0]});c={};c[k.ENTRY]=L(20);c[k.EXIT]=L(20);c[k.CAP]=L(20);return{vectors:b,lists:c}};h.copyExtrudeVectors=function(b,c){var a;for(a=0;a<c.vectors.count;++a)b.vectors.items[a].vector[0]=c.vectors.items[a].vector[0],b.vectors.items[a].vector[1]=c.vectors.items[a].vector[1],b.vectors.items[a].texCoords[0]=c.vectors.items[a].texCoords[0],
b.vectors.items[a].texCoords[1]=c.vectors.items[a].texCoords[1],b.vectors.items[a].base=c.vectors.items[a].base;b.vectors.count=c.vectors.count;b.capCenter=c.capCenter};var f=[],O;for(O=0;32>O;++O)f.push([void 0,void 0]);var p=function(b){var c={items:[],count:0},a;for(a=0;a<b;++a)c.items.push([void 0,void 0]);return c}(16);h.length=M;h.normalize=I;h.getNumberOfSlices=function(b){return Math.round(b*R)};h.getRads=P;var G=[void 0,void 0],H=[void 0,void 0];h.bridge=function(b,c,a){var e=c.vectors;c=
c.lists[k.EXIT];var r=a.vectors,f=a.lists[k.ENTRY],d,g;if(c.count===f.count+1)a=c.items,d=e.items,g=f.items,r=r.items;else if(f.count===c.count+1)a=f.items,d=r.items,g=c.items,r=e.items;else if(c.count===f.count)a=f.items,d=r.items,g=c.items,r=e.items;else{console.error("Cannot bridge "+c.count+" to "+f.count+".");b.count=0;return}e=c.count+f.count-2;b.count=e;G[0]=a;G[1]=g;H[0]=d;H[1]=r;for(c=0;c<e;++c)a=b.items[c],d=(c+0)%2,d=H[d][G[d][Math.floor((c+0)/2)]],a.v1.vector[0]=d.vector[0],a.v1.vector[1]=
d.vector[1],a.v1.texCoords[0]=d.texCoords[0],a.v1.texCoords[1]=d.texCoords[1],a.v1.base=d.base,d=(c+1)%2,d=H[d][G[d][Math.floor((c+1)/2)]],a.v2.vector[0]=d.vector[0],a.v2.vector[1]=d.vector[1],a.v2.texCoords[0]=d.texCoords[0],a.v2.texCoords[1]=d.texCoords[1],a.v2.base=d.base,d=(c+2)%2,d=H[d][G[d][Math.floor((c+2)/2)]],a.v3.vector[0]=d.vector[0],a.v3.vector[1]=d.vector[1],a.v3.texCoords[0]=d.texCoords[0],a.v3.texCoords[1]=d.texCoords[1],a.v3.base=d.base};h.pie=function(b,c){if(0===c.lists[k.CAP].count)b.count=
0;else if(1===c.lists[k.CAP].count)console.error("A single vector is not enough to define a pie."),b.count=0;else{b.count=c.lists[k.CAP].count-1;var a;for(a=0;a<b.count;++a){var e=b.items[a],f=c.vectors.items[c.lists[k.CAP].items[a]];e.v1.vector[0]=f.vector[0];e.v1.vector[1]=f.vector[1];e.v1.texCoords[0]=f.texCoords[0];e.v1.texCoords[1]=f.texCoords[1];e.v1.base=f.base;f=c.vectors.items[c.lists[k.CAP].items[a+1]];e.v2.vector[0]=f.vector[0];e.v2.vector[1]=f.vector[1];e.v2.texCoords[0]=f.texCoords[0];
e.v2.texCoords[1]=f.texCoords[1];e.v2.base=f.base;f=c.vectors.items[c.capCenter];e.v3.vector[0]=f.vector[0];e.v3.vector[1]=f.vector[1];e.v3.texCoords[0]=f.texCoords[0];e.v3.texCoords[1]=f.texCoords[1];e.v3.base=f.base}}};h.buttCap=function(b,c,a){J(b,c,a)};h.roundCap=function(b,c,a,e,f,l){void 0===l&&(l=0);J(b,c,a);a=e===F.START?0:1;e=e===F.START?1:0;b.capCenter=b.vectors.count;c=b.vectors.items[b.capCenter];c.vector[0]=0;c.vector[1]=0;c.texCoords[0]=0;c.texCoords[1]=0;++b.vectors.count;N(p,b.vectors.items[a].vector,
b.vectors.items[e].vector,f,!1);f=b.vectors.count;c=b.lists[k.CAP];c.items[0]=a;a=b.vectors.items[a].texCoords[1];var d=b.vectors.items[e].texCoords[1],g;for(g=0;g<p.count;++g){var r=l*(1-Math.abs(p.count/2-g)/(p.count/2)),h=a+g/(p.count-1)*(d-a),n=p.items[g],q=b.vectors.items[f+g];q.vector[0]=n[0];q.vector[1]=n[1];q.texCoords[0]=r;q.texCoords[1]=h;c.items[g+1]=f+g}c.items[p.count+1]=e;c.count=p.count+2;b.vectors.count=f+p.count};var x=Math.cos(Math.PI/4),C=Math.sin(Math.PI/4),Q=Math.sqrt(2);h.squareCap=
function(b,c,a,e){J(b,c,a);c=e===F.START?0:1;a=e===F.START?1:0;var k=f[0],l=f[1],d=f[2],g=f[3];e=f[4];var h=b.vectors.items[c].vector;k[0]=x*h[0]-C*h[1];k[1]=C*h[0]+x*h[1];u(g,k,Q);l[0]=x*k[0]-C*k[1];l[1]=C*k[0]+x*k[1];d[0]=x*l[0]-C*l[1];d[1]=C*l[0]+x*l[1];u(e,d,Q);c=b.vectors.items[c];c.vector[0]=g[0];c.vector[1]=g[1];b=b.vectors.items[a];b.vector[0]=e[0];b.vector[1]=e[1]};h.fastMiterJoin=J;h.miterJoin=function(b,c,a){c=v(f[0],c);a=v(f[1],a);var e=f[2];e[0]=c[0]+a[0];e[1]=c[1]+a[1];a=I(f[3],e);c=
D(a,c);a=u(f[4],a,1/c);c=q(f[5],a);e=b.vectors.items[0];e.vector[0]=a[0];e.vector[1]=a[1];e.texCoords[0]=0;e.texCoords[1]=-1;a=b.vectors.items[1];a.vector[0]=c[0];a.vector[1]=c[1];a.texCoords[0]=0;a.texCoords[1]=1;b.vectors.count=2;c=b.lists[k.ENTRY];c.items[0]=0;c.items[1]=1;c.count=2;c=b.lists[k.EXIT];c.items[0]=0;c.items[1]=1;c.count=2;b.lists[k.CAP].count=0;b.capCenter=void 0};h.bevelJoin=function(b,c,a,e){var r=e*e;e=E(c,a);var l=0<e?[-1,1]:[1,-1],d=l[0],l=l[1],g=0<e?q(f[0],v(f[1],c)):v(f[2],
c),h=0<e?q(f[3],v(f[4],a)):v(f[5],a),p=f[6];p[0]=g[0]+h[0];p[1]=g[1]+h[1];var p=I(f[7],p),n=q(f[8],p),A=D(p,g),m=E(p,g),y=Math.abs(m/A),x=1+y*y,t=x<K?[y,!1]:[Math.sqrt(K-1),!0],m=t[0],t=t[1],y=x<r?[y,!1]:[Math.sqrt(r-1),!0],r=y[0];(y=y[1])&&t?(t=b.vectors.items[0],z(t.vector,q(f[9],g),u(f[10],q(f[11],c),m)),t.texCoords[0]=0,t.texCoords[1]=d,n=b.vectors.items[1],z(n.vector,q(f[12],h),u(f[13],a,m)),n.texCoords[0]=0,n.texCoords[1]=d,d=b.vectors.items[2],d.vector[0]=0,d.vector[1]=0,d.texCoords[0]=0,d.texCoords[1]=
0,d=b.vectors.items[3],z(d.vector,g,u(f[14],c,r)),d.texCoords[0]=0,d.texCoords[1]=l,c=b.vectors.items[4],z(c.vector,h,u(f[15],q(f[16],a),r)),c.texCoords[0]=0,c.texCoords[1]=l,b.vectors.count=5,a=b.lists[k.ENTRY],a.items[0]=0,a.items[1]=2,a.items[2]=3,a.count=3,a=b.lists[k.EXIT],a.items[0]=1,a.items[1]=2,a.items[2]=4,a.count=3,a=b.lists[k.CAP],a.items[0]=3,a.items[1]=4,a.count=2,b.capCenter=2):!y&&t?(t=b.vectors.items[0],z(t.vector,q(f[9],g),u(f[10],q(f[11],c),m)),t.texCoords[0]=0,t.texCoords[1]=d,
n=b.vectors.items[1],z(n.vector,q(f[12],h),u(f[13],a,m)),n.texCoords[0]=0,n.texCoords[1]=d,d=b.vectors.items[2],d.vector[0]=0,d.vector[1]=0,d.texCoords[0]=0,d.texCoords[1]=0,d=b.vectors.items[3],u(d.vector,p,1/A),d.texCoords[0]=0,d.texCoords[1]=l,b.vectors.count=4,a=b.lists[k.ENTRY],a.items[0]=0,a.items[1]=2,a.items[2]=3,a.count=3,a=b.lists[k.EXIT],a.items[0]=1,a.items[1]=2,a.items[2]=3,a.count=3,b.lists[k.CAP].count=0,b.capCenter=void 0):y&&!t?(t=b.vectors.items[0],u(t.vector,n,1/A),t.texCoords[0]=
0,t.texCoords[1]=d,n=b.vectors.items[1],n.vector[0]=0,n.vector[1]=0,n.texCoords[0]=0,n.texCoords[1]=0,d=b.vectors.items[2],z(d.vector,g,u(f[9],c,r)),d.texCoords[0]=0,d.texCoords[1]=l,d=b.vectors.items[3],z(d.vector,h,u(f[10],q(f[11],a),r)),d.texCoords[0]=0,d.texCoords[1]=l,b.vectors.count=4,a=b.lists[k.ENTRY],a.items[0]=0,a.items[1]=1,a.items[2]=2,a.count=3,a=b.lists[k.EXIT],a.items[0]=0,a.items[1]=1,a.items[2]=3,a.count=3,a=b.lists[k.CAP],a.items[0]=2,a.items[1]=3,a.count=2,b.capCenter=1):y||t||
(t=b.vectors.items[0],u(t.vector,n,1/A),t.texCoords[0]=0,t.texCoords[1]=d,n=b.vectors.items[1],u(n.vector,p,1/A),n.texCoords[0]=0,n.texCoords[1]=l,b.vectors.count=2,a=b.lists[k.ENTRY],a.items[0]=0,a.items[1]=1,a.count=2,a=b.lists[k.EXIT],a.items[0]=0,a.items[1]=1,a.count=2,b.lists[k.CAP].count=0,b.capCenter=void 0);0>e&&(B(b.lists[k.ENTRY]),B(b.lists[k.EXIT]))};h.roundJoin=function(b,c,a,e){var h=E(c,a),l=0<h?[-1,1]:[1,-1],d=l[0],l=l[1],g=0<h?q(f[0],v(f[1],c)):v(f[2],c),w=0<h?q(f[3],v(f[4],a)):v(f[5],
a),x=f[6];x[0]=g[0]+w[0];x[1]=g[1]+w[1];var n=I(f[7],x),x=q(f[8],n),A=D(n,g),n=E(n,g),n=Math.abs(n/A),m=1+n*n<K?[n,!1]:[Math.sqrt(K-1),!0],n=m[0];m[1]?(m=b.vectors.items[0],m.vector[0]=g[0],m.vector[1]=g[1],m.texCoords[0]=0,m.texCoords[1]=l,m=b.vectors.items[1],m.vector[0]=w[0],m.vector[1]=w[1],m.texCoords[0]=0,m.texCoords[1]=l,m=b.vectors.items[2],z(m.vector,q(f[9],g),u(f[10],q(f[11],c),n)),m.texCoords[0]=0,m.texCoords[1]=d,c=b.vectors.items[3],z(c.vector,q(f[12],w),u(f[13],a,n)),c.texCoords[0]=
0,c.texCoords[1]=d,a=b.vectors.items[4],a.vector[0]=0,a.vector[1]=0,a.texCoords[0]=0,a.texCoords[1]=0,b.vectors.count=5,a=b.lists[k.ENTRY],a.items[0]=2,a.items[1]=4,a.items[2]=0,a.count=3,a=b.lists[k.EXIT],a.items[0]=3,a.items[1]=4,a.items[2]=1,a.count=3,b.capCenter=4):(m=b.vectors.items[0],m.vector[0]=g[0],m.vector[1]=g[1],m.texCoords[0]=0,m.texCoords[1]=l,m=b.vectors.items[1],m.vector[0]=w[0],m.vector[1]=w[1],m.texCoords[0]=0,m.texCoords[1]=l,m=b.vectors.items[2],u(m.vector,x,1/A),m.texCoords[0]=
0,m.texCoords[1]=d,c=b.vectors.items[3],c.vector[0]=0,c.vector[1]=0,c.texCoords[0]=0,c.texCoords[1]=0,b.vectors.count=4,a=b.lists[k.ENTRY],a.items[0]=2,a.items[1]=3,a.items[2]=0,a.count=3,a=b.lists[k.EXIT],a.items[0]=2,a.items[1]=3,a.items[2]=1,a.count=3,b.capCenter=3);N(p,g,w,e,0>h);e=b.vectors.count;g=b.lists[k.CAP];for(w=g.items[0]=0;w<p.count;++w)a=p.items[w],d=b.vectors.items[e+w],d.vector[0]=a[0],d.vector[1]=a[1],d.texCoords[0]=0,d.texCoords[1]=l,g.items[w+1]=e+w;g.items[p.count+1]=1;g.count=
p.count+2;b.vectors.count=e+p.count;0>h&&(B(b.lists[k.ENTRY]),B(b.lists[k.EXIT]))};h.unitRoundJoin=function(b,c,a,e){var h=E(c,a),l=0<h?[-1,1]:[1,-1],d=l[0],l=l[1];c=0<h?q(f[0],v(f[1],c)):v(f[2],c);a=0<h?q(f[3],v(f[4],a)):v(f[5],a);var g=b.vectors.items[0];g.vector[0]=c[0];g.vector[1]=c[1];g.texCoords[0]=0;g.texCoords[1]=l;g=b.vectors.items[1];g.vector[0]=a[0];g.vector[1]=a[1];g.texCoords[0]=0;g.texCoords[1]=l;g=b.vectors.items[2];q(g.vector,c);g.texCoords[0]=0;g.texCoords[1]=d;g=b.vectors.items[3];
q(g.vector,a);g.texCoords[0]=0;g.texCoords[1]=d;d=b.vectors.items[4];d.vector[0]=0;d.vector[1]=0;d.texCoords[0]=0;d.texCoords[1]=0;b.vectors.count=5;d=b.lists[k.ENTRY];d.items[0]=2;d.items[1]=0;d.count=2;d=b.lists[k.EXIT];d.items[0]=3;d.items[1]=1;d.count=2;b.capCenter=4;N(p,c,a,e,0>h);e=b.vectors.count;c=b.lists[k.CAP];for(d=c.items[0]=0;d<p.count;++d)a=p.items[d],g=b.vectors.items[e+d],g.vector[0]=a[0],g.vector[1]=a[1],g.texCoords[0]=0,g.texCoords[1]=l,c.items[d+1]=e+d;c.items[p.count+1]=1;c.count=
p.count+2;b.vectors.count=e+p.count;0>h&&(B(b.lists[k.ENTRY]),B(b.lists[k.EXIT]))};h.rectJoin=function(b,c,a){c=v(f[0],c);a=v(f[1],a);var e=b.vectors.items[0];e.vector[0]=c[0];e.vector[1]=c[1];e.texCoords[0]=0;e.texCoords[1]=-1;e=b.vectors.items[1];e.vector[0]=a[0];e.vector[1]=a[1];e.texCoords[0]=0;e.texCoords[1]=-1;e=b.vectors.items[2];q(e.vector,c);e.texCoords[0]=0;e.texCoords[1]=1;c=b.vectors.items[3];q(c.vector,a);c.texCoords[0]=0;c.texCoords[1]=1;b.vectors.count=4;c=b.lists[k.ENTRY];c.items[0]=
0;c.items[1]=2;c.count=2;c=b.lists[k.EXIT];c.items[0]=1;c.items[1]=3;c.count=2;b.capCenter=void 0}});