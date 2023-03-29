(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(de,h,e){"use strict";e.r(h);var $={};e.r($),e.d($,"parameters",function(){return i}),e.d($,"decorators",function(){return j});var re=e("./node_modules/core-js/modules/es.object.keys.js"),O=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.array.filter.js"),D=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),w=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),Z=e("./node_modules/core-js/modules/es.object.define-properties.js"),ee=e("./node_modules/core-js/modules/es.object.define-property.js"),U=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),K=e("./node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ue=e("./node_modules/core-js/modules/es.string.iterator.js"),A=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),q=e("./node_modules/core-js/modules/es.function.name.js"),ae=e("./node_modules/core-js/modules/es.array.from.js"),le=e("./node_modules/react/index.js"),B=e("./node_modules/react/jsx-runtime.js");function me(y,x){return Y(y)||S(y,x)||ce(y,x)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(y,x){if(y){if(typeof y=="string")return ie(y,x);var _=Object.prototype.toString.call(y).slice(8,-1);if(_==="Object"&&y.constructor&&(_=y.constructor.name),_==="Map"||_==="Set")return Array.from(y);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return ie(y,x)}}function ie(y,x){(x==null||x>y.length)&&(x=y.length);for(var _=0,s=new Array(x);_<x;_++)s[_]=y[_];return s}function S(y,x){var _=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(_!=null){var s,g,C,V,ne=[],r=!0,b=!1;try{if(C=(_=_.call(y)).next,x===0){if(Object(_)!==_)return;r=!1}else for(;!(r=(s=C.call(_)).done)&&(ne.push(s.value),ne.length!==x);r=!0);}catch(m){b=!0,g=m}finally{try{if(!r&&_.return!=null&&(V=_.return(),Object(V)!==V))return}finally{if(b)throw g}}return ne}}function Y(y){if(Array.isArray(y))return y}var F=Object(le.createContext)(null),te=function(){var x=Object(le.useContext)(F);if(!x)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return x},k=function(x){var _=x.colorScheme,s=x.toggleColorScheme,g=x.children,C=Object(le.useState)("init"),V=me(C,2),ne=V[0],r=V[1];return Object(le.useEffect)(function(){r("update")},[]),Object(B.jsx)(F.Provider,{value:{colorScheme:_,toggleColorScheme:s},children:g},ne)};k.displayName="ColorSchemeProvider",k.displayName="@travelmakers-design-v2/styles/ColorSchemeProvider";var v=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),a=e("./node_modules/@storybook/theming/dist/esm/index.js"),d=e("./node_modules/storybook-dark-mode/dist/index.js"),i={layout:"fullscreen",docs:{theme:a.themes.light},darkMode:{current:"dark"}};function E(y){var x=Object(d.useDarkMode)()?"dark":"light";return Object(B.jsx)(k,{colorScheme:x,toggleColorScheme:function(){},children:Object(B.jsx)(v.a,{theme:{colorScheme:x},withGlobalStyles:!0,withNormalizeCSS:!0,children:y.children})})}E.displayName="ThemeWrapper";var j=[function(y){return Object(B.jsx)(E,{children:y()})}];function c(y,x){var _=Object.keys(y);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(y);x&&(s=s.filter(function(g){return Object.getOwnPropertyDescriptor(y,g).enumerable})),_.push.apply(_,s)}return _}function T(y){for(var x=1;x<arguments.length;x++){var _=arguments[x]!=null?arguments[x]:{};x%2?c(Object(_),!0).forEach(function(s){p(y,s,_[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(_)):c(Object(_)).forEach(function(s){Object.defineProperty(y,s,Object.getOwnPropertyDescriptor(_,s))})}return y}function p(y,x,_){return x in y?Object.defineProperty(y,x,{value:_,enumerable:!0,configurable:!0,writable:!0}):y[x]=_,y}Object.keys($).forEach(function(y){var x=$[y];switch(y){case"args":return Object(U.d)(x);case"argTypes":return Object(U.b)(x);case"decorators":return x.forEach(function(s){return Object(U.f)(s,!1)});case"loaders":return x.forEach(function(s){return Object(U.g)(s,!1)});case"parameters":return Object(U.h)(T({},x),!1);case"argTypesEnhancers":return x.forEach(function(s){return Object(U.c)(s)});case"argsEnhancers":return x.forEach(function(s){return Object(U.e)(s)});case"render":return Object(U.i)(x);case"globals":case"globalTypes":{var _={};return _[y]=x,Object(U.h)(_,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(y+" was not supported :( !")}})},"./generated-stories-entry.js":function(de,h,e){"use strict";(function($){var re=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,re.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],$,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(de))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(de,h,e){var $={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx","./travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx","./travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx"};function re(M){var D=O(M);return e(D)}function O(M){if(!e.o($,M)){var D=new Error("Cannot find module '"+M+"'");throw D.code="MODULE_NOT_FOUND",D}return $[M]}re.keys=function(){return Object.keys($)},re.resolve=O,de.exports=re,re.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Small",function(){return V}),e.d(h,"Medium",function(){return ne});var $=e("./node_modules/core-js/modules/es.array.map.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/core-js/modules/es.object.keys.js"),M=e("./node_modules/core-js/modules/es.array.index-of.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),Z={small:"40px",medium:"56px"},ee=function(b,m){switch(m){case"small":return{padding:b.spacing.spacing10+" "+b.spacing.spacing30};case"medium":return{padding:""+b.spacing.spacing30};default:return}},U=function(b,m){switch(m){case"small":return b.typography.subhead2;case"medium":return b.typography.subhead1;default:return}},K=Object(Q.a)(function(r,b){var m,L=b.type,P=b.gap,I=b.isCollapse,oe=I===void 0?!0:I;return{root:{margin:0},item:(m={maxHeight:""+(oe?Z[L]:"auto"),marginBottom:P+"px",color:""+r.colors.primary1,borderRadius:r.radius.radius20,backgroundColor:"#fff",overflow:"hidden"},m["&:last-child"]={marginBottom:0},m),header:Object.assign({display:"flex",alignItems:"center",justifyContent:"space-between",height:Z[L]},ee(r,L),U(r,L),{fontWeight:700,cursor:"pointer"}),icon:{transform:oe?"rotate(180deg)":"rotate(0)"},detail:{margin:0},divider:{height:"1px",margin:"0 "+r.spacing.spacing30,backgroundColor:r.colors.outline},content:Object.assign({margin:0},ee(r,L),U(r,"small"))}}),l=e("./node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/core-js/modules/es.object.to-string.js"),ue=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),q=e("./node_modules/core-js/modules/es.array.slice.js"),ae=e("./node_modules/core-js/modules/es.function.name.js"),le=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/react/jsx-runtime.js"),me=["size"];function z(r,b){if(r==null)return{};var m=ce(r,b),L,P;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(r);for(P=0;P<I.length;P++)L=I[P],!(b.indexOf(L)>=0)&&Object.prototype.propertyIsEnumerable.call(r,L)&&(m[L]=r[L])}return m}function ce(r,b){if(r==null)return{};var m={},L=Object.keys(r),P,I;for(I=0;I<L.length;I++)P=L[I],!(b.indexOf(P)>=0)&&(m[P]=r[P]);return m}var ie=function(b){var m=b.size,L=z(b,me);return Object(B.jsxs)("svg",Object.assign({width:m,height:m,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L,{children:[Object(B.jsx)("g",{"clip-path":"url(#clip0_3368_7885)",children:Object(B.jsx)("path",{d:"M13.6569 4.84314L8.00001 10.5L2.34315 4.84314",stroke:"#30373F"})}),Object(B.jsx)("defs",{children:Object(B.jsx)("clipPath",{id:"clip0_3368_7885",children:Object(B.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}))};ie.displayName="IconAngle";var S=["idx","header","content","handleHeader"];function Y(r,b){return a(r)||v(r,b)||te(r,b)||F()}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(r,b){if(r){if(typeof r=="string")return k(r,b);var m=Object.prototype.toString.call(r).slice(8,-1);if(m==="Object"&&r.constructor&&(m=r.constructor.name),m==="Map"||m==="Set")return Array.from(r);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return k(r,b)}}function k(r,b){(b==null||b>r.length)&&(b=r.length);for(var m=0,L=new Array(b);m<b;m++)L[m]=r[m];return L}function v(r,b){var m=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(m!=null){var L,P,I,oe,_e=[],se=!0,fe=!1;try{if(I=(m=m.call(r)).next,b===0){if(Object(m)!==m)return;se=!1}else for(;!(se=(L=I.call(m)).done)&&(_e.push(L.value),_e.length!==b);se=!0);}catch(ge){fe=!0,P=ge}finally{try{if(!se&&m.return!=null&&(oe=m.return(),Object(oe)!==oe))return}finally{if(fe)throw P}}return _e}}function a(r){if(Array.isArray(r))return r}function d(r,b){if(r==null)return{};var m=i(r,b),L,P;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(r);for(P=0;P<I.length;P++)L=I[P],!(b.indexOf(L)>=0)&&Object.prototype.propertyIsEnumerable.call(r,L)&&(m[L]=r[L])}return m}function i(r,b){if(r==null)return{};var m={},L=Object.keys(r),P,I;for(I=0;I<L.length;I++)P=L[I],!(b.indexOf(P)>=0)&&(m[P]=r[P]);return m}var E={small:16,medium:24},j=function(b){var m=b.idx,L=b.header,P=b.content,I=b.handleHeader,oe=d(b,S),_e=Object(X.useState)(!0),se=Y(_e,2),fe=se[0],ge=se[1],be=Object(X.useContext)(y),he=be.type,Oe=be.gap,je=K({type:he,gap:Oe,isCollapse:fe}),Te=je.classes,Ce=function(){ge(function(xe){return!xe}),I&&I()};return Object(B.jsxs)(w.a,Object.assign({className:Te.item},oe,{children:[Object(B.jsxs)("dt",{className:Te.header,onClick:Ce,children:[L,Object(B.jsx)(ie,{size:E[he],className:Te.icon})]}),Object(B.jsxs)("dd",{className:Te.detail,children:[Object(B.jsx)("div",{className:Te.divider}),Object(B.jsx)("p",{className:Te.content,children:P})]})]}),m)};j.displayName="AccordionItem",j.displayName="AccordionItem";var c=["gap","type","className","children"];function T(r,b){if(r==null)return{};var m=p(r,b),L,P;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(r);for(P=0;P<I.length;P++)L=I[P],!(b.indexOf(L)>=0)&&Object.prototype.propertyIsEnumerable.call(r,L)&&(m[L]=r[L])}return m}function p(r,b){if(r==null)return{};var m={},L=Object.keys(r),P,I;for(I=0;I<L.length;I++)P=L[I],!(b.indexOf(P)>=0)&&(m[P]=r[P]);return m}var y=Object(X.createContext)({type:"small",gap:4});y.displayName="AccordionContext";var x=Object(X.forwardRef)(function(r,b){var m=r.gap,L=m===void 0?4:m,P=r.type,I=P===void 0?"small":P,oe=r.className,_e=r.children,se=T(r,c),fe=K({}),ge=fe.classes,be=fe.cx;return Object(B.jsx)(y.Provider,{value:{type:I,gap:L},children:Object(B.jsx)(w.a,Object.assign({component:"dl",ref:b,className:be(ge.root,oe)},se,{children:_e}))})});x.Item=j,x.displayName="Accordion";var _=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Accordion } from \\"../Accordion\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\"],\\n        default: \\"small\\",\\n      },\\n      description: \\"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: {\\n      description: \\"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.\\",\\n      type: \\"number\\",\\n      defaultValue: 4,\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nconst accordionData = [\\n  {\\n    id: 1,\\n    answer:\\n      \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n  {\\n    id: 2,\\n    answer:\\n      \\"\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n];\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n\\nexport const Medium = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":49},"endLoc":{"col":1,"line":63},"startBody":{"col":21,"line":49},"endBody":{"col":1,"line":63}},"Medium":{"startLoc":{"col":22,"line":65},"endLoc":{"col":1,"line":79},"startBody":{"col":22,"line":65},"endBody":{"col":1,"line":79}}};
    
import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["small", "medium"],
        default: "small",
      },
      description: "Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,s={Small:{startLoc:{col:21,line:57},endLoc:{col:1,line:71},startBody:{col:21,line:57},endBody:{col:1,line:71}},Medium:{startLoc:{col:22,line:73},endLoc:{col:1,line:87},startBody:{col:22,line:73},endBody:{col:1,line:87}}},_=`import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["small", "medium"],
        default: "small",
      },
      description: "Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
`,s={Small:{startLoc:{col:21,line:49},endLoc:{col:1,line:63},startBody:{col:21,line:49},endBody:{col:1,line:63}},Medium:{startLoc:{col:22,line:65},endLoc:{col:1,line:79},startBody:{col:22,line:65},endBody:{col:1,line:79}}},g=h.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Accordion } from \\"../Accordion\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\"],\\n        default: \\"small\\",\\n      },\\n      description: \\"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: {\\n      description: \\"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.\\",\\n      type: \\"number\\",\\n      defaultValue: 4,\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nconst accordionData = [\\n  {\\n    id: 1,\\n    answer:\\n      \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n  {\\n    id: 2,\\n    answer:\\n      \\"\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n];\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n\\nexport const Medium = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":49},"endLoc":{"col":1,"line":63},"startBody":{"col":21,"line":49},"endBody":{"col":1,"line":63}},"Medium":{"startLoc":{"col":22,"line":65},"endLoc":{"col":1,"line":79},"startBody":{"col":22,"line":65},"endBody":{"col":1,"line":79}}};
    
import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["small", "medium"],
        default: "small",
      },
      description: "Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            idx={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,locationsMap:{small:{startLoc:{col:21,line:57},endLoc:{col:1,line:71},startBody:{col:21,line:57},endBody:{col:1,line:71}},medium:{startLoc:{col:22,line:73},endLoc:{col:1,line:87},startBody:{col:22,line:73},endBody:{col:1,line:87}}}}},title:"@travelmakers-design-v2/core/General/Accordion",component:x,argTypes:{type:{control:{type:"radio",options:["small","medium"],default:"small"},description:"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},gap:{description:"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.",type:"number",defaultValue:4,table:{type:{summary:"number"}}}}},C=[{id:1,answer:`\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.
\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?"},{id:2,answer:`\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.
\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"}],V=function(b){return Object(B.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(B.jsx)(x,Object.assign({},b,{children:C.map(function(m){return Object(B.jsx)(x.Item,{idx:m.id,header:m.question,content:m.answer})})}))})};V.displayName="Small";var ne=function(b){return Object(B.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(B.jsx)(x,Object.assign({type:"medium"},b,{children:C.map(function(m){return Object(B.jsx)(x.Item,{idx:m.id,header:m.question,content:m.answer})})}))})};ne.displayName="Medium",V.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},V.parameters),ne.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},ne.parameters)},"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Small",function(){return x});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=e("./node_modules/react/index.js"),M=e("./node_modules/core-js/modules/es.object.keys.js"),D=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),l=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),n=e("./node_modules/core-js/modules/es.array.slice.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),ue=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),q=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function ae(_){if(_==null)throw new TypeError("Cannot destructure "+_)}var le=Object(q.a)(function(_,s,g){var C;return ae(s),{root:{backgroundColor:_.colors.neutral99,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:_.spacing.spacing10+"px "+_.spacing.spacing50+"px",gap:"80px",height:"64px",width:"100%",a:{textDecoration:"none"}},item:(C={display:"flex",flexDirection:"column",alignItems:"center",height:"48px"},C["& > svg"]={width:"32px",height:"32px"},C)}}),B=e("./node_modules/react/jsx-runtime.js"),me=function(s){var g;return Object(B.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{children:Object(B.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77041 12.1824C6.42649 12.4149 6.22223 12.7914 6.22223 13.1928V23.9181C6.22223 24.9452 7.09776 25.7778 8.17779 25.7778H12.8148C13.6739 25.7778 14.3704 25.0813 14.3704 24.2222V22.5185C14.3704 21.6185 15.1 20.8889 16 20.8889C16.9 20.8889 17.6296 21.6185 17.6296 22.5185V24.2222C17.6296 25.0813 18.3261 25.7778 19.1852 25.7778H23.8222C24.9023 25.7778 25.7778 24.9452 25.7778 23.9181V13.1928C25.7778 12.7914 25.5735 12.4149 25.2296 12.1824L16.7555 6.45165C16.3032 6.14576 15.6968 6.14575 15.2445 6.45165L6.77041 12.1824Z",fill:(g=s.color)!==null&&g!==void 0?g:"#BABABA"})}))};me.displayName="IconHome";var z=function(s){var g;return Object(B.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{children:Object(B.jsx)("path",{d:"M20.1893 20.2214L24.8889 24.8889M22.4985 14.7588C22.4985 18.9825 19.0539 22.4064 14.8048 22.4064C10.5557 22.4064 7.11111 18.9825 7.11111 14.7588C7.11111 10.5351 10.5557 7.11111 14.8048 7.11111C19.0539 7.11111 22.4985 10.5351 22.4985 14.7588Z",stroke:(g=s.color)!==null&&g!==void 0?g:"#BABABA","stroke-width":"2","stroke-linecap":"round"})}))};z.displayName="IconSearch";var ce=function(s){var g,C;return Object(B.jsxs)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{children:[Object(B.jsx)("path",{d:"M7.11112 24.6155C7.11112 24.5764 7.11112 24.5375 7.11112 24.4987C7.11111 23.2776 7.17233 22.0401 7.60385 20.8978C8.7515 17.86 11.4435 15.1111 16 15.1111C20.5565 15.1111 23.2484 17.8599 24.3961 20.8977C24.8277 22.04 24.8889 23.2777 24.8889 24.4988C24.8889 24.5376 24.8889 24.5765 24.8889 24.6155C24.8889 25.2574 24.4519 25.7778 23.9129 25.7778H8.08715C7.5481 25.7778 7.11112 25.2574 7.11112 24.6155Z",fill:(g=s.color)!==null&&g!==void 0?g:"#BABABA"}),Object(B.jsx)("circle",{cx:"16",cy:"9.77778",r:"3.55556",fill:(C=s.color)!==null&&C!==void 0?C:"#BABABA"})]}))};ce.displayName="IconMypage";var ie=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),S=e("./node_modules/next/link.js"),Y=e.n(S),F=["onClick","initSelectedId","children","component","className","overrideStyles","links"];function te(_,s){return i(_)||d(_,s)||v(_,s)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(_,s){if(_){if(typeof _=="string")return a(_,s);var g=Object.prototype.toString.call(_).slice(8,-1);if(g==="Object"&&_.constructor&&(g=_.constructor.name),g==="Map"||g==="Set")return Array.from(_);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return a(_,s)}}function a(_,s){(s==null||s>_.length)&&(s=_.length);for(var g=0,C=new Array(s);g<s;g++)C[g]=_[g];return C}function d(_,s){var g=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(g!=null){var C,V,ne,r,b=[],m=!0,L=!1;try{if(ne=(g=g.call(_)).next,s===0){if(Object(g)!==g)return;m=!1}else for(;!(m=(C=ne.call(g)).done)&&(b.push(C.value),b.length!==s);m=!0);}catch(P){L=!0,V=P}finally{try{if(!m&&g.return!=null&&(r=g.return(),Object(r)!==r))return}finally{if(L)throw V}}return b}}function i(_){if(Array.isArray(_))return _}function E(_,s){if(_==null)return{};var g=j(_,s),C,V;if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(_);for(V=0;V<ne.length;V++)C=ne[V],!(s.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(_,C)&&(g[C]=_[C])}return g}function j(_,s){if(_==null)return{};var g={},C=Object.keys(_),V,ne;for(ne=0;ne<C.length;ne++)V=C[ne],!(s.indexOf(V)>=0)&&(g[V]=_[V]);return g}var c=Object(O.forwardRef)(function(_,s){var g=_.onClick,C=_.initSelectedId,V=C===void 0?0:C,ne=_.children,r=_.component,b=_.className,m=_.overrideStyles,L=_.links,P=L===void 0?[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}]:L,I=E(_,F),oe=Object(N.c)(),_e=Object(O.useState)(V),se=te(_e,2),fe=se[0],ge=se[1],be=Object(O.useState)(oe.colors.neutral70),he=te(be,2),Oe=he[0],je=he[1],Te=Object(O.useState)(oe.colors.neutral70),Ce=te(Te,2),Le=Ce[0],xe=Ce[1],Ie=Object(O.useState)(oe.colors.neutral70),Se=te(Ie,2),Ae=Se[0],Re=Se[1],Fe=[Oe,Le,Ae],Me=[je,xe,Re],Be=le({},{overrideStyles:m,name:"BottomBar"}),Ee=Be.classes,W=Be.cx,u=[{icon:Object(B.jsx)(me,{color:fe===0?oe.colors.secondary:Oe})},{icon:Object(B.jsx)(z,{color:fe===1?oe.colors.secondary:Le})},{icon:Object(B.jsx)(ce,{color:fe===2?oe.colors.secondary:Ae})}],o=function(R,H){H!==fe&&Me[H](R)};return Object(B.jsx)(J.a,Object.assign({component:r||"div",ref:s,className:W(Ee.root,b)},I,{children:u==null?void 0:u.map(function(f,R){return Object(B.jsxs)(Y.a,{onClick:function(){ge(R),g==null||g(R)},href:P[R].url,className:W(Ee.item),onMouseOver:function(){return o(oe.colors.primary,R)},onMouseLeave:function(){return o(oe.colors.neutral70,R)},onMouseDown:function(){return o(oe.colors.primaryInteract,R)},onMouseUp:function(){return o(oe.colors.neutral70,R)},children:[f.icon,Object(B.jsx)(ie.a,{level:"caption",color:fe===R?oe.colors.secondary:Fe[R],children:P[R].name})]})})}))});c.displayName="BottomBar";var T=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { BottomBar } from \\"../BottomBar\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/BottomBar\\",\\n  component: BottomBar,\\n  argTypes: {\\n    initSelectedId: {\\n      defaultValue: 0,\\n      description: \\"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    links: {\\n      defaultValue: [\\n        { name: \\"\uB458\uB7EC\uBCF4\uAE30\\", url: \\"/\\" },\\n        { name: \\"\uD0D0\uC0C9\\", url: \\"/\\" },\\n        { name: \\"\uB9C8\uC774\uD398\uC774\uC9C0\\", url: \\"/\\" },\\n      ],\\n      description: \\"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":62},"endLoc":{"col":1,"line":68},"startBody":{"col":21,"line":62},"endBody":{"col":1,"line":68}}};
    
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
import { BottomBar } from "../BottomBar";

export default {
  title: "@travelmakers-design-v2/core/General/BottomBar",
  component: BottomBar,
  argTypes: {
    initSelectedId: {
      defaultValue: 0,
      description: "BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.",

      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    links: {
      defaultValue: [
        { name: "\uB458\uB7EC\uBCF4\uAE30", url: "/" },
        { name: "\uD0D0\uC0C9", url: "/" },
        { name: "\uB9C8\uC774\uD398\uC774\uC9C0", url: "/" },
      ],
      description: "BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",

      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
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

export const Small = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
};



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n}" }, ...Small.parameters };`,p={Small:{startLoc:{col:21,line:70},endLoc:{col:1,line:76},startBody:{col:21,line:70},endBody:{col:1,line:76}}},T=`import {
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
import { BottomBar } from "../BottomBar";

export default {
  title: "@travelmakers-design-v2/core/General/BottomBar",
  component: BottomBar,
  argTypes: {
    initSelectedId: {
      defaultValue: 0,
      description: "BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.",

      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    links: {
      defaultValue: [
        { name: "\uB458\uB7EC\uBCF4\uAE30", url: "/" },
        { name: "\uD0D0\uC0C9", url: "/" },
        { name: "\uB9C8\uC774\uD398\uC774\uC9C0", url: "/" },
      ],
      description: "BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",

      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
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

export const Small = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
};
`,p={Small:{startLoc:{col:21,line:62},endLoc:{col:1,line:68},startBody:{col:21,line:62},endBody:{col:1,line:68}}},y=h.default={title:"@travelmakers-design-v2/core/General/BottomBar",component:c,argTypes:{initSelectedId:{defaultValue:0,description:"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},links:{defaultValue:[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}],description:"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { BottomBar } from \\"../BottomBar\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/BottomBar\\",\\n  component: BottomBar,\\n  argTypes: {\\n    initSelectedId: {\\n      defaultValue: 0,\\n      description: \\"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    links: {\\n      defaultValue: [\\n        { name: \\"\uB458\uB7EC\uBCF4\uAE30\\", url: \\"/\\" },\\n        { name: \\"\uD0D0\uC0C9\\", url: \\"/\\" },\\n        { name: \\"\uB9C8\uC774\uD398\uC774\uC9C0\\", url: \\"/\\" },\\n      ],\\n      description: \\"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":62},"endLoc":{"col":1,"line":68},"startBody":{"col":21,"line":62},"endBody":{"col":1,"line":68}}};
    
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
import { BottomBar } from "../BottomBar";

export default {
  title: "@travelmakers-design-v2/core/General/BottomBar",
  component: BottomBar,
  argTypes: {
    initSelectedId: {
      defaultValue: 0,
      description: "BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.",

      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    links: {
      defaultValue: [
        { name: "\uB458\uB7EC\uBCF4\uAE30", url: "/" },
        { name: "\uD0D0\uC0C9", url: "/" },
        { name: "\uB9C8\uC774\uD398\uC774\uC9C0", url: "/" },
      ],
      description: "BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",

      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
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

export const Small = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
};



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n}" }, ...Small.parameters };`,locationsMap:{small:{startLoc:{col:21,line:70},endLoc:{col:1,line:76},startBody:{col:21,line:70},endBody:{col:1,line:76}}}},docs:{page:function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(re.g,{}),Object(B.jsx)(re.f,{}),Object(B.jsx)(re.b,{}),Object(B.jsx)(re.d,{}),Object(B.jsx)(re.a,{story:re.c}),Object(B.jsx)(re.e,{})]})}}}},x=function(s){return Object(B.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(B.jsx)(c,Object.assign({},s))})};x.displayName="Small",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(de,h,e){"use strict";e.d(h,"a",function(){return ue});var $=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),O=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.string.italics.js"),D=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),w=e("./node_modules/react/index.js"),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),ee=function(N){return N!=="Pretendard"?{font:{fontFamily:N+", var("+(N==="Noto Serif KR"&&"--font-noto-serif")+")"}}:{font:{}}},U=Object(Z.a)(function(A,N,J){var q,ae=N.family,le=N.level,B=N.textAlign,me=N.disabled,z=N.strong,ce=N.italic,ie=N.underline,S=N.color,Y=N.mobile,F=N.tablet;return{solid:{fontWeight:z?ae==="Noto Serif KR"?600:700:400,fontStyle:ce?"italic":"normal",textDecoration:ie?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},ee(ae).font,A.typography[le],(q={color:me?A.colors.primary4:S||A.colors.black,textAlign:""+B},q[""+A.media.mobile]=Object.assign({},A.typography[Y]),q[""+A.media.tablet]=Object.assign({},A.typography[F]),q))}}),K=e("./node_modules/react/jsx-runtime.js"),l=["id","children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function n(A,N){if(A==null)return{};var J=t(A,N),q,ae;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(A);for(ae=0;ae<le.length;ae++)q=le[ae],!(N.indexOf(q)>=0)&&Object.prototype.propertyIsEnumerable.call(A,q)&&(J[q]=A[q])}return J}function t(A,N){if(A==null)return{};var J={},q=Object.keys(A),ae,le;for(le=0;le<q.length;le++)ae=q[le],!(N.indexOf(ae)>=0)&&(J[ae]=A[ae]);return J}var ue=Object(w.forwardRef)(function(A,N){var J=A.id,q=A.children,ae=A.component,le=A.family,B=le===void 0?"Pretendard":le,me=A.level,z=me===void 0?"body1":me,ce=A.mobileLevel,ie=A.tabletLevel,S=A.textAlign,Y=S===void 0?"left":S,F=A.disabled,te=F===void 0?!1:F,k=A.strong,v=k===void 0?!1:k,a=A.italic,d=a===void 0?!1:a,i=A.underline,E=i===void 0?!1:i,j=A.color,c=A.className,T=A.co,p=A.overrideStyles,y=n(A,l),x=Object(X.c)(),_=U({family:B,level:z,disabled:te,strong:v,italic:d,underline:E,textAlign:Y,color:j,mobile:ce,tablet:ie},{overrideStyles:p,name:"typography"}),s=_.classes,g=_.cx;return Object(K.jsx)(Q.a,Object.assign({component:ae||"span",ref:N,disabled:te,className:g(s.root,s.solid,c),co:T,onTouchStart:function(){}},y,{children:q}))});ue.displayName="Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n($),O=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),M=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),D=e("./node_modules/react/jsx-runtime.js"),X=e.n(D),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Q={Default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}},w=`import {
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
`,Q={Default:{startLoc:{col:23,line:169},endLoc:{col:1,line:210},startBody:{col:23,line:169},endBody:{col:1,line:210}}};h.default={title:"@travelmakers-design-v2/core/General/Typography",component:M.a,argTypes:{level:{defaultValue:"body1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}}},docs:{page:function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(O.g,{}),Object(D.jsx)(O.f,{}),Object(D.jsx)(O.b,{}),Object(D.jsx)(O.d,{}),Object(D.jsx)(O.a,{story:O.c}),Object(D.jsx)(O.e,{})]})}}}};var Z=function(U){return Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(D.jsx)(M.a,Object.assign({},U,{level:"display1",children:"display1. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"display2",children:"display2. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"display3",children:"display3. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"display4",children:"display4. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"display5",children:"display5. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"display6",children:"display6. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"subhead1",children:"subhead1. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"subhead2",children:"subhead2. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"body1",children:"body1. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"body2",children:"body2. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"body3",children:"body3. Travelmakers Design"})),Object(D.jsx)(M.a,Object.assign({},U,{level:"caption",children:"caption. Travelmakers Design"}))]})};Z.displayName="Default",Z.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},Z.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(de,h,e){"use strict";e.d(h,"a",function(){return me});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n($),O=e("./node_modules/core-js/modules/es.array.map.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.object.assign.js"),X=e.n(D),w=e("./node_modules/core-js/modules/es.object.keys.js"),Q=e.n(w),Z=e("./node_modules/core-js/modules/es.array.index-of.js"),ee=e.n(Z),U=e("./node_modules/core-js/modules/es.symbol.js"),K=e.n(U),l=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),n=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/react/index.js"),ue=e.n(t),A=e("./node_modules/react/jsx-runtime.js"),N=e.n(A),J=["component","className","style","co"];function q(z,ce){if(z==null)return{};var ie=ae(z,ce),S,Y;if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(z);for(Y=0;Y<F.length;Y++)S=F[Y],!(ce.indexOf(S)>=0)&&Object.prototype.propertyIsEnumerable.call(z,S)&&(ie[S]=z[S])}return ie}function ae(z,ce){if(z==null)return{};var ie={},S=Object.keys(z),Y,F;for(F=0;F<S.length;F++)Y=S[F],!(ce.indexOf(Y)>=0)&&(ie[Y]=z[Y]);return ie}function le(z,ce){return typeof z=="function"?z(ce):z}function B(z,ce){var ie=Object(l.a)(),S=ie.css,Y=ie.cx,F=Object(n.c)();return Array.isArray(z)?Y(ce,z.map(function(te){return S(le(te,F))})):Y(ce,S(le(z,F)))}var me=Object(t.forwardRef)(function(z,ce){var ie=z.component,S=z.className,Y=z.style,F=z.co,te=q(z,J),k=ie||"div";return Object(A.jsx)(k,Object.assign({ref:ce,className:B(F,S),style:Y},te))});me.displayName="@travelmakers-design-v2/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Q});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n($),O=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./node_modules/react/jsx-runtime.js"),D=e.n(M),X=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},X=`import { View } from "../View";

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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design-v2/core/General/View",component:O.a};var Q=function(){return Object(M.jsx)(O.a,{co:function(U){return{width:100,height:100,backgroundColor:U.colors.gray3}}})};Q.displayName="Default",Q.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},Q.parameters)},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return D});var $=e("./node_modules/core-js/modules/es.array.concat.js"),re=e.n($),O=e("./node_modules/react/index.js"),M=e.n(O),D=function(w){var Q=Object(O.useRef)(w);return Object(O.useEffect)(function(){Q.current=w},[w]),Object(O.useMemo)(function(){return function(){for(var Z,ee=arguments.length,U=new Array(ee),K=0;K<ee;K++)U[K]=arguments[K];return(Z=Q.current)===null||Z===void 0?void 0:Z.call.apply(Z,[Q].concat(U))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return k});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),O=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),D=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),n=e("./node_modules/core-js/modules/web.timers.js");function t(v,a){return q(v)||J(v,a)||A(v,a)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(v,a){if(v){if(typeof v=="string")return N(v,a);var d=Object.prototype.toString.call(v).slice(8,-1);if(d==="Object"&&v.constructor&&(d=v.constructor.name),d==="Map"||d==="Set")return Array.from(v);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return N(v,a)}}function N(v,a){(a==null||a>v.length)&&(a=v.length);for(var d=0,i=new Array(a);d<a;d++)i[d]=v[d];return i}function J(v,a){var d=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(d!=null){var i,E,j,c,T=[],p=!0,y=!1;try{if(j=(d=d.call(v)).next,a===0){if(Object(d)!==d)return;p=!1}else for(;!(p=(i=j.call(d)).done)&&(T.push(i.value),T.length!==a);p=!0);}catch(x){y=!0,E=x}finally{try{if(!p&&d.return!=null&&(c=d.return(),Object(c)!==c))return}finally{if(y)throw E}}return T}}function q(v){if(Array.isArray(v))return v}var ae=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.timeout,i=d===void 0?2e3:d,E=Object(l.useState)(null),j=t(E,2),c=j[0],T=j[1],p=Object(l.useState)(!1),y=t(p,2),x=y[0],_=y[1],s=Object(l.useState)(null),g=t(s,2),C=g[0],V=g[1],ne=function(L){clearTimeout(C),V(setTimeout(function(){return _(!1)},i)),_(L)},r=function(L){"clipboard"in navigator?navigator.clipboard.writeText(L).then(function(){return ne(!0)}).catch(function(P){return T(P)}):T(new Error("useClipboard: navigator.clipboard is not supported"))},b=function(){_(!1),T(null),clearTimeout(C)};return{copy:r,reset:b,error:c,copied:x}},le=e("./node_modules/react/jsx-runtime.js");function B(v,a){return S(v)||ie(v,a)||z(v,a)||me()}function me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(v,a){if(v){if(typeof v=="string")return ce(v,a);var d=Object.prototype.toString.call(v).slice(8,-1);if(d==="Object"&&v.constructor&&(d=v.constructor.name),d==="Map"||d==="Set")return Array.from(v);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return ce(v,a)}}function ce(v,a){(a==null||a>v.length)&&(a=v.length);for(var d=0,i=new Array(a);d<a;d++)i[d]=v[d];return i}function ie(v,a){var d=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(d!=null){var i,E,j,c,T=[],p=!0,y=!1;try{if(j=(d=d.call(v)).next,a===0){if(Object(d)!==d)return;p=!1}else for(;!(p=(i=j.call(d)).done)&&(T.push(i.value),T.length!==a);p=!0);}catch(x){y=!0,E=x}finally{try{if(!p&&d.return!=null&&(c=d.return(),Object(c)!==c))return}finally{if(y)throw E}}return T}}function S(v){if(Array.isArray(v))return v}var Y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},Y=`import React, { useState } from "react";

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
`,F={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},te=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design-v2/hooks/useClipboard"},k=function(){var a=Object(l.useState)(""),d=B(a,2),i=d[0],E=d[1],j=ae({timeout:3e3}),c=j.copy,T=j.copied;return Object(le.jsxs)("div",{children:[Object(le.jsx)("input",{type:"text",onChange:function(y){return E(y.target.value)}}),Object(le.jsx)("button",{onClick:function(){return c(i)},children:"copy"}),Object(le.jsx)("span",{children:T&&"Copied!!"})]})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return v});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),O=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),D=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),t=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ue(a,d){return ae(a)||q(a,d)||N(a,d)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(a,d){if(a){if(typeof a=="string")return J(a,d);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return J(a,d)}}function J(a,d){(d==null||d>a.length)&&(d=a.length);for(var i=0,E=new Array(d);i<d;i++)E[i]=a[i];return E}function q(a,d){var i=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var E,j,c,T,p=[],y=!0,x=!1;try{if(c=(i=i.call(a)).next,d===0){if(Object(i)!==i)return;y=!1}else for(;!(y=(E=c.call(i)).done)&&(p.push(E.value),p.length!==d);y=!0);}catch(_){x=!0,j=_}finally{try{if(!y&&i.return!=null&&(T=i.return(),Object(T)!==T))return}finally{if(x)throw j}}return p}}function ae(a){if(Array.isArray(a))return a}var le=function(d,i,E){var j=Object(t.a)(d,i),c=ue(j,2),T=c[0],p=c[1];return Object(n.a)(T,E),p},B=e("./node_modules/react/jsx-runtime.js");function me(a,d){return Y(a)||S(a,d)||ce(a,d)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(a,d){if(a){if(typeof a=="string")return ie(a,d);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ie(a,d)}}function ie(a,d){(d==null||d>a.length)&&(d=a.length);for(var i=0,E=new Array(d);i<d;i++)E[i]=a[i];return E}function S(a,d){var i=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var E,j,c,T,p=[],y=!0,x=!1;try{if(c=(i=i.call(a)).next,d===0){if(Object(i)!==i)return;y=!1}else for(;!(y=(E=c.call(i)).done)&&(p.push(E.value),p.length!==d);y=!0);}catch(_){x=!0,j=_}finally{try{if(!y&&i.return!=null&&(T=i.return(),Object(T)!==T))return}finally{if(x)throw j}}return p}}function Y(a){if(Array.isArray(a))return a}var F=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,te={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},F=`import React, { useState } from "react";

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
`,te={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},k=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useDebounce"},v=function(){var d=Object(l.useState)(""),i=me(d,2),E=i[0],j=i[1],c=le(function(){alert("Updated!")},1e3,[E]);return Object(B.jsxs)("div",{children:[Object(B.jsx)("input",{type:"text",onChange:function(p){return j(p.target.value)}}),Object(B.jsx)("button",{onClick:c,children:"Cancel"})]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`() => {
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
}`}},v.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return ee});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n($),O=e("./node_modules/react/index.js"),M=e.n(O),D=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),X=e("./node_modules/react/jsx-runtime.js"),w=e.n(X),Q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},Q=`import React from "react";
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
`,Z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useForceUpdate"};var ee=function(){var K=Object(D.a)();return Object(X.jsxs)("div",{children:[Math.random(),Object(X.jsx)("button",{onClick:K,children:"Update"})]})};ee.displayName="Default",ee.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},ee.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return k});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n($),O=e("./node_modules/core-js/modules/es.symbol.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(D),w=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e.n(w),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e.n(Z),U=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(U),l=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(l),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ue=e.n(t),A=e("./node_modules/core-js/modules/es.array.slice.js"),N=e.n(A),J=e("./node_modules/core-js/modules/es.function.name.js"),q=e.n(J),ae=e("./node_modules/core-js/modules/es.array.from.js"),le=e.n(ae),B=e("./node_modules/react/index.js"),me=e.n(B);function z(v,a){return F(v)||Y(v,a)||ie(v,a)||ce()}function ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(v,a){if(v){if(typeof v=="string")return S(v,a);var d=Object.prototype.toString.call(v).slice(8,-1);if(d==="Object"&&v.constructor&&(d=v.constructor.name),d==="Map"||d==="Set")return Array.from(v);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return S(v,a)}}function S(v,a){(a==null||a>v.length)&&(a=v.length);for(var d=0,i=new Array(a);d<a;d++)i[d]=v[d];return i}function Y(v,a){var d=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(d!=null){var i,E,j,c,T=[],p=!0,y=!1;try{if(j=(d=d.call(v)).next,a===0){if(Object(d)!==d)return;p=!1}else for(;!(p=(i=j.call(d)).done)&&(T.push(i.value),T.length!==a);p=!0);}catch(x){y=!0,E=x}finally{try{if(!p&&d.return!=null&&(c=d.return(),Object(c)!==c))return}finally{if(y)throw E}}return T}}function F(v){if(Array.isArray(v))return v}var te=function(a){return(a+1)%1e6},k=function(){var a=Object(B.useReducer)(te,0),d=z(a,2),i=d[1];return i}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),O=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function K(t){t.preventDefault()}function l(){document.body.addEventListener("touchmove",K,{passive:!1})}function n(){document.body.removeEventListener("touchmove",K)}return Object(re.useEffect)(function(){return U&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var t=document.body.style.top;document.body.style.cssText=""}},[]),Object(re.useEffect)(function(){return U&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[U]),null},M=O,D=e("./node_modules/react/jsx-runtime.js"),X=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},X=`import React, { useState } from "react";

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
`,w={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}},Q=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useHiddenBodyOverflow"},Z=function(){return M(!0),Object(D.jsx)("div",{children:Object(D.jsx)("span",{children:"useHiddenBodyOverflow"})})};Z.displayName="Default",Z.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},Z.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return ne});var $=e("./node_modules/core-js/modules/es.promise.js"),re=e("./node_modules/core-js/modules/es.object.to-string.js"),O=e("./node_modules/core-js/modules/web.timers.js"),M=e("./node_modules/core-js/modules/es.object.assign.js"),D=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/react/index.js"),ue=e("./node_modules/core-js/modules/es.object.define-property.js"),A=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),N=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),J=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),q=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),ae=e("./node_modules/core-js/modules/es.object.create.js"),le=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),B=e("./node_modules/core-js/modules/es.array.for-each.js"),me=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),ce=e("./node_modules/core-js/modules/es.array.reverse.js"),ie=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function S(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */S=function(){return r};var r={},b=Object.prototype,m=b.hasOwnProperty,L=Object.defineProperty||function(u,o,f){u[o]=f.value},P=typeof Symbol=="function"?Symbol:{},I=P.iterator||"@@iterator",oe=P.asyncIterator||"@@asyncIterator",_e=P.toStringTag||"@@toStringTag";function se(u,o,f){return Object.defineProperty(u,o,{value:f,enumerable:!0,configurable:!0,writable:!0}),u[o]}try{se({},"")}catch(u){se=function(f,R,H){return f[R]=H}}function fe(u,o,f,R){var H=o&&o.prototype instanceof he?o:he,G=Object.create(H.prototype),ve=new Be(R||[]);return L(G,"_invoke",{value:Ae(u,f,ve)}),G}function ge(u,o,f){try{return{type:"normal",arg:u.call(o,f)}}catch(R){return{type:"throw",arg:R}}}r.wrap=fe;var be={};function he(){}function Oe(){}function je(){}var Te={};se(Te,I,function(){return this});var Ce=Object.getPrototypeOf,Le=Ce&&Ce(Ce(Ee([])));Le&&Le!==b&&m.call(Le,I)&&(Te=Le);var xe=je.prototype=he.prototype=Object.create(Te);function Ie(u){["next","throw","return"].forEach(function(o){se(u,o,function(f){return this._invoke(o,f)})})}function Se(u,o){function f(H,G,ve,pe){var ye=ge(u[H],u,G);if(ye.type!=="throw"){var De=ye.arg,ke=De.value;return ke&&typeof ke=="object"&&m.call(ke,"__await")?o.resolve(ke.__await).then(function(Pe){f("next",Pe,ve,pe)},function(Pe){f("throw",Pe,ve,pe)}):o.resolve(ke).then(function(Pe){De.value=Pe,ve(De)},function(Pe){return f("throw",Pe,ve,pe)})}pe(ye.arg)}var R;L(this,"_invoke",{value:function(G,ve){function pe(){return new o(function(ye,De){f(G,ve,ye,De)})}return R=R?R.then(pe,pe):pe()}})}function Ae(u,o,f){var R="suspendedStart";return function(H,G){if(R==="executing")throw new Error("Generator is already running");if(R==="completed"){if(H==="throw")throw G;return W()}for(f.method=H,f.arg=G;;){var ve=f.delegate;if(ve){var pe=Re(ve,f);if(pe){if(pe===be)continue;return pe}}if(f.method==="next")f.sent=f._sent=f.arg;else if(f.method==="throw"){if(R==="suspendedStart")throw R="completed",f.arg;f.dispatchException(f.arg)}else f.method==="return"&&f.abrupt("return",f.arg);R="executing";var ye=ge(u,o,f);if(ye.type==="normal"){if(R=f.done?"completed":"suspendedYield",ye.arg===be)continue;return{value:ye.arg,done:f.done}}ye.type==="throw"&&(R="completed",f.method="throw",f.arg=ye.arg)}}}function Re(u,o){var f=o.method,R=u.iterator[f];if(R===void 0)return o.delegate=null,f==="throw"&&u.iterator.return&&(o.method="return",o.arg=void 0,Re(u,o),o.method==="throw")||f!=="return"&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+f+"' method")),be;var H=ge(R,u.iterator,o.arg);if(H.type==="throw")return o.method="throw",o.arg=H.arg,o.delegate=null,be;var G=H.arg;return G?G.done?(o[u.resultName]=G.value,o.next=u.nextLoc,o.method!=="return"&&(o.method="next",o.arg=void 0),o.delegate=null,be):G:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,be)}function Fe(u){var o={tryLoc:u[0]};1 in u&&(o.catchLoc=u[1]),2 in u&&(o.finallyLoc=u[2],o.afterLoc=u[3]),this.tryEntries.push(o)}function Me(u){var o=u.completion||{};o.type="normal",delete o.arg,u.completion=o}function Be(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(Fe,this),this.reset(!0)}function Ee(u){if(u){var o=u[I];if(o)return o.call(u);if(typeof u.next=="function")return u;if(!isNaN(u.length)){var f=-1,R=function H(){for(;++f<u.length;)if(m.call(u,f))return H.value=u[f],H.done=!1,H;return H.value=void 0,H.done=!0,H};return R.next=R}}return{next:W}}function W(){return{value:void 0,done:!0}}return Oe.prototype=je,L(xe,"constructor",{value:je,configurable:!0}),L(je,"constructor",{value:Oe,configurable:!0}),Oe.displayName=se(je,_e,"GeneratorFunction"),r.isGeneratorFunction=function(u){var o=typeof u=="function"&&u.constructor;return!!o&&(o===Oe||(o.displayName||o.name)==="GeneratorFunction")},r.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,je):(u.__proto__=je,se(u,_e,"GeneratorFunction")),u.prototype=Object.create(xe),u},r.awrap=function(u){return{__await:u}},Ie(Se.prototype),se(Se.prototype,oe,function(){return this}),r.AsyncIterator=Se,r.async=function(u,o,f,R,H){H===void 0&&(H=Promise);var G=new Se(fe(u,o,f,R),H);return r.isGeneratorFunction(o)?G:G.next().then(function(ve){return ve.done?ve.value:G.next()})},Ie(xe),se(xe,_e,"Generator"),se(xe,I,function(){return this}),se(xe,"toString",function(){return"[object Generator]"}),r.keys=function(u){var o=Object(u),f=[];for(var R in o)f.push(R);return f.reverse(),function H(){for(;f.length;){var G=f.pop();if(G in o)return H.value=G,H.done=!1,H}return H.done=!0,H}},r.values=Ee,Be.prototype={constructor:Be,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Me),!o)for(var f in this)f.charAt(0)==="t"&&m.call(this,f)&&!isNaN(+f.slice(1))&&(this[f]=void 0)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var f=this;function R(De,ke){return ve.type="throw",ve.arg=o,f.next=De,ke&&(f.method="next",f.arg=void 0),!!ke}for(var H=this.tryEntries.length-1;H>=0;--H){var G=this.tryEntries[H],ve=G.completion;if(G.tryLoc==="root")return R("end");if(G.tryLoc<=this.prev){var pe=m.call(G,"catchLoc"),ye=m.call(G,"finallyLoc");if(pe&&ye){if(this.prev<G.catchLoc)return R(G.catchLoc,!0);if(this.prev<G.finallyLoc)return R(G.finallyLoc)}else if(pe){if(this.prev<G.catchLoc)return R(G.catchLoc,!0)}else{if(!ye)throw new Error("try statement without catch or finally");if(this.prev<G.finallyLoc)return R(G.finallyLoc)}}}},abrupt:function(o,f){for(var R=this.tryEntries.length-1;R>=0;--R){var H=this.tryEntries[R];if(H.tryLoc<=this.prev&&m.call(H,"finallyLoc")&&this.prev<H.finallyLoc){var G=H;break}}G&&(o==="break"||o==="continue")&&G.tryLoc<=f&&f<=G.finallyLoc&&(G=null);var ve=G?G.completion:{};return ve.type=o,ve.arg=f,G?(this.method="next",this.next=G.finallyLoc,be):this.complete(ve)},complete:function(o,f){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&f&&(this.next=f),be},finish:function(o){for(var f=this.tryEntries.length-1;f>=0;--f){var R=this.tryEntries[f];if(R.finallyLoc===o)return this.complete(R.completion,R.afterLoc),Me(R),be}},catch:function(o){for(var f=this.tryEntries.length-1;f>=0;--f){var R=this.tryEntries[f];if(R.tryLoc===o){var H=R.completion;if(H.type==="throw"){var G=H.arg;Me(R)}return G}}throw new Error("illegal catch attempt")},delegateYield:function(o,f,R){return this.delegate={iterator:Ee(o),resultName:f,nextLoc:R},this.method==="next"&&(this.arg=void 0),be}},r}function Y(r,b,m,L,P,I,oe){try{var _e=r[I](oe),se=_e.value}catch(fe){m(fe);return}_e.done?b(se):Promise.resolve(se).then(L,P)}function F(r){return function(){var b=this,m=arguments;return new Promise(function(L,P){var I=r.apply(b,m);function oe(se){Y(I,L,P,oe,_e,"next",se)}function _e(se){Y(I,L,P,oe,_e,"throw",se)}oe(void 0)})}}function te(r,b){return i(r)||d(r,b)||v(r,b)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(r,b){if(r){if(typeof r=="string")return a(r,b);var m=Object.prototype.toString.call(r).slice(8,-1);if(m==="Object"&&r.constructor&&(m=r.constructor.name),m==="Map"||m==="Set")return Array.from(r);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return a(r,b)}}function a(r,b){(b==null||b>r.length)&&(b=r.length);for(var m=0,L=new Array(b);m<b;m++)L[m]=r[m];return L}function d(r,b){var m=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(m!=null){var L,P,I,oe,_e=[],se=!0,fe=!1;try{if(I=(m=m.call(r)).next,b===0){if(Object(m)!==m)return;se=!1}else for(;!(se=(L=I.call(m)).done)&&(_e.push(L.value),_e.length!==b);se=!0);}catch(ge){fe=!0,P=ge}finally{try{if(!se&&m.return!=null&&(oe=m.return(),Object(oe)!==oe))return}finally{if(fe)throw P}}return _e}}function i(r){if(Array.isArray(r))return r}var E=function(b){var m=Object(t.useState)(!1),L=te(m,2),P=L[0],I=L[1],oe=Object(ie.a)(b),_e=Object(t.useCallback)(F(S().mark(function se(){var fe,ge=arguments;return S().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return I(!0),he.next=3,oe.apply(void 0,ge);case 3:return fe=he.sent,I(!1),he.abrupt("return",fe);case 6:case"end":return he.stop()}},se)})),[b]);return[P,_e]},j=e("./node_modules/react/jsx-runtime.js");function c(r,b){return _(r)||x(r,b)||p(r,b)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(r,b){if(r){if(typeof r=="string")return y(r,b);var m=Object.prototype.toString.call(r).slice(8,-1);if(m==="Object"&&r.constructor&&(m=r.constructor.name),m==="Map"||m==="Set")return Array.from(r);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return y(r,b)}}function y(r,b){(b==null||b>r.length)&&(b=r.length);for(var m=0,L=new Array(b);m<b;m++)L[m]=r[m];return L}function x(r,b){var m=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(m!=null){var L,P,I,oe,_e=[],se=!0,fe=!1;try{if(I=(m=m.call(r)).next,b===0){if(Object(m)!==m)return;se=!1}else for(;!(se=(L=I.call(m)).done)&&(_e.push(L.value),_e.length!==b);se=!0);}catch(ge){fe=!0,P=ge}finally{try{if(!se&&m.return!=null&&(oe=m.return(),Object(oe)!==oe))return}finally{if(fe)throw P}}return _e}}function _(r){if(Array.isArray(r))return r}var s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},s=`import React from "react";
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
`,g={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},C=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design-v2/hooks/useLoading"},V=function(b){return new Promise(function(m){return setTimeout(m,b)})},ne=function(){var b=E(V),m=c(b,2),L=m[0],P=m[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return P(2e3)},children:"Start"})}),Object(j.jsxs)("div",{children:["Loading: ",""+L]})]})};ne.displayName="Default",ne.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},ne.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return j});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n($),O=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(D),w=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(w),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(Z),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(U),l=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(l),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ue=e.n(t),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(A),J=e("./node_modules/core-js/modules/es.array.slice.js"),q=e.n(J),ae=e("./node_modules/core-js/modules/es.function.name.js"),le=e.n(ae),B=e("./node_modules/core-js/modules/es.array.from.js"),me=e.n(B),z=e("./node_modules/react/index.js"),ce=e.n(z),ie=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),S=e("./node_modules/react/jsx-runtime.js"),Y=e.n(S);function F(c,T){return d(c)||a(c,T)||k(c,T)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(c,T){if(c){if(typeof c=="string")return v(c,T);var p=Object.prototype.toString.call(c).slice(8,-1);if(p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set")return Array.from(c);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return v(c,T)}}function v(c,T){(T==null||T>c.length)&&(T=c.length);for(var p=0,y=new Array(T);p<T;p++)y[p]=c[p];return y}function a(c,T){var p=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var y,x,_,s,g=[],C=!0,V=!1;try{if(_=(p=p.call(c)).next,T===0){if(Object(p)!==p)return;C=!1}else for(;!(C=(y=_.call(p)).done)&&(g.push(y.value),g.length!==T);C=!0);}catch(ne){V=!0,x=ne}finally{try{if(!C&&p.return!=null&&(s=p.return(),Object(s)!==s))return}finally{if(V)throw x}}return g}}function d(c){if(Array.isArray(c))return c}var i=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},i=`import React, { useEffect } from "react";

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
`,E={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design-v2/hooks/useRafState"};var j=function(){var T=Object(ie.a)({width:0,height:0}),p=F(T,2),y=p[0],x=p[1];return Object(z.useEffect)(function(){var _=function(){x({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",_),function(){window.removeEventListener("resize",_)}},[]),Object(S.jsx)("pre",{children:JSON.stringify(y,null,2)})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
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
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return te});var $=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n($),O=e("./node_modules/core-js/modules/es.symbol.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e.n(D),w=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e.n(w),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e.n(Z),U=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(U),l=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e.n(l),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ue=e.n(t),A=e("./node_modules/core-js/modules/es.array.slice.js"),N=e.n(A),J=e("./node_modules/core-js/modules/es.function.name.js"),q=e.n(J),ae=e("./node_modules/core-js/modules/es.array.from.js"),le=e.n(ae),B=e("./node_modules/react/index.js"),me=e.n(B);function z(k,v){return F(k)||Y(k,v)||ie(k,v)||ce()}function ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(k,v){if(k){if(typeof k=="string")return S(k,v);var a=Object.prototype.toString.call(k).slice(8,-1);if(a==="Object"&&k.constructor&&(a=k.constructor.name),a==="Map"||a==="Set")return Array.from(k);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return S(k,v)}}function S(k,v){(v==null||v>k.length)&&(v=k.length);for(var a=0,d=new Array(v);a<v;a++)d[a]=k[a];return d}function Y(k,v){var a=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(a!=null){var d,i,E,j,c=[],T=!0,p=!1;try{if(E=(a=a.call(k)).next,v===0){if(Object(a)!==a)return;T=!1}else for(;!(T=(d=E.call(a)).done)&&(c.push(d.value),c.length!==v);T=!0);}catch(y){p=!0,i=y}finally{try{if(!T&&a.return!=null&&(j=a.return(),Object(j)!==j))return}finally{if(p)throw i}}return c}}function F(k){if(Array.isArray(k))return k}var te=function(v){var a=Object(B.useRef)(0),d=Object(B.useState)(v),i=z(d,2),E=i[0],j=i[1],c=Object(B.useCallback)(function(T){cancelAnimationFrame(a.current),a.current=requestAnimationFrame(function(){j(T)})},[]);return[E,c]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return d});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),O=e("./node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/core-js/modules/es.symbol.description.js"),D=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),Q=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),n=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),t=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function ue(i,E){return ae(i)||q(i,E)||N(i,E)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(i,E){if(i){if(typeof i=="string")return J(i,E);var j=Object.prototype.toString.call(i).slice(8,-1);if(j==="Object"&&i.constructor&&(j=i.constructor.name),j==="Map"||j==="Set")return Array.from(i);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return J(i,E)}}function J(i,E){(E==null||E>i.length)&&(E=i.length);for(var j=0,c=new Array(E);j<E;j++)c[j]=i[j];return c}function q(i,E){var j=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(j!=null){var c,T,p,y,x=[],_=!0,s=!1;try{if(p=(j=j.call(i)).next,E===0){if(Object(j)!==j)return;_=!1}else for(;!(_=(c=p.call(j)).done)&&(x.push(c.value),x.length!==E);_=!0);}catch(g){s=!0,T=g}finally{try{if(!_&&j.return!=null&&(y=j.return(),Object(y)!==y))return}finally{if(s)throw T}}return x}}function ae(i){if(Array.isArray(i))return i}var le={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},B=typeof window!="undefined",me=function(){var E=Object(l.useRef)(null),j=Object(t.a)(le),c=ue(j,2),T=c[0],p=c[1],y=Object(l.useMemo)(function(){return B?new ResizeObserver(function(x){var _=x[0];_&&p(_.contentRect)}):null},[]);return Object(l.useEffect)(function(){return E.current&&y.observe(E.current),function(){y.disconnect()}},[E.current]),[E,T]},z=e("./node_modules/react/jsx-runtime.js");function ce(i,E){return te(i)||F(i,E)||S(i,E)||ie()}function ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(i,E){if(i){if(typeof i=="string")return Y(i,E);var j=Object.prototype.toString.call(i).slice(8,-1);if(j==="Object"&&i.constructor&&(j=i.constructor.name),j==="Map"||j==="Set")return Array.from(i);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Y(i,E)}}function Y(i,E){(E==null||E>i.length)&&(E=i.length);for(var j=0,c=new Array(E);j<E;j++)c[j]=i[j];return c}function F(i,E){var j=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(j!=null){var c,T,p,y,x=[],_=!0,s=!1;try{if(p=(j=j.call(i)).next,E===0){if(Object(j)!==j)return;_=!1}else for(;!(_=(c=p.call(j)).done)&&(x.push(c.value),x.length!==E);_=!0);}catch(g){s=!0,T=g}finally{try{if(!_&&j.return!=null&&(y=j.return(),Object(y)!==y))return}finally{if(s)throw T}}return x}}function te(i){if(Array.isArray(i))return i}var k=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},k=`import React, { useEffect } from "react";

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
`,v={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},a=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/hooks/useResize"},d=function(){var E=me(),j=ce(E,2),c=j[0],T=j[1],p=Object(n.a)();return Object(l.useEffect)(function(){p()},[]),Object(z.jsxs)("div",{children:[Object(z.jsx)("textarea",{ref:c,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(z.jsx)("div",{children:JSON.stringify(T)})]})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return j});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n($),O=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(D),w=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(w),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(Z),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(U),l=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(l),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ue=e.n(t),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(A),J=e("./node_modules/core-js/modules/es.array.slice.js"),q=e.n(J),ae=e("./node_modules/core-js/modules/es.function.name.js"),le=e.n(ae),B=e("./node_modules/core-js/modules/es.array.from.js"),me=e.n(B),z=e("./node_modules/react/index.js"),ce=e.n(z),ie=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),S=e("./node_modules/react/jsx-runtime.js"),Y=e.n(S);function F(c,T){return d(c)||a(c,T)||k(c,T)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(c,T){if(c){if(typeof c=="string")return v(c,T);var p=Object.prototype.toString.call(c).slice(8,-1);if(p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set")return Array.from(c);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return v(c,T)}}function v(c,T){(T==null||T>c.length)&&(T=c.length);for(var p=0,y=new Array(T);p<T;p++)y[p]=c[p];return y}function a(c,T){var p=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var y,x,_,s,g=[],C=!0,V=!1;try{if(_=(p=p.call(c)).next,T===0){if(Object(p)!==p)return;C=!1}else for(;!(C=(y=_.call(p)).done)&&(g.push(y.value),g.length!==T);C=!0);}catch(ne){V=!0,x=ne}finally{try{if(!C&&p.return!=null&&(s=p.return(),Object(s)!==s))return}finally{if(V)throw x}}return g}}function d(c){if(Array.isArray(c))return c}var i=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},i=`import React from "react";
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
`,E={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/hooks/useTimeoutFn"};var j=function(){var T=Object(ie.a)(function(){alert("fire!")},2e3),p=F(T,2),y=p[0],x=p[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{onClick:y,children:"Run"}),Object(S.jsx)("button",{onClick:x,children:"Clear"})]})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return X});var $=e("./node_modules/core-js/modules/web.timers.js"),re=e.n($),O=e("./node_modules/react/index.js"),M=e.n(O),D=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),X=function(Q,Z){var ee=Object(O.useRef)(),U=Object(D.a)(Q),K=Object(O.useCallback)(function(){ee.current&&clearTimeout(ee.current),ee.current=setTimeout(function(){U()},Z)},[Z]),l=Object(O.useCallback)(function(){ee.current&&clearTimeout(ee.current)},[]);return Object(O.useEffect)(function(){return l},[l]),[K,l]}},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return j});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n($),O=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(D),w=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n(w),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),ee=e.n(Z),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(U),l=e("./node_modules/core-js/modules/es.string.iterator.js"),n=e.n(l),t=e("./node_modules/core-js/modules/es.array.iterator.js"),ue=e.n(t),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e.n(A),J=e("./node_modules/core-js/modules/es.array.slice.js"),q=e.n(J),ae=e("./node_modules/core-js/modules/es.function.name.js"),le=e.n(ae),B=e("./node_modules/core-js/modules/es.array.from.js"),me=e.n(B),z=e("./node_modules/react/index.js"),ce=e.n(z),ie=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),S=e("./node_modules/react/jsx-runtime.js"),Y=e.n(S);function F(c,T){return d(c)||a(c,T)||k(c,T)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(c,T){if(c){if(typeof c=="string")return v(c,T);var p=Object.prototype.toString.call(c).slice(8,-1);if(p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set")return Array.from(c);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return v(c,T)}}function v(c,T){(T==null||T>c.length)&&(T=c.length);for(var p=0,y=new Array(T);p<T;p++)y[p]=c[p];return y}function a(c,T){var p=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var y,x,_,s,g=[],C=!0,V=!1;try{if(_=(p=p.call(c)).next,T===0){if(Object(p)!==p)return;C=!1}else for(;!(C=(y=_.call(p)).done)&&(g.push(y.value),g.length!==T);C=!0);}catch(ne){V=!0,x=ne}finally{try{if(!C&&p.return!=null&&(s=p.return(),Object(s)!==s))return}finally{if(V)throw x}}return g}}function d(c){if(Array.isArray(c))return c}var i=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},i=`import React, { useEffect, useState } from "react";

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
`,E={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useUpdateEffect"};var j=function(){var T=Object(z.useState)(""),p=F(T,2),y=p[0],x=p[1];return Object(z.useEffect)(function(){console.log("useEffect:",y)},[y]),Object(ie.a)(function(){console.log("useUpdateEffect:",y)},[y]),Object(S.jsx)("div",{children:Object(S.jsx)("input",{type:"text",onChange:function(s){return x(s.target.value)}})})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
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
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return O});var $=e("./node_modules/react/index.js"),re=e.n($),O=function(D,X){var w=Object($.useRef)(!0);Object($.useEffect)(function(){if(!w.current)return D();w.current=!1},X)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(de,h,e){"use strict";e.d(h,"c",function(){return Re}),e.d(h,"d",function(){return Fe}),e.d(h,"b",function(){return Me}),e.d(h,"a",function(){return Ee});var $=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),O=e("./node_modules/core-js/modules/es.object.assign.js"),M={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},D={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},X={none:"none",elevation1:"0px 4px 8px rgba(0, 0, 0, 0.2)",elevation2:"0px 4px 12px rgba(0, 0, 0, 0.15)",elevation3:"0px 4px 16px rgba(0, 0, 0, 0.2)",elevation4:"0px 4px 20px rgba(0, 0, 0, 0.2)",elevation5:"0px 4px 24px rgba(0, 0, 0, 0.2)"},w={display1:"40px",display2:"32px",display3:"28px",display4:"24px",display5:"20px",display6:"18px",subhead1:"16px",subhead2:"14px",body1:"16px",body2:"14px",body3:"12px",caption:"10px"},Q={display1:"56px",display2:"40px",display3:"36px",display4:"32px",display5:"28px",display6:"26px",subhead1:"24px",subhead2:"22px",body1:"24px",body2:"22px",body3:"20px",caption:"16px"},Z={radius10:"4px",radius20:"8px",radius100:"100px"},ee={spacing5:"4px",spacing10:"8px",spacing20:"12px",spacing30:"16px",spacing40:"20px",spacing50:"24px",spacing60:"28px",spacing70:"32px",spacing80:"36px",spacing90:"40px",spacing100:"48px",spacing110:"52px",spacing120:"56px",spacing130:"60px"},U={xsmall:576,small:768,medium:1024,large:1408},K={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},l={mobile:"@media (max-width: "+K.mobile+"px)",tablet:"@media (max-width: "+K.tablet+"px)",desktop:"@media (max-width: "+K.desktop+"px)",largeDesktop:"@media (max-width: "+K.maxSize+"px)"},n=function(u){for(var o="",f=1;f<u.length-1;f+=1)o+=u[f]+" "+f/(u.length-1)*100+"%, ";return u[0]+" 0%, "+o+u[u.length-1]+" 100%"},t=function(u){for(var o=arguments.length,f=new Array(o>1?o-1:0),R=1;R<o;R++)f[R-1]=arguments[R];return"linear-gradient("+u+"deg, "+n(f)+")"},ue=function(){for(var u=arguments.length,o=new Array(u),f=0;f<u;f++)o[f]=arguments[f];return"radial-gradient(circle, "+n(o)+")"},A=function(u){return typeof u.size=="number"?u.size:u.sizes[u.size]||u.size||u.sizes.medium},N=function(u){return function(o){return"@media (min-width: "+(A({size:o,sizes:u.breakpoints})+1)+"px)"}},J=function(u){return function(o){return"@media (max-width: "+A({size:o,sizes:u.breakpoints})+"px)"}},q=e("./node_modules/core-js/modules/es.string.replace.js"),ae=e("./node_modules/core-js/modules/es.regexp.exec.js"),le=e("./node_modules/core-js/modules/es.number.is-nan.js"),B=e("./node_modules/core-js/modules/es.number.constructor.js"),me=e("./node_modules/core-js/modules/es.parse-int.js"),z=e("./node_modules/core-js/modules/es.array.map.js"),ce=e("./node_modules/core-js/modules/es.string.split.js"),ie=e("./node_modules/core-js/modules/es.string.starts-with.js"),S=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),te=e("./node_modules/core-js/modules/es.object.to-string.js"),k=e("./node_modules/core-js/modules/es.symbol.iterator.js"),v=e("./node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/core-js/modules/es.array.iterator.js"),d=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),j=e("./node_modules/core-js/modules/es.array.from.js");function c(W,u){return _(W)||x(W,u)||p(W,u)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(W,u){if(W){if(typeof W=="string")return y(W,u);var o=Object.prototype.toString.call(W).slice(8,-1);if(o==="Object"&&W.constructor&&(o=W.constructor.name),o==="Map"||o==="Set")return Array.from(W);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return y(W,u)}}function y(W,u){(u==null||u>W.length)&&(u=W.length);for(var o=0,f=new Array(u);o<u;o++)f[o]=W[o];return f}function x(W,u){var o=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(o!=null){var f,R,H,G,ve=[],pe=!0,ye=!1;try{if(H=(o=o.call(W)).next,u===0){if(Object(o)!==o)return;pe=!1}else for(;!(pe=(f=H.call(o)).done)&&(ve.push(f.value),ve.length!==u);pe=!0);}catch(De){ye=!0,R=De}finally{try{if(!pe&&o.return!=null&&(G=o.return(),Object(G)!==G))return}finally{if(ye)throw R}}return ve}}function _(W){if(Array.isArray(W))return W}var s=function(u){var o=u.replace("#","");return typeof o=="string"&&o.length===6&&!Number.isNaN(Number("0x"+o))},g=function(u){var o=u.replace("#",""),f=parseInt(o,16),R=f>>16&255,H=f>>8&255,G=f&255;return{r:R,g:H,b:G,a:1}},C=function(u){var o=u.replace(/[^0-9,.]/g,"").split(",").map(Number),f=c(o,4),R=f[0],H=f[1],G=f[2],ve=f[3];return{r:R,g:H,b:G,a:ve||1}},V=function(u){return s(u)?g(u):u.startsWith("rgb")?C(u):{r:0,g:0,b:0,a:1}},ne=function(u,o){if(typeof u!="string"||o>1||o<0)return"rgba(0, 0, 0, 1)";var f=V(u),R=f.r,H=f.g,G=f.b;return"rgba("+R+", "+H+", "+G+", "+o+")"},r=function(u,o){var f=V(u),R=f.r,H=f.g,G=f.b,ve=f.a,pe=1-o,ye=function(ke){return Math.round(ke*pe)};return"rgba("+ye(R)+", "+ye(H)+", "+ye(G)+", "+ve+")"},b=function(u,o){var f=V(u),R=f.r,H=f.g,G=f.b,ve=f.a,pe=function(De){return Math.round(De+(255-De)*o)};return"rgba("+pe(R)+", "+pe(H)+", "+pe(G)+", "+ve+")"},m=function(u){return u*8},L={linearGradient:t,radialGradient:ue,smallerThan:J,largerThan:N,rgba:ne,size:A,darken:r,lighten:b,spacing:m},P=function(u){return Object.assign({},u,{fn:{largerThan:L.largerThan(u),smallerThan:L.smallerThan(u),radialGradient:L.radialGradient,linearGradient:L.linearGradient,rgba:L.rgba,size:L.size,lighten:L.lighten,darken:L.darken,spacing:L.spacing}})},I={display1:{fontSize:w.display1,lineHeight:Q.display1},display2:{fontSize:w.display2,lineHeight:Q.display2},display3:{fontSize:w.display3,lineHeight:Q.display3},display4:{fontSize:w.display4,lineHeight:Q.display4},display5:{fontSize:w.display5,lineHeight:Q.display5},display6:{fontSize:w.display6,lineHeight:Q.display6},subhead1:{fontSize:w.subhead1,lineHeight:Q.subhead1},subhead2:{fontSize:w.subhead2,lineHeight:Q.subhead2},body1:{fontSize:w.body1,lineHeight:Q.body1},body2:{fontSize:w.body2,lineHeight:Q.body2},body3:{fontSize:w.body3,lineHeight:Q.body3},caption:{fontSize:w.caption,lineHeight:Q.caption}},oe=Object.keys(M),_e=["xsmall","small","medium","large"],se=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],fe=function(u){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:u.fontFamily||"sans-serif"}},ge={locale:"ko",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",colors:M,shadows:X,fontSizes:w,lineHeights:Q,radius:Z,typography:I,spacing:ee,breakpoints:U,media:l},be=Object.assign({},ge,{colors:D,colorScheme:"dark"}),he=P(ge),Oe=P(be),je=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Te=e("./node_modules/react/jsx-runtime.js"),Ce=function(u){var o=u.styles,f=Re();return Object(Te.jsx)(je.a,{styles:Object(je.b)(o(f))})};Ce.displayName="Global";var Le={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0}},xe=function(){return Object(Te.jsx)(je.a,{styles:Le})};xe.displayName="NormalizeCSS";var Ie=e("./node_modules/core-js/modules/es.array.reduce.js");function Se(W,u){return u?Object.keys(W).reduce(function(o,f){if(f==="typography"&&u.typography){var R=u.typography?Object.keys(W.typography).reduce(function(H,G){return H[G]=Object.assign({},W.typography[G],u.typography[G]),H},{}):W.typography;return Object.assign({},o,{typography:Object.assign({},W.typography,u.typography,R)})}return o[f]=typeof u[f]=="object"?Object.assign({},W[f],u[f]):u[f]||W[f],o},{}):W}var Ae=Object($.createContext)({theme:he,styles:{},emotionOptions:{key:"co",prepend:!0}});function Re(){var W;return((W=Object($.useContext)(Ae))===null||W===void 0?void 0:W.theme)||he}function Fe(){var W;return((W=Object($.useContext)(Ae))===null||W===void 0?void 0:W.styles)||{}}function Me(){var W;return((W=Object($.useContext)(Ae))===null||W===void 0?void 0:W.emotionOptions)||{key:"co",prepend:!0}}var Be=function(){return Object(Te.jsx)(Ce,{styles:function(o){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:o.fontFamily,backgroundColor:o.colorScheme==="dark"?o.colors.black:o.colors.white,color:o.colorScheme==="dark"?o.colors.white:o.colors.black,lineHeight:o.lineHeight,fontSizes:o.fontSizes.body3}}}})};Be.displayName="GlobalStyles";var Ee=function(u){var o=u.theme,f=u.styles,R=f===void 0?{}:f,H=u.emotionOptions,G=u.withNormalizeCSS,ve=G===void 0?!1:G,pe=u.withGlobalStyles,ye=pe===void 0?!1:pe,De=u.children;return Object(Te.jsxs)(Ae.Provider,{value:{theme:Se(o.colorScheme==="dark"?Oe:he,o),styles:R,emotionOptions:H},children:[ve&&Object(Te.jsx)(xe,{}),ye&&Object(Te.jsx)(Be,{}),De]})};Ee.displayName="TmProvider",Ee.displayName="@travelmakers-design-v2/styles/TmProvider"},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return ie});var $=e("./node_modules/core-js/modules/es.function.name.js"),re=e("./node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/core-js/modules/es.object.keys.js"),M=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),D=e("./node_modules/core-js/modules/es.array.for-each.js"),X=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),l=e("./node_modules/core-js/modules/es.array.iterator.js"),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t=e("./node_modules/core-js/modules/es.array.slice.js"),ue=e("./node_modules/core-js/modules/es.array.from.js");function A(S,Y){return le(S)||ae(S,Y)||J(S,Y)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(S,Y){if(S){if(typeof S=="string")return q(S,Y);var F=Object.prototype.toString.call(S).slice(8,-1);if(F==="Object"&&S.constructor&&(F=S.constructor.name),F==="Map"||F==="Set")return Array.from(S);if(F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))return q(S,Y)}}function q(S,Y){(Y==null||Y>S.length)&&(Y=S.length);for(var F=0,te=new Array(Y);F<Y;F++)te[F]=S[F];return te}function ae(S,Y){var F=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(F!=null){var te,k,v,a,d=[],i=!0,E=!1;try{if(v=(F=F.call(S)).next,Y===0){if(Object(F)!==F)return;i=!1}else for(;!(i=(te=v.call(F)).done)&&(d.push(te.value),d.length!==Y);i=!0);}catch(j){E=!0,k=j}finally{try{if(!i&&F.return!=null&&(a=F.return(),Object(a)!==a))return}finally{if(E)throw k}}return d}}function le(S){if(Array.isArray(S))return S}function B(S){var Y={};return Object.keys(S).forEach(function(F){var te=A(S[F],2),k=te[0],v=te[1];Y[k]=v}),Y}var me=e("./node_modules/core-js/modules/es.array.reduce.js");function z(S,Y,F){return Object.keys(Y).reduce(function(te,k){return te[k]=S(Y[k],F?"tm-"+F+"-"+k:null),te},{})}var ce=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function ie(S){var Y=typeof S=="function"?S:function(){return S};function F(te,k){var v=Object(M.c)(),a=Object(M.d)()[k==null?void 0:k.name],d=Object(ce.a)(),i=d.css,E=d.cx,j=d.cssRn,c=0;function T(g){return c+=1,"tm-ref_"+(g||"")+"_"+c}var p=Y(v,te,T),y=typeof(k==null?void 0:k.overrideStyles)=="function"?k==null?void 0:k.overrideStyles(v):(k==null?void 0:k.overrideStyles)||{},x=typeof a=="function"?a(v):a||{},_=typeof(k==null?void 0:k.tm)=="function"?k.tm(v):k==null?void 0:k.tm,s=B(Object.keys(p).map(function(g){var C=E(i(p[g]),i(x[g]),i(y[g]),i(_));return[g,C]}));return{classes:z(E,s,k==null?void 0:k.name),cx:E,theme:v}}return F}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return _});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/core-js/modules/es.function.name.js"),O=e("./node_modules/core-js/modules/es.array.is-array.js"),M=e("./node_modules/core-js/modules/es.symbol.js"),D=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Q=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),K=e("./node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/clsx/dist/clsx.m.js"),n=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),t=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ue=e("./node_modules/core-js/modules/es.array.index-of.js"),A=e("./node_modules/core-js/modules/es.array.map.js"),N=e("./node_modules/react/index.js");function J(s){return B(s)||le(s)||ae(s)||q()}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(s,g){if(s){if(typeof s=="string")return me(s,g);var C=Object.prototype.toString.call(s).slice(8,-1);if(C==="Object"&&s.constructor&&(C=s.constructor.name),C==="Map"||C==="Set")return Array.from(s);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return me(s,g)}}function le(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function B(s){if(Array.isArray(s))return me(s)}function me(s,g){(g==null||g>s.length)&&(g=s.length);for(var C=0,V=new Array(g);C<g;C++)V[C]=s[C];return V}function z(s,g){var C=Object(N.useRef)();return(!C.current||g.length!==C.current.prevDeps.length||C.current.prevDeps.map(function(V,ne){return V===g[ne]}).indexOf(!1)>=0)&&(C.current={v:s(),prevDeps:J(g)}),C.current.v}var ce=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),ie=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),S=e("./node_modules/react/jsx-runtime.js"),Y=function(){var s;function g(C){return s===void 0&&(s=Object(ce.a)(C||{key:"co",prepend:!0})),s}return{getCache:g}}(),F=Y.getCache,te=Object(N.createContext)(void 0);function k(){var s=Object(ie.b)();return Object(N.useContext)(te)||F(s)}function v(s){var g=s.children,C=s.value;return Object(S.jsx)(te.Provider,{value:C,children:g})}v.displayName="CacheProvider";function a(s,g){return c(s)||j(s,g)||i(s,g)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(s,g){if(s){if(typeof s=="string")return E(s,g);var C=Object.prototype.toString.call(s).slice(8,-1);if(C==="Object"&&s.constructor&&(C=s.constructor.name),C==="Map"||C==="Set")return Array.from(s);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return E(s,g)}}function E(s,g){(g==null||g>s.length)&&(g=s.length);for(var C=0,V=new Array(g);C<g;C++)V[C]=s[C];return V}function j(s,g){var C=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(C!=null){var V,ne,r,b,m=[],L=!0,P=!1;try{if(r=(C=C.call(s)).next,g===0){if(Object(C)!==C)return;L=!1}else for(;!(L=(V=r.call(C)).done)&&(m.push(V.value),m.length!==g);L=!0);}catch(I){P=!0,ne=I}finally{try{if(!L&&C.return!=null&&(b=C.return(),Object(b)!==b))return}finally{if(P)throw ne}}return m}}function c(s){if(Array.isArray(s))return s}var T="ref";function p(s){var g;if(s.length!==1)return{args:s,ref:g};var C=a(s,1),V=C[0];if(!(V instanceof Object))return{args:s,ref:g};if(!(T in V))return{args:s,ref:g};g=V[T];var ne=Object.assign({},V);return delete ne[T],{args:[ne],ref:g}}var y=function(){function s(C,V,ne){var r=[],b=Object(t.a)(C,r,ne);return r.length<2?ne:b+V(r)}function g(C){var V=C.cache,ne=function(){for(var L=arguments.length,P=new Array(L),I=0;I<L;I++)P[I]=arguments[I];var oe=p(P),_e=oe.ref,se=oe.args,fe=Object(n.a)(se,V.registered);return Object(t.b)(V,fe,!1),V.key+"-"+fe.name+(_e===void 0?"":" "+_e)},r=function(){for(var L=arguments.length,P=new Array(L),I=0;I<L;I++)P[I]=arguments[I];var oe=p(P),_e=oe.ref,se=oe.args,fe=Object(n.a)(se,V.registered);return Object(t.b)(V,fe,!1),""+V.key+fe.name+(_e===void 0?"":" "+_e)},b=function(){for(var L=arguments.length,P=new Array(L),I=0;I<L;I++)P[I]=arguments[I];return s(V.registered,ne,Object(l.a)(P))};return{css:ne,cx:b,cssRn:r}}return{cssFactory:g}}(),x=y.cssFactory;function _(){var s=k();return z(function(){return x({cache:s})},[s])}},"./packages/travelmakers-design-utils/src/getDate/getDate.tsx":function(de,h,e){"use strict";e.d(h,"e",function(){return K}),e.d(h,"a",function(){return l}),e.d(h,"d",function(){return n}),e.d(h,"b",function(){return t}),e.d(h,"c",function(){return ue});var $=e("./node_modules/core-js/modules/es.date.to-string.js"),re=e.n($),O=e("./node_modules/dayjs/dayjs.min.js"),M=e.n(O),D=e("./node_modules/dayjs/plugin/timezone.js"),X=e.n(D),w=e("./node_modules/dayjs/plugin/utc.js"),Q=e.n(w);M.a.extend(Q.a),M.a.extend(X.a);function Z(A){return A<10?"0"+A:A}function ee(){return M.a}function U(A){var N=A?new Date(A):new Date,J=N.getTime()+N.getTimezoneOffset()*60*1e3,q=9*60*60*1e3,ae=new Date(J+q);return ae}function K(A){if(!A){var N=M()().tz("Asia/Seoul");return N}var J=M()(A+"+0900").tz("Asia/Seoul");if(!J.isValid()){var q=M()(""+A).tz("Asia/Seoul");return q}return J}function l(A,N){var J=K(A),q=N!=null?N:"/";return J.year()+q+(J.month()+1)+q+J.date()}function n(A,N){var J=K(A),q=N!=null?N:"/";return J.year()+q+(J.month()+1)+q+J.date()+" "+J.hour()+":"+Z(J.minute())}function t(A,N){var J=K(A),q=N!=null?N:":";return Z(J.hour())+q+Z(J.minute())}function ue(A){var N=K(A),J=N.day(),q=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];return q[J]+"\uC694\uC77C"}},"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return ee});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n($),O=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),M=e("./node_modules/react/index.js"),D=e.n(M),X=e("./node_modules/react/jsx-runtime.js"),w=e.n(X),Q=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}},Q=`import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

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
`,Z={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:47},startBody:{col:23,line:35},endBody:{col:1,line:47}}};h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/utils/getDate",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}};var ee=function(K){return Object(X.jsxs)("div",{children:["getDate: ",Object(O.a)("2022-12-22T01:37:27.391Z"),Object(X.jsx)("br",{}),"getDateTime: ",Object(O.b)("2022-12-22T01:37:27.391Z"),Object(X.jsx)("br",{}),"getFullDate: ",Object(O.d)("2022-12-22T01:37:27.391Z"),Object(X.jsx)("br",{}),"getDay: ",Object(O.c)("2022-12-22T01:37:27.391Z")]})};ee.displayName="Default",ee.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},ee.parameters)},"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return Z});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js");function O(ee){switch(ee){case"checkout_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_purchase_before":case"reservation_purchase_done":case"checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"day_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"extend_purchase_before":case"extend_purchase_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"extend_checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"reservation_change_process":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_cancel":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!0,callable:!0},reservationChangeButton:{visible:!1,callable:!1}};case"tour_confirm_before":case"tour_confirm":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"tour_cancel":case"tour_done":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};default:return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!0},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}}}}var M=O,D=e("./node_modules/react/jsx-runtime.js"),X=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},X=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:13},startBody:{col:23,line:11},endBody:{col:1,line:13}}},Q=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design-v2/utils/getReservationsCallable",argTypes:{state:{}}},Z=function(U){return Object(D.jsx)("div",{children:JSON.stringify(O("tour_cancel"))})};Z.displayName="Default",Z.parameters=Object.assign({storySource:{source:`(props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
}`}},Z.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return U});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),O=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),M=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function D(K){switch(K){case"default":case"tour_cancel":case"reservation_cancel":return{enum:K,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(){return"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?"},buttonText:function(){return"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_confirm_before":return{enum:K,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return n},buttonText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"tour_confirm":return{enum:K,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(M.a)(Object(O.e)(n))+" \uD22C\uC5B4\uAC00 \uD655\uC815\uB410\uC5B4\uC694"},buttonText:function(){return"\uC57D\uC18D\uC2DC\uAC04\uC5D0 \uAF2D \uBC29\uBB38\uD574\uC8FC\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"tour_done":return{enum:K,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(){return"\uD22C\uC5B4\uB294 \uC5B4\uB5A0\uC168\uB098\uC694?"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"reservation_purchase_before":return{enum:K,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uC544\uC9C1 \uC785\uAE08\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"reservation_purchase_done":return{enum:K,firstLineText:function(n){return"\uC548\uB155\uD558\uC138\uC694, "+n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(n){return Object(M.a)(Object(O.e)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815\uC774\uC608\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkin_before":return{enum:K,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return Object(M.b)(Object(O.e)(n))+" \uCCB4\uD06C\uC778 \uC608\uC815\uC774\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{enum:K,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return"\uCCB4\uD06C\uC544\uC6C3\uC740 "+Object(M.b)(Object(O.e)(n))+"\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(n){return{url:n,arrow:!!n}},color:"default"};case"checkout_before":return{enum:K,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uC5F0\uC7A5\uD558\uC2DC\uACA0\uC5B4\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_before_n":return{enum:K,firstLineText:function(n){return""+n},secondLineText:function(n){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+n+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(n){return Object(M.b)(Object(O.e)(n))+" \uCCB4\uD06C\uC544\uC6C3 \uC785\uB2C8\uB2E4"},link:function(n){return{url:n,arrow:!!n}},color:"alert"};case"checkout_done":return{enum:K,firstLineText:function(n){return n+"\uB2D8"},secondLineText:function(n){return""+n},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC740 \uC5B4\uB5A0\uC168\uB098\uC694?"},link:function(n){return{url:n,arrow:!!n}},color:"alert"}}}function X(K,l){switch(K){case"default":case"tour_cancel":case"reservation_cancel":return{first:l.first.userName,second:null,buttonText:null};case"tour_confirm_before":return{first:l.first.userName,second:l.second.hotelName,buttonText:null};case"tour_confirm":return{first:l.first.userName,second:l.second.startDate,buttonText:null};case"tour_done":return{first:l.first.userName,second:null,buttonText:null};case"reservation_purchase_before":return{first:l.first.userName,second:l.second.hotelName,buttonText:null};case"reservation_purchase_done":return{first:l.first.userName,second:l.second.hotelName,buttonText:l.buttonText.expectedDate};case"checkin_before":return{first:l.first.userName,second:l.second.startDate,buttonText:null};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{first:l.first.userName,second:l.second.endDate,buttonText:null};case"checkout_before":return{first:l.first.hotelName,second:""+l.second.dDay,buttonText:null};case"checkout_before_n":return{first:l.first.hotelName,second:""+l.second.dDay,buttonText:l.buttonText.endDate};case"checkout_done":return{first:l.first.userName,second:l.second.hotelName,buttonText:null};default:return{first:null,second:null,buttonText:null}}}var w=e("./node_modules/react/jsx-runtime.js"),Q=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}},Q=`import React from "react";

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
`,Z={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:58},startBody:{col:23,line:35},endBody:{col:1,line:58}}},ee=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/utils/getTimeLineFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},U=function(l){return Object(w.jsxs)("div",{children:["firstLineText: ",D("default").firstLineText("\uD64D\uAE38\uB3D9"),Object(w.jsx)("br",{}),"secondLineText(default): ",D("default").secondLineText(),Object(w.jsx)("br",{}),"secondLineText(tour_confirm_before):",D("reservation_purchase_before").secondLineText("\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"),Object(w.jsx)("br",{}),"secondLineText(tour_confirm):",D("tour_confirm").secondLineText("2022-09-28T01:26:38.000000Z"),Object(w.jsx)("br",{}),"buttonText: ",D("default").buttonText(),Object(w.jsx)("br",{}),"---- ",Object(w.jsx)("br",{}),"getTimeLineFunc(`state`)"]})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},U.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return K});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),O=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),M=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),D=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function X(l){switch(l){case"tour_confirm_before":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:l,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ue=Object(M.a)(t);return ue&&ue==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ue+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:l,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ue=Object(M.a)(t);return ue&&ue==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ue+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:l,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:l,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:l,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:l,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:l,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:l,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(D.a)(Object(O.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:l,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:l,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:l,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:l,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(t){return Object(D.a)(Object(O.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:l,firstLineText:function(){return""},secondLineText:function(){return""},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},thirdLineText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}}}}function w(l,n){switch(l){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName};case"checkout_done":return{first:null,second:null,third:n.third.hotelName};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName};default:return{first:null,second:null,third:n.third.hotelName}}}var Q=e("./node_modules/react/jsx-runtime.js"),Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,ee={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}},Z=`import React from "react";
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
`,ee={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}},U=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},K=function(n){return Object(Q.jsx)("div",{children:X("reservation_purchase_before").secondLineText("2022-12-24T02:24:01.616Z")})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":function(de,h,e){"use strict";e.r(h),e.d(h,"Default",function(){return K});var $=e("./node_modules/core-js/modules/es.object.assign.js"),re=e("./node_modules/react/index.js"),O=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts"),M=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),D=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function X(l){switch(l){case"tour_confirm_before":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_confirm":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"tour_done":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uBC29\uBB38"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_before":return{enum:l,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(t){if(t){var ue=Object(M.a)(t);return ue&&ue==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ue+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_before":return{enum:l,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(t){if(t){var ue=Object(M.a)(t);return ue&&ue==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":ue+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_purchase_done":return{enum:l,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkin_before":return{enum:l,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+t},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"day_n":return{enum:l,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_purchase_done":return{enum:l,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"extend_checkin_before":return{enum:l,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_change_process":return{enum:l,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before":return{enum:l,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"checkout_before_n":return{enum:l,firstLineText:function(t){return t&&t==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+t},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},link:function(t){return{url:t,arrow:!!t}}};case"checkout_done":return{enum:l,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(t){return t},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(t){return{url:t,arrow:!!t}}};case"tour_cancel":return{enum:l,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};case"reservation_cancel":return{enum:l,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},secondLineText:function(t){return Object(O.a)(Object(D.e)(t),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}};default:return{enum:l,firstLineText:function(){return""},secondLineText:function(){return""},thirdLineText:function(t){return t},roomTypeText:function(t){return t},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(t){return{url:t,arrow:!!t}}}}}function w(l,n){switch(l){case"checkout_before":case"checkout_before_n":return{first:""+n.first.dDay,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:n.second.expectedDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+n.first.dDay,second:n.second.startDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"day_n":return{first:null,second:n.second.endDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:n.second.vBankDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"checkout_done":return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};case"tour_cancel":case"reservation_cancel":return{first:null,second:n.second.cancelDate,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType};default:return{first:null,second:null,third:n.third.hotelName,roomTypeText:n.roomTypeText.roomType}}}var Q=e("./node_modules/react/jsx-runtime.js"),Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,ee={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}},Z=`import React from "react";

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
`,ee={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:43},startBody:{col:23,line:35},endBody:{col:1,line:43}}},U=h.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},K=function(n){return Object(Q.jsx)("div",{children:X("reservation_purchase_before").secondLineText("2023-02-08T23:24:01.616Z")})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-utils/src/utils/getCountDown.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return n});var $=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n($),O=e("./node_modules/core-js/modules/es.regexp.to-string.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.date.to-string.js"),X=e.n(D),w=e("./node_modules/core-js/modules/es.string.pad-start.js"),Q=e.n(w),Z=e("./node_modules/core-js/modules/es.string.replace.js"),ee=e.n(Z),U=e("./node_modules/core-js/modules/es.regexp.exec.js"),K=e.n(U),l=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function n(t){var ue="HH\uC2DC\uAC04 mm\uBD84",A=Object(l.e)(t),N=1e3,J=N*60,q=J*60,ae=q*24,le=function(){var me=A.toDate().getTime()-Object(l.e)().toDate().getTime(),z={days:"0",hours:"0",minutes:"0",seconds:"0"};return me>0&&(z={days:Math.floor(me/ae).toString(),hours:Math.floor(me/q%24).toString(),minutes:Math.floor(me/N/60%60).toString().padStart(2,"0"),seconds:Math.floor(me/N%60).toString().padStart(2,"0")}),!A||!z?"":ue.replace("D",z.days).replace("HH",z.hours).replace("mm",z.minutes).replace("ss",z.seconds)};return le()}},"./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts":function(de,h,e){"use strict";e.d(h,"a",function(){return re}),e.d(h,"b",function(){return O});function $(M){return M<10?"0"+M:M}function re(M,D){var X=M;return D?X.month()+1+"\uC6D4 "+X.date()+"\uC77C "+X.hour()+":"+$(X.minute()):X.month()+1+"\uC6D4 "+X.date()+"\uC77C "}function O(M){var D=M;return D.month()+1+"\uC6D4 "+D.date()+"\uC77C "+D.hour()+"\uC2DC"}},"./storybook-init-framework-entry.js":function(de,h,e){"use strict";e.r(h);var $=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(de,h,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),de.exports=e("./generated-stories-entry.js")},1:function(de,h){}},[[0,4,5]]]);
