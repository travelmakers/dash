(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,T,e){"use strict";e.r(T);var M={};e.r(M),e.d(M,"parameters",function(){return l}),e.d(M,"decorators",function(){return h});var J=e("./node_modules/core-js/modules/es.object.keys.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.array.filter.js"),C=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),N=e("./node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),W=e("./node_modules/core-js/modules/es.object.define-properties.js"),V=e("./node_modules/core-js/modules/es.object.define-property.js"),w=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),R=e("./node_modules/core-js/modules/es.array.is-array.js"),s=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ne=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.slice.js"),se=e("./node_modules/core-js/modules/es.function.name.js"),ve=e("./node_modules/core-js/modules/es.array.from.js"),me=e("./node_modules/react/index.js"),ae=e("./node_modules/react/jsx-runtime.js");function de(y,j){return ee(y)||$(y,j)||le(y,j)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(y,j){if(y){if(typeof y=="string")return te(y,j);var E=Object.prototype.toString.call(y).slice(8,-1);if(E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set")return Array.from(y);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return te(y,j)}}function te(y,j){(j==null||j>y.length)&&(j=y.length);for(var E=0,v=new Array(j);E<j;E++)v[E]=y[E];return v}function $(y,j){var E=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(E!=null){var v,u,o,O,P=[],_=!0,L=!1;try{if(o=(E=E.call(y)).next,j===0){if(Object(E)!==E)return;_=!1}else for(;!(_=(v=o.call(E)).done)&&(P.push(v.value),P.length!==j);_=!0);}catch(x){L=!0,u=x}finally{try{if(!_&&E.return!=null&&(O=E.return(),Object(O)!==O))return}finally{if(L)throw u}}return P}}function ee(y){if(Array.isArray(y))return y}var re=Object(me.createContext)(null),ye=function(){var j=Object(me.useContext)(re);if(!j)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return j},K=function(j){var E=j.colorScheme,v=j.toggleColorScheme,u=j.children,o=Object(me.useState)("init"),O=de(o,2),P=O[0],_=O[1];return Object(me.useEffect)(function(){_("update")},[]),Object(ae.jsx)(re.Provider,{value:{colorScheme:E,toggleColorScheme:v},children:u},P)};K.displayName="ColorSchemeProvider",K.displayName="@travelmakers-design-v2/styles/ColorSchemeProvider";var p=e("./packages/travelmakers-design-v2-styles/src/theme/TmProvider.tsx"),i=e("./node_modules/@storybook/theming/dist/esm/index.js"),f=e("./node_modules/storybook-dark-mode/dist/index.js"),l={layout:"fullscreen",docs:{theme:i.themes.light},darkMode:{current:"dark"}};function g(y){var j=Object(f.useDarkMode)()?"dark":"light";return Object(ae.jsx)(K,{colorScheme:j,toggleColorScheme:function(){},children:Object(ae.jsx)(p.a,{theme:{colorScheme:j},withGlobalStyles:!0,withNormalizeCSS:!0,children:y.children})})}g.displayName="ThemeWrapper";var h=[function(y){return Object(ae.jsx)(g,{children:y()})}];function d(y,j){var E=Object.keys(y);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(y);j&&(v=v.filter(function(u){return Object.getOwnPropertyDescriptor(y,u).enumerable})),E.push.apply(E,v)}return E}function b(y){for(var j=1;j<arguments.length;j++){var E=arguments[j]!=null?arguments[j]:{};j%2?d(Object(E),!0).forEach(function(v){c(y,v,E[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(E)):d(Object(E)).forEach(function(v){Object.defineProperty(y,v,Object.getOwnPropertyDescriptor(E,v))})}return y}function c(y,j,E){return j in y?Object.defineProperty(y,j,{value:E,enumerable:!0,configurable:!0,writable:!0}):y[j]=E,y}Object.keys(M).forEach(function(y){var j=M[y];switch(y){case"args":return Object(w.d)(j);case"argTypes":return Object(w.b)(j);case"decorators":return j.forEach(function(v){return Object(w.f)(v,!1)});case"loaders":return j.forEach(function(v){return Object(w.g)(v,!1)});case"parameters":return Object(w.h)(b({},j),!1);case"argTypesEnhancers":return j.forEach(function(v){return Object(w.c)(v)});case"argsEnhancers":return j.forEach(function(v){return Object(w.e)(v)});case"render":return Object(w.i)(j);case"globals":case"globalTypes":{var E={};return E[y]=j,Object(w.h)(E,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(y+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,T,e){"use strict";(function(M){var J=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,J.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],M,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,T,e){var M={"./travelmakers-design-v2-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-v2-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-v2-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-v2-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-v2-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-v2-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-v2-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-v2-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-v2-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-v2-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-v2-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-v2-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-v2-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-v2-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./travelmakers-design-v2-utils/src/getDate/stories/getDate.stories.tsx":"./packages/travelmakers-design-v2-utils/src/getDate/stories/getDate.stories.tsx","./travelmakers-design-v2-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":"./packages/travelmakers-design-v2-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx","./travelmakers-design-v2-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":"./packages/travelmakers-design-v2-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx","./travelmakers-design-v2-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":"./packages/travelmakers-design-v2-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx","./travelmakers-design-v2-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":"./packages/travelmakers-design-v2-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx"};function J(F){var C=D(F);return e(C)}function D(F){if(!e.o(M,F)){var C=new Error("Cannot find module '"+F+"'");throw C.code="MODULE_NOT_FOUND",C}return M[F]}J.keys=function(){return Object.keys(M)},J.resolve=D,oe.exports=J,J.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-v2-core/src/components/Typography/stories/Typography.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return v});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./node_modules/react/index.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),C=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.string.italics.js"),Q=e("./packages/travelmakers-design-v2-styles/src/theme/TmProvider.tsx"),W=e("./packages/travelmakers-design-v2-core/src/components/View/View.tsx"),V=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.array.map.js"),R=e("./node_modules/core-js/modules/es.array.for-each.js"),s=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),n=e("./node_modules/core-js/modules/es.array.is-array.js"),t=e("./node_modules/core-js/modules/es.symbol.description.js"),ne=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),se=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ve=e("./node_modules/core-js/modules/es.array.slice.js"),me=e("./node_modules/core-js/modules/es.array.from.js");function ae(u,o){return $(u)||te(u,o)||U(u,o)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(u,o){if(u){if(typeof u=="string")return le(u,o);var O=Object.prototype.toString.call(u).slice(8,-1);if(O==="Object"&&u.constructor&&(O=u.constructor.name),O==="Map"||O==="Set")return Array.from(u);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return le(u,o)}}function le(u,o){(o==null||o>u.length)&&(o=u.length);for(var O=0,P=new Array(o);O<o;O++)P[O]=u[O];return P}function te(u,o){var O=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(O!=null){var P,_,L,x,A=[],H=!0,Y=!1;try{if(L=(O=O.call(u)).next,o===0){if(Object(O)!==O)return;H=!1}else for(;!(H=(P=L.call(O)).done)&&(A.push(P.value),A.length!==o);H=!0);}catch(ce){Y=!0,_=ce}finally{try{if(!H&&O.return!=null&&(x=O.return(),Object(x)!==x))return}finally{if(Y)throw _}}return A}}function $(u){if(Array.isArray(u))return u}function ee(u){var o={};return Object.keys(u).forEach(function(O){var P=ae(u[O],2),_=P[0],L=P[1];o[_]=L}),o}var re=e("./node_modules/core-js/modules/es.array.reduce.js");function ye(u,o,O){return Object.keys(o).reduce(function(P,_){return P[_]=u(o[_],O?"tm-"+O+"-"+_:null),P},{})}var K=e("./packages/travelmakers-design-v2-styles/src/tss/useCss.ts");function p(u){var o=typeof u=="function"?u:function(){return u};function O(P,_){var L=Object(Q.c)(),x=Object(Q.d)()[_==null?void 0:_.name],A=Object(K.a)(),H=A.css,Y=A.cx,ce=A.cssRn,ie=0;function q(ge){return ie+=1,"tm-ref_"+(ge||"")+"_"+ie}var fe=o(L,P,q),Te=typeof(_==null?void 0:_.overrideStyles)=="function"?_==null?void 0:_.overrideStyles(L):(_==null?void 0:_.overrideStyles)||{},be=typeof x=="function"?x(L):x||{},he=typeof(_==null?void 0:_.tm)=="function"?_.tm(L):_==null?void 0:_.tm,Ce=ee(Object.keys(fe).map(function(ge){var je=Y(H(fe[ge]),H(be[ge]),H(Te[ge]),H(he));return[ge,je]}));return{classes:ye(Y,Ce,_==null?void 0:_.name),cx:Y,theme:L}}return O}var i=function(o){return{display1:{lineHeight:o.lineHeights.display1+"px",fontSize:o.fontSizes.display1},display2:{lineHeight:o.lineHeights.display2+"px",fontSize:o.fontSizes.display2},display3:{lineHeight:o.lineHeights.display3+"px",fontSize:o.fontSizes.display3},display4:{lineHeight:o.lineHeights.display4+"px",fontSize:o.fontSizes.display4},display5:{lineHeight:o.lineHeights.display5+"px",fontSize:o.fontSizes.display5},display6:{lineHeight:o.lineHeights.display6+"px",fontSize:o.fontSizes.display6},subhead1:{lineHeight:o.lineHeights.subhead1+"px",fontSize:o.fontSizes.subhead1},subhead2:{lineHeight:o.lineHeights.subhead2+"px",fontSize:o.fontSizes.subhead2},body1:{lineHeight:o.lineHeights.body1+"px",fontSize:o.fontSizes.body1},body2:{lineHeight:o.lineHeights.body2+"px",fontSize:o.fontSizes.body2},body3:{lineHeight:o.lineHeights.body3+"px",fontSize:o.fontSizes.body3},caption:{lineHeight:o.lineHeights.caption+"px",fontSize:o.fontSizes.caption}}},f=function(o){return o!=="Pretendard"?{font:{fontFamily:o+", var("+(o==="Noto Serif KR"&&"--font-noto-serif")+")"}}:{font:{}}},l=p(function(u,o,O){var P,_=o.family,L=o.level,x=o.textAlign,A=o.disabled,H=o.strong,Y=o.italic,ce=o.underline,ie=o.color,q=o.mobile,fe=o.tablet;return{solid:{fontWeight:H?_==="Noto Serif KR"?600:700:400,fontStyle:Y?"italic":"normal",textDecoration:ce?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},i(u)[L],f(_).font,(P={color:A?u.colors.primary4:ie||u.colors.black,textAlign:""+x},P[""+u.media.mobile]=Object.assign({},i(u)[q]),P[""+u.media.tablet]=Object.assign({},i(u)[fe]),P))}}),g=e("./node_modules/react/jsx-runtime.js"),h=["id","children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","tm","overrideStyles"];function d(u,o){if(u==null)return{};var O=b(u,o),P,_;if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(u);for(_=0;_<L.length;_++)P=L[_],!(o.indexOf(P)>=0)&&Object.prototype.propertyIsEnumerable.call(u,P)&&(O[P]=u[P])}return O}function b(u,o){if(u==null)return{};var O={},P=Object.keys(u),_,L;for(L=0;L<P.length;L++)_=P[L],!(o.indexOf(_)>=0)&&(O[_]=u[_]);return O}var c=Object(D.forwardRef)(function(u,o){var O=u.id,P=u.children,_=u.component,L=u.family,x=L===void 0?"Pretendard":L,A=u.level,H=A===void 0?"body1":A,Y=u.mobileLevel,ce=u.tabletLevel,ie=u.textAlign,q=ie===void 0?"left":ie,fe=u.disabled,Te=fe===void 0?!1:fe,be=u.strong,he=be===void 0?!1:be,Ce=u.italic,ge=Ce===void 0?!1:Ce,je=u.underline,Le=je===void 0?!1:je,Ee=u.color,xe=u.className,Ie=u.tm,ke=u.overrideStyles,Se=d(u,h),Me=Object(Q.c)(),Fe=l({family:x,level:H,disabled:Te,strong:he,italic:ge,underline:Le,textAlign:q,color:Ee,mobile:Y,tablet:ce},{overrideStyles:ke,name:"typography"}),Ae=Fe.classes,Be=Fe.cx;return Object(g.jsx)(W.a,Object.assign({component:_||"span",ref:o,disabled:Te,className:Be(Ae.root,Ae.solid,xe),tm:Ie,onTouchStart:function(){}},Se,{children:P}))});c.displayName="Typography";var y=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"body1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Pretendard\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":170},"endLoc":{"col":1,"line":211},"startBody":{"col":23,"line":170},"endBody":{"col":1,"line":211}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import React from "react";
import { Typography } from "../Typography";

export default {
  title: "@travelmakers-design-v2/core/General/Typography",
  component: Typography,
  argTypes: {
    level: {
      defaultValue: "body1",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    family: {
      defaultValue: "Pretendard",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    textAlign: {
      defaultValue: "left",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    italic: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    underline: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    mobileLevel: {
      defaultValue: "",
      description: "mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    tabletLevel: {
      defaultValue: "",
      description: "tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography {...props} level={"display1"}>
        display1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display2"}>
        display2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display3"}>
        display3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display4"}>
        display4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display5"}>
        display5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display6"}>
        display6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead1"}>
        subhead1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead2"}>
        subhead2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body1"}>
        body1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body2"}>
        body2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body3"}>
        body3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:178},endLoc:{col:1,line:219},startBody:{col:23,line:178},endBody:{col:1,line:219}}},y=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import React from "react";
import { Typography } from "../Typography";

export default {
  title: "@travelmakers-design-v2/core/General/Typography",
  component: Typography,
  argTypes: {
    level: {
      defaultValue: "body1",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    family: {
      defaultValue: "Pretendard",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    textAlign: {
      defaultValue: "left",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    italic: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    underline: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    mobileLevel: {
      defaultValue: "",
      description: "mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    tabletLevel: {
      defaultValue: "",
      description: "tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography {...props} level={"display1"}>
        display1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display2"}>
        display2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display3"}>
        display3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display4"}>
        display4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display5"}>
        display5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display6"}>
        display6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead1"}>
        subhead1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead2"}>
        subhead2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body1"}>
        body1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body2"}>
        body2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body3"}>
        body3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </div>
  );
};
`,j={Default:{startLoc:{col:23,line:170},endLoc:{col:1,line:211},startBody:{col:23,line:170},endBody:{col:1,line:211}}},E=T.default={title:"@travelmakers-design-v2/core/General/Typography",component:c,argTypes:{level:{defaultValue:"body1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"body1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Pretendard\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":170},"endLoc":{"col":1,"line":211},"startBody":{"col":23,"line":170},"endBody":{"col":1,"line":211}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import React from "react";
import { Typography } from "../Typography";

export default {
  title: "@travelmakers-design-v2/core/General/Typography",
  component: Typography,
  argTypes: {
    level: {
      defaultValue: "body1",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    family: {
      defaultValue: "Pretendard",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    textAlign: {
      defaultValue: "left",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    italic: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    underline: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    mobileLevel: {
      defaultValue: "",
      description: "mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    tabletLevel: {
      defaultValue: "",
      description: "tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "display6",
        "subhead1",
        "subhead2",
        "body1",
        "body2",
        "body3",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography {...props} level={"display1"}>
        display1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display2"}>
        display2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display3"}>
        display3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display4"}>
        display4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display5"}>
        display5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display6"}>
        display6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead1"}>
        subhead1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead2"}>
        subhead2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body1"}>
        body1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body2"}>
        body2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body3"}>
        body3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:178},endLoc:{col:1,line:219},startBody:{col:23,line:178},endBody:{col:1,line:219}}}},docs:{page:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(J.g,{}),Object(g.jsx)(J.f,{}),Object(g.jsx)(J.b,{}),Object(g.jsx)(J.d,{}),Object(g.jsx)(J.a,{story:J.c}),Object(g.jsx)(J.e,{})]})}}}},v=function(o){return Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(g.jsx)(c,Object.assign({},o,{level:"display1",children:"display1. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"display2",children:"display2. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"display3",children:"display3. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"display4",children:"display4. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"display5",children:"display5. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"display6",children:"display6. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"subhead1",children:"subhead1. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"subhead2",children:"subhead2. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"body1",children:"body1. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"body2",children:"body2. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"body3",children:"body3. Travelmakers Design"})),Object(g.jsx)(c,Object.assign({},o,{level:"caption",children:"caption. Travelmakers Design"}))]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography {...props} level={"display1"}>
        display1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display2"}>
        display2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display3"}>
        display3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display4"}>
        display4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display5"}>
        display5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"display6"}>
        display6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead1"}>
        subhead1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"subhead2"}>
        subhead2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body1"}>
        body1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body2"}>
        body2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"body3"}>
        body3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </div>
  );
}`}},v.parameters)},"./packages/travelmakers-design-v2-core/src/components/View/View.tsx":function(oe,T,e){"use strict";e.d(T,"a",function(){return de});var M=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(M),D=e("./node_modules/core-js/modules/es.array.map.js"),F=e.n(D),C=e("./node_modules/core-js/modules/es.object.assign.js"),N=e.n(C),z=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e.n(z),W=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e.n(W),w=e("./node_modules/core-js/modules/es.symbol.js"),R=e.n(w),s=e("./packages/travelmakers-design-v2-styles/src/tss/useCss.ts"),n=e("./packages/travelmakers-design-v2-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/react/index.js"),ne=e.n(t),G=e("./node_modules/react/jsx-runtime.js"),X=e.n(G),Z=["component","className","style","co"];function se(U,le){if(U==null)return{};var te=ve(U,le),$,ee;if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(U);for(ee=0;ee<re.length;ee++)$=re[ee],!(le.indexOf($)>=0)&&Object.prototype.propertyIsEnumerable.call(U,$)&&(te[$]=U[$])}return te}function ve(U,le){if(U==null)return{};var te={},$=Object.keys(U),ee,re;for(re=0;re<$.length;re++)ee=$[re],!(le.indexOf(ee)>=0)&&(te[ee]=U[ee]);return te}function me(U,le){return typeof U=="function"?U(le):U}function ae(U,le){var te=Object(s.a)(),$=te.css,ee=te.cx,re=Object(n.c)();return Array.isArray(U)?ee(le,U.map(function(ye){return $(me(ye,re))})):ee(le,$(me(U,re)))}var de=Object(t.forwardRef)(function(U,le){var te=U.component,$=U.className,ee=U.style,re=U.co,ye=se(U,Z),K=te||"div";return Object(G.jsx)(K,Object.assign({ref:le,className:ae(re,$),style:ee},ye))});de.displayName="@travelmakers-design-v2/core/View"},"./packages/travelmakers-design-v2-core/src/components/View/stories/View.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return V});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(M),D=e("./node_modules/react/index.js"),F=e.n(D),C=e("./packages/travelmakers-design-v2-core/src/components/View/View.tsx"),N=e("./node_modules/react/jsx-runtime.js"),z=e.n(N),Q=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design-v2/core/General/View",
  component: View,
};

export const Default = () => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},Q=`import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design-v2/core/General/View",
  component: View,
};

export const Default = () => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
};
`,W={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { View } from "../View";

export default {
  title: "@travelmakers-design-v2/core/General/View",
  component: View,
};

export const Default = () => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/core/General/View",component:C.a};var V=function(){return Object(N.jsx)(C.a,{co:function(s){return{width:100,height:100,backgroundColor:s.colors.gray3}}})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},V.parameters)},"./packages/travelmakers-design-v2-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return C});var M=e("./node_modules/core-js/modules/es.array.concat.js"),J=e.n(M),D=e("./node_modules/react/index.js"),F=e.n(D),C=function(z){var Q=Object(D.useRef)(z);return Object(D.useEffect)(function(){Q.current=z},[z]),Object(D.useMemo)(function(){return function(){for(var W,V=arguments.length,w=new Array(V),R=0;R<V;R++)w[R]=arguments[R];return(W=Q.current)===null||W===void 0?void 0:W.call.apply(W,[Q].concat(w))}},[])}},"./packages/travelmakers-design-v2-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return K});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/react/index.js"),n=e("./node_modules/core-js/modules/web.timers.js");function t(p,i){return se(p)||Z(p,i)||G(p,i)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(p,i){if(p){if(typeof p=="string")return X(p,i);var f=Object.prototype.toString.call(p).slice(8,-1);if(f==="Object"&&p.constructor&&(f=p.constructor.name),f==="Map"||f==="Set")return Array.from(p);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return X(p,i)}}function X(p,i){(i==null||i>p.length)&&(i=p.length);for(var f=0,l=new Array(i);f<i;f++)l[f]=p[f];return l}function Z(p,i){var f=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(f!=null){var l,g,h,d,b=[],c=!0,y=!1;try{if(h=(f=f.call(p)).next,i===0){if(Object(f)!==f)return;c=!1}else for(;!(c=(l=h.call(f)).done)&&(b.push(l.value),b.length!==i);c=!0);}catch(j){y=!0,g=j}finally{try{if(!c&&f.return!=null&&(d=f.return(),Object(d)!==d))return}finally{if(y)throw g}}return b}}function se(p){if(Array.isArray(p))return p}var ve=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=i.timeout,l=f===void 0?2e3:f,g=Object(s.useState)(null),h=t(g,2),d=h[0],b=h[1],c=Object(s.useState)(!1),y=t(c,2),j=y[0],E=y[1],v=Object(s.useState)(null),u=t(v,2),o=u[0],O=u[1],P=function(A){clearTimeout(o),O(setTimeout(function(){return E(!1)},l)),E(A)},_=function(A){"clipboard"in navigator?navigator.clipboard.writeText(A).then(function(){return P(!0)}).catch(function(H){return b(H)}):b(new Error("useClipboard: navigator.clipboard is not supported"))},L=function(){E(!1),b(null),clearTimeout(o)};return{copy:_,reset:L,error:d,copied:j}},me=e("./node_modules/react/jsx-runtime.js");function ae(p,i){return $(p)||te(p,i)||U(p,i)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(p,i){if(p){if(typeof p=="string")return le(p,i);var f=Object.prototype.toString.call(p).slice(8,-1);if(f==="Object"&&p.constructor&&(f=p.constructor.name),f==="Map"||f==="Set")return Array.from(p);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return le(p,i)}}function le(p,i){(i==null||i>p.length)&&(i=p.length);for(var f=0,l=new Array(i);f<i;f++)l[f]=p[f];return l}function te(p,i){var f=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(f!=null){var l,g,h,d,b=[],c=!0,y=!1;try{if(h=(f=f.call(p)).next,i===0){if(Object(f)!==f)return;c=!1}else for(;!(c=(l=h.call(f)).done)&&(b.push(l.value),b.length!==i);c=!0);}catch(j){y=!0,g=j}finally{try{if(!c&&f.return!=null&&(d=f.return(),Object(d)!==d))return}finally{if(y)throw g}}return b}}function $(p){if(Array.isArray(p))return p}var ee=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useClipboard } from \\"../useClipboard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useClipboard\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":20},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":20}}};
    
