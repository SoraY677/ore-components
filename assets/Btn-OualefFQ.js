import{j as z}from"./jsx-runtime-vNq4Oc-g.js";import{_ as Ee,u as Te}from"./extends-cGC6D0nu.js";import{r as M}from"./index-4g5l5LRQ.js";function me(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Oe=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Re=me(function(e){return Oe.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function _e(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function $e(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Me=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($e(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=_e(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",K="-moz-",f="-webkit-",ge="comm",ae="rule",ie="decl",Ne="@import",ye="@keyframes",Ie="@layer",Fe=Math.abs,Z=String.fromCharCode,Le=Object.assign;function ze(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function be(e){return e.trim()}function je(e,r){return(e=r.exec(e))?e[0]:e}function l(e,r,t){return e.replace(r,t)}function re(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function H(e,r,t){return e.slice(r,t)}function R(e){return e.length}function se(e){return e.length}function V(e,r){return r.push(e),e}function He(e,r){return e.map(r).join("")}var J=1,F=1,ve=0,C=0,v=0,L="";function Q(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:J,column:F,length:s,return:""}}function j(e,r){return Le(Q("",null,null,"",null,null,0),e,{length:-e.length},r)}function We(){return v}function qe(){return v=C>0?w(L,--C):0,F--,v===10&&(F=1,J--),v}function E(){return v=C<ve?w(L,C++):0,F++,v===10&&(F=1,J++),v}function $(){return w(L,C)}function G(){return C}function B(e,r){return H(L,e,r)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xe(e){return J=F=1,ve=R(L=e),C=0,[]}function we(e){return L="",e}function X(e){return be(B(C-1,te(e===91?e+2:e===40?e+1:e)))}function Be(e){for(;(v=$())&&v<33;)E();return W(e)>2||W(v)>3?"":" "}function De(e,r){for(;--r&&E()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return B(e,G()+(r<6&&$()==32&&E()==32))}function te(e){for(;E();)switch(v){case e:return C;case 34:case 39:e!==34&&e!==39&&te(v);break;case 40:e===41&&te(e);break;case 92:E();break}return C}function Ue(e,r){for(;E()&&e+v!==57;)if(e+v===84&&$()===47)break;return"/*"+B(r,C-1)+"*"+Z(e===47?e:E())}function Ve(e){for(;!W($());)E();return B(e,C)}function Ge(e){return we(Y("",null,null,null,[""],e=xe(e),0,[0],e))}function Y(e,r,t,n,a,i,s,o,m){for(var x=0,d=0,h=s,O=0,A=0,p=0,c=1,g=1,y=1,b=0,k="",N=a,T=i,P=n,u=k;g;)switch(p=b,b=E()){case 40:if(p!=108&&w(u,h-1)==58){re(u+=l(X(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:u+=X(b);break;case 9:case 10:case 13:case 32:u+=Be(p);break;case 92:u+=De(G()-1,7);continue;case 47:switch($()){case 42:case 47:V(Xe(Ue(E(),G()),r,t),m);break;default:u+="/"}break;case 123*c:o[x++]=R(u)*y;case 125*c:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+d:y==-1&&(u=l(u,/\f/g,"")),A>0&&R(u)-h&&V(A>32?ce(u+";",n,t,h-1):ce(l(u," ","")+";",n,t,h-2),m);break;case 59:u+=";";default:if(V(P=oe(u,r,t,x,d,a,o,k,N=[],T=[],h),i),b===123)if(d===0)Y(u,r,P,P,N,i,h,o,T);else switch(O===99&&w(u,3)===110?100:O){case 100:case 108:case 109:case 115:Y(e,P,P,n&&V(oe(e,P,P,0,0,a,o,k,a,N=[],h),T),a,T,h,o,n?N:T);break;default:Y(u,P,P,P,[""],T,0,o,T)}}x=d=A=0,c=y=1,k=u="",h=s;break;case 58:h=1+R(u),A=p;default:if(c<1){if(b==123)--c;else if(b==125&&c++==0&&qe()==125)continue}switch(u+=Z(b),b*c){case 38:y=d>0?1:(u+="\f",-1);break;case 44:o[x++]=(R(u)-1)*y,y=1;break;case 64:$()===45&&(u+=X(E())),O=$(),d=h=R(k=u+=Ve(G())),b++;break;case 45:p===45&&R(u)==2&&(c=0)}}return i}function oe(e,r,t,n,a,i,s,o,m,x,d){for(var h=a-1,O=a===0?i:[""],A=se(O),p=0,c=0,g=0;p<n;++p)for(var y=0,b=H(e,h+1,h=Fe(c=s[p])),k=e;y<A;++y)(k=be(c>0?O[y]+" "+b:l(b,/&\f/g,O[y])))&&(m[g++]=k);return Q(e,r,t,a===0?ae:o,m,x,d)}function Xe(e,r,t){return Q(e,r,t,ge,Z(We()),H(e,2,-2),0)}function ce(e,r,t,n){return Q(e,r,t,ie,H(e,0,n),H(e,n+1,-1),n)}function I(e,r){for(var t="",n=se(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Ye(e,r,t,n){switch(e.type){case Ie:if(e.children.length)break;case Ne:case ie:return e.return=e.return||e.value;case ge:return"";case ye:return e.return=e.value+"{"+I(e.children,n)+"}";case ae:e.value=e.props.join(",")}return R(t=I(e.children,n))?e.return=e.value+"{"+t+"}":""}function Ke(e){var r=se(e);return function(t,n,a,i){for(var s="",o=0;o<r;o++)s+=e[o](t,n,a,i)||"";return s}}function Ze(e){return function(r){r.root||(r=r.return)&&e(r)}}var Je=function(r,t,n){for(var a=0,i=0;a=i,i=$(),a===38&&i===12&&(t[n]=1),!W(i);)E();return B(r,C)},Qe=function(r,t){var n=-1,a=44;do switch(W(a)){case 0:a===38&&$()===12&&(t[n]=1),r[n]+=Je(C-1,t,n);break;case 2:r[n]+=X(a);break;case 4:if(a===44){r[++n]=$()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Z(a)}while(a=E());return r},er=function(r,t){return we(Qe(xe(r),t))},fe=new WeakMap,rr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!fe.get(n))&&!a){fe.set(r,!0);for(var i=[],s=er(t,i),o=n.props,m=0,x=0;m<s.length;m++)for(var d=0;d<o.length;d++,x++)r.props[x]=i[m]?s[m].replace(/&\f/g,o[d]):o[d]+" "+s[m]}}},tr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function ke(e,r){switch(ze(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+K+e+S+e+e;case 6828:case 4268:return f+e+S+e+e;case 6165:return f+e+S+"flex-"+e+e;case 5187:return f+e+l(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return f+e+S+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return f+e+S+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+S+l(e,"shrink","negative")+e;case 5292:return f+e+S+l(e,"basis","preferred-size")+e;case 6060:return f+"box-"+l(e,"-grow","")+f+e+S+l(e,"grow","positive")+e;case 4554:return f+l(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+K+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~re(e,"stretch")?ke(l(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,R(e)-3-(~re(e,"!important")&&10))){case 107:return l(e,":",":"+f)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(w(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return f+e+S+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+S+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+S+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+S+e+e}return e}var nr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ie:r.return=ke(r.value,r.length);break;case ye:return I([j(r,{value:l(r.value,"@","@"+f)})],a);case ae:if(r.length)return He(r.props,function(i){switch(je(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return I([j(r,{props:[l(i,/:(read-\w+)/,":"+K+"$1")]})],a);case"::placeholder":return I([j(r,{props:[l(i,/:(plac\w+)/,":"+f+"input-$1")]}),j(r,{props:[l(i,/:(plac\w+)/,":"+K+"$1")]}),j(r,{props:[l(i,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},ar=[nr],ir=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(c){var g=c.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var a=r.stylisPlugins||ar,i={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(c){for(var g=c.getAttribute("data-emotion").split(" "),y=1;y<g.length;y++)i[g[y]]=!0;o.push(c)});var m,x=[rr,tr];{var d,h=[Ye,Ze(function(c){d.insert(c)})],O=Ke(x.concat(a,h)),A=function(g){return I(Ge(g),O)};m=function(g,y,b,k){d=b,A(g?g+"{"+y.styles+"}":y.styles),k&&(p.inserted[y.name]=!0)}}var p={key:t,sheet:new Me({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:m};return p.sheet.hydrate(o),p},sr=!0;function or(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Se=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||sr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},cr=function(r,t,n){Se(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function fr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var lr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur=/[A-Z]|^ms/g,dr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ce=function(r){return r.charCodeAt(1)===45},le=function(r){return r!=null&&typeof r!="boolean"},ee=me(function(e){return Ce(e)?e:e.replace(ur,"-$&").toLowerCase()}),ue=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(dr,function(n,a,i){return _={name:a,styles:i,next:_},a})}return lr[r]!==1&&!Ce(r)&&typeof t=="number"&&t!==0?t+"px":t};function q(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return _={name:t.name,styles:t.styles,next:_},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)_={name:n.name,styles:n.styles,next:_},n=n.next;var a=t.styles+";";return a}return hr(e,r,t)}case"function":{if(e!==void 0){var i=_,s=t(e);return _=i,q(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function hr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=q(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=i+"{"+r[s]+"}":le(s)&&(n+=ee(i)+":"+ue(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)le(s[o])&&(n+=ee(i)+":"+ue(i,s[o])+";");else{var m=q(e,r,s);switch(i){case"animation":case"animationName":{n+=ee(i)+":"+m+";";break}default:n+=i+"{"+m+"}"}}}return n}var de=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_,pr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";_=void 0;var s=r[0];s==null||s.raw===void 0?(a=!1,i+=q(n,t,s)):i+=s[0];for(var o=1;o<r.length;o++)i+=q(n,t,r[o]),a&&(i+=s[o]);de.lastIndex=0;for(var m="",x;(x=de.exec(i))!==null;)m+="-"+x[1];var d=fr(i)+m;return{name:d,styles:i,next:_}},Ae=M.createContext(typeof HTMLElement<"u"?ir({key:"css"}):null);Ae.Provider;var mr=function(r){return M.forwardRef(function(t,n){var a=M.useContext(Ae);return r(t,a,n)})},gr=M.createContext({}),yr=Re,br=function(r){return r!=="theme"},he=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?yr:br},pe=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},vr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Se(t,n,a),Te(function(){return cr(t,n,a)}),null},xr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var o=pe(r,t,n),m=o||he(a),x=!m("as");return function(){var d=arguments,h=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)h.push.apply(h,d);else{h.push(d[0][0]);for(var O=d.length,A=1;A<O;A++)h.push(d[A],d[0][A])}var p=mr(function(c,g,y){var b=x&&c.as||a,k="",N=[],T=c;if(c.theme==null){T={};for(var P in c)T[P]=c[P];T.theme=M.useContext(gr)}typeof c.className=="string"?k=or(g.registered,N,c.className):c.className!=null&&(k=c.className+" ");var u=pr(h.concat(N),g.registered,T);k+=g.key+"-"+u.name,s!==void 0&&(k+=" "+s);var Pe=x&&o===void 0?he(b):m,D={};for(var U in c)x&&U==="as"||Pe(U)&&(D[U]=c[U]);return D.className=k,D.ref=y,M.createElement(M.Fragment,null,M.createElement(vr,{cache:g,serialized:u,isStringTag:typeof b=="string"}),M.createElement(b,D))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=h,p.__emotion_forwardProp=o,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(c,g){return e(c,Ee({},t,g,{shouldForwardProp:pe(p,g,!0)})).apply(void 0,h)},p}},wr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ne=xr.bind();wr.forEach(function(e){ne[e]=ne(e)});const kr=ne.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  border: none;
  background-color: black;
  box-shadow: 0px 5px 5px grey;
  font-size: 10px;
`,Sr=({isNazotte:e=!1,onClick:r})=>z.jsx(z.Fragment,{children:z.jsx(kr,{onClick:r,children:e?z.jsx("p",{children:"やめる"}):z.jsx("p",{children:"なぞる"})})});Sr.__docgenInfo={description:"なぞって機能のスイッチングボタン",methods:[],displayName:"Btn",props:{isNazotte:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{Sr as B,ne as n};
