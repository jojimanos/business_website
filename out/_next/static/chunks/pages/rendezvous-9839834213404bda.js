(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{420:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rendezvous",function(){return c(5067)}])},4796:function(d,b,a){"use strict";function e(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}a.r(b),a.d(b,{default:function(){return j}});var f=a(1799),c=a(4051),g=a.n(c),h=a(5893),i=a(7294);function j(){var o,p,b=(0,i.useState)(""),q=b[0],y=b[1],c=(0,i.useState)(""),r=c[0],z=c[1],d=(0,i.useState)(""),s=d[0],A=d[1],j=(0,i.useState)(""),t=j[0],B=j[1],k=(0,i.useState)({}),a=k[0],C=k[1],l=(0,i.useState)("\u03A5\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE"),u=l[0],D=l[1],m=(0,i.useState)(!1),v=m[0],E=m[1],n=(0,i.useState)(!1),w=n[0],F=n[1],G=function(){var b={},c=!0;return q.length<=0&&(b.fullname=!0,c=!1),r.length<=0&&(b.email=!0,c=!1),s.length<=0&&(b.phone=!0,c=!1),t.length<=0&&(b.message=!0,c=!1),C((0,f.Z)({},b)),console.log("errors",a),c},x=(p=(o=g().mark(function a(b){var c,d,e;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b.preventDefault(),!(c=G())){a.next=27;break}return D("Sending"),a.next=6,fetch("/api/sendgrid",{body:JSON.stringify({email:r,fullname:q,phone:s,message:t}),headers:{"Content-Type":"application/json"},method:"POST"});case 6:return d=a.sent,a.next=9,d.json();case 9:if(!(e=a.sent.error)){a.next=20;break}return console.log(e),E(!1),F(!0),D("\u03A5\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE"),y(""),z(""),A(""),B(""),a.abrupt("return");case 20:E(!0),F(!1),D("\u03A5\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE"),y(""),z(""),A(""),A("");case 27:console.log(q,r,s,t);case 28:case"end":return a.stop()}},a)}),function(){var a=this,b=arguments;return new Promise(function(d,f){var g=o.apply(a,b);function c(a){e(g,d,f,c,h,"next",a)}function h(a){e(g,d,f,c,h,"throw",a)}c(void 0)})}),function(a){return p.apply(this,arguments)});return(0,h.jsx)("main",{children:(0,h.jsx)("header",{className:"p-2 sm:px-64 gap-4 pt-10",children:(0,h.jsxs)("form",{onSubmit:x,className:"rounded-lg flex flex-col px-8 py-8 bg-white",children:[(0,h.jsx)("h1",{className:"text-2xl font-bold dark:text-gray-50",children:"\u03A6\u03CC\u03C1\u03BC\u03B1 \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AF\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03C1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD"}),(0,h.jsxs)("label",{htmlFor:"fullname",className:"text-gray-900 font-light mt-8",children:["\u039F\u03BD\u03BF\u03BC\u03B1\u03C4\u03B5\u03C0\u03CE\u03BD\u03C5\u03BC\u03BF",(0,h.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,h.jsx)("input",{type:"text",value:q,onChange:function(a){y(a.target.value)},name:"fullname",className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"}),(null==a?void 0:a.fullname)&&(0,h.jsx)("p",{className:"text-red-500",children:"\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C4\u03BF \u039F\u03BD\u03BF\u03BC\u03B1\u03C4\u03B5\u03C0\u03CE\u03BD\u03C5\u03BC\u03BF!"}),(0,h.jsxs)("label",{htmlFor:"email",className:"text-gray-900 font-light mt-4",children:["E-mail",(0,h.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,h.jsx)("input",{type:"email",name:"email",value:r,onChange:function(a){z(a.target.value)},className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"}),(null==a?void 0:a.email)&&(0,h.jsx)("p",{className:"text-red-500",children:"\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C4\u03BF email!"}),(0,h.jsxs)("label",{htmlFor:"subject",className:"text-gray-900 font-light mt-4",children:["\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF",(0,h.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,h.jsx)("input",{type:"text",name:"subject",value:s,onChange:function(a){A(a.target.value)},className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"}),(null==a?void 0:a.phone)&&(0,h.jsx)("p",{className:"text-red-500",children:"\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C4\u03BF \u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF!"}),(0,h.jsxs)("label",{htmlFor:"message",className:"text-gray-900 font-light mt-4",children:["\u039C\u03AE\u03BD\u03C5\u03BC\u03B1",(0,h.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,h.jsx)("textarea",{name:"message",value:t,onChange:function(a){B(a.target.value)},className:"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-900 font-light text-gray-900"}),(null==a?void 0:a.message)&&(0,h.jsx)("p",{className:"text-red-500",children:"\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C4\u03BF \u039C\u03AE\u03BD\u03C5\u03BC\u03B1!"}),(0,h.jsx)("div",{className:"flex flex-row items-center justify-start",children:(0,h.jsx)("button",{type:"submit",className:"px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center",children:u})}),(0,h.jsxs)("div",{className:"text-left",children:[v&&(0,h.jsx)("p",{className:"text-green-500 font-semibold text-sm my-2",children:"\u0395\u03C5\u03C7\u03B1\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD\u03BC\u03B5! \u03A4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03AC \u03C3\u03B1\u03C2 \u03C0\u03B1\u03C1\u03B5\u03BB\u03B5\u03AF\u03C6\u03B8\u03B7!"}),w&&(0,h.jsx)("p",{className:"text-red-500",children:"\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC. \u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03C0\u03C1\u03BF\u03C3\u03C0\u03B1\u03B8\u03AE\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC."})]})]})})})}},5067:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return h}});var e=a(5893),c=a(214),f=a.n(c),g=a(4796);function h(){return(0,e.jsx)("div",{className:f().container,children:(0,e.jsxs)("div",{className:"bg-gradient-to-b from-pink-100 to-red-300 p-2",children:[(0,e.jsxs)("div",{className:"grid sm:grid-cols-3",children:[(0,e.jsx)("div",{}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:f().fadein,children:(0,e.jsx)("p",{className:"text-2xl text-center",children:"\u03A4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD \u03C0\u03B1\u03C1\u03AD\u03C7\u03B5\u03C4\u03B1\u03B9 \u03B4\u03C9\u03C1\u03B5\u03AC\u03BD."})}),(0,e.jsx)("p",{className:"box-border py-4 px-7 text-justify",children:"\u0397 \u03C8\u03C5\u03C7\u03BF\u03B8\u03B5\u03C1\u03B1\u03C0\u03B5\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03C5\u03BB\u03B5\u03C5\u03C4\u03B9\u03BA\u03AE \u03C0\u03BF\u03C5 \u03B3\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03C4\u03C5\u03B1\u03BA\u03AC \u03C0\u03C1\u03BF\u03C3\u03C6\u03AD\u03C1\u03B5\u03B9 \u03BC\u03B5\u03B3\u03AC\u03BB\u03B7 \u03B5\u03C5\u03B5\u03BB\u03B9\u03BE\u03AF\u03B1 \u03C7\u03CE\u03C1\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C5. \u0394\u03B5\u03BD \u03B4\u03B9\u03B1\u03C6\u03AD\u03C1\u03B5\u03B9 \u03C3\u03B5 \u03C4\u03AF\u03C0\u03BF\u03C4\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03B4\u03B9\u03B1 \u03B6\u03CE\u03C3\u03B7\u03C2 \u03B8\u03B5\u03C1\u03B1\u03C0\u03B5\u03C5\u03C4\u03B9\u03BA\u03AE \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1. \u03A4\u03B7\u03C1\u03B5\u03AF\u03C4\u03B1\u03B9 \u03BF \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2 \u03B4\u03B5\u03BF\u03BD\u03C4\u03BF\u03BB\u03BF\u03B3\u03AF\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03C4\u03BF \u03B5\u03C0\u03B1\u03B3\u03B3\u03B5\u03BB\u03BC\u03B1\u03C4\u03B9\u03BA\u03CC \u03B1\u03C0\u03CC\u03C1\u03C1\u03B7\u03C4\u03BF \u03C4\u03BF\u03C5 \u03C8\u03C5\u03C7\u03BF\u03BB\u03CC\u03B3\u03BF\u03C5."})]}),(0,e.jsx)("div",{})]}),(0,e.jsx)(g.default,{})]})})}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=420)}),_N_E=a.O()}])