import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@travelmakers-design-v2/hooks/useClipboard",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,re={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},ee=`import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@travelmakers-design-v2/hooks/useClipboard",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
};
`,re={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},ye=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useClipboard } from \\"../useClipboard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useClipboard\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":20},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":20}}};
    
import React, { useState } from "react";

import { useClipboard } from "../useClipboard";

export default {
  title: "@travelmakers-design-v2/hooks/useClipboard",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design-v2/hooks/useClipboard"},K=function(){var i=Object(s.useState)(""),f=ae(i,2),l=f[0],g=f[1],h=ve({timeout:3e3}),d=h.copy,b=h.copied;return Object(me.jsxs)("div",{children:[Object(me.jsx)("input",{type:"text",onChange:function(y){return g(y.target.value)}}),Object(me.jsx)("button",{onClick:function(){return d(l)},children:"copy"}),Object(me.jsx)("span",{children:b&&"Copied!!"})]})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-v2-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return p});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-v2-hooks/src/useUpdateEffect/useUpdateEffect.ts"),t=e("./packages/travelmakers-design-v2-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ne(i,f){return ve(i)||se(i,f)||X(i,f)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(i,f){if(i){if(typeof i=="string")return Z(i,f);var l=Object.prototype.toString.call(i).slice(8,-1);if(l==="Object"&&i.constructor&&(l=i.constructor.name),l==="Map"||l==="Set")return Array.from(i);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return Z(i,f)}}function Z(i,f){(f==null||f>i.length)&&(f=i.length);for(var l=0,g=new Array(f);l<f;l++)g[l]=i[l];return g}function se(i,f){var l=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(l!=null){var g,h,d,b,c=[],y=!0,j=!1;try{if(d=(l=l.call(i)).next,f===0){if(Object(l)!==l)return;y=!1}else for(;!(y=(g=d.call(l)).done)&&(c.push(g.value),c.length!==f);y=!0);}catch(E){j=!0,h=E}finally{try{if(!y&&l.return!=null&&(b=l.return(),Object(b)!==b))return}finally{if(j)throw h}}return c}}function ve(i){if(Array.isArray(i))return i}var me=function(f,l,g){var h=Object(t.a)(f,l),d=ne(h,2),b=d[0],c=d[1];return Object(n.a)(b,g),c},ae=e("./node_modules/react/jsx-runtime.js");function de(i,f){return ee(i)||$(i,f)||le(i,f)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(i,f){if(i){if(typeof i=="string")return te(i,f);var l=Object.prototype.toString.call(i).slice(8,-1);if(l==="Object"&&i.constructor&&(l=i.constructor.name),l==="Map"||l==="Set")return Array.from(i);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return te(i,f)}}function te(i,f){(f==null||f>i.length)&&(f=i.length);for(var l=0,g=new Array(f);l<f;l++)g[l]=i[l];return g}function $(i,f){var l=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(l!=null){var g,h,d,b,c=[],y=!0,j=!1;try{if(d=(l=l.call(i)).next,f===0){if(Object(l)!==l)return;y=!1}else for(;!(y=(g=d.call(l)).done)&&(c.push(g.value),c.length!==f);y=!0);}catch(E){j=!0,h=E}finally{try{if(!y&&l.return!=null&&(b=l.return(),Object(b)!==b))return}finally{if(j)throw h}}return c}}function ee(i){if(Array.isArray(i))return i}var re=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useDebounce } from \\"../useDebounce\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useDebounce\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@travelmakers-design-v2/hooks/useDebounce",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,ye={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},re=`import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@travelmakers-design-v2/hooks/useDebounce",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};
