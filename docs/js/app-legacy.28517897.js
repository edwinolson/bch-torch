(function(t){function e(e){for(var a,s,c=e[0],o=e[1],d=e[2],u=0,b=[];u<c.length;u++)s=c[u],r[s]&&b.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(b.length)b.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,c=1;c<i.length;c++){var o=i[c];0!==r[o]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},r={app:0},n=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("64a9"),r=i.n(a);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),i("section",{attrs:{id:"trail"}},t._l(t.trail,function(e,a){return i("div",{key:e.id,class:{genesis:a==t.trail.length-1,last:0==a}},[i("div",{staticClass:"count"},[t._v(t._s(t.trail.length-a))]),i("div",{staticClass:"time"},[i("span",{attrs:{title:t._f("timelocale")(e.time)}},[t._v(t._s(t._f("timeago")(e.time)))])]),i("div",{staticClass:"tx"},[i("a",{attrs:{href:"https://explorer.bitcoin.com/bch/tx/"+e.id}},[t._v(t._s(t._f("tx")(e.id)))])]),i("who",{attrs:{legacy:e.to}})],1)}))])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"header"}},[i("h1",[t._v("The Bitcoin Cash Torch")]),i("p",[t._v("Follow the trail of the first (and only) Bitcoin Cash torch.")])])}],s=i("f499"),c=i.n(s),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"who"},[t.isTwitter?i("span",{staticClass:"twitter"},[i("a",{attrs:{href:t.details.twitter}},[t._v(t._s(t._f("twitteruser")(t.details.twitter)))])]):t._e(),t.isReddit?i("span",{staticClass:"reddit"},[i("a",{attrs:{href:t.details.reddit}},[t._v(t._s(t._f("reddituser")(t.details.reddit)))])]):t._e(),t.isLegacy?i("span",{staticClass:"address"},[i("a",{attrs:{href:t._f("linkaddress")(t.address)}},[t._v(t._s(t._f("toslpaddr")(t.address)))])]):t._e()])},d=[],f=(i("a481"),i("4917"),{"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8":{twitter:"https://twitter.com/LeeFlemingster/status/1103568864451932160"},"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2":{twitter:"https://twitter.com/EmergentReasons/status/1103452941518700546"},"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV":{twitter:"https://twitter.com/zquestz/status/1103456473244418054"},"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8":{twitter:"https://twitter.com/CollinEnstad/status/1103459641248411649"},"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D":{twitter:"https://twitter.com/Don_wonton/status/1103523885381750784"},"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK":{twitter:"https://twitter.com/rob_mose/status/1103531856874496000"},"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb":{twitter:"https://twitter.com/im_uname/status/1103534771810951168"},"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6":{twitter:"https://twitter.com/JettScythe/status/1103537308286898176"},"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8":{twitter:"https://twitter.com/Wecx_/status/1103547584952512512"},"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo":{twitter:"https://twitter.com/paOolCoin/status/1103556037016092672"},"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS":{twitter:"https://twitter.com/Anthony05064687"},"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho":{twitter:"https://twitter.com/Klakurka/status/1103680413266927621"},"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C":{twitter:"https://twitter.com/DavidShares/status/1103688119696703488"},"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u":{twitter:"https://twitter.com/maplesyrupsuckr/status/1103949693455749121"},"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ":{twitter:"https://twitter.com/BionicHacker/status/1103612969361977344"},"1AAibNCh7kxVZNhUuRGJjEGH2jkpnR2sw7":{twitter:"https://twitter.com/rogerkver"}}),u=i("ac3e"),b=i.n(u),l={name:"who",props:{legacy:String,cashaddr:String},data:function(){return{address:this.cashaddr||this.legacy,details:f[this.legacy]}},computed:{isTwitter:function(){return this.details&&!!this.details.twitter},isReddit:function(){return this.details&&!!this.details.reddit},isLegacy:function(){return null==this.details}},filters:{twitteruser:function(t){var e=t.match(/twitter.com\/([^\/]+)/);return e?"@"+e[1]:t},reddituser:function(t){var e=t.match(/reddit.com\/([^\/]+\/[^\/]+)/);return e?"/"+e[1]:t},linkaddress:function(t){return"https://explorer.bitcoin.com/bch/address/"+b.a.toCashAddress(t)},toslpaddr:function(t){return b.a.toSlpAddress(t).replace("simpleledger:","")}}},p=l,h=i("2877"),m=Object(h["a"])(p,o,d,!1,null,null,null),w=m.exports,v=[{id:"8bcb285d6ac7e53f8842219f9f8e0d32271ac8385ba73bbed81d95e00f46bc8c",vout:1,time:1551975340,to:"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u"},{id:"d3fe0d314c454a8280987cbfb984830a6d8f061a4e3cf347798c9938042d080e",vout:1,time:1551972883,to:"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C"},{id:"8bdefa85e6b9e1f1d8b46404ce311bd4c0c464cfa1c1b6d5b75813faccb90390",vout:1,time:1551959271,to:"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho"},{id:"f5cef9b8bfeb83fd3debe4955b0eeaf170d8cb272a83831a855556f5266309d1",vout:1,time:1551956754,to:"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT"},{id:"cddc0c3a87d511299e3bcc457dbb9076df7d73c2daffba90b3160acdce007889",vout:1,time:1551951950,to:"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ"},{id:"8c688cae1a8a975c4d0fe1eae55508ddc30ea2ffdb09929c811fe247c16437d9",vout:1,time:1551950332,to:"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD"},{id:"a5bb8e4540364caeaa961f91babbefa65975c6fce01d6f174e6313eb89623528",vout:1,time:1551950332,to:"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS"},{id:"c094e8527f2e87ec726637debf096d4d96db21ec3abe725ee1751252495356ff",vout:1,time:1551941264,to:"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo"},{id:"4e53d9dd370b39f9937d07a524fbe7f95b7cfd8c56407269c331fcadafed5512",vout:2,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"b91e30e68f8a046841e6052d43b2240df67a2e2890d1000fbcb1e7e01dcc0d92",vout:1,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"d0a8fe68ca5b42d30bfba96d8f37a6e1d5fbd2e1f21c33264985ea7ad9728301",vout:1,time:1551940456,to:"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6"},{id:"e45265c4c2b7eac4060ec1b9d5233eaae69cdd82a6e25a6ab9cb2f89f96481ee",vout:1,time:1551937487,to:"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb"},{id:"aaa0a898a0608768ab617d6732315b212811fdb62b7c9bdf0dc8c22ac3a82747",vout:1,time:1551935998,to:"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK"},{id:"e14f7d842ac7af1de2053c943432b3ed1799e58239658354f3dc80ec681b476c",vout:2,time:1551934483,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"ca0963cb32dee18f2bd36c0ce1769a089801e23bd7877967099b798f3609e986",vout:1,time:1551933056,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"5630e76beaca881b24b2e10fc87144e6615a2946b50ffaab286c658ec31a0b15",vout:1,time:1551920200,to:"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8"},{id:"2cf6ad0ab81859d77a4486b9fec1f0deff8ded5db3bbf678b72d4b05b8c6c118",vout:1,time:1551918586,to:"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV"},{id:"bf60bf117f45266bf8c67d9a5ec11fe0727b12c2447bb968f0885129d942ada7",vout:1,time:1551899820,to:"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2"},{id:"49be89bbbe018bcfaebcb41cac8340bc555f022b47b922599e510b143603f4b6",vout:1,time:1551898616,to:"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8"}],y=i("0fec"),_=i("7d1a"),k=i.n(_),x=i("bc3a"),L=i.n(x),g=i("d225"),S=i("b0b4"),M=i("8055"),C=i.n(M),j={baseURL:"https://rest.bitcoin.com"},N=function(){function t(){var e=this;Object(g["a"])(this,t),this._socket=C()(j.baseURL),this._socket.on("disconnect",function(t){return e.disconnected(t)})}return Object(S["a"])(t,[{key:"onTransaction",value:function(t){this._socket.on("transactions",function(e){t(JSON.parse(e))})}},{key:"onBlock",value:function(t){this._socket.on("blocks",function(e){t(JSON.parse(e))})}},{key:"disconnected",value:function(t){"io server disconnect"===t&&this._socket.connect()}}]),t}();y["a"].addLocale(k.a);var G=new y["a"]("en-US"),T={name:"app",data:function(){return{trail:v}},components:{who:w},mounted:function(){this.start()},methods:{last:function(){return this.trail[0]},start:function(){function t(){this.trail&&this.trail.length&&(window._trail=JSON.parse(c()(this.trail)))}this.socket=new N,this.socket.onTransaction(this.monitor.bind(this)),setInterval(t.bind(this),6e4),this.load(this.last().id)},monitor:function(t){var e=this.last(),i=e.id,a=e.vout;function r(t){return t.txid==i&&t.n==a}var n=t.inputs.some(r);n&&this.load(t.format.txid)},load:function(t){var e=this;L.a.get("https://rest.bitcoin.com/v2/slp/txDetails/"+t).then(function(t){return t.data}).then(function(t){return e.addStep(t)})},addStep:function(t){var e=t.txid,i=t.tokenInfo,a=i.sendOutputs.indexOf("1"),r=t.vout[a],n=r.scriptPubKey.addresses[0],s=this.last().id;s!=e&&this.trail.unshift({id:e,vout:a,time:t.time,to:n});var c=r.spentTxId;c&&this.load(c)}},filters:{timelocale:function(t){var e=new Date(1e3*t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},timeago:function(t){return G.format(new Date(1e3*t))},tx:function(t){return t}}},D=T,K=(i("034f"),Object(h["a"])(D,r,n,!1,null,null,null)),J=K.exports;new a["a"]({render:function(t){return t(J)}}).$mount("#app")},"64a9":function(t,e,i){}});
//# sourceMappingURL=app-legacy.28517897.js.map