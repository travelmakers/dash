(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,g,e){"use strict";e.r(g);var K={};e.r(K),e.d(K,"parameters",function(){return u}),e.d(K,"decorators",function(){return p});var $=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.array.filter.js"),E=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),d=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),H=e("./node_modules/core-js/modules/es.object.define-properties.js"),R=e("./node_modules/core-js/modules/es.object.define-property.js"),N=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),C=e("./node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/core-js/modules/es.object.to-string.js"),n=e("./node_modules/core-js/modules/es.symbol.iterator.js"),i=e("./node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),f=e("./node_modules/core-js/modules/es.array.slice.js"),r=e("./node_modules/core-js/modules/es.function.name.js"),o=e("./node_modules/core-js/modules/es.array.from.js"),v=e("./node_modules/react/index.js"),y=e("./node_modules/react/jsx-runtime.js");function b(M,A){return _(M)||x(M,A)||T(M,A)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(M,A){if(M){if(typeof M=="string")return k(M,A);var S=Object.prototype.toString.call(M).slice(8,-1);if(S==="Object"&&M.constructor&&(S=M.constructor.name),S==="Map"||S==="Set")return Array.from(M);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return k(M,A)}}function k(M,A){(A==null||A>M.length)&&(A=M.length);for(var S=0,L=new Array(A);S<A;S++)L[S]=M[S];return L}function x(M,A){var S=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(S!=null){var L,U,Y,re,ce=[],q=!0,ie=!1;try{if(Y=(S=S.call(M)).next,A===0){if(Object(S)!==S)return;q=!1}else for(;!(q=(L=Y.call(S)).done)&&(ce.push(L.value),ce.length!==A);q=!0);}catch(te){ie=!0,U=te}finally{try{if(!q&&S.return!=null&&(re=S.return(),Object(re)!==re))return}finally{if(ie)throw U}}return ce}}function _(M){if(Array.isArray(M))return M}var D=Object(v.createContext)(null),W=function(){var A=Object(v.useContext)(D);if(!A)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return A},B=function(A){var S=A.colorScheme,L=A.toggleColorScheme,U=A.children,Y=Object(v.useState)("init"),re=b(Y,2),ce=re[0],q=re[1];return Object(v.useEffect)(function(){q("update")},[]),Object(y.jsx)(D.Provider,{value:{colorScheme:S,toggleColorScheme:L},children:U},ce)};B.displayName="ColorSchemeProvider",B.displayName="@travelmakers-design-v2/styles/ColorSchemeProvider";var I=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),O=e("./node_modules/@storybook/theming/dist/esm/index.js"),l=e("./node_modules/storybook-dark-mode/dist/index.js"),u={layout:"fullscreen",docs:{theme:O.themes.light},darkMode:{current:"dark"}};function a(M){var A=Object(l.useDarkMode)()?"dark":"light";return Object(y.jsx)(B,{colorScheme:A,toggleColorScheme:function(){},children:Object(y.jsx)(I.a,{theme:{colorScheme:A},withGlobalStyles:!0,withNormalizeCSS:!0,children:M.children})})}a.displayName="ThemeWrapper";var p=[function(M){return Object(y.jsx)(a,{children:M()})}];function s(M,A){var S=Object.keys(M);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(M);A&&(L=L.filter(function(U){return Object.getOwnPropertyDescriptor(M,U).enumerable})),S.push.apply(S,L)}return S}function h(M){for(var A=1;A<arguments.length;A++){var S=arguments[A]!=null?arguments[A]:{};A%2?s(Object(S),!0).forEach(function(L){P(M,L,S[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(S)):s(Object(S)).forEach(function(L){Object.defineProperty(M,L,Object.getOwnPropertyDescriptor(S,L))})}return M}function P(M,A,S){return A in M?Object.defineProperty(M,A,{value:S,enumerable:!0,configurable:!0,writable:!0}):M[A]=S,M}Object.keys(K).forEach(function(M){var A=K[M];switch(M){case"args":return Object(N.d)(A);case"argTypes":return Object(N.b)(A);case"decorators":return A.forEach(function(L){return Object(N.f)(L,!1)});case"loaders":return A.forEach(function(L){return Object(N.g)(L,!1)});case"parameters":return Object(N.h)(h({},A),!1);case"argTypesEnhancers":return A.forEach(function(L){return Object(N.c)(L)});case"argsEnhancers":return A.forEach(function(L){return Object(N.e)(L)});case"render":return Object(N.i)(A);case"globals":case"globalTypes":{var S={};return S[M]=A,Object(N.h)(S,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(M+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,g,e){"use strict";(function(K){var $=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,$.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],K,!1)}).call(this,e("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,g,e){var K={"./travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx","./travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx","./travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx","./travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx","./travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx","./travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx","./travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx","./travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx","./travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx","./travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx","./travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx","./travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx","./travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx","./travelmakers-design-core/src/components/Divider/stories/Divider.stories.tsx":"./packages/travelmakers-design-core/src/components/Divider/stories/Divider.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx":"./packages/travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx":"./packages/travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx","./travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx","./travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx","./travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx":"./packages/travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx","./travelmakers-design-core/src/components/Search/stories/Search.stories.tsx":"./packages/travelmakers-design-core/src/components/Search/stories/Search.stories.tsx","./travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx","./travelmakers-design-core/src/components/TextArea/stories/TextArea.stories.tsx":"./packages/travelmakers-design-core/src/components/TextArea/stories/TextArea.stories.tsx","./travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx":"./packages/travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx":"./packages/travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx","./travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx","./travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx"};function $(F){var E=w(F);return e(E)}function w(F){if(!e.o(K,F)){var E=new Error("Cannot find module '"+F+"'");throw E.code="MODULE_NOT_FOUND",E}return K[F]}$.keys=function(){return Object.keys(K)},$.resolve=w,oe.exports=$,$.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx":function(oe,g,e){"use strict";e.d(g,"b",function(){return t}),e.d(g,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(i){return{root:{margin:0}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["gap","type","className","children"];function V(i,j){if(i==null)return{};var m=C(i,j),f,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)f=o[r],!(j.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(m[f]=i[f])}return m}function C(i,j){if(i==null)return{};var m={},f=Object.keys(i),r,o;for(o=0;o<f.length;o++)r=f[o],!(j.indexOf(r)>=0)&&(m[r]=i[r]);return m}var t=Object(E.createContext)({type:"small",gap:4});t.displayName="AccordionContext";var n=Object(E.forwardRef)(function(i,j){var m=i.gap,f=m===void 0?4:m,r=i.type,o=r===void 0?"small":r,v=i.className,y=i.children,b=V(i,N),c=H(),T=c.classes,k=c.cx;return Object(R.jsx)(t.Provider,{value:{type:o,gap:f},children:Object(R.jsx)(G.a,Object.assign({component:"dl",ref:j,className:k(T.root,v)},b,{children:y}))})});n.Item=z.a,n.displayName="Accordion"},"./packages/travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Small",function(){return N}),e.d(g,"Medium",function(){return V});var K=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.object.assign.js"),F=e.n(w),E=e("./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx"),G=e("./node_modules/react/jsx-runtime.js"),z=e.n(G),d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Accordion } from \\"../Accordion\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accoridion/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\"],\\n        default: \\"small\\",\\n      },\\n      description: \\"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: {\\n      description: \\"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.\\",\\n      type: \\"number\\",\\n      defaultValue: 4,\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nconst accordionData = [\\n  {\\n    id: 1,\\n    answer:\\n      \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n  {\\n    id: 2,\\n    answer:\\n      \\"\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n];\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n\\nexport const Medium = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":49},"endLoc":{"col":1,"line":63},"startBody":{"col":21,"line":49},"endBody":{"col":1,"line":63}},"Medium":{"startLoc":{"col":22,"line":65},"endLoc":{"col":1,"line":79},"startBody":{"col":22,"line":65},"endBody":{"col":1,"line":79}}};
    
import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accoridion/Accordion",
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
            key={data.id}
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
            key={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Small.parameters };
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,H={Small:{startLoc:{col:21,line:57},endLoc:{col:1,line:71},startBody:{col:21,line:57},endBody:{col:1,line:71}},Medium:{startLoc:{col:22,line:73},endLoc:{col:1,line:87},startBody:{col:22,line:73},endBody:{col:1,line:87}}},d=`import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accoridion/Accordion",
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
            key={data.id}
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
            key={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};
`,H={Small:{startLoc:{col:21,line:49},endLoc:{col:1,line:63},startBody:{col:21,line:49},endBody:{col:1,line:63}},Medium:{startLoc:{col:22,line:65},endLoc:{col:1,line:79},startBody:{col:22,line:65},endBody:{col:1,line:79}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Accordion } from \\"../Accordion\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accoridion/Accordion\\",\\n  component: Accordion,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\"],\\n        default: \\"small\\",\\n      },\\n      description: \\"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: {\\n      description: \\"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.\\",\\n      type: \\"number\\",\\n      defaultValue: 4,\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nconst accordionData = [\\n  {\\n    id: 1,\\n    answer:\\n      \\"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.\\\\n\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n  {\\n    id: 2,\\n    answer:\\n      \\"\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\\\n\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.\\",\\n    question: \\"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?\\",\\n  },\\n];\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n\\nexport const Medium = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":49},"endLoc":{"col":1,"line":63},"startBody":{"col":21,"line":49},"endBody":{"col":1,"line":63}},"Medium":{"startLoc":{"col":22,"line":65},"endLoc":{"col":1,"line":79},"startBody":{"col":22,"line":65},"endBody":{"col":1,"line":79}}};
    
import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accoridion/Accordion",
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
            key={data.id}
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
            key={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
};



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Small.parameters };
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,locationsMap:{small:{startLoc:{col:21,line:57},endLoc:{col:1,line:71},startBody:{col:21,line:57},endBody:{col:1,line:71}},medium:{startLoc:{col:22,line:73},endLoc:{col:1,line:87},startBody:{col:22,line:73},endBody:{col:1,line:87}}}}},title:"@travelmakers-design-v2/core/General/Accoridion/Accordion",component:E.a,argTypes:{type:{control:{type:"radio",options:["small","medium"],default:"small"},description:"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},gap:{description:"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.",type:"number",defaultValue:4,table:{type:{summary:"number"}}}}};var R=[{id:1,answer:`\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.
\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?"},{id:2,answer:`\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.
\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"}],N=function(t){return Object(G.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(G.jsx)(E.a,Object.assign({},t,{children:R.map(function(n){return Object(G.jsx)(E.a.Item,{header:n.question,content:n.answer},n.id)})}))})};N.displayName="Small";var V=function(t){return Object(G.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(G.jsx)(E.a,Object.assign({type:"medium"},t,{children:R.map(function(n){return Object(G.jsx)(E.a.Item,{header:n.question,content:n.answer},n.id)})}))})};V.displayName="Medium",N.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            key={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}`}},N.parameters),V.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion type={"medium"} {...props}>
        {accordionData.map((data) => (
          <Accordion.Item
            key={data.id}
            header={data.question}
            content={data.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return O});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),d=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),j=e("./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx"),m=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),f={small:"40px",medium:"56px"},r={small:"subhead2",medium:"subhead1"},o=function(u,a){switch(a){case"small":return{padding:u.spacing.spacing10+" "+u.spacing.spacing30};case"medium":return{padding:""+u.spacing.spacing30};default:return}},v=Object(m.a)(function(l,u){var a,p=u.type,s=u.gap,h=u.isCollapse,P=h===void 0?!0:h,M=l.colors,A=l.radius,S=l.typography,L=l.spacing;return{item:(a={maxHeight:""+(P?f[p]:"auto"),marginBottom:s+"px",color:""+M.primary1,borderRadius:A.radius20,backgroundColor:M.white,overflow:"hidden"},a["&:last-child"]={marginBottom:0},a),header:Object.assign({display:"flex",alignItems:"center",justifyContent:"space-between",height:f[p]},o(l,p),S[r[p]],{fontWeight:700,cursor:"pointer"}),icon:{transform:""+(!P&&"rotate(180deg)")},detail:{margin:0},divider:{height:"1px",margin:"0 "+L.spacing30,backgroundColor:M.outline},content:Object.assign({margin:0},o(l,p),S[r.small])}}),y=e("./node_modules/react/jsx-runtime.js"),b=["header","content","handleHeader"];function c(l,u){return D(l)||_(l,u)||k(l,u)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(l,u){if(l){if(typeof l=="string")return x(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(l,u)}}function x(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,p=new Array(u);a<u;a++)p[a]=l[a];return p}function _(l,u){var a=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var p,s,h,P,M=[],A=!0,S=!1;try{if(h=(a=a.call(l)).next,u===0){if(Object(a)!==a)return;A=!1}else for(;!(A=(p=h.call(a)).done)&&(M.push(p.value),M.length!==u);A=!0);}catch(L){S=!0,s=L}finally{try{if(!A&&a.return!=null&&(P=a.return(),Object(P)!==P))return}finally{if(S)throw s}}return M}}function D(l){if(Array.isArray(l))return l}function W(l,u){if(l==null)return{};var a=B(l,u),p,s;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(s=0;s<h.length;s++)p=h[s],!(u.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(l,p)&&(a[p]=l[p])}return a}function B(l,u){if(l==null)return{};var a={},p=Object.keys(l),s,h;for(h=0;h<p.length;h++)s=p[h],!(u.indexOf(s)>=0)&&(a[s]=l[s]);return a}var I={small:16,medium:24},O=function(u){var a=u.header,p=u.content,s=u.handleHeader,h=W(u,b),P=Object(n.useState)(!0),M=c(P,2),A=M[0],S=M[1],L=Object(n.useContext)(j.b),U=L.type,Y=L.gap,re=v({type:U,gap:Y,isCollapse:A}),ce=re.classes,q=re.cx,ie=function(){S(function(de){return!de}),s==null||s()};return Object(y.jsxs)("div",Object.assign({className:ce.item},h,{children:[Object(y.jsxs)("dt",{className:ce.header,onClick:ie,children:[a,Object(y.jsx)(i.a,{className:q(ce.icon),src:"IcAngleDown",width:I[U]})]}),Object(y.jsxs)("dd",{className:ce.detail,children:[Object(y.jsx)("div",{className:ce.divider}),Object(y.jsx)("p",{className:ce.content,children:p})]})]}))};O.displayName="AccordionItem",O.displayName="AccordionItem"},"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { AccordionItem } from \\"../AccordionItem\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accoridion/AccordionItem\\",\\n  component: AccordionItem,\\n  argTypes: {\\n    header: {\\n      control: { type: \\"text\\" },\\n      description: \\"AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n    },\\n    content: {\\n      control: { type: \\"text\\" },\\n      description: \\"AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":29},"endLoc":{"col":1,"line":39},"startBody":{"col":23,"line":29},"endBody":{"col":1,"line":39}}};
    
import { Meta } from "@storybook/react";
import { AccordionItem } from "../AccordionItem";

export default {
  title: "@travelmakers-design-v2/core/General/Accoridion/AccordionItem",
  component: AccordionItem,
  argTypes: {
    header: {
      control: { type: "text" },
      description: "AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    content: {
      control: { type: "text" },
      description: "AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <AccordionItem
        header={"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?"}
        content={"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."}
        {...props}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:47},startBody:{col:23,line:37},endBody:{col:1,line:47}}},G=`import { Meta } from "@storybook/react";
import { AccordionItem } from "../AccordionItem";

export default {
  title: "@travelmakers-design-v2/core/General/Accoridion/AccordionItem",
  component: AccordionItem,
  argTypes: {
    header: {
      control: { type: "text" },
      description: "AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    content: {
      control: { type: "text" },
      description: "AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <AccordionItem
        header={"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?"}
        content={"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."}
        {...props}
      />
    </div>
  );
};
`,z={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:39},startBody:{col:23,line:29},endBody:{col:1,line:39}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { AccordionItem } from \\"../AccordionItem\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Accoridion/AccordionItem\\",\\n  component: AccordionItem,\\n  argTypes: {\\n    header: {\\n      control: { type: \\"text\\" },\\n      description: \\"AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n    },\\n    content: {\\n      control: { type: \\"text\\" },\\n      description: \\"AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":29},"endLoc":{"col":1,"line":39},"startBody":{"col":23,"line":29},"endBody":{"col":1,"line":39}}};
    
import { Meta } from "@storybook/react";
import { AccordionItem } from "../AccordionItem";

export default {
  title: "@travelmakers-design-v2/core/General/Accoridion/AccordionItem",
  component: AccordionItem,
  argTypes: {
    header: {
      control: { type: "text" },
      description: "AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    content: {
      control: { type: "text" },
      description: "AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <AccordionItem
        header={"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?"}
        content={"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."}
        {...props}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:47},startBody:{col:23,line:37},endBody:{col:1,line:47}}}}},title:"@travelmakers-design-v2/core/General/Accoridion/AccordionItem",component:w.a,argTypes:{header:{control:{type:"text"},description:"AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}}},content:{control:{type:"text"},description:"AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}}}}};var d=function(R){return Object(F.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(F.jsx)(w.a,Object.assign({header:"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?",content:"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."},R))})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <AccordionItem
        header={"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?"}
        content={"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."}
        {...props}
      />
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return r});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=function(v,y,b){if(y!=="bullet")switch(b){case"small":return v.typography.caption;case"medium":return v.typography.body3;case"large":return v.typography.body2;default:break}},H=function(v,y){switch(y){case"text":return{display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,borderRadius:"6px"};case"number":return{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0 "+v.spacing.spacing10,borderRadius:v.radius.radius100};case"bullet":return{borderRadius:v.radius.radius100};default:break}},R=function(v,y,b){var c={text:{small:{width:"16px",height:"16px"},medium:{width:"20px",height:"20px"},large:{width:"24px",height:"24px"},xLarge:{}},number:{small:{height:"16px"},medium:{height:"20px"},large:{height:"24px"},xLarge:{}},bullet:{small:{width:"8px",height:"8px"},medium:{width:"16px",height:"16px"},large:{width:"20px",height:"20px"},xLarge:{width:"24px",height:"24px"}}};return Object.assign({},c[y][b],H(v,y))},N=Object(z.a)(function(o,v){var y=v.type,b=v.size,c=o.colors;return{badge:Object.assign({color:c.onError,backgroundColor:c.error},R(o,y,b),d(o,y,b))}}),V=e("./node_modules/react/jsx-runtime.js"),C=["type","size","className","component","label"];function t(o,v){if(o==null)return{};var y=n(o,v),b,c;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(o);for(c=0;c<T.length;c++)b=T[c],!(v.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(o,b)&&(y[b]=o[b])}return y}function n(o,v){if(o==null)return{};var y={},b=Object.keys(o),c,T;for(T=0;T<b.length;T++)c=b[T],!(v.indexOf(c)>=0)&&(y[c]=o[c]);return y}var i=Object(E.forwardRef)(function(o,v){var y=o.type,b=o.size,c=o.className,T=o.component,k=o.label,x=t(o,C);Object(E.useEffect)(function(){y!=="bullet"&&b==="xLarge"&&console.error('"xLarge" size\uB294 type\uC774 "bullet"\uC758 \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.')},[y,b]);var _=N({type:y,size:b}),D=_.classes,W=_.cx,B=function(){return!k&&y==="text"?"N":!k&&y==="number"?0:k};return Object(V.jsx)(G.a,Object.assign({component:T||"div",ref:v,className:W(D.badge,c)},x,{children:B()}))});i.displayName="DotBadge";var j=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { DotBadge } from \\"../DotBadge\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Badge/DotBadge\\",\\n  component: DotBadge,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"text\\", \\"number\\", \\"bullet\\"] },\\n      defaultValue: \\"text\\",\\n      description: \\"DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    size: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\", \\"large\\", \\"xLarge\\"],\\n      },\\n      defaultValue: \\"small\\",\\n      description: \\"DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":36},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":36}}};
    
import { Meta } from "@storybook/react";
import { DotBadge } from "../DotBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/DotBadge",
  component: DotBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["text", "number", "bullet"] },
      defaultValue: "text",
      description: "DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large", "xLarge"],
      },
      defaultValue: "small",
      description: "DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <DotBadge type="text" size="medium" {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n}" }, ...Default.parameters };`,m={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}},j=`import { Meta } from "@storybook/react";
import { DotBadge } from "../DotBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/DotBadge",
  component: DotBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["text", "number", "bullet"] },
      defaultValue: "text",
      description: "DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large", "xLarge"],
      },
      defaultValue: "small",
      description: "DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <DotBadge type="text" size="medium" {...props} />;
};
`,m={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},f=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { DotBadge } from \\"../DotBadge\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Badge/DotBadge\\",\\n  component: DotBadge,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"text\\", \\"number\\", \\"bullet\\"] },\\n      defaultValue: \\"text\\",\\n      description: \\"DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    size: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\", \\"large\\", \\"xLarge\\"],\\n      },\\n      defaultValue: \\"small\\",\\n      description: \\"DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":34},"endLoc":{"col":1,"line":36},"startBody":{"col":23,"line":34},"endBody":{"col":1,"line":36}}};
    
import { Meta } from "@storybook/react";
import { DotBadge } from "../DotBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/DotBadge",
  component: DotBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["text", "number", "bullet"] },
      defaultValue: "text",
      description: "DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large", "xLarge"],
      },
      defaultValue: "small",
      description: "DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <DotBadge type="text" size="medium" {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}}}},title:"@travelmakers-design-v2/core/General/Badge/DotBadge",component:i,argTypes:{type:{control:{type:"radio",options:["text","number","bullet"]},defaultValue:"text",description:"DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","medium","large","xLarge"]},defaultValue:"small",description:"DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},r=function(v){return Object(V.jsx)(i,Object.assign({type:"text",size:"medium"},v))};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return <DotBadge type="text" size="medium" {...props} />;
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return t});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(n){var i=n.colors,j=n.typography;return{root:Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",color:i.primary3,columnGap:"3px"},j.body3),vertical:{width:"1px",height:"10px",backgroundColor:i.primary3}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","grade","hotelType","className"];function V(n,i){if(n==null)return{};var j=C(n,i),m,f;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(f=0;f<r.length;f++)m=r[f],!(i.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(n,m)&&(j[m]=n[m])}return j}function C(n,i){if(n==null)return{};var j={},m=Object.keys(n),f,r;for(r=0;r<m.length;r++)f=m[r],!(i.indexOf(f)>=0)&&(j[f]=n[f]);return j}var t=Object(E.forwardRef)(function(n,i){var j=n.type,m=n.grade,f=n.hotelType,r=n.className,o=V(n,N),v=H(),y=v.classes,b=v.cx,c=function(){if(j==="grade")return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(G.a,{src:"IcStar",width:16,height:16}),m+"\uC131\uAE09",Object(R.jsx)("div",{className:y.vertical}),f!=null?f:"\uD638\uD154"]});if(j==="minihotel")return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(G.a,{src:"IcHotelTypeMini",width:16,height:16}),Object(R.jsx)("div",{className:y.vertical}),f!=null?f:"\uBBF8\uB2C8\uD638\uD154"]});if(j==="residence")return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(G.a,{src:"IcHotelTypeResidence",width:16,height:16}),Object(R.jsx)("div",{className:y.vertical}),f!=null?f:"\uB808\uC9C0\uB358\uC2A4"]})};return Object(R.jsx)(z.a,Object.assign({component:"div",ref:i,className:b(y.root,r)},o,{children:c()}))});t.displayName="GradeBadge"},"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { GradeBadge } from \\"../GradeBadge\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Badge/GradeBadge\\",\\n  component: GradeBadge,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"grade\\", \\"minihotel\\", \\"residence\\"] },\\n      defaultValue: \\"grade\\",\\n      description: \\"GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    grade: {\\n      control: { type: \\"select\\", options: [1, 2, 3, 4, 5] },\\n      defaultValue: 5,\\n      description: \\"\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n    hotelType: {\\n      control: { type: \\"string\\" },\\n      description: \\"\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":40},"endLoc":{"col":1,"line":42},"startBody":{"col":23,"line":40},"endBody":{"col":1,"line":42}}};
    
import { Meta } from "@storybook/react";
import { GradeBadge } from "../GradeBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/GradeBadge",
  component: GradeBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["grade", "minihotel", "residence"] },
      defaultValue: "grade",
      description: "GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    grade: {
      control: { type: "select", options: [1, 2, 3, 4, 5] },
      defaultValue: 5,
      description: "\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    hotelType: {
      control: { type: "string" },
      description: "\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <GradeBadge type={"grade"} {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:48},endLoc:{col:1,line:50},startBody:{col:23,line:48},endBody:{col:1,line:50}}},G=`import { Meta } from "@storybook/react";
import { GradeBadge } from "../GradeBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/GradeBadge",
  component: GradeBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["grade", "minihotel", "residence"] },
      defaultValue: "grade",
      description: "GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    grade: {
      control: { type: "select", options: [1, 2, 3, 4, 5] },
      defaultValue: 5,
      description: "\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    hotelType: {
      control: { type: "string" },
      description: "\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <GradeBadge type={"grade"} {...props} />;
};
`,z={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:42},startBody:{col:23,line:40},endBody:{col:1,line:42}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { GradeBadge } from \\"../GradeBadge\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Badge/GradeBadge\\",\\n  component: GradeBadge,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"grade\\", \\"minihotel\\", \\"residence\\"] },\\n      defaultValue: \\"grade\\",\\n      description: \\"GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    grade: {\\n      control: { type: \\"select\\", options: [1, 2, 3, 4, 5] },\\n      defaultValue: 5,\\n      description: \\"\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n    hotelType: {\\n      control: { type: \\"string\\" },\\n      description: \\"\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":40},"endLoc":{"col":1,"line":42},"startBody":{"col":23,"line":40},"endBody":{"col":1,"line":42}}};
    
import { Meta } from "@storybook/react";
import { GradeBadge } from "../GradeBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/GradeBadge",
  component: GradeBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["grade", "minihotel", "residence"] },
      defaultValue: "grade",
      description: "GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    grade: {
      control: { type: "select", options: [1, 2, 3, 4, 5] },
      defaultValue: 5,
      description: "\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    hotelType: {
      control: { type: "string" },
      description: "\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <GradeBadge type={"grade"} {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:48},endLoc:{col:1,line:50},startBody:{col:23,line:48},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/core/General/Badge/GradeBadge",component:w.a,argTypes:{type:{control:{type:"radio",options:["grade","minihotel","residence"]},defaultValue:"grade",description:"GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},grade:{control:{type:"select",options:[1,2,3,4,5]},defaultValue:5,description:"\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}}},hotelType:{control:{type:"string"},description:"\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var d=function(R){return Object(F.jsx)(w.a,Object.assign({type:"grade"},R))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <GradeBadge type={"grade"} {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return r});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H={small:"28px",medium:"34px"},R=Object(d.a)(function(o,v){var y=v.type,b=o.colors,c=o.spacing;return{root:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:H[y],padding:"0 "+c.spacing30,backgroundColor:b.secondary}}}),N=e("./node_modules/react/jsx-runtime.js"),V=["type","className","component","children"];function C(o,v){if(o==null)return{};var y=t(o,v),b,c;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(o);for(c=0;c<T.length;c++)b=T[c],!(v.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(o,b)&&(y[b]=o[b])}return y}function t(o,v){if(o==null)return{};var y={},b=Object.keys(o),c,T;for(T=0;T<b.length;T++)c=b[T],!(v.indexOf(c)>=0)&&(y[c]=o[c]);return y}var n={small:"display6",medium:"display4"},i=Object(E.forwardRef)(function(o,v){var y=o.type,b=o.className,c=o.component,T=o.children,k=C(o,V),x=R({type:y}),_=x.classes,D=x.cx;return Object(N.jsx)(z.a,Object.assign({component:c||"div",ref:v,className:D(_.root,b)},k,{children:Object(N.jsx)(G.a,{family:"Noto Serif KR",level:n[y],color:"white",children:T||"New"})}))});i.displayName="NewBadge";var j=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NewBadge } from \\"../NewBadge\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Badge/NewBadge\\",\\n  component: NewBadge,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"small\\", \\"medium\\"] },\\n      defaultValue: \\"small\\",\\n      description: \\"\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":21},"endLoc":{"col":1,"line":23},"startBody":{"col":23,"line":21},"endBody":{"col":1,"line":23}}};
    
import { Meta } from "@storybook/react";
import { NewBadge } from "../NewBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/NewBadge",
  component: NewBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["small", "medium"] },
      defaultValue: "small",
      description: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NewBadge type="small" {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n}" }, ...Default.parameters };`,m={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},j=`import { Meta } from "@storybook/react";
import { NewBadge } from "../NewBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/NewBadge",
  component: NewBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["small", "medium"] },
      defaultValue: "small",
      description: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NewBadge type="small" {...props} />;
};
`,m={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},f=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NewBadge } from \\"../NewBadge\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Badge/NewBadge\\",\\n  component: NewBadge,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"small\\", \\"medium\\"] },\\n      defaultValue: \\"small\\",\\n      description: \\"\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":21},"endLoc":{"col":1,"line":23},"startBody":{"col":23,"line":21},"endBody":{"col":1,"line":23}}};
    
import { Meta } from "@storybook/react";
import { NewBadge } from "../NewBadge";

export default {
  title: "@travelmakers-design-v2/core/General/Badge/NewBadge",
  component: NewBadge,
  argTypes: {
    type: {
      control: { type: "radio", options: ["small", "medium"] },
      defaultValue: "small",
      description: "\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NewBadge type="small" {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design-v2/core/General/Badge/NewBadge",component:i,argTypes:{type:{control:{type:"radio",options:["small","medium"]},defaultValue:"small",description:"\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},r=function(v){return Object(N.jsx)(i,Object.assign({type:"small"},v))};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return <NewBadge type="small" {...props} />;
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Small",function(){return A});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),E=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),d=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),C=e("./node_modules/core-js/modules/es.array.slice.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/core-js/modules/es.array.map.js"),i=e("./node_modules/core-js/modules/es.function.name.js"),j=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),m=e("./node_modules/react/index.js"),f=e("./node_modules/next/link.js"),r=e.n(f),o=e("./node_modules/react/jsx-runtime.js"),v=function(L){var U;return Object(o.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L,{children:Object(o.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77041 12.1824C6.42649 12.4149 6.22223 12.7914 6.22223 13.1928V23.9181C6.22223 24.9452 7.09776 25.7778 8.17779 25.7778H12.8148C13.6739 25.7778 14.3704 25.0813 14.3704 24.2222V22.5185C14.3704 21.6185 15.1 20.8889 16 20.8889C16.9 20.8889 17.6296 21.6185 17.6296 22.5185V24.2222C17.6296 25.0813 18.3261 25.7778 19.1852 25.7778H23.8222C24.9023 25.7778 25.7778 24.9452 25.7778 23.9181V13.1928C25.7778 12.7914 25.5735 12.4149 25.2296 12.1824L16.7555 6.45165C16.3032 6.14576 15.6968 6.14575 15.2445 6.45165L6.77041 12.1824Z",fill:(U=L.color)!==null&&U!==void 0?U:"#BABABA"})}))};v.displayName="IconHome";var y=function(L){var U;return Object(o.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L,{children:Object(o.jsx)("path",{d:"M20.1893 20.2214L24.8889 24.8889M22.4985 14.7588C22.4985 18.9825 19.0539 22.4064 14.8048 22.4064C10.5557 22.4064 7.11111 18.9825 7.11111 14.7588C7.11111 10.5351 10.5557 7.11111 14.8048 7.11111C19.0539 7.11111 22.4985 10.5351 22.4985 14.7588Z",stroke:(U=L.color)!==null&&U!==void 0?U:"#BABABA","stroke-width":"2","stroke-linecap":"round"})}))};y.displayName="IconSearch";var b=function(L){var U,Y;return Object(o.jsxs)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L,{children:[Object(o.jsx)("path",{d:"M7.11112 24.6155C7.11112 24.5764 7.11112 24.5375 7.11112 24.4987C7.11111 23.2776 7.17233 22.0401 7.60385 20.8978C8.7515 17.86 11.4435 15.1111 16 15.1111C20.5565 15.1111 23.2484 17.8599 24.3961 20.8977C24.8277 22.04 24.8889 23.2777 24.8889 24.4988C24.8889 24.5376 24.8889 24.5765 24.8889 24.6155C24.8889 25.2574 24.4519 25.7778 23.9129 25.7778H8.08715C7.5481 25.7778 7.11112 25.2574 7.11112 24.6155Z",fill:(U=L.color)!==null&&U!==void 0?U:"#BABABA"}),Object(o.jsx)("circle",{cx:"16",cy:"9.77778",r:"3.55556",fill:(Y=L.color)!==null&&Y!==void 0?Y:"#BABABA"})]}))};b.displayName="IconMypage";var c=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),T=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),k=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function x(S){if(S==null)throw new TypeError("Cannot destructure "+S)}var _=Object(k.a)(function(S,L,U){var Y;return x(L),{root:{backgroundColor:S.colors.neutral99,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:S.spacing.spacing10+" "+S.spacing.spacing50,gap:"80px",height:"64px",width:"100%",a:{textDecoration:"none"}},item:(Y={display:"flex",flexDirection:"column",alignItems:"center",height:"48px"},Y["& > svg"]={width:"32px",height:"32px"},Y)}}),D=["onClick","initSelectedId","children","component","className","overrideStyles","links"];function W(S,L){return u(S)||l(S,L)||I(S,L)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(S,L){if(S){if(typeof S=="string")return O(S,L);var U=Object.prototype.toString.call(S).slice(8,-1);if(U==="Object"&&S.constructor&&(U=S.constructor.name),U==="Map"||U==="Set")return Array.from(S);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return O(S,L)}}function O(S,L){(L==null||L>S.length)&&(L=S.length);for(var U=0,Y=new Array(L);U<L;U++)Y[U]=S[U];return Y}function l(S,L){var U=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(U!=null){var Y,re,ce,q,ie=[],te=!0,de=!1;try{if(ce=(U=U.call(S)).next,L===0){if(Object(U)!==U)return;te=!1}else for(;!(te=(Y=ce.call(U)).done)&&(ie.push(Y.value),ie.length!==L);te=!0);}catch(ue){de=!0,re=ue}finally{try{if(!te&&U.return!=null&&(q=U.return(),Object(q)!==q))return}finally{if(de)throw re}}return ie}}function u(S){if(Array.isArray(S))return S}function a(S,L){if(S==null)return{};var U=p(S,L),Y,re;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(S);for(re=0;re<ce.length;re++)Y=ce[re],!(L.indexOf(Y)>=0)&&Object.prototype.propertyIsEnumerable.call(S,Y)&&(U[Y]=S[Y])}return U}function p(S,L){if(S==null)return{};var U={},Y=Object.keys(S),re,ce;for(ce=0;ce<Y.length;ce++)re=Y[ce],!(L.indexOf(re)>=0)&&(U[re]=S[re]);return U}var s=Object(m.forwardRef)(function(S,L){var U=S.onClick,Y=S.initSelectedId,re=Y===void 0?0:Y,ce=S.children,q=S.component,ie=S.className,te=S.overrideStyles,de=S.links,ue=de===void 0?[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}]:de,fe=a(S,D),ve=Object(j.c)(),be=Object(m.useState)(re),ge=W(be,2),xe=ge[0],Ce=ge[1],De=Object(m.useState)("neutral70"),Te=W(De,2),Be=Te[0],Oe=Te[1],Ne=Object(m.useState)("neutral70"),Me=W(Ne,2),ke=Me[0],Ve=Me[1],Ae=Object(m.useState)("neutral70"),we=W(Ae,2),He=we[0],Pe=we[1],_e=[Be,ke,He],We=[Oe,Ve,Pe],Re=_({},{overrideStyles:te,name:"BottomBar"}),Ee=Re.classes,Ue=Re.cx,se=[{icon:Object(o.jsx)(v,{color:xe===0?ve.colors.secondary:ve.colors[Be]})},{icon:Object(o.jsx)(y,{color:xe===1?ve.colors.secondary:ve.colors[ke]})},{icon:Object(o.jsx)(b,{color:xe===2?ve.colors.secondary:ve.colors[He]})}],ne=function(Q,J){J!==xe&&We[J](Q)};return Object(o.jsx)(T.a,Object.assign({component:q||"div",ref:L,className:Ue(Ee.root,ie)},fe,{children:se==null?void 0:se.map(function(le,Q){return Object(o.jsxs)(r.a,{onClick:function(){Ce(Q),U==null||U(Q)},href:ue[Q].url,className:Ue(Ee.item),onMouseOver:function(){return ne("primary",Q)},onMouseLeave:function(){return ne("neutral70",Q)},onMouseDown:function(){return ne("primaryInteract",Q)},onMouseUp:function(){return ne("neutral70",Q)},children:[le.icon,Object(o.jsx)(c.a,{level:"caption",color:xe===Q?"secondary":_e[Q],children:ue[Q].name})]})})}))});s.displayName="BottomBar";var h=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { BottomBar } from \\"../BottomBar\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/BottomBar\\",\\n  component: BottomBar,\\n  argTypes: {\\n    initSelectedId: {\\n      defaultValue: 0,\\n      description: \\"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    links: {\\n      defaultValue: [\\n        { name: \\"\uB458\uB7EC\uBCF4\uAE30\\", url: \\"/\\" },\\n        { name: \\"\uD0D0\uC0C9\\", url: \\"/\\" },\\n        { name: \\"\uB9C8\uC774\uD398\uC774\uC9C0\\", url: \\"/\\" },\\n      ],\\n      description: \\"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":60},"endLoc":{"col":1,"line":66},"startBody":{"col":21,"line":60},"endBody":{"col":1,"line":66}}};
    
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



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n}" }, ...Small.parameters };`,P={Small:{startLoc:{col:21,line:68},endLoc:{col:1,line:74},startBody:{col:21,line:68},endBody:{col:1,line:74}}},h=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
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
`,P={Small:{startLoc:{col:21,line:60},endLoc:{col:1,line:66},startBody:{col:21,line:60},endBody:{col:1,line:66}}},M=g.default={title:"@travelmakers-design-v2/core/General/BottomBar",component:s,argTypes:{initSelectedId:{defaultValue:0,description:"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},links:{defaultValue:[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}],description:"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { BottomBar } from \\"../BottomBar\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/BottomBar\\",\\n  component: BottomBar,\\n  argTypes: {\\n    initSelectedId: {\\n      defaultValue: 0,\\n      description: \\"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    links: {\\n      defaultValue: [\\n        { name: \\"\uB458\uB7EC\uBCF4\uAE30\\", url: \\"/\\" },\\n        { name: \\"\uD0D0\uC0C9\\", url: \\"/\\" },\\n        { name: \\"\uB9C8\uC774\uD398\uC774\uC9C0\\", url: \\"/\\" },\\n      ],\\n      description: \\"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Small = (props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Small":{"startLoc":{"col":21,"line":60},"endLoc":{"col":1,"line":66},"startBody":{"col":21,"line":60},"endBody":{"col":1,"line":66}}};
    
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



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n}" }, ...Small.parameters };`,locationsMap:{small:{startLoc:{col:21,line:68},endLoc:{col:1,line:74},startBody:{col:21,line:68},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)($.g,{}),Object(o.jsx)($.f,{}),Object(o.jsx)($.b,{}),Object(o.jsx)($.d,{}),Object(o.jsx)($.a,{story:$.c}),Object(o.jsx)($.e,{})]})}}}},A=function(L){return Object(o.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(o.jsx)(s,Object.assign({},L))})};A.displayName="Small",A.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
}`}},A.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H={small:28,medium:40,large:48},R=Object(d.a)(function(i,j){var m,f=j.size,r=j.variant,o=j.fullWidth,v=j.roundness,y=i.radius,b=i.spacing,c=i.colors,T=i.palettes,k=i.shadows,x=r==="secondary",_=r==="text";return{root:{width:o&&"100%",height:H[f],padding:_?0:"0 "+b.spacing50,borderRadius:v?y.radius100:y.radius20,cursor:"pointer"},inner:{display:"flex",gap:b.spacing10,alignItems:"center",justifyContent:"center"},icon:{display:"flex",alignItems:"center"},label:{whiteSpace:"nowrap",overflow:"hidden",display:"flex",alignItems:"center"},solid:(m={color:T[r][5],backgroundColor:T[r][0],border:x?"1px solid "+c.primary:"none"},m[":not(:disabled)"]={"&:hover":{boxShadow:_?k.none:k.elevation1,filter:_?"drop-shadow("+k.elevation1+")":k.none},"&:focus-visible":{color:T[r][4],boxShadow:_?k.none:k.elevation1},"&:active":{color:T[r][4],backgroundColor:T[r][1],boxShadow:k.none+" !important"}},m["&:disabled"]={backgroundColor:T[r][2],border:x?"1px solid "+T[r][3]:"none",color:T[r][3],cursor:"auto"},m)}}),N=e("./node_modules/react/jsx-runtime.js"),V=["size","variant","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","children"];function C(i,j){if(i==null)return{};var m=t(i,j),f,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)f=o[r],!(j.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(m[f]=i[f])}return m}function t(i,j){if(i==null)return{};var m={},f=Object.keys(i),r,o;for(o=0;o<f.length;o++)r=f[o],!(j.indexOf(r)>=0)&&(m[r]=i[r]);return m}var n=Object(E.forwardRef)(function(i,j){var m=i.size,f=m===void 0?"small":m,r=i.variant,o=r===void 0?"primary":r,v=i.roundness,y=v===void 0?!1:v,b=i.fullWidth,c=b===void 0?!1:b,T=i.type,k=T===void 0?"button":T,x=i.disabled,_=x===void 0?!1:x,D=i.leftIcon,W=D===void 0?"":D,B=i.rightIcon,I=B===void 0?"":B,O=i.className,l=i.children,u=C(i,V),a=R({size:f,variant:o,fullWidth:c,roundness:y}),p=a.classes,s=a.cx;return Object(N.jsx)(z.a,Object.assign({component:"button",ref:j,type:k,disabled:_,className:s(p.root,p.solid,O)},u,{children:Object(N.jsxs)("div",{className:p.inner,children:[W&&Object(N.jsx)("span",{className:s(p.icon),children:W}),Object(N.jsx)(G.a,{level:f==="small"?"body3":f==="medium"?"body2":"body1",className:p.label,children:l}),I&&Object(N.jsx)("span",{className:s(p.icon),children:I})]})}))});n.displayName="Button"},"./packages/travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return H});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),F=e("./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx"),E=e("./node_modules/react/jsx-runtime.js"),G=e.n(E),z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { Button } from \\"../Button\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\", \\"error\\", \\"tonal\\", \\"text\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":110},"endLoc":{"col":1,"line":116},"startBody":{"col":23,"line":110},"endBody":{"col":1,"line":116}}};
    
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
import { Button } from "../Button";

export default {
  title: "@travelmakers-design-v2/core/General/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary", "error", "tonal", "text"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}},z=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "@travelmakers-design-v2/core/General/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary", "error", "tonal", "text"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};
`,d={Default:{startLoc:{col:23,line:110},endLoc:{col:1,line:116},startBody:{col:23,line:110},endBody:{col:1,line:116}}};g.default={title:"@travelmakers-design-v2/core/General/Button",component:F.a,argTypes:{size:{defaultValue:"small",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary","error","tonal","text"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { Button } from \\"../Button\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Button\\",\\n  component: Button,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\", \\"tertiary\\", \\"error\\", \\"tonal\\", \\"text\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fullWidth: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    leftIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n    rightIcon: {\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":110},"endLoc":{"col":1,"line":116},"startBody":{"col":23,"line":110},"endBody":{"col":1,"line":116}}};
    
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
import { Button } from "../Button";

export default {
  title: "@travelmakers-design-v2/core/General/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary", "tertiary", "error", "tonal", "text"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    roundness: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      control: { type: "text" },
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w.g,{}),Object(E.jsx)(w.f,{}),Object(E.jsx)(w.b,{}),Object(E.jsx)(w.d,{}),Object(E.jsx)(w.a,{story:w.c}),Object(E.jsx)(w.e,{})]})}},actions:{handles:["click button"]}}};var H=function(N){return Object(E.jsx)("div",{style:{margin:"0 auto"},children:Object(E.jsx)(F.a,Object.assign({},N,{children:"Button"}))})};H.displayName="Default",H.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},H.parameters)},"./packages/travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Icon",function(){return b});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),E=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./node_modules/react/index.js"),d=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),H=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),R=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N,V,C={small:(N={width:"24px",height:"24px"},N["& > svg"]={width:"12px"},N),medium:(V={width:"32px",height:"32px"},V["& > svg"]={width:"16px"},V)},t=Object(R.a)(function(c,T){var k,x=T.size,_=T.variant,D=T.buttonTheme,W=function(u){switch(u){case"active":return I();case"disabled":return O();default:return B()}},B=function(){return _==="secondary"?{backgroundColor:c.colors.transparent,border:"1px solid "+(D==="light"?c.colors.white:c.colors.primary)}:D==="dark"?{backgroundColor:c.colors.primary,border:"none"}:{backgroundColor:c.colors.white,border:"none"}},I=function(){return _==="secondary"?{backgroundColor:c.colors.transparent,border:"1px solid "+(D==="light"?c.colors.surface:c.colors.primaryInteract)}:D==="dark"?{backgroundColor:c.colors.primaryInteract}:{backgroundColor:c.colors.surface}},O=function(){return _==="secondary"?{backgroundColor:c.colors.transparent,border:"1px solid "+c.colors.primaryContainer}:D==="dark"?{backgroundColor:c.colors.primaryContainer}:{backgroundColor:c.colors.primaryContainer}};return{button:Object.assign({},C[x],{borderRadius:c.spacing.spacing100},W("default"),(k={cursor:"pointer"},k[":not(:disabled)"]={"&:hover":{boxShadow:c.shadows.elevation1},"&:focus-visible":{boxShadow:c.shadows.elevation1},"&:active":Object.assign({},W("active"),{boxShadow:"none !important"})},k["&:disabled"]=Object.assign({},W("disabled"),{cursor:"auto"}),k))}}),n=e("./node_modules/react/jsx-runtime.js"),i=["size","variant","disabled","type","buttonTheme","className"];function j(c,T){if(c==null)return{};var k=m(c,T),x,_;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(c);for(_=0;_<D.length;_++)x=D[_],!(T.indexOf(x)>=0)&&Object.prototype.propertyIsEnumerable.call(c,x)&&(k[x]=c[x])}return k}function m(c,T){if(c==null)return{};var k={},x=Object.keys(c),_,D;for(D=0;D<x.length;D++)_=x[D],!(T.indexOf(_)>=0)&&(k[_]=c[_]);return k}var f={prev:"\uC774\uC804",next:"\uB2E4\uC74C"},r=Object(z.forwardRef)(function(c,T){var k=c.size,x=c.variant,_=x===void 0?"primary":x,D=c.disabled,W=c.type,B=c.buttonTheme,I=B===void 0?"dark":B,O=c.className,l=j(c,i),u=t({size:k,variant:_,buttonTheme:I}),a=u.classes,p=u.cx,s=Object(G.c)(),h=function(M,A,S){if(A==="secondary")if(S){if(M==="dark"||M==="light")return s.colors.primaryContainer}else{if(M==="dark")return s.colors.primary;if(M==="light")return s.colors.white}else{if(S)return s.colors.white;if(M==="dark")return s.colors.white;if(M==="light")return s.colors.primary}};return Object(n.jsx)(H.a,Object.assign({component:"button",ref:T,type:"button",disabled:D,className:p(O,a.button),"aria-label":f[W]},l,{children:W==="prev"?Object(n.jsx)(d.a,{src:"IcAngleLeft",color:h(I,_,D)}):Object(n.jsx)(d.a,{src:"IcAngleRight",color:h(I,_,D)})}))});r.displayName="ButtonIcon";var o=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { ButtonIcon } from \\"../ButtonIcon\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Button\\",\\n  component: ButtonIcon,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    buttonTheme: {\\n      defaultValue: \\"light\\",\\n      description: \\"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"light\\", \\"dark\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"prev\\",\\n      description: \\"ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.\\",\\n      options: [\\"prev\\", \\"next\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Icon = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Icon":{"startLoc":{"col":20,"line":92},"endLoc":{"col":1,"line":98},"startBody":{"col":20,"line":92},"endBody":{"col":1,"line":98}}};
    
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
import { ButtonIcon } from "../ButtonIcon";

export default {
  title: "@travelmakers-design-v2/core/General/Button",
  component: ButtonIcon,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    buttonTheme: {
      defaultValue: "light",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["light", "dark"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "prev",
      description: "ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.",
      options: ["prev", "next"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Icon = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>
    </div>
  );
};



Icon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n}" }, ...Icon.parameters };`,v={Icon:{startLoc:{col:20,line:100},endLoc:{col:1,line:106},startBody:{col:20,line:100},endBody:{col:1,line:106}}},o=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Meta } from "@storybook/react";
import { ButtonIcon } from "../ButtonIcon";

export default {
  title: "@travelmakers-design-v2/core/General/Button",
  component: ButtonIcon,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    buttonTheme: {
      defaultValue: "light",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["light", "dark"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "prev",
      description: "ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.",
      options: ["prev", "next"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Icon = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>
    </div>
  );
};
`,v={Icon:{startLoc:{col:20,line:92},endLoc:{col:1,line:98},startBody:{col:20,line:92},endBody:{col:1,line:98}}},y=g.default={title:"@travelmakers-design-v2/core/General/Button",component:r,argTypes:{size:{defaultValue:"small",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},buttonTheme:{defaultValue:"light",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["light","dark"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"prev",description:"ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.",options:["prev","next"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport { ButtonIcon } from \\"../ButtonIcon\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Button\\",\\n  component: ButtonIcon,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    variant: {\\n      defaultValue: \\"primary\\",\\n      description: \\"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    buttonTheme: {\\n      defaultValue: \\"light\\",\\n      description: \\"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"light\\", \\"dark\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    type: {\\n      defaultValue: \\"prev\\",\\n      description: \\"ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.\\",\\n      options: [\\"prev\\", \\"next\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Icon = (props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Icon":{"startLoc":{"col":20,"line":92},"endLoc":{"col":1,"line":98},"startBody":{"col":20,"line":92},"endBody":{"col":1,"line":98}}};
    
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
import { ButtonIcon } from "../ButtonIcon";

export default {
  title: "@travelmakers-design-v2/core/General/Button",
  component: ButtonIcon,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "medium"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "primary",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    buttonTheme: {
      defaultValue: "light",
      description: "ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["light", "dark"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "prev",
      description: "ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.",
      options: ["prev", "next"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Icon = (props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>
    </div>
  );
};



Icon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n}" }, ...Icon.parameters };`,locationsMap:{icon:{startLoc:{col:20,line:100},endLoc:{col:1,line:106},startBody:{col:20,line:100},endBody:{col:1,line:106}}}},docs:{page:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($.g,{}),Object(n.jsx)($.f,{}),Object(n.jsx)($.b,{}),Object(n.jsx)($.d,{}),Object(n.jsx)($.a,{story:$.c}),Object(n.jsx)($.e,{})]})}},actions:{handles:["click button"]}}},b=function(T){return Object(n.jsx)("div",{style:{margin:"0 auto"},children:Object(n.jsx)(r,Object.assign({},T,{children:"ButtonIcon"}))})};b.displayName="Icon",b.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return I}),e.d(g,"CalloutWithoutItems",function(){return O});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),R=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N=Object(R.a)(function(l,u){var a=u.type,p=l.colors,s=l.typography,h=l.spacing;return{root:Object.assign({display:"flex",alignItems:"center",color:p[i[a]]},s.body3,{fontWeight:700,columnGap:h.spacing10})}}),V=e("./node_modules/react/jsx-runtime.js"),C=["type","title"];function t(l,u){if(l==null)return{};var a=n(l,u),p,s;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(s=0;s<h.length;s++)p=h[s],!(u.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(l,p)&&(a[p]=l[p])}return a}function n(l,u){if(l==null)return{};var a={},p=Object.keys(l),s,h;for(h=0;h<p.length;h++)s=p[h],!(u.indexOf(s)>=0)&&(a[s]=l[s]);return a}var i={default:"secondary",warning:"error"},j=function(u){var a=u.type,p=u.title,s=t(u,C),h=Object(d.c)(),P=h.colors,M=N({type:a}),A=M.classes,S=M.cx;return Object(V.jsxs)("dt",Object.assign({className:S(A.root)},s,{children:[Object(V.jsx)(H.a,{src:"IcAlert",width:14,height:14,color:P[i[a]]}),p]}))};j.displayName="CalloutHeader",j.displayName="CalloutHeader";var m=Object(R.a)(function(l){var u=l.colors,a=l.typography;return{root:Object.assign({margin:0,color:u.onSurface},a.body3)}}),f=["content","isEmpty"];function r(l,u){if(l==null)return{};var a=o(l,u),p,s;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(s=0;s<h.length;s++)p=h[s],!(u.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(l,p)&&(a[p]=l[p])}return a}function o(l,u){if(l==null)return{};var a={},p=Object.keys(l),s,h;for(h=0;h<p.length;h++)s=p[h],!(u.indexOf(s)>=0)&&(a[s]=l[s]);return a}var v=function(u){var a=u.content,p=u.isEmpty,s=p===void 0?!1:p,h=r(u,f),P=m(),M=P.classes,A=P.cx;return Object(V.jsx)("dd",Object.assign({className:A(M.root,{"sr-only":s})},h,{children:a}))};v.displayName="CalloutItem";var y=Object(R.a)(function(l){var u=l.spacing,a=l.radius,p=l.colors;return{root:{display:"inline-flex",flexDirection:"column",rowGap:u.spacing10,margin:0,padding:u.spacing30,borderRadius:a.radius20,backgroundColor:p.surface}}}),b=["type","title","items","emptyText","className"];function c(l,u){if(l==null)return{};var a=T(l,u),p,s;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(s=0;s<h.length;s++)p=h[s],!(u.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(l,p)&&(a[p]=l[p])}return a}function T(l,u){if(l==null)return{};var a={},p=Object.keys(l),s,h;for(h=0;h<p.length;h++)s=p[h],!(u.indexOf(s)>=0)&&(a[s]=l[s]);return a}var k=Object(G.forwardRef)(function(l,u){var a=l.type,p=a===void 0?"default":a,s=l.title,h=l.items,P=h===void 0?[]:h,M=l.emptyText,A=M===void 0?"":M,S=l.className,L=c(l,b),U=P.length===0,Y=y(),re=Y.classes,ce=Y.cx,q=U?Object(V.jsx)(v,{content:A,isEmpty:!0}):P.map(function(ie,te){return Object(V.jsx)(v,{content:ie},te)});return Object(V.jsxs)(z.a,Object.assign({component:"dl",ref:u,className:ce(re.root,S)},L,{children:[Object(V.jsx)(j,{type:p,title:s}),q]}))});k.displayName="Callout";var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Callout } from \\"../Callout\\";\\n\\nconst data = { title: \\"\uD0C0\uC774\uD2C0\\", items: [\\"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.\\"] };\\nconst dataWithoutItems = { title: \\"\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)\\", items: [] };\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Callout\\",\\n  component: Callout,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"default\\", \\"warning\\"] },\\n      defaultValue: \\"default\\",\\n      description: \\"Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    title: {\\n      type: \\"string\\",\\n      description: \\"Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    items: {\\n      control: { type: \\"object\\" },\\n      description: \\"Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: [],\\n      table: {\\n        type: {\\n          summary: \\"string[]\\",\\n        },\\n      },\\n    },\\n    emptyText: {\\n      type: \\"string\\",\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Callout title={data.title} {...props} items={data.items} />;\\n};\\n\\nexport const CalloutWithoutItems = (props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":52},"endLoc":{"col":1,"line":54},"startBody":{"col":23,"line":52},"endBody":{"col":1,"line":54}},"CalloutWithoutItems":{"startLoc":{"col":35,"line":56},"endLoc":{"col":1,"line":64},"startBody":{"col":35,"line":56},"endBody":{"col":1,"line":64}}};
    
import { Meta } from "@storybook/react";
import { Callout } from "../Callout";

const data = { title: "\uD0C0\uC774\uD2C0", items: ["\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4."] };
const dataWithoutItems = { title: "\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)", items: [] };

export default {
  title: "@travelmakers-design-v2/core/General/Callout",
  component: Callout,
  argTypes: {
    type: {
      control: { type: "radio", options: ["default", "warning"] },
      defaultValue: "default",
      description: "Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      type: "string",
      description: "Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    items: {
      control: { type: "object" },
      description: "Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      defaultValue: [],
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    emptyText: {
      type: "string",
      defaultValue: "",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Callout title={data.title} {...props} items={data.items} />;
};;

export const CalloutWithoutItems = (props) => {
  return (
    <Callout
      title={dataWithoutItems.title}
      items={dataWithoutItems.items}
      {...props}
    />
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout title={data.title} {...props} items={data.items} />;\\n}" }, ...Default.parameters };
CalloutWithoutItems.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n}" }, ...CalloutWithoutItems.parameters };`,_={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:62},startBody:{col:23,line:60},endBody:{col:1,line:62}},CalloutWithoutItems:{startLoc:{col:35,line:64},endLoc:{col:1,line:72},startBody:{col:35,line:64},endBody:{col:1,line:72}}},x=`import { Meta } from "@storybook/react";
import { Callout } from "../Callout";

const data = { title: "\uD0C0\uC774\uD2C0", items: ["\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4."] };
const dataWithoutItems = { title: "\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)", items: [] };

export default {
  title: "@travelmakers-design-v2/core/General/Callout",
  component: Callout,
  argTypes: {
    type: {
      control: { type: "radio", options: ["default", "warning"] },
      defaultValue: "default",
      description: "Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      type: "string",
      description: "Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    items: {
      control: { type: "object" },
      description: "Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      defaultValue: [],
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    emptyText: {
      type: "string",
      defaultValue: "",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Callout title={data.title} {...props} items={data.items} />;
};

export const CalloutWithoutItems = (props) => {
  return (
    <Callout
      title={dataWithoutItems.title}
      items={dataWithoutItems.items}
      {...props}
    />
  );
};
`,_={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:54},startBody:{col:23,line:52},endBody:{col:1,line:54}},CalloutWithoutItems:{startLoc:{col:35,line:56},endLoc:{col:1,line:64},startBody:{col:35,line:56},endBody:{col:1,line:64}}},D={title:"\uD0C0\uC774\uD2C0",items:["\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4."]},W={title:"\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)",items:[]},B=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Callout } from \\"../Callout\\";\\n\\nconst data = { title: \\"\uD0C0\uC774\uD2C0\\", items: [\\"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.\\"] };\\nconst dataWithoutItems = { title: \\"\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)\\", items: [] };\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Callout\\",\\n  component: Callout,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"default\\", \\"warning\\"] },\\n      defaultValue: \\"default\\",\\n      description: \\"Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    title: {\\n      type: \\"string\\",\\n      description: \\"Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    items: {\\n      control: { type: \\"object\\" },\\n      description: \\"Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n      defaultValue: [],\\n      table: {\\n        type: {\\n          summary: \\"string[]\\",\\n        },\\n      },\\n    },\\n    emptyText: {\\n      type: \\"string\\",\\n      defaultValue: \\"\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Callout title={data.title} {...props} items={data.items} />;\\n};\\n\\nexport const CalloutWithoutItems = (props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":52},"endLoc":{"col":1,"line":54},"startBody":{"col":23,"line":52},"endBody":{"col":1,"line":54}},"CalloutWithoutItems":{"startLoc":{"col":35,"line":56},"endLoc":{"col":1,"line":64},"startBody":{"col":35,"line":56},"endBody":{"col":1,"line":64}}};
    
import { Meta } from "@storybook/react";
import { Callout } from "../Callout";

const data = { title: "\uD0C0\uC774\uD2C0", items: ["\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4."] };
const dataWithoutItems = { title: "\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)", items: [] };

export default {
  title: "@travelmakers-design-v2/core/General/Callout",
  component: Callout,
  argTypes: {
    type: {
      control: { type: "radio", options: ["default", "warning"] },
      defaultValue: "default",
      description: "Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      type: "string",
      description: "Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    items: {
      control: { type: "object" },
      description: "Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      defaultValue: [],
      table: {
        type: {
          summary: "string[]",
        },
      },
    },
    emptyText: {
      type: "string",
      defaultValue: "",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Callout title={data.title} {...props} items={data.items} />;
};;

export const CalloutWithoutItems = (props) => {
  return (
    <Callout
      title={dataWithoutItems.title}
      items={dataWithoutItems.items}
      {...props}
    />
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout title={data.title} {...props} items={data.items} />;\\n}" }, ...Default.parameters };
CalloutWithoutItems.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n}" }, ...CalloutWithoutItems.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:62},startBody:{col:23,line:60},endBody:{col:1,line:62}},"callout-without-items":{startLoc:{col:35,line:64},endLoc:{col:1,line:72},startBody:{col:35,line:64},endBody:{col:1,line:72}}}}},title:"@travelmakers-design-v2/core/General/Callout",component:k,argTypes:{type:{control:{type:"radio",options:["default","warning"]},defaultValue:"default",description:"Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},title:{type:"string",description:"Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",table:{type:{summary:"string"}}},items:{control:{type:"object"},description:"Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",defaultValue:[],table:{type:{summary:"string[]"}}},emptyText:{type:"string",defaultValue:"",table:{type:{summary:"string"}}}}},I=function(u){return Object(V.jsx)(k,Object.assign({title:D.title},u,{items:D.items}))};I.displayName="Default";var O=function(u){return Object(V.jsx)(k,Object.assign({title:W.title,items:W.items},u))};O.displayName="CalloutWithoutItems",I.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout title={data.title} {...props} items={data.items} />;
}`}},I.parameters),O.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <Callout
      title={dataWithoutItems.title}
      items={dataWithoutItems.items}
      {...props}
    />
  );
}`}},O.parameters)},"./packages/travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return r});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(o,v){var y=v.type,b=function(){return{week:{backgroundColor:o.colors.secondary},month:{backgroundColor:o.colors.secondary20},all:{backgroundColor:o.colors.primary}}};return{container:{width:"296px",height:"142px",backgroundColor:o.colors.primary99,borderRadius:o.radius.radius20,overflow:"hidden",display:"flex"},leftBox:Object.assign({},b()[y],{width:"80px",display:"flex",flexDirection:"column",padding:o.spacing.spacing10}),rightBox:{width:"100%",padding:o.spacing.spacing20,display:"flex",flexDirection:"column",gap:o.spacing.spacing5},discountBox:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},checkBox:{backgroundColor:o.colors.primaryContainer,borderRadius:o.radius.radius100,width:16,height:16,display:"flex",justifyContent:"center",alignItems:"center"}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),V=e("./node_modules/react/jsx-runtime.js"),C=["type","state","day","title","subTitle","item","remainingQuantity","content","className"];function t(o,v){if(o==null)return{};var y=n(o,v),b,c;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(o);for(c=0;c<T.length;c++)b=T[c],!(v.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(o,b)&&(y[b]=o[b])}return y}function n(o,v){if(o==null)return{};var y={},b=Object.keys(o),c,T;for(T=0;T<b.length;T++)c=b[T],!(v.indexOf(c)>=0)&&(y[c]=o[c]);return y}var i=Object(G.forwardRef)(function(o,v){var y=o.type,b=o.state,c=o.day,T=o.title,k=o.subTitle,x=o.item,_=o.remainingQuantity,D=o.content,W=o.className,B=t(o,C),I=H({type:y}),O=I.classes,l=I.cx,u=Object(E.c)(),a={week:"Week",month:"Month",all:"All"},p=function(P,M){var A=P!=null?P:"\uC804\uCCB4",S=" | \uC794\uC5EC "+M+"\uAC1C";return M?A+" "+S:A},s=function(P){switch(P){case"applied":return Object(V.jsx)(R.a,{level:"body3",color:"primary3",children:"\uC801\uC6A9\uC911"});case"checked":return Object(V.jsx)("div",{className:O.checkBox,children:Object(V.jsx)(N.a,{src:"IcCheck",width:12,height:12,color:u.colors.white})});default:return null}};return Object(V.jsxs)(z.a,Object.assign({component:"div",ref:v,className:l(W,O.container)},B,{children:[Object(V.jsxs)("div",{className:O.leftBox,children:[Object(V.jsx)(R.a,{level:"display2",color:"white",children:c}),Object(V.jsx)(R.a,{family:"Noto Serif KR",level:"body1",color:"white",children:a[y]})]}),Object(V.jsxs)("div",{className:O.rightBox,children:[Object(V.jsxs)("div",{className:O.discountBox,children:[Object(V.jsx)("div",{children:Object(V.jsx)(R.a,{level:"display6",color:"secondary",children:T})}),Object(V.jsx)("div",{children:s(b)})]}),Object(V.jsx)(R.a,{level:"body3",color:"primary",children:k}),Object(V.jsx)(R.a,{level:"caption",color:"errorInteract",children:p(x,_)}),Object(V.jsx)(R.a,{level:"caption",color:"primary3",style:{whiteSpace:"pre-line"},children:D})]})]}))});i.displayName="CouponCard";var j=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { CouponCard } from \\"../CouponCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/CouponCard\\",\\n  component: CouponCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"week\\",\\n      description: \\"CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"week\\", \\"month\\", \\"all\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"applied\\", \\"checked\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    day: {\\n      defaultValue: 1,\\n      description: \\"CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    title: {\\n      defaultValue: \\"00%\\",\\n      description: \\"CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    subTitle: {\\n      defaultValue: \\"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD\\",\\n      description: \\"CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    item: {\\n      defaultValue: \\"\uC801\uC6A9 \uC0C1\uD488\\",\\n      description: \\"CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    remainingQuantity: {\\n      defaultValue: 5,\\n      description: \\"CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    content: {\\n      defaultValue:\\n        \\"*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C\\\\n *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C\\\\n *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C\\",\\n      description: \\"CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CouponCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":84},"endLoc":{"col":1,"line":86},"startBody":{"col":23,"line":84},"endBody":{"col":1,"line":86}}};
    
import { Meta } from "@storybook/react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    type: {
      defaultValue: "week",
      description: "CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["week", "month", "all"],
      control: { type: "inline-radio" },
    },
    state: {
      defaultValue: "default",
      description: "CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "applied", "checked"],
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: 1,
      description: "CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    title: {
      defaultValue: "00%",
      description: "CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    subTitle: {
      defaultValue: "\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",
      description: "CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    item: {
      defaultValue: "\uC801\uC6A9 \uC0C1\uD488",
      description: "CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    remainingQuantity: {
      defaultValue: 5,
      description: "CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    content: {
      defaultValue:
        "*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C\\n *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C\\n *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C",
      description: "CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <CouponCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <CouponCard {...props} />;\\n}" }, ...Default.parameters };`,m={Default:{startLoc:{col:23,line:92},endLoc:{col:1,line:94},startBody:{col:23,line:92},endBody:{col:1,line:94}}},j=`import { Meta } from "@storybook/react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    type: {
      defaultValue: "week",
      description: "CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["week", "month", "all"],
      control: { type: "inline-radio" },
    },
    state: {
      defaultValue: "default",
      description: "CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "applied", "checked"],
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: 1,
      description: "CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    title: {
      defaultValue: "00%",
      description: "CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    subTitle: {
      defaultValue: "\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",
      description: "CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    item: {
      defaultValue: "\uC801\uC6A9 \uC0C1\uD488",
      description: "CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    remainingQuantity: {
      defaultValue: 5,
      description: "CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    content: {
      defaultValue:
        "*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C\\n *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C\\n *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C",
      description: "CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <CouponCard {...props} />;
};
`,m={Default:{startLoc:{col:23,line:84},endLoc:{col:1,line:86},startBody:{col:23,line:84},endBody:{col:1,line:86}}},f=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { CouponCard } from \\"../CouponCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/CouponCard\\",\\n  component: CouponCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"week\\",\\n      description: \\"CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"week\\", \\"month\\", \\"all\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"applied\\", \\"checked\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    day: {\\n      defaultValue: 1,\\n      description: \\"CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    title: {\\n      defaultValue: \\"00%\\",\\n      description: \\"CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    subTitle: {\\n      defaultValue: \\"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD\\",\\n      description: \\"CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    item: {\\n      defaultValue: \\"\uC801\uC6A9 \uC0C1\uD488\\",\\n      description: \\"CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    remainingQuantity: {\\n      defaultValue: 5,\\n      description: \\"CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    content: {\\n      defaultValue:\\n        \\"*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C\\\\n *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C\\\\n *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C\\",\\n      description: \\"CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <CouponCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":84},"endLoc":{"col":1,"line":86},"startBody":{"col":23,"line":84},"endBody":{"col":1,"line":86}}};
    
import { Meta } from "@storybook/react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    type: {
      defaultValue: "week",
      description: "CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["week", "month", "all"],
      control: { type: "inline-radio" },
    },
    state: {
      defaultValue: "default",
      description: "CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "applied", "checked"],
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: 1,
      description: "CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    title: {
      defaultValue: "00%",
      description: "CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    subTitle: {
      defaultValue: "\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",
      description: "CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    item: {
      defaultValue: "\uC801\uC6A9 \uC0C1\uD488",
      description: "CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    remainingQuantity: {
      defaultValue: 5,
      description: "CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    content: {
      defaultValue:
        "*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C\\n *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C\\n *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C",
      description: "CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <CouponCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <CouponCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:92},endLoc:{col:1,line:94},startBody:{col:23,line:92},endBody:{col:1,line:94}}}}},title:"@travelmakers-design-v2/core/General/Card/CouponCard",component:i,argTypes:{type:{defaultValue:"week",description:"CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["week","month","all"],control:{type:"inline-radio"}},state:{defaultValue:"default",description:"CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",options:["default","applied","checked"],control:{type:"inline-radio"}},day:{defaultValue:1,description:"CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},title:{defaultValue:"00%",description:"CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},subTitle:{defaultValue:"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",description:"CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},item:{defaultValue:"\uC801\uC6A9 \uC0C1\uD488",description:"CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},remainingQuantity:{defaultValue:5,description:"CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},content:{defaultValue:`*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C
 *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C
 *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C`,description:"CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},r=function(v){return Object(V.jsx)(i,Object.assign({},v))};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return <CouponCard {...props} />;
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return M});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/core-js/modules/es.symbol.js"),t=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.array.map.js"),i=e("./node_modules/react/index.js"),j=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),m=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),f=Object(m.a)(function(A,S){var L,U,Y,re=S.rightArrowHover,ce=S.leftArrowHover;return{container:(L={width:"328px",display:"inline-block",boxShadow:A.shadows.elevation2,borderRadius:A.radius.radius20,overflow:"hidden"},L["& > a"]={textDecoration:"none"},L),imageBox:(Y={position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"end",height:"183px"},Y["& > img"]=(U={position:"absolute",transition:"all 0.2s cubic-bezier(0, 0, 0.5, 1)"},U["&:hover"]={width:"110%",height:"110%"},U),Y),content:{display:"flex",flexDirection:"column",gap:A.spacing.spacing30,padding:A.spacing.spacing30},contentHeader:{display:"flex",flexDirection:"column",gap:A.spacing.spacing5},contentTag:{position:"relative",display:"flex",flexDirection:"column",overflowY:"hidden"},contentScroll:{position:"absolute",width:"32px",height:"32px",top:"50%",transform:"translate(-50%, -50%)",background:A.colors.white,border:"1px solid "+A.colors.white,boxShadow:"0px 2px 10px rgba(48, 55, 63, 0.2)",borderRadius:A.radius.radius100,padding:"6px"},contentScrollLeft:{left:A.spacing.spacing30,visibility:ce?"visible":"hidden"},contentScrollRight:{right:A.spacing.spacing5,visibility:re?"visible":"hidden"},contentScrollContainer:{display:"flex",flexDirection:"row",overflowY:"hidden",gap:A.spacing.spacing10},contentDimmer:{position:"absolute",right:0,width:"40px",height:"100%",background:"linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 51.04%, rgba(255, 255, 255, 0) 100%)"},flexBox:{display:"flex",justifyContent:"space-between",gap:A.spacing.spacing5},soldOutBox:{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0}}}),r=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),o=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),v=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),y=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),b=e("./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx"),c=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),T=e("./node_modules/next/link.js"),k=e.n(T),x=e("./node_modules/react/jsx-runtime.js"),_=["name","description","type","star","src","href","price","isCoupon","disabled","className"];function D(A,S){return l(A)||O(A,S)||B(A,S)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(A,S){if(A){if(typeof A=="string")return I(A,S);var L=Object.prototype.toString.call(A).slice(8,-1);if(L==="Object"&&A.constructor&&(L=A.constructor.name),L==="Map"||L==="Set")return Array.from(A);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return I(A,S)}}function I(A,S){(S==null||S>A.length)&&(S=A.length);for(var L=0,U=new Array(S);L<S;L++)U[L]=A[L];return U}function O(A,S){var L=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(L!=null){var U,Y,re,ce,q=[],ie=!0,te=!1;try{if(re=(L=L.call(A)).next,S===0){if(Object(L)!==L)return;ie=!1}else for(;!(ie=(U=re.call(L)).done)&&(q.push(U.value),q.length!==S);ie=!0);}catch(de){te=!0,Y=de}finally{try{if(!ie&&L.return!=null&&(ce=L.return(),Object(ce)!==ce))return}finally{if(te)throw Y}}return q}}function l(A){if(Array.isArray(A))return A}function u(A,S){if(A==null)return{};var L=a(A,S),U,Y;if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(A);for(Y=0;Y<re.length;Y++)U=re[Y],!(S.indexOf(U)>=0)&&Object.prototype.propertyIsEnumerable.call(A,U)&&(L[U]=A[U])}return L}function a(A,S){if(A==null)return{};var L={},U=Object.keys(A),Y,re;for(re=0;re<U.length;re++)Y=U[re],!(S.indexOf(Y)>=0)&&(L[Y]=A[Y]);return L}var p=Object(i.forwardRef)(function(A,S){var L,U=A.name,Y=A.description,re=A.type,ce=A.star,q=A.src,ie=A.href,te=ie===void 0?"":ie,de=A.price,ue=de===void 0?[]:de,fe=A.isCoupon,ve=A.disabled,be=ve===void 0?!1:ve,ge=A.className,xe=u(A,_),Ce=0,De=((L=ue==null?void 0:ue.length)!==null&&L!==void 0?L:1)-1,Te=Object(i.useState)(Ce),Be=D(Te,2),Oe=Be[0],Ne=Be[1],Me=Object(i.useState)(!1),ke=D(Me,2),Ve=ke[0],Ae=ke[1],we=Object(i.useState)(!1),He=D(we,2),Pe=He[0],_e=He[1],We=Object(i.useRef)(null),Re=Object(i.useRef)(null),Ee=Object(i.useRef)([]),Ue=f({leftArrowHover:Ve,rightArrowHover:Pe}),se=Ue.classes,ne=Ue.cx;function le(ae){var pe=ae==="left",je=J(pe),he=pe?Oe-je:Oe+je;je!==0&&(Q(pe,he),Ne(he),ee(he))}function Q(ae,pe){ae?(Ae(pe>Ce),_e(!0)):(Ae(!0),_e(pe<De))}function J(ae){var pe=2;if(ae){var je;if(Oe<=Ce)return 0;var he=(je=Ee.current)===null||je===void 0?void 0:je[Oe-1];return!he||Oe-1===0?1:pe}else{var Le;if(Oe>=De)return 0;var Ie=(Le=Ee.current)===null||Le===void 0?void 0:Le[Oe+pe];return Ie?Oe===0?3:pe:1}}function ee(ae){var pe;(pe=Ee.current)===null||pe===void 0||pe[ae].scrollIntoView({behavior:"smooth",block:"center"})}return Object(x.jsx)(j.a,Object.assign({component:"div",ref:S,className:ne(ge,se.container)},xe,{children:Object(x.jsxs)(k.a,{href:te,children:[Object(x.jsxs)("div",{className:ne(se.imageBox),children:[Object(x.jsx)(r.a,{src:q,alt:"hotelCard",width:"100%",height:"100%"}),be&&Object(x.jsxs)("div",{className:ne(se.soldOutBox),children:[Object(x.jsx)(o.a,{color:"white",level:"display4",strong:!0,children:"Sold Out"}),Object(x.jsx)(o.a,{color:"white",level:"body2",children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})]}),Object(x.jsxs)("div",{className:ne(se.content),children:[Object(x.jsxs)("div",{className:ne(se.contentHeader),children:[Object(x.jsx)(o.a,{level:"subhead2",strong:!0,color:be?"primary4":"onBackground",children:U}),Object(x.jsxs)("div",{className:ne(se.flexBox),children:[Object(x.jsx)(v.a,{grade:ce,type:re}),fe&&!be&&Object(x.jsx)(y.a,{label:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",type:"line"})]}),Object(x.jsx)(o.a,{level:"caption",color:"primary3",children:Y})]}),Object(x.jsxs)("div",{className:ne(se.contentTag),onMouseEnter:function(){Oe!==0&&Ae(!0),Oe<De&&_e(!0)},onMouseMove:function(){be||(Ae(Oe!==0),Oe<De?_e(!0):_e(!1))},onMouseLeave:function(){Ae(!1),_e(!1)},children:[Object(x.jsx)("div",{className:ne(se.contentDimmer)}),Object(x.jsx)("div",{ref:We,className:ne(se.contentScroll,se.contentScrollLeft),onClick:function(pe){pe.preventDefault(),le("left")},children:Object(x.jsx)(c.a,{src:"IcAngleLeft",width:16,height:16})}),Object(x.jsx)("div",{ref:Re,className:ne(se.contentScroll,se.contentScrollRight),onClick:function(pe){pe.preventDefault(),le("right")},children:Object(x.jsx)(c.a,{src:"IcAngleRight",width:16,height:16})}),Object(x.jsx)("div",{className:ne(se.contentScrollContainer),children:ue==null?void 0:ue.map(function(ae,pe){return Object(x.jsx)(b.a,{ref:function(he){return Ee.current[pe]=he},name:ae.name,status:be?"disabled":ae.status,description:ae.description},"price-card-"+ae.name)})})]})]})]})}))});p.displayName="HotelCard";var s=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelCard } from \\"../HotelCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelCard\\",\\n  component: HotelCard,\\n  argTypes: {\\n    href: {\\n      defaultValue: \\"#\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    name: {\\n      defaultValue: \\"\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    type: {\\n      defaultValue: \\"grade\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"grade\\", \\"minihotel\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    star: {\\n      defaultValue: 5,\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    price: {\\n      defaultValue: [\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n      ],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n    isCoupon: {\\n      defaultValue: true,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <HotelCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":123},"endLoc":{"col":1,"line":125},"startBody":{"col":23,"line":123},"endBody":{"col":1,"line":125}}};
    
import { Meta } from "@storybook/react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelCard",
  component: HotelCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    name: {
      defaultValue: "\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    price: {
      defaultValue: [
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
      ],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelCard {...props} />;\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:131},endLoc:{col:1,line:133},startBody:{col:23,line:131},endBody:{col:1,line:133}}},s=`import { Meta } from "@storybook/react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelCard",
  component: HotelCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    name: {
      defaultValue: "\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    price: {
      defaultValue: [
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
      ],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelCard {...props} />;
};
`,h={Default:{startLoc:{col:23,line:123},endLoc:{col:1,line:125},startBody:{col:23,line:123},endBody:{col:1,line:125}}},P=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelCard } from \\"../HotelCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelCard\\",\\n  component: HotelCard,\\n  argTypes: {\\n    href: {\\n      defaultValue: \\"#\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    name: {\\n      defaultValue: \\"\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    type: {\\n      defaultValue: \\"grade\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"grade\\", \\"minihotel\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    star: {\\n      defaultValue: 5,\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    price: {\\n      defaultValue: [\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n        {\\n          status: \\"active\\",\\n          name: \\"name\\",\\n          description: \\"description\\",\\n          tag: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n        },\\n      ],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n    isCoupon: {\\n      defaultValue: true,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <HotelCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":123},"endLoc":{"col":1,"line":125},"startBody":{"col":23,"line":123},"endBody":{"col":1,"line":125}}};
    
import { Meta } from "@storybook/react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelCard",
  component: HotelCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    name: {
      defaultValue: "\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    price: {
      defaultValue: [
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
        },
      ],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:131},endLoc:{col:1,line:133},startBody:{col:23,line:131},endBody:{col:1,line:133}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelCard",component:p,argTypes:{href:{defaultValue:"#",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},name:{defaultValue:"\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},src:{defaultValue:"https://picsum.photos/600/400",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},price:{defaultValue:[{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]}],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}},isCoupon:{defaultValue:!0,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},M=function(S){return Object(x.jsx)(p,Object.assign({},S))};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelCard {...props} />;
}`}},M.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return T});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.map.js"),z=e("./node_modules/react/index.js"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(k){var x,_,D;return{container:(x={width:"328px",display:"inline-block"},x["& > a"]={textDecoration:"none"},x),cardBox:{position:"relative",background:k.colors.white,borderRadius:k.radius.radius20,padding:"165px "+k.spacing.spacing30+" "+k.spacing.spacing30,filter:"drop-shadow("+k.shadows.elevation2+")"},imageBox:(D={position:"absolute",top:-27,display:"flex",justifyContent:"center",alignItems:"end",overflow:"hidden",borderRadius:k.radius.radius20,width:"296px",height:"180px"},D["& > img"]=(_={position:"absolute",transition:"all 0.2s cubic-bezier(0, 0, 0.5, 1)"},_["&:hover"]={width:"110%",height:"110%"},_),D),imageLabel:{position:"absolute",left:k.spacing.spacing30,top:-4},contentBox:{display:"flex",flexDirection:"column",gap:k.spacing.spacing20,"& > ul":{gap:k.spacing.spacing5}},hotelInfo:{display:"flex",alignItems:"center",gap:k.spacing.spacing5},divider:{backgroundColor:k.colors.outline,height:"1px"}}}),R=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),V=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),C=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),t=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),n=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),i=e("./node_modules/next/link.js"),j=e.n(i),m=e("./node_modules/react/jsx-runtime.js"),f=["href","type","star","src","labels","name","coupons","timelineTags","price","className"];function r(k,x){if(k==null)return{};var _=o(k,x),D,W;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(k);for(W=0;W<B.length;W++)D=B[W],!(x.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(k,D)&&(_[D]=k[D])}return _}function o(k,x){if(k==null)return{};var _={},D=Object.keys(k),W,B;for(B=0;B<D.length;B++)W=D[B],!(x.indexOf(W)>=0)&&(_[W]=k[W]);return _}var v=Object(z.forwardRef)(function(k,x){var _=k.href,D=_===void 0?"":_,W=k.type,B=W===void 0?"grade":W,I=k.star,O=k.src,l=k.labels,u=l===void 0?[]:l,a=k.name,p=k.coupons,s=k.timelineTags,h=k.price,P=k.className,M=r(k,f),A=H(),S=A.classes,L=A.cx;return Object(m.jsx)(R.a,Object.assign({component:"div",ref:x,className:L(P,S.container)},M,{children:Object(m.jsx)(j.a,{href:D,children:Object(m.jsxs)("div",{className:L(S.cardBox),children:[Object(m.jsxs)("div",{className:L(S.imageBox),children:[Object(m.jsx)(V.a,{src:O,alt:"featureCard-"+a,width:"100%",height:"100%"}),Object(m.jsx)("div",{className:L(S.imageLabel),children:Object(m.jsx)(C.a,{type:"fill",children:u==null?void 0:u.map(function(U,Y){return Object(m.jsx)(C.a.Item,{label:U,colorIdx:Y})})})})]}),Object(m.jsxs)("div",{className:L(S.contentBox),children:[Object(m.jsx)(C.a,{type:"line",color:"gray",roundness:"half",children:s.map(function(U){return Object(m.jsx)(C.a.Item,{label:U})})}),Object(m.jsxs)("div",{children:[Object(m.jsx)(t.a,{level:"body2",color:"black",children:a}),Object(m.jsx)("div",{className:L(S.hotelInfo),children:Object(m.jsx)(n.a,{grade:I,type:B})})]}),Object(m.jsx)("div",{className:L(S.divider)}),Object(m.jsxs)("div",{children:[Object(m.jsx)(N.a,Object.assign({},h,{type:"secondary"})),Object(m.jsx)(N.a,Object.assign({},h,{type:"primary"}))]})]})]})})}))});v.displayName="HotelFeaturedCard";var y=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelFeaturedCard } from \\"../HotelFeaturedCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelFeaturedCard\\",\\n  component: HotelFeaturedCard,\\n  argTypes: {\\n    href: {\\n      defaultValue: \\"#\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    type: {\\n      defaultValue: \\"grade\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"grade\\", \\"minihotel\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    star: {\\n      defaultValue: 5,\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    labels: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    name: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    price: {\\n      defaultValue: {\\n        type: \\"primary\\",\\n        label: \\"\\",\\n        percentText: 70,\\n        nightText: 1,\\n        priceText: 10000,\\n        priceStartText: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n        isCoupon: true,\\n      },\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":99},"endLoc":{"col":1,"line":105},"startBody":{"col":23,"line":99},"endBody":{"col":1,"line":105}}};
    
import { Meta } from "@storybook/react";
import { HotelFeaturedCard } from "../HotelFeaturedCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelFeaturedCard",
  component: HotelFeaturedCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    name: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    timelineTags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1\uBC15 100,000\uC6D0\uBD80\uD130",
        isCoupon: true,
      },
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 50 }}>
      <HotelFeaturedCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,b={Default:{startLoc:{col:23,line:107},endLoc:{col:1,line:113},startBody:{col:23,line:107},endBody:{col:1,line:113}}},y=`import { Meta } from "@storybook/react";
import { HotelFeaturedCard } from "../HotelFeaturedCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelFeaturedCard",
  component: HotelFeaturedCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    name: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    timelineTags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1\uBC15 100,000\uC6D0\uBD80\uD130",
        isCoupon: true,
      },
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 50 }}>
      <HotelFeaturedCard {...props} />
    </div>
  );
};
`,b={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:105},startBody:{col:23,line:99},endBody:{col:1,line:105}}},c=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelFeaturedCard } from \\"../HotelFeaturedCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelFeaturedCard\\",\\n  component: HotelFeaturedCard,\\n  argTypes: {\\n    href: {\\n      defaultValue: \\"#\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    type: {\\n      defaultValue: \\"grade\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"grade\\", \\"minihotel\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    star: {\\n      defaultValue: 5,\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    labels: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    name: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    price: {\\n      defaultValue: {\\n        type: \\"primary\\",\\n        label: \\"\\",\\n        percentText: 70,\\n        nightText: 1,\\n        priceText: 10000,\\n        priceStartText: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n        isCoupon: true,\\n      },\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":99},"endLoc":{"col":1,"line":105},"startBody":{"col":23,"line":99},"endBody":{"col":1,"line":105}}};
    
import { Meta } from "@storybook/react";
import { HotelFeaturedCard } from "../HotelFeaturedCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelFeaturedCard",
  component: HotelFeaturedCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    name: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    timelineTags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1\uBC15 100,000\uC6D0\uBD80\uD130",
        isCoupon: true,
      },
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 50 }}>
      <HotelFeaturedCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:107},endLoc:{col:1,line:113},startBody:{col:23,line:107},endBody:{col:1,line:113}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelFeaturedCard",component:v,argTypes:{href:{defaultValue:"#",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},name:{defaultValue:"\uD638\uD154\uBA85",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},timelineTags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:1,priceText:1e4,priceStartText:"1\uBC15 100,000\uC6D0\uBD80\uD130",isCoupon:!0},description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}}}},T=function(x){return Object(m.jsx)("div",{style:{margin:50},children:Object(m.jsx)(v,Object.assign({},x))})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 50 }}>
      <HotelFeaturedCard {...props} />
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return b});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(c){var T,k,x;return{container:(T={width:"328px",backgroundColor:c.colors.white,borderRadius:c.radius.radius20},T["& > a"]={textDecoration:"none"},T),contentContainer:{padding:c.spacing.spacing30,display:"flex",flexDirection:"column",gap:c.spacing.spacing10},contentBox:(x={display:"flex",alignItems:"center",justifyContent:"space-between",gap:c.spacing.spacing30},x["& >  span"]=(k={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box"},k["-webkit-box-orient"]="vertical",k["-webkit-line-clamp"]="2",k),x),headerBox:{display:"flex",alignItems:"center",justifyContent:"space-between"},footerBox:{display:"flex",gap:c.spacing.spacing10},divider:{backgroundColor:c.colors.outline,height:"1px"}}}),R=e("./node_modules/next/link.js"),N=e.n(R),V=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),C=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),t=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),n=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),i=e("./node_modules/react/jsx-runtime.js"),j=["href","src","labels","contents","writer","product","className"];function m(c,T){if(c==null)return{};var k=f(c,T),x,_;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(c);for(_=0;_<D.length;_++)x=D[_],!(T.indexOf(x)>=0)&&Object.prototype.propertyIsEnumerable.call(c,x)&&(k[x]=c[x])}return k}function f(c,T){if(c==null)return{};var k={},x=Object.keys(c),_,D;for(D=0;D<x.length;D++)_=x[D],!(T.indexOf(_)>=0)&&(k[_]=c[_]);return k}var r=Object(G.forwardRef)(function(c,T){var k=c.href,x=k===void 0?"":k,_=c.src,D=c.labels,W=D===void 0?[]:D,B=c.contents,I=c.writer,O=c.product,l=c.className,u=m(c,j),a=H(),p=a.classes,s=a.cx;return Object(i.jsx)(z.a,Object.assign({component:"div",ref:T,className:s(l,p.container)},u,{children:Object(i.jsx)(N.a,{href:x,children:Object(i.jsxs)("div",{className:p.contentContainer,children:[Object(i.jsxs)("div",{className:p.headerBox,children:[Object(i.jsx)(V.a,{level:"body3",color:"primary3",children:"\uC774\uB7F0 \uC810\uC774 \uC88B\uC558\uC5B4\uC694."}),Object(i.jsx)(n.a,{src:"IcAngleRight",width:16,height:16})]}),W.length>0&&Object(i.jsx)(C.a,{type:"fill",roundness:"half",color:"gray",gap:4,children:W==null?void 0:W.map(function(h){return Object(i.jsx)(C.a.Item,{label:h})})}),Object(i.jsxs)("div",{className:p.contentBox,children:[Object(i.jsx)(V.a,{level:"body2",color:"primary1",children:B}),_&&Object(i.jsx)(t.a,{src:_,alt:"hotel-review-card",width:40,height:40})]}),Object(i.jsx)("div",{className:p.divider}),Object(i.jsxs)("div",{className:p.footerBox,children:[Object(i.jsx)(V.a,{level:"body3",color:"primary1",children:I}),Object(i.jsx)(V.a,{level:"body3",color:"primary3",children:O})]})]})})}))});r.displayName="HotelReviewCard";var o=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelReviewCard } from \\"../HotelReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelReviewCard\\",\\n  component: HotelReviewCard,\\n  argTypes: {\\n    href: {\\n      defaultValue: \\"#\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    labels: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    contents: {\\n      defaultValue:\\n        \\"\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    writer: {\\n      defaultValue: \\"\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    product: {\\n      defaultValue: \\"\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <HotelReviewCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":64},"endLoc":{"col":1,"line":66},"startBody":{"col":23,"line":64},"endBody":{"col":1,"line":66}}};
    
import { Meta } from "@storybook/react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    contents: {
      defaultValue:
        "\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    writer: {
      defaultValue: "\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    product: {
      defaultValue: "\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelReviewCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelReviewCard {...props} />;\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:72},endLoc:{col:1,line:74},startBody:{col:23,line:72},endBody:{col:1,line:74}}},o=`import { Meta } from "@storybook/react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    contents: {
      defaultValue:
        "\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    writer: {
      defaultValue: "\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    product: {
      defaultValue: "\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelReviewCard {...props} />;
};
`,v={Default:{startLoc:{col:23,line:64},endLoc:{col:1,line:66},startBody:{col:23,line:64},endBody:{col:1,line:66}}},y=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelReviewCard } from \\"../HotelReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelReviewCard\\",\\n  component: HotelReviewCard,\\n  argTypes: {\\n    href: {\\n      defaultValue: \\"#\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    labels: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    contents: {\\n      defaultValue:\\n        \\"\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    writer: {\\n      defaultValue: \\"\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    product: {\\n      defaultValue: \\"\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30\\",\\n      description: \\"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <HotelReviewCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":64},"endLoc":{"col":1,"line":66},"startBody":{"col":23,"line":64},"endBody":{"col":1,"line":66}}};
    
import { Meta } from "@storybook/react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    contents: {
      defaultValue:
        "\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    writer: {
      defaultValue: "\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    product: {
      defaultValue: "\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30",
      description: "HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelReviewCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelReviewCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:72},endLoc:{col:1,line:74},startBody:{col:23,line:72},endBody:{col:1,line:74}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelReviewCard",component:r,argTypes:{href:{defaultValue:"#",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},contents:{defaultValue:"\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},writer:{defaultValue:"\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},product:{defaultValue:"\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},b=function(T){return Object(i.jsx)(r,Object.assign({},T))};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelReviewCard {...props} />;
}`}},b.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return b});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(c){var T;return{container:(T={width:"328px",backgroundColor:c.colors.white,borderRadius:c.radius.radius20,padding:c.spacing.spacing50+" "+c.spacing.spacing30,display:"flex",flexDirection:"column",gap:c.spacing.spacing30},T["& > a"]={textDecoration:"none"},T),divider:{backgroundColor:c.colors.outline,height:"1px"},currencyContainer:{display:"flex",flexDirection:"column",gap:c.spacing.spacing5},currencyBox:{display:"flex",flexDirection:"row",alignItems:"center",gap:c.spacing.spacing5}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),C=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),t=function(T){return T.toLocaleString("ko-KR")},n=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),i=e("./node_modules/react/jsx-runtime.js"),j=["type","star","groupTags","tags","isCoupon","price","className"];function m(c,T){if(c==null)return{};var k=f(c,T),x,_;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(c);for(_=0;_<D.length;_++)x=D[_],!(T.indexOf(x)>=0)&&Object.prototype.propertyIsEnumerable.call(c,x)&&(k[x]=c[x])}return k}function f(c,T){if(c==null)return{};var k={},x=Object.keys(c),_,D;for(D=0;D<x.length;D++)_=x[D],!(T.indexOf(_)>=0)&&(k[_]=c[_]);return k}var r=Object(G.forwardRef)(function(c,T){var k=c.type,x=c.star,_=c.groupTags,D=_===void 0?[]:_,W=c.tags,B=W===void 0?[]:W,I=c.isCoupon,O=I===void 0?!1:I,l=c.price,u=c.className,a=m(c,j),p=H(),s=p.classes,h=p.cx;return Object(i.jsxs)(z.a,Object.assign({component:"div",ref:T,className:h(u,s.container)},a,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(R.a,{level:"display6",color:"primary1",strong:!0,children:"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"})}),Object(i.jsx)("div",{children:Object(i.jsx)(N.a,{grade:x,type:k})}),D.length>0&&Object(i.jsx)("div",{children:Object(i.jsx)(V.a,{type:"line",color:"gray",roundness:"half",gap:4,children:D.map(function(P){return Object(i.jsx)(V.a.Item,{label:P})})})})]}),Object(i.jsx)("div",{className:h(s.divider)}),Object(i.jsxs)("div",{className:s.currencyContainer,children:[Object(i.jsxs)("div",{className:s.currencyBox,children:[Object(i.jsx)(R.a,{level:"body3",color:"primary1",children:"\uC815\uAC00"}),Object(i.jsxs)(R.a,{level:"body3",color:"primary1",children:[t(1e6),"\uC6D0"]}),O&&Object(i.jsx)(C.a,{label:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",type:"fill"})]}),Object(i.jsx)(n.a,Object.assign({},l,{type:"primary"})),Object(i.jsx)(R.a,{level:"caption",color:"primary3",children:"\uC138\uAE08 \uBC0F \uBD09\uC0AC\uB8CC \uD3EC\uD568"})]}),Object(i.jsx)(V.a,{type:"fill",color:"gray",roundness:"half",gap:4,children:B.map(function(P){return Object(i.jsx)(V.a.Item,{label:P})})})]}))});r.displayName="HotelTitleCard";var o=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelTitleCard } from \\"../HotelTitleCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelTitleCard\\",\\n  component: HotelTitleCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"grade\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"grade\\", \\"minihotel\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    star: {\\n      defaultValue: 5,\\n      description:\\n        \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    groupTags: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    tags: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    isCoupon: {\\n      defaultValue: true,\\n      description: \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    price: {\\n      defaultValue: {\\n        type: \\"primary\\",\\n        label: \\"\\",\\n        percentText: 70,\\n        nightText: 1,\\n        priceText: 10000,\\n        priceStartText: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n        isCoupon: true,\\n      },\\n      description: \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <HotelTitleCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":78},"endLoc":{"col":1,"line":80},"startBody":{"col":23,"line":78},"endBody":{"col":1,"line":80}}};
    
import { Meta } from "@storybook/react";
import { HotelTitleCard } from "../HotelTitleCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelTitleCard",
  component: HotelTitleCard,
  argTypes: {
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    groupTags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    tags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1\uBC15 100,000\uC6D0\uBD80\uD130",
        isCoupon: true,
      },
      description: "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelTitleCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelTitleCard {...props} />;\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}},o=`import { Meta } from "@storybook/react";
import { HotelTitleCard } from "../HotelTitleCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelTitleCard",
  component: HotelTitleCard,
  argTypes: {
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    groupTags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    tags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1\uBC15 100,000\uC6D0\uBD80\uD130",
        isCoupon: true,
      },
      description: "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelTitleCard {...props} />;
};
`,v={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:80},startBody:{col:23,line:78},endBody:{col:1,line:80}}},y=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HotelTitleCard } from \\"../HotelTitleCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/HotelTitleCard\\",\\n  component: HotelTitleCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"grade\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"grade\\", \\"minihotel\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    star: {\\n      defaultValue: 5,\\n      description:\\n        \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    groupTags: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    tags: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description:\\n        \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    isCoupon: {\\n      defaultValue: true,\\n      description: \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    price: {\\n      defaultValue: {\\n        type: \\"primary\\",\\n        label: \\"\\",\\n        percentText: 70,\\n        nightText: 1,\\n        priceText: 10000,\\n        priceStartText: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n        isCoupon: true,\\n      },\\n      description: \\"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <HotelTitleCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":78},"endLoc":{"col":1,"line":80},"startBody":{"col":23,"line":78},"endBody":{"col":1,"line":80}}};
    
import { Meta } from "@storybook/react";
import { HotelTitleCard } from "../HotelTitleCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelTitleCard",
  component: HotelTitleCard,
  argTypes: {
    type: {
      defaultValue: "grade",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    groupTags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    tags: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description:
        "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1\uBC15 100,000\uC6D0\uBD80\uD130",
        isCoupon: true,
      },
      description: "HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelTitleCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelTitleCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelTitleCard",component:r,argTypes:{type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},groupTags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},tags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},isCoupon:{defaultValue:!0,description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:1,priceText:1e4,priceStartText:"1\uBC15 100,000\uC6D0\uBD80\uD130",isCoupon:!0},description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}}}},b=function(T){return Object(i.jsx)(r,Object.assign({},T))};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelTitleCard {...props} />;
}`}},b.parameters)},"./packages/travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return f});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=Object(z.a)(function(r){var o,v;return{container:{position:"relative",width:"304px",height:"200px",backgroundColor:r.colors.white,borderRadius:r.radius.radius20,filter:"drop-shadow("+r.shadows.elevation2+")"},imageContainer:(o={width:"92px",height:"122px",position:"absolute",top:16,left:-16},o["& > img"]={borderRadius:r.radius.radius20},o),content:{padding:r.spacing.spacing30+" "+r.spacing.spacing30+" "+r.spacing.spacing30+" 92px",display:"flex",flexDirection:"column",gap:r.spacing.spacing20},contentText:(v={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box"},v["-webkit-box-orient"]="vertical",v["-webkit-line-clamp"]="4",v)}}),H=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./node_modules/react/jsx-runtime.js"),V=["src","title","job","content","className"];function C(r,o){if(r==null)return{};var v=t(r,o),y,b;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(b=0;b<c.length;b++)y=c[b],!(o.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(r,y)&&(v[y]=r[y])}return v}function t(r,o){if(r==null)return{};var v={},y=Object.keys(r),b,c;for(c=0;c<y.length;c++)b=y[c],!(o.indexOf(b)>=0)&&(v[b]=r[b]);return v}var n=Object(E.forwardRef)(function(r,o){var v=r.src,y=r.title,b=r.job,c=r.content,T=r.className,k=C(r,V),x=d(),_=x.classes,D=x.cx;return Object(N.jsxs)(G.a,Object.assign({component:"div",ref:o,className:D(T,_.container)},k,{children:[Object(N.jsx)("div",{className:D(_.imageContainer),children:Object(N.jsx)(H.a,{src:v,alt:"",width:"100%",height:"100%"})}),Object(N.jsxs)("div",{className:D(_.content),children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(R.a,{level:"body3",color:"secondary1",children:y}),Object(N.jsx)("div",{style:{marginTop:"-5px"},children:Object(N.jsx)(R.a,{level:"body2",color:"primary2",children:b})})]}),Object(N.jsx)("div",{className:D(_.contentText),children:Object(N.jsx)(R.a,{level:"body2",color:"primary1",children:c})})]})]}))});n.displayName="MainReviewCard";var i=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { MainReviewCard } from \\"../MainReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/MainReviewCard\\",\\n  component: MainReviewCard,\\n  argTypes: {\\n    title: {\\n      defaultValue: \\"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    job: {\\n      defaultValue: \\"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    content: {\\n      defaultValue:\\n        \\"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":52},"endLoc":{"col":1,"line":58},"startBody":{"col":23,"line":52},"endBody":{"col":1,"line":58}}};
    
import { Meta } from "@storybook/react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    title: {
      defaultValue: "\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    content: {
      defaultValue:
        "\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 40 }}>
      <MainReviewCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}},i=`import { Meta } from "@storybook/react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    title: {
      defaultValue: "\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    content: {
      defaultValue:
        "\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 40 }}>
      <MainReviewCard {...props} />
    </div>
  );
};
`,j={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:58},startBody:{col:23,line:52},endBody:{col:1,line:58}}},m=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { MainReviewCard } from \\"../MainReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/MainReviewCard\\",\\n  component: MainReviewCard,\\n  argTypes: {\\n    title: {\\n      defaultValue: \\"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    job: {\\n      defaultValue: \\"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    content: {\\n      defaultValue:\\n        \\"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":52},"endLoc":{"col":1,"line":58},"startBody":{"col":23,"line":52},"endBody":{"col":1,"line":58}}};
    
import { Meta } from "@storybook/react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    title: {
      defaultValue: "\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    content: {
      defaultValue:
        "\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 40 }}>
      <MainReviewCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/core/General/Card/MainReviewCard",component:n,argTypes:{title:{defaultValue:"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},job:{defaultValue:"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},content:{defaultValue:"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},src:{defaultValue:"https://picsum.photos/600/400",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},f=function(o){return Object(N.jsx)("div",{style:{margin:40},children:Object(N.jsx)(n,Object.assign({},o))})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 40 }}>
      <MainReviewCard {...props} />
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return y});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(b){var c,T;return{card:{width:"281px",backgroundColor:b.colors.white,boxShadow:b.shadows.elevation3,borderRadius:b.radius.radius20},container:{padding:b.spacing.spacing30+" "+b.spacing.spacing50,display:"flex",flexDirection:"column",gap:b.spacing.spacing20,minHeight:"395px"},divider:{height:1,backgroundColor:b.colors.primary},headerGroup:{minHeight:52,display:"flex",flexDirection:"column",justifyContent:"end"},groupBox:(c={display:"flex",flexDirection:"column",gap:b.spacing.spacing5},c["& > ul"]={margin:0,paddingInlineStart:"30px",paddingBottom:b.spacing.spacing20},c),titleBox:{display:"flex",justifyContent:"space-between"},priceBox:(T={},T["& > div"]={justifyContent:"end"},T),submitButton:{borderRadius:"0 0 "+b.radius.radius20+" "+b.radius.radius20}}}),R=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx"),C=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),t=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),n=e("./node_modules/react/jsx-runtime.js"),i=["isMore","labels","headTitle","footerTitle","optionName","isDuration","minNight","maxNight","roomType","benefitList","price","buttonName","onClick","className"];function j(b,c){if(b==null)return{};var T=m(b,c),k,x;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(b);for(x=0;x<_.length;x++)k=_[x],!(c.indexOf(k)>=0)&&Object.prototype.propertyIsEnumerable.call(b,k)&&(T[k]=b[k])}return T}function m(b,c){if(b==null)return{};var T={},k=Object.keys(b),x,_;for(_=0;_<k.length;_++)x=k[_],!(c.indexOf(x)>=0)&&(T[x]=b[x]);return T}var f=Object(G.forwardRef)(function(b,c){var T=b.isMore,k=T===void 0?!0:T,x=b.labels,_=x===void 0?[]:x,D=b.headTitle,W=D===void 0?"Room Type":D,B=b.footerTitle,I=B===void 0?"Benefit":B,O=b.optionName,l=O===void 0?"\uC635\uC158 \uC124\uBA85":O,u=b.isDuration,a=u===void 0?!0:u,p=b.minNight,s=b.maxNight,h=b.roomType,P=b.benefitList,M=P===void 0?[]:P,A=b.price,S=b.buttonName,L=S===void 0?"\uC608\uC57D\uD558\uAE30":S,U=b.onClick,Y=b.className,re=j(b,i),ce=H(),q=ce.classes,ie=ce.cx;return Object(n.jsxs)(z.a,Object.assign({component:"div",ref:c,className:ie(Y,q.card)},re,{children:[Object(n.jsxs)("div",{className:q.container,children:[Object(n.jsxs)("div",{className:q.headerGroup,children:[_.length>0&&Object(n.jsx)(R.a,{type:"fill",style:{marginBottom:4},children:_==null?void 0:_.map(function(te,de){return Object(n.jsx)(R.a.Item,{label:te,colorIdx:de})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(N.a,{level:"display5",color:"primary1",strong:!0,children:l}),a&&Object(n.jsxs)(N.a,{level:"body2",color:"onPrimaryContainer",children:["(",p&&p+"\uBC15"," - ",s&&s+"\uBC15",")"]})]})]}),Object(n.jsxs)("div",{className:q.groupBox,children:[Object(n.jsx)(N.a,{level:"subhead2",color:"primary1",children:W}),Object(n.jsx)("div",{className:q.divider}),Object(n.jsx)(N.a,{level:"body2",color:"primary3",children:h})]}),M.length>0&&Object(n.jsxs)("div",{className:q.groupBox,children:[Object(n.jsxs)("div",{className:q.titleBox,children:[Object(n.jsx)(N.a,{level:"subhead2",color:"primary1",children:I}),k&&Object(n.jsx)(V.a,{variant:"text",rightIcon:Object(n.jsx)(C.a,{src:"IcAngleRight",width:16,height:16}),children:"\uB354\uBCF4\uAE30"})]}),Object(n.jsx)("div",{className:q.divider}),Object(n.jsx)("ul",{children:M.map(function(te){var de=te.content;return Object(n.jsx)(N.a,{level:"body2",color:"primary1",component:"li",children:de})})})]}),A&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:q.divider}),Object(n.jsxs)("div",{className:q.priceBox,children:[Object(n.jsx)(t.a,Object.assign({},A,{type:"secondary",label:"\uC815\uAC00"})),Object(n.jsx)(t.a,Object.assign({},A,{type:"primary"}))]})]})]}),Object(n.jsx)(V.a,{className:q.submitButton,size:"medium",fullWidth:!0,onClick:U,children:L})]}))});f.displayName="OptionCard";var r=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { OptionCard } from \\"../OptionCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/OptionCard\\",\\n  component: OptionCard,\\n  argTypes: {\\n    labels: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    headTitle: {\\n      defaultValue: \\"Room Type\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    footerTitle: {\\n      defaultValue: \\"Benefit\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    optionName: {\\n      defaultValue: \\"\uC635\uC158 \uC124\uBA85\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    isDuration: {\\n      defaultValue: true,\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    minNight: {\\n      defaultValue: 1,\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    maxNight: {\\n      defaultValue: 2,\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    roomType: {\\n      defaultValue: \\"\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    benefitList: {\\n      defaultValue: [\\n        {\\n          content: \\"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694\\",\\n          only: false,\\n          order: 1,\\n        },\\n        {\\n          content: \\"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694\\",\\n          only: false,\\n          order: 2,\\n        },\\n        {\\n          content: \\"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694\\",\\n          only: false,\\n          order: 3,\\n        },\\n      ],\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    price: {\\n      defaultValue: {\\n        type: \\"primary\\",\\n        label: \\"\\",\\n        percentText: 70,\\n        nightText: \\"\\",\\n        priceText: 10000,\\n        priceStartText: \\"\\",\\n        isCoupon: true,\\n      },\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n    buttonName: {\\n      defaultValue: \\"\uC608\uC57D\uD558\uAE30\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":145},"endLoc":{"col":1,"line":151},"startBody":{"col":23,"line":145},"endBody":{"col":1,"line":151}}};
    
import { Meta } from "@storybook/react";
import { OptionCard } from "../OptionCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/OptionCard",
  component: OptionCard,
  argTypes: {
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    headTitle: {
      defaultValue: "Room Type",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    footerTitle: {
      defaultValue: "Benefit",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    optionName: {
      defaultValue: "\uC635\uC158 \uC124\uBA85",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isDuration: {
      defaultValue: true,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    minNight: {
      defaultValue: 1,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    maxNight: {
      defaultValue: 2,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    roomType: {
      defaultValue: "\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    benefitList: {
      defaultValue: [
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 1,
        },
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 2,
        },
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 3,
        },
      ],
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: "",
        priceText: 10000,
        priceStartText: "",
        isCoupon: true,
      },
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    buttonName: {
      defaultValue: "\uC608\uC57D\uD558\uAE30",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 40 }}>
      <OptionCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,o={Default:{startLoc:{col:23,line:153},endLoc:{col:1,line:159},startBody:{col:23,line:153},endBody:{col:1,line:159}}},r=`import { Meta } from "@storybook/react";
import { OptionCard } from "../OptionCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/OptionCard",
  component: OptionCard,
  argTypes: {
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    headTitle: {
      defaultValue: "Room Type",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    footerTitle: {
      defaultValue: "Benefit",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    optionName: {
      defaultValue: "\uC635\uC158 \uC124\uBA85",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isDuration: {
      defaultValue: true,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    minNight: {
      defaultValue: 1,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    maxNight: {
      defaultValue: 2,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    roomType: {
      defaultValue: "\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    benefitList: {
      defaultValue: [
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 1,
        },
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 2,
        },
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 3,
        },
      ],
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: "",
        priceText: 10000,
        priceStartText: "",
        isCoupon: true,
      },
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    buttonName: {
      defaultValue: "\uC608\uC57D\uD558\uAE30",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 40 }}>
      <OptionCard {...props} />
    </div>
  );
};
`,o={Default:{startLoc:{col:23,line:145},endLoc:{col:1,line:151},startBody:{col:23,line:145},endBody:{col:1,line:151}}},v=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { OptionCard } from \\"../OptionCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/OptionCard\\",\\n  component: OptionCard,\\n  argTypes: {\\n    labels: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    headTitle: {\\n      defaultValue: \\"Room Type\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    footerTitle: {\\n      defaultValue: \\"Benefit\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    optionName: {\\n      defaultValue: \\"\uC635\uC158 \uC124\uBA85\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    isDuration: {\\n      defaultValue: true,\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    minNight: {\\n      defaultValue: 1,\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    maxNight: {\\n      defaultValue: 2,\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    roomType: {\\n      defaultValue: \\"\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    benefitList: {\\n      defaultValue: [\\n        {\\n          content: \\"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694\\",\\n          only: false,\\n          order: 1,\\n        },\\n        {\\n          content: \\"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694\\",\\n          only: false,\\n          order: 2,\\n        },\\n        {\\n          content: \\"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694\\",\\n          only: false,\\n          order: 3,\\n        },\\n      ],\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n    price: {\\n      defaultValue: {\\n        type: \\"primary\\",\\n        label: \\"\\",\\n        percentText: 70,\\n        nightText: \\"\\",\\n        priceText: 10000,\\n        priceStartText: \\"\\",\\n        isCoupon: true,\\n      },\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"object\\",\\n        },\\n      },\\n      control: { type: \\"object\\" },\\n    },\\n    buttonName: {\\n      defaultValue: \\"\uC608\uC57D\uD558\uAE30\\",\\n      description: \\"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":145},"endLoc":{"col":1,"line":151},"startBody":{"col":23,"line":145},"endBody":{"col":1,"line":151}}};
    
import { Meta } from "@storybook/react";
import { OptionCard } from "../OptionCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/OptionCard",
  component: OptionCard,
  argTypes: {
    labels: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    headTitle: {
      defaultValue: "Room Type",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    footerTitle: {
      defaultValue: "Benefit",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    optionName: {
      defaultValue: "\uC635\uC158 \uC124\uBA85",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isDuration: {
      defaultValue: true,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    minNight: {
      defaultValue: 1,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    maxNight: {
      defaultValue: 2,
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    roomType: {
      defaultValue: "\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    benefitList: {
      defaultValue: [
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 1,
        },
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 2,
        },
        {
          content: "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          only: false,
          order: 3,
        },
      ],
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: "",
        priceText: 10000,
        priceStartText: "",
        isCoupon: true,
      },
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    buttonName: {
      defaultValue: "\uC608\uC57D\uD558\uAE30",
      description: "OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 40 }}>
      <OptionCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:153},endLoc:{col:1,line:159},startBody:{col:23,line:153},endBody:{col:1,line:159}}}}},title:"@travelmakers-design-v2/core/General/Card/OptionCard",component:f,argTypes:{labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},headTitle:{defaultValue:"Room Type",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},footerTitle:{defaultValue:"Benefit",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},optionName:{defaultValue:"\uC635\uC158 \uC124\uBA85",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isDuration:{defaultValue:!0,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},minNight:{defaultValue:1,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},maxNight:{defaultValue:2,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},roomType:{defaultValue:"\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},benefitList:{defaultValue:[{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:1},{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:2},{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:3}],description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:"",priceText:1e4,priceStartText:"",isCoupon:!0},description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}},buttonName:{defaultValue:"\uC608\uC57D\uD558\uAE30",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},y=function(c){return Object(n.jsx)("div",{style:{margin:40},children:Object(n.jsx)(f,Object.assign({},c))})};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 40 }}>
      <OptionCard {...props} />
    </div>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return j});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/react/index.js"),d=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),R=Object(H.a)(function(m,f){var r=f.status;return{container:{width:"120px",display:"inline-block",border:"1px solid "+m.colors.outline,borderRadius:m.spacing.spacing5,padding:m.spacing.spacing10+" "+m.spacing.spacing20}}}),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),C=e("./node_modules/react/jsx-runtime.js"),t=["status","name","description","tag","className"];function n(m,f){if(m==null)return{};var r=i(m,f),o,v;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(m);for(v=0;v<y.length;v++)o=y[v],!(f.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(m,o)&&(r[o]=m[o])}return r}function i(m,f){if(m==null)return{};var r={},o=Object.keys(m),v,y;for(y=0;y<o.length;y++)v=o[y],!(f.indexOf(v)>=0)&&(r[v]=m[v]);return r}var j=Object(z.forwardRef)(function(m,f){var r=m.status,o=m.name,v=m.description,y=m.tag,b=m.className,c=n(m,t),T=R({status:r}),k=T.classes,x=T.cx,_={active:"primary1",disabled:"primary4"};return Object(C.jsxs)(d.a,Object.assign({component:"div",ref:f,className:x(b,k.container)},c,{children:[Object(C.jsx)(N.a,{level:"body2",color:_[r],strong:!0,children:o}),Object(C.jsx)("br",{}),Object(C.jsx)(N.a,{level:"body3",color:_[r],strong:!0,children:v}),Object(C.jsx)("br",{}),r==="active"&&Object(C.jsx)(V.a,{type:"fill",color:"gray",roundness:"half",children:Object(C.jsx)(V.a.Item,{label:v})})]}))});j.displayName="PriceCard"},"./packages/travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { PriceCard } from \\"../PriceCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/PriceCard\\",\\n  component: PriceCard,\\n  argTypes: {\\n    status: {\\n      defaultValue: \\"active\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"active\\", \\"disabled\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    name: {\\n      defaultValue: \\"name\\",\\n      description: \\"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"description\\",\\n      description: \\"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    tag: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description: \\"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <PriceCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":47},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":47},"endBody":{"col":1,"line":49}}};
    
import { Meta } from "@storybook/react";
import { PriceCard } from "../PriceCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/PriceCard",
  component: PriceCard,
  argTypes: {
    status: {
      defaultValue: "active",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["active", "disabled"],
      control: { type: "inline-radio" },
    },
    name: {
      defaultValue: "name",
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "description",
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tag: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <PriceCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <PriceCard {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:55},endLoc:{col:1,line:57},startBody:{col:23,line:55},endBody:{col:1,line:57}}},G=`import { Meta } from "@storybook/react";
import { PriceCard } from "../PriceCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/PriceCard",
  component: PriceCard,
  argTypes: {
    status: {
      defaultValue: "active",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["active", "disabled"],
      control: { type: "inline-radio" },
    },
    name: {
      defaultValue: "name",
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "description",
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tag: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <PriceCard {...props} />;
};
`,z={Default:{startLoc:{col:23,line:47},endLoc:{col:1,line:49},startBody:{col:23,line:47},endBody:{col:1,line:49}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { PriceCard } from \\"../PriceCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/PriceCard\\",\\n  component: PriceCard,\\n  argTypes: {\\n    status: {\\n      defaultValue: \\"active\\",\\n      description: \\"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"active\\", \\"disabled\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    name: {\\n      defaultValue: \\"name\\",\\n      description: \\"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"description\\",\\n      description: \\"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    tag: {\\n      defaultValue: [\\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\", \\"\uB808\uC774\uBE14\\"],\\n      description: \\"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"array\\",\\n        },\\n      },\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <PriceCard {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":47},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":47},"endBody":{"col":1,"line":49}}};
    
import { Meta } from "@storybook/react";
import { PriceCard } from "../PriceCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/PriceCard",
  component: PriceCard,
  argTypes: {
    status: {
      defaultValue: "active",
      description: "Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["active", "disabled"],
      control: { type: "inline-radio" },
    },
    name: {
      defaultValue: "name",
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "description",
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tag: {
      defaultValue: ["\uB808\uC774\uBE14", "\uB808\uC774\uBE14", "\uB808\uC774\uBE14"],
      description: "PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <PriceCard {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <PriceCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:55},endLoc:{col:1,line:57},startBody:{col:23,line:55},endBody:{col:1,line:57}}}}},title:"@travelmakers-design-v2/core/General/Card/PriceCard",component:w.a,argTypes:{status:{defaultValue:"active",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["active","disabled"],control:{type:"inline-radio"}},name:{defaultValue:"name",description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"description",description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},tag:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}}}};var d=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <PriceCard {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return f});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(r){return{root:{backgroundColor:"rgba(200, 200, 200, 0.5)",borderRadius:r.radius.radius20,padding:r.spacing.spacing20,position:"relative",overflow:"hidden",minWidth:"328px"},titleWrapper:{marginBottom:r.spacing.spacing10,maxWidth:"220px"},labelWrapper:{display:"flex",alignItems:"center",width:"fit-content"},labelText:{width:"fit-content"},arrowImage:{width:"16px",height:"16px",marginLeft:"2px"},imageOval:{position:"absolute",width:"78.03px",height:"110.61px",right:-5,bottom:-25,background:"linear-gradient(149.99deg, rgba(255, 255, 255, 0.5) 0%, rgba(200, 200, 200, 0.5) 88.27%)",borderRadius:"7575.76px"}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./node_modules/react/jsx-runtime.js"),V=["onClick","className","children"];function C(r,o){if(r==null)return{};var v=t(r,o),y,b;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(b=0;b<c.length;b++)y=c[b],!(o.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(r,y)&&(v[y]=r[y])}return v}function t(r,o){if(r==null)return{};var v={},y=Object.keys(r),b,c;for(c=0;c<y.length;c++)b=y[c],!(o.indexOf(b)>=0)&&(v[b]=r[b]);return v}var n=Object(w.forwardRef)(function(r,o){var v=r.onClick,y=r.className,b=r.children,c=C(r,V),T=H(),k=T.classes,x=T.cx;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(z.a,Object.assign({component:"div",ref:o,className:x(y,k.root)},c,{children:[Object(N.jsx)("div",{className:x(k.titleWrapper),children:Object(N.jsxs)(R.a,{family:"Pretendard",level:"body2",color:"white",className:x(k.titleWrapper),children:[Object(N.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",width:"20%",borderRadius:8}}),Object(N.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",marginTop:2,borderRadius:8}})]})}),Object(N.jsx)("div",{className:x(k.labelWrapper),onClick:v,children:Object(N.jsx)(R.a,{className:x(k.labelText),family:"Pretendard",level:"body1",color:"white",strong:!0,children:Object(N.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",width:"100px",borderRadius:8}})})}),Object(N.jsx)("div",{className:x(k.imageOval)})]})),b]})});n.displayName="SkeletonTimeLineBanner";var i=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { SkeletonTimeLineBanner } from \\"../SkeletonTimeLineBanner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner\\",\\n  component: SkeletonTimeLineBanner,\\n  argTypes: {},\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":38},"endLoc":{"col":1,"line":46},"startBody":{"col":23,"line":38},"endBody":{"col":1,"line":46}}};
    
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
import { SkeletonTimeLineBanner } from "../SkeletonTimeLineBanner";

export default {
  title: "@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner",
  component: SkeletonTimeLineBanner,
  argTypes: {},
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <SkeletonTimeLineBanner />
      </div>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:54},startBody:{col:23,line:46},endBody:{col:1,line:54}}},i=`import {
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
import { SkeletonTimeLineBanner } from "../SkeletonTimeLineBanner";

export default {
  title: "@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner",
  component: SkeletonTimeLineBanner,
  argTypes: {},
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <SkeletonTimeLineBanner />
      </div>
    </>
  );
};
`,j={Default:{startLoc:{col:23,line:38},endLoc:{col:1,line:46},startBody:{col:23,line:38},endBody:{col:1,line:46}}},m=g.default={title:"@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner",component:n,argTypes:{},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { SkeletonTimeLineBanner } from \\"../SkeletonTimeLineBanner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner\\",\\n  component: SkeletonTimeLineBanner,\\n  argTypes: {},\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":38},"endLoc":{"col":1,"line":46},"startBody":{"col":23,"line":38},"endBody":{"col":1,"line":46}}};
    
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
import { SkeletonTimeLineBanner } from "../SkeletonTimeLineBanner";

export default {
  title: "@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner",
  component: SkeletonTimeLineBanner,
  argTypes: {},
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <SkeletonTimeLineBanner />
      </div>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:46},endLoc:{col:1,line:54},startBody:{col:23,line:46},endBody:{col:1,line:54}}}},docs:{page:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)($.g,{}),Object(N.jsx)($.f,{}),Object(N.jsx)($.b,{}),Object(N.jsx)($.d,{}),Object(N.jsx)($.a,{story:$.c}),Object(N.jsx)($.e,{})]})}},actions:{handles:["click"]}}},f=function(o){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{style:{padding:24,width:328},children:Object(N.jsx)(n,{})})})};f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <SkeletonTimeLineBanner />
      </div>
    </>
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return v});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),d=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),R=Object(H.a)(function(y,b){var c,T,k=b.isArrow,x=b.isLabel;return{root:{backgroundColor:y.colors.white,borderRadius:y.radius.radius20,padding:y.spacing.spacing20},container:{display:"flex",gap:y.spacing.spacing20,cursor:k?"pointer":"auto"},image:{borderRadius:y.radius.radius20},textContainer:{width:"100%"},description:{marginTop:"7px"},footerWrapper:{marginTop:"7px",height:x?y.lineHeights.body3:"47px",display:"flex",alignItems:!x&&"flex-end !important"},textBreak:(c={overflow:"hidden",textOverflow:"ellipsis",height:y.lineHeights.body3,wordWrap:"break-word",display:"-webkit-box"},c["-webkit-line-clamp"]="1",c["-webkit-box-orient"]="vertical",c),textRoomBreak:(T={overflow:"hidden",textOverflow:"ellipsis",wordWrap:"break-word",display:"-webkit-box"},T["-webkit-line-clamp"]=x?"1":"2",T["-webkit-box-orient"]="vertical",T),flex:{display:"flex",alignItems:"center"},spaceBetween:{justifyContent:"space-between"},arrowImage:{width:"16px",height:"16px"}}}),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),C=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),t=e("./node_modules/react/jsx-runtime.js"),n=["hotelImage","title","titleDisable","message","messageDisable","messageUnderline","messageClick","label","roomType","onClick","isArrow","isLabel","className","children"];function i(y,b){if(y==null)return{};var c=j(y,b),T,k;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(y);for(k=0;k<x.length;k++)T=x[k],!(b.indexOf(T)>=0)&&Object.prototype.propertyIsEnumerable.call(y,T)&&(c[T]=y[T])}return c}function j(y,b){if(y==null)return{};var c={},T=Object.keys(y),k,x;for(x=0;x<T.length;x++)k=T[x],!(b.indexOf(k)>=0)&&(c[k]=y[k]);return c}var m=Object(w.forwardRef)(function(y,b){var c=y.hotelImage,T=y.title,k=y.titleDisable,x=k===void 0?!1:k,_=y.message,D=y.messageDisable,W=D===void 0?!1:D,B=y.messageUnderline,I=B===void 0?!1:B,O=y.messageClick,l=y.label,u=y.roomType,a=y.onClick,p=y.isArrow,s=p===void 0?!0:p,h=y.isLabel,P=h===void 0?!0:h,M=y.className,A=y.children,S=i(y,n),L=R({isArrow:s,isLabel:P}),U=L.classes,Y=L.cx;return Object(t.jsxs)(d.a,Object.assign({component:"div",ref:b,className:Y(M,U.root)},S,{children:[Object(t.jsxs)("div",{className:Y(U.container),onClick:a,children:[Object(t.jsx)(C.a,{src:c,className:Y(U.image),alt:T+" | "+u,width:98,height:98}),Object(t.jsxs)(d.a,{className:Y(U.textContainer),children:[Object(t.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(t.jsx)(N.a,{family:"Pretendard",level:"body2",color:x?"tertiary30":"primary1",strong:!0,children:T}),Object(t.jsx)(N.a,{family:"Pretendard",level:"body3",color:W?"tertiary30":"primary1",style:{textDecorationLine:I?"underline":"none",cursor:I&&"pointer",width:"fit-content"},onClick:function(ce){O&&(ce.stopPropagation(),O())},strong:!0,children:_})]}),P&&Object(t.jsx)(N.a,{family:"Pretendard",level:"body3",color:"primary1",className:Y(U.description,U.textBreak),children:l}),Object(t.jsxs)(d.a,{className:Y(U.flex,U.spaceBetween,U.footerWrapper),children:[Object(t.jsx)(N.a,{family:"Pretendard",level:"body3",color:"primary1",className:Y(U.textRoomBreak),children:u}),s?Object(t.jsx)(V.a,{src:"IcAngleRight",width:16,height:16}):Object(t.jsx)(t.Fragment,{})]})]})]}),S.children]}))});m.displayName="StatusCard";var f=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { StatusCard } from \\"../StatusCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/StatusCard\\",\\n  component: StatusCard,\\n  argTypes: {\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/60/40\\",\\n      description: \\"\uC774\uBBF8\uC9C0 \uD45C\uC2DC\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD22C\uC5B4 \uD655\uC815 \uC804\\",\\n      description: \\"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    message: {\\n      defaultValue: \\"00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815\\",\\n      description: \\"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    roomType: {\\n      defaultValue: \\"\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8\\",\\n      description: \\"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30\\",\\n      description: \\"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    isArrow: {\\n      defaultValue: true,\\n      description: \\"Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n    isLabel: {\\n      defaultValue: true,\\n      description: \\"Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n\\n    onClick: { action: \\"clicked\\" },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":100},"endLoc":{"col":1,"line":108},"startBody":{"col":23,"line":100},"endBody":{"col":1,"line":108}}};
    
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
import { StatusCard } from "../StatusCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/StatusCard",
  component: StatusCard,
  argTypes: {
    hotelImage: {
      defaultValue: "https://picsum.photos/60/40",
      description: "\uC774\uBBF8\uC9C0 \uD45C\uC2DC",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "\uD22C\uC5B4 \uD655\uC815 \uC804",
      description: "Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue: "00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815",
      description: "message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    roomType: {
      defaultValue: "\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8",
      description: "message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    label: {
      defaultValue: "\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",
      description: "Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isArrow: {
      defaultValue: true,
      description: "Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      control: { type: "boolean" },
    },
    isLabel: {
      defaultValue: true,
      description: "Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      control: { type: "boolean" },
    },

    onClick: { action: "clicked" },
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <StatusCard {...props} />
      </div>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:108},endLoc:{col:1,line:116},startBody:{col:23,line:108},endBody:{col:1,line:116}}},f=`import {
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
import { StatusCard } from "../StatusCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/StatusCard",
  component: StatusCard,
  argTypes: {
    hotelImage: {
      defaultValue: "https://picsum.photos/60/40",
      description: "\uC774\uBBF8\uC9C0 \uD45C\uC2DC",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "\uD22C\uC5B4 \uD655\uC815 \uC804",
      description: "Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue: "00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815",
      description: "message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    roomType: {
      defaultValue: "\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8",
      description: "message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    label: {
      defaultValue: "\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",
      description: "Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isArrow: {
      defaultValue: true,
      description: "Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      control: { type: "boolean" },
    },
    isLabel: {
      defaultValue: true,
      description: "Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      control: { type: "boolean" },
    },

    onClick: { action: "clicked" },
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <StatusCard {...props} />
      </div>
    </>
  );
};
`,r={Default:{startLoc:{col:23,line:100},endLoc:{col:1,line:108},startBody:{col:23,line:100},endBody:{col:1,line:108}}},o=g.default={title:"@travelmakers-design-v2/core/General/Card/StatusCard",component:m,argTypes:{hotelImage:{defaultValue:"https://picsum.photos/60/40",description:"\uC774\uBBF8\uC9C0 \uD45C\uC2DC",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"\uD22C\uC5B4 \uD655\uC815 \uC804",description:"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},message:{defaultValue:"00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815",description:"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roomType:{defaultValue:"\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8",description:"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},label:{defaultValue:"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",description:"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isArrow:{defaultValue:!0,description:"Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",control:{type:"boolean"}},isLabel:{defaultValue:!0,description:"Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",control:{type:"boolean"}},onClick:{action:"clicked"}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { StatusCard } from \\"../StatusCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/StatusCard\\",\\n  component: StatusCard,\\n  argTypes: {\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/60/40\\",\\n      description: \\"\uC774\uBBF8\uC9C0 \uD45C\uC2DC\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uD22C\uC5B4 \uD655\uC815 \uC804\\",\\n      description: \\"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    message: {\\n      defaultValue: \\"00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815\\",\\n      description: \\"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    roomType: {\\n      defaultValue: \\"\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8\\",\\n      description: \\"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30\\",\\n      description: \\"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    isArrow: {\\n      defaultValue: true,\\n      description: \\"Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n    isLabel: {\\n      defaultValue: true,\\n      description: \\"Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n\\n    onClick: { action: \\"clicked\\" },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":100},"endLoc":{"col":1,"line":108},"startBody":{"col":23,"line":100},"endBody":{"col":1,"line":108}}};
    
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
import { StatusCard } from "../StatusCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/StatusCard",
  component: StatusCard,
  argTypes: {
    hotelImage: {
      defaultValue: "https://picsum.photos/60/40",
      description: "\uC774\uBBF8\uC9C0 \uD45C\uC2DC",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "\uD22C\uC5B4 \uD655\uC815 \uC804",
      description: "Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue: "00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815",
      description: "message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    roomType: {
      defaultValue: "\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8",
      description: "message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    label: {
      defaultValue: "\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",
      description: "Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isArrow: {
      defaultValue: true,
      description: "Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      control: { type: "boolean" },
    },
    isLabel: {
      defaultValue: true,
      description: "Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      control: { type: "boolean" },
    },

    onClick: { action: "clicked" },
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <StatusCard {...props} />
      </div>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:108},endLoc:{col:1,line:116},startBody:{col:23,line:108},endBody:{col:1,line:116}}}},docs:{page:function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)($.g,{}),Object(t.jsx)($.f,{}),Object(t.jsx)($.b,{}),Object(t.jsx)($.d,{}),Object(t.jsx)($.a,{story:$.c}),Object(t.jsx)($.e,{})]})}},actions:{handles:["click"]}}},v=function(b){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{style:{padding:24},children:Object(t.jsx)(m,Object.assign({},b))})})};v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <StatusCard {...props} />
      </div>
    </>
  );
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return r}),e.d(g,"Skeleton",function(){return o});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(v,y){var b,c=y.status,T=y.arrowHidden;return{root:{backgroundColor:c==="default"?"#0D5E49":"#C96F48",borderRadius:v.radius.radius20,padding:v.spacing.spacing20,position:"relative",overflow:"hidden",minWidth:"328px",cursor:"pointer"},titleWrapper:{marginBottom:v.spacing.spacing30,maxWidth:"220px"},textMaxLength:(b={},b["& > div "]={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},b),labelWrapper:{display:"flex",alignItems:"center",width:"fit-content"},labelText:{width:"fit-content"},arrowImage:{width:"16px",height:"16px",marginLeft:"2px"},imageOval:{position:"absolute",width:"78.03px",height:"110.61px",right:-5,bottom:-25,background:c==="default"?"linear-gradient(149.99deg, rgba(19, 134, 104, 0.8) 0%, rgba(127, 102, 16, 0.8) 88.27%)":"linear-gradient(103.18deg, rgba(222, 148, 80, 0.48) 40.51%, rgba(217, 59, 59, 0.8) 100%)",borderRadius:"7575.76px"}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),V=e("./node_modules/react/jsx-runtime.js"),C=["status","title","message","label","arrowHidden","onClick","className","children"];function t(v,y){if(v==null)return{};var b=n(v,y),c,T;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(v);for(T=0;T<k.length;T++)c=k[T],!(y.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(v,c)&&(b[c]=v[c])}return b}function n(v,y){if(v==null)return{};var b={},c=Object.keys(v),T,k;for(k=0;k<c.length;k++)T=c[k],!(y.indexOf(T)>=0)&&(b[T]=v[T]);return b}var i=Object(w.forwardRef)(function(v,y){var b=v.status,c=v.title,T=c===void 0?"&nbsp;":c,k=v.message,x=k===void 0?"&nbsp;":k,_=v.label,D=_===void 0?"&nbsp;":_,W=v.arrowHidden,B=W===void 0?!1:W,I=v.onClick,O=v.className,l=v.children,u=t(v,C),a=H({status:b,arrowHidden:B}),p=a.classes,s=a.cx;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(z.a,Object.assign({component:"div",ref:y,className:s(O,p.root),onClick:I},u,{children:[Object(V.jsx)("div",{className:s(p.titleWrapper),children:Object(V.jsxs)(R.a,{family:"Pretendard",level:"body2",color:"white",className:s(p.textMaxLength),children:[Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:T}}),Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:x}})]})}),Object(V.jsxs)("div",{className:s(p.labelWrapper),children:[Object(V.jsx)(R.a,{className:s(p.labelText,p.textMaxLength),family:"Pretendard",level:"body1",color:"white",strong:!0,children:Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:D}})}),!B&&Object(V.jsx)(N.a,{src:"IcAngleRight",color:"white",width:16,height:16,className:s(p.arrowImage)})]}),Object(V.jsx)("div",{className:s(p.imageOval)})]})),u.children]})});i.displayName="TimeLineBanner";var j=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { TimeLineBanner } from \\"../TimeLineBanner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/TimeLineBanner\\",\\n  component: TimeLineBanner,\\n  argTypes: {\\n    status: {\\n      defaultValue: \\"default\\",\\n      description: \\"\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"alert\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8\\",\\n      description: \\"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    message: {\\n      defaultValue:\\n        \\"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\\",\\n      description: \\"Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30\\",\\n      description: \\"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    arrowHidden: {\\n      defaultValue: false,\\n      description: \\"Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    onClick: { action: \\"clicked\\" },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner {...props} />\\n      </div>\\n    </>\\n  );\\n};\\n\\nexport const Skeleton = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":87},"endLoc":{"col":1,"line":95},"startBody":{"col":23,"line":87},"endBody":{"col":1,"line":95}},"Skeleton":{"startLoc":{"col":24,"line":97},"endLoc":{"col":1,"line":105},"startBody":{"col":24,"line":97},"endBody":{"col":1,"line":105}}};
    
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
import { TimeLineBanner } from "../TimeLineBanner";

export default {
  title: "@travelmakers-design-v2/core/General/Card/TimeLineBanner",
  component: TimeLineBanner,
  argTypes: {
    status: {
      defaultValue: "default",
      description: "\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.",
      options: ["default", "alert"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8",
      description: "Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue:
        "\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?",
      description: "Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    label: {
      defaultValue: "\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",
      description: "Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    arrowHidden: {
      defaultValue: false,
      description: "Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner {...props} />
      </div>
    </>
  );
};;

export const Skeleton = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner status={"default"} arrowHidden={true} />
      </div>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };
Skeleton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Skeleton.parameters };`,m={Default:{startLoc:{col:23,line:95},endLoc:{col:1,line:103},startBody:{col:23,line:95},endBody:{col:1,line:103}},Skeleton:{startLoc:{col:24,line:105},endLoc:{col:1,line:113},startBody:{col:24,line:105},endBody:{col:1,line:113}}},j=`import {
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
import { TimeLineBanner } from "../TimeLineBanner";

export default {
  title: "@travelmakers-design-v2/core/General/Card/TimeLineBanner",
  component: TimeLineBanner,
  argTypes: {
    status: {
      defaultValue: "default",
      description: "\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.",
      options: ["default", "alert"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8",
      description: "Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue:
        "\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?",
      description: "Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    label: {
      defaultValue: "\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",
      description: "Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    arrowHidden: {
      defaultValue: false,
      description: "Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner {...props} />
      </div>
    </>
  );
};

export const Skeleton = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner status={"default"} arrowHidden={true} />
      </div>
    </>
  );
};
`,m={Default:{startLoc:{col:23,line:87},endLoc:{col:1,line:95},startBody:{col:23,line:87},endBody:{col:1,line:95}},Skeleton:{startLoc:{col:24,line:97},endLoc:{col:1,line:105},startBody:{col:24,line:97},endBody:{col:1,line:105}}},f=g.default={title:"@travelmakers-design-v2/core/General/Card/TimeLineBanner",component:i,argTypes:{status:{defaultValue:"default",description:"\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.",options:["default","alert"],control:{type:"inline-radio"}},title:{defaultValue:"\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8",description:"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},message:{defaultValue:"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?",description:"Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},label:{defaultValue:"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",description:"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},arrowHidden:{defaultValue:!1,description:"Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},onClick:{action:"clicked"}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\nimport { TimeLineBanner } from \\"../TimeLineBanner\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Card/TimeLineBanner\\",\\n  component: TimeLineBanner,\\n  argTypes: {\\n    status: {\\n      defaultValue: \\"default\\",\\n      description: \\"\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"alert\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8\\",\\n      description: \\"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    message: {\\n      defaultValue:\\n        \\"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\\",\\n      description: \\"Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30\\",\\n      description: \\"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    arrowHidden: {\\n      defaultValue: false,\\n      description: \\"Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    onClick: { action: \\"clicked\\" },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner {...props} />\\n      </div>\\n    </>\\n  );\\n};\\n\\nexport const Skeleton = (props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":87},"endLoc":{"col":1,"line":95},"startBody":{"col":23,"line":87},"endBody":{"col":1,"line":95}},"Skeleton":{"startLoc":{"col":24,"line":97},"endLoc":{"col":1,"line":105},"startBody":{"col":24,"line":97},"endBody":{"col":1,"line":105}}};
    
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
import { TimeLineBanner } from "../TimeLineBanner";

export default {
  title: "@travelmakers-design-v2/core/General/Card/TimeLineBanner",
  component: TimeLineBanner,
  argTypes: {
    status: {
      defaultValue: "default",
      description: "\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.",
      options: ["default", "alert"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8",
      description: "Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue:
        "\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?",
      description: "Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    label: {
      defaultValue: "\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",
      description: "Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    arrowHidden: {
      defaultValue: false,
      description: "Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner {...props} />
      </div>
    </>
  );
};;

export const Skeleton = (props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner status={"default"} arrowHidden={true} />
      </div>
    </>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };
Skeleton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Skeleton.parameters };`,locationsMap:{default:{startLoc:{col:23,line:95},endLoc:{col:1,line:103},startBody:{col:23,line:95},endBody:{col:1,line:103}},skeleton:{startLoc:{col:24,line:105},endLoc:{col:1,line:113},startBody:{col:24,line:105},endBody:{col:1,line:113}}}},docs:{page:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)($.g,{}),Object(V.jsx)($.f,{}),Object(V.jsx)($.b,{}),Object(V.jsx)($.d,{}),Object(V.jsx)($.a,{story:$.c}),Object(V.jsx)($.e,{})]})}},actions:{handles:["click"]}}},r=function(y){return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{style:{padding:24,width:328},children:Object(V.jsx)(i,Object.assign({},y))})})},o=function(y){return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{style:{padding:24,width:328},children:Object(V.jsx)(i,{status:"default",arrowHidden:!0})})})};r.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner {...props} />
      </div>
    </>
  );
}`}},r.parameters),o.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner status={"default"} arrowHidden={true} />
      </div>
    </>
  );
}`}},o.parameters)},"./packages/travelmakers-design-core/src/components/Divider/stories/Divider.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Horizontal",function(){return m}),e.d(g,"Vertical",function(){return f});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=function(o,v,y,b,c){var T={backgroundColor:o[c]},k={width:y!=null?y:"100%",height:b!=null?b:"1px"},x={width:y!=null?y:"1px",height:b!=null?b:"100%"},_={horizontal:k,vertical:x};return _[v]?Object.assign({},T,_[v]):null},H=Object(z.a)(function(r,o){var v=o.type,y=o.width,b=o.height,c=o.color,T=r.colors;return{root:Object.assign({},d(T,v,y,b,c))}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","width","height","color","className"];function V(r,o){if(r==null)return{};var v=C(r,o),y,b;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(b=0;b<c.length;b++)y=c[b],!(o.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(r,y)&&(v[y]=r[y])}return v}function C(r,o){if(r==null)return{};var v={},y=Object.keys(r),b,c;for(c=0;c<y.length;c++)b=y[c],!(o.indexOf(b)>=0)&&(v[b]=r[b]);return v}var t=Object(E.forwardRef)(function(r,o){var v=r.type,y=r.width,b=r.height,c=r.color,T=c===void 0?"primary3":c,k=r.className,x=V(r,N),_=H({type:v,width:y,height:b,color:T}),D=_.classes,W=_.cx;return Object(R.jsx)(G.a,Object.assign({component:"div",ref:o,className:W(D.root,k)},x))});t.displayName="Divider";var n=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Divider } from \\"../Divider\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Divider\\",\\n  component: Divider,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"horizontal\\", \\"vertical\\"],\\n      },\\n      description: \\"Divider \uBC29\uD5A5\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    width: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"Divider \uAC00\uB85C \uAE38\uC774\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    height: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"Divider \uC138\uB85C \uAE38\uC774\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    color: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      defaultValue: \\"primary3\\",\\n      description: \\"TmColor\uC758 \uD1A0\uD070 \uAC12\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Horizontal = (props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"horizontal\\"} />\\n    </div>\\n  );\\n};\\n\\nexport const Vertical = (props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"vertical\\"} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Horizontal":{"startLoc":{"col":26,"line":57},"endLoc":{"col":1,"line":71},"startBody":{"col":26,"line":57},"endBody":{"col":1,"line":71}},"Vertical":{"startLoc":{"col":24,"line":73},"endLoc":{"col":1,"line":87},"startBody":{"col":24,"line":73},"endBody":{"col":1,"line":87}}};
    
import { Meta } from "@storybook/react";
import { Divider } from "../Divider";

export default {
  title: "@travelmakers-design-v2/core/General/Divider",
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      description: "Divider \uBC29\uD5A5",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      control: {
        type: "text",
      },
      description: "Divider \uAC00\uB85C \uAE38\uC774",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    height: {
      control: {
        type: "text",
      },
      description: "Divider \uC138\uB85C \uAE38\uC774",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "text",
      },
      defaultValue: "primary3",
      description: "TmColor\uC758 \uD1A0\uD070 \uAC12",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Horizontal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"horizontal"} />
    </div>
  );
};;

export const Vertical = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"vertical"} />
    </div>
  );
};



Horizontal.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"horizontal\\"} />\\n    </div>\\n  );\\n}" }, ...Horizontal.parameters };
Vertical.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"vertical\\"} />\\n    </div>\\n  );\\n}" }, ...Vertical.parameters };`,i={Horizontal:{startLoc:{col:26,line:65},endLoc:{col:1,line:79},startBody:{col:26,line:65},endBody:{col:1,line:79}},Vertical:{startLoc:{col:24,line:81},endLoc:{col:1,line:95},startBody:{col:24,line:81},endBody:{col:1,line:95}}},n=`import { Meta } from "@storybook/react";
import { Divider } from "../Divider";

export default {
  title: "@travelmakers-design-v2/core/General/Divider",
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      description: "Divider \uBC29\uD5A5",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      control: {
        type: "text",
      },
      description: "Divider \uAC00\uB85C \uAE38\uC774",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    height: {
      control: {
        type: "text",
      },
      description: "Divider \uC138\uB85C \uAE38\uC774",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "text",
      },
      defaultValue: "primary3",
      description: "TmColor\uC758 \uD1A0\uD070 \uAC12",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Horizontal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"horizontal"} />
    </div>
  );
};

export const Vertical = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"vertical"} />
    </div>
  );
};
`,i={Horizontal:{startLoc:{col:26,line:57},endLoc:{col:1,line:71},startBody:{col:26,line:57},endBody:{col:1,line:71}},Vertical:{startLoc:{col:24,line:73},endLoc:{col:1,line:87},startBody:{col:24,line:73},endBody:{col:1,line:87}}},j=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Divider } from \\"../Divider\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Divider\\",\\n  component: Divider,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"horizontal\\", \\"vertical\\"],\\n      },\\n      description: \\"Divider \uBC29\uD5A5\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    width: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"Divider \uAC00\uB85C \uAE38\uC774\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    height: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"Divider \uC138\uB85C \uAE38\uC774\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    color: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      defaultValue: \\"primary3\\",\\n      description: \\"TmColor\uC758 \uD1A0\uD070 \uAC12\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Horizontal = (props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"horizontal\\"} />\\n    </div>\\n  );\\n};\\n\\nexport const Vertical = (props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"vertical\\"} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Horizontal":{"startLoc":{"col":26,"line":57},"endLoc":{"col":1,"line":71},"startBody":{"col":26,"line":57},"endBody":{"col":1,"line":71}},"Vertical":{"startLoc":{"col":24,"line":73},"endLoc":{"col":1,"line":87},"startBody":{"col":24,"line":73},"endBody":{"col":1,"line":87}}};
    
import { Meta } from "@storybook/react";
import { Divider } from "../Divider";

export default {
  title: "@travelmakers-design-v2/core/General/Divider",
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      description: "Divider \uBC29\uD5A5",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      control: {
        type: "text",
      },
      description: "Divider \uAC00\uB85C \uAE38\uC774",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    height: {
      control: {
        type: "text",
      },
      description: "Divider \uC138\uB85C \uAE38\uC774",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "text",
      },
      defaultValue: "primary3",
      description: "TmColor\uC758 \uD1A0\uD070 \uAC12",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Horizontal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"horizontal"} />
    </div>
  );
};;

export const Vertical = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"vertical"} />
    </div>
  );
};



Horizontal.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"horizontal\\"} />\\n    </div>\\n  );\\n}" }, ...Horizontal.parameters };
Vertical.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"flex\\",\\n        alignItems: \\"center\\",\\n        justifyContent: \\"center\\",\\n        width: \\"50px\\",\\n        height: \\"50px\\",\\n      }}\\n    >\\n      <Divider {...props} type={\\"vertical\\"} />\\n    </div>\\n  );\\n}" }, ...Vertical.parameters };`,locationsMap:{horizontal:{startLoc:{col:26,line:65},endLoc:{col:1,line:79},startBody:{col:26,line:65},endBody:{col:1,line:79}},vertical:{startLoc:{col:24,line:81},endLoc:{col:1,line:95},startBody:{col:24,line:81},endBody:{col:1,line:95}}}}},title:"@travelmakers-design-v2/core/General/Divider",component:t,argTypes:{type:{control:{type:"radio",options:["horizontal","vertical"]},description:"Divider \uBC29\uD5A5",table:{type:{summary:"string"}}},width:{control:{type:"text"},description:"Divider \uAC00\uB85C \uAE38\uC774",table:{type:{summary:"string"}}},height:{control:{type:"text"},description:"Divider \uC138\uB85C \uAE38\uC774",table:{type:{summary:"string"}}},color:{control:{type:"text"},defaultValue:"primary3",description:"TmColor\uC758 \uD1A0\uD070 \uAC12",table:{type:{summary:"string"}}}}},m=function(o){return Object(R.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"50px",height:"50px"},children:Object(R.jsx)(t,Object.assign({},o,{type:"horizontal"}))})};m.displayName="Horizontal";var f=function(o){return Object(R.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"50px",height:"50px"},children:Object(R.jsx)(t,Object.assign({},o,{type:"vertical"}))})};f.displayName="Vertical",m.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"horizontal"} />
    </div>
  );
}`}},m.parameters),f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"vertical"} />
    </div>
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return f});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(r,o){var v=o.type,y=r.colors,b=r.spacing;return{root:{display:"inline-flex",alignItems:"center",minWidth:"328px",minHeight:"53px","&::after, &::before":{content:'""',width:"100%",height:"1px",backgroundColor:y[t[v]]}},title:{padding:"0 "+b.spacing70}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","title","className"];function V(r,o){if(r==null)return{};var v=C(r,o),y,b;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(b=0;b<c.length;b++)y=c[b],!(o.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(r,y)&&(v[y]=r[y])}return v}function C(r,o){if(r==null)return{};var v={},y=Object.keys(r),b,c;for(c=0;c<y.length;c++)b=y[c],!(o.indexOf(b)>=0)&&(v[b]=r[b]);return v}var t={navy:"primary",white:"white"},n=Object(E.forwardRef)(function(r,o){var v=r.type,y=r.title,b=r.className,c=V(r,N),T=H({type:v}),k=T.classes,x=T.cx;return Object(R.jsx)(z.a,Object.assign({component:"header",ref:o,className:x(k.root,b)},c,{children:Object(R.jsx)(G.a,{className:k.title,component:"strong",family:"Noto Serif KR",level:"display4",color:t[v],textAlign:"center",strong:!0,children:y})}))});n.displayName="HeaderSection";var i=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HeaderSection } from \\"../HeaderSection\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/HeaderSection\\",\\n  component: HeaderSection,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"navy\\", \\"white\\"] },\\n      defaultValue: \\"navy\\",\\n      description: \\"HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    title: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"Title\\",\\n      description: \\"HeaderSection\uC758 title\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":38},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":38}}};
    
import { Meta } from "@storybook/react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design-v2/core/General/HeaderSection",
  component: HeaderSection,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"] },
      defaultValue: "navy",
      description: "HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "Title",
      description: "HeaderSection\uC758 title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <HeaderSection
      {...props}
      style={{ backgroundColor: props.type === "white" && "gray" }}
    />
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:46},startBody:{col:23,line:39},endBody:{col:1,line:46}}},i=`import { Meta } from "@storybook/react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design-v2/core/General/HeaderSection",
  component: HeaderSection,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"] },
      defaultValue: "navy",
      description: "HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "Title",
      description: "HeaderSection\uC758 title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <HeaderSection
      {...props}
      style={{ backgroundColor: props.type === "white" && "gray" }}
    />
  );
};
`,j={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:38},startBody:{col:23,line:31},endBody:{col:1,line:38}}},m=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { HeaderSection } from \\"../HeaderSection\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/HeaderSection\\",\\n  component: HeaderSection,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"navy\\", \\"white\\"] },\\n      defaultValue: \\"navy\\",\\n      description: \\"HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    title: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"Title\\",\\n      description: \\"HeaderSection\uC758 title\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":38},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":38}}};
    
import { Meta } from "@storybook/react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design-v2/core/General/HeaderSection",
  component: HeaderSection,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"] },
      defaultValue: "navy",
      description: "HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "Title",
      description: "HeaderSection\uC758 title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <HeaderSection
      {...props}
      style={{ backgroundColor: props.type === "white" && "gray" }}
    />
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:46},startBody:{col:23,line:39},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/HeaderSection",component:n,argTypes:{type:{control:{type:"radio",options:["navy","white"]},defaultValue:"navy",description:"HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},title:{control:{type:"text"},defaultValue:"Title",description:"HeaderSection\uC758 title",table:{type:{summary:"string"}}}}},f=function(o){return Object(R.jsx)(n,Object.assign({},o,{style:{backgroundColor:o.type==="white"&&"gray"}}))};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <HeaderSection
      {...props}
      style={{ backgroundColor: props.type === "white" && "gray" }}
    />
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/Icon/Icon.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return Je});var K={};e.r(K),e.d(K,"IcCompanyInstagram",function(){return R}),e.d(K,"IcCompanyApple",function(){return V}),e.d(K,"IcCompanyBrunch",function(){return t}),e.d(K,"IcCompanyFacebook",function(){return i}),e.d(K,"IcCompanyGoogle",function(){return m}),e.d(K,"IcCompanyKakaoPay",function(){return r}),e.d(K,"IcCompanyKakao",function(){return v}),e.d(K,"IcCompanyLivinginhotel",function(){return b}),e.d(K,"IcCompanyNaverPay",function(){return T}),e.d(K,"IcCompanyNaver",function(){return x}),e.d(K,"IcCompanySamsungPay",function(){return D}),e.d(K,"IcCompanyYoutube",function(){return B}),e.d(K,"IcAlert",function(){return O}),e.d(K,"IcAngleDown",function(){return u}),e.d(K,"IcAngleLeft",function(){return p}),e.d(K,"IcAngleRight",function(){return h}),e.d(K,"IcAngleUp",function(){return M}),e.d(K,"IcArrowLeft",function(){return S}),e.d(K,"IcArrowRight",function(){return U}),e.d(K,"IcArrowSingleLeft",function(){return re}),e.d(K,"IcArrowSingleRight",function(){return q}),e.d(K,"IcCheck",function(){return te}),e.d(K,"IcClose",function(){return ue}),e.d(K,"IcExpand",function(){return ve}),e.d(K,"IcHotelTypeMini",function(){return ge}),e.d(K,"IcHotelTypeResidence",function(){return Ce}),e.d(K,"IcMinus",function(){return Te}),e.d(K,"IcPlus",function(){return Oe}),e.d(K,"IcReset",function(){return Me}),e.d(K,"IcResultFail",function(){return Ve}),e.d(K,"IcResultSuccess",function(){return we}),e.d(K,"IcStar",function(){return Pe}),e.d(K,"Logo",function(){return We}),e.d(K,"IcClock",function(){return Ee}),e.d(K,"IcDiscount",function(){return se}),e.d(K,"IcDocument",function(){return le}),e.d(K,"IcEdit",function(){return J}),e.d(K,"IcHotelFill",function(){return ae}),e.d(K,"IcHotelLine",function(){return je}),e.d(K,"IcLogout",function(){return Le}),e.d(K,"IcMarker",function(){return Ke}),e.d(K,"IcProfile",function(){return Ye}),e.d(K,"IcSearch",function(){return Qe}),e.d(K,"IcSettings",function(){return $e}),e.d(K,"IcTalk",function(){return qe});var $=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),G=e.n(E),z=e("./node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/react/jsx-runtime.js"),H=function(Z){var X,ye,Se;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.329 5.798a4.32 4.32 0 0 0-.242-1.308 2.335 2.335 0 0 0-.602-.946 2.617 2.617 0 0 0-.93-.602c-.345-.138-.724-.224-1.31-.241-.602-.034-.775-.034-2.239-.034s-1.619 0-2.204.017c-.586.017-.948.12-1.31.24-.361.121-.654.328-.947.62a2.335 2.335 0 0 0-.603.946c-.138.344-.224.723-.24 1.308-.018.585-.035.74-.035 2.202s0 1.617.017 2.202.12.946.241 1.308c.12.36.31.653.603.946.293.292.603.482.947.602.345.12.724.224 1.31.24.585.035.74.035 2.204.035 1.464 0 1.62 0 2.205-.017a4.13 4.13 0 0 0 1.309-.24c.361-.121.654-.31.947-.603.293-.292.482-.602.603-.946a4.02 4.02 0 0 0 .241-1.308c.017-.55.017-.722.017-2.185 0-1.462.035-1.651.018-2.236Zm-.965 4.352c-.017.517-.12.792-.19.998-.103.241-.223.43-.413.603-.19.189-.362.292-.603.412-.19.07-.465.172-.999.19H8.023c-1.412 0-1.601 0-2.153-.018-.516-.017-.792-.12-.999-.189a1.64 1.64 0 0 1-.602-.413 2.084 2.084 0 0 1-.414-.602c-.069-.19-.172-.464-.19-.998V8c0-1.428 0-1.6.018-2.15.017-.517.12-.792.19-.998.103-.241.223-.43.396-.603.189-.189.361-.292.602-.395.19-.07.465-.172 1-.19.55-.017.723-.017 2.152-.017 1.43 0 1.602 0 2.154.017.516.018.792.12.998.19.242.103.431.223.603.395.19.19.293.362.414.603.069.189.172.464.19.997.016.551.016.723.016 2.151s-.017 1.6-.034 2.15Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.991 5.44a2.765 2.765 0 0 0-2.764 2.773 2.765 2.765 0 0 0 2.764 2.774 2.78 2.78 0 0 0 2.782-2.774A2.758 2.758 0 0 0 7.991 5.44Zm0 4.587a1.81 1.81 0 0 1-1.808-1.814C6.183 7.22 7 6.4 7.991 6.4 9 6.4 9.8 7.202 9.8 8.213c0 1.012-.8 1.814-1.809 1.814Z",fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(d.jsx)("circle",{cx:10.773,cy:5.227,r:.64,fill:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"})]}))};H.displayName="SvgIcCompanyInstagram";var R=H,N=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.854 2.494c-.439.477-1.129.953-1.882.834-.062-.656.251-1.43.69-1.907.44-.477 1.255-.954 1.882-.954.063.894-.25 1.55-.69 2.027ZM10.544 3.626c-1.066-.06-1.944.596-2.384.596-.501 0-1.317-.596-2.133-.596-1.066 0-2.007.596-2.634 1.49-1.192 1.849-.314 4.65.752 6.141.565.775 1.192 1.61 2.07 1.61.816 0 1.067-.477 2.008-.477.941 0 1.255.477 2.133.417.878 0 1.443-.775 1.945-1.49.627-.835.878-1.67.878-1.789 0 0-1.694-.656-1.694-2.504 0-1.61 1.318-2.265 1.443-2.265-.815-1.073-1.945-1.133-2.384-1.133Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};N.displayName="SvgIcCompanyApple";var V=N,C=function(Z){var X;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("mask",{id:"ic-company-brunch_svg__b",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:3,y:1,width:10,height:14,children:Object(d.jsx)("path",{fill:"url(#ic-company-brunch_svg__a)",d:"M3.773 1.934h8.455v12.131H3.773z"})}),Object(d.jsx)("g",{mask:"url(#ic-company-brunch_svg__b)",children:Object(d.jsx)("path",{fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F",d:"M2-1h12.682v18.197H2z"})}),Object(d.jsxs)("defs",{children:[Object(d.jsx)("pattern",{id:"ic-company-brunch_svg__a",patternContentUnits:"objectBoundingBox",width:1,height:1,children:Object(d.jsx)("use",{xlinkHref:"#ic-company-brunch_svg__c",transform:"scale(.00422 .00298)"})}),Object(d.jsx)("image",{id:"ic-company-brunch_svg__c",width:237,height:336,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAAFQCAYAAABTbvmQAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA7aADAAQAAAABAAABUAAAAABrfFyXAABAAElEQVR4Ae29eZRcxZknmlkSb/rQUon+4/VgSbjPe+8MoxL+p8/Qkuw/1NUMmxb2RQtYz9jWAmbYtEDTYCMJzMMsksAMxiAJTLMYLRgkFkm4s7LONFq63zmvB6kk6JlzpkVB93szg6Qq4WMkVeb7/eLGdzPuzXtv3ptb3cyMkLJurF9EfBG/+GKPbLFYzFhlOWA50HwOXDVn7riLL7300mkzpk+fOqVnyvgJ3edIKvbv379v9+7dex588MEPxU6+WQtaYYX9Wg40hwMPr1l70S1Qk86b/M1MMTOTsZ7JFjPE4lmZLpWIAszZTLb//x38fHDZsmVLf7Nzx0lJnQWtcMJ+LQcazIHt27bc8e8vuuQvJpxzDiVqL1CayXRlgVso6LPZbCZTgAnfIrSAMSCczQwPD++cP++Gee++98Hv6NWCllywynKggRzYsP6pq79/yw9v0d1fJVlVdAQoQKsUkUugCngdW2UmiIdPHHune8IfXUVrRxZrD/ZjOWA5UD8OrFy+4sKhoaEdd951z90A7JWgXAIsoxHAGlEqaRtg7u7+o+4N69ZfTScraQ0GWa3lQL04sH/vvkcxwTQDUrKXNDFEVZKUelMVMiPK2FUc41hrwSt+GEy6yV8Mfv7axMmTbrKSVrhjv5YDdeDAmodW91K6Tv/2jO9AavYSgwqHqusLA1GolWgF0ASnXzEsx7UFuAGwk+luJa2fS9ZsOVAlB/bt2/fYDChAT3WDFVhJCxacWFJmNY4tZgqFrkyXEpkFTD7BRXeVg8a0Rpe5f+GCeQuspK2ygGwwywHhwL0Yuw4Pf/UuAQu7mWomWBzxLaILrKQpBWmXI005UazADDQDv0pPMxWlqugJdtesl4fGOt7sX8sBy4FqOPDWtu13PPbEE9cUioVehvdLStpls3q8SoOe+1WgpZv6pzR0LDOza0x1pngakrkrMwb/rKRVLLF/LAeScWDu7DlnHxk4/Nw11117HXDVS0BRGV1ZZSaIg5TYyzfIj2k3tovbLsb0086OaU3OWL3lQAwOrFqx8sIHf/Ljn4wfP36ueA+SsGInX79fv724B30JfchcgvbPbfc4iEPWznIghAPbt267/WdPPH4DnGe6oAOi/BKWwcVOvkLSb3bpiIcKX9s9rsAg62w5IBw4fGjg2Wuvu+46mJ3ZYW43ZPfXGXaKN/VV9h6bcgPBGxewXPQ5sG//PlKxoC3npbWxHPBw4IrL547j2uuUqT1TOX4VxyDACVj90pRhxE3C8yvANe3C9AOHDx6mmwVtGIesveUAOHDvylXTXn/z9dc5fgXAeoUpJgBFz28QWBkGm/49bhKGbmFh6CaqWMz2HTp4+CDNdiJKuGK/lgM+DjyDvb633/Uf7sRaaa/aZohusADTnBM2e8fibpLatm1bBqDP4OisaZ1MX8z0Qcr/hQrESOzP8sDWAW8d2LZl6+2FQiFXLIAz/BkK9q5J9KeLZ+BtxPELZ+0j/9ab22+HZ2IsUp0eOVM8U0D4EHX444PPwklh1XaPk7V31ncHcEBNOF1/3Q2qO0zpqrcnETRUZndW9Nz0wGPrMikFXT8k7Larb7jm5/etWH5hJbaN6QKFrANHASfDSJwHDhzYLzQsaIUT9tvxHJgza/bZg4ODr/ZcMPVbYEbpGJ3ag+iAVUDkZxZACrw6G/vx6cfS0BZMND9Nf5deenmifjEbAmkM9Ld/y5YtW904BdX26+0eWX50Fj/mzJo77vjxoR3s7krn1+n6jqhur3SDUS+Kyo/RRRY7+oTKb31zi3SJnaFnoZijQ5SSOOnHT3/o+Im3Ye3QwtdKWrf5sppO5QBniHe+t+PdCRPUDLH0cDU7ulS3VySf8EjMAiaauzDDqyTsDdf/XPytXbv2YkxkVcaZ7noznNBWNNAjZzdb6Dl2BoIlAfZbatUsL9qbF7xdAgIypyaRUNhKQeyJZJWvOPm/hnt+4OAhd7II/pRk/Oyzz17VEtgfNJ55pJBjt13o8euKXNPS6tu7otrydcp3xT3LLywCFOCHC1Knh0sbrzLAqRxoNuzyhwcOPgcHD54WzJt/Luzyvp60l7DfpPvJQnvw6Gev+OlWFtseuWwNlgPtwYHNGzctevzJJ57E4fNe5oiTSHqSWGVQgEID9Z4uq/LhdmP7Dx06dHBKzwW3amv3cz1UsTgyM5vFQfc4ipPTlKRQOr7+TZs2bVYWxh+7ucJghtV2Bge46f9aLOkgtziwjr/8VRBfX+M8K2eIz8qMdQ6046YJgvm/f/H/vfbHk/71TXAKUnnQdmahGThCYY1WAVWWfbTXfnz/3B+sQlL93q3ZcqC1OcBD6y5gmRWCKQYK/lX2LAewmHDi1TC8kA37kd/54eLvLw7iyNPrN6ibExX9CoBl+LFYp+3S67Q0s0HYunXrFurLlHQD7Nc7HrH8aD9+rF295iKMFXP+iaGRkfCdSKgHjpKxpjaeOHFix+zLZ3kmiOCkwMbv8Am9fKSWkCrTlzGyGss6E2G5+fPnTzRpit6NRCzst8R4y4v24cV9K1ZOc2aJMemEghVwhE08wYtXeUGb98/owrOLJRySV3EJAR1UjJW/CBA0Ey1xuBGJhf2WmG950R68UMs6nCUGGEyJpoCLQk6ksDykZp0NkCK8B0dqxnckGVQ9vpFWlWYfXYnHE5lY2q+3ECw/WpcffqmHslRKwCvmSl9iED3dSDCBRmblSkhZLPNgKUmRjNswCGjpP2iZh7Tl52rEwn5LzLG8aG1ecMx54thxbgE011Rp9CpBjNfWb8rzWQ5YRmJmYGCA67Wuikfa8a4Bno+SsvDpzFJRY3+WB+1UB3Bb4jhOFiFPjuJckEYQP5yM4i4oZydUxYmi/G+2brsDwSJxsvCGBX8MP3n8XDWijuydds2RGiRMpzkynkhHRGDdLQ9asg64gCVCNVijAHOqMKIg7PGj+sTF3G937b4/DhYGB4++WgpvNASI/7RuIpQ70+Mb854eOYXztKdzPHhfKa4YK1Rlq0TWwnIg1Rzgedjx3d3d3DMRe50Ua6RyMbibua5s/2H0dy+69JKfunYhGo5lJ+GVaDqjnfcqrNOOUQnR1mpt2Lt4y3uNvxr+3cnb77rzN97A5SYL2nKeWJsW5sDu3bvv53lY9BFnKlj4ARSSN31k1t0gRW+ff/75IGj9KCSIx/pOKFjoM7iM1AsthVMAl1LUrxzJmunD1sqNfrdAcyVRbN3tEKFV6gDPsaLnmff0hmnwWMAcpLQf8X78+PG3o9ZiQcIdNjyCTRswq7Fs6Gyx0PedHhD/ccayEqcbsVjYb6kwLC9ahxdyxA5lphTBIIAQuzhfHSZ/xZy54+A/Fj7c8bOOwB+v3+xPB6bD8qtWLudSUaz4YnmKS8z6i8d0y6f68ukmfQQOfA1UlUDDQCKMsaWx4losvLu4wSmc78HsmTEmPVNViv/o0aNlx+8Q3o3Drw918Hu05nAmWt6MHm+uwAFxfR0LisFRAkAxx/nqMPmH1+CmiQjABLiVAXZkxFniIVgFsPI106L2PFfY/RQQn12nDWKKtRs9ECblPffomleXIrySmg5IuIxzRv1oX0HleW0q/MQWZPs+2vso/OcV+DwthbPcI2koFE+5UdPOWSNGOqHXNGLHyfQl8pwkQ9Zv/MK3vKqOV7t27bofCM25fVswMkzhPKwLXoJFAYpAc365ff/pbx+BKTYe3DG00AiLWNvzTuMzZ854fSHtN89fEHiSJyotsRMZRcS6xS9sy6v68Gr9+qeuBS+dGVtoKimPIPR6zuPmibKrYuAlEhuxtkd643G7yto6sWSXNEUmTDzZb3QBWv40lz9Lfrj4fPDcHUtGABLeohWXduAjEQ70Fam4+ylBzL4dUP5rUZOkIVFikxC2fpNVBMuvePzi2ilfsEsEGDCXu41NpbvIZTcdwk8kJuSyNj8t0xyo9+I71uGDsLREJjAskLWPLljLn8bxh11ZE7DUc2InlvJKu7w6tlcBpP6y1Mfm3MmkWPH6PEUdcPfHF2S2oE1YaEFMtHaNA6nJWz276+54MsELfxWV+Mc3t+nFjYsQIFH93/0BJr7QLY/ZRISlJ6+ldaK4zbRWHdAkYvXJCt/yKzm/Vq9efZGaKQbzzK6uAqJXgiofYX8I2D0xT+2AhouPZUuWToHZnfhivEnjZvhqGgszHdS7ifI7WHOpwCwvRpcX3EChAMthKcRcoeAsnSjgqI5qaR0UPoIVxSOWWHACKPFMMUJmvsJFbYxblAIsDE4axDb6+/lngzy6VzPmvEcRAo8UWEvLgdHlwPMvvPACDsj0qoMzOC6TzY5RCeKF3nwmJ4vLTc/gSlOshDoJpTDCJadK8VANfgUc4zk+fOLklKk9ZZeKOx7D//7f+w88dnb3+G5E5Cq5vNxJQyaD87LqpzwwTigCVI4Nwb3vxw/95CeOS21/LWhr458N3WAO8KjdNyZNVOdUo6LCFeLq3mAFFAJbjsYRaPjxcayb5y+cF0UjyG3Dhg3X/rvp02bATR+7C/KFe4txHvcs373FCthO/P3vbN2+7cUXX/wvwaET2tZDXFsatXd5LA/Lech7isGXWBM/0k01erCqK626tOgW38uHthJ2TWV5x0MTRMKUdJnpburr1S0GWS29E2ZEAtpveSWzPKkfT/RZ1kQbGJxhK0pBlGORK3svNmad9x9EELJRXzMNCrhoMBbccCPvjqp5LCs06kZICNpv/Qqnk3nJF9kVAGSWFsyIqwwpF/j8JOhUrPf6VkVntjjOzicmVisDuDVtogC5wHTaMW3C4YT13ngOfLh7z/2TJk1S41g10aMndirFLJWc/qjH27BH414XY9LmA109PT1TQWMm6agX9UwPQXqOXaGYVECNCejDTPXBO2Lc+aQCJvkjGbXf4FbN8qW5fFmzZg3Ps7r7itWthQnWYeXYGzf08xrVpOWn7xwuSViKzRjxq+N58CpStpa9xZXSHCh+KwWy7s2tyJ3C7yv9dxUj4+zqEggVlUaLA9oRXPi9KvHEk7oBA2NQo3tdMVrXg6AVFkhDzbueQCYUm6EOUYGsWzhDLW+q583HH//Ds+CfUtxA4YIHgOC9xKdHfOdRxTO+XxdOwZ2bLEbyv9q0+XvQJKrbl8y6/OzjQ/pyc8RH8Culwci4eSbWVZS+hgTGncWOO0D/9FPrKt5dDDqJ0mf6rzqgScTqqy8AyzuHd+V3LRkAAZOIHSVFQyaFNLaqnnjC+PdVJdVJH2AkPVEi7U07urmNinhEt77amWqQiI3F2B6TELV+4xeA5VUxw/OxAEAOvHBVACDK3Ew/lMwnThzjMyCJ67Q+BF9xeUnik68kSJurbjCSpjlxBpNGYP0nr0SdxjO5BQL5rko5EnAkP3fOrMQTT/v37nsM4UsTX74UEJB+kPq8KOOJ418mPkyPgFXhzy75JJlqt37rzoF9+z56bNw5484xCbMyi3L1JStxcr9Ybel/ZO1P1+7Y+d5J1zKGhkf9ps34M2xRLIRuUVRLTtjjrNZyQmjiUP7OmxfcvCDEuf7W1aLdhquulbR8K/HN2aY4gm2KGK2GjFXBL+Um7vI17HNbt26t+KKdn+8MA1o50glTjMuND+JY9PJV4TDxFPclAvivSrL6w9WFiJ+oNdencNqZj3w7FrM9OTW9VAZY3ySUz90EUzW3QFDCgkbOnFgygahmjkNAavpj+iu9Ct+IMrSgrVPr14jCaWeahz4+qJZ3nMtiAFKNIGeTgglaQij4vCyf41DgT1CGsnmC0Qlo1flcw0LZa0fGzmcqA1RV19XUo0wtaBMUeD0YbmkUMy9v3LQIOMiBF44CJjwSTOyNL1Zh1Too4aP95pcuXsJbGWPX4XvuuYcbLgInndS9xAWjsWBExjrs1+Y6LdJezamhJGmN8hs7w1FErFv8itPpvJLjbuCDRxGIJnBNvcejY8jjWchF0MauvytWrOADV4GAJUnVGPBrdMVNveoyOx5HFbBIAvc1x8+49Wt5VWsdUJsYQCSuInDkp8MkXg/Vty6WrcMKKOVL+qa+zAwJq7vXo4qbUY0cTLHxdxAP/LcpEhSm8gPGdOOEFX9J3nFFgMyGdeu5pbAMsEJbNvqLWdLAr+iVGwBbzZWrCFv3Ol53go1IpKVZ/4JvNk89txn6uqAEjh8kJmBcNwAnyTjWaSRG0CU2xqrIOJVJ37FQf90/pjv0ozJLjMQE4jPQMsyztQ9mouVLZb7wVQDwSSkTEGIn3wi3RNePqlfhuaxjNBCMwzRT75o5qA1SKekSI2kuVl2NaWn1JQZZXtTOC7nkG7ysqFwQwaehzw8c+jj21ac4xO5unPAAU8du0A1Nj/IDwI7GOiwSFYnLSMdKga17NHMtf/RhAM7ayvQsmEJAcDaWb8eKDtYeZY41k4xj9b3G7iyxAq1+5JkRKLNP+poRizt7Bs3e6YR0xMJjLE9xiVl/8ZjeSXz6avh37yvAItNRiuugBDJB4yoH6LkfLV3G2/0r1tWDB/8zN2wowJadx8U6L9d63Y0UEoluTGQdFvHneOsED+THiXM0/FRkxGgkysZZuYK2Ao+kW+yucSLRUUoAK1/4jbUeS4mopbGaJXZwX5p8Ij1D0EPclqdCx5mv9gUCUGwalpoWUTMzZeNqXgUK47We5VVSLyloQVNJ3DgA4maNqEkuowEg2TJFd5U+jF+reeMHBJuOoaZHOBqZtHE2v2JVe0ZWhOAw3s5Rb/hEgEJPErnjVxORAlb5mm7Um/aIs6orakBmVPAzKpGOVmZtvM2pZDxYDl47Y0toYikgh0DSYKq4GV+WdMJoG7SEZqBXdqvTsMsJiYuNxdgekxC1fuMXQLvxSm2iQFdTQKNBiGzGVnk9Fg6tm/s+2vso6OZIsRL9MHeG57G+aq5ZRbShaWuG26hG3owM2jiaW8Gc+371JBBPybC/y18FJV6i3r1hd1m/xB7ZJQ7aAaVO7OhICNhKDQOSm1pspDZhaWaaTVtwhf7tBx8+AHDkvKDhNM9psCyGgoRWdw8HAOYvl6+cxnFumOSUhsFxN2eOzyBixE8rB7R59UB1QBzw0RJ4aIlEtgozOzmdS5YsUS+lh4HKOQ+rwavAUwIW+MZ7i3NPPvn4lUE85D3G2GyRMzdcMIypfo97jxmHqxiHnIeFHiu0+YMHDz57xWW4MaNFwBmWTgvaFi/AsIJttr1eJ0W05YpA9oCZgCrwMnJKQUcAHgrZpsjxKyRkTnkM+FOiy0bAWVyiXekQgqIfa70XBFoCDy2RyFZhZqemc/eu9+8HUNTkE3gQqgSk9KDApiXh8ePH3/ZvGVTrr9iZBK+B41eXhtCiRbnKc4ytTxi1TV1vm4ygvGxeRoEHvGgcvA8EVkkKEk2OJHRkIc1QBO1IMbd29cN8PNotPzkDq/wE/DHpUm+aDe95vCL/gEm3XfQuo9olQzYfpcrfDF5QSrK3KyoIRAIq4Muv8rs+eO9+WLr1UHWHZY1XA1LCS2AxS1zKDNqafp5d9STnbs34W0HvMqsVEmvTWKrcaeDFpo0vLEI68jLfA71HCbg8loZBj4NVHbx5/oKJ+nlIV2qb4UUvX4OMqc1vfOHFm2HR1vW6rTPX7oU3mvmbf+O8c53lHT0+NaFj6MtBhg6ynoBauniZuk3RvJ2RwtgjkMssDOIlbZ7v8cy/ccFEWLV9nW77DHZCIY5GHvUmB0RdAiEManzpB6oye8A3Utz9wR56z3DWGCDOqSGvRqv+0F0pPz3DPsfDAq2+7or8JMJhIs9JiVv/yQqjVfhVNlEElPmBRbNpZ95bjF1PRcwOFzEedsQq56gqKIbnTwMaXeiRpjwriWSlDiOpS1AamWTTVKq4aq+usbdYsGYClHam2a8nYI8ePRoolYWe/+uAVaE7v2+fOpDQsXXXvppX/zfN2priY4//7HFAuNd9TU7nlmZT0QzgKSuldxz7Xt780v8J8zcmT56coT1/eLXODBqoz2YK/Qf27//ZwvkL5k2fPv3eQE8dYmlB2yEFXY9sPrL24Yt7enqmAGkuOQJTwElL0fPrANLxyhDoFg9+7/u3/Io2yo2Y1hfm0y5KAbD7pk3/9r2vvfH6v0T56wQ3C9pOKOU65fGOO+74DwBbr0mO4OM/KhOoJmAd/4W++1atWkk9lnqG8OlTwRg0O4bWkQqAncFzr5GeOsWRjLY/y4NKdYDjSIxNc/Dn7OulRpR/ulfsS9/cyxtfXASjW9cgdV8pOVfWcScVN3KYNDpVbyVtp7TONeTztiVLz8c4coZI2a4uVBsCEDQBZEjKaOKff/75F4u+/wPVLRafz2zYsAEE+hQRZ+grToHfLkTSDfX0hnXXBnroJMtOba1svktSrxIvho9BwlGaGhKVM8I0UgLyF6Fy8+ZhI4YhZUXPNVY1s6w3W0TQcOJGNHp92JXYQquTvlbSdlILXUVeX9n80vfGTZjQ7Y4/NQ1nLJvJUALyB+CqnyeKQvFvcBZ28xtvvBE4eYS3drao8XCMMW2heCZTyI5kJp03+ZtXzJk7zhNPhxksaDuswJNkF8sr5373lu/dAkz2Vgo3JtuVGQP4mmoQapGeLTbtRb9969at0PdRSlZS2exYJENNWM0cP368BW0lhln3zuTA41DI+czKkIIvejLHthiv3gsVxbl33nv3d3Qvn2kuD8VVJiHP8XW5j86x8TaNnZNvm9MKHHh6/Yar2RWlNwFLZBCvp749u3fvevX11wK7xSadfXv3fhS7UdAB44DcjKPd9Ba07VaidcoPNkH8AGCKJ2V9ceICtqFLLrv0//JZBxoBwMR1EBNYXOftWJWYYR3LqQ7KOA+ic3lFZZnjzViikKtAaka6byVUXHZNnzFjhldIh4QseeofgArx1RHWFrQdUczxM3krXqib8Z1vfwchZhIn7Io6K7LRNIhr+O07sG//vl/88vlPo307rlz/jePP8VNw245O38qYjTNzF5+x1mercwBd27fHT+i+UvKhpCfQy2WdSurk0PA747rHX1XJn7gD4I9Omz79PjYKccapbBiGh4Z2ohNwhdDoxK+VtJ1Y6iF53rjxhUUA7DmOMyQbursEU1cxmzmTGcFZnBEjpD6ZQyThd6ow8jdPPPXkOsNDpPamBQvPBWDVLDDXanXXWoUJEiSgn8F2jsyHu/fsiiTcCY7CLPuNv0OoHXk1a5a6xNu9n4l7nbzKuU3Ra+eYsDmqeOjjg8/A5IKvkr5084X37K2fvtoxBUu95yq/zLn9MXY8ldLRiu4dnflWLLBGpZl3LIF2qHLBA4QG3PSfw8vpsW/uxzs69yGiHCMjXf8mSGXHlsCn7IEBp1G03eNO6E5VyOPDD63unQol3oAV0apGnQYZc6ruMg8MiMJWxc0bN218+92daqOEWId9165e04vloMvg3ks/pOcfLUtcdDdU/1vbtm8zzJ2rZQHZX2fzQF9d6pNrJaNIWWWjBaDY4fHot+LWH84Ww29OwsrTHRUOHDgJcZ4GsXUVeDWazM5tuDo559u2bbuDk08CvDi8oF9KQ3xjr8my+/yYsy2yV4fN8Igf9ZVmphnPdiQ0Tto6wo8Ulv12nrRVdxcbT3qIBOS9xDKkpJ3Yo46YKrd3Lx7HitFT4zs9XEqSwBE0nTGuRK4D2LGst27a7kaMShenYraiH8z4PusC0pj3kcvEHcxw1tjzvivM6NDG7K5yVvrL48dK53GNeEifXeMzBdIrOfj0ufXr118Lr7auah5YRnRoZcCE0EXAS05N3ZbwQhwFqq8B3NMjp+AGECMcDxTAULH+KAkbgz7WYUHfefrSTMA/fzb4apx4OslPRaZ3EjM6Ka+VJp/AC49ypC+lbrGo73eqWHcGDh56Ft5zDFNJmbg2JG2eT14ibMW4OsmPnYjqiJkLbyb37Np9P7YbOgcC4MQKX0llcbtEETujoPrwDMfqSv4PHxp4tueCqVNBuzfOvcYg7qZDJrle2rR5Y6fvMw7kcye1UDavxYw5+eRKNFPMgUlRSj9FqQAGf4FfAha0cyU6joQumSvq8lpKB9JH6I627+jMd2Lhc/KJkCFO5UdzReV4zvlfbEc4Tx0i2AhYt0GAh5E4mDUaDt1199D1x9PJZts9Dux/tKflw2vWXjT1Wxd8i7ljR1d+sXKbzfS9tHnz5p36ipigMNIlRvfWXYulPyzFVlbwo4EYe+23MtE29dHJLVan5V0/4qyWWSgJTWkIXkQqhI28KBzn0rl3ORdJJMJRpyWvX+QTANuvrycDFtodUW3aFpdla/vWbbdj7kndYpjFvBMne/ijAmDK/Pss+p5d//NnfHbKeMXc2eNODB/f0TMFb/wUsZ+44J3U4tF175G+ICqU+tm+t7G3+I677vxNsA9r63KAyLW/9ubBdxcs5AvpxrE7mHyKa7Dc5KDUCAaYMsbE9x8HPn0e9mX1hFsTcfB9h+vXR9M0mu/LKqlK+qVfbuA/f5zoaF9QejrFrqwgOiXjnZTPAby2jvxWVG53WQDrhMgtXDCPoPfUFU5IccKIYbzeK0bj8YDwOd219tD3x2fNJf5bRvkqY7tVjjVrHroY87eRUlZQ5IJWLDBG1WdfPfVk9uWz/sDcnBEQrkTBp/P75dMg8OKhb83R/LDMavMKw8mnOJJQwOT75vwAwkvwSsLCXin6lzBiF/wtrfuIf2xx3KFelm/zMgA/6oozu+Tjju7bT4PD6Yu48wlVpmLm/EfRMUnVhx1Jm82AHMO+9tprr4OmuvhN3Y9oTGiZfsv0RaeqsQJzAgyNyTvz58+ft+PdnSfL/FqLaA7UuxWw9OrbqlbLT3Rhz8ZgM4fwMVVJEjKAf4lHxrB+YiI1/fZhZvpn19pK2OrrSV3FNgrK0ksJD/gINIFDkMQDlge0Of96Kd6Y5WkbV5k0Tb3rIUTD7nqlXVUIautRBA8scyKY06qVZ8U9yy9E2jH5BCDiQLv6hYDItZblFyz3fPbZZ3yl3a0bH3/8D88oqW0MjglUOQvLb0UFL0PHh+0Y1uCryeMkerdgkgSyfksVOo28wNE5VyoCW856KD5R6uvCqeLvR76m39x996wg6FXdODLwyfNxutmni2eKXItV0TFSiZcCHPr/gYPwl1962R8IXfutvg5Z0Nah5UtTBVz/1DoeTo+1xAN/rqK0JM64fxgfVS/USZtE42KXnNJQGvNnu8TVA1TKwvxa0LYZaFG4eYJPKZF2Yq70hX85dI57kI0D7J7xbigVAanpwQK2voAFb92TFRa8bQDeXbt23Q/cVQdaBNy/dx/xljEBq4BoojBU7wBbgMuvnSWuP2BZPhasbQBWFuTC+Qsmon+bE0wRNKJKOrEJ/uKAfBGAdR1NGq5lmMYXyfDw8Lt2lrgxoM2iDKIXcq1rS3Dg8OHDz/X09CzjPgpUFbWBgWUrJ3kqZWIP3rUaGjqZue6669RWDJ7/SRJe6hHjw06ndxZARZ29rZQe6x7OAbsjKpw3LePyCG5WBGCdZz2ANgLHA7gY7XI3HssTwCIwzutp4CfgggLs8PDOhQsX3mQBm4BxCb1aSZuQYWn0/hUuAv/Dbv2mLG+AcBOJc7KutK3QPjOQDkspK+KWZ2G5xZHvAEQqhB8eOgnAzl9gtyZGcqpmxwolUTN9S6DBHHh586++D8B2E3Dqpz+Okc9ujIFNjGJWSHVJuJquzBgFWL4Pi/O2RoPgzdip4kjf8uV3320B6+VLI0xW0jaCq02kiW5wDt3S3mZEKV1u+UqcELL9961ctfKxx392QOzst3EciNEENy5yS7k2DhzYt/8xALZpZWiOlQlcrfpXrlix3AJW2NH4b9MKvPFZ6awYMHQ8dxoUcj2zmTkncKnUt1DsW7Vi5fInnnji75uZhk6Py3aPW7QGDA4Ovjpp8uSFTvILlSeK6pBPX7e4HyeB1t159132IrY68DYJCStpk3ArJX75eNZkKK7HqjXZOBNNdUi7SFmQ6sftjlssYOvA1CpIWElbBdNGOwhfosND0Ff6JF9Dk6VXhBhH/1u46vSa6659uqERWuKhHLCSNpQ16XTg4XR5PMuZGBqJda9wrblRI9lipg+TX/ssYGvlZm3hraStjX/ND13M5BBpbwabHjK8d0lPDMkabbUJ4jrsGNAaw8loQ6wqejCfyhb6//HQ4YMXXHDBj6qNw4arDwespK0PH5tCZfeu9+9XEXG5RV+UVq+Iz+rCJoqABkAv7fT918OfDFjA1ovbtdGxoK2Nf00LvWDBTRMvvWzWZZCovZku7C1mfxVfStgipW6titsdKWF9ikAePjl8Enubb/U5WeMoccCCdpQYnzTaH//4gQcRZqaxqUGRcCajuFWxNqX2FwOgHvoAMc7EvoOD8fNqo25D15MDFrT15GaDaK1auXyanOJxJp8ckYjzrqpL6wFatWlQM01600SJRt9ty5YttSd2SgxJg85ORKWhFCqkARe1vTLpvIk3x9r4X4FWJWcluZ1ZrT5sT1z5+JN2t1MlnjXb3UraZnM8YXxPr99w9aTzJn+TgFXzT/jjlawVn6mMFSNpiuRGgL6fb9iwwQI2Fuua7slK2qazPFmEvOl//IRxV/KIXEkRqAQxu8lOF7lmKSyTUFlnt9O111/381J8VpcmDlhJm6bS8KVl25att0/ontDdVTQBS09OsXF8G/e8LO4k9m3C0BLawX3m6+IpzEGf6cMVqgctYH0FkTKjlbQpKxBfcvKQpjPd9VOfYzKjA9Ii1opMehTWXJ5l1/jIkSO/mDp1ql3aScbYpvu2krbpLI8XIa4zfZQ+TYDFCxniq8DpYae4zTGxAixWeoeHv9q5EioktLVOEQcsaFNUGJKUmxYsnDh9xowZMM+knRq6imO1X6ITyulSe9djcSlN/8L58+a9++679tnJavnbxHAWtE1kdtyoHnjggb9SO58QQM0PZfX4My6BMH8khh8lrSHB+3mQ/d333/tdWDBrny4OWNCmqzwyANCFPRdM/ZY3WXUoJgpa+ZWI9+Ph6I0/e+Jxe/NEiSep19mJqJQVEZ+ZPO+887CRojHKkLL9e3bt3nXJZZf+tDExWaqN4kAdmvBGJa3z6P583TPXArDfVF1iZN+ZMGLXuA7dY5IAYadbXOgfGDgyYAHbmnXMStoUldvxoRM7JozvnsvN+zzFo6aOBMHKEJ5Ynocd29WV6VLHfxx/6ioaPQFF9y64jwVVPtuBmy+uCqdmXdLMAStpU1I6vJHiHGykUNJVA1b0haAzc750q/OwBDjBjZ8JWHqlOwELBx4CsGuxZEqLKitp01JwePEO52N7g5JTANKwLBPkVLITwJZsgnRqpthOPAWxpnXsrKRNQVnhZsPbAVhPWTjjWWdcWxGwFfKge9j92Ba5xQK2ArNawNlK2lEupLmz55y9E7saIEh7/UkhcI31VL+z1xwhaeHUfwR7irGUZO938nKtJU0WtKNcbPv3739s+vTpqyIwp2Z9K/WOw7JB4A9/dfK97nHj54T5sfatxQFPl6y1kt76qVXbFadP53bFaBVzH6N0qYWYNvfdunjpYrGz39bngAXtKJbhnVCIXt37pCaI9eBTfbSek1CFmKUkXWkGVcGz2X68RrD61ddf+2IUs2mjrjMHxtaZniUXkwN/uXLVtEcf/5mSslyXNbu/ap5YTxbHnYQ6g9OwxLZ6TxavuGPBFhNP27f8+KGf9MVMUmq9XTPnqu5/9Yd/8AeTJk2a/E0orDd34Sih2nHChoo9CjZuuDDg+CeffPIpGsDCa2+8/i+pzVCNCbNj2hoZWG1w596nyXXersh6DOgCtIePHPpFz9Rvtdx67LIlt07hJXbf/s6fTf/GxIkTzzvvT76peez0SDRI3V6FnqwjcMUO/vsZZuDgoYMA8Sd79+79qK1mzZlZ+2suD1YuX3EheJ7HT6sR0VT9LRTOIKxDBxJnx9w5s8bBIvVlS15sfXPL7YNHP3sF6SVPFF8gSItF/uc3QsV0V3QB4mdX3LOcvE89X6LS2NKJj8pYmt0IKrMqFjTYkOYaFAGrQJtfsWLFNBhSW7YPr1l78aFDh55DGvMAXQ5fVwkIw77iUdzFHPalP5/fPO5yfps70BAmtTyKSltLJjoqQ2l3W//UuqtRiXIErVSmCsIEPmOoEYqlYo73SsF36sqVz3MODAwooCJ9Ri9DCdSKGRReBXlUboqhjqvfrzKzPdMtpXbPs/FctmTpFLikjl9RaWqpxEZlpFXc2MojrUqx8vgrmLgl/YJOjt0/hEtNmeJlgnO3bt16B9LkdnvD8kU8jQiqTE/KoTKfKvJSA1ZIG3zP7/5g1/2wTw3fKqWlZRJaKSOt4K6loCtljIqD5NemhoaGdoBCKsqT40a+VI/0uHmV3Jl59uFIe3G7+cps+qeF36wDKbgH0SucAT040M3vLrTwVQ0edqe1xDxAKgoZ/Gz7dFw564pu1JqcW8l0n9ipSKyoNan8sh+MfjcPF6tfyy4ncsKxqgswNUkWhBqVZR9IYae8av6MFM/AXM4fAZzLNY1Iv73fLP4lOfyOkDw0OLK4Y86s2WfDlOr6mOrEpZ15SdKHZYfHpALJF+Fjq69Rcd3uo66gKjAagpde3LgI+lEry7e2/eYuASvTFJS/M4XTRf7MpDvoZAAC5zR+yKEGK+mYCueBEd4ALwk543gH5abnKvTkLX9p6rEgG4FlGmgZ5tnaBzOxEl+W/HDx+aiMOfhTSiqmfMU+6ss66qnw2jMuF+fkzqiU47atb5aNVxPlyZXGBhhDmGDmXcVBwPIHlSTOEPKmdX40eYqEVCzLih7iELF+ohn9+eBRju+UkgomX7Gv5jta3TnVDT7+JSbURjxj1qA8iR2/ope8umZgTwSsawdPonfWoHUo4tTBqusu9Gr5Mq5SfIXcplHuvSAvodgMdYgKZN3CGernDZc6WLnNSgE/yZWuqG5AdIu53glz08qQeTl27Bhnv8vAKhWe6TP1/i6vuJV/GTJMlSQxw0nYMN+12mtW52/C7DdoNY2/ceNKXYLiJrxV/JVtpBCRggxUU/mkQuEmxaYtU8yff+NEczaYafCk3d+gwD1MSTj3C49O8BIww8L67YWG375qs8qYE5pavPLwGD6pw0iWibKqMRzYvHHTolt+8P0fgMMzuf+fvJb9saY+SewM98UXX7yGzfM3JQlXrd8Pd++5/+JLL7kM+/FnmocaWGv0mYbYpP15ppkKPMFeYWff9D4o2g1DoaEYxNtCPdhP3TX9zy68UF12lw2+kodhalY6U5JOfPsWzl+w4PVfv5GuwwdMoP01iAfowoK3kYrSIpHEAM35N85reLeN2/zcGWGRQI5IVPkxOgye9DMv7BKXK49dHuI1h0MTr7Jhu/WHy2LtSroCyzHcpwza7J57uujl8SW3KSsHTHTt+2jvo6CUKoykKjFpY04t6dn7tx+xsPNh64xwUyoRaFHRuQ0SARtWbgvRIOidVXnBKvNgTv54QcllGh5WKKmyyk8nh5gCqjPOry0PH33k8DcwrlJS4ut0g8RlH0WTZmdJKQddw/hdDe1UJaaaDKQxDCs+0uVIAqn5sIhSeD9WrWOKHxcIOvzvC6eKH3/8Dw3dpvjii79chPi1BDMkI9JwCpWZq6xMjkfp9J0eOVU8deZruDvh3IqPhoaz3G+88cZtsy+fVdeNC9spdUGfifKD12/2pDmBAXRya9asaeqEH5IXictIx0qBrXswc/Uxs1JFKqvp5bXGASk2UPi6ltIN5aJ/o3brcI8wniPxbTs0wIfkmiAIzg79O2F07vKcvGp0z0BvWskxTqZR0ilfnZZEH39YxgECqcFKahKSJqbUkhZ9XtNd4mF3K5aK9pZ/+CeNWd7hmBLpKxsfmhVX6XX6THtvvlyQ5z77p6Ov6DPDzalflLYBStIq3wAvHivTH/VixjcHj83JS4x4UpOQNDGllrSUneIBMSl8aJMpPaZqxNIDpTbBhQSVAVYSGTfdGs95SuumglVXcB7EkLTKV/JQ61fTy7M3AlqpwEsqEpEWZtSaDn2wWknZOlUWtYm91nT5w3NHE+wwSRYwRg1IeBAQxA401LnU+1asHLWD91iWmcj8SNIlbWFmsfd//eFM93pMnoFeXfBWFyL1Skwb0FEVx1P40d1es16USWTQydX7ehQsg3J85lZwSYAnzWIZ8qVfpu348eNvN3rMiiTEqqNMT0hya7ZmftOST/IjFkPo0f6ieaAPUpeBIUmNQd0wVb6eu56WLl5yvtqdhcrtjaYUJSunozwTSv7GhHnM67FwauqFnixyM1PKi2uVWGPSSNN6bWqYDo62bFrcJR6p82714HG6M+rYmWsVpiFO3PAjxeHhr96FTV14oo/ulTUoEp2qnGJQ6TNBS/1pJ22Y8GnE+Loe+cRLDY+rpAf8McEX4BxpJWHTlO+6VArkuqPpfHrok+cjS97nKBWB1qLnOqda7iF4AA5KRuhq5uuRAZW2PNdY3ZlsxCHxMg1sLHhW1XNe1ZkEU25Mz387+k+v3HjjjamZjPHzZt06telEZcf848mn6ZBQr4cVNZcHoq2ZBu+3tqoGDqxace+0fzP1/ClxSLDAqGT/sakf23WWevQZRdq3Z/fuPb/45fOfKs9V/rltydLzsanh7X875fzzQWLmGOwUlvgRh5cqNhGPwaN9/IkfvOIHX8W+4aGhd555+uln/uS8b37317/+dbr24Hpz0TmmeiC/k2nocSJYEE+Ftvy6e8rJHVCqqTXWkyaqOxwWn2lv6pkLbW6pC8/0tsayQvDnrcxDTAsradukTcTSydXdUKbkDMsa6oZyol/qxez6z+Jhi+JIH2hucO2q0GBC7L47777rbgSdyeBhaRN7lRZIWkP29mP31Tu3Ll229JLLLv1pFUlIRRDhr/C71kQJvVrp1CW8KrQaW/ZOpYFWPIe8J1Zm60+9Nuf1IQMX1CAcW8/NEuqaFIw/AxNkjGND4ucG+VzaZoXj8kBvw1RZl/wJb8UcyJeYlmnayhi7UsRlXqf42/X+B/chr86MrO7axix/jzepULV0i2/VyzkewjAIbbEXM7+ipxv0Oe6XTtOuHyQrad0smx2XfNfja0GbvECSFmBD/avKTYnGGVa1Sd5cIgmuIiZI6MMHnPzDD/0E19IkrqgZtVMHEpI04yhfvEhIMdX3ISFPFctyLk4PseGJk/9q/aRpTFuRIXGY1ml+BuWiNiVhuZBSGbT+ymKC+ODBg1UduePRNFZWdULIkPayPVEt8hRwbzB/OgESL8xq+yFvimz18mNPw+Qv8yg/074W/aZNm76XFj7ZJZ+EMwOPrH344kkTz5uorkdRd8jgBdliZTZinTQDMKlGkrM+MhEEfR/eql2ZMBkZvotzzQ3X34C3WHuzmTGZ07iuhXFQyZu2WaXjYs+YzBn+K5xGvGrKqf+3u/fswhzaFc+/8MualpaSprsR/qdM/da3TLrkrfxM+1r0w8eOf1lL+LqGTUvr0Srp4IFukVZsud2dfzREKJF0Pi95vSkgdo+HV67IzRKk5UmLQdyR/95Y6ZdLVKtXr66qKw7ysdPZTL96i6GR++q1Hn7qwqXdqhQ9kZnKQmhmgSeJS86emgVbTfVgeP70YfnYZcCbH3gY3h+/38w0SRxK7/xpqfdqkOTYfEH3P8cs1qKCeGjQy+utqrHThLAN89swwo1M9KjRxqRNhcI1yjlYS9lHKQiV6F5deYjaKzs1OIOjMm/ByL/sHHZvu/J2juV5L00PYUdFa7NsffocAqeGd6lJSJqYEpQWtWGcs7R+1MCzWcAwBiuG02EB2vyuXfGfV1yz5iHeUVS2w4nxGmQD08Hu8PLlrf/6OfIfWFf17q9gntfJVt/5HBh/WLoaaZ+ahDQyk7XSvhmHrAEOZx1QLfNoCQfQUMUGrQ5LIMVNk1wZqvGu4lN/tIXYKwCb6UGvgJstGnWvVNz0N9qfflG+xJcG6D744IOmXQwfh18WtCEtuMm8L7DxILwucLkn/pIPwJWLewuCes/W1yV3GwhBa0DCGMe2X795m5mHNtY3bFOF8Hrt2sbcz1VtmVjQVgDtmofUTGte4dKVbs6olEZ1Xpb3AldSOuyRgcOxXrmjBEEQdSWMahQYXtNQWpGqYl1yz7fb7DCyGFhPnbeMOJ6N32hWKqYA9/zs2bNT9dh0IDPCmNSJ9sMnTvIwekWlzsNq8Dp4MioSAMV7i0+PnMnF6a4e+hibLSBh3QErSMm9yBq3TnpKQC3i/dbcl8ePvc3dQXDsiHJVXWPywGB1xYIK8cBmmD+Tv5S0XOJLGz8r7wqo66pwaxF7adPmReO6/3BcnFSP6cImBn1UBmv7UAZrYf+/ZMb2vbL55c0733v3d1H0MA59duoFF0yFn171WA5pgdRY/OvKjlVWbni6qbgy/f94+MiRP5pwzlU73n8vkr4btg00PT09zjnmLmdTSS1Z4oYU/hx2OpS4QeOD3bt21UK3IWHT1oqkKj2Qdv7Lw0MaajUZJWMg+bp+0XyfPH4i8pzs3NlzxulW3b0zmeFJi62/SdPUwym/detWPu7cEdJV8qnfj3XGs6Z4hIdqFEk4gx5P6Hy9bhAB1bqVT90I1TNRaaCl7wRyAOQpx2iDD1COZ4D/3uX3XBiWLwKWmyaiKTt9QAViPZ6F//y6J5+6MoxuO9vz8S7hVyDPxTHmVzWM2q/QO3Gs9gsJQLLuGKs7wUYkstk0Veua4OSMKmspdb2so+zwhxUg6pzsrMsvPfu4elVdQpS+DkmCtTRocysUlo1WjeJdw0jUqNUd5ht8yJEX8itxrX46vdw2avkM43HqEhSW0Gba65v3k5W+gNYfClI27OEp2uvW3DMBIiRIkspXMfONfNcH0aW+TvivS1VMqsMfD5/RaC9L6Qmo1BdQsyuRvBJQqgNeSVey9+pKPVYPyPKbNr6wKCgP6h5idr9CwO6pQKWo8vqwQMeWmz6oX5dXHEpsdXTkuaik+8IRrmll0rSImpmpWuJy3uLBlIQuP+esaox1WCltfFUYfMN2Pvn3EY+M4F5htg2lOqOkK0lyHVif180fPnSEV7V2dJnpC9zJGq3iNariO/LrlnkhpxvvVPI6lYkCY0clXW+++Ya8Mq6A57a8BpjCCp0zj557gzFJFPQYlbLjGixRSrr6h3VW2PgiKrl30g6n6LIn7xSbCNb6Ka6z47wxCKpyyUETnY5RdE9twprNtDlz5nDXi1pCcKRsqVK44IWHMOUHXND1JGriyKh0QXRNO63Pq+2Mo1hJkOdU1JNtW9+8A4DVoC2VhMmzkm0yHXsz7NVApZ7fqSgMMGrU06FBZh5nS1bqXt95/84nL2DRnhuPR6tKZwhZaQBgnwuS1mngV7PTsGDewomFMyO/VVLWN0OvpKOX/1WYdCPNRiEF9TEqDaMOlqjENctN3zGkpayBHiSgCpXHTqrvIZzLWxnDklaoVNDR8qO1+Xq/mGemqdX0at1cMyeUh8hUjSqf1mUe5MutT67GtOw0Pc9LsiLIr5aC149Ku3yVNUWFRFa6MimhQaqRyjRwAstK2FIlXTD/xomqWwz2NQqwim4LSFli061cNHTib/369eqBZeTdrRBmxTD19FNB5c1Zx3uXr7gwqLKZNP16rtuGresi7o4sI2f5xem+kl8mzyqUR2xn0My1ytxBR1YCs/IryailXKmEMaossyu5hunMJR7VtXVabuXdrGiyJOSxg69O3zQBFpTVR3322NljbDBeeCe8NJyq0zo74MriD0rTaNu1RCIbxSS2rGxhVQXwgFRPSqjip55LAZUV3uGh1M6YY1jj+UqDQIk+ZyzPFL5WR8C4B5nh7a/EA768oNepA/nnTEKV+Gl4SqLNP7Nu/dWtwveOrSDqdj1ZPqi5zDkuPcVKkpk/f/5EfCEZDKJoEL7GeVquA4qEcN3hxjO7vBq1VSpNs9KJx8R4zUtezQdAU4viOri5ju6Wg+J/+s7MIq+h2Ax1iArUDm68K1cKTr61VAqGXbx4MSeRNBkHtCXa7HKX76w6cWxox+zLrYQF0zx1Ub98ULftip6OlC4h/QncBONPT5rMHkalKWGNTItaM9UbKRAPlCEVHYuq/pYAGhCctQY/+tEVKM+bF/zrufDVkWXiz7eeH9CMrE/5aGLqI2Wg37VtKZ5nyaxOU8PDwzvGjx8/V+W7gPx3kQfGTRM1MoQ8dZ/9EFqcqcc/2kPbfxjvekydOvVWcbbfEgf27NnzwMUXX/zvwateVT/5zEfJuTodi9hHBPVgJ+rBFdURHL1Q9aupo5eHRDHzIWgUVDfLUKkulmR92CANYBlgGRGi0fYWsIrxwX+WLVl6/iVQBCx9KJ7VQ7CU0+jHncnrglORbttOlLQcJ83s6tJADWiBqy2ySNBqoriN8RdTpvZYCRvCZC574WEwpxekW1bVGapPuyqx9mOH1UfTvz3jL8Wilb71ZUXKc85uF5PoSkLWBipX7DrGav+SrkM7+KKxoaGTO1esWLG8WvrtHo7Xy6IX5FykpxtTDimkfa0p/6DHRpU/3MV1vFUBq3ggGWn373fn3zwZM0A55NOj1MRQwKyux1Mcg57ZcLyaEyfc/n8Ks8rDO+bMmmvXYTVwwCcXRNS//OKvvu+WD3np8pO8jLdODo/hSmhiE0UaL2tDwj38iDLH9hhFpBXc9MPNSKozg6s0dfzjXwdUpHVF4S2Ldh02vFL+aPHSKeBX2a6nJMVjnkf2zOLrMmDTiXXanH75sKXrfUsnHoUaK/2PrH6I77GqSuFIVpZkSXkKuWSdSGcetTMDckeP3ekUXk5c8tKHLEy2Va0PKktd2mqJDYRj1Zk0+2v5DMRhrqz5BRVo1bXDH1Cf3mEcbNWp7F7iygDhnVd1KRejHfbTo1MaXwpAsqrCX9tPRPGVAE5ukEGm8ptNt6r0mIRSSq0pZjNoKN6Zf+O8eZVeFKgqrjYJxPueerBY7U4M1iFfLFeh55Zxsdi3AKoO5NNBghlr71/5A01sic3W2NSDF9UpNOdCF9+c3obX5rytvu7oY3B126aoOjfs7RgSVxdky21TRLoj602kY6XAaXfn/mKkMXSCoy5gRQQehRlqe4A9utKZp6AU78qB5mFpNQbOMbDx1M+HtFU9b6vMoHDd/KBrei7MoYCVilAv4Op613atusnTeugDAVsn0LIsSUqXaUtcHVMNT91KXk3gNIc5evToK6oAkUg5EGAC1NQrL7X+gYQ1b60AubblbbV5u2rO3HG8mcPkPfUycVdTERjAB7180G2Y1aY7beHasmLpw+glKWsUaLUVA2/LuucxVaWTFsH52nuJKzRSl8y6/OxjJ447j4yBZ26RCB8rFAzf59VXnGqf2HQhYfH9GuWjwd/2rzC0JWjNdT+zVa9QLyKdWSGElnx1pWmZu4WQwVEpb7UWq18FlAYvkJ8VSkB6TH5vxG6nAJZlOCqFyIgb9duyZUvpChlEQlV+XYljX81fF7BOYDzVMfActA3LTzvQ5nq1n9c+PvqdK5tFysKnAiyGJ53yzlFbrdNeOXvO2ddff/0NWKfr9SyosXWqVZWT6McG9wF7YieasYcPq0MA3dG+krkCp+qoI1pKFRAvuPd/gvPJPRdM/VEySq3pO6sY0JppL0s1jls9itMb95U58NBNHZsn8uzk0PA74yd0X1UWl7VwOUDA9vT0TIXFTNcSGkhZnNxxCoS8lM0Qpp9AvTSc2MdihOtHPAOIp2OOO9axKgeyuWmWK1fcc+H0GTNmmMfs3AZJb1aqJTEuLRD5avjkTlzg1j47bGphTEBYjmEFsODbTLNM6F0AS31swCrP/FMCLGj3sbfTSYB1GcAK2eo/daG1HufUPF4CMwKVQ7/lj3Yhbw0rbwJW9norHhpjT5aL+tGB9vzALq7yee3Y+YSGFR4Komm0n35qUVjaYAAAFbZJREFU3dWoBDlVEYxnN1ghOEnhXSqIW0V8/jRg7W6n8HLlOmzQzL0CJvmny0ZPHCkG07r8jkof72l0+K8dRnBi53DHTgA2DVjgdsPi4r3BujSr/gSdh2U9UQqaU8Wv829uee12mBuWj1amfensWeP867AuWF1GOuwM+st1WN4NrZZ1TP/UK/6fLvINWaj8h7v3PIBvx5ZDy2fc2XjOQwG1KV03PN01t9LhtgN9cXbL86sRlR3zCdNAt1QGYCb5mURR+rphXI1DgeWgyyLXCq/aIdUNrScNJd7oxMv+Yl8ZJ6krrl9VKWDyVB66dtD6H3KbuD4QsLiEPUdWmUr4adol0QtQ1ZcBR+w2UXBBlU/iQpKAafjyIrBaKwfy4Sg5xA6T2whA006Hp5G1upa36uVwLsFQZnmYesNLbK0CrDMvkVcvENY5/UhIXfnRLHotmWgyR14JIMBqrRwgYSBVmZw/qJD2bqfgis1HnsH3XF14T/YDnKIMfZ4z0ZyRhlvL1tV6p71lGWHOUkph1/RV6C9VHlZI3TC0LI/qXVlIj43YoY8PPgt9aQxbgfEGCCN9+u7Z6tglHfI56hfpGBVwNN1wM3zgEg/SVL3SoFUEIGHb4dY+5KWu5Xvr4iXnq8ZSC0VDOHolJZno+tEaxdiIPyb/0SDwKhr4rmv624VeazJFxlGqPozUbx3WqVP5A/v2P9YuBVyvfDzz1NPXclLOYZHTIxEJqr4G6NSTkhqrnNjDA58SLPyLk3baW37dOjTKFrCh2Ax1SCvTNKBwt5BekjcqS3iNwDprwfs+qetXh+d5TFa2zz8bfDWteR+tdP0dxq+IO3Z32OWtofl98fdY6zYuHSffZSMM9AB2/svjx95W7wZbwEbiMtIRbE2V+/x5N5zL1l5aeKNOVK0VWvxy0gMnhewrALrcb5o3/1xuDwVvclUz2AhIHqslNbNfDXdgNq8vk09VfUPSUpmeVCYqjFlqf7FRCVyttNiuRYCGLXuIYkWCyuOdHW4SaCmeNCq97rwBIpCGDdqalEmHemVGI7xp4wuLQNjyPSYPWoZRa1ev8bwS4NYe4i0CkEH+3ArjOhbzduKpBBq5xVKBijyKw98SL+Pq8jwcv3D+gokI0DL1MA1pbRlmqVlL2QAhrXTc6hHlDy29rqQtw4tGVRxuYNBLaTWNXwPZrYGvG4I813kblY92p9sSFXX7m1tuR2ufC2vxXYkQWFuiLXWXuyX40MjKuOv9D+7DxFBOuOXhaV0kLQYhaGy5w2zNQ6vZa+p4nlfLg9QzTu1IImC18lQmZce1Av4qKG9L73gG3U7fbbNkyZIpfCQMDFHSFbjyKpr9dl4fsUwotxzv07I7zGpvrFIPWnZd1XlYXXkIWi730OhMILEF18s/UdXHCE9vrESdfjaWvCUfVKMXAEzyWvFK/a3pT/7n6569ERRSX99aIY2pZqJ6DyeiWxxVjaTCiR+uwfLuYm2f12/JpDr/japAvFRd72xyhhwBgBW+yff3I1/r866wgX894+5IYXR0uAZ7pmCswzoB1fOSc2df0Q1jR/K6EflONSNDl3icChH4l6D0A5YepV7STe+dTXXekeS6p28B1l3V5hE2hJzU43/wwwVgIEd9lmQkwnp5XBqe0B6/HNe87YsL9S9D1ou6VwwSrcdPvRLgToyUKgVohypvRSp5UxVJG/ksxezLZ3XcqZFdu3bdD5Dm3NarxJ54Ot3qhfPYaQCA6LZ+kgPMqkv9roXOqCcgLPH6HGu8ChXgy1+5tDm/4p7lF4bF2Y72StoRrL5tiH7+wL2iMsNQLz8VEHGwy71i+d0dxV/kvekYanqEcTLJK0VQIXKsDOy66UaexkTKrGQI2FHjWO5oOv7lsbeYb8W0ECbSOsRJBav0R4fNv/TixkXwm8r61G7pSh2T1Q4ZRzK4LXmcSuUDqKprpl2nPN/BGfHBQXXoIdYGCfIoDn9V4wm/ojRvVVe405fNmt0opA60+j0Wp26U6ojUlcivCVLTI7fLzW3zcSzBqk8olYPV4GMgj+Ls3Uafx1B5ThLaK2BGp2eRKtDet/zeGWj2c0blgLTlkbmvTauKev0KuPhr64MAHLOqzRFu70Sy7XR7iVeFWVdTcqeOII41e0zMIg7OCtvzrqMDVpSAwmuqQMt7c5UkQAVTFU3VKlVZqItUBKo6fG34Aq1cu96AwDHr0BDueyZYXWYZmfdpuYbKn+fidgeIitk8b+yZPxCQ66+993l0gYridLHqakzL0dCro2CYNDHvCZKuXCxJ4KukNLbbvmIeENebQtgFVt1g4VFA9gOtgvwH2RmB83v37n1srj1nnBqspCYh5mZ1o8IobVzQsvIZFTDPQ9wgkJ48VpkWLlPpsX5VQDX5afLI5VXwmFaBlRsy2oGH7ZSHVFTofXv/tuw6E6lQ8jUrXiU9wuS05E5F/qqtMJuwjML1aubH5EOYvhJfxN0f3uzdwI+aEbZgTW9jP+qVWleO8hlP1B6zckmFC/2WxnUtffUmZ4HxPjIfl8qjh5GXoaWMW2XcSd4If+L2RIJ4x3kAFR5j471/+9GjFqzpBSvKT+F11EGrlymkTgbVK2NWKthZ2WrQ6mNmo54vYXCc77IlS6ds//W2O4AeTirlVH7wxwUoLUqNkji73winkh8D5LTUgFdjY25xbJehBLLWUmVfTXpHNYOeK2RYk8JU8Jir3Df2KrfKBePcRMKdX8NDx3dwv255ZhwbkaYuMKmJy48wopDi3HLYySedwJpRrfu1xJ844S9t2vw9rtU94tzZlDi8mVg1XoM8oUxRkkTXTPXRekqbmN2/1F9wfdviW6e+teXN2wc/+6dXAcYcMg6Jx7PAONLG/Oo8057KAayPPx4/4AzCJzhPnPv8sy9e141lTWWH5Nnwo8SDahgvUqGme362b0V3kMsWAZWVFdavsMrorMP6/Wvz/zz2JW9fqCY/DQ1DoP5my1t3saFD+hTvRHqaeZR7l107Dzjx8LJaY3W2HKrwwgf9lXVYNnGuctxy4HHuzTffvH3eDTf+Mdwaml9Lv/H8TVSA+jKuUsVDZeBRt6QztdyrKpKGFSyoEtPeVPRjVlY3DLqK0OfUgfkUVMg5s+aOW7v64Yt373ofz1qobq80cio7brrNzEEvGDSt/X79Ztev4gEltgFYNBDcg2ylauNBBMYnwlGt/mNHpmYVjUkSVWFY06AImsGjn7+6KuaxN337oYQtFs54KpuyD/pj7nhSFVhLEgcgzWUc0ufy7jZMJHF8ym4v7N1GzQ8yv5l5FDv50i5QMa9OA+VxdljgdJPhoF6Z2/LrN2+zV5OWygd8ccuqHfSxM6OXIRyR4Kk2noqHMdPgq1EbyZfiESdWLiGhKqsGv9hFfT1eYfgCG9fhP3Y+6uGXD1HxnmR1AwYbMvyckbcz+nb+6lw4qHLBSVsToL590iqQuMtXUyqFI83SZBR46Rw8X7lypb1svcl1ASXR1LrH+GJHqMZkugKqvhxCu0Z0XV0D7KFU1yzo4jRziUfCO0Eq/YU0ZgBDoVLnGr2uyFsuOCPNmVa1K0mD1EwLwUUWUDl6x+BsWmAvonJPQgBqhvfS89Bgo5dneuoxIQhaseuB9Tv6vIpdWKy8ei9vSPfPqVSsdMYOG3TXhnds3br9Dh6Nk/3FUhn5ja0wS+rrHjbkUPvSxcumMJ3swuvbM5xegW5hBFySbl874jQsJSkIb3rzggSo+juCR8cKuUOHDj1n7w0efeCgGGNjp95+sySYRB0+fPi5np6eqQgz0wxHKlnTQutJP5uFi/YgZvVliKBAAXT8VgDUO+MndF/lt49r5maCSeedN3nSpEmTvw31b3umTp0wYXy3Du/mTdKr7AvIRJdOMLQqS2KUfGYKmkSX+nrCw4Zm/rq6HHft2f3QTRT41p+BEAfPB7ZBPfDjB/9G3Oy3czmQGLRkFZZrbr/6+mtvyGayM1EFM11EnqrBTqUESktYLNXBQICykhYQeEw2uBK7RaPpFDVIblu6rOe5539xxHUP0WBC5txvnDfpm//beX8yedq0adMnQ02cNGkiEtiFuDU4CzCOcSgwKwIcNjZQxcwI8gh3pMFJBhoi5pD+BMROaOVO/6RH3mSLDoizWU2f9BBONWQ6jO/TT378ds+He/ZBPfjggx/63K2xwzlQFWjJM2y9O/9xqPHd3ZROvaeKrNiZzFipnKzTMKtq72pgUaXC+6Uq5FiA+7cffpi5+OKLszgudvaE8eO7z4H638//P84fM2ZMF6XmeIjgqVBGVBqcho1Pi3OmqvFxwKQbEAehyuepzGmgHNDtcsDnwFkTgb/T2TOAqQYmJHKXrxE6lfkavGHzdpbDEyWR3Yaq/8vj//34h3v27Onbk9/9H3/5/Ke+5Fmj5YDLgapBKxSwdvvo9BkzZkCq9LLCm1LElVjwHCFZhNSofolPt9dgpETywG9Yl9bw7tGWeMEGxwGotuvnAP3A/v0H9u/7u70f7t69+5333v2dJ7A1WA6EcKBm0JIul3GeeOKJx8d1Y0yYzfbSrl4SlrRMJUDwf00/tehJV1SchsZJB8JACmsRqoKzi8sutCORCxibZtXY9MCBA3+HQ+Uf/cJKU2Gz/SbkQF1AK3GuX7/+6rvuuutubZ6p+sc0ePqS4rv6rwDLL9lJETOsiSUiw0kjQH2UEvqufzU5RaD7JWmxcGTg8ACGpfs5Nn3+hV/aLm8UY61bbA7UFbQS61vbtt9xzbXXXgOw9noljvio/uuCRZMwzdSLiiMlxa//66fp0HK6uBKHj34/aRxw8Ln3AED612+8/i9+utZsOVAPDjQEtEwYZ21fe+P1f6aeUKqzsCXZUGWCLtRThIMZvqR3x6UKoLhH+eCRI0c+YVf30KHDR959f+fJCJLWyXKgbhxoGGghdR77s+nTVvkkUtUJL4EnfleWkZnhEkbej9aGSM3s27t3HwB6+PPPP/8C2zkHXn39tS8S0rLeLQfqxoGGgJZSFhX7dQCmlzOuNQAnMKOkR8UGwU+bTnp5FT4U5rSf0jqpClz6oyQnAXpg/9/9PW6+OHbkyMDAJ4cPH3k2xjpwiYzVWQ40hwMNAe0/fzb4yjcmT75ZRpglEIVn6nTGWefMKtD5OtOwO4N1YIJU1j+5PEPlzs9inZUAHqvWUZ1JISM2bFgYoXvh0yOfHMHWyiEsVe3FywNDnx7+9NNX3vjrQcOv1VoOpJoDdQctb7y/8241gzzTzTnx5cOh6+bTmJLT1QOwGdm04fMPo5KUXPdk93Vw8ItBAL/ApRWClN1ZghPjazsxVM47a9OCHKg7aIGPHdglNVdh1BGGiQArfVuN8X7MRG8bPPrfjhYBWkjaLhxGOPMFFAFKUBKQO+3GhBasejbJ1XJgbLUBg8JxT/I1118nm+7RgeXeW/iM0z8WgDuE+3HrwiC2Si62gAzitLXrZA7UTdJeMWfuuB07d+7g2qzbrU3CWQFtNtPP5ZSeC6b+KElw69dyoFM4UDZjU23G/+rBBx7k/mMcJVMTRkKHAI6lss5ML3cRWcDG4pj11KEcqAto71ux8kKcGZih1mSNo2pOzzjmDBQKYGh4aOeKFSuWd2hZ2GxbDsTiQF1Aq/cbu7PFIl2zWCfFrC4S4kjR6BR19T+9fsM6O4aN5pJ1tRyoGbTPbPj59efyULmhlMRVZpwfVUs1XRlcdmb4cHYqCbjpcOTgoYP2ZgYPi6zBciCQA/WYiMqDsitlA2OBpeoqa8eyiapipu+7Cxfe9IrdHhjGPmtvOeByoCZJ++HuPfeTkikxXcoxNQyLRdcvLGBjMsx663gOVA1a7i+++JJLLgEHIWUrTzaJD5GyAnRsQ+zbtGnTxo4vCcsAy4GYHKi6e4zdgc/hAsNlagMFN1HoQ+Ax4y15KxT7sKH4L0oWVmc5YDkQxYGqJO3Da9ZeJBenOVeqJCcjkhZ7hA9EJdC6WQ5YDng5kBxtCO8u8WA8Kt1eL9kAE2ei9D4L6SLTFx403hXg21pZDlgOhHAgMWjxPu0idYGbJsh1WH1WPCSKSOt+3p8U6cM6Wg5YDng4kGhMO2f25We/+94H74PCTGfTBNdh48la3lvMFoKXkruS1o5nPYVhDZYDcTiQSNLitvsHQRSAZT83PmCZkLMAVnlFQIBupSw5Y5XlQDIOxAbtsiW3Tpkx/TszSJ6gE+A50Xl3O4UlQSaflDtwz2OxYX6tveWA5UAwB2KD9sEH/+qvgFR17E5IlUAYj4wX6Jk+K2mFk/ZrORCfA7HQxitkJuHhKpI1gWfq40ZZAnom87MnHv/7uOGsP8sBywGHA7FAe8sPvv+DTLbQWw+mKaCja7xn9+499aBnaVgOdBoHKoKWL6DjYbxu9VZNIHd4/E4vwAa6O5Z8TkP8YRdV3+bNmzdFeLdOlgOWAyEciATtTQsWTrzuhutvACTdUzwEnrPc41CkOasuggqJQVvz6lN93Wn/Sy+99LK9HTGaX9bVciCMA5HrtPrV92XcyaT2GEesyfLe4mIhi3uHu7gY5O5+koj5fi26xn3/9fAnR6ZM7blV7O3XcsByIBkHQiXtKlwh09PTM1V1afX+CeneMgpTT/OYwli1FqsAC3MB0le92s6wuP/prK4x/f8FF4VbwJJbVlkOVM+BUEk7fGLobTyofqVDmuuwwfgW8PpnkmlP0Dpd4kL/b3f/dtfFl17y0+qTakNaDlgOkAOBSMRdTVcDsOcIi/AGutIKQMWeX4LVD1jXnvNTxWLfw2sfWWsBS65YZTlQOweCJW0xk4OI7CV54o5HAsZQAyUAJYA9egSQcS+9QsiqwwA4xrfaXtamWGf/WA7UhQNlkhYPUz0KxHWJVOWQFA9yuBLVtTcmpRR4MW7VIO7/fHDwNYyJl+NW1XstYOtSTpaI5YDLAY+klScqAb5eU5K6vqEx7U09pp76h4ZODuHo3sY77rrzN2YYq7ccsByoHwc8oP1i8J9fnzj5G/O95DkJxZ/32R9uluDbs1AA69DQK5t+9fKP7rp9Ky2sshywHGgcB9zu8ZPrnrj6X0/6X88ti6oIL8WxuLf4TOZM4TScCWDMYHV19Q8e/eyv7125aiU2TF1hAavYYv9YDjScA66kPXHi2NsTJkzAEo+LYxU55pswVqXWAWuxmO3Dposj7AbbDf8NLx8bgeVAGQcUaLdv23LHNddefw3HsqYPY8zaT9B+iLVW7Bl+6VV7qbjJJqu3HGgqB7SkLeQhYWcGxKzGq9ugbrnllpcC3K2V5YDlQJM5MAZXwFz05729vYj3T9yuMJ7pwK3/H61ZvWb1FVde8eSf/umf/j9NTpeNznLAciCEA2OHh4eH6AbA9vGwzoH9+w/wxv9f/PL5Tx9/8omQYNbacsByYLQ4oLrHa1evuYhnZu+8+y67vjpaJWHjtRyIyYH/H05cgT5ToZfNAAAAAElFTkSuQmCC"})]})]}))};C.displayName="SvgIcCompanyBrunch";var t=C,n=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.667 4.089c0-.786.636-1.422 1.422-1.422h7.822c.786 0 1.422.636 1.422 1.422v7.815c0 .786-.636 1.423-1.422 1.423H10.021V9.19h1.369l.204-1.596h-1.587c0-.362-.002-.701 0-1.04.005-.564.218-.775.782-.778h.859c0-.43-.007-.836.003-1.24.004-.158-.06-.21-.202-.216-.34-.011-.679-.036-1.018-.039-1.002-.01-1.737.499-1.973 1.388-.071.268-.09.554-.103.833-.017.358-.004.719-.004 1.1H6.986V9.21h1.351v4.118h-.252l-3.995.004a1.422 1.422 0 0 1-1.423-1.422v-7.82Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};n.displayName="SvgIcCompanyFacebook";var i=n,j=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.915 7.509h-4.75v1.465h3.41c-.182 2.033-1.772 2.912-3.311 2.912-1.953 0-3.691-1.585-3.691-3.877 0-2.206 1.655-3.878 3.69-3.878 1.557 0 2.5 1.052 2.5 1.052l.96-1.052s-1.29-1.464-3.525-1.464C5.25 2.649 3 5.217 3 7.99c0 2.689 2.119 5.342 5.247 5.342 2.765 0 4.751-1.947 4.751-4.86.017-.602-.083-.964-.083-.964Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};j.displayName="SvgIcCompanyGoogle";var m=j,f=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 47 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.84 24H9.962C4.46 24 0 19.522 0 14S4.46 4 9.962 4h27.902c5.502 0 9.962 4.478 9.962 10s-4.485 10-9.986 10Z",fill:"#FFEB00"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.176 8.801c-2.998 0-5.427 1.915-5.427 4.303 0 1.518 1.016 2.861 2.528 3.632l-.52 1.94c-.025.05 0 .125.049.175.025.025.074.05.099.05.025 0 .074-.025.1-.025l2.204-1.493c.323.05.645.075.992.075 2.998 0 5.427-1.94 5.427-4.304 0-2.438-2.429-4.353-5.452-4.353Z",fill:"#000"}),Object(d.jsx)("path",{d:"M21.212 16.687v2.786H19.23V9.199h1.387l.248.647c.421-.423 1.066-.87 2.082-.87 1.933 0 2.85 1.442 2.85 3.805 0 2.463-1.413 4.03-3.445 4.03-.397.025-.694 0-1.14-.124Zm0-5.821v4.428c.1.024.372.05.644.05 1.413 0 1.958-.996 1.958-2.563 0-1.368-.372-2.189-1.487-2.189-.396 0-.793.1-1.115.274ZM30.083 12.11H31.2v-.25c0-.82-.471-1.193-1.264-1.193-.62 0-1.388.174-2.032.497l-.545-1.318c.694-.498 1.784-.821 2.75-.821 1.883 0 2.924.995 2.924 2.91v4.702h-1.387l-.199-.622c-.793.572-1.536.82-2.18.82-1.438 0-2.255-.87-2.255-2.338 0-1.567 1.065-2.387 3.072-2.387Zm1.14 2.611v-1.368h-.916c-1.016 0-1.537.373-1.537 1.095 0 .547.273.82.867.82.546.026 1.24-.248 1.586-.547ZM39.029 15.866c-.694 1.84-1.512 3.184-2.726 3.93l-1.214-1.12c.694-.621 1.214-1.218 1.635-2.014l-2.626-7.19 1.957-.521 1.685 5.82 1.66-5.845 1.934.547-2.305 6.393Z",fill:"#000"})]}))};f.displayName="SvgIcCompanyKakaoPay";var r=f,o=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M8 3C4.686 3 2 5.066 2 7.614c0 1.647 1.123 3.093 2.812 3.91-.092.308-.59 1.988-.61 2.12 0 0-.012.099.054.137.066.037.143.008.143.008.189-.026 2.19-1.396 2.535-1.634.346.048.702.073 1.066.073 3.314 0 6-2.066 6-4.614S11.314 3 8 3Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};o.displayName="SvgIcCompanyKakao";var v=o,y=function(Z){var X,ye,Se,Fe;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.973 12h.2a.08.08 0 0 0 .08-.08v-.52a.193.193 0 0 0-.186-.187h-1.12a.24.24 0 0 1-.24-.233V6.873h-.974v7.794h.974v-.707a.24.24 0 0 1 .24-.233h1.12a.193.193 0 0 0 .186-.187v-.48a.066.066 0 0 0-.08-.073h-.2c-.613 0-1.113-.22-1.113-.487s.5-.5 1.113-.5Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("ellipse",{cx:8.233,cy:8.473,rx:1.187,ry:.487,fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(d.jsx)("rect",{x:7.047,y:7.427,width:2.373,height:.42,rx:.21,fill:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.2 2h-.113a.373.373 0 0 1-.367-.373.287.287 0 0 0-.287-.294h-.426a.287.287 0 0 0-.287.287.373.373 0 0 1-.367.38H7.24a2.56 2.56 0 0 0-2.573 2.547 2.507 2.507 0 0 0 2.506 2.466h2.094a2.507 2.507 0 0 0 2.506-2.466A2.56 2.56 0 0 0 9.2 2Zm.527 4.1c-.48.08-.97-.062-1.334-.387a.26.26 0 0 0-.333 0 1.613 1.613 0 1 1 0-2.406.24.24 0 0 0 .32 0A1.613 1.613 0 1 1 9.713 6.1h.014Z",fill:(Fe=Z.color)!==null&&Fe!==void 0?Fe:"#30373F"})]}))};y.displayName="SvgIcCompanyLivinginhotel";var b=y,c=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 47 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{d:"M23.65 8.857h3.755c.59 0 1.105.074 1.543.22a3.01 3.01 0 0 1 1.082.614c.286.26.5.573.64.935.141.362.21.751.21 1.17v.3c0 .418-.074.811-.224 1.177-.15.365-.372.687-.661.962a3.166 3.166 0 0 1-1.083.656c-.432.161-.933.242-1.506.242h-2.312v4.01H23.65V8.857Zm1.444 1.227v3.824h2.07c1.517 0 2.275-.613 2.275-1.84v-.258c0-.59-.182-1.024-.546-1.305-.364-.281-.888-.421-1.567-.421H25.094ZM34.584 19.256c-.807 0-1.445-.194-1.916-.584-.471-.389-.708-.927-.708-1.612v-.386c0-.665.23-1.208.685-1.625.456-.42 1.196-.629 2.217-.629h2.027v-.457c0-.523-.13-.911-.386-1.163-.258-.251-.678-.378-1.262-.378-.467 0-.873.072-1.218.215a6.756 6.756 0 0 0-1.072.571l-.7-1.027a6.754 6.754 0 0 1 1.312-.692c.486-.195 1.05-.292 1.691-.292.447 0 .856.055 1.224.163.37.11.687.272.956.485.266.215.476.476.627.785.15.308.225.659.225 1.048v5.465H36.93V18.2h-.015a1.515 1.515 0 0 1-.314.393c-.131.12-.274.22-.43.307a3.067 3.067 0 0 1-.692.265 3.725 3.725 0 0 1-.898.091h.002Zm2.303-3.666H34.89c-.553 0-.95.105-1.188.314-.238.21-.357.5-.357.871v.2c0 .38.136.656.408.827.272.17.597.257.976.257.349 0 .653-.04.91-.121.257-.081.494-.202.708-.364.195-.143.332-.307.415-.492.082-.186.123-.426.123-.72v-.77l.002-.002ZM43.215 17.574l2.098-6.234H46.8l-4.14 11.028-1.283-.443 1.034-2.667-2.901-7.918h1.531l2.114 6.234H43.215Z",fill:"#333"}),Object(d.jsx)("path",{d:"M18.395 5H0v18h18.395V5Z",fill:"#00C73C"}),Object(d.jsx)("path",{d:"m10.66 18.12-2.968-4.265v4.265H4.599V9.88h3.136l2.968 4.265V9.88h3.093v8.24H10.66Z",fill:"#fff"})]}))};c.displayName="SvgIcCompanyNaverPay";var T=c,k=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.333 3.667h3.184l2.944 4.35v-4.35h3.206v8.666H9.46L6.517 8v4.333H3.333V3.667Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};k.displayName="SvgIcCompanyNaver";var x=k,_=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsxs)("g",{clipPath:"url(#ic-company-samsung-pay_svg__a)",children:[Object(d.jsx)("path",{d:"M27.744 9.825c-.345-2.6-1.265-4.956-2.888-6.681C23.13 1.52 20.773.6 18.173.257 15.691-.073 14 .009 14 .009s-1.69-.081-4.174.248C7.226.6 4.87 1.52 3.144 3.144 1.522 4.869.601 7.225.257 9.824c-.33 2.483-.248 4.174-.248 4.174s-.082 1.69.248 4.174c.344 2.6 1.265 4.955 2.887 6.68 1.726 1.623 4.082 2.543 6.682 2.888 2.483.33 4.174.248 4.174.248s1.69.081 4.174-.248c2.6-.345 4.956-1.265 6.681-2.887h.001c1.623-1.726 2.543-4.081 2.887-6.68.33-2.484.248-4.175.248-4.175s.082-1.69-.247-4.173Z",fill:"#1E4BC6"}),Object(d.jsx)("path",{d:"M5.156 9.897h2.513c.383 0 .735.069 1.056.206.322.137.6.323.835.558a2.6 2.6 0 0 1 .754 1.85 2.641 2.641 0 0 1-.754 1.86 2.607 2.607 0 0 1-.84.558 2.693 2.693 0 0 1-1.06.207H6.523v2.101H5.156v-7.34Zm1.367 1.267v2.705H7.57c.201 0 .386-.036.553-.106a1.299 1.299 0 0 0 .714-.724c.067-.164.1-.34.1-.528a1.38 1.38 0 0 0-.1-.528 1.276 1.276 0 0 0-.714-.714 1.412 1.412 0 0 0-.553-.105H6.523ZM13.472 17.247c-.355 0-.705-.066-1.05-.198a2.854 2.854 0 0 1-1.594-1.503 2.953 2.953 0 0 1-.252-1.245c0-.472.082-.89.246-1.255.165-.365.382-.674.654-.926.271-.252.583-.444.935-.577a3.052 3.052 0 0 1 1.081-.198c.389 0 .748.07 1.076.21.329.141.6.333.815.576v-.776h1.358v5.882h-1.358V16.4c-.215.263-.49.47-.825.62a2.609 2.609 0 0 1-1.086.226ZM13.694 16c.254 0 .489-.044.704-.132a1.63 1.63 0 0 0 .552-.368 1.81 1.81 0 0 0 .368-.548c.09-.207.136-.431.136-.67 0-.234-.046-.454-.136-.662a1.751 1.751 0 0 0-.368-.543 1.659 1.659 0 0 0-.552-.363 1.836 1.836 0 0 0-.704-.133 1.844 1.844 0 0 0-1.268.491 1.658 1.658 0 0 0-.513 1.209 1.692 1.692 0 0 0 .513 1.223c.161.155.35.276.569.364.218.088.45.132.699.132ZM19.597 16.982l-2.414-5.627h1.448l1.639 4.024 1.55-4.024h1.427l-3.51 8.587H18.36l1.237-2.96Z",fill:"#fff"})]}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"ic-company-samsung-pay_svg__a",children:Object(d.jsx)("path",{fill:"#fff",d:"M0 0h28v28H0z"})})})]}))};_.displayName="SvgIcCompanySamsungPay";var D=_,W=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.358 9.827V5.743l3.94 2.05-3.94 2.034Zm8.9-3.89c-.037-.542-.092-1.08-.284-1.599a1.794 1.794 0 0 0-1.127-1.117c-.3-.109-.618-.128-.934-.145a87.574 87.574 0 0 0-5.862-.122c-1.45.015-2.899.034-4.344.155-.769.065-1.348.418-1.647 1.142-.14.34-.226.693-.263 1.058a28.143 28.143 0 0 0-.036 5.01c.039.5.118.993.316 1.463.207.491.573.804 1.08.968.35.113.715.15 1.079.173 1.605.098 3.213.106 4.82.129 1.736-.02 3.472-.028 5.203-.165.72-.057 1.296-.355 1.62-1.02.172-.353.27-.729.312-1.117.176-1.602.177-3.207.067-4.813Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};W.displayName="SvgIcCompanyYoutube";var B=W,I=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m12.884 13.8.316-8.4h-2.4l.317 8.367 1.767.033ZM12 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#03936E"}),Object(d.jsx)("rect",{x:.75,y:.75,width:22.5,height:22.5,rx:11.25,stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#03936E",strokeWidth:1.5})]}))};I.displayName="SvgIcAlert";var O=I,l=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"m30.491 8.944-1.414-1.415L16.35 21.672 3.621 7.529 2.207 8.944 16.35 24.5 30.491 8.944Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};l.displayName="SvgIcAngleDown";var u=l,a=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"m23.556 29.991 1.415-1.414L10.828 15.85 24.971 3.121l-1.415-1.414L8 15.85l15.556 14.142Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};a.displayName="SvgIcAngleLeft";var p=a,s=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M9.444 2.009 8.029 3.423 22.172 16.15 8.029 28.879l1.415 1.414L25 16.15 9.444 2.009Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};s.displayName="SvgIcAngleRight";var h=s,P=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"m2.509 23.056 1.414 1.415L16.65 10.328l12.728 14.143 1.414-1.415L16.65 7.5 2.509 23.056Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};P.displayName="SvgIcAngleUp";var M=P,A=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"m10.707 20.646-.707.707L.646 12 10 2.646l.707.708L2.561 11.5h20.792v1H2.561l8.146 8.146Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};A.displayName="SvgIcArrowLeft";var S=A,L=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"m13.293 20.646.707.707L23.354 12 14 2.646l-.707.708 8.146 8.146H.646v1H21.44l-8.146 8.146Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};L.displayName="IcArrowRight";var U=L,Y=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M30 19H2l6.304-6",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};Y.displayName="IcArrowSingleLeft";var re=Y,ce=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M2 19h28l-6.304-6",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};ce.displayName="SvgIcArrowSingleRight";var q=ce,ie=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M2 6.768 6.12 12 14 4",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeWidth:2})}))};ie.displayName="SvgIcCheck";var te=ie,de=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"m3.263 3.263 9.474 9.474M3.263 12.737l9.474-9.474",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};de.displayName="SvgIcClose";var ue=de,fe=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M8 16V8h8M8 8l7 7M24 16v8h-8M24 24l-7-7",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeWidth:2})}))};fe.displayName="SvgIcExpand";var ve=fe,be=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsxs)("g",{clipPath:"url(#ic-hotel-type-mini_svg__a)",children:[Object(d.jsx)("rect",{width:16,height:16,rx:4,fill:"#979B9F"}),Object(d.jsx)("path",{d:"M3.418 3.516V12h1.71V6.422H5.2l2.215 5.543h1.172l2.215-5.52h.07V12h1.711V3.516h-2.18L8.047 9.27h-.094L5.598 3.516h-2.18Z",fill:"#fff"})]}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"ic-hotel-type-mini_svg__a",children:Object(d.jsx)("rect",{width:16,height:16,rx:4,fill:"#fff"})})})]}))};be.displayName="SvgIcHotelTypeMini";var ge=be,xe=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsxs)("g",{clipPath:"url(#ic-hotel-type-residence_svg__a)",children:[Object(d.jsx)("rect",{width:16,height:16,rx:4,fill:"#979B9F"}),Object(d.jsx)("path",{d:"M4.924 12h1.758V8.988h1.341L9.646 12h1.946L9.787 8.701c.967-.416 1.5-1.26 1.5-2.42 0-1.681-1.107-2.765-3.035-2.765H4.924V12Zm1.758-4.441V4.957h1.242c1.043.006 1.553.469 1.547 1.324.006.85-.504 1.278-1.547 1.278H6.682Z",fill:"#fff"})]}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"ic-hotel-type-residence_svg__a",children:Object(d.jsx)("rect",{width:16,height:16,rx:4,fill:"#fff"})})})]}))};xe.displayName="SvgIcHotelTypeResidence";var Ce=xe,De=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M3 8h10",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};De.displayName="SvgIcMinus";var Te=De,Be=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{d:"M1.3 8h13.4M8 14.7V1.3",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};Be.displayName="SvgIcPlus";var Oe=Be,Ne=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{d:"M7 2a6 6 0 0 1 6 6M1 8a6 6 0 0 1 6-6M1 8a6 6 0 0 0 6 6M7 14c2.22 0 4.16-1.207 5.197-3",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("path",{d:"m10 6.464 3.464 2 2-3.464",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ne.displayName="SvgIcReset";var Me=Ne,ke=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("rect",{width:24,height:24,rx:12,fill:"#DA5542"}),Object(d.jsx)("path",{d:"m7.263 7.263 9.474 9.474M7.263 16.737l9.474-9.474",stroke:"#fff"})]}))};ke.displayName="SvgIcResultFail";var Ve=ke,Ae=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("rect",{width:24,height:24,rx:12,fill:"#03936E"}),Object(d.jsx)("path",{d:"M6 10.768 10.12 16 18 8",stroke:"#fff",strokeWidth:2})]}))};Ae.displayName="SvgIcResultSuccess";var we=Ae,He=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m8 12.23-4.702 2.242.678-5.165-3.584-3.78 5.121-.95L8 0l2.487 4.577 5.121.95-3.584 3.78.678 5.165L8 12.231Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#979B9F"})}))};He.displayName="SvgIcStar";var Pe=He,_e=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 122 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{d:"M97.358 47.642H24.642A23.644 23.644 0 0 1 2.792 14.95 23.642 23.642 0 0 1 24.642.358h72.716a23.643 23.643 0 1 1 0 47.284ZM24.642 1.19a22.81 22.81 0 1 0 0 45.62h72.716a22.815 22.815 0 0 0 16.135-6.678A22.811 22.811 0 0 0 97.358 1.19H24.642Z",fill:"#30373F"}),Object(d.jsx)("path",{d:"M97.348 44.562H24.652a20.56 20.56 0 1 1 0-41.123h72.696a20.561 20.561 0 0 1 0 41.123ZM24.652 3.716a20.284 20.284 0 1 0 0 40.568h72.696a20.284 20.284 0 1 0 0-40.568H24.652Z",fill:"#30373F"}),Object(d.jsx)("path",{d:"M28.257 18.98c2.995 0 5.18 1.768 5.18 4.001 0 2.013-1.768 3.658-4.296 3.952v2.823a94.62 94.62 0 0 0 3.853-.148c1.227-.073 1.915-.22 2.504-.589.775.044 1.546.143 2.307.295.614.122.933.417.933.76 0 .516-.32.761-.933.761-.32 0-1.08-.049-2.135-.146a63.605 63.605 0 0 0-2.922-.05c-3.19.05-6.43.147-9.67.32a4.25 4.25 0 0 0-1.938.588c-.884-.073-2.185-.638-2.897-1.129a.794.794 0 0 1-.343-.564c0-.246.27-.32.785-.246 1.063.176 2.139.258 3.216.246 1.988 0 3.853-.025 5.62-.05v-2.846c-2.627-.27-4.443-1.915-4.443-3.977 0-2.233 2.185-4 5.18-4Zm-8.001-1.398a.806.806 0 0 1-.294-.59c0-.22.22-.343.687-.27.938.176 1.892.258 2.847.246 2.184 0 5.792-.049 7.363-.172 1.08-.098 1.694-.22 2.233-.588.718.053 1.43.151 2.136.294.564.123.834.417.834.76 0 .516-.27.762-.834.762-.295 0-1.301-.099-2.013-.148-.589-.049-1.57-.049-2.577-.049-1.497 0-4.516.074-6.112.246-.61.045-1.2.238-1.718.564a5.958 5.958 0 0 1-2.552-1.055Zm9.817-2.332c-.711 0-3.116 0-3.877.074a4.948 4.948 0 0 1-1.694-1.203c-.245-.295-.073-.614.515-.49.27.048.909.146 1.301.195.712.099 2.7.099 3.805.099.687 0 1.055.172 1.055.613 0 .393-.54.712-1.105.712Zm-1.816 10.53c1.67 0 3.46-1.08 3.46-2.799 0-1.717-1.79-2.798-3.46-2.798-1.718 0-3.46 1.08-3.46 2.798 0 1.743 1.742 2.798 3.46 2.798ZM43.77 23.448a.514.514 0 0 0 .589.564 38.26 38.26 0 0 0 6.259-.638c.638-.147.834.663.098.933a24.685 24.685 0 0 1-6.897 1.3c-1.448 0-1.767-.858-1.767-2.33v-4.959c-.27-.466-.933-.835-1.522-1.006-.736-.221-.712-.884.025-.884.662 0 2.086.172 3.068.172.77.03 1.543-.012 2.306-.123.409-.083.789-.269 1.105-.54.58-.049 1.163-.049 1.743 0 .564.025.859.246.859.663 0 .614-.491.76-1.326.786-1.742.073-2.7.073-4.515.172-.025.294-.025.416-.025.441v2.283c.452.02.905-.014 1.35-.099a3.15 3.15 0 0 0 1.227-.49 10.92 10.92 0 0 1 1.546-.025c.565.025.786.27.786.638 0 .614-.417.737-1.252.761-1.448.05-2.43.098-3.657.172v2.209Zm5.719 10.382c1.866.052 3.734.003 5.596-.147.515-.05 1.251-.246 1.62-.59a9.715 9.715 0 0 1 1.89.074c.49.05 1.055.27 1.055.761 0 .516-.442.785-1.252.761-1.693-.05-6.332.098-9.032.098-1.374.098-2.135-.54-2.135-1.914v-1.276c-.221-.565-.81-.762-1.375-.909-.736-.196-.687-.76.073-.81.737-.049 2.357.123 3.216.148 2.258.049 5.473-.099 6.799-.197.074-.662.122-1.816.122-2.454-1.767-.098-4.54.098-6.283.245a6.014 6.014 0 0 0-2.061.54 7.44 7.44 0 0 1-2.21-1.129c-.441-.392-.048-.736.344-.662.393.073 1.472.147 1.866.172 2.454.098 6.21-.074 7.485-.148.933-.049 2.038-.123 2.381-.172.54-.073.736.172.736.393a2.947 2.947 0 0 1-.294.908c-.196.761-.466 1.62-.687 2.234.54-.074 1.203.024 1.153.613-.024.442-.49.54-1.104.491-3.338-.024-6.357.074-8.394.172a4.619 4.619 0 0 0-.025.515v1.62c0 .417.172.663.516.663Zm5.154-18.629a11.31 11.31 0 0 0-.172 1.767v4.173c0 1.006.074 4.148-.933 4.148-.368 0-.638-.54-.638-1.645v-3.338c-.24.027-.477.068-.711.123a3.686 3.686 0 0 0-1.13.417 4.605 4.605 0 0 1-1.84-.785c-.442-.393-.148-.76.27-.687.294.049 1.325.049 1.816.049a15.434 15.434 0 0 0 1.595-.099v-2.92a3.915 3.915 0 0 0-1.718-1.105c-.687-.245-.614-.834.098-.834.565 0 2.675.22 3.363.736Zm3.804-1.35c-.103.584-.16 1.175-.172 1.767v5.768c0 1.006.05 4.148-.957 4.148-.368 0-.613-.54-.613-1.644v-8.836a4.329 4.329 0 0 0-1.816-1.154c-.712-.245-.639-.834.097-.834.59 0 2.774.27 3.461.785ZM66.376 17.925c2.601 0 4.516 1.694 4.909 3.952.81.025 1.718 0 2.675-.024v-4.86c0-.933-.908-1.301-1.841-1.62-.294-.123-.442-.246-.442-.393 0-.196.221-.441.688-.441.441 0 2.871.343 3.264.54l-.099 1.3v11.389c0 1.251.025 5.694-1.03 5.694-.368 0-.54-1.03-.54-3.044V22.81c-.246.024-.466.074-.638.098-.333.072-.65.205-.933.393a5.765 5.765 0 0 1-1.006-.295c-.123 2.602-2.136 4.59-5.007 4.59-2.995 0-5.007-2.11-5.007-4.81 0-2.7 2.012-4.86 5.007-4.86Zm.024 8.395c1.841 0 3.264-1.424 3.264-3.633 0-2.184-1.423-3.633-3.264-3.633-1.84 0-3.24 1.449-3.24 3.633 0 2.209 1.4 3.633 3.24 3.633Zm13.254-11.364V29.24c0 1.277.025 5.694-1.055 5.694-.369 0-.54-1.03-.54-3.043V15.422c0-.59-.614-1.055-1.817-1.522-.27-.123-.466-.245-.466-.393 0-.171.246-.417.737-.417.441 0 2.822.32 3.24.54l-.099 1.326ZM91.313 15.692a14.024 14.024 0 0 1-1.3 3.166l1.398 1.13c.639.515 1.252.956 1.964.932.564.49 1.62 1.522 1.865 2.233.32.81-.417 1.473-1.227.81l-4.565-4.148c-1.35 2.037-3.216 3.706-5.498 5.155-.688.442-1.153-.172-.565-.663 2.675-2.234 4.811-4.983 5.719-7.878-.122-.394-.638-.835-1.227-1.13-.736-.368-.27-.81.32-.76 1.128.098 2.674.687 3.116 1.153Zm-5.105 15.487c-.172-.441-.614-.736-1.178-.883-.737-.197-.687-.761.073-.81a26.14 26.14 0 0 1 3.02.147 6.825 6.825 0 0 0 1.914-.147 27.35 27.35 0 0 0 .122-2.43c-.417 0-1.399.073-1.767.122a5.602 5.602 0 0 0-1.693.467 5.154 5.154 0 0 1-1.841-.908c-.442-.393-.05-.737.343-.663.393.074 1.277.123 1.743.147a22.18 22.18 0 0 0 2.283-.073c.932-.074 1.84-.123 2.184-.172.54-.074.736.172.736.393-.06.297-.16.586-.294.859-.196.687-.417 1.62-.565 2.184.467-.073.835.074.786.565-.05.417-.393.49-.786.466-1.202.025-2.208.098-3.435.172a4.555 4.555 0 0 0-.025.515v1.522c0 .393.122.565.515.565.737 0 2.75-.393 4.172-.835.565-.172.81.49.099.835-1.498.736-3.608 1.448-4.614 1.521-1.448.098-1.792-.785-1.792-2.258v-1.3Zm11.487-4.884a57.472 57.472 0 0 1 1.89-.147c.539-.025.662.196.638.417-.025.22-.123.59-.172.933-.123 1.104-.393 3.755-.565 5.203.442-.098.884.024.859.466-.024.467-.221.688-.883.688-1.522 0-2.774.024-4.124.049-.024.294-.319.76-.662.785-.344.024-.59-.368-.638-.933l-.417-5.964a1.58 1.58 0 0 0-.958-.859c-.638-.196-.663-.785.05-.834a12.81 12.81 0 0 1 2.527.245c.818.047 1.639.03 2.455-.05Zm-2.43 1.055c-.025.344-.025.491-.025.59l.123 4.957c.957.025 1.963-.049 2.945-.122l.049-5.498c-.785-.025-2.184 0-3.092.073Zm4.32-13.499c-.104.584-.162 1.175-.173 1.767v4.64c.246-.025.492-.025.712-.05a2.378 2.378 0 0 0 1.375-.638 9.504 9.504 0 0 1 1.669.024c.393.05.933.246.933.786 0 .515-.565.81-1.252.785-.712-.024-2.013.025-3.437.05v.049c0 1.006.05 4.148-.957 4.148-.368 0-.638-.54-.638-1.645v-8.713c-.515-.614-1.448-.982-1.963-1.154-.737-.245-.663-.834.098-.834.614 0 2.945.27 3.632.785Z",fill:"#30373F"})]}))};_e.displayName="SvgLogo";var We=_e,Re=function(Z){var X,ye,Se,Fe;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsxs)("g",{clipPath:"url(#ic-clock_svg__a)",children:[Object(d.jsx)("path",{d:"M8 15A6.5 6.5 0 1 0 8 2a6.5 6.5 0 0 0 0 13Z",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("path",{d:"M5.657 2.121C4.485.95 2.744.791 1.767 1.768c-.976.976-.817 2.717.354 3.889M10 2.121c1.172-1.171 2.913-1.33 3.89-.353.975.976.817 2.717-.354 3.889",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(d.jsx)("path",{d:"M8.5 4.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z",fill:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"}),Object(d.jsx)("path",{d:"M10.367 10.827a.5.5 0 0 0 .574-.82l-2.458-1.72a.5.5 0 0 0-.573.819l2.457 1.72ZM12.124 15.363a.5.5 0 1 0 .94-.343l-.342-.94a.5.5 0 1 0-.94.343l.342.94ZM4.064 15.363a.5.5 0 1 1-.94-.343l.342-.94a.5.5 0 0 1 .94.343l-.342.94Z",fill:(Fe=Z.color)!==null&&Fe!==void 0?Fe:"#30373F"})]}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"ic-clock_svg__a",children:Object(d.jsx)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]}))};Re.displayName="SvgIcClock";var Ee=Re,Ue=function(Z){return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsxs)("g",{clipPath:"url(#ic-discount_svg__a)",children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M-.5 6.25a3.75 3.75 0 1 1 0 7.5v3.75h21v-3.75a3.75 3.75 0 1 1 0-7.5V2.5h-21v3.75Z",fill:"#03936E"}),Object(d.jsx)("circle",{cx:1.929,cy:1.929,r:1.479,transform:"matrix(1 0 0 -1 5.5 9.357)",stroke:"#fff",strokeWidth:.9}),Object(d.jsx)("circle",{cx:1.929,cy:1.929,r:1.479,transform:"matrix(1 0 0 -1 10.643 14.5)",stroke:"#fff",strokeWidth:.9}),Object(d.jsx)("path",{d:"M13 5.5h1.5l-7.5 9H5.5l7.5-9Z",fill:"#fff"})]}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"ic-discount_svg__a",children:Object(d.jsx)("path",{fill:"#fff",d:"M0 0h20v20H0z"})})})]}))};Ue.displayName="SvgIcDiscount";var se=Ue,ne=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 0a2 2 0 0 0-2 2v2h13a3 3 0 0 1 3 3v19h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H11Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5Zm3 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Zm-1 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Z",fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};ne.displayName="SvgIcDocument";var le=ne,Q=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{clipRule:"evenodd",d:"M15.182 4.575a2 2 0 0 1 2.828 0l1.415 1.415a2 2 0 0 1 0 2.828l-8.952 8.952-5.19.948.947-5.191 8.952-8.952Z",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"m6.838 13.547 3.672 3.672M14.616 5.769l3.672 3.672",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"})]}))};Q.displayName="SvgIcEdit";var J=Q,ee=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16h-6v-3a1 1 0 1 0-2 0v3H5ZM9 8h1v2H9V8Zm6 0h-1v2h1V8Zm-6 4h1v2H9v-2Zm6 0h-1v2h1v-2Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};ee.displayName="SvgIcHotelFill";var ae=ee,pe=function(Z){var X,ye,Se,Fe;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{d:"M5 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("path",{stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F",strokeWidth:.5,d:"M9.25 8.25h.5v1.5h-.5zM14.25 8.25h.5v1.5h-.5zM9.25 12.25h.5v1.5h-.5zM14.25 12.25h.5v1.5h-.5z"}),Object(d.jsx)("path",{d:"M10.5 18a1.5 1.5 0 0 1 3 0v3.5h-3V18Z",stroke:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"}),Object(d.jsx)("path",{fill:(Fe=Z.color)!==null&&Fe!==void 0?Fe:"#30373F",d:"M5 21h14v1H5z"})]}))};pe.displayName="SvgIcHotelLine";var je=pe,he=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{d:"M16.027 6.919V4.222H5.421v15.556h10.607v-2.63M12.264 11.78h5.885",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"m15.97 9.172 2.609 2.608-2.609 2.609",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"})]}))};he.displayName="SvgIcLogout";var Le=he,Ie=function(Z){var X;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2a8 8 0 0 0-2.549 15.585L12 22l2.549-4.415A8 8 0 0 0 12 2Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#367CE1"}),Object(d.jsx)("rect",{x:9,y:7,width:6,height:6,rx:3,fill:"#fff"})]}))};Ie.displayName="SvgIcMarker";var Ke=Ie,Ge=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("circle",{cx:12.478,cy:6.239,r:4.239,stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("path",{d:"M4 21.777v-1.834a6.42 6.42 0 0 1 6.42-6.42h4.114a6.42 6.42 0 0 1 6.42 6.42V22",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ge.displayName="SvgIcProfile";var Ye=Ge,ze=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("circle",{cx:9.5,cy:9.5,r:7,stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m14 14.727.727-.727L22 21.273l-.727.727L14 14.727Z",fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};ze.displayName="SvgIcSearch";var Qe=ze,Ze=function(Z){var X,ye;return Object(d.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(d.jsx)("path",{clipRule:"evenodd",d:"m13.414 4 .663 1.394c.829.29 1.586.733 2.238 1.294l1.541-.123 1.657 2.87-.875 1.273a7.042 7.042 0 0 1 0 2.585l.875 1.272-1.657 2.87-1.54-.123a6.993 6.993 0 0 1-2.239 1.294L13.414 20H10.1l-.664-1.394A6.991 6.991 0 0 1 7.2 17.313l-1.542.122L4 14.565l.876-1.272a7.04 7.04 0 0 1 0-2.585L4 9.435l1.657-2.87 1.542.122a6.993 6.993 0 0 1 2.237-1.293L10.1 4h3.314Z",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M11.757 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ze.displayName="SvgIcSettings";var $e=Ze,Xe=function(Z){var X;return Object(d.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9.53a1 1 0 0 1-1 1H9.5l-4.187 3.36A.5.5 0 0 1 4.5 15v-2.97H1a1 1 0 0 1-1-1V1.5ZM4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};Xe.displayName="SvgIcTalk";var qe=Xe,en=["src"];function nn(me,Z){if(me==null)return{};var X=tn(me,Z),ye,Se;if(Object.getOwnPropertySymbols){var Fe=Object.getOwnPropertySymbols(me);for(Se=0;Se<Fe.length;Se++)ye=Fe[Se],!(Z.indexOf(ye)>=0)&&Object.prototype.propertyIsEnumerable.call(me,ye)&&(X[ye]=me[ye])}return X}function tn(me,Z){if(me==null)return{};var X={},ye=Object.keys(me),Se,Fe;for(Fe=0;Fe<ye.length;Fe++)Se=ye[Fe],!(Z.indexOf(Se)>=0)&&(X[Se]=me[Se]);return X}var Je=Object(E.forwardRef)(function(me){var Z=me.src,X=nn(me,en);return Object(d.jsx)(d.Fragment,{children:G.a.createElement(K[Z],X)})});Je.displayName="Icon"},"./packages/travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Icon } from \\"../Icon\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Icon\\",\\n  component: Icon,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"IcCompanyApple\\",\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\n          \\"======company======\\",\\n          \\"IcCompanyInstagram\\",\\n          \\"IcCompanyApple\\",\\n          \\"IcCompanyBrunch\\",\\n          \\"IcCompanyFacebook\\",\\n          \\"IcCompanyGoogle\\",\\n          \\"IcCompanyKakaoPay\\",\\n          \\"IcCompanyKakao\\",\\n          \\"IcCompanyLivinginhotel\\",\\n          \\"IcCompanyNaverPay\\",\\n          \\"IcCompanyNaver\\",\\n          \\"IcCompanySamsungPay\\",\\n          \\"IcCompanyYoutube\\",\\n\\n          \\"======control======\\",\\n          \\"IcAlert\\",\\n          \\"IcAngleDown\\",\\n          \\"IcAngleLeft\\",\\n          \\"IcAngleRight\\",\\n          \\"IcAngleUp\\",\\n          \\"IcArrowLeft\\",\\n          \\"IcArrowRight\\",\\n          \\"IcArrowSingleLeft\\",\\n          \\"IcArrowSingleRight\\",\\n          \\"IcCheck\\",\\n          \\"IcClose\\",\\n          \\"IcExpand\\",\\n          \\"IcHotelTypeMini\\",\\n          \\"IcHotelTypeResidence\\",\\n          \\"IcMinus\\",\\n          \\"IcPlus\\",\\n          \\"IcReset\\",\\n          \\"IcResultFail\\",\\n          \\"IcResultSuccess\\",\\n          \\"IcStar\\",\\n\\n          \\"======logo======\\",\\n          \\"Logo\\",\\n\\n          \\"======pictogram======\\",\\n          \\"IcClock\\",\\n          \\"IcDiscount\\",\\n          \\"IcDocument\\",\\n          \\"IcEdit\\",\\n          \\"IcHotelFill\\",\\n          \\"IcHotelLine\\",\\n          \\"IcLogout\\",\\n          \\"IcMarker\\",\\n          \\"IcProfile\\",\\n          \\"IcSearch\\",\\n          \\"IcSettings\\",\\n          \\"IcTalk\\",\\n        ],\\n      },\\n      description: \\"Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":77},"endLoc":{"col":1,"line":79},"startBody":{"col":23,"line":77},"endBody":{"col":1,"line":79}}};
    
import { Meta } from "@storybook/react";
import { Icon } from "../Icon";

export default {
  title: "@travelmakers-design-v2/core/General/Icon",
  component: Icon,
  argTypes: {
    src: {
      defaultValue: "IcCompanyApple",
      control: {
        type: "radio",
        options: [
          "======company======",
          "IcCompanyInstagram",
          "IcCompanyApple",
          "IcCompanyBrunch",
          "IcCompanyFacebook",
          "IcCompanyGoogle",
          "IcCompanyKakaoPay",
          "IcCompanyKakao",
          "IcCompanyLivinginhotel",
          "IcCompanyNaverPay",
          "IcCompanyNaver",
          "IcCompanySamsungPay",
          "IcCompanyYoutube",

          "======control======",
          "IcAlert",
          "IcAngleDown",
          "IcAngleLeft",
          "IcAngleRight",
          "IcAngleUp",
          "IcArrowLeft",
          "IcArrowRight",
          "IcArrowSingleLeft",
          "IcArrowSingleRight",
          "IcCheck",
          "IcClose",
          "IcExpand",
          "IcHotelTypeMini",
          "IcHotelTypeResidence",
          "IcMinus",
          "IcPlus",
          "IcReset",
          "IcResultFail",
          "IcResultSuccess",
          "IcStar",

          "======logo======",
          "Logo",

          "======pictogram======",
          "IcClock",
          "IcDiscount",
          "IcDocument",
          "IcEdit",
          "IcHotelFill",
          "IcHotelLine",
          "IcLogout",
          "IcMarker",
          "IcProfile",
          "IcSearch",
          "IcSettings",
          "IcTalk",
        ],
      },
      description: "Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Icon {...props} width={32} height={32} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:85},endLoc:{col:1,line:87},startBody:{col:23,line:85},endBody:{col:1,line:87}}},G=`import { Meta } from "@storybook/react";
import { Icon } from "../Icon";

export default {
  title: "@travelmakers-design-v2/core/General/Icon",
  component: Icon,
  argTypes: {
    src: {
      defaultValue: "IcCompanyApple",
      control: {
        type: "radio",
        options: [
          "======company======",
          "IcCompanyInstagram",
          "IcCompanyApple",
          "IcCompanyBrunch",
          "IcCompanyFacebook",
          "IcCompanyGoogle",
          "IcCompanyKakaoPay",
          "IcCompanyKakao",
          "IcCompanyLivinginhotel",
          "IcCompanyNaverPay",
          "IcCompanyNaver",
          "IcCompanySamsungPay",
          "IcCompanyYoutube",

          "======control======",
          "IcAlert",
          "IcAngleDown",
          "IcAngleLeft",
          "IcAngleRight",
          "IcAngleUp",
          "IcArrowLeft",
          "IcArrowRight",
          "IcArrowSingleLeft",
          "IcArrowSingleRight",
          "IcCheck",
          "IcClose",
          "IcExpand",
          "IcHotelTypeMini",
          "IcHotelTypeResidence",
          "IcMinus",
          "IcPlus",
          "IcReset",
          "IcResultFail",
          "IcResultSuccess",
          "IcStar",

          "======logo======",
          "Logo",

          "======pictogram======",
          "IcClock",
          "IcDiscount",
          "IcDocument",
          "IcEdit",
          "IcHotelFill",
          "IcHotelLine",
          "IcLogout",
          "IcMarker",
          "IcProfile",
          "IcSearch",
          "IcSettings",
          "IcTalk",
        ],
      },
      description: "Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Icon {...props} width={32} height={32} />;
};
`,z={Default:{startLoc:{col:23,line:77},endLoc:{col:1,line:79},startBody:{col:23,line:77},endBody:{col:1,line:79}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Icon } from \\"../Icon\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Icon\\",\\n  component: Icon,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"IcCompanyApple\\",\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\n          \\"======company======\\",\\n          \\"IcCompanyInstagram\\",\\n          \\"IcCompanyApple\\",\\n          \\"IcCompanyBrunch\\",\\n          \\"IcCompanyFacebook\\",\\n          \\"IcCompanyGoogle\\",\\n          \\"IcCompanyKakaoPay\\",\\n          \\"IcCompanyKakao\\",\\n          \\"IcCompanyLivinginhotel\\",\\n          \\"IcCompanyNaverPay\\",\\n          \\"IcCompanyNaver\\",\\n          \\"IcCompanySamsungPay\\",\\n          \\"IcCompanyYoutube\\",\\n\\n          \\"======control======\\",\\n          \\"IcAlert\\",\\n          \\"IcAngleDown\\",\\n          \\"IcAngleLeft\\",\\n          \\"IcAngleRight\\",\\n          \\"IcAngleUp\\",\\n          \\"IcArrowLeft\\",\\n          \\"IcArrowRight\\",\\n          \\"IcArrowSingleLeft\\",\\n          \\"IcArrowSingleRight\\",\\n          \\"IcCheck\\",\\n          \\"IcClose\\",\\n          \\"IcExpand\\",\\n          \\"IcHotelTypeMini\\",\\n          \\"IcHotelTypeResidence\\",\\n          \\"IcMinus\\",\\n          \\"IcPlus\\",\\n          \\"IcReset\\",\\n          \\"IcResultFail\\",\\n          \\"IcResultSuccess\\",\\n          \\"IcStar\\",\\n\\n          \\"======logo======\\",\\n          \\"Logo\\",\\n\\n          \\"======pictogram======\\",\\n          \\"IcClock\\",\\n          \\"IcDiscount\\",\\n          \\"IcDocument\\",\\n          \\"IcEdit\\",\\n          \\"IcHotelFill\\",\\n          \\"IcHotelLine\\",\\n          \\"IcLogout\\",\\n          \\"IcMarker\\",\\n          \\"IcProfile\\",\\n          \\"IcSearch\\",\\n          \\"IcSettings\\",\\n          \\"IcTalk\\",\\n        ],\\n      },\\n      description: \\"Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":77},"endLoc":{"col":1,"line":79},"startBody":{"col":23,"line":77},"endBody":{"col":1,"line":79}}};
    
import { Meta } from "@storybook/react";
import { Icon } from "../Icon";

export default {
  title: "@travelmakers-design-v2/core/General/Icon",
  component: Icon,
  argTypes: {
    src: {
      defaultValue: "IcCompanyApple",
      control: {
        type: "radio",
        options: [
          "======company======",
          "IcCompanyInstagram",
          "IcCompanyApple",
          "IcCompanyBrunch",
          "IcCompanyFacebook",
          "IcCompanyGoogle",
          "IcCompanyKakaoPay",
          "IcCompanyKakao",
          "IcCompanyLivinginhotel",
          "IcCompanyNaverPay",
          "IcCompanyNaver",
          "IcCompanySamsungPay",
          "IcCompanyYoutube",

          "======control======",
          "IcAlert",
          "IcAngleDown",
          "IcAngleLeft",
          "IcAngleRight",
          "IcAngleUp",
          "IcArrowLeft",
          "IcArrowRight",
          "IcArrowSingleLeft",
          "IcArrowSingleRight",
          "IcCheck",
          "IcClose",
          "IcExpand",
          "IcHotelTypeMini",
          "IcHotelTypeResidence",
          "IcMinus",
          "IcPlus",
          "IcReset",
          "IcResultFail",
          "IcResultSuccess",
          "IcStar",

          "======logo======",
          "Logo",

          "======pictogram======",
          "IcClock",
          "IcDiscount",
          "IcDocument",
          "IcEdit",
          "IcHotelFill",
          "IcHotelLine",
          "IcLogout",
          "IcMarker",
          "IcProfile",
          "IcSearch",
          "IcSettings",
          "IcTalk",
        ],
      },
      description: "Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Icon {...props} width={32} height={32} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:85},endLoc:{col:1,line:87},startBody:{col:23,line:85},endBody:{col:1,line:87}}}}},title:"@travelmakers-design-v2/core/General/Icon",component:w.a,argTypes:{src:{defaultValue:"IcCompanyApple",control:{type:"radio",options:["======company======","IcCompanyInstagram","IcCompanyApple","IcCompanyBrunch","IcCompanyFacebook","IcCompanyGoogle","IcCompanyKakaoPay","IcCompanyKakao","IcCompanyLivinginhotel","IcCompanyNaverPay","IcCompanyNaver","IcCompanySamsungPay","IcCompanyYoutube","======control======","IcAlert","IcAngleDown","IcAngleLeft","IcAngleRight","IcAngleUp","IcArrowLeft","IcArrowRight","IcArrowSingleLeft","IcArrowSingleRight","IcCheck","IcClose","IcExpand","IcHotelTypeMini","IcHotelTypeResidence","IcMinus","IcPlus","IcReset","IcResultFail","IcResultSuccess","IcStar","======logo======","Logo","======pictogram======","IcClock","IcDiscount","IcDocument","IcEdit","IcHotelFill","IcHotelLine","IcLogout","IcMarker","IcProfile","IcSearch","IcSettings","IcTalk"]},description:"Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var d=function(R){return Object(F.jsx)(w.a,Object.assign({},R,{width:32,height:32}))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <Icon {...props} width={32} height={32} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Image/Image.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return x});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),d=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),j=Object(i.a)(function(_,D){var W=D.load,B=D.error;return{image:{display:W&&!B?"block":"none",objectFit:W&&!B?"cover":"contain"},loading:{objectFit:"contain",backgroundColor:"#EFEFEF"}}}),m=e("./node_modules/react/jsx-runtime.js"),f=["lazy","src","alt","className"];function r(_,D){return c(_)||b(_,D)||v(_,D)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(_,D){if(_){if(typeof _=="string")return y(_,D);var W=Object.prototype.toString.call(_).slice(8,-1);if(W==="Object"&&_.constructor&&(W=_.constructor.name),W==="Map"||W==="Set")return Array.from(_);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return y(_,D)}}function y(_,D){(D==null||D>_.length)&&(D=_.length);for(var W=0,B=new Array(D);W<D;W++)B[W]=_[W];return B}function b(_,D){var W=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(W!=null){var B,I,O,l,u=[],a=!0,p=!1;try{if(O=(W=W.call(_)).next,D===0){if(Object(W)!==W)return;a=!1}else for(;!(a=(B=O.call(W)).done)&&(u.push(B.value),u.length!==D);a=!0);}catch(s){p=!0,I=s}finally{try{if(!a&&W.return!=null&&(l=W.return(),Object(l)!==l))return}finally{if(p)throw I}}return u}}function c(_){if(Array.isArray(_))return _}function T(_,D){if(_==null)return{};var W=k(_,D),B,I;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(_);for(I=0;I<O.length;I++)B=O[I],!(D.indexOf(B)>=0)&&Object.prototype.propertyIsEnumerable.call(_,B)&&(W[B]=_[B])}return W}function k(_,D){if(_==null)return{};var W={},B=Object.keys(_),I,O;for(O=0;O<B.length;O++)I=B[O],!(D.indexOf(I)>=0)&&(W[I]=_[I]);return W}var x=Object(n.forwardRef)(function(_,D){var W=_.lazy,B=W===void 0?!0:W,I=_.src,O=_.alt,l=_.className,u=T(_,f),a=Object(n.useState)(!1),p=r(a,2),s=p[0],h=p[1],P=Object(n.useState)(!1),M=r(P,2),A=M[0],S=M[1],L=j({load:s,error:A}),U=L.classes,Y=L.cx;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",Object.assign({ref:D,src:I,alt:O,loading:B?"lazy":"eager",decoding:B?"async":"auto",className:Y(l,U.image),onLoad:function(){return h(!0)},onError:function(ce){h(!0),S(!0)}},u)),!s&&Object(m.jsx)("img",Object.assign({loading:B?"lazy":"eager",decoding:B?"async":"auto",className:Y(l,U.loading),src:e("./packages/travelmakers-design-core/src/components/Image/img/loading.png")},u)),A&&Object(m.jsx)("img",Object.assign({loading:B?"lazy":"eager",decoding:B?"async":"auto",className:Y(l,U.loading),src:e("./packages/travelmakers-design-core/src/components/Image/img/error.png")},u))]})});x.displayName="Image"},"./packages/travelmakers-design-core/src/components/Image/img/error.png":function(oe,g,e){oe.exports=e.p+"static/media/error.24450d72.png"},"./packages/travelmakers-design-core/src/components/Image/img/loading.png":function(oe,g,e){oe.exports=e.p+"static/media/loading.0812647b.png"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Image } from \\"../Image\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      description: \\"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      description: \\"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Image {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":46},"endLoc":{"col":1,"line":48},"startBody":{"col":23,"line":46},"endBody":{"col":1,"line":48}}};
    
import { Meta } from "@storybook/react";
import { Image } from "../Image";

export default {
  title: "@travelmakers-design-v2/core/General/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    lazy: {
      defaultValue: true,
      description: "true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",
      control: { type: "boolean" },
    },
    width: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Image {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Image {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:56},startBody:{col:23,line:54},endBody:{col:1,line:56}}},G=`import { Meta } from "@storybook/react";
import { Image } from "../Image";

export default {
  title: "@travelmakers-design-v2/core/General/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    lazy: {
      defaultValue: true,
      description: "true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",
      control: { type: "boolean" },
    },
    width: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Image {...props} />;
};
`,z={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:48},startBody:{col:23,line:46},endBody:{col:1,line:48}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Image } from \\"../Image\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Image\\",\\n  component: Image,\\n  argTypes: {\\n    src: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    lazy: {\\n      defaultValue: true,\\n      description: \\"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\",\\n      control: { type: \\"boolean\\" },\\n    },\\n    width: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    height: {\\n      defaultValue: 400,\\n      description: \\"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"number\\" },\\n    },\\n    alt: {\\n      defaultValue: \\"\\",\\n      description: \\"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Image {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":46},"endLoc":{"col":1,"line":48},"startBody":{"col":23,"line":46},"endBody":{"col":1,"line":48}}};
    
import { Meta } from "@storybook/react";
import { Image } from "../Image";

export default {
  title: "@travelmakers-design-v2/core/General/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    lazy: {
      defaultValue: true,
      description: "true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",
      control: { type: "boolean" },
    },
    width: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Image {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Image {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:56},startBody:{col:23,line:54},endBody:{col:1,line:56}}}}},title:"@travelmakers-design-v2/core/General/Image",component:w.a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}};var d=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <Image {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return u});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),d=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),i=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),j=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),m=function(p,s,h){return s?p.error:h},f=function(p,s,h){return s===!1?p.secondary1:s===!0?p.error:h!=null?h:""},r=Object(j.a)(function(a,p){var s,h,P=p.subfix,M=p.isError,A=a.typography,S=a.colors,L=a.spacing,U=a.radius;return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:L.spacing5},focus:{border:"1px solid "+m(S,M,S.primary)},disabled:{backgroundColor:S.surface,userSelect:"none"},container:{display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:"328px",minHeight:"44px",padding:"0 "+L.spacing30,border:"1px solid "+m(S,M,S.outline),borderRadius:U.radius20,overflow:"hidden"},input:Object.assign({},A.body2,(h={padding:0,color:S.primary2,border:0,outline:0,width:P?"100%":"auto"},h["&::placeholder"]={color:S.primary3},h["&:focus"]={color:S.primary1,borderColor:m(S,M,S.primary)},h["&:disabled"]=(s={color:S.primary3,backgroundColor:S.surface},s["&::placeholder"]={color:S.primary4},s),h)),label:Object.assign({},A.body2,{color:S.primary1}),subfix:Object.assign({},A.body2,{paddingLeft:L.spacing30,color:f(S,M,S.primary3),flexShrink:0}),feedback:Object.assign({},A.body3,{color:f(S,M,S.primary3),fontWeight:400})}}),o=e("./node_modules/react/jsx-runtime.js"),v=["label","subfix","feedback","isError","value","placeholder","autoComplete","onClick","onBlur","onChange","className"];function y(a,p){return x(a)||k(a,p)||c(a,p)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(a,p){if(a){if(typeof a=="string")return T(a,p);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return T(a,p)}}function T(a,p){(p==null||p>a.length)&&(p=a.length);for(var s=0,h=new Array(p);s<p;s++)h[s]=a[s];return h}function k(a,p){var s=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var h,P,M,A,S=[],L=!0,U=!1;try{if(M=(s=s.call(a)).next,p===0){if(Object(s)!==s)return;L=!1}else for(;!(L=(h=M.call(s)).done)&&(S.push(h.value),S.length!==p);L=!0);}catch(Y){U=!0,P=Y}finally{try{if(!L&&s.return!=null&&(A=s.return(),Object(A)!==A))return}finally{if(U)throw P}}return S}}function x(a){if(Array.isArray(a))return a}function _(a,p){if(a==null)return{};var s=D(a,p),h,P;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(a);for(P=0;P<M.length;P++)h=M[P],!(p.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(a,h)&&(s[h]=a[h])}return s}function D(a,p){if(a==null)return{};var s={},h=Object.keys(a),P,M;for(M=0;M<h.length;M++)P=h[M],!(p.indexOf(P)>=0)&&(s[P]=a[P]);return s}var W=0,B=Object(n.forwardRef)(function(a,p){var s=a.label,h=a.subfix,P=a.feedback,M=a.isError,A=M===void 0?null:M,S=a.value,L=a.placeholder,U=L===void 0?"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.":L,Y=a.autoComplete,re=a.onClick,ce=a.onBlur,q=a.onChange,ie=a.className,te=_(a,v),de=Object(n.useState)(S!=null?S:""),ue=y(de,2),fe=ue[0],ve=ue[1],be=Object(n.useState)(!1),ge=y(be,2),xe=ge[0],Ce=ge[1],De=r({subfix:h,isError:A}),Te=De.classes,Be=De.cx,Oe=Object(n.useState)(function(){return String(W++)}),Ne=y(Oe,1),Me=Ne[0],ke="tm-input-"+Me,Ve=function(_e){Ce(!0),re==null||re(_e)},Ae=function(_e){Ce(!1),ce==null||ce(_e)},we=function(_e){ve(_e.target.value),q==null||q(_e)},He=function(_e){var We=_e.subfix;if(We){var Re,Ee;return Object(o.jsxs)("div",{className:Be(Te.container,(Re={},Re[Te.focus]=xe,Re),(Ee={},Ee[Te.disabled]=te.disabled,Ee)),"aria-readonly":te.disabled,children:[Object(o.jsx)(i.a,Object.assign({component:"input",className:Te.input,id:ke,type:"text",ref:p,placeholder:U,autoComplete:Y!=null?Y:"off",onClick:Ve,onBlur:Ae,onChange:we,value:fe},te)),Object(o.jsx)("div",{className:Te.subfix,"aria-readonly":te.disabled,children:We})]})}return Object(o.jsx)(i.a,Object.assign({component:"input",className:Be(Te.input,Te.container),id:ke,type:"text",ref:p,placeholder:U,autoComplete:Y!=null?Y:"off",onClick:re,onBlur:ce,onChange:we,value:fe,"aria-readonly":te.disabled},te))};return Object(o.jsxs)("div",{className:Be(Te.root,ie),children:[s&&Object(o.jsx)("label",{className:Te.label,htmlFor:ke,children:s}),Object(o.jsx)(He,{subfix:h}),P&&Object(o.jsx)("strong",{className:Te.feedback,children:P})]})});B.displayName="Input";var I=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Input } from \\"../Input\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Input\\",\\n  component: Input,\\n  argTypes: {\\n    label: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"input \uB77C\uBCA8\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    subfix: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"input \uC0AC\uC6A9 \uC2DC \uC778\uC99D \uC2DC\uAC04,\uACB0\uACFC \uB4F1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: [\\"string\\", \\"number\\"],\\n        },\\n      },\\n    },\\n    feedback: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"input \uCD94\uAC00 \uC124\uBA85\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    isError: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"input Error \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n    disabled: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"input Disabled \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Input {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":68},"endLoc":{"col":1,"line":70},"startBody":{"col":23,"line":68},"endBody":{"col":1,"line":70}}};
    
import { Meta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "@travelmakers-design-v2/core/General/Input",
  component: Input,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "input \uB77C\uBCA8",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    subfix: {
      control: {
        type: "text",
      },
      description: "input \uC0AC\uC6A9 \uC2DC \uC778\uC99D \uC2DC\uAC04,\uACB0\uACFC \uB4F1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",
      table: {
        type: {
          summary: ["string", "number"],
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "input \uCD94\uAC00 \uC124\uBA85",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isError: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "input Error \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "input Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Input {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Input {...props} />;\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:76},endLoc:{col:1,line:78},startBody:{col:23,line:76},endBody:{col:1,line:78}}},I=`import { Meta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "@travelmakers-design-v2/core/General/Input",
  component: Input,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "input \uB77C\uBCA8",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    subfix: {
      control: {
        type: "text",
      },
      description: "input \uC0AC\uC6A9 \uC2DC \uC778\uC99D \uC2DC\uAC04,\uACB0\uACFC \uB4F1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",
      table: {
        type: {
          summary: ["string", "number"],
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "input \uCD94\uAC00 \uC124\uBA85",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isError: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "input Error \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "input Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Input {...props} />;
};
`,O={Default:{startLoc:{col:23,line:68},endLoc:{col:1,line:70},startBody:{col:23,line:68},endBody:{col:1,line:70}}},l=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Input } from \\"../Input\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Input\\",\\n  component: Input,\\n  argTypes: {\\n    label: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"input \uB77C\uBCA8\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    subfix: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"input \uC0AC\uC6A9 \uC2DC \uC778\uC99D \uC2DC\uAC04,\uACB0\uACFC \uB4F1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: [\\"string\\", \\"number\\"],\\n        },\\n      },\\n    },\\n    feedback: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"input \uCD94\uAC00 \uC124\uBA85\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    isError: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"input Error \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n    disabled: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"input Disabled \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <Input {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":68},"endLoc":{"col":1,"line":70},"startBody":{"col":23,"line":68},"endBody":{"col":1,"line":70}}};
    
import { Meta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "@travelmakers-design-v2/core/General/Input",
  component: Input,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "input \uB77C\uBCA8",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    subfix: {
      control: {
        type: "text",
      },
      description: "input \uC0AC\uC6A9 \uC2DC \uC778\uC99D \uC2DC\uAC04,\uACB0\uACFC \uB4F1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",
      table: {
        type: {
          summary: ["string", "number"],
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "input \uCD94\uAC00 \uC124\uBA85",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isError: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "input Error \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "input Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Input {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Input {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:76},endLoc:{col:1,line:78},startBody:{col:23,line:76},endBody:{col:1,line:78}}}}},title:"@travelmakers-design-v2/core/General/Input",component:B,argTypes:{label:{control:{type:"text"},description:"input \uB77C\uBCA8",table:{type:{summary:"string"}}},subfix:{control:{type:"text"},description:"input \uC0AC\uC6A9 \uC2DC \uC778\uC99D \uC2DC\uAC04,\uACB0\uACFC \uB4F1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",table:{type:{summary:["string","number"]}}},feedback:{control:{type:"text"},description:"input \uCD94\uAC00 \uC124\uBA85",table:{type:{summary:"string"}}},isError:{control:{type:"boolean"},defaultValue:!1,description:"input Error \uC5EC\uBD80",table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},defaultValue:!1,description:"input Disabled \uC5EC\uBD80",table:{type:{summary:"boolean"}}}}},u=function(p){return Object(o.jsx)(B,Object.assign({},p))};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
  return <Input {...props} />;
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return C});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=Object(z.a)(function(t){var n=t.colors,i=t.radius;return{root:{display:"inline-flex",flexDirection:"column",rowGap:"1px",minWidth:"328px",margin:0,padding:0,backgroundColor:n.outline,border:"1px solid "+n.outline,borderRadius:i.radius20,overflow:"hidden"}}}),H=e("./node_modules/react/jsx-runtime.js"),R=["className","children"];function N(t,n){if(t==null)return{};var i=V(t,n),j,m;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);for(m=0;m<f.length;m++)j=f[m],!(n.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(t,j)&&(i[j]=t[j])}return i}function V(t,n){if(t==null)return{};var i={},j=Object.keys(t),m,f;for(f=0;f<j.length;f++)m=j[f],!(n.indexOf(m)>=0)&&(i[m]=t[m]);return i}var C=Object(E.forwardRef)(function(t,n){var i=t.className,j=t.children,m=N(t,R),f=d(),r=f.classes,o=f.cx;return Object(H.jsx)(G.a,Object.assign({component:"ul",ref:n,className:o(r.root,i)},m,{children:j}))});C.displayName="Menu"},"./packages/travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return t});var K=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.function.name.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.object.assign.js"),G=e.n(E),z=e("./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx"),d=e("./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx"),H=e("./node_modules/react/jsx-runtime.js"),R=e.n(H),N=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { MenuItem } from \\"../../MenuItem\\";\\nimport { Menu } from \\"../Menu\\";\\n\\nconst menus = [\\n  { href: \\"#\\", name: \\"\uC608\uC57D \uB0B4\uC5ED\\" },\\n  { href: \\"#\\", name: \\"\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD\\" },\\n  { href: \\"#\\", name: \\"\uC54C\uB9BC \uC124\uC815\\" },\\n  { href: \\"#\\", name: \\"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38\\" },\\n  { href: \\"#\\", name: \\"\uACE0\uAC1D\uC13C\uD130\\" },\\n];\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Menu/Menu\\",\\n  component: Menu,\\n  argTypes: {\\n    /**\\n     * ex)\\n     *    props: {\\n     *      // type, control, etc.\\n     *      defaultValue: \\"props\uC758 defaultValue\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n     *      description: \\"props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n     *\\n     *    },\\n     */\\n  },\\n} as Meta;\\n\\nexport const Default = () => {\\n  const items = menus.map((menu, idx) => {\\n    const { href, name } = menu;\\n\\n    return <MenuItem key={idx} href={href} menu={name} />;\\n  });\\n\\n  return <Menu>{items}</Menu>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":29},"endLoc":{"col":1,"line":37},"startBody":{"col":23,"line":29},"endBody":{"col":1,"line":37}}};
    
import { Meta } from "@storybook/react";
import { MenuItem } from "../../MenuItem";
import { Menu } from "../Menu";

const menus = [
  { href: "#", name: "\uC608\uC57D \uB0B4\uC5ED" },
  { href: "#", name: "\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD" },
  { href: "#", name: "\uC54C\uB9BC \uC124\uC815" },
  { href: "#", name: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" },
  { href: "#", name: "\uACE0\uAC1D\uC13C\uD130" },
];

export default {
  title: "@travelmakers-design-v2/core/General/Menu/Menu",
  component: Menu,
  argTypes: {
    /**
     * ex)
     *    props: {
     *      // type, control, etc.
     *      defaultValue: "props\uC758 defaultValue\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.",
     *      description: "props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
     *
     *    },
     */
  },
} as Meta;

export const Default = () => {
  const items = menus.map((menu, idx) => {
    const { href, name } = menu;

    return <MenuItem key={idx} href={href} menu={name} />;
  });

  return <Menu>{items}</Menu>;
};



Default.parameters = { storySource: { source: "() => {\\n  const items = menus.map((menu, idx) => {\\n    const { href, name } = menu;\\n\\n    return <MenuItem key={idx} href={href} menu={name} />;\\n  });\\n\\n  return <Menu>{items}</Menu>;\\n}" }, ...Default.parameters };`,V={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:45},startBody:{col:23,line:37},endBody:{col:1,line:45}}},N=`import { Meta } from "@storybook/react";
import { MenuItem } from "../../MenuItem";
import { Menu } from "../Menu";

const menus = [
  { href: "#", name: "\uC608\uC57D \uB0B4\uC5ED" },
  { href: "#", name: "\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD" },
  { href: "#", name: "\uC54C\uB9BC \uC124\uC815" },
  { href: "#", name: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" },
  { href: "#", name: "\uACE0\uAC1D\uC13C\uD130" },
];

export default {
  title: "@travelmakers-design-v2/core/General/Menu/Menu",
  component: Menu,
  argTypes: {
    /**
     * ex)
     *    props: {
     *      // type, control, etc.
     *      defaultValue: "props\uC758 defaultValue\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.",
     *      description: "props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
     *
     *    },
     */
  },
} as Meta;

export const Default = () => {
  const items = menus.map((menu, idx) => {
    const { href, name } = menu;

    return <MenuItem key={idx} href={href} menu={name} />;
  });

  return <Menu>{items}</Menu>;
};
`,V={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:37},startBody:{col:23,line:29},endBody:{col:1,line:37}}},C=[{href:"#",name:"\uC608\uC57D \uB0B4\uC5ED"},{href:"#",name:"\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD"},{href:"#",name:"\uC54C\uB9BC \uC124\uC815"},{href:"#",name:"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"},{href:"#",name:"\uACE0\uAC1D\uC13C\uD130"}];g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { MenuItem } from \\"../../MenuItem\\";\\nimport { Menu } from \\"../Menu\\";\\n\\nconst menus = [\\n  { href: \\"#\\", name: \\"\uC608\uC57D \uB0B4\uC5ED\\" },\\n  { href: \\"#\\", name: \\"\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD\\" },\\n  { href: \\"#\\", name: \\"\uC54C\uB9BC \uC124\uC815\\" },\\n  { href: \\"#\\", name: \\"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38\\" },\\n  { href: \\"#\\", name: \\"\uACE0\uAC1D\uC13C\uD130\\" },\\n];\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Menu/Menu\\",\\n  component: Menu,\\n  argTypes: {\\n    /**\\n     * ex)\\n     *    props: {\\n     *      // type, control, etc.\\n     *      defaultValue: \\"props\uC758 defaultValue\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n     *      description: \\"props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n     *\\n     *    },\\n     */\\n  },\\n} as Meta;\\n\\nexport const Default = () => {\\n  const items = menus.map((menu, idx) => {\\n    const { href, name } = menu;\\n\\n    return <MenuItem key={idx} href={href} menu={name} />;\\n  });\\n\\n  return <Menu>{items}</Menu>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":29},"endLoc":{"col":1,"line":37},"startBody":{"col":23,"line":29},"endBody":{"col":1,"line":37}}};
    
import { Meta } from "@storybook/react";
import { MenuItem } from "../../MenuItem";
import { Menu } from "../Menu";

const menus = [
  { href: "#", name: "\uC608\uC57D \uB0B4\uC5ED" },
  { href: "#", name: "\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD" },
  { href: "#", name: "\uC54C\uB9BC \uC124\uC815" },
  { href: "#", name: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" },
  { href: "#", name: "\uACE0\uAC1D\uC13C\uD130" },
];

export default {
  title: "@travelmakers-design-v2/core/General/Menu/Menu",
  component: Menu,
  argTypes: {
    /**
     * ex)
     *    props: {
     *      // type, control, etc.
     *      defaultValue: "props\uC758 defaultValue\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.",
     *      description: "props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
     *
     *    },
     */
  },
} as Meta;

export const Default = () => {
  const items = menus.map((menu, idx) => {
    const { href, name } = menu;

    return <MenuItem key={idx} href={href} menu={name} />;
  });

  return <Menu>{items}</Menu>;
};



Default.parameters = { storySource: { source: "() => {\\n  const items = menus.map((menu, idx) => {\\n    const { href, name } = menu;\\n\\n    return <MenuItem key={idx} href={href} menu={name} />;\\n  });\\n\\n  return <Menu>{items}</Menu>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:45},startBody:{col:23,line:37},endBody:{col:1,line:45}}}}},title:"@travelmakers-design-v2/core/General/Menu/Menu",component:d.a,argTypes:{}};var t=function(){var i=C.map(function(j,m){var f=j.href,r=j.name;return Object(H.jsx)(z.a,{href:f,menu:r},m)});return Object(H.jsx)(d.a,{children:i})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
  const items = menus.map((menu, idx) => {
    const { href, name } = menu;

    return <MenuItem key={idx} href={href} menu={name} />;
  });

  return <Menu>{items}</Menu>;
}`}},t.parameters)},"./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.string.link.js"),E=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/next/link.js"),z=e.n(G),d=e("./node_modules/react/index.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),R=Object(H.a)(function(i){var j=i.colors,m=i.spacing,f=i.typography;return{root:{listStyle:"none"},link:Object.assign({display:"inline-block",width:"100%",padding:m.spacing30},f.body2,{color:j.primary,textDecoration:"none",backgroundColor:j.white})}}),N=e("./node_modules/react/jsx-runtime.js"),V=["className","menu"];function C(i,j){if(i==null)return{};var m=t(i,j),f,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)f=o[r],!(j.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(m[f]=i[f])}return m}function t(i,j){if(i==null)return{};var m={},f=Object.keys(i),r,o;for(o=0;o<f.length;o++)r=f[o],!(j.indexOf(r)>=0)&&(m[r]=i[r]);return m}var n=Object(d.forwardRef)(function(i,j){var m=i.className,f=i.menu,r=C(i,V),o=R(),v=o.classes,y=o.cx;return Object(N.jsx)("li",{className:y(v.root,m),children:Object(N.jsx)(z.a,Object.assign({ref:j,className:v.link},r,{children:f}))})});n.displayName="MenuItem"},"./packages/travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return H});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx"),F=e("./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx"),E=e("./node_modules/react/jsx-runtime.js"),G=e.n(E),z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Menu } from \\"../../Menu/Menu\\";\\nimport { MenuItem } from \\"../MenuItem\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Menu/MenuItem\\",\\n  component: MenuItem,\\n  argTypes: {\\n    href: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"#\\",\\n      description: \\"\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    menu: {\\n      control: { type: \\"text\\", default: \\"\uBA54\uB274 \uC774\uB984\\" },\\n      defaultValue: \\"\uBA54\uB274 \uC774\uB984\\",\\n      description: \\"\uBA54\uB274\uC758 \uC774\uB984\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":32},"endLoc":{"col":1,"line":38},"startBody":{"col":23,"line":32},"endBody":{"col":1,"line":38}}};
    
import { Meta } from "@storybook/react";
import { Menu } from "../../Menu/Menu";
import { MenuItem } from "../MenuItem";

export default {
  title: "@travelmakers-design-v2/core/General/Menu/MenuItem",
  component: MenuItem,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    menu: {
      control: { type: "text", default: "\uBA54\uB274 \uC774\uB984" },
      defaultValue: "\uBA54\uB274 \uC774\uB984",
      description: "\uBA54\uB274\uC758 \uC774\uB984",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <Menu>
      <MenuItem {...props} />
    </Menu>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}},z=`import { Meta } from "@storybook/react";
import { Menu } from "../../Menu/Menu";
import { MenuItem } from "../MenuItem";

export default {
  title: "@travelmakers-design-v2/core/General/Menu/MenuItem",
  component: MenuItem,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    menu: {
      control: { type: "text", default: "\uBA54\uB274 \uC774\uB984" },
      defaultValue: "\uBA54\uB274 \uC774\uB984",
      description: "\uBA54\uB274\uC758 \uC774\uB984",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <Menu>
      <MenuItem {...props} />
    </Menu>
  );
};
`,d={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Menu } from \\"../../Menu/Menu\\";\\nimport { MenuItem } from \\"../MenuItem\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Menu/MenuItem\\",\\n  component: MenuItem,\\n  argTypes: {\\n    href: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"#\\",\\n      description: \\"\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    menu: {\\n      control: { type: \\"text\\", default: \\"\uBA54\uB274 \uC774\uB984\\" },\\n      defaultValue: \\"\uBA54\uB274 \uC774\uB984\\",\\n      description: \\"\uBA54\uB274\uC758 \uC774\uB984\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":32},"endLoc":{"col":1,"line":38},"startBody":{"col":23,"line":32},"endBody":{"col":1,"line":38}}};
    
import { Meta } from "@storybook/react";
import { Menu } from "../../Menu/Menu";
import { MenuItem } from "../MenuItem";

export default {
  title: "@travelmakers-design-v2/core/General/Menu/MenuItem",
  component: MenuItem,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    menu: {
      control: { type: "text", default: "\uBA54\uB274 \uC774\uB984" },
      defaultValue: "\uBA54\uB274 \uC774\uB984",
      description: "\uBA54\uB274\uC758 \uC774\uB984",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <Menu>
      <MenuItem {...props} />
    </Menu>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/Menu/MenuItem",component:F.a,argTypes:{href:{control:{type:"text"},defaultValue:"#",description:"\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C",table:{type:{summary:"string"}}},menu:{control:{type:"text",default:"\uBA54\uB274 \uC774\uB984"},defaultValue:"\uBA54\uB274 \uC774\uB984",description:"\uBA54\uB274\uC758 \uC774\uB984",table:{type:{summary:"string"}}}}};var H=function(N){return Object(E.jsx)(w.a,{children:Object(E.jsx)(F.a,Object.assign({},N))})};H.displayName="Default",H.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <Menu>
      <MenuItem {...props} />
    </Menu>
  );
}`}},H.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return o}),e.d(g,"NavBarWithLink",function(){return v}),e.d(g,"NavBarWithButton",function(){return y});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),d=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx"),R=e("./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),V=Object(N.a)(function(b){return{root:{display:"grid",alignItems:"center",gridTemplateColumns:"repeat(3, 1fr)",minHeight:"48px"},title:{margin:"0 auto",gridColumn:2}}}),C=e("./node_modules/react/jsx-runtime.js"),t=["hasBack","title","className","children"];function n(b,c){if(b==null)return{};var T=i(b,c),k,x;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(b);for(x=0;x<_.length;x++)k=_[x],!(c.indexOf(k)>=0)&&Object.prototype.propertyIsEnumerable.call(b,k)&&(T[k]=b[k])}return T}function i(b,c){if(b==null)return{};var T={},k=Object.keys(b),x,_;for(_=0;_<k.length;_++)x=k[_],!(c.indexOf(x)>=0)&&(T[x]=b[x]);return T}var j=Object(E.forwardRef)(function(b,c){var T=b.hasBack,k=T===void 0?!1:T,x=b.title,_=b.className,D=b.children,W=n(b,t),B=V(),I=B.classes,O=B.cx;return Object(C.jsxs)(d.a,Object.assign({component:"header",ref:c,className:O(I.root,_)},W,{children:[k&&Object(C.jsx)(G.a,{src:"IcArrowLeft",width:24,height:24}),Object(C.jsx)(z.a,{level:"subhead2",color:"primary",className:I.title,strong:!0,children:x}),D]}))});j.displayName="NavBar",j.NavLink=R.a,j.NavButton=H.a;var m=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NavBar } from \\"..\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/NavBar\\",\\n  component: NavBar,\\n  argTypes: {\\n    hasBack: {\\n      type: \\"boolean\\",\\n      defaultValue: \\"false\\",\\n      description: \\"\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n    title: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"NavBar \uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NavBar {...props} />;\\n};\\n\\nexport const NavBarWithLink = (props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavLink href=\\"#\\" label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n};\\n\\nexport const NavBarWithButton = (props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":33}},"NavBarWithLink":{"startLoc":{"col":30,"line":35},"endLoc":{"col":1,"line":41},"startBody":{"col":30,"line":35},"endBody":{"col":1,"line":41}},"NavBarWithButton":{"startLoc":{"col":32,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":32,"line":43},"endBody":{"col":1,"line":49}}};
    
import { Meta } from "@storybook/react";
import { NavBar } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar",
  component: NavBar,
  argTypes: {
    hasBack: {
      type: "boolean",
      defaultValue: "false",
      description: "\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavBar \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavBar {...props} />;
};;

export const NavBarWithLink = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavLink href="#" label="\uB808\uC774\uBE14" />
    </NavBar>
  );
};;

export const NavBarWithButton = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavButton label="\uB808\uC774\uBE14" />
    </NavBar>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavBar {...props} />;\\n}" }, ...Default.parameters };
NavBarWithLink.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavLink href=\\"#\\" label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithLink.parameters };
NavBarWithButton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithButton.parameters };`,f={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}},NavBarWithLink:{startLoc:{col:30,line:43},endLoc:{col:1,line:49},startBody:{col:30,line:43},endBody:{col:1,line:49}},NavBarWithButton:{startLoc:{col:32,line:51},endLoc:{col:1,line:57},startBody:{col:32,line:51},endBody:{col:1,line:57}}},m=`import { Meta } from "@storybook/react";
import { NavBar } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar",
  component: NavBar,
  argTypes: {
    hasBack: {
      type: "boolean",
      defaultValue: "false",
      description: "\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavBar \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavBar {...props} />;
};

export const NavBarWithLink = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavLink href="#" label="\uB808\uC774\uBE14" />
    </NavBar>
  );
};

export const NavBarWithButton = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavButton label="\uB808\uC774\uBE14" />
    </NavBar>
  );
};
`,f={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}},NavBarWithLink:{startLoc:{col:30,line:35},endLoc:{col:1,line:41},startBody:{col:30,line:35},endBody:{col:1,line:41}},NavBarWithButton:{startLoc:{col:32,line:43},endLoc:{col:1,line:49},startBody:{col:32,line:43},endBody:{col:1,line:49}}},r=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NavBar } from \\"..\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/NavBar\\",\\n  component: NavBar,\\n  argTypes: {\\n    hasBack: {\\n      type: \\"boolean\\",\\n      defaultValue: \\"false\\",\\n      description: \\"\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n    title: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"NavBar \uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NavBar {...props} />;\\n};\\n\\nexport const NavBarWithLink = (props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavLink href=\\"#\\" label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n};\\n\\nexport const NavBarWithButton = (props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":33}},"NavBarWithLink":{"startLoc":{"col":30,"line":35},"endLoc":{"col":1,"line":41},"startBody":{"col":30,"line":35},"endBody":{"col":1,"line":41}},"NavBarWithButton":{"startLoc":{"col":32,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":32,"line":43},"endBody":{"col":1,"line":49}}};
    
import { Meta } from "@storybook/react";
import { NavBar } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar",
  component: NavBar,
  argTypes: {
    hasBack: {
      type: "boolean",
      defaultValue: "false",
      description: "\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    title: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavBar \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavBar {...props} />;
};;

export const NavBarWithLink = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavLink href="#" label="\uB808\uC774\uBE14" />
    </NavBar>
  );
};;

export const NavBarWithButton = (props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavButton label="\uB808\uC774\uBE14" />
    </NavBar>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavBar {...props} />;\\n}" }, ...Default.parameters };
NavBarWithLink.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavLink href=\\"#\\" label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithLink.parameters };
NavBarWithButton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithButton.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}},"nav-bar-with-link":{startLoc:{col:30,line:43},endLoc:{col:1,line:49},startBody:{col:30,line:43},endBody:{col:1,line:49}},"nav-bar-with-button":{startLoc:{col:32,line:51},endLoc:{col:1,line:57},startBody:{col:32,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design-v2/core/General/NavBar",component:j,argTypes:{hasBack:{type:"boolean",defaultValue:"false",description:"\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34",table:{type:{summary:"boolean"}}},title:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavBar \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}}}},o=function(c){return Object(C.jsx)(j,Object.assign({},c))};o.displayName="Default";var v=function(c){return Object(C.jsx)(j,Object.assign({},c,{children:Object(C.jsx)(j.NavLink,{href:"#",label:"\uB808\uC774\uBE14"})}))};v.displayName="NavBarWithLink";var y=function(c){return Object(C.jsx)(j,Object.assign({},c,{children:Object(C.jsx)(j.NavButton,{label:"\uB808\uC774\uBE14"})}))};y.displayName="NavBarWithButton",o.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavBar {...props} />;
}`}},o.parameters),v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavLink href="#" label="\uB808\uC774\uBE14" />
    </NavBar>
  );
}`}},v.parameters),y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavButton label="\uB808\uC774\uBE14" />
    </NavBar>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return C});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=Object(z.a)(function(t){var n,i=t.colors,j=t.shadows,m=t.typography;return{root:Object.assign({},m.body3,(n={marginLeft:"auto",padding:0,color:i.primary,backgroundColor:"transparent",border:0,outline:0,cursor:"pointer"},n[":not(:disabled)"]={"&:hover":{filter:"drop-shadow("+j.elevation1+")"},"&:focus-visible":{color:i.primaryInteract,filter:"drop-shadow("+j.elevation1+")"},"&:active":{color:i.primaryInteract,filter:j.none}},n["&:disabled"]={color:i.primary4,cursor:"auto"},n))}}),H=e("./node_modules/react/jsx-runtime.js"),R=["label","isDisable","className"];function N(t,n){if(t==null)return{};var i=V(t,n),j,m;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);for(m=0;m<f.length;m++)j=f[m],!(n.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(t,j)&&(i[j]=t[j])}return i}function V(t,n){if(t==null)return{};var i={},j=Object.keys(t),m,f;for(f=0;f<j.length;f++)m=j[f],!(n.indexOf(m)>=0)&&(i[m]=t[m]);return i}var C=Object(E.forwardRef)(function(t,n){var i=t.label,j=t.isDisable,m=j===void 0?!1:j,f=t.className,r=N(t,R),o=d(),v=o.classes,y=o.cx;return Object(H.jsx)(G.a,Object.assign({component:"button",ref:n,className:y(v.root,f),disabled:m},r,{children:i}))});C.displayName="NavButton"},"./packages/travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NavButton } from \\"../NavButton\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/NavBar/NavButton\\",\\n  component: NavButton,\\n  argTypes: {\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"NavButton \uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    isDisable: {\\n      type: \\"boolean\\",\\n      defaultValue: \\"false\\",\\n      description: \\"NavButton disabled\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NavButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":33}}};
    
import { Meta } from "@storybook/react";
import { NavButton } from "../NavButton";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavButton",
  component: NavButton,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavButton \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavButton disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavButton {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavButton {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}},G=`import { Meta } from "@storybook/react";
import { NavButton } from "../NavButton";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavButton",
  component: NavButton,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavButton \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavButton disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavButton {...props} />;
};
`,z={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NavButton } from \\"../NavButton\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/NavBar/NavButton\\",\\n  component: NavButton,\\n  argTypes: {\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"NavButton \uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    isDisable: {\\n      type: \\"boolean\\",\\n      defaultValue: \\"false\\",\\n      description: \\"NavButton disabled\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NavButton {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":33}}};
    
import { Meta } from "@storybook/react";
import { NavButton } from "../NavButton";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavButton",
  component: NavButton,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavButton \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavButton disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavButton {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/core/General/NavBar/NavButton",component:w.a,argTypes:{label:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavButton \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}},isDisable:{type:"boolean",defaultValue:"false",description:"NavButton disabled",table:{type:{summary:"boolean"}}}}};var d=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavButton {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/next/link.js"),G=e.n(E),z=e("./node_modules/react/index.js"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=function(j,m){var f=j.colors,r=j.shadows;return m?{color:f.primary4,cursor:"auto"}:{"&:hover":{filter:"drop-shadow("+r.elevation1+")"},"&:focus-visible":{color:f.primaryInteract,filter:"drop-shadow("+r.elevation1+")"},"&:active":{color:f.primaryInteract,filter:r.none}}},R=Object(d.a)(function(i,j){var m=j.isDisable,f=i.colors,r=i.typography;return{root:Object.assign({},r.body3,{marginLeft:"auto",color:f.primary,textDecoration:"none"},H(i,m))}}),N=e("./node_modules/react/jsx-runtime.js"),V=["label","isDisable","className"];function C(i,j){if(i==null)return{};var m=t(i,j),f,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)f=o[r],!(j.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(m[f]=i[f])}return m}function t(i,j){if(i==null)return{};var m={},f=Object.keys(i),r,o;for(o=0;o<f.length;o++)r=f[o],!(j.indexOf(r)>=0)&&(m[r]=i[r]);return m}var n=Object(z.forwardRef)(function(i,j){var m=i.label,f=i.isDisable,r=f===void 0?!1:f,o=i.className,v=C(i,V),y=R({isDisable:r}),b=y.classes,c=y.cx,T=function(x){if(r)return x.preventDefault();v.onClick&&v.onClick()};return Object(N.jsx)(G.a,Object.assign({ref:j,className:c(b.root,o),onClick:T,tabindex:r?-1:0,"aria-disabled":r},v,{children:m}))});n.displayName="NavLink"},"./packages/travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NavLink } from \\"../NavLink\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/NavBar/NavLink\\",\\n  component: NavLink,\\n  argTypes: {\\n    href: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"#\\",\\n      description: \\"NavLink href\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"NavLink \uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    isDisable: {\\n      type: \\"boolean\\",\\n      defaultValue: \\"false\\",\\n      description: \\"NavLink disabled\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NavLink {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":41},"endLoc":{"col":1,"line":43},"startBody":{"col":23,"line":41},"endBody":{"col":1,"line":43}}};
    
import { Meta } from "@storybook/react";
import { NavLink } from "../NavLink";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavLink",
  component: NavLink,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "NavLink href",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavLink \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavLink disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavLink {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavLink {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:51},startBody:{col:23,line:49},endBody:{col:1,line:51}}},G=`import { Meta } from "@storybook/react";
import { NavLink } from "../NavLink";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavLink",
  component: NavLink,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "NavLink href",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavLink \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavLink disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavLink {...props} />;
};
`,z={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { NavLink } from \\"../NavLink\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/NavBar/NavLink\\",\\n  component: NavLink,\\n  argTypes: {\\n    href: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"#\\",\\n      description: \\"NavLink href\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uB808\uC774\uBE14\\",\\n      description: \\"NavLink \uD0C0\uC774\uD2C0\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    isDisable: {\\n      type: \\"boolean\\",\\n      defaultValue: \\"false\\",\\n      description: \\"NavLink disabled\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <NavLink {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":41},"endLoc":{"col":1,"line":43},"startBody":{"col":23,"line":41},"endBody":{"col":1,"line":43}}};
    
import { Meta } from "@storybook/react";
import { NavLink } from "../NavLink";

export default {
  title: "@travelmakers-design-v2/core/General/NavBar/NavLink",
  component: NavLink,
  argTypes: {
    href: {
      control: { type: "text" },
      defaultValue: "#",
      description: "NavLink href",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "\uB808\uC774\uBE14",
      description: "NavLink \uD0C0\uC774\uD2C0",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    isDisable: {
      type: "boolean",
      defaultValue: "false",
      description: "NavLink disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <NavLink {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavLink {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:49},endLoc:{col:1,line:51},startBody:{col:23,line:49},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/core/General/NavBar/NavLink",component:w.a,argTypes:{href:{control:{type:"text"},defaultValue:"#",description:"NavLink href",table:{type:{summary:"string"}}},label:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavLink \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}},isDisable:{type:"boolean",defaultValue:"false",description:"NavLink disabled",table:{type:{summary:"boolean"}}}}};var d=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavLink {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Price/Price.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return t});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(n,i){var j=i.type;return{root:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},percentText:Object.assign({},n.typography.display6,{fontWeight:"700",width:"39px",color:n.colors.error}),nightText:Object.assign({},n.typography.body3,{fontWeight:"700",textAlign:"right",width:"28px",color:n.colors.primary1}),priceText:Object.assign({},n.typography.display4,{fontWeight:"700",color:n.colors.primary1,marginLeft:n.spacing.spacing5}),priceBeforeText:Object.assign({},n.typography.body2,{fontWeight:"700",color:n.colors.primary1}),priceStartText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2,marginLeft:n.spacing.spacing5}),labelSecondary:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary1,marginRight:n.spacing.spacing5}),nightSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"700",color:n.colors.primary1,textAlign:"right",marginRight:n.spacing.spacing5}),priceSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2}),priceBeforeSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2}),couponWrap:{display:"flex",alignItems:"center",width:"74px",background:n.colors.secondaryContainer,borderRadius:n.spacing.spacing5,marginLeft:n.spacing.spacing5},couponWord:Object.assign({},n.typography.caption,{fontWeight:"700",color:n.colors.secondary1})}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","label","percentText","nightText","priceText","priceStartText","isCoupon","className"];function V(n,i){if(n==null)return{};var j=C(n,i),m,f;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(f=0;f<r.length;f++)m=r[f],!(i.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(n,m)&&(j[m]=n[m])}return j}function C(n,i){if(n==null)return{};var j={},m=Object.keys(n),f,r;for(r=0;r<m.length;r++)f=m[r],!(i.indexOf(f)>=0)&&(j[f]=n[f]);return j}var t=Object(E.forwardRef)(function(n,i){var j=n.type,m=j===void 0?"primary":j,f=n.label,r=n.percentText,o=n.nightText,v=n.priceText,y=n.priceStartText,b=n.isCoupon,c=b===void 0?!0:b,T=n.className,k=V(n,N),x=H({type:m}),_=x.classes,D=x.cx,W=function(){return Object(R.jsxs)(z.a,Object.assign({component:"div",ref:i,className:D(_.root,T)},k,{children:[r&&Object(R.jsxs)("span",{className:D(_.percentText),children:[r,"%"]}),o&&Object(R.jsxs)("span",{className:D(_.nightText),children:[o,"\uBC15"]}),v&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{className:D(_.priceText),children:v.toLocaleString("ko")}),Object(R.jsx)("span",{className:D(_.priceBeforeText),children:"\uC6D0~"})]}),y&&Object(R.jsxs)("span",{className:D(_.priceStartText),children:["| ",y]})]}))},B=function(){return Object(R.jsxs)(z.a,Object.assign({component:"div",ref:i,className:D(_.root,T)},k,{children:[f&&Object(R.jsx)("span",{className:D(_.labelSecondary),children:f}),o&&Object(R.jsxs)("span",{className:D(_.nightSecondaryText),children:[o,"\uBC15"]}),v&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{className:D(_.priceSecondaryText),children:v==null?void 0:v.toLocaleString("ko")}),Object(R.jsx)("span",{className:D(_.priceBeforeSecondaryText),children:"\uC6D0"})]}),c&&Object(R.jsxs)("div",{className:D(_.couponWrap),children:[Object(R.jsx)(G.a,{src:"IcDiscount",width:16,height:16,style:{margin:"0 4px"}}),Object(R.jsx)("span",{className:D(_.couponWord),children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]})]}))};return m==="primary"?Object(R.jsx)(W,{}):Object(R.jsx)(B,{})});t.displayName="Price"},"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),G=e("./node_modules/react/jsx-runtime.js"),z=e.n(G),d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Price } from \\"../Price\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Price\\",\\n  component: Price,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\\",\\n      description: \\"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: 70,\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    nightText: {\\n      defaultValue: 1,\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    priceText: {\\n      defaultValue: 10000,\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    priceStartText: {\\n      defaultValue: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    isCoupon: {\\n      defaultValue: true,\\n      description:\\n        \\" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Price {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":78},"endLoc":{"col":1,"line":80},"startBody":{"col":23,"line":78},"endBody":{"col":1,"line":80}}};
    
import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers-design-v2/core/General/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: 70,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    nightText: {
      defaultValue: 1,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceText: {
      defaultValue: 10000,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1\uBC15 100,000\uC6D0\uBD80\uD130",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isCoupon: {
      defaultValue: true,
      description:
        " (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <Price {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Price {...props} />;\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}},d=`import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers-design-v2/core/General/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: 70,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    nightText: {
      defaultValue: 1,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceText: {
      defaultValue: 10000,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1\uBC15 100,000\uC6D0\uBD80\uD130",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isCoupon: {
      defaultValue: true,
      description:
        " (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <Price {...props} />;
};
`,H={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:80},startBody:{col:23,line:78},endBody:{col:1,line:80}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Price } from \\"../Price\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Price\\",\\n  component: Price,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\\",\\n      description: \\"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: 70,\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    nightText: {\\n      defaultValue: 1,\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    priceText: {\\n      defaultValue: 10000,\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    priceStartText: {\\n      defaultValue: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    isCoupon: {\\n      defaultValue: true,\\n      description:\\n        \\" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return <Price {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":78},"endLoc":{"col":1,"line":80},"startBody":{"col":23,"line":78},"endBody":{"col":1,"line":80}}};
    
import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers-design-v2/core/General/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: 70,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    nightText: {
      defaultValue: 1,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceText: {
      defaultValue: 10000,
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1\uBC15 100,000\uC6D0\uBD80\uD130",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isCoupon: {
      defaultValue: true,
      description:
        " (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <Price {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <Price {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}}}},title:"@travelmakers-design-v2/core/General/Price",component:E.a,argTypes:{type:{defaultValue:"primary",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],control:{type:"inline-radio"}},label:{defaultValue:"",description:"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:70,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},nightText:{defaultValue:1,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceText:{defaultValue:1e4,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceStartText:{defaultValue:"1\uBC15 100,000\uC6D0\uBD80\uD130",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isCoupon:{defaultValue:!0,description:" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var R=function(V){return Object(G.jsx)(E.a,Object.assign({},V))};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return <Price {...props} />;
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return W});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),R=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N;function V(B,I){return I||(I=B.slice(0)),B.raw=I,B}var C=Object(H.c)(N||(N=V([`
from {
  opacity: 1;
}
70% {
  opacity: 0;
}`]))),t=function(I){var O=1.5;return{opacity:0,animation:C+" "+O+"s infinite",animationDelay:O/(3/I)+"s"}},n=function(I,O){var l=I.colors;return O?Object.assign({},t(1),{stroke:l.primary3}):{stroke:l.primary3}},i=Object(R.a)(function(B,I){var O=I.isProcessing,l=B.spacing,u=B.colors;return{root:{marginLeft:O&&l.spacing5},first:n(B,O),second:Object.assign({},t(2),{stroke:u.primary70}),third:Object.assign({},t(3),{stroke:u.primary80})}}),j=e("./node_modules/react/jsx-runtime.js"),m=function(I){var O=I.isProcessing,l=i({isProcessing:O}),u=l.classes,a=function(){return O?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("path",{className:u.first,d:"M1.84326 5L4.67169 7.82843L1.84326 10.6569"}),Object(j.jsx)("path",{className:u.second,d:"M6.5 5L9.32843 7.82843L6.5 10.6569"}),Object(j.jsx)("path",{className:u.third,d:"M11.1567 5L13.9852 7.82843L11.1567 10.6569"})]}):Object(j.jsx)("path",{className:u.first,d:"M7 5L9.82843 7.82843L7 10.6569"})};return Object(j.jsx)("svg",{className:u.root,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a()})};m.displayName="ProcessIcon";var f=Object(R.a)(function(B,I){var O,l=I.isProcessing,u=B.colors,a=B.typography;return{root:{display:"flex",alignItems:"center"},process:Object.assign({},a.body3,(O={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"0 11px",color:l?u.white:u.primary3,textAlign:"center",backgroundColor:l?u.secondary00:u.transparent,borderRadius:"22px"},O["&.process-line-height"]={lineHeight:"14px"},O)),processor:{fontWeight:700}}}),r=function(I){var O=I.item,l=I.hasIcon,u=O.processor,a=O.process,p=O.isProcessing,s=f({isProcessing:p}),h=s.classes,P=s.cx;return Object(j.jsxs)("li",{className:h.root,children:[Object(j.jsxs)("div",{className:P(h.process,{"process-line-height":u}),children:[u&&Object(j.jsx)("span",{className:h.processor,children:u}),a]}),l&&Object(j.jsx)(m,{isProcessing:p})]})};r.displayName="ProcessItem";var o=Object(R.a)(function(B){var I=B.spacing,O=B.colors;return{root:{display:"inline-flex",minWidth:"328px",minHeight:"52px",margin:0,padding:I.spacing5,backgroundColor:O.primary99,borderRadius:"26px"}}}),v=["status","className"];function y(B,I){if(B==null)return{};var O=b(B,I),l,u;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(B);for(u=0;u<a.length;u++)l=a[u],!(I.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(B,l)&&(O[l]=B[l])}return O}function b(B,I){if(B==null)return{};var O={},l=Object.keys(B),u,a;for(a=0;a<l.length;a++)u=l[a],!(I.indexOf(u)>=0)&&(O[u]=B[u]);return O}var c=function(I){switch(I){case"extend_purchase_before":case"reservation_purchase_before":return"before";case"extend_purchase_done":case"reservation_purchase_done":return"done"}},T=function(I){return[{process:"\uACB0\uC81C \uB300\uAE30",isProcessing:c(I)==="before"},{process:"\uACB0\uC81C \uC644\uB8CC",isProcessing:!1},{processor:"\uD638\uD154\uC5D0\uC0B6",process:"\uC608\uC57D \uC804\uB2EC",isProcessing:c(I)==="done"},{processor:"\uD638\uD154",process:"\uC608\uC57D \uD655\uC815",isProcessing:!1}]},k=Object(G.forwardRef)(function(B,I){var O=B.status,l=B.className,u=y(B,v),a=o(),p=a.classes,s=a.cx,h=T(O),P=h.map(function(M,A){return Object(j.jsx)(r,{item:M,hasIcon:A+1!==h.length},A)});return Object(j.jsx)(z.a,Object.assign({component:"ol",ref:I,className:s(p.root,l)},u,{children:P}))});k.displayName="Process";var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Process } from \\"../Process\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Process\\",\\n  component: Process,\\n  argTypes: {\\n    status: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\n          \\"reservation_purchase_before\\",\\n          \\"extend_purchase_before\\",\\n          \\"reservation_purchase_done\\",\\n          \\"extend_purchase_done\\",\\n        ],\\n      },\\n      defaultValue: \\"reservation_purchase_before\\",\\n      description: \\"\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":29},"endLoc":{"col":1,"line":41},"startBody":{"col":23,"line":29},"endBody":{"col":1,"line":41}}};
    
import { Meta } from "@storybook/react";
import { Process } from "../Process";

export default {
  title: "@travelmakers-design-v2/core/General/Process",
  component: Process,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: [
          "reservation_purchase_before",
          "extend_purchase_before",
          "reservation_purchase_done",
          "extend_purchase_done",
        ],
      },
      defaultValue: "reservation_purchase_before",
      description: "\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "gray",
        padding: "20px 10px",
      }}
    >
      <Process status={"reservation_purchase_before"} {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:49},startBody:{col:23,line:37},endBody:{col:1,line:49}}},x=`import { Meta } from "@storybook/react";
import { Process } from "../Process";

export default {
  title: "@travelmakers-design-v2/core/General/Process",
  component: Process,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: [
          "reservation_purchase_before",
          "extend_purchase_before",
          "reservation_purchase_done",
          "extend_purchase_done",
        ],
      },
      defaultValue: "reservation_purchase_before",
      description: "\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "gray",
        padding: "20px 10px",
      }}
    >
      <Process status={"reservation_purchase_before"} {...props} />
    </div>
  );
};
`,_={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:41},startBody:{col:23,line:29},endBody:{col:1,line:41}}},D=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Process } from \\"../Process\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Process\\",\\n  component: Process,\\n  argTypes: {\\n    status: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\n          \\"reservation_purchase_before\\",\\n          \\"extend_purchase_before\\",\\n          \\"reservation_purchase_done\\",\\n          \\"extend_purchase_done\\",\\n        ],\\n      },\\n      defaultValue: \\"reservation_purchase_before\\",\\n      description: \\"\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":29},"endLoc":{"col":1,"line":41},"startBody":{"col":23,"line":29},"endBody":{"col":1,"line":41}}};
    
import { Meta } from "@storybook/react";
import { Process } from "../Process";

export default {
  title: "@travelmakers-design-v2/core/General/Process",
  component: Process,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: [
          "reservation_purchase_before",
          "extend_purchase_before",
          "reservation_purchase_done",
          "extend_purchase_done",
        ],
      },
      defaultValue: "reservation_purchase_before",
      description: "\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "gray",
        padding: "20px 10px",
      }}
    >
      <Process status={"reservation_purchase_before"} {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:49},startBody:{col:23,line:37},endBody:{col:1,line:49}}}}},title:"@travelmakers-design-v2/core/General/Process",component:k,argTypes:{status:{control:{type:"radio",options:["reservation_purchase_before","extend_purchase_before","reservation_purchase_done","extend_purchase_done"]},defaultValue:"reservation_purchase_before",description:"\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669",table:{type:{summary:"string"}}}}},W=function(I){return Object(j.jsx)("div",{style:{display:"inline-block",backgroundColor:"gray",padding:"20px 10px"},children:Object(j.jsx)(k,Object.assign({status:"reservation_purchase_before"},I))})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "gray",
        padding: "20px 10px",
      }}
    >
      <Process status={"reservation_purchase_before"} {...props} />
    </div>
  );
}`}},W.parameters)},"./packages/travelmakers-design-core/src/components/Search/stories/Search.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return u});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),d=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),i=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),j=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),m=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),f=function(p,s){if(s==="fill")return p.surface;if(s==="line")return p.white},r=function(p,s,h){return s==="fill"&&!h?p.surface:h?p.primary:p.outline},o=Object(m.a)(function(a,p){var s,h=p.type,P=p.isFocus,M=a.typography,A=a.colors,S=a.spacing,L=a.radius;return{form:{display:"flex",alignItems:"center",columnGap:S.spacing10,minWidth:"328px",height:"48px",padding:"0 "+S.spacing30+" 0 "+S.spacing50,borderRadius:L.radius100,border:"1px solid "+r(A,h,P),overflow:"hidden",backgroundColor:f(A,h)},disabled:{borderColor:A.outline},input:Object.assign({},M.body2,(s={padding:0,color:A.primary2,border:0,outline:0,flexGrow:1,backgroundColor:"transparent"},s["&:focus"]={color:A.primary1},s["&::placeholder"]={color:A.primary3},s["&:disabled::placeholder"]={color:A.primary4},s["&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration"]={display:"none"},s["&::-moz-search-clear-button, &::-moz-search-back-button"]={display:"none"},s["&::-ms-clear,&::-ms-back"]={display:"none"},s)),reset:{display:"flex",padding:0,backgroundColor:"transparent",border:0,outline:0,cursor:"pointer"}}}),v=e("./node_modules/react/jsx-runtime.js"),y=["type","value","placeholder","autoComplete","onClick","onChange","onBlur","formSubmit","formReset","className"];function b(a,p){return _(a)||x(a,p)||T(a,p)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(a,p){if(a){if(typeof a=="string")return k(a,p);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(a,p)}}function k(a,p){(p==null||p>a.length)&&(p=a.length);for(var s=0,h=new Array(p);s<p;s++)h[s]=a[s];return h}function x(a,p){var s=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var h,P,M,A,S=[],L=!0,U=!1;try{if(M=(s=s.call(a)).next,p===0){if(Object(s)!==s)return;L=!1}else for(;!(L=(h=M.call(s)).done)&&(S.push(h.value),S.length!==p);L=!0);}catch(Y){U=!0,P=Y}finally{try{if(!L&&s.return!=null&&(A=s.return(),Object(A)!==A))return}finally{if(U)throw P}}return S}}function _(a){if(Array.isArray(a))return a}function D(a,p){if(a==null)return{};var s=W(a,p),h,P;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(a);for(P=0;P<M.length;P++)h=M[P],!(p.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(a,h)&&(s[h]=a[h])}return s}function W(a,p){if(a==null)return{};var s={},h=Object.keys(a),P,M;for(M=0;M<h.length;M++)P=h[M],!(p.indexOf(P)>=0)&&(s[P]=a[P]);return s}var B=Object(n.forwardRef)(function(a,p){var s,h=a.type,P=h===void 0?"fill":h,M=a.value,A=a.placeholder,S=A===void 0?"\uD638\uD154\uBA85, \uC9C0\uC5ED\uBA85\uC744 \uAC80\uC0C9\uD574\uC8FC\uC138\uC694.":A,L=a.autoComplete,U=a.onClick,Y=a.onChange,re=a.onBlur,ce=a.formSubmit,q=a.formReset,ie=a.className,te=D(a,y),de=Object(n.useRef)(null),ue=Object(n.useState)(M!=null?M:""),fe=b(ue,2),ve=fe[0],be=fe[1],ge=ve,xe=Object(n.useState)(!1),Ce=b(xe,2),De=Ce[0],Te=Ce[1],Be=!te.disabled&&ge,Oe=o({type:P,isFocus:De}),Ne=Oe.classes,Me=Oe.cx,ke=function(_e){_e.preventDefault(),de.current.reset(),ce==null||ce(_e)},Ve=function(_e){be(""),q==null||q(_e)},Ae=function(_e){Te(!0),U==null||U(_e)},we=function(_e){Te(!1),re==null||re(_e)},He=function(_e){be(_e.target.value),Y==null||Y(_e)};return Object(v.jsxs)("form",{ref:de,className:Me(Ne.form,(s={},s[Ne.disabled]=te.disabled,s),ie),onSubmit:ke,onReset:Ve,children:[Object(v.jsx)(i.a,{src:"IcSearch",width:20,height:20}),Object(v.jsx)(j.a,Object.assign({component:"input",type:"search",ref:p,className:Me(Ne.input),placeholder:S,onClick:Ae,onBlur:we,onChange:He,value:ve,autoComplete:L!=null?L:"off","aria-readonly":te.disabled},te)),Be&&Object(v.jsx)("button",{type:"reset",className:Ne.reset,"aria-label":"\uAC80\uC0C9 \uCD08\uAE30\uD654",children:Object(v.jsx)(i.a,{src:"IcClose",width:16,height:16})})]})});B.displayName="Search";var I=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Search } from \\"../Search\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Search\\",\\n  component: Search,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"fill\\", \\"line\\"],\\n      },\\n      defaultValue: \\"fill\\",\\n      description: \\"search \uD0C0\uC785\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    disabled: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"search Disabled \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ maxWidth: \\"328px\\" }}>\\n      <Search {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":36},"endLoc":{"col":1,"line":42},"startBody":{"col":23,"line":36},"endBody":{"col":1,"line":42}}};
    
import { Meta } from "@storybook/react";
import { Search } from "../Search";

export default {
  title: "@travelmakers-design-v2/core/General/Search",
  component: Search,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
      },
      defaultValue: "fill",
      description: "search \uD0C0\uC785",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "search Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ maxWidth: "328px" }}>
      <Search {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ maxWidth: \\"328px\\" }}>\\n      <Search {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:44},endLoc:{col:1,line:50},startBody:{col:23,line:44},endBody:{col:1,line:50}}},I=`import { Meta } from "@storybook/react";
import { Search } from "../Search";

export default {
  title: "@travelmakers-design-v2/core/General/Search",
  component: Search,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
      },
      defaultValue: "fill",
      description: "search \uD0C0\uC785",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "search Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ maxWidth: "328px" }}>
      <Search {...props} />
    </div>
  );
};
`,O={Default:{startLoc:{col:23,line:36},endLoc:{col:1,line:42},startBody:{col:23,line:36},endBody:{col:1,line:42}}},l=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Search } from \\"../Search\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Search\\",\\n  component: Search,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"fill\\", \\"line\\"],\\n      },\\n      defaultValue: \\"fill\\",\\n      description: \\"search \uD0C0\uC785\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    disabled: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"search Disabled \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ maxWidth: \\"328px\\" }}>\\n      <Search {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":36},"endLoc":{"col":1,"line":42},"startBody":{"col":23,"line":36},"endBody":{"col":1,"line":42}}};
    
import { Meta } from "@storybook/react";
import { Search } from "../Search";

export default {
  title: "@travelmakers-design-v2/core/General/Search",
  component: Search,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
      },
      defaultValue: "fill",
      description: "search \uD0C0\uC785",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "search Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ maxWidth: "328px" }}>
      <Search {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ maxWidth: \\"328px\\" }}>\\n      <Search {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:44},endLoc:{col:1,line:50},startBody:{col:23,line:44},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/core/General/Search",component:B,argTypes:{type:{control:{type:"radio",options:["fill","line"]},defaultValue:"fill",description:"search \uD0C0\uC785",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},defaultValue:!1,description:"search Disabled \uC5EC\uBD80",table:{type:{summary:"boolean"}}}}},u=function(p){return Object(v.jsx)("div",{style:{maxWidth:"328px"},children:Object(v.jsx)(B,Object.assign({},p))})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ maxWidth: "328px" }}>
      <Search {...props} />
    </div>
  );
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=function(j,m){var f=j.colors;switch(m){case"fill":return{backgroundColor:f.secondaryContainer,border:"1px solid "+f.secondaryContainer};case"line":return{backgroundColor:f.white,border:"1px solid "+f.secondary};default:return{}}},R=Object(d.a)(function(i,j){var m=j.type,f=i.colors,r=i.spacing,o=i.typography,v=i.radius;return{root:Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"space-between",gap:r.spacing5,color:f.secondary1,padding:"2px "+r.spacing5},o.caption,{fontWeight:700},H(i,m),{borderRadius:v.radius10})}}),N=e("./node_modules/react/jsx-runtime.js"),V=["type","component","label","className"];function C(i,j){if(i==null)return{};var m=t(i,j),f,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)f=o[r],!(j.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(m[f]=i[f])}return m}function t(i,j){if(i==null)return{};var m={},f=Object.keys(i),r,o;for(o=0;o<f.length;o++)r=f[o],!(j.indexOf(r)>=0)&&(m[r]=i[r]);return m}var n=Object(E.forwardRef)(function(i,j){var m=i.type,f=i.component,r=i.label,o=r===void 0?"\uCFE0\uD3F0 \uC801\uC6A9\uAC00":r,v=i.className,y=C(i,V),b=R({type:m}),c=b.classes,T=b.cx;return Object(N.jsxs)(z.a,Object.assign({component:f||"div",ref:j,className:T(c.root,v)},y,{children:[Object(N.jsx)(G.a,{src:"IcDiscount",width:16,height:16}),o]}))});n.displayName="IconTag"},"./packages/travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { IconTag } from \\"../IconTag\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Tag/IconTag\\",\\n  component: IconTag,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"fill\\", \\"line\\"] },\\n      defaultValue: \\"fill\\",\\n      description: \\"\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uCFE0\uD3F0 \uC801\uC6A9\uAC00\\",\\n      description: \\"\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":33}}};
    
import { Meta } from "@storybook/react";
import { IconTag } from "../IconTag";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/IconTag",
  component: IconTag,
  argTypes: {
    type: {
      control: { type: "radio", options: ["fill", "line"] },
      defaultValue: "fill",
      description: "\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "\uCFE0\uD3F0 \uC801\uC6A9\uAC00",
      description: "\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <IconTag type={"fill"} {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}},G=`import { Meta } from "@storybook/react";
import { IconTag } from "../IconTag";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/IconTag",
  component: IconTag,
  argTypes: {
    type: {
      control: { type: "radio", options: ["fill", "line"] },
      defaultValue: "fill",
      description: "\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "\uCFE0\uD3F0 \uC801\uC6A9\uAC00",
      description: "\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <IconTag type={"fill"} {...props} />;
};
`,z={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { IconTag } from \\"../IconTag\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Tag/IconTag\\",\\n  component: IconTag,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"fill\\", \\"line\\"] },\\n      defaultValue: \\"fill\\",\\n      description: \\"\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uCFE0\uD3F0 \uC801\uC6A9\uAC00\\",\\n      description: \\"\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":31},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":31},"endBody":{"col":1,"line":33}}};
    
import { Meta } from "@storybook/react";
import { IconTag } from "../IconTag";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/IconTag",
  component: IconTag,
  argTypes: {
    type: {
      control: { type: "radio", options: ["fill", "line"] },
      defaultValue: "fill",
      description: "\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "\uCFE0\uD3F0 \uC801\uC6A9\uAC00",
      description: "\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <IconTag type={"fill"} {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/core/General/Tag/IconTag",component:w.a,argTypes:{type:{control:{type:"radio",options:["fill","line"]},defaultValue:"fill",description:"\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},label:{control:{type:"text"},defaultValue:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",description:"\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var d=function(R){return Object(F.jsx)(w.a,Object.assign({type:"fill"},R))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <IconTag type={"fill"} {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx":function(oe,g,e){"use strict";e.d(g,"b",function(){return t}),e.d(g,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=Object(d.a)(function(i,j){var m=j.gap;return{root:{display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:m+"px",margin:0,padding:0}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","color","size","gap","roundness","className","children"];function V(i,j){if(i==null)return{};var m=C(i,j),f,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)f=o[r],!(j.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(m[f]=i[f])}return m}function C(i,j){if(i==null)return{};var m={},f=Object.keys(i),r,o;for(o=0;o<f.length;o++)r=f[o],!(j.indexOf(r)>=0)&&(m[r]=i[r]);return m}var t=Object(E.createContext)({type:"fill",size:"small",roundness:"default"});t.displayName="TagContext";var n=Object(E.forwardRef)(function(i,j){var m=i.type,f=i.color,r=i.size,o=r===void 0?"small":r,v=i.gap,y=v===void 0?0:v,b=i.roundness,c=b===void 0?"default":b,T=i.className,k=i.children,x=V(i,N);Object(E.useEffect)(function(){k||console.error("1\uAC1C \uC774\uC0C1\uC758 <Tag.Item /> \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC874\uC7AC\uD574\uC57C \uD569\uB2C8\uB2E4.")},[]);var _=H({gap:y}),D=_.classes,W=_.cx;return Object(R.jsx)(t.Provider,{value:{type:m,color:f,size:o,roundness:c},children:Object(R.jsx)(G.a,Object.assign({component:"ul",ref:j,className:W(D.root,T)},x,{children:k}))})});n.displayName="Tag",n.Item=z.a},"./packages/travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return N}),e.d(g,"TagUsingIdx",function(){return V});var K=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.object.assign.js"),F=e.n(w),E=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),G=e("./node_modules/react/jsx-runtime.js"),z=e.n(G),d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Tag } from \\"../Tag\\";\\n\\nconst data = [\\"\uB808\uC774\uBE141\\", \\"\uB808\uC774\uBE142\\", \\"\uB808\uC774\uBE143\\", \\"\uB808\uC774\uBE144\\"];\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Tag/Tag\\",\\n  component: Tag,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"fill\\", \\"line\\"],\\n        default: \\"fill\\",\\n      },\\n      description: \\"TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    color: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"green\\", \\"blue\\", \\"purple\\", \\"gray\\"],\\n        default: \\"green\\",\\n      },\\n      description:\\n        \\"TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    size: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\", \\"large\\"],\\n        default: \\"small\\",\\n      },\\n      description: \\"TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: { type: \\"number\\" },\\n    roundness: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"default\\", \\"half\\", \\"full\\"],\\n        default: \\"default\\",\\n      },\\n      description: \\"TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);\\n\\n  return (\\n    <Tag type=\\"fill\\" color=\\"green\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n};\\n\\nexport const TagUsingIdx = (props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":67},"endLoc":{"col":1,"line":75},"startBody":{"col":23,"line":67},"endBody":{"col":1,"line":75}},"TagUsingIdx":{"startLoc":{"col":27,"line":77},"endLoc":{"col":1,"line":87},"startBody":{"col":27,"line":77},"endBody":{"col":1,"line":87}}};
    
import { Meta } from "@storybook/react";
import { Tag } from "../Tag";

const data = ["\uB808\uC774\uBE141", "\uB808\uC774\uBE142", "\uB808\uC774\uBE143", "\uB808\uC774\uBE144"];

export default {
  title: "@travelmakers-design-v2/core/General/Tag/Tag",
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
        default: "fill",
      },
      description: "TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "radio",
        options: ["green", "blue", "purple", "gray"],
        default: "green",
      },
      description:
        "TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
        default: "small",
      },
      description: "TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: { type: "number" },
    roundness: {
      control: {
        type: "radio",
        options: ["default", "half", "full"],
        default: "default",
      },
      description: "TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);

  return (
    <Tag type="fill" color="green" {...props}>
      {items}
    </Tag>
  );
};;

export const TagUsingIdx = (props) => {
  const items = data.map((item, idx) => (
    <Tag.Item key={idx} colorIdx={idx} label={item} />
  ));

  return (
    <Tag type="fill" {...props}>
      {items}
    </Tag>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);\\n\\n  return (\\n    <Tag type=\\"fill\\" color=\\"green\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...Default.parameters };
TagUsingIdx.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...TagUsingIdx.parameters };`,H={Default:{startLoc:{col:23,line:75},endLoc:{col:1,line:83},startBody:{col:23,line:75},endBody:{col:1,line:83}},TagUsingIdx:{startLoc:{col:27,line:85},endLoc:{col:1,line:95},startBody:{col:27,line:85},endBody:{col:1,line:95}}},d=`import { Meta } from "@storybook/react";
import { Tag } from "../Tag";

const data = ["\uB808\uC774\uBE141", "\uB808\uC774\uBE142", "\uB808\uC774\uBE143", "\uB808\uC774\uBE144"];

export default {
  title: "@travelmakers-design-v2/core/General/Tag/Tag",
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
        default: "fill",
      },
      description: "TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "radio",
        options: ["green", "blue", "purple", "gray"],
        default: "green",
      },
      description:
        "TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
        default: "small",
      },
      description: "TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: { type: "number" },
    roundness: {
      control: {
        type: "radio",
        options: ["default", "half", "full"],
        default: "default",
      },
      description: "TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);

  return (
    <Tag type="fill" color="green" {...props}>
      {items}
    </Tag>
  );
};

export const TagUsingIdx = (props) => {
  const items = data.map((item, idx) => (
    <Tag.Item key={idx} colorIdx={idx} label={item} />
  ));

  return (
    <Tag type="fill" {...props}>
      {items}
    </Tag>
  );
};
`,H={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:75},startBody:{col:23,line:67},endBody:{col:1,line:75}},TagUsingIdx:{startLoc:{col:27,line:77},endLoc:{col:1,line:87},startBody:{col:27,line:77},endBody:{col:1,line:87}}},R=["\uB808\uC774\uBE141","\uB808\uC774\uBE142","\uB808\uC774\uBE143","\uB808\uC774\uBE144"];g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Tag } from \\"../Tag\\";\\n\\nconst data = [\\"\uB808\uC774\uBE141\\", \\"\uB808\uC774\uBE142\\", \\"\uB808\uC774\uBE143\\", \\"\uB808\uC774\uBE144\\"];\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Tag/Tag\\",\\n  component: Tag,\\n  argTypes: {\\n    type: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"fill\\", \\"line\\"],\\n        default: \\"fill\\",\\n      },\\n      description: \\"TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    color: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"green\\", \\"blue\\", \\"purple\\", \\"gray\\"],\\n        default: \\"green\\",\\n      },\\n      description:\\n        \\"TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    size: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"small\\", \\"medium\\", \\"large\\"],\\n        default: \\"small\\",\\n      },\\n      description: \\"TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    gap: { type: \\"number\\" },\\n    roundness: {\\n      control: {\\n        type: \\"radio\\",\\n        options: [\\"default\\", \\"half\\", \\"full\\"],\\n        default: \\"default\\",\\n      },\\n      description: \\"TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);\\n\\n  return (\\n    <Tag type=\\"fill\\" color=\\"green\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n};\\n\\nexport const TagUsingIdx = (props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":67},"endLoc":{"col":1,"line":75},"startBody":{"col":23,"line":67},"endBody":{"col":1,"line":75}},"TagUsingIdx":{"startLoc":{"col":27,"line":77},"endLoc":{"col":1,"line":87},"startBody":{"col":27,"line":77},"endBody":{"col":1,"line":87}}};
    
import { Meta } from "@storybook/react";
import { Tag } from "../Tag";

const data = ["\uB808\uC774\uBE141", "\uB808\uC774\uBE142", "\uB808\uC774\uBE143", "\uB808\uC774\uBE144"];

export default {
  title: "@travelmakers-design-v2/core/General/Tag/Tag",
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
        default: "fill",
      },
      description: "TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "radio",
        options: ["green", "blue", "purple", "gray"],
        default: "green",
      },
      description:
        "TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
        default: "small",
      },
      description: "TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: { type: "number" },
    roundness: {
      control: {
        type: "radio",
        options: ["default", "half", "full"],
        default: "default",
      },
      description: "TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);

  return (
    <Tag type="fill" color="green" {...props}>
      {items}
    </Tag>
  );
};;

export const TagUsingIdx = (props) => {
  const items = data.map((item, idx) => (
    <Tag.Item key={idx} colorIdx={idx} label={item} />
  ));

  return (
    <Tag type="fill" {...props}>
      {items}
    </Tag>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);\\n\\n  return (\\n    <Tag type=\\"fill\\" color=\\"green\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...Default.parameters };
TagUsingIdx.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...TagUsingIdx.parameters };`,locationsMap:{default:{startLoc:{col:23,line:75},endLoc:{col:1,line:83},startBody:{col:23,line:75},endBody:{col:1,line:83}},"tag-using-idx":{startLoc:{col:27,line:85},endLoc:{col:1,line:95},startBody:{col:27,line:85},endBody:{col:1,line:95}}}}},title:"@travelmakers-design-v2/core/General/Tag/Tag",component:E.a,argTypes:{type:{control:{type:"radio",options:["fill","line"],default:"fill"},description:"TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},color:{control:{type:"radio",options:["green","blue","purple","gray"],default:"green"},description:"TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","medium","large"],default:"small"},description:"TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},gap:{type:"number"},roundness:{control:{type:"radio",options:["default","half","full"],default:"default"},description:"TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var N=function(t){var n=R.map(function(i,j){return Object(G.jsx)(E.a.Item,{label:i},j)});return Object(G.jsx)(E.a,Object.assign({type:"fill",color:"green"},t,{children:n}))};N.displayName="Default";var V=function(t){var n=R.map(function(i,j){return Object(G.jsx)(E.a.Item,{colorIdx:j,label:i},j)});return Object(G.jsx)(E.a,Object.assign({type:"fill"},t,{children:n}))};V.displayName="TagUsingIdx",N.parameters=Object.assign({storySource:{source:`(props) => {
  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);

  return (
    <Tag type="fill" color="green" {...props}>
      {items}
    </Tag>
  );
}`}},N.parameters),V.parameters=Object.assign({storySource:{source:`(props) => {
  const items = data.map((item, idx) => (
    <Tag.Item key={idx} colorIdx={idx} label={item} />
  ));

  return (
    <Tag type="fill" {...props}>
      {items}
    </Tag>
  );
}`}},V.parameters)},"./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return j});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H={default:"",half:"radius20",full:"radius100"},R=function(f,r){var o=f.typography,v=f.spacing;switch(r){case"small":return Object.assign({height:"20px"},o.caption,{padding:"2px "+v.spacing10});case"medium":return Object.assign({height:"24px"},o.body3,{padding:"2px "+v.spacing20});case"large":return Object.assign({height:"28px"},o.body2,{padding:"3px "+v.spacing30});default:return}},N=function(f,r,o){var v=f.colors,y={color:"",backgroundColor:v.white,border:0},b={green:{fill:{color:v.onSecondary,backgroundColor:v.secondary},line:{color:v.secondary,border:"1px solid "+v.secondary}},blue:{fill:{color:v.onTertiary,backgroundColor:v.tertiary},line:{color:v.tertiary,border:"1px solid "+v.tertiary}},purple:{fill:{color:v.white,backgroundColor:v.purple1},line:{color:v.purple1,border:"1px solid "+v.purple1}},gray:{fill:{color:v.onPrimaryContainer,backgroundColor:v.surface},line:{color:v.primary3,border:"1px solid "+v.surfaceVariant,backgroundColor:"transparent"}}};if(r==="fill"||r==="line"){var c;y.color=b[o][r].color,y.backgroundColor=(c=b[o][r].backgroundColor)!==null&&c!==void 0?c:y.backgroundColor,y.border=r==="line"?b[o].line.border:y.border}return y},V=Object(d.a)(function(m,f){var r,o=f.type,v=f.color,y=f.size,b=f.roundness;return{item:Object.assign({listStyle:"none"},N(m,o,v),R(m,y),{borderRadius:(r=m.radius[H[b]])!==null&&r!==void 0?r:0})}}),C=e("./node_modules/react/jsx-runtime.js"),t=["colorIdx","label","className"];function n(m,f){if(m==null)return{};var r=i(m,f),o,v;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(m);for(v=0;v<y.length;v++)o=y[v],!(f.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(m,o)&&(r[o]=m[o])}return r}function i(m,f){if(m==null)return{};var r={},o=Object.keys(m),v,y;for(y=0;y<o.length;y++)v=o[y],!(f.indexOf(v)>=0)&&(r[v]=m[v]);return r}var j=Object(E.forwardRef)(function(m,f){var r=m.colorIdx,o=r===void 0?0:r,v=m.label,y=m.className,b=n(m,t),c=function(l){var u=["green","blue","purple"];return u[l%u.length]},T=Object(E.useContext)(z.b),k=T.type,x=T.color,_=T.size,D=T.roundness,W=V({type:k,color:x||c(o),size:_,roundness:D}),B=W.classes,I=W.cx;return Object(C.jsx)(G.a,Object.assign({component:"li",ref:f,className:I(B.item,y)},b,{children:v}))});j.displayName="TagItem"},"./packages/travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { TagItem } from \\"..\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Tag/TagItem\\",\\n  component: TagItem,\\n  argTypes: {\\n    colorIdx: {\\n      control: { type: \\"radio\\", options: [0, 1, 2] },\\n      defaultValue: 0,\\n      description:\\n        \\"TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"label\\",\\n      description: \\"props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":32},"endLoc":{"col":1,"line":38},"startBody":{"col":23,"line":32},"endBody":{"col":1,"line":38}}};
    
import { Meta } from "@storybook/react";
import { TagItem } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/TagItem",
  component: TagItem,
  argTypes: {
    colorIdx: {
      control: { type: "radio", options: [0, 1, 2] },
      defaultValue: 0,
      description:
        "TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "label",
      description: "props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <TagItem {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}},G=`import { Meta } from "@storybook/react";
import { TagItem } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/TagItem",
  component: TagItem,
  argTypes: {
    colorIdx: {
      control: { type: "radio", options: [0, 1, 2] },
      defaultValue: 0,
      description:
        "TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "label",
      description: "props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <TagItem {...props} />
    </div>
  );
};
`,z={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { TagItem } from \\"..\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Tag/TagItem\\",\\n  component: TagItem,\\n  argTypes: {\\n    colorIdx: {\\n      control: { type: \\"radio\\", options: [0, 1, 2] },\\n      defaultValue: 0,\\n      description:\\n        \\"TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n    },\\n    label: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"label\\",\\n      description: \\"props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":32},"endLoc":{"col":1,"line":38},"startBody":{"col":23,"line":32},"endBody":{"col":1,"line":38}}};
    
import { Meta } from "@storybook/react";
import { TagItem } from "..";

export default {
  title: "@travelmakers-design-v2/core/General/Tag/TagItem",
  component: TagItem,
  argTypes: {
    colorIdx: {
      control: { type: "radio", options: [0, 1, 2] },
      defaultValue: 0,
      description:
        "TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    label: {
      control: { type: "text" },
      defaultValue: "label",
      description: "props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <TagItem {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/Tag/TagItem",component:w.a,argTypes:{colorIdx:{control:{type:"radio",options:[0,1,2]},defaultValue:0,description:"TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.",table:{type:{summary:"number"}}},label:{control:{type:"text"},defaultValue:"label",description:"props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var d=function(R){return Object(F.jsx)("div",{style:{display:"inline-block"},children:Object(F.jsx)(w.a,Object.assign({},R))})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <TagItem {...props} />
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/TextArea/stories/TextArea.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return O});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),d=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),i=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),j=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),m=Object(j.a)(function(l,u){var a,p,s=u.isFilled,h=l.spacing,P=l.typography,M=l.colors,A=l.radius;return{root:{display:"inline-flex",flexDirection:"column",rowGap:h.spacing5},label:Object.assign({},P.body2,{color:M.primary}),textArea:Object.assign({},P.body2,(p={minWidth:"328px",minHeight:"76px",padding:h.spacing10+" "+h.spacing30,color:M.primary2,border:"1px solid "+(s?M.primary3:M.outline),borderRadius:A.radius20,outline:0,resize:"none"},p["&::placeholder"]={color:M.primary3},p["&:focus"]={color:M.primary1,borderColor:M.primary},p["&:disabled"]=(a={color:M.primary3,borderColor:M.outline,backgroundColor:M.surface},a["&::placeholder"]={color:M.primary4},a),p)),feedback:Object.assign({},P.body3,{color:M.primary3,fontWeight:400})}}),f=e("./node_modules/react/jsx-runtime.js"),r=["label","feedback","value","placeholder","autoComplete","onChange","className"];function o(l,u){return T(l)||c(l,u)||y(l,u)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(l,u){if(l){if(typeof l=="string")return b(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(l,u)}}function b(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,p=new Array(u);a<u;a++)p[a]=l[a];return p}function c(l,u){var a=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var p,s,h,P,M=[],A=!0,S=!1;try{if(h=(a=a.call(l)).next,u===0){if(Object(a)!==a)return;A=!1}else for(;!(A=(p=h.call(a)).done)&&(M.push(p.value),M.length!==u);A=!0);}catch(L){S=!0,s=L}finally{try{if(!A&&a.return!=null&&(P=a.return(),Object(P)!==P))return}finally{if(S)throw s}}return M}}function T(l){if(Array.isArray(l))return l}function k(l,u){if(l==null)return{};var a=x(l,u),p,s;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(s=0;s<h.length;s++)p=h[s],!(u.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(l,p)&&(a[p]=l[p])}return a}function x(l,u){if(l==null)return{};var a={},p=Object.keys(l),s,h;for(h=0;h<p.length;h++)s=p[h],!(u.indexOf(s)>=0)&&(a[s]=l[s]);return a}var _=0,D=Object(n.forwardRef)(function(l,u){var a=l.label,p=l.feedback,s=l.value,h=l.placeholder,P=h===void 0?"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.":h,M=l.autoComplete,A=l.onChange,S=l.className,L=k(l,r),U=Object(n.useState)(s!=null?s:""),Y=o(U,2),re=Y[0],ce=Y[1],q=re,ie=m({isFilled:q}),te=ie.classes,de=ie.cx,ue=Object(n.useState)(function(){return String(_++)}),fe=o(ue,1),ve=fe[0],be="tm-textarea-"+ve,ge=function(Ce){ce(Ce.target.value),A==null||A(Ce)};return Object(f.jsxs)("div",{className:de(te.root,S),children:[a&&Object(f.jsx)("label",{className:te.label,htmlFor:be,children:a}),Object(f.jsx)(i.a,Object.assign({component:"textarea",ref:u,className:te.textArea,value:re,placeholder:P,autoComplete:M||"off",onChange:ge,"aria-readonly":L.disabled},L)),p&&Object(f.jsx)("strong",{className:te.feedback,children:p})]})});D.displayName="TextArea";var W=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { TextArea } from \\"../TextArea\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/TextArea\\",\\n  component: TextArea,\\n  argTypes: {\\n    label: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"textarea \uB77C\uBCA8\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    feedback: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"textarea \uCD94\uAC00 \uC124\uBA85\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    disabled: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"textarea Disabled \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <TextArea {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":45},"endLoc":{"col":1,"line":47},"startBody":{"col":23,"line":45},"endBody":{"col":1,"line":47}}};
    
import { Meta } from "@storybook/react";
import { TextArea } from "../TextArea";

export default {
  title: "@travelmakers-design-v2/core/General/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "textarea \uB77C\uBCA8",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "textarea \uCD94\uAC00 \uC124\uBA85",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "textarea Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <TextArea {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextArea {...props} />;\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:55},startBody:{col:23,line:53},endBody:{col:1,line:55}}},W=`import { Meta } from "@storybook/react";
import { TextArea } from "../TextArea";

export default {
  title: "@travelmakers-design-v2/core/General/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "textarea \uB77C\uBCA8",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "textarea \uCD94\uAC00 \uC124\uBA85",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "textarea Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <TextArea {...props} />;
};
`,B={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}},I=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { TextArea } from \\"../TextArea\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/TextArea\\",\\n  component: TextArea,\\n  argTypes: {\\n    label: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"textarea \uB77C\uBCA8\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    feedback: {\\n      control: {\\n        type: \\"text\\",\\n      },\\n      description: \\"textarea \uCD94\uAC00 \uC124\uBA85\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    disabled: {\\n      control: {\\n        type: \\"boolean\\",\\n      },\\n      defaultValue: false,\\n      description: \\"textarea Disabled \uC5EC\uBD80\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return <TextArea {...props} />;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":45},"endLoc":{"col":1,"line":47},"startBody":{"col":23,"line":45},"endBody":{"col":1,"line":47}}};
    
import { Meta } from "@storybook/react";
import { TextArea } from "../TextArea";

export default {
  title: "@travelmakers-design-v2/core/General/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "textarea \uB77C\uBCA8",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    feedback: {
      control: {
        type: "text",
      },
      description: "textarea \uCD94\uAC00 \uC124\uBA85",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "textarea Disabled \uC5EC\uBD80",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <TextArea {...props} />;
};



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextArea {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:53},endLoc:{col:1,line:55},startBody:{col:23,line:53},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/core/General/TextArea",component:D,argTypes:{label:{control:{type:"text"},description:"textarea \uB77C\uBCA8",table:{type:{summary:"string"}}},feedback:{control:{type:"text"},description:"textarea \uCD94\uAC00 \uC124\uBA85",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},defaultValue:!1,description:"textarea Disabled \uC5EC\uBD80",table:{type:{summary:"boolean"}}}}},O=function(u){return Object(f.jsx)(D,Object.assign({},u))};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextArea {...props} />;
}`}},O.parameters)},"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),E=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts"),z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),d=e("./node_modules/react/index.js"),H=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),R=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),V={small:"body3",large:"body2"},C={small:"body3",large:"subhead2"},t=Object(N.a)(function(T,k){var x=k.type,_=k.size,D=T.colors,W=T.typography,B=T.spacing;return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",color:D[r[x]]},title:{display:"flex",alignItems:"center"},icon:{marginRight:B.spacing5},text:Object.assign({},W[V[_]],{fontWeight:400}),time:Object.assign({},W[C[_]],{fontWeight:700})}}),n=e("./node_modules/react/jsx-runtime.js"),i=["type","size","text","time","dateTime","className"];function j(T,k){if(T==null)return{};var x=m(T,k),_,D;if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(T);for(D=0;D<W.length;D++)_=W[D],!(k.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(T,_)&&(x[_]=T[_])}return x}function m(T,k){if(T==null)return{};var x={},_=Object.keys(T),D,W;for(W=0;W<_.length;W++)D=_[W],!(k.indexOf(D)>=0)&&(x[D]=T[D]);return x}var f={small:12,large:16},r={navy:"primary1",white:"white"},o=Object(d.forwardRef)(function(T,k){var x=T.type,_=T.size,D=_===void 0?"small":_,W=T.text,B=T.time,I=T.dateTime,O=T.className,l=j(T,i),u=Object(z.c)(),a=u.colors,p=t({type:x,size:D}),s=p.classes,h=p.cx,P=Object(G.a)(B),M=P.remainingTime;return Object(n.jsxs)(R.a,Object.assign({component:"div",ref:k,className:h(s.root,O)},l,{children:[Object(n.jsxs)("div",{className:s.title,children:[Object(n.jsx)(H.a,{src:"IcClock",className:s.icon,width:f[D],height:f[D],color:a[r[x]]}),Object(n.jsx)("strong",{className:s.text,children:W})]}),Object(n.jsx)("time",{className:s.time,dateTime:I,children:M})]}))});o.displayName="Timer";var v=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { getDayjs } from \\"@travelmakers-design-v2/utils\\";\\nimport { Timer } from \\"../Timer\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Timer\\",\\n  component: Timer,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"navy\\", \\"white\\"], default: \\"navy\\" },\\n      description: \\"Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    size: {\\n      control: { type: \\"radio\\", options: [\\"small\\", \\"large\\"], default: \\"small\\" },\\n      defaultValue: \\"small\\",\\n      description: \\"Timer\uC758 \uC0AC\uC774\uC988\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    text: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529\\",\\n      description: \\"\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    time: {\\n      control: { type: \\"text\\" },\\n      description:\\n        \\"\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)\\",\\n      table: {\\n        type: {\\n          summary: \\"dayjs.ConfigType\\",\\n        },\\n      },\\n    },\\n    // https://developer.mozilla.org/ko/docs/Web/HTML/Element/time\\n    dateTime: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"2011-11-18\\",\\n      description: \\"\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":62},"endLoc":{"col":1,"line":78},"startBody":{"col":23,"line":62},"endBody":{"col":1,"line":78}}};
    
import { Meta } from "@storybook/react";
import { getDayjs } from "@travelmakers-design-v2/utils";
import { Timer } from "../Timer";

export default {
  title: "@travelmakers-design-v2/core/General/Timer",
  component: Timer,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"], default: "navy" },
      description: "Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: { type: "radio", options: ["small", "large"], default: "small" },
      defaultValue: "small",
      description: "Timer\uC758 \uC0AC\uC774\uC988",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    text: {
      control: { type: "text" },
      defaultValue: "\uD0C0\uC784\uC138\uC77C \uC6CC\uB529",
      description: "\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    time: {
      control: { type: "text" },
      description:
        "\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)",
      table: {
        type: {
          summary: "dayjs.ConfigType",
        },
      },
    },
    // https://developer.mozilla.org/ko/docs/Web/HTML/Element/time
    dateTime: {
      control: { type: "text" },
      defaultValue: "2011-11-18",
      description: "\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const { time, type, size, text, dateTime } = props;
  const dayjs = getDayjs();
  const now = dayjs();

  return (
    <div style={{ backgroundColor: props.type === "white" && "gray" }}>
      <Timer
        time={time || now}
        type={type}
        size={size}
        text={text}
        dateTime={dateTime}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:70},endLoc:{col:1,line:86},startBody:{col:23,line:70},endBody:{col:1,line:86}}},v=`import { Meta } from "@storybook/react";
import { getDayjs } from "@travelmakers-design-v2/utils";
import { Timer } from "../Timer";

export default {
  title: "@travelmakers-design-v2/core/General/Timer",
  component: Timer,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"], default: "navy" },
      description: "Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: { type: "radio", options: ["small", "large"], default: "small" },
      defaultValue: "small",
      description: "Timer\uC758 \uC0AC\uC774\uC988",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    text: {
      control: { type: "text" },
      defaultValue: "\uD0C0\uC784\uC138\uC77C \uC6CC\uB529",
      description: "\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    time: {
      control: { type: "text" },
      description:
        "\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)",
      table: {
        type: {
          summary: "dayjs.ConfigType",
        },
      },
    },
    // https://developer.mozilla.org/ko/docs/Web/HTML/Element/time
    dateTime: {
      control: { type: "text" },
      defaultValue: "2011-11-18",
      description: "\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const { time, type, size, text, dateTime } = props;
  const dayjs = getDayjs();
  const now = dayjs();

  return (
    <div style={{ backgroundColor: props.type === "white" && "gray" }}>
      <Timer
        time={time || now}
        type={type}
        size={size}
        text={text}
        dateTime={dateTime}
      />
    </div>
  );
};
`,y={Default:{startLoc:{col:23,line:62},endLoc:{col:1,line:78},startBody:{col:23,line:62},endBody:{col:1,line:78}}},b=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { getDayjs } from \\"@travelmakers-design-v2/utils\\";\\nimport { Timer } from \\"../Timer\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/Timer\\",\\n  component: Timer,\\n  argTypes: {\\n    type: {\\n      control: { type: \\"radio\\", options: [\\"navy\\", \\"white\\"], default: \\"navy\\" },\\n      description: \\"Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    size: {\\n      control: { type: \\"radio\\", options: [\\"small\\", \\"large\\"], default: \\"small\\" },\\n      defaultValue: \\"small\\",\\n      description: \\"Timer\uC758 \uC0AC\uC774\uC988\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    text: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529\\",\\n      description: \\"\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n    time: {\\n      control: { type: \\"text\\" },\\n      description:\\n        \\"\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)\\",\\n      table: {\\n        type: {\\n          summary: \\"dayjs.ConfigType\\",\\n        },\\n      },\\n    },\\n    // https://developer.mozilla.org/ko/docs/Web/HTML/Element/time\\n    dateTime: {\\n      control: { type: \\"text\\" },\\n      defaultValue: \\"2011-11-18\\",\\n      description: \\"\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":62},"endLoc":{"col":1,"line":78},"startBody":{"col":23,"line":62},"endBody":{"col":1,"line":78}}};
    
import { Meta } from "@storybook/react";
import { getDayjs } from "@travelmakers-design-v2/utils";
import { Timer } from "../Timer";

export default {
  title: "@travelmakers-design-v2/core/General/Timer",
  component: Timer,
  argTypes: {
    type: {
      control: { type: "radio", options: ["navy", "white"], default: "navy" },
      description: "Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      control: { type: "radio", options: ["small", "large"], default: "small" },
      defaultValue: "small",
      description: "Timer\uC758 \uC0AC\uC774\uC988",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    text: {
      control: { type: "text" },
      defaultValue: "\uD0C0\uC784\uC138\uC77C \uC6CC\uB529",
      description: "\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    time: {
      control: { type: "text" },
      description:
        "\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)",
      table: {
        type: {
          summary: "dayjs.ConfigType",
        },
      },
    },
    // https://developer.mozilla.org/ko/docs/Web/HTML/Element/time
    dateTime: {
      control: { type: "text" },
      defaultValue: "2011-11-18",
      description: "\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const { time, type, size, text, dateTime } = props;
  const dayjs = getDayjs();
  const now = dayjs();

  return (
    <div style={{ backgroundColor: props.type === "white" && "gray" }}>
      <Timer
        time={time || now}
        type={type}
        size={size}
        text={text}
        dateTime={dateTime}
      />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:70},endLoc:{col:1,line:86},startBody:{col:23,line:70},endBody:{col:1,line:86}}}}},title:"@travelmakers-design-v2/core/General/Timer",component:o,argTypes:{type:{control:{type:"radio",options:["navy","white"],default:"navy"},description:"Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","large"],default:"small"},defaultValue:"small",description:"Timer\uC758 \uC0AC\uC774\uC988",table:{type:{summary:"string"}}},text:{control:{type:"text"},defaultValue:"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529",description:"\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529",table:{type:{summary:"string"}}},time:{control:{type:"text"},description:"\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)",table:{type:{summary:"dayjs.ConfigType"}}},dateTime:{control:{type:"text"},defaultValue:"2011-11-18",description:"\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},c=function(k){var x=k.time,_=k.type,D=k.size,W=k.text,B=k.dateTime,I=Object($.d)(),O=I();return Object(n.jsx)("div",{style:{backgroundColor:k.type==="white"&&"gray"},children:Object(n.jsx)(o,{time:x||O,type:_,size:D,text:W,dateTime:B})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  const { time, type, size, text, dateTime } = props;
  const dayjs = getDayjs();
  const now = dayjs();

  return (
    <div style={{ backgroundColor: props.type === "white" && "gray" }}>
      <Timer
        time={time || now}
        type={type}
        size={size}
        text={text}
        dateTime={dateTime}
      />
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.string.italics.js"),E=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=function(j){return j!=="Pretendard"?{font:{fontFamily:j+", var("+(j==="Noto Serif KR"&&"--font-noto-serif")+")"}}:{font:{}}},R=Object(d.a)(function(i,j){var m,f=j.family,r=j.level,o=j.textAlign,v=j.disabled,y=j.strong,b=j.italic,c=j.underline,T=j.color,k=j.mobile,x=j.tablet,_=function(){return T?{color:v?i.colors.primary4:T?i.colors[T]:i.colors.black}:{}};return{solid:{fontWeight:y?700:400,fontStyle:b?"italic":"normal",textDecoration:c?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},H(f).font,i.typography[r],_(),(m={textAlign:""+o},m[""+i.media.mobile]=Object.assign({},i.typography[k]),m[""+i.media.tablet]=Object.assign({},i.typography[x]),m))}}),N=e("./node_modules/react/jsx-runtime.js"),V=["id","children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function C(i,j){if(i==null)return{};var m=t(i,j),f,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)f=o[r],!(j.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(i,f)&&(m[f]=i[f])}return m}function t(i,j){if(i==null)return{};var m={},f=Object.keys(i),r,o;for(o=0;o<f.length;o++)r=f[o],!(j.indexOf(r)>=0)&&(m[r]=i[r]);return m}var n=Object(G.forwardRef)(function(i,j){var m=i.id,f=i.children,r=i.component,o=i.family,v=o===void 0?"Pretendard":o,y=i.level,b=y===void 0?"body1":y,c=i.mobileLevel,T=i.tabletLevel,k=i.textAlign,x=k===void 0?"left":k,_=i.disabled,D=_===void 0?!1:_,W=i.strong,B=W===void 0?!1:W,I=i.italic,O=I===void 0?!1:I,l=i.underline,u=l===void 0?!1:l,a=i.color,p=i.className,s=i.co,h=i.overrideStyles,P=C(i,V),M=R({family:v,level:b,disabled:D,strong:B,italic:O,underline:u,textAlign:x,color:a,mobile:c,tablet:T},{overrideStyles:h,name:"typography"}),A=M.classes,S=M.cx;return Object(N.jsx)(z.a,Object.assign({component:r||"span",ref:j,disabled:D,className:S(A.root,A.solid,p),co:s,onTouchStart:function(){}},P,{children:f}))});n.displayName="Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return H});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),F=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),E=e("./node_modules/react/jsx-runtime.js"),G=e.n(E),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}},z=`import {
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
`,d={Default:{startLoc:{col:23,line:169},endLoc:{col:1,line:210},startBody:{col:23,line:169},endBody:{col:1,line:210}}};g.default={title:"@travelmakers-design-v2/core/General/Typography",component:F.a,argTypes:{level:{defaultValue:"body1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w.g,{}),Object(E.jsx)(w.f,{}),Object(E.jsx)(w.b,{}),Object(E.jsx)(w.d,{}),Object(E.jsx)(w.a,{story:w.c}),Object(E.jsx)(w.e,{})]})}}}};var H=function(N){return Object(E.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(E.jsx)(F.a,Object.assign({},N,{level:"display1",children:"display1. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display2",children:"display2. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display3",children:"display3. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display4",children:"display4. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display5",children:"display5. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display6",children:"display6. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"subhead1",children:"subhead1. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"subhead2",children:"subhead2. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"body1",children:"body1. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"body2",children:"body2. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"body3",children:"body3. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"caption",children:"caption. Travelmakers Design"}))]})};H.displayName="Default",H.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},H.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,g,e){"use strict";e.d(g,"a",function(){return i});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),d=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./node_modules/react/index.js");function R(j,m){return typeof j=="function"?j(m):j}var N=e("./node_modules/react/jsx-runtime.js"),V=["component","className","style","co"];function C(j,m){if(j==null)return{};var f=t(j,m),r,o;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(j);for(o=0;o<v.length;o++)r=v[o],!(m.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(j,r)&&(f[r]=j[r])}return f}function t(j,m){if(j==null)return{};var f={},r=Object.keys(j),o,v;for(v=0;v<r.length;v++)o=r[v],!(m.indexOf(o)>=0)&&(f[o]=j[o]);return f}function n(j,m){var f=Object(z.a)(),r=f.css,o=f.cx,v=Object(d.c)();return Array.isArray(j)?o(m,j.map(function(y){return r(R(y,v))})):o(m,r(R(j,v)))}var i=Object(H.forwardRef)(function(j,m){var f=j.component,r=j.className,o=j.style,v=j.co,y=C(j,V),b=f||"div";return Object(N.jsx)(b,Object.assign({ref:m,className:n(v,r),style:o},y))});i.displayName="View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),G=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n};\\n";
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
        backgroundColor: theme.colors.black,
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},G=`import { View } from "../View";

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
        backgroundColor: theme.colors.black,
      })}
    />
  );
};
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { View } from \\"../View\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/core/General/View\\",\\n  component: View,\\n};\\n\\nexport const Default = () => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n};\\n";
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
        backgroundColor: theme.colors.black,
      })}
    />
  );
};



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design-v2/core/General/View",component:w.a};var d=function(){return Object(F.jsx)(w.a,{co:function(N){return{width:100,height:100,backgroundColor:N.colors.black}}})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.black,
      })}
    />
  );
}`}},d.parameters)},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return E});var K=e("./node_modules/core-js/modules/es.array.concat.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=function(z){var d=Object(w.useRef)(z);return Object(w.useEffect)(function(){d.current=z},[z]),Object(w.useMemo)(function(){return function(){for(var H,R=arguments.length,N=new Array(R),V=0;V<R;V++)N[V]=arguments[V];return(H=d.current)===null||H===void 0?void 0:H.call.apply(H,[d].concat(N))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return B});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),t=e("./node_modules/core-js/modules/web.timers.js");function n(I,O){return r(I)||f(I,O)||j(I,O)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(I,O){if(I){if(typeof I=="string")return m(I,O);var l=Object.prototype.toString.call(I).slice(8,-1);if(l==="Object"&&I.constructor&&(l=I.constructor.name),l==="Map"||l==="Set")return Array.from(I);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return m(I,O)}}function m(I,O){(O==null||O>I.length)&&(O=I.length);for(var l=0,u=new Array(O);l<O;l++)u[l]=I[l];return u}function f(I,O){var l=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(l!=null){var u,a,p,s,h=[],P=!0,M=!1;try{if(p=(l=l.call(I)).next,O===0){if(Object(l)!==l)return;P=!1}else for(;!(P=(u=p.call(l)).done)&&(h.push(u.value),h.length!==O);P=!0);}catch(A){M=!0,a=A}finally{try{if(!P&&l.return!=null&&(s=l.return(),Object(s)!==s))return}finally{if(M)throw a}}return h}}function r(I){if(Array.isArray(I))return I}var o=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=O.timeout,u=l===void 0?2e3:l,a=Object(C.useState)(null),p=n(a,2),s=p[0],h=p[1],P=Object(C.useState)(!1),M=n(P,2),A=M[0],S=M[1],L=Object(C.useState)(null),U=n(L,2),Y=U[0],re=U[1],ce=function(de){clearTimeout(Y),re(setTimeout(function(){return S(!1)},u)),S(de)},q=function(de){"clipboard"in navigator?navigator.clipboard.writeText(de).then(function(){return ce(!0)}).catch(function(ue){return h(ue)}):h(new Error("useClipboard: navigator.clipboard is not supported"))},ie=function(){S(!1),h(null),clearTimeout(Y)};return{copy:q,reset:ie,error:s,copied:A}},v=e("./node_modules/react/jsx-runtime.js");function y(I,O){return x(I)||k(I,O)||c(I,O)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(I,O){if(I){if(typeof I=="string")return T(I,O);var l=Object.prototype.toString.call(I).slice(8,-1);if(l==="Object"&&I.constructor&&(l=I.constructor.name),l==="Map"||l==="Set")return Array.from(I);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return T(I,O)}}function T(I,O){(O==null||O>I.length)&&(O=I.length);for(var l=0,u=new Array(O);l<O;l++)u[l]=I[l];return u}function k(I,O){var l=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(l!=null){var u,a,p,s,h=[],P=!0,M=!1;try{if(p=(l=l.call(I)).next,O===0){if(Object(l)!==l)return;P=!1}else for(;!(P=(u=p.call(l)).done)&&(h.push(u.value),h.length!==O);P=!0);}catch(A){M=!0,a=A}finally{try{if(!P&&l.return!=null&&(s=l.return(),Object(s)!==s))return}finally{if(M)throw a}}return h}}function x(I){if(Array.isArray(I))return I}var _=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},_=`import React, { useState } from "react";

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
`,D={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},W=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design-v2/hooks/useClipboard"},B=function(){var O=Object(C.useState)(""),l=y(O,2),u=l[0],a=l[1],p=o({timeout:3e3}),s=p.copy,h=p.copied;return Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"text",onChange:function(M){return a(M.target.value)}}),Object(v.jsx)("button",{onClick:function(){return s(u)},children:"copy"}),Object(v.jsx)("span",{children:h&&"Copied!!"})]})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return I});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),t=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),n=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function i(O,l){return o(O)||r(O,l)||m(O,l)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(O,l){if(O){if(typeof O=="string")return f(O,l);var u=Object.prototype.toString.call(O).slice(8,-1);if(u==="Object"&&O.constructor&&(u=O.constructor.name),u==="Map"||u==="Set")return Array.from(O);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return f(O,l)}}function f(O,l){(l==null||l>O.length)&&(l=O.length);for(var u=0,a=new Array(l);u<l;u++)a[u]=O[u];return a}function r(O,l){var u=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(u!=null){var a,p,s,h,P=[],M=!0,A=!1;try{if(s=(u=u.call(O)).next,l===0){if(Object(u)!==u)return;M=!1}else for(;!(M=(a=s.call(u)).done)&&(P.push(a.value),P.length!==l);M=!0);}catch(S){A=!0,p=S}finally{try{if(!M&&u.return!=null&&(h=u.return(),Object(h)!==h))return}finally{if(A)throw p}}return P}}function o(O){if(Array.isArray(O))return O}var v=function(l,u,a){var p=Object(n.a)(l,u),s=i(p,2),h=s[0],P=s[1];return Object(t.a)(h,a),P},y=e("./node_modules/react/jsx-runtime.js");function b(O,l){return _(O)||x(O,l)||T(O,l)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(O,l){if(O){if(typeof O=="string")return k(O,l);var u=Object.prototype.toString.call(O).slice(8,-1);if(u==="Object"&&O.constructor&&(u=O.constructor.name),u==="Map"||u==="Set")return Array.from(O);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return k(O,l)}}function k(O,l){(l==null||l>O.length)&&(l=O.length);for(var u=0,a=new Array(l);u<l;u++)a[u]=O[u];return a}function x(O,l){var u=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(u!=null){var a,p,s,h,P=[],M=!0,A=!1;try{if(s=(u=u.call(O)).next,l===0){if(Object(u)!==u)return;M=!1}else for(;!(M=(a=s.call(u)).done)&&(P.push(a.value),P.length!==l);M=!0);}catch(S){A=!0,p=S}finally{try{if(!M&&u.return!=null&&(h=u.return(),Object(h)!==h))return}finally{if(A)throw p}}return P}}function _(O){if(Array.isArray(O))return O}var D=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},D=`import React, { useState } from "react";

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
`,W={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},B=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useDebounce"},I=function(){var l=Object(C.useState)(""),u=b(l,2),a=u[0],p=u[1],s=v(function(){alert("Updated!")},1e3,[a]);return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",onChange:function(P){return p(P.target.value)}}),Object(y.jsx)("button",{onClick:s,children:"Cancel"})]})};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`() => {
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
}`}},I.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),G=e("./node_modules/react/jsx-runtime.js"),z=e.n(G),d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},d=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useForceUpdate"};var R=function(){var V=Object(E.a)();return Object(G.jsxs)("div",{children:[Math.random(),Object(G.jsx)("button",{onClick:V,children:"Update"})]})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},R.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return B});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e.n(E),z=e("./node_modules/core-js/modules/es.object.to-string.js"),d=e.n(z),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(H),N=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e.n(n),j=e("./node_modules/core-js/modules/es.array.slice.js"),m=e.n(j),f=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(f),o=e("./node_modules/core-js/modules/es.array.from.js"),v=e.n(o),y=e("./node_modules/react/index.js"),b=e.n(y);function c(I,O){return D(I)||_(I,O)||k(I,O)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(I,O){if(I){if(typeof I=="string")return x(I,O);var l=Object.prototype.toString.call(I).slice(8,-1);if(l==="Object"&&I.constructor&&(l=I.constructor.name),l==="Map"||l==="Set")return Array.from(I);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return x(I,O)}}function x(I,O){(O==null||O>I.length)&&(O=I.length);for(var l=0,u=new Array(O);l<O;l++)u[l]=I[l];return u}function _(I,O){var l=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(l!=null){var u,a,p,s,h=[],P=!0,M=!1;try{if(p=(l=l.call(I)).next,O===0){if(Object(l)!==l)return;P=!1}else for(;!(P=(u=p.call(l)).done)&&(h.push(u.value),h.length!==O);P=!0);}catch(A){M=!0,a=A}finally{try{if(!P&&l.return!=null&&(s=l.return(),Object(s)!==s))return}finally{if(M)throw a}}return h}}function D(I){if(Array.isArray(I))return I}var W=function(O){return(O+1)%1e6},B=function(){var O=Object(y.useReducer)(W,0),l=c(O,2),u=l[1];return u}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return H});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function V(n){n.preventDefault()}function C(){document.body.addEventListener("touchmove",V,{passive:!1})}function t(){document.body.removeEventListener("touchmove",V)}return Object($.useEffect)(function(){return N&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var n=document.body.style.top;document.body.style.cssText=""}},[]),Object($.useEffect)(function(){return N&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[N]),null},F=w,E=e("./node_modules/react/jsx-runtime.js"),G=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},G=`import React, { useState } from "react";

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
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}},d=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useHiddenBodyOverflow"},H=function(){return F(!0),Object(E.jsx)("div",{children:Object(E.jsx)("span",{children:"useHiddenBodyOverflow"})})};H.displayName="Default",H.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},H.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return ce});var K=e("./node_modules/core-js/modules/es.promise.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/web.timers.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),d=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/core-js/modules/es.object.define-property.js"),j=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),m=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),f=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),r=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),o=e("./node_modules/core-js/modules/es.object.create.js"),v=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),y=e("./node_modules/core-js/modules/es.array.for-each.js"),b=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),c=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),T=e("./node_modules/core-js/modules/es.array.reverse.js"),k=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function x(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */x=function(){return q};var q={},ie=Object.prototype,te=ie.hasOwnProperty,de=Object.defineProperty||function(se,ne,le){se[ne]=le.value},ue=typeof Symbol=="function"?Symbol:{},fe=ue.iterator||"@@iterator",ve=ue.asyncIterator||"@@asyncIterator",be=ue.toStringTag||"@@toStringTag";function ge(se,ne,le){return Object.defineProperty(se,ne,{value:le,enumerable:!0,configurable:!0,writable:!0}),se[ne]}try{ge({},"")}catch(se){ge=function(le,Q,J){return le[Q]=J}}function xe(se,ne,le,Q){var J=ne&&ne.prototype instanceof Te?ne:Te,ee=Object.create(J.prototype),ae=new Re(Q||[]);return de(ee,"_invoke",{value:He(se,le,ae)}),ee}function Ce(se,ne,le){try{return{type:"normal",arg:se.call(ne,le)}}catch(Q){return{type:"throw",arg:Q}}}q.wrap=xe;var De={};function Te(){}function Be(){}function Oe(){}var Ne={};ge(Ne,fe,function(){return this});var Me=Object.getPrototypeOf,ke=Me&&Me(Me(Ee([])));ke&&ke!==ie&&te.call(ke,fe)&&(Ne=ke);var Ve=Oe.prototype=Te.prototype=Object.create(Ne);function Ae(se){["next","throw","return"].forEach(function(ne){ge(se,ne,function(le){return this._invoke(ne,le)})})}function we(se,ne){function le(J,ee,ae,pe){var je=Ce(se[J],se,ee);if(je.type!=="throw"){var he=je.arg,Le=he.value;return Le&&typeof Le=="object"&&te.call(Le,"__await")?ne.resolve(Le.__await).then(function(Ie){le("next",Ie,ae,pe)},function(Ie){le("throw",Ie,ae,pe)}):ne.resolve(Le).then(function(Ie){he.value=Ie,ae(he)},function(Ie){return le("throw",Ie,ae,pe)})}pe(je.arg)}var Q;de(this,"_invoke",{value:function(ee,ae){function pe(){return new ne(function(je,he){le(ee,ae,je,he)})}return Q=Q?Q.then(pe,pe):pe()}})}function He(se,ne,le){var Q="suspendedStart";return function(J,ee){if(Q==="executing")throw new Error("Generator is already running");if(Q==="completed"){if(J==="throw")throw ee;return Ue()}for(le.method=J,le.arg=ee;;){var ae=le.delegate;if(ae){var pe=Pe(ae,le);if(pe){if(pe===De)continue;return pe}}if(le.method==="next")le.sent=le._sent=le.arg;else if(le.method==="throw"){if(Q==="suspendedStart")throw Q="completed",le.arg;le.dispatchException(le.arg)}else le.method==="return"&&le.abrupt("return",le.arg);Q="executing";var je=Ce(se,ne,le);if(je.type==="normal"){if(Q=le.done?"completed":"suspendedYield",je.arg===De)continue;return{value:je.arg,done:le.done}}je.type==="throw"&&(Q="completed",le.method="throw",le.arg=je.arg)}}}function Pe(se,ne){var le=ne.method,Q=se.iterator[le];if(Q===void 0)return ne.delegate=null,le==="throw"&&se.iterator.return&&(ne.method="return",ne.arg=void 0,Pe(se,ne),ne.method==="throw")||le!=="return"&&(ne.method="throw",ne.arg=new TypeError("The iterator does not provide a '"+le+"' method")),De;var J=Ce(Q,se.iterator,ne.arg);if(J.type==="throw")return ne.method="throw",ne.arg=J.arg,ne.delegate=null,De;var ee=J.arg;return ee?ee.done?(ne[se.resultName]=ee.value,ne.next=se.nextLoc,ne.method!=="return"&&(ne.method="next",ne.arg=void 0),ne.delegate=null,De):ee:(ne.method="throw",ne.arg=new TypeError("iterator result is not an object"),ne.delegate=null,De)}function _e(se){var ne={tryLoc:se[0]};1 in se&&(ne.catchLoc=se[1]),2 in se&&(ne.finallyLoc=se[2],ne.afterLoc=se[3]),this.tryEntries.push(ne)}function We(se){var ne=se.completion||{};ne.type="normal",delete ne.arg,se.completion=ne}function Re(se){this.tryEntries=[{tryLoc:"root"}],se.forEach(_e,this),this.reset(!0)}function Ee(se){if(se){var ne=se[fe];if(ne)return ne.call(se);if(typeof se.next=="function")return se;if(!isNaN(se.length)){var le=-1,Q=function J(){for(;++le<se.length;)if(te.call(se,le))return J.value=se[le],J.done=!1,J;return J.value=void 0,J.done=!0,J};return Q.next=Q}}return{next:Ue}}function Ue(){return{value:void 0,done:!0}}return Be.prototype=Oe,de(Ve,"constructor",{value:Oe,configurable:!0}),de(Oe,"constructor",{value:Be,configurable:!0}),Be.displayName=ge(Oe,be,"GeneratorFunction"),q.isGeneratorFunction=function(se){var ne=typeof se=="function"&&se.constructor;return!!ne&&(ne===Be||(ne.displayName||ne.name)==="GeneratorFunction")},q.mark=function(se){return Object.setPrototypeOf?Object.setPrototypeOf(se,Oe):(se.__proto__=Oe,ge(se,be,"GeneratorFunction")),se.prototype=Object.create(Ve),se},q.awrap=function(se){return{__await:se}},Ae(we.prototype),ge(we.prototype,ve,function(){return this}),q.AsyncIterator=we,q.async=function(se,ne,le,Q,J){J===void 0&&(J=Promise);var ee=new we(xe(se,ne,le,Q),J);return q.isGeneratorFunction(ne)?ee:ee.next().then(function(ae){return ae.done?ae.value:ee.next()})},Ae(Ve),ge(Ve,be,"Generator"),ge(Ve,fe,function(){return this}),ge(Ve,"toString",function(){return"[object Generator]"}),q.keys=function(se){var ne=Object(se),le=[];for(var Q in ne)le.push(Q);return le.reverse(),function J(){for(;le.length;){var ee=le.pop();if(ee in ne)return J.value=ee,J.done=!1,J}return J.done=!0,J}},q.values=Ee,Re.prototype={constructor:Re,reset:function(ne){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(We),!ne)for(var le in this)le.charAt(0)==="t"&&te.call(this,le)&&!isNaN(+le.slice(1))&&(this[le]=void 0)},stop:function(){this.done=!0;var ne=this.tryEntries[0].completion;if(ne.type==="throw")throw ne.arg;return this.rval},dispatchException:function(ne){if(this.done)throw ne;var le=this;function Q(he,Le){return ae.type="throw",ae.arg=ne,le.next=he,Le&&(le.method="next",le.arg=void 0),!!Le}for(var J=this.tryEntries.length-1;J>=0;--J){var ee=this.tryEntries[J],ae=ee.completion;if(ee.tryLoc==="root")return Q("end");if(ee.tryLoc<=this.prev){var pe=te.call(ee,"catchLoc"),je=te.call(ee,"finallyLoc");if(pe&&je){if(this.prev<ee.catchLoc)return Q(ee.catchLoc,!0);if(this.prev<ee.finallyLoc)return Q(ee.finallyLoc)}else if(pe){if(this.prev<ee.catchLoc)return Q(ee.catchLoc,!0)}else{if(!je)throw new Error("try statement without catch or finally");if(this.prev<ee.finallyLoc)return Q(ee.finallyLoc)}}}},abrupt:function(ne,le){for(var Q=this.tryEntries.length-1;Q>=0;--Q){var J=this.tryEntries[Q];if(J.tryLoc<=this.prev&&te.call(J,"finallyLoc")&&this.prev<J.finallyLoc){var ee=J;break}}ee&&(ne==="break"||ne==="continue")&&ee.tryLoc<=le&&le<=ee.finallyLoc&&(ee=null);var ae=ee?ee.completion:{};return ae.type=ne,ae.arg=le,ee?(this.method="next",this.next=ee.finallyLoc,De):this.complete(ae)},complete:function(ne,le){if(ne.type==="throw")throw ne.arg;return ne.type==="break"||ne.type==="continue"?this.next=ne.arg:ne.type==="return"?(this.rval=this.arg=ne.arg,this.method="return",this.next="end"):ne.type==="normal"&&le&&(this.next=le),De},finish:function(ne){for(var le=this.tryEntries.length-1;le>=0;--le){var Q=this.tryEntries[le];if(Q.finallyLoc===ne)return this.complete(Q.completion,Q.afterLoc),We(Q),De}},catch:function(ne){for(var le=this.tryEntries.length-1;le>=0;--le){var Q=this.tryEntries[le];if(Q.tryLoc===ne){var J=Q.completion;if(J.type==="throw"){var ee=J.arg;We(Q)}return ee}}throw new Error("illegal catch attempt")},delegateYield:function(ne,le,Q){return this.delegate={iterator:Ee(ne),resultName:le,nextLoc:Q},this.method==="next"&&(this.arg=void 0),De}},q}function _(q,ie,te,de,ue,fe,ve){try{var be=q[fe](ve),ge=be.value}catch(xe){te(xe);return}be.done?ie(ge):Promise.resolve(ge).then(de,ue)}function D(q){return function(){var ie=this,te=arguments;return new Promise(function(de,ue){var fe=q.apply(ie,te);function ve(ge){_(fe,de,ue,ve,be,"next",ge)}function be(ge){_(fe,de,ue,ve,be,"throw",ge)}ve(void 0)})}}function W(q,ie){return u(q)||l(q,ie)||I(q,ie)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(q,ie){if(q){if(typeof q=="string")return O(q,ie);var te=Object.prototype.toString.call(q).slice(8,-1);if(te==="Object"&&q.constructor&&(te=q.constructor.name),te==="Map"||te==="Set")return Array.from(q);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return O(q,ie)}}function O(q,ie){(ie==null||ie>q.length)&&(ie=q.length);for(var te=0,de=new Array(ie);te<ie;te++)de[te]=q[te];return de}function l(q,ie){var te=q==null?null:typeof Symbol!="undefined"&&q[Symbol.iterator]||q["@@iterator"];if(te!=null){var de,ue,fe,ve,be=[],ge=!0,xe=!1;try{if(fe=(te=te.call(q)).next,ie===0){if(Object(te)!==te)return;ge=!1}else for(;!(ge=(de=fe.call(te)).done)&&(be.push(de.value),be.length!==ie);ge=!0);}catch(Ce){xe=!0,ue=Ce}finally{try{if(!ge&&te.return!=null&&(ve=te.return(),Object(ve)!==ve))return}finally{if(xe)throw ue}}return be}}function u(q){if(Array.isArray(q))return q}var a=function(ie){var te=Object(n.useState)(!1),de=W(te,2),ue=de[0],fe=de[1],ve=Object(k.a)(ie),be=Object(n.useCallback)(D(x().mark(function ge(){var xe,Ce=arguments;return x().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return fe(!0),Te.next=3,ve.apply(void 0,Ce);case 3:return xe=Te.sent,fe(!1),Te.abrupt("return",xe);case 6:case"end":return Te.stop()}},ge)})),[ie]);return[ue,be]},p=e("./node_modules/react/jsx-runtime.js");function s(q,ie){return S(q)||A(q,ie)||P(q,ie)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(q,ie){if(q){if(typeof q=="string")return M(q,ie);var te=Object.prototype.toString.call(q).slice(8,-1);if(te==="Object"&&q.constructor&&(te=q.constructor.name),te==="Map"||te==="Set")return Array.from(q);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return M(q,ie)}}function M(q,ie){(ie==null||ie>q.length)&&(ie=q.length);for(var te=0,de=new Array(ie);te<ie;te++)de[te]=q[te];return de}function A(q,ie){var te=q==null?null:typeof Symbol!="undefined"&&q[Symbol.iterator]||q["@@iterator"];if(te!=null){var de,ue,fe,ve,be=[],ge=!0,xe=!1;try{if(fe=(te=te.call(q)).next,ie===0){if(Object(te)!==te)return;ge=!1}else for(;!(ge=(de=fe.call(te)).done)&&(be.push(de.value),be.length!==ie);ge=!0);}catch(Ce){xe=!0,ue=Ce}finally{try{if(!ge&&te.return!=null&&(ve=te.return(),Object(ve)!==ve))return}finally{if(xe)throw ue}}return be}}function S(q){if(Array.isArray(q))return q}var L=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},L=`import React from "react";
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
`,U={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},Y=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design-v2/hooks/useLoading"},re=function(ie){return new Promise(function(te){return setTimeout(te,ie)})},ce=function(){var ie=a(re),te=s(ie,2),de=te[0],ue=te[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){return ue(2e3)},children:"Start"})}),Object(p.jsxs)("div",{children:["Loading: ",""+de]})]})};ce.displayName="Default",ce.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},ce.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return p});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(E),z=e("./node_modules/core-js/modules/es.symbol.description.js"),d=e.n(z),H=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/es.array.iterator.js"),i=e.n(n),j=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(j),f=e("./node_modules/core-js/modules/es.array.slice.js"),r=e.n(f),o=e("./node_modules/core-js/modules/es.function.name.js"),v=e.n(o),y=e("./node_modules/core-js/modules/es.array.from.js"),b=e.n(y),c=e("./node_modules/react/index.js"),T=e.n(c),k=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),x=e("./node_modules/react/jsx-runtime.js"),_=e.n(x);function D(s,h){return l(s)||O(s,h)||B(s,h)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(s,h){if(s){if(typeof s=="string")return I(s,h);var P=Object.prototype.toString.call(s).slice(8,-1);if(P==="Object"&&s.constructor&&(P=s.constructor.name),P==="Map"||P==="Set")return Array.from(s);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return I(s,h)}}function I(s,h){(h==null||h>s.length)&&(h=s.length);for(var P=0,M=new Array(h);P<h;P++)M[P]=s[P];return M}function O(s,h){var P=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(P!=null){var M,A,S,L,U=[],Y=!0,re=!1;try{if(S=(P=P.call(s)).next,h===0){if(Object(P)!==P)return;Y=!1}else for(;!(Y=(M=S.call(P)).done)&&(U.push(M.value),U.length!==h);Y=!0);}catch(ce){re=!0,A=ce}finally{try{if(!Y&&P.return!=null&&(L=P.return(),Object(L)!==L))return}finally{if(re)throw A}}return U}}function l(s){if(Array.isArray(s))return s}var u=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { useEffect } from \\"react\\";\\n\\nimport { useRafState } from \\"../useRafState\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useRafState\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":31}}};
    
import { useEffect } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},u=`import { useEffect } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { useEffect } from \\"react\\";\\n\\nimport { useRafState } from \\"../useRafState\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useRafState\\",\\n};\\n\\nexport const Default = () => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":9},"endLoc":{"col":1,"line":31},"startBody":{"col":23,"line":9},"endBody":{"col":1,"line":31}}};
    
import { useEffect } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design-v2/hooks/useRafState"};var p=function(){var h=Object(k.a)({width:0,height:0}),P=D(h,2),M=P[0],A=P[1];return Object(c.useEffect)(function(){var S=function(){A({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",S),function(){window.removeEventListener("resize",S)}},[]),Object(x.jsx)("pre",{children:JSON.stringify(M,null,2)})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
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
}`}},p.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return W});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e.n(E),z=e("./node_modules/core-js/modules/es.object.to-string.js"),d=e.n(z),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(H),N=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e.n(n),j=e("./node_modules/core-js/modules/es.array.slice.js"),m=e.n(j),f=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(f),o=e("./node_modules/core-js/modules/es.array.from.js"),v=e.n(o),y=e("./node_modules/react/index.js"),b=e.n(y);function c(B,I){return D(B)||_(B,I)||k(B,I)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(B,I){if(B){if(typeof B=="string")return x(B,I);var O=Object.prototype.toString.call(B).slice(8,-1);if(O==="Object"&&B.constructor&&(O=B.constructor.name),O==="Map"||O==="Set")return Array.from(B);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return x(B,I)}}function x(B,I){(I==null||I>B.length)&&(I=B.length);for(var O=0,l=new Array(I);O<I;O++)l[O]=B[O];return l}function _(B,I){var O=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(O!=null){var l,u,a,p,s=[],h=!0,P=!1;try{if(a=(O=O.call(B)).next,I===0){if(Object(O)!==O)return;h=!1}else for(;!(h=(l=a.call(O)).done)&&(s.push(l.value),s.length!==I);h=!0);}catch(M){P=!0,u=M}finally{try{if(!h&&O.return!=null&&(p=O.return(),Object(p)!==p))return}finally{if(P)throw u}}return s}}function D(B){if(Array.isArray(B))return B}var W=function(I){var O=Object(y.useRef)(0),l=Object(y.useState)(I),u=c(l,2),a=u[0],p=u[1],s=Object(y.useCallback)(function(h){cancelAnimationFrame(O.current),O.current=requestAnimationFrame(function(){p(h)})},[]);return[a,s]}},"./packages/travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/dayjs/dayjs.min.js"),F=e.n(w),E=e("./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts"),G=e("./node_modules/react/jsx-runtime.js"),z=e.n(G),d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import dayjs from \\"dayjs\\";\\nimport { useRemainingTimer } from \\"../useRemainingTimer\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useRemainingTimer\\",\\n};\\n\\nexport const Default = () => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import dayjs from "dayjs";
import { useRemainingTimer } from "../useRemainingTimer";

export default {
  title: "@travelmakers-design-v2/hooks/useRemainingTimer",
};

export const Default = () => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},d=`import dayjs from "dayjs";
import { useRemainingTimer } from "../useRemainingTimer";

export default {
  title: "@travelmakers-design-v2/hooks/useRemainingTimer",
};

export const Default = () => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
};
`,H={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}};g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import dayjs from \\"dayjs\\";\\nimport { useRemainingTimer } from \\"../useRemainingTimer\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useRemainingTimer\\",\\n};\\n\\nexport const Default = () => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":8},"endLoc":{"col":1,"line":12},"startBody":{"col":23,"line":8},"endBody":{"col":1,"line":12}}};
    
import dayjs from "dayjs";
import { useRemainingTimer } from "../useRemainingTimer";

export default {
  title: "@travelmakers-design-v2/hooks/useRemainingTimer",
};

export const Default = () => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
};



Default.parameters = { storySource: { source: "() => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design-v2/hooks/useRemainingTimer"};var R=function(){var V=Object(E.a)(F()()),C=V.remainingTime;return Object(G.jsx)("div",{children:C})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`() => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
}`}},R.parameters)},"./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return _});var K=e("./node_modules/core-js/modules/web.timers.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/dayjs/dayjs.min.js"),t=e.n(C),n=e("./node_modules/dayjs/plugin/duration.js"),i=e.n(n),j=e("./node_modules/dayjs/plugin/timezone.js"),m=e.n(j),f=e("./node_modules/dayjs/plugin/utc.js"),r=e.n(f);t.a.extend(i.a),t.a.extend(r.a),t.a.extend(m.a),t.a.tz.setDefault("Asia/Seoul");var o=function(W){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"DD\uC77C HH:mm:ss",I=t()(W),O=t()(),l=I.diff(O),u=O.isSame(I)||l<=0;if(u)return"00:00:00";var a=t.a.duration(l).days();return a===0?t()(l).format("HH:mm:ss"):t()(l).format(B)},v=e("./node_modules/react/index.js");function y(D,W){return x(D)||k(D,W)||c(D,W)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(D,W){if(D){if(typeof D=="string")return T(D,W);var B=Object.prototype.toString.call(D).slice(8,-1);if(B==="Object"&&D.constructor&&(B=D.constructor.name),B==="Map"||B==="Set")return Array.from(D);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return T(D,W)}}function T(D,W){(W==null||W>D.length)&&(W=D.length);for(var B=0,I=new Array(W);B<W;B++)I[B]=D[B];return I}function k(D,W){var B=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(B!=null){var I,O,l,u,a=[],p=!0,s=!1;try{if(l=(B=B.call(D)).next,W===0){if(Object(B)!==B)return;p=!1}else for(;!(p=(I=l.call(B)).done)&&(a.push(I.value),a.length!==W);p=!0);}catch(h){s=!0,O=h}finally{try{if(!p&&B.return!=null&&(u=B.return(),Object(u)!==u))return}finally{if(s)throw O}}return a}}function x(D){if(Array.isArray(D))return D}var _=function(W,B,I){var O=Object(v.useState)(""),l=y(O,2),u=l[0],a=l[1];return Object(v.useLayoutEffect)(function(){var p=null;return p=setInterval(function(){return a(o(W,B))},I),function(){p&&clearInterval(p)}},[]),{remainingTime:u}}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return l});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/core-js/modules/es.array.iterator.js"),H=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),t=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),n=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function i(u,a){return o(u)||r(u,a)||m(u,a)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(u,a){if(u){if(typeof u=="string")return f(u,a);var p=Object.prototype.toString.call(u).slice(8,-1);if(p==="Object"&&u.constructor&&(p=u.constructor.name),p==="Map"||p==="Set")return Array.from(u);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return f(u,a)}}function f(u,a){(a==null||a>u.length)&&(a=u.length);for(var p=0,s=new Array(a);p<a;p++)s[p]=u[p];return s}function r(u,a){var p=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(p!=null){var s,h,P,M,A=[],S=!0,L=!1;try{if(P=(p=p.call(u)).next,a===0){if(Object(p)!==p)return;S=!1}else for(;!(S=(s=P.call(p)).done)&&(A.push(s.value),A.length!==a);S=!0);}catch(U){L=!0,h=U}finally{try{if(!S&&p.return!=null&&(M=p.return(),Object(M)!==M))return}finally{if(L)throw h}}return A}}function o(u){if(Array.isArray(u))return u}var v={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},y=typeof window!="undefined",b=function(){var a=Object(C.useRef)(null),p=Object(n.a)(v),s=i(p,2),h=s[0],P=s[1],M=Object(C.useMemo)(function(){return y?new ResizeObserver(function(A){var S=A[0];S&&P(S.contentRect)}):null},[]);return Object(C.useEffect)(function(){return a.current&&M.observe(a.current),function(){M.disconnect()}},[a.current]),[a,h]},c=e("./node_modules/react/jsx-runtime.js");function T(u,a){return W(u)||D(u,a)||x(u,a)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(u,a){if(u){if(typeof u=="string")return _(u,a);var p=Object.prototype.toString.call(u).slice(8,-1);if(p==="Object"&&u.constructor&&(p=u.constructor.name),p==="Map"||p==="Set")return Array.from(u);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return _(u,a)}}function _(u,a){(a==null||a>u.length)&&(a=u.length);for(var p=0,s=new Array(a);p<a;p++)s[p]=u[p];return s}function D(u,a){var p=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(p!=null){var s,h,P,M,A=[],S=!0,L=!1;try{if(P=(p=p.call(u)).next,a===0){if(Object(p)!==p)return;S=!1}else for(;!(S=(s=P.call(p)).done)&&(A.push(s.value),A.length!==a);S=!0);}catch(U){L=!0,h=U}finally{try{if(!S&&p.return!=null&&(M=p.return(),Object(M)!==M))return}finally{if(L)throw h}}return A}}function W(u){if(Array.isArray(u))return u}var B=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},B=`import React, { useEffect } from "react";

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
`,I={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},O=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/hooks/useResize"},l=function(){var a=b(),p=T(a,2),s=p[0],h=p[1],P=Object(t.a)();return Object(C.useEffect)(function(){P()},[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("textarea",{ref:s,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(c.jsx)("div",{children:JSON.stringify(h)})]})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`() => {
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
}`}},l.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return p});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(E),z=e("./node_modules/core-js/modules/es.symbol.description.js"),d=e.n(z),H=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/es.array.iterator.js"),i=e.n(n),j=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(j),f=e("./node_modules/core-js/modules/es.array.slice.js"),r=e.n(f),o=e("./node_modules/core-js/modules/es.function.name.js"),v=e.n(o),y=e("./node_modules/core-js/modules/es.array.from.js"),b=e.n(y),c=e("./node_modules/react/index.js"),T=e.n(c),k=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),x=e("./node_modules/react/jsx-runtime.js"),_=e.n(x);function D(s,h){return l(s)||O(s,h)||B(s,h)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(s,h){if(s){if(typeof s=="string")return I(s,h);var P=Object.prototype.toString.call(s).slice(8,-1);if(P==="Object"&&s.constructor&&(P=s.constructor.name),P==="Map"||P==="Set")return Array.from(s);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return I(s,h)}}function I(s,h){(h==null||h>s.length)&&(h=s.length);for(var P=0,M=new Array(h);P<h;P++)M[P]=s[P];return M}function O(s,h){var P=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(P!=null){var M,A,S,L,U=[],Y=!0,re=!1;try{if(S=(P=P.call(s)).next,h===0){if(Object(P)!==P)return;Y=!1}else for(;!(Y=(M=S.call(P)).done)&&(U.push(M.value),U.length!==h);Y=!0);}catch(ce){re=!0,A=ce}finally{try{if(!Y&&P.return!=null&&(L=P.return(),Object(L)!==L))return}finally{if(re)throw A}}return U}}function l(s){if(Array.isArray(s))return s}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},u=`import React from "react";
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
`,a={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/hooks/useTimeoutFn"};var p=function(){var h=Object(k.a)(function(){alert("fire!")},2e3),P=D(h,2),M=P[0],A=P[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:M,children:"Run"}),Object(x.jsx)("button",{onClick:A,children:"Clear"})]})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return G});var K=e("./node_modules/core-js/modules/web.timers.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),G=function(d,H){var R=Object(w.useRef)(),N=Object(E.a)(d),V=Object(w.useCallback)(function(){R.current&&clearTimeout(R.current),R.current=setTimeout(function(){N()},H)},[H]),C=Object(w.useCallback)(function(){R.current&&clearTimeout(R.current)},[]);return Object(w.useEffect)(function(){return C},[C]),[V,C]}},"./packages/travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Toast",function(){return o});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react-hot-toast/dist/index.js"),w=e.n($),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),d=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./node_modules/react/jsx-runtime.js"),R=["text","align"];function N(v,y){if(v==null)return{};var b=V(v,y),c,T;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(v);for(T=0;T<k.length;T++)c=k[T],!(y.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(v,c)&&(b[c]=v[c])}return b}function V(v,y){if(v==null)return{};var b={},c=Object.keys(v),T,k;for(k=0;k<c.length;k++)T=c[k],!(y.indexOf(T)>=0)&&(b[T]=v[T]);return b}var C={left:"flex-start",center:"center",right:"flex-end"},t={success:"IcResultSuccess",error:"IcResultFail"},n=function(y){var b=y.typography,c=y.colors,T=y.shadows;return{style:Object.assign({},b.body2,{width:"328px",padding:"11px 6px",color:c.white,backgroundColor:c.black30,boxShadow:T.elevation4}),duration:2e3}},i=function(y){return{display:"flex",justifyContent:C[y!=null?y:"center"],width:"100%"}},j=function(){var y=Object(d.c)(),b=y.spacing,c=function(D,W){var B=D.text,I=D.align,O=N(D,R);w()(Object(H.jsxs)("div",{style:Object.assign({},i(I),{padding:"1px 0",wordBreak:"break-all"}),children:[W&&Object(H.jsx)(z.a,{src:t[W],width:24,height:24,style:{flexShrink:0,marginRight:b.spacing10}}),Object(H.jsx)("p",{style:{margin:0,wordBreak:"break-all"},children:B})]}),Object.assign({},n(y),O))},T=function(D){return c(D)},k=function(D){return c(D,"success")},x=function(D){return c(D,"error")};return{toast:T,success:k,error:x}},m=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Toaster } from \\"react-hot-toast\\";\\nimport { useToast } from \\"../useToast\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useToast\\",\\n} as Meta;\\n\\nexport const Toast = () => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Toast":{"startLoc":{"col":21,"line":9},"endLoc":{"col":1,"line":22},"startBody":{"col":21,"line":9},"endBody":{"col":1,"line":22}}};
    
import { Meta } from "@storybook/react";
import { Toaster } from "react-hot-toast";
import { useToast } from "../useToast";

export default {
  title: "@travelmakers-design-v2/hooks/useToast",
} as Meta;

export const Toast = () => {
  const { toast, success, error } = useToast();

  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
        <button onClick={() => toast({ text: "\uAE30\uBCF8 \uD14C\uC2A4\uD2B8" })}>Toast</button>
        <button onClick={() => success({ text: "\uC131\uACF5" })}>Success</button>
        <button onClick={() => error({ text: "\uC2E4\uD328" })}>Error</button>
      </div>
      <Toaster />
    </>
  );
};



Toast.parameters = { storySource: { source: "() => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n}" }, ...Toast.parameters };`,f={Toast:{startLoc:{col:21,line:17},endLoc:{col:1,line:30},startBody:{col:21,line:17},endBody:{col:1,line:30}}},m=`import { Meta } from "@storybook/react";
import { Toaster } from "react-hot-toast";
import { useToast } from "../useToast";

export default {
  title: "@travelmakers-design-v2/hooks/useToast",
} as Meta;

export const Toast = () => {
  const { toast, success, error } = useToast();

  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
        <button onClick={() => toast({ text: "\uAE30\uBCF8 \uD14C\uC2A4\uD2B8" })}>Toast</button>
        <button onClick={() => success({ text: "\uC131\uACF5" })}>Success</button>
        <button onClick={() => error({ text: "\uC2E4\uD328" })}>Error</button>
      </div>
      <Toaster />
    </>
  );
};
`,f={Toast:{startLoc:{col:21,line:9},endLoc:{col:1,line:22},startBody:{col:21,line:9},endBody:{col:1,line:22}}},r=g.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import { Meta } from \\"@storybook/react\\";\\nimport { Toaster } from \\"react-hot-toast\\";\\nimport { useToast } from \\"../useToast\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design-v2/hooks/useToast\\",\\n} as Meta;\\n\\nexport const Toast = () => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Toast":{"startLoc":{"col":21,"line":9},"endLoc":{"col":1,"line":22},"startBody":{"col":21,"line":9},"endBody":{"col":1,"line":22}}};
    
import { Meta } from "@storybook/react";
import { Toaster } from "react-hot-toast";
import { useToast } from "../useToast";

export default {
  title: "@travelmakers-design-v2/hooks/useToast",
} as Meta;

export const Toast = () => {
  const { toast, success, error } = useToast();

  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
        <button onClick={() => toast({ text: "\uAE30\uBCF8 \uD14C\uC2A4\uD2B8" })}>Toast</button>
        <button onClick={() => success({ text: "\uC131\uACF5" })}>Success</button>
        <button onClick={() => error({ text: "\uC2E4\uD328" })}>Error</button>
      </div>
      <Toaster />
    </>
  );
};



Toast.parameters = { storySource: { source: "() => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n}" }, ...Toast.parameters };`,locationsMap:{toast:{startLoc:{col:21,line:17},endLoc:{col:1,line:30},startBody:{col:21,line:17},endBody:{col:1,line:30}}}}},title:"@travelmakers-design-v2/hooks/useToast"},o=function(){var y=j(),b=y.toast,c=y.success,T=y.error;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[Object(H.jsx)("button",{onClick:function(){return b({text:"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8"})},children:"Toast"}),Object(H.jsx)("button",{onClick:function(){return c({text:"\uC131\uACF5"})},children:"Success"}),Object(H.jsx)("button",{onClick:function(){return T({text:"\uC2E4\uD328"})},children:"Error"})]}),Object(H.jsx)($.Toaster,{})]})};o.parameters=Object.assign({storySource:{source:`() => {
  const { toast, success, error } = useToast();

  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
        <button onClick={() => toast({ text: "\uAE30\uBCF8 \uD14C\uC2A4\uD2B8" })}>Toast</button>
        <button onClick={() => success({ text: "\uC131\uACF5" })}>Success</button>
        <button onClick={() => error({ text: "\uC2E4\uD328" })}>Error</button>
      </div>
      <Toaster />
    </>
  );
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return p});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(E),z=e("./node_modules/core-js/modules/es.symbol.description.js"),d=e.n(z),H=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e.n(H),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/es.array.iterator.js"),i=e.n(n),j=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(j),f=e("./node_modules/core-js/modules/es.array.slice.js"),r=e.n(f),o=e("./node_modules/core-js/modules/es.function.name.js"),v=e.n(o),y=e("./node_modules/core-js/modules/es.array.from.js"),b=e.n(y),c=e("./node_modules/react/index.js"),T=e.n(c),k=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),x=e("./node_modules/react/jsx-runtime.js"),_=e.n(x);function D(s,h){return l(s)||O(s,h)||B(s,h)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(s,h){if(s){if(typeof s=="string")return I(s,h);var P=Object.prototype.toString.call(s).slice(8,-1);if(P==="Object"&&s.constructor&&(P=s.constructor.name),P==="Map"||P==="Set")return Array.from(s);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return I(s,h)}}function I(s,h){(h==null||h>s.length)&&(h=s.length);for(var P=0,M=new Array(h);P<h;P++)M[P]=s[P];return M}function O(s,h){var P=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(P!=null){var M,A,S,L,U=[],Y=!0,re=!1;try{if(S=(P=P.call(s)).next,h===0){if(Object(P)!==P)return;Y=!1}else for(;!(Y=(M=S.call(P)).done)&&(U.push(M.value),U.length!==h);Y=!0);}catch(ce){re=!0,A=ce}finally{try{if(!Y&&P.return!=null&&(L=P.return(),Object(L)!==L))return}finally{if(re)throw A}}return U}}function l(s){if(Array.isArray(s))return s}var u=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},u=`import React, { useEffect, useState } from "react";

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
`,a={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useUpdateEffect"};var p=function(){var h=Object(c.useState)(""),P=D(h,2),M=P[0],A=P[1];return Object(c.useEffect)(function(){console.log("useEffect:",M)},[M]),Object(k.a)(function(){console.log("useUpdateEffect:",M)},[M]),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",onChange:function(L){return A(L.target.value)}})})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
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
}`}},p.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return w});var K=e("./node_modules/react/index.js"),$=e.n(K),w=function(E,G){var z=Object(K.useRef)(!0);Object(K.useEffect)(function(){if(!z.current)return E();z.current=!1},G)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,g,e){"use strict";e.d(g,"c",function(){return Ee}),e.d(g,"d",function(){return Ue}),e.d(g,"b",function(){return se}),e.d(g,"a",function(){return le});var K=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),F={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},E={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},G={primary:[F.primary,F.primaryInteract,F.primaryContainer,F.white,F.white,F.white],secondary:[F.transparent,F.surface,F.transparent,F.primaryContainer,F.primary,F.primary],tertiary:[F.secondary,F.secondaryInteract,F.secondaryContainer,F.primary4,F.white,F.white],error:[F.error,F.errorInteract,F.errorContainer,F.primary4,F.white,F.white],tonal:[F.surface,F.surface,F.surface,F.primary4,F.primary,F.primary],text:[F.transparent,F.transparent,F.transparent,F.primary4,F.primaryInteract,F.primary]},z={none:"none",elevation1:"0px 4px 8px rgba(0, 0, 0, 0.15)",elevation2:"0px 4px 12px rgba(0, 0, 0, 0.15)",elevation3:"0px 4px 16px rgba(0, 0, 0, 0.2)",elevation4:"0px 4px 20px rgba(0, 0, 0, 0.2)",elevation5:"0px 4px 24px rgba(0, 0, 0, 0.2)"},d={display1:"40px",display2:"32px",display3:"28px",display4:"24px",display5:"20px",display6:"18px",subhead1:"16px",subhead2:"14px",body1:"16px",body2:"14px",body3:"12px",caption:"10px"},H={display1:"56px",display2:"40px",display3:"36px",display4:"32px",display5:"28px",display6:"26px",subhead1:"24px",subhead2:"22px",body1:"24px",body2:"22px",body3:"20px",caption:"16px"},R={radius10:"4px",radius20:"8px",radius100:"100px"},N={spacing5:"4px",spacing10:"8px",spacing20:"12px",spacing30:"16px",spacing40:"20px",spacing50:"24px",spacing60:"28px",spacing70:"32px",spacing80:"36px",spacing90:"40px",spacing100:"48px",spacing110:"52px",spacing120:"56px",spacing130:"60px"},V={small:768,medium:1024,large:1408},C={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},t={mobile:"@media (max-width: "+C.mobile+"px)",tablet:"@media (max-width: "+C.tablet+"px)",desktop:"@media (max-width: "+C.desktop+"px)",largeDesktop:"@media (max-width: "+C.maxSize+"px)"},n=function(J){for(var ee="",ae=1;ae<J.length-1;ae+=1)ee+=J[ae]+" "+ae/(J.length-1)*100+"%, ";return J[0]+" 0%, "+ee+J[J.length-1]+" 100%"},i=function(J){for(var ee=arguments.length,ae=new Array(ee>1?ee-1:0),pe=1;pe<ee;pe++)ae[pe-1]=arguments[pe];return"linear-gradient("+J+"deg, "+n(ae)+")"},j=function(){for(var J=arguments.length,ee=new Array(J),ae=0;ae<J;ae++)ee[ae]=arguments[ae];return"radial-gradient(circle, "+n(ee)+")"},m=function(J){return typeof J.size=="number"?J.size:J.sizes[J.size]||J.size||J.sizes.medium},f=function(J){return function(ee){return"@media (min-width: "+(m({size:ee,sizes:J.breakpoints})+1)+"px)"}},r=function(J){return function(ee){return"@media (max-width: "+m({size:ee,sizes:J.breakpoints})+"px)"}},o=e("./node_modules/core-js/modules/es.string.replace.js"),v=e("./node_modules/core-js/modules/es.regexp.exec.js"),y=e("./node_modules/core-js/modules/es.number.is-nan.js"),b=e("./node_modules/core-js/modules/es.number.constructor.js"),c=e("./node_modules/core-js/modules/es.parse-int.js"),T=e("./node_modules/core-js/modules/es.array.map.js"),k=e("./node_modules/core-js/modules/es.string.split.js"),x=e("./node_modules/core-js/modules/es.string.starts-with.js"),_=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),W=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e("./node_modules/core-js/modules/es.object.to-string.js"),I=e("./node_modules/core-js/modules/es.symbol.iterator.js"),O=e("./node_modules/core-js/modules/es.string.iterator.js"),l=e("./node_modules/core-js/modules/es.array.iterator.js"),u=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),a=e("./node_modules/core-js/modules/es.array.slice.js"),p=e("./node_modules/core-js/modules/es.function.name.js"),s=e("./node_modules/core-js/modules/es.array.from.js");function h(Q,J){return L(Q)||S(Q,J)||M(Q,J)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(Q,J){if(Q){if(typeof Q=="string")return A(Q,J);var ee=Object.prototype.toString.call(Q).slice(8,-1);if(ee==="Object"&&Q.constructor&&(ee=Q.constructor.name),ee==="Map"||ee==="Set")return Array.from(Q);if(ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee))return A(Q,J)}}function A(Q,J){(J==null||J>Q.length)&&(J=Q.length);for(var ee=0,ae=new Array(J);ee<J;ee++)ae[ee]=Q[ee];return ae}function S(Q,J){var ee=Q==null?null:typeof Symbol!="undefined"&&Q[Symbol.iterator]||Q["@@iterator"];if(ee!=null){var ae,pe,je,he,Le=[],Ie=!0,Ke=!1;try{if(je=(ee=ee.call(Q)).next,J===0){if(Object(ee)!==ee)return;Ie=!1}else for(;!(Ie=(ae=je.call(ee)).done)&&(Le.push(ae.value),Le.length!==J);Ie=!0);}catch(Ge){Ke=!0,pe=Ge}finally{try{if(!Ie&&ee.return!=null&&(he=ee.return(),Object(he)!==he))return}finally{if(Ke)throw pe}}return Le}}function L(Q){if(Array.isArray(Q))return Q}var U=function(J){var ee=J.replace("#","");return typeof ee=="string"&&ee.length===6&&!Number.isNaN(Number("0x"+ee))},Y=function(J){var ee=J.replace("#",""),ae=parseInt(ee,16),pe=ae>>16&255,je=ae>>8&255,he=ae&255;return{r:pe,g:je,b:he,a:1}},re=function(J){var ee=J.replace(/[^0-9,.]/g,"").split(",").map(Number),ae=h(ee,4),pe=ae[0],je=ae[1],he=ae[2],Le=ae[3];return{r:pe,g:je,b:he,a:Le||1}},ce=function(J){return U(J)?Y(J):J.startsWith("rgb")?re(J):{r:0,g:0,b:0,a:1}},q=function(J,ee){if(typeof J!="string"||ee>1||ee<0)return"rgba(0, 0, 0, 1)";var ae=ce(J),pe=ae.r,je=ae.g,he=ae.b;return"rgba("+pe+", "+je+", "+he+", "+ee+")"},ie=function(J,ee){var ae=ce(J),pe=ae.r,je=ae.g,he=ae.b,Le=ae.a,Ie=1-ee,Ke=function(Ye){return Math.round(Ye*Ie)};return"rgba("+Ke(pe)+", "+Ke(je)+", "+Ke(he)+", "+Le+")"},te=function(J,ee){var ae=ce(J),pe=ae.r,je=ae.g,he=ae.b,Le=ae.a,Ie=function(Ge){return Math.round(Ge+(255-Ge)*ee)};return"rgba("+Ie(pe)+", "+Ie(je)+", "+Ie(he)+", "+Le+")"},de=function(J){return J*8},ue={linearGradient:i,radialGradient:j,smallerThan:r,largerThan:f,rgba:q,size:m,darken:ie,lighten:te,spacing:de},fe=function(J){return Object.assign({},J,{fn:{largerThan:ue.largerThan(J),smallerThan:ue.smallerThan(J),radialGradient:ue.radialGradient,linearGradient:ue.linearGradient,rgba:ue.rgba,size:ue.size,lighten:ue.lighten,darken:ue.darken,spacing:ue.spacing}})},ve={display1:{fontSize:d.display1,lineHeight:H.display1},display2:{fontSize:d.display2,lineHeight:H.display2},display3:{fontSize:d.display3,lineHeight:H.display3},display4:{fontSize:d.display4,lineHeight:H.display4},display5:{fontSize:d.display5,lineHeight:H.display5},display6:{fontSize:d.display6,lineHeight:H.display6},subhead1:{fontSize:d.subhead1,lineHeight:H.subhead1},subhead2:{fontSize:d.subhead2,lineHeight:H.subhead2},body1:{fontSize:d.body1,lineHeight:H.body1},body2:{fontSize:d.body2,lineHeight:H.body2},body3:{fontSize:d.body3,lineHeight:H.body3},caption:{fontSize:d.caption,lineHeight:H.caption}},be=Object.keys(G),ge=Object.keys(F),xe=["small","medium","large"],Ce=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],De=function(J){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:J.fontFamily||"sans-serif"}},Te={locale:"ko",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",colors:F,palettes:G,shadows:z,fontSizes:d,lineHeights:H,radius:R,typography:ve,spacing:N,breakpoints:V,media:t},Be=Object.assign({},Te,{colors:E,colorScheme:"dark"}),Oe=fe(Te),Ne=fe(Be),Me=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),ke=e("./node_modules/react/jsx-runtime.js"),Ve=function(J){var ee=J.styles,ae=Ee();return Object(ke.jsx)(Me.a,{styles:Object(Me.b)(ee(ae))})};Ve.displayName="Global";var Ae;function we(Q,J){return J||(J=Q.slice(0)),Q.raw=J,Q}var He=Object(Me.b)(Ae||(Ae=we([`
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
  },

  body: {
    margin: 0;
  },

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }
`]))),Pe=function(){return Object(ke.jsx)(Me.a,{styles:He})};Pe.displayName="NormalizeCSS";var _e=e("./node_modules/core-js/modules/es.array.reduce.js");function We(Q,J){return J?Object.keys(Q).reduce(function(ee,ae){if(ae==="typography"&&J.typography){var pe=J.typography?Object.keys(Q.typography).reduce(function(je,he){return je[he]=Object.assign({},Q.typography[he],J.typography[he]),je},{}):Q.typography;return Object.assign({},ee,{typography:Object.assign({},Q.typography,J.typography,pe)})}return ee[ae]=typeof J[ae]=="object"?Object.assign({},Q[ae],J[ae]):J[ae]||Q[ae],ee},{}):Q}var Re=Object(K.createContext)({theme:Oe,styles:{},emotionOptions:{key:"co",prepend:!0}});function Ee(){var Q;return((Q=Object(K.useContext)(Re))===null||Q===void 0?void 0:Q.theme)||Oe}function Ue(){var Q;return((Q=Object(K.useContext)(Re))===null||Q===void 0?void 0:Q.styles)||{}}function se(){var Q;return((Q=Object(K.useContext)(Re))===null||Q===void 0?void 0:Q.emotionOptions)||{key:"co",prepend:!0}}var ne=function(){return Object(ke.jsx)(Ve,{styles:function(ee){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:ee.fontFamily,backgroundColor:ee.colorScheme==="dark"?ee.colors.black:ee.colors.white,color:ee.colorScheme==="dark"?ee.colors.white:ee.colors.black,lineHeight:ee.lineHeight,fontSizes:ee.fontSizes.body3}}}})};ne.displayName="GlobalStyles";var le=function(J){var ee=J.theme,ae=J.styles,pe=ae===void 0?{}:ae,je=J.emotionOptions,he=J.withNormalizeCSS,Le=he===void 0?!1:he,Ie=J.withGlobalStyles,Ke=Ie===void 0?!1:Ie,Ge=J.children;return Object(ke.jsxs)(Re.Provider,{value:{theme:We(ee.colorScheme==="dark"?Ne:Oe,ee),styles:pe,emotionOptions:je},children:[Le&&Object(ke.jsx)(Pe,{}),Ke&&Object(ke.jsx)(ne,{}),Ge]})};le.displayName="TmProvider",le.displayName="@travelmakers-design-v2/styles/TmProvider"},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return k});var K=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./node_modules/core-js/modules/es.array.for-each.js"),G=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),d=e("./node_modules/core-js/modules/es.symbol.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),R=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),n=e("./node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/core-js/modules/es.array.from.js");function j(x,_){return v(x)||o(x,_)||f(x,_)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(x,_){if(x){if(typeof x=="string")return r(x,_);var D=Object.prototype.toString.call(x).slice(8,-1);if(D==="Object"&&x.constructor&&(D=x.constructor.name),D==="Map"||D==="Set")return Array.from(x);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return r(x,_)}}function r(x,_){(_==null||_>x.length)&&(_=x.length);for(var D=0,W=new Array(_);D<_;D++)W[D]=x[D];return W}function o(x,_){var D=x==null?null:typeof Symbol!="undefined"&&x[Symbol.iterator]||x["@@iterator"];if(D!=null){var W,B,I,O,l=[],u=!0,a=!1;try{if(I=(D=D.call(x)).next,_===0){if(Object(D)!==D)return;u=!1}else for(;!(u=(W=I.call(D)).done)&&(l.push(W.value),l.length!==_);u=!0);}catch(p){a=!0,B=p}finally{try{if(!u&&D.return!=null&&(O=D.return(),Object(O)!==O))return}finally{if(a)throw B}}return l}}function v(x){if(Array.isArray(x))return x}function y(x){var _={};return Object.keys(x).forEach(function(D){var W=j(x[D],2),B=W[0],I=W[1];_[B]=I}),_}var b=e("./node_modules/core-js/modules/es.array.reduce.js");function c(x,_,D){return Object.keys(_).reduce(function(W,B){return W[B]=x(_[B],D?"tm-"+D+"-"+B:null),W},{})}var T=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function k(x){var _=typeof x=="function"?x:function(){return x};function D(W,B){var I=Object(F.c)(),O=Object(F.d)()[B==null?void 0:B.name],l=Object(T.a)(),u=l.css,a=l.cx,p=l.cssRn,s=0;function h(U){return s+=1,"tm-ref_"+(U||"")+"_"+s}var P=_(I,W,h),M=typeof(B==null?void 0:B.overrideStyles)=="function"?B==null?void 0:B.overrideStyles(I):(B==null?void 0:B.overrideStyles)||{},A=typeof O=="function"?O(I):O||{},S=typeof(B==null?void 0:B.tm)=="function"?B.tm(I):B==null?void 0:B.tm,L=y(Object.keys(P).map(function(U){var Y=a(u(P[U]),u(A[U]),u(M[U]),u(S));return[U,Y]}));return{classes:c(a,L,B==null?void 0:B.name),cx:a,theme:I}}return D}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return S});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),d=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/clsx/dist/clsx.m.js"),t=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),n=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),i=e("./node_modules/core-js/modules/es.array.index-of.js"),j=e("./node_modules/core-js/modules/es.array.map.js"),m=e("./node_modules/react/index.js");function f(L){return y(L)||v(L)||o(L)||r()}function r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(L,U){if(L){if(typeof L=="string")return b(L,U);var Y=Object.prototype.toString.call(L).slice(8,-1);if(Y==="Object"&&L.constructor&&(Y=L.constructor.name),Y==="Map"||Y==="Set")return Array.from(L);if(Y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y))return b(L,U)}}function v(L){if(typeof Symbol!="undefined"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}function y(L){if(Array.isArray(L))return b(L)}function b(L,U){(U==null||U>L.length)&&(U=L.length);for(var Y=0,re=new Array(U);Y<U;Y++)re[Y]=L[Y];return re}function c(L,U){var Y=Object(m.useRef)();return(!Y.current||U.length!==Y.current.prevDeps.length||Y.current.prevDeps.map(function(re,ce){return re===U[ce]}).indexOf(!1)>=0)&&(Y.current={v:L(),prevDeps:f(U)}),Y.current.v}var T=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),k=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),x=e("./node_modules/react/jsx-runtime.js"),_=function(){var L;function U(Y){return L===void 0&&(L=Object(T.a)(Y||{key:"co",prepend:!0})),L}return{getCache:U}}(),D=_.getCache,W=Object(m.createContext)(void 0);function B(){var L=Object(k.b)();return Object(m.useContext)(W)||D(L)}function I(L){var U=L.children,Y=L.value;return Object(x.jsx)(W.Provider,{value:Y,children:U})}I.displayName="CacheProvider";function O(L,U){return s(L)||p(L,U)||u(L,U)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(L,U){if(L){if(typeof L=="string")return a(L,U);var Y=Object.prototype.toString.call(L).slice(8,-1);if(Y==="Object"&&L.constructor&&(Y=L.constructor.name),Y==="Map"||Y==="Set")return Array.from(L);if(Y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y))return a(L,U)}}function a(L,U){(U==null||U>L.length)&&(U=L.length);for(var Y=0,re=new Array(U);Y<U;Y++)re[Y]=L[Y];return re}function p(L,U){var Y=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(Y!=null){var re,ce,q,ie,te=[],de=!0,ue=!1;try{if(q=(Y=Y.call(L)).next,U===0){if(Object(Y)!==Y)return;de=!1}else for(;!(de=(re=q.call(Y)).done)&&(te.push(re.value),te.length!==U);de=!0);}catch(fe){ue=!0,ce=fe}finally{try{if(!de&&Y.return!=null&&(ie=Y.return(),Object(ie)!==ie))return}finally{if(ue)throw ce}}return te}}function s(L){if(Array.isArray(L))return L}var h="ref";function P(L){var U;if(L.length!==1)return{args:L,ref:U};var Y=O(L,1),re=Y[0];if(!(re instanceof Object))return{args:L,ref:U};if(!(h in re))return{args:L,ref:U};U=re[h];var ce=Object.assign({},re);return delete ce[h],{args:[ce],ref:U}}var M=function(){function L(Y,re,ce){var q=[],ie=Object(n.a)(Y,q,ce);return q.length<2?ce:ie+re(q)}function U(Y){var re=Y.cache,ce=function(){for(var de=arguments.length,ue=new Array(de),fe=0;fe<de;fe++)ue[fe]=arguments[fe];var ve=P(ue),be=ve.ref,ge=ve.args,xe=Object(t.a)(ge,re.registered);return Object(n.b)(re,xe,!1),re.key+"-"+xe.name+(be===void 0?"":" "+be)},q=function(){for(var de=arguments.length,ue=new Array(de),fe=0;fe<de;fe++)ue[fe]=arguments[fe];var ve=P(ue),be=ve.ref,ge=ve.args,xe=Object(t.a)(ge,re.registered);return Object(n.b)(re,xe,!1),""+re.key+xe.name+(be===void 0?"":" "+be)},ie=function(){for(var de=arguments.length,ue=new Array(de),fe=0;fe<de;fe++)ue[fe]=arguments[fe];return L(re.registered,ce,Object(C.a)(ue))};return{css:ce,cx:ie,cssRn:q}}return{cssFactory:U}}(),A=M.cssFactory;function S(){var L=B();return c(function(){return A({cache:L})},[L])}},"./packages/travelmakers-design-utils/src/getDate/getDate.tsx":function(oe,g,e){"use strict";e.d(g,"d",function(){return R}),e.d(g,"f",function(){return V}),e.d(g,"a",function(){return C}),e.d(g,"e",function(){return t}),e.d(g,"b",function(){return n}),e.d(g,"c",function(){return i});var K=e("./node_modules/core-js/modules/es.date.to-string.js"),$=e.n(K),w=e("./node_modules/dayjs/dayjs.min.js"),F=e.n(w),E=e("./node_modules/dayjs/plugin/timezone.js"),G=e.n(E),z=e("./node_modules/dayjs/plugin/utc.js"),d=e.n(z);F.a.extend(d.a),F.a.extend(G.a);function H(j){return j<10?"0"+j:j}function R(){return F.a}function N(j){var m=j?new Date(j):new Date,f=m.getTime()+m.getTimezoneOffset()*60*1e3,r=9*60*60*1e3,o=new Date(f+r);return o}function V(j){if(!j){var m=F()().tz("Asia/Seoul");return m}var f=F()(j+"+0900").tz("Asia/Seoul");if(!f.isValid()){var r=F()(""+j).tz("Asia/Seoul");return r}return f}function C(j,m){var f=V(j),r=m!=null?m:"/";return f.year()+r+(f.month()+1)+r+f.date()}function t(j,m){var f=V(j),r=m!=null?m:"/";return f.year()+r+(f.month()+1)+r+f.date()+" "+f.hour()+":"+H(f.minute())}function n(j,m){var f=V(j),r=m!=null?m:":";return H(f.hour())+r+H(f.minute())}function i(j){var m=V(j),f=m.day(),r=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];return r[f]+"\uC694\uC77C"}},"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),F=e("./node_modules/react/index.js"),E=e.n(F),G=e("./node_modules/react/jsx-runtime.js"),z=e.n(G),d=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}},d=`import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

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
`,H={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:47},startBody:{col:23,line:35},endBody:{col:1,line:47}}};g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/utils/getDate",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}};var R=function(V){return Object(G.jsxs)("div",{children:["getDate: ",Object(w.a)("2022-12-22T01:37:27.391Z"),Object(G.jsx)("br",{}),"getDateTime: ",Object(w.b)("2022-12-22T01:37:27.391Z"),Object(G.jsx)("br",{}),"getFullDate: ",Object(w.e)("2022-12-22T01:37:27.391Z"),Object(G.jsx)("br",{}),"getDay: ",Object(w.c)("2022-12-22T01:37:27.391Z")]})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},R.parameters)},"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return H});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js");function w(R){switch(R){case"checkout_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_purchase_before":case"reservation_purchase_done":case"checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"day_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"extend_purchase_before":case"extend_purchase_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"extend_checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"reservation_change_process":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_cancel":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!0,callable:!0},reservationChangeButton:{visible:!1,callable:!1}};case"tour_confirm_before":case"tour_confirm":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"tour_cancel":case"tour_done":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};default:return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!0},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}}}}var F=w,E=e("./node_modules/react/jsx-runtime.js"),G=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},G=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:13},startBody:{col:23,line:11},endBody:{col:1,line:13}}},d=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design-v2/utils/getReservationsCallable",argTypes:{state:{}}},H=function(N){return Object(E.jsx)("div",{children:JSON.stringify(w("tour_cancel"))})};H.displayName="Default",H.parameters=Object.assign({storySource:{source:`(props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
}`}},H.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return N});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),F=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function E(V){switch(V){case"default":case"tour_cancel":case"reservation_cancel":return{enum:V,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(){return"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?"},buttonText:function(){return"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"tour_confirm_before":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return t},buttonText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804\uC774\uC608\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"tour_confirm":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return Object(F.a)(Object(w.f)(t))+" \uD22C\uC5B4\uAC00 \uD655\uC815\uB410\uC5B4\uC694"},buttonText:function(){return"\uC57D\uC18D\uC2DC\uAC04\uC5D0 \uAF2D \uBC29\uBB38\uD574\uC8FC\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"tour_done":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(){return"\uD22C\uC5B4\uB294 \uC5B4\uB5A0\uC168\uB098\uC694?"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"reservation_purchase_before":return{enum:V,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(){return"\uC544\uC9C1 \uC785\uAE08\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"reservation_purchase_done":return{enum:V,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(t){return Object(F.a)(Object(w.f)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815\uC774\uC608\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkin_before":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return Object(F.b)(Object(w.f)(t))+" \uCCB4\uD06C\uC778 \uC608\uC815\uC774\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return"\uCCB4\uD06C\uC544\uC6C3\uC740 "+Object(F.b)(Object(w.f)(t))+"\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"checkout_before":return{enum:V,firstLineText:function(t){return""+t},secondLineText:function(t){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+t+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uC5F0\uC7A5\uD558\uC2DC\uACA0\uC5B4\uC694?"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkout_before_n":return{enum:V,firstLineText:function(t){return""+t},secondLineText:function(t){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+t+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(t){return Object(F.b)(Object(w.f)(t))+" \uCCB4\uD06C\uC544\uC6C3 \uC785\uB2C8\uB2E4"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkout_done":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC740 \uC5B4\uB5A0\uC168\uB098\uC694?"},link:function(t){return{url:t,arrow:!!t}},color:"alert"}}}function G(V,C){switch(V){case"default":case"tour_cancel":case"reservation_cancel":return{first:C.first.userName,second:null,buttonText:null};case"tour_confirm_before":return{first:C.first.userName,second:C.second.hotelName,buttonText:null};case"tour_confirm":return{first:C.first.userName,second:C.second.startDate,buttonText:null};case"tour_done":return{first:C.first.userName,second:null,buttonText:null};case"reservation_purchase_before":return{first:C.first.userName,second:C.second.hotelName,buttonText:null};case"reservation_purchase_done":return{first:C.first.userName,second:C.second.hotelName,buttonText:C.buttonText.expectedDate};case"checkin_before":return{first:C.first.userName,second:C.second.startDate,buttonText:null};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{first:C.first.userName,second:C.second.endDate,buttonText:null};case"checkout_before":return{first:C.first.hotelName,second:""+C.second.dDay,buttonText:null};case"checkout_before_n":return{first:C.first.hotelName,second:""+C.second.dDay,buttonText:C.buttonText.endDate};case"checkout_done":return{first:C.first.userName,second:C.second.hotelName,buttonText:null};default:return{first:null,second:null,buttonText:null}}}var z=e("./node_modules/react/jsx-runtime.js"),d=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}},d=`import React from "react";

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
`,H={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:58},startBody:{col:23,line:35},endBody:{col:1,line:58}}},R=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/utils/getTimeLineFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},N=function(C){return Object(z.jsxs)("div",{children:["firstLineText: ",E("default").firstLineText("\uD64D\uAE38\uB3D9"),Object(z.jsx)("br",{}),"secondLineText(default): ",E("default").secondLineText(),Object(z.jsx)("br",{}),"secondLineText(tour_confirm_before):",E("reservation_purchase_before").secondLineText("\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"),Object(z.jsx)("br",{}),"secondLineText(tour_confirm):",E("tour_confirm").secondLineText("2022-09-28T01:26:38.000000Z"),Object(z.jsx)("br",{}),"buttonText: ",E("default").buttonText(),Object(z.jsx)("br",{}),"---- ",Object(z.jsx)("br",{}),"getTimeLineFunc(`state`)"]})};N.displayName="Default",N.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},N.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return V});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),F=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),E=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function G(C){switch(C){case"tour_confirm_before":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_confirm":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_done":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_before":return{enum:C,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(n){if(n){var i=Object(F.a)(n);return i&&i==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":i+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(n){if(n){var i=Object(F.a)(n);return i&&i==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":i+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_done":return{enum:C,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkin_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+n},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"day_n":return{enum:C,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_done":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_checkin_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_change_process":return{enum:C,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before_n":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_done":return{enum:C,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(n){return n},thirdLineText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(n){return{url:n,arrow:!!n}}};case"tour_cancel":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};case"reservation_cancel":return{enum:C,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};default:return{enum:C,firstLineText:function(){return""},secondLineText:function(){return""},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}}}}function z(C,t){switch(C){case"checkout_before":case"checkout_before_n":return{first:""+t.first.dDay,second:t.second.endDate,third:t.third.hotelName};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:t.second.expectedDate,third:t.third.hotelName};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+t.first.dDay,second:t.second.startDate,third:t.third.hotelName};case"day_n":return{first:null,second:t.second.endDate,third:t.third.hotelName};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:t.second.vBankDate,third:t.third.hotelName};case"checkout_done":return{first:null,second:null,third:t.third.hotelName};case"tour_cancel":case"reservation_cancel":return{first:null,second:t.second.cancelDate,third:t.third.hotelName};default:return{first:null,second:null,third:t.third.hotelName}}}var d=e("./node_modules/react/jsx-runtime.js"),H=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}},H=`import React from "react";
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
`,R={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}},N=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},V=function(t){return Object(d.jsx)("div",{children:G("reservation_purchase_before").secondLineText("2022-12-24T02:24:01.616Z")})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":function(oe,g,e){"use strict";e.r(g),e.d(g,"Default",function(){return V});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts"),F=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),E=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function G(C){switch(C){case"tour_confirm_before":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_confirm":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_done":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_before":return{enum:C,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(n){if(n){var i=Object(F.a)(n);return i&&i==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":i+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(n){if(n){var i=Object(F.a)(n);return i&&i==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":i+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_done":return{enum:C,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkin_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+n},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"day_n":return{enum:C,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_done":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_checkin_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_change_process":return{enum:C,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before_n":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};case"checkout_done":return{enum:C,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(n){return n},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(n){return{url:n,arrow:!!n}}};case"tour_cancel":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_cancel":return{enum:C,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};default:return{enum:C,firstLineText:function(){return""},secondLineText:function(){return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}}}}function z(C,t){switch(C){case"checkout_before":case"checkout_before_n":return{first:""+t.first.dDay,second:t.second.endDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:t.second.expectedDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+t.first.dDay,second:t.second.startDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"day_n":return{first:null,second:t.second.endDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:t.second.vBankDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"checkout_done":return{first:null,second:null,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_cancel":case"reservation_cancel":return{first:null,second:t.second.cancelDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};default:return{first:null,second:null,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType}}}var d=e("./node_modules/react/jsx-runtime.js"),H=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}},H=`import React from "react";

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
`,R={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:43},startBody:{col:23,line:35},endBody:{col:1,line:43}}},N=g.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},V=function(t){return Object(d.jsx)("div",{children:G("reservation_purchase_before").secondLineText("2023-02-08T23:24:01.616Z")})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-utils/src/utils/getCountDown.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return t});var K=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.regexp.to-string.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.date.to-string.js"),G=e.n(E),z=e("./node_modules/core-js/modules/es.string.pad-start.js"),d=e.n(z),H=e("./node_modules/core-js/modules/es.string.replace.js"),R=e.n(H),N=e("./node_modules/core-js/modules/es.regexp.exec.js"),V=e.n(N),C=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function t(n){var i="HH\uC2DC\uAC04 mm\uBD84",j=Object(C.f)(n),m=1e3,f=m*60,r=f*60,o=r*24,v=function(){var b=j.toDate().getTime()-Object(C.f)().toDate().getTime(),c={days:"0",hours:"0",minutes:"0",seconds:"0"};return b>0&&(c={days:Math.floor(b/o).toString(),hours:Math.floor(b/r%24).toString(),minutes:Math.floor(b/m/60%60).toString().padStart(2,"0"),seconds:Math.floor(b/m%60).toString().padStart(2,"0")}),!j||!c?"":i.replace("D",c.days).replace("HH",c.hours).replace("mm",c.minutes).replace("ss",c.seconds)};return v()}},"./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts":function(oe,g,e){"use strict";e.d(g,"a",function(){return $}),e.d(g,"b",function(){return w});function K(F){return F<10?"0"+F:F}function $(F,E){var G=F;return E?G.month()+1+"\uC6D4 "+G.date()+"\uC77C "+G.hour()+":"+K(G.minute()):G.month()+1+"\uC6D4 "+G.date()+"\uC77C "}function w(F){var E=F;return E.month()+1+"\uC6D4 "+E.date()+"\uC77C "+E.hour()+"\uC2DC"}},"./storybook-init-framework-entry.js":function(oe,g,e){"use strict";e.r(g);var K=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,g,e){e("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,g){}},[[0,4,5]]]);
