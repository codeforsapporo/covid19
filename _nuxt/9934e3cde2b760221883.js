(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{425:function(t,e,r){"use strict";r(12),r(7),r(50),r(39),r(40);var n=r(2),c=(r(43),r(207),r(47),r(6),r(5),r(8),r(38),r(208),r(0)),o=r(74),l=r(3);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h=["sm","md","lg","xl"],f=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),$={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(y)};function O(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var v=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},f,{offset:{type:[String,Number],default:null}},m,{order:{type:[String,Number],default:null}},y,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var h=v.get(l);return h||function(){var t,e;for(e in h=[],$)$[e].forEach((function(t){var n=r[t],c=O(e,t,n);c&&h.push(c)}));var c=h.some((function(t){return t.startsWith("col-")}));h.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),v.set(l,h)}(),t(r.tag,Object(o.a)(data,{class:h}),c)}})},500:function(t,e,r){"use strict";r.r(e);var n=r(409),c=r(413),o=r(411),l=r(410),d=r(408),h=r(414),f={components:{QuerentsCard:r(412).a,PatientsSummaryCard:h.a,PatientsCard:d.a,InspectionsCard:l.a,DischargesCard:o.a,ContactsCard:c.a,CurrentPatientsCard:n.a},data:function(){return{title:""}},created:function(){switch(this.$route.params.card){case"contacts":this.title=this.$t("新型コロナコールセンター相談件数(札幌市保健所値)");break;case"current-patients":this.title=this.$t("現在患者数");break;case"discharges-summary":this.title=this.$t("治療終了者数");break;case"inspections":this.title=this.$t("検査数");break;case"patients":this.title=this.$t("陽性患者の属性");break;case"patients-summary":this.title=this.$t("陽性患者数");break;case"querents":this.title=this.$t("帰国者・接触者電話相談センター相談件数(札幌市保健所値)")}},mounted:function(){"true"!==this.$route.query.embed&&"true"!==this.$route.query.ogp&&this.$router.push({path:this.localePath("/"),hash:this.$route.params.card})},head:function(){var t="https://stopcovid19.hokkaido.dev/",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/api/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/api/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.$t("当サイトは、道内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。開発は、ICTエンジニアやデザイナーなどによって結成された「JUST道IT」が行っています。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("北海道")+" "+this.$t("新型コロナウイルス{mobileBreak}まとめサイト",{mobileBreak:""})},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},m=r(14),component=Object(m.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:"true"===this.$route.query.embed||"true"===this.$route.query.ogp,expression:"\n    this.$route.query.embed === 'true' || this.$route.query.ogp === 'true'\n  "}]},["current-patients"===this.$route.params.card?e("current-patients-card"):"contacts"===this.$route.params.card?e("contacts-card"):"discharges-summary"===this.$route.params.card?e("discharges-card"):"inspections"===this.$route.params.card?e("inspections-card"):"patients"===this.$route.params.card?e("patients-card"):"patients-summary"===this.$route.params.card?e("patients-summary-card"):"querents"===this.$route.params.card?e("querents-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);