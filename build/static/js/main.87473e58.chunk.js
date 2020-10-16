(this["webpackJsonpboulderslots-frontend"]=this["webpackJsonpboulderslots-frontend"]||[]).push([[0],{126:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),o=t(61),i=t.n(o),s=t(81),m=t(31),d=t(32),u=t(27),h=t(35),b=t(33),f=t(82),g=t.n(f),p=t(89),E=t(11),k=t(183),C=t(184),y=t(90),v=Object(y.a)({palette:{primary:{light:"#c6f24a",main:"#92bf00",dark:"#5f8f00",contrastText:"#000000"},dark:{light:"#1c1c1c",main:"#1c1c1c",dark:"#1c1c1c",backgroundColor:"#1c1c1c",contrastText:"#ffffff"}}}),T=t(189),x=t(186),D=t(177),w=t(178),S=t(129),O=t(175),j=t(49),N=t(166),B=t(169),F=t(170),R=t(171),z=t(128),G=t(172),A=t(173),P=t(187),V=t(176),H=t(185),L=t(86),I=t(164),M=t(12),Y=t(168),W=Object(I.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:300},sectionDivider:{marginBottom:e.spacing(1)},filterContainer:{padding:"12px"},margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),U=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={dayChecked:!0,nightChecked:!0,startValue:new Date("2020-10-08T12:00").toISOString().slice(0,16),endValue:new Date(Date.now()).toISOString().slice(0,16),mondayChecked:!0,tuesdayChecked:!0,wednesdayChecked:!0,thursdayChecked:!0,fridayChecked:!0,saturdayChecked:!0,sundayChecked:!0,climbslotsChecked:!0,boulderslotsChecked:!0},n.RenderSlotsChart=n.RenderSlotsChart.bind(Object(u.a)(n)),n}return Object(d.a)(t,[{key:"RenderSlotsChart",value:function(){var e=this,a=this.props,t=a.chartData,n=a.styleColor,l=this.state,c=l.dayChecked,o=l.nightChecked,i=l.startValue,s=l.endValue,m=l.mondayChecked,d=l.tuesdayChecked,u=l.wednesdayChecked,h=l.thursdayChecked,b=l.fridayChecked,f=l.saturdayChecked,g=l.sundayChecked,p=l.climbslotsChecked,E=l.boulderslotsChecked,k=W(),C=(Object(M.a)(),t);c||(C=C.filter((function(e,a){if(0===a)return!0;var t=e[0].getHours();return(t<7||t>24)&&0!==t}))),o||(C=C.filter((function(e,a){if(0===a)return!0;var t=e[0].getHours();return t>7&&t<24}))),C=C.filter((function(e,a){if(0===a)return!0;var t=e[0].getTime();return t>new Date(i).getTime()&&t<new Date(s).getTime()})),g||(C=C.filter((function(e,a){return 0===a||0!==e[0].getDay()}))),m||(C=C.filter((function(e,a){return 0===a||1!==e[0].getDay()}))),d||(C=C.filter((function(e,a){return 0===a||2!==e[0].getDay()}))),u||(C=C.filter((function(e,a){return 0===a||3!==e[0].getDay()}))),h||(C=C.filter((function(e,a){return 0===a||4!==e[0].getDay()}))),b||(C=C.filter((function(e,a){return 0===a||5!==e[0].getDay()}))),f||(C=C.filter((function(e,a){return 0===a||6!==e[0].getDay()}))),p&&E||(p||E)&&(p?E||(C=C.map((function(e){return[e[0],e[2]]}))):C=C.map((function(e){return e.slice(0,-1)})));var y=r.a.useState(null),v=Object(j.a)(y,2),T=v[0],x=v[1],D=function(e){x(null)},w=Boolean(T),I=w?"transitions-popper":void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"extended",size:"medium","aria-label":"add",className:k.margin,style:{backgroundColor:n},onClick:function(e){x(T?null:e.currentTarget)}},r.a.createElement(Y.a,{className:k.extendedIcon}),"Filter and Options"),r.a.createElement(B.a,{id:I,open:w,anchorEl:T,transition:!0,placement:"bottom-start"},(function(a){var t=a.TransitionProps;return r.a.createElement(F.a,Object.assign({},t,{timeout:250}),r.a.createElement(R.a,{onClickAway:D},r.a.createElement(z.a,{className:k.filterContainer},r.a.createElement(S.a,{variant:"h5"},"Enable Climbslots and Boulderslots"),r.a.createElement(G.a,{row:!0},r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:p,onChange:function(a){return e.setState({climbslotsChecked:a.target.checked})},name:"Climbslots",color:"primary"}),label:"Climbslots"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:E,onChange:function(a){return e.setState({boulderslotsChecked:a.target.checked})},name:"Boulderslots"}),label:"Boulderslots"})),r.a.createElement(O.a,null),r.a.createElement(S.a,{variant:"h5"},"Enable Day or Night"),r.a.createElement(G.a,{row:!0},r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:c,onChange:function(a){return e.setState({dayChecked:a.target.checked})},name:"Day",color:"primary"}),label:"Day"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:o,onChange:function(a){return e.setState({nightChecked:a.target.checked})},name:"Night"}),label:"Night"})),r.a.createElement(O.a,null),r.a.createElement(S.a,{variant:"h5",className:k.sectionDivider},"Set Start- and Endtime of the Timeseries"),r.a.createElement(V.a,{container:!0},r.a.createElement(V.a,{item:!0},r.a.createElement("form",{className:k.container,noValidate:!0},r.a.createElement(H.a,{id:"datetime_start",label:"Start Timespan",type:"datetime-local",format:"dd/MM/YYYY HH:mm",value:i,onChange:function(a){return e.setState({startValue:a.target.value})},className:k.textField,InputLabelProps:{shrink:!0}}))),r.a.createElement(V.a,{item:!0},r.a.createElement("form",{className:k.container,noValidate:!0},r.a.createElement(H.a,{id:"datetime_end",label:"End Timespan",type:"datetime-local",format:"dd/MM/YYYY HH:mm",value:s,onChange:function(a){return e.setState({endValue:a.target.value})},className:k.textField,InputLabelProps:{shrink:!0}})))),r.a.createElement(O.a,{style:{marginBottom:"8px",marginTop:"8px"}}),r.a.createElement(S.a,{variant:"h5"},"Disable or Enable Weekdays"),r.a.createElement(G.a,{row:!0},r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:m,onChange:function(a){return e.setState({mondayChecked:a.target.checked})},name:"mondayChecked",color:"primary"}),label:"Monday"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:d,onChange:function(a){return e.setState({tuesdayChecked:a.target.checked})},name:"tuesdayChecked",color:"primary"}),label:"Tuesday"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:u,onChange:function(a){return e.setState({wednesdayChecked:a.target.checked})},name:"wednesdayChecked",color:"primary"}),label:"Wednesday"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:h,onChange:function(a){return e.setState({thursdayChecked:a.target.checked})},name:"thursdayChecked",color:"primary"}),label:"Thursday"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:b,onChange:function(a){return e.setState({fridayChecked:a.target.checked})},name:"fridayChecked",color:"primary"}),label:"Friday"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:f,onChange:function(a){return e.setState({saturdayChecked:a.target.checked})},name:"saturdayChecked",color:"primary"}),label:"Saturday"}),r.a.createElement(A.a,{control:r.a.createElement(P.a,{checked:g,onChange:function(a){return e.setState({sundayChecked:a.target.checked})},name:"sundayChecked",color:"primary"}),label:"Sunday"})))))})),r.a.createElement(L.a,{chartType:"LineChart",data:C,options:{isStacked:!0,backgroundColor:"#fafafa",legend:{position:"top",maxLines:3},vAxis:{viewWindow:{min:0}},hAxis:{title:"Available Slots"},lineWidth:4,smoothLine:!1},height:"60vh",width:"100%"}))}},{key:"render",value:function(){return r.a.createElement(this.RenderSlotsChart,null)}}]),t}(r.a.Component),J=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={hallValue:0},n.RenderStatsPage=n.RenderStatsPage.bind(Object(u.a)(n)),n}return Object(d.a)(t,[{key:"RenderStatsPage",value:function(){var e=this,a=this.props.statisticsData,t=[["Date","Boulderslots","Climbslots"]],n=[["Date","Boulderslots","Climbslots"]],l=[["Date","Boulderslots","Climbslots"]],c=[["Date","Boulderslots","Climbslots"]];a.forEach((function(e){t.push([new Date(e.createdAt),e.boulderFreimann,e.climbFreimann]),n.push([new Date(e.createdAt),e.boulderThalkirchen,e.climbThalkirchen]),l.push([new Date(e.createdAt),e.boulderGilching,e.climbGilching]),c.push([new Date(e.createdAt),e.boulderToelz,e.climbToelz])}));var o=this.state.hallValue,i=function(e,a){if(console.log(e),e!==a)return"#000000";switch(e){case 0:return"#cb9a00";case 1:return"#7ec300";case 2:return"#c45913";case 3:return"#aa312b";default:return"#ffffff"}},s=r.a.createElement("div",null,r.a.createElement(T.a,{smDown:!0},r.a.createElement(x.a,{value:o,onChange:function(a,t){e.setState({hallValue:t})},TabIndicatorProps:{style:{backgroundColor:i(o,o)}},centered:!0},r.a.createElement(D.a,{label:"Freimann",style:{color:i(o,0)}}),r.a.createElement(D.a,{label:"Thalkirchen",style:{color:i(o,1)}}),r.a.createElement(D.a,{label:"Gilching",style:{color:i(o,2)}}),r.a.createElement(D.a,{label:"T\xf6lz",style:{color:i(o,3)}}))),r.a.createElement(T.a,{mdUp:!0},r.a.createElement(x.a,{value:o,onChange:function(a,t){e.setState({hallValue:t})},TabIndicatorProps:{style:{backgroundColor:i(o,o)}},variant:"scrollable",scrollButtons:"auto"},r.a.createElement(D.a,{label:"Freimann",style:{color:i(o,0)}}),r.a.createElement(D.a,{label:"Thalkirchen",style:{color:i(o,1)}}),r.a.createElement(D.a,{label:"Gilching",style:{color:i(o,2)}}),r.a.createElement(D.a,{label:"T\xf6lz",style:{color:i(o,3)}}))));return r.a.createElement(w.a,null,r.a.createElement(S.a,{variant:"h4"},"Boulder- and Climbslots for the recent days"),r.a.createElement(O.a,null),r.a.createElement("div",{style:{marginTop:"12px"}}),s,function(){switch(o){case 0:return r.a.createElement(U,{chartData:t,styleColor:i(o,o)});case 1:return r.a.createElement(U,{chartData:n,styleColor:i(o,o)});case 2:return r.a.createElement(U,{chartData:l,styleColor:i(o,o)});case 3:return r.a.createElement(U,{chartData:c,styleColor:i(o,o)});default:return r.a.createElement(r.a.Fragment,null)}}())}},{key:"render",value:function(){return r.a.createElement(this.RenderStatsPage,null)}}]),t}(r.a.Component),_=t(56),q=t(180),K=t(181),Q=t(174),X=t(190),Z=t(179),$=t(182),ee=Object(I.a)((function(e){return{appBar:Object(_.a)({marginLeft:255,backgroundColor:"#1c1c1c",color:"#ffffff"},e.breakpoints.up("md"),{width:"calc(100% - ".concat(255,"px)"),backgroundColor:"rgba(255,255,255,0)",color:"#000000",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.0)"}),logo:{width:"110px",margin:"0 auto",height:"auto","&:hover":{cursor:"pointer"}},logoContainer:{width:"150px",margin:"0 auto"},statsContainer:{marginBottom:e.spacing(1),textAlign:"center"},appbarTitle:{flexGrow:1},drawerPaper:{width:255,backgroundColor:"#1c1c1c",color:"#ffffff"},drawer:Object(_.a)({},e.breakpoints.up("md"),{width:255,flexShrink:1}),menuButton:Object(_.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),hallHeader:{textAlign:"center"},hallContainerToelz:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #aa312b"},hallContainerFreimann:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #cb9a00"},hallContainerThalkirchen:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #7ec300"},hallContainerGilching:{backgroundColor:"#1c1c1c",color:"#ffffff",borderLeft:"3px solid #c45913"}}})),ae=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={},n.RenderNavBar=n.RenderNavBar.bind(Object(u.a)(n)),n}return Object(d.a)(t,[{key:"RenderNavBar",value:function(){var e=ee(),a=Object(M.a)(),t=this.props,n=t.container,l=t.liveData,c=r.a.useState(!1),o=Object(j.a)(c,2),i=o[0],s=o[1],m=r.a.useState(!1),d=Object(j.a)(m,1)[0],u=r.a.useRef(null),h=r.a.useRef(d);r.a.useEffect((function(){!0===h.current&&!1===d&&u.current.focus(),h.current=d}),[d]);var b=function(){s(!i)},f=r.a.createElement("div",null,r.a.createElement(w.a,{className:e.logoContainer},r.a.createElement(Z.a,{fontSize:"large",className:e.logo})),r.a.createElement(z.a,{className:e.hallContainerFreimann},r.a.createElement(S.a,{variant:"h4",className:e.hallHeader},"Freimann"),r.a.createElement(w.a,{className:e.statsContainer},r.a.createElement(S.a,{variant:"h5"},l.climbFreimann),r.a.createElement(S.a,{variant:"h6"},"Climb"),r.a.createElement(S.a,{variant:"h5"},l.boulderFreimann),r.a.createElement(S.a,{variant:"h6"},"Boulder"))),r.a.createElement(z.a,{className:e.hallContainerThalkirchen},r.a.createElement(S.a,{variant:"h4",className:e.hallHeader},"Thalkirchen"),r.a.createElement(w.a,{className:e.statsContainer},r.a.createElement(S.a,{variant:"h5"},l.climbThalkirchen),r.a.createElement(S.a,{variant:"h6"},"Climb"),r.a.createElement(S.a,{variant:"h5"},l.boulderThalkirchen),r.a.createElement(S.a,{variant:"h6"},"Boulder"))),r.a.createElement(z.a,{className:e.hallContainerGilching},r.a.createElement(S.a,{variant:"h4",className:e.hallHeader},"Gilching"),r.a.createElement(w.a,{className:e.statsContainer},r.a.createElement(S.a,{variant:"h5"},l.climbGilching),r.a.createElement(S.a,{variant:"h6"},"Climb"),r.a.createElement(S.a,{variant:"h5"},l.boulderGilching),r.a.createElement(S.a,{variant:"h6"},"Boulder"))),r.a.createElement(z.a,{className:e.hallContainerToelz},r.a.createElement(S.a,{variant:"h4",className:e.hallHeader},"T\xf6ltz"),r.a.createElement(w.a,{className:e.statsContainer},r.a.createElement(S.a,{variant:"h5"},l.climbToelz),r.a.createElement(S.a,{variant:"h6"},"Climb"),r.a.createElement(S.a,{variant:"h5"},l.boulderToelz),r.a.createElement(S.a,{variant:"h6"},"Boulder")))),g=r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{position:"fixed",className:e.appBar},r.a.createElement(K.a,null,r.a.createElement(Q.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:b,className:e.menuButton},r.a.createElement($.a,null)),r.a.createElement(T.a,{mdUp:!0},r.a.createElement(S.a,{variant:"h6",className:e.appbarTitle},"Boulderstats")))),r.a.createElement("div",{style:{marginBottom:"28px"}}));return r.a.createElement("nav",{className:e.drawer},r.a.createElement(k.a,null),g,r.a.createElement(T.a,{mdUp:!0},r.a.createElement(X.a,{container:n,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:i,onClose:b,classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0}},f)),r.a.createElement(T.a,{smDown:!0},r.a.createElement(X.a,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0},f)),r.a.createElement("div",{style:{height:"30px"}}))}},{key:"render",value:function(){return r.a.createElement(this.RenderNavBar,null)}}]),t}(r.a.Component),te=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={statisticsData:[],liveData:{boulderToelz:"loading...",climbToelz:"loading...",boulderThalkirchen:"loading...",climbThalkirchen:"loading...",boulderGilching:"loading...",climbGilching:"loading...",boulderFreimann:"loading...",climbFreimann:"loading..."}},n.RenderApp=n.RenderApp.bind(Object(u.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://boulderslots.ziegler.dev:3005/api/v1/slotsData");case 3:a=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return");case 10:t=a.data.data,this.setState({statisticsData:t,liveData:{boulderToelz:t[t.length-1].boulderToelz,climbToelz:t[t.length-1].climbToelz,boulderThalkirchen:t[t.length-1].boulderThalkirchen,climbThalkirchen:t[t.length-1].climbThalkirchen,boulderGilching:t[t.length-1].boulderGilching,climbGilching:t[t.length-1].climbGilching,boulderFreimann:t[t.length-1].boulderFreimann,climbFreimann:t[t.length-1].climbFreimann}}),console.log(t);case 13:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"RenderApp",value:function(){var e=this.state,a=e.statisticsData,t=e.liveData;return r.a.createElement(C.a,{theme:v},r.a.createElement(p.a,null,r.a.createElement(k.a,null),r.a.createElement(E.a,{exact:!0,path:"/",render:function(e){return r.a.createElement("div",null,r.a.createElement(ae,Object.assign({},e,{liveData:t})),r.a.createElement(J,Object.assign({},e,{statisticsData:a})))}})))}},{key:"render",value:function(){return r.a.createElement(this.RenderApp,null)}}]),t}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root"))},99:function(e,a,t){e.exports=t(126)}},[[99,1,2]]]);
//# sourceMappingURL=main.87473e58.chunk.js.map