(this["webpackJsonphandwriting-recognition-web"]=this["webpackJsonphandwriting-recognition-web"]||[]).push([[0],{25:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(6),i=r.n(a),u=(r(25),r(26),r(4)),o=r(10),s=r.n(o),l=r(20),d=r(5),b=r(3),h=r(1),f=["brushWidth","brushHeight"],j=Object(c.forwardRef)((function(e,t){var r=e.brushWidth,c=(e.brushHeight,Object(d.a)(e,f)),n=r?r/2:0,a='url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" opacity="1" height="'.concat(r,'" viewBox="0 0 ').concat(r," ").concat(r,'" width="').concat(r,'"><circle cx="').concat(n,'" cy="').concat(n,'" r="').concat(n,'" fill="%23ffffff" /></svg>\') ').concat(n," ").concat(n,", auto");return Object(h.jsx)("canvas",Object(u.a)(Object(u.a)({},c),{},{style:Object(u.a)(Object(u.a)({},c.style),{},{cursor:a}),ref:t}))})),v=function(e){var t=e.handlePredict,r=e.handleClear,c=e.className,n=e.loading;return Object(h.jsx)("div",{className:"".concat(c),style:{width:"500px"},children:Object(h.jsxs)("div",{className:"py-3 flex",children:[Object(h.jsx)("button",{className:"bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 text-center my-4 rounded-full md:block mr-4 md:ml-0 flex-grow ".concat(n?"disabled:opacity-50":""),onClick:function(e){e.preventDefault(),r()},disabled:n,children:"Clear"}),Object(h.jsx)("button",{className:"bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 text-center my-4  ml-4 rounded-full md:block flex-grow ".concat(n?"disabled:opacity-50":""),onClick:function(e){e.preventDefault(),t()},disabled:n,children:n?"Please wait...":"Predict"})]})})},O="https://nepali-handwriting-recognition.herokuapp.com",g=r(11),p=r.n(g),m=r(7),x=function(e){var t=e.probability?100*parseFloat(e.probability):0;return Object(h.jsxs)("div",{className:"bg-white p-5 rounded-md m-3 opacity-90",children:[Object(h.jsx)("div",{className:"text-2xl text-gray-600",children:"Prediction"}),Object(h.jsx)("div",{className:"text-3xl md:text-6xl my-4",children:e.prediction})," ",Object(h.jsxs)("div",{className:"text-2xl text-gray-600",children:[t&&!isNaN(t)&&t.toFixed(2)," %"]})]})},w=r.p+"static/media/cha.eaf1501a.png",y=r.p+"static/media/chha.dea262c0.png",k=r.p+"static/media/ek.f8f08f1e.png",C=["canvas","isReady"],E=["init","clear","handleClear"],N={prediction:"",probability:"0",showPrediction:!1},R=function(){var e=function(){var e=Object(c.useRef)(),t=Object(c.useState)(!1),r=Object(b.a)(t,2),n=r[0],a=r[1],i=Object(c.useState)(!0),u=Object(b.a)(i,2),o=u[0],s=u[1],l=Object(c.useState)(!1),d=Object(b.a)(l,2),h=d[0],f=d[1],j=Object(c.useState)(!1),v=Object(b.a)(j,2),O=v[0],g=v[1],p=Object(c.useState)("#ffffff"),m=Object(b.a)(p,2),x=m[0],w=m[1],y=Object(c.useState)(15),k=Object(b.a)(y,2),C=k[0],E=k[1],N=Object(c.useRef)(!1),R=Object(c.useRef)(100),L=Object(c.useRef)(10),T=Object(c.useRef)("#ffffff"),W=Object(c.useRef)(15),S=Object(c.useRef)(0),P=Object(c.useRef)(0),F=Object(c.useRef)(0),X=Object(c.useRef)(!1),H=Object(c.useRef)(!0),M=Object(c.useRef)(!0),Y=Object(c.useRef)(!1),D=Object(c.useRef)(),B=Object(c.useCallback)((function(e){if(console.log("drawing"),D&&D.current)if(D.current.beginPath(),D.current.moveTo(S.current,P.current),e instanceof TouchEvent?D.current.lineTo(e.touches[0].clientX,e.touches[0].clientY):D.current.lineTo(e.offsetX,e.offsetY),D.current.stroke(),e instanceof TouchEvent){var t=[e.touches[0].clientX,e.touches[0].clientY];S.current=t[0],P.current=t[1]}else{var r=[e.offsetX,e.offsetY];S.current=r[0],P.current=r[1]}}),[]),I=Object(c.useCallback)((function(e,t){X.current=!0;var r=[e,t];S.current=r[0],P.current=r[1]}),[]),J=Object(c.useCallback)((function(e){X.current=!0,I(e.offsetX,e.offsetY)}),[I]),z=Object(c.useCallback)((function(e){X.current=!0,I(e.touches[0].clientX,e.touches[0].clientY)}),[I]),A=Object(c.useCallback)((function(){D&&D.current&&((D.current.lineWidth>90||D.current.lineWidth<10)&&(H.current=!H.current),H.current?D.current.lineWidth++:D.current.lineWidth--,E(D.current.lineWidth))}),[]),q=Object(c.useCallback)((function(e){X.current&&D.current&&(M.current||Y.current?(D.current.strokeStyle=T.current,w(T.current),N.current&&!Y.current?A():D.current.lineWidth=W.current,Y.current?D.current.globalCompositeOperation="destination-out":D.current.globalCompositeOperation="source-over"):(w("hsl(".concat(F.current,",").concat(R.current,"%,").concat(L.current,"%)")),D.current.strokeStyle="hsl(".concat(F.current,",").concat(R.current,"%,").concat(L.current,"%)"),D.current.globalCompositeOperation="source-over",F.current++,F.current>=360&&(F.current=0),N.current?A():D.current.lineWidth=W.current),B(e))}),[B,A]),G=Object(c.useCallback)((function(){X.current=!1}),[]),U=Object(c.useCallback)((function(){e&&e.current&&(e.current.width=500,e.current.height=500)}),[]),K=Object(c.useCallback)((function(){var t;D.current=null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getContext("2d"),e&&e.current&&D&&D.current&&!n&&(console.log("create"),e.current.addEventListener("mousedown",J,!1),e.current.addEventListener("mousemove",q,!1),e.current.addEventListener("mouseup",G,!1),e.current.addEventListener("mouseout",G,!1),e.current.addEventListener("touchstart",z,!1),e.current.addEventListener("touchend",G,!1),e.current.addEventListener("touchcancel",G,!1),e.current.addEventListener("touchmove",q,!1),window.addEventListener("resize",U,!1),U(),D.current.strokeStyle="#000",D.current.lineJoin="round",D.current.lineCap="round",D.current.lineWidth=10,D.current.fillStyle="black",D.current.fillRect(0,0,e.current.width,e.current.height),a(!0))}),[q,J,G,z,n,U]),Q=Object(c.useCallback)((function(){var t,r,c,n,i,u,o,s;console.log("clear"),null===(t=e.current)||void 0===t||t.removeEventListener("mousedown",J,!1),null===(r=e.current)||void 0===r||r.removeEventListener("mousemove",q,!1),null===(c=e.current)||void 0===c||c.removeEventListener("mouseup",G,!1),null===(n=e.current)||void 0===n||n.removeEventListener("mouseout",G,!1),null===(i=e.current)||void 0===i||i.removeEventListener("touchstart",z,!1),null===(u=e.current)||void 0===u||u.removeEventListener("touchend",G,!1),null===(o=e.current)||void 0===o||o.removeEventListener("touchcancel",G,!1),null===(s=e.current)||void 0===s||s.removeEventListener("touchmove",q,!1),window.removeEventListener("resize",U,!1),a(!1)}),[q,J,G,z,U]),V=Object(c.useCallback)((function(){s(!0),Y.current=!1,g(!1),M.current=!0}),[]),Z=Object(c.useCallback)((function(){s(!1),Y.current=!1,g(!1),M.current=!1}),[]),$=Object(c.useCallback)((function(){D&&D.current&&e&&e.current&&D.current.clearRect(0,0,e.current.width,e.current.height)}),[]);return[{canvas:e,isReady:n,currentWidth:C,currentColor:x,isRegularMode:o,isAutoWidth:h,isEraser:O},{init:K,clear:Q,handleRegularMode:V,handleSpecialMode:Z,handleColor:function(e){w(e.currentTarget.value),T.current=e.currentTarget.value},handleWidth:function(e){E(e.currentTarget.value),W.current=e.currentTarget.value},handleClear:$,handleEraserMode:function(e){N.current=!1,f(!1),s(!0),Y.current=!0,g(!0)},setAutoWidth:function(e){var t,r;N.current=e.currentTarget.checked,f(e.currentTarget.checked),e.currentTarget.checked?E(null!==(t=null===D||void 0===D||null===(r=D.current)||void 0===r?void 0:r.lineWidth)&&void 0!==t?t:W.current):E(W.current)},setCurrentSaturation:function(e){w("hsl(".concat(F.current,",").concat(e.currentTarget.value,"%,").concat(L.current,"%)")),R.current=e.currentTarget.value},setCurrentLightness:function(e){w("hsl(".concat(F.current,",").concat(R.current,"%,").concat(e.currentTarget.value,"%)")),L.current=e.currentTarget.value}}]}(),t=Object(b.a)(e,2),r=t[0],n=r.canvas,a=r.isReady,i=Object(d.a)(r,C),o=t[1],f=o.init,g=o.clear,R=o.handleClear,L=Object(d.a)(o,E),T=Object(c.useState)(N),W=Object(b.a)(T,2),S=W[0],P=W[1],F=Object(c.useState)(!1),X=Object(b.a)(F,2),H=X[0],M=X[1],Y=Object(c.useCallback)((function(){if(n&&n.current){M(!0);var e="",t=new XMLHttpRequest;t.open("GET",n.current.toDataURL("image/jpg;base64;",.5)),t.responseType="blob",t.onload=Object(l.a)(s.a.mark((function r(){var c,n;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.response,console.log(e),(c=new FormData).append("image",e),r.prev=4,r.next=7,p.a.post(O+"/upload",c);case 7:if(!r.sent){r.next=13;break}return r.next=11,p.a.get(O+"/predict");case 11:n=r.sent,P({prediction:n.data.prediction,probability:n.data.probability,showPrediction:!0});case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(4),m.b.warn("Failed to Predict, Server Error");case 18:return r.prev=18,M(!1),r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[4,15,18,21]])}))),t.send()}}),[n]),D=Object(u.a)(Object(u.a)(Object(u.a)({},i),L),{},{handlePredict:Y,handleClear:function(){R(),P(N)}});return Object(c.useEffect)((function(){a||f()}),[a,f]),Object(c.useEffect)((function(){return g}),[g]),Object(h.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 container mx-auto",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"mb-4 text-2xl",children:"Instructions"}),Object(h.jsx)("p",{className:"text-xl",children:"Try to cover the whole canvas for better prediction."}),Object(h.jsx)("p",{className:"text-md mt-3",children:"Example:"}),Object(h.jsxs)("div",{className:"grid gird-cols-1 md:grid-cols-2 gap-2 md:gap-4",children:[Object(h.jsx)("img",{src:k,alt:"Ek"}),Object(h.jsx)("img",{src:y,alt:"Chha"}),Object(h.jsx)("img",{src:w,alt:"Cha"})]})]}),Object(h.jsxs)("div",{className:"relative flex flex-col",children:[Object(h.jsxs)("div",{className:"self-end",children:[Object(h.jsx)("p",{className:"text-xl",children:"Write here:"}),S.showPrediction&&Object(h.jsx)("div",{className:"absolute",children:Object(h.jsx)(x,{prediction:S.prediction,probability:S.probability})}),Object(h.jsx)(j,{brushWidth:i.currentWidth,brushHeight:i.currentHeight,ref:n,className:"bg-black border"}),Object(h.jsx)("div",{children:"Note: Try to cover the whole canvas for better prediction."})]}),Object(h.jsx)(v,Object(u.a)(Object(u.a)({},D),{},{loading:H,className:"p-4 self-end"}))]})]})};var L=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container mx-auto py-4",children:Object(h.jsx)("a",{href:"/",className:"text-3xl",children:"Nepali Handwriting Recognition"})}),Object(h.jsx)(R,{})]})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,49)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsxs)(n.a.StrictMode,{children:[Object(h.jsx)(L,{}),Object(h.jsx)(m.a,{hideProgressBar:!0})]}),document.getElementById("root")),T()}},[[48,1,2]]]);
//# sourceMappingURL=main.fc3eeeef.chunk.js.map