`,ye={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},K=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport { useDebounce } from \\"../useDebounce\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useDebounce\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useState } from "react";

import { useDebounce } from "../useDebounce";

export default {
  title: "@travelmakers-design-v2/hooks/useDebounce",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useDebounce"},p=function(){var f=Object(s.useState)(""),l=de(f,2),g=l[0],h=l[1],d=me(function(){alert("Updated!")},1e3,[g]);return Object(ae.jsxs)("div",{children:[Object(ae.jsx)("input",{type:"text",onChange:function(c){return h(c.target.value)}}),Object(ae.jsx)("button",{onClick:d,children:"Cancel"})]})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const clear = useDebounce(
    () => {
      alert("Updated!");
    },
    1000,
    [value]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-v2-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return V});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(M),D=e("./node_modules/react/index.js"),F=e.n(D),C=e("./packages/travelmakers-design-v2-hooks/src/useForceUpdate/useForceUpdate.ts"),N=e("./node_modules/react/jsx-runtime.js"),z=e.n(N),Q=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useForceUpdate } from \\"../useForceUpdate\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useForceUpdate\\",\\n};\\n\\nexport const Default = () => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":17}}};
    
import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@travelmakers-design-v2/hooks/useForceUpdate",
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},Q=`import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@travelmakers-design-v2/hooks/useForceUpdate",
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};
`,W={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useForceUpdate } from \\"../useForceUpdate\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useForceUpdate\\",\\n};\\n\\nexport const Default = () => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":17}}};
    
import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@travelmakers-design-v2/hooks/useForceUpdate",
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useForceUpdate"};var V=function(){var R=Object(C.a)();return Object(N.jsxs)("div",{children:[Math.random(),Object(N.jsx)("button",{onClick:R,children:"Update"})]})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-v2-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return K});var M=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(M),D=e("./node_modules/core-js/modules/es.symbol.js"),F=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e.n(C),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(W),w=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e.n(w),s=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(t),G=e("./node_modules/core-js/modules/es.array.slice.js"),X=e.n(G),Z=e("./node_modules/core-js/modules/es.function.name.js"),se=e.n(Z),ve=e("./node_modules/core-js/modules/es.array.from.js"),me=e.n(ve),ae=e("./node_modules/react/index.js"),de=e.n(ae);function U(p,i){return re(p)||ee(p,i)||te(p,i)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(p,i){if(p){if(typeof p=="string")return $(p,i);var f=Object.prototype.toString.call(p).slice(8,-1);if(f==="Object"&&p.constructor&&(f=p.constructor.name),f==="Map"||f==="Set")return Array.from(p);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return $(p,i)}}function $(p,i){(i==null||i>p.length)&&(i=p.length);for(var f=0,l=new Array(i);f<i;f++)l[f]=p[f];return l}function ee(p,i){var f=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(f!=null){var l,g,h,d,b=[],c=!0,y=!1;try{if(h=(f=f.call(p)).next,i===0){if(Object(f)!==f)return;c=!1}else for(;!(c=(l=h.call(f)).done)&&(b.push(l.value),b.length!==i);c=!0);}catch(j){y=!0,g=j}finally{try{if(!c&&f.return!=null&&(d=f.return(),Object(d)!==d))return}finally{if(y)throw g}}return b}}function re(p){if(Array.isArray(p))return p}var ye=function(i){return(i+1)%1e6},K=function(){var i=Object(ae.useReducer)(ye,0),f=U(i,2),l=f[1];return l}},"./packages/travelmakers-design-v2-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return W});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function R(t){t.preventDefault()}function s(){document.body.addEventListener("touchmove",R,{passive:!1})}function n(){document.body.removeEventListener("touchmove",R)}return Object(J.useEffect)(function(){return w&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var t=document.body.style.top;document.body.style.cssText=""}},[]),Object(J.useEffect)(function(){return w&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[w]),null},F=D,C=e("./node_modules/react/jsx-runtime.js"),N=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport useHiddenBodyOverflow from \\"../useHiddenBodyOverflow\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useHiddenBodyOverflow\\",\\n};\\n\\nexport const Default = () => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":17}}};
    
import React, { useState } from "react";

import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers-design-v2/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},N=`import React, { useState } from "react";

import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers-design-v2/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}},Q=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useState } from \\"react\\";\\n\\nimport useHiddenBodyOverflow from \\"../useHiddenBodyOverflow\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useHiddenBodyOverflow\\",\\n};\\n\\nexport const Default = () => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":17},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":17}}};
    
import React, { useState } from "react";

