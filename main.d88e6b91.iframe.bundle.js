(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(ce,h,e){"use strict";e.r(h);var H={};e.r(H),e.d(H,"parameters",function(){return i}),e.d(H,"decorators",function(){return b});var re=e("./node_modules/core-js/modules/es.object.keys.js"),x=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.array.filter.js"),L=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),$=e("./node_modules/core-js/modules/es.array.for-each.js"),w=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),J=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),Y=e("./node_modules/core-js/modules/es.object.define-properties.js"),ee=e("./node_modules/core-js/modules/es.object.define-property.js"),Z=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),r=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ie=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),te=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e("./node_modules/core-js/modules/es.array.slice.js"),le=e("./node_modules/core-js/modules/es.function.name.js"),me=e("./node_modules/core-js/modules/es.array.from.js"),I=e("./node_modules/react/index.js"),C=e("./node_modules/react/jsx-runtime.js");function ue(v,T){return V(v)||E(v,T)||ne(v,T)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(v,T){if(v){if(typeof v=="string")return Q(v,T);var k=Object.prototype.toString.call(v).slice(8,-1);if(k==="Object"&&v.constructor&&(k=v.constructor.name),k==="Map"||k==="Set")return Array.from(v);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return Q(v,T)}}function Q(v,T){(T==null||T>v.length)&&(T=v.length);for(var k=0,p=new Array(T);k<T;k++)p[k]=v[k];return p}function E(v,T){var k=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(k!=null){var p,S,A,X,ae=[],o=!0,y=!1;try{if(A=(k=k.call(v)).next,T===0){if(Object(k)!==k)return;o=!1}else for(;!(o=(p=A.call(k)).done)&&(ae.push(p.value),ae.length!==T);o=!0);}catch(d){y=!0,S=d}finally{try{if(!o&&k.return!=null&&(X=k.return(),Object(X)!==X))return}finally{if(y)throw S}}return ae}}function V(v){if(Array.isArray(v))return v}var P=Object(I.createContext)(null),oe=function(){var T=Object(I.useContext)(P);if(!T)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return T},O=function(T){var k=T.colorScheme,p=T.toggleColorScheme,S=T.children,A=Object(I.useState)("init"),X=ue(A,2),ae=X[0],o=X[1];return Object(I.useEffect)(function(){o("update")},[]),Object(C.jsx)(P.Provider,{value:{colorScheme:k,toggleColorScheme:p},children:S},ae)};O.displayName="ColorSchemeProvider",O.displayName="@travelmakers-design-v2/styles/ColorSchemeProvider";var m=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),a=e("./node_modules/@storybook/theming/dist/esm/index.js"),u=e("./node_modules/storybook-dark-mode/dist/index.js"),i={layout:"fullscreen",docs:{theme:a.themes.light},darkMode:{current:"dark"}};function D(v){var T=Object(u.useDarkMode)()?"dark":"light";return Object(C.jsx)(O,{colorScheme:T,toggleColorScheme:function(){},children:Object(C.jsx)(m.a,{theme:{colorScheme:T},withGlobalStyles:!0,withNormalizeCSS:!0,children:v.children})})}D.displayName="ThemeWrapper";var b=[function(v){return Object(C.jsx)(D,{children:v()})}];function c(v,T){var k=Object.keys(v);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(v);T&&(p=p.filter(function(S){return Object.getOwnPropertyDescriptor(v,S).enumerable})),k.push.apply(k,p)}return k}function g(v){for(var T=1;T<arguments.length;T++){var k=arguments[T]!=null?arguments[T]:{};T%2?c(Object(k),!0).forEach(function(p){f(v,p,k[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(k)):c(Object(k)).forEach(function(p){Object.defineProperty(v,p,Object.getOwnPropertyDescriptor(k,p))})}return v}function f(v,T,k){return T in v?Object.defineProperty(v,T,{value:k,enumerable:!0,configurable:!0,writable:!0}):v[T]=k,v}Object.keys(H).forEach(function(v){var T=H[v];switch(v){case"args":return Object(Z.d)(T);case"argTypes":return Object(Z.b)(T);case"decorators":return T.forEach(function(p){return Object(Z.f)(p,!1)});case"loaders":return T.forEach(function(p){return Object(Z.g)(p,!1)});case"parameters":return Object(Z.h)(g({},T),!1);case"argTypesEnhancers":return T.forEach(function(p){return Object(Z.c)(p)});case"argsEnhancers":return T.forEach(function(p){return Object(Z.e)(p)});case"render":return Object(Z.i)(T);case"globals":case"globalTypes":{var k={};return k[v]=T,Object(Z.h)(k,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(v+" was not supported :( !")}})},"./generated-stories-entry.js":function(ce,h,e){"use strict";(function(H){var re=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,re.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],H,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(ce))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(ce,h,e){var H={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx","./travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx","./travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx"};function re(N){var L=x(N);return e(L)}function x(N){if(!e.o(H,N)){var L=new Error("Cannot find module '"+N+"'");throw L.code="MODULE_NOT_FOUND",L}return H[N]}re.keys=function(){return Object.keys(H)},re.resolve=x,ce.exports=re,re.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Small",function(){return X}),e.d(h,"Medium",function(){return ae});var H=e("./node_modules/core-js/modules/es.array.map.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),x=e("./node_modules/core-js/modules/es.object.keys.js"),N=e("./node_modules/core-js/modules/es.array.index-of.js"),L=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Y={small:"40px",medium:"56px"},ee=function(y,d){switch(d){case"small":return{padding:y.spacing.spacing10+" "+y.spacing.spacing30};case"medium":return{padding:""+y.spacing.spacing30};default:return}},Z=function(y,d){switch(d){case"small":return y.typography.subhead2;case"medium":return y.typography.subhead1;default:return}},U=Object(J.a)(function(o,y){var d,j=y.type,R=y.gap,M=y.isCollapse,de=M===void 0?!0:M;return{root:{margin:0},item:(d={maxHeight:""+(de?Y[j]:"auto"),marginBottom:R+"px",color:""+o.colors.primary1,borderRadius:o.radius.radius20,backgroundColor:"#fff",overflow:"hidden"},d["&:last-child"]={marginBottom:0},d),header:Object.assign({display:"flex",alignItems:"center",justifyContent:"space-between",height:Y[j]},ee(o,j),Z(o,j),{fontWeight:700,cursor:"pointer"}),icon:{transform:de?"rotate(180deg)":"rotate(0)"},detail:{margin:0},divider:{height:"1px",margin:"0 "+o.spacing.spacing30,backgroundColor:o.colors.outline},content:Object.assign({margin:0},ee(o,j),Z(o,"small"))}}),r=e("./node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/core-js/modules/es.object.to-string.js"),ie=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),te=e("./node_modules/core-js/modules/es.array.iterator.js"),q=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),le=e("./node_modules/core-js/modules/es.array.slice.js"),me=e("./node_modules/core-js/modules/es.function.name.js"),I=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/jsx-runtime.js"),ue=["size"];function B(o,y){if(o==null)return{};var d=ne(o,y),j,R;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(o);for(R=0;R<M.length;R++)j=M[R],!(y.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(o,j)&&(d[j]=o[j])}return d}function ne(o,y){if(o==null)return{};var d={},j=Object.keys(o),R,M;for(M=0;M<j.length;M++)R=j[M],!(y.indexOf(R)>=0)&&(d[R]=o[R]);return d}var Q=function(y){var d=y.size,j=B(y,ue);return Object(C.jsxs)("svg",Object.assign({width:d,height:d,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j,{children:[Object(C.jsx)("g",{"clip-path":"url(#clip0_3368_7885)",children:Object(C.jsx)("path",{d:"M13.6569 4.84314L8.00001 10.5L2.34315 4.84314",stroke:"#30373F"})}),Object(C.jsx)("defs",{children:Object(C.jsx)("clipPath",{id:"clip0_3368_7885",children:Object(C.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}))};Q.displayName="IconAngle";var E=["idx","header","content","handleHeader"];function V(o,y){return a(o)||m(o,y)||oe(o,y)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(o,y){if(o){if(typeof o=="string")return O(o,y);var d=Object.prototype.toString.call(o).slice(8,-1);if(d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set")return Array.from(o);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return O(o,y)}}function O(o,y){(y==null||y>o.length)&&(y=o.length);for(var d=0,j=new Array(y);d<y;d++)j[d]=o[d];return j}function m(o,y){var d=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(d!=null){var j,R,M,de,_e=[],se=!0,pe=!1;try{if(M=(d=d.call(o)).next,y===0){if(Object(d)!==d)return;se=!1}else for(;!(se=(j=M.call(d)).done)&&(_e.push(j.value),_e.length!==y);se=!0);}catch(ge){pe=!0,R=ge}finally{try{if(!se&&d.return!=null&&(de=d.return(),Object(de)!==de))return}finally{if(pe)throw R}}return _e}}function a(o){if(Array.isArray(o))return o}function u(o,y){if(o==null)return{};var d=i(o,y),j,R;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(o);for(R=0;R<M.length;R++)j=M[R],!(y.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(o,j)&&(d[j]=o[j])}return d}function i(o,y){if(o==null)return{};var d={},j=Object.keys(o),R,M;for(M=0;M<j.length;M++)R=j[M],!(y.indexOf(R)>=0)&&(d[R]=o[R]);return d}var D={small:16,medium:24},b=function(y){var d=y.idx,j=y.header,R=y.content,M=y.handleHeader,de=u(y,E),_e=Object($.useState)(!0),se=V(_e,2),pe=se[0],ge=se[1],be=Object($.useContext)(v),he=be.type,Oe=be.gap,De=U({type:he,gap:Oe,isCollapse:pe}),Te=De.classes,Le=function(){ge(function(xe){return!xe}),M&&M()};return Object(C.jsxs)(w.a,Object.assign({className:Te.item},de,{children:[Object(C.jsxs)("dt",{className:Te.header,onClick:Le,children:[j,Object(C.jsx)(Q,{size:D[he],className:Te.icon})]}),Object(C.jsxs)("dd",{className:Te.detail,children:[Object(C.jsx)("div",{className:Te.divider}),Object(C.jsx)("p",{className:Te.content,children:R})]})]}),d)};b.displayName="AccordionItem",b.displayName="AccordionItem";var c=["gap","type","className","children"];function g(o,y){if(o==null)return{};var d=f(o,y),j,R;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(o);for(R=0;R<M.length;R++)j=M[R],!(y.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(o,j)&&(d[j]=o[j])}return d}function f(o,y){if(o==null)return{};var d={},j=Object.keys(o),R,M;for(M=0;M<j.length;M++)R=j[M],!(y.indexOf(R)>=0)&&(d[R]=o[R]);return d}var v=Object($.createContext)({type:"small",gap:4});v.displayName="AccordionContext";var T=Object($.forwardRef)(function(o,y){var d=o.gap,j=d===void 0?4:d,R=o.type,M=R===void 0?"small":R,de=o.className,_e=o.children,se=g(o,c),pe=U({}),ge=pe.classes,be=pe.cx;return Object(C.jsx)(v.Provider,{value:{type:M,gap:j},children:Object(C.jsx)(w.a,Object.assign({component:"dl",ref:y,className:be(ge.root,de)},se,{children:_e}))})});T.Item=b,T.displayName="Accordion";var k=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Accordion } from \\"../Accordion\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"small\\", \\"medium\\"] },\\n      description: \\"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: \\"small\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: {\\n      description: \\"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.\\",\\n      type: \\"number\\",\\n      defaultValue: 4,\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nconst accordionData = [\\n  {\\n    id: 1,\\n    answer:\\n      \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n  {\\n    id: 2,\\n    answer:\\n      \\"\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n];\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n\\nexport const Medium = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":46},"endLoc":{"col":1,"line":60},"startBody":{"col":21,"line":46},"endBody":{"col":1,"line":60}},"Medium":{"startLoc":{"col":22,"line":62},"endLoc":{"col":1,"line":76},"startBody":{"col":22,"line":62},"endBody":{"col":1,"line":76}}};
    
import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: { type: "radio", options: ["small", "medium"] },
      description: "Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",
      defaultValue: "small",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: {
      description: "Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.",
      type: "number",
      defaultValue: 4,
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
} as Meta;

const accordionData = [
  {
    id: 1,
    answer:
      "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
  },
  {
    id: 2,
    answer:
      "\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
    question: "\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
  },
];

export const Small = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};;

