(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./node_modules/@storybook/components/dist/esm/Color-f953d088.js":function(Fa,re,c){"use strict";c.r(re),c.d(re,"ColorControl",function(){return Ne}),c.d(re,"default",function(){return Ne});var ze=c("./node_modules/core-js/modules/es.object.assign.js"),$a=c.n(ze),Fe=c("./node_modules/core-js/modules/es.object.keys.js"),Xa=c.n(Fe),$e=c("./node_modules/core-js/modules/es.array.join.js"),Va=c.n($e),Xe=c("./node_modules/core-js/modules/es.array.filter.js"),Ga=c.n(Xe),Ve=c("./node_modules/core-js/modules/es.object.to-string.js"),Ja=c.n(Ve),Ge=c("./node_modules/core-js/modules/es.number.constructor.js"),Ya=c.n(Ge),Je=c("./node_modules/core-js/modules/es.regexp.exec.js"),Qa=c.n(Je),Ye=c("./node_modules/core-js/modules/es.regexp.to-string.js"),Za=c.n(Ye),Qe=c("./node_modules/core-js/modules/es.string.replace.js"),qa=c.n(Qe),Ze=c("./node_modules/core-js/modules/es.array.iterator.js"),et=c.n(Ze),qe=c("./node_modules/core-js/modules/es.map.js"),rt=c.n(qe),er=c("./node_modules/core-js/modules/es.string.iterator.js"),at=c.n(er),rr=c("./node_modules/core-js/modules/web.dom-collections.iterator.js"),tt=c.n(rr),ar=c("./node_modules/core-js/modules/es.string.match.js"),nt=c.n(ar),tr=c("./node_modules/core-js/modules/es.array.map.js"),ot=c.n(tr),nr=c("./node_modules/core-js/modules/es.string.split.js"),st=c.n(nr),or=c("./node_modules/core-js/modules/web.dom-collections.for-each.js"),lt=c.n(or),sr=c("./node_modules/core-js/modules/es.array.slice.js"),ut=c.n(sr),lr=c("./node_modules/core-js/modules/es.array.concat.js"),it=c.n(lr),ur=c("./node_modules/core-js/modules/es.object.values.js"),ct=c.n(ur),ir=c("./node_modules/core-js/modules/es.string.starts-with.js"),vt=c.n(ir),cr=c("./node_modules/core-js/modules/es.function.name.js"),dt=c.n(cr),vr=c("./node_modules/core-js/modules/es.symbol.js"),ft=c.n(vr),dr=c("./node_modules/core-js/modules/es.symbol.description.js"),_t=c.n(dr),fr=c("./node_modules/core-js/modules/es.symbol.iterator.js"),mt=c.n(fr),_r=c("./node_modules/core-js/modules/es.array.from.js"),ht=c.n(_r),I=c("./node_modules/@storybook/components/dist/esm/index-681e4b07.js"),h=c("./node_modules/react/index.js"),_=c.n(h),K=c("./node_modules/@storybook/theming/dist/esm/index.js"),mr=c("./node_modules/memoizerific/memoizerific.js"),gt=c.n(mr),hr=c("./node_modules/@storybook/csf/dist/index.js"),bt=c.n(hr),gr=c("./node_modules/qs/lib/index.js"),Et=c.n(gr),H,N;function P(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function ae(a){return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(a)}function L(a,e){return jr(a)||pr(a,e)||Er(a,e)||br()}function br(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Er(a,e){if(a){if(typeof a=="string")return ge(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ge(a,e)}}function ge(a,e){(e==null||e>a.length)&&(e=a.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=a[r];return t}function pr(a,e){var r=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var t=[],n=!0,o=!1,s,l;try{for(r=r.call(a);!(n=(s=r.next()).done)&&(t.push(s.value),!(e&&t.length===e));n=!0);}catch(u){o=!0,l=u}finally{try{!n&&r.return!=null&&r.return()}finally{if(o)throw l}}return t}}function jr(a){if(Array.isArray(a))return a}function W(){return(W=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a}).apply(this,arguments)}function te(a,e){if(a==null)return{};var r,t,n={},o=Object.keys(a);for(t=0;t<o.length;t++)e.indexOf(r=o[t])>=0||(n[r]=a[r]);return n}function ne(a){var e=Object(h.useRef)(a),r=Object(h.useRef)(function(t){e.current&&e.current(t)});return e.current=a,r.current}var S=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=1),e>t?t:e<r?r:e},z=function(e){return"touches"in e},oe=function(e){return e&&e.ownerDocument.defaultView||self},be=function(e,r,t){var n=e.getBoundingClientRect(),o=z(r)?function(s,l){for(var u=0;u<s.length;u++)if(s[u].identifier===l)return s[u];return s[0]}(r.touches,t):r;return{left:S((o.pageX-(n.left+oe(e).pageXOffset))/n.width),top:S((o.pageY-(n.top+oe(e).pageYOffset))/n.height)}},Ee=function(e){!z(e)&&e.preventDefault()},se=_.a.memo(function(a){var e=a.onMove,r=a.onKey,t=te(a,["onMove","onKey"]),n=Object(h.useRef)(null),o=ne(e),s=ne(r),l=Object(h.useRef)(null),u=Object(h.useRef)(!1),i=Object(h.useMemo)(function(){var M=function(m){Ee(m),(z(m)?m.touches.length>0:m.buttons>0)&&n.current?o(be(n.current,m,l.current)):w(!1)},x=function(){return w(!1)};function w(p){var m=u.current,g=oe(n.current),E=p?g.addEventListener:g.removeEventListener;E(m?"touchmove":"mousemove",M),E(m?"touchend":"mouseup",x)}return[function(p){var m=p.nativeEvent,g=n.current;if(g&&(Ee(m),!function(O,D){return D&&!z(O)}(m,u.current)&&g)){if(z(m)){u.current=!0;var E=m.changedTouches||[];E.length&&(l.current=E[0].identifier)}g.focus(),o(be(g,m,l.current)),w(!0)}},function(p){var m=p.which||p.keyCode;m<37||m>40||(p.preventDefault(),s({left:m===39?.05:m===37?-.05:0,top:m===40?.05:m===38?-.05:0}))},w]},[s,o]),d=i[0],f=i[1],j=i[2];return Object(h.useEffect)(function(){return j},[j]),_.a.createElement("div",W({},t,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:n,onKeyDown:f,tabIndex:0,role:"slider"}))}),F=function(e){return e.filter(Boolean).join(" ")},le=function(e){var r=e.color,t=e.left,n=e.top,o=n===void 0?.5:n,s=F(["react-colorful__pointer",e.className]);return _.a.createElement("div",{className:s,style:{top:100*o+"%",left:100*t+"%"}},_.a.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},C=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=Math.pow(10,r)),Math.round(t*e)/t},yr={grad:.9,turn:360,rad:360/(2*Math.PI)},ue=function(e){return e[0]==="#"&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},Mr=function(e,r){return r===void 0&&(r="deg"),Number(e)*(yr[r]||1)},Or=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?Pr({h:Mr(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},Pr=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},pe=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:C(e.h),s:C(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:C(o/2),a:C(n,2)}},ie=function(e){var r=pe(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},G=function(e){var r=pe(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},je=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var s=Math.floor(r),l=n*(1-t),u=n*(1-(r-s)*t),i=n*(1-(1-r+s)*t),d=s%6;return{r:C(255*[n,u,l,l,i,n][d]),g:C(255*[i,n,n,u,l,l][d]),b:C(255*[l,l,i,n,n,u][d]),a:C(o,2)}},Cr=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?ye({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},ce=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},ye=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,s=Math.max(r,t,n),l=s-Math.min(r,t,n),u=l?s===r?(t-n)/l:s===t?2+(n-r)/l:4+(r-t)/l:0;return{h:C(60*(u<0?u+6:u)),s:C(s?l/s*100:0),v:C(s/255*100),a:o}},Me=_.a.memo(function(a){var e=a.hue,r=a.onChange,t=F(["react-colorful__hue",a.className]);return _.a.createElement("div",{className:t},_.a.createElement(se,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:S(e+360*o.left,0,360)})},"aria-label":"Hue","aria-valuetext":C(e)},_.a.createElement(le,{className:"react-colorful__hue-pointer",left:e/360,color:ie({h:e,s:100,v:100,a:1})})))}),Oe=_.a.memo(function(a){var e=a.hsva,r=a.onChange,t={backgroundColor:ie({h:e.h,s:100,v:100,a:1})};return _.a.createElement("div",{className:"react-colorful__saturation",style:t},_.a.createElement(se,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:S(e.s+100*o.left,0,100),v:S(e.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+C(e.s)+"%, Brightness "+C(e.v)+"%"},_.a.createElement(le,{className:"react-colorful__saturation-pointer",top:1-e.v/100,left:e.s/100,color:ie(e)})))}),Pe=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},Ce=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function xe(a,e,r){var t=ne(r),n=Object(h.useState)(function(){return a.toHsva(e)}),o=n[0],s=n[1],l=Object(h.useRef)({color:e,hsva:o});Object(h.useEffect)(function(){if(!a.equal(e,l.current.color)){var i=a.toHsva(e);l.current={hsva:i,color:e},s(i)}},[e,a]),Object(h.useEffect)(function(){var i;Pe(o,l.current.hsva)||a.equal(i=a.fromHsva(o),l.current.color)||(l.current={hsva:o,color:i},t(i))},[o,a,t]);var u=Object(h.useCallback)(function(i){s(function(d){return Object.assign({},d,i)})},[]);return[o,u]}for(var xr=typeof window!="undefined"?h.useLayoutEffect:h.useEffect,Dr=function(){return c.nc},De=new Map,Ie=function(e){xr(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!De.has(r)){var t=r.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,De.set(r,t);var n=Dr();n&&t.setAttribute("nonce",n),r.head.appendChild(t)}},[])},Ir=function(e){var r=e.className,t=e.colorModel,n=e.color,o=n===void 0?t.defaultColor:n,s=e.onChange,l=te(e,["className","colorModel","color","onChange"]),u=Object(h.useRef)(null);Ie(u);var i=xe(t,o,s),d=i[0],f=i[1],j=F(["react-colorful",r]);return _.a.createElement("div",W({},l,{ref:u,className:j}),_.a.createElement(Oe,{hsva:d,onChange:f}),_.a.createElement(Me,{hue:d.h,onChange:f,className:"react-colorful__last-control"}))},Rr={defaultColor:"000",toHsva:function(e){return ye(ue(e))},fromHsva:function(e){return t=(r=je(e)).g,n=r.b,"#"+ce(r.r)+ce(t)+ce(n);var r,t,n},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||Pe(ue(e),ue(r))}},Tr=function(e){return _.a.createElement(Ir,W({},e,{colorModel:Rr}))},wr=function(e){var r=e.className,t=e.hsva,n=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+G(Object.assign({},t,{a:0}))+", "+G(Object.assign({},t,{a:1}))+")"},s=F(["react-colorful__alpha",r]);return _.a.createElement("div",{className:s},_.a.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),_.a.createElement(se,{onMove:function(u){n({a:u.left})},onKey:function(u){n({a:S(t.a+u.left)})},"aria-label":"Alpha","aria-valuetext":C(100*t.a)+"%"},_.a.createElement(le,{className:"react-colorful__alpha-pointer",left:t.a,color:G(t)})))},Re=function(e){var r=e.className,t=e.colorModel,n=e.color,o=n===void 0?t.defaultColor:n,s=e.onChange,l=te(e,["className","colorModel","color","onChange"]),u=Object(h.useRef)(null);Ie(u);var i=xe(t,o,s),d=i[0],f=i[1],j=F(["react-colorful",r]);return _.a.createElement("div",W({},l,{ref:u,className:j}),_.a.createElement(Oe,{hsva:d,onChange:f}),_.a.createElement(Me,{hue:d.h,onChange:f}),_.a.createElement(wr,{hsva:d,onChange:f,className:"react-colorful__last-control"}))},Lr={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Or,fromHsva:G,equal:Ce},Br=function(e){return _.a.createElement(Re,W({},e,{colorModel:Lr}))},Ar={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Cr,fromHsva:function(e){var r=je(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:Ce},Kr=function(e){return _.a.createElement(Re,W({},e,{colorModel:Ar}))},Wr={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},$=Wr,Te={},ve=0,we=Object.keys($);ve<we.length;ve++){var Le=we[ve];Te[$[Le]]=Le}for(var v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},Be=v,de=0,Ae=Object.keys(v);de<Ae.length;de++){var R=Ae[de];if(!("channels"in v[R]))throw new Error("missing channels property: "+R);if(!("labels"in v[R]))throw new Error("missing channel labels property: "+R);if(v[R].labels.length!==v[R].channels)throw new Error("channel and label counts mismatch: "+R);var Ke=v[R],Ur=Ke.channels,Sr=Ke.labels;delete v[R].channels,delete v[R].labels,Object.defineProperty(v[R],"channels",{value:Ur}),Object.defineProperty(v[R],"labels",{value:Sr})}v.rgb.hsl=function(a){var e=a[0]/255,r=a[1]/255,t=a[2]/255,n=Math.min(e,r,t),o=Math.max(e,r,t),s=o-n,l,u;o===n?l=0:e===o?l=(r-t)/s:r===o?l=2+(t-e)/s:t===o&&(l=4+(e-r)/s),l=Math.min(l*60,360),l<0&&(l+=360);var i=(n+o)/2;return o===n?u=0:i<=.5?u=s/(o+n):u=s/(2-o-n),[l,u*100,i*100]},v.rgb.hsv=function(a){var e,r,t,n,o,s=a[0]/255,l=a[1]/255,u=a[2]/255,i=Math.max(s,l,u),d=i-Math.min(s,l,u),f=function(M){return(i-M)/6/d+1/2};return d===0?(n=0,o=0):(o=d/i,e=f(s),r=f(l),t=f(u),s===i?n=t-r:l===i?n=1/3+e-t:u===i&&(n=2/3+r-e),n<0?n+=1:n>1&&(n-=1)),[n*360,o*100,i*100]},v.rgb.hwb=function(a){var e=a[0],r=a[1],t=a[2],n=v.rgb.hsl(a)[0],o=1/255*Math.min(e,Math.min(r,t));return t=1-1/255*Math.max(e,Math.max(r,t)),[n,o*100,t*100]},v.rgb.cmyk=function(a){var e=a[0]/255,r=a[1]/255,t=a[2]/255,n=Math.min(1-e,1-r,1-t),o=(1-e-n)/(1-n)||0,s=(1-r-n)/(1-n)||0,l=(1-t-n)/(1-n)||0;return[o*100,s*100,l*100,n*100]};function kr(a,e){return Math.pow(a[0]-e[0],2)+Math.pow(a[1]-e[1],2)+Math.pow(a[2]-e[2],2)}v.rgb.keyword=function(a){var e=Te[a];if(e)return e;for(var r=1/0,t,n=0,o=Object.keys($);n<o.length;n++){var s=o[n],l=$[s],u=kr(a,l);u<r&&(r=u,t=s)}return t},v.keyword.rgb=function(a){return $[a]},v.rgb.xyz=function(a){var e=a[0]/255,r=a[1]/255,t=a[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var n=e*.4124+r*.3576+t*.1805,o=e*.2126+r*.7152+t*.0722,s=e*.0193+r*.1192+t*.9505;return[n*100,o*100,s*100]},v.rgb.lab=function(a){var e=v.rgb.xyz(a),r=e[0],t=e[1],n=e[2];r/=95.047,t/=100,n/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;var o=116*t-16,s=500*(r-t),l=200*(t-n);return[o,s,l]},v.hsl.rgb=function(a){var e=a[0]/360,r=a[1]/100,t=a[2]/100,n,o,s;if(r===0)return s=t*255,[s,s,s];t<.5?n=t*(1+r):n=t+r-t*r;for(var l=2*t-n,u=[0,0,0],i=0;i<3;i++)o=e+1/3*-(i-1),o<0&&o++,o>1&&o--,6*o<1?s=l+(n-l)*6*o:2*o<1?s=n:3*o<2?s=l+(n-l)*(2/3-o)*6:s=l,u[i]=s*255;return u},v.hsl.hsv=function(a){var e=a[0],r=a[1]/100,t=a[2]/100,n=r,o=Math.max(t,.01);t*=2,r*=t<=1?t:2-t,n*=o<=1?o:2-o;var s=(t+r)/2,l=t===0?2*n/(o+n):2*r/(t+r);return[e,l*100,s*100]},v.hsv.rgb=function(a){var e=a[0]/60,r=a[1]/100,t=a[2]/100,n=Math.floor(e)%6,o=e-Math.floor(e),s=255*t*(1-r),l=255*t*(1-r*o),u=255*t*(1-r*(1-o));switch(t*=255,n){case 0:return[t,u,s];case 1:return[l,t,s];case 2:return[s,t,u];case 3:return[s,l,t];case 4:return[u,s,t];case 5:return[t,s,l]}},v.hsv.hsl=function(a){var e=a[0],r=a[1]/100,t=a[2]/100,n=Math.max(t,.01),o,s;s=(2-r)*t;var l=(2-r)*n;return o=r*n,o/=l<=1?l:2-l,o=o||0,s/=2,[e,o*100,s*100]},v.hwb.rgb=function(a){var e=a[0]/360,r=a[1]/100,t=a[2]/100,n=r+t,o;n>1&&(r/=n,t/=n);var s=Math.floor(6*e),l=1-t;o=6*e-s,s&1&&(o=1-o);var u=r+o*(l-r),i,d,f;switch(s){default:case 6:case 0:i=l,d=u,f=r;break;case 1:i=u,d=l,f=r;break;case 2:i=r,d=l,f=u;break;case 3:i=r,d=u,f=l;break;case 4:i=u,d=r,f=l;break;case 5:i=l,d=r,f=u;break}return[i*255,d*255,f*255]},v.cmyk.rgb=function(a){var e=a[0]/100,r=a[1]/100,t=a[2]/100,n=a[3]/100,o=1-Math.min(1,e*(1-n)+n),s=1-Math.min(1,r*(1-n)+n),l=1-Math.min(1,t*(1-n)+n);return[o*255,s*255,l*255]},v.xyz.rgb=function(a){var e=a[0]/100,r=a[1]/100,t=a[2]/100,n,o,s;return n=e*3.2406+r*-1.5372+t*-.4986,o=e*-.9689+r*1.8758+t*.0415,s=e*.0557+r*-.204+t*1.057,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92,s=s>.0031308?1.055*Math.pow(s,1/2.4)-.055:s*12.92,n=Math.min(Math.max(0,n),1),o=Math.min(Math.max(0,o),1),s=Math.min(Math.max(0,s),1),[n*255,o*255,s*255]},v.xyz.lab=function(a){var e=a[0],r=a[1],t=a[2];e/=95.047,r/=100,t/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;var n=116*r-16,o=500*(e-r),s=200*(r-t);return[n,o,s]},v.lab.xyz=function(a){var e=a[0],r=a[1],t=a[2],n,o,s;o=(e+16)/116,n=r/500+o,s=o-t/200;var l=Math.pow(o,3),u=Math.pow(n,3),i=Math.pow(s,3);return o=l>.008856?l:(o-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,s=i>.008856?i:(s-16/116)/7.787,n*=95.047,o*=100,s*=108.883,[n,o,s]},v.lab.lch=function(a){var e=a[0],r=a[1],t=a[2],n,o=Math.atan2(t,r);n=o*360/2/Math.PI,n<0&&(n+=360);var s=Math.sqrt(r*r+t*t);return[e,s,n]},v.lch.lab=function(a){var e=a[0],r=a[1],t=a[2],n=t/360*2*Math.PI,o=r*Math.cos(n),s=r*Math.sin(n);return[e,o,s]},v.rgb.ansi16=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=L(a,3),t=r[0],n=r[1],o=r[2],s=e===null?v.rgb.hsv(a)[2]:e;if(s=Math.round(s/50),s===0)return 30;var l=30+(Math.round(o/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return s===2&&(l+=60),l},v.hsv.ansi16=function(a){return v.rgb.ansi16(v.hsv.rgb(a),a[2])},v.rgb.ansi256=function(a){var e=a[0],r=a[1],t=a[2];if(e===r&&r===t)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;var n=16+36*Math.round(e/255*5)+6*Math.round(r/255*5)+Math.round(t/255*5);return n},v.ansi16.rgb=function(a){var e=a%10;if(e===0||e===7)return a>50&&(e+=3.5),e=e/10.5*255,[e,e,e];var r=(~~(a>50)+1)*.5,t=(e&1)*r*255,n=(e>>1&1)*r*255,o=(e>>2&1)*r*255;return[t,n,o]},v.ansi256.rgb=function(a){if(a>=232){var e=(a-232)*10+8;return[e,e,e]}a-=16;var r,t=Math.floor(a/36)/5*255,n=Math.floor((r=a%36)/6)/5*255,o=r%6/5*255;return[t,n,o]},v.rgb.hex=function(a){var e=((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255),r=e.toString(16).toUpperCase();return"000000".substring(r.length)+r},v.hex.rgb=function(a){var e=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var r=e[0];e[0].length===3&&(r=r.split("").map(function(l){return l+l}).join(""));var t=parseInt(r,16),n=t>>16&255,o=t>>8&255,s=t&255;return[n,o,s]},v.rgb.hcg=function(a){var e=a[0]/255,r=a[1]/255,t=a[2]/255,n=Math.max(Math.max(e,r),t),o=Math.min(Math.min(e,r),t),s=n-o,l,u;return s<1?l=o/(1-s):l=0,s<=0?u=0:n===e?u=(r-t)/s%6:n===r?u=2+(t-e)/s:u=4+(e-r)/s,u/=6,u%=1,[u*360,s*100,l*100]},v.hsl.hcg=function(a){var e=a[1]/100,r=a[2]/100,t=r<.5?2*e*r:2*e*(1-r),n=0;return t<1&&(n=(r-.5*t)/(1-t)),[a[0],t*100,n*100]},v.hsv.hcg=function(a){var e=a[1]/100,r=a[2]/100,t=e*r,n=0;return t<1&&(n=(r-t)/(1-t)),[a[0],t*100,n*100]},v.hcg.rgb=function(a){var e=a[0]/360,r=a[1]/100,t=a[2]/100;if(r===0)return[t*255,t*255,t*255];var n=[0,0,0],o=e%1*6,s=o%1,l=1-s,u=0;switch(Math.floor(o)){case 0:n[0]=1,n[1]=s,n[2]=0;break;case 1:n[0]=l,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=s;break;case 3:n[0]=0,n[1]=l,n[2]=1;break;case 4:n[0]=s,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=l}return u=(1-r)*t,[(r*n[0]+u)*255,(r*n[1]+u)*255,(r*n[2]+u)*255]},v.hcg.hsv=function(a){var e=a[1]/100,r=a[2]/100,t=e+r*(1-e),n=0;return t>0&&(n=e/t),[a[0],n*100,t*100]},v.hcg.hsl=function(a){var e=a[1]/100,r=a[2]/100,t=r*(1-e)+.5*e,n=0;return t>0&&t<.5?n=e/(2*t):t>=.5&&t<1&&(n=e/(2*(1-t))),[a[0],n*100,t*100]},v.hcg.hwb=function(a){var e=a[1]/100,r=a[2]/100,t=e+r*(1-e);return[a[0],(t-e)*100,(1-t)*100]},v.hwb.hcg=function(a){var e=a[1]/100,r=a[2]/100,t=1-r,n=t-e,o=0;return n<1&&(o=(t-n)/(1-n)),[a[0],n*100,o*100]},v.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]},v.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]},v.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]},v.gray.hsl=function(a){return[0,0,a[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(a){return[0,100,a[0]]},v.gray.cmyk=function(a){return[0,0,0,a[0]]},v.gray.lab=function(a){return[a[0],0,0]},v.gray.hex=function(a){var e=Math.round(a[0]/100*255)&255,r=(e<<16)+(e<<8)+e,t=r.toString(16).toUpperCase();return"000000".substring(t.length)+t},v.rgb.gray=function(a){var e=(a[0]+a[1]+a[2])/3;return[e/255*100]};var J=Be;function Hr(){for(var a={},e=Object.keys(J),r=e.length,t=0;t<r;t++)a[e[t]]={distance:-1,parent:null};return a}function Nr(a){var e=Hr(),r=[a];for(e[a].distance=0;r.length;)for(var t=r.pop(),n=Object.keys(J[t]),o=n.length,s=0;s<o;s++){var l=n[s],u=e[l];u.distance===-1&&(u.distance=e[t].distance+1,u.parent=t,r.unshift(l))}return e}function zr(a,e){return function(r){return e(a(r))}}function Fr(a,e){for(var r=[e[a].parent,a],t=J[e[a].parent][a],n=e[a].parent;e[n].parent;)r.unshift(e[n].parent),t=zr(J[e[n].parent][n],t),n=e[n].parent;return t.conversion=r,t}var $r=function(e){for(var r=Nr(e),t={},n=Object.keys(r),o=n.length,s=0;s<o;s++){var l=n[s],u=r[l];u.parent!==null&&(t[l]=Fr(l,r))}return t},fe=Be,Xr=$r,k={},Vr=Object.keys(fe);function Gr(a){var e=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var s=n[0];return s==null?s:(s.length>1&&(n=s),a(n))};return"conversion"in a&&(e.conversion=a.conversion),e}function Jr(a){var e=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var s=n[0];if(s==null)return s;s.length>1&&(n=s);var l=a(n);if(ae(l)==="object")for(var u=l.length,i=0;i<u;i++)l[i]=Math.round(l[i]);return l};return"conversion"in a&&(e.conversion=a.conversion),e}Vr.forEach(function(a){k[a]={},Object.defineProperty(k[a],"channels",{value:fe[a].channels}),Object.defineProperty(k[a],"labels",{value:fe[a].labels});var e=Xr(a),r=Object.keys(e);r.forEach(function(t){var n=e[t];k[a][t]=Jr(n),k[a][t].raw=Gr(n)})});var T=k,Yr=I.pc,Qr=function(){return Yr.Date.now()},Zr=Qr,qr=/\s/;function ea(a){for(var e=a.length;e--&&qr.test(a.charAt(e)););return e}var ra=ea,aa=ra,ta=/^\s+/;function na(a){return a&&a.slice(0,aa(a)+1).replace(ta,"")}var oa=na,sa=oa,We=I.sc,la=I.tc,Ue=0/0,ua=/^[-+]0x[0-9a-f]+$/i,ia=/^0b[01]+$/i,ca=/^0o[0-7]+$/i,va=parseInt;function da(a){if(typeof a=="number")return a;if(la(a))return Ue;if(We(a)){var e=typeof a.valueOf=="function"?a.valueOf():a;a=We(e)?e+"":e}if(typeof a!="string")return a===0?a:+a;a=sa(a);var r=ia.test(a);return r||ca.test(a)?va(a.slice(2),r?2:8):ua.test(a)?Ue:+a}var fa=da,_a=I.sc,_e=Zr,Se=fa,ma="Expected a function",ha=Math.max,ga=Math.min;function ba(a,e,r){var t,n,o,s,l,u,i=0,d=!1,f=!1,j=!0;if(typeof a!="function")throw new TypeError(ma);e=Se(e)||0,_a(r)&&(d=!!r.leading,f="maxWait"in r,o=f?ha(Se(r.maxWait)||0,e):o,j="trailing"in r?!!r.trailing:j);function M(y){var B=t,A=n;return t=n=void 0,i=y,s=a.apply(A,B),s}function x(y){return i=y,l=setTimeout(m,e),d?M(y):s}function w(y){var B=y-u,A=y-i,q=e-B;return f?ga(q,o-A):q}function p(y){var B=y-u,A=y-i;return u===void 0||B>=e||B<0||f&&A>=o}function m(){var y=_e();if(p(y))return g(y);l=setTimeout(m,w(y))}function g(y){return l=void 0,j&&t?M(y):(t=n=void 0,s)}function E(){l!==void 0&&clearTimeout(l),i=0,t=u=n=l=void 0}function O(){return l===void 0?s:g(_e())}function D(){var y=_e(),B=p(y);if(t=arguments,n=this,u=y,B){if(l===void 0)return x(u);if(f)return clearTimeout(l),l=setTimeout(m,e),M(u)}return l===void 0&&(l=setTimeout(m,e)),s}return D.cancel=E,D.flush=O,D}var Ea=ba,pa=Ea,ja=I.sc,ya="Expected a function";function Ma(a,e,r){var t=!0,n=!0;if(typeof a!="function")throw new TypeError(ya);return ja(r)&&(t="leading"in r?!!r.leading:t,n="trailing"in r?!!r.trailing:n),pa(a,e,{leading:t,maxWait:e,trailing:n})}var Oa=Ma,Pa=K.styled.div({position:"relative",maxWidth:250}),Ca=Object(K.styled)(I.x)({position:"absolute",zIndex:1,top:4,left:4}),xa=K.styled.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Da=Object(K.styled)(I.u)(function(a){var e=a.theme;return{fontFamily:e.typography.fonts.base}}),Ia=K.styled.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Ra=K.styled.div(function(a){var e=a.theme,r=a.active;return{width:16,height:16,boxShadow:r?"".concat(e.appBorderColor," 0 0 0 1px inset, ").concat(e.color.mediumdark,"50 0 0 0 4px"):"".concat(e.appBorderColor," 0 0 0 1px inset"),borderRadius:e.appBorderRadius}}),Ta=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ke=function(e){var r=e.value,t=e.active,n=e.onClick,o=e.style,s=Object(I.Yb)(e,["value","active","onClick","style"]),l="linear-gradient(".concat(r,", ").concat(r,"), ").concat(Ta,", linear-gradient(#fff, #fff)");return _.a.createElement(Ra,Object.assign({},s,{active:t,onClick:n},{style:Object.assign(Object.assign({},o),{backgroundImage:l})}))},wa=Object(K.styled)(I.g.Input)(function(a){var e=a.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base}}),La=Object(K.styled)(I.j)(function(a){var e=a.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color}}),b;(function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"})(b||(b={}));var Y=Object.values(b),Ba=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Aa=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ka=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,me=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Wa=/^\s*#?([0-9a-f]{3})\s*$/i,Ua=(H={},P(H,b.HEX,Tr),P(H,b.RGB,Kr),P(H,b.HSL,Br),H),Q=(N={},P(N,b.HEX,"transparent"),P(N,b.RGB,"rgba(0, 0, 0, 0)"),P(N,b.HSL,"hsla(0, 0%, 0%, 0)"),N),He=function(e){var r=e==null?void 0:e.match(Ba);if(!r)return[0,0,0,1];var t=L(r,5),n=t[1],o=t[2],s=t[3],l=t[4],u=l===void 0?1:l;return[n,o,s,u].map(Number)},X=function(e){var r;if(e){var t=!0;if(Aa.test(e)){var n,o=He(e),s=L(o,4),l=s[0],u=s[1],i=s[2],d=s[3],f=T.rgb.hsl([l,u,i])||[0,0,0],j=L(f,3),M=j[0],x=j[1],w=j[2];return n={valid:t,value:e,keyword:T.rgb.keyword([l,u,i]),colorSpace:b.RGB},P(n,b.RGB,e),P(n,b.HSL,"hsla(".concat(M,", ").concat(x,"%, ").concat(w,"%, ").concat(d,")")),P(n,b.HEX,"#".concat(T.rgb.hex([l,u,i]).toLowerCase())),n}if(Ka.test(e)){var p,m=He(e),g=L(m,4),E=g[0],O=g[1],D=g[2],y=g[3],B=T.hsl.rgb([E,O,D])||[0,0,0],A=L(B,3),q=A[0],Na=A[1],za=A[2];return p={valid:t,value:e,keyword:T.hsl.keyword([E,O,D]),colorSpace:b.HSL},P(p,b.RGB,"rgba(".concat(q,", ").concat(Na,", ").concat(za,", ").concat(y,")")),P(p,b.HSL,e),P(p,b.HEX,"#".concat(T.hsl.hex([E,O,D]).toLowerCase())),p}var ee=e.replace("#",""),V=T.keyword.rgb(ee)||T.hex.rgb(ee),he=T.rgb.hsl(V),U=e;if(/[^#a-f0-9]/i.test(e)?U=ee:me.test(e)&&(U="#".concat(ee)),U.startsWith("#"))t=me.test(U);else try{T.keyword.hex(U)}catch(pt){t=!1}return r={valid:t,value:U,keyword:T.rgb.keyword(V),colorSpace:b.HEX},P(r,b.RGB,"rgba(".concat(V[0],", ").concat(V[1],", ").concat(V[2],", 1)")),P(r,b.HSL,"hsla(".concat(he[0],", ").concat(he[1],"%, ").concat(he[2],"%, 1)")),P(r,b.HEX,U),r}},Sa=function(e,r,t){if(!e||!(r!=null&&r.valid))return Q[t];if(t!==b.HEX)return(r==null?void 0:r[t])||Q[t];if(!r.hex.startsWith("#"))try{return"#".concat(T.keyword.hex(r.hex))}catch(d){return Q.hex}var n=r.hex.match(Wa);if(!n)return me.test(r.hex)?r.hex:Q.hex;var o=n[1].split(""),s=L(o,3),l=s[0],u=s[1],i=s[2];return"#".concat(l).concat(l).concat(u).concat(u).concat(i).concat(i)},ka=function(e,r){var t=Object(h.useState)(e||""),n=L(t,2),o=n[0],s=n[1],l=Object(h.useState)(function(){return X(o)}),u=L(l,2),i=u[0],d=u[1],f=Object(h.useState)((i==null?void 0:i.colorSpace)||b.HEX),j=L(f,2),M=j[0],x=j[1];Object(h.useEffect)(function(){e===void 0&&(s(""),d(void 0),x(b.HEX))},[e]);var w=Object(h.useMemo)(function(){return Sa(o,i,M).toLowerCase()},[o,i,M]),p=Object(h.useCallback)(function(g){var E=X(g);s((E==null?void 0:E.value)||g||""),E&&(d(E),x(E.colorSpace),r(E.value))},[r]),m=Object(h.useCallback)(function(){var g=Y.indexOf(M)+1;g>=Y.length&&(g=0),x(Y[g]);var E=(i==null?void 0:i[Y[g]])||"";s(E),r(E)},[i,M,r]);return{value:o,realValue:w,updateValue:p,color:i,colorSpace:M,cycleColorSpace:m}},Z=function(e){return e.replace(/\s*/,"").toLowerCase()},Ha=function(e,r,t){var n=Object(h.useState)(r!=null&&r.valid?[r]:[]),o=L(n,2),s=o[0],l=o[1];Object(h.useEffect)(function(){r===void 0&&l([])},[r]);var u=Object(h.useMemo)(function(){var d=(e||[]).map(function(f){return typeof f=="string"?X(f):f.title?Object.assign(Object.assign({},X(f.color)),{keyword:f.title}):X(f.color)});return d.concat(s).filter(Boolean).slice(-27)},[e,s]),i=Object(h.useCallback)(function(d){d!=null&&d.valid&&(u.some(function(f){return Z(f[t])===Z(d[t])})||l(function(f){return f.concat(d)}))},[t,u]);return{presets:u,addPreset:i}},Ne=function(e){var r=e.name,t=e.value,n=e.onChange,o=e.onFocus,s=e.onBlur,l=e.presetColors,u=e.startOpen,i=ka(t,Oa(n,200)),d=i.value,f=i.realValue,j=i.updateValue,M=i.color,x=i.colorSpace,w=i.cycleColorSpace,p=Ha(l,M,x),m=p.presets,g=p.addPreset,E=Ua[x];return _.a.createElement(Pa,null,_.a.createElement(Ca,{trigger:"click",startOpen:u,closeOnClick:!0,onVisibilityChange:function(){return g(M)},tooltip:_.a.createElement(xa,null,_.a.createElement(E,Object.assign({color:f==="transparent"?"#000000":f},{onChange:j,onFocus:o,onBlur:s})),m.length>0&&_.a.createElement(Ia,null,m.map(function(O,D){return _.a.createElement(I.x,{key:"".concat(O.value,"-").concat(D),hasChrome:!1,tooltip:_.a.createElement(Da,{note:O.keyword||O.value})},_.a.createElement(ke,{value:O[x],active:M&&Z(O[x])===Z(M[x]),onClick:function(){return j(O.value)}}))})))},_.a.createElement(ke,{value:f,style:{margin:4}})),_.a.createElement(wa,{id:Object(I.uc)(r),value:d,onChange:function(D){return j(D.target.value)},onFocus:function(D){return D.target.select()},placeholder:"Choose color..."}),d?_.a.createElement(La,{icon:"markup",onClick:w}):null)}}}]);
