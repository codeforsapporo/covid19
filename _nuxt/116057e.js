(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{384:function(t,e,n){var content=n(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("0794d592",content,!0,{sourceMap:!1})},385:function(t,e,n){var content=n(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("bb35a8d6",content,!0,{sourceMap:!1})},386:function(t,e,n){(e=n(10)(!1)).push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),t.exports=e},443:function(t,e,n){var o=n(16);o(o.S,"Math",{sign:n(213)})},444:function(t,e,n){"use strict";var o=n(384);n.n(o).a},445:function(t,e,n){(e=n(10)(!1)).push([t.i,".TimeBarChart-Footer{background-color:#fff!important;text-align:left;margin:0;flex-direction:row-reverse;font-size:12px;font-size:.75rem;color:grey!important;text-decoration:none}.supplementTexts{display:flex;list-style-type:none}.supplementText{width:3em}.supplementText2{width:100%}.loading{visibility:hidden}",""]),t.exports=e},446:function(t,e,n){"use strict";n(162);var o=n(163);e.a=Object(o.a)("layout")},483:function(t,e,n){"use strict";n(13),n(7),n(6),n(5),n(9),n(209);var o=n(2),r=(n(37),n(385),n(158)),l=n(21);var c=n(78),d=n(0).a.extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}}),h=n(3);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(l.a)(Object(r.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("footer",["height","inset"]),d).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return m(m({},c.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return m(m({},c.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(h.g)(t),left:Object(h.g)(this.computedLeft),right:Object(h.g)(this.computedRight),bottom:Object(h.g)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){return t("footer",this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles}),this.$slots.default)}})},497:function(t,e,n){"use strict";n.r(e);n(443);var o={components:{DataView:function(){return n.e(32).then(n.bind(null,482))},DataSelector:function(){return n.e(29).then(n.bind(null,494))},DataViewBasicInfoPanel:function(){return n.e(14).then(n.bind(null,507))},DateSelectSlider:function(){return Promise.all([n.e(28),n.e(37)]).then(n.bind(null,503))},ScaleLoader:n(112).a},props:{title:{type:String,required:!1,default:""},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,required:!1,default:""},sourceFrom:{type:String,required:!1,default:""},sourceLink:{type:String,required:!1,default:""},defaultDataKind:{type:String,required:!1,default:"transition"},supplement:{type:String,required:!1,default:""},showButton:{type:Boolean,required:!1,default:!0},loaded:{type:Boolean,required:!0,default:!1},titleId:{type:String,required:!1,default:""}},data:function(){return{dataKind:this.defaultDataKind,graphRange:[0,1]}},computed:{sliderMax:function(){return this.chartData&&0!==this.chartData.length?(this.sliderUpdate([0,this.chartData.length-1]),this.chartData.length-1):1},displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e).toLocaleString()},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e).toLocaleString()},displayInfo:function(){return this.chartData&&0!==this.chartData.length?"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:this.$t("実績値（前日比：{change} {unit}）",{change:this.displayTransitionRatio,unit:this.unit}),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:this.$t("{date} 累計値（前日比：{change} {unit}）",{date:this.$dayjs(this.chartData.slice(-1)[0].label).format("MM/DD"),change:this.displayCumulativeRatio,unit:this.unit}),unit:this.unit}:{lText:"",sText:"",unit:""}},displayData:function(){return this.chartData&&0!==this.chartData.length?"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"#1c8df0",borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#1c8df0",borderWidth:0}]}:{}},displayOption:function(){var t=this.unit;return this.chartData&&0!==this.chartData.length?{animation:!1,tooltips:{displayColors:!1,callbacks:{label:function(e){return"".concat(parseInt(e.value).toLocaleString()," ").concat(t)}}},responsive:!0,legend:{display:!1},scales:{xAxes:[{type:"time",offset:!0,time:{tooltipFormat:"MM/DD",unit:"day",unitStepSize:1,displayFormats:{day:"M/D"},round:"day"},stacked:!0,gridLines:{display:!1},ticks:{max:this.chartData[this.graphRange[1]].label,min:this.chartData[this.graphRange[0]].label,fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}}:{}}},methods:{sliderUpdate:function(t){this.graphRange=t},formatDayBeforeRatio:function(t){switch(Math.sign(t)){case 1:return"+".concat(t);case-1:default:return"".concat(t)}}}},r=(n(444),n(15)),l=n(52),c=n.n(l),d=n(483),h=n(446),f=n(353),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,date:t.date,loaded:t.loaded,"source-from":t.sourceFrom,"source-link":t.sourceLink,"title-id":t.titleId},scopedSlots:t._u([!0===t.showButton?{key:"button",fn:function(){return[n("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0}:null,{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}],null,!0)},[t._v(" "),n("v-overlay",{attrs:{absolute:"",value:!t.loaded,"justify-center":"","align-center":""}},[n("scale-loader",{attrs:{color:"#1268d8"}})],1),t._v(" "),n("v-layout",{class:{loading:!t.loaded},attrs:{column:""}},[n("bar",{attrs:{"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("date-select-slider",{attrs:{"chart-data":t.chartData,value:[0,t.sliderMax],"slider-max":t.sliderMax},on:{sliderInput:t.sliderUpdate}}),t._v(" "),""!==t.supplement?n("v-footer",{staticClass:"TimeBarChart-Footer"},[n("ul",{staticClass:"supplementTexts"},[n("li",{staticClass:"supplementText"},[t._v("\n          "+t._s(t.$t("補足:"))+"\n        ")]),t._v(" "),n("li",{staticClass:"supplementText2"},[t._v("\n          "+t._s(t.supplement)+"\n        ")])])]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VFooter:d.a,VLayout:h.a,VOverlay:f.a})}}]);