export const Medium = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion type={"medium"} {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Small.parameters };
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,p={Small:{startLoc:{col:21,line:54},endLoc:{col:1,line:68},startBody:{col:21,line:54},endBody:{col:1,line:68}},Medium:{startLoc:{col:22,line:70},endLoc:{col:1,line:84},startBody:{col:22,line:70},endBody:{col:1,line:84}}},k=`import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: { type: "radio", options: ["small", "medium"] },
      description: "Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",
      defaultValue: "small",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: {
      description: "Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.",
      type: "number",
      defaultValue: 4,
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
} as Meta;

const accordionData = [
  {
    id: 1,
    answer:
      "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
  },
  {
    id: 2,
    answer:
      "\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
    question: "\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
  },
];

export const Small = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};

export const Medium = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion type={"medium"} {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};
`,p={Small:{startLoc:{col:21,line:46},endLoc:{col:1,line:60},startBody:{col:21,line:46},endBody:{col:1,line:60}},Medium:{startLoc:{col:22,line:62},endLoc:{col:1,line:76},startBody:{col:22,line:62},endBody:{col:1,line:76}}},S=h.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Accordion } from \\"../Accordion\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"small\\", \\"medium\\"] },\\n      description: \\"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: \\"small\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: {\\n      description: \\"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.\\",\\n      type: \\"number\\",\\n      defaultValue: 4,\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nconst accordionData = [\\n  {\\n    id: 1,\\n    answer:\\n      \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n  {\\n    id: 2,\\n    answer:\\n      \\"\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n];\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n\\nexport const Medium = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":46},"endLoc":{"col":1,"line":60},"startBody":{"col":21,"line":46},"endBody":{"col":1,"line":60}},"Medium":{"startLoc":{"col":22,"line":62},"endLoc":{"col":1,"line":76},"startBody":{"col":22,"line":62},"endBody":{"col":1,"line":76}}};
    
import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: { type: "radio", options: ["small", "medium"] },
      description: "Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",
      defaultValue: "small",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: {
      description: "Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.",
      type: "number",
      defaultValue: 4,
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
} as Meta;

const accordionData = [
  {
    id: 1,
    answer:
      "\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
    question: "\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",
  },
  {
    id: 2,
    answer:
      "\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
    question: "\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
  },
];

export const Small = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};;

