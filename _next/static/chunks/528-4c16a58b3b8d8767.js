"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{88068:(e,r,o)=>{o.d(r,{s:()=>s,t:()=>l});var t=o(12115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let o=!1,t=e.map(e=>{let t=n(e,r);return o||"function"!=typeof t||(o=!0),t});if(o)return()=>{for(let r=0;r<t.length;r++){let o=t[r];"function"==typeof o?o():n(e[r],null)}}}}function s(...e){return t.useCallback(l(...e),e)}},43463:(e,r,o)=>{o.d(r,{$:()=>t});function t(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(o=0;o<l;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(t&&(t+=" "),t+=r);return t}},14057:(e,r,o)=>{o.d(r,{A:()=>i});var t=o(12115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return r.filter((e,r,o)=>!!e&&""!==e.trim()&&o.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,t.forwardRef)((e,r)=>{let{color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:d="",children:c,iconNode:p,...u}=e;return(0,t.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:o,strokeWidth:i?24*Number(a)/Number(n):a,className:l("lucide",d),...u},[...p.map(e=>{let[r,o]=e;return(0,t.createElement)(r,o)}),...Array.isArray(c)?c:[c]])}),i=(e,r)=>{let o=(0,t.forwardRef)((o,s)=>{let{className:i,...d}=o;return(0,t.createElement)(a,{ref:s,iconNode:r,className:l("lucide-".concat(n(e)),i),...d})});return o.displayName="".concat(e),o}},69795:(e,r,o)=>{o.d(r,{QP:()=>K});let t=e=>{let r=a(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let o=e[0],t=r.nextPart.get(o),l=t?n(e.slice(1),t):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},a=e=>{let{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return p(Object.entries(e.classGroups),o).forEach(([e,o])=>{i(o,t,e,r)}),t},i=(e,r,o,t)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=o;return}if("function"==typeof e){if(c(e)){i(e(t),r,o,t);return}r.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(([e,n])=>{i(n,d(r,e),o,t)})})},d=(e,r)=>{let o=e;return r.split("-").forEach(e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o},c=e=>e.isThemeGetter,p=(e,r)=>r?e.map(([e,o])=>[e,o.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,o])=>[r+e,o])):e)]):e,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map,n=(n,l)=>{o.set(n,l),++r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},b=e=>{let{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],l=r.length,s=e=>{let o;let s=[],a=0,i=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(t||e.slice(d,d+l)===r)){s.push(e.slice(i,d)),i=d+l;continue}if("/"===c){o=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===s.length?e:e.substring(i),c=d.startsWith("!"),p=c?d.substring(1):d;return{modifiers:s,hasImportantModifier:c,baseClassName:p,maybePostfixModifierPosition:o&&o>i?o-i:void 0}};return o?e=>o({className:e,parseClassName:s}):s},f=e=>{if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r},m=e=>({cache:u(e.cacheSize),parseClassName:b(e),...t(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),a="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:i,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:p}=o(r),u=!!p,b=t(u?c.substring(0,p):c);if(!b){if(!u||!(b=t(c))){a=r+(a.length>0?" "+a:a);continue}u=!1}let m=f(i).join(":"),g=d?m+"!":m,h=g+b;if(l.includes(h))continue;l.push(h);let y=n(b,u);for(let e=0;e<y.length;++e){let r=y[e];l.push(g+r)}a=r+(a.length>0?" "+a:a)}return a};function y(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=x(e))&&(t&&(t+=" "),t+=r);return t}let x=e=>{let r;if("string"==typeof e)return e;let o="";for(let t=0;t<e.length;t++)e[t]&&(r=x(e[t]))&&(o&&(o+=" "),o+=r);return o},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},v=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,N=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,S=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,E=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,G=e=>$(e)||z.has(e)||k.test(e),P=e=>Z(e,"length",D),$=e=>!!e&&!Number.isNaN(Number(e)),A=e=>Z(e,"number",$),M=e=>!!e&&Number.isInteger(Number(e)),I=e=>e.endsWith("%")&&$(e.slice(0,-1)),O=e=>v.test(e),R=e=>j.test(e),W=new Set(["length","size","percentage"]),_=e=>Z(e,W,F),L=e=>Z(e,"position",F),T=new Set(["image","url"]),q=e=>Z(e,T,J),B=e=>Z(e,"",H),Q=()=>!0,Z=(e,r,o)=>{let t=v.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))},D=e=>C.test(e)&&!N.test(e),F=()=>!1,H=e=>S.test(e),J=e=>E.test(e);Symbol.toStringTag;let K=function(e,...r){let o,t,n;let l=function(a){return t=(o=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=o.cache.set,l=s,s(a)};function s(e){let r=t(e);if(r)return r;let l=h(e,o);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),o=w("blur"),t=w("brightness"),n=w("borderColor"),l=w("borderRadius"),s=w("borderSpacing"),a=w("borderWidth"),i=w("contrast"),d=w("grayscale"),c=w("hueRotate"),p=w("invert"),u=w("gap"),b=w("gradientColorStops"),f=w("gradientColorStopPositions"),m=w("inset"),g=w("margin"),h=w("opacity"),y=w("padding"),x=w("saturate"),v=w("scale"),k=w("sepia"),z=w("skew"),j=w("space"),C=w("translate"),N=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto",O,r],W=()=>[O,r],T=()=>["",G,P],Z=()=>["auto",$,O],D=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],F=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>["start","end","center","between","around","evenly","stretch"],K=()=>["","0",O],U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[$,O];return{cacheSize:500,separator:":",theme:{colors:[Q],spacing:[G,P],blur:["none","",R,O],brightness:V(),borderColor:[e],borderRadius:["none","","full",R,O],borderSpacing:W(),borderWidth:T(),contrast:V(),grayscale:K(),hueRotate:V(),invert:K(),gap:W(),gradientColorStops:[e],gradientColorStopPositions:[I,P],inset:E(),margin:E(),opacity:V(),padding:W(),saturate:V(),scale:V(),sepia:K(),skew:V(),space:W(),translate:W()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[R]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...D(),O]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",M,O]}],basis:[{basis:E()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:K()}],shrink:[{shrink:K()}],order:[{order:["first","last","none",M,O]}],"grid-cols":[{"grid-cols":[Q]}],"col-start-end":[{col:["auto",{span:["full",M,O]},O]}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":[Q]}],"row-start-end":[{row:["auto",{span:[M,O]},O]}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...J()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...J(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...J(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,r]}],"min-w":[{"min-w":[O,r,"min","max","fit"]}],"max-w":[{"max-w":[O,r,"none","full","min","max","fit","prose",{screen:[R]},R]}],h:[{h:[O,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,r,"auto","min","max","fit"]}],"font-size":[{text:["base",R,P]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",A]}],"font-family":[{font:[Q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",$,A]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",G,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...F(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",G,P]}],"underline-offset":[{"underline-offset":["auto",G,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...D(),L]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},q]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...F(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:F()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...F()]}],"outline-offset":[{"outline-offset":[G,O]}],"outline-w":[{outline:[G,P]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:T()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[G,P]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",R,B]}],"shadow-color":[{shadow:[Q]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",R,O]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[M,O]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[G,P,A]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);