import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers-design-v2/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useHiddenBodyOverflow"},W=function(){return F(!0),Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"useHiddenBodyOverflow"})})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},W.parameters)},"./packages/travelmakers-design-v2-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return P});var M=e("./node_modules/core-js/modules/es.promise.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),D=e("./node_modules/core-js/modules/web.timers.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),s=e("./node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/react/index.js"),ne=e("./node_modules/core-js/modules/es.object.define-property.js"),G=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),X=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),Z=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),se=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),ve=e("./node_modules/core-js/modules/es.object.create.js"),me=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),ae=e("./node_modules/core-js/modules/es.array.for-each.js"),de=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),U=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),le=e("./node_modules/core-js/modules/es.array.reverse.js"),te=e("./packages/travelmakers-design-v2-hooks/src/useCallbackRef/useCallbackRef.ts");function $(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */$=function(){return _};var _={},L=Object.prototype,x=L.hasOwnProperty,A=Object.defineProperty||function(a,r,m){a[r]=m.value},H=typeof Symbol=="function"?Symbol:{},Y=H.iterator||"@@iterator",ce=H.asyncIterator||"@@asyncIterator",ie=H.toStringTag||"@@toStringTag";function q(a,r,m){return Object.defineProperty(a,r,{value:m,enumerable:!0,configurable:!0,writable:!0}),a[r]}try{q({},"")}catch(a){q=function(m,k,I){return m[k]=I}}function fe(a,r,m,k){var I=r&&r.prototype instanceof he?r:he,B=Object.create(I.prototype),ue=new Be(k||[]);return A(B,"_invoke",{value:Se(a,m,ue)}),B}function Te(a,r,m){try{return{type:"normal",arg:a.call(r,m)}}catch(k){return{type:"throw",arg:k}}}_.wrap=fe;var be={};function he(){}function Ce(){}function ge(){}var je={};q(je,Y,function(){return this});var Le=Object.getPrototypeOf,Ee=Le&&Le(Le(Re([])));Ee&&Ee!==L&&x.call(Ee,Y)&&(je=Ee);var xe=ge.prototype=he.prototype=Object.create(je);function Ie(a){["next","throw","return"].forEach(function(r){q(a,r,function(m){return this._invoke(r,m)})})}function ke(a,r){function m(I,B,ue,_e){var pe=Te(a[I],a,B);if(pe.type!=="throw"){var De=pe.arg,Oe=De.value;return Oe&&typeof Oe=="object"&&x.call(Oe,"__await")?r.resolve(Oe.__await).then(function(Pe){m("next",Pe,ue,_e)},function(Pe){m("throw",Pe,ue,_e)}):r.resolve(Oe).then(function(Pe){De.value=Pe,ue(De)},function(Pe){return m("throw",Pe,ue,_e)})}_e(pe.arg)}var k;A(this,"_invoke",{value:function(B,ue){function _e(){return new r(function(pe,De){m(B,ue,pe,De)})}return k=k?k.then(_e,_e):_e()}})}function Se(a,r,m){var k="suspendedStart";return function(I,B){if(k==="executing")throw new Error("Generator is already running");if(k==="completed"){if(I==="throw")throw B;return S()}for(m.method=I,m.arg=B;;){var ue=m.delegate;if(ue){var _e=Me(ue,m);if(_e){if(_e===be)continue;return _e}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(k==="suspendedStart")throw k="completed",m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);k="executing";var pe=Te(a,r,m);if(pe.type==="normal"){if(k=m.done?"completed":"suspendedYield",pe.arg===be)continue;return{value:pe.arg,done:m.done}}pe.type==="throw"&&(k="completed",m.method="throw",m.arg=pe.arg)}}}function Me(a,r){var m=r.method,k=a.iterator[m];if(k===void 0)return r.delegate=null,m==="throw"&&a.iterator.return&&(r.method="return",r.arg=void 0,Me(a,r),r.method==="throw")||m!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+m+"' method")),be;var I=Te(k,a.iterator,r.arg);if(I.type==="throw")return r.method="throw",r.arg=I.arg,r.delegate=null,be;var B=I.arg;return B?B.done?(r[a.resultName]=B.value,r.next=a.nextLoc,r.method!=="return"&&(r.method="next",r.arg=void 0),r.delegate=null,be):B:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,be)}function Fe(a){var r={tryLoc:a[0]};1 in a&&(r.catchLoc=a[1]),2 in a&&(r.finallyLoc=a[2],r.afterLoc=a[3]),this.tryEntries.push(r)}function Ae(a){var r=a.completion||{};r.type="normal",delete r.arg,a.completion=r}function Be(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(Fe,this),this.reset(!0)}function Re(a){if(a){var r=a[Y];if(r)return r.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var m=-1,k=function I(){for(;++m<a.length;)if(x.call(a,m))return I.value=a[m],I.done=!1,I;return I.value=void 0,I.done=!0,I};return k.next=k}}return{next:S}}function S(){return{value:void 0,done:!0}}return Ce.prototype=ge,A(xe,"constructor",{value:ge,configurable:!0}),A(ge,"constructor",{value:Ce,configurable:!0}),Ce.displayName=q(ge,ie,"GeneratorFunction"),_.isGeneratorFunction=function(a){var r=typeof a=="function"&&a.constructor;return!!r&&(r===Ce||(r.displayName||r.name)==="GeneratorFunction")},_.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,ge):(a.__proto__=ge,q(a,ie,"GeneratorFunction")),a.prototype=Object.create(xe),a},_.awrap=function(a){return{__await:a}},Ie(ke.prototype),q(ke.prototype,ce,function(){return this}),_.AsyncIterator=ke,_.async=function(a,r,m,k,I){I===void 0&&(I=Promise);var B=new ke(fe(a,r,m,k),I);return _.isGeneratorFunction(r)?B:B.next().then(function(ue){return ue.done?ue.value:B.next()})},Ie(xe),q(xe,ie,"Generator"),q(xe,Y,function(){return this}),q(xe,"toString",function(){return"[object Generator]"}),_.keys=function(a){var r=Object(a),m=[];for(var k in r)m.push(k);return m.reverse(),function I(){for(;m.length;){var B=m.pop();if(B in r)return I.value=B,I.done=!1,I}return I.done=!0,I}},_.values=Re,Be.prototype={constructor:Be,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ae),!r)for(var m in this)m.charAt(0)==="t"&&x.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var m=this;function k(De,Oe){return ue.type="throw",ue.arg=r,m.next=De,Oe&&(m.method="next",m.arg=void 0),!!Oe}for(var I=this.tryEntries.length-1;I>=0;--I){var B=this.tryEntries[I],ue=B.completion;if(B.tryLoc==="root")return k("end");if(B.tryLoc<=this.prev){var _e=x.call(B,"catchLoc"),pe=x.call(B,"finallyLoc");if(_e&&pe){if(this.prev<B.catchLoc)return k(B.catchLoc,!0);if(this.prev<B.finallyLoc)return k(B.finallyLoc)}else if(_e){if(this.prev<B.catchLoc)return k(B.catchLoc,!0)}else{if(!pe)throw new Error("try statement without catch or finally");if(this.prev<B.finallyLoc)return k(B.finallyLoc)}}}},abrupt:function(r,m){for(var k=this.tryEntries.length-1;k>=0;--k){var I=this.tryEntries[k];if(I.tryLoc<=this.prev&&x.call(I,"finallyLoc")&&this.prev<I.finallyLoc){var B=I;break}}B&&(r==="break"||r==="continue")&&B.tryLoc<=m&&m<=B.finallyLoc&&(B=null);var ue=B?B.completion:{};return ue.type=r,ue.arg=m,B?(this.method="next",this.next=B.finallyLoc,be):this.complete(ue)},complete:function(r,m){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&m&&(this.next=m),be},finish:function(r){for(var m=this.tryEntries.length-1;m>=0;--m){var k=this.tryEntries[m];if(k.finallyLoc===r)return this.complete(k.completion,k.afterLoc),Ae(k),be}},catch:function(r){for(var m=this.tryEntries.length-1;m>=0;--m){var k=this.tryEntries[m];if(k.tryLoc===r){var I=k.completion;if(I.type==="throw"){var B=I.arg;Ae(k)}return B}}throw new Error("illegal catch attempt")},delegateYield:function(r,m,k){return this.delegate={iterator:Re(r),resultName:m,nextLoc:k},this.method==="next"&&(this.arg=void 0),be}},_}function ee(_,L,x,A,H,Y,ce){try{var ie=_[Y](ce),q=ie.value}catch(fe){x(fe);return}ie.done?L(q):Promise.resolve(q).then(A,H)}function re(_){return function(){var L=this,x=arguments;return new Promise(function(A,H){var Y=_.apply(L,x);function ce(q){ee(Y,A,H,ce,ie,"next",q)}function ie(q){ee(Y,A,H,ce,ie,"throw",q)}ce(void 0)})}}function ye(_,L){return l(_)||f(_,L)||p(_,L)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(_,L){if(_){if(typeof _=="string")return i(_,L);var x=Object.prototype.toString.call(_).slice(8,-1);if(x==="Object"&&_.constructor&&(x=_.constructor.name),x==="Map"||x==="Set")return Array.from(_);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return i(_,L)}}function i(_,L){(L==null||L>_.length)&&(L=_.length);for(var x=0,A=new Array(L);x<L;x++)A[x]=_[x];return A}function f(_,L){var x=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(x!=null){var A,H,Y,ce,ie=[],q=!0,fe=!1;try{if(Y=(x=x.call(_)).next,L===0){if(Object(x)!==x)return;q=!1}else for(;!(q=(A=Y.call(x)).done)&&(ie.push(A.value),ie.length!==L);q=!0);}catch(Te){fe=!0,H=Te}finally{try{if(!q&&x.return!=null&&(ce=x.return(),Object(ce)!==ce))return}finally{if(fe)throw H}}return ie}}function l(_){if(Array.isArray(_))return _}var g=function(L){var x=Object(t.useState)(!1),A=ye(x,2),H=A[0],Y=A[1],ce=Object(te.a)(L),ie=Object(t.useCallback)(re($().mark(function q(){var fe,Te=arguments;return $().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return Y(!0),he.next=3,ce.apply(void 0,Te);case 3:return fe=he.sent,Y(!1),he.abrupt("return",fe);case 6:case"end":return he.stop()}},q)})),[L]);return[H,ie]},h=e("./node_modules/react/jsx-runtime.js");function d(_,L){return E(_)||j(_,L)||c(_,L)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(_,L){if(_){if(typeof _=="string")return y(_,L);var x=Object.prototype.toString.call(_).slice(8,-1);if(x==="Object"&&_.constructor&&(x=_.constructor.name),x==="Map"||x==="Set")return Array.from(_);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return y(_,L)}}function y(_,L){(L==null||L>_.length)&&(L=_.length);for(var x=0,A=new Array(L);x<L;x++)A[x]=_[x];return A}function j(_,L){var x=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(x!=null){var A,H,Y,ce,ie=[],q=!0,fe=!1;try{if(Y=(x=x.call(_)).next,L===0){if(Object(x)!==x)return;q=!1}else for(;!(q=(A=Y.call(x)).done)&&(ie.push(A.value),ie.length!==L);q=!0);}catch(Te){fe=!0,H=Te}finally{try{if(!q&&x.return!=null&&(ce=x.return(),Object(ce)!==ce))return}finally{if(fe)throw H}}return ie}}function E(_){if(Array.isArray(_))return _}var v=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useLoading } from \\"../useLoading\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useLoading\\",\\n};\\n\\nconst sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));\\n\\nexport const Default = () => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@travelmakers-design-v2/hooks/useLoading",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},v=`import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@travelmakers-design-v2/hooks/useLoading",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};
`,u={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},o=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useLoading } from \\"../useLoading\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useLoading\\",\\n};\\n\\nconst sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));\\n\\nexport const Default = () => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":21},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":21}}};
    
import React from "react";
import { useLoading } from "../useLoading";

export default {
  title: "@travelmakers-design-v2/hooks/useLoading",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design-v2/hooks/useLoading"},O=function(L){return new Promise(function(x){return setTimeout(x,L)})},P=function(){var L=g(O),x=d(L,2),A=x[0],H=x[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return H(2e3)},children:"Start"})}),Object(h.jsxs)("div",{children:["Loading: ",""+A]})]})};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},P.parameters)},"./packages/travelmakers-design-v2-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return h});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(M),D=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(C),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(W),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(w),s=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(t),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(G),Z=e("./node_modules/core-js/modules/es.array.slice.js"),se=e.n(Z),ve=e("./node_modules/core-js/modules/es.function.name.js"),me=e.n(ve),ae=e("./node_modules/core-js/modules/es.array.from.js"),de=e.n(ae),U=e("./node_modules/react/index.js"),le=e.n(U),te=e("./packages/travelmakers-design-v2-hooks/src/useRafState/useRafState.ts"),$=e("./node_modules/react/jsx-runtime.js"),ee=e.n($);function re(d,b){return f(d)||i(d,b)||K(d,b)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(d,b){if(d){if(typeof d=="string")return p(d,b);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return p(d,b)}}function p(d,b){(b==null||b>d.length)&&(b=d.length);for(var c=0,y=new Array(b);c<b;c++)y[c]=d[c];return y}function i(d,b){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var y,j,E,v,u=[],o=!0,O=!1;try{if(E=(c=c.call(d)).next,b===0){if(Object(c)!==c)return;o=!1}else for(;!(o=(y=E.call(c)).done)&&(u.push(y.value),u.length!==b);o=!0);}catch(P){O=!0,j=P}finally{try{if(!o&&c.return!=null&&(v=c.return(),Object(v)!==v))return}finally{if(O)throw j}}return u}}function f(d){if(Array.isArray(d))return d}var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useRafState } from \\"../useRafState\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useRafState\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":31}}};
    
import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@travelmakers-design-v2/hooks/useRafState",
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},l=`import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@travelmakers-design-v2/hooks/useRafState",
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
`,g={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useRafState } from \\"../useRafState\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useRafState\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":31}}};
    
import React, { useEffect } from "react";

import { useRafState } from "../useRafState";

export default {
  title: "@travelmakers-design-v2/hooks/useRafState",
};

export const Default = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design-v2/hooks/useRafState"};var h=function(){var b=Object(te.a)({width:0,height:0}),c=re(b,2),y=c[0],j=c[1];return Object(U.useEffect)(function(){var E=function(){j({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}},[]),Object($.jsx)("pre",{children:JSON.stringify(y,null,2)})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}`}},h.parameters)},"./packages/travelmakers-design-v2-hooks/src/useRafState/useRafState.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return ye});var M=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(M),D=e("./node_modules/core-js/modules/es.symbol.js"),F=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e.n(C),z=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(W),w=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e.n(w),s=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(t),G=e("./node_modules/core-js/modules/es.array.slice.js"),X=e.n(G),Z=e("./node_modules/core-js/modules/es.function.name.js"),se=e.n(Z),ve=e("./node_modules/core-js/modules/es.array.from.js"),me=e.n(ve),ae=e("./node_modules/react/index.js"),de=e.n(ae);function U(K,p){return re(K)||ee(K,p)||te(K,p)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(K,p){if(K){if(typeof K=="string")return $(K,p);var i=Object.prototype.toString.call(K).slice(8,-1);if(i==="Object"&&K.constructor&&(i=K.constructor.name),i==="Map"||i==="Set")return Array.from(K);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return $(K,p)}}function $(K,p){(p==null||p>K.length)&&(p=K.length);for(var i=0,f=new Array(p);i<p;i++)f[i]=K[i];return f}function ee(K,p){var i=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(i!=null){var f,l,g,h,d=[],b=!0,c=!1;try{if(g=(i=i.call(K)).next,p===0){if(Object(i)!==i)return;b=!1}else for(;!(b=(f=g.call(i)).done)&&(d.push(f.value),d.length!==p);b=!0);}catch(y){c=!0,l=y}finally{try{if(!b&&i.return!=null&&(h=i.return(),Object(h)!==h))return}finally{if(c)throw l}}return d}}function re(K){if(Array.isArray(K))return K}var ye=function(p){var i=Object(ae.useRef)(0),f=Object(ae.useState)(p),l=U(f,2),g=l[0],h=l[1],d=Object(ae.useCallback)(function(b){cancelAnimationFrame(i.current),i.current=requestAnimationFrame(function(){h(b)})},[]);return[g,d]}},"./packages/travelmakers-design-v2-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return f});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-v2-hooks/src/useForceUpdate/useForceUpdate.ts"),t=e("./packages/travelmakers-design-v2-hooks/src/useRafState/useRafState.ts");function ne(l,g){return ve(l)||se(l,g)||X(l,g)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(l,g){if(l){if(typeof l=="string")return Z(l,g);var h=Object.prototype.toString.call(l).slice(8,-1);if(h==="Object"&&l.constructor&&(h=l.constructor.name),h==="Map"||h==="Set")return Array.from(l);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return Z(l,g)}}function Z(l,g){(g==null||g>l.length)&&(g=l.length);for(var h=0,d=new Array(g);h<g;h++)d[h]=l[h];return d}function se(l,g){var h=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(h!=null){var d,b,c,y,j=[],E=!0,v=!1;try{if(c=(h=h.call(l)).next,g===0){if(Object(h)!==h)return;E=!1}else for(;!(E=(d=c.call(h)).done)&&(j.push(d.value),j.length!==g);E=!0);}catch(u){v=!0,b=u}finally{try{if(!E&&h.return!=null&&(y=h.return(),Object(y)!==y))return}finally{if(v)throw b}}return j}}function ve(l){if(Array.isArray(l))return l}var me={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},ae=typeof window!="undefined",de=function(){var g=Object(s.useRef)(null),h=Object(t.a)(me),d=ne(h,2),b=d[0],c=d[1],y=Object(s.useMemo)(function(){return ae?new ResizeObserver(function(j){var E=j[0];E&&c(E.contentRect)}):null},[]);return Object(s.useEffect)(function(){return g.current&&y.observe(g.current),function(){y.disconnect()}},[g.current]),[g,b]},U=e("./node_modules/react/jsx-runtime.js");function le(l,g){return ye(l)||re(l,g)||$(l,g)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(l,g){if(l){if(typeof l=="string")return ee(l,g);var h=Object.prototype.toString.call(l).slice(8,-1);if(h==="Object"&&l.constructor&&(h=l.constructor.name),h==="Map"||h==="Set")return Array.from(l);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return ee(l,g)}}function ee(l,g){(g==null||g>l.length)&&(g=l.length);for(var h=0,d=new Array(g);h<g;h++)d[h]=l[h];return d}function re(l,g){var h=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(h!=null){var d,b,c,y,j=[],E=!0,v=!1;try{if(c=(h=h.call(l)).next,g===0){if(Object(h)!==h)return;E=!1}else for(;!(E=(d=c.call(h)).done)&&(j.push(d.value),j.length!==g);E=!0);}catch(u){v=!0,b=u}finally{try{if(!E&&h.return!=null&&(y=h.return(),Object(y)!==y))return}finally{if(v)throw b}}return j}}function ye(l){if(Array.isArray(l))return l}var K=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useResize } from \\"../useResize\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useResize\\",\\n};\\n\\nexport const Default = () => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":33}}};
    
