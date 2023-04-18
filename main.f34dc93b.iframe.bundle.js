(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(oe,m,e){"use strict";e.r(m);var W={};e.r(W),e.d(W,"parameters",function(){return d}),e.d(W,"decorators",function(){return D});var $=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.array.filter.js"),S=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Y=e("./node_modules/core-js/modules/es.array.for-each.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),F=e("./node_modules/core-js/modules/es.object.define-properties.js"),B=e("./node_modules/core-js/modules/es.object.define-property.js"),M=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),A=e("./node_modules/core-js/modules/es.array.is-array.js"),h=e("./node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/core-js/modules/es.object.to-string.js"),n=e("./node_modules/core-js/modules/es.symbol.iterator.js"),r=e("./node_modules/core-js/modules/es.string.iterator.js"),p=e("./node_modules/core-js/modules/es.array.iterator.js"),c=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e("./node_modules/core-js/modules/es.array.slice.js"),o=e("./node_modules/core-js/modules/es.function.name.js"),a=e("./node_modules/core-js/modules/es.array.from.js"),f=e("./node_modules/react/index.js"),y=e("./node_modules/react/jsx-runtime.js");function g(U,R){return _(U)||b(U,R)||x(U,R)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(U,R){if(U){if(typeof U=="string")return C(U,R);var P=Object.prototype.toString.call(U).slice(8,-1);if(P==="Object"&&U.constructor&&(P=U.constructor.name),P==="Map"||P==="Set")return Array.from(U);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return C(U,R)}}function C(U,R){(R==null||R>U.length)&&(R=U.length);for(var P=0,L=new Array(R);P<R;P++)L[P]=U[P];return L}function b(U,R){var P=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(P!=null){var L,K,X,le,ce=[],ee=!0,ie=!1;try{if(X=(P=P.call(U)).next,R===0){if(Object(P)!==P)return;ee=!1}else for(;!(ee=(L=X.call(P)).done)&&(ce.push(L.value),ce.length!==R);ee=!0);}catch(re){ie=!0,K=re}finally{try{if(!ee&&P.return!=null&&(le=P.return(),Object(le)!==le))return}finally{if(ie)throw K}}return ce}}function _(U){if(Array.isArray(U))return U}var T=Object(f.createContext)(null),w=function(){var R=Object(f.useContext)(T);if(!R)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return R},k=function(R){var P=R.colorScheme,L=R.toggleColorScheme,K=R.children,X=Object(f.useState)("init"),le=g(X,2),ce=le[0],ee=le[1];return Object(f.useEffect)(function(){ee("update")},[]),Object(y.jsx)(T.Provider,{value:{colorScheme:P,toggleColorScheme:L},children:K},ce)};k.displayName="ColorSchemeProvider",k.displayName="@travelmakers-design-v2/styles/ColorSchemeProvider";var O=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),j=e("./node_modules/@storybook/theming/dist/esm/index.js"),i=e("./node_modules/storybook-dark-mode/dist/index.js"),d={layout:"fullscreen",docs:{theme:j.themes.light},darkMode:{current:"dark"}};function I(U){var R=Object(i.useDarkMode)()?"dark":"light";return Object(y.jsx)(k,{colorScheme:R,toggleColorScheme:function(){},children:Object(y.jsx)(O.a,{theme:{colorScheme:R},withGlobalStyles:!0,withNormalizeCSS:!0,children:U.children})})}I.displayName="ThemeWrapper";var D=[function(U){return Object(y.jsx)(I,{children:U()})}];function v(U,R){var P=Object.keys(U);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(U);R&&(L=L.filter(function(K){return Object.getOwnPropertyDescriptor(U,K).enumerable})),P.push.apply(P,L)}return P}function E(U){for(var R=1;R<arguments.length;R++){var P=arguments[R]!=null?arguments[R]:{};R%2?v(Object(P),!0).forEach(function(L){H(U,L,P[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(U,Object.getOwnPropertyDescriptors(P)):v(Object(P)).forEach(function(L){Object.defineProperty(U,L,Object.getOwnPropertyDescriptor(P,L))})}return U}function H(U,R,P){return R in U?Object.defineProperty(U,R,{value:P,enumerable:!0,configurable:!0,writable:!0}):U[R]=P,U}Object.keys(W).forEach(function(U){var R=W[U];switch(U){case"args":return Object(M.d)(R);case"argTypes":return Object(M.b)(R);case"decorators":return R.forEach(function(L){return Object(M.f)(L,!1)});case"loaders":return R.forEach(function(L){return Object(M.g)(L,!1)});case"parameters":return Object(M.h)(E({},R),!1);case"argTypesEnhancers":return R.forEach(function(L){return Object(M.c)(L)});case"argsEnhancers":return R.forEach(function(L){return Object(M.e)(L)});case"render":return Object(M.i)(R);case"globals":case"globalTypes":{var P={};return P[U]=R,Object(M.h)(P,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(U+" was not supported :( !")}})},"./generated-stories-entry.js":function(oe,m,e){"use strict";(function(W){var $=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,$.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],W,!1)}).call(this,e("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(oe))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(oe,m,e){var W={"./travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx","./travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx","./travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx","./travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx","./travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx","./travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx","./travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx","./travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx","./travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx","./travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx","./travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx","./travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx","./travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx","./travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx":"./packages/travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx":"./packages/travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx":"./packages/travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx","./travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx","./travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx":"./packages/travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx","./travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx","./travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx":"./packages/travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx","./travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx","./travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx":"./packages/travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx":"./packages/travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx","./travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx","./travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx","./travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx","./travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx"};function $(N){var S=V(N);return e(S)}function V(N){if(!e.o(W,N)){var S=new Error("Cannot find module '"+N+"'");throw S.code="MODULE_NOT_FOUND",S}return W[N]}$.keys=function(){return Object.keys(W)},$.resolve=V,oe.exports=$,$.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx":function(oe,m,e){"use strict";e.d(m,"b",function(){return t}),e.d(m,"a",function(){return n});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(r){return{root:{margin:0}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["gap","type","className","children"];function A(r,p){if(r==null)return{};var c=h(r,p),u,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)u=a[o],!(p.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function h(r,p){if(r==null)return{};var c={},u=Object.keys(r),o,a;for(a=0;a<u.length;a++)o=u[a],!(p.indexOf(o)>=0)&&(c[o]=r[o]);return c}var t=Object(S.createContext)({type:"small",gap:4});t.displayName="AccordionContext";var n=Object(S.forwardRef)(function(r,p){var c=r.gap,u=c===void 0?4:c,o=r.type,a=o===void 0?"small":o,f=r.className,y=r.children,g=A(r,M),l=F(),x=l.classes,C=l.cx;return Object(B.jsx)(t.Provider,{value:{type:a,gap:u},children:Object(B.jsx)(Y.a,Object.assign({component:"dl",ref:p,className:C(x.root,f)},g,{children:y}))})});n.Item=Z.a,n.displayName="Accordion"},"./packages/travelmakers-design-core/src/components/Accordion/Accordion/stories/Accordion.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Small",function(){return M}),e.d(m,"Medium",function(){return A});var W=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.object.assign.js"),N=e.n(V),S=e("./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx"),Y=e("./node_modules/react/jsx-runtime.js"),Z=e.n(Y),s=`
    
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
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,F={Small:{startLoc:{col:21,line:57},endLoc:{col:1,line:71},startBody:{col:21,line:57},endBody:{col:1,line:71}},Medium:{startLoc:{col:22,line:73},endLoc:{col:1,line:87},startBody:{col:22,line:73},endBody:{col:1,line:87}}},s=`import { Meta } from "@storybook/react";
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
`,F={Small:{startLoc:{col:21,line:49},endLoc:{col:1,line:63},startBody:{col:21,line:49},endBody:{col:1,line:63}},Medium:{startLoc:{col:22,line:65},endLoc:{col:1,line:79},startBody:{col:22,line:65},endBody:{col:1,line:79}}};m.default={parameters:{storySource:{source:`
    
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
Medium.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <Accordion type={\\"medium\\"} {...props}>\\n        {accordionData.map((data) => (\\n          <Accordion.Item\\n            key={data.id}\\n            header={data.question}\\n            content={data.answer}\\n          />\\n        ))}\\n      </Accordion>\\n    </div>\\n  );\\n}" }, ...Medium.parameters };`,locationsMap:{small:{startLoc:{col:21,line:57},endLoc:{col:1,line:71},startBody:{col:21,line:57},endBody:{col:1,line:71}},medium:{startLoc:{col:22,line:73},endLoc:{col:1,line:87},startBody:{col:22,line:73},endBody:{col:1,line:87}}}}},title:"@travelmakers-design-v2/core/General/Accoridion/Accordion",component:S.a,argTypes:{type:{control:{type:"radio",options:["small","medium"],default:"small"},description:"Accordion\uC758 \uC0AC\uC774\uC988\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},gap:{description:"Accordion\uB4E4\uC758 \uAC04\uACA9\uC744 \uC870\uC808\uD569\uB2C8\uB2E4.",type:"number",defaultValue:4,table:{type:{summary:"number"}}}}};var B=[{id:1,answer:`\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4.
\uB871\uC2A4\uD14C\uC774\uB780 6\uBC15 \uC774\uC0C1 \uC7A5\uAE30 \uAC70\uC8FC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uBA70 1\uC8FC \uC0B4\uAE30\uBD80\uD130 \uC138 \uB2EC \uC774\uC0C1, \uC6D0\uD558\uB294 \uAE30\uAC04 \uB3D9\uC548 \uD638\uD154\uC5D0\uC11C \uC0B4\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC758 3\uC131\uAE09 \uD638\uD154\uBD80\uD130 5\uC131\uAE09 \uD504\uB9AC\uBBF8\uC5C4 \uD638\uD154\uAE4C\uC9C0, \uD638\uD154\uC5D0\uC0B6\uC5D0\uC11C \uC990\uACA8\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?"},{id:2,answer:`\uCCAB \uBC88\uC9F8, \uB871\uC2A4\uD14C\uC774\uB97C \uC704\uD55C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uD638\uD154\uACFC\uC758 \uD2B9\uBCC4 \uACC4\uC57D\uC744 \uD1B5\uD574 \uD55C \uB2EC \uC0B4\uAE30 \uAE30\uC900, \uAD6D\uB0B4 \uCD5C\uC800\uAC00\uB85C \uC608\uC57D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
\uB450 \uBC88\uC9F8, \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD638\uD154\uC5D0\uC0B6\uC740 \uACE0\uAC1D\uACFC\uC758 \uC2E0\uB8B0\uB97C \uAE30\uBC18\uC73C\uB85C \uD558\uC5EC \uC7A5\uAE30 \uAC70\uC8FC\uC784\uC5D0\uB3C4 \uBCF4\uC99D\uAE08\uACFC \uAD00\uB9AC\uBE44\uB97C \uBC1B\uC9C0 \uC54A\uACE0 \uC7A5\uAE30 \uAC70\uC8FC \uC0C1\uD488\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.
\uC138 \uBC88\uC9F8, \uD638\uD154\uC5D0\uC0B6 \uC774\uC6A9 \uACE0\uAC1D\uC5D0\uAC8C\uB9CC \uC81C\uACF5\uD558\uB294 Only \uD61C\uD0DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC, \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D \uC804\uC6A9 \uB77C\uC6B4\uC9C0, \uC870\uC2DD \uCFE0\uD3F0, \uC804\uC790\uB808\uC778\uC9C0 \uAD6C\uBE44 \uB4F1 \uD638\uD154 \uBCC4\uB85C \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uC2DC\uB294 \uD638\uD154 \uC0C1\uC138 \uD398\uC774\uC9C0\uC5D0 \uB4E4\uC5B4\uAC00\uC154\uC11C \uD655\uC778\uD574 \uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`,question:"\uC7A5\uAE30 \uC219\uBC15\uC744 \uD560 \uB54C \uD638\uD154\uC5D0\uC0B6\uC774 \uC88B\uC740 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"}],M=function(t){return Object(Y.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(Y.jsx)(S.a,Object.assign({},t,{children:B.map(function(n){return Object(Y.jsx)(S.a.Item,{header:n.question,content:n.answer},n.id)})}))})};M.displayName="Small";var A=function(t){return Object(Y.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(Y.jsx)(S.a,Object.assign({type:"medium"},t,{children:B.map(function(n){return Object(Y.jsx)(S.a.Item,{header:n.question,content:n.answer},n.id)})}))})};A.displayName="Medium",M.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},M.parameters),A.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},A.parameters)},"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return j});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.array.is-array.js"),S=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),s=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),r=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),p=e("./packages/travelmakers-design-core/src/components/Accordion/Accordion/Accordion.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),u={small:"40px",medium:"56px"},o={small:"subhead2",medium:"subhead1"},a=function(d,I){switch(I){case"small":return{padding:d.spacing.spacing10+" "+d.spacing.spacing30};case"medium":return{padding:""+d.spacing.spacing30};default:return}},f=Object(c.a)(function(i,d){var I,D=d.type,v=d.gap,E=d.isCollapse,H=E===void 0?!0:E,U=i.colors,R=i.radius,P=i.typography,L=i.spacing;return{item:(I={maxHeight:""+(H?u[D]:"auto"),marginBottom:v+"px",color:""+U.primary1,borderRadius:R.radius20,backgroundColor:U.white,overflow:"hidden"},I["&:last-child"]={marginBottom:0},I),header:Object.assign({display:"flex",alignItems:"center",justifyContent:"space-between",height:u[D]},a(i,D),P[o[D]],{fontWeight:700,cursor:"pointer"}),icon:{transform:""+(!H&&"rotate(180deg)")},detail:{margin:0},divider:{height:"1px",margin:"0 "+L.spacing30,backgroundColor:U.outline},content:Object.assign({margin:0},a(i,D),P[o.small])}}),y=e("./node_modules/react/jsx-runtime.js"),g=["header","content","handleHeader"];function l(i,d){return T(i)||_(i,d)||C(i,d)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(i,d){if(i){if(typeof i=="string")return b(i,d);var I=Object.prototype.toString.call(i).slice(8,-1);if(I==="Object"&&i.constructor&&(I=i.constructor.name),I==="Map"||I==="Set")return Array.from(i);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return b(i,d)}}function b(i,d){(d==null||d>i.length)&&(d=i.length);for(var I=0,D=new Array(d);I<d;I++)D[I]=i[I];return D}function _(i,d){var I=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(I!=null){var D,v,E,H,U=[],R=!0,P=!1;try{if(E=(I=I.call(i)).next,d===0){if(Object(I)!==I)return;R=!1}else for(;!(R=(D=E.call(I)).done)&&(U.push(D.value),U.length!==d);R=!0);}catch(L){P=!0,v=L}finally{try{if(!R&&I.return!=null&&(H=I.return(),Object(H)!==H))return}finally{if(P)throw v}}return U}}function T(i){if(Array.isArray(i))return i}function w(i,d){if(i==null)return{};var I=k(i,d),D,v;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(i);for(v=0;v<E.length;v++)D=E[v],!(d.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(i,D)&&(I[D]=i[D])}return I}function k(i,d){if(i==null)return{};var I={},D=Object.keys(i),v,E;for(E=0;E<D.length;E++)v=D[E],!(d.indexOf(v)>=0)&&(I[v]=i[v]);return I}var O={small:16,medium:24},j=function(d){var I=d.header,D=d.content,v=d.handleHeader,E=w(d,g),H=Object(n.useState)(!0),U=l(H,2),R=U[0],P=U[1],L=Object(n.useContext)(p.b),K=L.type,X=L.gap,le=f({type:K,gap:X,isCollapse:R}),ce=le.classes,ee=le.cx,ie=function(){P(function(de){return!de}),v&&v()};return Object(y.jsxs)("div",Object.assign({className:ce.item},E,{children:[Object(y.jsxs)("dt",{className:ce.header,onClick:ie,children:[I,Object(y.jsx)(r.a,{className:ee(ce.icon),src:"IcAngleDown",width:O[K]})]}),Object(y.jsxs)("dd",{className:ce.detail,children:[Object(y.jsx)("div",{className:ce.divider}),Object(y.jsx)("p",{className:ce.content,children:D})]})]}))};j.displayName="AccordionItem",j.displayName="AccordionItem"},"./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/stories/AccordionItem.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Accordion/AccordionItem/AccordionItem.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:47},startBody:{col:23,line:37},endBody:{col:1,line:47}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:39},startBody:{col:23,line:29},endBody:{col:1,line:39}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ backgroundColor: \\"#EDEDED\\", padding: \\"30px 0\\" }}>\\n      <AccordionItem\\n        header={\\"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?\\"}\\n        content={\\"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4.\\"}\\n        {...props}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:47},startBody:{col:23,line:37},endBody:{col:1,line:47}}}}},title:"@travelmakers-design-v2/core/General/Accoridion/AccordionItem",component:V.a,argTypes:{header:{control:{type:"text"},description:"AccordionItem\uC758 header\uB97C \uAE30\uC785\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}}},content:{control:{type:"text"},description:"AccordionItem\uC758 content\uC744 \uAE30\uC785\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}}}}};var s=function(B){return Object(N.jsx)("div",{style:{backgroundColor:"#EDEDED",padding:"30px 0"},children:Object(N.jsx)(V.a,Object.assign({header:"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?",content:"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."},B))})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <AccordionItem
        header={"\uC624\uB298 \uC810\uC2EC\uC740 \uBB34\uC2A8 \uBA54\uB274\uC778\uAC00\uC694?"}
        content={"\uCD08\uBC25\u{1F363} \uC785\uB2C8\uB2E4."}
        {...props}
      />
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Badge/DotBadge/stories/DotBadge.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return o});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=function(f,y,g){if(y!=="bullet")switch(g){case"small":return f.typography.caption;case"medium":return f.typography.body3;case"large":return f.typography.body2;default:break}},F=function(f,y){switch(y){case"text":return{display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,borderRadius:"6px"};case"number":return{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0 "+f.spacing.spacing10,borderRadius:f.radius.radius100};case"bullet":return{borderRadius:f.radius.radius100};default:break}},B=function(f,y,g){var l={text:{small:{width:"16px",height:"16px"},medium:{width:"20px",height:"20px"},large:{width:"24px",height:"24px"},xLarge:{}},number:{small:{height:"16px"},medium:{height:"20px"},large:{height:"24px"},xLarge:{}},bullet:{small:{width:"8px",height:"8px"},medium:{width:"16px",height:"16px"},large:{width:"20px",height:"20px"},xLarge:{width:"24px",height:"24px"}}};return Object.assign({},l[y][g],F(f,y))},M=Object(Z.a)(function(a,f){var y=f.type,g=f.size,l=a.colors;return{badge:Object.assign({color:l.onError,backgroundColor:l.error},B(a,y,g),s(a,y,g))}}),A=e("./node_modules/react/jsx-runtime.js"),h=["type","size","className","component","label"];function t(a,f){if(a==null)return{};var y=n(a,f),g,l;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(a);for(l=0;l<x.length;l++)g=x[l],!(f.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(a,g)&&(y[g]=a[g])}return y}function n(a,f){if(a==null)return{};var y={},g=Object.keys(a),l,x;for(x=0;x<g.length;x++)l=g[x],!(f.indexOf(l)>=0)&&(y[l]=a[l]);return y}var r=Object(S.forwardRef)(function(a,f){var y=a.type,g=a.size,l=a.className,x=a.component,C=a.label,b=t(a,h);Object(S.useEffect)(function(){y!=="bullet"&&g==="xLarge"&&console.error('"xLarge" size\uB294 type\uC774 "bullet"\uC758 \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.')},[y,g]);var _=M({type:y,size:g}),T=_.classes,w=_.cx,k=function(){return!C&&y==="text"?"N":!C&&y==="number"?0:C};return Object(A.jsx)(Y.a,Object.assign({component:x||"div",ref:f,className:w(T.badge,l)},b,{children:k()}))});r.displayName="DotBadge";var p=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}},p=`import { Meta } from "@storybook/react";
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
`,c={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:36},startBody:{col:23,line:34},endBody:{col:1,line:36}}},u=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <DotBadge type=\\"text\\" size=\\"medium\\" {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}}}},title:"@travelmakers-design-v2/core/General/Badge/DotBadge",component:r,argTypes:{type:{control:{type:"radio",options:["text","number","bullet"]},defaultValue:"text",description:"DagBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","medium","large","xLarge"]},defaultValue:"small",description:"DagBadge\uC758 size\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},o=function(f){return Object(A.jsx)(r,Object.assign({type:"text",size:"medium"},f))};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`(props) => {
  return <DotBadge type="text" size="medium" {...props} />;
}`}},o.parameters)},"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return t});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(n){var r=n.colors,p=n.typography;return{root:Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",color:r.primary3,columnGap:"3px"},p.body3),vertical:{width:"1px",height:"10px",backgroundColor:r.primary3}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["type","grade","hotelType","className"];function A(n,r){if(n==null)return{};var p=h(n,r),c,u;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(u=0;u<o.length;u++)c=o[u],!(r.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(n,c)&&(p[c]=n[c])}return p}function h(n,r){if(n==null)return{};var p={},c=Object.keys(n),u,o;for(o=0;o<c.length;o++)u=c[o],!(r.indexOf(u)>=0)&&(p[u]=n[u]);return p}var t=Object(S.forwardRef)(function(n,r){var p=n.type,c=n.grade,u=n.hotelType,o=n.className,a=A(n,M),f=F(),y=f.classes,g=f.cx,l=function(){if(p==="grade")return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Y.a,{src:"IcStar",width:16,height:16}),c+"\uC131\uAE09",Object(B.jsx)("div",{className:y.vertical}),u!=null?u:"\uD638\uD154"]});if(p==="minihotel")return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Y.a,{src:"IcHotelTypeMini",width:16,height:16}),Object(B.jsx)("div",{className:y.vertical}),u!=null?u:"\uBBF8\uB2C8\uD638\uD154"]});if(p==="residence")return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Y.a,{src:"IcHotelTypeResidence",width:16,height:16}),Object(B.jsx)("div",{className:y.vertical}),u!=null?u:"\uB808\uC9C0\uB358\uC2A4"]})};return Object(B.jsx)(Z.a,Object.assign({component:"div",ref:r,className:g(y.root,o)},a,{children:l()}))});t.displayName="GradeBadge"},"./packages/travelmakers-design-core/src/components/Badge/GradeBadge/stories/GradeBadge.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:48},endLoc:{col:1,line:50},startBody:{col:23,line:48},endBody:{col:1,line:50}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:42},startBody:{col:23,line:40},endBody:{col:1,line:42}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <GradeBadge type={\\"grade\\"} {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:48},endLoc:{col:1,line:50},startBody:{col:23,line:48},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/core/General/Badge/GradeBadge",component:V.a,argTypes:{type:{control:{type:"radio",options:["grade","minihotel","residence"]},defaultValue:"grade",description:"GradeBadge\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},grade:{control:{type:"select",options:[1,2,3,4,5]},defaultValue:5,description:"\uD638\uD154\uC758 \uB4F1\uAE09\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}}},hotelType:{control:{type:"string"},description:"\uD638\uD154\uC758 \uC885\uB958\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var s=function(B){return Object(N.jsx)(V.a,Object.assign({type:"grade"},B))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <GradeBadge type={"grade"} {...props} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Badge/NewBadge/stories/NewBadge.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return o});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F={small:"28px",medium:"34px"},B=Object(s.a)(function(a,f){var y=f.type,g=a.colors,l=a.spacing;return{root:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:F[y],padding:"0 "+l.spacing30,backgroundColor:g.secondary}}}),M=e("./node_modules/react/jsx-runtime.js"),A=["type","className","component","children"];function h(a,f){if(a==null)return{};var y=t(a,f),g,l;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(a);for(l=0;l<x.length;l++)g=x[l],!(f.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(a,g)&&(y[g]=a[g])}return y}function t(a,f){if(a==null)return{};var y={},g=Object.keys(a),l,x;for(x=0;x<g.length;x++)l=g[x],!(f.indexOf(l)>=0)&&(y[l]=a[l]);return y}var n={small:"display6",medium:"display4"},r=Object(S.forwardRef)(function(a,f){var y=a.type,g=a.className,l=a.component,x=a.children,C=h(a,A),b=B({type:y}),_=b.classes,T=b.cx;return Object(M.jsx)(Z.a,Object.assign({component:l||"div",ref:f,className:T(_.root,g)},C,{children:Object(M.jsx)(Y.a,{family:"Noto Serif KR",level:n[y],color:"white",children:x||"New"})}))});r.displayName="NewBadge";var p=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},p=`import { Meta } from "@storybook/react";
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
`,c={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},u=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NewBadge type=\\"small\\" {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design-v2/core/General/Badge/NewBadge",component:r,argTypes:{type:{control:{type:"radio",options:["small","medium"]},defaultValue:"small",description:"\uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},o=function(f){return Object(M.jsx)(r,Object.assign({type:"small"},f))};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`(props) => {
  return <NewBadge type="small" {...props} />;
}`}},o.parameters)},"./packages/travelmakers-design-core/src/components/BottomBar/stories/BottomBar.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Small",function(){return R});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),N=e("./node_modules/core-js/modules/es.array.index-of.js"),S=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),s=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e("./node_modules/core-js/modules/es.array.iterator.js"),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),h=e("./node_modules/core-js/modules/es.array.slice.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/core-js/modules/es.array.map.js"),r=e("./node_modules/core-js/modules/es.function.name.js"),p=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),c=e("./node_modules/react/index.js"),u=e("./node_modules/next/link.js"),o=e.n(u),a=e("./node_modules/react/jsx-runtime.js"),f=function(L){var K;return Object(a.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L,{children:Object(a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77041 12.1824C6.42649 12.4149 6.22223 12.7914 6.22223 13.1928V23.9181C6.22223 24.9452 7.09776 25.7778 8.17779 25.7778H12.8148C13.6739 25.7778 14.3704 25.0813 14.3704 24.2222V22.5185C14.3704 21.6185 15.1 20.8889 16 20.8889C16.9 20.8889 17.6296 21.6185 17.6296 22.5185V24.2222C17.6296 25.0813 18.3261 25.7778 19.1852 25.7778H23.8222C24.9023 25.7778 25.7778 24.9452 25.7778 23.9181V13.1928C25.7778 12.7914 25.5735 12.4149 25.2296 12.1824L16.7555 6.45165C16.3032 6.14576 15.6968 6.14575 15.2445 6.45165L6.77041 12.1824Z",fill:(K=L.color)!==null&&K!==void 0?K:"#BABABA"})}))};f.displayName="IconHome";var y=function(L){var K;return Object(a.jsx)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L,{children:Object(a.jsx)("path",{d:"M20.1893 20.2214L24.8889 24.8889M22.4985 14.7588C22.4985 18.9825 19.0539 22.4064 14.8048 22.4064C10.5557 22.4064 7.11111 18.9825 7.11111 14.7588C7.11111 10.5351 10.5557 7.11111 14.8048 7.11111C19.0539 7.11111 22.4985 10.5351 22.4985 14.7588Z",stroke:(K=L.color)!==null&&K!==void 0?K:"#BABABA","stroke-width":"2","stroke-linecap":"round"})}))};y.displayName="IconSearch";var g=function(L){var K,X;return Object(a.jsxs)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L,{children:[Object(a.jsx)("path",{d:"M7.11112 24.6155C7.11112 24.5764 7.11112 24.5375 7.11112 24.4987C7.11111 23.2776 7.17233 22.0401 7.60385 20.8978C8.7515 17.86 11.4435 15.1111 16 15.1111C20.5565 15.1111 23.2484 17.8599 24.3961 20.8977C24.8277 22.04 24.8889 23.2777 24.8889 24.4988C24.8889 24.5376 24.8889 24.5765 24.8889 24.6155C24.8889 25.2574 24.4519 25.7778 23.9129 25.7778H8.08715C7.5481 25.7778 7.11112 25.2574 7.11112 24.6155Z",fill:(K=L.color)!==null&&K!==void 0?K:"#BABABA"}),Object(a.jsx)("circle",{cx:"16",cy:"9.77778",r:"3.55556",fill:(X=L.color)!==null&&X!==void 0?X:"#BABABA"})]}))};g.displayName="IconMypage";var l=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),x=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),C=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function b(P){if(P==null)throw new TypeError("Cannot destructure "+P)}var _=Object(C.a)(function(P,L,K){var X;return b(L),{root:{backgroundColor:P.colors.neutral99,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:P.spacing.spacing10+" "+P.spacing.spacing50,gap:"80px",height:"64px",width:"100%",a:{textDecoration:"none"}},item:(X={display:"flex",flexDirection:"column",alignItems:"center",height:"48px"},X["& > svg"]={width:"32px",height:"32px"},X)}}),T=["onClick","initSelectedId","children","component","className","overrideStyles","links"];function w(P,L){return d(P)||i(P,L)||O(P,L)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(P,L){if(P){if(typeof P=="string")return j(P,L);var K=Object.prototype.toString.call(P).slice(8,-1);if(K==="Object"&&P.constructor&&(K=P.constructor.name),K==="Map"||K==="Set")return Array.from(P);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return j(P,L)}}function j(P,L){(L==null||L>P.length)&&(L=P.length);for(var K=0,X=new Array(L);K<L;K++)X[K]=P[K];return X}function i(P,L){var K=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(K!=null){var X,le,ce,ee,ie=[],re=!0,de=!1;try{if(ce=(K=K.call(P)).next,L===0){if(Object(K)!==K)return;re=!1}else for(;!(re=(X=ce.call(K)).done)&&(ie.push(X.value),ie.length!==L);re=!0);}catch(pe){de=!0,le=pe}finally{try{if(!re&&K.return!=null&&(ee=K.return(),Object(ee)!==ee))return}finally{if(de)throw le}}return ie}}function d(P){if(Array.isArray(P))return P}function I(P,L){if(P==null)return{};var K=D(P,L),X,le;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(P);for(le=0;le<ce.length;le++)X=ce[le],!(L.indexOf(X)>=0)&&Object.prototype.propertyIsEnumerable.call(P,X)&&(K[X]=P[X])}return K}function D(P,L){if(P==null)return{};var K={},X=Object.keys(P),le,ce;for(ce=0;ce<X.length;ce++)le=X[ce],!(L.indexOf(le)>=0)&&(K[le]=P[le]);return K}var v=Object(c.forwardRef)(function(P,L){var K=P.onClick,X=P.initSelectedId,le=X===void 0?0:X,ce=P.children,ee=P.component,ie=P.className,re=P.overrideStyles,de=P.links,pe=de===void 0?[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}]:de,fe=I(P,T),je=Object(p.c)(),he=Object(c.useState)(le),ve=w(he,2),_e=ve[0],Be=ve[1],De=Object(c.useState)("neutral70"),ke=w(De,2),Pe=ke[0],xe=ke[1],we=Object(c.useState)("neutral70"),Re=w(we,2),Le=Re[0],Ee=Re[1],Se=Object(c.useState)("neutral70"),Ve=w(Se,2),He=Ve[0],We=Ve[1],Ne=[Pe,Le,He],Ue=[xe,Ee,We],Me=_({},{overrideStyles:re,name:"BottomBar"}),Ae=Me.classes,Fe=Me.cx,ae=[{icon:Object(a.jsx)(f,{color:_e===0?je.colors.secondary:je.colors[Pe]})},{icon:Object(a.jsx)(y,{color:_e===1?je.colors.secondary:je.colors[Le]})},{icon:Object(a.jsx)(g,{color:_e===2?je.colors.secondary:je.colors[He]})}],ne=function(Q,J){J!==_e&&Ue[J](Q)};return Object(a.jsx)(x.a,Object.assign({component:ee||"div",ref:L,className:Fe(Ae.root,ie)},fe,{children:ae==null?void 0:ae.map(function(se,Q){return Object(a.jsxs)(o.a,{onClick:function(){Be(Q),K==null||K(Q)},href:pe[Q].url,className:Fe(Ae.item),onMouseOver:function(){return ne("primary",Q)},onMouseLeave:function(){return ne("neutral70",Q)},onMouseDown:function(){return ne("primaryInteract",Q)},onMouseUp:function(){return ne("neutral70",Q)},children:[se.icon,Object(a.jsx)(l.a,{level:"caption",color:_e===Q?"secondary":Ne[Q],children:pe[Q].name})]})})}))});v.displayName="BottomBar";var E=`
    
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



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n}" }, ...Small.parameters };`,H={Small:{startLoc:{col:21,line:68},endLoc:{col:1,line:74},startBody:{col:21,line:68},endBody:{col:1,line:74}}},E=`import {
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
`,H={Small:{startLoc:{col:21,line:60},endLoc:{col:1,line:66},startBody:{col:21,line:60},endBody:{col:1,line:66}}},U=m.default={title:"@travelmakers-design-v2/core/General/BottomBar",component:v,argTypes:{initSelectedId:{defaultValue:0,description:"BottomBar\uC758 \uCD08\uAE30 \uC120\uD0DD \uAC12\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},links:{defaultValue:[{name:"\uB458\uB7EC\uBCF4\uAE30",url:"/"},{name:"\uD0D0\uC0C9",url:"/"},{name:"\uB9C8\uC774\uD398\uC774\uC9C0",url:"/"}],description:"BottomBar\uC758 \uBA54\uB274 \uC774\uB984 \uBC0F url\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}}},parameters:{storySource:{source:`
    
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



Small.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <BottomBar {...props} />\\n    </div>\\n  );\\n}" }, ...Small.parameters };`,locationsMap:{small:{startLoc:{col:21,line:68},endLoc:{col:1,line:74},startBody:{col:21,line:68},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)($.g,{}),Object(a.jsx)($.f,{}),Object(a.jsx)($.b,{}),Object(a.jsx)($.d,{}),Object(a.jsx)($.a,{story:$.c}),Object(a.jsx)($.e,{})]})}}}},R=function(L){return Object(a.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(a.jsx)(v,Object.assign({},L))})};R.displayName="Small",R.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return n});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F={small:28,medium:40,large:48},B=Object(s.a)(function(r,p){var c,u=p.size,o=p.variant,a=p.fullWidth,f=p.roundness,y=r.radius,g=r.spacing,l=r.colors,x=r.palettes,C=r.shadows,b=o==="secondary",_=o==="text";return{root:{width:a&&"100%",height:F[u],padding:_?0:"0 "+g.spacing50,borderRadius:f?y.radius100:y.radius20,cursor:"pointer"},inner:{display:"flex",gap:g.spacing10,alignItems:"center",justifyContent:"center"},icon:{display:"flex",alignItems:"center"},label:{whiteSpace:"nowrap",overflow:"hidden",display:"flex",alignItems:"center"},solid:(c={color:x[o][5],backgroundColor:x[o][0],border:b?"1px solid "+l.primary:"none"},c[":not(:disabled)"]={"&:hover":{boxShadow:_?C.none:C.elevation1,filter:_?"drop-shadow("+C.elevation1+")":C.none},"&:focus-visible":{color:x[o][4],boxShadow:_?C.none:C.elevation1},"&:active":{color:x[o][4],backgroundColor:x[o][1],boxShadow:C.none+" !important"}},c["&:disabled"]={backgroundColor:x[o][2],border:b?"1px solid "+x[o][3]:"none",color:x[o][3],cursor:"auto"},c)}}),M=e("./node_modules/react/jsx-runtime.js"),A=["size","variant","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","children"];function h(r,p){if(r==null)return{};var c=t(r,p),u,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)u=a[o],!(p.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function t(r,p){if(r==null)return{};var c={},u=Object.keys(r),o,a;for(a=0;a<u.length;a++)o=u[a],!(p.indexOf(o)>=0)&&(c[o]=r[o]);return c}var n=Object(S.forwardRef)(function(r,p){var c=r.size,u=c===void 0?"small":c,o=r.variant,a=o===void 0?"primary":o,f=r.roundness,y=f===void 0?!1:f,g=r.fullWidth,l=g===void 0?!1:g,x=r.type,C=x===void 0?"button":x,b=r.disabled,_=b===void 0?!1:b,T=r.leftIcon,w=T===void 0?"":T,k=r.rightIcon,O=k===void 0?"":k,j=r.className,i=r.children,d=h(r,A),I=B({size:u,variant:a,fullWidth:l,roundness:y}),D=I.classes,v=I.cx;return Object(M.jsx)(Z.a,Object.assign({component:"button",ref:p,type:C,disabled:_,className:v(D.root,D.solid,j)},d,{children:Object(M.jsxs)("div",{className:D.inner,children:[w&&Object(M.jsx)("span",{className:v(D.icon),children:w}),Object(M.jsx)(Y.a,{level:u==="small"?"body3":u==="medium"?"body2":"body1",className:D.label,children:i}),O&&Object(M.jsx)("span",{className:v(D.icon),children:O})]})}))});n.displayName="Button"},"./packages/travelmakers-design-core/src/components/Button/Button/stories/Button.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return F});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),N=e("./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx"),S=e("./node_modules/react/jsx-runtime.js"),Y=e.n(S),Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}},Z=`import {
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
`,s={Default:{startLoc:{col:23,line:110},endLoc:{col:1,line:116},startBody:{col:23,line:110},endBody:{col:1,line:116}}};m.default={title:"@travelmakers-design-v2/core/General/Button",component:N.a,argTypes:{size:{defaultValue:"small",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary","error","tonal","text"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: full)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}}},docs:{page:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(V.g,{}),Object(S.jsx)(V.f,{}),Object(S.jsx)(V.b,{}),Object(S.jsx)(V.d,{}),Object(S.jsx)(V.a,{story:V.c}),Object(S.jsx)(V.e,{})]})}},actions:{handles:["click button"]}}};var F=function(M){return Object(S.jsx)("div",{style:{margin:"0 auto"},children:Object(S.jsx)(N.a,Object.assign({},M,{children:"Button"}))})};F.displayName="Default",F.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},F.parameters)},"./packages/travelmakers-design-core/src/components/Button/ButtonIcon/stories/ButtonIcon.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Icon",function(){return g});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),N=e("./node_modules/core-js/modules/es.array.index-of.js"),S=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Z=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),F=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),M,A,h={small:(M={width:"24px",height:"24px"},M["& > svg"]={width:"12px"},M),medium:(A={width:"32px",height:"32px"},A["& > svg"]={width:"16px"},A)},t=Object(B.a)(function(l,x){var C,b=x.size,_=x.variant,T=x.buttonTheme,w=function(d){switch(d){case"active":return O();case"disabled":return j();default:return k()}},k=function(){return _==="secondary"?{backgroundColor:l.colors.transparent,border:"1px solid "+(T==="light"?l.colors.white:l.colors.primary)}:T==="dark"?{backgroundColor:l.colors.primary,border:"none"}:{backgroundColor:l.colors.white,border:"none"}},O=function(){return _==="secondary"?{backgroundColor:l.colors.transparent,border:"1px solid "+(T==="light"?l.colors.surface:l.colors.primaryInteract)}:T==="dark"?{backgroundColor:l.colors.primaryInteract}:{backgroundColor:l.colors.surface}},j=function(){return _==="secondary"?{backgroundColor:l.colors.transparent,border:"1px solid "+l.colors.primaryContainer}:T==="dark"?{backgroundColor:l.colors.primaryContainer}:{backgroundColor:l.colors.primaryContainer}};return{button:Object.assign({},h[b],{borderRadius:l.spacing.spacing100},w("default"),(C={cursor:"pointer"},C[":not(:disabled)"]={"&:hover":{boxShadow:l.shadows.elevation1},"&:focus-visible":{boxShadow:l.shadows.elevation1},"&:active":Object.assign({},w("active"),{boxShadow:"none !important"})},C["&:disabled"]=Object.assign({},w("disabled"),{cursor:"auto"}),C))}}),n=e("./node_modules/react/jsx-runtime.js"),r=["size","variant","disabled","type","buttonTheme","className"];function p(l,x){if(l==null)return{};var C=c(l,x),b,_;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(l);for(_=0;_<T.length;_++)b=T[_],!(x.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(l,b)&&(C[b]=l[b])}return C}function c(l,x){if(l==null)return{};var C={},b=Object.keys(l),_,T;for(T=0;T<b.length;T++)_=b[T],!(x.indexOf(_)>=0)&&(C[_]=l[_]);return C}var u={prev:"\uC774\uC804",next:"\uB2E4\uC74C"},o=Object(Z.forwardRef)(function(l,x){var C=l.size,b=l.variant,_=b===void 0?"primary":b,T=l.disabled,w=l.type,k=l.buttonTheme,O=k===void 0?"dark":k,j=l.className,i=p(l,r),d=t({size:C,variant:_,buttonTheme:O}),I=d.classes,D=d.cx,v=Object(Y.c)(),E=function(U,R,P){if(R==="secondary")if(P){if(U==="dark"||U==="light")return v.colors.primaryContainer}else{if(U==="dark")return v.colors.primary;if(U==="light")return v.colors.white}else{if(P)return v.colors.white;if(U==="dark")return v.colors.white;if(U==="light")return v.colors.primary}};return Object(n.jsx)(F.a,Object.assign({component:"button",ref:x,type:"button",disabled:T,className:D(j,I.button),"aria-label":u[w]},i,{children:w==="prev"?Object(n.jsx)(s.a,{src:"IcAngleLeft",color:E(O,_,T)}):Object(n.jsx)(s.a,{src:"IcAngleRight",color:E(O,_,T)})}))});o.displayName="ButtonIcon";var a=`
    
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



Icon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n}" }, ...Icon.parameters };`,f={Icon:{startLoc:{col:20,line:100},endLoc:{col:1,line:106},startBody:{col:20,line:100},endBody:{col:1,line:106}}},a=`import {
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
`,f={Icon:{startLoc:{col:20,line:92},endLoc:{col:1,line:98},startBody:{col:20,line:92},endBody:{col:1,line:98}}},y=m.default={title:"@travelmakers-design-v2/core/General/Button",component:o,argTypes:{size:{defaultValue:"small",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},buttonTheme:{defaultValue:"light",description:"ButtonIcon \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCEEC\uB7EC\uD14C\uB9C8\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["light","dark"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 ButtonIcon\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},type:{defaultValue:"prev",description:"ButtonIcon\uC758 \uD654\uC0B4\uD45C\uBC29\uD5A5\uC744 \uACB0\uC815\uD55C\uB2E4.",options:["prev","next"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Icon.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>\\n    </div>\\n  );\\n}" }, ...Icon.parameters };`,locationsMap:{icon:{startLoc:{col:20,line:100},endLoc:{col:1,line:106},startBody:{col:20,line:100},endBody:{col:1,line:106}}}},docs:{page:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($.g,{}),Object(n.jsx)($.f,{}),Object(n.jsx)($.b,{}),Object(n.jsx)($.d,{}),Object(n.jsx)($.a,{story:$.c}),Object(n.jsx)($.e,{})]})}},actions:{handles:["click button"]}}},g=function(x){return Object(n.jsx)("div",{style:{margin:"0 auto"},children:Object(n.jsx)(o,Object.assign({},x,{children:"ButtonIcon"}))})};g.displayName="Icon",g.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ButtonIcon {...props}>ButtonIcon</ButtonIcon>
    </div>
  );
}`}},g.parameters)},"./packages/travelmakers-design-core/src/components/Callout/Callout/stories/Callout.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return O}),e.d(m,"CalloutWithoutItems",function(){return j});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),F=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),M=Object(B.a)(function(i,d){var I=d.type,D=i.colors,v=i.typography,E=i.spacing;return{root:Object.assign({display:"flex",alignItems:"center",color:D[r[I]]},v.body3,{fontWeight:700,columnGap:E.spacing10})}}),A=e("./node_modules/react/jsx-runtime.js"),h=["type","title"];function t(i,d){if(i==null)return{};var I=n(i,d),D,v;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(i);for(v=0;v<E.length;v++)D=E[v],!(d.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(i,D)&&(I[D]=i[D])}return I}function n(i,d){if(i==null)return{};var I={},D=Object.keys(i),v,E;for(E=0;E<D.length;E++)v=D[E],!(d.indexOf(v)>=0)&&(I[v]=i[v]);return I}var r={default:"secondary",warning:"error"},p=function(d){var I=d.type,D=d.title,v=t(d,h),E=Object(s.c)(),H=E.colors,U=M({type:I}),R=U.classes,P=U.cx;return Object(A.jsxs)("dt",Object.assign({className:P(R.root)},v,{children:[Object(A.jsx)(F.a,{src:"IcAlert",width:14,height:14,color:H[r[I]]}),D]}))};p.displayName="CalloutHeader",p.displayName="CalloutHeader";var c=Object(B.a)(function(i){var d=i.colors,I=i.typography;return{root:Object.assign({margin:0,color:d.onSurface},I.body3)}}),u=["content","isEmpty"];function o(i,d){if(i==null)return{};var I=a(i,d),D,v;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(i);for(v=0;v<E.length;v++)D=E[v],!(d.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(i,D)&&(I[D]=i[D])}return I}function a(i,d){if(i==null)return{};var I={},D=Object.keys(i),v,E;for(E=0;E<D.length;E++)v=D[E],!(d.indexOf(v)>=0)&&(I[v]=i[v]);return I}var f=function(d){var I=d.content,D=d.isEmpty,v=D===void 0?!1:D,E=o(d,u),H=c(),U=H.classes,R=H.cx;return Object(A.jsx)("dd",Object.assign({className:R(U.root,{"sr-only":v})},E,{children:I}))};f.displayName="CalloutItem";var y=Object(B.a)(function(i){var d=i.spacing,I=i.radius,D=i.colors;return{root:{display:"inline-flex",flexDirection:"column",rowGap:d.spacing10,margin:0,padding:d.spacing30,borderRadius:I.radius20,backgroundColor:D.surface}}}),g=["type","title","items","emptyText","className"];function l(i,d){if(i==null)return{};var I=x(i,d),D,v;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(i);for(v=0;v<E.length;v++)D=E[v],!(d.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(i,D)&&(I[D]=i[D])}return I}function x(i,d){if(i==null)return{};var I={},D=Object.keys(i),v,E;for(E=0;E<D.length;E++)v=D[E],!(d.indexOf(v)>=0)&&(I[v]=i[v]);return I}var C=Object(Y.forwardRef)(function(i,d){var I=i.type,D=I===void 0?"default":I,v=i.title,E=i.items,H=E===void 0?[]:E,U=i.emptyText,R=U===void 0?"":U,P=i.className,L=l(i,g),K=H.length===0,X=y(),le=X.classes,ce=X.cx,ee=K?Object(A.jsx)(f,{content:R,isEmpty:!0}):H.map(function(ie,re){return Object(A.jsx)(f,{content:ie},re)});return Object(A.jsxs)(Z.a,Object.assign({component:"dl",ref:d,className:ce(le.root,P)},L,{children:[Object(A.jsx)(p,{type:D,title:v}),ee]}))});C.displayName="Callout";var b=`
    
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
CalloutWithoutItems.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n}" }, ...CalloutWithoutItems.parameters };`,_={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:62},startBody:{col:23,line:60},endBody:{col:1,line:62}},CalloutWithoutItems:{startLoc:{col:35,line:64},endLoc:{col:1,line:72},startBody:{col:35,line:64},endBody:{col:1,line:72}}},b=`import { Meta } from "@storybook/react";
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
`,_={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:54},startBody:{col:23,line:52},endBody:{col:1,line:54}},CalloutWithoutItems:{startLoc:{col:35,line:56},endLoc:{col:1,line:64},startBody:{col:35,line:56},endBody:{col:1,line:64}}},T={title:"\uD0C0\uC774\uD2C0",items:["\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4."]},w={title:"\uD0C0\uC774\uD2C0(\uCD94\uAC00\uC801\uC778 \uC124\uBA85 \uC5C6\uC74C)",items:[]},k=m.default={parameters:{storySource:{source:`
    
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
CalloutWithoutItems.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Callout\\n      title={dataWithoutItems.title}\\n      items={dataWithoutItems.items}\\n      {...props}\\n    />\\n  );\\n}" }, ...CalloutWithoutItems.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:62},startBody:{col:23,line:60},endBody:{col:1,line:62}},"callout-without-items":{startLoc:{col:35,line:64},endLoc:{col:1,line:72},startBody:{col:35,line:64},endBody:{col:1,line:72}}}}},title:"@travelmakers-design-v2/core/General/Callout",component:C,argTypes:{type:{control:{type:"radio",options:["default","warning"]},defaultValue:"default",description:"Callout\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},title:{type:"string",description:"Callout\uC5D0\uC11C \uC0AC\uC6A9\uB420 title\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.",table:{type:{summary:"string"}}},items:{control:{type:"object"},description:"Callout\uC5D0\uC11C title\uC5D0 \uB300\uD55C \uCD94\uAC00 \uC124\uBA85\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",defaultValue:[],table:{type:{summary:"string[]"}}},emptyText:{type:"string",defaultValue:"",table:{type:{summary:"string"}}}}},O=function(d){return Object(A.jsx)(C,Object.assign({title:T.title},d,{items:T.items}))};O.displayName="Default";var j=function(d){return Object(A.jsx)(C,Object.assign({title:w.title,items:w.items},d))};j.displayName="CalloutWithoutItems",O.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout title={data.title} {...props} items={data.items} />;
}`}},O.parameters),j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <Callout
      title={dataWithoutItems.title}
      items={dataWithoutItems.items}
      {...props}
    />
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Card/CouponCard/stories/CouponCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return o});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(a,f){var y=f.type,g=function(){return{week:{backgroundColor:a.colors.secondary},month:{backgroundColor:a.colors.secondary20},all:{backgroundColor:a.colors.primary}}};return{container:{width:"296px",height:"142px",backgroundColor:a.colors.primary99,borderRadius:a.radius.radius20,overflow:"hidden",display:"flex"},leftBox:Object.assign({},g()[y],{width:"80px",display:"flex",flexDirection:"column",padding:a.spacing.spacing10}),rightBox:{width:"100%",padding:a.spacing.spacing20,display:"flex",flexDirection:"column",gap:a.spacing.spacing5},discountBox:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},checkBox:{backgroundColor:a.colors.primaryContainer,borderRadius:a.radius.radius100,width:16,height:16,display:"flex",justifyContent:"center",alignItems:"center"}}}),B=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),M=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),A=e("./node_modules/react/jsx-runtime.js"),h=["type","state","day","title","subTitle","item","remainingQuantity","content","className"];function t(a,f){if(a==null)return{};var y=n(a,f),g,l;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(a);for(l=0;l<x.length;l++)g=x[l],!(f.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(a,g)&&(y[g]=a[g])}return y}function n(a,f){if(a==null)return{};var y={},g=Object.keys(a),l,x;for(x=0;x<g.length;x++)l=g[x],!(f.indexOf(l)>=0)&&(y[l]=a[l]);return y}var r=Object(Y.forwardRef)(function(a,f){var y=a.type,g=a.state,l=a.day,x=a.title,C=a.subTitle,b=a.item,_=a.remainingQuantity,T=a.content,w=a.className,k=t(a,h),O=F({type:y}),j=O.classes,i=O.cx,d=Object(S.c)(),I={week:"Week",month:"Month",all:"All"},D=function(H,U){var R=H!=null?H:"\uC804\uCCB4",P=" | \uC794\uC5EC "+U+"\uAC1C";return U?R+" "+P:R},v=function(H){switch(H){case"applied":return Object(A.jsx)(B.a,{level:"body3",color:"primary3",children:"\uC801\uC6A9\uC911"});case"checked":return Object(A.jsx)("div",{className:j.checkBox,children:Object(A.jsx)(M.a,{src:"IcCheck",width:12,height:12,color:d.colors.white})});default:return null}};return Object(A.jsxs)(Z.a,Object.assign({component:"div",ref:f,className:i(w,j.container)},k,{children:[Object(A.jsxs)("div",{className:j.leftBox,children:[Object(A.jsx)(B.a,{level:"display2",color:"white",children:l}),Object(A.jsx)(B.a,{family:"Noto Serif KR",level:"body1",color:"white",children:I[y]})]}),Object(A.jsxs)("div",{className:j.rightBox,children:[Object(A.jsxs)("div",{className:j.discountBox,children:[Object(A.jsx)("div",{children:Object(A.jsx)(B.a,{level:"display6",color:"secondary",children:x})}),Object(A.jsx)("div",{children:v(g)})]}),Object(A.jsx)(B.a,{level:"body3",color:"primary",children:C}),Object(A.jsx)(B.a,{level:"caption",color:"errorInteract",children:D(b,_)}),Object(A.jsx)(B.a,{level:"caption",color:"primary3",style:{whiteSpace:"pre-line"},children:T})]})]}))});r.displayName="CouponCard";var p=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CouponCard {...props} />;\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:92},endLoc:{col:1,line:94},startBody:{col:23,line:92},endBody:{col:1,line:94}}},p=`import { Meta } from "@storybook/react";
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
`,c={Default:{startLoc:{col:23,line:84},endLoc:{col:1,line:86},startBody:{col:23,line:84},endBody:{col:1,line:86}}},u=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CouponCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:92},endLoc:{col:1,line:94},startBody:{col:23,line:92},endBody:{col:1,line:94}}}}},title:"@travelmakers-design-v2/core/General/Card/CouponCard",component:r,argTypes:{type:{defaultValue:"week",description:"CouponCard\uC758 Type\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["week","month","all"],control:{type:"inline-radio"}},state:{defaultValue:"default",description:"CouponCard\uC758 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",options:["default","applied","checked"],control:{type:"inline-radio"}},day:{defaultValue:1,description:"CouponCard\uC758 day\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},title:{defaultValue:"00%",description:"CouponCard\uC758 \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},subTitle:{defaultValue:"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",description:"CouponCard\uC758 \uC11C\uBE0C \uD0C0\uC774\uD2C0\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},item:{defaultValue:"\uC801\uC6A9 \uC0C1\uD488",description:"CouponCard\uC758 \uC801\uC6A9\uC0C1\uD488 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},remainingQuantity:{defaultValue:5,description:"CouponCard\uC758 \uC794\uC5EC\uC218\uB7C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},content:{defaultValue:`*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C
 *\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C
 *\uCFE0\uD3F0\uC0AC\uC6A9\uC548\uB0B4 \uBB38\uAD6C \uC548\uB0B4 \uBB38\uAD6C`,description:"CouponCard\uC758 \uB0B4\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},o=function(f){return Object(A.jsx)(r,Object.assign({},f))};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`(props) => {
  return <CouponCard {...props} />;
}`}},o.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelCard/stories/HotelCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return U});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.array.is-array.js"),S=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),s=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/core-js/modules/es.symbol.js"),t=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.array.map.js"),r=e("./node_modules/react/index.js"),p=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),c=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),u=Object(c.a)(function(R,P){var L,K,X,le=P.rightArrowHover,ce=P.leftArrowHover;return{container:(L={width:"328px",display:"inline-block",boxShadow:R.shadows.elevation2,borderRadius:R.radius.radius20,overflow:"hidden"},L["& > a"]={textDecoration:"none"},L),imageBox:(X={position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"end",height:"183px"},X["& > img"]=(K={position:"absolute",transition:"all 0.2s cubic-bezier(0, 0, 0.5, 1)"},K["&:hover"]={width:"110%",height:"110%"},K),X),content:{display:"flex",flexDirection:"column",gap:R.spacing.spacing30,padding:R.spacing.spacing30},contentHeader:{display:"flex",flexDirection:"column",gap:R.spacing.spacing5},contentTag:{position:"relative",display:"flex",flexDirection:"column",overflowY:"hidden"},contentScroll:{position:"absolute",width:"32px",height:"32px",top:"50%",transform:"translate(-50%, -50%)",background:R.colors.white,border:"1px solid "+R.colors.white,boxShadow:"0px 2px 10px rgba(48, 55, 63, 0.2)",borderRadius:R.radius.radius100,padding:"6px"},contentScrollLeft:{left:R.spacing.spacing30,visibility:ce?"visible":"hidden"},contentScrollRight:{right:R.spacing.spacing5,visibility:le?"visible":"hidden"},contentScrollContainer:{display:"flex",flexDirection:"row",overflowY:"hidden",gap:R.spacing.spacing10},contentDimmer:{position:"absolute",right:0,width:"40px",height:"100%",background:"linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 51.04%, rgba(255, 255, 255, 0) 100%)"},flexBox:{display:"flex",justifyContent:"space-between",gap:R.spacing.spacing5},soldOutBox:{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0}}}),o=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),a=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),f=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),y=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),g=e("./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx"),l=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),x=e("./node_modules/next/link.js"),C=e.n(x),b=e("./node_modules/react/jsx-runtime.js"),_=["name","description","type","star","src","href","price","isCoupon","disabled","className"];function T(R,P){return i(R)||j(R,P)||k(R,P)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(R,P){if(R){if(typeof R=="string")return O(R,P);var L=Object.prototype.toString.call(R).slice(8,-1);if(L==="Object"&&R.constructor&&(L=R.constructor.name),L==="Map"||L==="Set")return Array.from(R);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return O(R,P)}}function O(R,P){(P==null||P>R.length)&&(P=R.length);for(var L=0,K=new Array(P);L<P;L++)K[L]=R[L];return K}function j(R,P){var L=R==null?null:typeof Symbol!="undefined"&&R[Symbol.iterator]||R["@@iterator"];if(L!=null){var K,X,le,ce,ee=[],ie=!0,re=!1;try{if(le=(L=L.call(R)).next,P===0){if(Object(L)!==L)return;ie=!1}else for(;!(ie=(K=le.call(L)).done)&&(ee.push(K.value),ee.length!==P);ie=!0);}catch(de){re=!0,X=de}finally{try{if(!ie&&L.return!=null&&(ce=L.return(),Object(ce)!==ce))return}finally{if(re)throw X}}return ee}}function i(R){if(Array.isArray(R))return R}function d(R,P){if(R==null)return{};var L=I(R,P),K,X;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(R);for(X=0;X<le.length;X++)K=le[X],!(P.indexOf(K)>=0)&&Object.prototype.propertyIsEnumerable.call(R,K)&&(L[K]=R[K])}return L}function I(R,P){if(R==null)return{};var L={},K=Object.keys(R),X,le;for(le=0;le<K.length;le++)X=K[le],!(P.indexOf(X)>=0)&&(L[X]=R[X]);return L}var D=Object(r.forwardRef)(function(R,P){var L,K=R.name,X=R.description,le=R.type,ce=R.star,ee=R.src,ie=R.href,re=ie===void 0?"":ie,de=R.price,pe=de===void 0?[]:de,fe=R.isCoupon,je=R.disabled,he=je===void 0?!1:je,ve=R.className,_e=d(R,_),Be=0,De=((L=pe==null?void 0:pe.length)!==null&&L!==void 0?L:1)-1,ke=Object(r.useState)(Be),Pe=T(ke,2),xe=Pe[0],we=Pe[1],Re=Object(r.useState)(!1),Le=T(Re,2),Ee=Le[0],Se=Le[1],Ve=Object(r.useState)(!1),He=T(Ve,2),We=He[0],Ne=He[1],Ue=Object(r.useRef)(null),Me=Object(r.useRef)(null),Ae=Object(r.useRef)([]),Fe=u({leftArrowHover:Ee,rightArrowHover:We}),ae=Fe.classes,ne=Fe.cx;function se(te){var ue=te==="left",ge=J(ue),be=ue?xe-ge:xe+ge;ge!==0&&(Q(ue,be),we(be),q(be))}function Q(te,ue){te?(Se(ue>Be),Ne(!0)):(Se(!0),Ne(ue<De))}function J(te){var ue=2;if(te){var ge;if(xe<=Be)return 0;var be=(ge=Ae.current)===null||ge===void 0?void 0:ge[xe-1];return!be||xe-1===0?1:ue}else{var Te;if(xe>=De)return 0;var Oe=(Te=Ae.current)===null||Te===void 0?void 0:Te[xe+ue];return Oe?xe===0?3:ue:1}}function q(te){var ue;(ue=Ae.current)===null||ue===void 0||ue[te].scrollIntoView({behavior:"smooth",block:"center"})}return Object(b.jsx)(p.a,Object.assign({component:"div",ref:P,className:ne(ve,ae.container)},_e,{children:Object(b.jsxs)(C.a,{href:re,children:[Object(b.jsxs)("div",{className:ne(ae.imageBox),children:[Object(b.jsx)(o.a,{src:ee,alt:"hotelCard",width:"100%",height:"100%"}),he&&Object(b.jsxs)("div",{className:ne(ae.soldOutBox),children:[Object(b.jsx)(a.a,{color:"white",level:"display4",strong:!0,children:"Sold Out"}),Object(b.jsx)(a.a,{color:"white",level:"body2",children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})]}),Object(b.jsxs)("div",{className:ne(ae.content),children:[Object(b.jsxs)("div",{className:ne(ae.contentHeader),children:[Object(b.jsx)(a.a,{level:"subhead2",strong:!0,color:he?"primary4":"onBackground",children:K}),Object(b.jsxs)("div",{className:ne(ae.flexBox),children:[Object(b.jsx)(f.a,{grade:ce,type:le}),fe&&!he&&Object(b.jsx)(y.a,{label:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",type:"line"})]}),Object(b.jsx)(a.a,{level:"caption",color:"primary3",children:X})]}),Object(b.jsxs)("div",{className:ne(ae.contentTag),onMouseEnter:function(){xe!==0&&Se(!0),xe<De&&Ne(!0)},onMouseMove:function(){he||(Se(xe!==0),xe<De?Ne(!0):Ne(!1))},onMouseLeave:function(){Se(!1),Ne(!1)},children:[Object(b.jsx)("div",{className:ne(ae.contentDimmer)}),Object(b.jsx)("div",{ref:Ue,className:ne(ae.contentScroll,ae.contentScrollLeft),onClick:function(ue){ue.preventDefault(),se("left")},children:Object(b.jsx)(l.a,{src:"IcAngleLeft",width:16,height:16})}),Object(b.jsx)("div",{ref:Me,className:ne(ae.contentScroll,ae.contentScrollRight),onClick:function(ue){ue.preventDefault(),se("right")},children:Object(b.jsx)(l.a,{src:"IcAngleRight",width:16,height:16})}),Object(b.jsx)("div",{className:ne(ae.contentScrollContainer),children:pe==null?void 0:pe.map(function(te,ue){return Object(b.jsx)(g.a,{ref:function(be){return Ae.current[ue]=be},name:te.name,status:he?"disabled":te.status,description:te.description},"price-card-"+te.name)})})]})]})]})}))});D.displayName="HotelCard";var v=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelCard {...props} />;\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:131},endLoc:{col:1,line:133},startBody:{col:23,line:131},endBody:{col:1,line:133}}},v=`import { Meta } from "@storybook/react";
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
`,E={Default:{startLoc:{col:23,line:123},endLoc:{col:1,line:125},startBody:{col:23,line:123},endBody:{col:1,line:125}}},H=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:131},endLoc:{col:1,line:133},startBody:{col:23,line:131},endBody:{col:1,line:133}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelCard",component:D,argTypes:{href:{defaultValue:"#",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},name:{defaultValue:"\uC11C\uC6B8 \uB4DC\uB798\uACE4 \uC2DC\uD2F0 - \uC774\uBE44\uC2A4 \uC2A4\uD0C0\uC77C \uC570\uBC30\uC11C\uB354 \uC11C\uC6B8 \uC6A9\uC0B0",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC81C\uC8FC \uC11C\uADC0\uD3EC \uACF5\uD56D \uCC28\uB7C9 10\uBD84 \uAC70\uB9AC",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},src:{defaultValue:"https://picsum.photos/600/400",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},price:{defaultValue:[{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]},{status:"active",name:"name",description:"description",tag:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"]}],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}},isCoupon:{defaultValue:!0,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},U=function(P){return Object(b.jsx)(D,Object.assign({},P))};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelCard {...props} />;
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelFeaturedCard/stories/HotelFeaturedCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return x});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.map.js"),Z=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(C){var b,_,T;return{container:(b={width:"328px",display:"inline-block"},b["& > a"]={textDecoration:"none"},b),cardBox:{position:"relative",background:C.colors.white,borderRadius:C.radius.radius20,padding:"165px "+C.spacing.spacing30+" "+C.spacing.spacing30,filter:"drop-shadow("+C.shadows.elevation2+")"},imageBox:(T={position:"absolute",top:-27,display:"flex",justifyContent:"center",alignItems:"end",overflow:"hidden",borderRadius:C.radius.radius20,width:"296px",height:"180px"},T["& > img"]=(_={position:"absolute",transition:"all 0.2s cubic-bezier(0, 0, 0.5, 1)"},_["&:hover"]={width:"110%",height:"110%"},_),T),imageLabel:{position:"absolute",left:C.spacing.spacing30,top:-4},contentBox:{display:"flex",flexDirection:"column",gap:C.spacing.spacing20,"& > ul":{gap:C.spacing.spacing5}},hotelInfo:{display:"flex",alignItems:"center",gap:C.spacing.spacing5},divider:{backgroundColor:C.colors.outline,height:"1px"}}}),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),A=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),h=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),t=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),n=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),r=e("./node_modules/next/link.js"),p=e.n(r),c=e("./node_modules/react/jsx-runtime.js"),u=["href","type","star","src","labels","name","coupons","timelineTags","price","className"];function o(C,b){if(C==null)return{};var _=a(C,b),T,w;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(C);for(w=0;w<k.length;w++)T=k[w],!(b.indexOf(T)>=0)&&Object.prototype.propertyIsEnumerable.call(C,T)&&(_[T]=C[T])}return _}function a(C,b){if(C==null)return{};var _={},T=Object.keys(C),w,k;for(k=0;k<T.length;k++)w=T[k],!(b.indexOf(w)>=0)&&(_[w]=C[w]);return _}var f=Object(Z.forwardRef)(function(C,b){var _=C.href,T=_===void 0?"":_,w=C.type,k=w===void 0?"grade":w,O=C.star,j=C.src,i=C.labels,d=i===void 0?[]:i,I=C.name,D=C.coupons,v=C.timelineTags,E=C.price,H=C.className,U=o(C,u),R=F(),P=R.classes,L=R.cx;return Object(c.jsx)(B.a,Object.assign({component:"div",ref:b,className:L(H,P.container)},U,{children:Object(c.jsx)(p.a,{href:T,children:Object(c.jsxs)("div",{className:L(P.cardBox),children:[Object(c.jsxs)("div",{className:L(P.imageBox),children:[Object(c.jsx)(A.a,{src:j,alt:"featureCard-"+I,width:"100%",height:"100%"}),Object(c.jsx)("div",{className:L(P.imageLabel),children:Object(c.jsx)(h.a,{type:"fill",children:d==null?void 0:d.map(function(K,X){return Object(c.jsx)(h.a.Item,{label:K,colorIdx:X})})})})]}),Object(c.jsxs)("div",{className:L(P.contentBox),children:[Object(c.jsx)(h.a,{type:"line",color:"gray",roundness:"half",children:v.map(function(K){return Object(c.jsx)(h.a.Item,{label:K})})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(t.a,{level:"body2",color:"black",children:I}),Object(c.jsx)("div",{className:L(P.hotelInfo),children:Object(c.jsx)(n.a,{grade:O,type:k})})]}),Object(c.jsx)("div",{className:L(P.divider)}),Object(c.jsxs)("div",{children:[Object(c.jsx)(M.a,Object.assign({},E,{type:"secondary"})),Object(c.jsx)(M.a,Object.assign({},E,{type:"primary"}))]})]})]})})}))});f.displayName="HotelFeaturedCard";var y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:107},endLoc:{col:1,line:113},startBody:{col:23,line:107},endBody:{col:1,line:113}}},y=`import { Meta } from "@storybook/react";
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
`,g={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:105},startBody:{col:23,line:99},endBody:{col:1,line:105}}},l=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 50 }}>\\n      <HotelFeaturedCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:107},endLoc:{col:1,line:113},startBody:{col:23,line:107},endBody:{col:1,line:113}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelFeaturedCard",component:f,argTypes:{href:{defaultValue:"#",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},name:{defaultValue:"\uD638\uD154\uBA85",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},timelineTags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:1,priceText:1e4,priceStartText:"1\uBC15 100,000\uC6D0\uBD80\uD130",isCoupon:!0},description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}}}},x=function(b){return Object(c.jsx)("div",{style:{margin:50},children:Object(c.jsx)(f,Object.assign({},b))})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 50 }}>
      <HotelFeaturedCard {...props} />
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelReviewCard/stories/HotelReviewCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return g});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(l){var x,C,b;return{container:(x={width:"328px",backgroundColor:l.colors.white,borderRadius:l.radius.radius20},x["& > a"]={textDecoration:"none"},x),contentContainer:{padding:l.spacing.spacing30,display:"flex",flexDirection:"column",gap:l.spacing.spacing10},contentBox:(b={display:"flex",alignItems:"center",justifyContent:"space-between",gap:l.spacing.spacing30},b["& >  span"]=(C={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box"},C["-webkit-box-orient"]="vertical",C["-webkit-line-clamp"]="2",C),b),headerBox:{display:"flex",alignItems:"center",justifyContent:"space-between"},footerBox:{display:"flex",gap:l.spacing.spacing10},divider:{backgroundColor:l.colors.outline,height:"1px"}}}),B=e("./node_modules/next/link.js"),M=e.n(B),A=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),h=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),t=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),n=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),r=e("./node_modules/react/jsx-runtime.js"),p=["href","src","labels","contents","writer","product","className"];function c(l,x){if(l==null)return{};var C=u(l,x),b,_;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(l);for(_=0;_<T.length;_++)b=T[_],!(x.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(l,b)&&(C[b]=l[b])}return C}function u(l,x){if(l==null)return{};var C={},b=Object.keys(l),_,T;for(T=0;T<b.length;T++)_=b[T],!(x.indexOf(_)>=0)&&(C[_]=l[_]);return C}var o=Object(Y.forwardRef)(function(l,x){var C=l.href,b=C===void 0?"":C,_=l.src,T=l.labels,w=T===void 0?[]:T,k=l.contents,O=l.writer,j=l.product,i=l.className,d=c(l,p),I=F(),D=I.classes,v=I.cx;return Object(r.jsx)(Z.a,Object.assign({component:"div",ref:x,className:v(i,D.container)},d,{children:Object(r.jsx)(M.a,{href:b,children:Object(r.jsxs)("div",{className:D.contentContainer,children:[Object(r.jsxs)("div",{className:D.headerBox,children:[Object(r.jsx)(A.a,{level:"body3",color:"primary3",children:"\uC774\uB7F0 \uC810\uC774 \uC88B\uC558\uC5B4\uC694."}),Object(r.jsx)(n.a,{src:"IcAngleRight",width:16,height:16})]}),w.length>0&&Object(r.jsx)(h.a,{type:"fill",roundness:"half",color:"gray",gap:4,children:w==null?void 0:w.map(function(E){return Object(r.jsx)(h.a.Item,{label:E})})}),Object(r.jsxs)("div",{className:D.contentBox,children:[Object(r.jsx)(A.a,{level:"body2",color:"primary1",children:k}),_&&Object(r.jsx)(t.a,{src:_,alt:"hotel-review-card",width:40,height:40})]}),Object(r.jsx)("div",{className:D.divider}),Object(r.jsxs)("div",{className:D.footerBox,children:[Object(r.jsx)(A.a,{level:"body3",color:"primary1",children:O}),Object(r.jsx)(A.a,{level:"body3",color:"primary3",children:j})]})]})})}))});o.displayName="HotelReviewCard";var a=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelReviewCard {...props} />;\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:72},endLoc:{col:1,line:74},startBody:{col:23,line:72},endBody:{col:1,line:74}}},a=`import { Meta } from "@storybook/react";
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
`,f={Default:{startLoc:{col:23,line:64},endLoc:{col:1,line:66},startBody:{col:23,line:64},endBody:{col:1,line:66}}},y=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelReviewCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:72},endLoc:{col:1,line:74},startBody:{col:23,line:72},endBody:{col:1,line:74}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelReviewCard",component:o,argTypes:{href:{defaultValue:"#",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD074\uB9AD\uD558\uC5EC \uC774\uB3D9\uD560 \uACBD\uB85C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},contents:{defaultValue:"\uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4.\uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694. \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},writer:{defaultValue:"\uAE40OO\uB2D8\uC758 \uB9AC\uBDF0",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},product:{defaultValue:"\uC0C1\uD488 \uC635\uC158 : \uD55C\uB2EC\uC0B4\uAE30",description:"HotelFeaturedCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uCE6D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},g=function(x){return Object(r.jsx)(o,Object.assign({},x))};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelReviewCard {...props} />;
}`}},g.parameters)},"./packages/travelmakers-design-core/src/components/Card/HotelTitleCard/stories/HotelTitleCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return g});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(l){var x;return{container:(x={width:"328px",backgroundColor:l.colors.white,borderRadius:l.radius.radius20,padding:l.spacing.spacing50+" "+l.spacing.spacing30,display:"flex",flexDirection:"column",gap:l.spacing.spacing30},x["& > a"]={textDecoration:"none"},x),divider:{backgroundColor:l.colors.outline,height:"1px"},currencyContainer:{display:"flex",flexDirection:"column",gap:l.spacing.spacing5},currencyBox:{display:"flex",flexDirection:"row",alignItems:"center",gap:l.spacing.spacing5}}}),B=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),M=e("./packages/travelmakers-design-core/src/components/Badge/GradeBadge/GradeBadge.tsx"),A=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),h=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),t=function(x){return x.toLocaleString("ko-KR")},n=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),r=e("./node_modules/react/jsx-runtime.js"),p=["type","star","groupTags","tags","isCoupon","price","className"];function c(l,x){if(l==null)return{};var C=u(l,x),b,_;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(l);for(_=0;_<T.length;_++)b=T[_],!(x.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(l,b)&&(C[b]=l[b])}return C}function u(l,x){if(l==null)return{};var C={},b=Object.keys(l),_,T;for(T=0;T<b.length;T++)_=b[T],!(x.indexOf(_)>=0)&&(C[_]=l[_]);return C}var o=Object(Y.forwardRef)(function(l,x){var C=l.type,b=l.star,_=l.groupTags,T=_===void 0?[]:_,w=l.tags,k=w===void 0?[]:w,O=l.isCoupon,j=O===void 0?!1:O,i=l.price,d=l.className,I=c(l,p),D=F(),v=D.classes,E=D.cx;return Object(r.jsxs)(Z.a,Object.assign({component:"div",ref:x,className:E(d,v.container)},I,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(B.a,{level:"display6",color:"primary1",strong:!0,children:"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"})}),Object(r.jsx)("div",{children:Object(r.jsx)(M.a,{grade:b,type:C})}),T.length>0&&Object(r.jsx)("div",{children:Object(r.jsx)(A.a,{type:"line",color:"gray",roundness:"half",gap:4,children:T.map(function(H){return Object(r.jsx)(A.a.Item,{label:H})})})})]}),Object(r.jsx)("div",{className:E(v.divider)}),Object(r.jsxs)("div",{className:v.currencyContainer,children:[Object(r.jsxs)("div",{className:v.currencyBox,children:[Object(r.jsx)(B.a,{level:"body3",color:"primary1",children:"\uC815\uAC00"}),Object(r.jsxs)(B.a,{level:"body3",color:"primary1",children:[t(1e6),"\uC6D0"]}),j&&Object(r.jsx)(h.a,{label:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",type:"fill"})]}),Object(r.jsx)(n.a,Object.assign({},i,{type:"primary"})),Object(r.jsx)(B.a,{level:"caption",color:"primary3",children:"\uC138\uAE08 \uBC0F \uBD09\uC0AC\uB8CC \uD3EC\uD568"})]}),Object(r.jsx)(A.a,{type:"fill",color:"gray",roundness:"half",gap:4,children:k.map(function(H){return Object(r.jsx)(A.a.Item,{label:H})})})]}))});o.displayName="HotelTitleCard";var a=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelTitleCard {...props} />;\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}},a=`import { Meta } from "@storybook/react";
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
`,f={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:80},startBody:{col:23,line:78},endBody:{col:1,line:80}}},y=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HotelTitleCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}}}},title:"@travelmakers-design-v2/core/General/Card/HotelTitleCard",component:o,argTypes:{type:{defaultValue:"grade",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["grade","minihotel","residence"],control:{type:"inline-radio"}},star:{defaultValue:5,description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC774 default\uC77C \uACBD\uC6B0 \uBA87\uC131\uD638\uD154\uC778\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},groupTags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},tags:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB0B4 \uD558\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},isCoupon:{defaultValue:!0,description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:1,priceText:1e4,priceStartText:"1\uBC15 100,000\uC6D0\uBD80\uD130",isCoupon:!0},description:"HotelTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}}}},g=function(x){return Object(r.jsx)(o,Object.assign({},x))};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`(props) => {
  return <HotelTitleCard {...props} />;
}`}},g.parameters)},"./packages/travelmakers-design-core/src/components/Card/MainReviewCard/stories/MainReviewCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return u});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=Object(Z.a)(function(o){var a,f;return{container:{position:"relative",width:"304px",height:"200px",backgroundColor:o.colors.white,borderRadius:o.radius.radius20,filter:"drop-shadow("+o.shadows.elevation2+")"},imageContainer:(a={width:"92px",height:"122px",position:"absolute",top:16,left:-16},a["& > img"]={borderRadius:o.radius.radius20},a),content:{padding:o.spacing.spacing30+" "+o.spacing.spacing30+" "+o.spacing.spacing30+" 92px",display:"flex",flexDirection:"column",gap:o.spacing.spacing20},contentText:(f={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box"},f["-webkit-box-orient"]="vertical",f["-webkit-line-clamp"]="4",f)}}),F=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),B=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),M=e("./node_modules/react/jsx-runtime.js"),A=["src","title","job","content","className"];function h(o,a){if(o==null)return{};var f=t(o,a),y,g;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);for(g=0;g<l.length;g++)y=l[g],!(a.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(o,y)&&(f[y]=o[y])}return f}function t(o,a){if(o==null)return{};var f={},y=Object.keys(o),g,l;for(l=0;l<y.length;l++)g=y[l],!(a.indexOf(g)>=0)&&(f[g]=o[g]);return f}var n=Object(S.forwardRef)(function(o,a){var f=o.src,y=o.title,g=o.job,l=o.content,x=o.className,C=h(o,A),b=s(),_=b.classes,T=b.cx;return Object(M.jsxs)(Y.a,Object.assign({component:"div",ref:a,className:T(x,_.container)},C,{children:[Object(M.jsx)("div",{className:T(_.imageContainer),children:Object(M.jsx)(F.a,{src:f,alt:"",width:"100%",height:"100%"})}),Object(M.jsxs)("div",{className:T(_.content),children:[Object(M.jsxs)("div",{children:[Object(M.jsx)(B.a,{level:"body3",color:"secondary1",children:y}),Object(M.jsx)("div",{style:{marginTop:"-5px"},children:Object(M.jsx)(B.a,{level:"body2",color:"primary2",children:g})})]}),Object(M.jsx)("div",{className:T(_.contentText),children:Object(M.jsx)(B.a,{level:"body2",color:"primary1",children:l})})]})]}))});n.displayName="MainReviewCard";var r=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}},r=`import { Meta } from "@storybook/react";
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
`,p={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:58},startBody:{col:23,line:52},endBody:{col:1,line:58}}},c=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/core/General/Card/MainReviewCard",component:n,argTypes:{title:{defaultValue:"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},job:{defaultValue:"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},content:{defaultValue:"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 content\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},src:{defaultValue:"https://picsum.photos/600/400",description:"MainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},u=function(a){return Object(M.jsx)("div",{style:{margin:40},children:Object(M.jsx)(n,Object.assign({},a))})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 40 }}>
      <MainReviewCard {...props} />
    </div>
  );
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/Card/OptionCard/stories/OptionCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return y});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(g){var l,x;return{card:{width:"281px",backgroundColor:g.colors.white,boxShadow:g.shadows.elevation3,borderRadius:g.radius.radius20},container:{padding:g.spacing.spacing30+" "+g.spacing.spacing50,display:"flex",flexDirection:"column",gap:g.spacing.spacing20,minHeight:"395px"},divider:{height:1,backgroundColor:g.colors.primary},headerGroup:{minHeight:52,display:"flex",flexDirection:"column",justifyContent:"end"},groupBox:(l={display:"flex",flexDirection:"column",gap:g.spacing.spacing5},l["& > ul"]={margin:0,paddingInlineStart:"30px",paddingBottom:g.spacing.spacing20},l),titleBox:{display:"flex",justifyContent:"space-between"},priceBox:(x={},x["& > div"]={justifyContent:"end"},x),submitButton:{borderRadius:"0 0 "+g.radius.radius20+" "+g.radius.radius20}}}),B=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),M=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),A=e("./packages/travelmakers-design-core/src/components/Button/Button/Button.tsx"),h=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),t=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),n=e("./node_modules/react/jsx-runtime.js"),r=["isMore","labels","headTitle","footerTitle","optionName","isDuration","minNight","maxNight","roomType","benefitList","price","buttonName","onClick","className"];function p(g,l){if(g==null)return{};var x=c(g,l),C,b;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(g);for(b=0;b<_.length;b++)C=_[b],!(l.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(g,C)&&(x[C]=g[C])}return x}function c(g,l){if(g==null)return{};var x={},C=Object.keys(g),b,_;for(_=0;_<C.length;_++)b=C[_],!(l.indexOf(b)>=0)&&(x[b]=g[b]);return x}var u=Object(Y.forwardRef)(function(g,l){var x=g.isMore,C=x===void 0?!0:x,b=g.labels,_=b===void 0?[]:b,T=g.headTitle,w=T===void 0?"Room Type":T,k=g.footerTitle,O=k===void 0?"Benefit":k,j=g.optionName,i=j===void 0?"\uC635\uC158 \uC124\uBA85":j,d=g.isDuration,I=d===void 0?!0:d,D=g.minNight,v=g.maxNight,E=g.roomType,H=g.benefitList,U=H===void 0?[]:H,R=g.price,P=g.buttonName,L=P===void 0?"\uC608\uC57D\uD558\uAE30":P,K=g.onClick,X=g.className,le=p(g,r),ce=F(),ee=ce.classes,ie=ce.cx;return Object(n.jsxs)(Z.a,Object.assign({component:"div",ref:l,className:ie(X,ee.card)},le,{children:[Object(n.jsxs)("div",{className:ee.container,children:[Object(n.jsxs)("div",{className:ee.headerGroup,children:[_.length>0&&Object(n.jsx)(B.a,{type:"fill",style:{marginBottom:4},children:_==null?void 0:_.map(function(re,de){return Object(n.jsx)(B.a.Item,{label:re,colorIdx:de})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(M.a,{level:"display5",color:"primary1",strong:!0,children:i}),I&&Object(n.jsxs)(M.a,{level:"body2",color:"onPrimaryContainer",children:["(",D&&D+"\uBC15"," - ",v&&v+"\uBC15",")"]})]})]}),Object(n.jsxs)("div",{className:ee.groupBox,children:[Object(n.jsx)(M.a,{level:"subhead2",color:"primary1",children:w}),Object(n.jsx)("div",{className:ee.divider}),Object(n.jsx)(M.a,{level:"body2",color:"primary3",children:E})]}),U.length>0&&Object(n.jsxs)("div",{className:ee.groupBox,children:[Object(n.jsxs)("div",{className:ee.titleBox,children:[Object(n.jsx)(M.a,{level:"subhead2",color:"primary1",children:O}),C&&Object(n.jsx)(A.a,{variant:"text",rightIcon:Object(n.jsx)(h.a,{src:"IcAngleRight",width:16,height:16}),children:"\uB354\uBCF4\uAE30"})]}),Object(n.jsx)("div",{className:ee.divider}),Object(n.jsx)("ul",{children:U.map(function(re){var de=re.content;return Object(n.jsx)(M.a,{level:"body2",color:"primary1",component:"li",children:de})})})]}),R&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:ee.divider}),Object(n.jsxs)("div",{className:ee.priceBox,children:[Object(n.jsx)(t.a,Object.assign({},R,{type:"secondary",label:"\uC815\uAC00"})),Object(n.jsx)(t.a,Object.assign({},R,{type:"primary"}))]})]})]}),Object(n.jsx)(A.a,{className:ee.submitButton,size:"medium",fullWidth:!0,onClick:K,children:L})]}))});u.displayName="OptionCard";var o=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:153},endLoc:{col:1,line:159},startBody:{col:23,line:153},endBody:{col:1,line:159}}},o=`import { Meta } from "@storybook/react";
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
`,a={Default:{startLoc:{col:23,line:145},endLoc:{col:1,line:151},startBody:{col:23,line:145},endBody:{col:1,line:151}}},f=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: 40 }}>\\n      <OptionCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:153},endLoc:{col:1,line:159},startBody:{col:23,line:153},endBody:{col:1,line:159}}}}},title:"@travelmakers-design-v2/core/General/Card/OptionCard",component:u,argTypes:{labels:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},headTitle:{defaultValue:"Room Type",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},footerTitle:{defaultValue:"Benefit",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD558\uB2E8 Title Name\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},optionName:{defaultValue:"\uC635\uC158 \uC124\uBA85",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 optionName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isDuration:{defaultValue:!0,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 Duration \uD45C\uC2DC\uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},minNight:{defaultValue:1,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uC18C -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},maxNight:{defaultValue:2,description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCD5C\uB300 -\uBC15(night)\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},roomType:{defaultValue:"\uB8F8 \uD0C0\uC785 / \uB8F8 \uD0C0\uC785",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 roomType\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},benefitList:{defaultValue:[{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:1},{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:2},{content:"\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",only:!1,order:3}],description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 benefitContent\uC744 \uD45C\uC0AC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}},price:{defaultValue:{type:"primary",label:"",percentText:70,nightText:"",priceText:1e4,priceStartText:"",isCoupon:!0},description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"object"}},control:{type:"object"}},buttonName:{defaultValue:"\uC608\uC57D\uD558\uAE30",description:"OptionCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 buttonName\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},y=function(l){return Object(n.jsx)("div",{style:{margin:40},children:Object(n.jsx)(u,Object.assign({},l))})};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: 40 }}>
      <OptionCard {...props} />
    </div>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return p});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),Z=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),B=Object(F.a)(function(c,u){var o=u.status;return{container:{width:"120px",display:"inline-block",border:"1px solid "+c.colors.outline,borderRadius:c.spacing.spacing5,padding:c.spacing.spacing10+" "+c.spacing.spacing20}}}),M=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),A=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),h=e("./node_modules/react/jsx-runtime.js"),t=["status","name","description","tag","className"];function n(c,u){if(c==null)return{};var o=r(c,u),a,f;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(c);for(f=0;f<y.length;f++)a=y[f],!(u.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(c,a)&&(o[a]=c[a])}return o}function r(c,u){if(c==null)return{};var o={},a=Object.keys(c),f,y;for(y=0;y<a.length;y++)f=a[y],!(u.indexOf(f)>=0)&&(o[f]=c[f]);return o}var p=Object(Z.forwardRef)(function(c,u){var o=c.status,a=c.name,f=c.description,y=c.tag,g=c.className,l=n(c,t),x=B({status:o}),C=x.classes,b=x.cx,_={active:"primary1",disabled:"primary4"};return Object(h.jsxs)(s.a,Object.assign({component:"div",ref:u,className:b(g,C.container)},l,{children:[Object(h.jsx)(M.a,{level:"body2",color:_[o],strong:!0,children:a}),Object(h.jsx)("br",{}),Object(h.jsx)(M.a,{level:"body3",color:_[o],strong:!0,children:f}),Object(h.jsx)("br",{}),o==="active"&&Object(h.jsx)(A.a,{type:"fill",color:"gray",roundness:"half",children:Object(h.jsx)(A.a.Item,{label:f})})]}))});p.displayName="PriceCard"},"./packages/travelmakers-design-core/src/components/Card/PriceCard/stories/PriceCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Card/PriceCard/PriceCard.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <PriceCard {...props} />;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:55},endLoc:{col:1,line:57},startBody:{col:23,line:55},endBody:{col:1,line:57}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:47},endLoc:{col:1,line:49},startBody:{col:23,line:47},endBody:{col:1,line:49}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <PriceCard {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:55},endLoc:{col:1,line:57},startBody:{col:23,line:55},endBody:{col:1,line:57}}}}},title:"@travelmakers-design-v2/core/General/Card/PriceCard",component:V.a,argTypes:{status:{defaultValue:"active",description:"Hotel \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["active","disabled"],control:{type:"inline-radio"}},name:{defaultValue:"name",description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"description",description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},tag:{defaultValue:["\uB808\uC774\uBE14","\uB808\uC774\uBE14","\uB808\uC774\uBE14"],description:"PriceCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"array"}},control:{type:"array"}}}};var s=function(B){return Object(N.jsx)(V.a,Object.assign({},B))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <PriceCard {...props} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Card/SkeletonTimeLineBanner/stories/SkeletonTimeLineBanner.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return u});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),V=e("./node_modules/react/index.js"),N=e("./node_modules/core-js/modules/es.object.keys.js"),S=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(o){return{root:{backgroundColor:"rgba(200, 200, 200, 0.5)",borderRadius:o.radius.radius20,padding:o.spacing.spacing20,position:"relative",overflow:"hidden",minWidth:"328px"},titleWrapper:{marginBottom:o.spacing.spacing10,maxWidth:"220px"},labelWrapper:{display:"flex",alignItems:"center",width:"fit-content"},labelText:{width:"fit-content"},arrowImage:{width:"16px",height:"16px",marginLeft:"2px"},imageOval:{position:"absolute",width:"78.03px",height:"110.61px",right:-5,bottom:-25,background:"linear-gradient(149.99deg, rgba(255, 255, 255, 0.5) 0%, rgba(200, 200, 200, 0.5) 88.27%)",borderRadius:"7575.76px"}}}),B=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),M=e("./node_modules/react/jsx-runtime.js"),A=["onClick","className","children"];function h(o,a){if(o==null)return{};var f=t(o,a),y,g;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);for(g=0;g<l.length;g++)y=l[g],!(a.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(o,y)&&(f[y]=o[y])}return f}function t(o,a){if(o==null)return{};var f={},y=Object.keys(o),g,l;for(l=0;l<y.length;l++)g=y[l],!(a.indexOf(g)>=0)&&(f[g]=o[g]);return f}var n=Object(V.forwardRef)(function(o,a){var f=o.onClick,y=o.className,g=o.children,l=h(o,A),x=F(),C=x.classes,b=x.cx;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(Z.a,Object.assign({component:"div",ref:a,className:b(y,C.root)},l,{children:[Object(M.jsx)("div",{className:b(C.titleWrapper),children:Object(M.jsxs)(B.a,{family:"Pretendard",level:"body2",color:"white",className:b(C.titleWrapper),children:[Object(M.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",width:"20%",borderRadius:8}}),Object(M.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",marginTop:2,borderRadius:8}})]})}),Object(M.jsx)("div",{className:b(C.labelWrapper),onClick:f,children:Object(M.jsx)(B.a,{className:b(C.labelText),family:"Pretendard",level:"body1",color:"white",strong:!0,children:Object(M.jsx)("div",{dangerouslySetInnerHTML:{__html:"&nbsp;"},style:{backgroundColor:"rgba(200, 200, 200, 0.5)",width:"100px",borderRadius:8}})})}),Object(M.jsx)("div",{className:b(C.imageOval)})]})),g]})});n.displayName="SkeletonTimeLineBanner";var r=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:54},startBody:{col:23,line:46},endBody:{col:1,line:54}}},r=`import {
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
`,p={Default:{startLoc:{col:23,line:38},endLoc:{col:1,line:46},startBody:{col:23,line:38},endBody:{col:1,line:46}}},c=m.default={title:"@travelmakers-design-v2/core/General/Card/SkeletonTimeLineBanner",component:n,argTypes:{},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <SkeletonTimeLineBanner />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:46},endLoc:{col:1,line:54},startBody:{col:23,line:46},endBody:{col:1,line:54}}}},docs:{page:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)($.g,{}),Object(M.jsx)($.f,{}),Object(M.jsx)($.b,{}),Object(M.jsx)($.d,{}),Object(M.jsx)($.a,{story:$.c}),Object(M.jsx)($.e,{})]})}},actions:{handles:["click"]}}},u=function(a){return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{style:{padding:24,width:328},children:Object(M.jsx)(n,{})})})};u.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <SkeletonTimeLineBanner />
      </div>
    </>
  );
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/Card/StatusCard/stories/StatusCard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return f});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),V=e("./node_modules/react/index.js"),N=e("./node_modules/core-js/modules/es.object.keys.js"),S=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),s=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),B=Object(F.a)(function(y,g){var l,x,C=g.isArrow,b=g.isLabel;return{root:{backgroundColor:y.colors.white,borderRadius:y.radius.radius20,padding:y.spacing.spacing20},container:{display:"flex",gap:y.spacing.spacing20,cursor:C?"pointer":"auto"},image:{borderRadius:y.radius.radius20},textContainer:{width:"100%"},description:{marginTop:"7px"},footerWrapper:{marginTop:"7px",height:b?y.lineHeights.body3:"47px",display:"flex",alignItems:!b&&"flex-end !important"},textBreak:(l={overflow:"hidden",textOverflow:"ellipsis",height:y.lineHeights.body3,wordWrap:"break-word",display:"-webkit-box"},l["-webkit-line-clamp"]="1",l["-webkit-box-orient"]="vertical",l),textRoomBreak:(x={overflow:"hidden",textOverflow:"ellipsis",wordWrap:"break-word",display:"-webkit-box"},x["-webkit-line-clamp"]=b?"1":"2",x["-webkit-box-orient"]="vertical",x),flex:{display:"flex",alignItems:"center"},spaceBetween:{justifyContent:"space-between"},arrowImage:{width:"16px",height:"16px"}}}),M=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),A=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),h=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),t=e("./node_modules/react/jsx-runtime.js"),n=["hotelImage","title","titleDisable","message","messageDisable","messageUnderline","messageClick","label","roomType","onClick","isArrow","isLabel","className","children"];function r(y,g){if(y==null)return{};var l=p(y,g),x,C;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(y);for(C=0;C<b.length;C++)x=b[C],!(g.indexOf(x)>=0)&&Object.prototype.propertyIsEnumerable.call(y,x)&&(l[x]=y[x])}return l}function p(y,g){if(y==null)return{};var l={},x=Object.keys(y),C,b;for(b=0;b<x.length;b++)C=x[b],!(g.indexOf(C)>=0)&&(l[C]=y[C]);return l}var c=Object(V.forwardRef)(function(y,g){var l=y.hotelImage,x=y.title,C=y.titleDisable,b=C===void 0?!1:C,_=y.message,T=y.messageDisable,w=T===void 0?!1:T,k=y.messageUnderline,O=k===void 0?!1:k,j=y.messageClick,i=y.label,d=y.roomType,I=y.onClick,D=y.isArrow,v=D===void 0?!0:D,E=y.isLabel,H=E===void 0?!0:E,U=y.className,R=y.children,P=r(y,n),L=B({isArrow:v,isLabel:H}),K=L.classes,X=L.cx;return Object(t.jsxs)(s.a,Object.assign({component:"div",ref:g,className:X(U,K.root)},P,{children:[Object(t.jsxs)("div",{className:X(K.container),onClick:I,children:[Object(t.jsx)(h.a,{src:l,className:X(K.image),alt:x+" | "+d,width:98,height:98}),Object(t.jsxs)(s.a,{className:X(K.textContainer),children:[Object(t.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(t.jsx)(M.a,{family:"Pretendard",level:"body2",color:b?"tertiary30":"primary1",strong:!0,children:x}),Object(t.jsx)(M.a,{family:"Pretendard",level:"body3",color:w?"tertiary30":"primary1",style:{textDecorationLine:O?"underline":"none",cursor:O&&"pointer",width:"fit-content"},onClick:function(ce){j&&(ce.stopPropagation(),j())},strong:!0,children:_})]}),H&&Object(t.jsx)(M.a,{family:"Pretendard",level:"body3",color:"primary1",className:X(K.description,K.textBreak),children:i}),Object(t.jsxs)(s.a,{className:X(K.flex,K.spaceBetween,K.footerWrapper),children:[Object(t.jsx)(M.a,{family:"Pretendard",level:"body3",color:"primary1",className:X(K.textRoomBreak),children:d}),v?Object(t.jsx)(A.a,{src:"IcAngleRight",width:16,height:16}):Object(t.jsx)(t.Fragment,{})]})]})]}),P.children]}))});c.displayName="StatusCard";var u=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,o={Default:{startLoc:{col:23,line:108},endLoc:{col:1,line:116},startBody:{col:23,line:108},endBody:{col:1,line:116}}},u=`import {
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
`,o={Default:{startLoc:{col:23,line:100},endLoc:{col:1,line:108},startBody:{col:23,line:100},endBody:{col:1,line:108}}},a=m.default={title:"@travelmakers-design-v2/core/General/Card/StatusCard",component:c,argTypes:{hotelImage:{defaultValue:"https://picsum.photos/60/40",description:"\uC774\uBBF8\uC9C0 \uD45C\uC2DC",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"\uD22C\uC5B4 \uD655\uC815 \uC804",description:"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},message:{defaultValue:"00\uC6D4 00\uC77C \uC774\uB0B4 \uD655\uC815 \uC608\uC815",description:"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roomType:{defaultValue:"\uD55C\uB2EC\uC0B4\uAE30\u30FB\uC288\uD398\uB9AC\uC5B4 \uB514\uB7ED\uC2A4 \uD2B8\uC708, \uD64D\uAE38\uB3D9\uB2D8",description:"message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},label:{defaultValue:"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",description:"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isArrow:{defaultValue:!0,description:"Arrow \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",control:{type:"boolean"}},isLabel:{defaultValue:!0,description:"Label \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",control:{type:"boolean"}},onClick:{action:"clicked"}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24 }}>\\n        <StatusCard {...props} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:108},endLoc:{col:1,line:116},startBody:{col:23,line:108},endBody:{col:1,line:116}}}},docs:{page:function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)($.g,{}),Object(t.jsx)($.f,{}),Object(t.jsx)($.b,{}),Object(t.jsx)($.d,{}),Object(t.jsx)($.a,{story:$.c}),Object(t.jsx)($.e,{})]})}},actions:{handles:["click"]}}},f=function(g){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{style:{padding:24},children:Object(t.jsx)(c,Object.assign({},g))})})};f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <StatusCard {...props} />
      </div>
    </>
  );
}`}},f.parameters)},"./packages/travelmakers-design-core/src/components/Card/TimeLineBanner/stories/TimeLineBanner.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return o}),e.d(m,"Skeleton",function(){return a});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),V=e("./node_modules/react/index.js"),N=e("./node_modules/core-js/modules/es.object.keys.js"),S=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(f,y){var g,l=y.status,x=y.arrowHidden;return{root:{backgroundColor:l==="default"?"#0D5E49":"#C96F48",borderRadius:f.radius.radius20,padding:f.spacing.spacing20,position:"relative",overflow:"hidden",minWidth:"328px",cursor:"pointer"},titleWrapper:{marginBottom:f.spacing.spacing30,maxWidth:"220px"},textMaxLength:(g={},g["& > div "]={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},g),labelWrapper:{display:"flex",alignItems:"center",width:"fit-content"},labelText:{width:"fit-content"},arrowImage:{width:"16px",height:"16px",marginLeft:"2px"},imageOval:{position:"absolute",width:"78.03px",height:"110.61px",right:-5,bottom:-25,background:l==="default"?"linear-gradient(149.99deg, rgba(19, 134, 104, 0.8) 0%, rgba(127, 102, 16, 0.8) 88.27%)":"linear-gradient(103.18deg, rgba(222, 148, 80, 0.48) 40.51%, rgba(217, 59, 59, 0.8) 100%)",borderRadius:"7575.76px"}}}),B=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),M=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),A=e("./node_modules/react/jsx-runtime.js"),h=["status","title","message","label","arrowHidden","onClick","className","children"];function t(f,y){if(f==null)return{};var g=n(f,y),l,x;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(f);for(x=0;x<C.length;x++)l=C[x],!(y.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(f,l)&&(g[l]=f[l])}return g}function n(f,y){if(f==null)return{};var g={},l=Object.keys(f),x,C;for(C=0;C<l.length;C++)x=l[C],!(y.indexOf(x)>=0)&&(g[x]=f[x]);return g}var r=Object(V.forwardRef)(function(f,y){var g=f.status,l=f.title,x=l===void 0?"&nbsp;":l,C=f.message,b=C===void 0?"&nbsp;":C,_=f.label,T=_===void 0?"&nbsp;":_,w=f.arrowHidden,k=w===void 0?!1:w,O=f.onClick,j=f.className,i=f.children,d=t(f,h),I=F({status:g,arrowHidden:k}),D=I.classes,v=I.cx;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(Z.a,Object.assign({component:"div",ref:y,className:v(j,D.root),onClick:O},d,{children:[Object(A.jsx)("div",{className:v(D.titleWrapper),children:Object(A.jsxs)(B.a,{family:"Pretendard",level:"body2",color:"white",className:v(D.textMaxLength),children:[Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:x}}),Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:b}})]})}),Object(A.jsxs)("div",{className:v(D.labelWrapper),children:[Object(A.jsx)(B.a,{className:v(D.labelText,D.textMaxLength),family:"Pretendard",level:"body1",color:"white",strong:!0,children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:T}})}),!k&&Object(A.jsx)(M.a,{src:"IcAngleRight",color:"white",width:16,height:16,className:v(D.arrowImage)})]}),Object(A.jsx)("div",{className:v(D.imageOval)})]})),d.children]})});r.displayName="TimeLineBanner";var p=`
    
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
Skeleton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Skeleton.parameters };`,c={Default:{startLoc:{col:23,line:95},endLoc:{col:1,line:103},startBody:{col:23,line:95},endBody:{col:1,line:103}},Skeleton:{startLoc:{col:24,line:105},endLoc:{col:1,line:113},startBody:{col:24,line:105},endBody:{col:1,line:113}}},p=`import {
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
`,c={Default:{startLoc:{col:23,line:87},endLoc:{col:1,line:95},startBody:{col:23,line:87},endBody:{col:1,line:95}},Skeleton:{startLoc:{col:24,line:97},endLoc:{col:1,line:105},startBody:{col:24,line:97},endBody:{col:1,line:105}}},u=m.default={title:"@travelmakers-design-v2/core/General/Card/TimeLineBanner",component:r,argTypes:{status:{defaultValue:"default",description:"\uD574\uB2F9 \uD638\uD154\uC5D0 \uB300\uD55C \uAD6C\uB9E4 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.",options:["default","alert"],control:{type:"inline-radio"}},title:{defaultValue:"\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8",description:"Title \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},message:{defaultValue:"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?",description:"Message \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},label:{defaultValue:"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30",description:"Label \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},arrowHidden:{defaultValue:!1,description:"Label \uC6B0\uCE21\uC5D0 \uD45C\uC2DC\uB418\uB294 arrow \uD654\uC0B4\uD45C hidden \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},onClick:{action:"clicked"}},parameters:{storySource:{source:`
    
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
Skeleton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <div style={{ padding: 24, width: 328 }}>\\n        <TimeLineBanner status={\\"default\\"} arrowHidden={true} />\\n      </div>\\n    </>\\n  );\\n}" }, ...Skeleton.parameters };`,locationsMap:{default:{startLoc:{col:23,line:95},endLoc:{col:1,line:103},startBody:{col:23,line:95},endBody:{col:1,line:103}},skeleton:{startLoc:{col:24,line:105},endLoc:{col:1,line:113},startBody:{col:24,line:105},endBody:{col:1,line:113}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)($.g,{}),Object(A.jsx)($.f,{}),Object(A.jsx)($.b,{}),Object(A.jsx)($.d,{}),Object(A.jsx)($.a,{story:$.c}),Object(A.jsx)($.e,{})]})}},actions:{handles:["click"]}}},o=function(y){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{style:{padding:24,width:328},children:Object(A.jsx)(r,Object.assign({},y))})})},a=function(y){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{style:{padding:24,width:328},children:Object(A.jsx)(r,{status:"default",arrowHidden:!0})})})};o.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner {...props} />
      </div>
    </>
  );
}`}},o.parameters),a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      <div style={{ padding: 24, width: 328 }}>
        <TimeLineBanner status={"default"} arrowHidden={true} />
      </div>
    </>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return u});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(o,a){var f=a.type,y=o.colors,g=o.spacing;return{root:{display:"inline-flex",alignItems:"center",minWidth:"328px",minHeight:"53px","&::after, &::before":{content:'""',width:"100%",height:"1px",backgroundColor:y[t[f]]}},title:{padding:"0 "+g.spacing70}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["type","title","className"];function A(o,a){if(o==null)return{};var f=h(o,a),y,g;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);for(g=0;g<l.length;g++)y=l[g],!(a.indexOf(y)>=0)&&Object.prototype.propertyIsEnumerable.call(o,y)&&(f[y]=o[y])}return f}function h(o,a){if(o==null)return{};var f={},y=Object.keys(o),g,l;for(l=0;l<y.length;l++)g=y[l],!(a.indexOf(g)>=0)&&(f[g]=o[g]);return f}var t={navy:"primary",white:"white"},n=Object(S.forwardRef)(function(o,a){var f=o.type,y=o.title,g=o.className,l=A(o,M),x=F({type:f}),C=x.classes,b=x.cx;return Object(B.jsx)(Z.a,Object.assign({component:"header",ref:a,className:b(C.root,g)},l,{children:Object(B.jsx)(Y.a,{className:C.title,component:"strong",family:"Noto Serif KR",level:"display4",color:t[f],textAlign:"center",strong:!0,children:y})}))});n.displayName="HeaderSection";var r=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:46},startBody:{col:23,line:39},endBody:{col:1,line:46}}},r=`import { Meta } from "@storybook/react";
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
`,p={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:38},startBody:{col:23,line:31},endBody:{col:1,line:38}}},c=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <HeaderSection\\n      {...props}\\n      style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:46},startBody:{col:23,line:39},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/HeaderSection",component:n,argTypes:{type:{control:{type:"radio",options:["navy","white"]},defaultValue:"navy",description:"HeaderSection\uC758 type\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},title:{control:{type:"text"},defaultValue:"Title",description:"HeaderSection\uC758 title",table:{type:{summary:"string"}}}}},u=function(a){return Object(B.jsx)(n,Object.assign({},a,{style:{backgroundColor:a.type==="white"&&"gray"}}))};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <HeaderSection
      {...props}
      style={{ backgroundColor: props.type === "white" && "gray" }}
    />
  );
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/Icon/Icon.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return Je});var W={};e.r(W),e.d(W,"IcCompanyInstagram",function(){return B}),e.d(W,"IcCompanyApple",function(){return A}),e.d(W,"IcCompanyBrunch",function(){return t}),e.d(W,"IcCompanyFacebook",function(){return r}),e.d(W,"IcCompanyGoogle",function(){return c}),e.d(W,"IcCompanyKakaoPay",function(){return o}),e.d(W,"IcCompanyKakao",function(){return f}),e.d(W,"IcCompanyLivinginhotel",function(){return g}),e.d(W,"IcCompanyNaverPay",function(){return x}),e.d(W,"IcCompanyNaver",function(){return b}),e.d(W,"IcCompanySamsungPay",function(){return T}),e.d(W,"IcCompanyYoutube",function(){return k}),e.d(W,"IcAlert",function(){return j}),e.d(W,"IcAngleDown",function(){return d}),e.d(W,"IcAngleLeft",function(){return D}),e.d(W,"IcAngleRight",function(){return E}),e.d(W,"IcAngleUp",function(){return U}),e.d(W,"IcArrowLeft",function(){return P}),e.d(W,"IcArrowRight",function(){return K}),e.d(W,"IcArrowSingleLeft",function(){return le}),e.d(W,"IcArrowSingleRight",function(){return ee}),e.d(W,"IcCheck",function(){return re}),e.d(W,"IcClose",function(){return pe}),e.d(W,"IcExpand",function(){return je}),e.d(W,"IcHotelTypeMini",function(){return ve}),e.d(W,"IcHotelTypeResidence",function(){return Be}),e.d(W,"IcMinus",function(){return ke}),e.d(W,"IcPlus",function(){return xe}),e.d(W,"IcReset",function(){return Re}),e.d(W,"IcResultFail",function(){return Ee}),e.d(W,"IcResultSuccess",function(){return Ve}),e.d(W,"IcStar",function(){return We}),e.d(W,"Logo",function(){return Ue}),e.d(W,"IcClock",function(){return Ae}),e.d(W,"IcDiscount",function(){return ae}),e.d(W,"IcDocument",function(){return se}),e.d(W,"IcEdit",function(){return J}),e.d(W,"IcHotelFill",function(){return te}),e.d(W,"IcHotelLine",function(){return ge}),e.d(W,"IcLogout",function(){return Te}),e.d(W,"IcMarker",function(){return Ke}),e.d(W,"IcProfile",function(){return Ge}),e.d(W,"IcSearch",function(){return Qe}),e.d(W,"IcSettings",function(){return $e}),e.d(W,"IcTalk",function(){return qe});var $=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/react/index.js"),Y=e.n(S),Z=e("./node_modules/core-js/modules/es.object.assign.js"),s=e("./node_modules/react/jsx-runtime.js"),F=function(G){var z,ye,Ce;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.329 5.798a4.32 4.32 0 0 0-.242-1.308 2.335 2.335 0 0 0-.602-.946 2.617 2.617 0 0 0-.93-.602c-.345-.138-.724-.224-1.31-.241-.602-.034-.775-.034-2.239-.034s-1.619 0-2.204.017c-.586.017-.948.12-1.31.24-.361.121-.654.328-.947.62a2.335 2.335 0 0 0-.603.946c-.138.344-.224.723-.24 1.308-.018.585-.035.74-.035 2.202s0 1.617.017 2.202.12.946.241 1.308c.12.36.31.653.603.946.293.292.603.482.947.602.345.12.724.224 1.31.24.585.035.74.035 2.204.035 1.464 0 1.62 0 2.205-.017a4.13 4.13 0 0 0 1.309-.24c.361-.121.654-.31.947-.603.293-.292.482-.602.603-.946a4.02 4.02 0 0 0 .241-1.308c.017-.55.017-.722.017-2.185 0-1.462.035-1.651.018-2.236Zm-.965 4.352c-.017.517-.12.792-.19.998-.103.241-.223.43-.413.603-.19.189-.362.292-.603.412-.19.07-.465.172-.999.19H8.023c-1.412 0-1.601 0-2.153-.018-.516-.017-.792-.12-.999-.189a1.64 1.64 0 0 1-.602-.413 2.084 2.084 0 0 1-.414-.602c-.069-.19-.172-.464-.19-.998V8c0-1.428 0-1.6.018-2.15.017-.517.12-.792.19-.998.103-.241.223-.43.396-.603.189-.189.361-.292.602-.395.19-.07.465-.172 1-.19.55-.017.723-.017 2.152-.017 1.43 0 1.602 0 2.154.017.516.018.792.12.998.19.242.103.431.223.603.395.19.19.293.362.414.603.069.189.172.464.19.997.016.551.016.723.016 2.151s-.017 1.6-.034 2.15Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.991 5.44a2.765 2.765 0 0 0-2.764 2.773 2.765 2.765 0 0 0 2.764 2.774 2.78 2.78 0 0 0 2.782-2.774A2.758 2.758 0 0 0 7.991 5.44Zm0 4.587a1.81 1.81 0 0 1-1.808-1.814C6.183 7.22 7 6.4 7.991 6.4 9 6.4 9.8 7.202 9.8 8.213c0 1.012-.8 1.814-1.809 1.814Z",fill:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(s.jsx)("circle",{cx:10.773,cy:5.227,r:.64,fill:(Ce=G.color)!==null&&Ce!==void 0?Ce:"#30373F"})]}))};F.displayName="SvgIcCompanyInstagram";var B=F,M=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.854 2.494c-.439.477-1.129.953-1.882.834-.062-.656.251-1.43.69-1.907.44-.477 1.255-.954 1.882-.954.063.894-.25 1.55-.69 2.027ZM10.544 3.626c-1.066-.06-1.944.596-2.384.596-.501 0-1.317-.596-2.133-.596-1.066 0-2.007.596-2.634 1.49-1.192 1.849-.314 4.65.752 6.141.565.775 1.192 1.61 2.07 1.61.816 0 1.067-.477 2.008-.477.941 0 1.255.477 2.133.417.878 0 1.443-.775 1.945-1.49.627-.835.878-1.67.878-1.789 0 0-1.694-.656-1.694-2.504 0-1.61 1.318-2.265 1.443-2.265-.815-1.073-1.945-1.133-2.384-1.133Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};M.displayName="SvgIcCompanyApple";var A=M,h=function(G){var z;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("mask",{id:"ic-company-brunch_svg__b",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:3,y:1,width:10,height:14,children:Object(s.jsx)("path",{fill:"url(#ic-company-brunch_svg__a)",d:"M3.773 1.934h8.455v12.131H3.773z"})}),Object(s.jsx)("g",{mask:"url(#ic-company-brunch_svg__b)",children:Object(s.jsx)("path",{fill:(z=G.color)!==null&&z!==void 0?z:"#30373F",d:"M2-1h12.682v18.197H2z"})}),Object(s.jsxs)("defs",{children:[Object(s.jsx)("pattern",{id:"ic-company-brunch_svg__a",patternContentUnits:"objectBoundingBox",width:1,height:1,children:Object(s.jsx)("use",{xlinkHref:"#ic-company-brunch_svg__c",transform:"scale(.00422 .00298)"})}),Object(s.jsx)("image",{id:"ic-company-brunch_svg__c",width:237,height:336,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAAFQCAYAAABTbvmQAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA7aADAAQAAAABAAABUAAAAABrfFyXAABAAElEQVR4Ae29eZRcxZknmlkSb/rQUon+4/VgSbjPe+8MoxL+p8/Qkuw/1NUMmxb2RQtYz9jWAmbYtEDTYCMJzMMsksAMxiAJTLMYLRgkFkm4s7LONFq63zmvB6kk6JlzpkVB93szg6Qq4WMkVeb7/eLGdzPuzXtv3ptb3cyMkLJurF9EfBG/+GKPbLFYzFhlOWA50HwOXDVn7riLL7300mkzpk+fOqVnyvgJ3edIKvbv379v9+7dex588MEPxU6+WQtaYYX9Wg40hwMPr1l70S1Qk86b/M1MMTOTsZ7JFjPE4lmZLpWIAszZTLb//x38fHDZsmVLf7Nzx0lJnQWtcMJ+LQcazIHt27bc8e8vuuQvJpxzDiVqL1CayXRlgVso6LPZbCZTgAnfIrSAMSCczQwPD++cP++Gee++98Hv6NWCllywynKggRzYsP6pq79/yw9v0d1fJVlVdAQoQKsUkUugCngdW2UmiIdPHHune8IfXUVrRxZrD/ZjOWA5UD8OrFy+4sKhoaEdd951z90A7JWgXAIsoxHAGlEqaRtg7u7+o+4N69ZfTScraQ0GWa3lQL04sH/vvkcxwTQDUrKXNDFEVZKUelMVMiPK2FUc41hrwSt+GEy6yV8Mfv7axMmTbrKSVrhjv5YDdeDAmodW91K6Tv/2jO9AavYSgwqHqusLA1GolWgF0ASnXzEsx7UFuAGwk+luJa2fS9ZsOVAlB/bt2/fYDChAT3WDFVhJCxacWFJmNY4tZgqFrkyXEpkFTD7BRXeVg8a0Rpe5f+GCeQuspK2ygGwwywHhwL0Yuw4Pf/UuAQu7mWomWBzxLaILrKQpBWmXI005UazADDQDv0pPMxWlqugJdtesl4fGOt7sX8sBy4FqOPDWtu13PPbEE9cUioVehvdLStpls3q8SoOe+1WgpZv6pzR0LDOza0x1pngakrkrMwb/rKRVLLF/LAeScWDu7DlnHxk4/Nw11117HXDVS0BRGV1ZZSaIg5TYyzfIj2k3tovbLsb0086OaU3OWL3lQAwOrFqx8sIHf/Ljn4wfP36ueA+SsGInX79fv724B30JfchcgvbPbfc4iEPWznIghAPbt267/WdPPH4DnGe6oAOi/BKWwcVOvkLSb3bpiIcKX9s9rsAg62w5IBw4fGjg2Wuvu+46mJ3ZYW43ZPfXGXaKN/VV9h6bcgPBGxewXPQ5sG//PlKxoC3npbWxHPBw4IrL547j2uuUqT1TOX4VxyDACVj90pRhxE3C8yvANe3C9AOHDx6mmwVtGIesveUAOHDvylXTXn/z9dc5fgXAeoUpJgBFz28QWBkGm/49bhKGbmFh6CaqWMz2HTp4+CDNdiJKuGK/lgM+DjyDvb633/Uf7sRaaa/aZohusADTnBM2e8fibpLatm1bBqDP4OisaZ1MX8z0Qcr/hQrESOzP8sDWAW8d2LZl6+2FQiFXLIAz/BkK9q5J9KeLZ+BtxPELZ+0j/9ab22+HZ2IsUp0eOVM8U0D4EHX444PPwklh1XaPk7V31ncHcEBNOF1/3Q2qO0zpqrcnETRUZndW9Nz0wGPrMikFXT8k7Larb7jm5/etWH5hJbaN6QKFrANHASfDSJwHDhzYLzQsaIUT9tvxHJgza/bZg4ODr/ZcMPVbYEbpGJ3ag+iAVUDkZxZACrw6G/vx6cfS0BZMND9Nf5deenmifjEbAmkM9Ld/y5YtW904BdX26+0eWX50Fj/mzJo77vjxoR3s7krn1+n6jqhur3SDUS+Kyo/RRRY7+oTKb31zi3SJnaFnoZijQ5SSOOnHT3/o+Im3Ye3QwtdKWrf5sppO5QBniHe+t+PdCRPUDLH0cDU7ulS3VySf8EjMAiaauzDDqyTsDdf/XPytXbv2YkxkVcaZ7noznNBWNNAjZzdb6Dl2BoIlAfZbatUsL9qbF7xdAgIypyaRUNhKQeyJZJWvOPm/hnt+4OAhd7II/pRk/Oyzz17VEtgfNJ55pJBjt13o8euKXNPS6tu7otrydcp3xT3LLywCFOCHC1Knh0sbrzLAqRxoNuzyhwcOPgcHD54WzJt/Luzyvp60l7DfpPvJQnvw6Gev+OlWFtseuWwNlgPtwYHNGzctevzJJ57E4fNe5oiTSHqSWGVQgEID9Z4uq/LhdmP7Dx06dHBKzwW3amv3cz1UsTgyM5vFQfc4ipPTlKRQOr7+TZs2bVYWxh+7ucJghtV2Bge46f9aLOkgtziwjr/8VRBfX+M8K2eIz8qMdQ6046YJgvm/f/H/vfbHk/71TXAKUnnQdmahGThCYY1WAVWWfbTXfnz/3B+sQlL93q3ZcqC1OcBD6y5gmRWCKQYK/lX2LAewmHDi1TC8kA37kd/54eLvLw7iyNPrN6ibExX9CoBl+LFYp+3S67Q0s0HYunXrFurLlHQD7Nc7HrH8aD9+rF295iKMFXP+iaGRkfCdSKgHjpKxpjaeOHFix+zLZ3kmiOCkwMbv8Am9fKSWkCrTlzGyGss6E2G5+fPnTzRpit6NRCzst8R4y4v24cV9K1ZOc2aJMemEghVwhE08wYtXeUGb98/owrOLJRySV3EJAR1UjJW/CBA0Ey1xuBGJhf2WmG950R68UMs6nCUGGEyJpoCLQk6ksDykZp0NkCK8B0dqxnckGVQ9vpFWlWYfXYnHE5lY2q+3ECw/WpcffqmHslRKwCvmSl9iED3dSDCBRmblSkhZLPNgKUmRjNswCGjpP2iZh7Tl52rEwn5LzLG8aG1ecMx54thxbgE011Rp9CpBjNfWb8rzWQ5YRmJmYGCA67Wuikfa8a4Bno+SsvDpzFJRY3+WB+1UB3Bb4jhOFiFPjuJckEYQP5yM4i4oZydUxYmi/G+2brsDwSJxsvCGBX8MP3n8XDWijuydds2RGiRMpzkynkhHRGDdLQ9asg64gCVCNVijAHOqMKIg7PGj+sTF3G937b4/DhYGB4++WgpvNASI/7RuIpQ70+Mb854eOYXztKdzPHhfKa4YK1Rlq0TWwnIg1Rzgedjx3d3d3DMRe50Ua6RyMbibua5s/2H0dy+69JKfunYhGo5lJ+GVaDqjnfcqrNOOUQnR1mpt2Lt4y3uNvxr+3cnb77rzN97A5SYL2nKeWJsW5sDu3bvv53lY9BFnKlj4ARSSN31k1t0gRW+ff/75IGj9KCSIx/pOKFjoM7iM1AsthVMAl1LUrxzJmunD1sqNfrdAcyVRbN3tEKFV6gDPsaLnmff0hmnwWMAcpLQf8X78+PG3o9ZiQcIdNjyCTRswq7Fs6Gyx0PedHhD/ccayEqcbsVjYb6kwLC9ahxdyxA5lphTBIIAQuzhfHSZ/xZy54+A/Fj7c8bOOwB+v3+xPB6bD8qtWLudSUaz4YnmKS8z6i8d0y6f68ukmfQQOfA1UlUDDQCKMsaWx4losvLu4wSmc78HsmTEmPVNViv/o0aNlx+8Q3o3Drw918Hu05nAmWt6MHm+uwAFxfR0LisFRAkAxx/nqMPmH1+CmiQjABLiVAXZkxFniIVgFsPI106L2PFfY/RQQn12nDWKKtRs9ECblPffomleXIrySmg5IuIxzRv1oX0HleW0q/MQWZPs+2vso/OcV+DwthbPcI2koFE+5UdPOWSNGOqHXNGLHyfQl8pwkQ9Zv/MK3vKqOV7t27bofCM25fVswMkzhPKwLXoJFAYpAc365ff/pbx+BKTYe3DG00AiLWNvzTuMzZ854fSHtN89fEHiSJyotsRMZRcS6xS9sy6v68Gr9+qeuBS+dGVtoKimPIPR6zuPmibKrYuAlEhuxtkd643G7yto6sWSXNEUmTDzZb3QBWv40lz9Lfrj4fPDcHUtGABLeohWXduAjEQ70Fam4+ylBzL4dUP5rUZOkIVFikxC2fpNVBMuvePzi2ilfsEsEGDCXu41NpbvIZTcdwk8kJuSyNj8t0xyo9+I71uGDsLREJjAskLWPLljLn8bxh11ZE7DUc2InlvJKu7w6tlcBpP6y1Mfm3MmkWPH6PEUdcPfHF2S2oE1YaEFMtHaNA6nJWz276+54MsELfxWV+Mc3t+nFjYsQIFH93/0BJr7QLY/ZRISlJ6+ldaK4zbRWHdAkYvXJCt/yKzm/Vq9efZGaKQbzzK6uAqJXgiofYX8I2D0xT+2AhouPZUuWToHZnfhivEnjZvhqGgszHdS7ifI7WHOpwCwvRpcX3EChAMthKcRcoeAsnSjgqI5qaR0UPoIVxSOWWHACKPFMMUJmvsJFbYxblAIsDE4axDb6+/lngzy6VzPmvEcRAo8UWEvLgdHlwPMvvPACDsj0qoMzOC6TzY5RCeKF3nwmJ4vLTc/gSlOshDoJpTDCJadK8VANfgUc4zk+fOLklKk9ZZeKOx7D//7f+w88dnb3+G5E5Cq5vNxJQyaD87LqpzwwTigCVI4Nwb3vxw/95CeOS21/LWhr458N3WAO8KjdNyZNVOdUo6LCFeLq3mAFFAJbjsYRaPjxcayb5y+cF0UjyG3Dhg3X/rvp02bATR+7C/KFe4txHvcs373FCthO/P3vbN2+7cUXX/wvwaET2tZDXFsatXd5LA/Lech7isGXWBM/0k01erCqK626tOgW38uHthJ2TWV5x0MTRMKUdJnpburr1S0GWS29E2ZEAtpveSWzPKkfT/RZ1kQbGJxhK0pBlGORK3svNmad9x9EELJRXzMNCrhoMBbccCPvjqp5LCs06kZICNpv/Qqnk3nJF9kVAGSWFsyIqwwpF/j8JOhUrPf6VkVntjjOzicmVisDuDVtogC5wHTaMW3C4YT13ngOfLh7z/2TJk1S41g10aMndirFLJWc/qjH27BH414XY9LmA109PT1TQWMm6agX9UwPQXqOXaGYVECNCejDTPXBO2Lc+aQCJvkjGbXf4FbN8qW5fFmzZg3Ps7r7itWthQnWYeXYGzf08xrVpOWn7xwuSViKzRjxq+N58CpStpa9xZXSHCh+KwWy7s2tyJ3C7yv9dxUj4+zqEggVlUaLA9oRXPi9KvHEk7oBA2NQo3tdMVrXg6AVFkhDzbueQCYUm6EOUYGsWzhDLW+q583HH//Ds+CfUtxA4YIHgOC9xKdHfOdRxTO+XxdOwZ2bLEbyv9q0+XvQJKrbl8y6/OzjQ/pyc8RH8Culwci4eSbWVZS+hgTGncWOO0D/9FPrKt5dDDqJ0mf6rzqgScTqqy8AyzuHd+V3LRkAAZOIHSVFQyaFNLaqnnjC+PdVJdVJH2AkPVEi7U07urmNinhEt77amWqQiI3F2B6TELV+4xeA5VUxw/OxAEAOvHBVACDK3Ew/lMwnThzjMyCJ67Q+BF9xeUnik68kSJurbjCSpjlxBpNGYP0nr0SdxjO5BQL5rko5EnAkP3fOrMQTT/v37nsM4UsTX74UEJB+kPq8KOOJ418mPkyPgFXhzy75JJlqt37rzoF9+z56bNw5484xCbMyi3L1JStxcr9Ybel/ZO1P1+7Y+d5J1zKGhkf9ps34M2xRLIRuUVRLTtjjrNZyQmjiUP7OmxfcvCDEuf7W1aLdhquulbR8K/HN2aY4gm2KGK2GjFXBL+Um7vI17HNbt26t+KKdn+8MA1o50glTjMuND+JY9PJV4TDxFPclAvivSrL6w9WFiJ+oNdencNqZj3w7FrM9OTW9VAZY3ySUz90EUzW3QFDCgkbOnFgygahmjkNAavpj+iu9Ct+IMrSgrVPr14jCaWeahz4+qJZ3nMtiAFKNIGeTgglaQij4vCyf41DgT1CGsnmC0Qlo1flcw0LZa0fGzmcqA1RV19XUo0wtaBMUeD0YbmkUMy9v3LQIOMiBF44CJjwSTOyNL1Zh1Too4aP95pcuXsJbGWPX4XvuuYcbLgInndS9xAWjsWBExjrs1+Y6LdJezamhJGmN8hs7w1FErFv8itPpvJLjbuCDRxGIJnBNvcejY8jjWchF0MauvytWrOADV4GAJUnVGPBrdMVNveoyOx5HFbBIAvc1x8+49Wt5VWsdUJsYQCSuInDkp8MkXg/Vty6WrcMKKOVL+qa+zAwJq7vXo4qbUY0cTLHxdxAP/LcpEhSm8gPGdOOEFX9J3nFFgMyGdeu5pbAMsEJbNvqLWdLAr+iVGwBbzZWrCFv3Ol53go1IpKVZ/4JvNk89txn6uqAEjh8kJmBcNwAnyTjWaSRG0CU2xqrIOJVJ37FQf90/pjv0ozJLjMQE4jPQMsyztQ9mouVLZb7wVQDwSSkTEGIn3wi3RNePqlfhuaxjNBCMwzRT75o5qA1SKekSI2kuVl2NaWn1JQZZXtTOC7nkG7ysqFwQwaehzw8c+jj21ac4xO5unPAAU8du0A1Nj/IDwI7GOiwSFYnLSMdKga17NHMtf/RhAM7ayvQsmEJAcDaWb8eKDtYeZY41k4xj9b3G7iyxAq1+5JkRKLNP+poRizt7Bs3e6YR0xMJjLE9xiVl/8ZjeSXz6avh37yvAItNRiuugBDJB4yoH6LkfLV3G2/0r1tWDB/8zN2wowJadx8U6L9d63Y0UEoluTGQdFvHneOsED+THiXM0/FRkxGgkysZZuYK2Ao+kW+yucSLRUUoAK1/4jbUeS4mopbGaJXZwX5p8Ij1D0EPclqdCx5mv9gUCUGwalpoWUTMzZeNqXgUK47We5VVSLyloQVNJ3DgA4maNqEkuowEg2TJFd5U+jF+reeMHBJuOoaZHOBqZtHE2v2JVe0ZWhOAw3s5Rb/hEgEJPErnjVxORAlb5mm7Um/aIs6orakBmVPAzKpGOVmZtvM2pZDxYDl47Y0toYikgh0DSYKq4GV+WdMJoG7SEZqBXdqvTsMsJiYuNxdgekxC1fuMXQLvxSm2iQFdTQKNBiGzGVnk9Fg6tm/s+2vso6OZIsRL9MHeG57G+aq5ZRbShaWuG26hG3owM2jiaW8Gc+371JBBPybC/y18FJV6i3r1hd1m/xB7ZJQ7aAaVO7OhICNhKDQOSm1pspDZhaWaaTVtwhf7tBx8+AHDkvKDhNM9psCyGgoRWdw8HAOYvl6+cxnFumOSUhsFxN2eOzyBixE8rB7R59UB1QBzw0RJ4aIlEtgozOzmdS5YsUS+lh4HKOQ+rwavAUwIW+MZ7i3NPPvn4lUE85D3G2GyRMzdcMIypfo97jxmHqxiHnIeFHiu0+YMHDz57xWW4MaNFwBmWTgvaFi/AsIJttr1eJ0W05YpA9oCZgCrwMnJKQUcAHgrZpsjxKyRkTnkM+FOiy0bAWVyiXekQgqIfa70XBFoCDy2RyFZhZqemc/eu9+8HUNTkE3gQqgSk9KDApiXh8ePH3/ZvGVTrr9iZBK+B41eXhtCiRbnKc4ytTxi1TV1vm4ygvGxeRoEHvGgcvA8EVkkKEk2OJHRkIc1QBO1IMbd29cN8PNotPzkDq/wE/DHpUm+aDe95vCL/gEm3XfQuo9olQzYfpcrfDF5QSrK3KyoIRAIq4Muv8rs+eO9+WLr1UHWHZY1XA1LCS2AxS1zKDNqafp5d9STnbs34W0HvMqsVEmvTWKrcaeDFpo0vLEI68jLfA71HCbg8loZBj4NVHbx5/oKJ+nlIV2qb4UUvX4OMqc1vfOHFm2HR1vW6rTPX7oU3mvmbf+O8c53lHT0+NaFj6MtBhg6ynoBauniZuk3RvJ2RwtgjkMssDOIlbZ7v8cy/ccFEWLV9nW77DHZCIY5GHvUmB0RdAiEManzpB6oye8A3Utz9wR56z3DWGCDOqSGvRqv+0F0pPz3DPsfDAq2+7or8JMJhIs9JiVv/yQqjVfhVNlEElPmBRbNpZ95bjF1PRcwOFzEedsQq56gqKIbnTwMaXeiRpjwriWSlDiOpS1AamWTTVKq4aq+usbdYsGYClHam2a8nYI8ePRoolYWe/+uAVaE7v2+fOpDQsXXXvppX/zfN2priY4//7HFAuNd9TU7nlmZT0QzgKSuldxz7Xt780v8J8zcmT56coT1/eLXODBqoz2YK/Qf27//ZwvkL5k2fPv3eQE8dYmlB2yEFXY9sPrL24Yt7enqmAGkuOQJTwElL0fPrANLxyhDoFg9+7/u3/Io2yo2Y1hfm0y5KAbD7pk3/9r2vvfH6v0T56wQ3C9pOKOU65fGOO+74DwBbr0mO4OM/KhOoJmAd/4W++1atWkk9lnqG8OlTwRg0O4bWkQqAncFzr5GeOsWRjLY/y4NKdYDjSIxNc/Dn7OulRpR/ulfsS9/cyxtfXASjW9cgdV8pOVfWcScVN3KYNDpVbyVtp7TONeTztiVLz8c4coZI2a4uVBsCEDQBZEjKaOKff/75F4u+/wPVLRafz2zYsAEE+hQRZ+grToHfLkTSDfX0hnXXBnroJMtOba1svktSrxIvho9BwlGaGhKVM8I0UgLyF6Fy8+ZhI4YhZUXPNVY1s6w3W0TQcOJGNHp92JXYQquTvlbSdlILXUVeX9n80vfGTZjQ7Y4/NQ1nLJvJUALyB+CqnyeKQvFvcBZ28xtvvBE4eYS3drao8XCMMW2heCZTyI5kJp03+ZtXzJk7zhNPhxksaDuswJNkF8sr5373lu/dAkz2Vgo3JtuVGQP4mmoQapGeLTbtRb9969at0PdRSlZS2exYJENNWM0cP368BW0lhln3zuTA41DI+czKkIIvejLHthiv3gsVxbl33nv3d3Qvn2kuD8VVJiHP8XW5j86x8TaNnZNvm9MKHHh6/Yar2RWlNwFLZBCvp749u3fvevX11wK7xSadfXv3fhS7UdAB44DcjKPd9Ba07VaidcoPNkH8AGCKJ2V9ceICtqFLLrv0//JZBxoBwMR1EBNYXOftWJWYYR3LqQ7KOA+ic3lFZZnjzViikKtAaka6byVUXHZNnzFjhldIh4QseeofgArx1RHWFrQdUczxM3krXqib8Z1vfwchZhIn7Io6K7LRNIhr+O07sG//vl/88vlPo307rlz/jePP8VNw245O38qYjTNzF5+x1mercwBd27fHT+i+UvKhpCfQy2WdSurk0PA747rHX1XJn7gD4I9Omz79PjYKccapbBiGh4Z2ohNwhdDoxK+VtJ1Y6iF53rjxhUUA7DmOMyQbursEU1cxmzmTGcFZnBEjpD6ZQyThd6ow8jdPPPXkOsNDpPamBQvPBWDVLDDXanXXWoUJEiSgn8F2jsyHu/fsiiTcCY7CLPuNv0OoHXk1a5a6xNu9n4l7nbzKuU3Ra+eYsDmqeOjjg8/A5IKvkr5084X37K2fvtoxBUu95yq/zLn9MXY8ldLRiu4dnflWLLBGpZl3LIF2qHLBA4QG3PSfw8vpsW/uxzs69yGiHCMjXf8mSGXHlsCn7IEBp1G03eNO6E5VyOPDD63unQol3oAV0apGnQYZc6ruMg8MiMJWxc0bN218+92daqOEWId9165e04vloMvg3ks/pOcfLUtcdDdU/1vbtm8zzJ2rZQHZX2fzQF9d6pNrJaNIWWWjBaDY4fHot+LWH84Ww29OwsrTHRUOHDgJcZ4GsXUVeDWazM5tuDo559u2bbuDk08CvDi8oF9KQ3xjr8my+/yYsy2yV4fN8Igf9ZVmphnPdiQ0Tto6wo8Ulv12nrRVdxcbT3qIBOS9xDKkpJ3Yo46YKrd3Lx7HitFT4zs9XEqSwBE0nTGuRK4D2LGst27a7kaMShenYraiH8z4PusC0pj3kcvEHcxw1tjzvivM6NDG7K5yVvrL48dK53GNeEifXeMzBdIrOfj0ufXr118Lr7auah5YRnRoZcCE0EXAS05N3ZbwQhwFqq8B3NMjp+AGECMcDxTAULH+KAkbgz7WYUHfefrSTMA/fzb4apx4OslPRaZ3EjM6Ka+VJp/AC49ypC+lbrGo73eqWHcGDh56Ft5zDFNJmbg2JG2eT14ibMW4OsmPnYjqiJkLbyb37Np9P7YbOgcC4MQKX0llcbtEETujoPrwDMfqSv4PHxp4tueCqVNBuzfOvcYg7qZDJrle2rR5Y6fvMw7kcye1UDavxYw5+eRKNFPMgUlRSj9FqQAGf4FfAha0cyU6joQumSvq8lpKB9JH6I627+jMd2Lhc/KJkCFO5UdzReV4zvlfbEc4Tx0i2AhYt0GAh5E4mDUaDt1199D1x9PJZts9Dux/tKflw2vWXjT1Wxd8i7ljR1d+sXKbzfS9tHnz5p36ipigMNIlRvfWXYulPyzFVlbwo4EYe+23MtE29dHJLVan5V0/4qyWWSgJTWkIXkQqhI28KBzn0rl3ORdJJMJRpyWvX+QTANuvrycDFtodUW3aFpdla/vWbbdj7kndYpjFvBMne/ijAmDK/Pss+p5d//NnfHbKeMXc2eNODB/f0TMFb/wUsZ+44J3U4tF175G+ICqU+tm+t7G3+I677vxNsA9r63KAyLW/9ubBdxcs5AvpxrE7mHyKa7Dc5KDUCAaYMsbE9x8HPn0e9mX1hFsTcfB9h+vXR9M0mu/LKqlK+qVfbuA/f5zoaF9QejrFrqwgOiXjnZTPAby2jvxWVG53WQDrhMgtXDCPoPfUFU5IccKIYbzeK0bj8YDwOd219tD3x2fNJf5bRvkqY7tVjjVrHroY87eRUlZQ5IJWLDBG1WdfPfVk9uWz/sDcnBEQrkTBp/P75dMg8OKhb83R/LDMavMKw8mnOJJQwOT75vwAwkvwSsLCXin6lzBiF/wtrfuIf2xx3KFelm/zMgA/6oozu+Tjju7bT4PD6Yu48wlVpmLm/EfRMUnVhx1Jm82AHMO+9tprr4OmuvhN3Y9oTGiZfsv0RaeqsQJzAgyNyTvz58+ft+PdnSfL/FqLaA7UuxWw9OrbqlbLT3Rhz8ZgM4fwMVVJEjKAf4lHxrB+YiI1/fZhZvpn19pK2OrrSV3FNgrK0ksJD/gINIFDkMQDlge0Of96Kd6Y5WkbV5k0Tb3rIUTD7nqlXVUIautRBA8scyKY06qVZ8U9yy9E2jH5BCDiQLv6hYDItZblFyz3fPbZZ3yl3a0bH3/8D88oqW0MjglUOQvLb0UFL0PHh+0Y1uCryeMkerdgkgSyfksVOo28wNE5VyoCW856KD5R6uvCqeLvR76m39x996wg6FXdODLwyfNxutmni2eKXItV0TFSiZcCHPr/gYPwl1962R8IXfutvg5Z0Nah5UtTBVz/1DoeTo+1xAN/rqK0JM64fxgfVS/USZtE42KXnNJQGvNnu8TVA1TKwvxa0LYZaFG4eYJPKZF2Yq70hX85dI57kI0D7J7xbigVAanpwQK2voAFb92TFRa8bQDeXbt23Q/cVQdaBNy/dx/xljEBq4BoojBU7wBbgMuvnSWuP2BZPhasbQBWFuTC+Qsmon+bE0wRNKJKOrEJ/uKAfBGAdR1NGq5lmMYXyfDw8Lt2lrgxoM2iDKIXcq1rS3Dg8OHDz/X09CzjPgpUFbWBgWUrJ3kqZWIP3rUaGjqZue6669RWDJ7/SRJe6hHjw06ndxZARZ29rZQe6x7OAbsjKpw3LePyCG5WBGCdZz2ANgLHA7gY7XI3HssTwCIwzutp4CfgggLs8PDOhQsX3mQBm4BxCb1aSZuQYWn0/hUuAv/Dbv2mLG+AcBOJc7KutK3QPjOQDkspK+KWZ2G5xZHvAEQqhB8eOgnAzl9gtyZGcqpmxwolUTN9S6DBHHh586++D8B2E3Dqpz+Okc9ujIFNjGJWSHVJuJquzBgFWL4Pi/O2RoPgzdip4kjf8uV3320B6+VLI0xW0jaCq02kiW5wDt3S3mZEKV1u+UqcELL9961ctfKxx392QOzst3EciNEENy5yS7k2DhzYt/8xALZpZWiOlQlcrfpXrlix3AJW2NH4b9MKvPFZ6awYMHQ8dxoUcj2zmTkncKnUt1DsW7Vi5fInnnji75uZhk6Py3aPW7QGDA4Ovjpp8uSFTvILlSeK6pBPX7e4HyeB1t159132IrY68DYJCStpk3ArJX75eNZkKK7HqjXZOBNNdUi7SFmQ6sftjlssYOvA1CpIWElbBdNGOwhfosND0Ff6JF9Dk6VXhBhH/1u46vSa6659uqERWuKhHLCSNpQ16XTg4XR5PMuZGBqJda9wrblRI9lipg+TX/ssYGvlZm3hraStjX/ND13M5BBpbwabHjK8d0lPDMkabbUJ4jrsGNAaw8loQ6wqejCfyhb6//HQ4YMXXHDBj6qNw4arDwespK0PH5tCZfeu9+9XEXG5RV+UVq+Iz+rCJoqABkAv7fT918OfDFjA1ovbtdGxoK2Nf00LvWDBTRMvvWzWZZCovZku7C1mfxVfStgipW6titsdKWF9ikAePjl8Enubb/U5WeMoccCCdpQYnzTaH//4gQcRZqaxqUGRcCajuFWxNqX2FwOgHvoAMc7EvoOD8fNqo25D15MDFrT15GaDaK1auXyanOJxJp8ckYjzrqpL6wFatWlQM01600SJRt9ty5YttSd2SgxJg85ORKWhFCqkARe1vTLpvIk3x9r4X4FWJWcluZ1ZrT5sT1z5+JN2t1MlnjXb3UraZnM8YXxPr99w9aTzJn+TgFXzT/jjlawVn6mMFSNpiuRGgL6fb9iwwQI2Fuua7slK2qazPFmEvOl//IRxV/KIXEkRqAQxu8lOF7lmKSyTUFlnt9O111/381J8VpcmDlhJm6bS8KVl25att0/ontDdVTQBS09OsXF8G/e8LO4k9m3C0BLawX3m6+IpzEGf6cMVqgctYH0FkTKjlbQpKxBfcvKQpjPd9VOfYzKjA9Ii1opMehTWXJ5l1/jIkSO/mDp1ql3aScbYpvu2krbpLI8XIa4zfZQ+TYDFCxniq8DpYae4zTGxAixWeoeHv9q5EioktLVOEQcsaFNUGJKUmxYsnDh9xowZMM+knRq6imO1X6ITyulSe9djcSlN/8L58+a9++679tnJavnbxHAWtE1kdtyoHnjggb9SO58QQM0PZfX4My6BMH8khh8lrSHB+3mQ/d333/tdWDBrny4OWNCmqzwyANCFPRdM/ZY3WXUoJgpa+ZWI9+Ph6I0/e+Jxe/NEiSep19mJqJQVEZ+ZPO+887CRojHKkLL9e3bt3nXJZZf+tDExWaqN4kAdmvBGJa3z6P583TPXArDfVF1iZN+ZMGLXuA7dY5IAYadbXOgfGDgyYAHbmnXMStoUldvxoRM7JozvnsvN+zzFo6aOBMHKEJ5Ynocd29WV6VLHfxx/6ioaPQFF9y64jwVVPtuBmy+uCqdmXdLMAStpU1I6vJHiHGykUNJVA1b0haAzc750q/OwBDjBjZ8JWHqlOwELBx4CsGuxZEqLKitp01JwePEO52N7g5JTANKwLBPkVLITwJZsgnRqpthOPAWxpnXsrKRNQVnhZsPbAVhPWTjjWWdcWxGwFfKge9j92Ba5xQK2ArNawNlK2lEupLmz55y9E7saIEh7/UkhcI31VL+z1xwhaeHUfwR7irGUZO938nKtJU0WtKNcbPv3739s+vTpqyIwp2Z9K/WOw7JB4A9/dfK97nHj54T5sfatxQFPl6y1kt76qVXbFadP53bFaBVzH6N0qYWYNvfdunjpYrGz39bngAXtKJbhnVCIXt37pCaI9eBTfbSek1CFmKUkXWkGVcGz2X68RrD61ddf+2IUs2mjrjMHxtaZniUXkwN/uXLVtEcf/5mSslyXNbu/ap5YTxbHnYQ6g9OwxLZ6TxavuGPBFhNP27f8+KGf9MVMUmq9XTPnqu5/9Yd/8AeTJk2a/E0orDd34Sih2nHChoo9CjZuuDDg+CeffPIpGsDCa2+8/i+pzVCNCbNj2hoZWG1w596nyXXersh6DOgCtIePHPpFz9Rvtdx67LIlt07hJXbf/s6fTf/GxIkTzzvvT76peez0SDRI3V6FnqwjcMUO/vsZZuDgoYMA8Sd79+79qK1mzZlZ+2suD1YuX3EheJ7HT6sR0VT9LRTOIKxDBxJnx9w5s8bBIvVlS15sfXPL7YNHP3sF6SVPFF8gSItF/uc3QsV0V3QB4mdX3LOcvE89X6LS2NKJj8pYmt0IKrMqFjTYkOYaFAGrQJtfsWLFNBhSW7YPr1l78aFDh55DGvMAXQ5fVwkIw77iUdzFHPalP5/fPO5yfps70BAmtTyKSltLJjoqQ2l3W//UuqtRiXIErVSmCsIEPmOoEYqlYo73SsF36sqVz3MODAwooCJ9Ri9DCdSKGRReBXlUboqhjqvfrzKzPdMtpXbPs/FctmTpFLikjl9RaWqpxEZlpFXc2MojrUqx8vgrmLgl/YJOjt0/hEtNmeJlgnO3bt16B9LkdnvD8kU8jQiqTE/KoTKfKvJSA1ZIG3zP7/5g1/2wTw3fKqWlZRJaKSOt4K6loCtljIqD5NemhoaGdoBCKsqT40a+VI/0uHmV3Jl59uFIe3G7+cps+qeF36wDKbgH0SucAT040M3vLrTwVQ0edqe1xDxAKgoZ/Gz7dFw564pu1JqcW8l0n9ipSKyoNan8sh+MfjcPF6tfyy4ncsKxqgswNUkWhBqVZR9IYae8av6MFM/AXM4fAZzLNY1Iv73fLP4lOfyOkDw0OLK4Y86s2WfDlOr6mOrEpZ15SdKHZYfHpALJF+Fjq69Rcd3uo66gKjAagpde3LgI+lEry7e2/eYuASvTFJS/M4XTRf7MpDvoZAAC5zR+yKEGK+mYCueBEd4ALwk543gH5abnKvTkLX9p6rEgG4FlGmgZ5tnaBzOxEl+W/HDx+aiMOfhTSiqmfMU+6ss66qnw2jMuF+fkzqiU47atb5aNVxPlyZXGBhhDmGDmXcVBwPIHlSTOEPKmdX40eYqEVCzLih7iELF+ohn9+eBRju+UkgomX7Gv5jta3TnVDT7+JSbURjxj1qA8iR2/ope8umZgTwSsawdPonfWoHUo4tTBqusu9Gr5Mq5SfIXcplHuvSAvodgMdYgKZN3CGernDZc6WLnNSgE/yZWuqG5AdIu53glz08qQeTl27Bhnv8vAKhWe6TP1/i6vuJV/GTJMlSQxw0nYMN+12mtW52/C7DdoNY2/ceNKXYLiJrxV/JVtpBCRggxUU/mkQuEmxaYtU8yff+NEczaYafCk3d+gwD1MSTj3C49O8BIww8L67YWG375qs8qYE5pavPLwGD6pw0iWibKqMRzYvHHTolt+8P0fgMMzuf+fvJb9saY+SewM98UXX7yGzfM3JQlXrd8Pd++5/+JLL7kM+/FnmocaWGv0mYbYpP15ppkKPMFeYWff9D4o2g1DoaEYxNtCPdhP3TX9zy68UF12lw2+kodhalY6U5JOfPsWzl+w4PVfv5GuwwdMoP01iAfowoK3kYrSIpHEAM35N85reLeN2/zcGWGRQI5IVPkxOgye9DMv7BKXK49dHuI1h0MTr7Jhu/WHy2LtSroCyzHcpwza7J57uujl8SW3KSsHTHTt+2jvo6CUKoykKjFpY04t6dn7tx+xsPNh64xwUyoRaFHRuQ0SARtWbgvRIOidVXnBKvNgTv54QcllGh5WKKmyyk8nh5gCqjPOry0PH33k8DcwrlJS4ut0g8RlH0WTZmdJKQddw/hdDe1UJaaaDKQxDCs+0uVIAqn5sIhSeD9WrWOKHxcIOvzvC6eKH3/8Dw3dpvjii79chPi1BDMkI9JwCpWZq6xMjkfp9J0eOVU8deZruDvh3IqPhoaz3G+88cZtsy+fVdeNC9spdUGfifKD12/2pDmBAXRya9asaeqEH5IXictIx0qBrXswc/Uxs1JFKqvp5bXGASk2UPi6ltIN5aJ/o3brcI8wniPxbTs0wIfkmiAIzg79O2F07vKcvGp0z0BvWskxTqZR0ilfnZZEH39YxgECqcFKahKSJqbUkhZ9XtNd4mF3K5aK9pZ/+CeNWd7hmBLpKxsfmhVX6XX6THtvvlyQ5z77p6Ov6DPDzalflLYBStIq3wAvHivTH/VixjcHj83JS4x4UpOQNDGllrSUneIBMSl8aJMpPaZqxNIDpTbBhQSVAVYSGTfdGs95SuumglVXcB7EkLTKV/JQ61fTy7M3AlqpwEsqEpEWZtSaDn2wWknZOlUWtYm91nT5w3NHE+wwSRYwRg1IeBAQxA401LnU+1asHLWD91iWmcj8SNIlbWFmsfd//eFM93pMnoFeXfBWFyL1Skwb0FEVx1P40d1es16USWTQydX7ehQsg3J85lZwSYAnzWIZ8qVfpu348eNvN3rMiiTEqqNMT0hya7ZmftOST/IjFkPo0f6ieaAPUpeBIUmNQd0wVb6eu56WLl5yvtqdhcrtjaYUJSunozwTSv7GhHnM67FwauqFnixyM1PKi2uVWGPSSNN6bWqYDo62bFrcJR6p82714HG6M+rYmWsVpiFO3PAjxeHhr96FTV14oo/ulTUoEp2qnGJQ6TNBS/1pJ22Y8GnE+Loe+cRLDY+rpAf8McEX4BxpJWHTlO+6VArkuqPpfHrok+cjS97nKBWB1qLnOqda7iF4AA5KRuhq5uuRAZW2PNdY3ZlsxCHxMg1sLHhW1XNe1ZkEU25Mz387+k+v3HjjjamZjPHzZt06telEZcf848mn6ZBQr4cVNZcHoq2ZBu+3tqoGDqxace+0fzP1/ClxSLDAqGT/sakf23WWevQZRdq3Z/fuPb/45fOfKs9V/rltydLzsanh7X875fzzQWLmGOwUlvgRh5cqNhGPwaN9/IkfvOIHX8W+4aGhd555+uln/uS8b37317/+dbr24Hpz0TmmeiC/k2nocSJYEE+Ftvy6e8rJHVCqqTXWkyaqOxwWn2lv6pkLbW6pC8/0tsayQvDnrcxDTAsradukTcTSydXdUKbkDMsa6oZyol/qxez6z+Jhi+JIH2hucO2q0GBC7L47777rbgSdyeBhaRN7lRZIWkP29mP31Tu3Ll229JLLLv1pFUlIRRDhr/C71kQJvVrp1CW8KrQaW/ZOpYFWPIe8J1Zm60+9Nuf1IQMX1CAcW8/NEuqaFIw/AxNkjGND4ucG+VzaZoXj8kBvw1RZl/wJb8UcyJeYlmnayhi7UsRlXqf42/X+B/chr86MrO7axix/jzepULV0i2/VyzkewjAIbbEXM7+ipxv0Oe6XTtOuHyQrad0smx2XfNfja0GbvECSFmBD/avKTYnGGVa1Sd5cIgmuIiZI6MMHnPzDD/0E19IkrqgZtVMHEpI04yhfvEhIMdX3ISFPFctyLk4PseGJk/9q/aRpTFuRIXGY1ml+BuWiNiVhuZBSGbT+ymKC+ODBg1UduePRNFZWdULIkPayPVEt8hRwbzB/OgESL8xq+yFvimz18mNPw+Qv8yg/074W/aZNm76XFj7ZJZ+EMwOPrH344kkTz5uorkdRd8jgBdliZTZinTQDMKlGkrM+MhEEfR/eql2ZMBkZvotzzQ3X34C3WHuzmTGZ07iuhXFQyZu2WaXjYs+YzBn+K5xGvGrKqf+3u/fswhzaFc+/8MualpaSprsR/qdM/da3TLrkrfxM+1r0w8eOf1lL+LqGTUvr0Srp4IFukVZsud2dfzREKJF0Pi95vSkgdo+HV67IzRKk5UmLQdyR/95Y6ZdLVKtXr66qKw7ysdPZTL96i6GR++q1Hn7qwqXdqhQ9kZnKQmhmgSeJS86emgVbTfVgeP70YfnYZcCbH3gY3h+/38w0SRxK7/xpqfdqkOTYfEH3P8cs1qKCeGjQy+utqrHThLAN89swwo1M9KjRxqRNhcI1yjlYS9lHKQiV6F5deYjaKzs1OIOjMm/ByL/sHHZvu/J2juV5L00PYUdFa7NsffocAqeGd6lJSJqYEpQWtWGcs7R+1MCzWcAwBiuG02EB2vyuXfGfV1yz5iHeUVS2w4nxGmQD08Hu8PLlrf/6OfIfWFf17q9gntfJVt/5HBh/WLoaaZ+ahDQyk7XSvhmHrAEOZx1QLfNoCQfQUMUGrQ5LIMVNk1wZqvGu4lN/tIXYKwCb6UGvgJstGnWvVNz0N9qfflG+xJcG6D744IOmXQwfh18WtCEtuMm8L7DxILwucLkn/pIPwJWLewuCes/W1yV3GwhBa0DCGMe2X795m5mHNtY3bFOF8Hrt2sbcz1VtmVjQVgDtmofUTGte4dKVbs6olEZ1Xpb3AldSOuyRgcOxXrmjBEEQdSWMahQYXtNQWpGqYl1yz7fb7DCyGFhPnbeMOJ6N32hWKqYA9/zs2bNT9dh0IDPCmNSJ9sMnTvIwekWlzsNq8Dp4MioSAMV7i0+PnMnF6a4e+hibLSBh3QErSMm9yBq3TnpKQC3i/dbcl8ePvc3dQXDsiHJVXWPywGB1xYIK8cBmmD+Tv5S0XOJLGz8r7wqo66pwaxF7adPmReO6/3BcnFSP6cImBn1UBmv7UAZrYf+/ZMb2vbL55c0733v3d1H0MA59duoFF0yFn171WA5pgdRY/OvKjlVWbni6qbgy/f94+MiRP5pwzlU73n8vkr4btg00PT09zjnmLmdTSS1Z4oYU/hx2OpS4QeOD3bt21UK3IWHT1oqkKj2Qdv7Lw0MaajUZJWMg+bp+0XyfPH4i8pzs3NlzxulW3b0zmeFJi62/SdPUwym/detWPu7cEdJV8qnfj3XGs6Z4hIdqFEk4gx5P6Hy9bhAB1bqVT90I1TNRaaCl7wRyAOQpx2iDD1COZ4D/3uX3XBiWLwKWmyaiKTt9QAViPZ6F//y6J5+6MoxuO9vz8S7hVyDPxTHmVzWM2q/QO3Gs9gsJQLLuGKs7wUYkstk0Veua4OSMKmspdb2so+zwhxUg6pzsrMsvPfu4elVdQpS+DkmCtTRocysUlo1WjeJdw0jUqNUd5ht8yJEX8itxrX46vdw2avkM43HqEhSW0Gba65v3k5W+gNYfClI27OEp2uvW3DMBIiRIkspXMfONfNcH0aW+TvivS1VMqsMfD5/RaC9L6Qmo1BdQsyuRvBJQqgNeSVey9+pKPVYPyPKbNr6wKCgP6h5idr9CwO6pQKWo8vqwQMeWmz6oX5dXHEpsdXTkuaik+8IRrmll0rSImpmpWuJy3uLBlIQuP+esaox1WCltfFUYfMN2Pvn3EY+M4F5htg2lOqOkK0lyHVif180fPnSEV7V2dJnpC9zJGq3iNariO/LrlnkhpxvvVPI6lYkCY0clXW+++Ya8Mq6A57a8BpjCCp0zj557gzFJFPQYlbLjGixRSrr6h3VW2PgiKrl30g6n6LIn7xSbCNb6Ka6z47wxCKpyyUETnY5RdE9twprNtDlz5nDXi1pCcKRsqVK44IWHMOUHXND1JGriyKh0QXRNO63Pq+2Mo1hJkOdU1JNtW9+8A4DVoC2VhMmzkm0yHXsz7NVApZ7fqSgMMGrU06FBZh5nS1bqXt95/84nL2DRnhuPR6tKZwhZaQBgnwuS1mngV7PTsGDewomFMyO/VVLWN0OvpKOX/1WYdCPNRiEF9TEqDaMOlqjENctN3zGkpayBHiSgCpXHTqrvIZzLWxnDklaoVNDR8qO1+Xq/mGemqdX0at1cMyeUh8hUjSqf1mUe5MutT67GtOw0Pc9LsiLIr5aC149Ku3yVNUWFRFa6MimhQaqRyjRwAstK2FIlXTD/xomqWwz2NQqwim4LSFli061cNHTib/369eqBZeTdrRBmxTD19FNB5c1Zx3uXr7gwqLKZNP16rtuGresi7o4sI2f5xem+kl8mzyqUR2xn0My1ytxBR1YCs/IryailXKmEMaossyu5hunMJR7VtXVabuXdrGiyJOSxg69O3zQBFpTVR3322NljbDBeeCe8NJyq0zo74MriD0rTaNu1RCIbxSS2rGxhVQXwgFRPSqjip55LAZUV3uGh1M6YY1jj+UqDQIk+ZyzPFL5WR8C4B5nh7a/EA768oNepA/nnTEKV+Gl4SqLNP7Nu/dWtwveOrSDqdj1ZPqi5zDkuPcVKkpk/f/5EfCEZDKJoEL7GeVquA4qEcN3hxjO7vBq1VSpNs9KJx8R4zUtezQdAU4viOri5ju6Wg+J/+s7MIq+h2Ax1iArUDm68K1cKTr61VAqGXbx4MSeRNBkHtCXa7HKX76w6cWxox+zLrYQF0zx1Ub98ULftip6OlC4h/QncBONPT5rMHkalKWGNTItaM9UbKRAPlCEVHYuq/pYAGhCctQY/+tEVKM+bF/zrufDVkWXiz7eeH9CMrE/5aGLqI2Wg37VtKZ5nyaxOU8PDwzvGjx8/V+W7gPx3kQfGTRM1MoQ8dZ/9EFqcqcc/2kPbfxjvekydOvVWcbbfEgf27NnzwMUXX/zvwateVT/5zEfJuTodi9hHBPVgJ+rBFdURHL1Q9aupo5eHRDHzIWgUVDfLUKkulmR92CANYBlgGRGi0fYWsIrxwX+WLVl6/iVQBCx9KJ7VQ7CU0+jHncnrglORbttOlLQcJ83s6tJADWiBqy2ySNBqoriN8RdTpvZYCRvCZC574WEwpxekW1bVGapPuyqx9mOH1UfTvz3jL8Wilb71ZUXKc85uF5PoSkLWBipX7DrGav+SrkM7+KKxoaGTO1esWLG8WvrtHo7Xy6IX5FykpxtTDimkfa0p/6DHRpU/3MV1vFUBq3ggGWn373fn3zwZM0A55NOj1MRQwKyux1Mcg57ZcLyaEyfc/n8Ks8rDO+bMmmvXYTVwwCcXRNS//OKvvu+WD3np8pO8jLdODo/hSmhiE0UaL2tDwj38iDLH9hhFpBXc9MPNSKozg6s0dfzjXwdUpHVF4S2Ldh02vFL+aPHSKeBX2a6nJMVjnkf2zOLrMmDTiXXanH75sKXrfUsnHoUaK/2PrH6I77GqSuFIVpZkSXkKuWSdSGcetTMDckeP3ekUXk5c8tKHLEy2Va0PKktd2mqJDYRj1Zk0+2v5DMRhrqz5BRVo1bXDH1Cf3mEcbNWp7F7iygDhnVd1KRejHfbTo1MaXwpAsqrCX9tPRPGVAE5ukEGm8ptNt6r0mIRSSq0pZjNoKN6Zf+O8eZVeFKgqrjYJxPueerBY7U4M1iFfLFeh55Zxsdi3AKoO5NNBghlr71/5A01sic3W2NSDF9UpNOdCF9+c3obX5rytvu7oY3B126aoOjfs7RgSVxdky21TRLoj602kY6XAaXfn/mKkMXSCoy5gRQQehRlqe4A9utKZp6AU78qB5mFpNQbOMbDx1M+HtFU9b6vMoHDd/KBrei7MoYCVilAv4Op613atusnTeugDAVsn0LIsSUqXaUtcHVMNT91KXk3gNIc5evToK6oAkUg5EGAC1NQrL7X+gYQ1b60AubblbbV5u2rO3HG8mcPkPfUycVdTERjAB7180G2Y1aY7beHasmLpw+glKWsUaLUVA2/LuucxVaWTFsH52nuJKzRSl8y6/OxjJ447j4yBZ26RCB8rFAzf59VXnGqf2HQhYfH9GuWjwd/2rzC0JWjNdT+zVa9QLyKdWSGElnx1pWmZu4WQwVEpb7UWq18FlAYvkJ8VSkB6TH5vxG6nAJZlOCqFyIgb9duyZUvpChlEQlV+XYljX81fF7BOYDzVMfActA3LTzvQ5nq1n9c+PvqdK5tFysKnAiyGJ53yzlFbrdNeOXvO2ddff/0NWKfr9SyosXWqVZWT6McG9wF7YieasYcPq0MA3dG+krkCp+qoI1pKFRAvuPd/gvPJPRdM/VEySq3pO6sY0JppL0s1jls9itMb95U58NBNHZsn8uzk0PA74yd0X1UWl7VwOUDA9vT0TIXFTNcSGkhZnNxxCoS8lM0Qpp9AvTSc2MdihOtHPAOIp2OOO9axKgeyuWmWK1fcc+H0GTNmmMfs3AZJb1aqJTEuLRD5avjkTlzg1j47bGphTEBYjmEFsODbTLNM6F0AS31swCrP/FMCLGj3sbfTSYB1GcAK2eo/daG1HufUPF4CMwKVQ7/lj3Yhbw0rbwJW9norHhpjT5aL+tGB9vzALq7yee3Y+YSGFR4Komm0n35qUVjaYAAAFbZJREFU3dWoBDlVEYxnN1ghOEnhXSqIW0V8/jRg7W6n8HLlOmzQzL0CJvmny0ZPHCkG07r8jkof72l0+K8dRnBi53DHTgA2DVjgdsPi4r3BujSr/gSdh2U9UQqaU8Wv829uee12mBuWj1amfensWeP867AuWF1GOuwM+st1WN4NrZZ1TP/UK/6fLvINWaj8h7v3PIBvx5ZDy2fc2XjOQwG1KV03PN01t9LhtgN9cXbL86sRlR3zCdNAt1QGYCb5mURR+rphXI1DgeWgyyLXCq/aIdUNrScNJd7oxMv+Yl8ZJ6krrl9VKWDyVB66dtD6H3KbuD4QsLiEPUdWmUr4adol0QtQ1ZcBR+w2UXBBlU/iQpKAafjyIrBaKwfy4Sg5xA6T2whA006Hp5G1upa36uVwLsFQZnmYesNLbK0CrDMvkVcvENY5/UhIXfnRLHotmWgyR14JIMBqrRwgYSBVmZw/qJD2bqfgis1HnsH3XF14T/YDnKIMfZ4z0ZyRhlvL1tV6p71lGWHOUkph1/RV6C9VHlZI3TC0LI/qXVlIj43YoY8PPgt9aQxbgfEGCCN9+u7Z6tglHfI56hfpGBVwNN1wM3zgEg/SVL3SoFUEIGHb4dY+5KWu5Xvr4iXnq8ZSC0VDOHolJZno+tEaxdiIPyb/0SDwKhr4rmv624VeazJFxlGqPozUbx3WqVP5A/v2P9YuBVyvfDzz1NPXclLOYZHTIxEJqr4G6NSTkhqrnNjDA58SLPyLk3baW37dOjTKFrCh2Ax1SCvTNKBwt5BekjcqS3iNwDprwfs+qetXh+d5TFa2zz8bfDWteR+tdP0dxq+IO3Z32OWtofl98fdY6zYuHSffZSMM9AB2/svjx95W7wZbwEbiMtIRbE2V+/x5N5zL1l5aeKNOVK0VWvxy0gMnhewrALrcb5o3/1xuDwVvclUz2AhIHqslNbNfDXdgNq8vk09VfUPSUpmeVCYqjFlqf7FRCVyttNiuRYCGLXuIYkWCyuOdHW4SaCmeNCq97rwBIpCGDdqalEmHemVGI7xp4wuLQNjyPSYPWoZRa1ev8bwS4NYe4i0CkEH+3ArjOhbzduKpBBq5xVKBijyKw98SL+Pq8jwcv3D+gokI0DL1MA1pbRlmqVlL2QAhrXTc6hHlDy29rqQtw4tGVRxuYNBLaTWNXwPZrYGvG4I813kblY92p9sSFXX7m1tuR2ufC2vxXYkQWFuiLXWXuyX40MjKuOv9D+7DxFBOuOXhaV0kLQYhaGy5w2zNQ6vZa+p4nlfLg9QzTu1IImC18lQmZce1Av4qKG9L73gG3U7fbbNkyZIpfCQMDFHSFbjyKpr9dl4fsUwotxzv07I7zGpvrFIPWnZd1XlYXXkIWi730OhMILEF18s/UdXHCE9vrESdfjaWvCUfVKMXAEzyWvFK/a3pT/7n6569ERRSX99aIY2pZqJ6DyeiWxxVjaTCiR+uwfLuYm2f12/JpDr/japAvFRd72xyhhwBgBW+yff3I1/r866wgX894+5IYXR0uAZ7pmCswzoB1fOSc2df0Q1jR/K6EflONSNDl3icChH4l6D0A5YepV7STe+dTXXekeS6p28B1l3V5hE2hJzU43/wwwVgIEd9lmQkwnp5XBqe0B6/HNe87YsL9S9D1ou6VwwSrcdPvRLgToyUKgVohypvRSp5UxVJG/ksxezLZ3XcqZFdu3bdD5Dm3NarxJ54Ot3qhfPYaQCA6LZ+kgPMqkv9roXOqCcgLPH6HGu8ChXgy1+5tDm/4p7lF4bF2Y72StoRrL5tiH7+wL2iMsNQLz8VEHGwy71i+d0dxV/kvekYanqEcTLJK0VQIXKsDOy66UaexkTKrGQI2FHjWO5oOv7lsbeYb8W0ECbSOsRJBav0R4fNv/TixkXwm8r61G7pSh2T1Q4ZRzK4LXmcSuUDqKprpl2nPN/BGfHBQXXoIdYGCfIoDn9V4wm/ojRvVVe405fNmt0opA60+j0Wp26U6ojUlcivCVLTI7fLzW3zcSzBqk8olYPV4GMgj+Ls3Uafx1B5ThLaK2BGp2eRKtDet/zeGWj2c0blgLTlkbmvTauKev0KuPhr64MAHLOqzRFu70Sy7XR7iVeFWVdTcqeOII41e0zMIg7OCtvzrqMDVpSAwmuqQMt7c5UkQAVTFU3VKlVZqItUBKo6fG34Aq1cu96AwDHr0BDueyZYXWYZmfdpuYbKn+fidgeIitk8b+yZPxCQ66+993l0gYridLHqakzL0dCro2CYNDHvCZKuXCxJ4KukNLbbvmIeENebQtgFVt1g4VFA9gOtgvwH2RmB83v37n1srj1nnBqspCYh5mZ1o8IobVzQsvIZFTDPQ9wgkJ48VpkWLlPpsX5VQDX5afLI5VXwmFaBlRsy2oGH7ZSHVFTofXv/tuw6E6lQ8jUrXiU9wuS05E5F/qqtMJuwjML1aubH5EOYvhJfxN0f3uzdwI+aEbZgTW9jP+qVWleO8hlP1B6zckmFC/2WxnUtffUmZ4HxPjIfl8qjh5GXoaWMW2XcSd4If+L2RIJ4x3kAFR5j471/+9GjFqzpBSvKT+F11EGrlymkTgbVK2NWKthZ2WrQ6mNmo54vYXCc77IlS6ds//W2O4AeTirlVH7wxwUoLUqNkji73winkh8D5LTUgFdjY25xbJehBLLWUmVfTXpHNYOeK2RYk8JU8Jir3Df2KrfKBePcRMKdX8NDx3dwv255ZhwbkaYuMKmJy48wopDi3HLYySedwJpRrfu1xJ844S9t2vw9rtU94tzZlDi8mVg1XoM8oUxRkkTXTPXRekqbmN2/1F9wfdviW6e+teXN2wc/+6dXAcYcMg6Jx7PAONLG/Oo8057KAayPPx4/4AzCJzhPnPv8sy9e141lTWWH5Nnwo8SDahgvUqGme362b0V3kMsWAZWVFdavsMrorMP6/Wvz/zz2JW9fqCY/DQ1DoP5my1t3saFD+hTvRHqaeZR7l107Dzjx8LJaY3W2HKrwwgf9lXVYNnGuctxy4HHuzTffvH3eDTf+Mdwaml9Lv/H8TVSA+jKuUsVDZeBRt6QztdyrKpKGFSyoEtPeVPRjVlY3DLqK0OfUgfkUVMg5s+aOW7v64Yt373ofz1qobq80cio7brrNzEEvGDSt/X79Ztev4gEltgFYNBDcg2ylauNBBMYnwlGt/mNHpmYVjUkSVWFY06AImsGjn7+6KuaxN337oYQtFs54KpuyD/pj7nhSFVhLEgcgzWUc0ufy7jZMJHF8ym4v7N1GzQ8yv5l5FDv50i5QMa9OA+VxdljgdJPhoF6Z2/LrN2+zV5OWygd8ccuqHfSxM6OXIRyR4Kk2noqHMdPgq1EbyZfiESdWLiGhKqsGv9hFfT1eYfgCG9fhP3Y+6uGXD1HxnmR1AwYbMvyckbcz+nb+6lw4qHLBSVsToL590iqQuMtXUyqFI83SZBR46Rw8X7lypb1svcl1ASXR1LrH+GJHqMZkugKqvhxCu0Z0XV0D7KFU1yzo4jRziUfCO0Eq/YU0ZgBDoVLnGr2uyFsuOCPNmVa1K0mD1EwLwUUWUDl6x+BsWmAvonJPQgBqhvfS89Bgo5dneuoxIQhaseuB9Tv6vIpdWKy8ei9vSPfPqVSsdMYOG3TXhnds3br9Dh6Nk/3FUhn5ja0wS+rrHjbkUPvSxcumMJ3swuvbM5xegW5hBFySbl874jQsJSkIb3rzggSo+juCR8cKuUOHDj1n7w0efeCgGGNjp95+sySYRB0+fPi5np6eqQgz0wxHKlnTQutJP5uFi/YgZvVliKBAAXT8VgDUO+MndF/lt49r5maCSeedN3nSpEmTvw31b3umTp0wYXy3Du/mTdKr7AvIRJdOMLQqS2KUfGYKmkSX+nrCw4Zm/rq6HHft2f3QTRT41p+BEAfPB7ZBPfDjB/9G3Oy3czmQGLRkFZZrbr/6+mtvyGayM1EFM11EnqrBTqUESktYLNXBQICykhYQeEw2uBK7RaPpFDVIblu6rOe5539xxHUP0WBC5txvnDfpm//beX8yedq0adMnQ02cNGkiEtiFuDU4CzCOcSgwKwIcNjZQxcwI8gh3pMFJBhoi5pD+BMROaOVO/6RH3mSLDoizWU2f9BBONWQ6jO/TT378ds+He/ZBPfjggx/63K2xwzlQFWjJM2y9O/9xqPHd3ZROvaeKrNiZzFipnKzTMKtq72pgUaXC+6Uq5FiA+7cffpi5+OKLszgudvaE8eO7z4H638//P84fM2ZMF6XmeIjgqVBGVBqcho1Pi3OmqvFxwKQbEAehyuepzGmgHNDtcsDnwFkTgb/T2TOAqQYmJHKXrxE6lfkavGHzdpbDEyWR3Yaq/8vj//34h3v27Onbk9/9H3/5/Ke+5Fmj5YDLgapBKxSwdvvo9BkzZkCq9LLCm1LElVjwHCFZhNSofolPt9dgpETywG9Yl9bw7tGWeMEGxwGotuvnAP3A/v0H9u/7u70f7t69+5333v2dJ7A1WA6EcKBm0JIul3GeeOKJx8d1Y0yYzfbSrl4SlrRMJUDwf00/tehJV1SchsZJB8JACmsRqoKzi8sutCORCxibZtXY9MCBA3+HQ+Uf/cJKU2Gz/SbkQF1AK3GuX7/+6rvuuutubZ6p+sc0ePqS4rv6rwDLL9lJETOsiSUiw0kjQH2UEvqufzU5RaD7JWmxcGTg8ACGpfs5Nn3+hV/aLm8UY61bbA7UFbQS61vbtt9xzbXXXgOw9noljvio/uuCRZMwzdSLiiMlxa//66fp0HK6uBKHj34/aRxw8Ln3AED612+8/i9+utZsOVAPDjQEtEwYZ21fe+P1f6aeUKqzsCXZUGWCLtRThIMZvqR3x6UKoLhH+eCRI0c+YVf30KHDR959f+fJCJLWyXKgbhxoGGghdR77s+nTVvkkUtUJL4EnfleWkZnhEkbej9aGSM3s27t3HwB6+PPPP/8C2zkHXn39tS8S0rLeLQfqxoGGgJZSFhX7dQCmlzOuNQAnMKOkR8UGwU+bTnp5FT4U5rSf0jqpClz6oyQnAXpg/9/9PW6+OHbkyMDAJ4cPH3k2xjpwiYzVWQ40hwMNAe0/fzb4yjcmT75ZRpglEIVn6nTGWefMKtD5OtOwO4N1YIJU1j+5PEPlzs9inZUAHqvWUZ1JISM2bFgYoXvh0yOfHMHWyiEsVe3FywNDnx7+9NNX3vjrQcOv1VoOpJoDdQctb7y/8241gzzTzTnx5cOh6+bTmJLT1QOwGdm04fMPo5KUXPdk93Vw8ItBAL/ApRWClN1ZghPjazsxVM47a9OCHKg7aIGPHdglNVdh1BGGiQArfVuN8X7MRG8bPPrfjhYBWkjaLhxGOPMFFAFKUBKQO+3GhBasejbJ1XJgbLUBg8JxT/I1118nm+7RgeXeW/iM0z8WgDuE+3HrwiC2Si62gAzitLXrZA7UTdJeMWfuuB07d+7g2qzbrU3CWQFtNtPP5ZSeC6b+KElw69dyoFM4UDZjU23G/+rBBx7k/mMcJVMTRkKHAI6lss5ML3cRWcDG4pj11KEcqAto71ux8kKcGZih1mSNo2pOzzjmDBQKYGh4aOeKFSuWd2hZ2GxbDsTiQF1Aq/cbu7PFIl2zWCfFrC4S4kjR6BR19T+9fsM6O4aN5pJ1tRyoGbTPbPj59efyULmhlMRVZpwfVUs1XRlcdmb4cHYqCbjpcOTgoYP2ZgYPi6zBciCQA/WYiMqDsitlA2OBpeoqa8eyiapipu+7Cxfe9IrdHhjGPmtvOeByoCZJ++HuPfeTkikxXcoxNQyLRdcvLGBjMsx663gOVA1a7i+++JJLLgEHIWUrTzaJD5GyAnRsQ+zbtGnTxo4vCcsAy4GYHKi6e4zdgc/hAsNlagMFN1HoQ+Ax4y15KxT7sKH4L0oWVmc5YDkQxYGqJO3Da9ZeJBenOVeqJCcjkhZ7hA9EJdC6WQ5YDng5kBxtCO8u8WA8Kt1eL9kAE2ei9D4L6SLTFx403hXg21pZDlgOhHAgMWjxPu0idYGbJsh1WH1WPCSKSOt+3p8U6cM6Wg5YDng4kGhMO2f25We/+94H74PCTGfTBNdh48la3lvMFoKXkruS1o5nPYVhDZYDcTiQSNLitvsHQRSAZT83PmCZkLMAVnlFQIBupSw5Y5XlQDIOxAbtsiW3Tpkx/TszSJ6gE+A50Xl3O4UlQSaflDtwz2OxYX6tveWA5UAwB2KD9sEH/+qvgFR17E5IlUAYj4wX6Jk+K2mFk/ZrORCfA7HQxitkJuHhKpI1gWfq40ZZAnom87MnHv/7uOGsP8sBywGHA7FAe8sPvv+DTLbQWw+mKaCja7xn9+499aBnaVgOdBoHKoKWL6DjYbxu9VZNIHd4/E4vwAa6O5Z8TkP8YRdV3+bNmzdFeLdOlgOWAyEciATtTQsWTrzuhutvACTdUzwEnrPc41CkOasuggqJQVvz6lN93Wn/Sy+99LK9HTGaX9bVciCMA5HrtPrV92XcyaT2GEesyfLe4mIhi3uHu7gY5O5+koj5fi26xn3/9fAnR6ZM7blV7O3XcsByIBkHQiXtKlwh09PTM1V1afX+CeneMgpTT/OYwli1FqsAC3MB0le92s6wuP/prK4x/f8FF4VbwJJbVlkOVM+BUEk7fGLobTyofqVDmuuwwfgW8PpnkmlP0Dpd4kL/b3f/dtfFl17y0+qTakNaDlgOkAOBSMRdTVcDsOcIi/AGutIKQMWeX4LVD1jXnvNTxWLfw2sfWWsBS65YZTlQOweCJW0xk4OI7CV54o5HAsZQAyUAJYA9egSQcS+9QsiqwwA4xrfaXtamWGf/WA7UhQNlkhYPUz0KxHWJVOWQFA9yuBLVtTcmpRR4MW7VIO7/fHDwNYyJl+NW1XstYOtSTpaI5YDLAY+klScqAb5eU5K6vqEx7U09pp76h4ZODuHo3sY77rrzN2YYq7ccsByoHwc8oP1i8J9fnzj5G/O95DkJxZ/32R9uluDbs1AA69DQK5t+9fKP7rp9Ky2sshywHGgcB9zu8ZPrnrj6X0/6X88ti6oIL8WxuLf4TOZM4TScCWDMYHV19Q8e/eyv7125aiU2TF1hAavYYv9YDjScA66kPXHi2NsTJkzAEo+LYxU55pswVqXWAWuxmO3Dposj7AbbDf8NLx8bgeVAGQcUaLdv23LHNddefw3HsqYPY8zaT9B+iLVW7Bl+6VV7qbjJJqu3HGgqB7SkLeQhYWcGxKzGq9ugbrnllpcC3K2V5YDlQJM5MAZXwFz05729vYj3T9yuMJ7pwK3/H61ZvWb1FVde8eSf/umf/j9NTpeNznLAciCEA2OHh4eH6AbA9vGwzoH9+w/wxv9f/PL5Tx9/8omQYNbacsByYLQ4oLrHa1evuYhnZu+8+y67vjpaJWHjtRyIyYH/H05cgT5ToZfNAAAAAElFTkSuQmCC"})]})]}))};h.displayName="SvgIcCompanyBrunch";var t=h,n=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.667 4.089c0-.786.636-1.422 1.422-1.422h7.822c.786 0 1.422.636 1.422 1.422v7.815c0 .786-.636 1.423-1.422 1.423H10.021V9.19h1.369l.204-1.596h-1.587c0-.362-.002-.701 0-1.04.005-.564.218-.775.782-.778h.859c0-.43-.007-.836.003-1.24.004-.158-.06-.21-.202-.216-.34-.011-.679-.036-1.018-.039-1.002-.01-1.737.499-1.973 1.388-.071.268-.09.554-.103.833-.017.358-.004.719-.004 1.1H6.986V9.21h1.351v4.118h-.252l-3.995.004a1.422 1.422 0 0 1-1.423-1.422v-7.82Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};n.displayName="SvgIcCompanyFacebook";var r=n,p=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.915 7.509h-4.75v1.465h3.41c-.182 2.033-1.772 2.912-3.311 2.912-1.953 0-3.691-1.585-3.691-3.877 0-2.206 1.655-3.878 3.69-3.878 1.557 0 2.5 1.052 2.5 1.052l.96-1.052s-1.29-1.464-3.525-1.464C5.25 2.649 3 5.217 3 7.99c0 2.689 2.119 5.342 5.247 5.342 2.765 0 4.751-1.947 4.751-4.86.017-.602-.083-.964-.083-.964Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};p.displayName="SvgIcCompanyGoogle";var c=p,u=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 47 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.84 24H9.962C4.46 24 0 19.522 0 14S4.46 4 9.962 4h27.902c5.502 0 9.962 4.478 9.962 10s-4.485 10-9.986 10Z",fill:"#FFEB00"}),Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.176 8.801c-2.998 0-5.427 1.915-5.427 4.303 0 1.518 1.016 2.861 2.528 3.632l-.52 1.94c-.025.05 0 .125.049.175.025.025.074.05.099.05.025 0 .074-.025.1-.025l2.204-1.493c.323.05.645.075.992.075 2.998 0 5.427-1.94 5.427-4.304 0-2.438-2.429-4.353-5.452-4.353Z",fill:"#000"}),Object(s.jsx)("path",{d:"M21.212 16.687v2.786H19.23V9.199h1.387l.248.647c.421-.423 1.066-.87 2.082-.87 1.933 0 2.85 1.442 2.85 3.805 0 2.463-1.413 4.03-3.445 4.03-.397.025-.694 0-1.14-.124Zm0-5.821v4.428c.1.024.372.05.644.05 1.413 0 1.958-.996 1.958-2.563 0-1.368-.372-2.189-1.487-2.189-.396 0-.793.1-1.115.274ZM30.083 12.11H31.2v-.25c0-.82-.471-1.193-1.264-1.193-.62 0-1.388.174-2.032.497l-.545-1.318c.694-.498 1.784-.821 2.75-.821 1.883 0 2.924.995 2.924 2.91v4.702h-1.387l-.199-.622c-.793.572-1.536.82-2.18.82-1.438 0-2.255-.87-2.255-2.338 0-1.567 1.065-2.387 3.072-2.387Zm1.14 2.611v-1.368h-.916c-1.016 0-1.537.373-1.537 1.095 0 .547.273.82.867.82.546.026 1.24-.248 1.586-.547ZM39.029 15.866c-.694 1.84-1.512 3.184-2.726 3.93l-1.214-1.12c.694-.621 1.214-1.218 1.635-2.014l-2.626-7.19 1.957-.521 1.685 5.82 1.66-5.845 1.934.547-2.305 6.393Z",fill:"#000"})]}))};u.displayName="SvgIcCompanyKakaoPay";var o=u,a=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M8 3C4.686 3 2 5.066 2 7.614c0 1.647 1.123 3.093 2.812 3.91-.092.308-.59 1.988-.61 2.12 0 0-.012.099.054.137.066.037.143.008.143.008.189-.026 2.19-1.396 2.535-1.634.346.048.702.073 1.066.073 3.314 0 6-2.066 6-4.614S11.314 3 8 3Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};a.displayName="SvgIcCompanyKakao";var f=a,y=function(G){var z,ye,Ce,Ie;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.973 12h.2a.08.08 0 0 0 .08-.08v-.52a.193.193 0 0 0-.186-.187h-1.12a.24.24 0 0 1-.24-.233V6.873h-.974v7.794h.974v-.707a.24.24 0 0 1 .24-.233h1.12a.193.193 0 0 0 .186-.187v-.48a.066.066 0 0 0-.08-.073h-.2c-.613 0-1.113-.22-1.113-.487s.5-.5 1.113-.5Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("ellipse",{cx:8.233,cy:8.473,rx:1.187,ry:.487,fill:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(s.jsx)("rect",{x:7.047,y:7.427,width:2.373,height:.42,rx:.21,fill:(Ce=G.color)!==null&&Ce!==void 0?Ce:"#30373F"}),Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.2 2h-.113a.373.373 0 0 1-.367-.373.287.287 0 0 0-.287-.294h-.426a.287.287 0 0 0-.287.287.373.373 0 0 1-.367.38H7.24a2.56 2.56 0 0 0-2.573 2.547 2.507 2.507 0 0 0 2.506 2.466h2.094a2.507 2.507 0 0 0 2.506-2.466A2.56 2.56 0 0 0 9.2 2Zm.527 4.1c-.48.08-.97-.062-1.334-.387a.26.26 0 0 0-.333 0 1.613 1.613 0 1 1 0-2.406.24.24 0 0 0 .32 0A1.613 1.613 0 1 1 9.713 6.1h.014Z",fill:(Ie=G.color)!==null&&Ie!==void 0?Ie:"#30373F"})]}))};y.displayName="SvgIcCompanyLivinginhotel";var g=y,l=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 47 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{d:"M23.65 8.857h3.755c.59 0 1.105.074 1.543.22a3.01 3.01 0 0 1 1.082.614c.286.26.5.573.64.935.141.362.21.751.21 1.17v.3c0 .418-.074.811-.224 1.177-.15.365-.372.687-.661.962a3.166 3.166 0 0 1-1.083.656c-.432.161-.933.242-1.506.242h-2.312v4.01H23.65V8.857Zm1.444 1.227v3.824h2.07c1.517 0 2.275-.613 2.275-1.84v-.258c0-.59-.182-1.024-.546-1.305-.364-.281-.888-.421-1.567-.421H25.094ZM34.584 19.256c-.807 0-1.445-.194-1.916-.584-.471-.389-.708-.927-.708-1.612v-.386c0-.665.23-1.208.685-1.625.456-.42 1.196-.629 2.217-.629h2.027v-.457c0-.523-.13-.911-.386-1.163-.258-.251-.678-.378-1.262-.378-.467 0-.873.072-1.218.215a6.756 6.756 0 0 0-1.072.571l-.7-1.027a6.754 6.754 0 0 1 1.312-.692c.486-.195 1.05-.292 1.691-.292.447 0 .856.055 1.224.163.37.11.687.272.956.485.266.215.476.476.627.785.15.308.225.659.225 1.048v5.465H36.93V18.2h-.015a1.515 1.515 0 0 1-.314.393c-.131.12-.274.22-.43.307a3.067 3.067 0 0 1-.692.265 3.725 3.725 0 0 1-.898.091h.002Zm2.303-3.666H34.89c-.553 0-.95.105-1.188.314-.238.21-.357.5-.357.871v.2c0 .38.136.656.408.827.272.17.597.257.976.257.349 0 .653-.04.91-.121.257-.081.494-.202.708-.364.195-.143.332-.307.415-.492.082-.186.123-.426.123-.72v-.77l.002-.002ZM43.215 17.574l2.098-6.234H46.8l-4.14 11.028-1.283-.443 1.034-2.667-2.901-7.918h1.531l2.114 6.234H43.215Z",fill:"#333"}),Object(s.jsx)("path",{d:"M18.395 5H0v18h18.395V5Z",fill:"#00C73C"}),Object(s.jsx)("path",{d:"m10.66 18.12-2.968-4.265v4.265H4.599V9.88h3.136l2.968 4.265V9.88h3.093v8.24H10.66Z",fill:"#fff"})]}))};l.displayName="SvgIcCompanyNaverPay";var x=l,C=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.333 3.667h3.184l2.944 4.35v-4.35h3.206v8.666H9.46L6.517 8v4.333H3.333V3.667Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};C.displayName="SvgIcCompanyNaver";var b=C,_=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsxs)("g",{clipPath:"url(#ic-company-samsung-pay_svg__a)",children:[Object(s.jsx)("path",{d:"M27.744 9.825c-.345-2.6-1.265-4.956-2.888-6.681C23.13 1.52 20.773.6 18.173.257 15.691-.073 14 .009 14 .009s-1.69-.081-4.174.248C7.226.6 4.87 1.52 3.144 3.144 1.522 4.869.601 7.225.257 9.824c-.33 2.483-.248 4.174-.248 4.174s-.082 1.69.248 4.174c.344 2.6 1.265 4.955 2.887 6.68 1.726 1.623 4.082 2.543 6.682 2.888 2.483.33 4.174.248 4.174.248s1.69.081 4.174-.248c2.6-.345 4.956-1.265 6.681-2.887h.001c1.623-1.726 2.543-4.081 2.887-6.68.33-2.484.248-4.175.248-4.175s.082-1.69-.247-4.173Z",fill:"#1E4BC6"}),Object(s.jsx)("path",{d:"M5.156 9.897h2.513c.383 0 .735.069 1.056.206.322.137.6.323.835.558a2.6 2.6 0 0 1 .754 1.85 2.641 2.641 0 0 1-.754 1.86 2.607 2.607 0 0 1-.84.558 2.693 2.693 0 0 1-1.06.207H6.523v2.101H5.156v-7.34Zm1.367 1.267v2.705H7.57c.201 0 .386-.036.553-.106a1.299 1.299 0 0 0 .714-.724c.067-.164.1-.34.1-.528a1.38 1.38 0 0 0-.1-.528 1.276 1.276 0 0 0-.714-.714 1.412 1.412 0 0 0-.553-.105H6.523ZM13.472 17.247c-.355 0-.705-.066-1.05-.198a2.854 2.854 0 0 1-1.594-1.503 2.953 2.953 0 0 1-.252-1.245c0-.472.082-.89.246-1.255.165-.365.382-.674.654-.926.271-.252.583-.444.935-.577a3.052 3.052 0 0 1 1.081-.198c.389 0 .748.07 1.076.21.329.141.6.333.815.576v-.776h1.358v5.882h-1.358V16.4c-.215.263-.49.47-.825.62a2.609 2.609 0 0 1-1.086.226ZM13.694 16c.254 0 .489-.044.704-.132a1.63 1.63 0 0 0 .552-.368 1.81 1.81 0 0 0 .368-.548c.09-.207.136-.431.136-.67 0-.234-.046-.454-.136-.662a1.751 1.751 0 0 0-.368-.543 1.659 1.659 0 0 0-.552-.363 1.836 1.836 0 0 0-.704-.133 1.844 1.844 0 0 0-1.268.491 1.658 1.658 0 0 0-.513 1.209 1.692 1.692 0 0 0 .513 1.223c.161.155.35.276.569.364.218.088.45.132.699.132ZM19.597 16.982l-2.414-5.627h1.448l1.639 4.024 1.55-4.024h1.427l-3.51 8.587H18.36l1.237-2.96Z",fill:"#fff"})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"ic-company-samsung-pay_svg__a",children:Object(s.jsx)("path",{fill:"#fff",d:"M0 0h28v28H0z"})})})]}))};_.displayName="SvgIcCompanySamsungPay";var T=_,w=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.358 9.827V5.743l3.94 2.05-3.94 2.034Zm8.9-3.89c-.037-.542-.092-1.08-.284-1.599a1.794 1.794 0 0 0-1.127-1.117c-.3-.109-.618-.128-.934-.145a87.574 87.574 0 0 0-5.862-.122c-1.45.015-2.899.034-4.344.155-.769.065-1.348.418-1.647 1.142-.14.34-.226.693-.263 1.058a28.143 28.143 0 0 0-.036 5.01c.039.5.118.993.316 1.463.207.491.573.804 1.08.968.35.113.715.15 1.079.173 1.605.098 3.213.106 4.82.129 1.736-.02 3.472-.028 5.203-.165.72-.057 1.296-.355 1.62-1.02.172-.353.27-.729.312-1.117.176-1.602.177-3.207.067-4.813Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};w.displayName="SvgIcCompanyYoutube";var k=w,O=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m12.884 13.8.316-8.4h-2.4l.317 8.367 1.767.033ZM12 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",fill:(z=G.color)!==null&&z!==void 0?z:"#03936E"}),Object(s.jsx)("rect",{x:.75,y:.75,width:22.5,height:22.5,rx:11.25,stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#03936E",strokeWidth:1.5})]}))};O.displayName="SvgIcAlert";var j=O,i=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"m30.491 8.944-1.414-1.415L16.35 21.672 3.621 7.529 2.207 8.944 16.35 24.5 30.491 8.944Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};i.displayName="SvgIcAngleDown";var d=i,I=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"m23.556 29.991 1.415-1.414L10.828 15.85 24.971 3.121l-1.415-1.414L8 15.85l15.556 14.142Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};I.displayName="SvgIcAngleLeft";var D=I,v=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M9.444 2.009 8.029 3.423 22.172 16.15 8.029 28.879l1.415 1.414L25 16.15 9.444 2.009Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};v.displayName="SvgIcAngleRight";var E=v,H=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"m2.509 23.056 1.414 1.415L16.65 10.328l12.728 14.143 1.414-1.415L16.65 7.5 2.509 23.056Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};H.displayName="SvgIcAngleUp";var U=H,R=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"m10.707 20.646-.707.707L.646 12 10 2.646l.707.708L2.561 11.5h20.792v1H2.561l8.146 8.146Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};R.displayName="SvgIcArrowLeft";var P=R,L=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"m13.293 20.646.707.707L23.354 12 14 2.646l-.707.708 8.146 8.146H.646v1H21.44l-8.146 8.146Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};L.displayName="IcArrowRight";var K=L,X=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M30 19H2l6.304-6",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};X.displayName="IcArrowSingleLeft";var le=X,ce=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M2 19h28l-6.304-6",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};ce.displayName="SvgIcArrowSingleRight";var ee=ce,ie=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M2 6.768 6.12 12 14 4",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F",strokeWidth:2})}))};ie.displayName="SvgIcCheck";var re=ie,de=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"m3.263 3.263 9.474 9.474M3.263 12.737l9.474-9.474",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};de.displayName="SvgIcClose";var pe=de,fe=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M8 16V8h8M8 8l7 7M24 16v8h-8M24 24l-7-7",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F",strokeWidth:2})}))};fe.displayName="SvgIcExpand";var je=fe,he=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsxs)("g",{clipPath:"url(#ic-hotel-type-mini_svg__a)",children:[Object(s.jsx)("rect",{width:16,height:16,rx:4,fill:"#979B9F"}),Object(s.jsx)("path",{d:"M3.418 3.516V12h1.71V6.422H5.2l2.215 5.543h1.172l2.215-5.52h.07V12h1.711V3.516h-2.18L8.047 9.27h-.094L5.598 3.516h-2.18Z",fill:"#fff"})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"ic-hotel-type-mini_svg__a",children:Object(s.jsx)("rect",{width:16,height:16,rx:4,fill:"#fff"})})})]}))};he.displayName="SvgIcHotelTypeMini";var ve=he,_e=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsxs)("g",{clipPath:"url(#ic-hotel-type-residence_svg__a)",children:[Object(s.jsx)("rect",{width:16,height:16,rx:4,fill:"#979B9F"}),Object(s.jsx)("path",{d:"M4.924 12h1.758V8.988h1.341L9.646 12h1.946L9.787 8.701c.967-.416 1.5-1.26 1.5-2.42 0-1.681-1.107-2.765-3.035-2.765H4.924V12Zm1.758-4.441V4.957h1.242c1.043.006 1.553.469 1.547 1.324.006.85-.504 1.278-1.547 1.278H6.682Z",fill:"#fff"})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"ic-hotel-type-residence_svg__a",children:Object(s.jsx)("rect",{width:16,height:16,rx:4,fill:"#fff"})})})]}))};_e.displayName="SvgIcHotelTypeResidence";var Be=_e,De=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M3 8h10",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};De.displayName="SvgIcMinus";var ke=De,Pe=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{d:"M1.3 8h13.4M8 14.7V1.3",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};Pe.displayName="SvgIcPlus";var xe=Pe,we=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{d:"M7 2a6 6 0 0 1 6 6M1 8a6 6 0 0 1 6-6M1 8a6 6 0 0 0 6 6M7 14c2.22 0 4.16-1.207 5.197-3",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("path",{d:"m10 6.464 3.464 2 2-3.464",stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};we.displayName="SvgIcReset";var Re=we,Le=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("rect",{width:24,height:24,rx:12,fill:"#DA5542"}),Object(s.jsx)("path",{d:"m7.263 7.263 9.474 9.474M7.263 16.737l9.474-9.474",stroke:"#fff"})]}))};Le.displayName="SvgIcResultFail";var Ee=Le,Se=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("rect",{width:24,height:24,rx:12,fill:"#03936E"}),Object(s.jsx)("path",{d:"M6 10.768 10.12 16 18 8",stroke:"#fff",strokeWidth:2})]}))};Se.displayName="SvgIcResultSuccess";var Ve=Se,He=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m8 12.23-4.702 2.242.678-5.165-3.584-3.78 5.121-.95L8 0l2.487 4.577 5.121.95-3.584 3.78.678 5.165L8 12.231Z",fill:(z=G.color)!==null&&z!==void 0?z:"#979B9F"})}))};He.displayName="SvgIcStar";var We=He,Ne=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 122 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{d:"M97.358 47.642H24.642A23.644 23.644 0 0 1 2.792 14.95 23.642 23.642 0 0 1 24.642.358h72.716a23.643 23.643 0 1 1 0 47.284ZM24.642 1.19a22.81 22.81 0 1 0 0 45.62h72.716a22.815 22.815 0 0 0 16.135-6.678A22.811 22.811 0 0 0 97.358 1.19H24.642Z",fill:"#30373F"}),Object(s.jsx)("path",{d:"M97.348 44.562H24.652a20.56 20.56 0 1 1 0-41.123h72.696a20.561 20.561 0 0 1 0 41.123ZM24.652 3.716a20.284 20.284 0 1 0 0 40.568h72.696a20.284 20.284 0 1 0 0-40.568H24.652Z",fill:"#30373F"}),Object(s.jsx)("path",{d:"M28.257 18.98c2.995 0 5.18 1.768 5.18 4.001 0 2.013-1.768 3.658-4.296 3.952v2.823a94.62 94.62 0 0 0 3.853-.148c1.227-.073 1.915-.22 2.504-.589.775.044 1.546.143 2.307.295.614.122.933.417.933.76 0 .516-.32.761-.933.761-.32 0-1.08-.049-2.135-.146a63.605 63.605 0 0 0-2.922-.05c-3.19.05-6.43.147-9.67.32a4.25 4.25 0 0 0-1.938.588c-.884-.073-2.185-.638-2.897-1.129a.794.794 0 0 1-.343-.564c0-.246.27-.32.785-.246 1.063.176 2.139.258 3.216.246 1.988 0 3.853-.025 5.62-.05v-2.846c-2.627-.27-4.443-1.915-4.443-3.977 0-2.233 2.185-4 5.18-4Zm-8.001-1.398a.806.806 0 0 1-.294-.59c0-.22.22-.343.687-.27.938.176 1.892.258 2.847.246 2.184 0 5.792-.049 7.363-.172 1.08-.098 1.694-.22 2.233-.588.718.053 1.43.151 2.136.294.564.123.834.417.834.76 0 .516-.27.762-.834.762-.295 0-1.301-.099-2.013-.148-.589-.049-1.57-.049-2.577-.049-1.497 0-4.516.074-6.112.246-.61.045-1.2.238-1.718.564a5.958 5.958 0 0 1-2.552-1.055Zm9.817-2.332c-.711 0-3.116 0-3.877.074a4.948 4.948 0 0 1-1.694-1.203c-.245-.295-.073-.614.515-.49.27.048.909.146 1.301.195.712.099 2.7.099 3.805.099.687 0 1.055.172 1.055.613 0 .393-.54.712-1.105.712Zm-1.816 10.53c1.67 0 3.46-1.08 3.46-2.799 0-1.717-1.79-2.798-3.46-2.798-1.718 0-3.46 1.08-3.46 2.798 0 1.743 1.742 2.798 3.46 2.798ZM43.77 23.448a.514.514 0 0 0 .589.564 38.26 38.26 0 0 0 6.259-.638c.638-.147.834.663.098.933a24.685 24.685 0 0 1-6.897 1.3c-1.448 0-1.767-.858-1.767-2.33v-4.959c-.27-.466-.933-.835-1.522-1.006-.736-.221-.712-.884.025-.884.662 0 2.086.172 3.068.172.77.03 1.543-.012 2.306-.123.409-.083.789-.269 1.105-.54.58-.049 1.163-.049 1.743 0 .564.025.859.246.859.663 0 .614-.491.76-1.326.786-1.742.073-2.7.073-4.515.172-.025.294-.025.416-.025.441v2.283c.452.02.905-.014 1.35-.099a3.15 3.15 0 0 0 1.227-.49 10.92 10.92 0 0 1 1.546-.025c.565.025.786.27.786.638 0 .614-.417.737-1.252.761-1.448.05-2.43.098-3.657.172v2.209Zm5.719 10.382c1.866.052 3.734.003 5.596-.147.515-.05 1.251-.246 1.62-.59a9.715 9.715 0 0 1 1.89.074c.49.05 1.055.27 1.055.761 0 .516-.442.785-1.252.761-1.693-.05-6.332.098-9.032.098-1.374.098-2.135-.54-2.135-1.914v-1.276c-.221-.565-.81-.762-1.375-.909-.736-.196-.687-.76.073-.81.737-.049 2.357.123 3.216.148 2.258.049 5.473-.099 6.799-.197.074-.662.122-1.816.122-2.454-1.767-.098-4.54.098-6.283.245a6.014 6.014 0 0 0-2.061.54 7.44 7.44 0 0 1-2.21-1.129c-.441-.392-.048-.736.344-.662.393.073 1.472.147 1.866.172 2.454.098 6.21-.074 7.485-.148.933-.049 2.038-.123 2.381-.172.54-.073.736.172.736.393a2.947 2.947 0 0 1-.294.908c-.196.761-.466 1.62-.687 2.234.54-.074 1.203.024 1.153.613-.024.442-.49.54-1.104.491-3.338-.024-6.357.074-8.394.172a4.619 4.619 0 0 0-.025.515v1.62c0 .417.172.663.516.663Zm5.154-18.629a11.31 11.31 0 0 0-.172 1.767v4.173c0 1.006.074 4.148-.933 4.148-.368 0-.638-.54-.638-1.645v-3.338c-.24.027-.477.068-.711.123a3.686 3.686 0 0 0-1.13.417 4.605 4.605 0 0 1-1.84-.785c-.442-.393-.148-.76.27-.687.294.049 1.325.049 1.816.049a15.434 15.434 0 0 0 1.595-.099v-2.92a3.915 3.915 0 0 0-1.718-1.105c-.687-.245-.614-.834.098-.834.565 0 2.675.22 3.363.736Zm3.804-1.35c-.103.584-.16 1.175-.172 1.767v5.768c0 1.006.05 4.148-.957 4.148-.368 0-.613-.54-.613-1.644v-8.836a4.329 4.329 0 0 0-1.816-1.154c-.712-.245-.639-.834.097-.834.59 0 2.774.27 3.461.785ZM66.376 17.925c2.601 0 4.516 1.694 4.909 3.952.81.025 1.718 0 2.675-.024v-4.86c0-.933-.908-1.301-1.841-1.62-.294-.123-.442-.246-.442-.393 0-.196.221-.441.688-.441.441 0 2.871.343 3.264.54l-.099 1.3v11.389c0 1.251.025 5.694-1.03 5.694-.368 0-.54-1.03-.54-3.044V22.81c-.246.024-.466.074-.638.098-.333.072-.65.205-.933.393a5.765 5.765 0 0 1-1.006-.295c-.123 2.602-2.136 4.59-5.007 4.59-2.995 0-5.007-2.11-5.007-4.81 0-2.7 2.012-4.86 5.007-4.86Zm.024 8.395c1.841 0 3.264-1.424 3.264-3.633 0-2.184-1.423-3.633-3.264-3.633-1.84 0-3.24 1.449-3.24 3.633 0 2.209 1.4 3.633 3.24 3.633Zm13.254-11.364V29.24c0 1.277.025 5.694-1.055 5.694-.369 0-.54-1.03-.54-3.043V15.422c0-.59-.614-1.055-1.817-1.522-.27-.123-.466-.245-.466-.393 0-.171.246-.417.737-.417.441 0 2.822.32 3.24.54l-.099 1.326ZM91.313 15.692a14.024 14.024 0 0 1-1.3 3.166l1.398 1.13c.639.515 1.252.956 1.964.932.564.49 1.62 1.522 1.865 2.233.32.81-.417 1.473-1.227.81l-4.565-4.148c-1.35 2.037-3.216 3.706-5.498 5.155-.688.442-1.153-.172-.565-.663 2.675-2.234 4.811-4.983 5.719-7.878-.122-.394-.638-.835-1.227-1.13-.736-.368-.27-.81.32-.76 1.128.098 2.674.687 3.116 1.153Zm-5.105 15.487c-.172-.441-.614-.736-1.178-.883-.737-.197-.687-.761.073-.81a26.14 26.14 0 0 1 3.02.147 6.825 6.825 0 0 0 1.914-.147 27.35 27.35 0 0 0 .122-2.43c-.417 0-1.399.073-1.767.122a5.602 5.602 0 0 0-1.693.467 5.154 5.154 0 0 1-1.841-.908c-.442-.393-.05-.737.343-.663.393.074 1.277.123 1.743.147a22.18 22.18 0 0 0 2.283-.073c.932-.074 1.84-.123 2.184-.172.54-.074.736.172.736.393-.06.297-.16.586-.294.859-.196.687-.417 1.62-.565 2.184.467-.073.835.074.786.565-.05.417-.393.49-.786.466-1.202.025-2.208.098-3.435.172a4.555 4.555 0 0 0-.025.515v1.522c0 .393.122.565.515.565.737 0 2.75-.393 4.172-.835.565-.172.81.49.099.835-1.498.736-3.608 1.448-4.614 1.521-1.448.098-1.792-.785-1.792-2.258v-1.3Zm11.487-4.884a57.472 57.472 0 0 1 1.89-.147c.539-.025.662.196.638.417-.025.22-.123.59-.172.933-.123 1.104-.393 3.755-.565 5.203.442-.098.884.024.859.466-.024.467-.221.688-.883.688-1.522 0-2.774.024-4.124.049-.024.294-.319.76-.662.785-.344.024-.59-.368-.638-.933l-.417-5.964a1.58 1.58 0 0 0-.958-.859c-.638-.196-.663-.785.05-.834a12.81 12.81 0 0 1 2.527.245c.818.047 1.639.03 2.455-.05Zm-2.43 1.055c-.025.344-.025.491-.025.59l.123 4.957c.957.025 1.963-.049 2.945-.122l.049-5.498c-.785-.025-2.184 0-3.092.073Zm4.32-13.499c-.104.584-.162 1.175-.173 1.767v4.64c.246-.025.492-.025.712-.05a2.378 2.378 0 0 0 1.375-.638 9.504 9.504 0 0 1 1.669.024c.393.05.933.246.933.786 0 .515-.565.81-1.252.785-.712-.024-2.013.025-3.437.05v.049c0 1.006.05 4.148-.957 4.148-.368 0-.638-.54-.638-1.645v-8.713c-.515-.614-1.448-.982-1.963-1.154-.737-.245-.663-.834.098-.834.614 0 2.945.27 3.632.785Z",fill:"#30373F"})]}))};Ne.displayName="SvgLogo";var Ue=Ne,Me=function(G){var z,ye,Ce,Ie;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsxs)("g",{clipPath:"url(#ic-clock_svg__a)",children:[Object(s.jsx)("path",{d:"M8 15A6.5 6.5 0 1 0 8 2a6.5 6.5 0 0 0 0 13Z",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("path",{d:"M5.657 2.121C4.485.95 2.744.791 1.767 1.768c-.976.976-.817 2.717.354 3.889M10 2.121c1.172-1.171 2.913-1.33 3.89-.353.975.976.817 2.717-.354 3.889",stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"}),Object(s.jsx)("path",{d:"M8.5 4.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z",fill:(Ce=G.color)!==null&&Ce!==void 0?Ce:"#30373F"}),Object(s.jsx)("path",{d:"M10.367 10.827a.5.5 0 0 0 .574-.82l-2.458-1.72a.5.5 0 0 0-.573.819l2.457 1.72ZM12.124 15.363a.5.5 0 1 0 .94-.343l-.342-.94a.5.5 0 1 0-.94.343l.342.94ZM4.064 15.363a.5.5 0 1 1-.94-.343l.342-.94a.5.5 0 0 1 .94.343l-.342.94Z",fill:(Ie=G.color)!==null&&Ie!==void 0?Ie:"#30373F"})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"ic-clock_svg__a",children:Object(s.jsx)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]}))};Me.displayName="SvgIcClock";var Ae=Me,Fe=function(G){return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsxs)("g",{clipPath:"url(#ic-discount_svg__a)",children:[Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M-.5 6.25a3.75 3.75 0 1 1 0 7.5v3.75h21v-3.75a3.75 3.75 0 1 1 0-7.5V2.5h-21v3.75Z",fill:"#03936E"}),Object(s.jsx)("circle",{cx:1.929,cy:1.929,r:1.479,transform:"matrix(1 0 0 -1 5.5 9.357)",stroke:"#fff",strokeWidth:.9}),Object(s.jsx)("circle",{cx:1.929,cy:1.929,r:1.479,transform:"matrix(1 0 0 -1 10.643 14.5)",stroke:"#fff",strokeWidth:.9}),Object(s.jsx)("path",{d:"M13 5.5h1.5l-7.5 9H5.5l7.5-9Z",fill:"#fff"})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"ic-discount_svg__a",children:Object(s.jsx)("path",{fill:"#fff",d:"M0 0h20v20H0z"})})})]}))};Fe.displayName="SvgIcDiscount";var ae=Fe,ne=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 0a2 2 0 0 0-2 2v2h13a3 3 0 0 1 3 3v19h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H11Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5Zm3 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Zm-1 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Z",fill:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};ne.displayName="SvgIcDocument";var se=ne,Q=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{clipRule:"evenodd",d:"M15.182 4.575a2 2 0 0 1 2.828 0l1.415 1.415a2 2 0 0 1 0 2.828l-8.952 8.952-5.19.948.947-5.191 8.952-8.952Z",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"m6.838 13.547 3.672 3.672M14.616 5.769l3.672 3.672",stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"})]}))};Q.displayName="SvgIcEdit";var J=Q,q=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16h-6v-3a1 1 0 1 0-2 0v3H5ZM9 8h1v2H9V8Zm6 0h-1v2h1V8Zm-6 4h1v2H9v-2Zm6 0h-1v2h1v-2Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};q.displayName="SvgIcHotelFill";var te=q,ue=function(G){var z,ye,Ce,Ie;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{d:"M5 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("path",{stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F",strokeWidth:.5,d:"M9.25 8.25h.5v1.5h-.5zM14.25 8.25h.5v1.5h-.5zM9.25 12.25h.5v1.5h-.5zM14.25 12.25h.5v1.5h-.5z"}),Object(s.jsx)("path",{d:"M10.5 18a1.5 1.5 0 0 1 3 0v3.5h-3V18Z",stroke:(Ce=G.color)!==null&&Ce!==void 0?Ce:"#30373F"}),Object(s.jsx)("path",{fill:(Ie=G.color)!==null&&Ie!==void 0?Ie:"#30373F",d:"M5 21h14v1H5z"})]}))};ue.displayName="SvgIcHotelLine";var ge=ue,be=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{d:"M16.027 6.919V4.222H5.421v15.556h10.607v-2.63M12.264 11.78h5.885",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"m15.97 9.172 2.609 2.608-2.609 2.609",stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F",strokeLinecap:"round",strokeLinejoin:"round"})]}))};be.displayName="SvgIcLogout";var Te=be,Oe=function(G){var z;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2a8 8 0 0 0-2.549 15.585L12 22l2.549-4.415A8 8 0 0 0 12 2Z",fill:(z=G.color)!==null&&z!==void 0?z:"#367CE1"}),Object(s.jsx)("rect",{x:9,y:7,width:6,height:6,rx:3,fill:"#fff"})]}))};Oe.displayName="SvgIcMarker";var Ke=Oe,Ye=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("circle",{cx:12.478,cy:6.239,r:4.239,stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("path",{d:"M4 21.777v-1.834a6.42 6.42 0 0 1 6.42-6.42h4.114a6.42 6.42 0 0 1 6.42 6.42V22",stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ye.displayName="SvgIcProfile";var Ge=Ye,ze=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("circle",{cx:9.5,cy:9.5,r:7,stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F"}),Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m14 14.727.727-.727L22 21.273l-.727.727L14 14.727Z",fill:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};ze.displayName="SvgIcSearch";var Qe=ze,Ze=function(G){var z,ye;return Object(s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:[Object(s.jsx)("path",{clipRule:"evenodd",d:"m13.414 4 .663 1.394c.829.29 1.586.733 2.238 1.294l1.541-.123 1.657 2.87-.875 1.273a7.042 7.042 0 0 1 0 2.585l.875 1.272-1.657 2.87-1.54-.123a6.993 6.993 0 0 1-2.239 1.294L13.414 20H10.1l-.664-1.394A6.991 6.991 0 0 1 7.2 17.313l-1.542.122L4 14.565l.876-1.272a7.04 7.04 0 0 1 0-2.585L4 9.435l1.657-2.87 1.542.122a6.993 6.993 0 0 1 2.237-1.293L10.1 4h3.314Z",stroke:(z=G.color)!==null&&z!==void 0?z:"#30373F",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M11.757 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",stroke:(ye=G.color)!==null&&ye!==void 0?ye:"#30373F"})]}))};Ze.displayName="SvgIcSettings";var $e=Ze,Xe=function(G){var z;return Object(s.jsx)("svg",Object.assign({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},G,{children:Object(s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9.53a1 1 0 0 1-1 1H9.5l-4.187 3.36A.5.5 0 0 1 4.5 15v-2.97H1a1 1 0 0 1-1-1V1.5ZM4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:(z=G.color)!==null&&z!==void 0?z:"#30373F"})}))};Xe.displayName="SvgIcTalk";var qe=Xe,en=["src"];function nn(me,G){if(me==null)return{};var z=tn(me,G),ye,Ce;if(Object.getOwnPropertySymbols){var Ie=Object.getOwnPropertySymbols(me);for(Ce=0;Ce<Ie.length;Ce++)ye=Ie[Ce],!(G.indexOf(ye)>=0)&&Object.prototype.propertyIsEnumerable.call(me,ye)&&(z[ye]=me[ye])}return z}function tn(me,G){if(me==null)return{};var z={},ye=Object.keys(me),Ce,Ie;for(Ie=0;Ie<ye.length;Ie++)Ce=ye[Ie],!(G.indexOf(Ce)>=0)&&(z[Ce]=me[Ce]);return z}var Je=Object(S.forwardRef)(function(me){var G=me.src,z=nn(me,en);return Object(s.jsx)(s.Fragment,{children:Y.a.createElement(W[G],z)})});Je.displayName="Icon"},"./packages/travelmakers-design-core/src/components/Icon/stoires/Icon.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:85},endLoc:{col:1,line:87},startBody:{col:23,line:85},endBody:{col:1,line:87}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:77},endLoc:{col:1,line:79},startBody:{col:23,line:77},endBody:{col:1,line:79}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Icon {...props} width={32} height={32} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:85},endLoc:{col:1,line:87},startBody:{col:23,line:85},endBody:{col:1,line:87}}}}},title:"@travelmakers-design-v2/core/General/Icon",component:V.a,argTypes:{src:{defaultValue:"IcCompanyApple",control:{type:"radio",options:["======company======","IcCompanyInstagram","IcCompanyApple","IcCompanyBrunch","IcCompanyFacebook","IcCompanyGoogle","IcCompanyKakaoPay","IcCompanyKakao","IcCompanyLivinginhotel","IcCompanyNaverPay","IcCompanyNaver","IcCompanySamsungPay","IcCompanyYoutube","======control======","IcAlert","IcAngleDown","IcAngleLeft","IcAngleRight","IcAngleUp","IcArrowLeft","IcArrowRight","IcArrowSingleLeft","IcArrowSingleRight","IcCheck","IcClose","IcExpand","IcHotelTypeMini","IcHotelTypeResidence","IcMinus","IcPlus","IcReset","IcResultFail","IcResultSuccess","IcStar","======logo======","Logo","======pictogram======","IcClock","IcDiscount","IcDocument","IcEdit","IcHotelFill","IcHotelLine","IcLogout","IcMarker","IcProfile","IcSearch","IcSettings","IcTalk"]},description:"Icon\uD0C0\uC785\uC5D0 \uB530\uB978 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uB984\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var s=function(B){return Object(N.jsx)(V.a,Object.assign({},B,{width:32,height:32}))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <Icon {...props} width={32} height={32} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Image/Image.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return b});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.array.is-array.js"),S=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),s=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/core-js/modules/es.array.from.js"),t=e("./node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),r=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),p=Object(r.a)(function(_,T){var w=T.load,k=T.error;return{image:{display:w&&!k?"block":"none",objectFit:w&&!k?"cover":"contain"},loading:{objectFit:"contain",backgroundColor:"#EFEFEF"}}}),c=e("./node_modules/react/jsx-runtime.js"),u=["lazy","src","alt","className"];function o(_,T){return l(_)||g(_,T)||f(_,T)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(_,T){if(_){if(typeof _=="string")return y(_,T);var w=Object.prototype.toString.call(_).slice(8,-1);if(w==="Object"&&_.constructor&&(w=_.constructor.name),w==="Map"||w==="Set")return Array.from(_);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return y(_,T)}}function y(_,T){(T==null||T>_.length)&&(T=_.length);for(var w=0,k=new Array(T);w<T;w++)k[w]=_[w];return k}function g(_,T){var w=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(w!=null){var k,O,j,i,d=[],I=!0,D=!1;try{if(j=(w=w.call(_)).next,T===0){if(Object(w)!==w)return;I=!1}else for(;!(I=(k=j.call(w)).done)&&(d.push(k.value),d.length!==T);I=!0);}catch(v){D=!0,O=v}finally{try{if(!I&&w.return!=null&&(i=w.return(),Object(i)!==i))return}finally{if(D)throw O}}return d}}function l(_){if(Array.isArray(_))return _}function x(_,T){if(_==null)return{};var w=C(_,T),k,O;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(_);for(O=0;O<j.length;O++)k=j[O],!(T.indexOf(k)>=0)&&Object.prototype.propertyIsEnumerable.call(_,k)&&(w[k]=_[k])}return w}function C(_,T){if(_==null)return{};var w={},k=Object.keys(_),O,j;for(j=0;j<k.length;j++)O=k[j],!(T.indexOf(O)>=0)&&(w[O]=_[O]);return w}var b=Object(n.forwardRef)(function(_,T){var w=_.lazy,k=w===void 0?!0:w,O=_.src,j=_.alt,i=_.className,d=x(_,u),I=Object(n.useState)(!1),D=o(I,2),v=D[0],E=D[1],H=Object(n.useState)(!1),U=o(H,2),R=U[0],P=U[1],L=p({load:v,error:R}),K=L.classes,X=L.cx;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",Object.assign({ref:T,src:O,alt:j,loading:k?"lazy":"eager",decoding:k?"async":"auto",className:X(i,K.image),onLoad:function(){return E(!0)},onError:function(ce){E(!0),P(!0)}},d)),!v&&Object(c.jsx)("img",Object.assign({loading:k?"lazy":"eager",decoding:k?"async":"auto",className:X(i,K.loading),src:e("./packages/travelmakers-design-core/src/components/Image/img/loading.png")},d)),R&&Object(c.jsx)("img",Object.assign({loading:k?"lazy":"eager",decoding:k?"async":"auto",className:X(i,K.loading),src:e("./packages/travelmakers-design-core/src/components/Image/img/error.png")},d))]})});b.displayName="Image"},"./packages/travelmakers-design-core/src/components/Image/img/error.png":function(oe,m,e){oe.exports=e.p+"static/media/error.24450d72.png"},"./packages/travelmakers-design-core/src/components/Image/img/loading.png":function(oe,m,e){oe.exports=e.p+"static/media/loading.0812647b.png"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Image {...props} />;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:56},startBody:{col:23,line:54},endBody:{col:1,line:56}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:48},startBody:{col:23,line:46},endBody:{col:1,line:48}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Image {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:56},startBody:{col:23,line:54},endBody:{col:1,line:56}}}}},title:"@travelmakers-design-v2/core/General/Image",component:V.a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}};var s=function(B){return Object(N.jsx)(V.a,Object.assign({},B))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <Image {...props} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return h});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=Object(Z.a)(function(t){var n=t.colors,r=t.radius;return{root:{display:"inline-flex",flexDirection:"column",rowGap:"1px",minWidth:"328px",margin:0,padding:0,backgroundColor:n.outline,border:"1px solid "+n.outline,borderRadius:r.radius20,overflow:"hidden"}}}),F=e("./node_modules/react/jsx-runtime.js"),B=["className","children"];function M(t,n){if(t==null)return{};var r=A(t,n),p,c;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(c=0;c<u.length;c++)p=u[c],!(n.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(t,p)&&(r[p]=t[p])}return r}function A(t,n){if(t==null)return{};var r={},p=Object.keys(t),c,u;for(u=0;u<p.length;u++)c=p[u],!(n.indexOf(c)>=0)&&(r[c]=t[c]);return r}var h=Object(S.forwardRef)(function(t,n){var r=t.className,p=t.children,c=M(t,B),u=s(),o=u.classes,a=u.cx;return Object(F.jsx)(Y.a,Object.assign({component:"ul",ref:n,className:a(o.root,r)},c,{children:p}))});h.displayName="Menu"},"./packages/travelmakers-design-core/src/components/Menu/Menu/stories/Menu.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return t});var W=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.function.name.js"),N=e.n(V),S=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(S),Z=e("./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx"),s=e("./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx"),F=e("./node_modules/react/jsx-runtime.js"),B=e.n(F),M=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const items = menus.map((menu, idx) => {\\n    const { href, name } = menu;\\n\\n    return <MenuItem key={idx} href={href} menu={name} />;\\n  });\\n\\n  return <Menu>{items}</Menu>;\\n}" }, ...Default.parameters };`,A={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:45},startBody:{col:23,line:37},endBody:{col:1,line:45}}},M=`import { Meta } from "@storybook/react";
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
`,A={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:37},startBody:{col:23,line:29},endBody:{col:1,line:37}}},h=[{href:"#",name:"\uC608\uC57D \uB0B4\uC5ED"},{href:"#",name:"\uD68C\uC6D0 \uC815\uBCF4 \uBCC0\uACBD"},{href:"#",name:"\uC54C\uB9BC \uC124\uC815"},{href:"#",name:"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"},{href:"#",name:"\uACE0\uAC1D\uC13C\uD130"}];m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const items = menus.map((menu, idx) => {\\n    const { href, name } = menu;\\n\\n    return <MenuItem key={idx} href={href} menu={name} />;\\n  });\\n\\n  return <Menu>{items}</Menu>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:45},startBody:{col:23,line:37},endBody:{col:1,line:45}}}}},title:"@travelmakers-design-v2/core/General/Menu/Menu",component:s.a,argTypes:{}};var t=function(){var r=h.map(function(p,c){var u=p.href,o=p.name;return Object(F.jsx)(Z.a,{href:u,menu:o},c)});return Object(F.jsx)(s.a,{children:r})};t.displayName="Default",t.parameters=Object.assign({storySource:{source:`() => {
  const items = menus.map((menu, idx) => {
    const { href, name } = menu;

    return <MenuItem key={idx} href={href} menu={name} />;
  });

  return <Menu>{items}</Menu>;
}`}},t.parameters)},"./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return n});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.string.link.js"),S=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/next/link.js"),Z=e.n(Y),s=e("./node_modules/react/index.js"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),B=Object(F.a)(function(r){var p=r.colors,c=r.spacing,u=r.typography;return{root:{listStyle:"none"},link:Object.assign({display:"inline-block",width:"100%",padding:c.spacing30},u.body2,{color:p.primary,textDecoration:"none",backgroundColor:p.white})}}),M=e("./node_modules/react/jsx-runtime.js"),A=["className","menu"];function h(r,p){if(r==null)return{};var c=t(r,p),u,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)u=a[o],!(p.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function t(r,p){if(r==null)return{};var c={},u=Object.keys(r),o,a;for(a=0;a<u.length;a++)o=u[a],!(p.indexOf(o)>=0)&&(c[o]=r[o]);return c}var n=Object(s.forwardRef)(function(r,p){var c=r.className,u=r.menu,o=h(r,A),a=B(),f=a.classes,y=a.cx;return Object(M.jsx)("li",{className:y(f.root,c),children:Object(M.jsx)(Z.a,Object.assign({ref:p,className:f.link},o,{children:u}))})});n.displayName="MenuItem"},"./packages/travelmakers-design-core/src/components/Menu/MenuItem/stories/MenuItem.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return F});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Menu/Menu/Menu.tsx"),N=e("./packages/travelmakers-design-core/src/components/Menu/MenuItem/MenuItem.tsx"),S=e("./node_modules/react/jsx-runtime.js"),Y=e.n(S),Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}},Z=`import { Meta } from "@storybook/react";
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
`,s={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <Menu>\\n      <MenuItem {...props} />\\n    </Menu>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/Menu/MenuItem",component:N.a,argTypes:{href:{control:{type:"text"},defaultValue:"#",description:"\uBA54\uB274\uC758 \uB9C1\uD06C \uC8FC\uC18C",table:{type:{summary:"string"}}},menu:{control:{type:"text",default:"\uBA54\uB274 \uC774\uB984"},defaultValue:"\uBA54\uB274 \uC774\uB984",description:"\uBA54\uB274\uC758 \uC774\uB984",table:{type:{summary:"string"}}}}};var F=function(M){return Object(S.jsx)(V.a,{children:Object(S.jsx)(N.a,Object.assign({},M))})};F.displayName="Default",F.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <Menu>
      <MenuItem {...props} />
    </Menu>
  );
}`}},F.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavBar/stories/NavBar.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return a}),e.d(m,"NavBarWithLink",function(){return f}),e.d(m,"NavBarWithButton",function(){return y});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),s=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx"),B=e("./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),A=Object(M.a)(function(g){return{root:{display:"grid",alignItems:"center",gridTemplateColumns:"repeat(3, 1fr)",minHeight:"48px"},title:{margin:"0 auto",gridColumn:2}}}),h=e("./node_modules/react/jsx-runtime.js"),t=["hasBack","title","className","children"];function n(g,l){if(g==null)return{};var x=r(g,l),C,b;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(g);for(b=0;b<_.length;b++)C=_[b],!(l.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(g,C)&&(x[C]=g[C])}return x}function r(g,l){if(g==null)return{};var x={},C=Object.keys(g),b,_;for(_=0;_<C.length;_++)b=C[_],!(l.indexOf(b)>=0)&&(x[b]=g[b]);return x}var p=Object(S.forwardRef)(function(g,l){var x=g.hasBack,C=x===void 0?!1:x,b=g.title,_=g.className,T=g.children,w=n(g,t),k=A(),O=k.classes,j=k.cx;return Object(h.jsxs)(s.a,Object.assign({component:"header",ref:l,className:j(O.root,_)},w,{children:[C&&Object(h.jsx)(Y.a,{src:"IcArrowLeft",width:24,height:24}),Object(h.jsx)(Z.a,{level:"subhead2",color:"primary",className:O.title,strong:!0,children:b}),T]}))});p.displayName="NavBar",p.NavLink=B.a,p.NavButton=F.a;var c=`
    
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
NavBarWithButton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithButton.parameters };`,u={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}},NavBarWithLink:{startLoc:{col:30,line:43},endLoc:{col:1,line:49},startBody:{col:30,line:43},endBody:{col:1,line:49}},NavBarWithButton:{startLoc:{col:32,line:51},endLoc:{col:1,line:57},startBody:{col:32,line:51},endBody:{col:1,line:57}}},c=`import { Meta } from "@storybook/react";
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
`,u={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}},NavBarWithLink:{startLoc:{col:30,line:35},endLoc:{col:1,line:41},startBody:{col:30,line:35},endBody:{col:1,line:41}},NavBarWithButton:{startLoc:{col:32,line:43},endLoc:{col:1,line:49},startBody:{col:32,line:43},endBody:{col:1,line:49}}},o=m.default={parameters:{storySource:{source:`
    
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
NavBarWithButton.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <NavBar {...props}>\\n      <NavBar.NavButton label=\\"\uB808\uC774\uBE14\\" />\\n    </NavBar>\\n  );\\n}" }, ...NavBarWithButton.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}},"nav-bar-with-link":{startLoc:{col:30,line:43},endLoc:{col:1,line:49},startBody:{col:30,line:43},endBody:{col:1,line:49}},"nav-bar-with-button":{startLoc:{col:32,line:51},endLoc:{col:1,line:57},startBody:{col:32,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design-v2/core/General/NavBar",component:p,argTypes:{hasBack:{type:"boolean",defaultValue:"false",description:"\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC\uC758 \uC720\uBB34",table:{type:{summary:"boolean"}}},title:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavBar \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}}}},a=function(l){return Object(h.jsx)(p,Object.assign({},l))};a.displayName="Default";var f=function(l){return Object(h.jsx)(p,Object.assign({},l,{children:Object(h.jsx)(p.NavLink,{href:"#",label:"\uB808\uC774\uBE14"})}))};f.displayName="NavBarWithLink";var y=function(l){return Object(h.jsx)(p,Object.assign({},l,{children:Object(h.jsx)(p.NavButton,{label:"\uB808\uC774\uBE14"})}))};y.displayName="NavBarWithButton",a.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavBar {...props} />;
}`}},a.parameters),f.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavLink href="#" label="\uB808\uC774\uBE14" />
    </NavBar>
  );
}`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <NavBar {...props}>
      <NavBar.NavButton label="\uB808\uC774\uBE14" />
    </NavBar>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return h});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=Object(Z.a)(function(t){var n,r=t.colors,p=t.shadows,c=t.typography;return{root:Object.assign({},c.body3,(n={marginLeft:"auto",padding:0,color:r.primary,backgroundColor:"transparent",border:0,outline:0,cursor:"pointer"},n[":not(:disabled)"]={"&:hover":{filter:"drop-shadow("+p.elevation1+")"},"&:focus-visible":{color:r.primaryInteract,filter:"drop-shadow("+p.elevation1+")"},"&:active":{color:r.primaryInteract,filter:p.none}},n["&:disabled"]={color:r.primary4,cursor:"auto"},n))}}),F=e("./node_modules/react/jsx-runtime.js"),B=["label","isDisable","className"];function M(t,n){if(t==null)return{};var r=A(t,n),p,c;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(c=0;c<u.length;c++)p=u[c],!(n.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(t,p)&&(r[p]=t[p])}return r}function A(t,n){if(t==null)return{};var r={},p=Object.keys(t),c,u;for(u=0;u<p.length;u++)c=p[u],!(n.indexOf(c)>=0)&&(r[c]=t[c]);return r}var h=Object(S.forwardRef)(function(t,n){var r=t.label,p=t.isDisable,c=p===void 0?!1:p,u=t.className,o=M(t,B),a=s(),f=a.classes,y=a.cx;return Object(F.jsx)(Y.a,Object.assign({component:"button",ref:n,className:y(f.root,u),disabled:c},o,{children:r}))});h.displayName="NavButton"},"./packages/travelmakers-design-core/src/components/NavBar/NavButton/stories/NavButton.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/NavBar/NavButton/NavButton.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavButton {...props} />;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/core/General/NavBar/NavButton",component:V.a,argTypes:{label:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavButton \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}},isDisable:{type:"boolean",defaultValue:"false",description:"NavButton disabled",table:{type:{summary:"boolean"}}}}};var s=function(B){return Object(N.jsx)(V.a,Object.assign({},B))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavButton {...props} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return n});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/next/link.js"),Y=e.n(S),Z=e("./node_modules/react/index.js"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=function(p,c){var u=p.colors,o=p.shadows;return c?{color:u.primary4,cursor:"auto"}:{"&:hover":{filter:"drop-shadow("+o.elevation1+")"},"&:focus-visible":{color:u.primaryInteract,filter:"drop-shadow("+o.elevation1+")"},"&:active":{color:u.primaryInteract,filter:o.none}}},B=Object(s.a)(function(r,p){var c=p.isDisable,u=r.colors,o=r.typography;return{root:Object.assign({},o.body3,{marginLeft:"auto",color:u.primary,textDecoration:"none"},F(r,c))}}),M=e("./node_modules/react/jsx-runtime.js"),A=["label","isDisable","className"];function h(r,p){if(r==null)return{};var c=t(r,p),u,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)u=a[o],!(p.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function t(r,p){if(r==null)return{};var c={},u=Object.keys(r),o,a;for(a=0;a<u.length;a++)o=u[a],!(p.indexOf(o)>=0)&&(c[o]=r[o]);return c}var n=Object(Z.forwardRef)(function(r,p){var c=r.label,u=r.isDisable,o=u===void 0?!1:u,a=r.className,f=h(r,A),y=B({isDisable:o}),g=y.classes,l=y.cx,x=function(b){if(o)return b.preventDefault();f.onClick&&f.onClick()};return Object(M.jsx)(Y.a,Object.assign({ref:p,className:l(g.root,a),onClick:x,tabindex:o?-1:0,"aria-disabled":o},f,{children:c}))});n.displayName="NavLink"},"./packages/travelmakers-design-core/src/components/NavBar/NavLink/stories/NavLink.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/NavBar/NavLink/NavLink.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavLink {...props} />;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:51},startBody:{col:23,line:49},endBody:{col:1,line:51}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <NavLink {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:49},endLoc:{col:1,line:51},startBody:{col:23,line:49},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/core/General/NavBar/NavLink",component:V.a,argTypes:{href:{control:{type:"text"},defaultValue:"#",description:"NavLink href",table:{type:{summary:"string"}}},label:{control:{type:"text"},defaultValue:"\uB808\uC774\uBE14",description:"NavLink \uD0C0\uC774\uD2C0",table:{type:{summary:"string"}}},isDisable:{type:"boolean",defaultValue:"false",description:"NavLink disabled",table:{type:{summary:"boolean"}}}}};var s=function(B){return Object(N.jsx)(V.a,Object.assign({},B))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <NavLink {...props} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Price/Price.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return t});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(n,r){var p=r.type;return{root:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},percentText:Object.assign({},n.typography.display6,{fontWeight:"700",width:"39px",color:n.colors.error}),nightText:Object.assign({},n.typography.body3,{fontWeight:"700",textAlign:"right",width:"28px",color:n.colors.primary1}),priceText:Object.assign({},n.typography.display4,{fontWeight:"700",color:n.colors.primary1,marginLeft:n.spacing.spacing5}),priceBeforeText:Object.assign({},n.typography.body2,{fontWeight:"700",color:n.colors.primary1}),priceStartText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2,marginLeft:n.spacing.spacing5}),labelSecondary:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary1,marginRight:n.spacing.spacing5}),nightSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"700",color:n.colors.primary1,textAlign:"right",marginRight:n.spacing.spacing5}),priceSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2}),priceBeforeSecondaryText:Object.assign({},n.typography.body3,{fontWeight:"400",color:n.colors.primary2}),couponWrap:{display:"flex",alignItems:"center",width:"74px",background:n.colors.secondaryContainer,borderRadius:n.spacing.spacing5,marginLeft:n.spacing.spacing5},couponWord:Object.assign({},n.typography.caption,{fontWeight:"700",color:n.colors.secondary1})}}),B=e("./node_modules/react/jsx-runtime.js"),M=["type","label","percentText","nightText","priceText","priceStartText","isCoupon","className"];function A(n,r){if(n==null)return{};var p=h(n,r),c,u;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(u=0;u<o.length;u++)c=o[u],!(r.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(n,c)&&(p[c]=n[c])}return p}function h(n,r){if(n==null)return{};var p={},c=Object.keys(n),u,o;for(o=0;o<c.length;o++)u=c[o],!(r.indexOf(u)>=0)&&(p[u]=n[u]);return p}var t=Object(S.forwardRef)(function(n,r){var p=n.type,c=p===void 0?"primary":p,u=n.label,o=n.percentText,a=n.nightText,f=n.priceText,y=n.priceStartText,g=n.isCoupon,l=g===void 0?!0:g,x=n.className,C=A(n,M),b=F({type:c}),_=b.classes,T=b.cx,w=function(){return Object(B.jsxs)(Z.a,Object.assign({component:"div",ref:r,className:T(_.root,x)},C,{children:[o&&Object(B.jsxs)("span",{className:T(_.percentText),children:[o,"%"]}),a&&Object(B.jsxs)("span",{className:T(_.nightText),children:[a,"\uBC15"]}),f&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{className:T(_.priceText),children:f.toLocaleString("ko")}),Object(B.jsx)("span",{className:T(_.priceBeforeText),children:"\uC6D0~"})]}),y&&Object(B.jsxs)("span",{className:T(_.priceStartText),children:["| ",y]})]}))},k=function(){return Object(B.jsxs)(Z.a,Object.assign({component:"div",ref:r,className:T(_.root,x)},C,{children:[u&&Object(B.jsx)("span",{className:T(_.labelSecondary),children:u}),a&&Object(B.jsxs)("span",{className:T(_.nightSecondaryText),children:[a,"\uBC15"]}),f&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{className:T(_.priceSecondaryText),children:f==null?void 0:f.toLocaleString("ko")}),Object(B.jsx)("span",{className:T(_.priceBeforeSecondaryText),children:"\uC6D0"})]}),l&&Object(B.jsxs)("div",{className:T(_.couponWrap),children:[Object(B.jsx)(Y.a,{src:"IcDiscount",width:16,height:16,style:{margin:"0 4px"}}),Object(B.jsx)("span",{className:T(_.couponWord),children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]})]}))};return c==="primary"?Object(B.jsx)(w,{}):Object(B.jsx)(k,{})});t.displayName="Price"},"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return B});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/react/index.js"),N=e.n(V),S=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),Y=e("./node_modules/react/jsx-runtime.js"),Z=e.n(Y),s=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Price {...props} />;\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}},s=`import React from "react";
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
`,F={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:80},startBody:{col:23,line:78},endBody:{col:1,line:80}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Price {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:88},startBody:{col:23,line:86},endBody:{col:1,line:88}}}}},title:"@travelmakers-design-v2/core/General/Price",component:S.a,argTypes:{type:{defaultValue:"primary",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],control:{type:"inline-radio"}},label:{defaultValue:"",description:"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:70,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},nightText:{defaultValue:1,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceText:{defaultValue:1e4,description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceStartText:{defaultValue:"1\uBC15 100,000\uC6D0\uBD80\uD130",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},isCoupon:{defaultValue:!0,description:" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var B=function(A){return Object(Y.jsx)(S.a,Object.assign({},A))};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`(props) => {
  return <Price {...props} />;
}`}},B.parameters)},"./packages/travelmakers-design-core/src/components/Process/Process/stories/Process.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return w});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),M;function A(k,O){return O||(O=k.slice(0)),k.raw=O,k}var h=Object(F.c)(M||(M=A([`
from {
  opacity: 1;
}
70% {
  opacity: 0;
}`]))),t=function(O){var j=1.5;return{opacity:0,animation:h+" "+j+"s infinite",animationDelay:j/(3/O)+"s"}},n=function(O,j){var i=O.colors;return j?Object.assign({},t(1),{stroke:i.primary3}):{stroke:i.primary3}},r=Object(B.a)(function(k,O){var j=O.isProcessing,i=k.spacing,d=k.colors;return{root:{marginLeft:j&&i.spacing5},first:n(k,j),second:Object.assign({},t(2),{stroke:d.primary70}),third:Object.assign({},t(3),{stroke:d.primary80})}}),p=e("./node_modules/react/jsx-runtime.js"),c=function(O){var j=O.isProcessing,i=r({isProcessing:j}),d=i.classes,I=function(){return j?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("path",{className:d.first,d:"M1.84326 5L4.67169 7.82843L1.84326 10.6569"}),Object(p.jsx)("path",{className:d.second,d:"M6.5 5L9.32843 7.82843L6.5 10.6569"}),Object(p.jsx)("path",{className:d.third,d:"M11.1567 5L13.9852 7.82843L11.1567 10.6569"})]}):Object(p.jsx)("path",{className:d.first,d:"M7 5L9.82843 7.82843L7 10.6569"})};return Object(p.jsx)("svg",{className:d.root,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:I()})};c.displayName="ProcessIcon";var u=Object(B.a)(function(k,O){var j,i=O.isProcessing,d=k.colors,I=k.typography;return{root:{display:"flex",alignItems:"center"},process:Object.assign({},I.body3,(j={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"0 11px",color:i?d.white:d.primary3,textAlign:"center",backgroundColor:i?d.secondary00:d.transparent,borderRadius:"22px"},j["&.process-line-height"]={lineHeight:"14px"},j)),processor:{fontWeight:700}}}),o=function(O){var j=O.item,i=O.hasIcon,d=j.processor,I=j.process,D=j.isProcessing,v=u({isProcessing:D}),E=v.classes,H=v.cx;return Object(p.jsxs)("li",{className:E.root,children:[Object(p.jsxs)("div",{className:H(E.process,{"process-line-height":d}),children:[d&&Object(p.jsx)("span",{className:E.processor,children:d}),I]}),i&&Object(p.jsx)(c,{isProcessing:D})]})};o.displayName="ProcessItem";var a=Object(B.a)(function(k){var O=k.spacing,j=k.colors;return{root:{display:"inline-flex",minWidth:"328px",minHeight:"52px",margin:0,padding:O.spacing5,backgroundColor:j.primary99,borderRadius:"26px"}}}),f=["status","className"];function y(k,O){if(k==null)return{};var j=g(k,O),i,d;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(k);for(d=0;d<I.length;d++)i=I[d],!(O.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(k,i)&&(j[i]=k[i])}return j}function g(k,O){if(k==null)return{};var j={},i=Object.keys(k),d,I;for(I=0;I<i.length;I++)d=i[I],!(O.indexOf(d)>=0)&&(j[d]=k[d]);return j}var l=function(O){switch(O){case"extend_purchase_before":case"reservation_purchase_before":return"before";case"extend_purchase_done":case"reservation_purchase_done":return"done"}},x=function(O){return[{process:"\uACB0\uC81C \uB300\uAE30",isProcessing:l(O)==="before"},{process:"\uACB0\uC81C \uC644\uB8CC",isProcessing:!1},{processor:"\uD638\uD154\uC5D0\uC0B6",process:"\uC608\uC57D \uC804\uB2EC",isProcessing:l(O)==="done"},{processor:"\uD638\uD154",process:"\uC608\uC57D \uD655\uC815",isProcessing:!1}]},C=Object(Y.forwardRef)(function(k,O){var j=k.status,i=k.className,d=y(k,f),I=a(),D=I.classes,v=I.cx,E=x(j),H=E.map(function(U,R){return Object(p.jsx)(o,{item:U,hasIcon:R+1!==E.length},R)});return Object(p.jsx)(Z.a,Object.assign({component:"ol",ref:O,className:v(D.root,i)},d,{children:H}))});C.displayName="Process";var b=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:49},startBody:{col:23,line:37},endBody:{col:1,line:49}}},b=`import { Meta } from "@storybook/react";
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
`,_={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:41},startBody:{col:23,line:29},endBody:{col:1,line:41}}},T=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div\\n      style={{\\n        display: \\"inline-block\\",\\n        backgroundColor: \\"gray\\",\\n        padding: \\"20px 10px\\",\\n      }}\\n    >\\n      <Process status={\\"reservation_purchase_before\\"} {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:37},endLoc:{col:1,line:49},startBody:{col:23,line:37},endBody:{col:1,line:49}}}}},title:"@travelmakers-design-v2/core/General/Process",component:C,argTypes:{status:{control:{type:"radio",options:["reservation_purchase_before","extend_purchase_before","reservation_purchase_done","extend_purchase_done"]},defaultValue:"reservation_purchase_before",description:"\uACB0\uC81C \uC9C4\uD589 \uC0C1\uD669",table:{type:{summary:"string"}}}}},w=function(O){return Object(p.jsx)("div",{style:{display:"inline-block",backgroundColor:"gray",padding:"20px 10px"},children:Object(p.jsx)(C,Object.assign({status:"reservation_purchase_before"},O))})};w.displayName="Default",w.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},w.parameters)},"./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return n});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=function(p,c){var u=p.colors;switch(c){case"fill":return{backgroundColor:u.secondaryContainer};case"line":return{backgroundColor:u.white,border:"1px solid "+u.secondary};default:return{}}},B=Object(s.a)(function(r,p){var c=p.type,u=r.colors,o=r.spacing,a=r.typography,f=r.radius;return{root:Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"space-between",gap:o.spacing5,color:u.secondary1,padding:"2px "+o.spacing5},a.caption,{fontWeight:700},F(r,c),{borderRadius:f.radius10})}}),M=e("./node_modules/react/jsx-runtime.js"),A=["type","component","label","className"];function h(r,p){if(r==null)return{};var c=t(r,p),u,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)u=a[o],!(p.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function t(r,p){if(r==null)return{};var c={},u=Object.keys(r),o,a;for(a=0;a<u.length;a++)o=u[a],!(p.indexOf(o)>=0)&&(c[o]=r[o]);return c}var n=Object(S.forwardRef)(function(r,p){var c=r.type,u=r.component,o=r.label,a=o===void 0?"\uCFE0\uD3F0 \uC801\uC6A9\uAC00":o,f=r.className,y=h(r,A),g=B({type:c}),l=g.classes,x=g.cx;return Object(M.jsxs)(Z.a,Object.assign({component:u||"div",ref:p,className:x(l.root,f)},y,{children:[Object(M.jsx)(Y.a,{src:"IcDiscount",width:16,height:16}),a]}))});n.displayName="IconTag"},"./packages/travelmakers-design-core/src/components/Tag/IconTag/stories/IconTag.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Tag/IconTag/IconTag.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:31},endLoc:{col:1,line:33},startBody:{col:23,line:31},endBody:{col:1,line:33}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <IconTag type={\\"fill\\"} {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:39},endLoc:{col:1,line:41},startBody:{col:23,line:39},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/core/General/Tag/IconTag",component:V.a,argTypes:{type:{control:{type:"radio",options:["fill","line"]},defaultValue:"fill",description:"\uC544\uC774\uCF58 \uD0DC\uADF8\uC758 \uC720\uD615\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},label:{control:{type:"text"},defaultValue:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00",description:"\uCFE0\uD3F0\uC758 \uC801\uC6A9\uB420 \uB77C\uBCA8\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var s=function(B){return Object(N.jsx)(V.a,Object.assign({type:"fill"},B))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <IconTag type={"fill"} {...props} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx":function(oe,m,e){"use strict";e.d(m,"b",function(){return t}),e.d(m,"a",function(){return n});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(s.a)(function(r,p){var c=p.gap;return{root:{display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:c+"px",margin:0,padding:0}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["type","color","size","gap","roundness","className","children"];function A(r,p){if(r==null)return{};var c=h(r,p),u,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)u=a[o],!(p.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function h(r,p){if(r==null)return{};var c={},u=Object.keys(r),o,a;for(a=0;a<u.length;a++)o=u[a],!(p.indexOf(o)>=0)&&(c[o]=r[o]);return c}var t=Object(S.createContext)({type:"fill",size:"small",roundness:"default"});t.displayName="TagContext";var n=Object(S.forwardRef)(function(r,p){var c=r.type,u=r.color,o=r.size,a=o===void 0?"small":o,f=r.gap,y=f===void 0?0:f,g=r.roundness,l=g===void 0?"default":g,x=r.className,C=r.children,b=A(r,M);Object(S.useEffect)(function(){C||console.error("1\uAC1C \uC774\uC0C1\uC758 <Tag.Item /> \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC874\uC7AC\uD574\uC57C \uD569\uB2C8\uB2E4.")},[]);var _=F({gap:y}),T=_.classes,w=_.cx;return Object(B.jsx)(t.Provider,{value:{type:c,color:u,size:a,roundness:l},children:Object(B.jsx)(Y.a,Object.assign({component:"ul",ref:p,className:w(T.root,x)},b,{children:C}))})});n.displayName="Tag",n.Item=Z.a},"./packages/travelmakers-design-core/src/components/Tag/Tag/stories/Tag.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return M}),e.d(m,"TagUsingIdx",function(){return A});var W=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.object.assign.js"),N=e.n(V),S=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),Y=e("./node_modules/react/jsx-runtime.js"),Z=e.n(Y),s=`
    
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
TagUsingIdx.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...TagUsingIdx.parameters };`,F={Default:{startLoc:{col:23,line:75},endLoc:{col:1,line:83},startBody:{col:23,line:75},endBody:{col:1,line:83}},TagUsingIdx:{startLoc:{col:27,line:85},endLoc:{col:1,line:95},startBody:{col:27,line:85},endBody:{col:1,line:95}}},s=`import { Meta } from "@storybook/react";
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
`,F={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:75},startBody:{col:23,line:67},endBody:{col:1,line:75}},TagUsingIdx:{startLoc:{col:27,line:77},endLoc:{col:1,line:87},startBody:{col:27,line:77},endBody:{col:1,line:87}}},B=["\uB808\uC774\uBE141","\uB808\uC774\uBE142","\uB808\uC774\uBE143","\uB808\uC774\uBE144"];m.default={parameters:{storySource:{source:`
    
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
TagUsingIdx.parameters = { storySource: { source: "(props) => {\\n  const items = data.map((item, idx) => (\\n    <Tag.Item key={idx} colorIdx={idx} label={item} />\\n  ));\\n\\n  return (\\n    <Tag type=\\"fill\\" {...props}>\\n      {items}\\n    </Tag>\\n  );\\n}" }, ...TagUsingIdx.parameters };`,locationsMap:{default:{startLoc:{col:23,line:75},endLoc:{col:1,line:83},startBody:{col:23,line:75},endBody:{col:1,line:83}},"tag-using-idx":{startLoc:{col:27,line:85},endLoc:{col:1,line:95},startBody:{col:27,line:85},endBody:{col:1,line:95}}}}},title:"@travelmakers-design-v2/core/General/Tag/Tag",component:S.a,argTypes:{type:{control:{type:"radio",options:["fill","line"],default:"fill"},description:"TagItem\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},color:{control:{type:"radio",options:["green","blue","purple","gray"],default:"green"},description:"TagItem\uC758 \uC0C9\uC0C1\uC744 \uD1B5\uC77C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TagItem\uC758 colorIdx\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9D1\uB2C8\uB2E4.",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","medium","large"],default:"small"},description:"TagItem\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}},gap:{type:"number"},roundness:{control:{type:"radio",options:["default","half","full"],default:"default"},description:"TagItem\uC758 \uBAA8\uC11C\uB9AC\uC758 \uB77C\uC6B4\uB4DC \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var M=function(t){var n=B.map(function(r,p){return Object(Y.jsx)(S.a.Item,{label:r},p)});return Object(Y.jsx)(S.a,Object.assign({type:"fill",color:"green"},t,{children:n}))};M.displayName="Default";var A=function(t){var n=B.map(function(r,p){return Object(Y.jsx)(S.a.Item,{colorIdx:p,label:r},p)});return Object(Y.jsx)(S.a,Object.assign({type:"fill"},t,{children:n}))};A.displayName="TagUsingIdx",M.parameters=Object.assign({storySource:{source:`(props) => {
  const items = data.map((item, idx) => <Tag.Item key={idx} label={item} />);

  return (
    <Tag type="fill" color="green" {...props}>
      {items}
    </Tag>
  );
}`}},M.parameters),A.parameters=Object.assign({storySource:{source:`(props) => {
  const items = data.map((item, idx) => (
    <Tag.Item key={idx} colorIdx={idx} label={item} />
  ));

  return (
    <Tag type="fill" {...props}>
      {items}
    </Tag>
  );
}`}},A.parameters)},"./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return p});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Tag/Tag/Tag.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F={default:"",half:"radius20",full:"radius100"},B=function(u,o){var a=u.typography,f=u.spacing;switch(o){case"small":return Object.assign({height:"20px"},a.caption,{padding:"2px "+f.spacing10});case"medium":return Object.assign({height:"24px"},a.body3,{padding:"2px "+f.spacing20});case"large":return Object.assign({height:"28px"},a.body2,{padding:"3px "+f.spacing30});default:return}},M=function(u,o,a){var f=u.colors,y={color:"",backgroundColor:f.white,border:0},g={green:{fill:{color:f.onSecondary,backgroundColor:f.secondary},line:{color:f.secondary,border:"1px solid "+f.secondary}},blue:{fill:{color:f.onTertiary,backgroundColor:f.tertiary},line:{color:f.tertiary,border:"1px solid "+f.tertiary}},purple:{fill:{color:f.white,backgroundColor:f.purple1},line:{color:f.purple1,border:"1px solid "+f.purple1}},gray:{fill:{color:f.onPrimaryContainer,backgroundColor:f.surface},line:{color:f.primary3,border:"1px solid "+f.surfaceVariant,backgroundColor:"transparent"}}};if(o==="fill"||o==="line"){var l;y.color=g[a][o].color,y.backgroundColor=(l=g[a][o].backgroundColor)!==null&&l!==void 0?l:y.backgroundColor,y.border=o==="line"?g[a].line.border:y.border}return y},A=Object(s.a)(function(c,u){var o,a=u.type,f=u.color,y=u.size,g=u.roundness;return{item:Object.assign({listStyle:"none"},M(c,a,f),B(c,y),{borderRadius:(o=c.radius[F[g]])!==null&&o!==void 0?o:0})}}),h=e("./node_modules/react/jsx-runtime.js"),t=["colorIdx","label","className"];function n(c,u){if(c==null)return{};var o=r(c,u),a,f;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(c);for(f=0;f<y.length;f++)a=y[f],!(u.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(c,a)&&(o[a]=c[a])}return o}function r(c,u){if(c==null)return{};var o={},a=Object.keys(c),f,y;for(y=0;y<a.length;y++)f=a[y],!(u.indexOf(f)>=0)&&(o[f]=c[f]);return o}var p=Object(S.forwardRef)(function(c,u){var o=c.colorIdx,a=o===void 0?0:o,f=c.label,y=c.className,g=n(c,t),l=function(i){var d=["green","blue","purple"];return d[i%d.length]},x=Object(S.useContext)(Z.b),C=x.type,b=x.color,_=x.size,T=x.roundness,w=A({type:C,color:b||l(a),size:_,roundness:T}),k=w.classes,O=w.cx;return Object(h.jsx)(Y.a,Object.assign({component:"li",ref:u,className:O(k.item,y)},g,{children:f}))});p.displayName="TagItem"},"./packages/travelmakers-design-core/src/components/Tag/TagItem/stories/TagItem.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/Tag/TagItem/TagItem.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}},Y=`import { Meta } from "@storybook/react";
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
`,Z={Default:{startLoc:{col:23,line:32},endLoc:{col:1,line:38},startBody:{col:23,line:32},endBody:{col:1,line:38}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"inline-block\\" }}>\\n      <TagItem {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:40},endLoc:{col:1,line:46},startBody:{col:23,line:40},endBody:{col:1,line:46}}}}},title:"@travelmakers-design-v2/core/General/Tag/TagItem",component:V.a,argTypes:{colorIdx:{control:{type:"radio",options:[0,1,2]},defaultValue:0,description:"TagItem\uC744 \uC0AC\uC6A9\uC2DC color \uAE30\uC900\uC774 \uB418\uB294 \uAC12\uC785\uB2C8\uB2E4. \uB9CC\uC57D Tag\uC5D0 color\uAC00 \uC9C0\uC815\uC774 \uB418\uC5B4\uC788\uB2E4\uBA74 \uD574\uB2F9 color\uB85C \uD1B5\uC77C\uB429\uB2C8\uB2E4.",table:{type:{summary:"number"}}},label:{control:{type:"text"},defaultValue:"label",description:"props \uAC01\uAC01\uC758 description\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}};var s=function(B){return Object(N.jsx)("div",{style:{display:"inline-block"},children:Object(N.jsx)(V.a,Object.assign({},B))})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <TagItem {...props} />
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return l});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),V=e("./node_modules/core-js/modules/es.object.keys.js"),N=e("./node_modules/core-js/modules/es.array.index-of.js"),S=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),s=e("./node_modules/react/index.js"),F=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),A={small:"body3",large:"body2"},h={small:"body3",large:"subhead2"},t=Object(M.a)(function(x,C){var b=C.type,_=C.size,T=x.colors,w=x.typography,k=x.spacing;return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",color:T[o[b]]},title:{display:"flex",alignItems:"center"},icon:{marginRight:k.spacing5},text:Object.assign({},w[A[_]],{fontWeight:400}),time:Object.assign({},w[h[_]],{fontWeight:700})}}),n=e("./node_modules/react/jsx-runtime.js"),r=["type","size","text","time","dateTime","className"];function p(x,C){if(x==null)return{};var b=c(x,C),_,T;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(x);for(T=0;T<w.length;T++)_=w[T],!(C.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(x,_)&&(b[_]=x[_])}return b}function c(x,C){if(x==null)return{};var b={},_=Object.keys(x),T,w;for(w=0;w<_.length;w++)T=_[w],!(C.indexOf(T)>=0)&&(b[T]=x[T]);return b}var u={small:12,large:16},o={navy:"primary1",white:"white"},a=Object(s.forwardRef)(function(x,C){var b=x.type,_=x.size,T=_===void 0?"small":_,w=x.text,k=x.time,O=x.dateTime,j=x.className,i=p(x,r),d=Object(Z.c)(),I=d.colors,D=t({type:b,size:T}),v=D.classes,E=D.cx,H=Object(Y.a)(k),U=H.remainingTime;return Object(n.jsxs)(B.a,Object.assign({component:"div",ref:C,className:E(v.root,j)},i,{children:[Object(n.jsxs)("div",{className:v.title,children:[Object(n.jsx)(F.a,{src:"IcClock",className:v.icon,width:u[T],height:u[T],color:I[o[b]]}),Object(n.jsx)("strong",{className:v.text,children:w})]}),Object(n.jsx)("time",{className:v.time,dateTime:O,children:U})]}))});a.displayName="Timer";var f=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:70},endLoc:{col:1,line:86},startBody:{col:23,line:70},endBody:{col:1,line:86}}},f=`import { Meta } from "@storybook/react";
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
`,y={Default:{startLoc:{col:23,line:62},endLoc:{col:1,line:78},startBody:{col:23,line:62},endBody:{col:1,line:78}}},g=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const { time, type, size, text, dateTime } = props;\\n  const dayjs = getDayjs();\\n  const now = dayjs();\\n\\n  return (\\n    <div style={{ backgroundColor: props.type === \\"white\\" && \\"gray\\" }}>\\n      <Timer\\n        time={time || now}\\n        type={type}\\n        size={size}\\n        text={text}\\n        dateTime={dateTime}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:70},endLoc:{col:1,line:86},startBody:{col:23,line:70},endBody:{col:1,line:86}}}}},title:"@travelmakers-design-v2/core/General/Timer",component:a,argTypes:{type:{control:{type:"radio",options:["navy","white"],default:"navy"},description:"Timer\uC758 \uC0C9\uC0C1 \uD0C0\uC785",table:{type:{summary:"string"}}},size:{control:{type:"radio",options:["small","large"],default:"small"},defaultValue:"small",description:"Timer\uC758 \uC0AC\uC774\uC988",table:{type:{summary:"string"}}},text:{control:{type:"text"},defaultValue:"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529",description:"\uD0C0\uC784 \uC138\uC77C\uC5D0 \uB300\uD55C \uC6CC\uB529",table:{type:{summary:"string"}}},time:{control:{type:"text"},description:"\uD0C0\uC784 \uC138\uC77C \uAE30\uAC04 ex) Thu Apr 06 2023 10:52:19 GMT+0900 (\uD55C\uAD6D \uD45C\uC900\uC2DC)",table:{type:{summary:"dayjs.ConfigType"}}},dateTime:{control:{type:"text"},defaultValue:"2011-11-18",description:"\uAC80\uC0C9 \uC5D4\uC9C4\uC5D0\uC11C \uD544\uC694\uD55C \uB0A0\uC9DC \uB370\uC774\uD130 \uC785\uB2C8\uB2E4.",table:{type:{summary:"string"}}}}},l=function(C){var b=C.time,_=C.type,T=C.size,w=C.text,k=C.dateTime,O=Object($.d)(),j=O();return Object(n.jsx)("div",{style:{backgroundColor:C.type==="white"&&"gray"},children:Object(n.jsx)(a,{time:b||j,type:_,size:T,text:w,dateTime:k})})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return n});var W=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.string.italics.js"),S=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=function(p){return p!=="Pretendard"?{font:{fontFamily:p+", var("+(p==="Noto Serif KR"&&"--font-noto-serif")+")"}}:{font:{}}},B=Object(s.a)(function(r,p){var c,u=p.family,o=p.level,a=p.textAlign,f=p.disabled,y=p.strong,g=p.italic,l=p.underline,x=p.color,C=p.mobile,b=p.tablet,_=function(){return x?{color:f?r.colors.primary4:x?r.colors[x]:r.colors.black}:{}};return{solid:{fontWeight:y?700:400,fontStyle:g?"italic":"normal",textDecoration:l?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},F(u).font,r.typography[o],_(),(c={textAlign:""+a},c[""+r.media.mobile]=Object.assign({},r.typography[C]),c[""+r.media.tablet]=Object.assign({},r.typography[b]),c))}}),M=e("./node_modules/react/jsx-runtime.js"),A=["id","children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function h(r,p){if(r==null)return{};var c=t(r,p),u,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)u=a[o],!(p.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function t(r,p){if(r==null)return{};var c={},u=Object.keys(r),o,a;for(a=0;a<u.length;a++)o=u[a],!(p.indexOf(o)>=0)&&(c[o]=r[o]);return c}var n=Object(Y.forwardRef)(function(r,p){var c=r.id,u=r.children,o=r.component,a=r.family,f=a===void 0?"Pretendard":a,y=r.level,g=y===void 0?"body1":y,l=r.mobileLevel,x=r.tabletLevel,C=r.textAlign,b=C===void 0?"left":C,_=r.disabled,T=_===void 0?!1:_,w=r.strong,k=w===void 0?!1:w,O=r.italic,j=O===void 0?!1:O,i=r.underline,d=i===void 0?!1:i,I=r.color,D=r.className,v=r.co,E=r.overrideStyles,H=h(r,A),U=B({family:f,level:g,disabled:T,strong:k,italic:j,underline:d,textAlign:b,color:I,mobile:l,tablet:x},{overrideStyles:E,name:"typography"}),R=U.classes,P=U.cx;return Object(M.jsx)(Z.a,Object.assign({component:o||"span",ref:p,disabled:T,className:P(R.root,R.solid,D),co:v,onTouchStart:function(){}},H,{children:u}))});n.displayName="Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return F});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),S=e("./node_modules/react/jsx-runtime.js"),Y=e.n(S),Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}},Z=`import {
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
`,s={Default:{startLoc:{col:23,line:169},endLoc:{col:1,line:210},startBody:{col:23,line:169},endBody:{col:1,line:210}}};m.default={title:"@travelmakers-design-v2/core/General/Typography",component:N.a,argTypes:{level:{defaultValue:"body1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["display1","display2","display3","display4","display5","display6","subhead1","subhead2","body1","body2","body3","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ display: \\"flex\\", flexDirection: \\"column\\" }}>\\n      <Typography {...props} level={\\"display1\\"}>\\n        display1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display2\\"}>\\n        display2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display3\\"}>\\n        display3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display4\\"}>\\n        display4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display5\\"}>\\n        display5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"display6\\"}>\\n        display6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead1\\"}>\\n        subhead1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"subhead2\\"}>\\n        subhead2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body1\\"}>\\n        body1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body2\\"}>\\n        body2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"body3\\"}>\\n        body3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:177},endLoc:{col:1,line:218},startBody:{col:23,line:177},endBody:{col:1,line:218}}}},docs:{page:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(V.g,{}),Object(S.jsx)(V.f,{}),Object(S.jsx)(V.b,{}),Object(S.jsx)(V.d,{}),Object(S.jsx)(V.a,{story:V.c}),Object(S.jsx)(V.e,{})]})}}}};var F=function(M){return Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(N.a,Object.assign({},M,{level:"display1",children:"display1. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"display2",children:"display2. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"display3",children:"display3. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"display4",children:"display4. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"display5",children:"display5. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"display6",children:"display6. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"subhead1",children:"subhead1. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"subhead2",children:"subhead2. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"body1",children:"body1. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"body2",children:"body2. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"body3",children:"body3. Travelmakers Design"})),Object(S.jsx)(N.a,Object.assign({},M,{level:"caption",children:"caption. Travelmakers Design"}))]})};F.displayName="Default",F.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},F.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(oe,m,e){"use strict";e.d(m,"a",function(){return r});var W=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.assign.js"),N=e("./node_modules/core-js/modules/es.object.keys.js"),S=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),s=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),F=e("./node_modules/react/index.js");function B(p,c){return typeof p=="function"?p(c):p}var M=e("./node_modules/react/jsx-runtime.js"),A=["component","className","style","co"];function h(p,c){if(p==null)return{};var u=t(p,c),o,a;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);for(a=0;a<f.length;a++)o=f[a],!(c.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(p,o)&&(u[o]=p[o])}return u}function t(p,c){if(p==null)return{};var u={},o=Object.keys(p),a,f;for(f=0;f<o.length;f++)a=o[f],!(c.indexOf(a)>=0)&&(u[a]=p[a]);return u}function n(p,c){var u=Object(Z.a)(),o=u.css,a=u.cx,f=Object(s.c)();return Array.isArray(p)?a(c,p.map(function(y){return o(B(y,f))})):a(c,o(B(p,f)))}var r=Object(F.forwardRef)(function(p,c){var u=p.component,o=p.className,a=p.style,f=p.co,y=h(p,A),g=u||"div";return Object(M.jsx)(g,Object.assign({ref:c,className:n(f,o),style:a},y))});r.displayName="View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return s});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),N=e("./node_modules/react/jsx-runtime.js"),S=e.n(N),Y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},Y=`import { View } from "../View";

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
`,Z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.black,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design-v2/core/General/View",component:V.a};var s=function(){return Object(N.jsx)(V.a,{co:function(M){return{width:100,height:100,backgroundColor:M.colors.black}}})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.black,
      })}
    />
  );
}`}},s.parameters)},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return S});var W=e("./node_modules/core-js/modules/es.array.concat.js"),$=e.n(W),V=e("./node_modules/react/index.js"),N=e.n(V),S=function(Z){var s=Object(V.useRef)(Z);return Object(V.useEffect)(function(){s.current=Z},[Z]),Object(V.useMemo)(function(){return function(){for(var F,B=arguments.length,M=new Array(B),A=0;A<B;A++)M[A]=arguments[A];return(F=s.current)===null||F===void 0?void 0:F.call.apply(F,[s].concat(M))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return k});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),S=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),s=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),t=e("./node_modules/core-js/modules/web.timers.js");function n(O,j){return o(O)||u(O,j)||p(O,j)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(O,j){if(O){if(typeof O=="string")return c(O,j);var i=Object.prototype.toString.call(O).slice(8,-1);if(i==="Object"&&O.constructor&&(i=O.constructor.name),i==="Map"||i==="Set")return Array.from(O);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(O,j)}}function c(O,j){(j==null||j>O.length)&&(j=O.length);for(var i=0,d=new Array(j);i<j;i++)d[i]=O[i];return d}function u(O,j){var i=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(i!=null){var d,I,D,v,E=[],H=!0,U=!1;try{if(D=(i=i.call(O)).next,j===0){if(Object(i)!==i)return;H=!1}else for(;!(H=(d=D.call(i)).done)&&(E.push(d.value),E.length!==j);H=!0);}catch(R){U=!0,I=R}finally{try{if(!H&&i.return!=null&&(v=i.return(),Object(v)!==v))return}finally{if(U)throw I}}return E}}function o(O){if(Array.isArray(O))return O}var a=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=j.timeout,d=i===void 0?2e3:i,I=Object(h.useState)(null),D=n(I,2),v=D[0],E=D[1],H=Object(h.useState)(!1),U=n(H,2),R=U[0],P=U[1],L=Object(h.useState)(null),K=n(L,2),X=K[0],le=K[1],ce=function(de){clearTimeout(X),le(setTimeout(function(){return P(!1)},d)),P(de)},ee=function(de){"clipboard"in navigator?navigator.clipboard.writeText(de).then(function(){return ce(!0)}).catch(function(pe){return E(pe)}):E(new Error("useClipboard: navigator.clipboard is not supported"))},ie=function(){P(!1),E(null),clearTimeout(X)};return{copy:ee,reset:ie,error:v,copied:R}},f=e("./node_modules/react/jsx-runtime.js");function y(O,j){return b(O)||C(O,j)||l(O,j)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(O,j){if(O){if(typeof O=="string")return x(O,j);var i=Object.prototype.toString.call(O).slice(8,-1);if(i==="Object"&&O.constructor&&(i=O.constructor.name),i==="Map"||i==="Set")return Array.from(O);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return x(O,j)}}function x(O,j){(j==null||j>O.length)&&(j=O.length);for(var i=0,d=new Array(j);i<j;i++)d[i]=O[i];return d}function C(O,j){var i=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(i!=null){var d,I,D,v,E=[],H=!0,U=!1;try{if(D=(i=i.call(O)).next,j===0){if(Object(i)!==i)return;H=!1}else for(;!(H=(d=D.call(i)).done)&&(E.push(d.value),E.length!==j);H=!0);}catch(R){U=!0,I=R}finally{try{if(!H&&i.return!=null&&(v=i.return(),Object(v)!==v))return}finally{if(U)throw I}}return E}}function b(O){if(Array.isArray(O))return O}var _=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},_=`import React, { useState } from "react";

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
`,T={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},w=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design-v2/hooks/useClipboard"},k=function(){var j=Object(h.useState)(""),i=y(j,2),d=i[0],I=i[1],D=a({timeout:3e3}),v=D.copy,E=D.copied;return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",onChange:function(U){return I(U.target.value)}}),Object(f.jsx)("button",{onClick:function(){return v(d)},children:"copy"}),Object(f.jsx)("span",{children:E&&"Copied!!"})]})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return O});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),S=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),s=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),t=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),n=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function r(j,i){return a(j)||o(j,i)||c(j,i)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(j,i){if(j){if(typeof j=="string")return u(j,i);var d=Object.prototype.toString.call(j).slice(8,-1);if(d==="Object"&&j.constructor&&(d=j.constructor.name),d==="Map"||d==="Set")return Array.from(j);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return u(j,i)}}function u(j,i){(i==null||i>j.length)&&(i=j.length);for(var d=0,I=new Array(i);d<i;d++)I[d]=j[d];return I}function o(j,i){var d=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(d!=null){var I,D,v,E,H=[],U=!0,R=!1;try{if(v=(d=d.call(j)).next,i===0){if(Object(d)!==d)return;U=!1}else for(;!(U=(I=v.call(d)).done)&&(H.push(I.value),H.length!==i);U=!0);}catch(P){R=!0,D=P}finally{try{if(!U&&d.return!=null&&(E=d.return(),Object(E)!==E))return}finally{if(R)throw D}}return H}}function a(j){if(Array.isArray(j))return j}var f=function(i,d,I){var D=Object(n.a)(i,d),v=r(D,2),E=v[0],H=v[1];return Object(t.a)(E,I),H},y=e("./node_modules/react/jsx-runtime.js");function g(j,i){return _(j)||b(j,i)||x(j,i)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(j,i){if(j){if(typeof j=="string")return C(j,i);var d=Object.prototype.toString.call(j).slice(8,-1);if(d==="Object"&&j.constructor&&(d=j.constructor.name),d==="Map"||d==="Set")return Array.from(j);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return C(j,i)}}function C(j,i){(i==null||i>j.length)&&(i=j.length);for(var d=0,I=new Array(i);d<i;d++)I[d]=j[d];return I}function b(j,i){var d=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(d!=null){var I,D,v,E,H=[],U=!0,R=!1;try{if(v=(d=d.call(j)).next,i===0){if(Object(d)!==d)return;U=!1}else for(;!(U=(I=v.call(d)).done)&&(H.push(I.value),H.length!==i);U=!0);}catch(P){R=!0,D=P}finally{try{if(!U&&d.return!=null&&(E=d.return(),Object(E)!==E))return}finally{if(R)throw D}}return H}}function _(j){if(Array.isArray(j))return j}var T=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},T=`import React, { useState } from "react";

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
`,w={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},k=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useDebounce"},O=function(){var i=Object(h.useState)(""),d=g(i,2),I=d[0],D=d[1],v=f(function(){alert("Updated!")},1e3,[I]);return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",onChange:function(H){return D(H.target.value)}}),Object(y.jsx)("button",{onClick:v,children:"Cancel"})]})};O.displayName="Default",O.parameters=Object.assign({storySource:{source:`() => {
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
}`}},O.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return B});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/react/index.js"),N=e.n(V),S=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Y=e("./node_modules/react/jsx-runtime.js"),Z=e.n(Y),s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},s=`import React from "react";
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
`,F={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useForceUpdate"};var B=function(){var A=Object(S.a)();return Object(Y.jsxs)("div",{children:[Math.random(),Object(Y.jsx)("button",{onClick:A,children:"Update"})]})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return k});var W=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(V),S=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e.n(S),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),s=e.n(Z),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e.n(F),M=e("./node_modules/core-js/modules/es.string.iterator.js"),A=e.n(M),h=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e.n(h),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),r=e.n(n),p=e("./node_modules/core-js/modules/es.array.slice.js"),c=e.n(p),u=e("./node_modules/core-js/modules/es.function.name.js"),o=e.n(u),a=e("./node_modules/core-js/modules/es.array.from.js"),f=e.n(a),y=e("./node_modules/react/index.js"),g=e.n(y);function l(O,j){return T(O)||_(O,j)||C(O,j)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(O,j){if(O){if(typeof O=="string")return b(O,j);var i=Object.prototype.toString.call(O).slice(8,-1);if(i==="Object"&&O.constructor&&(i=O.constructor.name),i==="Map"||i==="Set")return Array.from(O);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return b(O,j)}}function b(O,j){(j==null||j>O.length)&&(j=O.length);for(var i=0,d=new Array(j);i<j;i++)d[i]=O[i];return d}function _(O,j){var i=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(i!=null){var d,I,D,v,E=[],H=!0,U=!1;try{if(D=(i=i.call(O)).next,j===0){if(Object(i)!==i)return;H=!1}else for(;!(H=(d=D.call(i)).done)&&(E.push(d.value),E.length!==j);H=!0);}catch(R){U=!0,I=R}finally{try{if(!H&&i.return!=null&&(v=i.return(),Object(v)!==v))return}finally{if(U)throw I}}return E}}function T(O){if(Array.isArray(O))return O}var w=function(j){return(j+1)%1e6},k=function(){var j=Object(y.useReducer)(w,0),i=l(j,2),d=i[1];return d}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return F});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),V=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function A(n){n.preventDefault()}function h(){document.body.addEventListener("touchmove",A,{passive:!1})}function t(){document.body.removeEventListener("touchmove",A)}return Object($.useEffect)(function(){return M&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var n=document.body.style.top;document.body.style.cssText=""}},[]),Object($.useEffect)(function(){return M&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[M]),null},N=V,S=e("./node_modules/react/jsx-runtime.js"),Y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},Y=`import React, { useState } from "react";

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
`,Z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}},s=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design-v2/hooks/useHiddenBodyOverflow"},F=function(){return N(!0),Object(S.jsx)("div",{children:Object(S.jsx)("span",{children:"useHiddenBodyOverflow"})})};F.displayName="Default",F.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},F.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return ce});var W=e("./node_modules/core-js/modules/es.promise.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/web.timers.js"),N=e("./node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),s=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/core-js/modules/es.array.slice.js"),h=e("./node_modules/core-js/modules/es.function.name.js"),t=e("./node_modules/core-js/modules/es.array.from.js"),n=e("./node_modules/react/index.js"),r=e("./node_modules/core-js/modules/es.object.define-property.js"),p=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),c=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),u=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),o=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),a=e("./node_modules/core-js/modules/es.object.create.js"),f=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),y=e("./node_modules/core-js/modules/es.array.for-each.js"),g=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),l=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),x=e("./node_modules/core-js/modules/es.array.reverse.js"),C=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function b(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */b=function(){return ee};var ee={},ie=Object.prototype,re=ie.hasOwnProperty,de=Object.defineProperty||function(ae,ne,se){ae[ne]=se.value},pe=typeof Symbol=="function"?Symbol:{},fe=pe.iterator||"@@iterator",je=pe.asyncIterator||"@@asyncIterator",he=pe.toStringTag||"@@toStringTag";function ve(ae,ne,se){return Object.defineProperty(ae,ne,{value:se,enumerable:!0,configurable:!0,writable:!0}),ae[ne]}try{ve({},"")}catch(ae){ve=function(se,Q,J){return se[Q]=J}}function _e(ae,ne,se,Q){var J=ne&&ne.prototype instanceof ke?ne:ke,q=Object.create(J.prototype),te=new Me(Q||[]);return de(q,"_invoke",{value:He(ae,se,te)}),q}function Be(ae,ne,se){try{return{type:"normal",arg:ae.call(ne,se)}}catch(Q){return{type:"throw",arg:Q}}}ee.wrap=_e;var De={};function ke(){}function Pe(){}function xe(){}var we={};ve(we,fe,function(){return this});var Re=Object.getPrototypeOf,Le=Re&&Re(Re(Ae([])));Le&&Le!==ie&&re.call(Le,fe)&&(we=Le);var Ee=xe.prototype=ke.prototype=Object.create(we);function Se(ae){["next","throw","return"].forEach(function(ne){ve(ae,ne,function(se){return this._invoke(ne,se)})})}function Ve(ae,ne){function se(J,q,te,ue){var ge=Be(ae[J],ae,q);if(ge.type!=="throw"){var be=ge.arg,Te=be.value;return Te&&typeof Te=="object"&&re.call(Te,"__await")?ne.resolve(Te.__await).then(function(Oe){se("next",Oe,te,ue)},function(Oe){se("throw",Oe,te,ue)}):ne.resolve(Te).then(function(Oe){be.value=Oe,te(be)},function(Oe){return se("throw",Oe,te,ue)})}ue(ge.arg)}var Q;de(this,"_invoke",{value:function(q,te){function ue(){return new ne(function(ge,be){se(q,te,ge,be)})}return Q=Q?Q.then(ue,ue):ue()}})}function He(ae,ne,se){var Q="suspendedStart";return function(J,q){if(Q==="executing")throw new Error("Generator is already running");if(Q==="completed"){if(J==="throw")throw q;return Fe()}for(se.method=J,se.arg=q;;){var te=se.delegate;if(te){var ue=We(te,se);if(ue){if(ue===De)continue;return ue}}if(se.method==="next")se.sent=se._sent=se.arg;else if(se.method==="throw"){if(Q==="suspendedStart")throw Q="completed",se.arg;se.dispatchException(se.arg)}else se.method==="return"&&se.abrupt("return",se.arg);Q="executing";var ge=Be(ae,ne,se);if(ge.type==="normal"){if(Q=se.done?"completed":"suspendedYield",ge.arg===De)continue;return{value:ge.arg,done:se.done}}ge.type==="throw"&&(Q="completed",se.method="throw",se.arg=ge.arg)}}}function We(ae,ne){var se=ne.method,Q=ae.iterator[se];if(Q===void 0)return ne.delegate=null,se==="throw"&&ae.iterator.return&&(ne.method="return",ne.arg=void 0,We(ae,ne),ne.method==="throw")||se!=="return"&&(ne.method="throw",ne.arg=new TypeError("The iterator does not provide a '"+se+"' method")),De;var J=Be(Q,ae.iterator,ne.arg);if(J.type==="throw")return ne.method="throw",ne.arg=J.arg,ne.delegate=null,De;var q=J.arg;return q?q.done?(ne[ae.resultName]=q.value,ne.next=ae.nextLoc,ne.method!=="return"&&(ne.method="next",ne.arg=void 0),ne.delegate=null,De):q:(ne.method="throw",ne.arg=new TypeError("iterator result is not an object"),ne.delegate=null,De)}function Ne(ae){var ne={tryLoc:ae[0]};1 in ae&&(ne.catchLoc=ae[1]),2 in ae&&(ne.finallyLoc=ae[2],ne.afterLoc=ae[3]),this.tryEntries.push(ne)}function Ue(ae){var ne=ae.completion||{};ne.type="normal",delete ne.arg,ae.completion=ne}function Me(ae){this.tryEntries=[{tryLoc:"root"}],ae.forEach(Ne,this),this.reset(!0)}function Ae(ae){if(ae){var ne=ae[fe];if(ne)return ne.call(ae);if(typeof ae.next=="function")return ae;if(!isNaN(ae.length)){var se=-1,Q=function J(){for(;++se<ae.length;)if(re.call(ae,se))return J.value=ae[se],J.done=!1,J;return J.value=void 0,J.done=!0,J};return Q.next=Q}}return{next:Fe}}function Fe(){return{value:void 0,done:!0}}return Pe.prototype=xe,de(Ee,"constructor",{value:xe,configurable:!0}),de(xe,"constructor",{value:Pe,configurable:!0}),Pe.displayName=ve(xe,he,"GeneratorFunction"),ee.isGeneratorFunction=function(ae){var ne=typeof ae=="function"&&ae.constructor;return!!ne&&(ne===Pe||(ne.displayName||ne.name)==="GeneratorFunction")},ee.mark=function(ae){return Object.setPrototypeOf?Object.setPrototypeOf(ae,xe):(ae.__proto__=xe,ve(ae,he,"GeneratorFunction")),ae.prototype=Object.create(Ee),ae},ee.awrap=function(ae){return{__await:ae}},Se(Ve.prototype),ve(Ve.prototype,je,function(){return this}),ee.AsyncIterator=Ve,ee.async=function(ae,ne,se,Q,J){J===void 0&&(J=Promise);var q=new Ve(_e(ae,ne,se,Q),J);return ee.isGeneratorFunction(ne)?q:q.next().then(function(te){return te.done?te.value:q.next()})},Se(Ee),ve(Ee,he,"Generator"),ve(Ee,fe,function(){return this}),ve(Ee,"toString",function(){return"[object Generator]"}),ee.keys=function(ae){var ne=Object(ae),se=[];for(var Q in ne)se.push(Q);return se.reverse(),function J(){for(;se.length;){var q=se.pop();if(q in ne)return J.value=q,J.done=!1,J}return J.done=!0,J}},ee.values=Ae,Me.prototype={constructor:Me,reset:function(ne){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ue),!ne)for(var se in this)se.charAt(0)==="t"&&re.call(this,se)&&!isNaN(+se.slice(1))&&(this[se]=void 0)},stop:function(){this.done=!0;var ne=this.tryEntries[0].completion;if(ne.type==="throw")throw ne.arg;return this.rval},dispatchException:function(ne){if(this.done)throw ne;var se=this;function Q(be,Te){return te.type="throw",te.arg=ne,se.next=be,Te&&(se.method="next",se.arg=void 0),!!Te}for(var J=this.tryEntries.length-1;J>=0;--J){var q=this.tryEntries[J],te=q.completion;if(q.tryLoc==="root")return Q("end");if(q.tryLoc<=this.prev){var ue=re.call(q,"catchLoc"),ge=re.call(q,"finallyLoc");if(ue&&ge){if(this.prev<q.catchLoc)return Q(q.catchLoc,!0);if(this.prev<q.finallyLoc)return Q(q.finallyLoc)}else if(ue){if(this.prev<q.catchLoc)return Q(q.catchLoc,!0)}else{if(!ge)throw new Error("try statement without catch or finally");if(this.prev<q.finallyLoc)return Q(q.finallyLoc)}}}},abrupt:function(ne,se){for(var Q=this.tryEntries.length-1;Q>=0;--Q){var J=this.tryEntries[Q];if(J.tryLoc<=this.prev&&re.call(J,"finallyLoc")&&this.prev<J.finallyLoc){var q=J;break}}q&&(ne==="break"||ne==="continue")&&q.tryLoc<=se&&se<=q.finallyLoc&&(q=null);var te=q?q.completion:{};return te.type=ne,te.arg=se,q?(this.method="next",this.next=q.finallyLoc,De):this.complete(te)},complete:function(ne,se){if(ne.type==="throw")throw ne.arg;return ne.type==="break"||ne.type==="continue"?this.next=ne.arg:ne.type==="return"?(this.rval=this.arg=ne.arg,this.method="return",this.next="end"):ne.type==="normal"&&se&&(this.next=se),De},finish:function(ne){for(var se=this.tryEntries.length-1;se>=0;--se){var Q=this.tryEntries[se];if(Q.finallyLoc===ne)return this.complete(Q.completion,Q.afterLoc),Ue(Q),De}},catch:function(ne){for(var se=this.tryEntries.length-1;se>=0;--se){var Q=this.tryEntries[se];if(Q.tryLoc===ne){var J=Q.completion;if(J.type==="throw"){var q=J.arg;Ue(Q)}return q}}throw new Error("illegal catch attempt")},delegateYield:function(ne,se,Q){return this.delegate={iterator:Ae(ne),resultName:se,nextLoc:Q},this.method==="next"&&(this.arg=void 0),De}},ee}function _(ee,ie,re,de,pe,fe,je){try{var he=ee[fe](je),ve=he.value}catch(_e){re(_e);return}he.done?ie(ve):Promise.resolve(ve).then(de,pe)}function T(ee){return function(){var ie=this,re=arguments;return new Promise(function(de,pe){var fe=ee.apply(ie,re);function je(ve){_(fe,de,pe,je,he,"next",ve)}function he(ve){_(fe,de,pe,je,he,"throw",ve)}je(void 0)})}}function w(ee,ie){return d(ee)||i(ee,ie)||O(ee,ie)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(ee,ie){if(ee){if(typeof ee=="string")return j(ee,ie);var re=Object.prototype.toString.call(ee).slice(8,-1);if(re==="Object"&&ee.constructor&&(re=ee.constructor.name),re==="Map"||re==="Set")return Array.from(ee);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return j(ee,ie)}}function j(ee,ie){(ie==null||ie>ee.length)&&(ie=ee.length);for(var re=0,de=new Array(ie);re<ie;re++)de[re]=ee[re];return de}function i(ee,ie){var re=ee==null?null:typeof Symbol!="undefined"&&ee[Symbol.iterator]||ee["@@iterator"];if(re!=null){var de,pe,fe,je,he=[],ve=!0,_e=!1;try{if(fe=(re=re.call(ee)).next,ie===0){if(Object(re)!==re)return;ve=!1}else for(;!(ve=(de=fe.call(re)).done)&&(he.push(de.value),he.length!==ie);ve=!0);}catch(Be){_e=!0,pe=Be}finally{try{if(!ve&&re.return!=null&&(je=re.return(),Object(je)!==je))return}finally{if(_e)throw pe}}return he}}function d(ee){if(Array.isArray(ee))return ee}var I=function(ie){var re=Object(n.useState)(!1),de=w(re,2),pe=de[0],fe=de[1],je=Object(C.a)(ie),he=Object(n.useCallback)(T(b().mark(function ve(){var _e,Be=arguments;return b().wrap(function(ke){for(;;)switch(ke.prev=ke.next){case 0:return fe(!0),ke.next=3,je.apply(void 0,Be);case 3:return _e=ke.sent,fe(!1),ke.abrupt("return",_e);case 6:case"end":return ke.stop()}},ve)})),[ie]);return[pe,he]},D=e("./node_modules/react/jsx-runtime.js");function v(ee,ie){return P(ee)||R(ee,ie)||H(ee,ie)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(ee,ie){if(ee){if(typeof ee=="string")return U(ee,ie);var re=Object.prototype.toString.call(ee).slice(8,-1);if(re==="Object"&&ee.constructor&&(re=ee.constructor.name),re==="Map"||re==="Set")return Array.from(ee);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return U(ee,ie)}}function U(ee,ie){(ie==null||ie>ee.length)&&(ie=ee.length);for(var re=0,de=new Array(ie);re<ie;re++)de[re]=ee[re];return de}function R(ee,ie){var re=ee==null?null:typeof Symbol!="undefined"&&ee[Symbol.iterator]||ee["@@iterator"];if(re!=null){var de,pe,fe,je,he=[],ve=!0,_e=!1;try{if(fe=(re=re.call(ee)).next,ie===0){if(Object(re)!==re)return;ve=!1}else for(;!(ve=(de=fe.call(re)).done)&&(he.push(de.value),he.length!==ie);ve=!0);}catch(Be){_e=!0,pe=Be}finally{try{if(!ve&&re.return!=null&&(je=re.return(),Object(je)!==je))return}finally{if(_e)throw pe}}return he}}function P(ee){if(Array.isArray(ee))return ee}var L=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,K={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},L=`import React from "react";
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
`,K={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},X=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design-v2/hooks/useLoading"},le=function(ie){return new Promise(function(re){return setTimeout(re,ie)})},ce=function(){var ie=I(le),re=v(ie,2),de=re[0],pe=re[1];return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{children:Object(D.jsx)("button",{onClick:function(){return pe(2e3)},children:"Start"})}),Object(D.jsxs)("div",{children:["Loading: ",""+de]})]})};ce.displayName="Default",ce.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},ce.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return D});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e.n(V),S=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(S),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),s=e.n(Z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(F),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e.n(M),h=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(h),n=e("./node_modules/core-js/modules/es.array.iterator.js"),r=e.n(n),p=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),c=e.n(p),u=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(u),a=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(a),y=e("./node_modules/core-js/modules/es.array.from.js"),g=e.n(y),l=e("./node_modules/react/index.js"),x=e.n(l),C=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),b=e("./node_modules/react/jsx-runtime.js"),_=e.n(b);function T(v,E){return i(v)||j(v,E)||k(v,E)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(v,E){if(v){if(typeof v=="string")return O(v,E);var H=Object.prototype.toString.call(v).slice(8,-1);if(H==="Object"&&v.constructor&&(H=v.constructor.name),H==="Map"||H==="Set")return Array.from(v);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return O(v,E)}}function O(v,E){(E==null||E>v.length)&&(E=v.length);for(var H=0,U=new Array(E);H<E;H++)U[H]=v[H];return U}function j(v,E){var H=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(H!=null){var U,R,P,L,K=[],X=!0,le=!1;try{if(P=(H=H.call(v)).next,E===0){if(Object(H)!==H)return;X=!1}else for(;!(X=(U=P.call(H)).done)&&(K.push(U.value),K.length!==E);X=!0);}catch(ce){le=!0,R=ce}finally{try{if(!X&&H.return!=null&&(L=H.return(),Object(L)!==L))return}finally{if(le)throw R}}return K}}function i(v){if(Array.isArray(v))return v}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},d=`import { useEffect } from "react";

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
`,I={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design-v2/hooks/useRafState"};var D=function(){var E=Object(C.a)({width:0,height:0}),H=T(E,2),U=H[0],R=H[1];return Object(l.useEffect)(function(){var P=function(){R({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",P),function(){window.removeEventListener("resize",P)}},[]),Object(b.jsx)("pre",{children:JSON.stringify(U,null,2)})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
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
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return w});var W=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(V),S=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e.n(S),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),s=e.n(Z),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e.n(F),M=e("./node_modules/core-js/modules/es.string.iterator.js"),A=e.n(M),h=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e.n(h),n=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),r=e.n(n),p=e("./node_modules/core-js/modules/es.array.slice.js"),c=e.n(p),u=e("./node_modules/core-js/modules/es.function.name.js"),o=e.n(u),a=e("./node_modules/core-js/modules/es.array.from.js"),f=e.n(a),y=e("./node_modules/react/index.js"),g=e.n(y);function l(k,O){return T(k)||_(k,O)||C(k,O)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(k,O){if(k){if(typeof k=="string")return b(k,O);var j=Object.prototype.toString.call(k).slice(8,-1);if(j==="Object"&&k.constructor&&(j=k.constructor.name),j==="Map"||j==="Set")return Array.from(k);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return b(k,O)}}function b(k,O){(O==null||O>k.length)&&(O=k.length);for(var j=0,i=new Array(O);j<O;j++)i[j]=k[j];return i}function _(k,O){var j=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(j!=null){var i,d,I,D,v=[],E=!0,H=!1;try{if(I=(j=j.call(k)).next,O===0){if(Object(j)!==j)return;E=!1}else for(;!(E=(i=I.call(j)).done)&&(v.push(i.value),v.length!==O);E=!0);}catch(U){H=!0,d=U}finally{try{if(!E&&j.return!=null&&(D=j.return(),Object(D)!==D))return}finally{if(H)throw d}}return v}}function T(k){if(Array.isArray(k))return k}var w=function(O){var j=Object(y.useRef)(0),i=Object(y.useState)(O),d=l(i,2),I=d[0],D=d[1],v=Object(y.useCallback)(function(E){cancelAnimationFrame(j.current),j.current=requestAnimationFrame(function(){D(E)})},[]);return[I,v]}},"./packages/travelmakers-design-hooks/src/useRemainingTimer/stories/useRemainingTimer.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return B});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/dayjs/dayjs.min.js"),N=e.n(V),S=e("./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts"),Y=e("./node_modules/react/jsx-runtime.js"),Z=e.n(Y),s=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},s=`import dayjs from "dayjs";
import { useRemainingTimer } from "../useRemainingTimer";

export default {
  title: "@travelmakers-design-v2/hooks/useRemainingTimer",
};

export const Default = () => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
};
`,F={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { remainingTime } = useRemainingTimer(dayjs());\\n\\n  return <div>{remainingTime}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design-v2/hooks/useRemainingTimer"};var B=function(){var A=Object(S.a)(N()()),h=A.remainingTime;return Object(Y.jsx)("div",{children:h})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`() => {
  const { remainingTime } = useRemainingTimer(dayjs());

  return <div>{remainingTime}</div>;
}`}},B.parameters)},"./packages/travelmakers-design-hooks/src/useRemainingTimer/useRemainingTimer.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return _});var W=e("./node_modules/core-js/modules/web.timers.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),S=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),s=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/dayjs/dayjs.min.js"),t=e.n(h),n=e("./node_modules/dayjs/plugin/duration.js"),r=e.n(n),p=e("./node_modules/dayjs/plugin/timezone.js"),c=e.n(p),u=e("./node_modules/dayjs/plugin/utc.js"),o=e.n(u);t.a.extend(r.a),t.a.extend(o.a),t.a.extend(c.a),t.a.tz.setDefault("Asia/Seoul");var a=function(w){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"DD\uC77C HH:mm:ss",O=t()(w),j=t()(),i=O.diff(j),d=j.isSame(O)||i<=0;if(d)return"00:00:00";var I=t.a.duration(i).days();return I===0?t()(i).format("HH:mm:ss"):t()(i).format(k)},f=e("./node_modules/react/index.js");function y(T,w){return b(T)||C(T,w)||l(T,w)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(T,w){if(T){if(typeof T=="string")return x(T,w);var k=Object.prototype.toString.call(T).slice(8,-1);if(k==="Object"&&T.constructor&&(k=T.constructor.name),k==="Map"||k==="Set")return Array.from(T);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return x(T,w)}}function x(T,w){(w==null||w>T.length)&&(w=T.length);for(var k=0,O=new Array(w);k<w;k++)O[k]=T[k];return O}function C(T,w){var k=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(k!=null){var O,j,i,d,I=[],D=!0,v=!1;try{if(i=(k=k.call(T)).next,w===0){if(Object(k)!==k)return;D=!1}else for(;!(D=(O=i.call(k)).done)&&(I.push(O.value),I.length!==w);D=!0);}catch(E){v=!0,j=E}finally{try{if(!D&&k.return!=null&&(d=k.return(),Object(d)!==d))return}finally{if(v)throw j}}return I}}function b(T){if(Array.isArray(T))return T}var _=function(w,k,O){var j=Object(f.useState)(""),i=y(j,2),d=i[0],I=i[1];return Object(f.useLayoutEffect)(function(){var D=null;return D=setInterval(function(){return I(a(w,k))},O),function(){D&&clearInterval(D)}},[]),{remainingTime:d}}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return i});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/core-js/modules/es.symbol.description.js"),S=e("./node_modules/core-js/modules/es.object.to-string.js"),Y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),s=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),t=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),n=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function r(d,I){return a(d)||o(d,I)||c(d,I)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(d,I){if(d){if(typeof d=="string")return u(d,I);var D=Object.prototype.toString.call(d).slice(8,-1);if(D==="Object"&&d.constructor&&(D=d.constructor.name),D==="Map"||D==="Set")return Array.from(d);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return u(d,I)}}function u(d,I){(I==null||I>d.length)&&(I=d.length);for(var D=0,v=new Array(I);D<I;D++)v[D]=d[D];return v}function o(d,I){var D=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(D!=null){var v,E,H,U,R=[],P=!0,L=!1;try{if(H=(D=D.call(d)).next,I===0){if(Object(D)!==D)return;P=!1}else for(;!(P=(v=H.call(D)).done)&&(R.push(v.value),R.length!==I);P=!0);}catch(K){L=!0,E=K}finally{try{if(!P&&D.return!=null&&(U=D.return(),Object(U)!==U))return}finally{if(L)throw E}}return R}}function a(d){if(Array.isArray(d))return d}var f={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},y=typeof window!="undefined",g=function(){var I=Object(h.useRef)(null),D=Object(n.a)(f),v=r(D,2),E=v[0],H=v[1],U=Object(h.useMemo)(function(){return y?new ResizeObserver(function(R){var P=R[0];P&&H(P.contentRect)}):null},[]);return Object(h.useEffect)(function(){return I.current&&U.observe(I.current),function(){U.disconnect()}},[I.current]),[I,E]},l=e("./node_modules/react/jsx-runtime.js");function x(d,I){return w(d)||T(d,I)||b(d,I)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(d,I){if(d){if(typeof d=="string")return _(d,I);var D=Object.prototype.toString.call(d).slice(8,-1);if(D==="Object"&&d.constructor&&(D=d.constructor.name),D==="Map"||D==="Set")return Array.from(d);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return _(d,I)}}function _(d,I){(I==null||I>d.length)&&(I=d.length);for(var D=0,v=new Array(I);D<I;D++)v[D]=d[D];return v}function T(d,I){var D=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(D!=null){var v,E,H,U,R=[],P=!0,L=!1;try{if(H=(D=D.call(d)).next,I===0){if(Object(D)!==D)return;P=!1}else for(;!(P=(v=H.call(D)).done)&&(R.push(v.value),R.length!==I);P=!0);}catch(K){L=!0,E=K}finally{try{if(!P&&D.return!=null&&(U=D.return(),Object(U)!==U))return}finally{if(L)throw E}}return R}}function w(d){if(Array.isArray(d))return d}var k=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},k=`import React, { useEffect } from "react";

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
`,O={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},j=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design-v2/hooks/useResize"},i=function(){var I=g(),D=x(I,2),v=D[0],E=D[1],H=Object(t.a)();return Object(h.useEffect)(function(){H()},[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("textarea",{ref:v,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(l.jsx)("div",{children:JSON.stringify(E)})]})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return D});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e.n(V),S=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(S),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),s=e.n(Z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(F),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e.n(M),h=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(h),n=e("./node_modules/core-js/modules/es.array.iterator.js"),r=e.n(n),p=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),c=e.n(p),u=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(u),a=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(a),y=e("./node_modules/core-js/modules/es.array.from.js"),g=e.n(y),l=e("./node_modules/react/index.js"),x=e.n(l),C=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),b=e("./node_modules/react/jsx-runtime.js"),_=e.n(b);function T(v,E){return i(v)||j(v,E)||k(v,E)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(v,E){if(v){if(typeof v=="string")return O(v,E);var H=Object.prototype.toString.call(v).slice(8,-1);if(H==="Object"&&v.constructor&&(H=v.constructor.name),H==="Map"||H==="Set")return Array.from(v);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return O(v,E)}}function O(v,E){(E==null||E>v.length)&&(E=v.length);for(var H=0,U=new Array(E);H<E;H++)U[H]=v[H];return U}function j(v,E){var H=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(H!=null){var U,R,P,L,K=[],X=!0,le=!1;try{if(P=(H=H.call(v)).next,E===0){if(Object(H)!==H)return;X=!1}else for(;!(X=(U=P.call(H)).done)&&(K.push(U.value),K.length!==E);X=!0);}catch(ce){le=!0,R=ce}finally{try{if(!X&&H.return!=null&&(L=H.return(),Object(L)!==L))return}finally{if(le)throw R}}return K}}function i(v){if(Array.isArray(v))return v}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},d=`import React from "react";
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
`,I={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design-v2/hooks/useTimeoutFn"};var D=function(){var E=Object(C.a)(function(){alert("fire!")},2e3),H=T(E,2),U=H[0],R=H[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:U,children:"Run"}),Object(b.jsx)("button",{onClick:R,children:"Clear"})]})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return Y});var W=e("./node_modules/core-js/modules/web.timers.js"),$=e.n(W),V=e("./node_modules/react/index.js"),N=e.n(V),S=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Y=function(s,F){var B=Object(V.useRef)(),M=Object(S.a)(s),A=Object(V.useCallback)(function(){B.current&&clearTimeout(B.current),B.current=setTimeout(function(){M()},F)},[F]),h=Object(V.useCallback)(function(){B.current&&clearTimeout(B.current)},[]);return Object(V.useEffect)(function(){return h},[h]),[A,h]}},"./packages/travelmakers-design-hooks/src/useToast/stories/useToast.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Toast",function(){return a});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react-hot-toast/dist/index.js"),V=e.n($),N=e("./node_modules/core-js/modules/es.object.keys.js"),S=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-core/src/components/Icon/Icon.tsx"),s=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),F=e("./node_modules/react/jsx-runtime.js"),B=["text","align"];function M(f,y){if(f==null)return{};var g=A(f,y),l,x;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(f);for(x=0;x<C.length;x++)l=C[x],!(y.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(f,l)&&(g[l]=f[l])}return g}function A(f,y){if(f==null)return{};var g={},l=Object.keys(f),x,C;for(C=0;C<l.length;C++)x=l[C],!(y.indexOf(x)>=0)&&(g[x]=f[x]);return g}var h={left:"flex-start",center:"center",right:"flex-end"},t={success:"IcResultSuccess",error:"IcResultFail"},n=function(y){var g=y.typography,l=y.colors,x=y.shadows;return{style:Object.assign({},g.body2,{width:"328px",padding:"11px 6px",color:l.white,backgroundColor:l.black30,boxShadow:x.elevation4}),duration:2e3}},r=function(y){return{display:"flex",justifyContent:h[y!=null?y:"center"],width:"100%"}},p=function(){var y=Object(s.c)(),g=y.spacing,l=function(T,w){var k=T.text,O=T.align,j=M(T,B);V()(Object(F.jsxs)("div",{style:Object.assign({},r(O),{padding:"1px 0",wordBreak:"break-all"}),children:[w&&Object(F.jsx)(Z.a,{src:t[w],width:24,height:24,style:{flexShrink:0,marginRight:g.spacing10}}),Object(F.jsx)("p",{style:{margin:0,wordBreak:"break-all"},children:k})]}),Object.assign({},n(y),j))},x=function(T){return l(T)},C=function(T){return l(T,"success")},b=function(T){return l(T,"error")};return{toast:x,success:C,error:b}},c=`
    
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



Toast.parameters = { storySource: { source: "() => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n}" }, ...Toast.parameters };`,u={Toast:{startLoc:{col:21,line:17},endLoc:{col:1,line:30},startBody:{col:21,line:17},endBody:{col:1,line:30}}},c=`import { Meta } from "@storybook/react";
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
`,u={Toast:{startLoc:{col:21,line:9},endLoc:{col:1,line:22},startBody:{col:21,line:9},endBody:{col:1,line:22}}},o=m.default={parameters:{storySource:{source:`
    
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



Toast.parameters = { storySource: { source: "() => {\\n  const { toast, success, error } = useToast();\\n\\n  return (\\n    <>\\n      <div style={{ display: \\"flex\\", gap: \\"4px\\" }}>\\n        <button onClick={() => toast({ text: \\"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8\\" })}>Toast</button>\\n        <button onClick={() => success({ text: \\"\uC131\uACF5\\" })}>Success</button>\\n        <button onClick={() => error({ text: \\"\uC2E4\uD328\\" })}>Error</button>\\n      </div>\\n      <Toaster />\\n    </>\\n  );\\n}" }, ...Toast.parameters };`,locationsMap:{toast:{startLoc:{col:21,line:17},endLoc:{col:1,line:30},startBody:{col:21,line:17},endBody:{col:1,line:30}}}}},title:"@travelmakers-design-v2/hooks/useToast"},a=function(){var y=p(),g=y.toast,l=y.success,x=y.error;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[Object(F.jsx)("button",{onClick:function(){return g({text:"\uAE30\uBCF8 \uD14C\uC2A4\uD2B8"})},children:"Toast"}),Object(F.jsx)("button",{onClick:function(){return l({text:"\uC131\uACF5"})},children:"Success"}),Object(F.jsx)("button",{onClick:function(){return x({text:"\uC2E4\uD328"})},children:"Error"})]}),Object(F.jsx)($.Toaster,{})]})};a.parameters=Object.assign({storySource:{source:`() => {
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
}`}},a.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return D});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e.n(V),S=e("./node_modules/core-js/modules/es.symbol.js"),Y=e.n(S),Z=e("./node_modules/core-js/modules/es.symbol.description.js"),s=e.n(Z),F=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e.n(F),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e.n(M),h=e("./node_modules/core-js/modules/es.string.iterator.js"),t=e.n(h),n=e("./node_modules/core-js/modules/es.array.iterator.js"),r=e.n(n),p=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),c=e.n(p),u=e("./node_modules/core-js/modules/es.array.slice.js"),o=e.n(u),a=e("./node_modules/core-js/modules/es.function.name.js"),f=e.n(a),y=e("./node_modules/core-js/modules/es.array.from.js"),g=e.n(y),l=e("./node_modules/react/index.js"),x=e.n(l),C=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),b=e("./node_modules/react/jsx-runtime.js"),_=e.n(b);function T(v,E){return i(v)||j(v,E)||k(v,E)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(v,E){if(v){if(typeof v=="string")return O(v,E);var H=Object.prototype.toString.call(v).slice(8,-1);if(H==="Object"&&v.constructor&&(H=v.constructor.name),H==="Map"||H==="Set")return Array.from(v);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return O(v,E)}}function O(v,E){(E==null||E>v.length)&&(E=v.length);for(var H=0,U=new Array(E);H<E;H++)U[H]=v[H];return U}function j(v,E){var H=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(H!=null){var U,R,P,L,K=[],X=!0,le=!1;try{if(P=(H=H.call(v)).next,E===0){if(Object(H)!==H)return;X=!1}else for(;!(X=(U=P.call(H)).done)&&(K.push(U.value),K.length!==E);X=!0);}catch(ce){le=!0,R=ce}finally{try{if(!X&&H.return!=null&&(L=H.return(),Object(L)!==L))return}finally{if(le)throw R}}return K}}function i(v){if(Array.isArray(v))return v}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},d=`import React, { useEffect, useState } from "react";

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
`,I={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design-v2/hooks/useUpdateEffect"};var D=function(){var E=Object(l.useState)(""),H=T(E,2),U=H[0],R=H[1];return Object(l.useEffect)(function(){console.log("useEffect:",U)},[U]),Object(C.a)(function(){console.log("useUpdateEffect:",U)},[U]),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",onChange:function(L){return R(L.target.value)}})})};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`() => {
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
}`}},D.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return V});var W=e("./node_modules/react/index.js"),$=e.n(W),V=function(S,Y){var Z=Object(W.useRef)(!0);Object(W.useEffect)(function(){if(!Z.current)return S();Z.current=!1},Y)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(oe,m,e){"use strict";e.d(m,"c",function(){return Ae}),e.d(m,"d",function(){return Fe}),e.d(m,"b",function(){return ae}),e.d(m,"a",function(){return se});var W=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.object.assign.js"),N={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},S={transparent:"transparent",black:"#000000",white:"#FFFFFF",neutral00:"#191919",neutral10:"#303030",neutral20:"#474747",neutral30:"#5E5E5E",neutral40:"#757575",neutral50:"#8C8C8C",neutral60:"#A3A3A3",neutral70:"#BABABA",neutral80:"#D1D1D1",neutral90:"#E8E8E8",neutral95:"#F3F3F3",neutral99:"#FDFDFD",primary00:"#30373F",primary10:"#454B52",primary20:"#595F65",primary30:"#6E7379",primary40:"#83878C",primary50:"#979B9F",primary60:"#ACAFB2",primary70:"#C1C3C5",primary80:"#D6D7D9",primary90:"#EAEBEC",primary95:"#F5F5F5",primary99:"#FDFDFD",secondary00:"#03936E",secondary10:"#1C9E7C",secondary20:"#35A98B",secondary30:"#4FB399",secondary40:"#68BEA8",secondary50:"#81C9B7",secondary60:"#9AD4C5",secondary70:"#B3DFD3",secondary80:"#CDE9E2",secondary90:"#E6F4F1",secondary95:"#FCFEFE",secondary99:"#D6D7D9",tertiary00:"#367CE1",tertiary10:"#454B52",tertiary20:"#595F65",tertiary30:"#6E7378",tertiary40:"#979B9F",tertiary50:"#ACAFB2",tertiary60:"#C1C3C5",tertiary70:"#D6D7D9",tertiary80:"#D7E5F9",tertiary90:"#EBF2FC",tertiary95:"#F5F8FD",tertiary99:"#FDFEFF",error00:"#DA5542",error10:"#DE6655",error20:"#E17768",error30:"#E5887B",error40:"#E9998E",error50:"#EDAAA0",error60:"#F0BBB3",error70:"#F4CCC6",error80:"#F8DDD9",error90:"#FBEEEC",error95:"#FDF6F6",error99:"#FFFDFD",primary:"#30373F",primaryInteract:"#6E7379",onPrimary:"#FFFFFF",primaryContainer:"#E8E8E8",primaryContainerInteract:"#F5F5F5",onPrimaryContainer:"#191919",secondary:"#03936E",secondaryInteract:"#4FB399",onSecondary:"#FFFFFF",secondaryContainer:"#E6F4F1",secondaryContainerInteract:"#F2FAF8",onSecondaryContainer:"#191919",tertiary:"#367CE1",tertiaryInteract:"#72A3EA",onTertiary:"#FFFFFF",tertiaryContainer:"#EBF2FC",tertiaryContainerInteract:"#F5F8FD",onTertiaryContainer:"#191919",error:"#DA5542",errorInteract:"#E5887B",onError:"#FFFFFF",errorContainer:"#FBEEEC",errorContainerInteract:"#FDF6F6",onErrorContainer:"#191919",background:"#FFFFFF",backgroundInteract:"#F3F3F3",onBackground:"#30373F",surface:"#F5F5F5",surfaceInteract:"#FDFDFD",onSurface:"#30373F",surfaceVariant:"#979B9F",surfaceVariantInteract:"#F3F3F3",outline:"#E8E8E8",primary1:"#30373F",primary2:"#6E7379",primary3:"#979B9F",primary4:"#D6D7D9",secondary1:"#03936E",secondary2:"#4FB399",secondary3:"#81C9B7",secondary4:"#CDE9E2",purple1:"#7843BD",black10:"#000000E5",black20:"#000000CC",black30:"#00000099",black40:"#00000066",black50:"#00000033"},Y={primary:[N.primary,N.primaryInteract,N.primaryContainer,N.white,N.white,N.white],secondary:[N.transparent,N.surface,N.transparent,N.primaryContainer,N.primary,N.primary],tertiary:[N.secondary,N.secondaryInteract,N.secondaryContainer,N.primary4,N.white,N.white],error:[N.error,N.errorInteract,N.errorContainer,N.primary4,N.white,N.white],tonal:[N.surface,N.surface,N.surface,N.primary4,N.primary,N.primary],text:[N.transparent,N.transparent,N.transparent,N.primary4,N.primaryInteract,N.primary]},Z={none:"none",elevation1:"0px 4px 8px rgba(0, 0, 0, 0.15)",elevation2:"0px 4px 12px rgba(0, 0, 0, 0.15)",elevation3:"0px 4px 16px rgba(0, 0, 0, 0.2)",elevation4:"0px 4px 20px rgba(0, 0, 0, 0.2)",elevation5:"0px 4px 24px rgba(0, 0, 0, 0.2)"},s={display1:"40px",display2:"32px",display3:"28px",display4:"24px",display5:"20px",display6:"18px",subhead1:"16px",subhead2:"14px",body1:"16px",body2:"14px",body3:"12px",caption:"10px"},F={display1:"56px",display2:"40px",display3:"36px",display4:"32px",display5:"28px",display6:"26px",subhead1:"24px",subhead2:"22px",body1:"24px",body2:"22px",body3:"20px",caption:"16px"},B={radius10:"4px",radius20:"8px",radius100:"100px"},M={spacing5:"4px",spacing10:"8px",spacing20:"12px",spacing30:"16px",spacing40:"20px",spacing50:"24px",spacing60:"28px",spacing70:"32px",spacing80:"36px",spacing90:"40px",spacing100:"48px",spacing110:"52px",spacing120:"56px",spacing130:"60px"},A={small:768,medium:1024,large:1408},h={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},t={mobile:"@media (max-width: "+h.mobile+"px)",tablet:"@media (max-width: "+h.tablet+"px)",desktop:"@media (max-width: "+h.desktop+"px)",largeDesktop:"@media (max-width: "+h.maxSize+"px)"},n=function(J){for(var q="",te=1;te<J.length-1;te+=1)q+=J[te]+" "+te/(J.length-1)*100+"%, ";return J[0]+" 0%, "+q+J[J.length-1]+" 100%"},r=function(J){for(var q=arguments.length,te=new Array(q>1?q-1:0),ue=1;ue<q;ue++)te[ue-1]=arguments[ue];return"linear-gradient("+J+"deg, "+n(te)+")"},p=function(){for(var J=arguments.length,q=new Array(J),te=0;te<J;te++)q[te]=arguments[te];return"radial-gradient(circle, "+n(q)+")"},c=function(J){return typeof J.size=="number"?J.size:J.sizes[J.size]||J.size||J.sizes.medium},u=function(J){return function(q){return"@media (min-width: "+(c({size:q,sizes:J.breakpoints})+1)+"px)"}},o=function(J){return function(q){return"@media (max-width: "+c({size:q,sizes:J.breakpoints})+"px)"}},a=e("./node_modules/core-js/modules/es.string.replace.js"),f=e("./node_modules/core-js/modules/es.regexp.exec.js"),y=e("./node_modules/core-js/modules/es.number.is-nan.js"),g=e("./node_modules/core-js/modules/es.number.constructor.js"),l=e("./node_modules/core-js/modules/es.parse-int.js"),x=e("./node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/core-js/modules/es.string.split.js"),b=e("./node_modules/core-js/modules/es.string.starts-with.js"),_=e("./node_modules/core-js/modules/es.array.is-array.js"),T=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),k=e("./node_modules/core-js/modules/es.object.to-string.js"),O=e("./node_modules/core-js/modules/es.symbol.iterator.js"),j=e("./node_modules/core-js/modules/es.string.iterator.js"),i=e("./node_modules/core-js/modules/es.array.iterator.js"),d=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),I=e("./node_modules/core-js/modules/es.array.slice.js"),D=e("./node_modules/core-js/modules/es.function.name.js"),v=e("./node_modules/core-js/modules/es.array.from.js");function E(Q,J){return L(Q)||P(Q,J)||U(Q,J)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(Q,J){if(Q){if(typeof Q=="string")return R(Q,J);var q=Object.prototype.toString.call(Q).slice(8,-1);if(q==="Object"&&Q.constructor&&(q=Q.constructor.name),q==="Map"||q==="Set")return Array.from(Q);if(q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q))return R(Q,J)}}function R(Q,J){(J==null||J>Q.length)&&(J=Q.length);for(var q=0,te=new Array(J);q<J;q++)te[q]=Q[q];return te}function P(Q,J){var q=Q==null?null:typeof Symbol!="undefined"&&Q[Symbol.iterator]||Q["@@iterator"];if(q!=null){var te,ue,ge,be,Te=[],Oe=!0,Ke=!1;try{if(ge=(q=q.call(Q)).next,J===0){if(Object(q)!==q)return;Oe=!1}else for(;!(Oe=(te=ge.call(q)).done)&&(Te.push(te.value),Te.length!==J);Oe=!0);}catch(Ye){Ke=!0,ue=Ye}finally{try{if(!Oe&&q.return!=null&&(be=q.return(),Object(be)!==be))return}finally{if(Ke)throw ue}}return Te}}function L(Q){if(Array.isArray(Q))return Q}var K=function(J){var q=J.replace("#","");return typeof q=="string"&&q.length===6&&!Number.isNaN(Number("0x"+q))},X=function(J){var q=J.replace("#",""),te=parseInt(q,16),ue=te>>16&255,ge=te>>8&255,be=te&255;return{r:ue,g:ge,b:be,a:1}},le=function(J){var q=J.replace(/[^0-9,.]/g,"").split(",").map(Number),te=E(q,4),ue=te[0],ge=te[1],be=te[2],Te=te[3];return{r:ue,g:ge,b:be,a:Te||1}},ce=function(J){return K(J)?X(J):J.startsWith("rgb")?le(J):{r:0,g:0,b:0,a:1}},ee=function(J,q){if(typeof J!="string"||q>1||q<0)return"rgba(0, 0, 0, 1)";var te=ce(J),ue=te.r,ge=te.g,be=te.b;return"rgba("+ue+", "+ge+", "+be+", "+q+")"},ie=function(J,q){var te=ce(J),ue=te.r,ge=te.g,be=te.b,Te=te.a,Oe=1-q,Ke=function(Ge){return Math.round(Ge*Oe)};return"rgba("+Ke(ue)+", "+Ke(ge)+", "+Ke(be)+", "+Te+")"},re=function(J,q){var te=ce(J),ue=te.r,ge=te.g,be=te.b,Te=te.a,Oe=function(Ye){return Math.round(Ye+(255-Ye)*q)};return"rgba("+Oe(ue)+", "+Oe(ge)+", "+Oe(be)+", "+Te+")"},de=function(J){return J*8},pe={linearGradient:r,radialGradient:p,smallerThan:o,largerThan:u,rgba:ee,size:c,darken:ie,lighten:re,spacing:de},fe=function(J){return Object.assign({},J,{fn:{largerThan:pe.largerThan(J),smallerThan:pe.smallerThan(J),radialGradient:pe.radialGradient,linearGradient:pe.linearGradient,rgba:pe.rgba,size:pe.size,lighten:pe.lighten,darken:pe.darken,spacing:pe.spacing}})},je={display1:{fontSize:s.display1,lineHeight:F.display1},display2:{fontSize:s.display2,lineHeight:F.display2},display3:{fontSize:s.display3,lineHeight:F.display3},display4:{fontSize:s.display4,lineHeight:F.display4},display5:{fontSize:s.display5,lineHeight:F.display5},display6:{fontSize:s.display6,lineHeight:F.display6},subhead1:{fontSize:s.subhead1,lineHeight:F.subhead1},subhead2:{fontSize:s.subhead2,lineHeight:F.subhead2},body1:{fontSize:s.body1,lineHeight:F.body1},body2:{fontSize:s.body2,lineHeight:F.body2},body3:{fontSize:s.body3,lineHeight:F.body3},caption:{fontSize:s.caption,lineHeight:F.caption}},he=Object.keys(Y),ve=Object.keys(N),_e=["small","medium","large"],Be=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],De=function(J){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:J.fontFamily||"sans-serif"}},ke={locale:"ko",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",colors:N,palettes:Y,shadows:Z,fontSizes:s,lineHeights:F,radius:B,typography:je,spacing:M,breakpoints:A,media:t},Pe=Object.assign({},ke,{colors:S,colorScheme:"dark"}),xe=fe(ke),we=fe(Pe),Re=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Le=e("./node_modules/react/jsx-runtime.js"),Ee=function(J){var q=J.styles,te=Ae();return Object(Le.jsx)(Re.a,{styles:Object(Re.b)(q(te))})};Ee.displayName="Global";var Se;function Ve(Q,J){return J||(J=Q.slice(0)),Q.raw=J,Q}var He=Object(Re.b)(Se||(Se=Ve([`
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
`]))),We=function(){return Object(Le.jsx)(Re.a,{styles:He})};We.displayName="NormalizeCSS";var Ne=e("./node_modules/core-js/modules/es.array.reduce.js");function Ue(Q,J){return J?Object.keys(Q).reduce(function(q,te){if(te==="typography"&&J.typography){var ue=J.typography?Object.keys(Q.typography).reduce(function(ge,be){return ge[be]=Object.assign({},Q.typography[be],J.typography[be]),ge},{}):Q.typography;return Object.assign({},q,{typography:Object.assign({},Q.typography,J.typography,ue)})}return q[te]=typeof J[te]=="object"?Object.assign({},Q[te],J[te]):J[te]||Q[te],q},{}):Q}var Me=Object(W.createContext)({theme:xe,styles:{},emotionOptions:{key:"co",prepend:!0}});function Ae(){var Q;return((Q=Object(W.useContext)(Me))===null||Q===void 0?void 0:Q.theme)||xe}function Fe(){var Q;return((Q=Object(W.useContext)(Me))===null||Q===void 0?void 0:Q.styles)||{}}function ae(){var Q;return((Q=Object(W.useContext)(Me))===null||Q===void 0?void 0:Q.emotionOptions)||{key:"co",prepend:!0}}var ne=function(){return Object(Le.jsx)(Ee,{styles:function(q){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:q.fontFamily,backgroundColor:q.colorScheme==="dark"?q.colors.black:q.colors.white,color:q.colorScheme==="dark"?q.colors.white:q.colors.black,lineHeight:q.lineHeight,fontSizes:q.fontSizes.body3}}}})};ne.displayName="GlobalStyles";var se=function(J){var q=J.theme,te=J.styles,ue=te===void 0?{}:te,ge=J.emotionOptions,be=J.withNormalizeCSS,Te=be===void 0?!1:be,Oe=J.withGlobalStyles,Ke=Oe===void 0?!1:Oe,Ye=J.children;return Object(Le.jsxs)(Me.Provider,{value:{theme:Ue(q.colorScheme==="dark"?we:xe,q),styles:ue,emotionOptions:ge},children:[Te&&Object(Le.jsx)(We,{}),Ke&&Object(Le.jsx)(ne,{}),Ye]})};se.displayName="TmProvider",se.displayName="@travelmakers-design-v2/styles/TmProvider"},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return C});var W=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),N=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),S=e("./node_modules/core-js/modules/es.array.for-each.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/core-js/modules/es.array.is-array.js"),s=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e("./node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/core-js/modules/es.array.iterator.js"),t=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),n=e("./node_modules/core-js/modules/es.array.slice.js"),r=e("./node_modules/core-js/modules/es.array.from.js");function p(b,_){return f(b)||a(b,_)||u(b,_)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(b,_){if(b){if(typeof b=="string")return o(b,_);var T=Object.prototype.toString.call(b).slice(8,-1);if(T==="Object"&&b.constructor&&(T=b.constructor.name),T==="Map"||T==="Set")return Array.from(b);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return o(b,_)}}function o(b,_){(_==null||_>b.length)&&(_=b.length);for(var T=0,w=new Array(_);T<_;T++)w[T]=b[T];return w}function a(b,_){var T=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(T!=null){var w,k,O,j,i=[],d=!0,I=!1;try{if(O=(T=T.call(b)).next,_===0){if(Object(T)!==T)return;d=!1}else for(;!(d=(w=O.call(T)).done)&&(i.push(w.value),i.length!==_);d=!0);}catch(D){I=!0,k=D}finally{try{if(!d&&T.return!=null&&(j=T.return(),Object(j)!==j))return}finally{if(I)throw k}}return i}}function f(b){if(Array.isArray(b))return b}function y(b){var _={};return Object.keys(b).forEach(function(T){var w=p(b[T],2),k=w[0],O=w[1];_[k]=O}),_}var g=e("./node_modules/core-js/modules/es.array.reduce.js");function l(b,_,T){return Object.keys(_).reduce(function(w,k){return w[k]=b(_[k],T?"tm-"+T+"-"+k:null),w},{})}var x=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function C(b){var _=typeof b=="function"?b:function(){return b};function T(w,k){var O=Object(N.c)(),j=Object(N.d)()[k==null?void 0:k.name],i=Object(x.a)(),d=i.css,I=i.cx,D=i.cssRn,v=0;function E(K){return v+=1,"tm-ref_"+(K||"")+"_"+v}var H=_(O,w,E),U=typeof(k==null?void 0:k.overrideStyles)=="function"?k==null?void 0:k.overrideStyles(O):(k==null?void 0:k.overrideStyles)||{},R=typeof j=="function"?j(O):j||{},P=typeof(k==null?void 0:k.tm)=="function"?k.tm(O):k==null?void 0:k.tm,L=y(Object.keys(H).map(function(K){var X=I(d(H[K]),d(R[K]),d(U[K]),d(P));return[K,X]}));return{classes:l(I,L,k==null?void 0:k.name),cx:I,theme:O}}return T}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return P});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),S=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),s=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/clsx/dist/clsx.m.js"),t=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),n=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),r=e("./node_modules/core-js/modules/es.array.index-of.js"),p=e("./node_modules/core-js/modules/es.array.map.js"),c=e("./node_modules/react/index.js");function u(L){return y(L)||f(L)||a(L)||o()}function o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(L,K){if(L){if(typeof L=="string")return g(L,K);var X=Object.prototype.toString.call(L).slice(8,-1);if(X==="Object"&&L.constructor&&(X=L.constructor.name),X==="Map"||X==="Set")return Array.from(L);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return g(L,K)}}function f(L){if(typeof Symbol!="undefined"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}function y(L){if(Array.isArray(L))return g(L)}function g(L,K){(K==null||K>L.length)&&(K=L.length);for(var X=0,le=new Array(K);X<K;X++)le[X]=L[X];return le}function l(L,K){var X=Object(c.useRef)();return(!X.current||K.length!==X.current.prevDeps.length||X.current.prevDeps.map(function(le,ce){return le===K[ce]}).indexOf(!1)>=0)&&(X.current={v:L(),prevDeps:u(K)}),X.current.v}var x=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),C=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),b=e("./node_modules/react/jsx-runtime.js"),_=function(){var L;function K(X){return L===void 0&&(L=Object(x.a)(X||{key:"co",prepend:!0})),L}return{getCache:K}}(),T=_.getCache,w=Object(c.createContext)(void 0);function k(){var L=Object(C.b)();return Object(c.useContext)(w)||T(L)}function O(L){var K=L.children,X=L.value;return Object(b.jsx)(w.Provider,{value:X,children:K})}O.displayName="CacheProvider";function j(L,K){return v(L)||D(L,K)||d(L,K)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(L,K){if(L){if(typeof L=="string")return I(L,K);var X=Object.prototype.toString.call(L).slice(8,-1);if(X==="Object"&&L.constructor&&(X=L.constructor.name),X==="Map"||X==="Set")return Array.from(L);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return I(L,K)}}function I(L,K){(K==null||K>L.length)&&(K=L.length);for(var X=0,le=new Array(K);X<K;X++)le[X]=L[X];return le}function D(L,K){var X=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(X!=null){var le,ce,ee,ie,re=[],de=!0,pe=!1;try{if(ee=(X=X.call(L)).next,K===0){if(Object(X)!==X)return;de=!1}else for(;!(de=(le=ee.call(X)).done)&&(re.push(le.value),re.length!==K);de=!0);}catch(fe){pe=!0,ce=fe}finally{try{if(!de&&X.return!=null&&(ie=X.return(),Object(ie)!==ie))return}finally{if(pe)throw ce}}return re}}function v(L){if(Array.isArray(L))return L}var E="ref";function H(L){var K;if(L.length!==1)return{args:L,ref:K};var X=j(L,1),le=X[0];if(!(le instanceof Object))return{args:L,ref:K};if(!(E in le))return{args:L,ref:K};K=le[E];var ce=Object.assign({},le);return delete ce[E],{args:[ce],ref:K}}var U=function(){function L(X,le,ce){var ee=[],ie=Object(n.a)(X,ee,ce);return ee.length<2?ce:ie+le(ee)}function K(X){var le=X.cache,ce=function(){for(var de=arguments.length,pe=new Array(de),fe=0;fe<de;fe++)pe[fe]=arguments[fe];var je=H(pe),he=je.ref,ve=je.args,_e=Object(t.a)(ve,le.registered);return Object(n.b)(le,_e,!1),le.key+"-"+_e.name+(he===void 0?"":" "+he)},ee=function(){for(var de=arguments.length,pe=new Array(de),fe=0;fe<de;fe++)pe[fe]=arguments[fe];var je=H(pe),he=je.ref,ve=je.args,_e=Object(t.a)(ve,le.registered);return Object(n.b)(le,_e,!1),""+le.key+_e.name+(he===void 0?"":" "+he)},ie=function(){for(var de=arguments.length,pe=new Array(de),fe=0;fe<de;fe++)pe[fe]=arguments[fe];return L(le.registered,ce,Object(h.a)(pe))};return{css:ce,cx:ie,cssRn:ee}}return{cssFactory:K}}(),R=U.cssFactory;function P(){var L=k();return l(function(){return R({cache:L})},[L])}},"./packages/travelmakers-design-utils/src/getDate/getDate.tsx":function(oe,m,e){"use strict";e.d(m,"d",function(){return B}),e.d(m,"f",function(){return A}),e.d(m,"a",function(){return h}),e.d(m,"e",function(){return t}),e.d(m,"b",function(){return n}),e.d(m,"c",function(){return r});var W=e("./node_modules/core-js/modules/es.date.to-string.js"),$=e.n(W),V=e("./node_modules/dayjs/dayjs.min.js"),N=e.n(V),S=e("./node_modules/dayjs/plugin/timezone.js"),Y=e.n(S),Z=e("./node_modules/dayjs/plugin/utc.js"),s=e.n(Z);N.a.extend(s.a),N.a.extend(Y.a);function F(p){return p<10?"0"+p:p}function B(){return N.a}function M(p){var c=p?new Date(p):new Date,u=c.getTime()+c.getTimezoneOffset()*60*1e3,o=9*60*60*1e3,a=new Date(u+o);return a}function A(p){if(!p){var c=N()().tz("Asia/Seoul");return c}var u=N()(p+"+0900").tz("Asia/Seoul");if(!u.isValid()){var o=N()(""+p).tz("Asia/Seoul");return o}return u}function h(p,c){var u=A(p),o=c!=null?c:"/";return u.year()+o+(u.month()+1)+o+u.date()}function t(p,c){var u=A(p),o=c!=null?c:"/";return u.year()+o+(u.month()+1)+o+u.date()+" "+u.hour()+":"+F(u.minute())}function n(p,c){var u=A(p),o=c!=null?c:":";return F(u.hour())+o+F(u.minute())}function r(p){var c=A(p),u=c.day(),o=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];return o[u]+"\uC694\uC77C"}},"./packages/travelmakers-design-utils/src/getDate/stories/getDate.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return B});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(W),V=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),N=e("./node_modules/react/index.js"),S=e.n(N),Y=e("./node_modules/react/jsx-runtime.js"),Z=e.n(Y),s=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}},s=`import { getDate, getDateTime, getDay, getFullDate } from "../getDate";

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
`,F={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:47},startBody:{col:23,line:35},endBody:{col:1,line:47}}};m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      getDate: {getDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDateTime: {getDateTime(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getFullDate: {getFullDate(\\"2022-12-22T01:37:27.391Z\\")}\\n      <br />\\n      getDay: {getDay(\\"2022-12-22T01:37:27.391Z\\")}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:55},startBody:{col:23,line:43},endBody:{col:1,line:55}}}}},title:"@travelmakers-design-v2/utils/getDate",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}};var B=function(A){return Object(Y.jsxs)("div",{children:["getDate: ",Object(V.a)("2022-12-22T01:37:27.391Z"),Object(Y.jsx)("br",{}),"getDateTime: ",Object(V.b)("2022-12-22T01:37:27.391Z"),Object(Y.jsx)("br",{}),"getFullDate: ",Object(V.e)("2022-12-22T01:37:27.391Z"),Object(Y.jsx)("br",{}),"getDay: ",Object(V.c)("2022-12-22T01:37:27.391Z")]})};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},B.parameters)},"./packages/travelmakers-design-utils/src/getReservationsCallable/stories/getReservationsCallable.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return F});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js");function V(B){switch(B){case"checkout_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_purchase_before":case"reservation_purchase_done":case"checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"day_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"extend_purchase_before":case"extend_purchase_done":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"extend_checkin_before":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!0,callable:!0},extensionGuideInfo:{visible:!0,callable:!0},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"reservation_change_process":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"checkout_before_n":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};case"reservation_cancel":return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!1},tenantHopeInfo:{visible:!1,callable:!1},tenantInfo:{visible:!0,callable:!1},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!0,callable:!0},reservationChangeButton:{visible:!1,callable:!1}};case"tour_confirm_before":case"tour_confirm":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!0,callable:!0}};case"tour_cancel":case"tour_done":return{reservationInfo:{type:"tour",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!0,callable:!0},tenantInfo:{visible:!1,callable:!0},paymentInfo:{visible:!1,callable:!0},refundBox:{visible:!1,callable:!1},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}};default:return{reservationInfo:{type:"payment",visible:!0,callable:!0},extensionInfo:{visible:!1,callable:!1},extensionGuideInfo:{visible:!1,callable:!1},customerInfo:{visible:!0,callable:!0},tenantHopeInfo:{visible:!1,callable:!0},tenantInfo:{visible:!0,callable:!0},paymentInfo:{visible:!0,callable:!0},refundBox:{visible:!0,callable:!0},paymentRefundInfo:{visible:!1,callable:!1},reservationChangeButton:{visible:!1,callable:!1}}}}var N=V,S=e("./node_modules/react/jsx-runtime.js"),Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}},Y=`import React from "react";
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
`,Z={Default:{startLoc:{col:23,line:11},endLoc:{col:1,line:13},startBody:{col:23,line:11},endBody:{col:1,line:13}}},s=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <div>{JSON.stringify(getReservationsCallable(\\"tour_cancel\\"))}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:1,line:21},startBody:{col:23,line:19},endBody:{col:1,line:21}}}}},title:"@travelmakers-design-v2/utils/getReservationsCallable",argTypes:{state:{}}},F=function(M){return Object(S.jsx)("div",{children:JSON.stringify(V("tour_cancel"))})};F.displayName="Default",F.parameters=Object.assign({storySource:{source:`(props) => {
  return <div>{JSON.stringify(getReservationsCallable("tour_cancel"))}</div>;
}`}},F.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineFunc/stories/getTimeLineFunc.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return M});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),N=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function S(A){switch(A){case"default":case"tour_cancel":case"reservation_cancel":return{enum:A,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(){return"\uC5EC\uD589\uAC19\uC740 \uC77C\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC73C\uC138\uC694?"},buttonText:function(){return"\uC804\uCCB4 \uD638\uD154 \uBCF4\uB7EC\uAC00\uAE30"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"tour_confirm_before":return{enum:A,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return t},buttonText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804\uC774\uC608\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"tour_confirm":return{enum:A,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return Object(N.a)(Object(V.f)(t))+" \uD22C\uC5B4\uAC00 \uD655\uC815\uB410\uC5B4\uC694"},buttonText:function(){return"\uC57D\uC18D\uC2DC\uAC04\uC5D0 \uAF2D \uBC29\uBB38\uD574\uC8FC\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"tour_done":return{enum:A,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(){return"\uD22C\uC5B4\uB294 \uC5B4\uB5A0\uC168\uB098\uC694?"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uACBD\uD5D8\uD574\uBCF4\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"reservation_purchase_before":return{enum:A,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(){return"\uC544\uC9C1 \uC785\uAE08\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"reservation_purchase_done":return{enum:A,firstLineText:function(t){return"\uC548\uB155\uD558\uC138\uC694, "+t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(t){return Object(N.a)(Object(V.f)(t))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815\uC774\uC608\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkin_before":return{enum:A,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return Object(N.b)(Object(V.f)(t))+" \uCCB4\uD06C\uC778 \uC608\uC815\uC774\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{enum:A,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return"\uCCB4\uD06C\uC544\uC6C3\uC740 "+Object(N.b)(Object(V.f)(t))+"\uC608\uC694"},buttonText:function(){return"\uD3B8\uC548\uD55C \uD638\uD154\uC5D0\uC0B6 \uB418\uC138\uC694"},link:function(t){return{url:t,arrow:!!t}},color:"default"};case"checkout_before":return{enum:A,firstLineText:function(t){return""+t},secondLineText:function(t){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+t+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC744 \uC5F0\uC7A5\uD558\uC2DC\uACA0\uC5B4\uC694?"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkout_before_n":return{enum:A,firstLineText:function(t){return""+t},secondLineText:function(t){return"\uD1F4\uC2E4\uAE4C\uC9C0 "+t+"\uC77C \uB0A8\uC558\uC5B4\uC694"},buttonText:function(t){return Object(N.b)(Object(V.f)(t))+" \uCCB4\uD06C\uC544\uC6C3 \uC785\uB2C8\uB2E4"},link:function(t){return{url:t,arrow:!!t}},color:"alert"};case"checkout_done":return{enum:A,firstLineText:function(t){return t+"\uB2D8"},secondLineText:function(t){return""+t},buttonText:function(){return"\uD638\uD154\uC5D0\uC0B6\uC740 \uC5B4\uB5A0\uC168\uB098\uC694?"},link:function(t){return{url:t,arrow:!!t}},color:"alert"}}}function Y(A,h){switch(A){case"default":case"tour_cancel":case"reservation_cancel":return{first:h.first.userName,second:null,buttonText:null};case"tour_confirm_before":return{first:h.first.userName,second:h.second.hotelName,buttonText:null};case"tour_confirm":return{first:h.first.userName,second:h.second.startDate,buttonText:null};case"tour_done":return{first:h.first.userName,second:null,buttonText:null};case"reservation_purchase_before":return{first:h.first.userName,second:h.second.hotelName,buttonText:null};case"reservation_purchase_done":return{first:h.first.userName,second:h.second.hotelName,buttonText:h.buttonText.expectedDate};case"checkin_before":return{first:h.first.userName,second:h.second.startDate,buttonText:null};case"day_n":case"extend_purchase_before":case"extend_purchase_done":case"extend_checkin_before":case"reservation_change_process":return{first:h.first.userName,second:h.second.endDate,buttonText:null};case"checkout_before":return{first:h.first.hotelName,second:""+h.second.dDay,buttonText:null};case"checkout_before_n":return{first:h.first.hotelName,second:""+h.second.dDay,buttonText:h.buttonText.endDate};case"checkout_done":return{first:h.first.userName,second:h.second.hotelName,buttonText:null};default:return{first:null,second:null,buttonText:null}}}var Z=e("./node_modules/react/jsx-runtime.js"),s=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}},s=`import React from "react";

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
`,F={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:58},startBody:{col:23,line:35},endBody:{col:1,line:58}}},B=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      firstLineText: {getTimeLineFunc(\\"default\\").firstLineText(\\"\uD64D\uAE38\uB3D9\\")}\\n      <br />\\n      secondLineText(default): {getTimeLineFunc(\\"default\\").secondLineText()}\\n      <br />\\n      secondLineText(tour_confirm_before):\\n      {getTimeLineFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0\\"\\n      )}\\n      <br />\\n      secondLineText(tour_confirm):\\n      {getTimeLineFunc(\\"tour_confirm\\").secondLineText(\\n        \\"2022-09-28T01:26:38.000000Z\\"\\n      )}\\n      <br />\\n      buttonText: {getTimeLineFunc(\\"default\\").buttonText()}\\n      <br />\\n      ---- <br />\\n      getTimeLineFunc(\`state\`)\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:66},startBody:{col:23,line:43},endBody:{col:1,line:66}}}}},title:"@travelmakers-design-v2/utils/getTimeLineFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},M=function(h){return Object(Z.jsxs)("div",{children:["firstLineText: ",S("default").firstLineText("\uD64D\uAE38\uB3D9"),Object(Z.jsx)("br",{}),"secondLineText(default): ",S("default").secondLineText(),Object(Z.jsx)("br",{}),"secondLineText(tour_confirm_before):",S("reservation_purchase_before").secondLineText("\uC11C\uC6B8\uB4DC\uB798\uACE4\uC2DC\uD2F0"),Object(Z.jsx)("br",{}),"secondLineText(tour_confirm):",S("tour_confirm").secondLineText("2022-09-28T01:26:38.000000Z"),Object(Z.jsx)("br",{}),"buttonText: ",S("default").buttonText(),Object(Z.jsx)("br",{}),"---- ",Object(Z.jsx)("br",{}),"getTimeLineFunc(`state`)"]})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},M.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateDetailFunc/stories/getTimeLineStateDetailFunc.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return A});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx"),N=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),S=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts");function Y(h){switch(h){case"tour_confirm_before":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_confirm":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_done":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_before":return{enum:h,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(n){if(n){var r=Object(N.a)(n);return r&&r==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":r+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_before":return{enum:h,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(n){if(n){var r=Object(N.a)(n);return r&&r==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":r+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_done":return{enum:h,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkin_before":return{enum:h,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+n},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"day_n":return{enum:h,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_done":return{enum:h,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_checkin_before":return{enum:h,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_change_process":return{enum:h,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(n){return Object(S.a)(Object(V.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before":return{enum:h,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before_n":return{enum:h,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_done":return{enum:h,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(n){return n},thirdLineText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(n){return{url:n,arrow:!!n}}};case"tour_cancel":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};case"reservation_cancel":return{enum:h,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},secondLineText:function(n){return Object(S.a)(Object(V.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};default:return{enum:h,firstLineText:function(){return""},secondLineText:function(){return""},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},thirdLineText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}}}}function Z(h,t){switch(h){case"checkout_before":case"checkout_before_n":return{first:""+t.first.dDay,second:t.second.endDate,third:t.third.hotelName};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:t.second.expectedDate,third:t.third.hotelName};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+t.first.dDay,second:t.second.startDate,third:t.third.hotelName};case"day_n":return{first:null,second:t.second.endDate,third:t.third.hotelName};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:t.second.vBankDate,third:t.third.hotelName};case"checkout_done":return{first:null,second:null,third:t.third.hotelName};case"tour_cancel":case"reservation_cancel":return{first:null,second:t.second.cancelDate,third:t.third.hotelName};default:return{first:null,second:null,third:t.third.hotelName}}}var s=e("./node_modules/react/jsx-runtime.js"),F=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}},F=`import React from "react";
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
`,B={Default:{startLoc:{col:23,line:34},endLoc:{col:1,line:42},startBody:{col:23,line:34},endBody:{col:1,line:42}}},M=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateDetailFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2022-12-24T02:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:42},endLoc:{col:1,line:50},startBody:{col:23,line:42},endBody:{col:1,line:50}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateDetailFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},A=function(t){return Object(s.jsx)("div",{children:Y("reservation_purchase_before").secondLineText("2022-12-24T02:24:01.616Z")})};A.displayName="Default",A.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateDetailFunc("reservation_purchase_before").secondLineText(
        "2022-12-24T02:24:01.616Z"
      )}
    </div>
  );
}`}},A.parameters)},"./packages/travelmakers-design-utils/src/getTimeLineStateFunc/stories/getTimeLineStateFunc.stories.tsx":function(oe,m,e){"use strict";e.r(m),e.d(m,"Default",function(){return A});var W=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts"),N=e("./packages/travelmakers-design-utils/src/utils/getCountDown.ts"),S=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function Y(h){switch(h){case"tour_confirm_before":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_confirm":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uD655\uC815"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"tour_done":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uC644\uB8CC"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uBC29\uBB38"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_before":return{enum:h,firstLineText:function(){return"\uACB0\uC81C \uC9C4\uD589 \uC911"},secondLineText:function(n){if(n){var r=Object(N.a)(n);return r&&r==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":r+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_before":return{enum:h,firstLineText:function(){return"\uC5F0\uC7A5 \uACB0\uC81C \uC804"},secondLineText:function(n){if(n){var r=Object(N.a)(n);return r&&r==="0\uC2DC\uAC04 0\uBD84"?"\uC785\uAE08 \uAE30\uD55C \uB9CC\uB8CC":r+" \uB0B4 \uC785\uAE08 \uD544\uC694"}return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_purchase_done":return{enum:h,firstLineText:function(){return"\uC608\uC545 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkin_before":return{enum:h,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC778 D-Day":"\uCCB4\uD06C\uC778 D-"+n},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"day_n":return{enum:h,firstLineText:function(){return"\uD638\uD154 \uC774\uC6A9 \uC911"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_purchase_done":return{enum:h,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815 \uC804"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n))+" \uC774\uB0B4 \uD655\uC815 \uC608\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"extend_checkin_before":return{enum:h,firstLineText:function(){return"\uC5F0\uC7A5 \uD655\uC815"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uCCB4\uD06C\uC778"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_change_process":return{enum:h,firstLineText:function(){return"\uC608\uC57D \uBCC0\uACBD \uC911"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n))+" \uC774\uB0B4 \uD655\uC815"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before":return{enum:h,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"checkout_before_n":return{enum:h,firstLineText:function(n){return n&&n==="0"?"\uCCB4\uD06C\uC544\uC6C3 D-Day":"\uCCB4\uD06C\uC544\uC6C3 D-"+n},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uCCB4\uD06C\uC544\uC6C3"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},link:function(n){return{url:n,arrow:!!n}}};case"checkout_done":return{enum:h,firstLineText:function(){return"\uCCB4\uD06C\uC544\uC6C3 \uC644\uB8CC"},secondLineText:function(){return"\uC7AC\uAD6C\uB9E4\uD558\uAE30"},secondLink:function(n){return n},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!1},messageUnderline:function(){return!0},link:function(n){return{url:n,arrow:!!n}}};case"tour_cancel":return{enum:h,firstLineText:function(){return"\uD22C\uC5B4 \uCDE8\uC18C"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};case"reservation_cancel":return{enum:h,firstLineText:function(){return"\uCDE8\uC18C \uC644\uB8CC"},secondLineText:function(n){return Object(V.a)(Object(S.f)(n),!0)+" \uBC29\uBB38 \uCDE8\uC18C"},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!0},messageDisable:function(){return!0},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}};default:return{enum:h,firstLineText:function(){return""},secondLineText:function(){return""},thirdLineText:function(n){return n},roomTypeText:function(n){return n},titleDisable:function(){return!1},messageDisable:function(){return!1},messageUnderline:function(){return!1},link:function(n){return{url:n,arrow:!!n}}}}}function Z(h,t){switch(h){case"checkout_before":case"checkout_before_n":return{first:""+t.first.dDay,second:t.second.endDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_confirm_before":case"reservation_purchase_done":case"extend_purchase_done":case"reservation_change_process":return{first:null,second:t.second.expectedDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_confirm":case"tour_done":case"checkin_before":case"extend_checkin_before":return{first:""+t.first.dDay,second:t.second.startDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"day_n":return{first:null,second:t.second.endDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"reservation_purchase_before":case"extend_purchase_before":return{first:null,second:t.second.vBankDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"checkout_done":return{first:null,second:null,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};case"tour_cancel":case"reservation_cancel":return{first:null,second:t.second.cancelDate,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType};default:return{first:null,second:null,third:t.third.hotelName,roomTypeText:t.roomTypeText.roomType}}}var s=e("./node_modules/react/jsx-runtime.js"),F=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}},F=`import React from "react";

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
`,B={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:43},startBody:{col:23,line:35},endBody:{col:1,line:43}}},M=m.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div>\\n      {getTimeLineStateFunc(\\"reservation_purchase_before\\").secondLineText(\\n        \\"2023-02-08T23:24:01.616Z\\"\\n      )}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:51},startBody:{col:23,line:43},endBody:{col:1,line:51}}}}},title:"@travelmakers-design-v2/utils/getTimeLineStateFunc",argTypes:{state:{defaultValue:"default",description:"List \uCEF4\uD3EC\uB10C\uD2B8\uC758 description\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","tour_confirm_before","tour_confirm","tour_doen","reservation_purchase_before","reservation_purchase_done","checkin_before","day_n","extend_purchase_before","extend_purchase_done","extend_checkin_before","reservation_change_process","checkout_before","checkout_before_n","checkout_done","tour_cancel","reservation_cancel"],control:{type:"select"}}}},A=function(t){return Object(s.jsx)("div",{children:Y("reservation_purchase_before").secondLineText("2023-02-08T23:24:01.616Z")})};A.displayName="Default",A.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
}`}},A.parameters)},"./packages/travelmakers-design-utils/src/utils/getCountDown.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return t});var W=e("./node_modules/core-js/modules/es.object.to-string.js"),$=e.n(W),V=e("./node_modules/core-js/modules/es.regexp.to-string.js"),N=e.n(V),S=e("./node_modules/core-js/modules/es.date.to-string.js"),Y=e.n(S),Z=e("./node_modules/core-js/modules/es.string.pad-start.js"),s=e.n(Z),F=e("./node_modules/core-js/modules/es.string.replace.js"),B=e.n(F),M=e("./node_modules/core-js/modules/es.regexp.exec.js"),A=e.n(M),h=e("./packages/travelmakers-design-utils/src/getDate/getDate.tsx");function t(n){var r="HH\uC2DC\uAC04 mm\uBD84",p=Object(h.f)(n),c=1e3,u=c*60,o=u*60,a=o*24,f=function(){var g=p.toDate().getTime()-Object(h.f)().toDate().getTime(),l={days:"0",hours:"0",minutes:"0",seconds:"0"};return g>0&&(l={days:Math.floor(g/a).toString(),hours:Math.floor(g/o%24).toString(),minutes:Math.floor(g/c/60%60).toString().padStart(2,"0"),seconds:Math.floor(g/c%60).toString().padStart(2,"0")}),!p||!l?"":r.replace("D",l.days).replace("HH",l.hours).replace("mm",l.minutes).replace("ss",l.seconds)};return f()}},"./packages/travelmakers-design-utils/src/utils/getTimeStamp.ts":function(oe,m,e){"use strict";e.d(m,"a",function(){return $}),e.d(m,"b",function(){return V});function W(N){return N<10?"0"+N:N}function $(N,S){var Y=N;return S?Y.month()+1+"\uC6D4 "+Y.date()+"\uC77C "+Y.hour()+":"+W(Y.minute()):Y.month()+1+"\uC6D4 "+Y.date()+"\uC77C "}function V(N){var S=N;return S.month()+1+"\uC6D4 "+S.date()+"\uC77C "+S.hour()+"\uC2DC"}},"./storybook-init-framework-entry.js":function(oe,m,e){"use strict";e.r(m);var W=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(oe,m,e){e("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),oe.exports=e("./generated-stories-entry.js")},1:function(oe,m){}},[[0,4,5]]]);
