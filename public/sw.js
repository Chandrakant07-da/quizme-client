if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-714e1d6c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bb58f3fddb8ed4752bbd176d813c8573"},{url:"/_next/static/chunks/11-467079b0418db0e8.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/139-9eb64a654588a78c.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/2443530c-1cd1ec37cc9d737c.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/app/layout-5c521c76e23e4627.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/app/page-7e915e32d8b5e2d4.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/app/quiz/page-a5b029ec473193a9.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/main-app-1987aaaa31e63c1e.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/main-d553a3a3198c0f54.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1268da75adc3a708.js",revision:"zhg8cIuac052nOP-yR6E-"},{url:"/_next/static/css/0544e59d6332acba.css",revision:"0544e59d6332acba"},{url:"/_next/static/css/23a06fe4cf0e079c.css",revision:"23a06fe4cf0e079c"},{url:"/_next/static/media/5f51572adc9d6741-s.woff2",revision:"337b3324109236e7e85a914d41882b0c"},{url:"/_next/static/media/a5b3f9638b3ccb53-s.p.woff2",revision:"13b034ce4fd4bef6fb4bbd639993b350"},{url:"/_next/static/media/f78c7efeefc8db1e-s.woff2",revision:"c21232fb8b035ee7c509ac7ca728e863"},{url:"/_next/static/media/home-pic.27e6ff45.png",revision:"599efb8d781d996cd2b10dd0c29c9020"},{url:"/_next/static/media/react-quiz-logo.881d7d2d.svg",revision:"e882e87b8f54789fcf9ed2538d47beda"},{url:"/_next/static/zhg8cIuac052nOP-yR6E-/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/zhg8cIuac052nOP-yR6E-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"f36cb9c6aad0be7e439a5186e0ee7874"},{url:"/icon-256x256.png",revision:"dd26bf9f39101bef7887ad14a9dfba0f"},{url:"/icon-384x384.png",revision:"84e8a730ce8b1101efcc59b0c7cce886"},{url:"/icon-512x512.png",revision:"f42ff85bd22d8729e376a1a09d3cbb96"},{url:"/manifest.json",revision:"8cee99635776950b7c5a12abb93cab4b"},{url:"/maskable.png",revision:"f42ff85bd22d8729e376a1a09d3cbb96"},{url:"/nattu-adnan-unsplash.jpg",revision:"c11f97a3b321dad2ede69652d3f8a174"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/quiz-logo.svg",revision:"940b987d27a87fe5643827f33d148367"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));