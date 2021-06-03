(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{271:function(t,e,n){"use strict";e.a=function(data){if(data){var t=Date.parse(data),e=new Date(t),n=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2),o=("0"+e.getHours()).slice(-2),c=("0"+e.getMinutes()).slice(-2),l=("0"+e.getSeconds()).slice(-2);return e.getFullYear()+"/"+n+"/"+r+" "+o+":"+c+":"+l}return""}},288:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["日陽性数"];isNaN(o)||(n+=o,t.push({label:r,transition:o,cumulative:n}))})),t}},289:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["小計"];isNaN(o)||(n+=o,t.push({label:r,transition:o,cumulative:n}))})),t}},290:function(t,e,n){"use strict";n(22);var r=n(3),o=n(271),c={name:"CurrentPatientsCard",components:{TimeBarChart:function(){return n.e(0).then(n.bind(null,349))}},data:function(){return{current_patients:{loaded:!1,last_update:""},currentPatientsGraph:[],convertToDateFromData:o.a}},created:function(){this.getCurrentPatientsGraphFromAPI()},methods:{getCurrentPatientsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/current_patients.json").then((function(e){var data,n,r,o;t.currentPatientsGraph=(data=e.data,n=[],r=new Date,o=0,data.filter((function(t){return new Date(t["日付"])<r})).forEach((function(t){var e=new Date(t["日付"]),r=t["患者数"];isNaN(r)||(o+=r,n.push({label:e,transition:r,cumulative:o}))})),n),t.current_patients.last_update=e.last_update,t.current_patients.loaded=!0})).catch((function(e){t.$emit("failed","現在患者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},l=n(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{"chart-data":t.currentPatientsGraph,date:t.convertToDateFromData(t.current_patients.last_update),"default-data-kind":"cumulative",loaded:t.current_patients.loaded,"source-from":t.$t("北海道 オープンデータポータル"),supplement:t.$t("現在患者数とは、陽性患者数から治療終了者数と死亡者数を除いた人数です。なお、ご覧いただいている時間によっては累計されている日付が違う場合がありますのでご注意ください。死亡者数は北海道のホームページを参照してください。"),title:t.$t("現在患者数"),unit:t.$t("人"),"title-id":"current-patients","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},291:function(t,e,n){"use strict";n(22);var r=n(3),o=n(271),c={name:"DischargesCard",components:{TimeBarChart:function(){return n.e(0).then(n.bind(null,349))}},data:function(){return{discharges_summary:{loaded:!1,last_update:""},dischargesGraph:[],convertToDateFromData:o.a}},created:function(){this.getDischargesSummaryGraphFromAPI()},methods:{getDischargesSummaryGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/discharges_summary.json").then((function(e){var data,n,r,o;t.dischargesGraph=(data=e.data,n=[],r=new Date,o=0,data.filter((function(t){return new Date(t["日付"])<r})).forEach((function(t){var e=new Date(t["日付"]),r=t["日治療終了数"];isNaN(r)||(o+=r,n.push({label:e,transition:r,cumulative:o}))})),n),t.discharges_summary.last_update=e.last_update,t.discharges_summary.loaded=!0})).catch((function(e){t.$emit("failed","治療終了者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},l=n(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{"chart-data":t.dischargesGraph,date:t.convertToDateFromData(t.discharges_summary.last_update),"default-data-kind":"cumulative",loaded:t.discharges_summary.loaded,"source-from":t.$t("北海道 オープンデータポータル"),supplement:t.$t("治療終了者数とは道発表の「陰性確認済累計」と同じものです。"),title:t.$t("治療終了者数"),"title-id":"discharges-summary",unit:t.$t("人"),"source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},292:function(t,e,n){"use strict";n(20),n(38),n(23),n(41),n(40),n(25),n(26),n(27),n(10),n(114),n(22);var r=n(3),o=n(6),c=n.n(o),l=[{text:"日付",value:"公表日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"}],d=n(271),h=n(288);function m(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var v={name:"PatientsCard",components:{DataTable:function(){return n.e(28).then(n.bind(null,343))}},data:function(){return{patients:{loaded:!1,last_update:""},sumInfoOfPatients:{lText:"",sText:"",unit:""},patientsTable:{},convertToDateFromData:d.a}},created:function(){this.getPatientsTableFromAPI(),this.getPatientsSummaryGraphFromAPI()},methods:{getPatientsTableFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/patients.json").then((function(e){var data,n;t.patientsTable=(data=e.data,n={headers:l,datasets:[]},data.forEach((function(t){var e,r,o,l,d={"公表日":null!==(e=c()(t["リリース日"]).format("YY/MM/DD"))&&void 0!==e?e:"不明","居住地":null!==(r=t["居住地"])&&void 0!==r?r:"不明","年代":null!==(o=t["年代"])&&void 0!==o?o:"不明","性別":null!==(l=t["性別"])&&void 0!==l?l:"不明"};n.datasets.push(d)})),n.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),n);var r,o=m(t.patientsTable.headers);try{for(o.s();!(r=o.n()).done;){var header=r.value;header.text="退院"===header.value?t.$t("退院※"):t.$t(header.value)}}catch(t){o.e(t)}finally{o.f()}var d,h=m(t.patientsTable.datasets);try{for(h.s();!(d=h.n()).done;){var f=d.value;f["居住地"]=t.$t(f["居住地"]),f["性別"]=t.$t(f["性別"]),f["退院"]=t.$t(f["退院"]),"非公表性"===f["性別"]&&(f["性別"]=t.$t("非公表"));var v=f["年代"].match(/^([0-9]+)代$/);f["年代"]=v?t.$t("{age}代",{age:v[1]}):t.$t(f["年代"])}}catch(t){h.e(t)}finally{h.f()}t.patients.last_update=e.last_update,t.patients.loaded=!0})).catch((function(e){t.$emit("failed","陽性患者の属性データ ")}));case 2:case"end":return e.stop()}}),e)})))()},getPatientsSummaryGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/patients_summary.json").then((function(e){var n=Object(h.a)(e.data);t.sumInfoOfPatients={lText:n[n.length-1].cumulative.toLocaleString(),sText:t.$t("{date}の累計",{date:t.$dayjs(n[n.length-1].label).format("MM/DD")}),unit:t.$t("人")}})).catch((function(e){t.$emit("failed2","陽性患者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},$=n(4),component=Object($.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{"chart-data":this.patientsTable,"chart-option":{},date:this.convertToDateFromData(this.patients.last_update),info:this.sumInfoOfPatients,loaded:this.patients.loaded,"sort-by":"公表日","sort-desc":!0,"source-from":this.$t("北海道 オープンデータポータル"),title:this.$t("陽性患者の属性"),"title-id":"patients","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},293:function(t,e,n){"use strict";n(22);var r=n(3),o=n(271),c={name:"InspectionsCard",components:{TimeBarChart:function(){return n.e(0).then(n.bind(null,349))}},data:function(){return{inspections:{loaded:!1,last_update:""},inspectionsGraph:[],convertToDateFromData:o.a}},created:function(){this.getInscpectionsGraphFromAPI()},methods:{getInscpectionsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/inspections.json").then((function(e){var data,n,r,o;return t.inspectionsGraph=(data=e.data,n=[],r=new Date,o=0,data.filter((function(t){return new Date(t["日付"])<r})).forEach((function(t){var e=new Date(t["日付"]),r=t["日検査数"];isNaN(r)||(o+=r,n.push({label:e,transition:r,cumulative:o}))})),n),t.inspections.last_update=e.last_update,t.inspections.loaded=!0,!0})).catch((function(e){t.$emit("failed","検査数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},l=n(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{"chart-data":t.inspectionsGraph,date:t.convertToDateFromData(t.inspections.last_update),"default-data-kind":"cumulative",loaded:t.inspections.loaded,"show-button":!1,"source-from":t.$t("北海道 オープンデータポータル"),supplement:t.$t("3月3日以前のデータが公開されていないため、グラフは3月3日以降となります。"),title:t.$t("検査数"),unit:t.$t("人"),"title-id":"inspections","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},294:function(t,e,n){"use strict";n(22);var r=n(3),o=n(288),c=n(271),l={name:"PatientsSummaryCard",components:{TimeBarChart:function(){return n.e(0).then(n.bind(null,349))}},data:function(){return{patients_summary:{loaded:!1,last_update:""},patientsGraph:[],convertToDateFromData:c.a}},created:function(){this.getPatientsSummaryGraphFromAPI()},methods:{getPatientsSummaryGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/patients_summary.json").then((function(e){t.patientsGraph=Object(o.a)(e.data),t.patients_summary.last_update=e.last_update,t.patients_summary.loaded=!0})).catch((function(e){t.$emit("failed","陽性患者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},d=n(4),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{"chart-data":this.patientsGraph,date:this.convertToDateFromData(this.patients_summary.last_update),"default-data-kind":"cumulative",loaded:this.patients_summary.loaded,"source-from":this.$t("北海道 オープンデータポータル"),title:this.$t("陽性患者数"),unit:this.$t("人"),"title-id":"patients-summary","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},295:function(t,e,n){"use strict";n(22);var r=n(3),o=n(289),c=n(271),l={name:"ContactsCard",components:{TimeBarChart:function(){return n.e(0).then(n.bind(null,349))}},data:function(){return{contacts:{loaded:!1,last_update:""},contactsGraph:[],convertToDateFromData:c.a}},created:function(){this.getContactsGraphFromAPI()},methods:{getContactsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/contacts.json").then((function(e){t.contactsGraph=Object(o.a)(e.data),t.contacts.last_update=e.last_update,t.contacts.loaded=!0})).catch((function(e){t.$emit("failed","新型コロナコールセンター相談件数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},d=n(4),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{"chart-data":this.contactsGraph,date:this.convertToDateFromData(this.contacts.last_update),loaded:this.contacts.loaded,"source-from":this.$t("DATA-SMART CITY SAPPORO"),title:this.$t("新型コロナコールセンター相談件数(札幌市保健所値)"),unit:this.$t("件"),"title-id":"contacts","source-link":"https://ckan.pf-sapporo.jp/dataset/covid_19_soudan"}})],1)}),[],!1,null,null,null);e.a=component.exports},296:function(t,e,n){"use strict";n(22);var r=n(3),o=n(289),c=n(271),l={name:"QuerentsCard",components:{TimeBarChart:function(){return n.e(0).then(n.bind(null,349))}},data:function(){return{querents:{loaded:!1,last_update:""},querentsGraph:[],convertToDateFromData:c.a}},created:function(){this.getQuerentsGraphFromAPI()},methods:{getQuerentsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/querents.json").then((function(e){t.querentsGraph=Object(o.a)(e.data),t.querents.last_update=e.last_update,t.querents.loaded=!0})).catch((function(e){t.$emit("failed","帰国者・接触者電話相談センター相談件数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},d=n(4),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("帰国者・接触者電話相談センター相談件数(札幌市保健所値)"),"chart-data":this.querentsGraph,date:this.convertToDateFromData(this.querents.last_update),"source-from":this.$t("DATA-SMART CITY SAPPORO"),"source-link":"https://ckan.pf-sapporo.jp/dataset/covid_19_soudan",loaded:this.querents.loaded,"title-id":"querents",unit:this.$t("件")}})],1)}),[],!1,null,null,null);e.a=component.exports}}]);