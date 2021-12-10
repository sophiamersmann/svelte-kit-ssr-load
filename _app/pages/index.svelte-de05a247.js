import{S as K,i as P,s as V,e as v,t as n,k as W,c as _,a as k,g as l,d as e,n as q,b as A,f,H as p,I as S}from"../chunks/vendor-af0f2ef7.js";import{b as H}from"../chunks/paths-28a87002.js";function C(b){let a,h,d,o,x,r,$,j,c,i,E,m;return{c(){a=v("h1"),h=n("Welcome to SvelteKit"),d=W(),o=v("p"),x=n("Visit "),r=v("a"),$=n("kit.svelte.dev"),j=n(" to read the documentation"),c=n(`

I am the index page and link to a
`),i=v("a"),E=n("page"),m=n(`
that loads data from /api/data.json`),this.h()},l(t){a=_(t,"H1",{});var s=k(a);h=l(s,"Welcome to SvelteKit"),s.forEach(e),d=q(t),o=_(t,"P",{});var u=k(o);x=l(u,"Visit "),r=_(u,"A",{href:!0});var I=k(r);$=l(I,"kit.svelte.dev"),I.forEach(e),j=l(u," to read the documentation"),u.forEach(e),c=l(t,`

I am the index page and link to a
`),i=_(t,"A",{href:!0});var y=k(i);E=l(y,"page"),y.forEach(e),m=l(t,`
that loads data from /api/data.json`),this.h()},h(){A(r,"href","https://kit.svelte.dev"),A(i,"href",""+(H+"/PageLoadingData"))},m(t,s){f(t,a,s),p(a,h),f(t,d,s),f(t,o,s),p(o,x),p(o,r),p(r,$),p(o,j),f(t,c,s),f(t,i,s),p(i,E),f(t,m,s)},p:S,i:S,o:S,d(t){t&&e(a),t&&e(d),t&&e(o),t&&e(c),t&&e(i),t&&e(m)}}}function D(b,a,h){return console.log(H),[!1]}class g extends K{constructor(a){super();P(this,a,D,C,V,{router:0})}get router(){return this.$$.ctx[0]}}export{g as default};
