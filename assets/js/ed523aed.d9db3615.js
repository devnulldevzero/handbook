"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5576],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),l=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,m=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=l(r),d=n,h=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(h,i(i({ref:e},p),{},{components:r})):a.createElement(h,i({ref:e},p))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},403:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"breakout-rooms",title:"Breakout rooms"},m=void 0,l={unversionedId:"community/breakout-rooms",id:"community/breakout-rooms",title:"Breakout rooms",description:"Jitsi Meet now has native support for breakout rooms. You can see it in action here. This page is kept here for historical purposes and will receive no further updates.",source:"@site/docs/community/breakout-rooms.md",sourceDirName:"community",slug:"/community/breakout-rooms",permalink:"/handbook/docs/community/breakout-rooms",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/community/breakout-rooms.md",tags:[],version:"current",lastUpdatedAt:1665225905,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{id:"breakout-rooms",title:"Breakout rooms"}},p={},u=[],c={toc:u};function d(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Jitsi Meet now has native support for breakout rooms. You can see it in action ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ubYYZ0daw10"},"here"),". This page is kept here for historical purposes and will receive no further updates.")),(0,o.kt)("p",null,(0,o.kt)("del",{parentName:"p"},"Jitsi does not natively support breakout rooms (e.g. see ",(0,o.kt)("a",{parentName:"del",href:"https://github.com/jitsi/jitsi-meet/issues/4787"},"#4787")," and ",(0,o.kt)("a",{parentName:"del",href:"https://github.com/jitsi/jitsi-meet/issues/5550"},"#5550"),");")," however there are various solutions for this functionality built on top of Jitsi:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"License"),(0,o.kt)("th",{parentName:"tr",align:null},"Cost model"),(0,o.kt)("th",{parentName:"tr",align:null},"Admin can move participants"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"DIY" - manually combine Jitsi with other comms tools'),(0,o.kt)("td",{parentName:"tr",align:null},"Depends on what you use"),(0,o.kt)("td",{parentName:"tr",align:null},"Depends on what you use"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Not a great solution, since no native integration; everyone needs to follow a pre-agreed workflow and which Jitsi rooms to use, e.g. ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet/issues/5550#issuecomment-620747815"},"https://meet.jit.si/","<","eventname",">","-","<","roomname",">"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://veertly.com/"},"Veertly")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/veertly/app/blob/stage/LICENSE"},"Apache 2.0")),(0,o.kt)("td",{parentName:"tr",align:null},"Cannot currently be self-hosted as it ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/veertly/app/issues/68"},"requires firebase")," (also ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Software_as_a_service"},"SaaS")," - free for now?)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet/issues/4787#issuecomment-624868307"},"No")),(0,o.kt)("td",{parentName:"tr",align:null},"Try the ",(0,o.kt)("a",{parentName:"td",href:"https://app.veertly.com/v/demo"},"online demo"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.wurk.app/"},"Wurk.app")),(0,o.kt)("td",{parentName:"tr",align:null},"Apache 2.0"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/puthli/breakout-rooms"},"Open Source")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet/issues/5550#issuecomment-625891995"},"Original comment")," Uses a Main room. The meeting host can add unlimited other rooms and move web-based participants to them. Moving participants away from the main room is not yet supported on mobile. Supports timeboxes and broadcast messages. Meeting hosts can unmute / mute others. Wurk uses a self hosted Jitsi meet installation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.videofacilitator.com/"},"VideoFacilitator")),(0,o.kt)("td",{parentName:"tr",align:null},"Proprietary ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Software_as_a_service"},"SaaS")),(0,o.kt)("td",{parentName:"tr",align:null},"Subscription (see ",(0,o.kt)("a",{parentName:"td",href:"https://www.videofacilitator.com/pricing"},"pricing"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet/issues/5550#issuecomment-612262313"},"Issues with navigating rooms on mobile?"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet/issues/5550#issuecomment-617670291"},"Plugin for Openfire Meetings")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/igniterealtime/openfire-pade-plugin/blob/master/LICENSE"},"Apache 2.0")),(0,o.kt)("td",{parentName:"tr",align:null},"Free (self-hosting)"),(0,o.kt)("td",{parentName:"tr",align:null},"?"),(0,o.kt)("td",{parentName:"tr",align:null},"More info ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet/issues/5550#issuecomment-618461856"},"here"))))))}d.isMDXComponent=!0}}]);