(function(t){function e(e){for(var s,c,o=e[0],d=e[1],n=e[2],f=0,b=[];f<o.length;f++)c=o[f],i[c]&&b.push(i[c][0]),i[c]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,n||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var d=a[o];0!==i[d]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},r=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bch-torch/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var n=0;n<o.length;n++)e(o[n]);var u=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("section",{attrs:{id:"trail"}},t._l(t.trail,function(e,s){return a("div",{key:e.id,class:{genesis:s==t.trail.length-1,last:0==s}},[a("div",{staticClass:"count"},[t._v(t._s(t.trail.length-s))]),a("div",{staticClass:"time"},[a("span",{attrs:{title:t._f("timelocale")(e.time)}},[t._v(t._s(t._f("timeago")(e.time+t.ticker/t.ticker)))])]),a("div",{staticClass:"tx"},[a("a",{attrs:{href:"https://explorer.bitcoin.com/bch/tx/"+e.id}},[t._v(t._s(t._f("tx")(e.id)))])]),a("who",{attrs:{legacy:e.to}})],1)}))])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"header"}},[a("img",{attrs:{height:"128",src:"/bch-torch/images/torch-color-565.png"}}),a("h1",[t._v("The Bitcoin Cash Torch")]),a("p",[t._v("Follow the trail of the first (and only) Bitcoin Cash torch.")])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"who"},[t.isTwitter?a("span",{staticClass:"twitter"},[a("a",{attrs:{href:t.details.twitter}},[t._v(t._s(t._f("twitteruser")(t.details.twitter)))])]):t._e(),t.isReddit?a("span",{staticClass:"reddit"},[a("a",{attrs:{href:t.details.reddit}},[t._v(t._s(t._f("reddituser")(t.details.reddit)))])]):t._e(),t.isLegacy?a("span",{staticClass:"address"},[a("a",{attrs:{href:t._f("linkaddress")(t.address)}},[t._v(t._s(t._f("toslpaddr")(t.address)))])]):t._e(),a("div",{staticClass:"images"},[t.hasCountry?a("span",{staticClass:"flag"},[a("img",{attrs:{src:"https://www.countryflags.io/"+t.details.country+"/flat/32.png"}})]):t._e(),t.hasBadge?a("span",{staticClass:"badges"},t._l(t.details.badges,function(t){return a("img",{key:t,attrs:{src:"/bch-torch/images/"+t,height:"32"}})})):t._e()])])},o=[],d=(a("a481"),a("4917"),{"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8":{twitter:"https://twitter.com/LeeFlemingster/status/1103568864451932160",country:"gb",badges:["pick.png","torch-color-565.png"]},"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2":{twitter:"https://twitter.com/EmergentReasons/status/1103452941518700546",country:"jp"},"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV":{twitter:"https://twitter.com/zquestz/status/1103456473244418054",country:"us"},"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8":{twitter:"https://twitter.com/CollinEnstad/status/1103459641248411649",country:"us",badges:["spice.png"]},"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D":{twitter:"https://twitter.com/Don_wonton/status/1103523885381750784",country:"us",badges:["drawhand.png"]},"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK":{twitter:"https://twitter.com/rob_mose/status/1103531856874496000",country:"au"},"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb":{twitter:"https://twitter.com/im_uname/status/1103534771810951168",country:"us"},"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6":{twitter:"https://twitter.com/JettScythe/status/1103537308286898176"},"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8":{twitter:"https://twitter.com/Wecx_/status/1103547584952512512",country:"us"},"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo":{twitter:"https://twitter.com/paOolCoin/status/1103556037016092672"},"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS":{twitter:"https://twitter.com/Anthony05064687",country:"nl"},"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho":{twitter:"https://twitter.com/Klakurka/status/1103680413266927621",country:"ca"},"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT":{twitter:"https://twitter.com/Klakurka",country:"ca"},"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD":{twitter:"https://twitter.com/SouperNerd",country:"mx"},"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C":{twitter:"https://twitter.com/DavidShares/status/1103688119696703488",country:"us",badges:["redditmod.png"]},"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u":{twitter:"https://twitter.com/maplesyrupsuckr/status/1103949693455749121",country:"jp"},"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ":{twitter:"https://twitter.com/BionicHacker/status/1103612969361977344",country:"hk"},"1AAibNCh7kxVZNhUuRGJjEGH2jkpnR2sw7":{twitter:"https://twitter.com/rogerkver/status/1104514409735417857",country:"jp",badges:["bitcoinjesus.png"]},"1wXPLyDYiYZi5DQw7a3W13XjMjSbye9jE":{twitter:"https://twitter.com/PaulLambert816/status/1104631560370704384",country:"us"},"17WfF5ynAsvqnUR2X4dTSMsZduaotjJVKX":{twitter:"https://twitter.com/SpencerLambert/status/1104785806416273408",country:"us",badges:["hen.jpg"]},"1JBnXATU5Mx5GSc94bN21GFJTAXg1wNv5m":{twitter:"https://twitter.com/hifromlaura1/status/1104865141672292353",country:"us"},"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT":{twitter:"https://twitter.com/eatbch_ve/status/1104871880698269701",country:"ve",badges:["eatbch_ve.jpg"]},"1K9Mh1o8hYcWmgrq7Tx3nPZF1pdZiEmVBn":{twitter:"https://twitter.com/Egon_01",badges:["egon.png"]},"1HLJJwV6EMuvQ7hLbPvcCgF4tn8uq53H6q":{twitter:"https://twitter.com/CryptoWyvern",country:"ca"},"1NKNdfgPq1EApuNaf5mrNRUPbwVHQt3MeB":{twitter:"https://twitter.com/cgcardona/status/1105285836700966913",badges:["tophat.png","bitbox.png"]},"15idnmzhbFY3LE2aNqnbm9NjyLXcgXzSQj":{twitter:"https://twitter.com/SpendBCH_io/status/1105410209755746305",badges:["badger.png"]}}),n=a("ac3e"),u=a.n(n),f={name:"who",props:{legacy:String,cashaddr:String},data(){return{address:this.cashaddr||this.legacy,details:d[this.legacy]}},computed:{isTwitter(){return this.details&&!!this.details.twitter},isReddit(){return this.details&&!!this.details.reddit},isLegacy(){return null==this.details},hasCountry(){return this.details&&!!this.details.country},hasBadge(){return this.details&&!!this.details.badges}},filters:{twitteruser(t){let e=t.match(/twitter.com\/([^\/]+)/);return e?"@"+e[1]:t},reddituser(t){let e=t.match(/reddit.com\/([^\/]+\/[^\/]+)/);return e?"/"+e[1]:t},linkaddress(t){return"https://explorer.bitcoin.com/bch/address/"+u.a.toCashAddress(t)},toslpaddr(t){return u.a.toSlpAddress(t).replace("simpleledger:","")}}},b=f,h=a("2877"),l=Object(h["a"])(b,c,o,!1,null,null,null),p=l.exports,m=[{id:"726864712e9fead5cb8ab525a569374a746fcfca727cb68f7b7f890df3287acf",vout:1,time:1552266386,to:"1K9Mh1o8hYcWmgrq7Tx3nPZF1pdZiEmVBn"},{id:"cdda87be5b51b80c677e0792f67d03eb42d03c36866394fe8f39115ae8f415ce",vout:2,time:1552266386,to:"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT"},{id:"cdda87be5b51b80c677e0792f67d03eb42d03c36866394fe8f39115ae8f415ce",vout:2,time:1552265107,to:"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT"},{id:"121e11a4814f08a5df0ae133f9a19df21709e1b6a0c34896e6089d9c8f3c9dbe",vout:2,time:1552256754,to:"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT"},{id:"a3aff06cf5c04ee9c8a5183aab9fdb74f4225219e313dde0a075a5586c8242c4",vout:1,time:1552255088,to:"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT"},{id:"8cd2f934b6a80fdf1c273b1e16f258f3bec65605e2a6074efcec2606bbea01a3",vout:1,time:1552236493,to:"1JBnXATU5Mx5GSc94bN21GFJTAXg1wNv5m"},{id:"0e00054e20eab0492c5e77ffc668dee61c1a44eafe56b6ccc9968a4a9c2b21b1",vout:1,time:1552199642,to:"17WfF5ynAsvqnUR2X4dTSMsZduaotjJVKX"},{id:"f22d93504f8ac01d3cf000d1f363e279e26f8b8ed7c7b9d1f9bd7af0161f6b55",vout:1,time:1552171840,to:"1wXPLyDYiYZi5DQw7a3W13XjMjSbye9jE"},{id:"735db5684e1a17eeeb6bcc706b1183ead1f39bc9e3e350e27606eb64d4667d59",vout:1,time:1552037042,to:"1AAibNCh7kxVZNhUuRGJjEGH2jkpnR2sw7"},{id:"8bcb285d6ac7e53f8842219f9f8e0d32271ac8385ba73bbed81d95e00f46bc8c",vout:1,time:1551975340,to:"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u"},{id:"d3fe0d314c454a8280987cbfb984830a6d8f061a4e3cf347798c9938042d080e",vout:1,time:1551972883,to:"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C"},{id:"8bdefa85e6b9e1f1d8b46404ce311bd4c0c464cfa1c1b6d5b75813faccb90390",vout:1,time:1551959271,to:"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho"},{id:"f5cef9b8bfeb83fd3debe4955b0eeaf170d8cb272a83831a855556f5266309d1",vout:1,time:1551956754,to:"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT"},{id:"cddc0c3a87d511299e3bcc457dbb9076df7d73c2daffba90b3160acdce007889",vout:1,time:1551951950,to:"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ"},{id:"8c688cae1a8a975c4d0fe1eae55508ddc30ea2ffdb09929c811fe247c16437d9",vout:1,time:1551950332,to:"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD"},{id:"a5bb8e4540364caeaa961f91babbefa65975c6fce01d6f174e6313eb89623528",vout:1,time:1551950332,to:"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS"},{id:"c094e8527f2e87ec726637debf096d4d96db21ec3abe725ee1751252495356ff",vout:1,time:1551941264,to:"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo"},{id:"4e53d9dd370b39f9937d07a524fbe7f95b7cfd8c56407269c331fcadafed5512",vout:2,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"b91e30e68f8a046841e6052d43b2240df67a2e2890d1000fbcb1e7e01dcc0d92",vout:1,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"d0a8fe68ca5b42d30bfba96d8f37a6e1d5fbd2e1f21c33264985ea7ad9728301",vout:1,time:1551940456,to:"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6"},{id:"e45265c4c2b7eac4060ec1b9d5233eaae69cdd82a6e25a6ab9cb2f89f96481ee",vout:1,time:1551937487,to:"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb"},{id:"aaa0a898a0608768ab617d6732315b212811fdb62b7c9bdf0dc8c22ac3a82747",vout:1,time:1551935998,to:"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK"},{id:"e14f7d842ac7af1de2053c943432b3ed1799e58239658354f3dc80ec681b476c",vout:2,time:1551934483,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"ca0963cb32dee18f2bd36c0ce1769a089801e23bd7877967099b798f3609e986",vout:1,time:1551933056,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"5630e76beaca881b24b2e10fc87144e6615a2946b50ffaab286c658ec31a0b15",vout:1,time:1551920200,to:"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8"},{id:"2cf6ad0ab81859d77a4486b9fec1f0deff8ded5db3bbf678b72d4b05b8c6c118",vout:1,time:1551918586,to:"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV"},{id:"bf60bf117f45266bf8c67d9a5ec11fe0727b12c2447bb968f0885129d942ada7",vout:1,time:1551899820,to:"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2"},{id:"49be89bbbe018bcfaebcb41cac8340bc555f022b47b922599e510b143603f4b6",vout:1,time:1551898616,to:"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8"}],w=a("0fec"),y=a("7d1a"),g=a.n(y),v=a("567f"),k=a("bc3a"),x=a.n(k),L=a("8055"),M=a.n(L);const S={baseURL:"https://rest.bitcoin.com"};class _{constructor(){this._socket=M()(S.baseURL),this._socket.on("disconnect",t=>this.disconnected(t))}onTransaction(t){this._socket.on("transactions",e=>{t(JSON.parse(e))})}onBlock(t){this._socket.on("blocks",e=>{t(JSON.parse(e))})}disconnected(t){"io server disconnect"===t&&this._socket.connect()}}w["a"].addLocale(g.a);const j=new w["a"]("en-US");function T(t){return t.reduceRight((t,e)=>{let a=t[0];return a&&a.to==e.to?(t[0]=e,t):(t.unshift(e),t)},[])}var C={name:"app",data(){return{ticker:1,trail:T(m)}},components:{who:p},mounted(){this.start()},methods:{last(){return this.trail[0]},start(){function t(){this.ticker++}function e(){this.trail&&this.trail.length&&(window._trail=JSON.parse(JSON.stringify(this.trail)))}this.load(this.last().id),this.socket=new _,this.socket.onTransaction(this.monitor.bind(this)),setInterval(t.bind(this),1e3),setInterval(e.bind(this),6e4)},monitor(t){let e=this.last(),a=e.id,s=e.vout;function i(t){return t.txid==a&&t.n==s}let r=t.inputs.some(i);r&&this.load(t.format.txid)},load(t){x.a.get("https://rest.bitcoin.com/v2/slp/txDetails/"+t).then(t=>t.data).then(t=>this.addStep(t))},addStep(t){let e=t.txid,a=t.tokenInfo,s=a.sendOutputs.indexOf("1"),i=t.vout[s],r=i.scriptPubKey.addresses[0],c=this.last().id,o=this.last().to;if(c!=e){let a={id:e,vout:s,time:t.time,to:r};o==r?this.trail[0]=a:this.trail.unshift(a)}let d=i.spentTxId;d&&this.load(d)}},filters:{timelocale(t){let e=new Date(1e3*t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},timeago(t){return j.format(new Date(1e3*t),{gradation:v["a"]})},tx(t){return t}}},N=C,D=(a("034f"),Object(h["a"])(N,i,r,!1,null,null,null)),G=D.exports;new s["a"]({render:t=>t(G)}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.1061e859.js.map