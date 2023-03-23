(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,h,e){"use strict";e.r(h);var P={};e.r(P),e.d(P,"parameters",function(){return l}),e.d(P,"decorators",function(){return T});var J=e("./node_modules/core-js/modules/es.object.keys.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.array.filter.js"),C=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),V=e("./node_modules/core-js/modules/es.array.for-each.js"),H=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),W=e("./node_modules/core-js/modules/es.object.define-properties.js"),z=e("./node_modules/core-js/modules/es.object.define-property.js"),N=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),R=e("./node_modules/core-js/modules/es.array.is-array.js"),s=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ne=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),se=e("./node_modules/core-js/modules/es.function.name.js"),ve=e("./node_modules/core-js/modules/es.array.from.js"),fe=e("./node_modules/react/index.js"),ae=e("./node_modules/react/jsx-runtime.js");function de(p,j){return ee(p)||w(p,j)||le(p,j)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(p,j){if(p){if(typeof p=="string")return te(p,j);var E=Object.prototype.toString.call(p).slice(8,-1);if(E==="Object"&&p.constructor&&(E=p.constructor.name),E==="Map"||E==="Set")return Array.from(p);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return te(p,j)}}function te(p,j){(j==null||j>p.length)&&(j=p.length);for(var E=0,v=new Array(j);E<j;E++)v[E]=p[E];return v}function w(p,j){var E=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(E!=null){var v,u,o,O,U=[],_=!0,L=!1;try{if(o=(E=E.call(p)).next,j===0){if(Object(E)!==E)return;_=!1}else for(;!(_=(v=o.call(E)).done)&&(U.push(v.value),U.length!==j);_=!0);}catch(x){L=!0,u=x}finally{try{if(!_&&E.return!=null&&(O=E.return(),Object(O)!==O))return}finally{if(L)throw u}}return U}}function ee(p){if(Array.isArray(p))return p}var re=Object(fe.createContext)(null),pe=function(){var j=Object(fe.useContext)(re);if(!j)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return j},K=function(j){var E=j.colorScheme,v=j.toggleColorScheme,u=j.children,o=Object(fe.useState)("init"),O=de(o,2),U=O[0],_=O[1];return Object(fe.useEffect)(function(){_("update")},[]),Object(ae.jsx)(re.Provider,{value:{colorScheme:E,toggleColorScheme:v},children:u},U)};K.displayName="ColorSchemeProvider",K.displayName="@travelmakers-design-v2/styles/ColorSchemeProvider";var y=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),i=e("./node_modules/@storybook/theming/dist/esm/index.js"),m=e("./node_modules/storybook-dark-mode/dist/index.js"),l={layout:"fullscreen",docs:{theme:i.themes.light},darkMode:{current:"dark"}};function g(p){var j=Object(m.useDarkMode)()?"dark":"light";return Object(ae.jsx)(K,{colorScheme:j,toggleColorScheme:function(){},children:Object(ae.jsx)(y.a,{theme:{colorScheme:j},withGlobalStyles:!0,withNormalizeCSS:!0,children:p.children})})}g.displayName="ThemeWrapper";var T=[function(p){return Object(ae.jsx)(g,{children:p()})}];function d(p,j){var E=Object.keys(p);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(p);j&&(v=v.filter(function(u){return Object.getOwnPropertyDescriptor(p,u).enumerable})),E.push.apply(E,v)}return E}function b(p){for(var j=1;j<arguments.length;j++){var E=arguments[j]!=null?arguments[j]:{};j%2?d(Object(E),!0).forEach(function(v){c(p,v,E[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(E)):d(Object(E)).forEach(function(v){Object.defineProperty(p,v,Object.getOwnPropertyDescriptor(E,v))})}return p}function c(p,j,E){return j in p?Object.defineProperty(p,j,{value:E,enumerable:!0,configurable:!0,writable:!0}):p[j]=E,p}Object.keys(P).forEach(function(p){var j=P[p];switch(p){case"args":return Object(N.d)(j);case"argTypes":return Object(N.b)(j);case"decorators":return j.forEach(function(v){return Object(N.f)(v,!1)});case"loaders":return j.forEach(function(v){return Object(N.g)(v,!1)});case"parameters":return Object(N.h)(b({},j),!1);case"argTypesEnhancers":return j.forEach(function(v){return Object(N.c)(v)});case"argsEnhancers":return j.forEach(function(v){return Object(N.e)(v)});case"render":return Object(N.i)(j);case"globals":case"globalTypes":{var E={};return E[p]=j,Object(N.h)(E,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(p+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,h,e){"use strict";(function(P){var J=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,J.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],P,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,h,e){var P={"./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx","./travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx","./travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx"};function J(M){var C=D(M);return e(C)}function D(M){if(!e.o(P,M)){var C=new Error("Cannot find module '"+M+"'");throw C.code="MODULE_NOT_FOUND",C}return P[M]}J.keys=function(){return Object.keys(P)},J.resolve=D,oe.exports=J,J.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return v});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./node_modules/react/index.js"),M=e("./node_modules/core-js/modules/es.object.keys.js"),C=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.string.italics.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),W=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.map.js"),R=e("./node_modules/core-js/modules/es.array.for-each.js"),s=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),n=e("./node_modules/core-js/modules/es.array.is-array.js"),t=e("./node_modules/core-js/modules/es.symbol.description.js"),ne=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e("./node_modules/core-js/modules/es.array.iterator.js"),se=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ve=e("./node_modules/core-js/modules/es.array.slice.js"),fe=e("./node_modules/core-js/modules/es.array.from.js");function ae(u,o){return w(u)||te(u,o)||I(u,o)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(u,o){if(u){if(typeof u=="string")return le(u,o);var O=Object.prototype.toString.call(u).slice(8,-1);if(O==="Object"&&u.constructor&&(O=u.constructor.name),O==="Map"||O==="Set")return Array.from(u);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return le(u,o)}}function le(u,o){(o==null||o>u.length)&&(o=u.length);for(var O=0,U=new Array(o);O<o;O++)U[O]=u[O];return U}function te(u,o){var O=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(O!=null){var U,_,L,x,A=[],Y=!0,G=!1;try{if(L=(O=O.call(u)).next,o===0){if(Object(O)!==O)return;Y=!1}else for(;!(Y=(U=L.call(O)).done)&&(A.push(U.value),A.length!==o);Y=!0);}catch(ce){G=!0,_=ce}finally{try{if(!Y&&O.return!=null&&(x=O.return(),Object(x)!==x))return}finally{if(G)throw _}}return A}}function w(u){if(Array.isArray(u))return u}function ee(u){var o={};return Object.keys(u).forEach(function(O){var U=ae(u[O],2),_=U[0],L=U[1];o[_]=L}),o}var re=e("./node_modules/core-js/modules/es.array.reduce.js");function pe(u,o,O){return Object.keys(o).reduce(function(U,_){return U[_]=u(o[_],O?"tm-"+O+"-"+_:null),U},{})}var K=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function y(u){var o=typeof u=="function"?u:function(){return u};function O(U,_){var L=Object(Q.c)(),x=Object(Q.d)()[_==null?void 0:_.name],A=Object(K.a)(),Y=A.css,G=A.cx,ce=A.cssRn,ie=0;function q(ge){return ie+=1,"tm-ref_"+(ge||"")+"_"+ie}var me=o(L,U,q),he=typeof(_==null?void 0:_.overrideStyles)=="function"?_==null?void 0:_.overrideStyles(L):(_==null?void 0:_.overrideStyles)||{},be=typeof x=="function"?x(L):x||{},Te=typeof(_==null?void 0:_.tm)=="function"?_.tm(L):_==null?void 0:_.tm,Ce=ee(Object.keys(me).map(function(ge){var je=G(Y(me[ge]),Y(be[ge]),Y(he[ge]),Y(Te));return[ge,je]}));return{classes:pe(G,Ce,_==null?void 0:_.name),cx:G,theme:L}}return O}var i=function(o){return{display1:{lineHeight:o.lineHeights.display1+"px",fontSize:o.fontSizes.display1},display2:{lineHeight:o.lineHeights.display2+"px",fontSize:o.fontSizes.display2},display3:{lineHeight:o.lineHeights.display3+"px",fontSize:o.fontSizes.display3},display4:{lineHeight:o.lineHeights.display4+"px",fontSize:o.fontSizes.display4},display5:{lineHeight:o.lineHeights.display5+"px",fontSize:o.fontSizes.display5},display6:{lineHeight:o.lineHeights.display6+"px",fontSize:o.fontSizes.display6},subhead1:{lineHeight:o.lineHeights.subhead1+"px",fontSize:o.fontSizes.subhead1},subhead2:{lineHeight:o.lineHeights.subhead2+"px",fontSize:o.fontSizes.subhead2},body1:{lineHeight:o.lineHeights.body1+"px",fontSize:o.fontSizes.body1},body2:{lineHeight:o.lineHeights.body2+"px",fontSize:o.fontSizes.body2},body3:{lineHeight:o.lineHeights.body3+"px",fontSize:o.fontSizes.body3},caption:{lineHeight:o.lineHeights.caption+"px",fontSize:o.fontSizes.caption}}},m=function(o){if(o!=="Pretendard")return{fontFamily:o+", var("+(o==="Noto Serif KR"?"--font-noto-serif":o==="PT Serif"&&"--font-pt-serif")}},l=y(function(u,o,O){var U,_=o.family,L=o.level,x=o.textAlign,A=o.disabled,Y=o.strong,G=o.italic,ce=o.underline,ie=o.color,q=o.mobile,me=o.tablet;return{solid:{fontWeight:Y?_==="Noto Serif KR"?600:700:400,fontStyle:G?"italic":"normal",textDecoration:ce?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},i(u)[L],m(_),(U={color:A?u.colors.primary4:ie||u.colors.black,textAlign:""+x},U[""+u.media.mobile]=Object.assign({},i(u)[q]),U[""+u.media.tablet]=Object.assign({},i(u)[me]),U))}}),g=e("./node_modules/react/jsx-runtime.js"),T=["id","children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function d(u,o){if(u==null)return{};var O=b(u,o),U,_;if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(u);for(_=0;_<L.length;_++)U=L[_],!(o.indexOf(U)>=0)&&Object.prototype.propertyIsEnumerable.call(u,U)&&(O[U]=u[U])}return O}function b(u,o){if(u==null)return{};var O={},U=Object.keys(u),_,L;for(L=0;L<U.length;L++)_=U[L],!(o.indexOf(_)>=0)&&(O[_]=u[_]);return O}var c=Object(D.forwardRef)(function(u,o){var O=u.id,U=u.children,_=u.component,L=u.family,x=L===void 0?"Pretendard":L,A=u.level,Y=A===void 0?"body1":A,G=u.mobileLevel,ce=u.tabletLevel,ie=u.textAlign,q=ie===void 0?"left":ie,me=u.disabled,he=me===void 0?!1:me,be=u.strong,Te=be===void 0?!1:be,Ce=u.italic,ge=Ce===void 0?!1:Ce,je=u.underline,Le=je===void 0?!1:je,Ee=u.color,xe=u.className,Fe=u.co,ke=u.overrideStyles,Se=d(u,T),Pe=Object(Q.c)(),Me=l({family:x,level:Y,disabled:he,strong:Te,italic:ge,underline:Le,textAlign:q,color:Ee,mobile:G,tablet:ce},{overrideStyles:ke,name:"typography"}),Ae=Me.classes,Be=Me.cx;return Object(g.jsx)(W.a,Object.assign({component:_||"span",ref:o,disabled:he,className:Be(Ae.root,Ae.solid,xe),co:Fe,onTouchStart:function(){}},Se,{children:U}))});c.displayName="@travelmakers-design-v2/core/Typography";var p=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"body1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Noto Serif KR\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n};\\n";
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
      defaultValue: "Noto Serif KR",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:178},endLoc:{col:1,line:219},startBody:{col:23,line:178},endBody:{col:1,line:219}}},p=`import {
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
      defaultValue: "Noto Serif KR",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
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
`,j={Default:{startLoc:{col:23,line:170},endLoc:{col:1,line:211},startBody:{col:23,line:170},endBody:{col:1,line:211}}},E=h.default={title:"@travelmakers-design-v2/core/General/Typography",component:c,argTypes:{level:{defaultValue:"body1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"body1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Noto Serif KR\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\", \\"PT Serif\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n};\\n";
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
      defaultValue: "Noto Serif KR",
      description: "Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
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
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,h,e){"use strict";e.d(h,"a",function(){return de});var P=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(P),D=e("./node_modules/core-js/modules/es.array.map.js"),M=e.n(D),C=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(C),H=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e.n(H),W=e("./node_modules/core-js/modules/es.array.index-of.js"),z=e.n(W),N=e("./node_modules/core-js/modules/es.symbol.js"),R=e.n(N),s=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),n=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/react/index.js"),ne=e.n(t),Z=e("./node_modules/react/jsx-runtime.js"),X=e.n(Z),$=["component","className","style","co"];function se(I,le){if(I==null)return{};var te=ve(I,le),w,ee;if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(I);for(ee=0;ee<re.length;ee++)w=re[ee],!(le.indexOf(w)>=0)&&Object.prototype.propertyIsEnumerable.call(I,w)&&(te[w]=I[w])}return te}function ve(I,le){if(I==null)return{};var te={},w=Object.keys(I),ee,re;for(re=0;re<w.length;re++)ee=w[re],!(le.indexOf(ee)>=0)&&(te[ee]=I[ee]);return te}function fe(I,le){return typeof I=="function"?I(le):I}function ae(I,le){var te=Object(s.a)(),w=te.css,ee=te.cx,re=Object(n.c)();return Array.isArray(I)?ee(le,I.map(function(pe){return w(fe(pe,re))})):ee(le,w(fe(I,re)))}var de=Object(t.forwardRef)(function(I,le){var te=I.component,w=I.className,ee=I.style,re=I.co,pe=se(I,$),K=te||"div";return Object(Z.jsx)(K,Object.assign({ref:le,className:ae(re,w),style:ee},pe))});de.displayName="@travelmakers-design-v2/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return z});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(P),D=e("./node_modules/react/index.js"),M=e.n(D),C=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./node_modules/react/jsx-runtime.js"),H=e.n(V),Q=`
    
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
`,W={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/core/General/View",component:C.a};var z=function(){return Object(V.jsx)(C.a,{co:function(s){return{width:100,height:100,backgroundColor:s.colors.gray3}}})};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},z.parameters)},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return C});var P=e("./node_modules/core-js/modules/es.array.concat.js"),J=e.n(P),D=e("./node_modules/react/index.js"),M=e.n(D),C=function(H){var Q=Object(D.useRef)(H);return Object(D.useEffect)(function(){Q.current=H},[H]),Object(D.useMemo)(function(){return function(){for(var W,z=arguments.length,N=new Array(z),R=0;R<z;R++)N[R]=arguments[R];return(W=Q.current)===null||W===void 0?void 0:W.call.apply(W,[Q].concat(N))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return K});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/react/index.js"),n=e("./node_modules/core-js/modules/web.timers.js");function t(y,i){return se(y)||$(y,i)||Z(y,i)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(y,i){if(y){if(typeof y=="string")return X(y,i);var m=Object.prototype.toString.call(y).slice(8,-1);if(m==="Object"&&y.constructor&&(m=y.constructor.name),m==="Map"||m==="Set")return Array.from(y);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return X(y,i)}}function X(y,i){(i==null||i>y.length)&&(i=y.length);for(var m=0,l=new Array(i);m<i;m++)l[m]=y[m];return l}function $(y,i){var m=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(m!=null){var l,g,T,d,b=[],c=!0,p=!1;try{if(T=(m=m.call(y)).next,i===0){if(Object(m)!==m)return;c=!1}else for(;!(c=(l=T.call(m)).done)&&(b.push(l.value),b.length!==i);c=!0);}catch(j){p=!0,g=j}finally{try{if(!c&&m.return!=null&&(d=m.return(),Object(d)!==d))return}finally{if(p)throw g}}return b}}function se(y){if(Array.isArray(y))return y}var ve=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=i.timeout,l=m===void 0?2e3:m,g=Object(s.useState)(null),T=t(g,2),d=T[0],b=T[1],c=Object(s.useState)(!1),p=t(c,2),j=p[0],E=p[1],v=Object(s.useState)(null),u=t(v,2),o=u[0],O=u[1],U=function(A){clearTimeout(o),O(setTimeout(function(){return E(!1)},l)),E(A)},_=function(A){"clipboard"in navigator?navigator.clipboard.writeText(A).then(function(){return U(!0)}).catch(function(Y){return b(Y)}):b(new Error("useClipboard: navigator.clipboard is not supported"))},L=function(){E(!1),b(null),clearTimeout(o)};return{copy:_,reset:L,error:d,copied:j}},fe=e("./node_modules/react/jsx-runtime.js");function ae(y,i){return w(y)||te(y,i)||I(y,i)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(y,i){if(y){if(typeof y=="string")return le(y,i);var m=Object.prototype.toString.call(y).slice(8,-1);if(m==="Object"&&y.constructor&&(m=y.constructor.name),m==="Map"||m==="Set")return Array.from(y);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return le(y,i)}}function le(y,i){(i==null||i>y.length)&&(i=y.length);for(var m=0,l=new Array(i);m<i;m++)l[m]=y[m];return l}function te(y,i){var m=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(m!=null){var l,g,T,d,b=[],c=!0,p=!1;try{if(T=(m=m.call(y)).next,i===0){if(Object(m)!==m)return;c=!1}else for(;!(c=(l=T.call(m)).done)&&(b.push(l.value),b.length!==i);c=!0);}catch(j){p=!0,g=j}finally{try{if(!c&&m.return!=null&&(d=m.return(),Object(d)!==d))return}finally{if(p)throw g}}return b}}function w(y){if(Array.isArray(y))return y}var ee=`
    
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
`,re={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},pe=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design-v2/hooks/useClipboard"},K=function(){var i=Object(s.useState)(""),m=ae(i,2),l=m[0],g=m[1],T=ve({timeout:3e3}),d=T.copy,b=T.copied;return Object(fe.jsxs)("div",{children:[Object(fe.jsx)("input",{type:"text",onChange:function(p){return g(p.target.value)}}),Object(fe.jsx)("button",{onClick:function(){return d(l)},children:"copy"}),Object(fe.jsx)("span",{children:b&&"Copied!!"})]})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return y});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),t=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ne(i,m){return ve(i)||se(i,m)||X(i,m)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(i,m){if(i){if(typeof i=="string")return $(i,m);var l=Object.prototype.toString.call(i).slice(8,-1);if(l==="Object"&&i.constructor&&(l=i.constructor.name),l==="Map"||l==="Set")return Array.from(i);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return $(i,m)}}function $(i,m){(m==null||m>i.length)&&(m=i.length);for(var l=0,g=new Array(m);l<m;l++)g[l]=i[l];return g}function se(i,m){var l=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(l!=null){var g,T,d,b,c=[],p=!0,j=!1;try{if(d=(l=l.call(i)).next,m===0){if(Object(l)!==l)return;p=!1}else for(;!(p=(g=d.call(l)).done)&&(c.push(g.value),c.length!==m);p=!0);}catch(E){j=!0,T=E}finally{try{if(!p&&l.return!=null&&(b=l.return(),Object(b)!==b))return}finally{if(j)throw T}}return c}}function ve(i){if(Array.isArray(i))return i}var fe=function(m,l,g){var T=Object(t.a)(m,l),d=ne(T,2),b=d[0],c=d[1];return Object(n.a)(b,g),c},ae=e("./node_modules/react/jsx-runtime.js");function de(i,m){return ee(i)||w(i,m)||le(i,m)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(i,m){if(i){if(typeof i=="string")return te(i,m);var l=Object.prototype.toString.call(i).slice(8,-1);if(l==="Object"&&i.constructor&&(l=i.constructor.name),l==="Map"||l==="Set")return Array.from(i);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return te(i,m)}}function te(i,m){(m==null||m>i.length)&&(m=i.length);for(var l=0,g=new Array(m);l<m;l++)g[l]=i[l];return g}function w(i,m){var l=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(l!=null){var g,T,d,b,c=[],p=!0,j=!1;try{if(d=(l=l.call(i)).next,m===0){if(Object(l)!==l)return;p=!1}else for(;!(p=(g=d.call(l)).done)&&(c.push(g.value),c.length!==m);p=!0);}catch(E){j=!0,T=E}finally{try{if(!p&&l.return!=null&&(b=l.return(),Object(b)!==b))return}finally{if(j)throw T}}return c}}function ee(i){if(Array.isArray(i))return i}var re=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,pe={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},re=`import React, { useState } from "react";

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
`,pe={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},K=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useDebounce"},y=function(){var m=Object(s.useState)(""),l=de(m,2),g=l[0],T=l[1],d=fe(function(){alert("Updated!")},1e3,[g]);return Object(ae.jsxs)("div",{children:[Object(ae.jsx)("input",{type:"text",onChange:function(c){return T(c.target.value)}}),Object(ae.jsx)("button",{onClick:d,children:"Cancel"})]})};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`() => {
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
}`}},y.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return z});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(P),D=e("./node_modules/react/index.js"),M=e.n(D),C=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),V=e("./node_modules/react/jsx-runtime.js"),H=e.n(V),Q=`
    
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
`,W={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useForceUpdate"};var z=function(){var R=Object(C.a)();return Object(V.jsxs)("div",{children:[Math.random(),Object(V.jsx)("button",{onClick:R,children:"Update"})]})};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},z.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return K});var P=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(P),D=e("./node_modules/core-js/modules/es.symbol.js"),M=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e.n(C),H=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e.n(H),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e.n(W),N=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e.n(N),s=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(t),Z=e("./node_modules/core-js/modules/es.array.slice.js"),X=e.n(Z),$=e("./node_modules/core-js/modules/es.function.name.js"),se=e.n($),ve=e("./node_modules/core-js/modules/es.array.from.js"),fe=e.n(ve),ae=e("./node_modules/react/index.js"),de=e.n(ae);function I(y,i){return re(y)||ee(y,i)||te(y,i)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(y,i){if(y){if(typeof y=="string")return w(y,i);var m=Object.prototype.toString.call(y).slice(8,-1);if(m==="Object"&&y.constructor&&(m=y.constructor.name),m==="Map"||m==="Set")return Array.from(y);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return w(y,i)}}function w(y,i){(i==null||i>y.length)&&(i=y.length);for(var m=0,l=new Array(i);m<i;m++)l[m]=y[m];return l}function ee(y,i){var m=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(m!=null){var l,g,T,d,b=[],c=!0,p=!1;try{if(T=(m=m.call(y)).next,i===0){if(Object(m)!==m)return;c=!1}else for(;!(c=(l=T.call(m)).done)&&(b.push(l.value),b.length!==i);c=!0);}catch(j){p=!0,g=j}finally{try{if(!c&&m.return!=null&&(d=m.return(),Object(d)!==d))return}finally{if(p)throw g}}return b}}function re(y){if(Array.isArray(y))return y}var pe=function(i){return(i+1)%1e6},K=function(){var i=Object(ae.useReducer)(pe,0),m=I(i,2),l=m[1];return l}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return W});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function R(t){t.preventDefault()}function s(){document.body.addEventListener("touchmove",R,{passive:!1})}function n(){document.body.removeEventListener("touchmove",R)}return Object(J.useEffect)(function(){return N&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var t=document.body.style.top;document.body.style.cssText=""}},[]),Object(J.useEffect)(function(){return N&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[N]),null},M=D,C=e("./node_modules/react/jsx-runtime.js"),V=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},V=`import React, { useState } from "react";

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
`,H={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}},Q=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useHiddenBodyOverflow"},W=function(){return M(!0),Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"useHiddenBodyOverflow"})})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},W.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return U});var P=e("./node_modules/core-js/modules/es.promise.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),D=e("./node_modules/core-js/modules/web.timers.js"),M=e("./node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),s=e("./node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/react/index.js"),ne=e("./node_modules/core-js/modules/es.object.define-property.js"),Z=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),X=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),$=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),se=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),ve=e("./node_modules/core-js/modules/es.object.create.js"),fe=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),ae=e("./node_modules/core-js/modules/es.array.for-each.js"),de=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),I=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),le=e("./node_modules/core-js/modules/es.array.reverse.js"),te=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function w(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */w=function(){return _};var _={},L=Object.prototype,x=L.hasOwnProperty,A=Object.defineProperty||function(a,r,f){a[r]=f.value},Y=typeof Symbol=="function"?Symbol:{},G=Y.iterator||"@@iterator",ce=Y.asyncIterator||"@@asyncIterator",ie=Y.toStringTag||"@@toStringTag";function q(a,r,f){return Object.defineProperty(a,r,{value:f,enumerable:!0,configurable:!0,writable:!0}),a[r]}try{q({},"")}catch(a){q=function(f,k,F){return f[k]=F}}function me(a,r,f,k){var F=r&&r.prototype instanceof Te?r:Te,B=Object.create(F.prototype),ue=new Be(k||[]);return A(B,"_invoke",{value:Se(a,f,ue)}),B}function he(a,r,f){try{return{type:"normal",arg:a.call(r,f)}}catch(k){return{type:"throw",arg:k}}}_.wrap=me;var be={};function Te(){}function Ce(){}function ge(){}var je={};q(je,G,function(){return this});var Le=Object.getPrototypeOf,Ee=Le&&Le(Le(Re([])));Ee&&Ee!==L&&x.call(Ee,G)&&(je=Ee);var xe=ge.prototype=Te.prototype=Object.create(je);function Fe(a){["next","throw","return"].forEach(function(r){q(a,r,function(f){return this._invoke(r,f)})})}function ke(a,r){function f(F,B,ue,_e){var ye=he(a[F],a,B);if(ye.type!=="throw"){var De=ye.arg,Oe=De.value;return Oe&&typeof Oe=="object"&&x.call(Oe,"__await")?r.resolve(Oe.__await).then(function(Ue){f("next",Ue,ue,_e)},function(Ue){f("throw",Ue,ue,_e)}):r.resolve(Oe).then(function(Ue){De.value=Ue,ue(De)},function(Ue){return f("throw",Ue,ue,_e)})}_e(ye.arg)}var k;A(this,"_invoke",{value:function(B,ue){function _e(){return new r(function(ye,De){f(B,ue,ye,De)})}return k=k?k.then(_e,_e):_e()}})}function Se(a,r,f){var k="suspendedStart";return function(F,B){if(k==="executing")throw new Error("Generator is already running");if(k==="completed"){if(F==="throw")throw B;return S()}for(f.method=F,f.arg=B;;){var ue=f.delegate;if(ue){var _e=Pe(ue,f);if(_e){if(_e===be)continue;return _e}}if(f.method==="next")f.sent=f._sent=f.arg;else if(f.method==="throw"){if(k==="suspendedStart")throw k="completed",f.arg;f.dispatchException(f.arg)}else f.method==="return"&&f.abrupt("return",f.arg);k="executing";var ye=he(a,r,f);if(ye.type==="normal"){if(k=f.done?"completed":"suspendedYield",ye.arg===be)continue;return{value:ye.arg,done:f.done}}ye.type==="throw"&&(k="completed",f.method="throw",f.arg=ye.arg)}}}function Pe(a,r){var f=r.method,k=a.iterator[f];if(k===void 0)return r.delegate=null,f==="throw"&&a.iterator.return&&(r.method="return",r.arg=void 0,Pe(a,r),r.method==="throw")||f!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+f+"' method")),be;var F=he(k,a.iterator,r.arg);if(F.type==="throw")return r.method="throw",r.arg=F.arg,r.delegate=null,be;var B=F.arg;return B?B.done?(r[a.resultName]=B.value,r.next=a.nextLoc,r.method!=="return"&&(r.method="next",r.arg=void 0),r.delegate=null,be):B:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,be)}function Me(a){var r={tryLoc:a[0]};1 in a&&(r.catchLoc=a[1]),2 in a&&(r.finallyLoc=a[2],r.afterLoc=a[3]),this.tryEntries.push(r)}function Ae(a){var r=a.completion||{};r.type="normal",delete r.arg,a.completion=r}function Be(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(Me,this),this.reset(!0)}function Re(a){if(a){var r=a[G];if(r)return r.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var f=-1,k=function F(){for(;++f<a.length;)if(x.call(a,f))return F.value=a[f],F.done=!1,F;return F.value=void 0,F.done=!0,F};return k.next=k}}return{next:S}}function S(){return{value:void 0,done:!0}}return Ce.prototype=ge,A(xe,"constructor",{value:ge,configurable:!0}),A(ge,"constructor",{value:Ce,configurable:!0}),Ce.displayName=q(ge,ie,"GeneratorFunction"),_.isGeneratorFunction=function(a){var r=typeof a=="function"&&a.constructor;return!!r&&(r===Ce||(r.displayName||r.name)==="GeneratorFunction")},_.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,ge):(a.__proto__=ge,q(a,ie,"GeneratorFunction")),a.prototype=Object.create(xe),a},_.awrap=function(a){return{__await:a}},Fe(ke.prototype),q(ke.prototype,ce,function(){return this}),_.AsyncIterator=ke,_.async=function(a,r,f,k,F){F===void 0&&(F=Promise);var B=new ke(me(a,r,f,k),F);return _.isGeneratorFunction(r)?B:B.next().then(function(ue){return ue.done?ue.value:B.next()})},Fe(xe),q(xe,ie,"Generator"),q(xe,G,function(){return this}),q(xe,"toString",function(){return"[object Generator]"}),_.keys=function(a){var r=Object(a),f=[];for(var k in r)f.push(k);return f.reverse(),function F(){for(;f.length;){var B=f.pop();if(B in r)return F.value=B,F.done=!1,F}return F.done=!0,F}},_.values=Re,Be.prototype={constructor:Be,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ae),!r)for(var f in this)f.charAt(0)==="t"&&x.call(this,f)&&!isNaN(+f.slice(1))&&(this[f]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var f=this;function k(De,Oe){return ue.type="throw",ue.arg=r,f.next=De,Oe&&(f.method="next",f.arg=void 0),!!Oe}for(var F=this.tryEntries.length-1;F>=0;--F){var B=this.tryEntries[F],ue=B.completion;if(B.tryLoc==="root")return k("end");if(B.tryLoc<=this.prev){var _e=x.call(B,"catchLoc"),ye=x.call(B,"finallyLoc");if(_e&&ye){if(this.prev<B.catchLoc)return k(B.catchLoc,!0);if(this.prev<B.finallyLoc)return k(B.finallyLoc)}else if(_e){if(this.prev<B.catchLoc)return k(B.catchLoc,!0)}else{if(!ye)throw new Error("try statement without catch or finally");if(this.prev<B.finallyLoc)return k(B.finallyLoc)}}}},abrupt:function(r,f){for(var k=this.tryEntries.length-1;k>=0;--k){var F=this.tryEntries[k];if(F.tryLoc<=this.prev&&x.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var B=F;break}}B&&(r==="break"||r==="continue")&&B.tryLoc<=f&&f<=B.finallyLoc&&(B=null);var ue=B?B.completion:{};return ue.type=r,ue.arg=f,B?(this.method="next",this.next=B.finallyLoc,be):this.complete(ue)},complete:function(r,f){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&f&&(this.next=f),be},finish:function(r){for(var f=this.tryEntries.length-1;f>=0;--f){var k=this.tryEntries[f];if(k.finallyLoc===r)return this.complete(k.completion,k.afterLoc),Ae(k),be}},catch:function(r){for(var f=this.tryEntries.length-1;f>=0;--f){var k=this.tryEntries[f];if(k.tryLoc===r){var F=k.completion;if(F.type==="throw"){var B=F.arg;Ae(k)}return B}}throw new Error("illegal catch attempt")},delegateYield:function(r,f,k){return this.delegate={iterator:Re(r),resultName:f,nextLoc:k},this.method==="next"&&(this.arg=void 0),be}},_}function ee(_,L,x,A,Y,G,ce){try{var ie=_[G](ce),q=ie.value}catch(me){x(me);return}ie.done?L(q):Promise.resolve(q).then(A,Y)}function re(_){return function(){var L=this,x=arguments;return new Promise(function(A,Y){var G=_.apply(L,x);function ce(q){ee(G,A,Y,ce,ie,"next",q)}function ie(q){ee(G,A,Y,ce,ie,"throw",q)}ce(void 0)})}}function pe(_,L){return l(_)||m(_,L)||y(_,L)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(_,L){if(_){if(typeof _=="string")return i(_,L);var x=Object.prototype.toString.call(_).slice(8,-1);if(x==="Object"&&_.constructor&&(x=_.constructor.name),x==="Map"||x==="Set")return Array.from(_);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return i(_,L)}}function i(_,L){(L==null||L>_.length)&&(L=_.length);for(var x=0,A=new Array(L);x<L;x++)A[x]=_[x];return A}function m(_,L){var x=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(x!=null){var A,Y,G,ce,ie=[],q=!0,me=!1;try{if(G=(x=x.call(_)).next,L===0){if(Object(x)!==x)return;q=!1}else for(;!(q=(A=G.call(x)).done)&&(ie.push(A.value),ie.length!==L);q=!0);}catch(he){me=!0,Y=he}finally{try{if(!q&&x.return!=null&&(ce=x.return(),Object(ce)!==ce))return}finally{if(me)throw Y}}return ie}}function l(_){if(Array.isArray(_))return _}var g=function(L){var x=Object(t.useState)(!1),A=pe(x,2),Y=A[0],G=A[1],ce=Object(te.a)(L),ie=Object(t.useCallback)(re(w().mark(function q(){var me,he=arguments;return w().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return G(!0),Te.next=3,ce.apply(void 0,he);case 3:return me=Te.sent,G(!1),Te.abrupt("return",me);case 6:case"end":return Te.stop()}},q)})),[L]);return[Y,ie]},T=e("./node_modules/react/jsx-runtime.js");function d(_,L){return E(_)||j(_,L)||c(_,L)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(_,L){if(_){if(typeof _=="string")return p(_,L);var x=Object.prototype.toString.call(_).slice(8,-1);if(x==="Object"&&_.constructor&&(x=_.constructor.name),x==="Map"||x==="Set")return Array.from(_);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return p(_,L)}}function p(_,L){(L==null||L>_.length)&&(L=_.length);for(var x=0,A=new Array(L);x<L;x++)A[x]=_[x];return A}function j(_,L){var x=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(x!=null){var A,Y,G,ce,ie=[],q=!0,me=!1;try{if(G=(x=x.call(_)).next,L===0){if(Object(x)!==x)return;q=!1}else for(;!(q=(A=G.call(x)).done)&&(ie.push(A.value),ie.length!==L);q=!0);}catch(he){me=!0,Y=he}finally{try{if(!q&&x.return!=null&&(ce=x.return(),Object(ce)!==ce))return}finally{if(me)throw Y}}return ie}}function E(_){if(Array.isArray(_))return _}var v=`
    
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
`,u={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},o=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design-v2/hooks/useLoading"},O=function(L){return new Promise(function(x){return setTimeout(x,L)})},U=function(){var L=g(O),x=d(L,2),A=x[0],Y=x[1];return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:function(){return Y(2e3)},children:"Start"})}),Object(T.jsxs)("div",{children:["Loading: ",""+A]})]})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return T});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(P),D=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.js"),V=e.n(C),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(H),W=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e.n(W),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(N),s=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(t),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(Z),$=e("./node_modules/core-js/modules/es.array.slice.js"),se=e.n($),ve=e("./node_modules/core-js/modules/es.function.name.js"),fe=e.n(ve),ae=e("./node_modules/core-js/modules/es.array.from.js"),de=e.n(ae),I=e("./node_modules/react/index.js"),le=e.n(I),te=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),w=e("./node_modules/react/jsx-runtime.js"),ee=e.n(w);function re(d,b){return m(d)||i(d,b)||K(d,b)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(d,b){if(d){if(typeof d=="string")return y(d,b);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return y(d,b)}}function y(d,b){(b==null||b>d.length)&&(b=d.length);for(var c=0,p=new Array(b);c<b;c++)p[c]=d[c];return p}function i(d,b){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var p,j,E,v,u=[],o=!0,O=!1;try{if(E=(c=c.call(d)).next,b===0){if(Object(c)!==c)return;o=!1}else for(;!(o=(p=E.call(c)).done)&&(u.push(p.value),u.length!==b);o=!0);}catch(U){O=!0,j=U}finally{try{if(!o&&c.return!=null&&(v=c.return(),Object(v)!==v))return}finally{if(O)throw j}}return u}}function m(d){if(Array.isArray(d))return d}var l=`
    
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
`,g={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design-v2/hooks/useRafState"};var T=function(){var b=Object(te.a)({width:0,height:0}),c=re(b,2),p=c[0],j=c[1];return Object(I.useEffect)(function(){var E=function(){j({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}},[]),Object(w.jsx)("pre",{children:JSON.stringify(p,null,2)})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
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
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return pe});var P=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(P),D=e("./node_modules/core-js/modules/es.symbol.js"),M=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e.n(C),H=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e.n(H),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e.n(W),N=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e.n(N),s=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ne=e.n(t),Z=e("./node_modules/core-js/modules/es.array.slice.js"),X=e.n(Z),$=e("./node_modules/core-js/modules/es.function.name.js"),se=e.n($),ve=e("./node_modules/core-js/modules/es.array.from.js"),fe=e.n(ve),ae=e("./node_modules/react/index.js"),de=e.n(ae);function I(K,y){return re(K)||ee(K,y)||te(K,y)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(K,y){if(K){if(typeof K=="string")return w(K,y);var i=Object.prototype.toString.call(K).slice(8,-1);if(i==="Object"&&K.constructor&&(i=K.constructor.name),i==="Map"||i==="Set")return Array.from(K);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return w(K,y)}}function w(K,y){(y==null||y>K.length)&&(y=K.length);for(var i=0,m=new Array(y);i<y;i++)m[i]=K[i];return m}function ee(K,y){var i=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(i!=null){var m,l,g,T,d=[],b=!0,c=!1;try{if(g=(i=i.call(K)).next,y===0){if(Object(i)!==i)return;b=!1}else for(;!(b=(m=g.call(i)).done)&&(d.push(m.value),d.length!==y);b=!0);}catch(p){c=!0,l=p}finally{try{if(!b&&i.return!=null&&(T=i.return(),Object(T)!==T))return}finally{if(c)throw l}}return d}}function re(K){if(Array.isArray(K))return K}var pe=function(y){var i=Object(ae.useRef)(0),m=Object(ae.useState)(y),l=I(m,2),g=l[0],T=l[1],d=Object(ae.useCallback)(function(b){cancelAnimationFrame(i.current),i.current=requestAnimationFrame(function(){T(b)})},[]);return[g,d]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return m});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),t=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function ne(l,g){return ve(l)||se(l,g)||X(l,g)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(l,g){if(l){if(typeof l=="string")return $(l,g);var T=Object.prototype.toString.call(l).slice(8,-1);if(T==="Object"&&l.constructor&&(T=l.constructor.name),T==="Map"||T==="Set")return Array.from(l);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return $(l,g)}}function $(l,g){(g==null||g>l.length)&&(g=l.length);for(var T=0,d=new Array(g);T<g;T++)d[T]=l[T];return d}function se(l,g){var T=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(T!=null){var d,b,c,p,j=[],E=!0,v=!1;try{if(c=(T=T.call(l)).next,g===0){if(Object(T)!==T)return;E=!1}else for(;!(E=(d=c.call(T)).done)&&(j.push(d.value),j.length!==g);E=!0);}catch(u){v=!0,b=u}finally{try{if(!E&&T.return!=null&&(p=T.return(),Object(p)!==p))return}finally{if(v)throw b}}return j}}function ve(l){if(Array.isArray(l))return l}var fe={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},ae=typeof window!="undefined",de=function(){var g=Object(s.useRef)(null),T=Object(t.a)(fe),d=ne(T,2),b=d[0],c=d[1],p=Object(s.useMemo)(function(){return ae?new ResizeObserver(function(j){var E=j[0];E&&c(E.contentRect)}):null},[]);return Object(s.useEffect)(function(){return g.current&&p.observe(g.current),function(){p.disconnect()}},[g.current]),[g,b]},I=e("./node_modules/react/jsx-runtime.js");function le(l,g){return pe(l)||re(l,g)||w(l,g)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(l,g){if(l){if(typeof l=="string")return ee(l,g);var T=Object.prototype.toString.call(l).slice(8,-1);if(T==="Object"&&l.constructor&&(T=l.constructor.name),T==="Map"||T==="Set")return Array.from(l);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return ee(l,g)}}function ee(l,g){(g==null||g>l.length)&&(g=l.length);for(var T=0,d=new Array(g);T<g;T++)d[T]=l[T];return d}function re(l,g){var T=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(T!=null){var d,b,c,p,j=[],E=!0,v=!1;try{if(c=(T=T.call(l)).next,g===0){if(Object(T)!==T)return;E=!1}else for(;!(E=(d=c.call(T)).done)&&(j.push(d.value),j.length!==g);E=!0);}catch(u){v=!0,b=u}finally{try{if(!E&&T.return!=null&&(p=T.return(),Object(p)!==p))return}finally{if(v)throw b}}return j}}function pe(l){if(Array.isArray(l))return l}var K=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},K=`import React, { useEffect } from "react";

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
`,y={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},i=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/hooks/useResize"},m=function(){var g=de(),T=le(g,2),d=T[0],b=T[1],c=Object(n.a)();return Object(s.useEffect)(function(){c()},[]),Object(I.jsxs)("div",{children:[Object(I.jsx)("textarea",{ref:d,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(I.jsx)("div",{children:JSON.stringify(b)})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return T});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(P),D=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.js"),V=e.n(C),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(H),W=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e.n(W),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(N),s=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(t),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(Z),$=e("./node_modules/core-js/modules/es.array.slice.js"),se=e.n($),ve=e("./node_modules/core-js/modules/es.function.name.js"),fe=e.n(ve),ae=e("./node_modules/core-js/modules/es.array.from.js"),de=e.n(ae),I=e("./node_modules/react/index.js"),le=e.n(I),te=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),w=e("./node_modules/react/jsx-runtime.js"),ee=e.n(w);function re(d,b){return m(d)||i(d,b)||K(d,b)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(d,b){if(d){if(typeof d=="string")return y(d,b);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return y(d,b)}}function y(d,b){(b==null||b>d.length)&&(b=d.length);for(var c=0,p=new Array(b);c<b;c++)p[c]=d[c];return p}function i(d,b){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var p,j,E,v,u=[],o=!0,O=!1;try{if(E=(c=c.call(d)).next,b===0){if(Object(c)!==c)return;o=!1}else for(;!(o=(p=E.call(c)).done)&&(u.push(p.value),u.length!==b);o=!0);}catch(U){O=!0,j=U}finally{try{if(!o&&c.return!=null&&(v=c.return(),Object(v)!==v))return}finally{if(O)throw j}}return u}}function m(d){if(Array.isArray(d))return d}var l=`
    
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
`,g={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/hooks/useTimeoutFn"};var T=function(){var b=Object(te.a)(function(){alert("fire!")},2e3),c=re(b,2),p=c[0],j=c[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{onClick:p,children:"Run"}),Object(w.jsx)("button",{onClick:j,children:"Clear"})]})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return V});var P=e("./node_modules/core-js/modules/web.timers.js"),J=e.n(P),D=e("./node_modules/react/index.js"),M=e.n(D),C=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),V=function(Q,W){var z=Object(D.useRef)(),N=Object(C.a)(Q),R=Object(D.useCallback)(function(){z.current&&clearTimeout(z.current),z.current=setTimeout(function(){N()},W)},[W]),s=Object(D.useCallback)(function(){z.current&&clearTimeout(z.current)},[]);return Object(D.useEffect)(function(){return s},[s]),[R,s]}},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return T});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(P),D=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(D),C=e("./node_modules/core-js/modules/es.symbol.js"),V=e.n(C),H=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(H),W=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e.n(W),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(N),s=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(s),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ne=e.n(t),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(Z),$=e("./node_modules/core-js/modules/es.array.slice.js"),se=e.n($),ve=e("./node_modules/core-js/modules/es.function.name.js"),fe=e.n(ve),ae=e("./node_modules/core-js/modules/es.array.from.js"),de=e.n(ae),I=e("./node_modules/react/index.js"),le=e.n(I),te=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),w=e("./node_modules/react/jsx-runtime.js"),ee=e.n(w);function re(d,b){return m(d)||i(d,b)||K(d,b)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(d,b){if(d){if(typeof d=="string")return y(d,b);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return y(d,b)}}function y(d,b){(b==null||b>d.length)&&(b=d.length);for(var c=0,p=new Array(b);c<b;c++)p[c]=d[c];return p}function i(d,b){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var p,j,E,v,u=[],o=!0,O=!1;try{if(E=(c=c.call(d)).next,b===0){if(Object(c)!==c)return;o=!1}else for(;!(o=(p=E.call(c)).done)&&(u.push(p.value),u.length!==b);o=!0);}catch(U){O=!0,j=U}finally{try{if(!o&&c.return!=null&&(v=c.return(),Object(v)!==v))return}finally{if(O)throw j}}return u}}function m(d){if(Array.isArray(d))return d}var l=`
    
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
`,g={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useUpdateEffect"};var T=function(){var b=Object(I.useState)(""),c=re(b,2),p=c[0],j=c[1];return Object(I.useEffect)(function(){console.log("useEffect:",p)},[p]),Object(te.a)(function(){console.log("useUpdateEffect:",p)},[p]),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",onChange:function(v){return j(v.target.value)}})})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
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
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return D});var P=e("./node_modules/react/index.js"),J=e.n(P),D=function(C,V){var H=Object(P.useRef)(!0);Object(P.useEffect)(function(){if(!H.current)return C();H.current=!1},V)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,h,e){"use strict";e.d(h,"c",function(){return Pe}),e.d(h,"d",function(){return Me}),e.d(h,"b",function(){return Ae}),e.d(h,"a",function(){return Re});var P=e("./node_modules/react/index.js"),J=e("./node_modules/core-js/modules/es.object.keys.js"),D=e("./node_modules/core-js/modules/es.object.assign.js"),M={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},C={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},V={none:"none",elevation1:"0px 4px 8px rgba(0, 0, 0, 0.2)",elevation2:"0px 4px 12px rgba(0, 0, 0, 0.15)",elevation3:"0px 4px 16px rgba(0, 0, 0, 0.2)",elevation4:"0px 4px 20px rgba(0, 0, 0, 0.2)",elevation5:"0px 4px 24px rgba(0, 0, 0, 0.2)"},H={display1:40,display2:32,display3:28,display4:24,display5:20,display6:18,subhead1:16,subhead2:14,body1:16,body2:14,body3:12,caption:10},Q={display1:56,display2:40,display3:36,display4:32,display5:28,display6:26,subhead1:24,subhead2:22,body1:24,body2:22,body3:20,caption:16},W={radius10:4,radius20:8,radius100:100},z={spacing5:4,spacing10:8,spacing20:12,spacing30:16,spacing40:20,spacing50:24,spacing60:28,spacing70:32,spacing80:36,spacing90:40,spacing100:48,spacing110:52,spacing120:56,spacing130:60},N={xsmall:576,small:768,medium:1024,large:1408},R={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},s={mobile:"@media (max-width: "+R.mobile+"px)",tablet:"@media (max-width: "+R.tablet+"px)",desktop:"@media (max-width: "+R.desktop+"px)",largeDesktop:"@media (max-width: "+R.maxSize+"px)"},n=function(a){for(var r="",f=1;f<a.length-1;f+=1)r+=a[f]+" "+f/(a.length-1)*100+"%, ";return a[0]+" 0%, "+r+a[a.length-1]+" 100%"},t=function(a){for(var r=arguments.length,f=new Array(r>1?r-1:0),k=1;k<r;k++)f[k-1]=arguments[k];return"linear-gradient("+a+"deg, "+n(f)+")"},ne=function(){for(var a=arguments.length,r=new Array(a),f=0;f<a;f++)r[f]=arguments[f];return"radial-gradient(circle, "+n(r)+")"},Z=function(a){return typeof a.size=="number"?a.size:a.sizes[a.size]||a.size||a.sizes.medium},X=function(a){return function(r){return"@media (min-width: "+(Z({size:r,sizes:a.breakpoints})+1)+"px)"}},$=function(a){return function(r){return"@media (max-width: "+Z({size:r,sizes:a.breakpoints})+"px)"}},se=e("./node_modules/core-js/modules/es.string.replace.js"),ve=e("./node_modules/core-js/modules/es.regexp.exec.js"),fe=e("./node_modules/core-js/modules/es.number.is-nan.js"),ae=e("./node_modules/core-js/modules/es.number.constructor.js"),de=e("./node_modules/core-js/modules/es.parse-int.js"),I=e("./node_modules/core-js/modules/es.array.map.js"),le=e("./node_modules/core-js/modules/es.string.split.js"),te=e("./node_modules/core-js/modules/es.string.starts-with.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),ee=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),pe=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),y=e("./node_modules/core-js/modules/es.string.iterator.js"),i=e("./node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e("./node_modules/core-js/modules/es.array.slice.js"),g=e("./node_modules/core-js/modules/es.function.name.js"),T=e("./node_modules/core-js/modules/es.array.from.js");function d(S,a){return E(S)||j(S,a)||c(S,a)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(S,a){if(S){if(typeof S=="string")return p(S,a);var r=Object.prototype.toString.call(S).slice(8,-1);if(r==="Object"&&S.constructor&&(r=S.constructor.name),r==="Map"||r==="Set")return Array.from(S);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(S,a)}}function p(S,a){(a==null||a>S.length)&&(a=S.length);for(var r=0,f=new Array(a);r<a;r++)f[r]=S[r];return f}function j(S,a){var r=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(r!=null){var f,k,F,B,ue=[],_e=!0,ye=!1;try{if(F=(r=r.call(S)).next,a===0){if(Object(r)!==r)return;_e=!1}else for(;!(_e=(f=F.call(r)).done)&&(ue.push(f.value),ue.length!==a);_e=!0);}catch(De){ye=!0,k=De}finally{try{if(!_e&&r.return!=null&&(B=r.return(),Object(B)!==B))return}finally{if(ye)throw k}}return ue}}function E(S){if(Array.isArray(S))return S}var v=function(a){var r=a.replace("#","");return typeof r=="string"&&r.length===6&&!Number.isNaN(Number("0x"+r))},u=function(a){var r=a.replace("#",""),f=parseInt(r,16),k=f>>16&255,F=f>>8&255,B=f&255;return{r:k,g:F,b:B,a:1}},o=function(a){var r=a.replace(/[^0-9,.]/g,"").split(",").map(Number),f=d(r,4),k=f[0],F=f[1],B=f[2],ue=f[3];return{r:k,g:F,b:B,a:ue||1}},O=function(a){return v(a)?u(a):a.startsWith("rgb")?o(a):{r:0,g:0,b:0,a:1}},U=function(a,r){if(typeof a!="string"||r>1||r<0)return"rgba(0, 0, 0, 1)";var f=O(a),k=f.r,F=f.g,B=f.b;return"rgba("+k+", "+F+", "+B+", "+r+")"},_=function(a,r){var f=O(a),k=f.r,F=f.g,B=f.b,ue=f.a,_e=1-r,ye=function(Oe){return Math.round(Oe*_e)};return"rgba("+ye(k)+", "+ye(F)+", "+ye(B)+", "+ue+")"},L=function(a,r){var f=O(a),k=f.r,F=f.g,B=f.b,ue=f.a,_e=function(De){return Math.round(De+(255-De)*r)};return"rgba("+_e(k)+", "+_e(F)+", "+_e(B)+", "+ue+")"},x=function(a){return a*8},A={linearGradient:t,radialGradient:ne,smallerThan:$,largerThan:X,rgba:U,size:Z,darken:_,lighten:L,spacing:x},Y=function(a){return Object.assign({},a,{fn:{largerThan:A.largerThan(a),smallerThan:A.smallerThan(a),radialGradient:A.radialGradient,linearGradient:A.linearGradient,rgba:A.rgba,size:A.size,lighten:A.lighten,darken:A.darken,spacing:A.spacing}})},G={display1:{fontSize:40,lineHeight:"56px"},display2:{fontSize:32,lineHeight:"40px"},display3:{fontSize:28,lineHeight:"36px"},display4:{fontSize:24,lineHeight:"32px"},display5:{fontSize:20,lineHeight:"28px"},display6:{fontSize:18,lineHeight:"26px"},subhead1:{fontSize:16,lineHeight:"24px"},subhead2:{fontSize:14,lineHeight:"22px"}},ce=Object.keys(M),ie=["xsmall","small","medium","large"],q=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],me=function(a){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:a.fontFamily||"sans-serif"}},he={locale:"ko",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",colors:M,shadows:V,fontSizes:H,lineHeights:Q,radius:W,headings:G,spacing:z,breakpoints:N,media:s},be=Object.assign({},he,{colors:C,colorScheme:"dark"}),Te=Y(he),Ce=Y(be),ge=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),je=e("./node_modules/react/jsx-runtime.js"),Le=function(a){var r=a.styles,f=Pe();return Object(je.jsx)(ge.a,{styles:Object(ge.b)(r(f))})};Le.displayName="Global";var Ee={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0}},xe=function(){return Object(je.jsx)(ge.a,{styles:Ee})};xe.displayName="NormalizeCSS";var Fe=e("./node_modules/core-js/modules/es.array.reduce.js");function ke(S,a){return a?Object.keys(S).reduce(function(r,f){if(f==="headings"&&a.headings){var k=a.headings?Object.keys(S.headings).reduce(function(F,B){return F[B]=Object.assign({},S.headings[B],a.headings[B]),F},{}):S.headings;return Object.assign({},r,{headings:Object.assign({},S.headings,a.headings,k)})}return r[f]=typeof a[f]=="object"?Object.assign({},S[f],a[f]):a[f]||S[f],r},{}):S}var Se=Object(P.createContext)({theme:Te,styles:{},emotionOptions:{key:"co",prepend:!0}});function Pe(){var S;return((S=Object(P.useContext)(Se))===null||S===void 0?void 0:S.theme)||Te}function Me(){var S;return((S=Object(P.useContext)(Se))===null||S===void 0?void 0:S.styles)||{}}function Ae(){var S;return((S=Object(P.useContext)(Se))===null||S===void 0?void 0:S.emotionOptions)||{key:"co",prepend:!0}}var Be=function(){return Object(je.jsx)(Le,{styles:function(r){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:r.fontFamily,backgroundColor:r.colorScheme==="dark"?r.colors.black:r.colors.white,color:r.colorScheme==="dark"?r.colors.white:r.colors.black,lineHeight:r.lineHeight,fontSizes:r.fontSizes.body3}}}})};Be.displayName="GlobalStyles";var Re=function(a){var r=a.theme,f=a.styles,k=f===void 0?{}:f,F=a.emotionOptions,B=a.withNormalizeCSS,ue=B===void 0?!1:B,_e=a.withGlobalStyles,ye=_e===void 0?!1:_e,De=a.children;return Object(je.jsxs)(Se.Provider,{value:{theme:ke(r.colorScheme==="dark"?Ce:Te,r),styles:k,emotionOptions:F},children:[ue&&Object(je.jsx)(xe,{}),ye&&Object(je.jsx)(Be,{}),De]})};Re.displayName="TmProvider",Re.displayName="@travelmakers-design-v2/styles/TmProvider"},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return E});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.array.from.js"),s=e("./node_modules/clsx/dist/clsx.m.js"),n=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),t=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ne=e("./node_modules/core-js/modules/es.array.index-of.js"),Z=e("./node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/react/index.js");function $(v){return ae(v)||fe(v)||ve(v)||se()}function se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(v,u){if(v){if(typeof v=="string")return de(v,u);var o=Object.prototype.toString.call(v).slice(8,-1);if(o==="Object"&&v.constructor&&(o=v.constructor.name),o==="Map"||o==="Set")return Array.from(v);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return de(v,u)}}function fe(v){if(typeof Symbol!="undefined"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}function ae(v){if(Array.isArray(v))return de(v)}function de(v,u){(u==null||u>v.length)&&(u=v.length);for(var o=0,O=new Array(u);o<u;o++)O[o]=v[o];return O}function I(v,u){var o=Object(X.useRef)();return(!o.current||u.length!==o.current.prevDeps.length||o.current.prevDeps.map(function(O,U){return O===u[U]}).indexOf(!1)>=0)&&(o.current={v:v(),prevDeps:$(u)}),o.current.v}var le=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),te=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),w=e("./node_modules/react/jsx-runtime.js"),ee=function(){var v;function u(o){return v===void 0&&(v=Object(le.a)(o||{key:"co",prepend:!0})),v}return{getCache:u}}(),re=ee.getCache,pe=Object(X.createContext)(void 0);function K(){var v=Object(te.b)();return Object(X.useContext)(pe)||re(v)}function y(v){var u=v.children,o=v.value;return Object(w.jsx)(pe.Provider,{value:o,children:u})}y.displayName="CacheProvider";function i(v,u){return d(v)||T(v,u)||l(v,u)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(v,u){if(v){if(typeof v=="string")return g(v,u);var o=Object.prototype.toString.call(v).slice(8,-1);if(o==="Object"&&v.constructor&&(o=v.constructor.name),o==="Map"||o==="Set")return Array.from(v);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return g(v,u)}}function g(v,u){(u==null||u>v.length)&&(u=v.length);for(var o=0,O=new Array(u);o<u;o++)O[o]=v[o];return O}function T(v,u){var o=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(o!=null){var O,U,_,L,x=[],A=!0,Y=!1;try{if(_=(o=o.call(v)).next,u===0){if(Object(o)!==o)return;A=!1}else for(;!(A=(O=_.call(o)).done)&&(x.push(O.value),x.length!==u);A=!0);}catch(G){Y=!0,U=G}finally{try{if(!A&&o.return!=null&&(L=o.return(),Object(L)!==L))return}finally{if(Y)throw U}}return x}}function d(v){if(Array.isArray(v))return v}var b="ref";function c(v){var u;if(v.length!==1)return{args:v,ref:u};var o=i(v,1),O=o[0];if(!(O instanceof Object))return{args:v,ref:u};if(!(b in O))return{args:v,ref:u};u=O[b];var U=Object.assign({},O);return delete U[b],{args:[U],ref:u}}var p=function(){function v(o,O,U){var _=[],L=Object(t.a)(o,_,U);return _.length<2?U:L+O(_)}function u(o){var O=o.cache,U=function(){for(var A=arguments.length,Y=new Array(A),G=0;G<A;G++)Y[G]=arguments[G];var ce=c(Y),ie=ce.ref,q=ce.args,me=Object(n.a)(q,O.registered);return Object(t.b)(O,me,!1),O.key+"-"+me.name+(ie===void 0?"":" "+ie)},_=function(){for(var A=arguments.length,Y=new Array(A),G=0;G<A;G++)Y[G]=arguments[G];var ce=c(Y),ie=ce.ref,q=ce.args,me=Object(n.a)(q,O.registered);return Object(t.b)(O,me,!1),""+O.key+me.name+(ie===void 0?"":" "+ie)},L=function(){for(var A=arguments.length,Y=new Array(A),G=0;G<A;G++)Y[G]=arguments[G];return v(O.registered,U,Object(s.a)(Y))};return{css:U,cx:L,cssRn:_}}return{cssFactory:u}}(),j=p.cssFactory;function E(){var v=K();return I(function(){return j({cache:v})},[v])}},"./packages/travelmakers-design-utils/src/getDate/getDate.tsx":function(oe,h,e){"use strict";e.d(h,"e",function(){return R}),e.d(h,"a",function(){return s}),e.d(h,"d",function(){return n}),e.d(h,"b",function(){return t}),e.d(h,"c",function(){return ne});var P=e("./node_modules/core-js/modules/es.date.to-string.js"),J=e.n(P),D=e("./node_modules/dayjs/dayjs.min.js"),M=e.n(D),C=e("./node_modules/dayjs/plugin/timezone.js"),V=e.n(C),H=e("./node_modules/dayjs/plugin/utc.js"),Q=e.n(H);M.a.extend(Q.a),M.a.extend(V.a);function W(Z){return Z<10?"0"+Z:Z}function z(){return M.a}function N(Z){var X=Z?new Date(Z):new Date,$=X.getTime()+X.getTimezoneOffset()*60*1e3,se=9*60*60*1e3,ve=new Date($+se);return ve}function R(Z){if(!Z){var X=M()().tz("Asia/Seoul");return X}var $=M()(Z+"+0900").tz("Asia/Seoul");if(!$.isValid()){var se=M()(""+Z).tz("Asia/Seoul");return se}return $}function s(Z,X){var $=R(Z),se=X!=null?X:"/";return $.year()+se+($.month()+1)+se+$.date()}function n(Z,X){var $=R(Z),se=X!=null?X:"/";return $.year()+se+($.month()+1)+se+$.date()+" "+$.hour()+":"+W($.minute())}function t(Z,X){var $=R(Z),se=X!=null?X:":";return W($.hour())+se+W($.minute())}function ne(Z){var X=R(Z),$=X.day(),se=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];return se[$]+"\uC694\uC77C"}},"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return z});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(P),D=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),M=e("./node_modules/react/index.js"),C=e.n(M),V=e("./node_modules/react/jsx-runtime.js"),H=e.n(V),Q=`
    
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
`,W={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:47},startBody:{col:23,line:35},endBody:{col:1,line:47}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/utils/getDate",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}};var z=function(R){return Object(V.jsxs)("div",{children:["getDate: ",Object(D.a)("2022-12-22T01:37:27.391Z"),Object(V.jsx)("br",{}),"getDateTime: ",Object(D.b)("2022-12-22T01:37:27.391Z"),Object(V.jsx)("br",{}),"getFullDate: ",Object(D.d)("2022-12-22T01:37:27.391Z"),Object(V.jsx)("br",{}),"getDay: ",Object(D.c)("2022-12-22T01:37:27.391Z")]})};z.displayName="Default",z.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},z.parameters)},"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return W});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js");function D(z){switch(z){case"checkout_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_purchase_before":case"reservation_purchase_done":case"checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"day_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"extend_purchase_before":case"extend_purchase_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"extend_checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"reservation_change_process":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_cancel":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!0,callable:!0},reservationChangeButton:{visible:!1,callable:!1}};case"tour_confirm_before":case"tour_confirm":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"tour_cancel":case"tour_done":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};default:return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!0},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}}}}var M=D,C=e("./node_modules/react/jsx-runtime.js"),V=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},V=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:13},startBody:{col:23,line:11},endBody:{col:1,line:13}}},Q=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design-v2/utils/getReservationsCallable",argTypes:{state:{}}},W=function(N){return Object(C.jsx)("div",{children:JSON.stringify(D("tour_cancel"))})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`(props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
}`}},W.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return N});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),M=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function C(R){switch(R){case"default":case"tour_cancel":case"reservation_cancel":return{enum:R,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(){return"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?"},buttonText:function(){return"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_confirm_before":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return n},buttonText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"tour_confirm":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(M.a)(Object(D.e)(n))+" \uD22C\uC5B4\uAC00 \uD655\uC815\uB410\uC5B4\uC694"},buttonText:function(){return"\uC57D\uC18D\uC2DC\uAC04\uC5D0 \uAF2D \uBC29\uBB38\uD574\uC8FC\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_done":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(){return"\uD22C\uC5B4\uB294 \uC5B4\uB5A0\uC168\uB098\uC694?"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"reservation_purchase_before":return{enum:R,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uC544\uC9C1 \uC785\uAE08\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"reservation_purchase_done":return{enum:R,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(n){return Object(M.a)(Object(D.e)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkin_before":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(M.b)(Object(D.e)(n))+" \uCCB4\uD06C\uC778 \uC608\uC815\uC774\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return"\uCCB4\uD06C\uC544\uC6C3\uC740 "+Object(M.b)(Object(D.e)(n))+"\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"checkout_before":return{enum:R,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uC5F0\uC7A5\uD558\uC2DC\uACA0\uC5B4\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_before_n":return{enum:R,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(n){return Object(M.b)(Object(D.e)(n))+" \uCCB4\uD06C\uC544\uC6C3 \uC785\uB2C8\uB2E4"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_done":return{enum:R,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC740 \uC5B4\uB5A0\uC168\uB098\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"}}}function V(R,s){switch(R){case"default":case"tour_cancel":case"reservation_cancel":return{first:s.first.userName,second:null,buttonText:null};case"tour_confirm_before":return{first:s.first.userName,second:s.second.hotelName,buttonText:null};case"tour_confirm":return{first:s.first.userName,second:s.second.startDate,buttonText:null};case"tour_done":return{first:s.first.userName,second:null,buttonText:null};case"reservation_purchase_before":return{first:s.first.userName,second:s.second.hotelName,buttonText:null};case"reservation_purchase_done":return{first:s.first.userName,second:s.second.hotelName,buttonText:s.buttonText.expectedDate};case"checkin_before":return{first:s.first.userName,second:s.second.startDate,buttonText:null};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{first:s.first.userName,second:s.second.endDate,buttonText:null};case"checkout_before":return{first:s.first.hotelName,second:""+s.second.dDay,buttonText:null};case"checkout_before_n":return{first:s.first.hotelName,second:""+s.second.dDay,buttonText:s.buttonText.endDate};case"checkout_done":return{first:s.first.userName,second:s.second.hotelName,buttonText:null};default:return{first:null,second:null,buttonText:null}}}var H=e("./node_modules/react/jsx-runtime.js"),Q=`
    
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
`,W={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:58},startBody:{col:23,line:35},endBody:{col:1,line:58}}},z=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/utils/getTimeLineFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},N=function(s){return Object(H.jsxs)("div",{children:["firstLineText: ",C("default").firstLineText("\uD64D\uAE38\uB3D9"),Object(H.jsx)("br",{}),"secondLineText(default): ",C("default").secondLineText(),Object(H.jsx)("br",{}),"secondLineText(tour_confirm_before):",C("reservation_purchase_before").secondLineText("\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"),Object(H.jsx)("br",{}),"secondLineText(tour_confirm):",C("tour_confirm").secondLineText("2022-09-28T01:26:38.000000Z"),Object(H.jsx)("br",{}),"buttonText: ",C("default").buttonText(),Object(H.jsx)("br",{}),"---- ",Object(H.jsx)("br",{}),"getTimeLineFunc(`state`)"]})};N.displayName="Default",N.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},N.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return R});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),M=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),C=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function V(s){switch(s){case"tour_confirm_before":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:s,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ne=Object(M.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ne=Object(M.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:s,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:s,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:s,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(C.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:s,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:s,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(C.a)(Object(D.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:s,firstLineText:function(){return""},secondLineText:function(){return""},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}}}}function H(s,n){switch(s){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName};case"checkout_done":return{first:null,second:null,third:n.third.hotelName};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName};default:return{first:null,second:null,third:n.third.hotelName}}}var Q=e("./node_modules/react/jsx-runtime.js"),W=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}},W=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}},N=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},R=function(n){return Object(Q.jsx)("div",{children:V("reservation_purchase_before").secondLineText("2022-12-24T02:24:01.616Z")})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
}`}},R.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":function(oe,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return R});var P=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts"),M=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),C=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function V(s){switch(s){case"tour_confirm_before":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:s,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ne=Object(M.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ne=Object(M.a)(t);return ne&&ne==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ne+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:s,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:s,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:s,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:s,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:s,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:s,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:s,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:s,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},secondLineText:function(t){return Object(D.a)(Object(C.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:s,firstLineText:function(){return""},secondLineText:function(){return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}}}}function H(s,n){switch(s){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"checkout_done":return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};default:return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType}}}var Q=e("./node_modules/react/jsx-runtime.js"),W=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}},W=`import React from "react";

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
`,z={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:43},startBody:{col:23,line:35},endBody:{col:1,line:43}}},N=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},R=function(n){return Object(Q.jsx)("div",{children:V("reservation_purchase_before").secondLineText("2023-02-08T23:24:01.616Z")})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
}`}},R.parameters)},"./packages/travelmakers-design-utils/src/utils/getCountDown.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return n});var P=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(P),D=e("./node_modules/core-js/modules/es.regexp.to-string.js"),M=e.n(D),C=e("./node_modules/core-js/modules/es.date.to-string.js"),V=e.n(C),H=e("./node_modules/core-js/modules/es.string.pad-start.js"),Q=e.n(H),W=e("./node_modules/core-js/modules/es.string.replace.js"),z=e.n(W),N=e("./node_modules/core-js/modules/es.regexp.exec.js"),R=e.n(N),s=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function n(t){var ne="HH\uC2DC\uAC04 mm\uBD84",Z=Object(s.e)(t),X=1e3,$=X*60,se=$*60,ve=se*24,fe=function(){var de=Z.toDate().getTime()-Object(s.e)().toDate().getTime(),I={days:"0",hours:"0",minutes:"0",seconds:"0"};return de>0&&(I={days:Math.floor(de/ve).toString(),hours:Math.floor(de/se%24).toString(),minutes:Math.floor(de/X/60%60).toString().padStart(2,"0"),seconds:Math.floor(de/X%60).toString().padStart(2,"0")}),!Z||!I?"":ne.replace("D",I.days).replace("HH",I.hours).replace("mm",I.minutes).replace("ss",I.seconds)};return fe()}},"./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts":function(oe,h,e){"use strict";e.d(h,"a",function(){return J}),e.d(h,"b",function(){return D});function P(M){return M<10?"0"+M:M}function J(M,C){var V=M;return C?V.month()+1+"\uC6D4 "+V.date()+"\uC77C "+V.hour()+":"+P(V.minute()):V.month()+1+"\uC6D4 "+V.date()+"\uC77C "}function D(M){var C=M;return C.month()+1+"\uC6D4 "+C.date()+"\uC77C "+C.hour()+"\uC2DC"}},"./storybook-init-framework-entry.js":function(oe,h,e){"use strict";e.r(h);var P=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,h,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,h){}},[[0,4,5]]]);
