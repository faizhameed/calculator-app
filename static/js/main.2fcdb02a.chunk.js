(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(31)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=(a(17),a(18),a(19),a(20),a(2)),o="ADD_TO_INPUT",u="SOLUTION_OUTPUT",s="CLEAR_OUTPUT",m="PLUS_MINUS_CLICKED",p=Object(i.b)((function(e){return{}}),(function(e){return{addToInput:function(t){return e(function(e){return{type:o,payload:e}}(t))},clearOutput:function(){return e({type:s})},plusMinusClick:function(){return e({type:m})}}}))((function(e){var t=e.children,a=e.end,n=e.addToInput,r=e.operator,c=e.clearOutput,i=e.plusMinusClick;return l.a.createElement("div",{className:"btn ".concat(a?"btn-2":null),onClick:function(){return function(){if(r)switch(r){case"C":c();break;case"pl-mi":i();break;default:n(r)}else n(t)}()}},t)})),f=(a(28),Object(i.b)((function(e){var t=e.inputReducer;return{inputItems:t.inputItems,solution:t.solution}}))((function(e){var t=e.inputItems,a=e.solution;return l.a.createElement("div",{className:"cal-display"},l.a.createElement("p",{className:"valuation"},t),l.a.createElement("p",{className:"solution"},a))}))),d=a(3);var E=function(e){var t=e.fill;return n.createElement("svg",{className:"calc-op-icons",fill:t,"data-name":"Layer 1",viewBox:"0 0 100 100"},n.createElement("defs",null,n.createElement("style",null,".prefix__cls-1{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.24px}")),n.createElement("title",null,"Calculator Symbols"),n.createElement("path",{className:"prefix__cls-1",d:"M63.63 43.56H36.37M63.63 56.44H36.37"}))},v=(a(29),Object(i.b)((function(e){var t=e.inputReducer,a=t.inputItems;t.solution;return{inputItems:a}}),(function(e){return{calculatedSolution:function(t){return e({type:u,payload:t})}}}))((function(e){var t=e.inputItems,a=e.calculatedSolution;function n(e,t,a){switch(t=parseFloat(t),a=parseFloat(a),e){case"+":return t+a;case"-":return t-a;case"*":return t*a;case"/":return t/a;default:return null}}return l.a.createElement("div",{className:"equal-btn btn",onClick:function(){a(function(e){for(var a=Object(d.a)(e),l=a.indexOf("%");l>-1;){if(!a[l-1])return NaN;a[l-1]/=100,a.splice(l,1),l=a.indexOf("%")}for(var r=["*","/","+","-"],c=0;c<r.length;){for(var i=0;i<a.length;i++){var o=0;if(a[i]===r[c]){var u=a[i-1],s=a[i+1];o=n(r[c],u,s);var m=a.indexOf(u);m>-1&&a.splice(m,1),(m=a.indexOf(s))>-1&&a.splice(m,1),(m=a.indexOf(r[c]))>-1&&(a[m]=o,i--)}}c++}return t?Number(parseFloat(a[0]).toFixed(8)):0}(t))}},l.a.createElement(E,null))})));var b=function(e){var t=e.fill;return n.createElement("svg",{className:"calc-op-icons",fill:t,"data-name":"Layer 1",viewBox:"0 0 100 100"},n.createElement("title",null,"Calculator Symbols"),n.createElement("path",{d:"M43.05 33.42h-3.48A2.42 2.42 0 0137.15 31v-3.48a2.94 2.94 0 00-2.68-3 2.83 2.83 0 00-3 2.83V31a2.42 2.42 0 01-2.42 2.42h-3.47a2.94 2.94 0 00-3 2.68 2.83 2.83 0 002.83 3h3.64a2.42 2.42 0 012.42 2.42V45a2.94 2.94 0 002.68 3 2.83 2.83 0 003-2.83V41.5a2.42 2.42 0 012.42-2.42h3.64a2.83 2.83 0 002.83-3 2.94 2.94 0 00-2.99-2.66zM74.42 62.44H56.95a2.94 2.94 0 00-3 2.68 2.83 2.83 0 002.83 3h17.8a2.83 2.83 0 002.83-3 2.94 2.94 0 00-2.99-2.68z"}),n.createElement("path",{strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:4.78,d:"M68.66 25.31L31.34 77.04"}))};var h=function(e){var t=e.fill;return n.createElement("svg",{fill:t,className:"calc-op-icons","data-name":"Layer 1",viewBox:"0 0 100 100"},n.createElement("defs",null,n.createElement("style",null,".prefix__cls-2{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:4.96px}")),n.createElement("title",null,"Calculator Symbols"),n.createElement("path",{strokeWidth:4.78,fill:"none",strokeLinecap:"round",strokeMiterlimit:10,d:"M68.66 25.13L31.34 76.87"}),n.createElement("ellipse",{className:"prefix__cls-2",cx:35.66,cy:31.71,rx:6.14,ry:6.62}),n.createElement("ellipse",{className:"prefix__cls-2",cx:64.34,cy:69.94,rx:6.14,ry:6.62}))};var N=function(e){var t=e.fill;return n.createElement("svg",{className:"calc-op-icons",fill:t,"data-name":"Layer 1",viewBox:"0 0 100 100"},n.createElement("title",null,"Calculator Symbols"),n.createElement("path",{fill:"none",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:6.24,d:"M67.89 50H32.11"}),n.createElement("circle",{cx:50,cy:34.22,r:5.46}),n.createElement("circle",{cx:50,cy:65.78,r:5.46}))};var y=function(e){var t=e.fill;return n.createElement("svg",{className:"calc-op-icons","data-name":"Layer 1",fill:t,viewBox:"0 0 100 100"},n.createElement("title",null,"Calculator Symbols"),n.createElement("path",{d:"M64.4 47.17h-9.15a2.42 2.42 0 01-2.42-2.42V35.6a2.94 2.94 0 00-2.68-3 2.83 2.83 0 00-3 2.83v9.31a2.42 2.42 0 01-2.42 2.42H35.6a2.94 2.94 0 00-3 2.68 2.83 2.83 0 002.83 3h9.31a2.42 2.42 0 012.42 2.42v9.14a2.94 2.94 0 002.68 3 2.83 2.83 0 003-2.83v-9.32a2.42 2.42 0 012.42-2.42h9.31a2.83 2.83 0 002.83-3 2.94 2.94 0 00-3-2.66z"}))};var I=function(e){var t=e.fill;return n.createElement("svg",{className:"calc-op-icons",fill:t,"data-name":"Layer 1",viewBox:"0 0 100 100"},n.createElement("title",null,"Calculator Symbols"),n.createElement("path",{d:"M35.44 52.83a2.83 2.83 0 01-2.83-3 2.94 2.94 0 013-2.68H64.4a2.94 2.94 0 013 2.68 2.83 2.83 0 01-2.83 3z"}))};var O=function(e){var t=e.fill;return n.createElement("svg",{className:"calc-op-icons",fill:t,"data-name":"Layer 1",viewBox:"0 0 100 100"},n.createElement("title",null,"Calculator Symbols"),n.createElement("path",{d:"M62.21 58.18l-6.47-6.47a2.42 2.42 0 010-3.42l6.47-6.47a2.94 2.94 0 00.22-4 2.83 2.83 0 00-4.11-.11l-6.58 6.58a2.42 2.42 0 01-3.42 0l-6.47-6.47a2.94 2.94 0 00-4-.22 2.83 2.83 0 00-.11 4.11l6.58 6.58a2.42 2.42 0 010 3.42l-6.47 6.47a2.94 2.94 0 00-.22 4 2.83 2.83 0 004.11.11l6.58-6.58a2.42 2.42 0 013.42 0l6.58 6.58a2.83 2.83 0 004.11-.11 2.94 2.94 0 00-.22-4z"}))},w=function(e){return l.a.createElement("div",{className:"cal-full"},l.a.createElement("div",{className:"calc-wrapper"},l.a.createElement("div",{className:"ip-container"},l.a.createElement(f,null)),l.a.createElement("div",{className:"row"},l.a.createElement(p,{operator:"C"},"C"),l.a.createElement(p,{operator:"pl-mi"},l.a.createElement(b,null)),l.a.createElement(p,{operator:"%"},l.a.createElement(h,null)),l.a.createElement(p,{operator:"/",end:!0},l.a.createElement(N,null))),l.a.createElement("div",{className:"row"},l.a.createElement(p,null,"7"),l.a.createElement(p,null,"8"),l.a.createElement(p,null,"9"),l.a.createElement(p,{operator:"*",end:!0},l.a.createElement(O,null))),l.a.createElement("div",{className:"row"},l.a.createElement(p,null,"4"),l.a.createElement(p,null,"5"),l.a.createElement(p,null,"6"),l.a.createElement(p,{operator:"-",end:!0},l.a.createElement(I,null))),l.a.createElement("div",{className:"row"},l.a.createElement(p,null,"1"),l.a.createElement(p,null,"2"),l.a.createElement(p,null,"3"),l.a.createElement(p,{operator:"+",end:!0},l.a.createElement(y,null))),l.a.createElement("div",{className:"row"},l.a.createElement(p,null,"0"),l.a.createElement(p,null,"."),l.a.createElement(v,null))))};var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null))},k=a(4),j=(a(30),a(1)),g={inputItems:"",solution:0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case o:if(isNaN(n)&&"."!==n){switch(n){case"-":if(!e.inputItems)return Object(j.a)({},e,{inputItems:["0","-"]});break;case"+":if(!e.inputItems)return Object(j.a)({},e,{inputItems:["0","+"]})}return Object(j.a)({},e,{inputItems:[].concat(Object(d.a)(e.inputItems),[n])})}if("."===n&&!e.inputItems)return Object(j.a)({},e,{inputItems:["0."]});if("."===n&&isNaN(e.inputItems.slice(-1)[0]))return Object(j.a)({},e,{inputItems:[].concat(Object(d.a)(e.inputItems),["0."])});if(e.inputItems.length>=1&&!isNaN(e.inputItems.slice(-1)[0])){var l=Object(d.a)(e.inputItems),r=l.pop();return r+=n,Object(j.a)({},e,{inputItems:[].concat(Object(d.a)(l),[r])})}return Object(j.a)({},e,{inputItems:[].concat(Object(d.a)(e.inputItems),[n])});case u:return Object(j.a)({},e,{inputItems:"",solution:n});case s:return Object(j.a)({},e,{inputItems:"",solution:0});case m:var c=-1*e.solution;return Object(j.a)({},e,{inputItems:[c].concat()});default:return e}},L=Object(k.c)({inputReducer:C});var M=Object(k.d)(L,k.a.apply(void 0,[]));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,{store:M},l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2fcdb02a.chunk.js.map