import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@travelmakers-design-v2/hooks/useResize",
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},K=`import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@travelmakers-design-v2/hooks/useResize",
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};
`,p={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},i=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect } from \\"react\\";\\n\\nimport { useForceUpdate } from \\"../../useForceUpdate\\";\\nimport { useResize } from \\"../useResize\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useResize\\",\\n};\\n\\nexport const Default = () => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":33}}};
    
import React, { useEffect } from "react";

import { useForceUpdate } from "../../useForceUpdate";
import { useResize } from "../useResize";

export default {
  title: "@travelmakers-design-v2/hooks/useResize",
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/hooks/useResize"},f=function(){var g=de(),h=le(g,2),d=h[0],b=h[1],c=Object(n.a)();return Object(s.useEffect)(function(){c()},[]),Object(U.jsxs)("div",{children:[Object(U.jsx)("textarea",{ref:d,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(U.jsx)("div",{children:JSON.stringify(b)})]})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          resize: "both",
        }}
      />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-v2-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return h});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(M),D=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(C),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(W),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(w),s=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(t),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(G),Z=e("./node_modules/core-js/modules/es.array.slice.js"),se=e.n(Z),ve=e("./node_modules/core-js/modules/es.function.name.js"),me=e.n(ve),ae=e("./node_modules/core-js/modules/es.array.from.js"),de=e.n(ae),U=e("./node_modules/react/index.js"),le=e.n(U),te=e("./packages/travelmakers-design-v2-hooks/src/useTimeoutFn/useTimeoutFn.ts"),$=e("./node_modules/react/jsx-runtime.js"),ee=e.n($);function re(d,b){return f(d)||i(d,b)||K(d,b)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(d,b){if(d){if(typeof d=="string")return p(d,b);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return p(d,b)}}function p(d,b){(b==null||b>d.length)&&(b=d.length);for(var c=0,y=new Array(b);c<b;c++)y[c]=d[c];return y}function i(d,b){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var y,j,E,v,u=[],o=!0,O=!1;try{if(E=(c=c.call(d)).next,b===0){if(Object(c)!==c)return;o=!1}else for(;!(o=(y=E.call(c)).done)&&(u.push(y.value),u.length!==b);o=!0);}catch(P){O=!0,j=P}finally{try{if(!o&&c.return!=null&&(v=c.return(),Object(v)!==v))return}finally{if(O)throw j}}return u}}function f(d){if(Array.isArray(d))return d}var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useTimeoutFn } from \\"../useTimeoutFn\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useTimeoutFn\\",\\n};\\n\\nexport const Default = () => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@travelmakers-design-v2/hooks/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},l=`import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@travelmakers-design-v2/hooks/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { useTimeoutFn } from \\"../useTimeoutFn\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useTimeoutFn\\",\\n};\\n\\nexport const Default = () => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { useTimeoutFn } from "../useTimeoutFn";

export default {
  title: "@travelmakers-design-v2/hooks/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/hooks/useTimeoutFn"};var h=function(){var b=Object(te.a)(function(){alert("fire!")},2e3),c=re(b,2),y=c[0],j=c[1];return Object($.jsxs)("div",{children:[Object($.jsx)("button",{onClick:y,children:"Run"}),Object($.jsx)("button",{onClick:j,children:"Clear"})]})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-v2-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return N});var M=e("./node_modules/core-js/modules/web.timers.js"),J=e.n(M),D=e("./node_modules/react/index.js"),F=e.n(D),C=e("./packages/travelmakers-design-v2-hooks/src/useCallbackRef/useCallbackRef.ts"),N=function(Q,W){var V=Object(D.useRef)(),w=Object(C.a)(Q),R=Object(D.useCallback)(function(){V.current&&clearTimeout(V.current),V.current=setTimeout(function(){w()},W)},[W]),s=Object(D.useCallback)(function(){V.current&&clearTimeout(V.current)},[]);return Object(D.useEffect)(function(){return s},[s]),[R,s]}},"./packages/travelmakers-design-v2-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return h});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(M),D=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(C),z=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(W),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(w),s=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(t),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(G),Z=e("./node_modules/core-js/modules/es.array.slice.js"),se=e.n(Z),ve=e("./node_modules/core-js/modules/es.function.name.js"),me=e.n(ve),ae=e("./node_modules/core-js/modules/es.array.from.js"),de=e.n(ae),U=e("./node_modules/react/index.js"),le=e.n(U),te=e("./packages/travelmakers-design-v2-hooks/src/useUpdateEffect/useUpdateEffect.ts"),$=e("./node_modules/react/jsx-runtime.js"),ee=e.n($);function re(d,b){return f(d)||i(d,b)||K(d,b)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(d,b){if(d){if(typeof d=="string")return p(d,b);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return p(d,b)}}function p(d,b){(b==null||b>d.length)&&(b=d.length);for(var c=0,y=new Array(b);c<b;c++)y[c]=d[c];return y}function i(d,b){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var y,j,E,v,u=[],o=!0,O=!1;try{if(E=(c=c.call(d)).next,b===0){if(Object(c)!==c)return;o=!1}else for(;!(o=(y=E.call(c)).done)&&(u.push(y.value),u.length!==b);o=!0);}catch(P){O=!0,j=P}finally{try{if(!o&&c.return!=null&&(v=c.return(),Object(v)!==v))return}finally{if(O)throw j}}return u}}function f(d){if(Array.isArray(d))return d}var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect, useState } from \\"react\\";\\n\\nimport { useUpdateEffect } from \\"../useUpdateEffect\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useUpdateEffect\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@travelmakers-design-v2/hooks/useUpdateEffect",
};

export const Default = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},l=`import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@travelmakers-design-v2/hooks/useUpdateEffect",
};

export const Default = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React, { useEffect, useState } from \\"react\\";\\n\\nimport { useUpdateEffect } from \\"../useUpdateEffect\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useUpdateEffect\\",\\n};\\n\\nexport const Default = () => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":25},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":25}}};
    
import React, { useEffect, useState } from "react";

import { useUpdateEffect } from "../useUpdateEffect";

export default {
  title: "@travelmakers-design-v2/hooks/useUpdateEffect",
};

