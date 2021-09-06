(this["webpackJsonphandwriting-recognition-web"]=this["webpackJsonphandwriting-recognition-web"]||[]).push([[0],{23:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),u=r(7),a=r.n(u),o=(r(23),r(24),r(3)),i=r(6),l=r(4),s=r(1),d=["width"],b=Object(n.forwardRef)((function(e,t){var r=e.width,n=Object(i.a)(e,d),c=r?r/2:0,u='url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" opacity="1" height="'.concat(r,'" viewBox="0 0 ').concat(r," ").concat(r,'" width="').concat(r,'"><circle cx="').concat(c,'" cy="').concat(c,'" r="').concat(c,'" fill="%23ffffff" /></svg>\') ').concat(c," ").concat(c,", auto");return Object(s.jsx)("canvas",Object(o.a)(Object(o.a)({},n),{},{style:Object(o.a)(Object(o.a)({},n.style),{},{cursor:u}),ref:t}))})),f=function(e){var t=e.handlePredict,r=e.handleClear,n=e.className;return Object(s.jsx)("div",{className:"".concat(n," bottom-0"),children:Object(s.jsxs)("div",{className:"py-3",children:[Object(s.jsx)("a",{className:"bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 text-center rounded-full md:block",onClick:function(e){e.preventDefault(),t()},href:"/",children:"Predict"}),Object(s.jsx)("a",{href:"/",className:"bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 text-center my-4 rounded-full md:block ml-4 md:ml-0",onClick:function(e){e.preventDefault(),r()},children:"Clear"})]})})},h=r(10),v=r.n(h),j=r(5),O=["canvas","isReady"],g=["init","clear"],m=function(){var e=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),r=Object(l.a)(t,2),c=r[0],u=r[1],a=Object(n.useState)(!0),o=Object(l.a)(a,2),i=o[0],s=o[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),f=b[0],h=b[1],v=Object(n.useState)(!1),j=Object(l.a)(v,2),O=j[0],g=j[1],m=Object(n.useState)("#ffffff"),p=Object(l.a)(m,2),w=p[0],C=p[1],k=Object(n.useState)(10),E=Object(l.a)(k,2),x=E[0],L=E[1],R=Object(n.useRef)(!1),y=Object(n.useRef)(100),T=Object(n.useRef)(10),S=Object(n.useRef)("#ffffff"),W=Object(n.useRef)(10),P=Object(n.useRef)(0),N=Object(n.useRef)(0),F=Object(n.useRef)(0),X=Object(n.useRef)(!1),M=Object(n.useRef)(!0),Y=Object(n.useRef)(!0),D=Object(n.useRef)(!1),B=Object(n.useRef)(),J=Object(n.useCallback)((function(e){if(console.log("drawing"),B&&B.current)if(B.current.beginPath(),B.current.moveTo(P.current,N.current),e instanceof TouchEvent?B.current.lineTo(e.touches[0].clientX,e.touches[0].clientY):B.current.lineTo(e.offsetX,e.offsetY),B.current.stroke(),e instanceof TouchEvent){var t=[e.touches[0].clientX,e.touches[0].clientY];P.current=t[0],N.current=t[1]}else{var r=[e.offsetX,e.offsetY];P.current=r[0],N.current=r[1]}}),[]),z=Object(n.useCallback)((function(e,t){X.current=!0;var r=[e,t];P.current=r[0],N.current=r[1]}),[]),A=Object(n.useCallback)((function(e){X.current=!0,z(e.offsetX,e.offsetY)}),[z]),H=Object(n.useCallback)((function(e){X.current=!0,z(e.touches[0].clientX,e.touches[0].clientY)}),[z]),I=Object(n.useCallback)((function(){B&&B.current&&((B.current.lineWidth>90||B.current.lineWidth<10)&&(M.current=!M.current),M.current?B.current.lineWidth++:B.current.lineWidth--,L(B.current.lineWidth))}),[]),q=Object(n.useCallback)((function(e){X.current&&B.current&&(Y.current||D.current?(B.current.strokeStyle=S.current,C(S.current),R.current&&!D.current?I():B.current.lineWidth=W.current,D.current?B.current.globalCompositeOperation="destination-out":B.current.globalCompositeOperation="source-over"):(C("hsl(".concat(F.current,",").concat(y.current,"%,").concat(T.current,"%)")),B.current.strokeStyle="hsl(".concat(F.current,",").concat(y.current,"%,").concat(T.current,"%)"),B.current.globalCompositeOperation="source-over",F.current++,F.current>=360&&(F.current=0),R.current?I():B.current.lineWidth=W.current),J(e))}),[J,I]),G=Object(n.useCallback)((function(){X.current=!1}),[]),U=Object(n.useCallback)((function(){e&&e.current&&(e.current.width=window.innerWidth,e.current.height=window.innerHeight)}),[]),K=Object(n.useCallback)((function(){var t;B.current=null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getContext("2d"),e&&e.current&&B&&B.current&&!c&&(console.log("create"),e.current.addEventListener("mousedown",A,!1),e.current.addEventListener("mousemove",q,!1),e.current.addEventListener("mouseup",G,!1),e.current.addEventListener("mouseout",G,!1),e.current.addEventListener("touchstart",H,!1),e.current.addEventListener("touchend",G,!1),e.current.addEventListener("touchcancel",G,!1),e.current.addEventListener("touchmove",q,!1),window.addEventListener("resize",U,!1),U(),B.current.strokeStyle="#000",B.current.lineJoin="round",B.current.lineCap="round",B.current.lineWidth=10,u(!0))}),[q,A,G,H,c,U]),Q=Object(n.useCallback)((function(){var t,r,n,c,a,o,i,l;console.log("clear"),null===(t=e.current)||void 0===t||t.removeEventListener("mousedown",A,!1),null===(r=e.current)||void 0===r||r.removeEventListener("mousemove",q,!1),null===(n=e.current)||void 0===n||n.removeEventListener("mouseup",G,!1),null===(c=e.current)||void 0===c||c.removeEventListener("mouseout",G,!1),null===(a=e.current)||void 0===a||a.removeEventListener("touchstart",H,!1),null===(o=e.current)||void 0===o||o.removeEventListener("touchend",G,!1),null===(i=e.current)||void 0===i||i.removeEventListener("touchcancel",G,!1),null===(l=e.current)||void 0===l||l.removeEventListener("touchmove",q,!1),window.removeEventListener("resize",U,!1),u(!1)}),[q,A,G,H,U]),V=Object(n.useCallback)((function(){s(!0),D.current=!1,g(!1),Y.current=!0}),[]),Z=Object(n.useCallback)((function(){s(!1),D.current=!1,g(!1),Y.current=!1}),[]),$=Object(n.useCallback)((function(){B&&B.current&&e&&e.current&&B.current.clearRect(0,0,e.current.width,e.current.height)}),[]);return[{canvas:e,isReady:c,currentWidth:x,currentColor:w,isRegularMode:i,isAutoWidth:f,isEraser:O},{init:K,clear:Q,handleRegularMode:V,handleSpecialMode:Z,handleColor:function(e){C(e.currentTarget.value),S.current=e.currentTarget.value},handleWidth:function(e){L(e.currentTarget.value),W.current=e.currentTarget.value},handleClear:$,handleEraserMode:function(e){R.current=!1,h(!1),s(!0),D.current=!0,g(!0)},setAutoWidth:function(e){var t,r;R.current=e.currentTarget.checked,h(e.currentTarget.checked),e.currentTarget.checked?L(null!==(t=null===B||void 0===B||null===(r=B.current)||void 0===r?void 0:r.lineWidth)&&void 0!==t?t:W.current):L(W.current)},setCurrentSaturation:function(e){C("hsl(".concat(F.current,",").concat(e.currentTarget.value,"%,").concat(T.current,"%)")),y.current=e.currentTarget.value},setCurrentLightness:function(e){C("hsl(".concat(F.current,",").concat(y.current,"%,").concat(e.currentTarget.value,"%)")),T.current=e.currentTarget.value}}]}(),t=Object(l.a)(e,2),r=t[0],c=r.canvas,u=r.isReady,a=Object(i.a)(r,O),d=t[1],h=d.init,m=d.clear,p=Object(i.a)(d,g),w=Object(n.useState)({prediction:"",probability:0,showPrediction:!1}),C=Object(l.a)(w,2),k=C[0],E=C[1],x=Object(n.useCallback)((function(){if(c&&c.current){var e="",t=new XMLHttpRequest;t.open("GET",c.current.toDataURL("image/jpg;base64;",.5)),t.responseType="blob",t.onload=function(){e=t.response,console.log(e);var r=new FormData;r.append("image",e),v.a.post("/upload",r).then((function(e){e&&v.a.get("/predict").then((function(e){return E({prediction:e.data.prediction,probability:e.data.probability,showPrediction:!0})})).catch((function(){j.b.warn("Failed to predict")}))})).catch((function(){j.b.warn("Failed to upload image")}))},t.send()}}),[c]),L=Object(o.a)(Object(o.a)(Object(o.a)({},a),p),{},{handlePredict:x});return Object(n.useEffect)((function(){u||h()}),[u,h]),Object(n.useEffect)((function(){return m}),[m]),Object(s.jsxs)(s.Fragment,{children:[k.showPrediction&&Object(s.jsx)("div",{className:"absolute",children:JSON.stringify(k)}),Object(s.jsx)(f,Object(o.a)(Object(o.a)({},L),{},{className:"w-full p-4 absolute bg-black"})),Object(s.jsx)(b,{width:a.currentWidth,ref:c,className:"h-screen w-screen bg-black"})]})};var p=function(){return Object(s.jsx)(m,{})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,u=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),u(e),a(e)}))};a.a.render(Object(s.jsxs)(c.a.StrictMode,{children:[Object(s.jsx)(p,{}),Object(s.jsx)(j.a,{hideProgressBar:!0})]}),document.getElementById("root")),w()}},[[45,1,2]]]);
//# sourceMappingURL=main.50bc4a62.chunk.js.map