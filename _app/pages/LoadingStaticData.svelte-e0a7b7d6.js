import{S as D,i as I,s as S,t as u,e as _,k as x,g as b,c as h,a as v,d as o,n as P,b as w,f,H as j,h as B,I as k}from"../chunks/vendor-af0f2ef7.js";import{b as E}from"../chunks/paths-28a87002.js";function q(r){let t,s,i=r[0].someData+"",n,p,m,c,l,d;return{c(){t=u("I am page 2 and loaded "),s=_("b"),n=u(i),p=x(),m=_("br"),c=x(),l=_("a"),d=u("index page"),this.h()},l(a){t=b(a,"I am page 2 and loaded "),s=h(a,"B",{});var e=v(s);n=b(e,i),e.forEach(o),p=P(a),m=h(a,"BR",{}),c=P(a),l=h(a,"A",{href:!0});var y=v(l);d=b(y,"index page"),y.forEach(o),this.h()},h(){w(l,"href","/")},m(a,e){f(a,t,e),f(a,s,e),j(s,n),f(a,p,e),f(a,m,e),f(a,c,e),f(a,l,e),j(l,d)},p(a,[e]){e&1&&i!==(i=a[0].someData+"")&&B(n,i)},i:k,o:k,d(a){a&&o(t),a&&o(s),a&&o(p),a&&o(m),a&&o(c),a&&o(l)}}}const L=async({fetch:r})=>{const t=await r("/api/static-data.json");if(t.ok)return{props:{myProp:await t.json()}}};function A(r,t,s){let{myProp:i}=t;return console.log("in p 1",E),r.$$set=n=>{"myProp"in n&&s(0,i=n.myProp)},[i]}class R extends D{constructor(t){super();I(this,t,A,q,S,{myProp:0})}}export{R as default,L as load};