export const Default = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useUpdateEffect"};var h=function(){var b=Object(U.useState)(""),c=re(b,2),y=c[0],j=c[1];return Object(U.useEffect)(function(){console.log("useEffect:",y)},[y]),Object(te.a)(function(){console.log("useUpdateEffect:",y)},[y]),Object($.jsx)("div",{children:Object($.jsx)("input",{type:"text",onChange:function(v){return j(v.target.value)}})})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useEffect:", value);
  }, [value]);

  useUpdateEffect(() => {
    console.log("useUpdateEffect:", value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-v2-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return D});var M=e("./node_modules/react/index.js"),J=e.n(M),D=function(C,N){var z=Object(M.useRef)(!0);Object(M.useEffect)(function(){if(!z.current)return C();z.current=!1},N)}},"./packages/travelmakers-design-v2-styles/src/theme/TmProvider.tsx":function(oe,T,e){"use strict";e.d(T,"c",function(){return Me}),e.d(T,"d",function(){return Fe}),e.d(T,"b",function(){return Ae}),e.d(T,"a",function(){return Re});var M=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/es.object.keys.js"),D=e("./node_modules/core-js/modules/es.object.assign.js"),F={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},C={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},N={none:"none",elevation1:"0px 4px 8px rgba(0, 0, 0, 0.2)",elevation2:"0px 4px 12px rgba(0, 0, 0, 0.15)",elevation3:"0px 4px 16px rgba(0, 0, 0, 0.2)",elevation4:"0px 4px 20px rgba(0, 0, 0, 0.2)",elevation5:"0px 4px 24px rgba(0, 0, 0, 0.2)"},z={display1:40,display2:32,display3:28,display4:24,display5:20,display6:18,subhead1:16,subhead2:14,body1:16,body2:14,body3:12,caption:10},Q={display1:56,display2:40,display3:36,display4:32,display5:28,display6:26,subhead1:24,subhead2:22,body1:24,body2:22,body3:20,caption:16},W={radius10:4,radius20:8,radius100:100},V={spacing5:4,spacing10:8,spacing20:12,spacing30:16,spacing40:20,spacing50:24,spacing60:28,spacing70:32,spacing80:36,spacing90:40,spacing100:48,spacing110:52,spacing120:56,spacing130:60},w={xsmall:576,small:768,medium:1024,large:1408},R={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},s={mobile:"@media (max-width: "+R.mobile+"px)",tablet:"@media (max-width: "+R.tablet+"px)",desktop:"@media (max-width: "+R.desktop+"px)",largeDesktop:"@media (max-width: "+R.maxSize+"px)"},n=function(a){for(var r="",m=1;m<a.length-1;m+=1)r+=a[m]+" "+m/(a.length-1)*100+"%, ";return a[0]+" 0%, "+r+a[a.length-1]+" 100%"},t=function(a){for(var r=arguments.length,m=new Array(r>1?r-1:0),k=1;k<r;k++)m[k-1]=arguments[k];return"linear-gradient("+a+"deg, "+n(m)+")"},ne=function(){for(var a=arguments.length,r=new Array(a),m=0;m<a;m++)r[m]=arguments[m];return"radial-gradient(circle, "+n(r)+")"},G=function(a){return typeof a.size=="number"?a.size:a.sizes[a.size]||a.size||a.sizes.medium},X=function(a){return function(r){return"@media (min-width: "+(G({size:r,sizes:a.breakpoints})+1)+"px)"}},Z=function(a){return function(r){return"@media (max-width: "+G({size:r,sizes:a.breakpoints})+"px)"}},se=e("./node_modules/core-js/modules/es.string.replace.js"),ve=e("./node_modules/core-js/modules/es.regexp.exec.js"),me=e("./node_modules/core-js/modules/es.number.is-nan.js"),ae=e("./node_modules/core-js/modules/es.number.constructor.js"),de=e("./node_modules/core-js/modules/es.parse-int.js"),U=e("./node_modules/core-js/modules/es.array.map.js"),le=e("./node_modules/core-js/modules/es.string.split.js"),te=e("./node_modules/core-js/modules/es.string.starts-with.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),ye=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),p=e("./node_modules/core-js/modules/es.string.iterator.js"),i=e("./node_modules/core-js/modules/es.array.iterator.js"),f=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e("./node_modules/core-js/modules/es.array.slice.js"),g=e("./node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/core-js/modules/es.array.from.js");function d(S,a){return E(S)||j(S,a)||c(S,a)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(S,a){if(S){if(typeof S=="string")return y(S,a);var r=Object.prototype.toString.call(S).slice(8,-1);if(r==="Object"&&S.constructor&&(r=S.constructor.name),r==="Map"||r==="Set")return Array.from(S);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(S,a)}}function y(S,a){(a==null||a>S.length)&&(a=S.length);for(var r=0,m=new Array(a);r<a;r++)m[r]=S[r];return m}function j(S,a){var r=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(r!=null){var m,k,I,B,ue=[],_e=!0,pe=!1;try{if(I=(r=r.call(S)).next,a===0){if(Object(r)!==r)return;_e=!1}else for(;!(_e=(m=I.call(r)).done)&&(ue.push(m.value),ue.length!==a);_e=!0);}catch(De){pe=!0,k=De}finally{try{if(!_e&&r.return!=null&&(B=r.return(),Object(B)!==B))return}finally{if(pe)throw k}}return ue}}function E(S){if(Array.isArray(S))return S}var v=function(a){var r=a.replace("#","");return typeof r=="string"&&r.length===6&&!Number.isNaN(Number("0x"+r))},u=function(a){var r=a.replace("#",""),m=parseInt(r,16),k=m>>16&255,I=m>>8&255,B=m&255;return{r:k,g:I,b:B,a:1}},o=function(a){var r=a.replace(/[^0-9,.]/g,"").split(",").map(Number),m=d(r,4),k=m[0],I=m[1],B=m[2],ue=m[3];return{r:k,g:I,b:B,a:ue||1}},O=function(a){return v(a)?u(a):a.startsWith("rgb")?o(a):{r:0,g:0,b:0,a:1}},P=function(a,r){if(typeof a!="string"||r>1||r<0)return"rgba(0, 0, 0, 1)";var m=O(a),k=m.r,I=m.g,B=m.b;return"rgba("+k+", "+I+", "+B+", "+r+")"},_=function(a,r){var m=O(a),k=m.r,I=m.g,B=m.b,ue=m.a,_e=1-r,pe=function(Oe){return Math.round(Oe*_e)};return"rgba("+pe(k)+", "+pe(I)+", "+pe(B)+", "+ue+")"},L=function(a,r){var m=O(a),k=m.r,I=m.g,B=m.b,ue=m.a,_e=function(De){return Math.round(De+(255-De)*r)};return"rgba("+_e(k)+", "+_e(I)+", "+_e(B)+", "+ue+")"},x=function(a){return a*8},A={linearGradient:t,radialGradient:ne,smallerThan:Z,largerThan:X,rgba:P,size:G,darken:_,lighten:L,spacing:x},H=function(a){return Object.assign({},a,{fn:{largerThan:A.largerThan(a),smallerThan:A.smallerThan(a),radialGradient:A.radialGradient,linearGradient:A.linearGradient,rgba:A.rgba,size:A.size,lighten:A.lighten,darken:A.darken,spacing:A.spacing}})},Y={display1:{fontSize:40,lineHeight:"56px"},display2:{fontSize:32,lineHeight:"40px"},display3:{fontSize:28,lineHeight:"36px"},display4:{fontSize:24,lineHeight:"32px"},display5:{fontSize:20,lineHeight:"28px"},display6:{fontSize:18,lineHeight:"26px"},subhead1:{fontSize:16,lineHeight:"24px"},subhead2:{fontSize:14,lineHeight:"22px"}},ce=Object.keys(F),ie=["xsmall","small","medium","large"],q=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],fe=function(a){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:a.fontFamily||"sans-serif"}},Te={locale:"ko",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",colors:F,shadows:N,fontSizes:z,lineHeights:Q,radius:W,headings:Y,spacing:V,breakpoints:w,media:s},be=Object.assign({},Te,{colors:C,colorScheme:"dark"}),he=H(Te),Ce=H(be),ge=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),je=e("./node_modules/react/jsx-runtime.js"),Le=function(a){var r=a.styles,m=Me();return Object(je.jsx)(ge.a,{styles:Object(ge.b)(r(m))})};Le.displayName="Global";var Ee={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0}},xe=function(){return Object(je.jsx)(ge.a,{styles:Ee})};xe.displayName="NormalizeCSS";var Ie=e("./node_modules/core-js/modules/es.array.reduce.js");function ke(S,a){return a?Object.keys(S).reduce(function(r,m){if(m==="headings"&&a.headings){var k=a.headings?Object.keys(S.headings).reduce(function(I,B){return I[B]=Object.assign({},S.headings[B],a.headings[B]),I},{}):S.headings;return Object.assign({},r,{headings:Object.assign({},S.headings,a.headings,k)})}return r[m]=typeof a[m]=="object"?Object.assign({},S[m],a[m]):a[m]||S[m],r},{}):S}var Se=Object(M.createContext)({theme:he,styles:{},emotionOptions:{key:"co",prepend:!0}});function Me(){var S;return((S=Object(M.useContext)(Se))===null||S===void 0?void 0:S.theme)||he}function Fe(){var S;return((S=Object(M.useContext)(Se))===null||S===void 0?void 0:S.styles)||{}}function Ae(){var S;return((S=Object(M.useContext)(Se))===null||S===void 0?void 0:S.emotionOptions)||{key:"co",prepend:!0}}var Be=function(){return Object(je.jsx)(Le,{styles:function(r){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:r.fontFamily,backgroundColor:r.colorScheme==="dark"?r.colors.black:r.colors.white,color:r.colorScheme==="dark"?r.colors.white:r.colors.black,lineHeight:r.lineHeight,fontSizes:r.fontSizes.body3}}}})};Be.displayName="GlobalStyles";var Re=function(a){var r=a.theme,m=a.styles,k=m===void 0?{}:m,I=a.emotionOptions,B=a.withNormalizeCSS,ue=B===void 0?!1:B,_e=a.withGlobalStyles,pe=_e===void 0?!1:_e,De=a.children;return Object(je.jsxs)(Se.Provider,{value:{theme:ke(r.colorScheme==="dark"?Ce:he,r),styles:k,emotionOptions:I},children:[ue&&Object(je.jsx)(xe,{}),pe&&Object(je.jsx)(Be,{}),De]})};Re.displayName="TmProvider",Re.displayName="@travelmakers-design-v2/styles/TmProvider"},"./packages/travelmakers-design-v2-styles/src/tss/useCss.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return E});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/clsx/dist/clsx.m.js"),n=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),t=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/react/index.js");function Z(v){return ae(v)||me(v)||ve(v)||se()}function se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(v,u){if(v){if(typeof v=="string")return de(v,u);var o=Object.prototype.toString.call(v).slice(8,-1);if(o==="Object"&&v.constructor&&(o=v.constructor.name),o==="Map"||o==="Set")return Array.from(v);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return de(v,u)}}function me(v){if(typeof Symbol!="undefined"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}function ae(v){if(Array.isArray(v))return de(v)}function de(v,u){(u==null||u>v.length)&&(u=v.length);for(var o=0,O=new Array(u);o<u;o++)O[o]=v[o];return O}function U(v,u){var o=Object(X.useRef)();return(!o.current||u.length!==o.current.prevDeps.length||o.current.prevDeps.map(function(O,P){return O===u[P]}).indexOf(!1)>=0)&&(o.current={v:v(),prevDeps:Z(u)}),o.current.v}var le=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),te=e("./packages/travelmakers-design-v2-styles/src/theme/TmProvider.tsx"),$=e("./node_modules/react/jsx-runtime.js"),ee=function(){var v;function u(o){return v===void 0&&(v=Object(le.a)(o||{key:"co",prepend:!0})),v}return{getCache:u}}(),re=ee.getCache,ye=Object(X.createContext)(void 0);function K(){var v=Object(te.b)();return Object(X.useContext)(ye)||re(v)}function p(v){var u=v.children,o=v.value;return Object($.jsx)(ye.Provider,{value:o,children:u})}p.displayName="CacheProvider";function i(v,u){return d(v)||h(v,u)||l(v,u)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(v,u){if(v){if(typeof v=="string")return g(v,u);var o=Object.prototype.toString.call(v).slice(8,-1);if(o==="Object"&&v.constructor&&(o=v.constructor.name),o==="Map"||o==="Set")return Array.from(v);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return g(v,u)}}function g(v,u){(u==null||u>v.length)&&(u=v.length);for(var o=0,O=new Array(u);o<u;o++)O[o]=v[o];return O}function h(v,u){var o=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(o!=null){var O,P,_,L,x=[],A=!0,H=!1;try{if(_=(o=o.call(v)).next,u===0){if(Object(o)!==o)return;A=!1}else for(;!(A=(O=_.call(o)).done)&&(x.push(O.value),x.length!==u);A=!0);}catch(Y){H=!0,P=Y}finally{try{if(!A&&o.return!=null&&(L=o.return(),Object(L)!==L))return}finally{if(H)throw P}}return x}}function d(v){if(Array.isArray(v))return v}var b="ref";function c(v){var u;if(v.length!==1)return{args:v,ref:u};var o=i(v,1),O=o[0];if(!(O instanceof Object))return{args:v,ref:u};if(!(b in O))return{args:v,ref:u};u=O[b];var P=Object.assign({},O);return delete P[b],{args:[P],ref:u}}var y=function(){function v(o,O,P){var _=[],L=Object(t.a)(o,_,P);return _.length<2?P:L+O(_)}function u(o){var O=o.cache,P=function(){for(var A=arguments.length,H=new Array(A),Y=0;Y<A;Y++)H[Y]=arguments[Y];var ce=c(H),ie=ce.ref,q=ce.args,fe=Object(n.a)(q,O.registered);return Object(t.b)(O,fe,!1),O.key+"-"+fe.name+(ie===void 0?"":" "+ie)},_=function(){for(var A=arguments.length,H=new Array(A),Y=0;Y<A;Y++)H[Y]=arguments[Y];var ce=c(H),ie=ce.ref,q=ce.args,fe=Object(n.a)(q,O.registered);return Object(t.b)(O,fe,!1),""+O.key+fe.name+(ie===void 0?"":" "+ie)},L=function(){for(var A=arguments.length,H=new Array(A),Y=0;Y<A;Y++)H[Y]=arguments[Y];return v(O.registered,P,Object(s.a)(H))};return{css:P,cx:L,cssRn:_}}return{cssFactory:u}}(),j=y.cssFactory;function E(){var v=K();return U(function(){return j({cache:v})},[v])}},"./packages/travelmakers-design-v2-utils/src/getDate/getDate.tsx":function(oe,T,e){"use strict";e.d(T,"e",function(){return R}),e.d(T,"a",function(){return s}),e.d(T,"d",function(){return n}),e.d(T,"b",function(){return t}),e.d(T,"c",function(){return ne});var M=e("./node_modules/core-js/modules/es.date.to-string.js"),J=e.n(M),D=e("./node_modules/dayjs/dayjs.min.js"),F=e.n(D),C=e("./node_modules/dayjs/plugin/timezone.js"),N=e.n(C),z=e("./node_modules/dayjs/plugin/utc.js"),Q=e.n(z);F.a.extend(Q.a),F.a.extend(N.a);function W(G){return G<10?"0"+G:G}function V(){return F.a}function w(G){var X=G?new Date(G):new Date,Z=X.getTime()+X.getTimezoneOffset()*60*1e3,se=9*60*60*1e3,ve=new Date(Z+se);return ve}function R(G){if(!G){var X=F()().tz("Asia/Seoul");return X}var Z=F()(G+"+0900").tz("Asia/Seoul");if(!Z.isValid()){var se=F()(""+G).tz("Asia/Seoul");return se}return Z}function s(G,X){var Z=R(G),se=X!=null?X:"/";return Z.year()+se+(Z.month()+1)+se+Z.date()}function n(G,X){var Z=R(G),se=X!=null?X:"/";return Z.year()+se+(Z.month()+1)+se+Z.date()+" "+Z.hour()+":"+W(Z.minute())}function t(G,X){var Z=R(G),se=X!=null?X:":";return W(Z.hour())+se+W(Z.minute())}function ne(G){var X=R(G),Z=X.day(),se=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];return se[Z]+"\uC694\uC77C"}},"./packages/travelmakers-design-v2-utils/src/getDate/stories/getDate.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return V});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(M),D=e("./packages/travelmakers-design-v2-utils/src/getDate/getDate.tsx"),F=e("./node_modules/react/index.js"),C=e.n(F),N=e("./node_modules/react/jsx-runtime.js"),z=e.n(N),Q=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { getDate, getDateTime, getDay, getFullDate } from \\"../getDate\\";\\n\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getDate\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":35},"endLoc":{"col":1,"line":47},"startBody":{"col":23,"line":35},"endBody":{"col":1,"line":47}}};
    
