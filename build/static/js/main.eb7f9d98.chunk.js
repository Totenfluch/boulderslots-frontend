(this["webpackJsonpboulderslots-frontend"]=this["webpackJsonpboulderslots-frontend"]||[]).push([[0],{104:function(e,a,t){e.exports=t(135)},132:function(e,a){e.exports={predict:function(e,a,t){for(var n=[],r=0;r<=e.length-a;r++){for(var l=0,c=r+a,o=r;o<c&&o<=e.length;o++)l+=(e[o][t]||e[o-1][t])/a;n.push({set:e.slice(r,r+a),avg:Math.floor(l)}),l}return n}}},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),o=t(65),i=t.n(o),s=t(86),d=t(32),u=t(33),m=t(25),h=t(36),f=t(34),b=t(87),p=t.n(b),g=t(94),E=t(11),k=t(193),C=t(194),y=t(95),v=Object(y.a)({palette:{primary:{light:"#c6f24a",main:"#92bf00",dark:"#5f8f00",contrastText:"#000000"},dark:{light:"#1c1c1c",main:"#1c1c1c",dark:"#1c1c1c",backgroundColor:"#1c1c1c",contrastText:"#ffffff"}}}),S=t(41),x=t(199),T=t(196),w=t(187),O=t(138),D=t(185),j=t(52),N=t(61),B=t.n(N),F=t(177),R=t(180),z=t(181),G=t(182),P=t(137),A=t(183),V=t(184),L=t(200),H=t(202),I=t(203),M=t(197),W=t(186),Y=t(195),J=t(91),U=t(175),_=t(179),q=(t(132),Object(U.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:300},sectionDivider:{marginBottom:e.spacing(1)},filterContainer:{padding:"12px"},margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}))),K=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={dayChecked:!0,nightChecked:!1,startValue:B()(Date.now()).startOf("day").add(2,"hours").toISOString().slice(0,16),endValue:new Date(Date.now()+78e5).toISOString().slice(0,16),mondayChecked:!0,tuesdayChecked:!0,wednesdayChecked:!0,thursdayChecked:!0,fridayChecked:!0,saturdayChecked:!0,sundayChecked:!0,climbslotsChecked:!0,boulderslotsChecked:!0,daySelect:"0",timespanSelect:"1"},n.RenderSlotsChart=n.RenderSlotsChart.bind(Object(m.a)(n)),n.setTimespan=n.setTimespan.bind(Object(m.a)(n)),n}return Object(u.a)(t,[{key:"setTimespan",value:function(e){"1"===e?this.setState({startValue:B()(Date.now()).startOf("day").add(2,"hours").toISOString().slice(0,16)}):"2"===e&&this.setState({startValue:B()(Date.now()).subtract(7,"days").toISOString().slice(0,16)})}},{key:"componentWillMount",value:function(){this.setTimespan("1")}},{key:"RenderSlotsChart",value:function(){for(var e=this,a=this.props,t=a.chartData,n=a.styleColor,l=this.state,c=l.dayChecked,o=l.nightChecked,i=l.startValue,s=l.endValue,d=l.mondayChecked,u=l.tuesdayChecked,m=l.wednesdayChecked,h=l.thursdayChecked,f=l.fridayChecked,b=l.saturdayChecked,p=l.sundayChecked,g=l.climbslotsChecked,E=l.boulderslotsChecked,k=l.daySelect,C=l.timespanSelect,y=q(),v=JSON.parse(JSON.stringify(t)),S=0;S<v.length;S+=1)0!==S&&(v[S][0]=new Date(v[S][0]));var x=v;if(c||(x=x.filter((function(e,a){if(0===a)return!0;var t=e[0].getHours();return(t<7||t>24)&&0!==t}))),o||(x=x.filter((function(e,a){if(0===a)return!0;var t=e[0].getHours();return t>7&&t<24}))),x=x.filter((function(e,a){if(0===a)return!0;var t=e[0].getTime();return t>new Date(i).getTime()&&t<new Date(s).getTime()})),p||(x=x.filter((function(e,a){return 0===a||0!==e[0].getDay()}))),d||(x=x.filter((function(e,a){return 0===a||1!==e[0].getDay()}))),u||(x=x.filter((function(e,a){return 0===a||2!==e[0].getDay()}))),m||(x=x.filter((function(e,a){return 0===a||3!==e[0].getDay()}))),h||(x=x.filter((function(e,a){return 0===a||4!==e[0].getDay()}))),f||(x=x.filter((function(e,a){return 0===a||5!==e[0].getDay()}))),b||(x=x.filter((function(e,a){return 0===a||6!==e[0].getDay()}))),!g||!E)if(g||E)if(g){if(!E){var T=x[0].indexOf("Boulderslots");x=x.map((function(e){return e.filter((function(e,a){return T!=a}))})),T=x[0].indexOf("Boulderslots Prediction"),x=x.map((function(e){return e.filter((function(e,a){return T!=a}))}))}}else{var w=x[0].indexOf("Climbslots");x=x.map((function(e){return e.filter((function(e,a){return w!=a}))})),w=x[0].indexOf("Climbslots Prediction"),x=x.map((function(e){return e.filter((function(e,a){return w!=a}))}))}else;var N=r.a.useState(null),B=Object(j.a)(N,2),U=B[0],K=B[1],Q=function(e){K(null)},X=Boolean(U),Z=X?"transitions-popper":void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{variant:"extended",size:"medium","aria-label":"add",className:y.margin,style:{backgroundColor:n},onClick:function(e){K(U?null:e.currentTarget)}},r.a.createElement(_.a,{className:y.extendedIcon}),"Filter and Options"),r.a.createElement(R.a,{id:Z,open:X,anchorEl:U,transition:!0,placement:"bottom-start"},(function(a){var t=a.TransitionProps;return r.a.createElement(z.a,Object.assign({},t,{timeout:250}),r.a.createElement(G.a,{onClickAway:Q},r.a.createElement(P.a,{className:y.filterContainer},r.a.createElement(O.a,{variant:"h5"},"Enable Climbslots and Boulderslots"),r.a.createElement(A.a,{row:!0},r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:g,onChange:function(a){return e.setState({climbslotsChecked:a.target.checked})},name:"Climbslots",color:"primary"}),label:"Climbslots"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:E,onChange:function(a){return e.setState({boulderslotsChecked:a.target.checked})},name:"Boulderslots"}),label:"Boulderslots"})),r.a.createElement(D.a,null),r.a.createElement(O.a,{variant:"h5"},"Enable Day or Night"),r.a.createElement(A.a,{row:!0},r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:c,onChange:function(a){return e.setState({dayChecked:a.target.checked})},name:"Day",color:"primary"}),label:"Day"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:o,onChange:function(a){return e.setState({nightChecked:a.target.checked})},name:"Night"}),label:"Night"})),r.a.createElement(D.a,null),r.a.createElement(O.a,{variant:"h5",className:y.sectionDivider},"Set Start- and Endtime of the Timeseries"),r.a.createElement(H.a,{component:"fieldset"},r.a.createElement(I.a,{"aria-label":"timespan-select",row:!0,name:"timespan-select",value:C,onChange:function(a){e.setState({timespanSelect:a.target.value}),e.setTimespan(a.target.value)}},r.a.createElement(V.a,{value:"0",control:r.a.createElement(M.a,null),label:"Custom"}),r.a.createElement(V.a,{value:"1",control:r.a.createElement(M.a,null),label:"Today"}),r.a.createElement(V.a,{value:"2",control:r.a.createElement(M.a,null),label:"7 Days"}))),r.a.createElement(W.a,{container:!0},r.a.createElement(W.a,{item:!0},r.a.createElement("form",{className:y.container,noValidate:!0},r.a.createElement(Y.a,{id:"datetime_start",label:"Start Timespan",type:"datetime-local",format:"dd/MM/YYYY HH:mm",value:i,onChange:function(a){return e.setState({startValue:a.target.value,timespanSelect:"0"})},className:y.textField,InputLabelProps:{shrink:!0}}))),r.a.createElement(W.a,{item:!0},r.a.createElement("form",{className:y.container,noValidate:!0},r.a.createElement(Y.a,{id:"datetime_end",label:"End Timespan",type:"datetime-local",format:"dd/MM/YYYY HH:mm",value:s,onChange:function(a){return e.setState({endValue:a.target.value,timespanSelect:"0"})},className:y.textField,InputLabelProps:{shrink:!0}})))),r.a.createElement(D.a,{style:{marginBottom:"8px",marginTop:"8px"}}),r.a.createElement(O.a,{variant:"h5"},"Disable or Enable Weekdays"),r.a.createElement(H.a,{component:"fieldset"},r.a.createElement(I.a,{"aria-label":"day-select",row:!0,name:"day-select",value:k,onChange:function(a){e.setState({daySelect:a.target.value}),"0"===a.target.value?e.setState({mondayChecked:!0,tuesdayChecked:!0,wednesdayChecked:!0,thursdayChecked:!0,fridayChecked:!0,saturdayChecked:!0,sundayChecked:!0}):"1"===a.target.value?e.setState({mondayChecked:!0,tuesdayChecked:!0,wednesdayChecked:!0,thursdayChecked:!0,fridayChecked:!0,saturdayChecked:!1,sundayChecked:!1}):"2"===a.target.value&&e.setState({mondayChecked:!1,tuesdayChecked:!1,wednesdayChecked:!1,thursdayChecked:!1,fridayChecked:!1,saturdayChecked:!0,sundayChecked:!0})}},r.a.createElement(V.a,{value:"0",control:r.a.createElement(M.a,null),label:"All"}),r.a.createElement(V.a,{value:"1",control:r.a.createElement(M.a,null),label:"Weekday"}),r.a.createElement(V.a,{value:"2",control:r.a.createElement(M.a,null),label:"Weekend"}))),r.a.createElement(A.a,{row:!0},r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:d,onChange:function(a){return e.setState({mondayChecked:a.target.checked})},name:"mondayChecked",color:"primary"}),label:"Monday"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:u,onChange:function(a){return e.setState({tuesdayChecked:a.target.checked})},name:"tuesdayChecked",color:"primary"}),label:"Tuesday"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:m,onChange:function(a){return e.setState({wednesdayChecked:a.target.checked})},name:"wednesdayChecked",color:"primary"}),label:"Wednesday"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:h,onChange:function(a){return e.setState({thursdayChecked:a.target.checked})},name:"thursdayChecked",color:"primary"}),label:"Thursday"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:f,onChange:function(a){return e.setState({fridayChecked:a.target.checked})},name:"fridayChecked",color:"primary"}),label:"Friday"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:b,onChange:function(a){return e.setState({saturdayChecked:a.target.checked})},name:"saturdayChecked",color:"primary"}),label:"Saturday"}),r.a.createElement(V.a,{control:r.a.createElement(L.a,{checked:p,onChange:function(a){return e.setState({sundayChecked:a.target.checked})},name:"sundayChecked",color:"primary"}),label:"Sunday"})))))})),r.a.createElement(J.a,{chartType:"LineChart",data:x,options:{isStacked:!0,backgroundColor:"#fafafa",legend:{position:"top",maxLines:3},vAxis:{viewWindow:{min:0},title:"Available Slots"},lineWidth:4,smoothLine:!1},height:"60vh",width:"100%"}))}},{key:"render",value:function(){return r.a.createElement(this.RenderSlotsChart,null)}}]),t}(r.a.Component),Q=Object(U.a)((function(e){var a;return{container:(a={margin:"0 auto"},Object(S.a)(a,e.breakpoints.up("md"),{marginLeft:"260px"}),Object(S.a)(a,"padding","8px"),a)}})),X=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={hallValue:0},n.RenderStatsPage=n.RenderStatsPage.bind(Object(m.a)(n)),n}return Object(u.a)(t,[{key:"RenderStatsPage",value:function(){var e=this,a=Q(),t=this.props.statisticsData,n=[["Date","Boulderslots","Climbslots"]],l=[["Date","Boulderslots","Climbslots"]],c=[["Date","Boulderslots","Climbslots"]],o=[["Date","Boulderslots","Climbslots"]];t.forEach((function(e){n.push([new Date(e.createdAt),e.boulderFreimann,e.climbFreimann]),l.push([new Date(e.createdAt),e.boulderThalkirchen,e.climbThalkirchen]),c.push([new Date(e.createdAt),e.boulderGilching,e.climbGilching]),o.push([new Date(e.createdAt),e.boulderToelz,e.climbToelz])}));var i=this.state.hallValue,s=function(e,a){if(e!==a)return"#000000";switch(e){case 0:return"#cb9a00";case 1:return"#7ec300";case 2:return"#c45913";case 3:return"#aa312b";default:return"#ffffff"}},d=r.a.createElement("div",null,r.a.createElement(x.a,{smDown:!0},r.a.createElement(T.a,{value:i,onChange:function(a,t){e.setState({hallValue:t})},TabIndicatorProps:{style:{backgroundColor:s(i,i)}},centered:!0},r.a.createElement(w.a,{label:"Freimann",style:{color:s(i,0)}}),r.a.createElement(w.a,{label:"Thalkirchen",style:{color:s(i,1)}}),r.a.createElement(w.a,{label:"Gilching",style:{color:s(i,2)}}),r.a.createElement(w.a,{label:"T\xf6lz",style:{color:s(i,3)}}))),r.a.createElement(x.a,{mdUp:!0},r.a.createElement(T.a,{value:i,onChange:function(a,t){e.setState({hallValue:t})},TabIndicatorProps:{style:{backgroundColor:s(i,i)}},variant:"scrollable",scrollButtons:"auto"},r.a.createElement(w.a,{label:"Freimann",style:{color:s(i,0)}}),r.a.createElement(w.a,{label:"Thalkirchen",style:{color:s(i,1)}}),r.a.createElement(w.a,{label:"Gilching",style:{color:s(i,2)}}),r.a.createElement(w.a,{label:"T\xf6lz",style:{color:s(i,3)}}))));return r.a.createElement("div",{className:a.container},r.a.createElement(O.a,{variant:"h4"},"Boulder- and Climbslots for the recent days"),r.a.createElement(D.a,null),r.a.createElement("div",{style:{marginTop:"12px"}}),d,function(){switch(i){case 0:return r.a.createElement(K,{chartData:n,styleColor:s(i,i)});case 1:return r.a.createElement(K,{chartData:l,styleColor:s(i,i)});case 2:return r.a.createElement(K,{chartData:c,styleColor:s(i,i)});case 3:return r.a.createElement(K,{chartData:o,styleColor:s(i,i)});default:return r.a.createElement(r.a.Fragment,null)}}())}},{key:"render",value:function(){return r.a.createElement(this.RenderStatsPage,null)}}]),t}(r.a.Component),Z=t(188),$=t(190),ee=t(191),ae=t(139),te=t(201),ne=t(12),re=t(189),le=t(192),ce=Object(U.a)((function(e){return{appBar:Object(S.a)({marginLeft:255,backgroundColor:"#1c1c1c",color:"#ffffff"},e.breakpoints.up("md"),{width:"calc(100% - ".concat(255,"px)"),backgroundColor:"rgba(255,255,255,0)",color:"#000000",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.0)"}),logo:{width:"110px",margin:"0 auto",height:"auto","&:hover":{cursor:"pointer"}},logoContainer:{width:"150px",margin:"0 auto"},statsContainer:{marginBottom:e.spacing(1),textAlign:"center"},appbarTitle:{flexGrow:1},drawerPaper:{width:255,backgroundColor:"#1c1c1c",color:"#ffffff"},drawer:Object(S.a)({},e.breakpoints.up("md"),{width:255,flexShrink:1}),menuButton:Object(S.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),hallHeader:{textAlign:"center"},hallContainerToelz:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #aa312b"},hallContainerFreimann:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #cb9a00"},hallContainerThalkirchen:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #7ec300"},hallContainerGilching:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #c45913"}}})),oe=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={},n.RenderNavBar=n.RenderNavBar.bind(Object(m.a)(n)),n}return Object(u.a)(t,[{key:"RenderNavBar",value:function(){var e=ce(),a=Object(ne.a)(),t=this.props,n=t.container,l=t.liveData,c=r.a.useState(!1),o=Object(j.a)(c,2),i=o[0],s=o[1],d=r.a.useState(!1),u=Object(j.a)(d,1)[0],m=r.a.useRef(null),h=r.a.useRef(u);r.a.useEffect((function(){!0===h.current&&!1===u&&m.current.focus(),h.current=u}),[u]);var f=function(){s(!i)},b=r.a.createElement("div",null,r.a.createElement(Z.a,{className:e.logoContainer},r.a.createElement(re.a,{fontSize:"large",className:e.logo})),r.a.createElement(P.a,{className:e.hallContainerFreimann},r.a.createElement(O.a,{variant:"h4",className:e.hallHeader},"Freimann"),r.a.createElement(Z.a,{className:e.statsContainer},r.a.createElement(O.a,{variant:"h5"},l.climbFreimann),r.a.createElement(O.a,{variant:"h6"},"Climb"),r.a.createElement(O.a,{variant:"h5"},l.boulderFreimann),r.a.createElement(O.a,{variant:"h6"},"Boulder"))),r.a.createElement(P.a,{className:e.hallContainerThalkirchen},r.a.createElement(O.a,{variant:"h4",className:e.hallHeader},"Thalkirchen"),r.a.createElement(Z.a,{className:e.statsContainer},r.a.createElement(O.a,{variant:"h5"},l.climbThalkirchen),r.a.createElement(O.a,{variant:"h6"},"Climb"),r.a.createElement(O.a,{variant:"h5"},l.boulderThalkirchen),r.a.createElement(O.a,{variant:"h6"},"Boulder"))),r.a.createElement(P.a,{className:e.hallContainerGilching},r.a.createElement(O.a,{variant:"h4",className:e.hallHeader},"Gilching"),r.a.createElement(Z.a,{className:e.statsContainer},r.a.createElement(O.a,{variant:"h5"},l.climbGilching),r.a.createElement(O.a,{variant:"h6"},"Climb"),r.a.createElement(O.a,{variant:"h5"},l.boulderGilching),r.a.createElement(O.a,{variant:"h6"},"Boulder"))),r.a.createElement(P.a,{className:e.hallContainerToelz},r.a.createElement(O.a,{variant:"h4",className:e.hallHeader},"T\xf6ltz"),r.a.createElement(Z.a,{className:e.statsContainer},r.a.createElement(O.a,{variant:"h5"},l.climbToelz),r.a.createElement(O.a,{variant:"h6"},"Climb"),r.a.createElement(O.a,{variant:"h5"},l.boulderToelz),r.a.createElement(O.a,{variant:"h6"},"Boulder")))),p=r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{position:"fixed",className:e.appBar},r.a.createElement(ee.a,null,r.a.createElement(ae.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:f,className:e.menuButton},r.a.createElement(le.a,null)),r.a.createElement(x.a,{mdUp:!0},r.a.createElement(O.a,{variant:"h6",className:e.appbarTitle},"Boulderstats")))),r.a.createElement("div",{style:{marginBottom:"28px"}}));return r.a.createElement("nav",{className:e.drawer},r.a.createElement(k.a,null),p,r.a.createElement(x.a,{mdUp:!0},r.a.createElement(te.a,{container:n,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:i,onClose:f,classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0}},b)),r.a.createElement(x.a,{smDown:!0},r.a.createElement(te.a,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0},b)),r.a.createElement("div",{style:{height:"30px"}}))}},{key:"render",value:function(){return r.a.createElement(this.RenderNavBar,null)}}]),t}(r.a.Component),ie=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={statisticsData:[],liveData:{boulderToelz:"loading...",climbToelz:"loading...",boulderThalkirchen:"loading...",climbThalkirchen:"loading...",boulderGilching:"loading...",climbGilching:"loading...",boulderFreimann:"loading...",climbFreimann:"loading..."}},n.RenderApp=n.RenderApp.bind(Object(m.a)(n)),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://boulderslots.ziegler.dev:3005/api/v1/slotsData");case 3:a=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return");case 10:t=a.data.data,this.setState({statisticsData:t,liveData:{boulderToelz:t[t.length-1].boulderToelz,climbToelz:t[t.length-1].climbToelz,boulderThalkirchen:t[t.length-1].boulderThalkirchen,climbThalkirchen:t[t.length-1].climbThalkirchen,boulderGilching:t[t.length-1].boulderGilching,climbGilching:t[t.length-1].climbGilching,boulderFreimann:t[t.length-1].boulderFreimann,climbFreimann:t[t.length-1].climbFreimann}});case 12:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"RenderApp",value:function(){var e=this.state,a=e.statisticsData,t=e.liveData;return r.a.createElement(C.a,{theme:v},r.a.createElement(g.a,null,r.a.createElement(k.a,null),r.a.createElement(E.a,{exact:!0,path:"/",render:function(e){return r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},e,{liveData:t})),r.a.createElement(X,Object.assign({},e,{statisticsData:a})))}})))}},{key:"render",value:function(){return r.a.createElement(this.RenderApp,null)}}]),t}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.eb7f9d98.chunk.js.map