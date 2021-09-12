(this["webpackJsonphandwriting-recognition-web"]=this["webpackJsonphandwriting-recognition-web"]||[]).push([[0],{23:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),u=r(7),a=r.n(u),i=(r(23),r(24),r(3)),o=r(6),l=r(4),s=r(1),d=["brushWidth","brushHeight"],b=Object(n.forwardRef)((function(e,t){var r=e.brushWidth,n=(e.brushHeight,Object(o.a)(e,d)),c=r?r/2:0,u='url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" opacity="1" height="'.concat(r,'" viewBox="0 0 ').concat(r," ").concat(r,'" width="').concat(r,'"><circle cx="').concat(c,'" cy="').concat(c,'" r="').concat(c,'" fill="%23ffffff" /></svg>\') ').concat(c," ").concat(c,", auto");return Object(s.jsx)("canvas",Object(i.a)(Object(i.a)({},n),{},{style:Object(i.a)(Object(i.a)({},n.style),{},{cursor:u}),ref:t}))})),f=function(e){var t=e.handlePredict,r=e.handleClear,n=e.className;return Object(s.jsx)("div",{className:"".concat(n),style:{width:"500px"},children:Object(s.jsxs)("div",{className:"py-3 flex",children:[Object(s.jsx)("a",{href:"/",className:"bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 text-center my-4 rounded-full md:block mr-4 md:ml-0 flex-grow",onClick:function(e){e.preventDefault(),r()},children:"Clear"}),Object(s.jsx)("a",{className:"bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 text-center my-4  ml-4 rounded-full md:block flex-grow",onClick:function(e){e.preventDefault(),t()},href:"/",children:"Predict"})]})})},h="https://nepali-handwriting-recognition.herokuapp.com",v=r(10),j=r.n(v),O=r(5),g=function(e){var t;return Object(s.jsxs)("div",{className:"bg-white p-5 rounded-md m-3",children:[Object(s.jsx)("div",{className:"text-2xl text-gray-600",children:"Prediction"}),Object(s.jsx)("div",{className:"text-3xl md:text-6xl my-4",children:e.prediction})," ",Object(s.jsxs)("div",{className:"text-2xl text-gray-600",children:[null===(t=parseFloat(e.probability))||void 0===t?void 0:t.toPrecision(2)," %"]})]})},m=["canvas","isReady"],p=["init","clear","handleClear"],x={prediction:"",probability:"0",showPrediction:!1},w=function(){var e=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),r=Object(l.a)(t,2),c=r[0],u=r[1],a=Object(n.useState)(!0),i=Object(l.a)(a,2),o=i[0],s=i[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),f=b[0],h=b[1],v=Object(n.useState)(!1),j=Object(l.a)(v,2),O=j[0],g=j[1],m=Object(n.useState)("#ffffff"),p=Object(l.a)(m,2),x=p[0],w=p[1],C=Object(n.useState)(15),k=Object(l.a)(C,2),y=k[0],E=k[1],R=Object(n.useRef)(!1),L=Object(n.useRef)(100),T=Object(n.useRef)(10),W=Object(n.useRef)("#ffffff"),N=Object(n.useRef)(15),S=Object(n.useRef)(0),P=Object(n.useRef)(0),F=Object(n.useRef)(0),X=Object(n.useRef)(!1),H=Object(n.useRef)(!0),M=Object(n.useRef)(!0),Y=Object(n.useRef)(!1),D=Object(n.useRef)(),B=Object(n.useCallback)((function(e){if(console.log("drawing"),D&&D.current)if(D.current.beginPath(),D.current.moveTo(S.current,P.current),e instanceof TouchEvent?D.current.lineTo(e.touches[0].clientX,e.touches[0].clientY):D.current.lineTo(e.offsetX,e.offsetY),D.current.stroke(),e instanceof TouchEvent){var t=[e.touches[0].clientX,e.touches[0].clientY];S.current=t[0],P.current=t[1]}else{var r=[e.offsetX,e.offsetY];S.current=r[0],P.current=r[1]}}),[]),J=Object(n.useCallback)((function(e,t){X.current=!0;var r=[e,t];S.current=r[0],P.current=r[1]}),[]),z=Object(n.useCallback)((function(e){X.current=!0,J(e.offsetX,e.offsetY)}),[J]),A=Object(n.useCallback)((function(e){X.current=!0,J(e.touches[0].clientX,e.touches[0].clientY)}),[J]),I=Object(n.useCallback)((function(){D&&D.current&&((D.current.lineWidth>90||D.current.lineWidth<10)&&(H.current=!H.current),H.current?D.current.lineWidth++:D.current.lineWidth--,E(D.current.lineWidth))}),[]),q=Object(n.useCallback)((function(e){X.current&&D.current&&(M.current||Y.current?(D.current.strokeStyle=W.current,w(W.current),R.current&&!Y.current?I():D.current.lineWidth=N.current,Y.current?D.current.globalCompositeOperation="destination-out":D.current.globalCompositeOperation="source-over"):(w("hsl(".concat(F.current,",").concat(L.current,"%,").concat(T.current,"%)")),D.current.strokeStyle="hsl(".concat(F.current,",").concat(L.current,"%,").concat(T.current,"%)"),D.current.globalCompositeOperation="source-over",F.current++,F.current>=360&&(F.current=0),R.current?I():D.current.lineWidth=N.current),B(e))}),[B,I]),G=Object(n.useCallback)((function(){X.current=!1}),[]),U=Object(n.useCallback)((function(){e&&e.current&&(e.current.width=500,e.current.height=500)}),[]),K=Object(n.useCallback)((function(){var t;D.current=null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getContext("2d"),e&&e.current&&D&&D.current&&!c&&(console.log("create"),e.current.addEventListener("mousedown",z,!1),e.current.addEventListener("mousemove",q,!1),e.current.addEventListener("mouseup",G,!1),e.current.addEventListener("mouseout",G,!1),e.current.addEventListener("touchstart",A,!1),e.current.addEventListener("touchend",G,!1),e.current.addEventListener("touchcancel",G,!1),e.current.addEventListener("touchmove",q,!1),window.addEventListener("resize",U,!1),U(),D.current.strokeStyle="#000",D.current.lineJoin="round",D.current.lineCap="round",D.current.lineWidth=10,D.current.fillStyle="black",D.current.fillRect(0,0,e.current.width,e.current.height),u(!0))}),[q,z,G,A,c,U]),Q=Object(n.useCallback)((function(){var t,r,n,c,a,i,o,l;console.log("clear"),null===(t=e.current)||void 0===t||t.removeEventListener("mousedown",z,!1),null===(r=e.current)||void 0===r||r.removeEventListener("mousemove",q,!1),null===(n=e.current)||void 0===n||n.removeEventListener("mouseup",G,!1),null===(c=e.current)||void 0===c||c.removeEventListener("mouseout",G,!1),null===(a=e.current)||void 0===a||a.removeEventListener("touchstart",A,!1),null===(i=e.current)||void 0===i||i.removeEventListener("touchend",G,!1),null===(o=e.current)||void 0===o||o.removeEventListener("touchcancel",G,!1),null===(l=e.current)||void 0===l||l.removeEventListener("touchmove",q,!1),window.removeEventListener("resize",U,!1),u(!1)}),[q,z,G,A,U]),V=Object(n.useCallback)((function(){s(!0),Y.current=!1,g(!1),M.current=!0}),[]),Z=Object(n.useCallback)((function(){s(!1),Y.current=!1,g(!1),M.current=!1}),[]),$=Object(n.useCallback)((function(){D&&D.current&&e&&e.current&&D.current.clearRect(0,0,e.current.width,e.current.height)}),[]);return[{canvas:e,isReady:c,currentWidth:y,currentColor:x,isRegularMode:o,isAutoWidth:f,isEraser:O},{init:K,clear:Q,handleRegularMode:V,handleSpecialMode:Z,handleColor:function(e){w(e.currentTarget.value),W.current=e.currentTarget.value},handleWidth:function(e){E(e.currentTarget.value),N.current=e.currentTarget.value},handleClear:$,handleEraserMode:function(e){R.current=!1,h(!1),s(!0),Y.current=!0,g(!0)},setAutoWidth:function(e){var t,r;R.current=e.currentTarget.checked,h(e.currentTarget.checked),e.currentTarget.checked?E(null!==(t=null===D||void 0===D||null===(r=D.current)||void 0===r?void 0:r.lineWidth)&&void 0!==t?t:N.current):E(N.current)},setCurrentSaturation:function(e){w("hsl(".concat(F.current,",").concat(e.currentTarget.value,"%,").concat(T.current,"%)")),L.current=e.currentTarget.value},setCurrentLightness:function(e){w("hsl(".concat(F.current,",").concat(L.current,"%,").concat(e.currentTarget.value,"%)")),T.current=e.currentTarget.value}}]}(),t=Object(l.a)(e,2),r=t[0],c=r.canvas,u=r.isReady,a=Object(o.a)(r,m),d=t[1],v=d.init,w=d.clear,C=d.handleClear,k=Object(o.a)(d,p),y=Object(n.useState)(x),E=Object(l.a)(y,2),R=E[0],L=E[1],T=Object(n.useCallback)((function(){if(c&&c.current){var e="",t=new XMLHttpRequest;t.open("GET",c.current.toDataURL("image/jpg;base64;",.5)),t.responseType="blob",t.onload=function(){e=t.response,console.log(e);var r=new FormData;r.append("image",e),j.a.post(h+"/upload",r).then((function(e){e&&j.a.get(h+"/predict").then((function(e){return L({prediction:e.data.prediction,probability:e.data.probability,showPrediction:!0})})).catch((function(){O.b.warn("Failed to predict")}))})).catch((function(){O.b.warn("Failed to upload image")}))},t.send()}}),[c]),W=Object(i.a)(Object(i.a)(Object(i.a)({},a),k),{},{handlePredict:T,handleClear:function(){C(),L(x)}});return Object(n.useEffect)((function(){u||v()}),[u,v]),Object(n.useEffect)((function(){return w}),[w]),Object(s.jsxs)("div",{className:"relative mx-auto w-3/6 flex flex-col",children:[Object(s.jsxs)("div",{className:"self-center",children:[Object(s.jsx)("p",{className:"my-4 text-3xl",children:"Nepali Handwriting Recognition"}),R.showPrediction&&Object(s.jsx)("div",{className:"absolute",children:Object(s.jsx)(g,{prediction:R.prediction,probability:R.probability})}),Object(s.jsx)(b,{brushWidth:a.currentWidth,brushHeight:a.currentHeight,ref:c,className:"bg-black border"})]}),Object(s.jsx)(f,Object(i.a)(Object(i.a)({},W),{},{className:"p-4 self-center"}))]})};var C=function(){return Object(s.jsx)(w,{})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,u=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),u(e),a(e)}))};a.a.render(Object(s.jsxs)(c.a.StrictMode,{children:[Object(s.jsx)(C,{}),Object(s.jsx)(O.a,{hideProgressBar:!0})]}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.e084aef8.chunk.js.map