import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

import React from "react";

export default {
  title: "@travelmakers-design-v2/utils/getDate",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      getDate: {getDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDateTime: {getDateTime("2022-12-22T01:37:27.391Z")}
      <br />
      getFullDate: {getFullDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDay: {getDay("2022-12-22T01:37:27.391Z")}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}},Q=`import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

import React from "react";

export default {
  title: "@travelmakers-design-v2/utils/getDate",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      getDate: {getDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDateTime: {getDateTime("2022-12-22T01:37:27.391Z")}
      <br />
      getFullDate: {getFullDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDay: {getDay("2022-12-22T01:37:27.391Z")}
    </div>
  );
};
`,W={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:47},startBody:{col:23,line:35},endBody:{col:1,line:47}}};T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { getDate, getDateTime, getDay, getFullDate } from \\"../getDate\\";\\n\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getDate\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":35},"endLoc":{"col":1,"line":47},"startBody":{"col":23,"line":35},"endBody":{"col":1,"line":47}}};
    
import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

import React from "react";

export default {
  title: "@travelmakers-design-v2/utils/getDate",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      getDate: {getDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDateTime: {getDateTime("2022-12-22T01:37:27.391Z")}
      <br />
      getFullDate: {getFullDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDay: {getDay("2022-12-22T01:37:27.391Z")}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/utils/getDate",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}};var V=function(R){return Object(N.jsxs)("div",{children:["getDate: ",Object(D.a)("2022-12-22T01:37:27.391Z"),Object(N.jsx)("br",{}),"getDateTime: ",Object(D.b)("2022-12-22T01:37:27.391Z"),Object(N.jsx)("br",{}),"getFullDate: ",Object(D.d)("2022-12-22T01:37:27.391Z"),Object(N.jsx)("br",{}),"getDay: ",Object(D.c)("2022-12-22T01:37:27.391Z")]})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      getDate: {getDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDateTime: {getDateTime("2022-12-22T01:37:27.391Z")}
      <br />
      getFullDate: {getFullDate("2022-12-22T01:37:27.391Z")}
      <br />
      getDay: {getDay("2022-12-22T01:37:27.391Z")}
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-v2-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return W});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js");function D(V){switch(V){case"checkout_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_purchase_before":case"reservation_purchase_done":case"checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"day_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"extend_purchase_before":case"extend_purchase_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"extend_checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"reservation_change_process":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_cancel":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!0,callable:!0},reservationChangeButton:{visible:!1,callable:!1}};case"tour_confirm_before":case"tour_confirm":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"tour_cancel":case"tour_done":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};default:return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!0},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}}}}var F=D,C=e("./node_modules/react/jsx-runtime.js"),N=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { getReservationsCallable } from \\"../getReservationsCallable\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getReservationsCallable\\",\\n  argTypes: {\\n    state: {},\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":11},"endLoc":{"col":1,"line":13},"startBody":{"col":23,"line":11},"endBody":{"col":1,"line":13}}};
    
import React from "react";
import { getReservationsCallable } from "../getReservationsCallable";

export default {
  title: "@travelmakers-design-v2/utils/getReservationsCallable",
  argTypes: {
    state: {},
  },
};

export const Default = (props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},N=`import React from "react";
import { getReservationsCallable } from "../getReservationsCallable";

export default {
  title: "@travelmakers-design-v2/utils/getReservationsCallable",
  argTypes: {
    state: {},
  },
};

export const Default = (props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
};
`,z={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:13},startBody:{col:23,line:11},endBody:{col:1,line:13}}},Q=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { getReservationsCallable } from \\"../getReservationsCallable\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getReservationsCallable\\",\\n  argTypes: {\\n    state: {},\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":11},"endLoc":{"col":1,"line":13},"startBody":{"col":23,"line":11},"endBody":{"col":1,"line":13}}};
    
import React from "react";
import { getReservationsCallable } from "../getReservationsCallable";

export default {
  title: "@travelmakers-design-v2/utils/getReservationsCallable",
  argTypes: {
    state: {},
  },
};

export const Default = (props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design-v2/utils/getReservationsCallable",argTypes:{state:{}}},W=function(w){return Object(C.jsx)("div",{children:JSON.stringify(D("tour_cancel"))})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`(props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
}`}},W.parameters)},"./packages/travelmakers-design-v2-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return w});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-v2-utils/src/getDate/getDate.tsx"),F=e("./packages/travelmakers-design-v2-utils/src/utils/getTimeStamp.ts");function C(R){switch(R){case"default":case"tour_cancel":case"reservation_cancel":return{enum:R,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(){return"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?"},buttonText:function(){return"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_confirm_before":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return n},buttonText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"tour_confirm":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(F.a)(Object(D.e)(n))+" \uD22C\uC5B4\uAC00 \uD655\uC815\uB410\uC5B4\uC694"},buttonText:function(){return"\uC57D\uC18D\uC2DC\uAC04\uC5D0 \uAF2D \uBC29\uBB38\uD574\uC8FC\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_done":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(){return"\uD22C\uC5B4\uB294 \uC5B4\uB5A0\uC168\uB098\uC694?"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"reservation_purchase_before":return{enum:R,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uC544\uC9C1 \uC785\uAE08\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"reservation_purchase_done":return{enum:R,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(n){return Object(F.a)(Object(D.e)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkin_before":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(F.b)(Object(D.e)(n))+" \uCCB4\uD06C\uC778 \uC608\uC815\uC774\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return"\uCCB4\uD06C\uC544\uC6C3\uC740 "+Object(F.b)(Object(D.e)(n))+"\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"checkout_before":return{enum:R,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uC5F0\uC7A5\uD558\uC2DC\uACA0\uC5B4\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_before_n":return{enum:R,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(n){return Object(F.b)(Object(D.e)(n))+" \uCCB4\uD06C\uC544\uC6C3 \uC785\uB2C8\uB2E4"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_done":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC740 \uC5B4\uB5A0\uC168\uB098\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"}}}function N(R,s){switch(R){case"default":case"tour_cancel":case"reservation_cancel":return{first:s.first.userName,second:null,buttonText:null};case"tour_confirm_before":return{first:s.first.userName,second:s.second.hotelName,buttonText:null};case"tour_confirm":return{first:s.first.userName,second:s.second.startDate,buttonText:null};case"tour_done":return{first:s.first.userName,second:null,buttonText:null};case"reservation_purchase_before":return{first:s.first.userName,second:s.second.hotelName,buttonText:null};case"reservation_purchase_done":return{first:s.first.userName,second:s.second.hotelName,buttonText:s.buttonText.expectedDate};case"checkin_before":return{first:s.first.userName,second:s.second.startDate,buttonText:null};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{first:s.first.userName,second:s.second.endDate,buttonText:null};case"checkout_before":return{first:s.first.hotelName,second:""+s.second.dDay,buttonText:null};case"checkout_before_n":return{first:s.first.hotelName,second:""+s.second.dDay,buttonText:s.buttonText.endDate};case"checkout_done":return{first:s.first.userName,second:s.second.hotelName,buttonText:null};default:return{first:null,second:null,buttonText:null}}}var z=e("./node_modules/react/jsx-runtime.js"),Q=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\n\\nimport { getTimeLineFunc } from \\"../getTimeLineFunc\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getTimeLineFunc\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":35},"endLoc":{"col":1,"line":58},"startBody":{"col":23,"line":35},"endBody":{"col":1,"line":58}}};
    
import React from "react";

import { getTimeLineFunc } from "../getTimeLineFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      firstLineText: {getTimeLineFunc("default").firstLineText("\uD64D\uAE38\uB3D9")}
      <br />
      secondLineText(default): {getTimeLineFunc("default").secondLineText()}
      <br />
      secondLineText(tour_confirm_before):
      {getTimeLineFunc("reservation_purchase_before").secondLineText(
        "\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"
      )}
      <br />
      secondLineText(tour_confirm):
      {getTimeLineFunc("tour_confirm").secondLineText(
        "2022-09-28T01:26:38.000000Z"
      )}
      <br />
      buttonText: {getTimeLineFunc("default").buttonText()}
      <br />
      ---- <br />
      getTimeLineFunc(\`state\`)
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}},Q=`import React from "react";

import { getTimeLineFunc } from "../getTimeLineFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      firstLineText: {getTimeLineFunc("default").firstLineText("\uD64D\uAE38\uB3D9")}
      <br />
      secondLineText(default): {getTimeLineFunc("default").secondLineText()}
      <br />
      secondLineText(tour_confirm_before):
      {getTimeLineFunc("reservation_purchase_before").secondLineText(
        "\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"
      )}
      <br />
      secondLineText(tour_confirm):
      {getTimeLineFunc("tour_confirm").secondLineText(
        "2022-09-28T01:26:38.000000Z"
      )}
      <br />
      buttonText: {getTimeLineFunc("default").buttonText()}
      <br />
      ---- <br />
      getTimeLineFunc(\`state\`)
    </div>
  );
};
`,W={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:58},startBody:{col:23,line:35},endBody:{col:1,line:58}}},V=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\n\\nimport { getTimeLineFunc } from \\"../getTimeLineFunc\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getTimeLineFunc\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":35},"endLoc":{"col":1,"line":58},"startBody":{"col":23,"line":35},"endBody":{"col":1,"line":58}}};
    
