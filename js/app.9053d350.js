(function(e){function n(n){for(var r,a,i=n[0],c=n[1],s=n[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var l=c;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"01e6":function(e,n,t){},"034f":function(e,n,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},u=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[e._l(e.msgs,(function(n,r){return t("div",{key:r},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.value,expression:"msg.value"}],attrs:{size:"40"},domProps:{value:n.value},on:{input:function(t){t.target.composing||e.$set(n,"value",t.target.value)}}})])})),t("div",[t("button",{on:{click:e.addMsg}},[e._v("Add Msg")]),t("button",{on:{click:e.addUuid}},[e._v("Add uuid")])]),t("button",{on:{click:e.genQr}},[e._v("Gen QR")]),t("button",{on:{click:e.genPdf}},[e._v("Gen PDF")])],2)},i=[],c=(t("4160"),t("159b"),t("e511")),s=t("d055"),l=t.n(s),f=t("c64e"),d={name:"HelloWorld",props:{msg:String},data:function(){return{msgs:[],qrs:[]}},created:function(){},methods:{genQr:function(){var e=this;this.qrs=[],this.msgs.forEach((function(n){l.a.toDataURL(n.value,(function(t,r){e.qrs.push({msg:n.value,url:r})}))}))},genPdf:function(){var e=new c;e.setFontSize(8);var n=20,t=20,r=20,o=!0;this.qrs.forEach((function(u){e.addImage(u.url,"PNG",t,r,n,n),e.text(u.msg,t,r+n+5),o?(o=!1,t=100):(o=!0,t=20,r+=50)})),e.save("qr.pdf")},addMsg:function(){this.msgs.push({value:""})},addUuid:function(){this.msgs.push({value:f()})}}},p=d,v=(t("b8ce"),t("2877")),g=Object(v["a"])(p,a,i,!1,null,"104bda13",null),h=g.exports,b={name:"app",components:{HelloWorld:h}},m=b,y=(t("034f"),Object(v["a"])(m,o,u,!1,null,null,null)),_=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,n,t){},b8ce:function(e,n,t){"use strict";var r=t("01e6"),o=t.n(r);o.a}});
//# sourceMappingURL=app.9053d350.js.map