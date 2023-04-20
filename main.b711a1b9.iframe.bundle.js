(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,f,e){"use strict";e.r(f);var K={};e.r(K),e.d(K,"parameters",function(){return d}),e.d(K,"decorators",function(){return m});var $=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.array.filter.js"),E=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Y=e("./node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),c=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),W=e("./node_modules/core-js/modules/es.object.define-properties.js"),R=e("./node_modules/core-js/modules/es.object.define-property.js"),N=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),C=e("./node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/core-js/modules/es.object.to-string.js"),n=e("./node_modules/core-js/modules/es.symbol.iterator.js"),s=e("./node_modules/core-js/modules/es.string.iterator.js"),v=e("./node_modules/core-js/modules/es.array.iterator.js"),p=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e("./node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),b=e("./node_modules/react/jsx-runtime.js");function j(M,A){return T(M)||_(M,A)||O(M,A)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(M,A){if(M){if(typeof M=="string")return L(M,A);var S=Object.prototype.toString.call(M).slice(8,-1);if(S==="Object"&&M.constructor&&(S=M.constructor.name),S==="Map"||S==="Set")return Array.from(M);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return L(M,A)}}function L(M,A){(A==null||A>M.length)&&(A=M.length);for(var S=0,k=new Array(A);S<A;S++)k[S]=M[S];return k}function _(M,A){var S=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(S!=null){var k,H,G,re,ce=[],q=!0,ie=!1;try{if(G=(S=S.call(M)).next,A===0){if(Object(S)!==S)return;q=!1}else for(;!(q=(k=G.call(S)).done)&&(ce.push(k.value),ce.length!==A);q=!0);}catch(te){ie=!0,H=te}finally{try{if(!q&&S.return!=null&&(re=S.return(),Object(re)!==re))return}finally{if(ie)throw H}}return ce}}function T(M){if(Array.isArray(M))return M}var D=Object(g.createContext)(null),U=function(){var A=Object(g.useContext)(D);if(!A)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return A},B=function(A){var S=A.colorScheme,k=A.toggleColorScheme,H=A.children,G=Object(g.useState)("init"),re=j(G,2),ce=re[0],q=re[1];return Object(g.useEffect)(function(){q("update")},[]),Object(b.jsx)(D.Provider,{value:{colorScheme:S,toggleColorScheme:k},children:H},ce)};B.displayName="ColorSchemeProvider",B.displayName="@travelmakers-design-v2/styles/ColorSchemeProvider";var I=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),x=e("./node_modules/@storybook/theming/dist/esm/index.js"),a=e("./node_modules/storybook-dark-mode/dist/index.js"),d={layout:"fullscreen",docs:{theme:x.themes.light},darkMode:{current:"dark"}};function r(M){var A=Object(a.useDarkMode)()?"dark":"light";return Object(b.jsx)(B,{colorScheme:A,toggleColorScheme:function(){},children:Object(b.jsx)(I.a,{theme:{colorScheme:A},withGlobalStyles:!0,withNormalizeCSS:!0,children:M.children})})}r.displayName="ThemeWrapper";var m=[function(M){return Object(b.jsx)(r,{children:M()})}];function o(M,A){var S=Object.keys(M);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(M);A&&(k=k.filter(function(H){return Object.getOwnPropertyDescriptor(M,H).enumerable})),S.push.apply(S,k)}return S}function h(M){for(var A=1;A<arguments.length;A++){var S=arguments[A]!=null?arguments[A]:{};A%2?o(Object(S),!0).forEach(function(k){P(M,k,S[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(S)):o(Object(S)).forEach(function(k){Object.defineProperty(M,k,Object.getOwnPropertyDescriptor(S,k))})}return M}function P(M,A,S){return A in M?Object.defineProperty(M,A,{value:S,enumerable:!0,configurable:!0,writable:!0}):M[A]=S,M}Object.keys(K).forEach(function(M){var A=K[M];switch(M){case"args":return Object(N.d)(A);case"argTypes":return Object(N.b)(A);case"decorators":return A.forEach(function(k){return Object(N.f)(k,!1)});case"loaders":return A.forEach(function(k){return Object(N.g)(k,!1)});case"parameters":return Object(N.h)(h({},A),!1);case"argTypesEnhancers":return A.forEach(function(k){return Object(N.c)(k)});case"argsEnhancers":return A.forEach(function(k){return Object(N.e)(k)});case"render":return Object(N.i)(A);case"globals":case"globalTypes":{var S={};return S[M]=A,Object(N.h)(S,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(M+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,f,e){"use strict";(function(K){var $=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,$.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],K,!1)}).call(this,e("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,f,e){var K={"./travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx","./travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx","./travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx","./travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx","./travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx","./travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx","./travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx","./travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx","./travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx","./travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx","./travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx","./travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx","./travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx":"./packages/travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx":"./packages/travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx","./travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx","./travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx","./travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx":"./packages/travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx","./travelmakers-design-core/src/components/Search/stories/Search.stories.tsx":"./packages/travelmakers-design-core/src/components/Search/stories/Search.stories.tsx","./travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx","./travelmakers-design-core/src/components/TextArea/stories/TextArea.stories.tsx":"./packages/travelmakers-design-core/src/components/TextArea/stories/TextArea.stories.tsx","./travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx":"./packages/travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx":"./packages/travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx","./travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx","./travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx"};function $(F){var E=w(F);return e(E)}function w(F){if(!e.o(K,F)){var E=new Error("Cannot find module '"+F+"'");throw E.code="MODULE_NOT_FOUND",E}return K[F]}$.keys=function(){return Object.keys(K)},$.resolve=w,oe.exports=$,$.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx":function(oe,f,e){"use strict";e.d(f,"b",function(){return t}),e.d(f,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(s){return{root:{margin:0}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["gap","type","className","children"];function V(s,v){if(s==null)return{};var p=C(s,v),y,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(i=0;i<l.length;i++)y=l[i],!(v.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(s,y)&&(p[y]=s[y])}return p}function C(s,v){if(s==null)return{};var p={},y=Object.keys(s),i,l;for(l=0;l<y.length;l++)i=y[l],!(v.indexOf(i)>=0)&&(p[i]=s[i]);return p}var t=Object(E.createContext)({type:"small",gap:4});t.displayName="AccordionContext";var n=Object(E.forwardRef)(function(s,v){var p=s.gap,y=p===void 0?4:p,i=s.type,l=i===void 0?"small":i,g=s.className,b=s.children,j=V(s,N),u=W(),O=u.classes,L=u.cx;return Object(R.jsx)(t.Provider,{value:{type:l,gap:y},children:Object(R.jsx)(Y.a,Object.assign({component:"dl",ref:v,className:L(O.root,g)},j,{children:b}))})});n.Item=z.a,n.displayName="Accordion"},"./packages/travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Small",function(){return N}),e.d(f,"Medium",function(){return V});var K=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.object.assign.js"),F=e.n(w),E=e("./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx"),Y=e("./node_modules/react/jsx-runtime.js"),z=e.n(Y),c=`
    
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
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,W={Small:{startLoc:{col:21,line:57},endLoc:{col:1,line:71},startBody:{col:21,line:57},endBody:{col:1,line:71}},Medium:{startLoc:{col:22,line:73},endLoc:{col:1,line:87},startBody:{col:22,line:73},endBody:{col:1,line:87}}},c=`import { Meta } from "@storybook/react";
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
`,W={Small:{startLoc:{col:21,line:49},endLoc:{col:1,line:63},startBody:{col:21,line:49},endBody:{col:1,line:63}},Medium:{startLoc:{col:22,line:65},endLoc:{col:1,line:79},startBody:{col:22,line:65},endBody:{col:1,line:79}}};f.default={parameters:{storySource:{source:`
    
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
\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"}],N=function(t){return Object(Y.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(Y.jsx)(E.a,Object.assign({},t,{children:R.map(function(n){return Object(Y.jsx)(E.a.Item,{header:n.question,content:n.answer},n.id)})}))})};N.displayName="Small";var V=function(t){return Object(Y.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(Y.jsx)(E.a,Object.assign({type:"medium"},t,{children:R.map(function(n){return Object(Y.jsx)(E.a.Item,{header:n.question,content:n.answer},n.id)})}))})};V.displayName="Medium",N.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},V.parameters)},"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return x});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),c=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),v=e("./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx"),p=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),y={small:"40px",medium:"56px"},i={small:"subhead2",medium:"subhead1"},l=function(d,r){switch(r){case"small":return{padding:d.spacing.spacing10+" "+d.spacing.spacing30};case"medium":return{padding:""+d.spacing.spacing30};default:return}},g=Object(p.a)(function(a,d){var r,m=d.type,o=d.gap,h=d.isCollapse,P=h===void 0?!0:h,M=a.colors,A=a.radius,S=a.typography,k=a.spacing;return{item:(r={maxHeight:""+(P?y[m]:"auto"),marginBottom:o+"px",color:""+M.primary1,borderRadius:A.radius20,backgroundColor:M.white,overflow:"hidden"},r["&:last-child"]={marginBottom:0},r),header:Object.assign({display:"flex",alignItems:"center",justifyContent:"space-between",height:y[m]},l(a,m),S[i[m]],{fontWeight:700,cursor:"pointer"}),icon:{transform:""+(!P&&"rotate(180deg)")},detail:{margin:0},divider:{height:"1px",margin:"0 "+k.spacing30,backgroundColor:M.outline},content:Object.assign({margin:0},l(a,m),S[i.small])}}),b=e("./node_modules/react/jsx-runtime.js"),j=["header","content","handleHeader"];function u(a,d){return D(a)||T(a,d)||L(a,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(a,d){if(a){if(typeof a=="string")return _(a,d);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(a,d)}}function _(a,d){(d==null||d>a.length)&&(d=a.length);for(var r=0,m=new Array(d);r<d;r++)m[r]=a[r];return m}function T(a,d){var r=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var m,o,h,P,M=[],A=!0,S=!1;try{if(h=(r=r.call(a)).next,d===0){if(Object(r)!==r)return;A=!1}else for(;!(A=(m=h.call(r)).done)&&(M.push(m.value),M.length!==d);A=!0);}catch(k){S=!0,o=k}finally{try{if(!A&&r.return!=null&&(P=r.return(),Object(P)!==P))return}finally{if(S)throw o}}return M}}function D(a){if(Array.isArray(a))return a}function U(a,d){if(a==null)return{};var r=B(a,d),m,o;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(o=0;o<h.length;o++)m=h[o],!(d.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(a,m)&&(r[m]=a[m])}return r}function B(a,d){if(a==null)return{};var r={},m=Object.keys(a),o,h;for(h=0;h<m.length;h++)o=m[h],!(d.indexOf(o)>=0)&&(r[o]=a[o]);return r}var I={small:16,medium:24},x=function(d){var r=d.header,m=d.content,o=d.handleHeader,h=U(d,j),P=Object(n.useState)(!0),M=u(P,2),A=M[0],S=M[1],k=Object(n.useContext)(v.b),H=k.type,G=k.gap,re=g({type:H,gap:G,isCollapse:A}),ce=re.classes,q=re.cx,ie=function(){S(function(de){return!de}),o==null||o()};return Object(b.jsxs)("div",Object.assign({className:ce.item},h,{children:[Object(b.jsxs)("dt",{className:ce.header,onClick:ie,children:[r,Object(b.jsx)(s.a,{className:q(ce.icon),src:"IcAngleDown",width:I[H]})]}),Object(b.jsxs)("dd",{className:ce.detail,children:[Object(b.jsx)("div",{className:ce.divider}),Object(b.jsx)("p",{className:ce.content,children:m})]})]}))};x.displayName="AccordionItem",x.displayName="AccordionItem"},"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:47},startBody:{col:23,line:37},endBody:{col:1,line:47}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:39},startBody:{col:23,line:29},endBody:{col:1,line:39}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:47},startBody:{col:23,line:37},endBody:{col:1,line:47}}}}},title:"@travelmakers-design-v2/core/General/Accoridion/AccordionItem",component:w.a,argTypes:{header:{control:{type:"text"},description:"AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}}},content:{control:{type:"text"},description:"AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}}}}};var c=function(R){return Object(F.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(F.jsx)(w.a,Object.assign({header:"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?",content:"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."},R))})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <AccordionItem
        header={"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?"}
        content={"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."}
        {...props}
      />
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return i});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),c=function(g,b,j){if(b!=="bullet")switch(j){case"small":return g.typography.caption;case"medium":return g.typography.body3;case"large":return g.typography.body2;default:break}},W=function(g,b){switch(b){case"text":return{display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,borderRadius:"6px"};case"number":return{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0 "+g.spacing.spacing10,borderRadius:g.radius.radius100};case"bullet":return{borderRadius:g.radius.radius100};default:break}},R=function(g,b,j){var u={text:{small:{width:"16px",height:"16px"},medium:{width:"20px",height:"20px"},large:{width:"24px",height:"24px"},xLarge:{}},number:{small:{height:"16px"},medium:{height:"20px"},large:{height:"24px"},xLarge:{}},bullet:{small:{width:"8px",height:"8px"},medium:{width:"16px",height:"16px"},large:{width:"20px",height:"20px"},xLarge:{width:"24px",height:"24px"}}};return Object.assign({},u[b][j],W(g,b))},N=Object(z.a)(function(l,g){var b=g.type,j=g.size,u=l.colors;return{badge:Object.assign({color:u.onError,backgroundColor:u.error},R(l,b,j),c(l,b,j))}}),V=e("./node_modules/react/jsx-runtime.js"),C=["type","size","className","component","label"];function t(l,g){if(l==null)return{};var b=n(l,g),j,u;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(l);for(u=0;u<O.length;u++)j=O[u],!(g.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(l,j)&&(b[j]=l[j])}return b}function n(l,g){if(l==null)return{};var b={},j=Object.keys(l),u,O;for(O=0;O<j.length;O++)u=j[O],!(g.indexOf(u)>=0)&&(b[u]=l[u]);return b}var s=Object(E.forwardRef)(function(l,g){var b=l.type,j=l.size,u=l.className,O=l.component,L=l.label,_=t(l,C);Object(E.useEffect)(function(){b!=="bullet"&&j==="xLarge"&&console.error('"xLarge" size\uB294 type\uC774 "bullet"\uC758 \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.')},[b,j]);var T=N({type:b,size:j}),D=T.classes,U=T.cx,B=function(){return!L&&b==="text"?"N":!L&&b==="number"?0:L};return Object(V.jsx)(Y.a,Object.assign({component:O||"div",ref:g,className:U(D.badge,u)},_,{children:B()}))});s.displayName="DotBadge";var v=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}},v=`import { Meta } from "@storybook/react";
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
`,p={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},y=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}}}},title:"@travelmakers-design-v2/core/General/Badge/DotBadge",component:s,argTypes:{type:{control:{type:"radio",options:["text","number","bullet"]},defaultValue:"text",description:"DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","medium","large","xLarge"]},defaultValue:"small",description:"DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},i=function(g){return Object(V.jsx)(s,Object.assign({type:"text",size:"medium"},g))};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return <DotBadge type="text" size="medium" {...props} />;
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return t});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(n){var s=n.colors,v=n.typography;return{root:Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",color:s.primary3,columnGap:"3px"},v.body3),vertical:{width:"1px",height:"10px",backgroundColor:s.primary3}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","grade","hotelType","className"];function V(n,s){if(n==null)return{};var v=C(n,s),p,y;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(y=0;y<i.length;y++)p=i[y],!(s.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(n,p)&&(v[p]=n[p])}return v}function C(n,s){if(n==null)return{};var v={},p=Object.keys(n),y,i;for(i=0;i<p.length;i++)y=p[i],!(s.indexOf(y)>=0)&&(v[y]=n[y]);return v}var t=Object(E.forwardRef)(function(n,s){var v=n.type,p=n.grade,y=n.hotelType,i=n.className,l=V(n,N),g=W(),b=g.classes,j=g.cx,u=function(){if(v==="grade")return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Y.a,{src:"IcStar",width:16,height:16}),p+"\uC131\uAE09",Object(R.jsx)("div",{className:b.vertical}),y!=null?y:"\uD638\uD154"]});if(v==="minihotel")return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Y.a,{src:"IcHotelTypeMini",width:16,height:16}),Object(R.jsx)("div",{className:b.vertical}),y!=null?y:"\uBBF8\uB2C8\uD638\uD154"]});if(v==="residence")return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Y.a,{src:"IcHotelTypeResidence",width:16,height:16}),Object(R.jsx)("div",{className:b.vertical}),y!=null?y:"\uB808\uC9C0\uB358\uC2A4"]})};return Object(R.jsx)(z.a,Object.assign({component:"div",ref:s,className:j(b.root,i)},l,{children:u()}))});t.displayName="GradeBadge"},"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:48},endLoc:{col:1,line:50},startBody:{col:23,line:48},endBody:{col:1,line:50}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:42},startBody:{col:23,line:40},endBody:{col:1,line:42}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:48},endLoc:{col:1,line:50},startBody:{col:23,line:48},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/core/General/Badge/GradeBadge",component:w.a,argTypes:{type:{control:{type:"radio",options:["grade","minihotel","residence"]},defaultValue:"grade",description:"GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},grade:{control:{type:"select",options:[1,2,3,4,5]},defaultValue:5,description:"\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}}},hotelType:{control:{type:"string"},description:"\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var c=function(R){return Object(F.jsx)(w.a,Object.assign({type:"grade"},R))};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return <GradeBadge type={"grade"} {...props} />;
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return i});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W={small:"28px",medium:"34px"},R=Object(c.a)(function(l,g){var b=g.type,j=l.colors,u=l.spacing;return{root:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:W[b],padding:"0 "+u.spacing30,backgroundColor:j.secondary}}}),N=e("./node_modules/react/jsx-runtime.js"),V=["type","className","component","children"];function C(l,g){if(l==null)return{};var b=t(l,g),j,u;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(l);for(u=0;u<O.length;u++)j=O[u],!(g.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(l,j)&&(b[j]=l[j])}return b}function t(l,g){if(l==null)return{};var b={},j=Object.keys(l),u,O;for(O=0;O<j.length;O++)u=j[O],!(g.indexOf(u)>=0)&&(b[u]=l[u]);return b}var n={small:"display6",medium:"display4"},s=Object(E.forwardRef)(function(l,g){var b=l.type,j=l.className,u=l.component,O=l.children,L=C(l,V),_=R({type:b}),T=_.classes,D=_.cx;return Object(N.jsx)(z.a,Object.assign({component:u||"div",ref:g,className:D(T.root,j)},L,{children:Object(N.jsx)(Y.a,{family:"Noto Serif KR",level:n[b],color:"white",children:O||"New"})}))});s.displayName="NewBadge";var v=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},v=`import { Meta } from "@storybook/react";
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
`,p={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},y=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design-v2/core/General/Badge/NewBadge",component:s,argTypes:{type:{control:{type:"radio",options:["small","medium"]},defaultValue:"small",description:"\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},i=function(g){return Object(N.jsx)(s,Object.assign({type:"small"},g))};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return <NewBadge type="small" {...props} />;
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Small",function(){return A});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),E=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),c=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/core-js/modules/es.array.iterator.js"),V=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),C=e("./node_modules/core-js/modules/es.array.slice.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/core-js/modules/es.array.map.js"),s=e("./node_modules/core-js/modules/es.function.name.js"),v=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),p=e("./node_modules/react/index.js"),y=e("./node_modules/next/link.js"),i=e.n(y),l=e("./node_modules/react/jsx-runtime.js"),g=function(k){var H;return Object(l.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k,{children:Object(l.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77041 12.1824C6.42649 12.4149 6.22223 12.7914 6.22223 13.1928V23.9181C6.22223 24.9452 7.09776 25.7778 8.17779 25.7778H12.8148C13.6739 25.7778 14.3704 25.0813 14.3704 24.2222V22.5185C14.3704 21.6185 15.1 20.8889 16 20.8889C16.9 20.8889 17.6296 21.6185 17.6296 22.5185V24.2222C17.6296 25.0813 18.3261 25.7778 19.1852 25.7778H23.8222C24.9023 25.7778 25.7778 24.9452 25.7778 23.9181V13.1928C25.7778 12.7914 25.5735 12.4149 25.2296 12.1824L16.7555 6.45165C16.3032 6.14576 15.6968 6.14575 15.2445 6.45165L6.77041 12.1824Z",fill:(H=k.color)!==null&&H!==void 0?H:"#BABABA"})}))};g.displayName="IconHome";var b=function(k){var H;return Object(l.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k,{children:Object(l.jsx)("path",{d:"M20.1893 20.2214L24.8889 24.8889M22.4985 14.7588C22.4985 18.9825 19.0539 22.4064 14.8048 22.4064C10.5557 22.4064 7.11111 18.9825 7.11111 14.7588C7.11111 10.5351 10.5557 7.11111 14.8048 7.11111C19.0539 7.11111 22.4985 10.5351 22.4985 14.7588Z",stroke:(H=k.color)!==null&&H!==void 0?H:"#BABABA","stroke-width":"2","stroke-linecap":"round"})}))};b.displayName="IconSearch";var j=function(k){var H,G;return Object(l.jsxs)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k,{children:[Object(l.jsx)("path",{d:"M7.11112 24.6155C7.11112 24.5764 7.11112 24.5375 7.11112 24.4987C7.11111 23.2776 7.17233 22.0401 7.60385 20.8978C8.7515 17.86 11.4435 15.1111 16 15.1111C20.5565 15.1111 23.2484 17.8599 24.3961 20.8977C24.8277 22.04 24.8889 23.2777 24.8889 24.4988C24.8889 24.5376 24.8889 24.5765 24.8889 24.6155C24.8889 25.2574 24.4519 25.7778 23.9129 25.7778H8.08715C7.5481 25.7778 7.11112 25.2574 7.11112 24.6155Z",fill:(H=k.color)!==null&&H!==void 0?H:"#BABABA"}),Object(l.jsx)("circle",{cx:"16",cy:"9.77778",r:"3.55556",fill:(G=k.color)!==null&&G!==void 0?G:"#BABABA"})]}))};j.displayName="IconMypage";var u=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),O=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function _(S){if(S==null)throw new TypeError("Cannot destructure "+S)}var T=Object(L.a)(function(S,k,H){var G;return _(k),{root:{backgroundColor:S.colors.neutral99,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:S.spacing.spacing10+" "+S.spacing.spacing50,gap:"80px",height:"64px",width:"100%",a:{textDecoration:"none"}},item:(G={display:"flex",flexDirection:"column",alignItems:"center",height:"48px"},G["& > svg"]={width:"32px",height:"32px"},G)}}),D=["onClick","initSelectedId","children","component","className","overrideStyles","links"];function U(S,k){return d(S)||a(S,k)||I(S,k)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(S,k){if(S){if(typeof S=="string")return x(S,k);var H=Object.prototype.toString.call(S).slice(8,-1);if(H==="Object"&&S.constructor&&(H=S.constructor.name),H==="Map"||H==="Set")return Array.from(S);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return x(S,k)}}function x(S,k){(k==null||k>S.length)&&(k=S.length);for(var H=0,G=new Array(k);H<k;H++)G[H]=S[H];return G}function a(S,k){var H=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(H!=null){var G,re,ce,q,ie=[],te=!0,de=!1;try{if(ce=(H=H.call(S)).next,k===0){if(Object(H)!==H)return;te=!1}else for(;!(te=(G=ce.call(H)).done)&&(ie.push(G.value),ie.length!==k);te=!0);}catch(ue){de=!0,re=ue}finally{try{if(!te&&H.return!=null&&(q=H.return(),Object(q)!==q))return}finally{if(de)throw re}}return ie}}function d(S){if(Array.isArray(S))return S}function r(S,k){if(S==null)return{};var H=m(S,k),G,re;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(S);for(re=0;re<ce.length;re++)G=ce[re],!(k.indexOf(G)>=0)&&Object.prototype.propertyIsEnumerable.call(S,G)&&(H[G]=S[G])}return H}function m(S,k){if(S==null)return{};var H={},G=Object.keys(S),re,ce;for(ce=0;ce<G.length;ce++)re=G[ce],!(k.indexOf(re)>=0)&&(H[re]=S[re]);return H}var o=Object(p.forwardRef)(function(S,k){var H=S.onClick,G=S.initSelectedId,re=G===void 0?0:G,ce=S.children,q=S.component,ie=S.className,te=S.overrideStyles,de=S.links,ue=de===void 0?[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}]:de,fe=r(S,D),ve=Object(v.c)(),be=Object(p.useState)(re),ge=U(be,2),xe=ge[0],Ce=ge[1],De=Object(p.useState)("neutral70"),Te=U(De,2),Be=Te[0],Oe=Te[1],Ne=Object(p.useState)("neutral70"),Me=U(Ne,2),ke=Me[0],Ve=Me[1],Ae=Object(p.useState)("neutral70"),we=U(Ae,2),He=we[0],Pe=we[1],_e=[Be,ke,He],We=[Oe,Ve,Pe],Re=T({},{overrideStyles:te,name:"BottomBar"}),Ee=Re.classes,Ue=Re.cx,se=[{icon:Object(l.jsx)(g,{color:xe===0?ve.colors.secondary:ve.colors[Be]})},{icon:Object(l.jsx)(b,{color:xe===1?ve.colors.secondary:ve.colors[ke]})},{icon:Object(l.jsx)(j,{color:xe===2?ve.colors.secondary:ve.colors[He]})}],ne=function(Q,J){J!==xe&&We[J](Q)};return Object(l.jsx)(O.a,Object.assign({component:q||"div",ref:k,className:Ue(Ee.root,ie)},fe,{children:se==null?void 0:se.map(function(le,Q){return Object(l.jsxs)(i.a,{onClick:function(){Ce(Q),H==null||H(Q)},href:ue[Q].url,className:Ue(Ee.item),onMouseOver:function(){return ne("primary",Q)},onMouseLeave:function(){return ne("neutral70",Q)},onMouseDown:function(){return ne("primaryInteract",Q)},onMouseUp:function(){return ne("neutral70",Q)},children:[le.icon,Object(l.jsx)(u.a,{level:"caption",color:xe===Q?"secondary":_e[Q],children:ue[Q].name})]})})}))});o.displayName="BottomBar";var h=`
    
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
`,P={Small:{startLoc:{col:21,line:60},endLoc:{col:1,line:66},startBody:{col:21,line:60},endBody:{col:1,line:66}}},M=f.default={title:"@travelmakers-design-v2/core/General/BottomBar",component:o,argTypes:{initSelectedId:{defaultValue:0,description:"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},links:{defaultValue:[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}],description:"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}}},parameters:{storySource:{source:`
    
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



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n}" }, ...Small.parameters };`,locationsMap:{small:{startLoc:{col:21,line:68},endLoc:{col:1,line:74},startBody:{col:21,line:68},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)($.g,{}),Object(l.jsx)($.f,{}),Object(l.jsx)($.b,{}),Object(l.jsx)($.d,{}),Object(l.jsx)($.a,{story:$.c}),Object(l.jsx)($.e,{})]})}}}},A=function(k){return Object(l.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(l.jsx)(o,Object.assign({},k))})};A.displayName="Small",A.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
}`}},A.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W={small:28,medium:40,large:48},R=Object(c.a)(function(s,v){var p,y=v.size,i=v.variant,l=v.fullWidth,g=v.roundness,b=s.radius,j=s.spacing,u=s.colors,O=s.palettes,L=s.shadows,_=i==="secondary",T=i==="text";return{root:{width:l&&"100%",height:W[y],padding:T?0:"0 "+j.spacing50,borderRadius:g?b.radius100:b.radius20,cursor:"pointer"},inner:{display:"flex",gap:j.spacing10,alignItems:"center",justifyContent:"center"},icon:{display:"flex",alignItems:"center"},label:{whiteSpace:"nowrap",overflow:"hidden",display:"flex",alignItems:"center"},solid:(p={color:O[i][5],backgroundColor:O[i][0],border:_?"1px solid "+u.primary:"none"},p[":not(:disabled)"]={"&:hover":{boxShadow:T?L.none:L.elevation1,filter:T?"drop-shadow("+L.elevation1+")":L.none},"&:focus-visible":{color:O[i][4],boxShadow:T?L.none:L.elevation1},"&:active":{color:O[i][4],backgroundColor:O[i][1],boxShadow:L.none+" !important"}},p["&:disabled"]={backgroundColor:O[i][2],border:_?"1px solid "+O[i][3]:"none",color:O[i][3],cursor:"auto"},p)}}),N=e("./node_modules/react/jsx-runtime.js"),V=["size","variant","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","children"];function C(s,v){if(s==null)return{};var p=t(s,v),y,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(i=0;i<l.length;i++)y=l[i],!(v.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(s,y)&&(p[y]=s[y])}return p}function t(s,v){if(s==null)return{};var p={},y=Object.keys(s),i,l;for(l=0;l<y.length;l++)i=y[l],!(v.indexOf(i)>=0)&&(p[i]=s[i]);return p}var n=Object(E.forwardRef)(function(s,v){var p=s.size,y=p===void 0?"small":p,i=s.variant,l=i===void 0?"primary":i,g=s.roundness,b=g===void 0?!1:g,j=s.fullWidth,u=j===void 0?!1:j,O=s.type,L=O===void 0?"button":O,_=s.disabled,T=_===void 0?!1:_,D=s.leftIcon,U=D===void 0?"":D,B=s.rightIcon,I=B===void 0?"":B,x=s.className,a=s.children,d=C(s,V),r=R({size:y,variant:l,fullWidth:u,roundness:b}),m=r.classes,o=r.cx;return Object(N.jsx)(z.a,Object.assign({component:"button",ref:v,type:L,disabled:T,className:o(m.root,m.solid,x)},d,{children:Object(N.jsxs)("div",{className:m.inner,children:[U&&Object(N.jsx)("span",{className:o(m.icon),children:U}),Object(N.jsx)(Y.a,{level:y==="small"?"body3":y==="medium"?"body2":"body1",className:m.label,children:a}),I&&Object(N.jsx)("span",{className:o(m.icon),children:I})]})}))});n.displayName="Button"},"./packages/travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return W});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),F=e("./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx"),E=e("./node_modules/react/jsx-runtime.js"),Y=e.n(E),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}},z=`import {
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
`,c={Default:{startLoc:{col:23,line:110},endLoc:{col:1,line:116},startBody:{col:23,line:110},endBody:{col:1,line:116}}};f.default={title:"@travelmakers-design-v2/core/General/Button",component:F.a,argTypes:{size:{defaultValue:"small",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary","error","tonal","text"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w.g,{}),Object(E.jsx)(w.f,{}),Object(E.jsx)(w.b,{}),Object(E.jsx)(w.d,{}),Object(E.jsx)(w.a,{story:w.c}),Object(E.jsx)(w.e,{})]})}},actions:{handles:["click button"]}}};var W=function(N){return Object(E.jsx)("div",{style:{margin:"0 auto"},children:Object(E.jsx)(F.a,Object.assign({},N,{children:"Button"}))})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},W.parameters)},"./packages/travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Icon",function(){return j});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),E=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./node_modules/react/index.js"),c=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),W=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),R=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N,V,C={small:(N={width:"24px",height:"24px"},N["& > svg"]={width:"12px"},N),medium:(V={width:"32px",height:"32px"},V["& > svg"]={width:"16px"},V)},t=Object(R.a)(function(u,O){var L,_=O.size,T=O.variant,D=O.buttonTheme,U=function(d){switch(d){case"active":return I();case"disabled":return x();default:return B()}},B=function(){return T==="secondary"?{backgroundColor:u.colors.transparent,border:"1px solid "+(D==="light"?u.colors.white:u.colors.primary)}:D==="dark"?{backgroundColor:u.colors.primary,border:"none"}:{backgroundColor:u.colors.white,border:"none"}},I=function(){return T==="secondary"?{backgroundColor:u.colors.transparent,border:"1px solid "+(D==="light"?u.colors.surface:u.colors.primaryInteract)}:D==="dark"?{backgroundColor:u.colors.primaryInteract}:{backgroundColor:u.colors.surface}},x=function(){return T==="secondary"?{backgroundColor:u.colors.transparent,border:"1px solid "+u.colors.primaryContainer}:D==="dark"?{backgroundColor:u.colors.primaryContainer}:{backgroundColor:u.colors.primaryContainer}};return{button:Object.assign({},C[_],{borderRadius:u.spacing.spacing100},U("default"),(L={cursor:"pointer"},L[":not(:disabled)"]={"&:hover":{boxShadow:u.shadows.elevation1},"&:focus-visible":{boxShadow:u.shadows.elevation1},"&:active":Object.assign({},U("active"),{boxShadow:"none !important"})},L["&:disabled"]=Object.assign({},U("disabled"),{cursor:"auto"}),L))}}),n=e("./node_modules/react/jsx-runtime.js"),s=["size","variant","disabled","type","buttonTheme","className"];function v(u,O){if(u==null)return{};var L=p(u,O),_,T;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(u);for(T=0;T<D.length;T++)_=D[T],!(O.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(u,_)&&(L[_]=u[_])}return L}function p(u,O){if(u==null)return{};var L={},_=Object.keys(u),T,D;for(D=0;D<_.length;D++)T=_[D],!(O.indexOf(T)>=0)&&(L[T]=u[T]);return L}var y={prev:"\uC774\uC804",next:"\uB2E4\uC74C"},i=Object(z.forwardRef)(function(u,O){var L=u.size,_=u.variant,T=_===void 0?"primary":_,D=u.disabled,U=u.type,B=u.buttonTheme,I=B===void 0?"dark":B,x=u.className,a=v(u,s),d=t({size:L,variant:T,buttonTheme:I}),r=d.classes,m=d.cx,o=Object(Y.c)(),h=function(M,A,S){if(A==="secondary")if(S){if(M==="dark"||M==="light")return o.colors.primaryContainer}else{if(M==="dark")return o.colors.primary;if(M==="light")return o.colors.white}else{if(S)return o.colors.white;if(M==="dark")return o.colors.white;if(M==="light")return o.colors.primary}};return Object(n.jsx)(W.a,Object.assign({component:"button",ref:O,type:"button",disabled:D,className:m(x,r.button),"aria-label":y[U]},a,{children:U==="prev"?Object(n.jsx)(c.a,{src:"IcAngleLeft",color:h(I,T,D)}):Object(n.jsx)(c.a,{src:"IcAngleRight",color:h(I,T,D)})}))});i.displayName="ButtonIcon";var l=`
    
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



Icon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n}" }, ...Icon.parameters };`,g={Icon:{startLoc:{col:20,line:100},endLoc:{col:1,line:106},startBody:{col:20,line:100},endBody:{col:1,line:106}}},l=`import {
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
`,g={Icon:{startLoc:{col:20,line:92},endLoc:{col:1,line:98},startBody:{col:20,line:92},endBody:{col:1,line:98}}},b=f.default={title:"@travelmakers-design-v2/core/General/Button",component:i,argTypes:{size:{defaultValue:"small",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},buttonTheme:{defaultValue:"light",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["light","dark"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"prev",description:"ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.",options:["prev","next"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Icon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n}" }, ...Icon.parameters };`,locationsMap:{icon:{startLoc:{col:20,line:100},endLoc:{col:1,line:106},startBody:{col:20,line:100},endBody:{col:1,line:106}}}},docs:{page:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($.g,{}),Object(n.jsx)($.f,{}),Object(n.jsx)($.b,{}),Object(n.jsx)($.d,{}),Object(n.jsx)($.a,{story:$.c}),Object(n.jsx)($.e,{})]})}},actions:{handles:["click button"]}}},j=function(O){return Object(n.jsx)("div",{style:{margin:"0 auto"},children:Object(n.jsx)(i,Object.assign({},O,{children:"ButtonIcon"}))})};j.displayName="Icon",j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return I}),e.d(f,"CalloutWithoutItems",function(){return x});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),W=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),R=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N=Object(R.a)(function(a,d){var r=d.type,m=a.colors,o=a.typography,h=a.spacing;return{root:Object.assign({display:"flex",alignItems:"center",color:m[s[r]]},o.body3,{fontWeight:700,columnGap:h.spacing10})}}),V=e("./node_modules/react/jsx-runtime.js"),C=["type","title"];function t(a,d){if(a==null)return{};var r=n(a,d),m,o;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(o=0;o<h.length;o++)m=h[o],!(d.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(a,m)&&(r[m]=a[m])}return r}function n(a,d){if(a==null)return{};var r={},m=Object.keys(a),o,h;for(h=0;h<m.length;h++)o=m[h],!(d.indexOf(o)>=0)&&(r[o]=a[o]);return r}var s={default:"secondary",warning:"error"},v=function(d){var r=d.type,m=d.title,o=t(d,C),h=Object(c.c)(),P=h.colors,M=N({type:r}),A=M.classes,S=M.cx;return Object(V.jsxs)("dt",Object.assign({className:S(A.root)},o,{children:[Object(V.jsx)(W.a,{src:"IcAlert",width:14,height:14,color:P[s[r]]}),m]}))};v.displayName="CalloutHeader",v.displayName="CalloutHeader";var p=Object(R.a)(function(a){var d=a.colors,r=a.typography;return{root:Object.assign({margin:0,color:d.onSurface},r.body3)}}),y=["content","isEmpty"];function i(a,d){if(a==null)return{};var r=l(a,d),m,o;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(o=0;o<h.length;o++)m=h[o],!(d.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(a,m)&&(r[m]=a[m])}return r}function l(a,d){if(a==null)return{};var r={},m=Object.keys(a),o,h;for(h=0;h<m.length;h++)o=m[h],!(d.indexOf(o)>=0)&&(r[o]=a[o]);return r}var g=function(d){var r=d.content,m=d.isEmpty,o=m===void 0?!1:m,h=i(d,y),P=p(),M=P.classes,A=P.cx;return Object(V.jsx)("dd",Object.assign({className:A(M.root,{"sr-only":o})},h,{children:r}))};g.displayName="CalloutItem";var b=Object(R.a)(function(a){var d=a.spacing,r=a.radius,m=a.colors;return{root:{display:"inline-flex",flexDirection:"column",rowGap:d.spacing10,margin:0,padding:d.spacing30,borderRadius:r.radius20,backgroundColor:m.surface}}}),j=["type","title","items","emptyText","className"];function u(a,d){if(a==null)return{};var r=O(a,d),m,o;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(o=0;o<h.length;o++)m=h[o],!(d.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(a,m)&&(r[m]=a[m])}return r}function O(a,d){if(a==null)return{};var r={},m=Object.keys(a),o,h;for(h=0;h<m.length;h++)o=m[h],!(d.indexOf(o)>=0)&&(r[o]=a[o]);return r}var L=Object(Y.forwardRef)(function(a,d){var r=a.type,m=r===void 0?"default":r,o=a.title,h=a.items,P=h===void 0?[]:h,M=a.emptyText,A=M===void 0?"":M,S=a.className,k=u(a,j),H=P.length===0,G=b(),re=G.classes,ce=G.cx,q=H?Object(V.jsx)(g,{content:A,isEmpty:!0}):P.map(function(ie,te){return Object(V.jsx)(g,{content:ie},te)});return Object(V.jsxs)(z.a,Object.assign({component:"dl",ref:d,className:ce(re.root,S)},k,{children:[Object(V.jsx)(v,{type:m,title:o}),q]}))});L.displayName="Callout";var _=`
    
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
CalloutWithoutItems.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n}" }, ...CalloutWithoutItems.parameters };`,T={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:62},startBody:{col:23,line:60},endBody:{col:1,line:62}},CalloutWithoutItems:{startLoc:{col:35,line:64},endLoc:{col:1,line:72},startBody:{col:35,line:64},endBody:{col:1,line:72}}},_=`import { Meta } from "@storybook/react";
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
`,T={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:54},startBody:{col:23,line:52},endBody:{col:1,line:54}},CalloutWithoutItems:{startLoc:{col:35,line:56},endLoc:{col:1,line:64},startBody:{col:35,line:56},endBody:{col:1,line:64}}},D={title:"\uD0C0\uC774\uD2C0",items:["\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4."]},U={title:"\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)",items:[]},B=f.default={parameters:{storySource:{source:`
    
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
CalloutWithoutItems.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n}" }, ...CalloutWithoutItems.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:62},startBody:{col:23,line:60},endBody:{col:1,line:62}},"callout-without-items":{startLoc:{col:35,line:64},endLoc:{col:1,line:72},startBody:{col:35,line:64},endBody:{col:1,line:72}}}}},title:"@travelmakers-design-v2/core/General/Callout",component:L,argTypes:{type:{control:{type:"radio",options:["default","warning"]},defaultValue:"default",description:"Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},title:{type:"string",description:"Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",table:{type:{summary:"string"}}},items:{control:{type:"object"},description:"Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",defaultValue:[],table:{type:{summary:"string[]"}}},emptyText:{type:"string",defaultValue:"",table:{type:{summary:"string"}}}}},I=function(d){return Object(V.jsx)(L,Object.assign({title:D.title},d,{items:D.items}))};I.displayName="Default";var x=function(d){return Object(V.jsx)(L,Object.assign({title:U.title,items:U.items},d))};x.displayName="CalloutWithoutItems",I.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout title={data.title} {...props} items={data.items} />;
}`}},I.parameters),x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <Callout
      title={dataWithoutItems.title}
      items={dataWithoutItems.items}
      {...props}
    />
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return i});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Y=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(l,g){var b=g.type,j=function(){return{week:{backgroundColor:l.colors.secondary},month:{backgroundColor:l.colors.secondary20},all:{backgroundColor:l.colors.primary}}};return{container:{width:"296px",height:"142px",backgroundColor:l.colors.primary99,borderRadius:l.radius.radius20,overflow:"hidden",display:"flex"},leftBox:Object.assign({},j()[b],{width:"80px",display:"flex",flexDirection:"column",padding:l.spacing.spacing10}),rightBox:{width:"100%",padding:l.spacing.spacing20,display:"flex",flexDirection:"column",gap:l.spacing.spacing5},discountBox:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},checkBox:{backgroundColor:l.colors.primaryContainer,borderRadius:l.radius.radius100,width:16,height:16,display:"flex",justifyContent:"center",alignItems:"center"}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),V=e("./node_modules/react/jsx-runtime.js"),C=["type","state","day","title","subTitle","item","remainingQuantity","content","className"];function t(l,g){if(l==null)return{};var b=n(l,g),j,u;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(l);for(u=0;u<O.length;u++)j=O[u],!(g.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(l,j)&&(b[j]=l[j])}return b}function n(l,g){if(l==null)return{};var b={},j=Object.keys(l),u,O;for(O=0;O<j.length;O++)u=j[O],!(g.indexOf(u)>=0)&&(b[u]=l[u]);return b}var s=Object(Y.forwardRef)(function(l,g){var b=l.type,j=l.state,u=l.day,O=l.title,L=l.subTitle,_=l.item,T=l.remainingQuantity,D=l.content,U=l.className,B=t(l,C),I=W({type:b}),x=I.classes,a=I.cx,d=Object(E.c)(),r={week:"Week",month:"Month",all:"All"},m=function(P,M){var A=P!=null?P:"\uC804\uCCB4",S=" | \uC794\uC5EC "+M+"\uAC1C";return M?A+" "+S:A},o=function(P){switch(P){case"applied":return Object(V.jsx)(R.a,{level:"body3",color:"primary3",children:"\uC801\uC6A9\uC911"});case"checked":return Object(V.jsx)("div",{className:x.checkBox,children:Object(V.jsx)(N.a,{src:"IcCheck",width:12,height:12,color:d.colors.white})});default:return null}};return Object(V.jsxs)(z.a,Object.assign({component:"div",ref:g,className:a(U,x.container)},B,{children:[Object(V.jsxs)("div",{className:x.leftBox,children:[Object(V.jsx)(R.a,{level:"display2",color:"white",children:u}),Object(V.jsx)(R.a,{family:"Noto Serif KR",level:"body1",color:"white",children:r[b]})]}),Object(V.jsxs)("div",{className:x.rightBox,children:[Object(V.jsxs)("div",{className:x.discountBox,children:[Object(V.jsx)("div",{children:Object(V.jsx)(R.a,{level:"display6",color:"secondary",children:O})}),Object(V.jsx)("div",{children:o(j)})]}),Object(V.jsx)(R.a,{level:"body3",color:"primary",children:L}),Object(V.jsx)(R.a,{level:"caption",color:"errorInteract",children:m(_,T)}),Object(V.jsx)(R.a,{level:"caption",color:"primary3",style:{whiteSpace:"pre-line"},children:D})]})]}))});s.displayName="CouponCard";var v=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CouponCard {...props} />;\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:92},endLoc:{col:1,line:94},startBody:{col:23,line:92},endBody:{col:1,line:94}}},v=`import { Meta } from "@storybook/react";
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
`,p={Default:{startLoc:{col:23,line:84},endLoc:{col:1,line:86},startBody:{col:23,line:84},endBody:{col:1,line:86}}},y=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CouponCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:92},endLoc:{col:1,line:94},startBody:{col:23,line:92},endBody:{col:1,line:94}}}}},title:"@travelmakers-design-v2/core/General/Card/CouponCard",component:s,argTypes:{type:{defaultValue:"week",description:"CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["week","month","all"],control:{type:"inline-radio"}},state:{defaultValue:"default",description:"CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",options:["default","applied","checked"],control:{type:"inline-radio"}},day:{defaultValue:1,description:"CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},title:{defaultValue:"00%",description:"CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},subTitle:{defaultValue:"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",description:"CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},item:{defaultValue:"\uC801\uC6A9 \uC0C1\uD488",description:"CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},remainingQuantity:{defaultValue:5,description:"CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},content:{defaultValue:`*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C
 *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C
 *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C`,description:"CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},i=function(g){return Object(V.jsx)(s,Object.assign({},g))};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return <CouponCard {...props} />;
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return M});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),c=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/core-js/modules/es.symbol.js"),t=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.array.map.js"),s=e("./node_modules/react/index.js"),v=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),p=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),y=Object(p.a)(function(A,S){var k,H,G,re=S.rightArrowHover,ce=S.leftArrowHover;return{container:(k={width:"328px",display:"inline-block",boxShadow:A.shadows.elevation2,borderRadius:A.radius.radius20,overflow:"hidden"},k["& > a"]={textDecoration:"none"},k),imageBox:(G={position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"end",height:"183px"},G["& > img"]=(H={position:"absolute",transition:"all 0.2s cubic-bezier(0, 0, 0.5, 1)"},H["&:hover"]={width:"110%",height:"110%"},H),G),content:{display:"flex",flexDirection:"column",gap:A.spacing.spacing30,padding:A.spacing.spacing30},contentHeader:{display:"flex",flexDirection:"column",gap:A.spacing.spacing5},contentTag:{position:"relative",display:"flex",flexDirection:"column",overflowY:"hidden"},contentScroll:{position:"absolute",width:"32px",height:"32px",top:"50%",transform:"translate(-50%, -50%)",background:A.colors.white,border:"1px solid "+A.colors.white,boxShadow:"0px 2px 10px rgba(48, 55, 63, 0.2)",borderRadius:A.radius.radius100,padding:"6px"},contentScrollLeft:{left:A.spacing.spacing30,visibility:ce?"visible":"hidden"},contentScrollRight:{right:A.spacing.spacing5,visibility:re?"visible":"hidden"},contentScrollContainer:{display:"flex",flexDirection:"row",overflowY:"hidden",gap:A.spacing.spacing10},contentDimmer:{position:"absolute",right:0,width:"40px",height:"100%",background:"linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 51.04%, rgba(255, 255, 255, 0) 100%)"},flexBox:{display:"flex",justifyContent:"space-between",gap:A.spacing.spacing5},soldOutBox:{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0}}}),i=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),l=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),g=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),b=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),j=e("./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx"),u=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),O=e("./node_modules/next/link.js"),L=e.n(O),_=e("./node_modules/react/jsx-runtime.js"),T=["name","description","type","star","src","href","price","isCoupon","disabled","className"];function D(A,S){return a(A)||x(A,S)||B(A,S)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(A,S){if(A){if(typeof A=="string")return I(A,S);var k=Object.prototype.toString.call(A).slice(8,-1);if(k==="Object"&&A.constructor&&(k=A.constructor.name),k==="Map"||k==="Set")return Array.from(A);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return I(A,S)}}function I(A,S){(S==null||S>A.length)&&(S=A.length);for(var k=0,H=new Array(S);k<S;k++)H[k]=A[k];return H}function x(A,S){var k=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(k!=null){var H,G,re,ce,q=[],ie=!0,te=!1;try{if(re=(k=k.call(A)).next,S===0){if(Object(k)!==k)return;ie=!1}else for(;!(ie=(H=re.call(k)).done)&&(q.push(H.value),q.length!==S);ie=!0);}catch(de){te=!0,G=de}finally{try{if(!ie&&k.return!=null&&(ce=k.return(),Object(ce)!==ce))return}finally{if(te)throw G}}return q}}function a(A){if(Array.isArray(A))return A}function d(A,S){if(A==null)return{};var k=r(A,S),H,G;if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(A);for(G=0;G<re.length;G++)H=re[G],!(S.indexOf(H)>=0)&&Object.prototype.propertyIsEnumerable.call(A,H)&&(k[H]=A[H])}return k}function r(A,S){if(A==null)return{};var k={},H=Object.keys(A),G,re;for(re=0;re<H.length;re++)G=H[re],!(S.indexOf(G)>=0)&&(k[G]=A[G]);return k}var m=Object(s.forwardRef)(function(A,S){var k,H=A.name,G=A.description,re=A.type,ce=A.star,q=A.src,ie=A.href,te=ie===void 0?"":ie,de=A.price,ue=de===void 0?[]:de,fe=A.isCoupon,ve=A.disabled,be=ve===void 0?!1:ve,ge=A.className,xe=d(A,T),Ce=0,De=((k=ue==null?void 0:ue.length)!==null&&k!==void 0?k:1)-1,Te=Object(s.useState)(Ce),Be=D(Te,2),Oe=Be[0],Ne=Be[1],Me=Object(s.useState)(!1),ke=D(Me,2),Ve=ke[0],Ae=ke[1],we=Object(s.useState)(!1),He=D(we,2),Pe=He[0],_e=He[1],We=Object(s.useRef)(null),Re=Object(s.useRef)(null),Ee=Object(s.useRef)([]),Ue=y({leftArrowHover:Ve,rightArrowHover:Pe}),se=Ue.classes,ne=Ue.cx;function le(ae){var me=ae==="left",je=J(me),he=me?Oe-je:Oe+je;je!==0&&(Q(me,he),Ne(he),ee(he))}function Q(ae,me){ae?(Ae(me>Ce),_e(!0)):(Ae(!0),_e(me<De))}function J(ae){var me=2;if(ae){var je;if(Oe<=Ce)return 0;var he=(je=Ee.current)===null||je===void 0?void 0:je[Oe-1];return!he||Oe-1===0?1:me}else{var Le;if(Oe>=De)return 0;var Ie=(Le=Ee.current)===null||Le===void 0?void 0:Le[Oe+me];return Ie?Oe===0?3:me:1}}function ee(ae){var me;(me=Ee.current)===null||me===void 0||me[ae].scrollIntoView({behavior:"smooth",block:"center"})}return Object(_.jsx)(v.a,Object.assign({component:"div",ref:S,className:ne(ge,se.container)},xe,{children:Object(_.jsxs)(L.a,{href:te,children:[Object(_.jsxs)("div",{className:ne(se.imageBox),children:[Object(_.jsx)(i.a,{src:q,alt:"hotelCard",width:"100%",height:"100%"}),be&&Object(_.jsxs)("div",{className:ne(se.soldOutBox),children:[Object(_.jsx)(l.a,{color:"white",level:"display4",strong:!0,children:"Sold Out"}),Object(_.jsx)(l.a,{color:"white",level:"body2",children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})]}),Object(_.jsxs)("div",{className:ne(se.content),children:[Object(_.jsxs)("div",{className:ne(se.contentHeader),children:[Object(_.jsx)(l.a,{level:"subhead2",strong:!0,color:be?"primary4":"onBackground",children:H}),Object(_.jsxs)("div",{className:ne(se.flexBox),children:[Object(_.jsx)(g.a,{grade:ce,type:re}),fe&&!be&&Object(_.jsx)(b.a,{label:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",type:"line"})]}),Object(_.jsx)(l.a,{level:"caption",color:"primary3",children:G})]}),Object(_.jsxs)("div",{className:ne(se.contentTag),onMouseEnter:function(){Oe!==0&&Ae(!0),Oe<De&&_e(!0)},onMouseMove:function(){be||(Ae(Oe!==0),Oe<De?_e(!0):_e(!1))},onMouseLeave:function(){Ae(!1),_e(!1)},children:[Object(_.jsx)("div",{className:ne(se.contentDimmer)}),Object(_.jsx)("div",{ref:We,className:ne(se.contentScroll,se.contentScrollLeft),onClick:function(me){me.preventDefault(),le("left")},children:Object(_.jsx)(u.a,{src:"IcAngleLeft",width:16,height:16})}),Object(_.jsx)("div",{ref:Re,className:ne(se.contentScroll,se.contentScrollRight),onClick:function(me){me.preventDefault(),le("right")},children:Object(_.jsx)(u.a,{src:"IcAngleRight",width:16,height:16})}),Object(_.jsx)("div",{className:ne(se.contentScrollContainer),children:ue==null?void 0:ue.map(function(ae,me){return Object(_.jsx)(j.a,{ref:function(he){return Ee.current[me]=he},name:ae.name,status:be?"disabled":ae.status,description:ae.description},"price-card-"+ae.name)})})]})]})]})}))});m.displayName="HotelCard";var o=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelCard {...props} />;\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:131},endLoc:{col:1,line:133},startBody:{col:23,line:131},endBody:{col:1,line:133}}},o=`import { Meta } from "@storybook/react";
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
`,h={Default:{startLoc:{col:23,line:123},endLoc:{col:1,line:125},startBody:{col:23,line:123},endBody:{col:1,line:125}}},P=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:131},endLoc:{col:1,line:133},startBody:{col:23,line:131},endBody:{col:1,line:133}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelCard",component:m,argTypes:{href:{defaultValue:"#",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},name:{defaultValue:"\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},src:{defaultValue:"https://picsum.photos/600/400",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},price:{defaultValue:[{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]}],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}},isCoupon:{defaultValue:!0,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},M=function(S){return Object(_.jsx)(m,Object.assign({},S))};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelCard {...props} />;
}`}},M.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return O});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.map.js"),z=e("./node_modules/react/index.js"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(L){var _,T,D;return{container:(_={width:"328px",display:"inline-block"},_["& > a"]={textDecoration:"none"},_),cardBox:{position:"relative",background:L.colors.white,borderRadius:L.radius.radius20,padding:"165px "+L.spacing.spacing30+" "+L.spacing.spacing30,filter:"drop-shadow("+L.shadows.elevation2+")"},imageBox:(D={position:"absolute",top:-27,display:"flex",justifyContent:"center",alignItems:"end",overflow:"hidden",borderRadius:L.radius.radius20,width:"296px",height:"180px"},D["& > img"]=(T={position:"absolute",transition:"all 0.2s cubic-bezier(0, 0, 0.5, 1)"},T["&:hover"]={width:"110%",height:"110%"},T),D),imageLabel:{position:"absolute",left:L.spacing.spacing30,top:-4},contentBox:{display:"flex",flexDirection:"column",gap:L.spacing.spacing20,"& > ul":{gap:L.spacing.spacing5}},hotelInfo:{display:"flex",alignItems:"center",gap:L.spacing.spacing5},divider:{backgroundColor:L.colors.outline,height:"1px"}}}),R=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),V=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),C=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),t=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),n=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),s=e("./node_modules/next/link.js"),v=e.n(s),p=e("./node_modules/react/jsx-runtime.js"),y=["href","type","star","src","labels","name","coupons","timelineTags","price","className"];function i(L,_){if(L==null)return{};var T=l(L,_),D,U;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(L);for(U=0;U<B.length;U++)D=B[U],!(_.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(L,D)&&(T[D]=L[D])}return T}function l(L,_){if(L==null)return{};var T={},D=Object.keys(L),U,B;for(B=0;B<D.length;B++)U=D[B],!(_.indexOf(U)>=0)&&(T[U]=L[U]);return T}var g=Object(z.forwardRef)(function(L,_){var T=L.href,D=T===void 0?"":T,U=L.type,B=U===void 0?"grade":U,I=L.star,x=L.src,a=L.labels,d=a===void 0?[]:a,r=L.name,m=L.coupons,o=L.timelineTags,h=L.price,P=L.className,M=i(L,y),A=W(),S=A.classes,k=A.cx;return Object(p.jsx)(R.a,Object.assign({component:"div",ref:_,className:k(P,S.container)},M,{children:Object(p.jsx)(v.a,{href:D,children:Object(p.jsxs)("div",{className:k(S.cardBox),children:[Object(p.jsxs)("div",{className:k(S.imageBox),children:[Object(p.jsx)(V.a,{src:x,alt:"featureCard-"+r,width:"100%",height:"100%"}),Object(p.jsx)("div",{className:k(S.imageLabel),children:Object(p.jsx)(C.a,{type:"fill",children:d==null?void 0:d.map(function(H,G){return Object(p.jsx)(C.a.Item,{label:H,colorIdx:G})})})})]}),Object(p.jsxs)("div",{className:k(S.contentBox),children:[Object(p.jsx)(C.a,{type:"line",color:"gray",roundness:"half",children:o.map(function(H){return Object(p.jsx)(C.a.Item,{label:H})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(t.a,{level:"body2",color:"black",children:r}),Object(p.jsx)("div",{className:k(S.hotelInfo),children:Object(p.jsx)(n.a,{grade:I,type:B})})]}),Object(p.jsx)("div",{className:k(S.divider)}),Object(p.jsxs)("div",{children:[Object(p.jsx)(N.a,Object.assign({},h,{type:"secondary"})),Object(p.jsx)(N.a,Object.assign({},h,{type:"primary"}))]})]})]})})}))});g.displayName="HotelFeaturedCard";var b=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:107},endLoc:{col:1,line:113},startBody:{col:23,line:107},endBody:{col:1,line:113}}},b=`import { Meta } from "@storybook/react";
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
`,j={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:105},startBody:{col:23,line:99},endBody:{col:1,line:105}}},u=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:107},endLoc:{col:1,line:113},startBody:{col:23,line:107},endBody:{col:1,line:113}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelFeaturedCard",component:g,argTypes:{href:{defaultValue:"#",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},name:{defaultValue:"\uD638\uD154\uBA85",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},timelineTags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:1,priceText:1e4,priceStartText:"1\uBC15 100,000\uC6D0\uBD80\uD130",isCoupon:!0},description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}}}},O=function(_){return Object(p.jsx)("div",{style:{margin:50},children:Object(p.jsx)(g,Object.assign({},_))})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 50 }}>
      <HotelFeaturedCard {...props} />
    </div>
  );
}`}},O.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return j});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(u){var O,L,_;return{container:(O={width:"328px",backgroundColor:u.colors.white,borderRadius:u.radius.radius20},O["& > a"]={textDecoration:"none"},O),contentContainer:{padding:u.spacing.spacing30,display:"flex",flexDirection:"column",gap:u.spacing.spacing10},contentBox:(_={display:"flex",alignItems:"center",justifyContent:"space-between",gap:u.spacing.spacing30},_["& >  span"]=(L={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box"},L["-webkit-box-orient"]="vertical",L["-webkit-line-clamp"]="2",L),_),headerBox:{display:"flex",alignItems:"center",justifyContent:"space-between"},footerBox:{display:"flex",gap:u.spacing.spacing10},divider:{backgroundColor:u.colors.outline,height:"1px"}}}),R=e("./node_modules/next/link.js"),N=e.n(R),V=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),C=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),t=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),n=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),s=e("./node_modules/react/jsx-runtime.js"),v=["href","src","labels","contents","writer","product","className"];function p(u,O){if(u==null)return{};var L=y(u,O),_,T;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(u);for(T=0;T<D.length;T++)_=D[T],!(O.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(u,_)&&(L[_]=u[_])}return L}function y(u,O){if(u==null)return{};var L={},_=Object.keys(u),T,D;for(D=0;D<_.length;D++)T=_[D],!(O.indexOf(T)>=0)&&(L[T]=u[T]);return L}var i=Object(Y.forwardRef)(function(u,O){var L=u.href,_=L===void 0?"":L,T=u.src,D=u.labels,U=D===void 0?[]:D,B=u.contents,I=u.writer,x=u.product,a=u.className,d=p(u,v),r=W(),m=r.classes,o=r.cx;return Object(s.jsx)(z.a,Object.assign({component:"div",ref:O,className:o(a,m.container)},d,{children:Object(s.jsx)(N.a,{href:_,children:Object(s.jsxs)("div",{className:m.contentContainer,children:[Object(s.jsxs)("div",{className:m.headerBox,children:[Object(s.jsx)(V.a,{level:"body3",color:"primary3",children:"\uC774\uB7F0 \uC810\uC774 \uC88B\uC558\uC5B4\uC694."}),Object(s.jsx)(n.a,{src:"IcAngleRight",width:16,height:16})]}),U.length>0&&Object(s.jsx)(C.a,{type:"fill",roundness:"half",color:"gray",gap:4,children:U==null?void 0:U.map(function(h){return Object(s.jsx)(C.a.Item,{label:h})})}),Object(s.jsxs)("div",{className:m.contentBox,children:[Object(s.jsx)(V.a,{level:"body2",color:"primary1",children:B}),T&&Object(s.jsx)(t.a,{src:T,alt:"hotel-review-card",width:40,height:40})]}),Object(s.jsx)("div",{className:m.divider}),Object(s.jsxs)("div",{className:m.footerBox,children:[Object(s.jsx)(V.a,{level:"body3",color:"primary1",children:I}),Object(s.jsx)(V.a,{level:"body3",color:"primary3",children:x})]})]})})}))});i.displayName="HotelReviewCard";var l=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelReviewCard {...props} />;\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:72},endLoc:{col:1,line:74},startBody:{col:23,line:72},endBody:{col:1,line:74}}},l=`import { Meta } from "@storybook/react";
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
`,g={Default:{startLoc:{col:23,line:64},endLoc:{col:1,line:66},startBody:{col:23,line:64},endBody:{col:1,line:66}}},b=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelReviewCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:72},endLoc:{col:1,line:74},startBody:{col:23,line:72},endBody:{col:1,line:74}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelReviewCard",component:i,argTypes:{href:{defaultValue:"#",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},contents:{defaultValue:"\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},writer:{defaultValue:"\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},product:{defaultValue:"\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},j=function(O){return Object(s.jsx)(i,Object.assign({},O))};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelReviewCard {...props} />;
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return j});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(u){var O;return{container:(O={width:"328px",backgroundColor:u.colors.white,borderRadius:u.radius.radius20,padding:u.spacing.spacing50+" "+u.spacing.spacing30,display:"flex",flexDirection:"column",gap:u.spacing.spacing30},O["& > a"]={textDecoration:"none"},O),divider:{backgroundColor:u.colors.outline,height:"1px"},currencyContainer:{display:"flex",flexDirection:"column",gap:u.spacing.spacing5},currencyBox:{display:"flex",flexDirection:"row",alignItems:"center",gap:u.spacing.spacing5}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),C=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),t=function(O){return O.toLocaleString("ko-KR")},n=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),s=e("./node_modules/react/jsx-runtime.js"),v=["type","star","groupTags","tags","isCoupon","price","className"];function p(u,O){if(u==null)return{};var L=y(u,O),_,T;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(u);for(T=0;T<D.length;T++)_=D[T],!(O.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(u,_)&&(L[_]=u[_])}return L}function y(u,O){if(u==null)return{};var L={},_=Object.keys(u),T,D;for(D=0;D<_.length;D++)T=_[D],!(O.indexOf(T)>=0)&&(L[T]=u[T]);return L}var i=Object(Y.forwardRef)(function(u,O){var L=u.type,_=u.star,T=u.groupTags,D=T===void 0?[]:T,U=u.tags,B=U===void 0?[]:U,I=u.isCoupon,x=I===void 0?!1:I,a=u.price,d=u.className,r=p(u,v),m=W(),o=m.classes,h=m.cx;return Object(s.jsxs)(z.a,Object.assign({component:"div",ref:O,className:h(d,o.container)},r,{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(R.a,{level:"display6",color:"primary1",strong:!0,children:"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"})}),Object(s.jsx)("div",{children:Object(s.jsx)(N.a,{grade:_,type:L})}),D.length>0&&Object(s.jsx)("div",{children:Object(s.jsx)(V.a,{type:"line",color:"gray",roundness:"half",gap:4,children:D.map(function(P){return Object(s.jsx)(V.a.Item,{label:P})})})})]}),Object(s.jsx)("div",{className:h(o.divider)}),Object(s.jsxs)("div",{className:o.currencyContainer,children:[Object(s.jsxs)("div",{className:o.currencyBox,children:[Object(s.jsx)(R.a,{level:"body3",color:"primary1",children:"\uC815\uAC00"}),Object(s.jsxs)(R.a,{level:"body3",color:"primary1",children:[t(1e6),"\uC6D0"]}),x&&Object(s.jsx)(C.a,{label:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",type:"fill"})]}),Object(s.jsx)(n.a,Object.assign({},a,{type:"primary"})),Object(s.jsx)(R.a,{level:"caption",color:"primary3",children:"\uC138\uAE08 \uBC0F \uBD09\uC0AC\uB8CC \uD3EC\uD568"})]}),Object(s.jsx)(V.a,{type:"fill",color:"gray",roundness:"half",gap:4,children:B.map(function(P){return Object(s.jsx)(V.a.Item,{label:P})})})]}))});i.displayName="HotelTitleCard";var l=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelTitleCard {...props} />;\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}},l=`import { Meta } from "@storybook/react";
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
`,g={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:80},startBody:{col:23,line:78},endBody:{col:1,line:80}}},b=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelTitleCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelTitleCard",component:i,argTypes:{type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},groupTags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},tags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},isCoupon:{defaultValue:!0,description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:1,priceText:1e4,priceStartText:"1\uBC15 100,000\uC6D0\uBD80\uD130",isCoupon:!0},description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}}}},j=function(O){return Object(s.jsx)(i,Object.assign({},O))};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelTitleCard {...props} />;
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return y});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),c=Object(z.a)(function(i){var l,g;return{container:{position:"relative",width:"304px",height:"200px",backgroundColor:i.colors.white,borderRadius:i.radius.radius20,filter:"drop-shadow("+i.shadows.elevation2+")"},imageContainer:(l={width:"92px",height:"122px",position:"absolute",top:16,left:-16},l["& > img"]={borderRadius:i.radius.radius20},l),content:{padding:i.spacing.spacing30+" "+i.spacing.spacing30+" "+i.spacing.spacing30+" 92px",display:"flex",flexDirection:"column",gap:i.spacing.spacing20},contentText:(g={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box"},g["-webkit-box-orient"]="vertical",g["-webkit-line-clamp"]="4",g)}}),W=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./node_modules/react/jsx-runtime.js"),V=["src","title","job","content","className"];function C(i,l){if(i==null)return{};var g=t(i,l),b,j;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(j=0;j<u.length;j++)b=u[j],!(l.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(i,b)&&(g[b]=i[b])}return g}function t(i,l){if(i==null)return{};var g={},b=Object.keys(i),j,u;for(u=0;u<b.length;u++)j=b[u],!(l.indexOf(j)>=0)&&(g[j]=i[j]);return g}var n=Object(E.forwardRef)(function(i,l){var g=i.src,b=i.title,j=i.job,u=i.content,O=i.className,L=C(i,V),_=c(),T=_.classes,D=_.cx;return Object(N.jsxs)(Y.a,Object.assign({component:"div",ref:l,className:D(O,T.container)},L,{children:[Object(N.jsx)("div",{className:D(T.imageContainer),children:Object(N.jsx)(W.a,{src:g,alt:"",width:"100%",height:"100%"})}),Object(N.jsxs)("div",{className:D(T.content),children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(R.a,{level:"body3",color:"secondary1",children:b}),Object(N.jsx)("div",{style:{marginTop:"-5px"},children:Object(N.jsx)(R.a,{level:"body2",color:"primary2",children:j})})]}),Object(N.jsx)("div",{className:D(T.contentText),children:Object(N.jsx)(R.a,{level:"body2",color:"primary1",children:u})})]})]}))});n.displayName="MainReviewCard";var s=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}},s=`import { Meta } from "@storybook/react";
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
`,v={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:58},startBody:{col:23,line:52},endBody:{col:1,line:58}}},p=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/core/General/Card/MainReviewCard",component:n,argTypes:{title:{defaultValue:"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},job:{defaultValue:"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},content:{defaultValue:"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},src:{defaultValue:"https://picsum.photos/600/400",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},y=function(l){return Object(N.jsx)("div",{style:{margin:40},children:Object(N.jsx)(n,Object.assign({},l))})};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 40 }}>
      <MainReviewCard {...props} />
    </div>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return b});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(j){var u,O;return{card:{width:"281px",backgroundColor:j.colors.white,boxShadow:j.shadows.elevation3,borderRadius:j.radius.radius20},container:{padding:j.spacing.spacing30+" "+j.spacing.spacing50,display:"flex",flexDirection:"column",gap:j.spacing.spacing20,minHeight:"395px"},divider:{height:1,backgroundColor:j.colors.primary},headerGroup:{minHeight:52,display:"flex",flexDirection:"column",justifyContent:"end"},groupBox:(u={display:"flex",flexDirection:"column",gap:j.spacing.spacing5},u["& > ul"]={margin:0,paddingInlineStart:"30px",paddingBottom:j.spacing.spacing20},u),titleBox:{display:"flex",justifyContent:"space-between"},priceBox:(O={},O["& > div"]={justifyContent:"end"},O),submitButton:{borderRadius:"0 0 "+j.radius.radius20+" "+j.radius.radius20}}}),R=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx"),C=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),t=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),n=e("./node_modules/react/jsx-runtime.js"),s=["isMore","labels","headTitle","footerTitle","optionName","isDuration","minNight","maxNight","roomType","benefitList","price","buttonName","onClick","className"];function v(j,u){if(j==null)return{};var O=p(j,u),L,_;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(j);for(_=0;_<T.length;_++)L=T[_],!(u.indexOf(L)>=0)&&Object.prototype.propertyIsEnumerable.call(j,L)&&(O[L]=j[L])}return O}function p(j,u){if(j==null)return{};var O={},L=Object.keys(j),_,T;for(T=0;T<L.length;T++)_=L[T],!(u.indexOf(_)>=0)&&(O[_]=j[_]);return O}var y=Object(Y.forwardRef)(function(j,u){var O=j.isMore,L=O===void 0?!0:O,_=j.labels,T=_===void 0?[]:_,D=j.headTitle,U=D===void 0?"Room Type":D,B=j.footerTitle,I=B===void 0?"Benefit":B,x=j.optionName,a=x===void 0?"\uC635\uC158 \uC124\uBA85":x,d=j.isDuration,r=d===void 0?!0:d,m=j.minNight,o=j.maxNight,h=j.roomType,P=j.benefitList,M=P===void 0?[]:P,A=j.price,S=j.buttonName,k=S===void 0?"\uC608\uC57D\uD558\uAE30":S,H=j.onClick,G=j.className,re=v(j,s),ce=W(),q=ce.classes,ie=ce.cx;return Object(n.jsxs)(z.a,Object.assign({component:"div",ref:u,className:ie(G,q.card)},re,{children:[Object(n.jsxs)("div",{className:q.container,children:[Object(n.jsxs)("div",{className:q.headerGroup,children:[T.length>0&&Object(n.jsx)(R.a,{type:"fill",style:{marginBottom:4},children:T==null?void 0:T.map(function(te,de){return Object(n.jsx)(R.a.Item,{label:te,colorIdx:de})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(N.a,{level:"display5",color:"primary1",strong:!0,children:a}),r&&Object(n.jsxs)(N.a,{level:"body2",color:"onPrimaryContainer",children:["(",m&&m+"\uBC15"," - ",o&&o+"\uBC15",")"]})]})]}),Object(n.jsxs)("div",{className:q.groupBox,children:[Object(n.jsx)(N.a,{level:"subhead2",color:"primary1",children:U}),Object(n.jsx)("div",{className:q.divider}),Object(n.jsx)(N.a,{level:"body2",color:"primary3",children:h})]}),M.length>0&&Object(n.jsxs)("div",{className:q.groupBox,children:[Object(n.jsxs)("div",{className:q.titleBox,children:[Object(n.jsx)(N.a,{level:"subhead2",color:"primary1",children:I}),L&&Object(n.jsx)(V.a,{variant:"text",rightIcon:Object(n.jsx)(C.a,{src:"IcAngleRight",width:16,height:16}),children:"\uB354\uBCF4\uAE30"})]}),Object(n.jsx)("div",{className:q.divider}),Object(n.jsx)("ul",{children:M.map(function(te){var de=te.content;return Object(n.jsx)(N.a,{level:"body2",color:"primary1",component:"li",children:de})})})]}),A&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:q.divider}),Object(n.jsxs)("div",{className:q.priceBox,children:[Object(n.jsx)(t.a,Object.assign({},A,{type:"secondary",label:"\uC815\uAC00"})),Object(n.jsx)(t.a,Object.assign({},A,{type:"primary"}))]})]})]}),Object(n.jsx)(V.a,{className:q.submitButton,size:"medium",fullWidth:!0,onClick:H,children:k})]}))});y.displayName="OptionCard";var i=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:153},endLoc:{col:1,line:159},startBody:{col:23,line:153},endBody:{col:1,line:159}}},i=`import { Meta } from "@storybook/react";
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
`,l={Default:{startLoc:{col:23,line:145},endLoc:{col:1,line:151},startBody:{col:23,line:145},endBody:{col:1,line:151}}},g=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:153},endLoc:{col:1,line:159},startBody:{col:23,line:153},endBody:{col:1,line:159}}}}},title:"@travelmakers-design-v2/core/General/Card/OptionCard",component:y,argTypes:{labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},headTitle:{defaultValue:"Room Type",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},footerTitle:{defaultValue:"Benefit",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},optionName:{defaultValue:"\uC635\uC158 \uC124\uBA85",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isDuration:{defaultValue:!0,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},minNight:{defaultValue:1,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},maxNight:{defaultValue:2,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},roomType:{defaultValue:"\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},benefitList:{defaultValue:[{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:1},{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:2},{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:3}],description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:"",priceText:1e4,priceStartText:"",isCoupon:!0},description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}},buttonName:{defaultValue:"\uC608\uC57D\uD558\uAE30",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},b=function(u){return Object(n.jsx)("div",{style:{margin:40},children:Object(n.jsx)(y,Object.assign({},u))})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 40 }}>
      <OptionCard {...props} />
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return v});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),z=e("./node_modules/react/index.js"),c=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),W=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),R=Object(W.a)(function(p,y){var i=y.status;return{container:{width:"120px",display:"inline-block",border:"1px solid "+p.colors.outline,borderRadius:p.spacing.spacing5,padding:p.spacing.spacing10+" "+p.spacing.spacing20}}}),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),C=e("./node_modules/react/jsx-runtime.js"),t=["status","name","description","tag","className"];function n(p,y){if(p==null)return{};var i=s(p,y),l,g;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(p);for(g=0;g<b.length;g++)l=b[g],!(y.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(p,l)&&(i[l]=p[l])}return i}function s(p,y){if(p==null)return{};var i={},l=Object.keys(p),g,b;for(b=0;b<l.length;b++)g=l[b],!(y.indexOf(g)>=0)&&(i[g]=p[g]);return i}var v=Object(z.forwardRef)(function(p,y){var i=p.status,l=p.name,g=p.description,b=p.tag,j=p.className,u=n(p,t),O=R({status:i}),L=O.classes,_=O.cx,T={active:"primary1",disabled:"primary4"};return Object(C.jsxs)(c.a,Object.assign({component:"div",ref:y,className:_(j,L.container)},u,{children:[Object(C.jsx)(N.a,{level:"body2",color:T[i],strong:!0,children:l}),Object(C.jsx)("br",{}),Object(C.jsx)(N.a,{level:"body3",color:T[i],strong:!0,children:g}),Object(C.jsx)("br",{}),i==="active"&&Object(C.jsx)(V.a,{type:"fill",color:"gray",roundness:"half",children:Object(C.jsx)(V.a.Item,{label:g})})]}))});v.displayName="PriceCard"},"./packages/travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <PriceCard {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:55},endLoc:{col:1,line:57},startBody:{col:23,line:55},endBody:{col:1,line:57}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:47},endLoc:{col:1,line:49},startBody:{col:23,line:47},endBody:{col:1,line:49}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <PriceCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:55},endLoc:{col:1,line:57},startBody:{col:23,line:55},endBody:{col:1,line:57}}}}},title:"@travelmakers-design-v2/core/General/Card/PriceCard",component:w.a,argTypes:{status:{defaultValue:"active",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["active","disabled"],control:{type:"inline-radio"}},name:{defaultValue:"name",description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"description",description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},tag:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}}}};var c=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return <PriceCard {...props} />;
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return y});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(i){return{root:{backgroundColor:"rgba(200, 200, 200, 0.5)",borderRadius:i.radius.radius20,padding:i.spacing.spacing20,position:"relative",overflow:"hidden",minWidth:"328px"},titleWrapper:{marginBottom:i.spacing.spacing10,maxWidth:"220px"},labelWrapper:{display:"flex",alignItems:"center",width:"fit-content"},labelText:{width:"fit-content"},arrowImage:{width:"16px",height:"16px",marginLeft:"2px"},imageOval:{position:"absolute",width:"78.03px",height:"110.61px",right:-5,bottom:-25,background:"linear-gradient(149.99deg, rgba(255, 255, 255, 0.5) 0%, rgba(200, 200, 200, 0.5) 88.27%)",borderRadius:"7575.76px"}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./node_modules/react/jsx-runtime.js"),V=["onClick","className","children"];function C(i,l){if(i==null)return{};var g=t(i,l),b,j;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(j=0;j<u.length;j++)b=u[j],!(l.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(i,b)&&(g[b]=i[b])}return g}function t(i,l){if(i==null)return{};var g={},b=Object.keys(i),j,u;for(u=0;u<b.length;u++)j=b[u],!(l.indexOf(j)>=0)&&(g[j]=i[j]);return g}var n=Object(w.forwardRef)(function(i,l){var g=i.onClick,b=i.className,j=i.children,u=C(i,V),O=W(),L=O.classes,_=O.cx;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(z.a,Object.assign({component:"div",ref:l,className:_(b,L.root)},u,{children:[Object(N.jsx)("div",{className:_(L.titleWrapper),children:Object(N.jsxs)(R.a,{family:"Pretendard",level:"body2",color:"white",className:_(L.titleWrapper),children:[Object(N.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",width:"20%",borderRadius:8}}),Object(N.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",marginTop:2,borderRadius:8}})]})}),Object(N.jsx)("div",{className:_(L.labelWrapper),onClick:g,children:Object(N.jsx)(R.a,{className:_(L.labelText),family:"Pretendard",level:"body1",color:"white",strong:!0,children:Object(N.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",width:"100px",borderRadius:8}})})}),Object(N.jsx)("div",{className:_(L.imageOval)})]})),j]})});n.displayName="SkeletonTimeLineBanner";var s=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:54},startBody:{col:23,line:46},endBody:{col:1,line:54}}},s=`import {
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
`,v={Default:{startLoc:{col:23,line:38},endLoc:{col:1,line:46},startBody:{col:23,line:38},endBody:{col:1,line:46}}},p=f.default={title:"@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner",component:n,argTypes:{},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:46},endLoc:{col:1,line:54},startBody:{col:23,line:46},endBody:{col:1,line:54}}}},docs:{page:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)($.g,{}),Object(N.jsx)($.f,{}),Object(N.jsx)($.b,{}),Object(N.jsx)($.d,{}),Object(N.jsx)($.a,{story:$.c}),Object(N.jsx)($.e,{})]})}},actions:{handles:["click"]}}},y=function(l){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{style:{padding:24,width:328},children:Object(N.jsx)(n,{})})})};y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <SkeletonTimeLineBanner />
      </div>
    </>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return g});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),c=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),W=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),R=Object(W.a)(function(b,j){var u,O,L=j.isArrow,_=j.isLabel;return{root:{backgroundColor:b.colors.white,borderRadius:b.radius.radius20,padding:b.spacing.spacing20},container:{display:"flex",gap:b.spacing.spacing20,cursor:L?"pointer":"auto"},image:{borderRadius:b.radius.radius20},textContainer:{width:"100%"},description:{marginTop:"7px"},footerWrapper:{marginTop:"7px",height:_?b.lineHeights.body3:"47px",display:"flex",alignItems:!_&&"flex-end !important"},textBreak:(u={overflow:"hidden",textOverflow:"ellipsis",height:b.lineHeights.body3,wordWrap:"break-word",display:"-webkit-box"},u["-webkit-line-clamp"]="1",u["-webkit-box-orient"]="vertical",u),textRoomBreak:(O={overflow:"hidden",textOverflow:"ellipsis",wordWrap:"break-word",display:"-webkit-box"},O["-webkit-line-clamp"]=_?"1":"2",O["-webkit-box-orient"]="vertical",O),flex:{display:"flex",alignItems:"center"},spaceBetween:{justifyContent:"space-between"},arrowImage:{width:"16px",height:"16px"}}}),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),V=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),C=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),t=e("./node_modules/react/jsx-runtime.js"),n=["hotelImage","title","titleDisable","message","messageDisable","messageUnderline","messageClick","label","roomType","onClick","isArrow","isLabel","className","children"];function s(b,j){if(b==null)return{};var u=v(b,j),O,L;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(b);for(L=0;L<_.length;L++)O=_[L],!(j.indexOf(O)>=0)&&Object.prototype.propertyIsEnumerable.call(b,O)&&(u[O]=b[O])}return u}function v(b,j){if(b==null)return{};var u={},O=Object.keys(b),L,_;for(_=0;_<O.length;_++)L=O[_],!(j.indexOf(L)>=0)&&(u[L]=b[L]);return u}var p=Object(w.forwardRef)(function(b,j){var u=b.hotelImage,O=b.title,L=b.titleDisable,_=L===void 0?!1:L,T=b.message,D=b.messageDisable,U=D===void 0?!1:D,B=b.messageUnderline,I=B===void 0?!1:B,x=b.messageClick,a=b.label,d=b.roomType,r=b.onClick,m=b.isArrow,o=m===void 0?!0:m,h=b.isLabel,P=h===void 0?!0:h,M=b.className,A=b.children,S=s(b,n),k=R({isArrow:o,isLabel:P}),H=k.classes,G=k.cx;return Object(t.jsxs)(c.a,Object.assign({component:"div",ref:j,className:G(M,H.root)},S,{children:[Object(t.jsxs)("div",{className:G(H.container),onClick:r,children:[Object(t.jsx)(C.a,{src:u,className:G(H.image),alt:O+" | "+d,width:98,height:98}),Object(t.jsxs)(c.a,{className:G(H.textContainer),children:[Object(t.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(t.jsx)(N.a,{family:"Pretendard",level:"body2",color:_?"tertiary30":"primary1",strong:!0,children:O}),Object(t.jsx)(N.a,{family:"Pretendard",level:"body3",color:U?"tertiary30":"primary1",style:{textDecorationLine:I?"underline":"none",cursor:I&&"pointer",width:"fit-content"},onClick:function(ce){x&&(ce.stopPropagation(),x())},strong:!0,children:T})]}),P&&Object(t.jsx)(N.a,{family:"Pretendard",level:"body3",color:"primary1",className:G(H.description,H.textBreak),children:a}),Object(t.jsxs)(c.a,{className:G(H.flex,H.spaceBetween,H.footerWrapper),children:[Object(t.jsx)(N.a,{family:"Pretendard",level:"body3",color:"primary1",className:G(H.textRoomBreak),children:d}),o?Object(t.jsx)(V.a,{src:"IcAngleRight",width:16,height:16}):Object(t.jsx)(t.Fragment,{})]})]})]}),S.children]}))});p.displayName="StatusCard";var y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,i={Default:{startLoc:{col:23,line:108},endLoc:{col:1,line:116},startBody:{col:23,line:108},endBody:{col:1,line:116}}},y=`import {
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
`,i={Default:{startLoc:{col:23,line:100},endLoc:{col:1,line:108},startBody:{col:23,line:100},endBody:{col:1,line:108}}},l=f.default={title:"@travelmakers-design-v2/core/General/Card/StatusCard",component:p,argTypes:{hotelImage:{defaultValue:"https://picsum.photos/60/40",description:"\uC774\uBBF8\uC9C0 \uD45C\uC2DC",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"\uD22C\uC5B4 \uD655\uC815 \uC804",description:"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},message:{defaultValue:"00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815",description:"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roomType:{defaultValue:"\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8",description:"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},label:{defaultValue:"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",description:"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isArrow:{defaultValue:!0,description:"Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",control:{type:"boolean"}},isLabel:{defaultValue:!0,description:"Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",control:{type:"boolean"}},onClick:{action:"clicked"}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:108},endLoc:{col:1,line:116},startBody:{col:23,line:108},endBody:{col:1,line:116}}}},docs:{page:function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)($.g,{}),Object(t.jsx)($.f,{}),Object(t.jsx)($.b,{}),Object(t.jsx)($.d,{}),Object(t.jsx)($.a,{story:$.c}),Object(t.jsx)($.e,{})]})}},actions:{handles:["click"]}}},g=function(j){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{style:{padding:24},children:Object(t.jsx)(p,Object.assign({},j))})})};g.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <StatusCard {...props} />
      </div>
    </>
  );
}`}},g.parameters)},"./packages/travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return i}),e.d(f,"Skeleton",function(){return l});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(g,b){var j,u=b.status,O=b.arrowHidden;return{root:{backgroundColor:u==="default"?"#0D5E49":"#C96F48",borderRadius:g.radius.radius20,padding:g.spacing.spacing20,position:"relative",overflow:"hidden",minWidth:"328px",cursor:"pointer"},titleWrapper:{marginBottom:g.spacing.spacing30,maxWidth:"220px"},textMaxLength:(j={},j["& > div "]={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},j),labelWrapper:{display:"flex",alignItems:"center",width:"fit-content"},labelText:{width:"fit-content"},arrowImage:{width:"16px",height:"16px",marginLeft:"2px"},imageOval:{position:"absolute",width:"78.03px",height:"110.61px",right:-5,bottom:-25,background:u==="default"?"linear-gradient(149.99deg, rgba(19, 134, 104, 0.8) 0%, rgba(127, 102, 16, 0.8) 88.27%)":"linear-gradient(103.18deg, rgba(222, 148, 80, 0.48) 40.51%, rgba(217, 59, 59, 0.8) 100%)",borderRadius:"7575.76px"}}}),R=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),N=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),V=e("./node_modules/react/jsx-runtime.js"),C=["status","title","message","label","arrowHidden","onClick","className","children"];function t(g,b){if(g==null)return{};var j=n(g,b),u,O;if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(g);for(O=0;O<L.length;O++)u=L[O],!(b.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(g,u)&&(j[u]=g[u])}return j}function n(g,b){if(g==null)return{};var j={},u=Object.keys(g),O,L;for(L=0;L<u.length;L++)O=u[L],!(b.indexOf(O)>=0)&&(j[O]=g[O]);return j}var s=Object(w.forwardRef)(function(g,b){var j=g.status,u=g.title,O=u===void 0?"&nbsp;":u,L=g.message,_=L===void 0?"&nbsp;":L,T=g.label,D=T===void 0?"&nbsp;":T,U=g.arrowHidden,B=U===void 0?!1:U,I=g.onClick,x=g.className,a=g.children,d=t(g,C),r=W({status:j,arrowHidden:B}),m=r.classes,o=r.cx;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(z.a,Object.assign({component:"div",ref:b,className:o(x,m.root),onClick:I},d,{children:[Object(V.jsx)("div",{className:o(m.titleWrapper),children:Object(V.jsxs)(R.a,{family:"Pretendard",level:"body2",color:"white",className:o(m.textMaxLength),children:[Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:O}}),Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:_}})]})}),Object(V.jsxs)("div",{className:o(m.labelWrapper),children:[Object(V.jsx)(R.a,{className:o(m.labelText,m.textMaxLength),family:"Pretendard",level:"body1",color:"white",strong:!0,children:Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:D}})}),!B&&Object(V.jsx)(N.a,{src:"IcAngleRight",color:"white",width:16,height:16,className:o(m.arrowImage)})]}),Object(V.jsx)("div",{className:o(m.imageOval)})]})),d.children]})});s.displayName="TimeLineBanner";var v=`
    
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
Skeleton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Skeleton.parameters };`,p={Default:{startLoc:{col:23,line:95},endLoc:{col:1,line:103},startBody:{col:23,line:95},endBody:{col:1,line:103}},Skeleton:{startLoc:{col:24,line:105},endLoc:{col:1,line:113},startBody:{col:24,line:105},endBody:{col:1,line:113}}},v=`import {
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
`,p={Default:{startLoc:{col:23,line:87},endLoc:{col:1,line:95},startBody:{col:23,line:87},endBody:{col:1,line:95}},Skeleton:{startLoc:{col:24,line:97},endLoc:{col:1,line:105},startBody:{col:24,line:97},endBody:{col:1,line:105}}},y=f.default={title:"@travelmakers-design-v2/core/General/Card/TimeLineBanner",component:s,argTypes:{status:{defaultValue:"default",description:"\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.",options:["default","alert"],control:{type:"inline-radio"}},title:{defaultValue:"\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8",description:"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},message:{defaultValue:"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?",description:"Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},label:{defaultValue:"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",description:"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},arrowHidden:{defaultValue:!1,description:"Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},onClick:{action:"clicked"}},parameters:{storySource:{source:`
    
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
Skeleton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Skeleton.parameters };`,locationsMap:{default:{startLoc:{col:23,line:95},endLoc:{col:1,line:103},startBody:{col:23,line:95},endBody:{col:1,line:103}},skeleton:{startLoc:{col:24,line:105},endLoc:{col:1,line:113},startBody:{col:24,line:105},endBody:{col:1,line:113}}}},docs:{page:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)($.g,{}),Object(V.jsx)($.f,{}),Object(V.jsx)($.b,{}),Object(V.jsx)($.d,{}),Object(V.jsx)($.a,{story:$.c}),Object(V.jsx)($.e,{})]})}},actions:{handles:["click"]}}},i=function(b){return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{style:{padding:24,width:328},children:Object(V.jsx)(s,Object.assign({},b))})})},l=function(b){return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{style:{padding:24,width:328},children:Object(V.jsx)(s,{status:"default",arrowHidden:!0})})})};i.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner {...props} />
      </div>
    </>
  );
}`}},i.parameters),l.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner status={"default"} arrowHidden={true} />
      </div>
    </>
  );
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return y});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(i,l){var g=l.type,b=i.colors,j=i.spacing;return{root:{display:"inline-flex",alignItems:"center",minWidth:"328px",minHeight:"53px","&::after, &::before":{content:'""',width:"100%",height:"1px",backgroundColor:b[t[g]]}},title:{padding:"0 "+j.spacing70}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","title","className"];function V(i,l){if(i==null)return{};var g=C(i,l),b,j;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(j=0;j<u.length;j++)b=u[j],!(l.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(i,b)&&(g[b]=i[b])}return g}function C(i,l){if(i==null)return{};var g={},b=Object.keys(i),j,u;for(u=0;u<b.length;u++)j=b[u],!(l.indexOf(j)>=0)&&(g[j]=i[j]);return g}var t={navy:"primary",white:"white"},n=Object(E.forwardRef)(function(i,l){var g=i.type,b=i.title,j=i.className,u=V(i,N),O=W({type:g}),L=O.classes,_=O.cx;return Object(R.jsx)(z.a,Object.assign({component:"header",ref:l,className:_(L.root,j)},u,{children:Object(R.jsx)(Y.a,{className:L.title,component:"strong",family:"Noto Serif KR",level:"display4",color:t[g],textAlign:"center",strong:!0,children:b})}))});n.displayName="HeaderSection";var s=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:46},startBody:{col:23,line:39},endBody:{col:1,line:46}}},s=`import { Meta } from "@storybook/react";
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
`,v={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:38},startBody:{col:23,line:31},endBody:{col:1,line:38}}},p=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:46},startBody:{col:23,line:39},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/HeaderSection",component:n,argTypes:{type:{control:{type:"radio",options:["navy","white"]},defaultValue:"navy",description:"HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},title:{control:{type:"text"},defaultValue:"Title",description:"HeaderSection\uC758 title",table:{type:{summary:"string"}}}}},y=function(l){return Object(R.jsx)(n,Object.assign({},l,{style:{backgroundColor:l.type==="white"&&"gray"}}))};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <HeaderSection
      {...props}
      style={{ backgroundColor: props.type === "white" && "gray" }}
    />
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/Icon/Icon.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return Je});var K={};e.r(K),e.d(K,"IcCompanyInstagram",function(){return R}),e.d(K,"IcCompanyApple",function(){return V}),e.d(K,"IcCompanyBrunch",function(){return t}),e.d(K,"IcCompanyFacebook",function(){return s}),e.d(K,"IcCompanyGoogle",function(){return p}),e.d(K,"IcCompanyKakaoPay",function(){return i}),e.d(K,"IcCompanyKakao",function(){return g}),e.d(K,"IcCompanyLivinginhotel",function(){return j}),e.d(K,"IcCompanyNaverPay",function(){return O}),e.d(K,"IcCompanyNaver",function(){return _}),e.d(K,"IcCompanySamsungPay",function(){return D}),e.d(K,"IcCompanyYoutube",function(){return B}),e.d(K,"IcAlert",function(){return x}),e.d(K,"IcAngleDown",function(){return d}),e.d(K,"IcAngleLeft",function(){return m}),e.d(K,"IcAngleRight",function(){return h}),e.d(K,"IcAngleUp",function(){return M}),e.d(K,"IcArrowLeft",function(){return S}),e.d(K,"IcArrowRight",function(){return H}),e.d(K,"IcArrowSingleLeft",function(){return re}),e.d(K,"IcArrowSingleRight",function(){return q}),e.d(K,"IcCheck",function(){return te}),e.d(K,"IcClose",function(){return ue}),e.d(K,"IcExpand",function(){return ve}),e.d(K,"IcHotelTypeMini",function(){return ge}),e.d(K,"IcHotelTypeResidence",function(){return Ce}),e.d(K,"IcMinus",function(){return Te}),e.d(K,"IcPlus",function(){return Oe}),e.d(K,"IcReset",function(){return Me}),e.d(K,"IcResultFail",function(){return Ve}),e.d(K,"IcResultSuccess",function(){return we}),e.d(K,"IcStar",function(){return Pe}),e.d(K,"Logo",function(){return We}),e.d(K,"IcClock",function(){return Ee}),e.d(K,"IcDiscount",function(){return se}),e.d(K,"IcDocument",function(){return le}),e.d(K,"IcEdit",function(){return J}),e.d(K,"IcHotelFill",function(){return ae}),e.d(K,"IcHotelLine",function(){return je}),e.d(K,"IcLogout",function(){return Le}),e.d(K,"IcMarker",function(){return Ke}),e.d(K,"IcProfile",function(){return Ye}),e.d(K,"IcSearch",function(){return Qe}),e.d(K,"IcSettings",function(){return $e}),e.d(K,"IcTalk",function(){return qe});var $=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),Y=e.n(E),z=e("./node_modules/core-js/modules/es.object.assign.js"),c=e("./node_modules/react/jsx-runtime.js"),W=function(Z){var X,ye,Se;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.329 5.798a4.32 4.32 0 0 0-.242-1.308 2.335 2.335 0 0 0-.602-.946 2.617 2.617 0 0 0-.93-.602c-.345-.138-.724-.224-1.31-.241-.602-.034-.775-.034-2.239-.034s-1.619 0-2.204.017c-.586.017-.948.12-1.31.24-.361.121-.654.328-.947.62a2.335 2.335 0 0 0-.603.946c-.138.344-.224.723-.24 1.308-.018.585-.035.74-.035 2.202s0 1.617.017 2.202.12.946.241 1.308c.12.36.31.653.603.946.293.292.603.482.947.602.345.12.724.224 1.31.24.585.035.74.035 2.204.035 1.464 0 1.62 0 2.205-.017a4.13 4.13 0 0 0 1.309-.24c.361-.121.654-.31.947-.603.293-.292.482-.602.603-.946a4.02 4.02 0 0 0 .241-1.308c.017-.55.017-.722.017-2.185 0-1.462.035-1.651.018-2.236Zm-.965 4.352c-.017.517-.12.792-.19.998-.103.241-.223.43-.413.603-.19.189-.362.292-.603.412-.19.07-.465.172-.999.19H8.023c-1.412 0-1.601 0-2.153-.018-.516-.017-.792-.12-.999-.189a1.64 1.64 0 0 1-.602-.413 2.084 2.084 0 0 1-.414-.602c-.069-.19-.172-.464-.19-.998V8c0-1.428 0-1.6.018-2.15.017-.517.12-.792.19-.998.103-.241.223-.43.396-.603.189-.189.361-.292.602-.395.19-.07.465-.172 1-.19.55-.017.723-.017 2.152-.017 1.43 0 1.602 0 2.154.017.516.018.792.12.998.19.242.103.431.223.603.395.19.19.293.362.414.603.069.189.172.464.19.997.016.551.016.723.016 2.151s-.017 1.6-.034 2.15Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.991 5.44a2.765 2.765 0 0 0-2.764 2.773 2.765 2.765 0 0 0 2.764 2.774 2.78 2.78 0 0 0 2.782-2.774A2.758 2.758 0 0 0 7.991 5.44Zm0 4.587a1.81 1.81 0 0 1-1.808-1.814C6.183 7.22 7 6.4 7.991 6.4 9 6.4 9.8 7.202 9.8 8.213c0 1.012-.8 1.814-1.809 1.814Z",fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(c.jsx)("circle",{cx:10.773,cy:5.227,r:.64,fill:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"})]}))};W.displayName="SvgIcCompanyInstagram";var R=W,N=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.854 2.494c-.439.477-1.129.953-1.882.834-.062-.656.251-1.43.69-1.907.44-.477 1.255-.954 1.882-.954.063.894-.25 1.55-.69 2.027ZM10.544 3.626c-1.066-.06-1.944.596-2.384.596-.501 0-1.317-.596-2.133-.596-1.066 0-2.007.596-2.634 1.49-1.192 1.849-.314 4.65.752 6.141.565.775 1.192 1.61 2.07 1.61.816 0 1.067-.477 2.008-.477.941 0 1.255.477 2.133.417.878 0 1.443-.775 1.945-1.49.627-.835.878-1.67.878-1.789 0 0-1.694-.656-1.694-2.504 0-1.61 1.318-2.265 1.443-2.265-.815-1.073-1.945-1.133-2.384-1.133Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};N.displayName="SvgIcCompanyApple";var V=N,C=function(Z){var X;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("mask",{id:"ic-company-brunch_svg__b",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:3,y:1,width:10,height:14,children:Object(c.jsx)("path",{fill:"url(#ic-company-brunch_svg__a)",d:"M3.773 1.934h8.455v12.131H3.773z"})}),Object(c.jsx)("g",{mask:"url(#ic-company-brunch_svg__b)",children:Object(c.jsx)("path",{fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F",d:"M2-1h12.682v18.197H2z"})}),Object(c.jsxs)("defs",{children:[Object(c.jsx)("pattern",{id:"ic-company-brunch_svg__a",patternContentUnits:"objectBoundingBox",width:1,height:1,children:Object(c.jsx)("use",{xlinkHref:"#ic-company-brunch_svg__c",transform:"scale(.00422 .00298)"})}),Object(c.jsx)("image",{id:"ic-company-brunch_svg__c",width:237,height:336,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAAFQCAYAAABTbvmQAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA7aADAAQAAAABAAABUAAAAABrfFyXAABAAElEQVR4Ae29eZRcxZknmlkSb/rQUon+4/VgSbjPe+8MoxL+p8/Qkuw/1NUMmxb2RQtYz9jWAmbYtEDTYCMJzMMsksAMxiAJTLMYLRgkFkm4s7LONFq63zmvB6kk6JlzpkVB93szg6Qq4WMkVeb7/eLGdzPuzXtv3ptb3cyMkLJurF9EfBG/+GKPbLFYzFhlOWA50HwOXDVn7riLL7300mkzpk+fOqVnyvgJ3edIKvbv379v9+7dex588MEPxU6+WQtaYYX9Wg40hwMPr1l70S1Qk86b/M1MMTOTsZ7JFjPE4lmZLpWIAszZTLb//x38fHDZsmVLf7Nzx0lJnQWtcMJ+LQcazIHt27bc8e8vuuQvJpxzDiVqL1CayXRlgVso6LPZbCZTgAnfIrSAMSCczQwPD++cP++Gee++98Hv6NWCllywynKggRzYsP6pq79/yw9v0d1fJVlVdAQoQKsUkUugCngdW2UmiIdPHHune8IfXUVrRxZrD/ZjOWA5UD8OrFy+4sKhoaEdd951z90A7JWgXAIsoxHAGlEqaRtg7u7+o+4N69ZfTScraQ0GWa3lQL04sH/vvkcxwTQDUrKXNDFEVZKUelMVMiPK2FUc41hrwSt+GEy6yV8Mfv7axMmTbrKSVrhjv5YDdeDAmodW91K6Tv/2jO9AavYSgwqHqusLA1GolWgF0ASnXzEsx7UFuAGwk+luJa2fS9ZsOVAlB/bt2/fYDChAT3WDFVhJCxacWFJmNY4tZgqFrkyXEpkFTD7BRXeVg8a0Rpe5f+GCeQuspK2ygGwwywHhwL0Yuw4Pf/UuAQu7mWomWBzxLaILrKQpBWmXI005UazADDQDv0pPMxWlqugJdtesl4fGOt7sX8sBy4FqOPDWtu13PPbEE9cUioVehvdLStpls3q8SoOe+1WgpZv6pzR0LDOza0x1pngakrkrMwb/rKRVLLF/LAeScWDu7DlnHxk4/Nw11117HXDVS0BRGV1ZZSaIg5TYyzfIj2k3tovbLsb0086OaU3OWL3lQAwOrFqx8sIHf/Ljn4wfP36ueA+SsGInX79fv724B30JfchcgvbPbfc4iEPWznIghAPbt267/WdPPH4DnGe6oAOi/BKWwcVOvkLSb3bpiIcKX9s9rsAg62w5IBw4fGjg2Wuvu+46mJ3ZYW43ZPfXGXaKN/VV9h6bcgPBGxewXPQ5sG//PlKxoC3npbWxHPBw4IrL547j2uuUqT1TOX4VxyDACVj90pRhxE3C8yvANe3C9AOHDx6mmwVtGIesveUAOHDvylXTXn/z9dc5fgXAeoUpJgBFz28QWBkGm/49bhKGbmFh6CaqWMz2HTp4+CDNdiJKuGK/lgM+DjyDvb633/Uf7sRaaa/aZohusADTnBM2e8fibpLatm1bBqDP4OisaZ1MX8z0Qcr/hQrESOzP8sDWAW8d2LZl6+2FQiFXLIAz/BkK9q5J9KeLZ+BtxPELZ+0j/9ab22+HZ2IsUp0eOVM8U0D4EHX444PPwklh1XaPk7V31ncHcEBNOF1/3Q2qO0zpqrcnETRUZndW9Nz0wGPrMikFXT8k7Larb7jm5/etWH5hJbaN6QKFrANHASfDSJwHDhzYLzQsaIUT9tvxHJgza/bZg4ODr/ZcMPVbYEbpGJ3ag+iAVUDkZxZACrw6G/vx6cfS0BZMND9Nf5deenmifjEbAmkM9Ld/y5YtW904BdX26+0eWX50Fj/mzJo77vjxoR3s7krn1+n6jqhur3SDUS+Kyo/RRRY7+oTKb31zi3SJnaFnoZijQ5SSOOnHT3/o+Im3Ye3QwtdKWrf5sppO5QBniHe+t+PdCRPUDLH0cDU7ulS3VySf8EjMAiaauzDDqyTsDdf/XPytXbv2YkxkVcaZ7noznNBWNNAjZzdb6Dl2BoIlAfZbatUsL9qbF7xdAgIypyaRUNhKQeyJZJWvOPm/hnt+4OAhd7II/pRk/Oyzz17VEtgfNJ55pJBjt13o8euKXNPS6tu7otrydcp3xT3LLywCFOCHC1Knh0sbrzLAqRxoNuzyhwcOPgcHD54WzJt/Luzyvp60l7DfpPvJQnvw6Gev+OlWFtseuWwNlgPtwYHNGzctevzJJ57E4fNe5oiTSHqSWGVQgEID9Z4uq/LhdmP7Dx06dHBKzwW3amv3cz1UsTgyM5vFQfc4ipPTlKRQOr7+TZs2bVYWxh+7ucJghtV2Bge46f9aLOkgtziwjr/8VRBfX+M8K2eIz8qMdQ6046YJgvm/f/H/vfbHk/71TXAKUnnQdmahGThCYY1WAVWWfbTXfnz/3B+sQlL93q3ZcqC1OcBD6y5gmRWCKQYK/lX2LAewmHDi1TC8kA37kd/54eLvLw7iyNPrN6ibExX9CoBl+LFYp+3S67Q0s0HYunXrFurLlHQD7Nc7HrH8aD9+rF295iKMFXP+iaGRkfCdSKgHjpKxpjaeOHFix+zLZ3kmiOCkwMbv8Am9fKSWkCrTlzGyGss6E2G5+fPnTzRpit6NRCzst8R4y4v24cV9K1ZOc2aJMemEghVwhE08wYtXeUGb98/owrOLJRySV3EJAR1UjJW/CBA0Ey1xuBGJhf2WmG950R68UMs6nCUGGEyJpoCLQk6ksDykZp0NkCK8B0dqxnckGVQ9vpFWlWYfXYnHE5lY2q+3ECw/WpcffqmHslRKwCvmSl9iED3dSDCBRmblSkhZLPNgKUmRjNswCGjpP2iZh7Tl52rEwn5LzLG8aG1ecMx54thxbgE011Rp9CpBjNfWb8rzWQ5YRmJmYGCA67Wuikfa8a4Bno+SsvDpzFJRY3+WB+1UB3Bb4jhOFiFPjuJckEYQP5yM4i4oZydUxYmi/G+2brsDwSJxsvCGBX8MP3n8XDWijuydds2RGiRMpzkynkhHRGDdLQ9asg64gCVCNVijAHOqMKIg7PGj+sTF3G937b4/DhYGB4++WgpvNASI/7RuIpQ70+Mb854eOYXztKdzPHhfKa4YK1Rlq0TWwnIg1Rzgedjx3d3d3DMRe50Ua6RyMbibua5s/2H0dy+69JKfunYhGo5lJ+GVaDqjnfcqrNOOUQnR1mpt2Lt4y3uNvxr+3cnb77rzN97A5SYL2nKeWJsW5sDu3bvv53lY9BFnKlj4ARSSN31k1t0gRW+ff/75IGj9KCSIx/pOKFjoM7iM1AsthVMAl1LUrxzJmunD1sqNfrdAcyVRbN3tEKFV6gDPsaLnmff0hmnwWMAcpLQf8X78+PG3o9ZiQcIdNjyCTRswq7Fs6Gyx0PedHhD/ccayEqcbsVjYb6kwLC9ahxdyxA5lphTBIIAQuzhfHSZ/xZy54+A/Fj7c8bOOwB+v3+xPB6bD8qtWLudSUaz4YnmKS8z6i8d0y6f68ukmfQQOfA1UlUDDQCKMsaWx4losvLu4wSmc78HsmTEmPVNViv/o0aNlx+8Q3o3Drw918Hu05nAmWt6MHm+uwAFxfR0LisFRAkAxx/nqMPmH1+CmiQjABLiVAXZkxFniIVgFsPI106L2PFfY/RQQn12nDWKKtRs9ECblPffomleXIrySmg5IuIxzRv1oX0HleW0q/MQWZPs+2vso/OcV+DwthbPcI2koFE+5UdPOWSNGOqHXNGLHyfQl8pwkQ9Zv/MK3vKqOV7t27bofCM25fVswMkzhPKwLXoJFAYpAc365ff/pbx+BKTYe3DG00AiLWNvzTuMzZ854fSHtN89fEHiSJyotsRMZRcS6xS9sy6v68Gr9+qeuBS+dGVtoKimPIPR6zuPmibKrYuAlEhuxtkd643G7yto6sWSXNEUmTDzZb3QBWv40lz9Lfrj4fPDcHUtGABLeohWXduAjEQ70Fam4+ylBzL4dUP5rUZOkIVFikxC2fpNVBMuvePzi2ilfsEsEGDCXu41NpbvIZTcdwk8kJuSyNj8t0xyo9+I71uGDsLREJjAskLWPLljLn8bxh11ZE7DUc2InlvJKu7w6tlcBpP6y1Mfm3MmkWPH6PEUdcPfHF2S2oE1YaEFMtHaNA6nJWz276+54MsELfxWV+Mc3t+nFjYsQIFH93/0BJr7QLY/ZRISlJ6+ldaK4zbRWHdAkYvXJCt/yKzm/Vq9efZGaKQbzzK6uAqJXgiofYX8I2D0xT+2AhouPZUuWToHZnfhivEnjZvhqGgszHdS7ifI7WHOpwCwvRpcX3EChAMthKcRcoeAsnSjgqI5qaR0UPoIVxSOWWHACKPFMMUJmvsJFbYxblAIsDE4axDb6+/lngzy6VzPmvEcRAo8UWEvLgdHlwPMvvPACDsj0qoMzOC6TzY5RCeKF3nwmJ4vLTc/gSlOshDoJpTDCJadK8VANfgUc4zk+fOLklKk9ZZeKOx7D//7f+w88dnb3+G5E5Cq5vNxJQyaD87LqpzwwTigCVI4Nwb3vxw/95CeOS21/LWhr458N3WAO8KjdNyZNVOdUo6LCFeLq3mAFFAJbjsYRaPjxcayb5y+cF0UjyG3Dhg3X/rvp02bATR+7C/KFe4txHvcs373FCthO/P3vbN2+7cUXX/wvwaET2tZDXFsatXd5LA/Lech7isGXWBM/0k01erCqK626tOgW38uHthJ2TWV5x0MTRMKUdJnpburr1S0GWS29E2ZEAtpveSWzPKkfT/RZ1kQbGJxhK0pBlGORK3svNmad9x9EELJRXzMNCrhoMBbccCPvjqp5LCs06kZICNpv/Qqnk3nJF9kVAGSWFsyIqwwpF/j8JOhUrPf6VkVntjjOzicmVisDuDVtogC5wHTaMW3C4YT13ngOfLh7z/2TJk1S41g10aMndirFLJWc/qjH27BH414XY9LmA109PT1TQWMm6agX9UwPQXqOXaGYVECNCejDTPXBO2Lc+aQCJvkjGbXf4FbN8qW5fFmzZg3Ps7r7itWthQnWYeXYGzf08xrVpOWn7xwuSViKzRjxq+N58CpStpa9xZXSHCh+KwWy7s2tyJ3C7yv9dxUj4+zqEggVlUaLA9oRXPi9KvHEk7oBA2NQo3tdMVrXg6AVFkhDzbueQCYUm6EOUYGsWzhDLW+q583HH//Ds+CfUtxA4YIHgOC9xKdHfOdRxTO+XxdOwZ2bLEbyv9q0+XvQJKrbl8y6/OzjQ/pyc8RH8Culwci4eSbWVZS+hgTGncWOO0D/9FPrKt5dDDqJ0mf6rzqgScTqqy8AyzuHd+V3LRkAAZOIHSVFQyaFNLaqnnjC+PdVJdVJH2AkPVEi7U07urmNinhEt77amWqQiI3F2B6TELV+4xeA5VUxw/OxAEAOvHBVACDK3Ew/lMwnThzjMyCJ67Q+BF9xeUnik68kSJurbjCSpjlxBpNGYP0nr0SdxjO5BQL5rko5EnAkP3fOrMQTT/v37nsM4UsTX74UEJB+kPq8KOOJ418mPkyPgFXhzy75JJlqt37rzoF9+z56bNw5484xCbMyi3L1JStxcr9Ybel/ZO1P1+7Y+d5J1zKGhkf9ps34M2xRLIRuUVRLTtjjrNZyQmjiUP7OmxfcvCDEuf7W1aLdhquulbR8K/HN2aY4gm2KGK2GjFXBL+Um7vI17HNbt26t+KKdn+8MA1o50glTjMuND+JY9PJV4TDxFPclAvivSrL6w9WFiJ+oNdencNqZj3w7FrM9OTW9VAZY3ySUz90EUzW3QFDCgkbOnFgygahmjkNAavpj+iu9Ct+IMrSgrVPr14jCaWeahz4+qJZ3nMtiAFKNIGeTgglaQij4vCyf41DgT1CGsnmC0Qlo1flcw0LZa0fGzmcqA1RV19XUo0wtaBMUeD0YbmkUMy9v3LQIOMiBF44CJjwSTOyNL1Zh1Too4aP95pcuXsJbGWPX4XvuuYcbLgInndS9xAWjsWBExjrs1+Y6LdJezamhJGmN8hs7w1FErFv8itPpvJLjbuCDRxGIJnBNvcejY8jjWchF0MauvytWrOADV4GAJUnVGPBrdMVNveoyOx5HFbBIAvc1x8+49Wt5VWsdUJsYQCSuInDkp8MkXg/Vty6WrcMKKOVL+qa+zAwJq7vXo4qbUY0cTLHxdxAP/LcpEhSm8gPGdOOEFX9J3nFFgMyGdeu5pbAMsEJbNvqLWdLAr+iVGwBbzZWrCFv3Ol53go1IpKVZ/4JvNk89txn6uqAEjh8kJmBcNwAnyTjWaSRG0CU2xqrIOJVJ37FQf90/pjv0ozJLjMQE4jPQMsyztQ9mouVLZb7wVQDwSSkTEGIn3wi3RNePqlfhuaxjNBCMwzRT75o5qA1SKekSI2kuVl2NaWn1JQZZXtTOC7nkG7ysqFwQwaehzw8c+jj21ac4xO5unPAAU8du0A1Nj/IDwI7GOiwSFYnLSMdKga17NHMtf/RhAM7ayvQsmEJAcDaWb8eKDtYeZY41k4xj9b3G7iyxAq1+5JkRKLNP+poRizt7Bs3e6YR0xMJjLE9xiVl/8ZjeSXz6avh37yvAItNRiuugBDJB4yoH6LkfLV3G2/0r1tWDB/8zN2wowJadx8U6L9d63Y0UEoluTGQdFvHneOsED+THiXM0/FRkxGgkysZZuYK2Ao+kW+yucSLRUUoAK1/4jbUeS4mopbGaJXZwX5p8Ij1D0EPclqdCx5mv9gUCUGwalpoWUTMzZeNqXgUK47We5VVSLyloQVNJ3DgA4maNqEkuowEg2TJFd5U+jF+reeMHBJuOoaZHOBqZtHE2v2JVe0ZWhOAw3s5Rb/hEgEJPErnjVxORAlb5mm7Um/aIs6orakBmVPAzKpGOVmZtvM2pZDxYDl47Y0toYikgh0DSYKq4GV+WdMJoG7SEZqBXdqvTsMsJiYuNxdgekxC1fuMXQLvxSm2iQFdTQKNBiGzGVnk9Fg6tm/s+2vso6OZIsRL9MHeG57G+aq5ZRbShaWuG26hG3owM2jiaW8Gc+371JBBPybC/y18FJV6i3r1hd1m/xB7ZJQ7aAaVO7OhICNhKDQOSm1pspDZhaWaaTVtwhf7tBx8+AHDkvKDhNM9psCyGgoRWdw8HAOYvl6+cxnFumOSUhsFxN2eOzyBixE8rB7R59UB1QBzw0RJ4aIlEtgozOzmdS5YsUS+lh4HKOQ+rwavAUwIW+MZ7i3NPPvn4lUE85D3G2GyRMzdcMIypfo97jxmHqxiHnIeFHiu0+YMHDz57xWW4MaNFwBmWTgvaFi/AsIJttr1eJ0W05YpA9oCZgCrwMnJKQUcAHgrZpsjxKyRkTnkM+FOiy0bAWVyiXekQgqIfa70XBFoCDy2RyFZhZqemc/eu9+8HUNTkE3gQqgSk9KDApiXh8ePH3/ZvGVTrr9iZBK+B41eXhtCiRbnKc4ytTxi1TV1vm4ygvGxeRoEHvGgcvA8EVkkKEk2OJHRkIc1QBO1IMbd29cN8PNotPzkDq/wE/DHpUm+aDe95vCL/gEm3XfQuo9olQzYfpcrfDF5QSrK3KyoIRAIq4Muv8rs+eO9+WLr1UHWHZY1XA1LCS2AxS1zKDNqafp5d9STnbs34W0HvMqsVEmvTWKrcaeDFpo0vLEI68jLfA71HCbg8loZBj4NVHbx5/oKJ+nlIV2qb4UUvX4OMqc1vfOHFm2HR1vW6rTPX7oU3mvmbf+O8c53lHT0+NaFj6MtBhg6ynoBauniZuk3RvJ2RwtgjkMssDOIlbZ7v8cy/ccFEWLV9nW77DHZCIY5GHvUmB0RdAiEManzpB6oye8A3Utz9wR56z3DWGCDOqSGvRqv+0F0pPz3DPsfDAq2+7or8JMJhIs9JiVv/yQqjVfhVNlEElPmBRbNpZ95bjF1PRcwOFzEedsQq56gqKIbnTwMaXeiRpjwriWSlDiOpS1AamWTTVKq4aq+usbdYsGYClHam2a8nYI8ePRoolYWe/+uAVaE7v2+fOpDQsXXXvppX/zfN2priY4//7HFAuNd9TU7nlmZT0QzgKSuldxz7Xt780v8J8zcmT56coT1/eLXODBqoz2YK/Qf27//ZwvkL5k2fPv3eQE8dYmlB2yEFXY9sPrL24Yt7enqmAGkuOQJTwElL0fPrANLxyhDoFg9+7/u3/Io2yo2Y1hfm0y5KAbD7pk3/9r2vvfH6v0T56wQ3C9pOKOU65fGOO+74DwBbr0mO4OM/KhOoJmAd/4W++1atWkk9lnqG8OlTwRg0O4bWkQqAncFzr5GeOsWRjLY/y4NKdYDjSIxNc/Dn7OulRpR/ulfsS9/cyxtfXASjW9cgdV8pOVfWcScVN3KYNDpVbyVtp7TONeTztiVLz8c4coZI2a4uVBsCEDQBZEjKaOKff/75F4u+/wPVLRafz2zYsAEE+hQRZ+grToHfLkTSDfX0hnXXBnroJMtOba1svktSrxIvho9BwlGaGhKVM8I0UgLyF6Fy8+ZhI4YhZUXPNVY1s6w3W0TQcOJGNHp92JXYQquTvlbSdlILXUVeX9n80vfGTZjQ7Y4/NQ1nLJvJUALyB+CqnyeKQvFvcBZ28xtvvBE4eYS3drao8XCMMW2heCZTyI5kJp03+ZtXzJk7zhNPhxksaDuswJNkF8sr5373lu/dAkz2Vgo3JtuVGQP4mmoQapGeLTbtRb9969at0PdRSlZS2exYJENNWM0cP368BW0lhln3zuTA41DI+czKkIIvejLHthiv3gsVxbl33nv3d3Qvn2kuD8VVJiHP8XW5j86x8TaNnZNvm9MKHHh6/Yar2RWlNwFLZBCvp749u3fvevX11wK7xSadfXv3fhS7UdAB44DcjKPd9Ba07VaidcoPNkH8AGCKJ2V9ceICtqFLLrv0//JZBxoBwMR1EBNYXOftWJWYYR3LqQ7KOA+ic3lFZZnjzViikKtAaka6byVUXHZNnzFjhldIh4QseeofgArx1RHWFrQdUczxM3krXqib8Z1vfwchZhIn7Io6K7LRNIhr+O07sG//vl/88vlPo307rlz/jePP8VNw245O38qYjTNzF5+x1mercwBd27fHT+i+UvKhpCfQy2WdSurk0PA747rHX1XJn7gD4I9Omz79PjYKccapbBiGh4Z2ohNwhdDoxK+VtJ1Y6iF53rjxhUUA7DmOMyQbursEU1cxmzmTGcFZnBEjpD6ZQyThd6ow8jdPPPXkOsNDpPamBQvPBWDVLDDXanXXWoUJEiSgn8F2jsyHu/fsiiTcCY7CLPuNv0OoHXk1a5a6xNu9n4l7nbzKuU3Ra+eYsDmqeOjjg8/A5IKvkr5084X37K2fvtoxBUu95yq/zLn9MXY8ldLRiu4dnflWLLBGpZl3LIF2qHLBA4QG3PSfw8vpsW/uxzs69yGiHCMjXf8mSGXHlsCn7IEBp1G03eNO6E5VyOPDD63unQol3oAV0apGnQYZc6ruMg8MiMJWxc0bN218+92daqOEWId9165e04vloMvg3ks/pOcfLUtcdDdU/1vbtm8zzJ2rZQHZX2fzQF9d6pNrJaNIWWWjBaDY4fHot+LWH84Ww29OwsrTHRUOHDgJcZ4GsXUVeDWazM5tuDo559u2bbuDk08CvDi8oF9KQ3xjr8my+/yYsy2yV4fN8Igf9ZVmphnPdiQ0Tto6wo8Ulv12nrRVdxcbT3qIBOS9xDKkpJ3Yo46YKrd3Lx7HitFT4zs9XEqSwBE0nTGuRK4D2LGst27a7kaMShenYraiH8z4PusC0pj3kcvEHcxw1tjzvivM6NDG7K5yVvrL48dK53GNeEifXeMzBdIrOfj0ufXr118Lr7auah5YRnRoZcCE0EXAS05N3ZbwQhwFqq8B3NMjp+AGECMcDxTAULH+KAkbgz7WYUHfefrSTMA/fzb4apx4OslPRaZ3EjM6Ka+VJp/AC49ypC+lbrGo73eqWHcGDh56Ft5zDFNJmbg2JG2eT14ibMW4OsmPnYjqiJkLbyb37Np9P7YbOgcC4MQKX0llcbtEETujoPrwDMfqSv4PHxp4tueCqVNBuzfOvcYg7qZDJrle2rR5Y6fvMw7kcye1UDavxYw5+eRKNFPMgUlRSj9FqQAGf4FfAha0cyU6joQumSvq8lpKB9JH6I627+jMd2Lhc/KJkCFO5UdzReV4zvlfbEc4Tx0i2AhYt0GAh5E4mDUaDt1199D1x9PJZts9Dux/tKflw2vWXjT1Wxd8i7ljR1d+sXKbzfS9tHnz5p36ipigMNIlRvfWXYulPyzFVlbwo4EYe+23MtE29dHJLVan5V0/4qyWWSgJTWkIXkQqhI28KBzn0rl3ORdJJMJRpyWvX+QTANuvrycDFtodUW3aFpdla/vWbbdj7kndYpjFvBMne/ijAmDK/Pss+p5d//NnfHbKeMXc2eNODB/f0TMFb/wUsZ+44J3U4tF175G+ICqU+tm+t7G3+I677vxNsA9r63KAyLW/9ubBdxcs5AvpxrE7mHyKa7Dc5KDUCAaYMsbE9x8HPn0e9mX1hFsTcfB9h+vXR9M0mu/LKqlK+qVfbuA/f5zoaF9QejrFrqwgOiXjnZTPAby2jvxWVG53WQDrhMgtXDCPoPfUFU5IccKIYbzeK0bj8YDwOd219tD3x2fNJf5bRvkqY7tVjjVrHroY87eRUlZQ5IJWLDBG1WdfPfVk9uWz/sDcnBEQrkTBp/P75dMg8OKhb83R/LDMavMKw8mnOJJQwOT75vwAwkvwSsLCXin6lzBiF/wtrfuIf2xx3KFelm/zMgA/6oozu+Tjju7bT4PD6Yu48wlVpmLm/EfRMUnVhx1Jm82AHMO+9tprr4OmuvhN3Y9oTGiZfsv0RaeqsQJzAgyNyTvz58+ft+PdnSfL/FqLaA7UuxWw9OrbqlbLT3Rhz8ZgM4fwMVVJEjKAf4lHxrB+YiI1/fZhZvpn19pK2OrrSV3FNgrK0ksJD/gINIFDkMQDlge0Of96Kd6Y5WkbV5k0Tb3rIUTD7nqlXVUIautRBA8scyKY06qVZ8U9yy9E2jH5BCDiQLv6hYDItZblFyz3fPbZZ3yl3a0bH3/8D88oqW0MjglUOQvLb0UFL0PHh+0Y1uCryeMkerdgkgSyfksVOo28wNE5VyoCW856KD5R6uvCqeLvR76m39x996wg6FXdODLwyfNxutmni2eKXItV0TFSiZcCHPr/gYPwl1962R8IXfutvg5Z0Nah5UtTBVz/1DoeTo+1xAN/rqK0JM64fxgfVS/USZtE42KXnNJQGvNnu8TVA1TKwvxa0LYZaFG4eYJPKZF2Yq70hX85dI57kI0D7J7xbigVAanpwQK2voAFb92TFRa8bQDeXbt23Q/cVQdaBNy/dx/xljEBq4BoojBU7wBbgMuvnSWuP2BZPhasbQBWFuTC+Qsmon+bE0wRNKJKOrEJ/uKAfBGAdR1NGq5lmMYXyfDw8Lt2lrgxoM2iDKIXcq1rS3Dg8OHDz/X09CzjPgpUFbWBgWUrJ3kqZWIP3rUaGjqZue6669RWDJ7/SRJe6hHjw06ndxZARZ29rZQe6x7OAbsjKpw3LePyCG5WBGCdZz2ANgLHA7gY7XI3HssTwCIwzutp4CfgggLs8PDOhQsX3mQBm4BxCb1aSZuQYWn0/hUuAv/Dbv2mLG+AcBOJc7KutK3QPjOQDkspK+KWZ2G5xZHvAEQqhB8eOgnAzl9gtyZGcqpmxwolUTN9S6DBHHh586++D8B2E3Dqpz+Okc9ujIFNjGJWSHVJuJquzBgFWL4Pi/O2RoPgzdip4kjf8uV3320B6+VLI0xW0jaCq02kiW5wDt3S3mZEKV1u+UqcELL9961ctfKxx392QOzst3EciNEENy5yS7k2DhzYt/8xALZpZWiOlQlcrfpXrlix3AJW2NH4b9MKvPFZ6awYMHQ8dxoUcj2zmTkncKnUt1DsW7Vi5fInnnji75uZhk6Py3aPW7QGDA4Ovjpp8uSFTvILlSeK6pBPX7e4HyeB1t159132IrY68DYJCStpk3ArJX75eNZkKK7HqjXZOBNNdUi7SFmQ6sftjlssYOvA1CpIWElbBdNGOwhfosND0Ff6JF9Dk6VXhBhH/1u46vSa6659uqERWuKhHLCSNpQ16XTg4XR5PMuZGBqJda9wrblRI9lipg+TX/ssYGvlZm3hraStjX/ND13M5BBpbwabHjK8d0lPDMkabbUJ4jrsGNAaw8loQ6wqejCfyhb6//HQ4YMXXHDBj6qNw4arDwespK0PH5tCZfeu9+9XEXG5RV+UVq+Iz+rCJoqABkAv7fT918OfDFjA1ovbtdGxoK2Nf00LvWDBTRMvvWzWZZCovZku7C1mfxVfStgipW6titsdKWF9ikAePjl8Enubb/U5WeMoccCCdpQYnzTaH//4gQcRZqaxqUGRcCajuFWxNqX2FwOgHvoAMc7EvoOD8fNqo25D15MDFrT15GaDaK1auXyanOJxJp8ckYjzrqpL6wFatWlQM01600SJRt9ty5YttSd2SgxJg85ORKWhFCqkARe1vTLpvIk3x9r4X4FWJWcluZ1ZrT5sT1z5+JN2t1MlnjXb3UraZnM8YXxPr99w9aTzJn+TgFXzT/jjlawVn6mMFSNpiuRGgL6fb9iwwQI2Fuua7slK2qazPFmEvOl//IRxV/KIXEkRqAQxu8lOF7lmKSyTUFlnt9O111/381J8VpcmDlhJm6bS8KVl25att0/ontDdVTQBS09OsXF8G/e8LO4k9m3C0BLawX3m6+IpzEGf6cMVqgctYH0FkTKjlbQpKxBfcvKQpjPd9VOfYzKjA9Ii1opMehTWXJ5l1/jIkSO/mDp1ql3aScbYpvu2krbpLI8XIa4zfZQ+TYDFCxniq8DpYae4zTGxAixWeoeHv9q5EioktLVOEQcsaFNUGJKUmxYsnDh9xowZMM+knRq6imO1X6ITyulSe9djcSlN/8L58+a9++679tnJavnbxHAWtE1kdtyoHnjggb9SO58QQM0PZfX4My6BMH8khh8lrSHB+3mQ/d333/tdWDBrny4OWNCmqzwyANCFPRdM/ZY3WXUoJgpa+ZWI9+Ph6I0/e+Jxe/NEiSep19mJqJQVEZ+ZPO+887CRojHKkLL9e3bt3nXJZZf+tDExWaqN4kAdmvBGJa3z6P583TPXArDfVF1iZN+ZMGLXuA7dY5IAYadbXOgfGDgyYAHbmnXMStoUldvxoRM7JozvnsvN+zzFo6aOBMHKEJ5Ynocd29WV6VLHfxx/6ioaPQFF9y64jwVVPtuBmy+uCqdmXdLMAStpU1I6vJHiHGykUNJVA1b0haAzc750q/OwBDjBjZ8JWHqlOwELBx4CsGuxZEqLKitp01JwePEO52N7g5JTANKwLBPkVLITwJZsgnRqpthOPAWxpnXsrKRNQVnhZsPbAVhPWTjjWWdcWxGwFfKge9j92Ba5xQK2ArNawNlK2lEupLmz55y9E7saIEh7/UkhcI31VL+z1xwhaeHUfwR7irGUZO938nKtJU0WtKNcbPv3739s+vTpqyIwp2Z9K/WOw7JB4A9/dfK97nHj54T5sfatxQFPl6y1kt76qVXbFadP53bFaBVzH6N0qYWYNvfdunjpYrGz39bngAXtKJbhnVCIXt37pCaI9eBTfbSek1CFmKUkXWkGVcGz2X68RrD61ddf+2IUs2mjrjMHxtaZniUXkwN/uXLVtEcf/5mSslyXNbu/ap5YTxbHnYQ6g9OwxLZ6TxavuGPBFhNP27f8+KGf9MVMUmq9XTPnqu5/9Yd/8AeTJk2a/E0orDd34Sih2nHChoo9CjZuuDDg+CeffPIpGsDCa2+8/i+pzVCNCbNj2hoZWG1w596nyXXersh6DOgCtIePHPpFz9Rvtdx67LIlt07hJXbf/s6fTf/GxIkTzzvvT76peez0SDRI3V6FnqwjcMUO/vsZZuDgoYMA8Sd79+79qK1mzZlZ+2suD1YuX3EheJ7HT6sR0VT9LRTOIKxDBxJnx9w5s8bBIvVlS15sfXPL7YNHP3sF6SVPFF8gSItF/uc3QsV0V3QB4mdX3LOcvE89X6LS2NKJj8pYmt0IKrMqFjTYkOYaFAGrQJtfsWLFNBhSW7YPr1l78aFDh55DGvMAXQ5fVwkIw77iUdzFHPalP5/fPO5yfps70BAmtTyKSltLJjoqQ2l3W//UuqtRiXIErVSmCsIEPmOoEYqlYo73SsF36sqVz3MODAwooCJ9Ri9DCdSKGRReBXlUboqhjqvfrzKzPdMtpXbPs/FctmTpFLikjl9RaWqpxEZlpFXc2MojrUqx8vgrmLgl/YJOjt0/hEtNmeJlgnO3bt16B9LkdnvD8kU8jQiqTE/KoTKfKvJSA1ZIG3zP7/5g1/2wTw3fKqWlZRJaKSOt4K6loCtljIqD5NemhoaGdoBCKsqT40a+VI/0uHmV3Jl59uFIe3G7+cps+qeF36wDKbgH0SucAT040M3vLrTwVQ0edqe1xDxAKgoZ/Gz7dFw564pu1JqcW8l0n9ipSKyoNan8sh+MfjcPF6tfyy4ncsKxqgswNUkWhBqVZR9IYae8av6MFM/AXM4fAZzLNY1Iv73fLP4lOfyOkDw0OLK4Y86s2WfDlOr6mOrEpZ15SdKHZYfHpALJF+Fjq69Rcd3uo66gKjAagpde3LgI+lEry7e2/eYuASvTFJS/M4XTRf7MpDvoZAAC5zR+yKEGK+mYCueBEd4ALwk543gH5abnKvTkLX9p6rEgG4FlGmgZ5tnaBzOxEl+W/HDx+aiMOfhTSiqmfMU+6ss66qnw2jMuF+fkzqiU47atb5aNVxPlyZXGBhhDmGDmXcVBwPIHlSTOEPKmdX40eYqEVCzLih7iELF+ohn9+eBRju+UkgomX7Gv5jta3TnVDT7+JSbURjxj1qA8iR2/ope8umZgTwSsawdPonfWoHUo4tTBqusu9Gr5Mq5SfIXcplHuvSAvodgMdYgKZN3CGernDZc6WLnNSgE/yZWuqG5AdIu53glz08qQeTl27Bhnv8vAKhWe6TP1/i6vuJV/GTJMlSQxw0nYMN+12mtW52/C7DdoNY2/ceNKXYLiJrxV/JVtpBCRggxUU/mkQuEmxaYtU8yff+NEczaYafCk3d+gwD1MSTj3C49O8BIww8L67YWG375qs8qYE5pavPLwGD6pw0iWibKqMRzYvHHTolt+8P0fgMMzuf+fvJb9saY+SewM98UXX7yGzfM3JQlXrd8Pd++5/+JLL7kM+/FnmocaWGv0mYbYpP15ppkKPMFeYWff9D4o2g1DoaEYxNtCPdhP3TX9zy68UF12lw2+kodhalY6U5JOfPsWzl+w4PVfv5GuwwdMoP01iAfowoK3kYrSIpHEAM35N85reLeN2/zcGWGRQI5IVPkxOgye9DMv7BKXK49dHuI1h0MTr7Jhu/WHy2LtSroCyzHcpwza7J57uujl8SW3KSsHTHTt+2jvo6CUKoykKjFpY04t6dn7tx+xsPNh64xwUyoRaFHRuQ0SARtWbgvRIOidVXnBKvNgTv54QcllGh5WKKmyyk8nh5gCqjPOry0PH33k8DcwrlJS4ut0g8RlH0WTZmdJKQddw/hdDe1UJaaaDKQxDCs+0uVIAqn5sIhSeD9WrWOKHxcIOvzvC6eKH3/8Dw3dpvjii79chPi1BDMkI9JwCpWZq6xMjkfp9J0eOVU8deZruDvh3IqPhoaz3G+88cZtsy+fVdeNC9spdUGfifKD12/2pDmBAXRya9asaeqEH5IXictIx0qBrXswc/Uxs1JFKqvp5bXGASk2UPi6ltIN5aJ/o3brcI8wniPxbTs0wIfkmiAIzg79O2F07vKcvGp0z0BvWskxTqZR0ilfnZZEH39YxgECqcFKahKSJqbUkhZ9XtNd4mF3K5aK9pZ/+CeNWd7hmBLpKxsfmhVX6XX6THtvvlyQ5z77p6Ov6DPDzalflLYBStIq3wAvHivTH/VixjcHj83JS4x4UpOQNDGllrSUneIBMSl8aJMpPaZqxNIDpTbBhQSVAVYSGTfdGs95SuumglVXcB7EkLTKV/JQ61fTy7M3AlqpwEsqEpEWZtSaDn2wWknZOlUWtYm91nT5w3NHE+wwSRYwRg1IeBAQxA401LnU+1asHLWD91iWmcj8SNIlbWFmsfd//eFM93pMnoFeXfBWFyL1Skwb0FEVx1P40d1es16USWTQydX7ehQsg3J85lZwSYAnzWIZ8qVfpu348eNvN3rMiiTEqqNMT0hya7ZmftOST/IjFkPo0f6ieaAPUpeBIUmNQd0wVb6eu56WLl5yvtqdhcrtjaYUJSunozwTSv7GhHnM67FwauqFnixyM1PKi2uVWGPSSNN6bWqYDo62bFrcJR6p82714HG6M+rYmWsVpiFO3PAjxeHhr96FTV14oo/ulTUoEp2qnGJQ6TNBS/1pJ22Y8GnE+Loe+cRLDY+rpAf8McEX4BxpJWHTlO+6VArkuqPpfHrok+cjS97nKBWB1qLnOqda7iF4AA5KRuhq5uuRAZW2PNdY3ZlsxCHxMg1sLHhW1XNe1ZkEU25Mz387+k+v3HjjjamZjPHzZt06telEZcf848mn6ZBQr4cVNZcHoq2ZBu+3tqoGDqxace+0fzP1/ClxSLDAqGT/sakf23WWevQZRdq3Z/fuPb/45fOfKs9V/rltydLzsanh7X875fzzQWLmGOwUlvgRh5cqNhGPwaN9/IkfvOIHX8W+4aGhd555+uln/uS8b37317/+dbr24Hpz0TmmeiC/k2nocSJYEE+Ftvy6e8rJHVCqqTXWkyaqOxwWn2lv6pkLbW6pC8/0tsayQvDnrcxDTAsradukTcTSydXdUKbkDMsa6oZyol/qxez6z+Jhi+JIH2hucO2q0GBC7L47777rbgSdyeBhaRN7lRZIWkP29mP31Tu3Ll229JLLLv1pFUlIRRDhr/C71kQJvVrp1CW8KrQaW/ZOpYFWPIe8J1Zm60+9Nuf1IQMX1CAcW8/NEuqaFIw/AxNkjGND4ucG+VzaZoXj8kBvw1RZl/wJb8UcyJeYlmnayhi7UsRlXqf42/X+B/chr86MrO7axix/jzepULV0i2/VyzkewjAIbbEXM7+ipxv0Oe6XTtOuHyQrad0smx2XfNfja0GbvECSFmBD/avKTYnGGVa1Sd5cIgmuIiZI6MMHnPzDD/0E19IkrqgZtVMHEpI04yhfvEhIMdX3ISFPFctyLk4PseGJk/9q/aRpTFuRIXGY1ml+BuWiNiVhuZBSGbT+ymKC+ODBg1UduePRNFZWdULIkPayPVEt8hRwbzB/OgESL8xq+yFvimz18mNPw+Qv8yg/074W/aZNm76XFj7ZJZ+EMwOPrH344kkTz5uorkdRd8jgBdliZTZinTQDMKlGkrM+MhEEfR/eql2ZMBkZvotzzQ3X34C3WHuzmTGZ07iuhXFQyZu2WaXjYs+YzBn+K5xGvGrKqf+3u/fswhzaFc+/8MualpaSprsR/qdM/da3TLrkrfxM+1r0w8eOf1lL+LqGTUvr0Srp4IFukVZsud2dfzREKJF0Pi95vSkgdo+HV67IzRKk5UmLQdyR/95Y6ZdLVKtXr66qKw7ysdPZTL96i6GR++q1Hn7qwqXdqhQ9kZnKQmhmgSeJS86emgVbTfVgeP70YfnYZcCbH3gY3h+/38w0SRxK7/xpqfdqkOTYfEH3P8cs1qKCeGjQy+utqrHThLAN89swwo1M9KjRxqRNhcI1yjlYS9lHKQiV6F5deYjaKzs1OIOjMm/ByL/sHHZvu/J2juV5L00PYUdFa7NsffocAqeGd6lJSJqYEpQWtWGcs7R+1MCzWcAwBiuG02EB2vyuXfGfV1yz5iHeUVS2w4nxGmQD08Hu8PLlrf/6OfIfWFf17q9gntfJVt/5HBh/WLoaaZ+ahDQyk7XSvhmHrAEOZx1QLfNoCQfQUMUGrQ5LIMVNk1wZqvGu4lN/tIXYKwCb6UGvgJstGnWvVNz0N9qfflG+xJcG6D744IOmXQwfh18WtCEtuMm8L7DxILwucLkn/pIPwJWLewuCes/W1yV3GwhBa0DCGMe2X795m5mHNtY3bFOF8Hrt2sbcz1VtmVjQVgDtmofUTGte4dKVbs6olEZ1Xpb3AldSOuyRgcOxXrmjBEEQdSWMahQYXtNQWpGqYl1yz7fb7DCyGFhPnbeMOJ6N32hWKqYA9/zs2bNT9dh0IDPCmNSJ9sMnTvIwekWlzsNq8Dp4MioSAMV7i0+PnMnF6a4e+hibLSBh3QErSMm9yBq3TnpKQC3i/dbcl8ePvc3dQXDsiHJVXWPywGB1xYIK8cBmmD+Tv5S0XOJLGz8r7wqo66pwaxF7adPmReO6/3BcnFSP6cImBn1UBmv7UAZrYf+/ZMb2vbL55c0733v3d1H0MA59duoFF0yFn171WA5pgdRY/OvKjlVWbni6qbgy/f94+MiRP5pwzlU73n8vkr4btg00PT09zjnmLmdTSS1Z4oYU/hx2OpS4QeOD3bt21UK3IWHT1oqkKj2Qdv7Lw0MaajUZJWMg+bp+0XyfPH4i8pzs3NlzxulW3b0zmeFJi62/SdPUwym/detWPu7cEdJV8qnfj3XGs6Z4hIdqFEk4gx5P6Hy9bhAB1bqVT90I1TNRaaCl7wRyAOQpx2iDD1COZ4D/3uX3XBiWLwKWmyaiKTt9QAViPZ6F//y6J5+6MoxuO9vz8S7hVyDPxTHmVzWM2q/QO3Gs9gsJQLLuGKs7wUYkstk0Veua4OSMKmspdb2so+zwhxUg6pzsrMsvPfu4elVdQpS+DkmCtTRocysUlo1WjeJdw0jUqNUd5ht8yJEX8itxrX46vdw2avkM43HqEhSW0Gba65v3k5W+gNYfClI27OEp2uvW3DMBIiRIkspXMfONfNcH0aW+TvivS1VMqsMfD5/RaC9L6Qmo1BdQsyuRvBJQqgNeSVey9+pKPVYPyPKbNr6wKCgP6h5idr9CwO6pQKWo8vqwQMeWmz6oX5dXHEpsdXTkuaik+8IRrmll0rSImpmpWuJy3uLBlIQuP+esaox1WCltfFUYfMN2Pvn3EY+M4F5htg2lOqOkK0lyHVif180fPnSEV7V2dJnpC9zJGq3iNariO/LrlnkhpxvvVPI6lYkCY0clXW+++Ya8Mq6A57a8BpjCCp0zj557gzFJFPQYlbLjGixRSrr6h3VW2PgiKrl30g6n6LIn7xSbCNb6Ka6z47wxCKpyyUETnY5RdE9twprNtDlz5nDXi1pCcKRsqVK44IWHMOUHXND1JGriyKh0QXRNO63Pq+2Mo1hJkOdU1JNtW9+8A4DVoC2VhMmzkm0yHXsz7NVApZ7fqSgMMGrU06FBZh5nS1bqXt95/84nL2DRnhuPR6tKZwhZaQBgnwuS1mngV7PTsGDewomFMyO/VVLWN0OvpKOX/1WYdCPNRiEF9TEqDaMOlqjENctN3zGkpayBHiSgCpXHTqrvIZzLWxnDklaoVNDR8qO1+Xq/mGemqdX0at1cMyeUh8hUjSqf1mUe5MutT67GtOw0Pc9LsiLIr5aC149Ku3yVNUWFRFa6MimhQaqRyjRwAstK2FIlXTD/xomqWwz2NQqwim4LSFli061cNHTib/369eqBZeTdrRBmxTD19FNB5c1Zx3uXr7gwqLKZNP16rtuGresi7o4sI2f5xem+kl8mzyqUR2xn0My1ytxBR1YCs/IryailXKmEMaossyu5hunMJR7VtXVabuXdrGiyJOSxg69O3zQBFpTVR3322NljbDBeeCe8NJyq0zo74MriD0rTaNu1RCIbxSS2rGxhVQXwgFRPSqjip55LAZUV3uGh1M6YY1jj+UqDQIk+ZyzPFL5WR8C4B5nh7a/EA768oNepA/nnTEKV+Gl4SqLNP7Nu/dWtwveOrSDqdj1ZPqi5zDkuPcVKkpk/f/5EfCEZDKJoEL7GeVquA4qEcN3hxjO7vBq1VSpNs9KJx8R4zUtezQdAU4viOri5ju6Wg+J/+s7MIq+h2Ax1iArUDm68K1cKTr61VAqGXbx4MSeRNBkHtCXa7HKX76w6cWxox+zLrYQF0zx1Ub98ULftip6OlC4h/QncBONPT5rMHkalKWGNTItaM9UbKRAPlCEVHYuq/pYAGhCctQY/+tEVKM+bF/zrufDVkWXiz7eeH9CMrE/5aGLqI2Wg37VtKZ5nyaxOU8PDwzvGjx8/V+W7gPx3kQfGTRM1MoQ8dZ/9EFqcqcc/2kPbfxjvekydOvVWcbbfEgf27NnzwMUXX/zvwateVT/5zEfJuTodi9hHBPVgJ+rBFdURHL1Q9aupo5eHRDHzIWgUVDfLUKkulmR92CANYBlgGRGi0fYWsIrxwX+WLVl6/iVQBCx9KJ7VQ7CU0+jHncnrglORbttOlLQcJ83s6tJADWiBqy2ySNBqoriN8RdTpvZYCRvCZC574WEwpxekW1bVGapPuyqx9mOH1UfTvz3jL8Wilb71ZUXKc85uF5PoSkLWBipX7DrGav+SrkM7+KKxoaGTO1esWLG8WvrtHo7Xy6IX5FykpxtTDimkfa0p/6DHRpU/3MV1vFUBq3ggGWn373fn3zwZM0A55NOj1MRQwKyux1Mcg57ZcLyaEyfc/n8Ks8rDO+bMmmvXYTVwwCcXRNS//OKvvu+WD3np8pO8jLdODo/hSmhiE0UaL2tDwj38iDLH9hhFpBXc9MPNSKozg6s0dfzjXwdUpHVF4S2Ldh02vFL+aPHSKeBX2a6nJMVjnkf2zOLrMmDTiXXanH75sKXrfUsnHoUaK/2PrH6I77GqSuFIVpZkSXkKuWSdSGcetTMDckeP3ekUXk5c8tKHLEy2Va0PKktd2mqJDYRj1Zk0+2v5DMRhrqz5BRVo1bXDH1Cf3mEcbNWp7F7iygDhnVd1KRejHfbTo1MaXwpAsqrCX9tPRPGVAE5ukEGm8ptNt6r0mIRSSq0pZjNoKN6Zf+O8eZVeFKgqrjYJxPueerBY7U4M1iFfLFeh55Zxsdi3AKoO5NNBghlr71/5A01sic3W2NSDF9UpNOdCF9+c3obX5rytvu7oY3B126aoOjfs7RgSVxdky21TRLoj602kY6XAaXfn/mKkMXSCoy5gRQQehRlqe4A9utKZp6AU78qB5mFpNQbOMbDx1M+HtFU9b6vMoHDd/KBrei7MoYCVilAv4Op613atusnTeugDAVsn0LIsSUqXaUtcHVMNT91KXk3gNIc5evToK6oAkUg5EGAC1NQrL7X+gYQ1b60AubblbbV5u2rO3HG8mcPkPfUycVdTERjAB7180G2Y1aY7beHasmLpw+glKWsUaLUVA2/LuucxVaWTFsH52nuJKzRSl8y6/OxjJ447j4yBZ26RCB8rFAzf59VXnGqf2HQhYfH9GuWjwd/2rzC0JWjNdT+zVa9QLyKdWSGElnx1pWmZu4WQwVEpb7UWq18FlAYvkJ8VSkB6TH5vxG6nAJZlOCqFyIgb9duyZUvpChlEQlV+XYljX81fF7BOYDzVMfActA3LTzvQ5nq1n9c+PvqdK5tFysKnAiyGJ53yzlFbrdNeOXvO2ddff/0NWKfr9SyosXWqVZWT6McG9wF7YieasYcPq0MA3dG+krkCp+qoI1pKFRAvuPd/gvPJPRdM/VEySq3pO6sY0JppL0s1jls9itMb95U58NBNHZsn8uzk0PA74yd0X1UWl7VwOUDA9vT0TIXFTNcSGkhZnNxxCoS8lM0Qpp9AvTSc2MdihOtHPAOIp2OOO9axKgeyuWmWK1fcc+H0GTNmmMfs3AZJb1aqJTEuLRD5avjkTlzg1j47bGphTEBYjmEFsODbTLNM6F0AS31swCrP/FMCLGj3sbfTSYB1GcAK2eo/daG1HufUPF4CMwKVQ7/lj3Yhbw0rbwJW9norHhpjT5aL+tGB9vzALq7yee3Y+YSGFR4Komm0n35qUVjaYAAAFbZJREFU3dWoBDlVEYxnN1ghOEnhXSqIW0V8/jRg7W6n8HLlOmzQzL0CJvmny0ZPHCkG07r8jkof72l0+K8dRnBi53DHTgA2DVjgdsPi4r3BujSr/gSdh2U9UQqaU8Wv829uee12mBuWj1amfensWeP867AuWF1GOuwM+st1WN4NrZZ1TP/UK/6fLvINWaj8h7v3PIBvx5ZDy2fc2XjOQwG1KV03PN01t9LhtgN9cXbL86sRlR3zCdNAt1QGYCb5mURR+rphXI1DgeWgyyLXCq/aIdUNrScNJd7oxMv+Yl8ZJ6krrl9VKWDyVB66dtD6H3KbuD4QsLiEPUdWmUr4adol0QtQ1ZcBR+w2UXBBlU/iQpKAafjyIrBaKwfy4Sg5xA6T2whA006Hp5G1upa36uVwLsFQZnmYesNLbK0CrDMvkVcvENY5/UhIXfnRLHotmWgyR14JIMBqrRwgYSBVmZw/qJD2bqfgis1HnsH3XF14T/YDnKIMfZ4z0ZyRhlvL1tV6p71lGWHOUkph1/RV6C9VHlZI3TC0LI/qXVlIj43YoY8PPgt9aQxbgfEGCCN9+u7Z6tglHfI56hfpGBVwNN1wM3zgEg/SVL3SoFUEIGHb4dY+5KWu5Xvr4iXnq8ZSC0VDOHolJZno+tEaxdiIPyb/0SDwKhr4rmv624VeazJFxlGqPozUbx3WqVP5A/v2P9YuBVyvfDzz1NPXclLOYZHTIxEJqr4G6NSTkhqrnNjDA58SLPyLk3baW37dOjTKFrCh2Ax1SCvTNKBwt5BekjcqS3iNwDprwfs+qetXh+d5TFa2zz8bfDWteR+tdP0dxq+IO3Z32OWtofl98fdY6zYuHSffZSMM9AB2/svjx95W7wZbwEbiMtIRbE2V+/x5N5zL1l5aeKNOVK0VWvxy0gMnhewrALrcb5o3/1xuDwVvclUz2AhIHqslNbNfDXdgNq8vk09VfUPSUpmeVCYqjFlqf7FRCVyttNiuRYCGLXuIYkWCyuOdHW4SaCmeNCq97rwBIpCGDdqalEmHemVGI7xp4wuLQNjyPSYPWoZRa1ev8bwS4NYe4i0CkEH+3ArjOhbzduKpBBq5xVKBijyKw98SL+Pq8jwcv3D+gokI0DL1MA1pbRlmqVlL2QAhrXTc6hHlDy29rqQtw4tGVRxuYNBLaTWNXwPZrYGvG4I813kblY92p9sSFXX7m1tuR2ufC2vxXYkQWFuiLXWXuyX40MjKuOv9D+7DxFBOuOXhaV0kLQYhaGy5w2zNQ6vZa+p4nlfLg9QzTu1IImC18lQmZce1Av4qKG9L73gG3U7fbbNkyZIpfCQMDFHSFbjyKpr9dl4fsUwotxzv07I7zGpvrFIPWnZd1XlYXXkIWi730OhMILEF18s/UdXHCE9vrESdfjaWvCUfVKMXAEzyWvFK/a3pT/7n6569ERRSX99aIY2pZqJ6DyeiWxxVjaTCiR+uwfLuYm2f12/JpDr/japAvFRd72xyhhwBgBW+yff3I1/r866wgX894+5IYXR0uAZ7pmCswzoB1fOSc2df0Q1jR/K6EflONSNDl3icChH4l6D0A5YepV7STe+dTXXekeS6p28B1l3V5hE2hJzU43/wwwVgIEd9lmQkwnp5XBqe0B6/HNe87YsL9S9D1ou6VwwSrcdPvRLgToyUKgVohypvRSp5UxVJG/ksxezLZ3XcqZFdu3bdD5Dm3NarxJ54Ot3qhfPYaQCA6LZ+kgPMqkv9roXOqCcgLPH6HGu8ChXgy1+5tDm/4p7lF4bF2Y72StoRrL5tiH7+wL2iMsNQLz8VEHGwy71i+d0dxV/kvekYanqEcTLJK0VQIXKsDOy66UaexkTKrGQI2FHjWO5oOv7lsbeYb8W0ECbSOsRJBav0R4fNv/TixkXwm8r61G7pSh2T1Q4ZRzK4LXmcSuUDqKprpl2nPN/BGfHBQXXoIdYGCfIoDn9V4wm/ojRvVVe405fNmt0opA60+j0Wp26U6ojUlcivCVLTI7fLzW3zcSzBqk8olYPV4GMgj+Ls3Uafx1B5ThLaK2BGp2eRKtDet/zeGWj2c0blgLTlkbmvTauKev0KuPhr64MAHLOqzRFu70Sy7XR7iVeFWVdTcqeOII41e0zMIg7OCtvzrqMDVpSAwmuqQMt7c5UkQAVTFU3VKlVZqItUBKo6fG34Aq1cu96AwDHr0BDueyZYXWYZmfdpuYbKn+fidgeIitk8b+yZPxCQ66+993l0gYridLHqakzL0dCro2CYNDHvCZKuXCxJ4KukNLbbvmIeENebQtgFVt1g4VFA9gOtgvwH2RmB83v37n1srj1nnBqspCYh5mZ1o8IobVzQsvIZFTDPQ9wgkJ48VpkWLlPpsX5VQDX5afLI5VXwmFaBlRsy2oGH7ZSHVFTofXv/tuw6E6lQ8jUrXiU9wuS05E5F/qqtMJuwjML1aubH5EOYvhJfxN0f3uzdwI+aEbZgTW9jP+qVWleO8hlP1B6zckmFC/2WxnUtffUmZ4HxPjIfl8qjh5GXoaWMW2XcSd4If+L2RIJ4x3kAFR5j471/+9GjFqzpBSvKT+F11EGrlymkTgbVK2NWKthZ2WrQ6mNmo54vYXCc77IlS6ds//W2O4AeTirlVH7wxwUoLUqNkji73winkh8D5LTUgFdjY25xbJehBLLWUmVfTXpHNYOeK2RYk8JU8Jir3Df2KrfKBePcRMKdX8NDx3dwv255ZhwbkaYuMKmJy48wopDi3HLYySedwJpRrfu1xJ844S9t2vw9rtU94tzZlDi8mVg1XoM8oUxRkkTXTPXRekqbmN2/1F9wfdviW6e+teXN2wc/+6dXAcYcMg6Jx7PAONLG/Oo8057KAayPPx4/4AzCJzhPnPv8sy9e141lTWWH5Nnwo8SDahgvUqGme362b0V3kMsWAZWVFdavsMrorMP6/Wvz/zz2JW9fqCY/DQ1DoP5my1t3saFD+hTvRHqaeZR7l107Dzjx8LJaY3W2HKrwwgf9lXVYNnGuctxy4HHuzTffvH3eDTf+Mdwaml9Lv/H8TVSA+jKuUsVDZeBRt6QztdyrKpKGFSyoEtPeVPRjVlY3DLqK0OfUgfkUVMg5s+aOW7v64Yt373ofz1qobq80cio7brrNzEEvGDSt/X79Ztev4gEltgFYNBDcg2ylauNBBMYnwlGt/mNHpmYVjUkSVWFY06AImsGjn7+6KuaxN337oYQtFs54KpuyD/pj7nhSFVhLEgcgzWUc0ufy7jZMJHF8ym4v7N1GzQ8yv5l5FDv50i5QMa9OA+VxdljgdJPhoF6Z2/LrN2+zV5OWygd8ccuqHfSxM6OXIRyR4Kk2noqHMdPgq1EbyZfiESdWLiGhKqsGv9hFfT1eYfgCG9fhP3Y+6uGXD1HxnmR1AwYbMvyckbcz+nb+6lw4qHLBSVsToL590iqQuMtXUyqFI83SZBR46Rw8X7lypb1svcl1ASXR1LrH+GJHqMZkugKqvhxCu0Z0XV0D7KFU1yzo4jRziUfCO0Eq/YU0ZgBDoVLnGr2uyFsuOCPNmVa1K0mD1EwLwUUWUDl6x+BsWmAvonJPQgBqhvfS89Bgo5dneuoxIQhaseuB9Tv6vIpdWKy8ei9vSPfPqVSsdMYOG3TXhnds3br9Dh6Nk/3FUhn5ja0wS+rrHjbkUPvSxcumMJ3swuvbM5xegW5hBFySbl874jQsJSkIb3rzggSo+juCR8cKuUOHDj1n7w0efeCgGGNjp95+sySYRB0+fPi5np6eqQgz0wxHKlnTQutJP5uFi/YgZvVliKBAAXT8VgDUO+MndF/lt49r5maCSeedN3nSpEmTvw31b3umTp0wYXy3Du/mTdKr7AvIRJdOMLQqS2KUfGYKmkSX+nrCw4Zm/rq6HHft2f3QTRT41p+BEAfPB7ZBPfDjB/9G3Oy3czmQGLRkFZZrbr/6+mtvyGayM1EFM11EnqrBTqUESktYLNXBQICykhYQeEw2uBK7RaPpFDVIblu6rOe5539xxHUP0WBC5txvnDfpm//beX8yedq0adMnQ02cNGkiEtiFuDU4CzCOcSgwKwIcNjZQxcwI8gh3pMFJBhoi5pD+BMROaOVO/6RH3mSLDoizWU2f9BBONWQ6jO/TT378ds+He/ZBPfjggx/63K2xwzlQFWjJM2y9O/9xqPHd3ZROvaeKrNiZzFipnKzTMKtq72pgUaXC+6Uq5FiA+7cffpi5+OKLszgudvaE8eO7z4H638//P84fM2ZMF6XmeIjgqVBGVBqcho1Pi3OmqvFxwKQbEAehyuepzGmgHNDtcsDnwFkTgb/T2TOAqQYmJHKXrxE6lfkavGHzdpbDEyWR3Yaq/8vj//34h3v27Onbk9/9H3/5/Ke+5Fmj5YDLgapBKxSwdvvo9BkzZkCq9LLCm1LElVjwHCFZhNSofolPt9dgpETywG9Yl9bw7tGWeMEGxwGotuvnAP3A/v0H9u/7u70f7t69+5333v2dJ7A1WA6EcKBm0JIul3GeeOKJx8d1Y0yYzfbSrl4SlrRMJUDwf00/tehJV1SchsZJB8JACmsRqoKzi8sutCORCxibZtXY9MCBA3+HQ+Uf/cJKU2Gz/SbkQF1AK3GuX7/+6rvuuutubZ6p+sc0ePqS4rv6rwDLL9lJETOsiSUiw0kjQH2UEvqufzU5RaD7JWmxcGTg8ACGpfs5Nn3+hV/aLm8UY61bbA7UFbQS61vbtt9xzbXXXgOw9noljvio/uuCRZMwzdSLiiMlxa//66fp0HK6uBKHj34/aRxw8Ln3AED612+8/i9+utZsOVAPDjQEtEwYZ21fe+P1f6aeUKqzsCXZUGWCLtRThIMZvqR3x6UKoLhH+eCRI0c+YVf30KHDR959f+fJCJLWyXKgbhxoGGghdR77s+nTVvkkUtUJL4EnfleWkZnhEkbej9aGSM3s27t3HwB6+PPPP/8C2zkHXn39tS8S0rLeLQfqxoGGgJZSFhX7dQCmlzOuNQAnMKOkR8UGwU+bTnp5FT4U5rSf0jqpClz6oyQnAXpg/9/9PW6+OHbkyMDAJ4cPH3k2xjpwiYzVWQ40hwMNAe0/fzb4yjcmT75ZRpglEIVn6nTGWefMKtD5OtOwO4N1YIJU1j+5PEPlzs9inZUAHqvWUZ1JISM2bFgYoXvh0yOfHMHWyiEsVe3FywNDnx7+9NNX3vjrQcOv1VoOpJoDdQctb7y/8241gzzTzTnx5cOh6+bTmJLT1QOwGdm04fMPo5KUXPdk93Vw8ItBAL/ApRWClN1ZghPjazsxVM47a9OCHKg7aIGPHdglNVdh1BGGiQArfVuN8X7MRG8bPPrfjhYBWkjaLhxGOPMFFAFKUBKQO+3GhBasejbJ1XJgbLUBg8JxT/I1118nm+7RgeXeW/iM0z8WgDuE+3HrwiC2Si62gAzitLXrZA7UTdJeMWfuuB07d+7g2qzbrU3CWQFtNtPP5ZSeC6b+KElw69dyoFM4UDZjU23G/+rBBx7k/mMcJVMTRkKHAI6lss5ML3cRWcDG4pj11KEcqAto71ux8kKcGZih1mSNo2pOzzjmDBQKYGh4aOeKFSuWd2hZ2GxbDsTiQF1Aq/cbu7PFIl2zWCfFrC4S4kjR6BR19T+9fsM6O4aN5pJ1tRyoGbTPbPj59efyULmhlMRVZpwfVUs1XRlcdmb4cHYqCbjpcOTgoYP2ZgYPi6zBciCQA/WYiMqDsitlA2OBpeoqa8eyiapipu+7Cxfe9IrdHhjGPmtvOeByoCZJ++HuPfeTkikxXcoxNQyLRdcvLGBjMsx663gOVA1a7i+++JJLLgEHIWUrTzaJD5GyAnRsQ+zbtGnTxo4vCcsAy4GYHKi6e4zdgc/hAsNlagMFN1HoQ+Ax4y15KxT7sKH4L0oWVmc5YDkQxYGqJO3Da9ZeJBenOVeqJCcjkhZ7hA9EJdC6WQ5YDng5kBxtCO8u8WA8Kt1eL9kAE2ei9D4L6SLTFx403hXg21pZDlgOhHAgMWjxPu0idYGbJsh1WH1WPCSKSOt+3p8U6cM6Wg5YDng4kGhMO2f25We/+94H74PCTGfTBNdh48la3lvMFoKXkruS1o5nPYVhDZYDcTiQSNLitvsHQRSAZT83PmCZkLMAVnlFQIBupSw5Y5XlQDIOxAbtsiW3Tpkx/TszSJ6gE+A50Xl3O4UlQSaflDtwz2OxYX6tveWA5UAwB2KD9sEH/+qvgFR17E5IlUAYj4wX6Jk+K2mFk/ZrORCfA7HQxitkJuHhKpI1gWfq40ZZAnom87MnHv/7uOGsP8sBywGHA7FAe8sPvv+DTLbQWw+mKaCja7xn9+499aBnaVgOdBoHKoKWL6DjYbxu9VZNIHd4/E4vwAa6O5Z8TkP8YRdV3+bNmzdFeLdOlgOWAyEciATtTQsWTrzuhutvACTdUzwEnrPc41CkOasuggqJQVvz6lN93Wn/Sy+99LK9HTGaX9bVciCMA5HrtPrV92XcyaT2GEesyfLe4mIhi3uHu7gY5O5+koj5fi26xn3/9fAnR6ZM7blV7O3XcsByIBkHQiXtKlwh09PTM1V1afX+CeneMgpTT/OYwli1FqsAC3MB0le92s6wuP/prK4x/f8FF4VbwJJbVlkOVM+BUEk7fGLobTyofqVDmuuwwfgW8PpnkmlP0Dpd4kL/b3f/dtfFl17y0+qTakNaDlgOkAOBSMRdTVcDsOcIi/AGutIKQMWeX4LVD1jXnvNTxWLfw2sfWWsBS65YZTlQOweCJW0xk4OI7CV54o5HAsZQAyUAJYA9egSQcS+9QsiqwwA4xrfaXtamWGf/WA7UhQNlkhYPUz0KxHWJVOWQFA9yuBLVtTcmpRR4MW7VIO7/fHDwNYyJl+NW1XstYOtSTpaI5YDLAY+klScqAb5eU5K6vqEx7U09pp76h4ZODuHo3sY77rrzN2YYq7ccsByoHwc8oP1i8J9fnzj5G/O95DkJxZ/32R9uluDbs1AA69DQK5t+9fKP7rp9Ky2sshywHGgcB9zu8ZPrnrj6X0/6X88ti6oIL8WxuLf4TOZM4TScCWDMYHV19Q8e/eyv7125aiU2TF1hAavYYv9YDjScA66kPXHi2NsTJkzAEo+LYxU55pswVqXWAWuxmO3Dposj7AbbDf8NLx8bgeVAGQcUaLdv23LHNddefw3HsqYPY8zaT9B+iLVW7Bl+6VV7qbjJJqu3HGgqB7SkLeQhYWcGxKzGq9ugbrnllpcC3K2V5YDlQJM5MAZXwFz05729vYj3T9yuMJ7pwK3/H61ZvWb1FVde8eSf/umf/j9NTpeNznLAciCEA2OHh4eH6AbA9vGwzoH9+w/wxv9f/PL5Tx9/8omQYNbacsByYLQ4oLrHa1evuYhnZu+8+y67vjpaJWHjtRyIyYH/H05cgT5ToZfNAAAAAElFTkSuQmCC"})]})]}))};C.displayName="SvgIcCompanyBrunch";var t=C,n=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.667 4.089c0-.786.636-1.422 1.422-1.422h7.822c.786 0 1.422.636 1.422 1.422v7.815c0 .786-.636 1.423-1.422 1.423H10.021V9.19h1.369l.204-1.596h-1.587c0-.362-.002-.701 0-1.04.005-.564.218-.775.782-.778h.859c0-.43-.007-.836.003-1.24.004-.158-.06-.21-.202-.216-.34-.011-.679-.036-1.018-.039-1.002-.01-1.737.499-1.973 1.388-.071.268-.09.554-.103.833-.017.358-.004.719-.004 1.1H6.986V9.21h1.351v4.118h-.252l-3.995.004a1.422 1.422 0 0 1-1.423-1.422v-7.82Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};n.displayName="SvgIcCompanyFacebook";var s=n,v=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.915 7.509h-4.75v1.465h3.41c-.182 2.033-1.772 2.912-3.311 2.912-1.953 0-3.691-1.585-3.691-3.877 0-2.206 1.655-3.878 3.69-3.878 1.557 0 2.5 1.052 2.5 1.052l.96-1.052s-1.29-1.464-3.525-1.464C5.25 2.649 3 5.217 3 7.99c0 2.689 2.119 5.342 5.247 5.342 2.765 0 4.751-1.947 4.751-4.86.017-.602-.083-.964-.083-.964Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};v.displayName="SvgIcCompanyGoogle";var p=v,y=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 47 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.84 24H9.962C4.46 24 0 19.522 0 14S4.46 4 9.962 4h27.902c5.502 0 9.962 4.478 9.962 10s-4.485 10-9.986 10Z",fill:"#FFEB00"}),Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.176 8.801c-2.998 0-5.427 1.915-5.427 4.303 0 1.518 1.016 2.861 2.528 3.632l-.52 1.94c-.025.05 0 .125.049.175.025.025.074.05.099.05.025 0 .074-.025.1-.025l2.204-1.493c.323.05.645.075.992.075 2.998 0 5.427-1.94 5.427-4.304 0-2.438-2.429-4.353-5.452-4.353Z",fill:"#000"}),Object(c.jsx)("path",{d:"M21.212 16.687v2.786H19.23V9.199h1.387l.248.647c.421-.423 1.066-.87 2.082-.87 1.933 0 2.85 1.442 2.85 3.805 0 2.463-1.413 4.03-3.445 4.03-.397.025-.694 0-1.14-.124Zm0-5.821v4.428c.1.024.372.05.644.05 1.413 0 1.958-.996 1.958-2.563 0-1.368-.372-2.189-1.487-2.189-.396 0-.793.1-1.115.274ZM30.083 12.11H31.2v-.25c0-.82-.471-1.193-1.264-1.193-.62 0-1.388.174-2.032.497l-.545-1.318c.694-.498 1.784-.821 2.75-.821 1.883 0 2.924.995 2.924 2.91v4.702h-1.387l-.199-.622c-.793.572-1.536.82-2.18.82-1.438 0-2.255-.87-2.255-2.338 0-1.567 1.065-2.387 3.072-2.387Zm1.14 2.611v-1.368h-.916c-1.016 0-1.537.373-1.537 1.095 0 .547.273.82.867.82.546.026 1.24-.248 1.586-.547ZM39.029 15.866c-.694 1.84-1.512 3.184-2.726 3.93l-1.214-1.12c.694-.621 1.214-1.218 1.635-2.014l-2.626-7.19 1.957-.521 1.685 5.82 1.66-5.845 1.934.547-2.305 6.393Z",fill:"#000"})]}))};y.displayName="SvgIcCompanyKakaoPay";var i=y,l=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M8 3C4.686 3 2 5.066 2 7.614c0 1.647 1.123 3.093 2.812 3.91-.092.308-.59 1.988-.61 2.12 0 0-.012.099.054.137.066.037.143.008.143.008.189-.026 2.19-1.396 2.535-1.634.346.048.702.073 1.066.073 3.314 0 6-2.066 6-4.614S11.314 3 8 3Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};l.displayName="SvgIcCompanyKakao";var g=l,b=function(Z){var X,ye,Se,Fe;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.973 12h.2a.08.08 0 0 0 .08-.08v-.52a.193.193 0 0 0-.186-.187h-1.12a.24.24 0 0 1-.24-.233V6.873h-.974v7.794h.974v-.707a.24.24 0 0 1 .24-.233h1.12a.193.193 0 0 0 .186-.187v-.48a.066.066 0 0 0-.08-.073h-.2c-.613 0-1.113-.22-1.113-.487s.5-.5 1.113-.5Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("ellipse",{cx:8.233,cy:8.473,rx:1.187,ry:.487,fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(c.jsx)("rect",{x:7.047,y:7.427,width:2.373,height:.42,rx:.21,fill:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"}),Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.2 2h-.113a.373.373 0 0 1-.367-.373.287.287 0 0 0-.287-.294h-.426a.287.287 0 0 0-.287.287.373.373 0 0 1-.367.38H7.24a2.56 2.56 0 0 0-2.573 2.547 2.507 2.507 0 0 0 2.506 2.466h2.094a2.507 2.507 0 0 0 2.506-2.466A2.56 2.56 0 0 0 9.2 2Zm.527 4.1c-.48.08-.97-.062-1.334-.387a.26.26 0 0 0-.333 0 1.613 1.613 0 1 1 0-2.406.24.24 0 0 0 .32 0A1.613 1.613 0 1 1 9.713 6.1h.014Z",fill:(Fe=Z.color)!==null&&Fe!==void 0?Fe:"#30373F"})]}))};b.displayName="SvgIcCompanyLivinginhotel";var j=b,u=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 47 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{d:"M23.65 8.857h3.755c.59 0 1.105.074 1.543.22a3.01 3.01 0 0 1 1.082.614c.286.26.5.573.64.935.141.362.21.751.21 1.17v.3c0 .418-.074.811-.224 1.177-.15.365-.372.687-.661.962a3.166 3.166 0 0 1-1.083.656c-.432.161-.933.242-1.506.242h-2.312v4.01H23.65V8.857Zm1.444 1.227v3.824h2.07c1.517 0 2.275-.613 2.275-1.84v-.258c0-.59-.182-1.024-.546-1.305-.364-.281-.888-.421-1.567-.421H25.094ZM34.584 19.256c-.807 0-1.445-.194-1.916-.584-.471-.389-.708-.927-.708-1.612v-.386c0-.665.23-1.208.685-1.625.456-.42 1.196-.629 2.217-.629h2.027v-.457c0-.523-.13-.911-.386-1.163-.258-.251-.678-.378-1.262-.378-.467 0-.873.072-1.218.215a6.756 6.756 0 0 0-1.072.571l-.7-1.027a6.754 6.754 0 0 1 1.312-.692c.486-.195 1.05-.292 1.691-.292.447 0 .856.055 1.224.163.37.11.687.272.956.485.266.215.476.476.627.785.15.308.225.659.225 1.048v5.465H36.93V18.2h-.015a1.515 1.515 0 0 1-.314.393c-.131.12-.274.22-.43.307a3.067 3.067 0 0 1-.692.265 3.725 3.725 0 0 1-.898.091h.002Zm2.303-3.666H34.89c-.553 0-.95.105-1.188.314-.238.21-.357.5-.357.871v.2c0 .38.136.656.408.827.272.17.597.257.976.257.349 0 .653-.04.91-.121.257-.081.494-.202.708-.364.195-.143.332-.307.415-.492.082-.186.123-.426.123-.72v-.77l.002-.002ZM43.215 17.574l2.098-6.234H46.8l-4.14 11.028-1.283-.443 1.034-2.667-2.901-7.918h1.531l2.114 6.234H43.215Z",fill:"#333"}),Object(c.jsx)("path",{d:"M18.395 5H0v18h18.395V5Z",fill:"#00C73C"}),Object(c.jsx)("path",{d:"m10.66 18.12-2.968-4.265v4.265H4.599V9.88h3.136l2.968 4.265V9.88h3.093v8.24H10.66Z",fill:"#fff"})]}))};u.displayName="SvgIcCompanyNaverPay";var O=u,L=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.333 3.667h3.184l2.944 4.35v-4.35h3.206v8.666H9.46L6.517 8v4.333H3.333V3.667Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};L.displayName="SvgIcCompanyNaver";var _=L,T=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsxs)("g",{clipPath:"url(#ic-company-samsung-pay_svg__a)",children:[Object(c.jsx)("path",{d:"M27.744 9.825c-.345-2.6-1.265-4.956-2.888-6.681C23.13 1.52 20.773.6 18.173.257 15.691-.073 14 .009 14 .009s-1.69-.081-4.174.248C7.226.6 4.87 1.52 3.144 3.144 1.522 4.869.601 7.225.257 9.824c-.33 2.483-.248 4.174-.248 4.174s-.082 1.69.248 4.174c.344 2.6 1.265 4.955 2.887 6.68 1.726 1.623 4.082 2.543 6.682 2.888 2.483.33 4.174.248 4.174.248s1.69.081 4.174-.248c2.6-.345 4.956-1.265 6.681-2.887h.001c1.623-1.726 2.543-4.081 2.887-6.68.33-2.484.248-4.175.248-4.175s.082-1.69-.247-4.173Z",fill:"#1E4BC6"}),Object(c.jsx)("path",{d:"M5.156 9.897h2.513c.383 0 .735.069 1.056.206.322.137.6.323.835.558a2.6 2.6 0 0 1 .754 1.85 2.641 2.641 0 0 1-.754 1.86 2.607 2.607 0 0 1-.84.558 2.693 2.693 0 0 1-1.06.207H6.523v2.101H5.156v-7.34Zm1.367 1.267v2.705H7.57c.201 0 .386-.036.553-.106a1.299 1.299 0 0 0 .714-.724c.067-.164.1-.34.1-.528a1.38 1.38 0 0 0-.1-.528 1.276 1.276 0 0 0-.714-.714 1.412 1.412 0 0 0-.553-.105H6.523ZM13.472 17.247c-.355 0-.705-.066-1.05-.198a2.854 2.854 0 0 1-1.594-1.503 2.953 2.953 0 0 1-.252-1.245c0-.472.082-.89.246-1.255.165-.365.382-.674.654-.926.271-.252.583-.444.935-.577a3.052 3.052 0 0 1 1.081-.198c.389 0 .748.07 1.076.21.329.141.6.333.815.576v-.776h1.358v5.882h-1.358V16.4c-.215.263-.49.47-.825.62a2.609 2.609 0 0 1-1.086.226ZM13.694 16c.254 0 .489-.044.704-.132a1.63 1.63 0 0 0 .552-.368 1.81 1.81 0 0 0 .368-.548c.09-.207.136-.431.136-.67 0-.234-.046-.454-.136-.662a1.751 1.751 0 0 0-.368-.543 1.659 1.659 0 0 0-.552-.363 1.836 1.836 0 0 0-.704-.133 1.844 1.844 0 0 0-1.268.491 1.658 1.658 0 0 0-.513 1.209 1.692 1.692 0 0 0 .513 1.223c.161.155.35.276.569.364.218.088.45.132.699.132ZM19.597 16.982l-2.414-5.627h1.448l1.639 4.024 1.55-4.024h1.427l-3.51 8.587H18.36l1.237-2.96Z",fill:"#fff"})]}),Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:"ic-company-samsung-pay_svg__a",children:Object(c.jsx)("path",{fill:"#fff",d:"M0 0h28v28H0z"})})})]}))};T.displayName="SvgIcCompanySamsungPay";var D=T,U=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.358 9.827V5.743l3.94 2.05-3.94 2.034Zm8.9-3.89c-.037-.542-.092-1.08-.284-1.599a1.794 1.794 0 0 0-1.127-1.117c-.3-.109-.618-.128-.934-.145a87.574 87.574 0 0 0-5.862-.122c-1.45.015-2.899.034-4.344.155-.769.065-1.348.418-1.647 1.142-.14.34-.226.693-.263 1.058a28.143 28.143 0 0 0-.036 5.01c.039.5.118.993.316 1.463.207.491.573.804 1.08.968.35.113.715.15 1.079.173 1.605.098 3.213.106 4.82.129 1.736-.02 3.472-.028 5.203-.165.72-.057 1.296-.355 1.62-1.02.172-.353.27-.729.312-1.117.176-1.602.177-3.207.067-4.813Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};U.displayName="SvgIcCompanyYoutube";var B=U,I=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m12.884 13.8.316-8.4h-2.4l.317 8.367 1.767.033ZM12 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#03936E"}),Object(c.jsx)("rect",{x:.75,y:.75,width:22.5,height:22.5,rx:11.25,stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#03936E",strokeWidth:1.5})]}))};I.displayName="SvgIcAlert";var x=I,a=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"m30.491 8.944-1.414-1.415L16.35 21.672 3.621 7.529 2.207 8.944 16.35 24.5 30.491 8.944Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};a.displayName="SvgIcAngleDown";var d=a,r=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"m23.556 29.991 1.415-1.414L10.828 15.85 24.971 3.121l-1.415-1.414L8 15.85l15.556 14.142Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};r.displayName="SvgIcAngleLeft";var m=r,o=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M9.444 2.009 8.029 3.423 22.172 16.15 8.029 28.879l1.415 1.414L25 16.15 9.444 2.009Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};o.displayName="SvgIcAngleRight";var h=o,P=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"m2.509 23.056 1.414 1.415L16.65 10.328l12.728 14.143 1.414-1.415L16.65 7.5 2.509 23.056Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};P.displayName="SvgIcAngleUp";var M=P,A=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"m10.707 20.646-.707.707L.646 12 10 2.646l.707.708L2.561 11.5h20.792v1H2.561l8.146 8.146Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};A.displayName="SvgIcArrowLeft";var S=A,k=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"m13.293 20.646.707.707L23.354 12 14 2.646l-.707.708 8.146 8.146H.646v1H21.44l-8.146 8.146Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};k.displayName="IcArrowRight";var H=k,G=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M30 19H2l6.304-6",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};G.displayName="IcArrowSingleLeft";var re=G,ce=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M2 19h28l-6.304-6",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};ce.displayName="SvgIcArrowSingleRight";var q=ce,ie=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M2 6.768 6.12 12 14 4",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeWidth:2})}))};ie.displayName="SvgIcCheck";var te=ie,de=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"m3.263 3.263 9.474 9.474M3.263 12.737l9.474-9.474",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};de.displayName="SvgIcClose";var ue=de,fe=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M8 16V8h8M8 8l7 7M24 16v8h-8M24 24l-7-7",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeWidth:2})}))};fe.displayName="SvgIcExpand";var ve=fe,be=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsxs)("g",{clipPath:"url(#ic-hotel-type-mini_svg__a)",children:[Object(c.jsx)("rect",{width:16,height:16,rx:4,fill:"#979B9F"}),Object(c.jsx)("path",{d:"M3.418 3.516V12h1.71V6.422H5.2l2.215 5.543h1.172l2.215-5.52h.07V12h1.711V3.516h-2.18L8.047 9.27h-.094L5.598 3.516h-2.18Z",fill:"#fff"})]}),Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:"ic-hotel-type-mini_svg__a",children:Object(c.jsx)("rect",{width:16,height:16,rx:4,fill:"#fff"})})})]}))};be.displayName="SvgIcHotelTypeMini";var ge=be,xe=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsxs)("g",{clipPath:"url(#ic-hotel-type-residence_svg__a)",children:[Object(c.jsx)("rect",{width:16,height:16,rx:4,fill:"#979B9F"}),Object(c.jsx)("path",{d:"M4.924 12h1.758V8.988h1.341L9.646 12h1.946L9.787 8.701c.967-.416 1.5-1.26 1.5-2.42 0-1.681-1.107-2.765-3.035-2.765H4.924V12Zm1.758-4.441V4.957h1.242c1.043.006 1.553.469 1.547 1.324.006.85-.504 1.278-1.547 1.278H6.682Z",fill:"#fff"})]}),Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:"ic-hotel-type-residence_svg__a",children:Object(c.jsx)("rect",{width:16,height:16,rx:4,fill:"#fff"})})})]}))};xe.displayName="SvgIcHotelTypeResidence";var Ce=xe,De=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M3 8h10",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};De.displayName="SvgIcMinus";var Te=De,Be=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{d:"M1.3 8h13.4M8 14.7V1.3",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};Be.displayName="SvgIcPlus";var Oe=Be,Ne=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{d:"M7 2a6 6 0 0 1 6 6M1 8a6 6 0 0 1 6-6M1 8a6 6 0 0 0 6 6M7 14c2.22 0 4.16-1.207 5.197-3",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("path",{d:"m10 6.464 3.464 2 2-3.464",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ne.displayName="SvgIcReset";var Me=Ne,ke=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("rect",{width:24,height:24,rx:12,fill:"#DA5542"}),Object(c.jsx)("path",{d:"m7.263 7.263 9.474 9.474M7.263 16.737l9.474-9.474",stroke:"#fff"})]}))};ke.displayName="SvgIcResultFail";var Ve=ke,Ae=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("rect",{width:24,height:24,rx:12,fill:"#03936E"}),Object(c.jsx)("path",{d:"M6 10.768 10.12 16 18 8",stroke:"#fff",strokeWidth:2})]}))};Ae.displayName="SvgIcResultSuccess";var we=Ae,He=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m8 12.23-4.702 2.242.678-5.165-3.584-3.78 5.121-.95L8 0l2.487 4.577 5.121.95-3.584 3.78.678 5.165L8 12.231Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#979B9F"})}))};He.displayName="SvgIcStar";var Pe=He,_e=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 122 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{d:"M97.358 47.642H24.642A23.644 23.644 0 0 1 2.792 14.95 23.642 23.642 0 0 1 24.642.358h72.716a23.643 23.643 0 1 1 0 47.284ZM24.642 1.19a22.81 22.81 0 1 0 0 45.62h72.716a22.815 22.815 0 0 0 16.135-6.678A22.811 22.811 0 0 0 97.358 1.19H24.642Z",fill:"#30373F"}),Object(c.jsx)("path",{d:"M97.348 44.562H24.652a20.56 20.56 0 1 1 0-41.123h72.696a20.561 20.561 0 0 1 0 41.123ZM24.652 3.716a20.284 20.284 0 1 0 0 40.568h72.696a20.284 20.284 0 1 0 0-40.568H24.652Z",fill:"#30373F"}),Object(c.jsx)("path",{d:"M28.257 18.98c2.995 0 5.18 1.768 5.18 4.001 0 2.013-1.768 3.658-4.296 3.952v2.823a94.62 94.62 0 0 0 3.853-.148c1.227-.073 1.915-.22 2.504-.589.775.044 1.546.143 2.307.295.614.122.933.417.933.76 0 .516-.32.761-.933.761-.32 0-1.08-.049-2.135-.146a63.605 63.605 0 0 0-2.922-.05c-3.19.05-6.43.147-9.67.32a4.25 4.25 0 0 0-1.938.588c-.884-.073-2.185-.638-2.897-1.129a.794.794 0 0 1-.343-.564c0-.246.27-.32.785-.246 1.063.176 2.139.258 3.216.246 1.988 0 3.853-.025 5.62-.05v-2.846c-2.627-.27-4.443-1.915-4.443-3.977 0-2.233 2.185-4 5.18-4Zm-8.001-1.398a.806.806 0 0 1-.294-.59c0-.22.22-.343.687-.27.938.176 1.892.258 2.847.246 2.184 0 5.792-.049 7.363-.172 1.08-.098 1.694-.22 2.233-.588.718.053 1.43.151 2.136.294.564.123.834.417.834.76 0 .516-.27.762-.834.762-.295 0-1.301-.099-2.013-.148-.589-.049-1.57-.049-2.577-.049-1.497 0-4.516.074-6.112.246-.61.045-1.2.238-1.718.564a5.958 5.958 0 0 1-2.552-1.055Zm9.817-2.332c-.711 0-3.116 0-3.877.074a4.948 4.948 0 0 1-1.694-1.203c-.245-.295-.073-.614.515-.49.27.048.909.146 1.301.195.712.099 2.7.099 3.805.099.687 0 1.055.172 1.055.613 0 .393-.54.712-1.105.712Zm-1.816 10.53c1.67 0 3.46-1.08 3.46-2.799 0-1.717-1.79-2.798-3.46-2.798-1.718 0-3.46 1.08-3.46 2.798 0 1.743 1.742 2.798 3.46 2.798ZM43.77 23.448a.514.514 0 0 0 .589.564 38.26 38.26 0 0 0 6.259-.638c.638-.147.834.663.098.933a24.685 24.685 0 0 1-6.897 1.3c-1.448 0-1.767-.858-1.767-2.33v-4.959c-.27-.466-.933-.835-1.522-1.006-.736-.221-.712-.884.025-.884.662 0 2.086.172 3.068.172.77.03 1.543-.012 2.306-.123.409-.083.789-.269 1.105-.54.58-.049 1.163-.049 1.743 0 .564.025.859.246.859.663 0 .614-.491.76-1.326.786-1.742.073-2.7.073-4.515.172-.025.294-.025.416-.025.441v2.283c.452.02.905-.014 1.35-.099a3.15 3.15 0 0 0 1.227-.49 10.92 10.92 0 0 1 1.546-.025c.565.025.786.27.786.638 0 .614-.417.737-1.252.761-1.448.05-2.43.098-3.657.172v2.209Zm5.719 10.382c1.866.052 3.734.003 5.596-.147.515-.05 1.251-.246 1.62-.59a9.715 9.715 0 0 1 1.89.074c.49.05 1.055.27 1.055.761 0 .516-.442.785-1.252.761-1.693-.05-6.332.098-9.032.098-1.374.098-2.135-.54-2.135-1.914v-1.276c-.221-.565-.81-.762-1.375-.909-.736-.196-.687-.76.073-.81.737-.049 2.357.123 3.216.148 2.258.049 5.473-.099 6.799-.197.074-.662.122-1.816.122-2.454-1.767-.098-4.54.098-6.283.245a6.014 6.014 0 0 0-2.061.54 7.44 7.44 0 0 1-2.21-1.129c-.441-.392-.048-.736.344-.662.393.073 1.472.147 1.866.172 2.454.098 6.21-.074 7.485-.148.933-.049 2.038-.123 2.381-.172.54-.073.736.172.736.393a2.947 2.947 0 0 1-.294.908c-.196.761-.466 1.62-.687 2.234.54-.074 1.203.024 1.153.613-.024.442-.49.54-1.104.491-3.338-.024-6.357.074-8.394.172a4.619 4.619 0 0 0-.025.515v1.62c0 .417.172.663.516.663Zm5.154-18.629a11.31 11.31 0 0 0-.172 1.767v4.173c0 1.006.074 4.148-.933 4.148-.368 0-.638-.54-.638-1.645v-3.338c-.24.027-.477.068-.711.123a3.686 3.686 0 0 0-1.13.417 4.605 4.605 0 0 1-1.84-.785c-.442-.393-.148-.76.27-.687.294.049 1.325.049 1.816.049a15.434 15.434 0 0 0 1.595-.099v-2.92a3.915 3.915 0 0 0-1.718-1.105c-.687-.245-.614-.834.098-.834.565 0 2.675.22 3.363.736Zm3.804-1.35c-.103.584-.16 1.175-.172 1.767v5.768c0 1.006.05 4.148-.957 4.148-.368 0-.613-.54-.613-1.644v-8.836a4.329 4.329 0 0 0-1.816-1.154c-.712-.245-.639-.834.097-.834.59 0 2.774.27 3.461.785ZM66.376 17.925c2.601 0 4.516 1.694 4.909 3.952.81.025 1.718 0 2.675-.024v-4.86c0-.933-.908-1.301-1.841-1.62-.294-.123-.442-.246-.442-.393 0-.196.221-.441.688-.441.441 0 2.871.343 3.264.54l-.099 1.3v11.389c0 1.251.025 5.694-1.03 5.694-.368 0-.54-1.03-.54-3.044V22.81c-.246.024-.466.074-.638.098-.333.072-.65.205-.933.393a5.765 5.765 0 0 1-1.006-.295c-.123 2.602-2.136 4.59-5.007 4.59-2.995 0-5.007-2.11-5.007-4.81 0-2.7 2.012-4.86 5.007-4.86Zm.024 8.395c1.841 0 3.264-1.424 3.264-3.633 0-2.184-1.423-3.633-3.264-3.633-1.84 0-3.24 1.449-3.24 3.633 0 2.209 1.4 3.633 3.24 3.633Zm13.254-11.364V29.24c0 1.277.025 5.694-1.055 5.694-.369 0-.54-1.03-.54-3.043V15.422c0-.59-.614-1.055-1.817-1.522-.27-.123-.466-.245-.466-.393 0-.171.246-.417.737-.417.441 0 2.822.32 3.24.54l-.099 1.326ZM91.313 15.692a14.024 14.024 0 0 1-1.3 3.166l1.398 1.13c.639.515 1.252.956 1.964.932.564.49 1.62 1.522 1.865 2.233.32.81-.417 1.473-1.227.81l-4.565-4.148c-1.35 2.037-3.216 3.706-5.498 5.155-.688.442-1.153-.172-.565-.663 2.675-2.234 4.811-4.983 5.719-7.878-.122-.394-.638-.835-1.227-1.13-.736-.368-.27-.81.32-.76 1.128.098 2.674.687 3.116 1.153Zm-5.105 15.487c-.172-.441-.614-.736-1.178-.883-.737-.197-.687-.761.073-.81a26.14 26.14 0 0 1 3.02.147 6.825 6.825 0 0 0 1.914-.147 27.35 27.35 0 0 0 .122-2.43c-.417 0-1.399.073-1.767.122a5.602 5.602 0 0 0-1.693.467 5.154 5.154 0 0 1-1.841-.908c-.442-.393-.05-.737.343-.663.393.074 1.277.123 1.743.147a22.18 22.18 0 0 0 2.283-.073c.932-.074 1.84-.123 2.184-.172.54-.074.736.172.736.393-.06.297-.16.586-.294.859-.196.687-.417 1.62-.565 2.184.467-.073.835.074.786.565-.05.417-.393.49-.786.466-1.202.025-2.208.098-3.435.172a4.555 4.555 0 0 0-.025.515v1.522c0 .393.122.565.515.565.737 0 2.75-.393 4.172-.835.565-.172.81.49.099.835-1.498.736-3.608 1.448-4.614 1.521-1.448.098-1.792-.785-1.792-2.258v-1.3Zm11.487-4.884a57.472 57.472 0 0 1 1.89-.147c.539-.025.662.196.638.417-.025.22-.123.59-.172.933-.123 1.104-.393 3.755-.565 5.203.442-.098.884.024.859.466-.024.467-.221.688-.883.688-1.522 0-2.774.024-4.124.049-.024.294-.319.76-.662.785-.344.024-.59-.368-.638-.933l-.417-5.964a1.58 1.58 0 0 0-.958-.859c-.638-.196-.663-.785.05-.834a12.81 12.81 0 0 1 2.527.245c.818.047 1.639.03 2.455-.05Zm-2.43 1.055c-.025.344-.025.491-.025.59l.123 4.957c.957.025 1.963-.049 2.945-.122l.049-5.498c-.785-.025-2.184 0-3.092.073Zm4.32-13.499c-.104.584-.162 1.175-.173 1.767v4.64c.246-.025.492-.025.712-.05a2.378 2.378 0 0 0 1.375-.638 9.504 9.504 0 0 1 1.669.024c.393.05.933.246.933.786 0 .515-.565.81-1.252.785-.712-.024-2.013.025-3.437.05v.049c0 1.006.05 4.148-.957 4.148-.368 0-.638-.54-.638-1.645v-8.713c-.515-.614-1.448-.982-1.963-1.154-.737-.245-.663-.834.098-.834.614 0 2.945.27 3.632.785Z",fill:"#30373F"})]}))};_e.displayName="SvgLogo";var We=_e,Re=function(Z){var X,ye,Se,Fe;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsxs)("g",{clipPath:"url(#ic-clock_svg__a)",children:[Object(c.jsx)("path",{d:"M8 15A6.5 6.5 0 1 0 8 2a6.5 6.5 0 0 0 0 13Z",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("path",{d:"M5.657 2.121C4.485.95 2.744.791 1.767 1.768c-.976.976-.817 2.717.354 3.889M10 2.121c1.172-1.171 2.913-1.33 3.89-.353.975.976.817 2.717-.354 3.889",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(c.jsx)("path",{d:"M8.5 4.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z",fill:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"}),Object(c.jsx)("path",{d:"M10.367 10.827a.5.5 0 0 0 .574-.82l-2.458-1.72a.5.5 0 0 0-.573.819l2.457 1.72ZM12.124 15.363a.5.5 0 1 0 .94-.343l-.342-.94a.5.5 0 1 0-.94.343l.342.94ZM4.064 15.363a.5.5 0 1 1-.94-.343l.342-.94a.5.5 0 0 1 .94.343l-.342.94Z",fill:(Fe=Z.color)!==null&&Fe!==void 0?Fe:"#30373F"})]}),Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:"ic-clock_svg__a",children:Object(c.jsx)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]}))};Re.displayName="SvgIcClock";var Ee=Re,Ue=function(Z){return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsxs)("g",{clipPath:"url(#ic-discount_svg__a)",children:[Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M-.5 6.25a3.75 3.75 0 1 1 0 7.5v3.75h21v-3.75a3.75 3.75 0 1 1 0-7.5V2.5h-21v3.75Z",fill:"#03936E"}),Object(c.jsx)("circle",{cx:1.929,cy:1.929,r:1.479,transform:"matrix(1 0 0 -1 5.5 9.357)",stroke:"#fff",strokeWidth:.9}),Object(c.jsx)("circle",{cx:1.929,cy:1.929,r:1.479,transform:"matrix(1 0 0 -1 10.643 14.5)",stroke:"#fff",strokeWidth:.9}),Object(c.jsx)("path",{d:"M13 5.5h1.5l-7.5 9H5.5l7.5-9Z",fill:"#fff"})]}),Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:"ic-discount_svg__a",children:Object(c.jsx)("path",{fill:"#fff",d:"M0 0h20v20H0z"})})})]}))};Ue.displayName="SvgIcDiscount";var se=Ue,ne=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 0a2 2 0 0 0-2 2v2h13a3 3 0 0 1 3 3v19h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H11Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5Zm3 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Zm-1 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Z",fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};ne.displayName="SvgIcDocument";var le=ne,Q=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{clipRule:"evenodd",d:"M15.182 4.575a2 2 0 0 1 2.828 0l1.415 1.415a2 2 0 0 1 0 2.828l-8.952 8.952-5.19.948.947-5.191 8.952-8.952Z",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"}),Object(c.jsx)("path",{d:"m6.838 13.547 3.672 3.672M14.616 5.769l3.672 3.672",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"})]}))};Q.displayName="SvgIcEdit";var J=Q,ee=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16h-6v-3a1 1 0 1 0-2 0v3H5ZM9 8h1v2H9V8Zm6 0h-1v2h1V8Zm-6 4h1v2H9v-2Zm6 0h-1v2h1v-2Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};ee.displayName="SvgIcHotelFill";var ae=ee,me=function(Z){var X,ye,Se,Fe;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{d:"M5 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("path",{stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F",strokeWidth:.5,d:"M9.25 8.25h.5v1.5h-.5zM14.25 8.25h.5v1.5h-.5zM9.25 12.25h.5v1.5h-.5zM14.25 12.25h.5v1.5h-.5z"}),Object(c.jsx)("path",{d:"M10.5 18a1.5 1.5 0 0 1 3 0v3.5h-3V18Z",stroke:(Se=Z.color)!==null&&Se!==void 0?Se:"#30373F"}),Object(c.jsx)("path",{fill:(Fe=Z.color)!==null&&Fe!==void 0?Fe:"#30373F",d:"M5 21h14v1H5z"})]}))};me.displayName="SvgIcHotelLine";var je=me,he=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{d:"M16.027 6.919V4.222H5.421v15.556h10.607v-2.63M12.264 11.78h5.885",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"}),Object(c.jsx)("path",{d:"m15.97 9.172 2.609 2.608-2.609 2.609",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"})]}))};he.displayName="SvgIcLogout";var Le=he,Ie=function(Z){var X;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2a8 8 0 0 0-2.549 15.585L12 22l2.549-4.415A8 8 0 0 0 12 2Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#367CE1"}),Object(c.jsx)("rect",{x:9,y:7,width:6,height:6,rx:3,fill:"#fff"})]}))};Ie.displayName="SvgIcMarker";var Ke=Ie,Ge=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("circle",{cx:12.478,cy:6.239,r:4.239,stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("path",{d:"M4 21.777v-1.834a6.42 6.42 0 0 1 6.42-6.42h4.114a6.42 6.42 0 0 1 6.42 6.42V22",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ge.displayName="SvgIcProfile";var Ye=Ge,ze=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("circle",{cx:9.5,cy:9.5,r:7,stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F"}),Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m14 14.727.727-.727L22 21.273l-.727.727L14 14.727Z",fill:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};ze.displayName="SvgIcSearch";var Qe=ze,Ze=function(Z){var X,ye;return Object(c.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:[Object(c.jsx)("path",{clipRule:"evenodd",d:"m13.414 4 .663 1.394c.829.29 1.586.733 2.238 1.294l1.541-.123 1.657 2.87-.875 1.273a7.042 7.042 0 0 1 0 2.585l.875 1.272-1.657 2.87-1.54-.123a6.993 6.993 0 0 1-2.239 1.294L13.414 20H10.1l-.664-1.394A6.991 6.991 0 0 1 7.2 17.313l-1.542.122L4 14.565l.876-1.272a7.04 7.04 0 0 1 0-2.585L4 9.435l1.657-2.87 1.542.122a6.993 6.993 0 0 1 2.237-1.293L10.1 4h3.314Z",stroke:(X=Z.color)!==null&&X!==void 0?X:"#30373F",strokeLinejoin:"round"}),Object(c.jsx)("path",{d:"M11.757 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",stroke:(ye=Z.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ze.displayName="SvgIcSettings";var $e=Ze,Xe=function(Z){var X;return Object(c.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Z,{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9.53a1 1 0 0 1-1 1H9.5l-4.187 3.36A.5.5 0 0 1 4.5 15v-2.97H1a1 1 0 0 1-1-1V1.5ZM4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:(X=Z.color)!==null&&X!==void 0?X:"#30373F"})}))};Xe.displayName="SvgIcTalk";var qe=Xe,en=["src"];function nn(pe,Z){if(pe==null)return{};var X=tn(pe,Z),ye,Se;if(Object.getOwnPropertySymbols){var Fe=Object.getOwnPropertySymbols(pe);for(Se=0;Se<Fe.length;Se++)ye=Fe[Se],!(Z.indexOf(ye)>=0)&&Object.prototype.propertyIsEnumerable.call(pe,ye)&&(X[ye]=pe[ye])}return X}function tn(pe,Z){if(pe==null)return{};var X={},ye=Object.keys(pe),Se,Fe;for(Fe=0;Fe<ye.length;Fe++)Se=ye[Fe],!(Z.indexOf(Se)>=0)&&(X[Se]=pe[Se]);return X}var Je=Object(E.forwardRef)(function(pe){var Z=pe.src,X=nn(pe,en);return Object(c.jsx)(c.Fragment,{children:Y.a.createElement(K[Z],X)})});Je.displayName="Icon"},"./packages/travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:85},endLoc:{col:1,line:87},startBody:{col:23,line:85},endBody:{col:1,line:87}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:77},endLoc:{col:1,line:79},startBody:{col:23,line:77},endBody:{col:1,line:79}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:85},endLoc:{col:1,line:87},startBody:{col:23,line:85},endBody:{col:1,line:87}}}}},title:"@travelmakers-design-v2/core/General/Icon",component:w.a,argTypes:{src:{defaultValue:"IcCompanyApple",control:{type:"radio",options:["======company======","IcCompanyInstagram","IcCompanyApple","IcCompanyBrunch","IcCompanyFacebook","IcCompanyGoogle","IcCompanyKakaoPay","IcCompanyKakao","IcCompanyLivinginhotel","IcCompanyNaverPay","IcCompanyNaver","IcCompanySamsungPay","IcCompanyYoutube","======control======","IcAlert","IcAngleDown","IcAngleLeft","IcAngleRight","IcAngleUp","IcArrowLeft","IcArrowRight","IcArrowSingleLeft","IcArrowSingleRight","IcCheck","IcClose","IcExpand","IcHotelTypeMini","IcHotelTypeResidence","IcMinus","IcPlus","IcReset","IcResultFail","IcResultSuccess","IcStar","======logo======","Logo","======pictogram======","IcClock","IcDiscount","IcDocument","IcEdit","IcHotelFill","IcHotelLine","IcLogout","IcMarker","IcProfile","IcSearch","IcSettings","IcTalk"]},description:"Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var c=function(R){return Object(F.jsx)(w.a,Object.assign({},R,{width:32,height:32}))};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return <Icon {...props} width={32} height={32} />;
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Image/Image.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return _});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),c=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),v=Object(s.a)(function(T,D){var U=D.load,B=D.error;return{image:{display:U&&!B?"block":"none",objectFit:U&&!B?"cover":"contain"},loading:{objectFit:"contain",backgroundColor:"#EFEFEF"}}}),p=e("./node_modules/react/jsx-runtime.js"),y=["lazy","src","alt","className"];function i(T,D){return u(T)||j(T,D)||g(T,D)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(T,D){if(T){if(typeof T=="string")return b(T,D);var U=Object.prototype.toString.call(T).slice(8,-1);if(U==="Object"&&T.constructor&&(U=T.constructor.name),U==="Map"||U==="Set")return Array.from(T);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return b(T,D)}}function b(T,D){(D==null||D>T.length)&&(D=T.length);for(var U=0,B=new Array(D);U<D;U++)B[U]=T[U];return B}function j(T,D){var U=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(U!=null){var B,I,x,a,d=[],r=!0,m=!1;try{if(x=(U=U.call(T)).next,D===0){if(Object(U)!==U)return;r=!1}else for(;!(r=(B=x.call(U)).done)&&(d.push(B.value),d.length!==D);r=!0);}catch(o){m=!0,I=o}finally{try{if(!r&&U.return!=null&&(a=U.return(),Object(a)!==a))return}finally{if(m)throw I}}return d}}function u(T){if(Array.isArray(T))return T}function O(T,D){if(T==null)return{};var U=L(T,D),B,I;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(T);for(I=0;I<x.length;I++)B=x[I],!(D.indexOf(B)>=0)&&Object.prototype.propertyIsEnumerable.call(T,B)&&(U[B]=T[B])}return U}function L(T,D){if(T==null)return{};var U={},B=Object.keys(T),I,x;for(x=0;x<B.length;x++)I=B[x],!(D.indexOf(I)>=0)&&(U[I]=T[I]);return U}var _=Object(n.forwardRef)(function(T,D){var U=T.lazy,B=U===void 0?!0:U,I=T.src,x=T.alt,a=T.className,d=O(T,y),r=Object(n.useState)(!1),m=i(r,2),o=m[0],h=m[1],P=Object(n.useState)(!1),M=i(P,2),A=M[0],S=M[1],k=v({load:o,error:A}),H=k.classes,G=k.cx;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",Object.assign({ref:D,src:I,alt:x,loading:B?"lazy":"eager",decoding:B?"async":"auto",className:G(a,H.image),onLoad:function(){return h(!0)},onError:function(ce){h(!0),S(!0)}},d)),!o&&Object(p.jsx)("img",Object.assign({loading:B?"lazy":"eager",decoding:B?"async":"auto",className:G(a,H.loading),src:e("./packages/travelmakers-design-core/src/components/Image/img/loading.png")},d)),A&&Object(p.jsx)("img",Object.assign({loading:B?"lazy":"eager",decoding:B?"async":"auto",className:G(a,H.loading),src:e("./packages/travelmakers-design-core/src/components/Image/img/error.png")},d))]})});_.displayName="Image"},"./packages/travelmakers-design-core/src/components/Image/img/error.png":function(oe,f,e){oe.exports=e.p+"static/media/error.24450d72.png"},"./packages/travelmakers-design-core/src/components/Image/img/loading.png":function(oe,f,e){oe.exports=e.p+"static/media/loading.0812647b.png"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Image {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:56},startBody:{col:23,line:54},endBody:{col:1,line:56}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:48},startBody:{col:23,line:46},endBody:{col:1,line:48}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Image {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:56},startBody:{col:23,line:54},endBody:{col:1,line:56}}}}},title:"@travelmakers-design-v2/core/General/Image",component:w.a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}};var c=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return <Image {...props} />;
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),c=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),v=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),p=function(m,o,h){return o?m.error:h},y=function(m,o,h){return o===!1?m.secondary1:o===!0?m.error:h!=null?h:""},i=Object(v.a)(function(r,m){var o,h,P=m.subfix,M=m.isError,A=r.typography,S=r.colors,k=r.spacing,H=r.radius;return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",rowGap:k.spacing5},focus:{border:"1px solid "+p(S,M,S.primary)},disabled:{backgroundColor:S.surface,userSelect:"none"},container:{display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:"328px",minHeight:"44px",padding:"0 "+k.spacing30,border:"1px solid "+p(S,M,S.outline),borderRadius:H.radius20,overflow:"hidden"},input:Object.assign({},A.body2,(h={padding:0,color:S.primary2,border:0,outline:0,width:P?"100%":"auto"},h["&::placeholder"]={color:S.primary3},h["&:focus"]={color:S.primary1,borderColor:p(S,M,S.primary)},h["&:disabled"]=(o={color:S.primary3,backgroundColor:S.surface},o["&::placeholder"]={color:S.primary4},o),h)),label:Object.assign({},A.body2,{color:S.primary1}),subfix:Object.assign({},A.body2,{paddingLeft:k.spacing30,color:y(S,M,S.primary3),flexShrink:0}),feedback:Object.assign({},A.body3,{color:y(S,M,S.primary3),fontWeight:400})}}),l=e("./node_modules/react/jsx-runtime.js"),g=["label","subfix","feedback","isError","value","placeholder","autoComplete","onClick","onBlur","onChange","className"];function b(r,m){return _(r)||L(r,m)||u(r,m)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(r,m){if(r){if(typeof r=="string")return O(r,m);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return O(r,m)}}function O(r,m){(m==null||m>r.length)&&(m=r.length);for(var o=0,h=new Array(m);o<m;o++)h[o]=r[o];return h}function L(r,m){var o=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var h,P,M,A,S=[],k=!0,H=!1;try{if(M=(o=o.call(r)).next,m===0){if(Object(o)!==o)return;k=!1}else for(;!(k=(h=M.call(o)).done)&&(S.push(h.value),S.length!==m);k=!0);}catch(G){H=!0,P=G}finally{try{if(!k&&o.return!=null&&(A=o.return(),Object(A)!==A))return}finally{if(H)throw P}}return S}}function _(r){if(Array.isArray(r))return r}function T(r,m){if(r==null)return{};var o=D(r,m),h,P;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(r);for(P=0;P<M.length;P++)h=M[P],!(m.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(r,h)&&(o[h]=r[h])}return o}function D(r,m){if(r==null)return{};var o={},h=Object.keys(r),P,M;for(M=0;M<h.length;M++)P=h[M],!(m.indexOf(P)>=0)&&(o[P]=r[P]);return o}var U=0,B=Object(n.forwardRef)(function(r,m){var o=r.label,h=r.subfix,P=r.feedback,M=r.isError,A=M===void 0?null:M,S=r.value,k=r.placeholder,H=k===void 0?"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.":k,G=r.autoComplete,re=r.onClick,ce=r.onBlur,q=r.onChange,ie=r.className,te=T(r,g),de=Object(n.useState)(S!=null?S:""),ue=b(de,2),fe=ue[0],ve=ue[1],be=Object(n.useState)(!1),ge=b(be,2),xe=ge[0],Ce=ge[1],De=i({subfix:h,isError:A}),Te=De.classes,Be=De.cx,Oe=Object(n.useState)(function(){return String(U++)}),Ne=b(Oe,1),Me=Ne[0],ke="tm-input-"+Me,Ve=function(_e){Ce(!0),re==null||re(_e)},Ae=function(_e){Ce(!1),ce==null||ce(_e)},we=function(_e){ve(_e.target.value),q==null||q(_e)},He=function(_e){var We=_e.subfix;if(We){var Re,Ee;return Object(l.jsxs)("div",{className:Be(Te.container,(Re={},Re[Te.focus]=xe,Re),(Ee={},Ee[Te.disabled]=te.disabled,Ee)),"aria-readonly":te.disabled,children:[Object(l.jsx)(s.a,Object.assign({component:"input",className:Te.input,id:ke,type:"text",ref:m,placeholder:H,autoComplete:G!=null?G:"off",onClick:Ve,onBlur:Ae,onChange:we,value:fe},te)),Object(l.jsx)("div",{className:Te.subfix,"aria-readonly":te.disabled,children:We})]})}return Object(l.jsx)(s.a,Object.assign({component:"input",className:Be(Te.input,Te.container),id:ke,type:"text",ref:m,placeholder:H,autoComplete:G!=null?G:"off",onClick:re,onBlur:ce,onChange:we,value:fe,"aria-readonly":te.disabled},te))};return Object(l.jsxs)("div",{className:Be(Te.root,ie),children:[o&&Object(l.jsx)("label",{className:Te.label,htmlFor:ke,children:o}),Object(l.jsx)(He,{subfix:h}),P&&Object(l.jsx)("strong",{className:Te.feedback,children:P})]})});B.displayName="Input";var I=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Input {...props} />;\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:76},endLoc:{col:1,line:78},startBody:{col:23,line:76},endBody:{col:1,line:78}}},I=`import { Meta } from "@storybook/react";
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
`,x={Default:{startLoc:{col:23,line:68},endLoc:{col:1,line:70},startBody:{col:23,line:68},endBody:{col:1,line:70}}},a=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Input {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:76},endLoc:{col:1,line:78},startBody:{col:23,line:76},endBody:{col:1,line:78}}}}},title:"@travelmakers-design-v2/core/General/Input",component:B,argTypes:{label:{control:{type:"text"},description:"input \uB77C\uBCA8",table:{type:{summary:"string"}}},subfix:{control:{type:"text"},description:"input \uC0AC\uC6A9 \uC2DC \uC778\uC99D \uC2DC\uAC04,\uACB0\uACFC \uB4F1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",table:{type:{summary:["string","number"]}}},feedback:{control:{type:"text"},description:"input \uCD94\uAC00 \uC124\uBA85",table:{type:{summary:"string"}}},isError:{control:{type:"boolean"},defaultValue:!1,description:"input Error \uC5EC\uBD80",table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},defaultValue:!1,description:"input Disabled \uC5EC\uBD80",table:{type:{summary:"boolean"}}}}},d=function(m){return Object(l.jsx)(B,Object.assign({},m))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <Input {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return C});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),c=Object(z.a)(function(t){var n=t.colors,s=t.radius;return{root:{display:"inline-flex",flexDirection:"column",rowGap:"1px",minWidth:"328px",margin:0,padding:0,backgroundColor:n.outline,border:"1px solid "+n.outline,borderRadius:s.radius20,overflow:"hidden"}}}),W=e("./node_modules/react/jsx-runtime.js"),R=["className","children"];function N(t,n){if(t==null)return{};var s=V(t,n),v,p;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(t);for(p=0;p<y.length;p++)v=y[p],!(n.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(t,v)&&(s[v]=t[v])}return s}function V(t,n){if(t==null)return{};var s={},v=Object.keys(t),p,y;for(y=0;y<v.length;y++)p=v[y],!(n.indexOf(p)>=0)&&(s[p]=t[p]);return s}var C=Object(E.forwardRef)(function(t,n){var s=t.className,v=t.children,p=N(t,R),y=c(),i=y.classes,l=y.cx;return Object(W.jsx)(Y.a,Object.assign({component:"ul",ref:n,className:l(i.root,s)},p,{children:v}))});C.displayName="Menu"},"./packages/travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return t});var K=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.function.name.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(E),z=e("./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx"),c=e("./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx"),W=e("./node_modules/react/jsx-runtime.js"),R=e.n(W),N=`
    
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
`,V={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:37},startBody:{col:23,line:29},endBody:{col:1,line:37}}},C=[{href:"#",name:"\uC608\uC57D \uB0B4\uC5ED"},{href:"#",name:"\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD"},{href:"#",name:"\uC54C\uB9BC \uC124\uC815"},{href:"#",name:"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"},{href:"#",name:"\uACE0\uAC1D\uC13C\uD130"}];f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const items = menus.map((menu, idx) => {\\n    const { href, name } = menu;\\n\\n    return <MenuItem key={idx} href={href} menu={name} />;\\n  });\\n\\n  return <Menu>{items}</Menu>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:45},startBody:{col:23,line:37},endBody:{col:1,line:45}}}}},title:"@travelmakers-design-v2/core/General/Menu/Menu",component:c.a,argTypes:{}};var t=function(){var s=C.map(function(v,p){var y=v.href,i=v.name;return Object(W.jsx)(z.a,{href:y,menu:i},p)});return Object(W.jsx)(c.a,{children:s})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
  const items = menus.map((menu, idx) => {
    const { href, name } = menu;

    return <MenuItem key={idx} href={href} menu={name} />;
  });

  return <Menu>{items}</Menu>;
}`}},t.parameters)},"./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.string.link.js"),E=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/next/link.js"),z=e.n(Y),c=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),R=Object(W.a)(function(s){var v=s.colors,p=s.spacing,y=s.typography;return{root:{listStyle:"none"},link:Object.assign({display:"inline-block",width:"100%",padding:p.spacing30},y.body2,{color:v.primary,textDecoration:"none",backgroundColor:v.white})}}),N=e("./node_modules/react/jsx-runtime.js"),V=["className","menu"];function C(s,v){if(s==null)return{};var p=t(s,v),y,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(i=0;i<l.length;i++)y=l[i],!(v.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(s,y)&&(p[y]=s[y])}return p}function t(s,v){if(s==null)return{};var p={},y=Object.keys(s),i,l;for(l=0;l<y.length;l++)i=y[l],!(v.indexOf(i)>=0)&&(p[i]=s[i]);return p}var n=Object(c.forwardRef)(function(s,v){var p=s.className,y=s.menu,i=C(s,V),l=R(),g=l.classes,b=l.cx;return Object(N.jsx)("li",{className:b(g.root,p),children:Object(N.jsx)(z.a,Object.assign({ref:v,className:g.link},i,{children:y}))})});n.displayName="MenuItem"},"./packages/travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return W});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx"),F=e("./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx"),E=e("./node_modules/react/jsx-runtime.js"),Y=e.n(E),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}},z=`import { Meta } from "@storybook/react";
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
`,c={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/Menu/MenuItem",component:F.a,argTypes:{href:{control:{type:"text"},defaultValue:"#",description:"\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C",table:{type:{summary:"string"}}},menu:{control:{type:"text",default:"\uBA54\uB274 \uC774\uB984"},defaultValue:"\uBA54\uB274 \uC774\uB984",description:"\uBA54\uB274\uC758 \uC774\uB984",table:{type:{summary:"string"}}}}};var W=function(N){return Object(E.jsx)(w.a,{children:Object(E.jsx)(F.a,Object.assign({},N))})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <Menu>
      <MenuItem {...props} />
    </Menu>
  );
}`}},W.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return l}),e.d(f,"NavBarWithLink",function(){return g}),e.d(f,"NavBarWithButton",function(){return b});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),c=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),W=e("./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx"),R=e("./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),V=Object(N.a)(function(j){return{root:{display:"grid",alignItems:"center",gridTemplateColumns:"repeat(3, 1fr)",minHeight:"48px"},title:{margin:"0 auto",gridColumn:2}}}),C=e("./node_modules/react/jsx-runtime.js"),t=["hasBack","title","className","children"];function n(j,u){if(j==null)return{};var O=s(j,u),L,_;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(j);for(_=0;_<T.length;_++)L=T[_],!(u.indexOf(L)>=0)&&Object.prototype.propertyIsEnumerable.call(j,L)&&(O[L]=j[L])}return O}function s(j,u){if(j==null)return{};var O={},L=Object.keys(j),_,T;for(T=0;T<L.length;T++)_=L[T],!(u.indexOf(_)>=0)&&(O[_]=j[_]);return O}var v=Object(E.forwardRef)(function(j,u){var O=j.hasBack,L=O===void 0?!1:O,_=j.title,T=j.className,D=j.children,U=n(j,t),B=V(),I=B.classes,x=B.cx;return Object(C.jsxs)(c.a,Object.assign({component:"header",ref:u,className:x(I.root,T)},U,{children:[L&&Object(C.jsx)(Y.a,{src:"IcArrowLeft",width:24,height:24}),Object(C.jsx)(z.a,{level:"subhead2",color:"primary",className:I.title,strong:!0,children:_}),D]}))});v.displayName="NavBar",v.NavLink=R.a,v.NavButton=W.a;var p=`
    
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
NavBarWithButton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithButton.parameters };`,y={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}},NavBarWithLink:{startLoc:{col:30,line:43},endLoc:{col:1,line:49},startBody:{col:30,line:43},endBody:{col:1,line:49}},NavBarWithButton:{startLoc:{col:32,line:51},endLoc:{col:1,line:57},startBody:{col:32,line:51},endBody:{col:1,line:57}}},p=`import { Meta } from "@storybook/react";
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
`,y={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}},NavBarWithLink:{startLoc:{col:30,line:35},endLoc:{col:1,line:41},startBody:{col:30,line:35},endBody:{col:1,line:41}},NavBarWithButton:{startLoc:{col:32,line:43},endLoc:{col:1,line:49},startBody:{col:32,line:43},endBody:{col:1,line:49}}},i=f.default={parameters:{storySource:{source:`
    
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
NavBarWithButton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithButton.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}},"nav-bar-with-link":{startLoc:{col:30,line:43},endLoc:{col:1,line:49},startBody:{col:30,line:43},endBody:{col:1,line:49}},"nav-bar-with-button":{startLoc:{col:32,line:51},endLoc:{col:1,line:57},startBody:{col:32,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design-v2/core/General/NavBar",component:v,argTypes:{hasBack:{type:"boolean",defaultValue:"false",description:"\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34",table:{type:{summary:"boolean"}}},title:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavBar \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}}}},l=function(u){return Object(C.jsx)(v,Object.assign({},u))};l.displayName="Default";var g=function(u){return Object(C.jsx)(v,Object.assign({},u,{children:Object(C.jsx)(v.NavLink,{href:"#",label:"\uB808\uC774\uBE14"})}))};g.displayName="NavBarWithLink";var b=function(u){return Object(C.jsx)(v,Object.assign({},u,{children:Object(C.jsx)(v.NavButton,{label:"\uB808\uC774\uBE14"})}))};b.displayName="NavBarWithButton",l.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavBar {...props} />;
}`}},l.parameters),g.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavLink href="#" label="\uB808\uC774\uBE14" />
    </NavBar>
  );
}`}},g.parameters),b.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavButton label="\uB808\uC774\uBE14" />
    </NavBar>
  );
}`}},b.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return C});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),c=Object(z.a)(function(t){var n,s=t.colors,v=t.shadows,p=t.typography;return{root:Object.assign({},p.body3,(n={marginLeft:"auto",padding:0,color:s.primary,backgroundColor:"transparent",border:0,outline:0,cursor:"pointer"},n[":not(:disabled)"]={"&:hover":{filter:"drop-shadow("+v.elevation1+")"},"&:focus-visible":{color:s.primaryInteract,filter:"drop-shadow("+v.elevation1+")"},"&:active":{color:s.primaryInteract,filter:v.none}},n["&:disabled"]={color:s.primary4,cursor:"auto"},n))}}),W=e("./node_modules/react/jsx-runtime.js"),R=["label","isDisable","className"];function N(t,n){if(t==null)return{};var s=V(t,n),v,p;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(t);for(p=0;p<y.length;p++)v=y[p],!(n.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(t,v)&&(s[v]=t[v])}return s}function V(t,n){if(t==null)return{};var s={},v=Object.keys(t),p,y;for(y=0;y<v.length;y++)p=v[y],!(n.indexOf(p)>=0)&&(s[p]=t[p]);return s}var C=Object(E.forwardRef)(function(t,n){var s=t.label,v=t.isDisable,p=v===void 0?!1:v,y=t.className,i=N(t,R),l=c(),g=l.classes,b=l.cx;return Object(W.jsx)(Y.a,Object.assign({component:"button",ref:n,className:b(g.root,y),disabled:p},i,{children:s}))});C.displayName="NavButton"},"./packages/travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavButton {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/core/General/NavBar/NavButton",component:w.a,argTypes:{label:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavButton \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}},isDisable:{type:"boolean",defaultValue:"false",description:"NavButton disabled",table:{type:{summary:"boolean"}}}}};var c=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavButton {...props} />;
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/next/link.js"),Y=e.n(E),z=e("./node_modules/react/index.js"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=function(v,p){var y=v.colors,i=v.shadows;return p?{color:y.primary4,cursor:"auto"}:{"&:hover":{filter:"drop-shadow("+i.elevation1+")"},"&:focus-visible":{color:y.primaryInteract,filter:"drop-shadow("+i.elevation1+")"},"&:active":{color:y.primaryInteract,filter:i.none}}},R=Object(c.a)(function(s,v){var p=v.isDisable,y=s.colors,i=s.typography;return{root:Object.assign({},i.body3,{marginLeft:"auto",color:y.primary,textDecoration:"none"},W(s,p))}}),N=e("./node_modules/react/jsx-runtime.js"),V=["label","isDisable","className"];function C(s,v){if(s==null)return{};var p=t(s,v),y,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(i=0;i<l.length;i++)y=l[i],!(v.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(s,y)&&(p[y]=s[y])}return p}function t(s,v){if(s==null)return{};var p={},y=Object.keys(s),i,l;for(l=0;l<y.length;l++)i=y[l],!(v.indexOf(i)>=0)&&(p[i]=s[i]);return p}var n=Object(z.forwardRef)(function(s,v){var p=s.label,y=s.isDisable,i=y===void 0?!1:y,l=s.className,g=C(s,V),b=R({isDisable:i}),j=b.classes,u=b.cx,O=function(_){if(i)return _.preventDefault();g.onClick&&g.onClick()};return Object(N.jsx)(Y.a,Object.assign({ref:v,className:u(j.root,l),onClick:O,tabindex:i?-1:0,"aria-disabled":i},g,{children:p}))});n.displayName="NavLink"},"./packages/travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavLink {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:51},startBody:{col:23,line:49},endBody:{col:1,line:51}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavLink {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:49},endLoc:{col:1,line:51},startBody:{col:23,line:49},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/core/General/NavBar/NavLink",component:w.a,argTypes:{href:{control:{type:"text"},defaultValue:"#",description:"NavLink href",table:{type:{summary:"string"}}},label:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavLink \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}},isDisable:{type:"boolean",defaultValue:"false",description:"NavLink disabled",table:{type:{summary:"boolean"}}}}};var c=function(R){return Object(F.jsx)(w.a,Object.assign({},R))};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavLink {...props} />;
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Price/Price.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return t});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(n,s){var v=s.type;return{root:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},percentText:Object.assign({},n.typography.display6,{fontWeight:"700",width:"39px",color:n.colors.error}),nightText:Object.assign({},n.typography.body3,{fontWeight:"700",textAlign:"right",width:"28px",color:n.colors.primary1}),priceText:Object.assign({},n.typography.display4,{fontWeight:"700",color:n.colors.primary1,marginLeft:n.spacing.spacing5}),priceBeforeText:Object.assign({},n.typography.body2,{fontWeight:"700",color:n.colors.primary1}),priceStartText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2,marginLeft:n.spacing.spacing5}),labelSecondary:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary1,marginRight:n.spacing.spacing5}),nightSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"700",color:n.colors.primary1,textAlign:"right",marginRight:n.spacing.spacing5}),priceSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2}),priceBeforeSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2}),couponWrap:{display:"flex",alignItems:"center",width:"74px",background:n.colors.secondaryContainer,borderRadius:n.spacing.spacing5,marginLeft:n.spacing.spacing5},couponWord:Object.assign({},n.typography.caption,{fontWeight:"700",color:n.colors.secondary1})}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","label","percentText","nightText","priceText","priceStartText","isCoupon","className"];function V(n,s){if(n==null)return{};var v=C(n,s),p,y;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(y=0;y<i.length;y++)p=i[y],!(s.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(n,p)&&(v[p]=n[p])}return v}function C(n,s){if(n==null)return{};var v={},p=Object.keys(n),y,i;for(i=0;i<p.length;i++)y=p[i],!(s.indexOf(y)>=0)&&(v[y]=n[y]);return v}var t=Object(E.forwardRef)(function(n,s){var v=n.type,p=v===void 0?"primary":v,y=n.label,i=n.percentText,l=n.nightText,g=n.priceText,b=n.priceStartText,j=n.isCoupon,u=j===void 0?!0:j,O=n.className,L=V(n,N),_=W({type:p}),T=_.classes,D=_.cx,U=function(){return Object(R.jsxs)(z.a,Object.assign({component:"div",ref:s,className:D(T.root,O)},L,{children:[i&&Object(R.jsxs)("span",{className:D(T.percentText),children:[i,"%"]}),l&&Object(R.jsxs)("span",{className:D(T.nightText),children:[l,"\uBC15"]}),g&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{className:D(T.priceText),children:g.toLocaleString("ko")}),Object(R.jsx)("span",{className:D(T.priceBeforeText),children:"\uC6D0~"})]}),b&&Object(R.jsxs)("span",{className:D(T.priceStartText),children:["| ",b]})]}))},B=function(){return Object(R.jsxs)(z.a,Object.assign({component:"div",ref:s,className:D(T.root,O)},L,{children:[y&&Object(R.jsx)("span",{className:D(T.labelSecondary),children:y}),l&&Object(R.jsxs)("span",{className:D(T.nightSecondaryText),children:[l,"\uBC15"]}),g&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{className:D(T.priceSecondaryText),children:g==null?void 0:g.toLocaleString("ko")}),Object(R.jsx)("span",{className:D(T.priceBeforeSecondaryText),children:"\uC6D0"})]}),u&&Object(R.jsxs)("div",{className:D(T.couponWrap),children:[Object(R.jsx)(Y.a,{src:"IcDiscount",width:16,height:16,style:{margin:"0 4px"}}),Object(R.jsx)("span",{className:D(T.couponWord),children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]})]}))};return p==="primary"?Object(R.jsx)(U,{}):Object(R.jsx)(B,{})});t.displayName="Price"},"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),Y=e("./node_modules/react/jsx-runtime.js"),z=e.n(Y),c=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Price {...props} />;\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}},c=`import React from "react";
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
`,W={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:80},startBody:{col:23,line:78},endBody:{col:1,line:80}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Price {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}}}},title:"@travelmakers-design-v2/core/General/Price",component:E.a,argTypes:{type:{defaultValue:"primary",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],control:{type:"inline-radio"}},label:{defaultValue:"",description:"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:70,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},nightText:{defaultValue:1,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceText:{defaultValue:1e4,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceStartText:{defaultValue:"1\uBC15 100,000\uC6D0\uBD80\uD130",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isCoupon:{defaultValue:!0,description:" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var R=function(V){return Object(Y.jsx)(E.a,Object.assign({},V))};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return <Price {...props} />;
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return U});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),R=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),N;function V(B,I){return I||(I=B.slice(0)),B.raw=I,B}var C=Object(W.c)(N||(N=V([`
from {
  opacity: 1;
}
70% {
  opacity: 0;
}`]))),t=function(I){var x=1.5;return{opacity:0,animation:C+" "+x+"s infinite",animationDelay:x/(3/I)+"s"}},n=function(I,x){var a=I.colors;return x?Object.assign({},t(1),{stroke:a.primary3}):{stroke:a.primary3}},s=Object(R.a)(function(B,I){var x=I.isProcessing,a=B.spacing,d=B.colors;return{root:{marginLeft:x&&a.spacing5},first:n(B,x),second:Object.assign({},t(2),{stroke:d.primary70}),third:Object.assign({},t(3),{stroke:d.primary80})}}),v=e("./node_modules/react/jsx-runtime.js"),p=function(I){var x=I.isProcessing,a=s({isProcessing:x}),d=a.classes,r=function(){return x?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("path",{className:d.first,d:"M1.84326 5L4.67169 7.82843L1.84326 10.6569"}),Object(v.jsx)("path",{className:d.second,d:"M6.5 5L9.32843 7.82843L6.5 10.6569"}),Object(v.jsx)("path",{className:d.third,d:"M11.1567 5L13.9852 7.82843L11.1567 10.6569"})]}):Object(v.jsx)("path",{className:d.first,d:"M7 5L9.82843 7.82843L7 10.6569"})};return Object(v.jsx)("svg",{className:d.root,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r()})};p.displayName="ProcessIcon";var y=Object(R.a)(function(B,I){var x,a=I.isProcessing,d=B.colors,r=B.typography;return{root:{display:"flex",alignItems:"center"},process:Object.assign({},r.body3,(x={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"0 11px",color:a?d.white:d.primary3,textAlign:"center",backgroundColor:a?d.secondary00:d.transparent,borderRadius:"22px"},x["&.process-line-height"]={lineHeight:"14px"},x)),processor:{fontWeight:700}}}),i=function(I){var x=I.item,a=I.hasIcon,d=x.processor,r=x.process,m=x.isProcessing,o=y({isProcessing:m}),h=o.classes,P=o.cx;return Object(v.jsxs)("li",{className:h.root,children:[Object(v.jsxs)("div",{className:P(h.process,{"process-line-height":d}),children:[d&&Object(v.jsx)("span",{className:h.processor,children:d}),r]}),a&&Object(v.jsx)(p,{isProcessing:m})]})};i.displayName="ProcessItem";var l=Object(R.a)(function(B){var I=B.spacing,x=B.colors;return{root:{display:"inline-flex",minWidth:"328px",minHeight:"52px",margin:0,padding:I.spacing5,backgroundColor:x.primary99,borderRadius:"26px"}}}),g=["status","className"];function b(B,I){if(B==null)return{};var x=j(B,I),a,d;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(B);for(d=0;d<r.length;d++)a=r[d],!(I.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(B,a)&&(x[a]=B[a])}return x}function j(B,I){if(B==null)return{};var x={},a=Object.keys(B),d,r;for(r=0;r<a.length;r++)d=a[r],!(I.indexOf(d)>=0)&&(x[d]=B[d]);return x}var u=function(I){switch(I){case"extend_purchase_before":case"reservation_purchase_before":return"before";case"extend_purchase_done":case"reservation_purchase_done":return"done"}},O=function(I){return[{process:"\uACB0\uC81C \uB300\uAE30",isProcessing:u(I)==="before"},{process:"\uACB0\uC81C \uC644\uB8CC",isProcessing:!1},{processor:"\uD638\uD154\uC5D0\uC0B6",process:"\uC608\uC57D \uC804\uB2EC",isProcessing:u(I)==="done"},{processor:"\uD638\uD154",process:"\uC608\uC57D \uD655\uC815",isProcessing:!1}]},L=Object(Y.forwardRef)(function(B,I){var x=B.status,a=B.className,d=b(B,g),r=l(),m=r.classes,o=r.cx,h=O(x),P=h.map(function(M,A){return Object(v.jsx)(i,{item:M,hasIcon:A+1!==h.length},A)});return Object(v.jsx)(z.a,Object.assign({component:"ol",ref:I,className:o(m.root,a)},d,{children:P}))});L.displayName="Process";var _=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:49},startBody:{col:23,line:37},endBody:{col:1,line:49}}},_=`import { Meta } from "@storybook/react";
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
`,T={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:41},startBody:{col:23,line:29},endBody:{col:1,line:41}}},D=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:49},startBody:{col:23,line:37},endBody:{col:1,line:49}}}}},title:"@travelmakers-design-v2/core/General/Process",component:L,argTypes:{status:{control:{type:"radio",options:["reservation_purchase_before","extend_purchase_before","reservation_purchase_done","extend_purchase_done"]},defaultValue:"reservation_purchase_before",description:"\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669",table:{type:{summary:"string"}}}}},U=function(I){return Object(v.jsx)("div",{style:{display:"inline-block",backgroundColor:"gray",padding:"20px 10px"},children:Object(v.jsx)(L,Object.assign({status:"reservation_purchase_before"},I))})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/Search/stories/Search.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return d});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),c=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),v=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),p=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),y=function(m,o){if(o==="fill")return m.surface;if(o==="line")return m.white},i=function(m,o,h){return o==="fill"&&!h?m.surface:h?m.primary:m.outline},l=Object(p.a)(function(r,m){var o,h=m.type,P=m.isFocus,M=r.typography,A=r.colors,S=r.spacing,k=r.radius;return{form:{display:"flex",alignItems:"center",columnGap:S.spacing10,minWidth:"328px",height:"48px",padding:"0 "+S.spacing30+" 0 "+S.spacing50,borderRadius:k.radius100,border:"1px solid "+i(A,h,P),overflow:"hidden",backgroundColor:y(A,h)},disabled:{borderColor:A.outline},input:Object.assign({},M.body2,(o={padding:0,color:A.primary2,border:0,outline:0,flexGrow:1,backgroundColor:"transparent"},o["&:focus"]={color:A.primary1},o["&::placeholder"]={color:A.primary3},o["&:disabled::placeholder"]={color:A.primary4},o["&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration"]={display:"none"},o["&::-moz-search-clear-button, &::-moz-search-back-button"]={display:"none"},o["&::-ms-clear,&::-ms-back"]={display:"none"},o)),reset:{display:"flex",padding:0,backgroundColor:"transparent",border:0,outline:0,cursor:"pointer"}}}),g=e("./node_modules/react/jsx-runtime.js"),b=["type","value","placeholder","autoComplete","onClick","onChange","onBlur","formSubmit","formReset","className"];function j(r,m){return T(r)||_(r,m)||O(r,m)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(r,m){if(r){if(typeof r=="string")return L(r,m);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return L(r,m)}}function L(r,m){(m==null||m>r.length)&&(m=r.length);for(var o=0,h=new Array(m);o<m;o++)h[o]=r[o];return h}function _(r,m){var o=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var h,P,M,A,S=[],k=!0,H=!1;try{if(M=(o=o.call(r)).next,m===0){if(Object(o)!==o)return;k=!1}else for(;!(k=(h=M.call(o)).done)&&(S.push(h.value),S.length!==m);k=!0);}catch(G){H=!0,P=G}finally{try{if(!k&&o.return!=null&&(A=o.return(),Object(A)!==A))return}finally{if(H)throw P}}return S}}function T(r){if(Array.isArray(r))return r}function D(r,m){if(r==null)return{};var o=U(r,m),h,P;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(r);for(P=0;P<M.length;P++)h=M[P],!(m.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(r,h)&&(o[h]=r[h])}return o}function U(r,m){if(r==null)return{};var o={},h=Object.keys(r),P,M;for(M=0;M<h.length;M++)P=h[M],!(m.indexOf(P)>=0)&&(o[P]=r[P]);return o}var B=Object(n.forwardRef)(function(r,m){var o,h=r.type,P=h===void 0?"fill":h,M=r.value,A=r.placeholder,S=A===void 0?"\uD638\uD154\uBA85, \uC9C0\uC5ED\uBA85\uC744 \uAC80\uC0C9\uD574\uC8FC\uC138\uC694.":A,k=r.autoComplete,H=r.onClick,G=r.onChange,re=r.onBlur,ce=r.formSubmit,q=r.formReset,ie=r.className,te=D(r,b),de=Object(n.useRef)(null),ue=Object(n.useState)(M!=null?M:""),fe=j(ue,2),ve=fe[0],be=fe[1],ge=ve,xe=Object(n.useState)(!1),Ce=j(xe,2),De=Ce[0],Te=Ce[1],Be=!te.disabled&&ge,Oe=l({type:P,isFocus:De}),Ne=Oe.classes,Me=Oe.cx,ke=function(_e){_e.preventDefault(),de.current.reset(),ce==null||ce(_e)},Ve=function(_e){be(""),q==null||q(_e)},Ae=function(_e){Te(!0),H==null||H(_e)},we=function(_e){Te(!1),re==null||re(_e)},He=function(_e){be(_e.target.value),G==null||G(_e)};return Object(g.jsxs)("form",{ref:de,className:Me(Ne.form,(o={},o[Ne.disabled]=te.disabled,o),ie),onSubmit:ke,onReset:Ve,children:[Object(g.jsx)(s.a,{src:"IcSearch",width:20,height:20}),Object(g.jsx)(v.a,Object.assign({component:"input",type:"search",ref:m,className:Me(Ne.input),placeholder:S,onClick:Ae,onBlur:we,onChange:He,value:ve,autoComplete:k!=null?k:"off","aria-readonly":te.disabled},te)),Be&&Object(g.jsx)("button",{type:"reset",className:Ne.reset,"aria-label":"\uAC80\uC0C9 \uCD08\uAE30\uD654",children:Object(g.jsx)(s.a,{src:"IcClose",width:16,height:16})})]})});B.displayName="Search";var I=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ maxWidth: \\"328px\\" }}>\\n      <Search {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:44},endLoc:{col:1,line:50},startBody:{col:23,line:44},endBody:{col:1,line:50}}},I=`import { Meta } from "@storybook/react";
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
`,x={Default:{startLoc:{col:23,line:36},endLoc:{col:1,line:42},startBody:{col:23,line:36},endBody:{col:1,line:42}}},a=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ maxWidth: \\"328px\\" }}>\\n      <Search {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:44},endLoc:{col:1,line:50},startBody:{col:23,line:44},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/core/General/Search",component:B,argTypes:{type:{control:{type:"radio",options:["fill","line"]},defaultValue:"fill",description:"search \uD0C0\uC785",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},defaultValue:!1,description:"search Disabled \uC5EC\uBD80",table:{type:{summary:"boolean"}}}}},d=function(m){return Object(g.jsx)("div",{style:{maxWidth:"328px"},children:Object(g.jsx)(B,Object.assign({},m))})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ maxWidth: "328px" }}>
      <Search {...props} />
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=function(v,p){var y=v.colors;switch(p){case"fill":return{backgroundColor:y.secondaryContainer,border:"1px solid "+y.secondaryContainer};case"line":return{backgroundColor:y.white,border:"1px solid "+y.secondary};default:return{}}},R=Object(c.a)(function(s,v){var p=v.type,y=s.colors,i=s.spacing,l=s.typography,g=s.radius;return{root:Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"space-between",gap:i.spacing5,color:y.secondary1,padding:"2px "+i.spacing5},l.caption,{fontWeight:700},W(s,p),{borderRadius:g.radius10})}}),N=e("./node_modules/react/jsx-runtime.js"),V=["type","component","label","className"];function C(s,v){if(s==null)return{};var p=t(s,v),y,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(i=0;i<l.length;i++)y=l[i],!(v.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(s,y)&&(p[y]=s[y])}return p}function t(s,v){if(s==null)return{};var p={},y=Object.keys(s),i,l;for(l=0;l<y.length;l++)i=y[l],!(v.indexOf(i)>=0)&&(p[i]=s[i]);return p}var n=Object(E.forwardRef)(function(s,v){var p=s.type,y=s.component,i=s.label,l=i===void 0?"\uCFE0\uD3F0 \uC801\uC6A9\uAC00":i,g=s.className,b=C(s,V),j=R({type:p}),u=j.classes,O=j.cx;return Object(N.jsxs)(z.a,Object.assign({component:y||"div",ref:v,className:O(u.root,g)},b,{children:[Object(N.jsx)(Y.a,{src:"IcDiscount",width:16,height:16}),l]}))});n.displayName="IconTag"},"./packages/travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/core/General/Tag/IconTag",component:w.a,argTypes:{type:{control:{type:"radio",options:["fill","line"]},defaultValue:"fill",description:"\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},label:{control:{type:"text"},defaultValue:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",description:"\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var c=function(R){return Object(F.jsx)(w.a,Object.assign({type:"fill"},R))};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return <IconTag type={"fill"} {...props} />;
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx":function(oe,f,e){"use strict";e.d(f,"b",function(){return t}),e.d(f,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=Object(c.a)(function(s,v){var p=v.gap;return{root:{display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:p+"px",margin:0,padding:0}}}),R=e("./node_modules/react/jsx-runtime.js"),N=["type","color","size","gap","roundness","className","children"];function V(s,v){if(s==null)return{};var p=C(s,v),y,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(i=0;i<l.length;i++)y=l[i],!(v.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(s,y)&&(p[y]=s[y])}return p}function C(s,v){if(s==null)return{};var p={},y=Object.keys(s),i,l;for(l=0;l<y.length;l++)i=y[l],!(v.indexOf(i)>=0)&&(p[i]=s[i]);return p}var t=Object(E.createContext)({type:"fill",size:"small",roundness:"default"});t.displayName="TagContext";var n=Object(E.forwardRef)(function(s,v){var p=s.type,y=s.color,i=s.size,l=i===void 0?"small":i,g=s.gap,b=g===void 0?0:g,j=s.roundness,u=j===void 0?"default":j,O=s.className,L=s.children,_=V(s,N);Object(E.useEffect)(function(){L||console.error("1\uAC1C \uC774\uC0C1\uC758 <Tag.Item /> \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC874\uC7AC\uD574\uC57C \uD569\uB2C8\uB2E4.")},[]);var T=W({gap:b}),D=T.classes,U=T.cx;return Object(R.jsx)(t.Provider,{value:{type:p,color:y,size:l,roundness:u},children:Object(R.jsx)(Y.a,Object.assign({component:"ul",ref:v,className:U(D.root,O)},_,{children:L}))})});n.displayName="Tag",n.Item=z.a},"./packages/travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return N}),e.d(f,"TagUsingIdx",function(){return V});var K=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.object.assign.js"),F=e.n(w),E=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),Y=e("./node_modules/react/jsx-runtime.js"),z=e.n(Y),c=`
    
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
TagUsingIdx.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...TagUsingIdx.parameters };`,W={Default:{startLoc:{col:23,line:75},endLoc:{col:1,line:83},startBody:{col:23,line:75},endBody:{col:1,line:83}},TagUsingIdx:{startLoc:{col:27,line:85},endLoc:{col:1,line:95},startBody:{col:27,line:85},endBody:{col:1,line:95}}},c=`import { Meta } from "@storybook/react";
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
`,W={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:75},startBody:{col:23,line:67},endBody:{col:1,line:75}},TagUsingIdx:{startLoc:{col:27,line:77},endLoc:{col:1,line:87},startBody:{col:27,line:77},endBody:{col:1,line:87}}},R=["\uB808\uC774\uBE141","\uB808\uC774\uBE142","\uB808\uC774\uBE143","\uB808\uC774\uBE144"];f.default={parameters:{storySource:{source:`
    
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
TagUsingIdx.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...TagUsingIdx.parameters };`,locationsMap:{default:{startLoc:{col:23,line:75},endLoc:{col:1,line:83},startBody:{col:23,line:75},endBody:{col:1,line:83}},"tag-using-idx":{startLoc:{col:27,line:85},endLoc:{col:1,line:95},startBody:{col:27,line:85},endBody:{col:1,line:95}}}}},title:"@travelmakers-design-v2/core/General/Tag/Tag",component:E.a,argTypes:{type:{control:{type:"radio",options:["fill","line"],default:"fill"},description:"TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},color:{control:{type:"radio",options:["green","blue","purple","gray"],default:"green"},description:"TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","medium","large"],default:"small"},description:"TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},gap:{type:"number"},roundness:{control:{type:"radio",options:["default","half","full"],default:"default"},description:"TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var N=function(t){var n=R.map(function(s,v){return Object(Y.jsx)(E.a.Item,{label:s},v)});return Object(Y.jsx)(E.a,Object.assign({type:"fill",color:"green"},t,{children:n}))};N.displayName="Default";var V=function(t){var n=R.map(function(s,v){return Object(Y.jsx)(E.a.Item,{colorIdx:v,label:s},v)});return Object(Y.jsx)(E.a,Object.assign({type:"fill"},t,{children:n}))};V.displayName="TagUsingIdx",N.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},V.parameters)},"./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return v});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W={default:"",half:"radius20",full:"radius100"},R=function(y,i){var l=y.typography,g=y.spacing;switch(i){case"small":return Object.assign({height:"20px"},l.caption,{padding:"2px "+g.spacing10});case"medium":return Object.assign({height:"24px"},l.body3,{padding:"2px "+g.spacing20});case"large":return Object.assign({height:"28px"},l.body2,{padding:"3px "+g.spacing30});default:return}},N=function(y,i,l){var g=y.colors,b={color:"",backgroundColor:g.white,border:0},j={green:{fill:{color:g.onSecondary,backgroundColor:g.secondary},line:{color:g.secondary,border:"1px solid "+g.secondary}},blue:{fill:{color:g.onTertiary,backgroundColor:g.tertiary},line:{color:g.tertiary,border:"1px solid "+g.tertiary}},purple:{fill:{color:g.white,backgroundColor:g.purple1},line:{color:g.purple1,border:"1px solid "+g.purple1}},gray:{fill:{color:g.onPrimaryContainer,backgroundColor:g.surface},line:{color:g.primary3,border:"1px solid "+g.surfaceVariant,backgroundColor:"transparent"}}};if(i==="fill"||i==="line"){var u;b.color=j[l][i].color,b.backgroundColor=(u=j[l][i].backgroundColor)!==null&&u!==void 0?u:b.backgroundColor,b.border=i==="line"?j[l].line.border:b.border}return b},V=Object(c.a)(function(p,y){var i,l=y.type,g=y.color,b=y.size,j=y.roundness;return{item:Object.assign({listStyle:"none"},N(p,l,g),R(p,b),{borderRadius:(i=p.radius[W[j]])!==null&&i!==void 0?i:0})}}),C=e("./node_modules/react/jsx-runtime.js"),t=["colorIdx","label","className"];function n(p,y){if(p==null)return{};var i=s(p,y),l,g;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(p);for(g=0;g<b.length;g++)l=b[g],!(y.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(p,l)&&(i[l]=p[l])}return i}function s(p,y){if(p==null)return{};var i={},l=Object.keys(p),g,b;for(b=0;b<l.length;b++)g=l[b],!(y.indexOf(g)>=0)&&(i[g]=p[g]);return i}var v=Object(E.forwardRef)(function(p,y){var i=p.colorIdx,l=i===void 0?0:i,g=p.label,b=p.className,j=n(p,t),u=function(a){var d=["green","blue","purple"];return d[a%d.length]},O=Object(E.useContext)(z.b),L=O.type,_=O.color,T=O.size,D=O.roundness,U=V({type:L,color:_||u(l),size:T,roundness:D}),B=U.classes,I=U.cx;return Object(C.jsx)(Y.a,Object.assign({component:"li",ref:y,className:I(B.item,b)},j,{children:g}))});v.displayName="TagItem"},"./packages/travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}},Y=`import { Meta } from "@storybook/react";
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
`,z={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/Tag/TagItem",component:w.a,argTypes:{colorIdx:{control:{type:"radio",options:[0,1,2]},defaultValue:0,description:"TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.",table:{type:{summary:"number"}}},label:{control:{type:"text"},defaultValue:"label",description:"props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var c=function(R){return Object(F.jsx)("div",{style:{display:"inline-block"},children:Object(F.jsx)(w.a,Object.assign({},R))})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <TagItem {...props} />
    </div>
  );
}`}},c.parameters)},"./packages/travelmakers-design-core/src/components/TextArea/stories/TextArea.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return x});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),c=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),v=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),p=Object(v.a)(function(a,d){var r,m,o=d.isFilled,h=a.spacing,P=a.typography,M=a.colors,A=a.radius;return{root:{display:"inline-flex",flexDirection:"column",rowGap:h.spacing5},label:Object.assign({},P.body2,{color:M.primary}),textArea:Object.assign({},P.body2,(m={minWidth:"328px",minHeight:"76px",padding:h.spacing10+" "+h.spacing30,color:M.primary2,border:"1px solid "+(o?M.primary3:M.outline),borderRadius:A.radius20,outline:0,resize:"none"},m["&::placeholder"]={color:M.primary3},m["&:focus"]={color:M.primary1,borderColor:M.primary},m["&:disabled"]=(r={color:M.primary3,borderColor:M.outline,backgroundColor:M.surface},r["&::placeholder"]={color:M.primary4},r),m)),feedback:Object.assign({},P.body3,{color:M.primary3,fontWeight:400})}}),y=e("./node_modules/react/jsx-runtime.js"),i=["label","feedback","value","placeholder","autoComplete","onChange","className"];function l(a,d){return O(a)||u(a,d)||b(a,d)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(a,d){if(a){if(typeof a=="string")return j(a,d);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(a,d)}}function j(a,d){(d==null||d>a.length)&&(d=a.length);for(var r=0,m=new Array(d);r<d;r++)m[r]=a[r];return m}function u(a,d){var r=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var m,o,h,P,M=[],A=!0,S=!1;try{if(h=(r=r.call(a)).next,d===0){if(Object(r)!==r)return;A=!1}else for(;!(A=(m=h.call(r)).done)&&(M.push(m.value),M.length!==d);A=!0);}catch(k){S=!0,o=k}finally{try{if(!A&&r.return!=null&&(P=r.return(),Object(P)!==P))return}finally{if(S)throw o}}return M}}function O(a){if(Array.isArray(a))return a}function L(a,d){if(a==null)return{};var r=_(a,d),m,o;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(o=0;o<h.length;o++)m=h[o],!(d.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(a,m)&&(r[m]=a[m])}return r}function _(a,d){if(a==null)return{};var r={},m=Object.keys(a),o,h;for(h=0;h<m.length;h++)o=m[h],!(d.indexOf(o)>=0)&&(r[o]=a[o]);return r}var T=0,D=Object(n.forwardRef)(function(a,d){var r=a.label,m=a.feedback,o=a.value,h=a.placeholder,P=h===void 0?"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.":h,M=a.autoComplete,A=a.onChange,S=a.className,k=L(a,i),H=Object(n.useState)(o!=null?o:""),G=l(H,2),re=G[0],ce=G[1],q=re,ie=p({isFilled:q}),te=ie.classes,de=ie.cx,ue=Object(n.useState)(function(){return String(T++)}),fe=l(ue,1),ve=fe[0],be="tm-textarea-"+ve,ge=function(Ce){ce(Ce.target.value),A==null||A(Ce)};return Object(y.jsxs)("div",{className:de(te.root,S),children:[r&&Object(y.jsx)("label",{className:te.label,htmlFor:be,children:r}),Object(y.jsx)(s.a,Object.assign({component:"textarea",ref:d,className:te.textArea,value:re,placeholder:P,autoComplete:M||"off",onChange:ge,"aria-readonly":k.disabled},k)),m&&Object(y.jsx)("strong",{className:te.feedback,children:m})]})});D.displayName="TextArea";var U=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextArea {...props} />;\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:55},startBody:{col:23,line:53},endBody:{col:1,line:55}}},U=`import { Meta } from "@storybook/react";
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
`,B={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}},I=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextArea {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:53},endLoc:{col:1,line:55},startBody:{col:23,line:53},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/core/General/TextArea",component:D,argTypes:{label:{control:{type:"text"},description:"textarea \uB77C\uBCA8",table:{type:{summary:"string"}}},feedback:{control:{type:"text"},description:"textarea \uCD94\uAC00 \uC124\uBA85",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},defaultValue:!1,description:"textarea Disabled \uC5EC\uBD80",table:{type:{summary:"boolean"}}}}},x=function(d){return Object(y.jsx)(D,Object.assign({},d))};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextArea {...props} />;
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return u});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/core-js/modules/es.array.index-of.js"),E=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts"),z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),c=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),R=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),V={small:"body3",large:"body2"},C={small:"body3",large:"subhead2"},t=Object(N.a)(function(O,L){var _=L.type,T=L.size,D=O.colors,U=O.typography,B=O.spacing;return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",color:D[i[_]]},title:{display:"flex",alignItems:"center"},icon:{marginRight:B.spacing5},text:Object.assign({},U[V[T]],{fontWeight:400}),time:Object.assign({},U[C[T]],{fontWeight:700})}}),n=e("./node_modules/react/jsx-runtime.js"),s=["type","size","text","time","dateTime","className"];function v(O,L){if(O==null)return{};var _=p(O,L),T,D;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(O);for(D=0;D<U.length;D++)T=U[D],!(L.indexOf(T)>=0)&&Object.prototype.propertyIsEnumerable.call(O,T)&&(_[T]=O[T])}return _}function p(O,L){if(O==null)return{};var _={},T=Object.keys(O),D,U;for(U=0;U<T.length;U++)D=T[U],!(L.indexOf(D)>=0)&&(_[D]=O[D]);return _}var y={small:12,large:16},i={navy:"primary1",white:"white"},l=Object(c.forwardRef)(function(O,L){var _=O.type,T=O.size,D=T===void 0?"small":T,U=O.text,B=O.time,I=O.dateTime,x=O.className,a=v(O,s),d=Object(z.c)(),r=d.colors,m=t({type:_,size:D}),o=m.classes,h=m.cx,P=Object(Y.a)(B),M=P.remainingTime;return Object(n.jsxs)(R.a,Object.assign({component:"div",ref:L,className:h(o.root,x)},a,{children:[Object(n.jsxs)("div",{className:o.title,children:[Object(n.jsx)(W.a,{src:"IcClock",className:o.icon,width:y[D],height:y[D],color:r[i[_]]}),Object(n.jsx)("strong",{className:o.text,children:U})]}),Object(n.jsx)("time",{className:o.time,dateTime:I,children:M})]}))});l.displayName="Timer";var g=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,b={Default:{startLoc:{col:23,line:70},endLoc:{col:1,line:86},startBody:{col:23,line:70},endBody:{col:1,line:86}}},g=`import { Meta } from "@storybook/react";
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
`,b={Default:{startLoc:{col:23,line:62},endLoc:{col:1,line:78},startBody:{col:23,line:62},endBody:{col:1,line:78}}},j=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:70},endLoc:{col:1,line:86},startBody:{col:23,line:70},endBody:{col:1,line:86}}}}},title:"@travelmakers-design-v2/core/General/Timer",component:l,argTypes:{type:{control:{type:"radio",options:["navy","white"],default:"navy"},description:"Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","large"],default:"small"},defaultValue:"small",description:"Timer\uC758 \uC0AC\uC774\uC988",table:{type:{summary:"string"}}},text:{control:{type:"text"},defaultValue:"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529",description:"\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529",table:{type:{summary:"string"}}},time:{control:{type:"text"},description:"\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)",table:{type:{summary:"dayjs.ConfigType"}}},dateTime:{control:{type:"text"},defaultValue:"2011-11-18",description:"\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},u=function(L){var _=L.time,T=L.type,D=L.size,U=L.text,B=L.dateTime,I=Object($.d)(),x=I();return Object(n.jsx)("div",{style:{backgroundColor:L.type==="white"&&"gray"},children:Object(n.jsx)(l,{time:_||x,type:T,size:D,text:U,dateTime:B})})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return n});var K=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.string.italics.js"),E=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),W=function(v){return v!=="Pretendard"?{font:{fontFamily:v+", var("+(v==="Noto Serif KR"&&"--font-noto-serif")+")"}}:{font:{}}},R=Object(c.a)(function(s,v){var p,y=v.family,i=v.level,l=v.textAlign,g=v.disabled,b=v.strong,j=v.italic,u=v.underline,O=v.color,L=v.mobile,_=v.tablet,T=function(){return O?{color:g?s.colors.primary4:O?s.colors[O]:s.colors.black}:{}};return{solid:{fontWeight:b?700:400,fontStyle:j?"italic":"normal",textDecoration:u?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},W(y).font,s.typography[i],T(),(p={textAlign:""+l},p[""+s.media.mobile]=Object.assign({},s.typography[L]),p[""+s.media.tablet]=Object.assign({},s.typography[_]),p))}}),N=e("./node_modules/react/jsx-runtime.js"),V=["id","children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function C(s,v){if(s==null)return{};var p=t(s,v),y,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(i=0;i<l.length;i++)y=l[i],!(v.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(s,y)&&(p[y]=s[y])}return p}function t(s,v){if(s==null)return{};var p={},y=Object.keys(s),i,l;for(l=0;l<y.length;l++)i=y[l],!(v.indexOf(i)>=0)&&(p[i]=s[i]);return p}var n=Object(Y.forwardRef)(function(s,v){var p=s.id,y=s.children,i=s.component,l=s.family,g=l===void 0?"Pretendard":l,b=s.level,j=b===void 0?"body1":b,u=s.mobileLevel,O=s.tabletLevel,L=s.textAlign,_=L===void 0?"left":L,T=s.disabled,D=T===void 0?!1:T,U=s.strong,B=U===void 0?!1:U,I=s.italic,x=I===void 0?!1:I,a=s.underline,d=a===void 0?!1:a,r=s.color,m=s.className,o=s.co,h=s.overrideStyles,P=C(s,V),M=R({family:g,level:j,disabled:D,strong:B,italic:x,underline:d,textAlign:_,color:r,mobile:u,tablet:O},{overrideStyles:h,name:"typography"}),A=M.classes,S=M.cx;return Object(N.jsx)(z.a,Object.assign({component:i||"span",ref:v,disabled:D,className:S(A.root,A.solid,m),co:o,onTouchStart:function(){}},P,{children:y}))});n.displayName="Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return W});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),F=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),E=e("./node_modules/react/jsx-runtime.js"),Y=e.n(E),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}},z=`import {
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
`,c={Default:{startLoc:{col:23,line:169},endLoc:{col:1,line:210},startBody:{col:23,line:169},endBody:{col:1,line:210}}};f.default={title:"@travelmakers-design-v2/core/General/Typography",component:F.a,argTypes:{level:{defaultValue:"body1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w.g,{}),Object(E.jsx)(w.f,{}),Object(E.jsx)(w.b,{}),Object(E.jsx)(w.d,{}),Object(E.jsx)(w.a,{story:w.c}),Object(E.jsx)(w.e,{})]})}}}};var W=function(N){return Object(E.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(E.jsx)(F.a,Object.assign({},N,{level:"display1",children:"display1. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display2",children:"display2. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display3",children:"display3. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display4",children:"display4. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display5",children:"display5. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"display6",children:"display6. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"subhead1",children:"subhead1. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"subhead2",children:"subhead2. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"body1",children:"body1. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"body2",children:"body2. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"body3",children:"body3. Travelmakers Design"})),Object(E.jsx)(F.a,Object.assign({},N,{level:"caption",children:"caption. Travelmakers Design"}))]})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},W.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,f,e){"use strict";e.d(f,"a",function(){return s});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),c=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),W=e("./node_modules/react/index.js");function R(v,p){return typeof v=="function"?v(p):v}var N=e("./node_modules/react/jsx-runtime.js"),V=["component","className","style","co"];function C(v,p){if(v==null)return{};var y=t(v,p),i,l;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(v);for(l=0;l<g.length;l++)i=g[l],!(p.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(v,i)&&(y[i]=v[i])}return y}function t(v,p){if(v==null)return{};var y={},i=Object.keys(v),l,g;for(g=0;g<i.length;g++)l=i[g],!(p.indexOf(l)>=0)&&(y[l]=v[l]);return y}function n(v,p){var y=Object(z.a)(),i=y.css,l=y.cx,g=Object(c.c)();return Array.isArray(v)?l(p,v.map(function(b){return i(R(b,g))})):l(p,i(R(v,g)))}var s=Object(W.forwardRef)(function(v,p){var y=v.component,i=v.className,l=v.style,g=v.co,b=C(v,V),j=y||"div";return Object(N.jsx)(j,Object.assign({ref:p,className:n(g,i),style:l},b))});s.displayName="View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return c});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./node_modules/react/jsx-runtime.js"),E=e.n(F),Y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},Y=`import { View } from "../View";

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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design-v2/core/General/View",component:w.a};var c=function(){return Object(F.jsx)(w.a,{co:function(N){return{width:100,height:100,backgroundColor:N.colors.black}}})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.black,
      })}
    />
  );
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return E});var K=e("./node_modules/core-js/modules/es.array.concat.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=function(z){var c=Object(w.useRef)(z);return Object(w.useEffect)(function(){c.current=z},[z]),Object(w.useMemo)(function(){return function(){for(var W,R=arguments.length,N=new Array(R),V=0;V<R;V++)N[V]=arguments[V];return(W=c.current)===null||W===void 0?void 0:W.call.apply(W,[c].concat(N))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return B});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),c=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),t=e("./node_modules/core-js/modules/web.timers.js");function n(I,x){return i(I)||y(I,x)||v(I,x)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(I,x){if(I){if(typeof I=="string")return p(I,x);var a=Object.prototype.toString.call(I).slice(8,-1);if(a==="Object"&&I.constructor&&(a=I.constructor.name),a==="Map"||a==="Set")return Array.from(I);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(I,x)}}function p(I,x){(x==null||x>I.length)&&(x=I.length);for(var a=0,d=new Array(x);a<x;a++)d[a]=I[a];return d}function y(I,x){var a=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(a!=null){var d,r,m,o,h=[],P=!0,M=!1;try{if(m=(a=a.call(I)).next,x===0){if(Object(a)!==a)return;P=!1}else for(;!(P=(d=m.call(a)).done)&&(h.push(d.value),h.length!==x);P=!0);}catch(A){M=!0,r=A}finally{try{if(!P&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(M)throw r}}return h}}function i(I){if(Array.isArray(I))return I}var l=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=x.timeout,d=a===void 0?2e3:a,r=Object(C.useState)(null),m=n(r,2),o=m[0],h=m[1],P=Object(C.useState)(!1),M=n(P,2),A=M[0],S=M[1],k=Object(C.useState)(null),H=n(k,2),G=H[0],re=H[1],ce=function(de){clearTimeout(G),re(setTimeout(function(){return S(!1)},d)),S(de)},q=function(de){"clipboard"in navigator?navigator.clipboard.writeText(de).then(function(){return ce(!0)}).catch(function(ue){return h(ue)}):h(new Error("useClipboard: navigator.clipboard is not supported"))},ie=function(){S(!1),h(null),clearTimeout(G)};return{copy:q,reset:ie,error:o,copied:A}},g=e("./node_modules/react/jsx-runtime.js");function b(I,x){return _(I)||L(I,x)||u(I,x)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(I,x){if(I){if(typeof I=="string")return O(I,x);var a=Object.prototype.toString.call(I).slice(8,-1);if(a==="Object"&&I.constructor&&(a=I.constructor.name),a==="Map"||a==="Set")return Array.from(I);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(I,x)}}function O(I,x){(x==null||x>I.length)&&(x=I.length);for(var a=0,d=new Array(x);a<x;a++)d[a]=I[a];return d}function L(I,x){var a=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(a!=null){var d,r,m,o,h=[],P=!0,M=!1;try{if(m=(a=a.call(I)).next,x===0){if(Object(a)!==a)return;P=!1}else for(;!(P=(d=m.call(a)).done)&&(h.push(d.value),h.length!==x);P=!0);}catch(A){M=!0,r=A}finally{try{if(!P&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(M)throw r}}return h}}function _(I){if(Array.isArray(I))return I}var T=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},T=`import React, { useState } from "react";

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
`,D={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},U=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design-v2/hooks/useClipboard"},B=function(){var x=Object(C.useState)(""),a=b(x,2),d=a[0],r=a[1],m=l({timeout:3e3}),o=m.copy,h=m.copied;return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"text",onChange:function(M){return r(M.target.value)}}),Object(g.jsx)("button",{onClick:function(){return o(d)},children:"copy"}),Object(g.jsx)("span",{children:h&&"Copied!!"})]})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return I});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),c=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),t=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),n=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function s(x,a){return l(x)||i(x,a)||p(x,a)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(x,a){if(x){if(typeof x=="string")return y(x,a);var d=Object.prototype.toString.call(x).slice(8,-1);if(d==="Object"&&x.constructor&&(d=x.constructor.name),d==="Map"||d==="Set")return Array.from(x);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return y(x,a)}}function y(x,a){(a==null||a>x.length)&&(a=x.length);for(var d=0,r=new Array(a);d<a;d++)r[d]=x[d];return r}function i(x,a){var d=x==null?null:typeof Symbol!="undefined"&&x[Symbol.iterator]||x["@@iterator"];if(d!=null){var r,m,o,h,P=[],M=!0,A=!1;try{if(o=(d=d.call(x)).next,a===0){if(Object(d)!==d)return;M=!1}else for(;!(M=(r=o.call(d)).done)&&(P.push(r.value),P.length!==a);M=!0);}catch(S){A=!0,m=S}finally{try{if(!M&&d.return!=null&&(h=d.return(),Object(h)!==h))return}finally{if(A)throw m}}return P}}function l(x){if(Array.isArray(x))return x}var g=function(a,d,r){var m=Object(n.a)(a,d),o=s(m,2),h=o[0],P=o[1];return Object(t.a)(h,r),P},b=e("./node_modules/react/jsx-runtime.js");function j(x,a){return T(x)||_(x,a)||O(x,a)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(x,a){if(x){if(typeof x=="string")return L(x,a);var d=Object.prototype.toString.call(x).slice(8,-1);if(d==="Object"&&x.constructor&&(d=x.constructor.name),d==="Map"||d==="Set")return Array.from(x);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return L(x,a)}}function L(x,a){(a==null||a>x.length)&&(a=x.length);for(var d=0,r=new Array(a);d<a;d++)r[d]=x[d];return r}function _(x,a){var d=x==null?null:typeof Symbol!="undefined"&&x[Symbol.iterator]||x["@@iterator"];if(d!=null){var r,m,o,h,P=[],M=!0,A=!1;try{if(o=(d=d.call(x)).next,a===0){if(Object(d)!==d)return;M=!1}else for(;!(M=(r=o.call(d)).done)&&(P.push(r.value),P.length!==a);M=!0);}catch(S){A=!0,m=S}finally{try{if(!M&&d.return!=null&&(h=d.return(),Object(h)!==h))return}finally{if(A)throw m}}return P}}function T(x){if(Array.isArray(x))return x}var D=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},D=`import React, { useState } from "react";

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
`,U={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},B=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useDebounce"},I=function(){var a=Object(C.useState)(""),d=j(a,2),r=d[0],m=d[1],o=g(function(){alert("Updated!")},1e3,[r]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",onChange:function(P){return m(P.target.value)}}),Object(b.jsx)("button",{onClick:o,children:"Cancel"})]})};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`() => {
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
}`}},I.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Y=e("./node_modules/react/jsx-runtime.js"),z=e.n(Y),c=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},c=`import React from "react";
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
`,W={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useForceUpdate"};var R=function(){var V=Object(E.a)();return Object(Y.jsxs)("div",{children:[Math.random(),Object(Y.jsx)("button",{onClick:V,children:"Update"})]})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},R.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return B});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e.n(E),z=e("./node_modules/core-js/modules/es.object.to-string.js"),c=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(W),N=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s=e.n(n),v=e("./node_modules/core-js/modules/es.array.slice.js"),p=e.n(v),y=e("./node_modules/core-js/modules/es.function.name.js"),i=e.n(y),l=e("./node_modules/core-js/modules/es.array.from.js"),g=e.n(l),b=e("./node_modules/react/index.js"),j=e.n(b);function u(I,x){return D(I)||T(I,x)||L(I,x)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(I,x){if(I){if(typeof I=="string")return _(I,x);var a=Object.prototype.toString.call(I).slice(8,-1);if(a==="Object"&&I.constructor&&(a=I.constructor.name),a==="Map"||a==="Set")return Array.from(I);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(I,x)}}function _(I,x){(x==null||x>I.length)&&(x=I.length);for(var a=0,d=new Array(x);a<x;a++)d[a]=I[a];return d}function T(I,x){var a=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(a!=null){var d,r,m,o,h=[],P=!0,M=!1;try{if(m=(a=a.call(I)).next,x===0){if(Object(a)!==a)return;P=!1}else for(;!(P=(d=m.call(a)).done)&&(h.push(d.value),h.length!==x);P=!0);}catch(A){M=!0,r=A}finally{try{if(!P&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(M)throw r}}return h}}function D(I){if(Array.isArray(I))return I}var U=function(x){return(x+1)%1e6},B=function(){var x=Object(b.useReducer)(U,0),a=u(x,2),d=a[1];return d}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return W});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function V(n){n.preventDefault()}function C(){document.body.addEventListener("touchmove",V,{passive:!1})}function t(){document.body.removeEventListener("touchmove",V)}return Object($.useEffect)(function(){return N&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var n=document.body.style.top;document.body.style.cssText=""}},[]),Object($.useEffect)(function(){return N&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[N]),null},F=w,E=e("./node_modules/react/jsx-runtime.js"),Y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},Y=`import React, { useState } from "react";

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
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}},c=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useHiddenBodyOverflow"},W=function(){return F(!0),Object(E.jsx)("div",{children:Object(E.jsx)("span",{children:"useHiddenBodyOverflow"})})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},W.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return ce});var K=e("./node_modules/core-js/modules/es.promise.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/web.timers.js"),F=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),c=e("./node_modules/core-js/modules/es.symbol.iterator.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),s=e("./node_modules/core-js/modules/es.object.define-property.js"),v=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),p=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),y=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),i=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),l=e("./node_modules/core-js/modules/es.object.create.js"),g=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),b=e("./node_modules/core-js/modules/es.array.for-each.js"),j=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),u=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),O=e("./node_modules/core-js/modules/es.array.reverse.js"),L=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function _(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_=function(){return q};var q={},ie=Object.prototype,te=ie.hasOwnProperty,de=Object.defineProperty||function(se,ne,le){se[ne]=le.value},ue=typeof Symbol=="function"?Symbol:{},fe=ue.iterator||"@@iterator",ve=ue.asyncIterator||"@@asyncIterator",be=ue.toStringTag||"@@toStringTag";function ge(se,ne,le){return Object.defineProperty(se,ne,{value:le,enumerable:!0,configurable:!0,writable:!0}),se[ne]}try{ge({},"")}catch(se){ge=function(le,Q,J){return le[Q]=J}}function xe(se,ne,le,Q){var J=ne&&ne.prototype instanceof Te?ne:Te,ee=Object.create(J.prototype),ae=new Re(Q||[]);return de(ee,"_invoke",{value:He(se,le,ae)}),ee}function Ce(se,ne,le){try{return{type:"normal",arg:se.call(ne,le)}}catch(Q){return{type:"throw",arg:Q}}}q.wrap=xe;var De={};function Te(){}function Be(){}function Oe(){}var Ne={};ge(Ne,fe,function(){return this});var Me=Object.getPrototypeOf,ke=Me&&Me(Me(Ee([])));ke&&ke!==ie&&te.call(ke,fe)&&(Ne=ke);var Ve=Oe.prototype=Te.prototype=Object.create(Ne);function Ae(se){["next","throw","return"].forEach(function(ne){ge(se,ne,function(le){return this._invoke(ne,le)})})}function we(se,ne){function le(J,ee,ae,me){var je=Ce(se[J],se,ee);if(je.type!=="throw"){var he=je.arg,Le=he.value;return Le&&typeof Le=="object"&&te.call(Le,"__await")?ne.resolve(Le.__await).then(function(Ie){le("next",Ie,ae,me)},function(Ie){le("throw",Ie,ae,me)}):ne.resolve(Le).then(function(Ie){he.value=Ie,ae(he)},function(Ie){return le("throw",Ie,ae,me)})}me(je.arg)}var Q;de(this,"_invoke",{value:function(ee,ae){function me(){return new ne(function(je,he){le(ee,ae,je,he)})}return Q=Q?Q.then(me,me):me()}})}function He(se,ne,le){var Q="suspendedStart";return function(J,ee){if(Q==="executing")throw new Error("Generator is already running");if(Q==="completed"){if(J==="throw")throw ee;return Ue()}for(le.method=J,le.arg=ee;;){var ae=le.delegate;if(ae){var me=Pe(ae,le);if(me){if(me===De)continue;return me}}if(le.method==="next")le.sent=le._sent=le.arg;else if(le.method==="throw"){if(Q==="suspendedStart")throw Q="completed",le.arg;le.dispatchException(le.arg)}else le.method==="return"&&le.abrupt("return",le.arg);Q="executing";var je=Ce(se,ne,le);if(je.type==="normal"){if(Q=le.done?"completed":"suspendedYield",je.arg===De)continue;return{value:je.arg,done:le.done}}je.type==="throw"&&(Q="completed",le.method="throw",le.arg=je.arg)}}}function Pe(se,ne){var le=ne.method,Q=se.iterator[le];if(Q===void 0)return ne.delegate=null,le==="throw"&&se.iterator.return&&(ne.method="return",ne.arg=void 0,Pe(se,ne),ne.method==="throw")||le!=="return"&&(ne.method="throw",ne.arg=new TypeError("The iterator does not provide a '"+le+"' method")),De;var J=Ce(Q,se.iterator,ne.arg);if(J.type==="throw")return ne.method="throw",ne.arg=J.arg,ne.delegate=null,De;var ee=J.arg;return ee?ee.done?(ne[se.resultName]=ee.value,ne.next=se.nextLoc,ne.method!=="return"&&(ne.method="next",ne.arg=void 0),ne.delegate=null,De):ee:(ne.method="throw",ne.arg=new TypeError("iterator result is not an object"),ne.delegate=null,De)}function _e(se){var ne={tryLoc:se[0]};1 in se&&(ne.catchLoc=se[1]),2 in se&&(ne.finallyLoc=se[2],ne.afterLoc=se[3]),this.tryEntries.push(ne)}function We(se){var ne=se.completion||{};ne.type="normal",delete ne.arg,se.completion=ne}function Re(se){this.tryEntries=[{tryLoc:"root"}],se.forEach(_e,this),this.reset(!0)}function Ee(se){if(se){var ne=se[fe];if(ne)return ne.call(se);if(typeof se.next=="function")return se;if(!isNaN(se.length)){var le=-1,Q=function J(){for(;++le<se.length;)if(te.call(se,le))return J.value=se[le],J.done=!1,J;return J.value=void 0,J.done=!0,J};return Q.next=Q}}return{next:Ue}}function Ue(){return{value:void 0,done:!0}}return Be.prototype=Oe,de(Ve,"constructor",{value:Oe,configurable:!0}),de(Oe,"constructor",{value:Be,configurable:!0}),Be.displayName=ge(Oe,be,"GeneratorFunction"),q.isGeneratorFunction=function(se){var ne=typeof se=="function"&&se.constructor;return!!ne&&(ne===Be||(ne.displayName||ne.name)==="GeneratorFunction")},q.mark=function(se){return Object.setPrototypeOf?Object.setPrototypeOf(se,Oe):(se.__proto__=Oe,ge(se,be,"GeneratorFunction")),se.prototype=Object.create(Ve),se},q.awrap=function(se){return{__await:se}},Ae(we.prototype),ge(we.prototype,ve,function(){return this}),q.AsyncIterator=we,q.async=function(se,ne,le,Q,J){J===void 0&&(J=Promise);var ee=new we(xe(se,ne,le,Q),J);return q.isGeneratorFunction(ne)?ee:ee.next().then(function(ae){return ae.done?ae.value:ee.next()})},Ae(Ve),ge(Ve,be,"Generator"),ge(Ve,fe,function(){return this}),ge(Ve,"toString",function(){return"[object Generator]"}),q.keys=function(se){var ne=Object(se),le=[];for(var Q in ne)le.push(Q);return le.reverse(),function J(){for(;le.length;){var ee=le.pop();if(ee in ne)return J.value=ee,J.done=!1,J}return J.done=!0,J}},q.values=Ee,Re.prototype={constructor:Re,reset:function(ne){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(We),!ne)for(var le in this)le.charAt(0)==="t"&&te.call(this,le)&&!isNaN(+le.slice(1))&&(this[le]=void 0)},stop:function(){this.done=!0;var ne=this.tryEntries[0].completion;if(ne.type==="throw")throw ne.arg;return this.rval},dispatchException:function(ne){if(this.done)throw ne;var le=this;function Q(he,Le){return ae.type="throw",ae.arg=ne,le.next=he,Le&&(le.method="next",le.arg=void 0),!!Le}for(var J=this.tryEntries.length-1;J>=0;--J){var ee=this.tryEntries[J],ae=ee.completion;if(ee.tryLoc==="root")return Q("end");if(ee.tryLoc<=this.prev){var me=te.call(ee,"catchLoc"),je=te.call(ee,"finallyLoc");if(me&&je){if(this.prev<ee.catchLoc)return Q(ee.catchLoc,!0);if(this.prev<ee.finallyLoc)return Q(ee.finallyLoc)}else if(me){if(this.prev<ee.catchLoc)return Q(ee.catchLoc,!0)}else{if(!je)throw new Error("try statement without catch or finally");if(this.prev<ee.finallyLoc)return Q(ee.finallyLoc)}}}},abrupt:function(ne,le){for(var Q=this.tryEntries.length-1;Q>=0;--Q){var J=this.tryEntries[Q];if(J.tryLoc<=this.prev&&te.call(J,"finallyLoc")&&this.prev<J.finallyLoc){var ee=J;break}}ee&&(ne==="break"||ne==="continue")&&ee.tryLoc<=le&&le<=ee.finallyLoc&&(ee=null);var ae=ee?ee.completion:{};return ae.type=ne,ae.arg=le,ee?(this.method="next",this.next=ee.finallyLoc,De):this.complete(ae)},complete:function(ne,le){if(ne.type==="throw")throw ne.arg;return ne.type==="break"||ne.type==="continue"?this.next=ne.arg:ne.type==="return"?(this.rval=this.arg=ne.arg,this.method="return",this.next="end"):ne.type==="normal"&&le&&(this.next=le),De},finish:function(ne){for(var le=this.tryEntries.length-1;le>=0;--le){var Q=this.tryEntries[le];if(Q.finallyLoc===ne)return this.complete(Q.completion,Q.afterLoc),We(Q),De}},catch:function(ne){for(var le=this.tryEntries.length-1;le>=0;--le){var Q=this.tryEntries[le];if(Q.tryLoc===ne){var J=Q.completion;if(J.type==="throw"){var ee=J.arg;We(Q)}return ee}}throw new Error("illegal catch attempt")},delegateYield:function(ne,le,Q){return this.delegate={iterator:Ee(ne),resultName:le,nextLoc:Q},this.method==="next"&&(this.arg=void 0),De}},q}function T(q,ie,te,de,ue,fe,ve){try{var be=q[fe](ve),ge=be.value}catch(xe){te(xe);return}be.done?ie(ge):Promise.resolve(ge).then(de,ue)}function D(q){return function(){var ie=this,te=arguments;return new Promise(function(de,ue){var fe=q.apply(ie,te);function ve(ge){T(fe,de,ue,ve,be,"next",ge)}function be(ge){T(fe,de,ue,ve,be,"throw",ge)}ve(void 0)})}}function U(q,ie){return d(q)||a(q,ie)||I(q,ie)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(q,ie){if(q){if(typeof q=="string")return x(q,ie);var te=Object.prototype.toString.call(q).slice(8,-1);if(te==="Object"&&q.constructor&&(te=q.constructor.name),te==="Map"||te==="Set")return Array.from(q);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return x(q,ie)}}function x(q,ie){(ie==null||ie>q.length)&&(ie=q.length);for(var te=0,de=new Array(ie);te<ie;te++)de[te]=q[te];return de}function a(q,ie){var te=q==null?null:typeof Symbol!="undefined"&&q[Symbol.iterator]||q["@@iterator"];if(te!=null){var de,ue,fe,ve,be=[],ge=!0,xe=!1;try{if(fe=(te=te.call(q)).next,ie===0){if(Object(te)!==te)return;ge=!1}else for(;!(ge=(de=fe.call(te)).done)&&(be.push(de.value),be.length!==ie);ge=!0);}catch(Ce){xe=!0,ue=Ce}finally{try{if(!ge&&te.return!=null&&(ve=te.return(),Object(ve)!==ve))return}finally{if(xe)throw ue}}return be}}function d(q){if(Array.isArray(q))return q}var r=function(ie){var te=Object(n.useState)(!1),de=U(te,2),ue=de[0],fe=de[1],ve=Object(L.a)(ie),be=Object(n.useCallback)(D(_().mark(function ge(){var xe,Ce=arguments;return _().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return fe(!0),Te.next=3,ve.apply(void 0,Ce);case 3:return xe=Te.sent,fe(!1),Te.abrupt("return",xe);case 6:case"end":return Te.stop()}},ge)})),[ie]);return[ue,be]},m=e("./node_modules/react/jsx-runtime.js");function o(q,ie){return S(q)||A(q,ie)||P(q,ie)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(q,ie){if(q){if(typeof q=="string")return M(q,ie);var te=Object.prototype.toString.call(q).slice(8,-1);if(te==="Object"&&q.constructor&&(te=q.constructor.name),te==="Map"||te==="Set")return Array.from(q);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return M(q,ie)}}function M(q,ie){(ie==null||ie>q.length)&&(ie=q.length);for(var te=0,de=new Array(ie);te<ie;te++)de[te]=q[te];return de}function A(q,ie){var te=q==null?null:typeof Symbol!="undefined"&&q[Symbol.iterator]||q["@@iterator"];if(te!=null){var de,ue,fe,ve,be=[],ge=!0,xe=!1;try{if(fe=(te=te.call(q)).next,ie===0){if(Object(te)!==te)return;ge=!1}else for(;!(ge=(de=fe.call(te)).done)&&(be.push(de.value),be.length!==ie);ge=!0);}catch(Ce){xe=!0,ue=Ce}finally{try{if(!ge&&te.return!=null&&(ve=te.return(),Object(ve)!==ve))return}finally{if(xe)throw ue}}return be}}function S(q){if(Array.isArray(q))return q}var k=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,H={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},k=`import React from "react";
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
`,H={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},G=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design-v2/hooks/useLoading"},re=function(ie){return new Promise(function(te){return setTimeout(te,ie)})},ce=function(){var ie=r(re),te=o(ie,2),de=te[0],ue=te[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return ue(2e3)},children:"Start"})}),Object(m.jsxs)("div",{children:["Loading: ",""+de]})]})};ce.displayName="Default",ce.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},ce.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return m});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(E),z=e("./node_modules/core-js/modules/es.symbol.description.js"),c=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e.n(W),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/es.array.iterator.js"),s=e.n(n),v=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),p=e.n(v),y=e("./node_modules/core-js/modules/es.array.slice.js"),i=e.n(y),l=e("./node_modules/core-js/modules/es.function.name.js"),g=e.n(l),b=e("./node_modules/core-js/modules/es.array.from.js"),j=e.n(b),u=e("./node_modules/react/index.js"),O=e.n(u),L=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),_=e("./node_modules/react/jsx-runtime.js"),T=e.n(_);function D(o,h){return a(o)||x(o,h)||B(o,h)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(o,h){if(o){if(typeof o=="string")return I(o,h);var P=Object.prototype.toString.call(o).slice(8,-1);if(P==="Object"&&o.constructor&&(P=o.constructor.name),P==="Map"||P==="Set")return Array.from(o);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return I(o,h)}}function I(o,h){(h==null||h>o.length)&&(h=o.length);for(var P=0,M=new Array(h);P<h;P++)M[P]=o[P];return M}function x(o,h){var P=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(P!=null){var M,A,S,k,H=[],G=!0,re=!1;try{if(S=(P=P.call(o)).next,h===0){if(Object(P)!==P)return;G=!1}else for(;!(G=(M=S.call(P)).done)&&(H.push(M.value),H.length!==h);G=!0);}catch(ce){re=!0,A=ce}finally{try{if(!G&&P.return!=null&&(k=P.return(),Object(k)!==k))return}finally{if(re)throw A}}return H}}function a(o){if(Array.isArray(o))return o}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},d=`import { useEffect } from "react";

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
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design-v2/hooks/useRafState"};var m=function(){var h=Object(L.a)({width:0,height:0}),P=D(h,2),M=P[0],A=P[1];return Object(u.useEffect)(function(){var S=function(){A({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",S),function(){window.removeEventListener("resize",S)}},[]),Object(_.jsx)("pre",{children:JSON.stringify(M,null,2)})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return U});var K=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e.n(E),z=e("./node_modules/core-js/modules/es.object.to-string.js"),c=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.iterator.js"),R=e.n(W),N=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s=e.n(n),v=e("./node_modules/core-js/modules/es.array.slice.js"),p=e.n(v),y=e("./node_modules/core-js/modules/es.function.name.js"),i=e.n(y),l=e("./node_modules/core-js/modules/es.array.from.js"),g=e.n(l),b=e("./node_modules/react/index.js"),j=e.n(b);function u(B,I){return D(B)||T(B,I)||L(B,I)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(B,I){if(B){if(typeof B=="string")return _(B,I);var x=Object.prototype.toString.call(B).slice(8,-1);if(x==="Object"&&B.constructor&&(x=B.constructor.name),x==="Map"||x==="Set")return Array.from(B);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return _(B,I)}}function _(B,I){(I==null||I>B.length)&&(I=B.length);for(var x=0,a=new Array(I);x<I;x++)a[x]=B[x];return a}function T(B,I){var x=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(x!=null){var a,d,r,m,o=[],h=!0,P=!1;try{if(r=(x=x.call(B)).next,I===0){if(Object(x)!==x)return;h=!1}else for(;!(h=(a=r.call(x)).done)&&(o.push(a.value),o.length!==I);h=!0);}catch(M){P=!0,d=M}finally{try{if(!h&&x.return!=null&&(m=x.return(),Object(m)!==m))return}finally{if(P)throw d}}return o}}function D(B){if(Array.isArray(B))return B}var U=function(I){var x=Object(b.useRef)(0),a=Object(b.useState)(I),d=u(a,2),r=d[0],m=d[1],o=Object(b.useCallback)(function(h){cancelAnimationFrame(x.current),x.current=requestAnimationFrame(function(){m(h)})},[]);return[r,o]}},"./packages/travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/dayjs/dayjs.min.js"),F=e.n(w),E=e("./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts"),Y=e("./node_modules/react/jsx-runtime.js"),z=e.n(Y),c=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},c=`import dayjs from "dayjs";
import { useRemainingTimer } from "../useRemainingTimer";

export default {
  title: "@travelmakers-design-v2/hooks/useRemainingTimer",
};

export const Default = () => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
};
`,W={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design-v2/hooks/useRemainingTimer"};var R=function(){var V=Object(E.a)(F()()),C=V.remainingTime;return Object(Y.jsx)("div",{children:C})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`() => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
}`}},R.parameters)},"./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return T});var K=e("./node_modules/core-js/modules/web.timers.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),c=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/dayjs/dayjs.min.js"),t=e.n(C),n=e("./node_modules/dayjs/plugin/duration.js"),s=e.n(n),v=e("./node_modules/dayjs/plugin/timezone.js"),p=e.n(v),y=e("./node_modules/dayjs/plugin/utc.js"),i=e.n(y);t.a.extend(s.a),t.a.extend(i.a),t.a.extend(p.a),t.a.tz.setDefault("Asia/Seoul");var l=function(U){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"DD\uC77C HH:mm:ss",I=t()(U),x=t()(),a=I.diff(x),d=x.isSame(I)||a<=0;if(d)return"00:00:00";var r=t.a.duration(a).days();return r===0?t()(a).format("HH:mm:ss"):t()(a).format(B)},g=e("./node_modules/react/index.js");function b(D,U){return _(D)||L(D,U)||u(D,U)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(D,U){if(D){if(typeof D=="string")return O(D,U);var B=Object.prototype.toString.call(D).slice(8,-1);if(B==="Object"&&D.constructor&&(B=D.constructor.name),B==="Map"||B==="Set")return Array.from(D);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return O(D,U)}}function O(D,U){(U==null||U>D.length)&&(U=D.length);for(var B=0,I=new Array(U);B<U;B++)I[B]=D[B];return I}function L(D,U){var B=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(B!=null){var I,x,a,d,r=[],m=!0,o=!1;try{if(a=(B=B.call(D)).next,U===0){if(Object(B)!==B)return;m=!1}else for(;!(m=(I=a.call(B)).done)&&(r.push(I.value),r.length!==U);m=!0);}catch(h){o=!0,x=h}finally{try{if(!m&&B.return!=null&&(d=B.return(),Object(d)!==d))return}finally{if(o)throw x}}return r}}function _(D){if(Array.isArray(D))return D}var T=function(U,B,I){var x=Object(g.useState)(""),a=b(x,2),d=a[0],r=a[1];return Object(g.useLayoutEffect)(function(){var m=null;return m=setInterval(function(){return r(l(U,B))},I),function(){m&&clearInterval(m)}},[]),{remainingTime:d}}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return a});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),c=e("./node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),t=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),n=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function s(d,r){return l(d)||i(d,r)||p(d,r)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(d,r){if(d){if(typeof d=="string")return y(d,r);var m=Object.prototype.toString.call(d).slice(8,-1);if(m==="Object"&&d.constructor&&(m=d.constructor.name),m==="Map"||m==="Set")return Array.from(d);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return y(d,r)}}function y(d,r){(r==null||r>d.length)&&(r=d.length);for(var m=0,o=new Array(r);m<r;m++)o[m]=d[m];return o}function i(d,r){var m=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(m!=null){var o,h,P,M,A=[],S=!0,k=!1;try{if(P=(m=m.call(d)).next,r===0){if(Object(m)!==m)return;S=!1}else for(;!(S=(o=P.call(m)).done)&&(A.push(o.value),A.length!==r);S=!0);}catch(H){k=!0,h=H}finally{try{if(!S&&m.return!=null&&(M=m.return(),Object(M)!==M))return}finally{if(k)throw h}}return A}}function l(d){if(Array.isArray(d))return d}var g={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},b=typeof window!="undefined",j=function(){var r=Object(C.useRef)(null),m=Object(n.a)(g),o=s(m,2),h=o[0],P=o[1],M=Object(C.useMemo)(function(){return b?new ResizeObserver(function(A){var S=A[0];S&&P(S.contentRect)}):null},[]);return Object(C.useEffect)(function(){return r.current&&M.observe(r.current),function(){M.disconnect()}},[r.current]),[r,h]},u=e("./node_modules/react/jsx-runtime.js");function O(d,r){return U(d)||D(d,r)||_(d,r)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(d,r){if(d){if(typeof d=="string")return T(d,r);var m=Object.prototype.toString.call(d).slice(8,-1);if(m==="Object"&&d.constructor&&(m=d.constructor.name),m==="Map"||m==="Set")return Array.from(d);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return T(d,r)}}function T(d,r){(r==null||r>d.length)&&(r=d.length);for(var m=0,o=new Array(r);m<r;m++)o[m]=d[m];return o}function D(d,r){var m=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(m!=null){var o,h,P,M,A=[],S=!0,k=!1;try{if(P=(m=m.call(d)).next,r===0){if(Object(m)!==m)return;S=!1}else for(;!(S=(o=P.call(m)).done)&&(A.push(o.value),A.length!==r);S=!0);}catch(H){k=!0,h=H}finally{try{if(!S&&m.return!=null&&(M=m.return(),Object(M)!==M))return}finally{if(k)throw h}}return A}}function U(d){if(Array.isArray(d))return d}var B=`
    
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
`,I={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},x=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/hooks/useResize"},a=function(){var r=j(),m=O(r,2),o=m[0],h=m[1],P=Object(t.a)();return Object(C.useEffect)(function(){P()},[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{ref:o,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(u.jsx)("div",{children:JSON.stringify(h)})]})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`() => {
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
}`}},a.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return m});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(E),z=e("./node_modules/core-js/modules/es.symbol.description.js"),c=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e.n(W),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/es.array.iterator.js"),s=e.n(n),v=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),p=e.n(v),y=e("./node_modules/core-js/modules/es.array.slice.js"),i=e.n(y),l=e("./node_modules/core-js/modules/es.function.name.js"),g=e.n(l),b=e("./node_modules/core-js/modules/es.array.from.js"),j=e.n(b),u=e("./node_modules/react/index.js"),O=e.n(u),L=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),_=e("./node_modules/react/jsx-runtime.js"),T=e.n(_);function D(o,h){return a(o)||x(o,h)||B(o,h)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(o,h){if(o){if(typeof o=="string")return I(o,h);var P=Object.prototype.toString.call(o).slice(8,-1);if(P==="Object"&&o.constructor&&(P=o.constructor.name),P==="Map"||P==="Set")return Array.from(o);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return I(o,h)}}function I(o,h){(h==null||h>o.length)&&(h=o.length);for(var P=0,M=new Array(h);P<h;P++)M[P]=o[P];return M}function x(o,h){var P=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(P!=null){var M,A,S,k,H=[],G=!0,re=!1;try{if(S=(P=P.call(o)).next,h===0){if(Object(P)!==P)return;G=!1}else for(;!(G=(M=S.call(P)).done)&&(H.push(M.value),H.length!==h);G=!0);}catch(ce){re=!0,A=ce}finally{try{if(!G&&P.return!=null&&(k=P.return(),Object(k)!==k))return}finally{if(re)throw A}}return H}}function a(o){if(Array.isArray(o))return o}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},d=`import React from "react";
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
`,r={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/hooks/useTimeoutFn"};var m=function(){var h=Object(L.a)(function(){alert("fire!")},2e3),P=D(h,2),M=P[0],A=P[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{onClick:M,children:"Run"}),Object(_.jsx)("button",{onClick:A,children:"Clear"})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return Y});var K=e("./node_modules/core-js/modules/web.timers.js"),$=e.n(K),w=e("./node_modules/react/index.js"),F=e.n(w),E=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Y=function(c,W){var R=Object(w.useRef)(),N=Object(E.a)(c),V=Object(w.useCallback)(function(){R.current&&clearTimeout(R.current),R.current=setTimeout(function(){N()},W)},[W]),C=Object(w.useCallback)(function(){R.current&&clearTimeout(R.current)},[]);return Object(w.useEffect)(function(){return C},[C]),[V,C]}},"./packages/travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Toast",function(){return l});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react-hot-toast/dist/index.js"),w=e.n($),F=e("./node_modules/core-js/modules/es.object.keys.js"),E=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),c=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),W=e("./node_modules/react/jsx-runtime.js"),R=["text","align"];function N(g,b){if(g==null)return{};var j=V(g,b),u,O;if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(g);for(O=0;O<L.length;O++)u=L[O],!(b.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(g,u)&&(j[u]=g[u])}return j}function V(g,b){if(g==null)return{};var j={},u=Object.keys(g),O,L;for(L=0;L<u.length;L++)O=u[L],!(b.indexOf(O)>=0)&&(j[O]=g[O]);return j}var C={left:"flex-start",center:"center",right:"flex-end"},t={success:"IcResultSuccess",error:"IcResultFail"},n=function(b){var j=b.typography,u=b.colors,O=b.shadows;return{style:Object.assign({},j.body2,{width:"328px",padding:"11px 6px",color:u.white,backgroundColor:u.black30,boxShadow:O.elevation4}),duration:2e3}},s=function(b){return{display:"flex",justifyContent:C[b!=null?b:"center"],width:"100%"}},v=function(){var b=Object(c.c)(),j=b.spacing,u=function(D,U){var B=D.text,I=D.align,x=N(D,R);w()(Object(W.jsxs)("div",{style:Object.assign({},s(I),{padding:"1px 0",wordBreak:"break-all"}),children:[U&&Object(W.jsx)(z.a,{src:t[U],width:24,height:24,style:{flexShrink:0,marginRight:j.spacing10}}),Object(W.jsx)("p",{style:{margin:0,wordBreak:"break-all"},children:B})]}),Object.assign({},n(b),x))},O=function(D){return u(D)},L=function(D){return u(D,"success")},_=function(D){return u(D,"error")};return{toast:O,success:L,error:_}},p=`
    
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



Toast.parameters = { storySource: { source: "() => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n}" }, ...Toast.parameters };`,y={Toast:{startLoc:{col:21,line:17},endLoc:{col:1,line:30},startBody:{col:21,line:17},endBody:{col:1,line:30}}},p=`import { Meta } from "@storybook/react";
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
`,y={Toast:{startLoc:{col:21,line:9},endLoc:{col:1,line:22},startBody:{col:21,line:9},endBody:{col:1,line:22}}},i=f.default={parameters:{storySource:{source:`
    
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



Toast.parameters = { storySource: { source: "() => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n}" }, ...Toast.parameters };`,locationsMap:{toast:{startLoc:{col:21,line:17},endLoc:{col:1,line:30},startBody:{col:21,line:17},endBody:{col:1,line:30}}}}},title:"@travelmakers-design-v2/hooks/useToast"},l=function(){var b=v(),j=b.toast,u=b.success,O=b.error;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[Object(W.jsx)("button",{onClick:function(){return j({text:"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8"})},children:"Toast"}),Object(W.jsx)("button",{onClick:function(){return u({text:"\uC131\uACF5"})},children:"Success"}),Object(W.jsx)("button",{onClick:function(){return O({text:"\uC2E4\uD328"})},children:"Error"})]}),Object(W.jsx)($.Toaster,{})]})};l.parameters=Object.assign({storySource:{source:`() => {
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
}`}},l.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return m});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(E),z=e("./node_modules/core-js/modules/es.symbol.description.js"),c=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e.n(W),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e.n(N),C=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(C),n=e("./node_modules/core-js/modules/es.array.iterator.js"),s=e.n(n),v=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),p=e.n(v),y=e("./node_modules/core-js/modules/es.array.slice.js"),i=e.n(y),l=e("./node_modules/core-js/modules/es.function.name.js"),g=e.n(l),b=e("./node_modules/core-js/modules/es.array.from.js"),j=e.n(b),u=e("./node_modules/react/index.js"),O=e.n(u),L=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),_=e("./node_modules/react/jsx-runtime.js"),T=e.n(_);function D(o,h){return a(o)||x(o,h)||B(o,h)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(o,h){if(o){if(typeof o=="string")return I(o,h);var P=Object.prototype.toString.call(o).slice(8,-1);if(P==="Object"&&o.constructor&&(P=o.constructor.name),P==="Map"||P==="Set")return Array.from(o);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return I(o,h)}}function I(o,h){(h==null||h>o.length)&&(h=o.length);for(var P=0,M=new Array(h);P<h;P++)M[P]=o[P];return M}function x(o,h){var P=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(P!=null){var M,A,S,k,H=[],G=!0,re=!1;try{if(S=(P=P.call(o)).next,h===0){if(Object(P)!==P)return;G=!1}else for(;!(G=(M=S.call(P)).done)&&(H.push(M.value),H.length!==h);G=!0);}catch(ce){re=!0,A=ce}finally{try{if(!G&&P.return!=null&&(k=P.return(),Object(k)!==k))return}finally{if(re)throw A}}return H}}function a(o){if(Array.isArray(o))return o}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},d=`import React, { useEffect, useState } from "react";

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
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useUpdateEffect"};var m=function(){var h=Object(u.useState)(""),P=D(h,2),M=P[0],A=P[1];return Object(u.useEffect)(function(){console.log("useEffect:",M)},[M]),Object(L.a)(function(){console.log("useUpdateEffect:",M)},[M]),Object(_.jsx)("div",{children:Object(_.jsx)("input",{type:"text",onChange:function(k){return A(k.target.value)}})})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return w});var K=e("./node_modules/react/index.js"),$=e.n(K),w=function(E,Y){var z=Object(K.useRef)(!0);Object(K.useEffect)(function(){if(!z.current)return E();z.current=!1},Y)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,f,e){"use strict";e.d(f,"c",function(){return Ee}),e.d(f,"d",function(){return Ue}),e.d(f,"b",function(){return se}),e.d(f,"a",function(){return le});var K=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.object.assign.js"),F={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},E={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},Y={primary:[F.primary,F.primaryInteract,F.primaryContainer,F.white,F.white,F.white],secondary:[F.transparent,F.surface,F.transparent,F.primaryContainer,F.primary,F.primary],tertiary:[F.secondary,F.secondaryInteract,F.secondaryContainer,F.primary4,F.white,F.white],error:[F.error,F.errorInteract,F.errorContainer,F.primary4,F.white,F.white],tonal:[F.surface,F.surface,F.surface,F.primary4,F.primary,F.primary],text:[F.transparent,F.transparent,F.transparent,F.primary4,F.primaryInteract,F.primary]},z={none:"none",elevation1:"0px 4px 8px rgba(0, 0, 0, 0.15)",elevation2:"0px 4px 12px rgba(0, 0, 0, 0.15)",elevation3:"0px 4px 16px rgba(0, 0, 0, 0.2)",elevation4:"0px 4px 20px rgba(0, 0, 0, 0.2)",elevation5:"0px 4px 24px rgba(0, 0, 0, 0.2)"},c={display1:"40px",display2:"32px",display3:"28px",display4:"24px",display5:"20px",display6:"18px",subhead1:"16px",subhead2:"14px",body1:"16px",body2:"14px",body3:"12px",caption:"10px"},W={display1:"56px",display2:"40px",display3:"36px",display4:"32px",display5:"28px",display6:"26px",subhead1:"24px",subhead2:"22px",body1:"24px",body2:"22px",body3:"20px",caption:"16px"},R={radius10:"4px",radius20:"8px",radius100:"100px"},N={spacing5:"4px",spacing10:"8px",spacing20:"12px",spacing30:"16px",spacing40:"20px",spacing50:"24px",spacing60:"28px",spacing70:"32px",spacing80:"36px",spacing90:"40px",spacing100:"48px",spacing110:"52px",spacing120:"56px",spacing130:"60px"},V={small:768,medium:1024,large:1408},C={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},t={mobile:"@media (max-width: "+C.mobile+"px)",tablet:"@media (max-width: "+C.tablet+"px)",desktop:"@media (max-width: "+C.desktop+"px)",largeDesktop:"@media (max-width: "+C.maxSize+"px)"},n=function(J){for(var ee="",ae=1;ae<J.length-1;ae+=1)ee+=J[ae]+" "+ae/(J.length-1)*100+"%, ";return J[0]+" 0%, "+ee+J[J.length-1]+" 100%"},s=function(J){for(var ee=arguments.length,ae=new Array(ee>1?ee-1:0),me=1;me<ee;me++)ae[me-1]=arguments[me];return"linear-gradient("+J+"deg, "+n(ae)+")"},v=function(){for(var J=arguments.length,ee=new Array(J),ae=0;ae<J;ae++)ee[ae]=arguments[ae];return"radial-gradient(circle, "+n(ee)+")"},p=function(J){return typeof J.size=="number"?J.size:J.sizes[J.size]||J.size||J.sizes.medium},y=function(J){return function(ee){return"@media (min-width: "+(p({size:ee,sizes:J.breakpoints})+1)+"px)"}},i=function(J){return function(ee){return"@media (max-width: "+p({size:ee,sizes:J.breakpoints})+"px)"}},l=e("./node_modules/core-js/modules/es.string.replace.js"),g=e("./node_modules/core-js/modules/es.regexp.exec.js"),b=e("./node_modules/core-js/modules/es.number.is-nan.js"),j=e("./node_modules/core-js/modules/es.number.constructor.js"),u=e("./node_modules/core-js/modules/es.parse-int.js"),O=e("./node_modules/core-js/modules/es.array.map.js"),L=e("./node_modules/core-js/modules/es.string.split.js"),_=e("./node_modules/core-js/modules/es.string.starts-with.js"),T=e("./node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e("./node_modules/core-js/modules/es.object.to-string.js"),I=e("./node_modules/core-js/modules/es.symbol.iterator.js"),x=e("./node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/core-js/modules/es.array.iterator.js"),d=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),r=e("./node_modules/core-js/modules/es.array.slice.js"),m=e("./node_modules/core-js/modules/es.function.name.js"),o=e("./node_modules/core-js/modules/es.array.from.js");function h(Q,J){return k(Q)||S(Q,J)||M(Q,J)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(Q,J){if(Q){if(typeof Q=="string")return A(Q,J);var ee=Object.prototype.toString.call(Q).slice(8,-1);if(ee==="Object"&&Q.constructor&&(ee=Q.constructor.name),ee==="Map"||ee==="Set")return Array.from(Q);if(ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee))return A(Q,J)}}function A(Q,J){(J==null||J>Q.length)&&(J=Q.length);for(var ee=0,ae=new Array(J);ee<J;ee++)ae[ee]=Q[ee];return ae}function S(Q,J){var ee=Q==null?null:typeof Symbol!="undefined"&&Q[Symbol.iterator]||Q["@@iterator"];if(ee!=null){var ae,me,je,he,Le=[],Ie=!0,Ke=!1;try{if(je=(ee=ee.call(Q)).next,J===0){if(Object(ee)!==ee)return;Ie=!1}else for(;!(Ie=(ae=je.call(ee)).done)&&(Le.push(ae.value),Le.length!==J);Ie=!0);}catch(Ge){Ke=!0,me=Ge}finally{try{if(!Ie&&ee.return!=null&&(he=ee.return(),Object(he)!==he))return}finally{if(Ke)throw me}}return Le}}function k(Q){if(Array.isArray(Q))return Q}var H=function(J){var ee=J.replace("#","");return typeof ee=="string"&&ee.length===6&&!Number.isNaN(Number("0x"+ee))},G=function(J){var ee=J.replace("#",""),ae=parseInt(ee,16),me=ae>>16&255,je=ae>>8&255,he=ae&255;return{r:me,g:je,b:he,a:1}},re=function(J){var ee=J.replace(/[^0-9,.]/g,"").split(",").map(Number),ae=h(ee,4),me=ae[0],je=ae[1],he=ae[2],Le=ae[3];return{r:me,g:je,b:he,a:Le||1}},ce=function(J){return H(J)?G(J):J.startsWith("rgb")?re(J):{r:0,g:0,b:0,a:1}},q=function(J,ee){if(typeof J!="string"||ee>1||ee<0)return"rgba(0, 0, 0, 1)";var ae=ce(J),me=ae.r,je=ae.g,he=ae.b;return"rgba("+me+", "+je+", "+he+", "+ee+")"},ie=function(J,ee){var ae=ce(J),me=ae.r,je=ae.g,he=ae.b,Le=ae.a,Ie=1-ee,Ke=function(Ye){return Math.round(Ye*Ie)};return"rgba("+Ke(me)+", "+Ke(je)+", "+Ke(he)+", "+Le+")"},te=function(J,ee){var ae=ce(J),me=ae.r,je=ae.g,he=ae.b,Le=ae.a,Ie=function(Ge){return Math.round(Ge+(255-Ge)*ee)};return"rgba("+Ie(me)+", "+Ie(je)+", "+Ie(he)+", "+Le+")"},de=function(J){return J*8},ue={linearGradient:s,radialGradient:v,smallerThan:i,largerThan:y,rgba:q,size:p,darken:ie,lighten:te,spacing:de},fe=function(J){return Object.assign({},J,{fn:{largerThan:ue.largerThan(J),smallerThan:ue.smallerThan(J),radialGradient:ue.radialGradient,linearGradient:ue.linearGradient,rgba:ue.rgba,size:ue.size,lighten:ue.lighten,darken:ue.darken,spacing:ue.spacing}})},ve={display1:{fontSize:c.display1,lineHeight:W.display1},display2:{fontSize:c.display2,lineHeight:W.display2},display3:{fontSize:c.display3,lineHeight:W.display3},display4:{fontSize:c.display4,lineHeight:W.display4},display5:{fontSize:c.display5,lineHeight:W.display5},display6:{fontSize:c.display6,lineHeight:W.display6},subhead1:{fontSize:c.subhead1,lineHeight:W.subhead1},subhead2:{fontSize:c.subhead2,lineHeight:W.subhead2},body1:{fontSize:c.body1,lineHeight:W.body1},body2:{fontSize:c.body2,lineHeight:W.body2},body3:{fontSize:c.body3,lineHeight:W.body3},caption:{fontSize:c.caption,lineHeight:W.caption}},be=Object.keys(Y),ge=Object.keys(F),xe=["small","medium","large"],Ce=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],De=function(J){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:J.fontFamily||"sans-serif"}},Te={locale:"ko",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",colors:F,palettes:Y,shadows:z,fontSizes:c,lineHeights:W,radius:R,typography:ve,spacing:N,breakpoints:V,media:t},Be=Object.assign({},Te,{colors:E,colorScheme:"dark"}),Oe=fe(Te),Ne=fe(Be),Me=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),ke=e("./node_modules/react/jsx-runtime.js"),Ve=function(J){var ee=J.styles,ae=Ee();return Object(ke.jsx)(Me.a,{styles:Object(Me.b)(ee(ae))})};Ve.displayName="Global";var Ae;function we(Q,J){return J||(J=Q.slice(0)),Q.raw=J,Q}var He=Object(Me.b)(Ae||(Ae=we([`
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
`]))),Pe=function(){return Object(ke.jsx)(Me.a,{styles:He})};Pe.displayName="NormalizeCSS";var _e=e("./node_modules/core-js/modules/es.array.reduce.js");function We(Q,J){return J?Object.keys(Q).reduce(function(ee,ae){if(ae==="typography"&&J.typography){var me=J.typography?Object.keys(Q.typography).reduce(function(je,he){return je[he]=Object.assign({},Q.typography[he],J.typography[he]),je},{}):Q.typography;return Object.assign({},ee,{typography:Object.assign({},Q.typography,J.typography,me)})}return ee[ae]=typeof J[ae]=="object"?Object.assign({},Q[ae],J[ae]):J[ae]||Q[ae],ee},{}):Q}var Re=Object(K.createContext)({theme:Oe,styles:{},emotionOptions:{key:"co",prepend:!0}});function Ee(){var Q;return((Q=Object(K.useContext)(Re))===null||Q===void 0?void 0:Q.theme)||Oe}function Ue(){var Q;return((Q=Object(K.useContext)(Re))===null||Q===void 0?void 0:Q.styles)||{}}function se(){var Q;return((Q=Object(K.useContext)(Re))===null||Q===void 0?void 0:Q.emotionOptions)||{key:"co",prepend:!0}}var ne=function(){return Object(ke.jsx)(Ve,{styles:function(ee){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:ee.fontFamily,backgroundColor:ee.colorScheme==="dark"?ee.colors.black:ee.colors.white,color:ee.colorScheme==="dark"?ee.colors.white:ee.colors.black,lineHeight:ee.lineHeight,fontSizes:ee.fontSizes.body3}}}})};ne.displayName="GlobalStyles";var le=function(J){var ee=J.theme,ae=J.styles,me=ae===void 0?{}:ae,je=J.emotionOptions,he=J.withNormalizeCSS,Le=he===void 0?!1:he,Ie=J.withGlobalStyles,Ke=Ie===void 0?!1:Ie,Ge=J.children;return Object(ke.jsxs)(Re.Provider,{value:{theme:We(ee.colorScheme==="dark"?Ne:Oe,ee),styles:me,emotionOptions:je},children:[Le&&Object(ke.jsx)(Pe,{}),Ke&&Object(ke.jsx)(ne,{}),Ge]})};le.displayName="TmProvider",le.displayName="@travelmakers-design-v2/styles/TmProvider"},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return L});var K=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),F=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./node_modules/core-js/modules/es.array.for-each.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),c=e("./node_modules/core-js/modules/es.symbol.js"),W=e("./node_modules/core-js/modules/es.symbol.description.js"),R=e("./node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),n=e("./node_modules/core-js/modules/es.array.slice.js"),s=e("./node_modules/core-js/modules/es.array.from.js");function v(_,T){return g(_)||l(_,T)||y(_,T)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(_,T){if(_){if(typeof _=="string")return i(_,T);var D=Object.prototype.toString.call(_).slice(8,-1);if(D==="Object"&&_.constructor&&(D=_.constructor.name),D==="Map"||D==="Set")return Array.from(_);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return i(_,T)}}function i(_,T){(T==null||T>_.length)&&(T=_.length);for(var D=0,U=new Array(T);D<T;D++)U[D]=_[D];return U}function l(_,T){var D=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(D!=null){var U,B,I,x,a=[],d=!0,r=!1;try{if(I=(D=D.call(_)).next,T===0){if(Object(D)!==D)return;d=!1}else for(;!(d=(U=I.call(D)).done)&&(a.push(U.value),a.length!==T);d=!0);}catch(m){r=!0,B=m}finally{try{if(!d&&D.return!=null&&(x=D.return(),Object(x)!==x))return}finally{if(r)throw B}}return a}}function g(_){if(Array.isArray(_))return _}function b(_){var T={};return Object.keys(_).forEach(function(D){var U=v(_[D],2),B=U[0],I=U[1];T[B]=I}),T}var j=e("./node_modules/core-js/modules/es.array.reduce.js");function u(_,T,D){return Object.keys(T).reduce(function(U,B){return U[B]=_(T[B],D?"tm-"+D+"-"+B:null),U},{})}var O=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function L(_){var T=typeof _=="function"?_:function(){return _};function D(U,B){var I=Object(F.c)(),x=Object(F.d)()[B==null?void 0:B.name],a=Object(O.a)(),d=a.css,r=a.cx,m=a.cssRn,o=0;function h(H){return o+=1,"tm-ref_"+(H||"")+"_"+o}var P=T(I,U,h),M=typeof(B==null?void 0:B.overrideStyles)=="function"?B==null?void 0:B.overrideStyles(I):(B==null?void 0:B.overrideStyles)||{},A=typeof x=="function"?x(I):x||{},S=typeof(B==null?void 0:B.tm)=="function"?B.tm(I):B==null?void 0:B.tm,k=b(Object.keys(P).map(function(H){var G=r(d(P[H]),d(A[H]),d(M[H]),d(S));return[H,G]}));return{classes:u(r,k,B==null?void 0:B.name),cx:r,theme:I}}return D}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return S});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),F=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),c=e("./node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/clsx/dist/clsx.m.js"),t=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),n=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),s=e("./node_modules/core-js/modules/es.array.index-of.js"),v=e("./node_modules/core-js/modules/es.array.map.js"),p=e("./node_modules/react/index.js");function y(k){return b(k)||g(k)||l(k)||i()}function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(k,H){if(k){if(typeof k=="string")return j(k,H);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return j(k,H)}}function g(k){if(typeof Symbol!="undefined"&&k[Symbol.iterator]!=null||k["@@iterator"]!=null)return Array.from(k)}function b(k){if(Array.isArray(k))return j(k)}function j(k,H){(H==null||H>k.length)&&(H=k.length);for(var G=0,re=new Array(H);G<H;G++)re[G]=k[G];return re}function u(k,H){var G=Object(p.useRef)();return(!G.current||H.length!==G.current.prevDeps.length||G.current.prevDeps.map(function(re,ce){return re===H[ce]}).indexOf(!1)>=0)&&(G.current={v:k(),prevDeps:y(H)}),G.current.v}var O=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),L=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),_=e("./node_modules/react/jsx-runtime.js"),T=function(){var k;function H(G){return k===void 0&&(k=Object(O.a)(G||{key:"co",prepend:!0})),k}return{getCache:H}}(),D=T.getCache,U=Object(p.createContext)(void 0);function B(){var k=Object(L.b)();return Object(p.useContext)(U)||D(k)}function I(k){var H=k.children,G=k.value;return Object(_.jsx)(U.Provider,{value:G,children:H})}I.displayName="CacheProvider";function x(k,H){return o(k)||m(k,H)||d(k,H)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(k,H){if(k){if(typeof k=="string")return r(k,H);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return r(k,H)}}function r(k,H){(H==null||H>k.length)&&(H=k.length);for(var G=0,re=new Array(H);G<H;G++)re[G]=k[G];return re}function m(k,H){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var re,ce,q,ie,te=[],de=!0,ue=!1;try{if(q=(G=G.call(k)).next,H===0){if(Object(G)!==G)return;de=!1}else for(;!(de=(re=q.call(G)).done)&&(te.push(re.value),te.length!==H);de=!0);}catch(fe){ue=!0,ce=fe}finally{try{if(!de&&G.return!=null&&(ie=G.return(),Object(ie)!==ie))return}finally{if(ue)throw ce}}return te}}function o(k){if(Array.isArray(k))return k}var h="ref";function P(k){var H;if(k.length!==1)return{args:k,ref:H};var G=x(k,1),re=G[0];if(!(re instanceof Object))return{args:k,ref:H};if(!(h in re))return{args:k,ref:H};H=re[h];var ce=Object.assign({},re);return delete ce[h],{args:[ce],ref:H}}var M=function(){function k(G,re,ce){var q=[],ie=Object(n.a)(G,q,ce);return q.length<2?ce:ie+re(q)}function H(G){var re=G.cache,ce=function(){for(var de=arguments.length,ue=new Array(de),fe=0;fe<de;fe++)ue[fe]=arguments[fe];var ve=P(ue),be=ve.ref,ge=ve.args,xe=Object(t.a)(ge,re.registered);return Object(n.b)(re,xe,!1),re.key+"-"+xe.name+(be===void 0?"":" "+be)},q=function(){for(var de=arguments.length,ue=new Array(de),fe=0;fe<de;fe++)ue[fe]=arguments[fe];var ve=P(ue),be=ve.ref,ge=ve.args,xe=Object(t.a)(ge,re.registered);return Object(n.b)(re,xe,!1),""+re.key+xe.name+(be===void 0?"":" "+be)},ie=function(){for(var de=arguments.length,ue=new Array(de),fe=0;fe<de;fe++)ue[fe]=arguments[fe];return k(re.registered,ce,Object(C.a)(ue))};return{css:ce,cx:ie,cssRn:q}}return{cssFactory:H}}(),A=M.cssFactory;function S(){var k=B();return u(function(){return A({cache:k})},[k])}},"./packages/travelmakers-design-utils/src/getDate/getDate.tsx":function(oe,f,e){"use strict";e.d(f,"d",function(){return R}),e.d(f,"f",function(){return V}),e.d(f,"a",function(){return C}),e.d(f,"e",function(){return t}),e.d(f,"b",function(){return n}),e.d(f,"c",function(){return s});var K=e("./node_modules/core-js/modules/es.date.to-string.js"),$=e.n(K),w=e("./node_modules/dayjs/dayjs.min.js"),F=e.n(w),E=e("./node_modules/dayjs/plugin/timezone.js"),Y=e.n(E),z=e("./node_modules/dayjs/plugin/utc.js"),c=e.n(z);F.a.extend(c.a),F.a.extend(Y.a);function W(v){return v<10?"0"+v:v}function R(){return F.a}function N(v){var p=v?new Date(v):new Date,y=p.getTime()+p.getTimezoneOffset()*60*1e3,i=9*60*60*1e3,l=new Date(y+i);return l}function V(v){if(!v){var p=F()().tz("Asia/Seoul");return p}var y=F()(v+"+0900").tz("Asia/Seoul");if(!y.isValid()){var i=F()(""+v).tz("Asia/Seoul");return i}return y}function C(v,p){var y=V(v),i=p!=null?p:"/";return y.year()+i+(y.month()+1)+i+y.date()}function t(v,p){var y=V(v),i=p!=null?p:"/";return y.year()+i+(y.month()+1)+i+y.date()+" "+y.hour()+":"+W(y.minute())}function n(v,p){var y=V(v),i=p!=null?p:":";return W(y.hour())+i+W(y.minute())}function s(v){var p=V(v),y=p.day(),i=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];return i[y]+"\uC694\uC77C"}},"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return R});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(K),w=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),F=e("./node_modules/react/index.js"),E=e.n(F),Y=e("./node_modules/react/jsx-runtime.js"),z=e.n(Y),c=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}},c=`import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

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
`,W={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:47},startBody:{col:23,line:35},endBody:{col:1,line:47}}};f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/utils/getDate",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}};var R=function(V){return Object(Y.jsxs)("div",{children:["getDate: ",Object(w.a)("2022-12-22T01:37:27.391Z"),Object(Y.jsx)("br",{}),"getDateTime: ",Object(w.b)("2022-12-22T01:37:27.391Z"),Object(Y.jsx)("br",{}),"getFullDate: ",Object(w.e)("2022-12-22T01:37:27.391Z"),Object(Y.jsx)("br",{}),"getDay: ",Object(w.c)("2022-12-22T01:37:27.391Z")]})};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},R.parameters)},"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return W});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js");function w(R){switch(R){case"checkout_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_purchase_before":case"reservation_purchase_done":case"checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"day_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"extend_purchase_before":case"extend_purchase_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"extend_checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"reservation_change_process":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_cancel":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!0,callable:!0},reservationChangeButton:{visible:!1,callable:!1}};case"tour_confirm_before":case"tour_confirm":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"tour_cancel":case"tour_done":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};default:return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!0},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}}}}var F=w,E=e("./node_modules/react/jsx-runtime.js"),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},Y=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:13},startBody:{col:23,line:11},endBody:{col:1,line:13}}},c=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design-v2/utils/getReservationsCallable",argTypes:{state:{}}},W=function(N){return Object(E.jsx)("div",{children:JSON.stringify(w("tour_cancel"))})};W.displayName="Default",W.parameters=Object.assign({storySource:{source:`(props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
}`}},W.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return N});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),F=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function E(V){switch(V){case"default":case"tour_cancel":case"reservation_cancel":return{enum:V,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(){return"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?"},buttonText:function(){return"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"tour_confirm_before":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return t},buttonText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804\uC774\uC608\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"tour_confirm":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return Object(F.a)(Object(w.f)(t))+" \uD22C\uC5B4\uAC00 \uD655\uC815\uB410\uC5B4\uC694"},buttonText:function(){return"\uC57D\uC18D\uC2DC\uAC04\uC5D0 \uAF2D \uBC29\uBB38\uD574\uC8FC\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"tour_done":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(){return"\uD22C\uC5B4\uB294 \uC5B4\uB5A0\uC168\uB098\uC694?"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"reservation_purchase_before":return{enum:V,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(){return"\uC544\uC9C1 \uC785\uAE08\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"reservation_purchase_done":return{enum:V,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(t){return Object(F.a)(Object(w.f)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815\uC774\uC608\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkin_before":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return Object(F.b)(Object(w.f)(t))+" \uCCB4\uD06C\uC778 \uC608\uC815\uC774\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return"\uCCB4\uD06C\uC544\uC6C3\uC740 "+Object(F.b)(Object(w.f)(t))+"\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"checkout_before":return{enum:V,firstLineText:function(t){return""+t},secondLineText:function(t){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+t+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uC5F0\uC7A5\uD558\uC2DC\uACA0\uC5B4\uC694?"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkout_before_n":return{enum:V,firstLineText:function(t){return""+t},secondLineText:function(t){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+t+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(t){return Object(F.b)(Object(w.f)(t))+" \uCCB4\uD06C\uC544\uC6C3 \uC785\uB2C8\uB2E4"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkout_done":return{enum:V,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC740 \uC5B4\uB5A0\uC168\uB098\uC694?"},link:function(t){return{url:t,arrow:!!t}},color:"alert"}}}function Y(V,C){switch(V){case"default":case"tour_cancel":case"reservation_cancel":return{first:C.first.userName,second:null,buttonText:null};case"tour_confirm_before":return{first:C.first.userName,second:C.second.hotelName,buttonText:null};case"tour_confirm":return{first:C.first.userName,second:C.second.startDate,buttonText:null};case"tour_done":return{first:C.first.userName,second:null,buttonText:null};case"reservation_purchase_before":return{first:C.first.userName,second:C.second.hotelName,buttonText:null};case"reservation_purchase_done":return{first:C.first.userName,second:C.second.hotelName,buttonText:C.buttonText.expectedDate};case"checkin_before":return{first:C.first.userName,second:C.second.startDate,buttonText:null};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{first:C.first.userName,second:C.second.endDate,buttonText:null};case"checkout_before":return{first:C.first.hotelName,second:""+C.second.dDay,buttonText:null};case"checkout_before_n":return{first:C.first.hotelName,second:""+C.second.dDay,buttonText:C.buttonText.endDate};case"checkout_done":return{first:C.first.userName,second:C.second.hotelName,buttonText:null};default:return{first:null,second:null,buttonText:null}}}var z=e("./node_modules/react/jsx-runtime.js"),c=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,W={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}},c=`import React from "react";

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
`,W={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:58},startBody:{col:23,line:35},endBody:{col:1,line:58}}},R=f.default={parameters:{storySource:{source:`
    
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
}`}},N.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return V});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),F=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),E=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function Y(C){switch(C){case"tour_confirm_before":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_confirm":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_done":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_before":return{enum:C,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(n){if(n){var s=Object(F.a)(n);return s&&s==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":s+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(n){if(n){var s=Object(F.a)(n);return s&&s==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":s+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_done":return{enum:C,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkin_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+n},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"day_n":return{enum:C,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_done":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_checkin_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_change_process":return{enum:C,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(n){return Object(E.a)(Object(w.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before_n":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_done":return{enum:C,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(n){return n},thirdLineText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(n){return{url:n,arrow:!!n}}};case"tour_cancel":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};case"reservation_cancel":return{enum:C,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(n){return Object(E.a)(Object(w.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};default:return{enum:C,firstLineText:function(){return""},secondLineText:function(){return""},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}}}}function z(C,t){switch(C){case"checkout_before":case"checkout_before_n":return{first:""+t.first.dDay,second:t.second.endDate,third:t.third.hotelName};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:t.second.expectedDate,third:t.third.hotelName};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+t.first.dDay,second:t.second.startDate,third:t.third.hotelName};case"day_n":return{first:null,second:t.second.endDate,third:t.third.hotelName};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:t.second.vBankDate,third:t.third.hotelName};case"checkout_done":return{first:null,second:null,third:t.third.hotelName};case"tour_cancel":case"reservation_cancel":return{first:null,second:t.second.cancelDate,third:t.third.hotelName};default:return{first:null,second:null,third:t.third.hotelName}}}var c=e("./node_modules/react/jsx-runtime.js"),W=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}},W=`import React from "react";
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
`,R={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}},N=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},V=function(t){return Object(c.jsx)("div",{children:Y("reservation_purchase_before").secondLineText("2022-12-24T02:24:01.616Z")})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":function(oe,f,e){"use strict";e.r(f),e.d(f,"Default",function(){return V});var K=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts"),F=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),E=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function Y(C){switch(C){case"tour_confirm_before":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_confirm":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_done":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_before":return{enum:C,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(n){if(n){var s=Object(F.a)(n);return s&&s==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":s+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(n){if(n){var s=Object(F.a)(n);return s&&s==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":s+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_done":return{enum:C,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkin_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+n},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"day_n":return{enum:C,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_done":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_checkin_before":return{enum:C,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_change_process":return{enum:C,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before_n":return{enum:C,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};case"checkout_done":return{enum:C,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(n){return n},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(n){return{url:n,arrow:!!n}}};case"tour_cancel":return{enum:C,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_cancel":return{enum:C,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},secondLineText:function(n){return Object(w.a)(Object(E.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};default:return{enum:C,firstLineText:function(){return""},secondLineText:function(){return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}}}}function z(C,t){switch(C){case"checkout_before":case"checkout_before_n":return{first:""+t.first.dDay,second:t.second.endDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:t.second.expectedDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+t.first.dDay,second:t.second.startDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"day_n":return{first:null,second:t.second.endDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:t.second.vBankDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"checkout_done":return{first:null,second:null,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_cancel":case"reservation_cancel":return{first:null,second:t.second.cancelDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};default:return{first:null,second:null,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType}}}var c=e("./node_modules/react/jsx-runtime.js"),W=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}},W=`import React from "react";

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
`,R={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:43},startBody:{col:23,line:35},endBody:{col:1,line:43}}},N=f.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},V=function(t){return Object(c.jsx)("div",{children:Y("reservation_purchase_before").secondLineText("2023-02-08T23:24:01.616Z")})};V.displayName="Default",V.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
}`}},V.parameters)},"./packages/travelmakers-design-utils/src/utils/getCountDown.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return t});var K=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e.n(K),w=e("./node_modules/core-js/modules/es.regexp.to-string.js"),F=e.n(w),E=e("./node_modules/core-js/modules/es.date.to-string.js"),Y=e.n(E),z=e("./node_modules/core-js/modules/es.string.pad-start.js"),c=e.n(z),W=e("./node_modules/core-js/modules/es.string.replace.js"),R=e.n(W),N=e("./node_modules/core-js/modules/es.regexp.exec.js"),V=e.n(N),C=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function t(n){var s="HH\uC2DC\uAC04 mm\uBD84",v=Object(C.f)(n),p=1e3,y=p*60,i=y*60,l=i*24,g=function(){var j=v.toDate().getTime()-Object(C.f)().toDate().getTime(),u={days:"0",hours:"0",minutes:"0",seconds:"0"};return j>0&&(u={days:Math.floor(j/l).toString(),hours:Math.floor(j/i%24).toString(),minutes:Math.floor(j/p/60%60).toString().padStart(2,"0"),seconds:Math.floor(j/p%60).toString().padStart(2,"0")}),!v||!u?"":s.replace("D",u.days).replace("HH",u.hours).replace("mm",u.minutes).replace("ss",u.seconds)};return g()}},"./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts":function(oe,f,e){"use strict";e.d(f,"a",function(){return $}),e.d(f,"b",function(){return w});function K(F){return F<10?"0"+F:F}function $(F,E){var Y=F;return E?Y.month()+1+"\uC6D4 "+Y.date()+"\uC77C "+Y.hour()+":"+K(Y.minute()):Y.month()+1+"\uC6D4 "+Y.date()+"\uC77C "}function w(F){var E=F;return E.month()+1+"\uC6D4 "+E.date()+"\uC77C "+E.hour()+"\uC2DC"}},"./storybook-init-framework-entry.js":function(oe,f,e){"use strict";e.r(f);var K=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,f,e){e("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,f){}},[[0,4,5]]]);