import React from "react";

import { getTimeLineFunc } from "../getTimeLineFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      firstLineText: {getTimeLineFunc("default").firstLineText("\uD64D\uAE38\uB3D9")}
      <br />
      secondLineText(default): {getTimeLineFunc("default").secondLineText()}
      <br />
      secondLineText(tour_confirm_before):
      {getTimeLineFunc("reservation_purchase_before").secondLineText(
        "\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"
      )}
      <br />
      secondLineText(tour_confirm):
      {getTimeLineFunc("tour_confirm").secondLineText(
        "2022-09-28T01:26:38.000000Z"
      )}
      <br />
      buttonText: {getTimeLineFunc("default").buttonText()}
      <br />
      ---- <br />
      getTimeLineFunc(\`state\`)
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/utils/getTimeLineFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},w=function(s){return Object(z.jsxs)("div",{children:["firstLineText: ",C("default").firstLineText("\uD64D\uAE38\uB3D9"),Object(z.jsx)("br",{}),"secondLineText(default): ",C("default").secondLineText(),Object(z.jsx)("br",{}),"secondLineText(tour_confirm_before):",C("reservation_purchase_before").secondLineText("\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"),Object(z.jsx)("br",{}),"secondLineText(tour_confirm):",C("tour_confirm").secondLineText("2022-09-28T01:26:38.000000Z"),Object(z.jsx)("br",{}),"buttonText: ",C("default").buttonText(),Object(z.jsx)("br",{}),"---- ",Object(z.jsx)("br",{}),"getTimeLineFunc(`state`)"]})};w.displayName="Default",w.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      firstLineText: {getTimeLineFunc("default").firstLineText("\uD64D\uAE38\uB3D9")}
      <br />
      secondLineText(default): {getTimeLineFunc("default").secondLineText()}
      <br />
      secondLineText(tour_confirm_before):
      {getTimeLineFunc("reservation_purchase_before").secondLineText(
        "\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"
      )}
      <br />
      secondLineText(tour_confirm):
      {getTimeLineFunc("tour_confirm").secondLineText(
        "2022-09-28T01:26:38.000000Z"
      )}
      <br />
      buttonText: {getTimeLineFunc("default").buttonText()}
      <br />
      ---- <br />
      getTimeLineFunc(\`state\`)
    </div>
  );
}`}},w.parameters)},"./packages/travelmakers-design-v2-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return R});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-v2-utils/src/getDate/getDate.tsx"),F=e("./packages/travelmakers-design-v2-utils/src/utils/getCountDown.ts"),C=e("./packages/travelmakers-design-v2-utils/src/utils/getTimeStamp.ts");function N(s){switch(s){case"tour_confirm_before":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:s,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ne=Object(F.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ne=Object(F.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:s,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:s,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:s,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:s,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:s,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:s,firstLineText:function(){return""},secondLineText:function(){return""},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}}}}function z(s,n){switch(s){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName};case"checkout_done":return{first:null,second:null,third:n.third.hotelName};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName};default:return{first:null,second:null,third:n.third.hotelName}}}var Q=e("./node_modules/react/jsx-runtime.js"),W=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { getTimeLineStateDetailFunc } from \\"../getTimeLineStateDetailFunc\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":42},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":42}}};
    
import React from "react";
import { getTimeLineStateDetailFunc } from "../getTimeLineStateDetailFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}},W=`import React from "react";
import { getTimeLineStateDetailFunc } from "../getTimeLineStateDetailFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
};
`,V={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}},w=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { getTimeLineStateDetailFunc } from \\"../getTimeLineStateDetailFunc\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":42},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":42}}};
    
import React from "react";
import { getTimeLineStateDetailFunc } from "../getTimeLineStateDetailFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},R=function(n){return Object(Q.jsx)("div",{children:N("reservation_purchase_before").secondLineText("2022-12-24T02:24:01.616Z")})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
}`}},R.parameters)},"./packages/travelmakers-design-v2-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":function(oe,T,e){"use strict";e.r(T),e.d(T,"Default",function(){return R});var M=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-v2-utils/src/utils/getTimeStamp.ts"),F=e("./packages/travelmakers-design-v2-utils/src/utils/getCountDown.ts"),C=e("./packages/travelmakers-design-v2-utils/src/getDate/getDate.tsx");function N(s){switch(s){case"tour_confirm_before":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:s,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ne=Object(F.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ne=Object(F.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:s,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:s,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:s,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:s,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:s,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:s,firstLineText:function(){return""},secondLineText:function(){return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}}}}function z(s,n){switch(s){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"checkout_done":return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};default:return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType}}}var Q=e("./node_modules/react/jsx-runtime.js"),W=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\n\\nimport { getTimeLineStateFunc } from \\"../getTimeLineStateFunc\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getTimeLineStateFunc\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":35},"endLoc":{"col":1,"line":43},"startBody":{"col":23,"line":35},"endBody":{"col":1,"line":43}}};
    
import React from "react";

import { getTimeLineStateFunc } from "../getTimeLineStateFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineStateFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}},W=`import React from "react";

import { getTimeLineStateFunc } from "../getTimeLineStateFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineStateFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
};
`,V={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:43},startBody:{col:23,line:35},endBody:{col:1,line:43}}},w=T.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\n\\nimport { getTimeLineStateFunc } from \\"../getTimeLineStateFunc\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/utils/getTimeLineStateFunc\\",\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"default\\",\\n        \\"tour_confirm_before\\",\\n        \\"tour_confirm\\",\\n        \\"tour_doen\\",\\n        \\"reservation_purchase_before\\",\\n        \\"reservation_purchase_done\\",\\n        \\"checkin_before\\",\\n        \\"day_n\\",\\n        \\"extend_purchase_before\\",\\n        \\"extend_purchase_done\\",\\n        \\"extend_checkin_before\\",\\n        \\"reservation_change_process\\",\\n        \\"checkout_before\\",\\n        \\"checkout_before_n\\",\\n        \\"checkout_done\\",\\n        \\"tour_cancel\\",\\n        \\"reservation_cancel\\",\\n      ],\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":35},"endLoc":{"col":1,"line":43},"startBody":{"col":23,"line":35},"endBody":{"col":1,"line":43}}};
    
import React from "react";

import { getTimeLineStateFunc } from "../getTimeLineStateFunc";

export default {
  title: "@travelmakers-design-v2/utils/getTimeLineStateFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},R=function(n){return Object(Q.jsx)("div",{children:N("reservation_purchase_before").secondLineText("2023-02-08T23:24:01.616Z")})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
}`}},R.parameters)},"./packages/travelmakers-design-v2-utils/src/utils/getCountDown.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return n});var M=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(M),D=e("./node_modules/core-js/modules/es.regexp.to-string.js"),F=e.n(D),C=e("./node_modules/core-js/modules/es.date.to-string.js"),N=e.n(C),z=e("./node_modules/core-js/modules/es.string.pad-start.js"),Q=e.n(z),W=e("./node_modules/core-js/modules/es.string.replace.js"),V=e.n(W),w=e("./node_modules/core-js/modules/es.regexp.exec.js"),R=e.n(w),s=e("./packages/travelmakers-design-v2-utils/src/getDate/getDate.tsx");function n(t){var ne="HH\uC2DC\uAC04 mm\uBD84",G=Object(s.e)(t),X=1e3,Z=X*60,se=Z*60,ve=se*24,me=function(){var de=G.toDate().getTime()-Object(s.e)().toDate().getTime(),U={days:"0",hours:"0",minutes:"0",seconds:"0"};return de>0&&(U={days:Math.floor(de/ve).toString(),hours:Math.floor(de/se%24).toString(),minutes:Math.floor(de/X/60%60).toString().padStart(2,"0"),seconds:Math.floor(de/X%60).toString().padStart(2,"0")}),!G||!U?"":ne.replace("D",U.days).replace("HH",U.hours).replace("mm",U.minutes).replace("ss",U.seconds)};return me()}},"./packages/travelmakers-design-v2-utils/src/utils/getTimeStamp.ts":function(oe,T,e){"use strict";e.d(T,"a",function(){return J}),e.d(T,"b",function(){return D});function M(F){return F<10?"0"+F:F}function J(F,C){var N=F;return C?N.month()+1+"\uC6D4 "+N.date()+"\uC77C "+N.hour()+":"+M(N.minute()):N.month()+1+"\uC6D4 "+N.date()+"\uC77C "}function D(F){var C=F;return C.month()+1+"\uC6D4 "+C.date()+"\uC77C "+C.hour()+"\uC2DC"}},"./storybook-init-framework-entry.js":function(oe,T,e){"use strict";e.r(T);var M=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,T,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,T){}},[[0,4,5]]]);