export const Medium = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion type={"medium"} {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Small.parameters };
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,locationsMap:{small:{startLoc:{col:21,line:54},endLoc:{col:1,line:68},startBody:{col:21,line:54},endBody:{col:1,line:68}},medium:{startLoc:{col:22,line:70},endLoc:{col:1,line:84},startBody:{col:22,line:70},endBody:{col:1,line:84}}}}},title:"@travelmakers-design-v2/core/General/Accordion",component:T,argTypes:{type:{control:{type:"radio",options:["small","medium"]},description:"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",defaultValue:"small",table:{type:{summary:"string"}}},gap:{description:"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.",type:"number",defaultValue:4,table:{type:{summary:"number"}}}}},A=[{id:1,answer:`\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.
\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?"},{id:2,answer:`\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.
\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"}],X=function(y){return Object(C.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(C.jsx)(T,Object.assign({},y,{children:A.map(function(d){return Object(C.jsx)(T.Item,{idx:d.id,header:d.question,content:d.answer})})}))})};X.displayName="Small";var ae=function(y){return Object(C.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(C.jsx)(T,Object.assign({type:"medium"},y,{children:A.map(function(d){return Object(C.jsx)(T.Item,{idx:d.id,header:d.question,content:d.answer})})}))})};ae.displayName="Medium",X.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}`}},X.parameters),ae.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion type={"medium"} {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            idx={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}`}},ae.parameters)},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return me});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),x=e("./node_modules/core-js/modules/es.object.keys.js"),N=e("./node_modules/core-js/modules/es.array.index-of.js"),L=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.string.italics.js"),w=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),ee=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Z=function(C){return C!=="Pretendard"?{font:{fontFamily:C+", var("+(C==="Noto Serif KR"&&"--font-noto-serif")+")"}}:{font:{}}},U=Object(ee.a)(function(I,C,ue){var B,ne=C.family,Q=C.level,E=C.textAlign,V=C.disabled,P=C.strong,oe=C.italic,O=C.underline,m=C.color,a=C.mobile,u=C.tablet;return{solid:{fontWeight:P?ne==="Noto Serif KR"?600:700:400,fontStyle:oe?"italic":"normal",textDecoration:O?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},Z(ne).font,I.typography[Q],(B={color:V?I.colors.primary4:m||I.colors.black,textAlign:""+E},B[""+I.media.mobile]=Object.assign({},I.typography[a]),B[""+I.media.tablet]=Object.assign({},I.typography[u]),B))}}),r=e("./node_modules/react/jsx-runtime.js"),n=["id","children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function t(I,C){if(I==null)return{};var ue=ie(I,C),B,ne;if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(I);for(ne=0;ne<Q.length;ne++)B=Q[ne],!(C.indexOf(B)>=0)&&Object.prototype.propertyIsEnumerable.call(I,B)&&(ue[B]=I[B])}return ue}function ie(I,C){if(I==null)return{};var ue={},B=Object.keys(I),ne,Q;for(Q=0;Q<B.length;Q++)ne=B[Q],!(C.indexOf(ne)>=0)&&(ue[ne]=I[ne]);return ue}var z=Object(J.forwardRef)(function(I,C){var ue=I.id,B=I.children,ne=I.component,Q=I.family,E=Q===void 0?"Pretendard":Q,V=I.level,P=V===void 0?"body1":V,oe=I.mobileLevel,O=I.tabletLevel,m=I.textAlign,a=m===void 0?"left":m,u=I.disabled,i=u===void 0?!1:u,D=I.strong,b=D===void 0?!1:D,c=I.italic,g=c===void 0?!1:c,f=I.underline,v=f===void 0?!1:f,T=I.color,k=I.className,p=I.co,S=I.overrideStyles,A=t(I,n),X=Object(w.c)(),ae=U({family:E,level:P,disabled:i,strong:b,italic:g,underline:v,textAlign:a,color:T,mobile:oe,tablet:O},{overrideStyles:S,name:"typography"}),o=ae.classes,y=ae.cx;return Object(r.jsx)(Y.a,Object.assign({component:ne||"span",ref:C,disabled:i,className:y(o.root,o.solid,k),co:p,onTouchStart:function(){}},A,{children:B}))});z.displayName="Typography";var te=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  Primary,\\n  PRIMARY_STORY,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"body1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Pretendard\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":169},"endLoc":{"col":1,"line":210},"startBody":{"col":23,"line":169},"endBody":{"col":1,"line":210}}};
    
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,q={Default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}},te=`import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
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
`,q={Default:{startLoc:{col:23,line:169},endLoc:{col:1,line:210},startBody:{col:23,line:169},endBody:{col:1,line:210}}},le=h.default={title:"@travelmakers-design-v2/core/General/Typography",component:z,argTypes:{level:{defaultValue:"body1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  Primary,\\n  PRIMARY_STORY,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { Typography } from \\"../Typography\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Typography\\",\\n  component: Typography,\\n  argTypes: {\\n    level: {\\n      defaultValue: \\"body1\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    family: {\\n      defaultValue: \\"Pretendard\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Noto Serif KR\\", \\"Pretendard\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    textAlign: {\\n      defaultValue: \\"left\\",\\n      description: \\"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"left\\", \\"center\\", \\"right\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    strong: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    italic: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    underline: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    mobileLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n    tabletLevel: {\\n      defaultValue: \\"\\",\\n      description: \\"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\n        \\"display1\\",\\n        \\"display2\\",\\n        \\"display3\\",\\n        \\"display4\\",\\n        \\"display5\\",\\n        \\"display6\\",\\n        \\"subhead1\\",\\n        \\"subhead2\\",\\n        \\"body1\\",\\n        \\"body2\\",\\n        \\"body3\\",\\n        \\"caption\\",\\n      ],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"select\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":169},"endLoc":{"col":1,"line":210},"startBody":{"col":23,"line":169},"endBody":{"col":1,"line":210}}};
    
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}}},docs:{page:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(re.g,{}),Object(r.jsx)(re.f,{}),Object(r.jsx)(re.b,{}),Object(r.jsx)(re.d,{}),Object(r.jsx)(re.a,{story:re.c}),Object(r.jsx)(re.e,{})]})}}}},me=function(C){return Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)(z,Object.assign({},C,{level:"display1",children:"display1. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"display2",children:"display2. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"display3",children:"display3. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"display4",children:"display4. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"display5",children:"display5. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"display6",children:"display6. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"subhead1",children:"subhead1. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"subhead2",children:"subhead2. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"body1",children:"body1. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"body2",children:"body2. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"body3",children:"body3. Travelmakers Design"})),Object(r.jsx)(z,Object.assign({},C,{level:"caption",children:"caption. Travelmakers Design"}))]})};me.displayName="Default",me.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},me.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(ce,h,e){"use strict";e.d(h,"a",function(){return ue});var H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(H),x=e("./node_modules/core-js/modules/es.array.map.js"),N=e.n(x),L=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(L),w=e("./node_modules/core-js/modules/es.object.keys.js"),J=e.n(w),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),ee=e.n(Y),Z=e("./node_modules/core-js/modules/es.symbol.js"),U=e.n(Z),r=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),n=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/react/index.js"),ie=e.n(t),z=e("./node_modules/react/jsx-runtime.js"),te=e.n(z),q=["component","className","style","co"];function le(B,ne){if(B==null)return{};var Q=me(B,ne),E,V;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(B);for(V=0;V<P.length;V++)E=P[V],!(ne.indexOf(E)>=0)&&Object.prototype.propertyIsEnumerable.call(B,E)&&(Q[E]=B[E])}return Q}function me(B,ne){if(B==null)return{};var Q={},E=Object.keys(B),V,P;for(P=0;P<E.length;P++)V=E[P],!(ne.indexOf(V)>=0)&&(Q[V]=B[V]);return Q}function I(B,ne){return typeof B=="function"?B(ne):B}function C(B,ne){var Q=Object(r.a)(),E=Q.css,V=Q.cx,P=Object(n.c)();return Array.isArray(B)?V(ne,B.map(function(oe){return E(I(oe,P))})):V(ne,E(I(B,P)))}var ue=Object(t.forwardRef)(function(B,ne){var Q=B.component,E=B.className,V=B.style,P=B.co,oe=le(B,q),O=Q||"div";return Object(z.jsx)(O,Object.assign({ref:ne,className:C(P,E),style:V},oe))});ue.displayName="@travelmakers-design-v2/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return J});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(H),x=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./node_modules/react/jsx-runtime.js"),L=e.n(N),$=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":18},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":18}}};
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},$=`import { View } from "../View";

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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}};h.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":18},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":18}}};
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design-v2/core/General/View",component:x.a};var J=function(){return Object(N.jsx)(x.a,{co:function(Z){return{width:100,height:100,backgroundColor:Z.colors.gray3}}})};J.displayName="Default",J.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},J.parameters)},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return L});var H=e("./node_modules/core-js/modules/es.array.concat.js"),re=e.n(H),x=e("./node_modules/react/index.js"),N=e.n(x),L=function(w){var J=Object(x.useRef)(w);return Object(x.useEffect)(function(){J.current=w},[w]),Object(x.useMemo)(function(){return function(){for(var Y,ee=arguments.length,Z=new Array(ee),U=0;U<ee;U++)Z[U]=arguments[U];return(Y=J.current)===null||Y===void 0?void 0:Y.call.apply(Y,[J].concat(Z))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return O});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),x=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/core-js/modules/es.array.from.js"),r=e("./node_modules/react/index.js"),n=e("./node_modules/core-js/modules/web.timers.js");function t(m,a){return le(m)||q(m,a)||z(m,a)||ie()}function ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(m,a){if(m){if(typeof m=="string")return te(m,a);var u=Object.prototype.toString.call(m).slice(8,-1);if(u==="Object"&&m.constructor&&(u=m.constructor.name),u==="Map"||u==="Set")return Array.from(m);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return te(m,a)}}function te(m,a){(a==null||a>m.length)&&(a=m.length);for(var u=0,i=new Array(a);u<a;u++)i[u]=m[u];return i}function q(m,a){var u=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(u!=null){var i,D,b,c,g=[],f=!0,v=!1;try{if(b=(u=u.call(m)).next,a===0){if(Object(u)!==u)return;f=!1}else for(;!(f=(i=b.call(u)).done)&&(g.push(i.value),g.length!==a);f=!0);}catch(T){v=!0,D=T}finally{try{if(!f&&u.return!=null&&(c=u.return(),Object(c)!==c))return}finally{if(v)throw D}}return g}}function le(m){if(Array.isArray(m))return m}var me=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=a.timeout,i=u===void 0?2e3:u,D=Object(r.useState)(null),b=t(D,2),c=b[0],g=b[1],f=Object(r.useState)(!1),v=t(f,2),T=v[0],k=v[1],p=Object(r.useState)(null),S=t(p,2),A=S[0],X=S[1],ae=function(j){clearTimeout(A),X(setTimeout(function(){return k(!1)},i)),k(j)},o=function(j){"clipboard"in navigator?navigator.clipboard.writeText(j).then(function(){return ae(!0)}).catch(function(R){return g(R)}):g(new Error("useClipboard: navigator.clipboard is not supported"))},y=function(){k(!1),g(null),clearTimeout(A)};return{copy:o,reset:y,error:c,copied:T}},I=e("./node_modules/react/jsx-runtime.js");function C(m,a){return E(m)||Q(m,a)||B(m,a)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(m,a){if(m){if(typeof m=="string")return ne(m,a);var u=Object.prototype.toString.call(m).slice(8,-1);if(u==="Object"&&m.constructor&&(u=m.constructor.name),u==="Map"||u==="Set")return Array.from(m);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return ne(m,a)}}function ne(m,a){(a==null||a>m.length)&&(a=m.length);for(var u=0,i=new Array(a);u<a;u++)i[u]=m[u];return i}function Q(m,a){var u=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(u!=null){var i,D,b,c,g=[],f=!0,v=!1;try{if(b=(u=u.call(m)).next,a===0){if(Object(u)!==u)return;f=!1}else for(;!(f=(i=b.call(u)).done)&&(g.push(i.value),g.length!==a);f=!0);}catch(T){v=!0,D=T}finally{try{if(!f&&u.return!=null&&(c=u.return(),Object(c)!==c))return}finally{if(v)throw D}}return g}}function E(m){if(Array.isArray(m))return m}var V=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,P={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},V=`import React, { useState } from "react";

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
`,P={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},oe=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design-v2/hooks/useClipboard"},O=function(){var a=Object(r.useState)(""),u=C(a,2),i=u[0],D=u[1],b=me({timeout:3e3}),c=b.copy,g=b.copied;return Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"text",onChange:function(v){return D(v.target.value)}}),Object(I.jsx)("button",{onClick:function(){return c(i)},children:"copy"}),Object(I.jsx)("span",{children:g&&"Copied!!"})]})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},O.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return m});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),x=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/core-js/modules/es.array.from.js"),r=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),t=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ie(a,u){return me(a)||le(a,u)||te(a,u)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(a,u){if(a){if(typeof a=="string")return q(a,u);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return q(a,u)}}function q(a,u){(u==null||u>a.length)&&(u=a.length);for(var i=0,D=new Array(u);i<u;i++)D[i]=a[i];return D}function le(a,u){var i=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var D,b,c,g,f=[],v=!0,T=!1;try{if(c=(i=i.call(a)).next,u===0){if(Object(i)!==i)return;v=!1}else for(;!(v=(D=c.call(i)).done)&&(f.push(D.value),f.length!==u);v=!0);}catch(k){T=!0,b=k}finally{try{if(!v&&i.return!=null&&(g=i.return(),Object(g)!==g))return}finally{if(T)throw b}}return f}}function me(a){if(Array.isArray(a))return a}var I=function(u,i,D){var b=Object(t.a)(u,i),c=ie(b,2),g=c[0],f=c[1];return Object(n.a)(g,D),f},C=e("./node_modules/react/jsx-runtime.js");function ue(a,u){return V(a)||E(a,u)||ne(a,u)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(a,u){if(a){if(typeof a=="string")return Q(a,u);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Q(a,u)}}function Q(a,u){(u==null||u>a.length)&&(u=a.length);for(var i=0,D=new Array(u);i<u;i++)D[i]=a[i];return D}function E(a,u){var i=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var D,b,c,g,f=[],v=!0,T=!1;try{if(c=(i=i.call(a)).next,u===0){if(Object(i)!==i)return;v=!1}else for(;!(v=(D=c.call(i)).done)&&(f.push(D.value),f.length!==u);v=!0);}catch(k){T=!0,b=k}finally{try{if(!v&&i.return!=null&&(g=i.return(),Object(g)!==g))return}finally{if(T)throw b}}return f}}function V(a){if(Array.isArray(a))return a}var P=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,oe={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},P=`import React, { useState } from "react";

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
`,oe={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},O=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useDebounce"},m=function(){var u=Object(r.useState)(""),i=ue(u,2),D=i[0],b=i[1],c=I(function(){alert("Updated!")},1e3,[D]);return Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{type:"text",onChange:function(f){return b(f.target.value)}}),Object(C.jsx)("button",{onClick:c,children:"Cancel"})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return ee});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(H),x=e("./node_modules/react/index.js"),N=e.n(x),L=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),$=e("./node_modules/react/jsx-runtime.js"),w=e.n($),J=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Y={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},J=`import React from "react";
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
`,Y={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useForceUpdate"};var ee=function(){var U=Object(L.a)();return Object($.jsxs)("div",{children:[Math.random(),Object($.jsx)("button",{onClick:U,children:"Update"})]})};ee.displayName="Default",ee.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},ee.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return O});var H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(H),x=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(x),L=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e.n(L),w=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(w),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e.n(Y),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e.n(Z),r=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(r),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ie=e.n(t),z=e("./node_modules/core-js/modules/es.array.slice.js"),te=e.n(z),q=e("./node_modules/core-js/modules/es.function.name.js"),le=e.n(q),me=e("./node_modules/core-js/modules/es.array.from.js"),I=e.n(me),C=e("./node_modules/react/index.js"),ue=e.n(C);function B(m,a){return P(m)||V(m,a)||Q(m,a)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(m,a){if(m){if(typeof m=="string")return E(m,a);var u=Object.prototype.toString.call(m).slice(8,-1);if(u==="Object"&&m.constructor&&(u=m.constructor.name),u==="Map"||u==="Set")return Array.from(m);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return E(m,a)}}function E(m,a){(a==null||a>m.length)&&(a=m.length);for(var u=0,i=new Array(a);u<a;u++)i[u]=m[u];return i}function V(m,a){var u=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(u!=null){var i,D,b,c,g=[],f=!0,v=!1;try{if(b=(u=u.call(m)).next,a===0){if(Object(u)!==u)return;f=!1}else for(;!(f=(i=b.call(u)).done)&&(g.push(i.value),g.length!==a);f=!0);}catch(T){v=!0,D=T}finally{try{if(!f&&u.return!=null&&(c=u.return(),Object(c)!==c))return}finally{if(v)throw D}}return g}}function P(m){if(Array.isArray(m))return m}var oe=function(a){return(a+1)%1e6},O=function(){var a=Object(C.useReducer)(oe,0),u=B(a,2),i=u[1];return i}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Y});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),x=function(){var Z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function U(t){t.preventDefault()}function r(){document.body.addEventListener("touchmove",U,{passive:!1})}function n(){document.body.removeEventListener("touchmove",U)}return Object(re.useEffect)(function(){return Z&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var t=document.body.style.top;document.body.style.cssText=""}},[]),Object(re.useEffect)(function(){return Z&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[Z]),null},N=x,L=e("./node_modules/react/jsx-runtime.js"),$=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},$=`import React, { useState } from "react";

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
`,w={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}},J=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useHiddenBodyOverflow"},Y=function(){return N(!0),Object(L.jsx)("div",{children:Object(L.jsx)("span",{children:"useHiddenBodyOverflow"})})};Y.displayName="Default",Y.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},Y.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return ae});var H=e("./node_modules/core-js/modules/es.promise.js"),re=e("./node_modules/core-js/modules/es.object.to-string.js"),x=e("./node_modules/core-js/modules/web.timers.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),L=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Y=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),r=e("./node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/react/index.js"),ie=e("./node_modules/core-js/modules/es.object.define-property.js"),z=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),te=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),q=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),le=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),me=e("./node_modules/core-js/modules/es.object.create.js"),I=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),C=e("./node_modules/core-js/modules/es.array.for-each.js"),ue=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),B=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),ne=e("./node_modules/core-js/modules/es.array.reverse.js"),Q=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function E(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */E=function(){return o};var o={},y=Object.prototype,d=y.hasOwnProperty,j=Object.defineProperty||function(l,s,_){l[s]=_.value},R=typeof Symbol=="function"?Symbol:{},M=R.iterator||"@@iterator",de=R.asyncIterator||"@@asyncIterator",_e=R.toStringTag||"@@toStringTag";function se(l,s,_){return Object.defineProperty(l,s,{value:_,enumerable:!0,configurable:!0,writable:!0}),l[s]}try{se({},"")}catch(l){se=function(_,F,G){return _[F]=G}}function pe(l,s,_,F){var G=s&&s.prototype instanceof he?s:he,K=Object.create(G.prototype),fe=new Re(F||[]);return j(K,"_invoke",{value:Be(l,_,fe)}),K}function ge(l,s,_){try{return{type:"normal",arg:l.call(s,_)}}catch(F){return{type:"throw",arg:F}}}o.wrap=pe;var be={};function he(){}function Oe(){}function De(){}var Te={};se(Te,M,function(){return this});var Le=Object.getPrototypeOf,Ee=Le&&Le(Le(ke([])));Ee&&Ee!==y&&d.call(Ee,M)&&(Te=Ee);var xe=De.prototype=he.prototype=Object.create(Te);function Fe(l){["next","throw","return"].forEach(function(s){se(l,s,function(_){return this._invoke(s,_)})})}function Se(l,s){function _(G,K,fe,ve){var ye=ge(l[G],l,K);if(ye.type!=="throw"){var je=ye.arg,Ce=je.value;return Ce&&typeof Ce=="object"&&d.call(Ce,"__await")?s.resolve(Ce.__await).then(function(Ae){_("next",Ae,fe,ve)},function(Ae){_("throw",Ae,fe,ve)}):s.resolve(Ce).then(function(Ae){je.value=Ae,fe(je)},function(Ae){return _("throw",Ae,fe,ve)})}ve(ye.arg)}var F;j(this,"_invoke",{value:function(K,fe){function ve(){return new s(function(ye,je){_(K,fe,ye,je)})}return F=F?F.then(ve,ve):ve()}})}function Be(l,s,_){var F="suspendedStart";return function(G,K){if(F==="executing")throw new Error("Generator is already running");if(F==="completed"){if(G==="throw")throw K;return W()}for(_.method=G,_.arg=K;;){var fe=_.delegate;if(fe){var ve=Me(fe,_);if(ve){if(ve===be)continue;return ve}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(F==="suspendedStart")throw F="completed",_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);F="executing";var ye=ge(l,s,_);if(ye.type==="normal"){if(F=_.done?"completed":"suspendedYield",ye.arg===be)continue;return{value:ye.arg,done:_.done}}ye.type==="throw"&&(F="completed",_.method="throw",_.arg=ye.arg)}}}function Me(l,s){var _=s.method,F=l.iterator[_];if(F===void 0)return s.delegate=null,_==="throw"&&l.iterator.return&&(s.method="return",s.arg=void 0,Me(l,s),s.method==="throw")||_!=="return"&&(s.method="throw",s.arg=new TypeError("The iterator does not provide a '"+_+"' method")),be;var G=ge(F,l.iterator,s.arg);if(G.type==="throw")return s.method="throw",s.arg=G.arg,s.delegate=null,be;var K=G.arg;return K?K.done?(s[l.resultName]=K.value,s.next=l.nextLoc,s.method!=="return"&&(s.method="next",s.arg=void 0),s.delegate=null,be):K:(s.method="throw",s.arg=new TypeError("iterator result is not an object"),s.delegate=null,be)}function Ie(l){var s={tryLoc:l[0]};1 in l&&(s.catchLoc=l[1]),2 in l&&(s.finallyLoc=l[2],s.afterLoc=l[3]),this.tryEntries.push(s)}function Pe(l){var s=l.completion||{};s.type="normal",delete s.arg,l.completion=s}function Re(l){this.tryEntries=[{tryLoc:"root"}],l.forEach(Ie,this),this.reset(!0)}function ke(l){if(l){var s=l[M];if(s)return s.call(l);if(typeof l.next=="function")return l;if(!isNaN(l.length)){var _=-1,F=function G(){for(;++_<l.length;)if(d.call(l,_))return G.value=l[_],G.done=!1,G;return G.value=void 0,G.done=!0,G};return F.next=F}}return{next:W}}function W(){return{value:void 0,done:!0}}return Oe.prototype=De,j(xe,"constructor",{value:De,configurable:!0}),j(De,"constructor",{value:Oe,configurable:!0}),Oe.displayName=se(De,_e,"GeneratorFunction"),o.isGeneratorFunction=function(l){var s=typeof l=="function"&&l.constructor;return!!s&&(s===Oe||(s.displayName||s.name)==="GeneratorFunction")},o.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,De):(l.__proto__=De,se(l,_e,"GeneratorFunction")),l.prototype=Object.create(xe),l},o.awrap=function(l){return{__await:l}},Fe(Se.prototype),se(Se.prototype,de,function(){return this}),o.AsyncIterator=Se,o.async=function(l,s,_,F,G){G===void 0&&(G=Promise);var K=new Se(pe(l,s,_,F),G);return o.isGeneratorFunction(s)?K:K.next().then(function(fe){return fe.done?fe.value:K.next()})},Fe(xe),se(xe,_e,"Generator"),se(xe,M,function(){return this}),se(xe,"toString",function(){return"[object Generator]"}),o.keys=function(l){var s=Object(l),_=[];for(var F in s)_.push(F);return _.reverse(),function G(){for(;_.length;){var K=_.pop();if(K in s)return G.value=K,G.done=!1,G}return G.done=!0,G}},o.values=ke,Re.prototype={constructor:Re,reset:function(s){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Pe),!s)for(var _ in this)_.charAt(0)==="t"&&d.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=void 0)},stop:function(){this.done=!0;var s=this.tryEntries[0].completion;if(s.type==="throw")throw s.arg;return this.rval},dispatchException:function(s){if(this.done)throw s;var _=this;function F(je,Ce){return fe.type="throw",fe.arg=s,_.next=je,Ce&&(_.method="next",_.arg=void 0),!!Ce}for(var G=this.tryEntries.length-1;G>=0;--G){var K=this.tryEntries[G],fe=K.completion;if(K.tryLoc==="root")return F("end");if(K.tryLoc<=this.prev){var ve=d.call(K,"catchLoc"),ye=d.call(K,"finallyLoc");if(ve&&ye){if(this.prev<K.catchLoc)return F(K.catchLoc,!0);if(this.prev<K.finallyLoc)return F(K.finallyLoc)}else if(ve){if(this.prev<K.catchLoc)return F(K.catchLoc,!0)}else{if(!ye)throw new Error("try statement without catch or finally");if(this.prev<K.finallyLoc)return F(K.finallyLoc)}}}},abrupt:function(s,_){for(var F=this.tryEntries.length-1;F>=0;--F){var G=this.tryEntries[F];if(G.tryLoc<=this.prev&&d.call(G,"finallyLoc")&&this.prev<G.finallyLoc){var K=G;break}}K&&(s==="break"||s==="continue")&&K.tryLoc<=_&&_<=K.finallyLoc&&(K=null);var fe=K?K.completion:{};return fe.type=s,fe.arg=_,K?(this.method="next",this.next=K.finallyLoc,be):this.complete(fe)},complete:function(s,_){if(s.type==="throw")throw s.arg;return s.type==="break"||s.type==="continue"?this.next=s.arg:s.type==="return"?(this.rval=this.arg=s.arg,this.method="return",this.next="end"):s.type==="normal"&&_&&(this.next=_),be},finish:function(s){for(var _=this.tryEntries.length-1;_>=0;--_){var F=this.tryEntries[_];if(F.finallyLoc===s)return this.complete(F.completion,F.afterLoc),Pe(F),be}},catch:function(s){for(var _=this.tryEntries.length-1;_>=0;--_){var F=this.tryEntries[_];if(F.tryLoc===s){var G=F.completion;if(G.type==="throw"){var K=G.arg;Pe(F)}return K}}throw new Error("illegal catch attempt")},delegateYield:function(s,_,F){return this.delegate={iterator:ke(s),resultName:_,nextLoc:F},this.method==="next"&&(this.arg=void 0),be}},o}function V(o,y,d,j,R,M,de){try{var _e=o[M](de),se=_e.value}catch(pe){d(pe);return}_e.done?y(se):Promise.resolve(se).then(j,R)}function P(o){return function(){var y=this,d=arguments;return new Promise(function(j,R){var M=o.apply(y,d);function de(se){V(M,j,R,de,_e,"next",se)}function _e(se){V(M,j,R,de,_e,"throw",se)}de(void 0)})}}function oe(o,y){return i(o)||u(o,y)||m(o,y)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(o,y){if(o){if(typeof o=="string")return a(o,y);var d=Object.prototype.toString.call(o).slice(8,-1);if(d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set")return Array.from(o);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return a(o,y)}}function a(o,y){(y==null||y>o.length)&&(y=o.length);for(var d=0,j=new Array(y);d<y;d++)j[d]=o[d];return j}function u(o,y){var d=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(d!=null){var j,R,M,de,_e=[],se=!0,pe=!1;try{if(M=(d=d.call(o)).next,y===0){if(Object(d)!==d)return;se=!1}else for(;!(se=(j=M.call(d)).done)&&(_e.push(j.value),_e.length!==y);se=!0);}catch(ge){pe=!0,R=ge}finally{try{if(!se&&d.return!=null&&(de=d.return(),Object(de)!==de))return}finally{if(pe)throw R}}return _e}}function i(o){if(Array.isArray(o))return o}var D=function(y){var d=Object(t.useState)(!1),j=oe(d,2),R=j[0],M=j[1],de=Object(Q.a)(y),_e=Object(t.useCallback)(P(E().mark(function se(){var pe,ge=arguments;return E().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return M(!0),he.next=3,de.apply(void 0,ge);case 3:return pe=he.sent,M(!1),he.abrupt("return",pe);case 6:case"end":return he.stop()}},se)})),[y]);return[R,_e]},b=e("./node_modules/react/jsx-runtime.js");function c(o,y){return k(o)||T(o,y)||f(o,y)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(o,y){if(o){if(typeof o=="string")return v(o,y);var d=Object.prototype.toString.call(o).slice(8,-1);if(d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set")return Array.from(o);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return v(o,y)}}function v(o,y){(y==null||y>o.length)&&(y=o.length);for(var d=0,j=new Array(y);d<y;d++)j[d]=o[d];return j}function T(o,y){var d=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(d!=null){var j,R,M,de,_e=[],se=!0,pe=!1;try{if(M=(d=d.call(o)).next,y===0){if(Object(d)!==d)return;se=!1}else for(;!(se=(j=M.call(d)).done)&&(_e.push(j.value),_e.length!==y);se=!0);}catch(ge){pe=!0,R=ge}finally{try{if(!se&&d.return!=null&&(de=d.return(),Object(de)!==de))return}finally{if(pe)throw R}}return _e}}function k(o){if(Array.isArray(o))return o}var p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},p=`import React from "react";
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
`,S={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},A=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design-v2/hooks/useLoading"},X=function(y){return new Promise(function(d){return setTimeout(d,y)})},ae=function(){var y=D(X),d=c(y,2),j=d[0],R=d[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){return R(2e3)},children:"Start"})}),Object(b.jsxs)("div",{children:["Loading: ",""+j]})]})};ae.displayName="Default",ae.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},ae.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return b});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(H),x=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e.n(x),L=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(L),w=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(w),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(Y),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(Z),r=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(r),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ie=e.n(t),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),te=e.n(z),q=e("./node_modules/core-js/modules/es.array.slice.js"),le=e.n(q),me=e("./node_modules/core-js/modules/es.function.name.js"),I=e.n(me),C=e("./node_modules/core-js/modules/es.array.from.js"),ue=e.n(C),B=e("./node_modules/react/index.js"),ne=e.n(B),Q=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),E=e("./node_modules/react/jsx-runtime.js"),V=e.n(E);function P(c,g){return u(c)||a(c,g)||O(c,g)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(c,g){if(c){if(typeof c=="string")return m(c,g);var f=Object.prototype.toString.call(c).slice(8,-1);if(f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set")return Array.from(c);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return m(c,g)}}function m(c,g){(g==null||g>c.length)&&(g=c.length);for(var f=0,v=new Array(g);f<g;f++)v[f]=c[f];return v}function a(c,g){var f=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var v,T,k,p,S=[],A=!0,X=!1;try{if(k=(f=f.call(c)).next,g===0){if(Object(f)!==f)return;A=!1}else for(;!(A=(v=k.call(f)).done)&&(S.push(v.value),S.length!==g);A=!0);}catch(ae){X=!0,T=ae}finally{try{if(!A&&f.return!=null&&(p=f.return(),Object(p)!==p))return}finally{if(X)throw T}}return S}}function u(c){if(Array.isArray(c))return c}var i=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},i=`import React, { useEffect } from "react";

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
`,D={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design-v2/hooks/useRafState"};var b=function(){var g=Object(Q.a)({width:0,height:0}),f=P(g,2),v=f[0],T=f[1];return Object(B.useEffect)(function(){var k=function(){T({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}},[]),Object(E.jsx)("pre",{children:JSON.stringify(v,null,2)})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
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
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return oe});var H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(H),x=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(x),L=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e.n(L),w=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(w),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e.n(Y),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e.n(Z),r=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(r),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ie=e.n(t),z=e("./node_modules/core-js/modules/es.array.slice.js"),te=e.n(z),q=e("./node_modules/core-js/modules/es.function.name.js"),le=e.n(q),me=e("./node_modules/core-js/modules/es.array.from.js"),I=e.n(me),C=e("./node_modules/react/index.js"),ue=e.n(C);function B(O,m){return P(O)||V(O,m)||Q(O,m)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(O,m){if(O){if(typeof O=="string")return E(O,m);var a=Object.prototype.toString.call(O).slice(8,-1);if(a==="Object"&&O.constructor&&(a=O.constructor.name),a==="Map"||a==="Set")return Array.from(O);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(O,m)}}function E(O,m){(m==null||m>O.length)&&(m=O.length);for(var a=0,u=new Array(m);a<m;a++)u[a]=O[a];return u}function V(O,m){var a=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(a!=null){var u,i,D,b,c=[],g=!0,f=!1;try{if(D=(a=a.call(O)).next,m===0){if(Object(a)!==a)return;g=!1}else for(;!(g=(u=D.call(a)).done)&&(c.push(u.value),c.length!==m);g=!0);}catch(v){f=!0,i=v}finally{try{if(!g&&a.return!=null&&(b=a.return(),Object(b)!==b))return}finally{if(f)throw i}}return c}}function P(O){if(Array.isArray(O))return O}var oe=function(m){var a=Object(C.useRef)(0),u=Object(C.useState)(m),i=B(u,2),D=i[0],b=i[1],c=Object(C.useCallback)(function(g){cancelAnimationFrame(a.current),a.current=requestAnimationFrame(function(){b(g)})},[]);return[D,c]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return u});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),x=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/core-js/modules/es.array.from.js"),r=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),t=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function ie(i,D){return me(i)||le(i,D)||te(i,D)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(i,D){if(i){if(typeof i=="string")return q(i,D);var b=Object.prototype.toString.call(i).slice(8,-1);if(b==="Object"&&i.constructor&&(b=i.constructor.name),b==="Map"||b==="Set")return Array.from(i);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return q(i,D)}}function q(i,D){(D==null||D>i.length)&&(D=i.length);for(var b=0,c=new Array(D);b<D;b++)c[b]=i[b];return c}function le(i,D){var b=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(b!=null){var c,g,f,v,T=[],k=!0,p=!1;try{if(f=(b=b.call(i)).next,D===0){if(Object(b)!==b)return;k=!1}else for(;!(k=(c=f.call(b)).done)&&(T.push(c.value),T.length!==D);k=!0);}catch(S){p=!0,g=S}finally{try{if(!k&&b.return!=null&&(v=b.return(),Object(v)!==v))return}finally{if(p)throw g}}return T}}function me(i){if(Array.isArray(i))return i}var I={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},C=typeof window!="undefined",ue=function(){var D=Object(r.useRef)(null),b=Object(t.a)(I),c=ie(b,2),g=c[0],f=c[1],v=Object(r.useMemo)(function(){return C?new ResizeObserver(function(T){var k=T[0];k&&f(k.contentRect)}):null},[]);return Object(r.useEffect)(function(){return D.current&&v.observe(D.current),function(){v.disconnect()}},[D.current]),[D,g]},B=e("./node_modules/react/jsx-runtime.js");function ne(i,D){return oe(i)||P(i,D)||E(i,D)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(i,D){if(i){if(typeof i=="string")return V(i,D);var b=Object.prototype.toString.call(i).slice(8,-1);if(b==="Object"&&i.constructor&&(b=i.constructor.name),b==="Map"||b==="Set")return Array.from(i);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return V(i,D)}}function V(i,D){(D==null||D>i.length)&&(D=i.length);for(var b=0,c=new Array(D);b<D;b++)c[b]=i[b];return c}function P(i,D){var b=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(b!=null){var c,g,f,v,T=[],k=!0,p=!1;try{if(f=(b=b.call(i)).next,D===0){if(Object(b)!==b)return;k=!1}else for(;!(k=(c=f.call(b)).done)&&(T.push(c.value),T.length!==D);k=!0);}catch(S){p=!0,g=S}finally{try{if(!k&&b.return!=null&&(v=b.return(),Object(v)!==v))return}finally{if(p)throw g}}return T}}function oe(i){if(Array.isArray(i))return i}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,m={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},O=`import React, { useEffect } from "react";

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
`,m={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},a=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/hooks/useResize"},u=function(){var D=ue(),b=ne(D,2),c=b[0],g=b[1],f=Object(n.a)();return Object(r.useEffect)(function(){f()},[]),Object(B.jsxs)("div",{children:[Object(B.jsx)("textarea",{ref:c,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(B.jsx)("div",{children:JSON.stringify(g)})]})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return b});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(H),x=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e.n(x),L=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(L),w=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(w),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(Y),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(Z),r=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(r),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ie=e.n(t),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),te=e.n(z),q=e("./node_modules/core-js/modules/es.array.slice.js"),le=e.n(q),me=e("./node_modules/core-js/modules/es.function.name.js"),I=e.n(me),C=e("./node_modules/core-js/modules/es.array.from.js"),ue=e.n(C),B=e("./node_modules/react/index.js"),ne=e.n(B),Q=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),E=e("./node_modules/react/jsx-runtime.js"),V=e.n(E);function P(c,g){return u(c)||a(c,g)||O(c,g)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(c,g){if(c){if(typeof c=="string")return m(c,g);var f=Object.prototype.toString.call(c).slice(8,-1);if(f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set")return Array.from(c);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return m(c,g)}}function m(c,g){(g==null||g>c.length)&&(g=c.length);for(var f=0,v=new Array(g);f<g;f++)v[f]=c[f];return v}function a(c,g){var f=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var v,T,k,p,S=[],A=!0,X=!1;try{if(k=(f=f.call(c)).next,g===0){if(Object(f)!==f)return;A=!1}else for(;!(A=(v=k.call(f)).done)&&(S.push(v.value),S.length!==g);A=!0);}catch(ae){X=!0,T=ae}finally{try{if(!A&&f.return!=null&&(p=f.return(),Object(p)!==p))return}finally{if(X)throw T}}return S}}function u(c){if(Array.isArray(c))return c}var i=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},i=`import React from "react";
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
`,D={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/hooks/useTimeoutFn"};var b=function(){var g=Object(Q.a)(function(){alert("fire!")},2e3),f=P(g,2),v=f[0],T=f[1];return Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{onClick:v,children:"Run"}),Object(E.jsx)("button",{onClick:T,children:"Clear"})]})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return $});var H=e("./node_modules/core-js/modules/web.timers.js"),re=e.n(H),x=e("./node_modules/react/index.js"),N=e.n(x),L=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),$=function(J,Y){var ee=Object(x.useRef)(),Z=Object(L.a)(J),U=Object(x.useCallback)(function(){ee.current&&clearTimeout(ee.current),ee.current=setTimeout(function(){Z()},Y)},[Y]),r=Object(x.useCallback)(function(){ee.current&&clearTimeout(ee.current)},[]);return Object(x.useEffect)(function(){return r},[r]),[U,r]}},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return b});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(H),x=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e.n(x),L=e("./node_modules/core-js/modules/es.symbol.js"),$=e.n(L),w=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(w),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(Y),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(Z),r=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(r),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ie=e.n(t),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),te=e.n(z),q=e("./node_modules/core-js/modules/es.array.slice.js"),le=e.n(q),me=e("./node_modules/core-js/modules/es.function.name.js"),I=e.n(me),C=e("./node_modules/core-js/modules/es.array.from.js"),ue=e.n(C),B=e("./node_modules/react/index.js"),ne=e.n(B),Q=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),E=e("./node_modules/react/jsx-runtime.js"),V=e.n(E);function P(c,g){return u(c)||a(c,g)||O(c,g)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(c,g){if(c){if(typeof c=="string")return m(c,g);var f=Object.prototype.toString.call(c).slice(8,-1);if(f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set")return Array.from(c);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return m(c,g)}}function m(c,g){(g==null||g>c.length)&&(g=c.length);for(var f=0,v=new Array(g);f<g;f++)v[f]=c[f];return v}function a(c,g){var f=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var v,T,k,p,S=[],A=!0,X=!1;try{if(k=(f=f.call(c)).next,g===0){if(Object(f)!==f)return;A=!1}else for(;!(A=(v=k.call(f)).done)&&(S.push(v.value),S.length!==g);A=!0);}catch(ae){X=!0,T=ae}finally{try{if(!A&&f.return!=null&&(p=f.return(),Object(p)!==p))return}finally{if(X)throw T}}return S}}function u(c){if(Array.isArray(c))return c}var i=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},i=`import React, { useEffect, useState } from "react";

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
`,D={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useUpdateEffect"};var b=function(){var g=Object(B.useState)(""),f=P(g,2),v=f[0],T=f[1];return Object(B.useEffect)(function(){console.log("useEffect:",v)},[v]),Object(Q.a)(function(){console.log("useUpdateEffect:",v)},[v]),Object(E.jsx)("div",{children:Object(E.jsx)("input",{type:"text",onChange:function(p){return T(p.target.value)}})})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
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
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return x});var H=e("./node_modules/react/index.js"),re=e.n(H),x=function(L,$){var w=Object(H.useRef)(!0);Object(H.useEffect)(function(){if(!w.current)return L();w.current=!1},$)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(ce,h,e){"use strict";e.d(h,"c",function(){return Me}),e.d(h,"d",function(){return Ie}),e.d(h,"b",function(){return Pe}),e.d(h,"a",function(){return ke});var H=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),x=e("./node_modules/core-js/modules/es.object.assign.js"),N={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},L={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},$={none:"none",elevation1:"0px 4px 8px rgba(0, 0, 0, 0.2)",elevation2:"0px 4px 12px rgba(0, 0, 0, 0.15)",elevation3:"0px 4px 16px rgba(0, 0, 0, 0.2)",elevation4:"0px 4px 20px rgba(0, 0, 0, 0.2)",elevation5:"0px 4px 24px rgba(0, 0, 0, 0.2)"},w={display1:"40px",display2:"32px",display3:"28px",display4:"24px",display5:"20px",display6:"18px",subhead1:"16px",subhead2:"14px",body1:"16px",body2:"14px",body3:"12px",caption:"10px"},J={display1:"56px",display2:"40px",display3:"36px",display4:"32px",display5:"28px",display6:"26px",subhead1:"24px",subhead2:"22px",body1:"24px",body2:"22px",body3:"20px",caption:"16px"},Y={radius10:"4px",radius20:"8px",radius100:"100px"},ee={spacing5:"4px",spacing10:"8px",spacing20:"12px",spacing30:"16px",spacing40:"20px",spacing50:"24px",spacing60:"28px",spacing70:"32px",spacing80:"36px",spacing90:"40px",spacing100:"48px",spacing110:"52px",spacing120:"56px",spacing130:"60px"},Z={xsmall:576,small:768,medium:1024,large:1408},U={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},r={mobile:"@media (max-width: "+U.mobile+"px)",tablet:"@media (max-width: "+U.tablet+"px)",desktop:"@media (max-width: "+U.desktop+"px)",largeDesktop:"@media (max-width: "+U.maxSize+"px)"},n=function(l){for(var s="",_=1;_<l.length-1;_+=1)s+=l[_]+" "+_/(l.length-1)*100+"%, ";return l[0]+" 0%, "+s+l[l.length-1]+" 100%"},t=function(l){for(var s=arguments.length,_=new Array(s>1?s-1:0),F=1;F<s;F++)_[F-1]=arguments[F];return"linear-gradient("+l+"deg, "+n(_)+")"},ie=function(){for(var l=arguments.length,s=new Array(l),_=0;_<l;_++)s[_]=arguments[_];return"radial-gradient(circle, "+n(s)+")"},z=function(l){return typeof l.size=="number"?l.size:l.sizes[l.size]||l.size||l.sizes.medium},te=function(l){return function(s){return"@media (min-width: "+(z({size:s,sizes:l.breakpoints})+1)+"px)"}},q=function(l){return function(s){return"@media (max-width: "+z({size:s,sizes:l.breakpoints})+"px)"}},le=e("./node_modules/core-js/modules/es.string.replace.js"),me=e("./node_modules/core-js/modules/es.regexp.exec.js"),I=e("./node_modules/core-js/modules/es.number.is-nan.js"),C=e("./node_modules/core-js/modules/es.number.constructor.js"),ue=e("./node_modules/core-js/modules/es.parse-int.js"),B=e("./node_modules/core-js/modules/es.array.map.js"),ne=e("./node_modules/core-js/modules/es.string.split.js"),Q=e("./node_modules/core-js/modules/es.string.starts-with.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),P=e("./node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/core-js/modules/es.object.to-string.js"),O=e("./node_modules/core-js/modules/es.symbol.iterator.js"),m=e("./node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/core-js/modules/es.array.iterator.js"),u=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/core-js/modules/es.array.slice.js"),D=e("./node_modules/core-js/modules/es.function.name.js"),b=e("./node_modules/core-js/modules/es.array.from.js");function c(W,l){return k(W)||T(W,l)||f(W,l)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(W,l){if(W){if(typeof W=="string")return v(W,l);var s=Object.prototype.toString.call(W).slice(8,-1);if(s==="Object"&&W.constructor&&(s=W.constructor.name),s==="Map"||s==="Set")return Array.from(W);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return v(W,l)}}function v(W,l){(l==null||l>W.length)&&(l=W.length);for(var s=0,_=new Array(l);s<l;s++)_[s]=W[s];return _}function T(W,l){var s=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(s!=null){var _,F,G,K,fe=[],ve=!0,ye=!1;try{if(G=(s=s.call(W)).next,l===0){if(Object(s)!==s)return;ve=!1}else for(;!(ve=(_=G.call(s)).done)&&(fe.push(_.value),fe.length!==l);ve=!0);}catch(je){ye=!0,F=je}finally{try{if(!ve&&s.return!=null&&(K=s.return(),Object(K)!==K))return}finally{if(ye)throw F}}return fe}}function k(W){if(Array.isArray(W))return W}var p=function(l){var s=l.replace("#","");return typeof s=="string"&&s.length===6&&!Number.isNaN(Number("0x"+s))},S=function(l){var s=l.replace("#",""),_=parseInt(s,16),F=_>>16&255,G=_>>8&255,K=_&255;return{r:F,g:G,b:K,a:1}},A=function(l){var s=l.replace(/[^0-9,.]/g,"").split(",").map(Number),_=c(s,4),F=_[0],G=_[1],K=_[2],fe=_[3];return{r:F,g:G,b:K,a:fe||1}},X=function(l){return p(l)?S(l):l.startsWith("rgb")?A(l):{r:0,g:0,b:0,a:1}},ae=function(l,s){if(typeof l!="string"||s>1||s<0)return"rgba(0, 0, 0, 1)";var _=X(l),F=_.r,G=_.g,K=_.b;return"rgba("+F+", "+G+", "+K+", "+s+")"},o=function(l,s){var _=X(l),F=_.r,G=_.g,K=_.b,fe=_.a,ve=1-s,ye=function(Ce){return Math.round(Ce*ve)};return"rgba("+ye(F)+", "+ye(G)+", "+ye(K)+", "+fe+")"},y=function(l,s){var _=X(l),F=_.r,G=_.g,K=_.b,fe=_.a,ve=function(je){return Math.round(je+(255-je)*s)};return"rgba("+ve(F)+", "+ve(G)+", "+ve(K)+", "+fe+")"},d=function(l){return l*8},j={linearGradient:t,radialGradient:ie,smallerThan:q,largerThan:te,rgba:ae,size:z,darken:o,lighten:y,spacing:d},R=function(l){return Object.assign({},l,{fn:{largerThan:j.largerThan(l),smallerThan:j.smallerThan(l),radialGradient:j.radialGradient,linearGradient:j.linearGradient,rgba:j.rgba,size:j.size,lighten:j.lighten,darken:j.darken,spacing:j.spacing}})},M={display1:{fontSize:w.display1,lineHeight:J.display1},display2:{fontSize:w.display2,lineHeight:J.display2},display3:{fontSize:w.display3,lineHeight:J.display3},display4:{fontSize:w.display4,lineHeight:J.display4},display5:{fontSize:w.display5,lineHeight:J.display5},display6:{fontSize:w.display6,lineHeight:J.display6},subhead1:{fontSize:w.subhead1,lineHeight:J.subhead1},subhead2:{fontSize:w.subhead2,lineHeight:J.subhead2},body1:{fontSize:w.body1,lineHeight:J.body1},body2:{fontSize:w.body2,lineHeight:J.body2},body3:{fontSize:w.body3,lineHeight:J.body3},caption:{fontSize:w.caption,lineHeight:J.caption}},de=Object.keys(N),_e=["xsmall","small","medium","large"],se=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],pe=function(l){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:l.fontFamily||"sans-serif"}},ge={locale:"ko",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",colors:N,shadows:$,fontSizes:w,lineHeights:J,radius:Y,typography:M,spacing:ee,breakpoints:Z,media:r},be=Object.assign({},ge,{colors:L,colorScheme:"dark"}),he=R(ge),Oe=R(be),De=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Te=e("./node_modules/react/jsx-runtime.js"),Le=function(l){var s=l.styles,_=Me();return Object(Te.jsx)(De.a,{styles:Object(De.b)(s(_))})};Le.displayName="Global";var Ee={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0}},xe=function(){return Object(Te.jsx)(De.a,{styles:Ee})};xe.displayName="NormalizeCSS";var Fe=e("./node_modules/core-js/modules/es.array.reduce.js");function Se(W,l){return l?Object.keys(W).reduce(function(s,_){if(_==="headings"&&l.headings){var F=l.headings?Object.keys(W.headings).reduce(function(G,K){return G[K]=Object.assign({},W.headings[K],l.headings[K]),G},{}):W.headings;return Object.assign({},s,{headings:Object.assign({},W.headings,l.headings,F)})}return s[_]=typeof l[_]=="object"?Object.assign({},W[_],l[_]):l[_]||W[_],s},{}):W}var Be=Object(H.createContext)({theme:he,styles:{},emotionOptions:{key:"co",prepend:!0}});function Me(){var W;return((W=Object(H.useContext)(Be))===null||W===void 0?void 0:W.theme)||he}function Ie(){var W;return((W=Object(H.useContext)(Be))===null||W===void 0?void 0:W.styles)||{}}function Pe(){var W;return((W=Object(H.useContext)(Be))===null||W===void 0?void 0:W.emotionOptions)||{key:"co",prepend:!0}}var Re=function(){return Object(Te.jsx)(Le,{styles:function(s){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:s.fontFamily,backgroundColor:s.colorScheme==="dark"?s.colors.black:s.colors.white,color:s.colorScheme==="dark"?s.colors.white:s.colors.black,lineHeight:s.lineHeight,fontSizes:s.fontSizes.body3}}}})};Re.displayName="GlobalStyles";var ke=function(l){var s=l.theme,_=l.styles,F=_===void 0?{}:_,G=l.emotionOptions,K=l.withNormalizeCSS,fe=K===void 0?!1:K,ve=l.withGlobalStyles,ye=ve===void 0?!1:ve,je=l.children;return Object(Te.jsxs)(Be.Provider,{value:{theme:Se(s.colorScheme==="dark"?Oe:he,s),styles:F,emotionOptions:G},children:[fe&&Object(Te.jsx)(xe,{}),ye&&Object(Te.jsx)(Re,{}),je]})};ke.displayName="TmProvider",ke.displayName="@travelmakers-design-v2/styles/TmProvider"},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return Q});var H=e("./node_modules/core-js/modules/es.function.name.js"),re=e("./node_modules/core-js/modules/es.array.map.js"),x=e("./node_modules/core-js/modules/es.object.keys.js"),N=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),L=e("./node_modules/core-js/modules/es.array.for-each.js"),$=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),r=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t=e("./node_modules/core-js/modules/es.array.slice.js"),ie=e("./node_modules/core-js/modules/es.array.from.js");function z(E,V){return I(E)||me(E,V)||q(E,V)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(E,V){if(E){if(typeof E=="string")return le(E,V);var P=Object.prototype.toString.call(E).slice(8,-1);if(P==="Object"&&E.constructor&&(P=E.constructor.name),P==="Map"||P==="Set")return Array.from(E);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return le(E,V)}}function le(E,V){(V==null||V>E.length)&&(V=E.length);for(var P=0,oe=new Array(V);P<V;P++)oe[P]=E[P];return oe}function me(E,V){var P=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(P!=null){var oe,O,m,a,u=[],i=!0,D=!1;try{if(m=(P=P.call(E)).next,V===0){if(Object(P)!==P)return;i=!1}else for(;!(i=(oe=m.call(P)).done)&&(u.push(oe.value),u.length!==V);i=!0);}catch(b){D=!0,O=b}finally{try{if(!i&&P.return!=null&&(a=P.return(),Object(a)!==a))return}finally{if(D)throw O}}return u}}function I(E){if(Array.isArray(E))return E}function C(E){var V={};return Object.keys(E).forEach(function(P){var oe=z(E[P],2),O=oe[0],m=oe[1];V[O]=m}),V}var ue=e("./node_modules/core-js/modules/es.array.reduce.js");function B(E,V,P){return Object.keys(V).reduce(function(oe,O){return oe[O]=E(V[O],P?"tm-"+P+"-"+O:null),oe},{})}var ne=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function Q(E){var V=typeof E=="function"?E:function(){return E};function P(oe,O){var m=Object(N.c)(),a=Object(N.d)()[O==null?void 0:O.name],u=Object(ne.a)(),i=u.css,D=u.cx,b=u.cssRn,c=0;function g(S){return c+=1,"tm-ref_"+(S||"")+"_"+c}var f=V(m,oe,g),v=typeof(O==null?void 0:O.overrideStyles)=="function"?O==null?void 0:O.overrideStyles(m):(O==null?void 0:O.overrideStyles)||{},T=typeof a=="function"?a(m):a||{},k=typeof(O==null?void 0:O.tm)=="function"?O.tm(m):O==null?void 0:O.tm,p=C(Object.keys(f).map(function(S){var A=D(i(f[S]),i(T[S]),i(v[S]),i(k));return[S,A]}));return{classes:B(D,p,O==null?void 0:O.name),cx:D,theme:m}}return P}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return k});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.function.name.js"),x=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),L=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),Y=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.array.from.js"),r=e("./node_modules/clsx/dist/clsx.m.js"),n=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),t=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ie=e("./node_modules/core-js/modules/es.array.index-of.js"),z=e("./node_modules/core-js/modules/es.array.map.js"),te=e("./node_modules/react/index.js");function q(p){return C(p)||I(p)||me(p)||le()}function le(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(p,S){if(p){if(typeof p=="string")return ue(p,S);var A=Object.prototype.toString.call(p).slice(8,-1);if(A==="Object"&&p.constructor&&(A=p.constructor.name),A==="Map"||A==="Set")return Array.from(p);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return ue(p,S)}}function I(p){if(typeof Symbol!="undefined"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function C(p){if(Array.isArray(p))return ue(p)}function ue(p,S){(S==null||S>p.length)&&(S=p.length);for(var A=0,X=new Array(S);A<S;A++)X[A]=p[A];return X}function B(p,S){var A=Object(te.useRef)();return(!A.current||S.length!==A.current.prevDeps.length||A.current.prevDeps.map(function(X,ae){return X===S[ae]}).indexOf(!1)>=0)&&(A.current={v:p(),prevDeps:q(S)}),A.current.v}var ne=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./node_modules/react/jsx-runtime.js"),V=function(){var p;function S(A){return p===void 0&&(p=Object(ne.a)(A||{key:"co",prepend:!0})),p}return{getCache:S}}(),P=V.getCache,oe=Object(te.createContext)(void 0);function O(){var p=Object(Q.b)();return Object(te.useContext)(oe)||P(p)}function m(p){var S=p.children,A=p.value;return Object(E.jsx)(oe.Provider,{value:A,children:S})}m.displayName="CacheProvider";function a(p,S){return c(p)||b(p,S)||i(p,S)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(p,S){if(p){if(typeof p=="string")return D(p,S);var A=Object.prototype.toString.call(p).slice(8,-1);if(A==="Object"&&p.constructor&&(A=p.constructor.name),A==="Map"||A==="Set")return Array.from(p);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return D(p,S)}}function D(p,S){(S==null||S>p.length)&&(S=p.length);for(var A=0,X=new Array(S);A<S;A++)X[A]=p[A];return X}function b(p,S){var A=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(A!=null){var X,ae,o,y,d=[],j=!0,R=!1;try{if(o=(A=A.call(p)).next,S===0){if(Object(A)!==A)return;j=!1}else for(;!(j=(X=o.call(A)).done)&&(d.push(X.value),d.length!==S);j=!0);}catch(M){R=!0,ae=M}finally{try{if(!j&&A.return!=null&&(y=A.return(),Object(y)!==y))return}finally{if(R)throw ae}}return d}}function c(p){if(Array.isArray(p))return p}var g="ref";function f(p){var S;if(p.length!==1)return{args:p,ref:S};var A=a(p,1),X=A[0];if(!(X instanceof Object))return{args:p,ref:S};if(!(g in X))return{args:p,ref:S};S=X[g];var ae=Object.assign({},X);return delete ae[g],{args:[ae],ref:S}}var v=function(){function p(A,X,ae){var o=[],y=Object(t.a)(A,o,ae);return o.length<2?ae:y+X(o)}function S(A){var X=A.cache,ae=function(){for(var j=arguments.length,R=new Array(j),M=0;M<j;M++)R[M]=arguments[M];var de=f(R),_e=de.ref,se=de.args,pe=Object(n.a)(se,X.registered);return Object(t.b)(X,pe,!1),X.key+"-"+pe.name+(_e===void 0?"":" "+_e)},o=function(){for(var j=arguments.length,R=new Array(j),M=0;M<j;M++)R[M]=arguments[M];var de=f(R),_e=de.ref,se=de.args,pe=Object(n.a)(se,X.registered);return Object(t.b)(X,pe,!1),""+X.key+pe.name+(_e===void 0?"":" "+_e)},y=function(){for(var j=arguments.length,R=new Array(j),M=0;M<j;M++)R[M]=arguments[M];return p(X.registered,ae,Object(r.a)(R))};return{css:ae,cx:y,cssRn:o}}return{cssFactory:S}}(),T=v.cssFactory;function k(){var p=O();return B(function(){return T({cache:p})},[p])}},"./packages/travelmakers-design-utils/src/getDate/getDate.tsx":function(ce,h,e){"use strict";e.d(h,"e",function(){return U}),e.d(h,"a",function(){return r}),e.d(h,"d",function(){return n}),e.d(h,"b",function(){return t}),e.d(h,"c",function(){return ie});var H=e("./node_modules/core-js/modules/es.date.to-string.js"),re=e.n(H),x=e("./node_modules/dayjs/dayjs.min.js"),N=e.n(x),L=e("./node_modules/dayjs/plugin/timezone.js"),$=e.n(L),w=e("./node_modules/dayjs/plugin/utc.js"),J=e.n(w);N.a.extend(J.a),N.a.extend($.a);function Y(z){return z<10?"0"+z:z}function ee(){return N.a}function Z(z){var te=z?new Date(z):new Date,q=te.getTime()+te.getTimezoneOffset()*60*1e3,le=9*60*60*1e3,me=new Date(q+le);return me}function U(z){if(!z){var te=N()().tz("Asia/Seoul");return te}var q=N()(z+"+0900").tz("Asia/Seoul");if(!q.isValid()){var le=N()(""+z).tz("Asia/Seoul");return le}return q}function r(z,te){var q=U(z),le=te!=null?te:"/";return q.year()+le+(q.month()+1)+le+q.date()}function n(z,te){var q=U(z),le=te!=null?te:"/";return q.year()+le+(q.month()+1)+le+q.date()+" "+q.hour()+":"+Y(q.minute())}function t(z,te){var q=U(z),le=te!=null?te:":";return Y(q.hour())+le+Y(q.minute())}function ie(z){var te=U(z),q=te.day(),le=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];return le[q]+"\uC694\uC77C"}},"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return ee});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(H),x=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),N=e("./node_modules/react/index.js"),L=e.n(N),$=e("./node_modules/react/jsx-runtime.js"),w=e.n($),J=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Y={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}},J=`import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

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
`,Y={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:47},startBody:{col:23,line:35},endBody:{col:1,line:47}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/utils/getDate",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}};var ee=function(U){return Object($.jsxs)("div",{children:["getDate: ",Object(x.a)("2022-12-22T01:37:27.391Z"),Object($.jsx)("br",{}),"getDateTime: ",Object(x.b)("2022-12-22T01:37:27.391Z"),Object($.jsx)("br",{}),"getFullDate: ",Object(x.d)("2022-12-22T01:37:27.391Z"),Object($.jsx)("br",{}),"getDay: ",Object(x.c)("2022-12-22T01:37:27.391Z")]})};ee.displayName="Default",ee.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},ee.parameters)},"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Y});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js");function x(ee){switch(ee){case"checkout_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_purchase_before":case"reservation_purchase_done":case"checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"day_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"extend_purchase_before":case"extend_purchase_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"extend_checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"reservation_change_process":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_cancel":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!0,callable:!0},reservationChangeButton:{visible:!1,callable:!1}};case"tour_confirm_before":case"tour_confirm":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"tour_cancel":case"tour_done":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};default:return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!0},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}}}}var N=x,L=e("./node_modules/react/jsx-runtime.js"),$=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},$=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:13},startBody:{col:23,line:11},endBody:{col:1,line:13}}},J=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design-v2/utils/getReservationsCallable",argTypes:{state:{}}},Y=function(Z){return Object(L.jsx)("div",{children:JSON.stringify(x("tour_cancel"))})};Y.displayName="Default",Y.parameters=Object.assign({storySource:{source:`(props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
}`}},Y.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),x=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),N=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function L(U){switch(U){case"default":case"tour_cancel":case"reservation_cancel":return{enum:U,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(){return"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?"},buttonText:function(){return"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_confirm_before":return{enum:U,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return n},buttonText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"tour_confirm":return{enum:U,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(N.a)(Object(x.e)(n))+" \uD22C\uC5B4\uAC00 \uD655\uC815\uB410\uC5B4\uC694"},buttonText:function(){return"\uC57D\uC18D\uC2DC\uAC04\uC5D0 \uAF2D \uBC29\uBB38\uD574\uC8FC\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_done":return{enum:U,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(){return"\uD22C\uC5B4\uB294 \uC5B4\uB5A0\uC168\uB098\uC694?"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"reservation_purchase_before":return{enum:U,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uC544\uC9C1 \uC785\uAE08\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"reservation_purchase_done":return{enum:U,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(n){return Object(N.a)(Object(x.e)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkin_before":return{enum:U,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(N.b)(Object(x.e)(n))+" \uCCB4\uD06C\uC778 \uC608\uC815\uC774\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{enum:U,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return"\uCCB4\uD06C\uC544\uC6C3\uC740 "+Object(N.b)(Object(x.e)(n))+"\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"checkout_before":return{enum:U,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uC5F0\uC7A5\uD558\uC2DC\uACA0\uC5B4\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_before_n":return{enum:U,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(n){return Object(N.b)(Object(x.e)(n))+" \uCCB4\uD06C\uC544\uC6C3 \uC785\uB2C8\uB2E4"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_done":return{enum:U,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC740 \uC5B4\uB5A0\uC168\uB098\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"}}}function $(U,r){switch(U){case"default":case"tour_cancel":case"reservation_cancel":return{first:r.first.userName,second:null,buttonText:null};case"tour_confirm_before":return{first:r.first.userName,second:r.second.hotelName,buttonText:null};case"tour_confirm":return{first:r.first.userName,second:r.second.startDate,buttonText:null};case"tour_done":return{first:r.first.userName,second:null,buttonText:null};case"reservation_purchase_before":return{first:r.first.userName,second:r.second.hotelName,buttonText:null};case"reservation_purchase_done":return{first:r.first.userName,second:r.second.hotelName,buttonText:r.buttonText.expectedDate};case"checkin_before":return{first:r.first.userName,second:r.second.startDate,buttonText:null};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{first:r.first.userName,second:r.second.endDate,buttonText:null};case"checkout_before":return{first:r.first.hotelName,second:""+r.second.dDay,buttonText:null};case"checkout_before_n":return{first:r.first.hotelName,second:""+r.second.dDay,buttonText:r.buttonText.endDate};case"checkout_done":return{first:r.first.userName,second:r.second.hotelName,buttonText:null};default:return{first:null,second:null,buttonText:null}}}var w=e("./node_modules/react/jsx-runtime.js"),J=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Y={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}},J=`import React from "react";

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
`,Y={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:58},startBody:{col:23,line:35},endBody:{col:1,line:58}}},ee=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/utils/getTimeLineFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},Z=function(r){return Object(w.jsxs)("div",{children:["firstLineText: ",L("default").firstLineText("\uD64D\uAE38\uB3D9"),Object(w.jsx)("br",{}),"secondLineText(default): ",L("default").secondLineText(),Object(w.jsx)("br",{}),"secondLineText(tour_confirm_before):",L("reservation_purchase_before").secondLineText("\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"),Object(w.jsx)("br",{}),"secondLineText(tour_confirm):",L("tour_confirm").secondLineText("2022-09-28T01:26:38.000000Z"),Object(w.jsx)("br",{}),"buttonText: ",L("default").buttonText(),Object(w.jsx)("br",{}),"---- ",Object(w.jsx)("br",{}),"getTimeLineFunc(`state`)"]})};Z.displayName="Default",Z.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},Z.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return U});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),x=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),N=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),L=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function $(r){switch(r){case"tour_confirm_before":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:r,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ie=Object(N.a)(t);return ie&&ie==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ie+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:r,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ie=Object(N.a)(t);return ie&&ie==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ie+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:r,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:r,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:r,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:r,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:r,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:r,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(L.a)(Object(x.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:r,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:r,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:r,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:r,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(L.a)(Object(x.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:r,firstLineText:function(){return""},secondLineText:function(){return""},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}}}}function w(r,n){switch(r){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName};case"checkout_done":return{first:null,second:null,third:n.third.hotelName};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName};default:return{first:null,second:null,third:n.third.hotelName}}}var J=e("./node_modules/react/jsx-runtime.js"),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,ee={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}},Y=`import React from "react";
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
`,ee={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}},Z=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},U=function(n){return Object(J.jsx)("div",{children:$("reservation_purchase_before").secondLineText("2022-12-24T02:24:01.616Z")})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":function(ce,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return U});var H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),x=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts"),N=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),L=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function $(r){switch(r){case"tour_confirm_before":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:r,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ie=Object(N.a)(t);return ie&&ie==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ie+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:r,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ie=Object(N.a)(t);return ie&&ie==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ie+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:r,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:r,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:r,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:r,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:r,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:r,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:r,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:r,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:r,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:r,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:r,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},secondLineText:function(t){return Object(x.a)(Object(L.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:r,firstLineText:function(){return""},secondLineText:function(){return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}}}}function w(r,n){switch(r){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"checkout_done":return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};default:return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType}}}var J=e("./node_modules/react/jsx-runtime.js"),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,ee={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}},Y=`import React from "react";

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
`,ee={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:43},startBody:{col:23,line:35},endBody:{col:1,line:43}}},Z=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},U=function(n){return Object(J.jsx)("div",{children:$("reservation_purchase_before").secondLineText("2023-02-08T23:24:01.616Z")})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-utils/src/utils/getCountDown.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return n});var H=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n(H),x=e("./node_modules/core-js/modules/es.regexp.to-string.js"),N=e.n(x),L=e("./node_modules/core-js/modules/es.date.to-string.js"),$=e.n(L),w=e("./node_modules/core-js/modules/es.string.pad-start.js"),J=e.n(w),Y=e("./node_modules/core-js/modules/es.string.replace.js"),ee=e.n(Y),Z=e("./node_modules/core-js/modules/es.regexp.exec.js"),U=e.n(Z),r=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function n(t){var ie="HH\uC2DC\uAC04 mm\uBD84",z=Object(r.e)(t),te=1e3,q=te*60,le=q*60,me=le*24,I=function(){var ue=z.toDate().getTime()-Object(r.e)().toDate().getTime(),B={days:"0",hours:"0",minutes:"0",seconds:"0"};return ue>0&&(B={days:Math.floor(ue/me).toString(),hours:Math.floor(ue/le%24).toString(),minutes:Math.floor(ue/te/60%60).toString().padStart(2,"0"),seconds:Math.floor(ue/te%60).toString().padStart(2,"0")}),!z||!B?"":ie.replace("D",B.days).replace("HH",B.hours).replace("mm",B.minutes).replace("ss",B.seconds)};return I()}},"./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts":function(ce,h,e){"use strict";e.d(h,"a",function(){return re}),e.d(h,"b",function(){return x});function H(N){return N<10?"0"+N:N}function re(N,L){var $=N;return L?$.month()+1+"\uC6D4 "+$.date()+"\uC77C "+$.hour()+":"+H($.minute()):$.month()+1+"\uC6D4 "+$.date()+"\uC77C "}function x(N){var L=N;return L.month()+1+"\uC6D4 "+L.date()+"\uC77C "+L.hour()+"\uC2DC"}},"./storybook-init-framework-entry.js":function(ce,h,e){"use strict";e.r(h);var H=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(ce,h,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),ce.exports=e("./generated-stories-entry.js")},1:function(ce,h){}},[[0,4,5]]]);
