(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{767:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return b}));var c=t(3),r=t.n(c),a=t(7),i=t(87),s=t.n(i),u=t(69),o=function(e,n){return new(new s.a(e).eth.Contract)(u,n)},b=function(){var e=Object(a.a)(r.a.mark((function e(n,t,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o(n,t),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,c){return e.apply(this,arguments)}}()},778:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ce}));var c,r,a,i,s,u,o,b,j,l,p=t(13),d=t(0),f=t(2),O=t(16),m=t(32),x=t(124),h=t(3),g=t.n(h),v=t(7),w=t(19),k=t(68),S=t(206),y=t(18),C=t(8),z=t.n(C),A=t(41),E=t(44),R=t(73),Q=t(201),D=t(149),H=function(){var e=Object(d.useState)([]),n=Object(w.a)(e,2),t=n[0],c=n[1],r=Object(k.j)().account,a=Object(D.a)().fastRefresh;return Object(d.useEffect)((function(){r&&function(){var e=Object(v.a)(g.a.mark((function e(){var n,t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Q.b.map((function(e){return{address:Object(E.b)(),name:"pendingCream",params:[e.pid,r]}})),e.next=3,Object(A.a)(R,n);case 3:t=e.sent,a=Q.b.map((function(e,n){return Object(y.a)(Object(y.a)({},e),{},{balance:new z.a(t[n])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),t},N=t(205),W=function(){var e=Object(d.useState)([]),n=Object(w.a)(e,2),t=n[0],c=n[1],r=Object(k.j)().account,a=Object(D.a)().fastRefresh;return Object(d.useEffect)((function(){r&&function(){var e=Object(v.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Q.b.map((function(e){return{address:Object(E.b)(),name:"pendingCream",params:[e.pid,r]}})),e.next=3,Object(A.a)(R,n);case 3:t=e.sent,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),t},B=t(349),F=t(1),J=function(e){var n=e.value,t=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=Object(B.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),i=a.countUp,s=a.update,u=Object(d.useRef)(s);return Object(d.useEffect)((function(){u.current(n)}),[n,u]),Object(F.jsx)(O.A,{bold:!0,fontSize:r,children:i})},L=function(){var e=Object(m.a)(),n=Object(k.j)().account,t=W().reduce((function(e,n){return e+new z.a(n).div(new z.a(10).pow(18)).toNumber()}),0);return n?Object(F.jsx)(J,{value:t}):Object(F.jsx)(O.A,{color:"textDisabled",style:{lineHeight:"60px"},children:e(298,"Locked")})},M=t(297),T=t(98),U=t(767),I=function(e){var n=Object(d.useState)(new z.a(0)),t=Object(w.a)(n,2),c=t[0],r=t[1],a=Object(k.j)(),i=a.account,s=a.ethereum,u=Object(D.a)().fastRefresh;return Object(d.useEffect)((function(){i&&s&&function(){var n=Object(v.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(U.b)(s,e,i);case 2:t=n.sent,r(new z.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[i,s,e,u]),c},V=t(52),Y=function(){var e=Object(m.a)(),n=I(Object(E.a)());return Object(k.j)().account?Object(F.jsx)(J,{value:Object(V.a)(n),fontSize:"24px"}):Object(F.jsx)(O.A,{color:"textDisabled",style:{lineHeight:"36px"},children:e(298,"Locked")})},q=Object(f.e)(O.h)(c||(c=Object(p.a)(["\n  background-image: url('/images/cake-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),G=f.e.div(r||(r=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),K=f.e.img(a||(a=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),P=f.e.div(i||(i=Object(p.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),X=f.e.div(s||(s=Object(p.a)(["\n  margin-top: 24px;\n"]))),Z=function(){var e=Object(d.useState)(!1),n=Object(w.a)(e,2),t=n[0],c=n[1],r=Object(k.j)().account,a=Object(m.a)(),i=H().filter((function(e){return e.balance.toNumber()>0})),s=Object(S.a)(i.map((function(e){return e.pid}))).onReward,u=Object(d.useCallback)(Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,s();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[s]);return Object(F.jsx)(q,{children:Object(F.jsxs)(O.i,{children:[Object(F.jsx)(O.n,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(F.jsx)(K,{src:"/images/cake.svg",alt:"iCream logo",width:64,height:64}),Object(F.jsxs)(G,{children:[Object(F.jsx)(L,{}),Object(F.jsx)(P,{children:a(544,"iCream to Harvest")})]}),Object(F.jsxs)(G,{children:[Object(F.jsx)(Y,{}),Object(F.jsx)(P,{children:a(546,"iCream in Wallet")})]}),Object(F.jsx)(X,{children:r?Object(F.jsx)(O.d,{id:"harvest-all",disabled:i.length<=0||t,onClick:u,fullWidth:!0,children:t?a(548,"Collecting iCream"):a(999,"Harvest all (".concat(i.length,")"))}):Object(F.jsx)(N.a,{fullWidth:!0})})]})})},$=Object(f.e)(O.h)(u||(u=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),_=f.e.div(o||(o=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ee=function(){var e=Object(m.a)(),n=function(){var e=Object(D.a)().slowRefresh,n=Object(d.useState)(),t=Object(w.a)(n,2),c=t[0],r=t[1];return Object(d.useEffect)((function(){function e(){return(e=Object(v.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(T.a)(M,Object(E.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,r(new z.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),t=function(e){var n=Object(d.useState)(new z.a(0)),t=Object(w.a)(n,2),c=t[0],r=t[1],a=Object(k.j)(),i=a.account,s=a.ethereum,u=Object(D.a)().slowRefresh;return Object(d.useEffect)((function(){i&&s&&function(){var n=Object(v.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(U.b)(s,e,"0x000000000000000000000000000000000000dEaD");case 2:t=n.sent,r(new z.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[i,s,e,u]),c}(Object(E.a)()),c=n?Object(V.a)(n)-Object(V.a)(t):0;return Object(F.jsx)($,{children:Object(F.jsxs)(O.i,{children:[Object(F.jsx)(O.n,{size:"xl",mb:"24px",children:e(534,"iCream Stats")}),Object(F.jsxs)(_,{children:[Object(F.jsx)(O.A,{fontSize:"14px",children:e(536,"Total iCream Supply")}),c&&Object(F.jsx)(J,{fontSize:"14px",value:c})]}),Object(F.jsxs)(_,{children:[Object(F.jsx)(O.A,{fontSize:"14px",children:e(538,"Total iCream Burned")}),Object(F.jsx)(J,{fontSize:"14px",value:Object(V.a)(t)})]}),Object(F.jsxs)(_,{children:[Object(F.jsx)(O.A,{fontSize:"14px",children:e(540,"New iCream/block")}),Object(F.jsx)(J,{fontSize:"14px",decimals:0,value:0})]})]})})},ne=f.e.div(b||(b=Object(p.a)(["\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),te=Object(f.e)(O.b)(j||(j=Object(p.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ce=(Object(f.e)(O.b)(l||(l=Object(p.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),function(){var e=Object(m.a)();return Object(F.jsxs)(x.a,{children:[Object(F.jsxs)(ne,{children:[Object(F.jsx)(O.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"IceCreamSwap")}),Object(F.jsx)(O.A,{children:e(579,"\ud83c\udf66 Creamy & Delicious AMM, Vault & YieldFarming on Binance Smart Chain.\ud83c\udf66")})]}),Object(F.jsx)("div",{children:Object(F.jsxs)(te,{children:[Object(F.jsx)(Z,{}),Object(F.jsx)(ee,{})]})})]})})}}]);
//# sourceMappingURL=8.668b73e0.chunk.js.map