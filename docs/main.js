!function(e){function r(r){for(var n,o,l=r[0],i=r[1],c=r[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(r);f.length;)f.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,r=0;r<s.length;r++){for(var t=s[r],n=!0,l=1;l<t.length;l++){var i=t[l];0!==a[i]&&(n=!1)}n&&(s.splice(r--,1),e=o(o.s=t[0]))}return e}var n={},a={0:0},s=[];function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var u=i;s.push([159,1]),t()}({13:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.getRepo=r.getContributors=r.getLanguages=r.getPage=r.constructPageSearchURL=r.SearchOrder=r.SearchSort=void 0;var a,s,o=n(t(173));function l(e,r,t){return{data:e,message:r,success:t}}!function(e){e.stars="stars",e.forks="forks",e.help="help-wanted-issues",e.updated="updated"}(a||(a={})),r.SearchSort=a,function(e){e.descending="desc",e.ascending="asc"}(s||(s={})),r.SearchOrder=s;var i="stars:>=1",c=function(e){return e+"+in:name"};function u(e,r){return void 0===r&&(r=function(e){return e}),console.log("getting: "+e),o.default.get(e).then((function(e){return t=r(e.data),void 0===n&&(n="Success"),l(t,n,!0);var t,n})).catch((function(e){return void 0===(r=e.message)&&(r="Error"),l(null,r,!1);var r}))}r.constructPageSearchURL=function(e,r,t,n,o){return void 0===e&&(e=""),void 0===r&&(r=1),void 0===t&&(t=a.stars),void 0===n&&(n=s.descending),void 0===o&&(o=10),"https://api.github.com/search/repositories?q="+(""===e?i:c(e))+"&sort="+t+"&order="+n+"&page="+r+"&per_page="+o};r.getLanguages=function(e){return u(e,(function(e){return Object.keys(e).map((function(r){return{language:r,lines:e[r]}}))}))};r.getContributors=function(e){return u(e)};r.getPage=function(e){return u(e,(function(e){return e.items}))};r.getRepo=function(e){return u(e,(function(e){return e}))}},157:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.generateUseResponseData=r.LStorage=void 0;var n=t(1);r.LStorage={start:function(e,t){var n=r.LStorage.get(e);return n||(r.LStorage.save(e,t),t)},save:function(e,r){localStorage.setItem(e,JSON.stringify(r))},get:function(e){var r=localStorage.getItem(e);return JSON.parse(r)}},r.generateUseResponseData=function(e){return function(r,t){void 0===r&&(r=""),void 0===t&&(t=null);var a=n.useState(r),s=a[0],o=a[1],l=n.useState(null),i=l[0],c=l[1],u=!0,d=null,f=e.message;n.useEffect((function(){""!==s&&(u=!0,d=null,f=e.message,c(_()),e.request(s).then((function(e){t&&t(e.data),console.log("got PAGE!"),u=!1,d=e,f=e.message,c(_())})))}),[s]);var _=function(){return console.log("displaying"),!u&&d?d.success?e.render(d.data):d.message:f};return[i,function(e){return o(e)}]}}},159:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=t(7),s=n(t(1)),o=n(t(166)),l=n(t(170));t(196),console.log(e.env),o.default.render(s.default.createElement(a.BrowserRouter,{basename:"/GithubDashboard"},s.default.createElement(l.default,null)),document.getElementById("root"))}).call(this,t(10))},170:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=n(t(1)),s=n(t(171));r.default=function(){return a.default.createElement("div",null,a.default.createElement(s.default,null))}},171:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=n(t(1)),s=t(7),o=n(t(172)),l=n(t(195));r.default=function(){return a.default.createElement(s.Switch,null,a.default.createElement(s.Route,{exact:!0,path:"/",component:o.default}),a.default.createElement(s.Route,{exact:!0,path:"/card",component:l.default}))}},172:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.hasOwnProperty.call(e,t)&&n(r,e,t);return a(r,e),r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var l=s(t(1)),i=s(t(13)),c=o(t(190)),u=o(t(194)),d=t(157);t(5);var f={request:function(e){return i.getPage(e)},render:function(e){return l.default.createElement("table",{className:"items"},l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",{className:"items-head__name items__name"},"Name"),l.default.createElement("th",{className:"items-head__owner items__owner"},"Owner"),l.default.createElement("th",{className:"items-head__stars items__stars"},"Stars"),l.default.createElement("th",{className:"items-head__forks items__forks"},"Forks"),l.default.createElement("th",{className:"items-head__commit items__commit"},"Commit"))),l.default.createElement("tbody",null,e.map((function(e){return l.default.createElement(c.default,{key:e.id,repo:e})}))))},message:"Fetching page..."},_=d.generateUseResponseData(f);r.default=function(e){var r=l.useState(d.LStorage.start("search","")),t=r[0],n=r[1],a=l.useState(d.LStorage.start("page",1)),s=a[0],o=a[1],c=l.useState(d.LStorage.start("sort",i.SearchSort.stars)),f=(c[0],c[1],l.useState(d.LStorage.start("order",i.SearchOrder.descending))),m=(f[0],f[1],_(i.constructPageSearchURL(t,s))),g=m[0],p=m[1];l.useEffect((function(){h(s)}),[]);var h=function(e){p(i.constructPageSearchURL(t,e))};return l.default.createElement("div",{className:"container"},l.default.createElement("form",{onSubmit:function(e){e.preventDefault(),h(1),o(1)},className:"search"},l.default.createElement("input",{type:"text",className:"search__text",placeholder:"Type name of github repository",value:t,onChange:function(e){n(e.target.value),d.LStorage.save("search",e.target.value)}}),l.default.createElement("input",{type:"submit",className:"search__submit",value:"Search"})),l.default.createElement(u.default,{active:s,handleClick:function(e){h(e),o(e),d.LStorage.save("page",e)}}),g)}},190:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.hasOwnProperty.call(e,t)&&n(r,e,t);return a(r,e),r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var l=s(t(1)),i=t(7),c=o(t(0));t(5);r.default=function(e){var r=i.useHistory(),t=l.useState(!1),n=t[0],a=t[1],s=function(){a(!n)};return l.default.createElement("tr",{onMouseEnter:s,onMouseLeave:s,onClick:function(t){var n={url:e.repo.url};r.push("/card",n)}},l.default.createElement("td",{className:"items-row__name items__name"},e.repo.name),l.default.createElement("td",{className:"items-row__owner items__owner"},l.default.createElement("a",{className:"items--link",href:e.repo.owner.html_url,target:"_blank",onClick:function(e){return e.stopPropagation()}},e.repo.owner.login)),l.default.createElement("td",{className:"items-row__stars items__stars"},e.repo.stargazers_count),l.default.createElement("td",{className:"items-row__forks items__forks"},e.repo.forks_count),l.default.createElement("td",{className:"items-row__commit items__commit",style:{fontSize:n?"21px":"24px"}},n?c.default(e.repo.updated_at).format("lll"):c.default(e.repo.updated_at).fromNow()))}},192:function(e,r,t){var n={"./af":22,"./af.js":22,"./ar":23,"./ar-dz":24,"./ar-dz.js":24,"./ar-kw":25,"./ar-kw.js":25,"./ar-ly":26,"./ar-ly.js":26,"./ar-ma":27,"./ar-ma.js":27,"./ar-sa":28,"./ar-sa.js":28,"./ar-tn":29,"./ar-tn.js":29,"./ar.js":23,"./az":30,"./az.js":30,"./be":31,"./be.js":31,"./bg":32,"./bg.js":32,"./bm":33,"./bm.js":33,"./bn":34,"./bn.js":34,"./bo":35,"./bo.js":35,"./br":36,"./br.js":36,"./bs":37,"./bs.js":37,"./ca":38,"./ca.js":38,"./cs":39,"./cs.js":39,"./cv":40,"./cv.js":40,"./cy":41,"./cy.js":41,"./da":42,"./da.js":42,"./de":43,"./de-at":44,"./de-at.js":44,"./de-ch":45,"./de-ch.js":45,"./de.js":43,"./dv":46,"./dv.js":46,"./el":47,"./el.js":47,"./en-au":48,"./en-au.js":48,"./en-ca":49,"./en-ca.js":49,"./en-gb":50,"./en-gb.js":50,"./en-ie":51,"./en-ie.js":51,"./en-il":52,"./en-il.js":52,"./en-in":53,"./en-in.js":53,"./en-nz":54,"./en-nz.js":54,"./en-sg":55,"./en-sg.js":55,"./eo":56,"./eo.js":56,"./es":57,"./es-do":58,"./es-do.js":58,"./es-us":59,"./es-us.js":59,"./es.js":57,"./et":60,"./et.js":60,"./eu":61,"./eu.js":61,"./fa":62,"./fa.js":62,"./fi":63,"./fi.js":63,"./fil":64,"./fil.js":64,"./fo":65,"./fo.js":65,"./fr":66,"./fr-ca":67,"./fr-ca.js":67,"./fr-ch":68,"./fr-ch.js":68,"./fr.js":66,"./fy":69,"./fy.js":69,"./ga":70,"./ga.js":70,"./gd":71,"./gd.js":71,"./gl":72,"./gl.js":72,"./gom-deva":73,"./gom-deva.js":73,"./gom-latn":74,"./gom-latn.js":74,"./gu":75,"./gu.js":75,"./he":76,"./he.js":76,"./hi":77,"./hi.js":77,"./hr":78,"./hr.js":78,"./hu":79,"./hu.js":79,"./hy-am":80,"./hy-am.js":80,"./id":81,"./id.js":81,"./is":82,"./is.js":82,"./it":83,"./it-ch":84,"./it-ch.js":84,"./it.js":83,"./ja":85,"./ja.js":85,"./jv":86,"./jv.js":86,"./ka":87,"./ka.js":87,"./kk":88,"./kk.js":88,"./km":89,"./km.js":89,"./kn":90,"./kn.js":90,"./ko":91,"./ko.js":91,"./ku":92,"./ku.js":92,"./ky":93,"./ky.js":93,"./lb":94,"./lb.js":94,"./lo":95,"./lo.js":95,"./lt":96,"./lt.js":96,"./lv":97,"./lv.js":97,"./me":98,"./me.js":98,"./mi":99,"./mi.js":99,"./mk":100,"./mk.js":100,"./ml":101,"./ml.js":101,"./mn":102,"./mn.js":102,"./mr":103,"./mr.js":103,"./ms":104,"./ms-my":105,"./ms-my.js":105,"./ms.js":104,"./mt":106,"./mt.js":106,"./my":107,"./my.js":107,"./nb":108,"./nb.js":108,"./ne":109,"./ne.js":109,"./nl":110,"./nl-be":111,"./nl-be.js":111,"./nl.js":110,"./nn":112,"./nn.js":112,"./oc-lnc":113,"./oc-lnc.js":113,"./pa-in":114,"./pa-in.js":114,"./pl":115,"./pl.js":115,"./pt":116,"./pt-br":117,"./pt-br.js":117,"./pt.js":116,"./ro":118,"./ro.js":118,"./ru":119,"./ru.js":119,"./sd":120,"./sd.js":120,"./se":121,"./se.js":121,"./si":122,"./si.js":122,"./sk":123,"./sk.js":123,"./sl":124,"./sl.js":124,"./sq":125,"./sq.js":125,"./sr":126,"./sr-cyrl":127,"./sr-cyrl.js":127,"./sr.js":126,"./ss":128,"./ss.js":128,"./sv":129,"./sv.js":129,"./sw":130,"./sw.js":130,"./ta":131,"./ta.js":131,"./te":132,"./te.js":132,"./tet":133,"./tet.js":133,"./tg":134,"./tg.js":134,"./th":135,"./th.js":135,"./tk":136,"./tk.js":136,"./tl-ph":137,"./tl-ph.js":137,"./tlh":138,"./tlh.js":138,"./tr":139,"./tr.js":139,"./tzl":140,"./tzl.js":140,"./tzm":141,"./tzm-latn":142,"./tzm-latn.js":142,"./tzm.js":141,"./ug-cn":143,"./ug-cn.js":143,"./uk":144,"./uk.js":144,"./ur":145,"./ur.js":145,"./uz":146,"./uz-latn":147,"./uz-latn.js":147,"./uz.js":146,"./vi":148,"./vi.js":148,"./x-pseudo":149,"./x-pseudo.js":149,"./yo":150,"./yo.js":150,"./zh-cn":151,"./zh-cn.js":151,"./zh-hk":152,"./zh-hk.js":152,"./zh-mo":153,"./zh-mo.js":153,"./zh-tw":154,"./zh-tw.js":154};function a(e){var r=s(e);return t(r)}function s(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=192},193:function(e,r,t){(r=t(156)(!1)).push([e.i,".container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n:root {\r\n    --ff-primary: 'Source Sans Pro', sans-serif;\r\n    --ff-secondary: 'Source Sans Pro', sans-serif;\r\n\r\n    --fw-reg: 300;\r\n    --fw-bold: 900;\r\n\r\n    --fs-h1: 3rem;\r\n    --fs-h2: 2.25rem;\r\n    --fs-h3: 1.25rem;\r\n    --fs-body: 1rem;\r\n\r\n    --clr-light: #fff;\r\n    --clr-dark: #555555;\r\n    --clr-highlight: #949494;\r\n}\r\n\r\n\r\n/* -------------------- Search ------------------- */\r\n\r\n.search {\r\n    width: 60%;\r\n    height: 50px;\r\n    margin-top: 2em;\r\n    display: flex;\r\n}\r\n\r\n.search__text {\r\n    width: 80%;\r\n    font-size: 15px;\r\n}\r\n\r\n.search__submit {\r\n    width: 20%;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n/* -------------------- Paginator ------------------- */\r\n\r\n.paginator {\r\n    margin: 10px 0;\r\n}\r\n\r\n.paginator__btn {\r\n    background-color: var(--clr-dark);\r\n    border: 2px solid var(--clr-dark);\r\n    color: white;\r\n    padding: 16px 32px;\r\n    font-size: 16px;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n.paginator__btn--active,\r\n.paginator__btn:hover {\r\n    background-color: var(--clr-light);\r\n    color: black;\r\n}\r\n\r\n\r\n/* -------------------- Items ------------------- */\r\n\r\n.items {\r\n    width: 80%;\r\n    /* border-spacing: 0 4px; */\r\n    padding: 10px;\r\n    border-collapse: collapse;\r\n    font-size: 1.4em;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.items--link {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: black;\r\n    font-weight: var(--fw-bold);\r\n}\r\n\r\n.items--link:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.items th,\r\n.items td {\r\n    padding: 15px;\r\n    border: 2px solid var(--clr-light);\r\n}\r\n\r\n.items th {\r\n    background-color: var(--clr-highlight);\r\n}\r\n\r\n.items tbody tr {\r\n    background-color: var(--clr-dark);\r\n}\r\n\r\n.items tbody tr:hover {\r\n    background-color: var(--clr-highlight);\r\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.items__name {\r\n    text-align: left;\r\n}\r\n\r\n.items__stars {\r\n    text-align: center;\r\n}\r\n\r\n.items__commit {\r\n    text-align: center;\r\n    width: 20%;\r\n}\r\n\r\n.items__forks {\r\n    text-align: center;\r\n}\r\n\r\n/* Items Head */\r\n\r\n\r\n.items-head__name {\r\n}\r\n\r\n.items-head__owner {\r\n}\r\n\r\n.items-head__stars {\r\n}\r\n\r\n.items-head__commit {\r\n    \r\n}\r\n\r\n\r\n/* Items Body */\r\n\r\n\r\n.items-row__name {\r\n\r\n}\r\n\r\n.items-row__owner {\r\n\r\n}\r\n\r\n.items-row__stars {\r\n    font-weight: var(--fw-bold);\r\n}\r\n\r\n.items-row__commit {\r\n    \r\n}\r\n\r\n\r\n/* -------------------- Card ------------------- */\r\n\r\n.card {\r\n    height: 80%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.card__body {\r\n    display: flex;\r\n}\r\n\r\n.card__description {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/* Card Intro */\r\n.card__intro {\r\n    text-align: center;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.card__intro__name {\r\n\r\n}\r\n\r\n/* Card Subintro */\r\n.card__subintro {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.card__subintro__stars {\r\n\r\n}\r\n\r\n.card__subintro__forks {\r\n\r\n}\r\n\r\n.card__subintro__commit {\r\n\r\n}\r\n\r\n\r\n/* Card Owner */\r\n.card__owner {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.card__owner__img {\r\n    padding: 10px;\r\n    border-bottom: 2px solid black;\r\n    border-right: 2px solid black;\r\n}\r\n\r\n.card__owner__link {\r\n    text-align: center;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n/* Card Description */\r\n.card__desc {\r\n    border-bottom: 2px solid black;;\r\n}\r\n\r\n.card__desc__title {\r\n   text-align: center; \r\n}\r\n\r\n.card__desc__text {\r\n    \r\n}\r\n\r\n/* Card Info */\r\n\r\n.card__info {\r\n    display: flex;\r\n}\r\n\r\n.card__info__title {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.card__info__lang {\r\n    width: 50%;\r\n    border-right: 2px solid black;\r\n}\r\n\r\n.card__info__lang__title {\r\n    \r\n}\r\n\r\n.card__info__lang__list {\r\n    \r\n}\r\n\r\n\r\n.card__info__cont {\r\n    width: 50%;\r\n}\r\n\r\n.card__info__cont__title {\r\n\r\n}\r\n\r\n.card__info__cont__list {\r\n    \r\n}",""]),e.exports=r},194:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=n(t(1));t(5);r.default=function(e){return a.default.createElement("div",{className:"paginator"},function(r){var t=1,n=7;r>4&&(t=r-3,n=r+3);for(var s=[],o=function(t){var n=a.default.createElement("input",{className:"paginator__btn "+(r===t&&"paginator__btn--active"),key:"page:"+t,type:"button",onClick:function(r){return e.handleClick(t)},value:t});s.push(n)},l=t;l<=n;l+=1)o(l);return s}(e.active))}},195:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.hasOwnProperty.call(e,t)&&n(r,e,t);return a(r,e),r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var l=s(t(1)),i=s(t(13)),c=t(157);t(5);var u=o(t(0)),d={request:function(e){return i.getLanguages(e)},render:function(e){return e.map((function(e){return l.default.createElement("li",{key:e.language},l.default.createElement("strong",null,e.language),": ",e.lines)}))},message:"Fetching languages..."},f={request:function(e){return i.getContributors(e)},render:function(e){return(e.length>10?e.slice(0,10):e).map((function(e){return l.default.createElement("li",{key:e.url},l.default.createElement("a",{href:e.html_url},e.login))}))},message:"Fetching contributors..."},_=c.generateUseResponseData(d),m=c.generateUseResponseData(f);r.default=function(e){var r=_(),t=r[0],n=r[1],a=m(),s=a[0],o=a[1],d=l.useState(!0),f=d[0],g=d[1],p=l.useState(null),h=p[0],j=p[1];l.useEffect((function(){i.getRepo(y()).then((function(e){n(e.data.languages_url),o(e.data.contributors_url),j(e.data),g(!1)}))}),[]);var v,b,y=function(){var r,t,n=null===(t=null===(r=null==e?void 0:e.location)||void 0===r?void 0:r.state)||void 0===t?void 0:t.url;return n?(c.LStorage.save("repo",n),n):i.getRepo(c.LStorage.start("repo","https://api.github.com/repos/freeCodeCamp/freeCodeCamp"))};return l.default.createElement("div",{className:"container"},!f&&l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"card__intro"},l.default.createElement("h1",{className:"card__intro__name"},h.name)),l.default.createElement("div",{className:"card__subintro"},l.default.createElement("h2",{className:"card__subintro__stars"},"Stars: ",l.default.createElement("strong",null,h.stargazers_count)),l.default.createElement("h2",{className:"card__subintro__forks"},"Forks: ",h.forks_count),l.default.createElement("h2",{className:"card__subintro__commit"},"Commit: ",u.default(h.updated_at).format("lll"))),l.default.createElement("div",{className:"card__body"},l.default.createElement("div",{className:"card__owner"},l.default.createElement("img",{className:"card__owner__img",src:h.owner.avatar_url}),l.default.createElement("p",{className:"card__owner__link"},"Owner: ",l.default.createElement("a",{href:h.owner.html_url,target:"_blank"},h.owner.login))),l.default.createElement("div",{className:"card__description"},l.default.createElement("div",{className:"card__desc"},l.default.createElement("h2",{className:"card__desc__title"},"Description:"),l.default.createElement("p",{className:"card__desc__text"},(v=h.description,void 0===b&&(b=100),v?v.length>b?v.substr(0,b)+"...":v:""))),l.default.createElement("div",{className:"card__info"},l.default.createElement("div",{className:"card__info__lang"},l.default.createElement("h2",{className:"card__info__lang__title card__info__title"},"Languages:"),l.default.createElement("ul",{className:"card__info__lang__list"},t)),l.default.createElement("div",{className:"card__info__cont"},l.default.createElement("h2",{className:"card__info__cont__title card__info__title"},"Contributors:"),l.default.createElement("ul",{className:"card__info__cont__list"},s)))))))}},196:function(e,r,t){var n=t(155),a=t(197);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}},197:function(e,r,t){(r=t(156)(!1)).push([e.i,"*,\r\n::before,\r\n::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}",""]),e.exports=r},5:function(e,r,t){var n=t(155),a=t(193);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}}});