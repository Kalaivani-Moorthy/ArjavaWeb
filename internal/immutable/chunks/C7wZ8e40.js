import{t as j,a as Q}from"./htIQgArg.js";import{a1 as me,b as pe,a5 as ve,i as B,h as S,S as ge,d as we,g as J,a6 as ce,H as ke,e as re,j as G,o as Y,X as ye,k as fe,l as ue,m as Ae,a7 as X,$ as he,O as Ee,M as se,a8 as ee,a9 as ie,aa as ae,ab as Ne,ac as le,Q as Se,ad as Te,ae as Ie,_ as Le,af as qe,u as Ce,ag as Me,V as ze,ah as De,ai as He,aj as Oe,p as de,f as Re,t as Z,a as _e,c as h,s as _,r as u,n as P}from"./CNlQyfh7.js";import{e as K,s as L}from"./BkRtlafL.js";import{o as Pe}from"./ApIGCws5.js";import{b as T}from"./B7FW2BXH.js";import{i as $e}from"./BhaV8Qfc.js";function Ye(t,e){return e}function Ue(t,e,a,n){for(var s=[],c=e.length,o=0;o<c;o++)Ie(e[o].e,s,!0);var b=c>0&&s.length===0&&a!==null;if(b){var w=a.parentNode;Le(w),w.append(a),n.clear(),q(t,e[0].prev,e[c-1].next)}qe(s,()=>{for(var p=0;p<c;p++){var d=e[p];b||(n.delete(d.k),q(t,d.prev,d.next)),Ce(d.e,!b)}})}function Fe(t,e,a,n,s,c=null){var o=t,b={flags:e,items:new Map,first:null},w=(e&ve)!==0;if(w){var p=t;o=S?B(ge(p)):p.appendChild(me())}S&&we();var d=null,y=!1,l=ce(()=>{var f=a();return Se(f)?f:f==null?[]:he(f)});pe(()=>{var f=J(l),r=f.length;if(y&&r===0)return;y=r===0;let A=!1;if(S){var x=o.data===ke;x!==(r===0)&&(o=re(),B(o),G(!1),A=!0)}if(S){for(var k=null,g,m=0;m<r;m++){if(Y.nodeType===8&&Y.data===ye){o=Y,A=!0,G(!1);break}var i=f[m],v=n(i,m);g=be(Y,b,k,null,i,v,m,s,e,a),b.items.set(v,g),k=g}r>0&&B(re())}S||Ve(f,b,o,s,e,n,a),c!==null&&(r===0?d?fe(d):d=ue(()=>c(o)):d!==null&&Ae(d,()=>{d=null})),A&&G(!0),J(l)}),S&&(o=Y)}function Ve(t,e,a,n,s,c,o){var $,V,O,W;var b=(s&Te)!==0,w=(s&(ee|ae))!==0,p=t.length,d=e.items,y=e.first,l=y,f,r=null,A,x=[],k=[],g,m,i,v;if(b)for(v=0;v<p;v+=1)g=t[v],m=c(g,v),i=d.get(m),i!==void 0&&(($=i.a)==null||$.measure(),(A??(A=new Set)).add(i));for(v=0;v<p;v+=1){if(g=t[v],m=c(g,v),i=d.get(m),i===void 0){var C=l?l.e.nodes_start:a;r=be(C,e,r,r===null?e.first:r.next,g,m,v,n,s,o),d.set(m,r),x=[],k=[],l=r.next;continue}if(w&&We(i,g,v,s),i.e.f&X&&(fe(i.e),b&&((V=i.a)==null||V.unfix(),(A??(A=new Set)).delete(i))),i!==l){if(f!==void 0&&f.has(i)){if(x.length<k.length){var z=k[0],E;r=z.prev;var U=x[0],D=x[x.length-1];for(E=0;E<x.length;E+=1)ne(x[E],z,a);for(E=0;E<k.length;E+=1)f.delete(k[E]);q(e,U.prev,D.next),q(e,r,U),q(e,D,z),l=z,r=D,v-=1,x=[],k=[]}else f.delete(i),ne(i,l,a),q(e,i.prev,i.next),q(e,i,r===null?e.first:r.next),q(e,r,i),r=i;continue}for(x=[],k=[];l!==null&&l.k!==m;)l.e.f&X||(f??(f=new Set)).add(l),k.push(l),l=l.next;if(l===null)continue;i=l}x.push(i),r=i,l=i.next}if(l!==null||f!==void 0){for(var I=f===void 0?[]:he(f);l!==null;)l.e.f&X||I.push(l),l=l.next;var H=I.length;if(H>0){var F=s&ve&&p===0?a:null;if(b){for(v=0;v<H;v+=1)(O=I[v].a)==null||O.measure();for(v=0;v<H;v+=1)(W=I[v].a)==null||W.fix()}Ue(e,I,F,d)}}b&&Ee(()=>{var R;if(A!==void 0)for(i of A)(R=i.a)==null||R.apply()}),se.first=e.first&&e.first.e,se.last=r&&r.e}function We(t,e,a,n){n&ee&&ie(t.v,e),n&ae?ie(t.i,a):t.i=a}function be(t,e,a,n,s,c,o,b,w,p){var d=(w&ee)!==0,y=(w&Me)===0,l=d?y?Ne(s):le(s):s,f=w&ae?le(o):o,r={i:f,v:l,k:c,a:null,e:null,prev:a,next:n};try{return r.e=ue(()=>b(t,l,f,p),S),r.e.prev=a&&a.e,r.e.next=n&&n.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),n!==null&&(n.prev=r,n.e.prev=r.e),r}finally{}}function ne(t,e,a){for(var n=t.next?t.next.e.nodes_start:a,s=e?e.e.nodes_start:a,c=t.e.nodes_start;c!==n;){var o=ze(c);s.before(c),c=o}}function q(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function N(t,e,a,n){var s=t.__attributes??(t.__attributes={});S&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[De]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Be(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var oe=new Map;function Be(t){var e=oe.get(t.nodeName);if(e)return e;oe.set(t.nodeName,e=[]);for(var a,n=t,s=Element.prototype;s!==n;){a=Oe(n);for(var c in a)a[c].set&&e.push(c);n=He(n)}return e}function M(t,e,a){var n=t.__className,s=Ge(e);S&&t.className===s?t.__className=s:(n!==s||S&&t.className!==s)&&(e==null?t.removeAttribute("class"):t.className=s,t.__className=s)}function Ge(t,e){return(t??"")+""}function Xe(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}var Ke=j('<header><div class="container mx-auto flex items-center justify-between px-6"><a href="index.html" class="flex items-start space-x-2 svelte-1h20zqt"><img alt="Logo" class="h-20"></a> <nav class="hidden md:flex space-x-6"><a>Home</a> <a>About</a> <a>Services</a> <a>Products</a> <a>Contact</a></nav> <button class="md:hidden text-white focus:outline-none text-3xl">☰</button> </div></header> <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div> <aside><div class="p-6"><button class="text-white text-2xl focus:outline-none">✕</button></div> <nav class="flex flex-col space-y-4 px-6"><a href="/" class="block text-white font-medium  svelte-1h20zqt">Home</a> <a href="/about" class="block text-white hover:text-blue-400 font-medium svelte-1h20zqt">About</a> <a href="/services" class="block text-white hover:text-blue-400 font-medium svelte-1h20zqt">Services</a> <a href="/product" class="block text-white hover:text-blue-400 font-medium svelte-1h20zqt">Products</a> <a href="/contact" class="block text-white hover:text-blue-400 font-medium svelte-1h20zqt">Contact</a></nav></aside>',1);function sa(t,e){de(e,!0),console.log(e.active);let a=!1,n=!1;Pe(()=>{window.addEventListener("scroll",()=>{n=window.scrollY>50})});function s(){a=!1}var c=Ke(),o=Re(c);M(o,`fixed top-0 left-0 w-full z-50 transition-all duration-300
   ${(n?"backdrop-blur-md bg-blue-950/100 shadow-md":"bg-gray-900")??""}`);var b=h(o),w=h(b),p=h(w);u(w);var d=_(w,2),y=h(d);N(y,"href",`${T??""}/`);var l=_(y,2);N(l,"href",`${T??""}/about`);var f=_(l,2);N(f,"href",`${T??""}/Services`);var r=_(f,2);N(r,"href",`${T??""}/Products`);var A=_(r,2);N(A,"href",`${T??""}/Contacts`),u(d);var x=_(d,2),k=_(x);u(b),u(o);var g=_(o,2);Xe(g,"hidden",!a);var m=_(g,2);M(m,`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform transition-transform duration-300 
   ${(a?"translate-x-0":"-translate-x-full")??""}`);var i=h(m),v=h(i);u(i),P(2),u(m),Z(C=>{N(p,"src",e.img?"../images/logo-ar.png":"./images/logo-ar.png"),M(y,` hover:text-blue-400 font-medium ${(e.active==""?"border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400")??""} svelte-1h20zqt`),M(l,` hover:text-blue-400 font-medium  ${(e.active=="about"?"border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400")??""} svelte-1h20zqt`),M(f,` hover:text-blue-400 font-medium ${(e.active=="service"?"border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400")??""} svelte-1h20zqt`),M(r,` hover:text-blue-400 font-medium ${(e.active=="Products"?"border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400")??""} svelte-1h20zqt`),M(A,` hover:text-blue-400 font-medium ${(e.active=="Contacts"?"border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400")??""} svelte-1h20zqt`),L(k,` ${C??""}`)},[()=>console.log(a)]),K("click",x,()=>a=!a),K("click",g,s),K("click",v,s),Q(t,c),_e()}var Qe=j('<li><a href="#" class="hover:text-blue-400"> </a></li>'),Je=j('<footer class="bg-black text-white py-10"><div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8"><div><h3 class="text-xl font-bold mb-3 uppercase"> <br><a class="text-green-400">___________</a></h3> <p> </p> <p><strong>Phone:</strong> </p> <p><strong>Email:</strong> <a class="text-blue-400"> </a></p> <div class="flex space-x-4 mt-3 social svelte-1xhk1hi"><ul class="svelte-1xhk1hi"><li class="svelte-1xhk1hi"><a href="#" class="svelte-1xhk1hi"><i class="fab fa-facebook-f icon svelte-1xhk1hi"></i></a></li> <li class="svelte-1xhk1hi"><a href="#" class="svelte-1xhk1hi"><i class="fab fa-twitter icon svelte-1xhk1hi"></i></a></li> <li class="svelte-1xhk1hi"><a href="#" class="svelte-1xhk1hi"><i class="fab fa-linkedin-in icon svelte-1xhk1hi"></i></a></li> <li class="svelte-1xhk1hi"><a href="#" class="svelte-1xhk1hi"><i class="fab fa-google-plus-g icon svelte-1xhk1hi"></i></a></li></ul></div></div> <div><h3 class="text-lg font-semibold mb-3 uppercase ">Useful Links<br><a class="text-green-400">___________</a></h3> <ul class="space-y-2"><li><a class="hover:text-blue-400">Home</a></li> <li><a class="hover:text-blue-400">AboutUs</a></li> <li><a class="hover:text-blue-400">Services</a></li> <li><a class="hover:text-blue-400">Products</a></li> <li><a href="/" class="hover:text-blue-400">Terms of service</a></li></ul></div> <div><h3 class="text-lg font-semibold mb-3 uppercase">Our Services<br><a class="text-green-400">___________</a></h3> <ul class="space-y-2"></ul></div> <div><h3 class="text-lg font-semibold mb-3 uppercase">Our Newsletter<br><a class="text-green-400">___________</a></h3> <p class="text-sm mb-3">Subscribe to our newsletter and receive the latest news about our products and services!</p> <div class="flex"><input type="email" placeholder="Your email" class="px-3 py-2 w-full bg-gray-800 border border-gray-700 text-white focus:outline-none"> <button class="bg-green-500 px-4 py-2 text-white font-semibold hover:bg-green-600">Subscribe</button></div></div></div> <div class="text-center mt-6 text-sm border-t border-gray-700 pt-4"> <strong> </strong> All Rights Reserved <br></div></footer>');function ia(t,e){de(e,!1);const a={company:"Arjava Technologies",address:"2135 204th PL NE, Sammamish, WA - 98974, USA.",phone:"+1 5589 55488 55",email:"info@example.com"},n=["Web Design","Web Development","Product Management","Marketing","Graphic Design"];$e();var s=Je(),c=h(s),o=h(c),b=h(o),w=h(b,!0);P(2),u(b);var p=_(b,2),d=h(p,!0);u(p);var y=_(p,2),l=_(h(y));u(y);var f=_(y,2),r=_(h(f),2),A=h(r,!0);u(r),u(f),P(2),u(o);var x=_(o,2),k=_(h(x),2),g=h(k),m=h(g);N(m,"href",`${T??""}/`),u(g);var i=_(g,2),v=h(i);N(v,"href",`${T??""}/about`),u(i);var C=_(i,2),z=h(C);N(z,"href",`${T??""}/Services`),u(C);var E=_(C,2),U=h(E);N(U,"href",`${T??""}/Products`),u(E),P(2),u(k),u(x);var D=_(x,2),I=_(h(D),2);Fe(I,5,()=>n,Ye,(O,W)=>{var R=Qe(),te=h(R),xe=h(te,!0);u(te),u(R),Z(()=>L(xe,J(W))),Q(O,R)}),u(I),u(D),P(2),u(c);var H=_(c,2),F=h(H),$=_(F),V=h($,!0);u($),P(2),u(H),u(s),Z(O=>{L(w,a.company),L(d,a.address),L(l,` ${a.phone}`),N(r,"href",`mailto:${a.email}`),L(A,a.email),L(F,`© ${O??""} `),L(V,a.company)},[()=>new Date().getFullYear()],ce),Q(t,s),_e()}export{ia as F,sa as N,M as a,Fe as e,Ye as i,N as s};
